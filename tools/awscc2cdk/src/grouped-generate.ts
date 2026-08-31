/**
 * Grouped emission — plan §1/§3/§5 step 4: aws-cdk-lib-shaped bindings (`Cc*` classes, `*Props`
 * interfaces, per-module directories with a merged `namespace` per resource) instead of the
 * vendored cdk-terrain generator's flat, per-resource-directory output (`src/legacy-generate.ts`,
 * unchanged from iteration 1). See CONTRACT.md "Iteration 2 — public API" for the exact contract.
 *
 * Orchestrates (per included resource): `src/grouped/resource-parser.ts` (terraform schema ->
 * attributes + temporarily-named structs, each carrying its terraform attribute path),
 * `src/grouped/cfn-recovery.ts` (path -> CFN `TypeDefinition` name, when the service-spec has one),
 * `src/naming.ts` (final Cc-prefixed / recovered-or-fallback names, deterministic and
 * order-independent), and `src/grouped/emitter/*` (the actual TypeScript text, split into a
 * namespace-body region and a top-level region — see `src/grouped/namespace-context.ts`).
 */
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker, toPascalCase } from "codemaker";
import type { SpecDatabase } from "@aws-cdk/service-spec-types";
import type { ProviderSchema, Schema } from "@cdktn/commons";
import type { FQPN } from "@cdktn/provider-schema";
import { cfnTypeFor } from "./cfn-map";
import * as naming from "./naming";
import { parseResourceAttributes } from "./grouped/resource-parser";
import { resolveDefinitionName } from "./grouped/cfn-recovery";
import { buildResourceCfnPropertyMap } from "./grouped/cfn-property-map";
import { jsiircFor } from "./grouped/jsiirc";
import { effectiveScopeMap } from "./scope-map";
import { ResourceModel } from "./grouped/models";
import { ResourceEmitter } from "./grouped/emitter/resource-emitter";
import { StructEmitter } from "./grouped/emitter/struct-emitter";
import { withQualifier, withResourcePrefix } from "./grouped/namespace-context";

const DEFAULT_FQPN = "registry.terraform.io/hashicorp/awscc";

/**
 * Licence header stamped on every `.ts` file this module writes to `generated/` (resource files
 * and index.ts barrels). `generated/` content is newly-authored output of this package's own
 * (adapted, not copied) generator run over public schema data — not a copy of any upstream
 * source text — so it is attributed to cdktn-io under this package's own root license, not to
 * HashiCorp/IBM (cdk-terrain's own emitter, `src/vendored/cdktn/provider-generator.ts`, emits no
 * copyright line at all; the "Copyright IBM Corp." header on cdktn-provider-awscc's generated
 * output is stamped by that repo's separate `copywrite` build step, not by the generator itself).
 * See NOTICE, "`generated/` — the 1,494 emitted resource bindings", for the full reasoning.
 */
const GENERATED_LICENSE_HEADER = [`// Copyright (c) cdktn-io`, `// SPDX-License-Identifier: MPL-2.0`];

export interface GenerateGroupedOptions {
  readonly fqpn?: string;
  readonly modules?: string[];
  readonly resources?: string[];
  /**
   * Write the whole-tree artifacts: `MANIFEST.sha256`, `scope-map.effective.json`,
   * `package.exports.json` (CONTRACT.md "Iteration 3 — full emission"). Default `false`, so a
   * filtered run (mini fixture, single module) emits exactly what it did before iteration 3.
   */
  readonly manifest?: boolean;
  /**
   * cdktn-planning#1: emit a per-resource, jsii-visible `CFN_PROPERTY_NAME_MAP` static (CFN
   * PascalCase property name -> terraform snake_case attribute name), for a Phase-2 bridge's
   * `TerraformIntrinsicResolver` — see `src/grouped/cfn-property-map.ts`. Default `false`/absent,
   * so the committed `generated/` tree and every baseline stay byte-identical until this is
   * deliberately turned on.
   */
  readonly emitCfnPropertyMap?: boolean;
}

export interface GenerationStats {
  readonly modules: string[];
  readonly resources: number;
  readonly nestedTypes: number;
  readonly recovered: number;
  readonly fallback: number;
  readonly byResource: Record<string, { readonly total: number; readonly recovered: number }>;
}

export interface GenerateGroupedResult {
  readonly files: string[];
  readonly stats: GenerationStats;
}

interface PlannedResource {
  readonly awsccName: string;
  /** "" when the resource is unmatched in the pinned CFN spec (see `fallbackPlan` below) — never
   * looked up in the spec database, only used to key CFN-recovery attempts (which correctly find
   * nothing for an empty type). */
  readonly cfnType: string;
  readonly moduleDir: string;
  readonly moduleSymbol: string;
  readonly suffix?: string;
  readonly cfnResourceName: string;
}

const cmp = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Plan §2 step 4's fallback, made explicit (CONTRACT.md "Iteration 3 — full emission"): an awscc
 * resource the pinned CFN spec does not know is *emitted*, never skipped, under a name derived from
 * the awscc resource name alone — module `aws-<awscc service token>`, class `Cc` + PascalCase of
 * the awscc name minus the service token. This keeps package contents independent of how far the
 * pinned spec lags. `undefined` only for a malformed awscc resource name (no `awscc_<svc>_<rest>`
 * shape) — not observed in practice.
 */
function fallbackPlan(awsccName: string): { readonly moduleDir: string; readonly cfnResourceName: string } | undefined {
  const PREFIX = "awscc_";
  if (!awsccName.startsWith(PREFIX)) return undefined;
  const body = awsccName.slice(PREFIX.length);
  const idx = body.indexOf("_");
  if (idx < 0) return undefined;
  const service = body.slice(0, idx);
  const rest = body.slice(idx + 1);
  return { moduleDir: `aws-${service}`, cfnResourceName: toPascalCase(rest) };
}

/** Plans which awscc resources to emit, grouped by module — pure, order-independent (sorted by
 * awscc resource name up front, so the result never depends on `resource_schemas` key order). */
function planResources(
  schemaJson: ProviderSchema,
  db: SpecDatabase,
  fqpn: string,
  options?: GenerateGroupedOptions,
): PlannedResource[] {
  const resourceSchemas = (schemaJson as any).provider_schemas?.[fqpn]?.resource_schemas ?? {};
  const allNames = Object.keys(resourceSchemas).sort(cmp);

  const planned: PlannedResource[] = [];
  for (const awsccName of allNames) {
    if (options?.resources && !options.resources.includes(awsccName)) continue;
    const cfnType = cfnTypeFor(awsccName, db);

    let moduleDir: string;
    let suffix: string | undefined;
    let cfnResourceName: string;
    let effectiveCfnType: string;

    if (cfnType) {
      // `moduleForCfnType` (via `moduleNameFor`) auto-extends for any well-formed CFN type
      // (src/scope-map.ts), so this never actually returns undefined for a matched resource.
      const moduleName = naming.moduleNameFor(cfnType);
      if (!moduleName) continue;
      moduleDir = moduleName.dir;
      suffix = moduleName.suffix;
      cfnResourceName = cfnType.split("::").pop() as string;
      effectiveCfnType = cfnType;
    } else {
      const fallback = fallbackPlan(awsccName);
      if (!fallback) continue;
      moduleDir = fallback.moduleDir;
      suffix = undefined;
      cfnResourceName = fallback.cfnResourceName;
      effectiveCfnType = "";
    }

    if (options?.modules && !options.modules.includes(moduleDir)) continue;
    planned.push({
      awsccName,
      cfnType: effectiveCfnType,
      moduleDir,
      moduleSymbol: moduleDir.replace(/-/g, "_"),
      suffix,
      cfnResourceName,
    });
  }
  return planned;
}

/** Renders one virtual file of a `CodeMaker` to a string, without touching disk — `CodeMaker`
 * only exposes `save(dir)` (writes real files), so this reaches into the (undocumented but
 * stable-for-our-pnpm-lock-pinned-version) in-memory `FileBuffer` it already built. */
function renderVirtualFile(code: CodeMaker, filePath: string): string {
  const files: { filePath: string; buffer: string }[] = (code as unknown as { files: { filePath: string; buffer: string }[] }).files;
  const found = files.find((f) => f.filePath === filePath);
  if (!found) throw new Error(`renderVirtualFile: ${filePath} was never opened+closed on this CodeMaker`);
  return found.buffer;
}

interface EmittedResource {
  readonly fileBase: string;
  readonly className: string;
  readonly nestedTypes: number;
  readonly recovered: number;
}

function emitResourceFile(
  schemaJson: ProviderSchema,
  fqpn: string,
  db: SpecDatabase,
  planned: PlannedResource,
  moduleAbsDir: string,
  providerVersion: string | undefined,
  emitCfnPropertyMap: boolean,
): EmittedResource {
  const resourceSchema = (schemaJson as any).provider_schemas[fqpn].resource_schemas[planned.awsccName] as Schema;

  const parsed = parseResourceAttributes(resourceSchema);
  const structs = parsed.structs;

  // `naming.dedupeDefinitionNames` keeps at most one occurrence of each recovered CFN definition
  // name (CFN reuses one `TypeDefinition` at several property paths; our per-occurrence structs
  // each recover it), so `propertyTypeNamesForResource` never has to break that tie with a
  // grammar-breaking `'2'` suffix. See its own doc comment for which occurrence survives.
  const rawEntries = structs.map((s) => ({
    path: s.path,
    definitionName: resolveDefinitionName(db, planned.cfnType, s.path),
  }));
  const entries = naming.dedupeDefinitionNames(rawEntries);
  const nameMap = naming.propertyTypeNamesForResource(entries);
  let recovered = 0;
  for (const e of entries) {
    if (e.definitionName !== undefined) recovered++;
  }
  for (const s of structs) {
    const finalName = nameMap[s.path.join(".")];
    if (finalName === undefined) {
      throw new Error(`grouped-generate: no name resolved for struct at path [${s.path.join(", ")}] in ${planned.awsccName}`);
    }
    s.name = finalName;
  }

  const className = naming.className(planned.cfnResourceName, planned.suffix);
  const configStructName = naming.propsName(planned.cfnResourceName, planned.suffix);
  // `naming.fileNameFor` is a pure class-name -> file-name mapper; it has no reason to know that
  // `index.ts` is reserved for the module barrel this file is about to be emitted alongside. Four
  // resources across awscc 1.98.0 kebab-case to exactly `index` (`AWS::Kendra::Index`,
  // `AWS::QBusiness::Index`, `AWS::ResourceExplorer2::Index`, `AWS::S3Vectors::Index` — every CFN
  // service's own `*Index` resource), so the disambiguation belongs here, at the one call site that
  // knows about the barrel.
  const kebabName = naming.fileNameFor(className);
  const fileBase = kebabName === "index" ? "index-resource" : kebabName;

  const cfnPropertyMap = emitCfnPropertyMap
    ? buildResourceCfnPropertyMap(db, planned.cfnType, parsed.attributes, structs)
    : undefined;

  const resourceModel = new ResourceModel({
    terraformType: planned.awsccName,
    className,
    configStructName,
    attributes: parsed.attributes,
    structs,
    fqpn: fqpn as FQPN,
    schema: resourceSchema,
    providerVersion,
    cfnPropertyMap,
  });

  const code = new CodeMaker();
  const nsFile = "namespace-body.ts";
  const topFile = "top-level.ts";
  const structEmitter = new StructEmitter(code);

  withResourcePrefix(className, () => {
    // Namespace body: every nested struct's interface + OutputReference/List/Map classes. All
    // type references here are to *sibling* namespace members, so no qualification (namespace-
    // context cleared) — but mapper function *names* (attribute-type-model.ts's
    // `toTerraformFunction`/`toHclTerraformFunction`) are always resource-prefixed regardless of
    // region, so `withResourcePrefix` wraps both this and the top-level region below.
    code.openFile(nsFile);
    withQualifier(undefined, () => {
      for (const struct of resourceModel.structs) {
        structEmitter.emitStructInterface(resourceModel, struct);
        structEmitter.emitStructClass(struct);
      }
    });
    code.closeFile(nsFile);

    // Top level: the Props interface, the resource class, and the nested-struct mapper functions.
    // Both the Props interface and the resource class reference nested-struct types from *outside*
    // their namespace, so those two need `className.` qualification (namespace-context set); the
    // mapper functions qualify their own signature line directly (see emitStructMappers).
    code.openFile(topFile);
    withQualifier(className, () => {
      structEmitter.emitStructInterface(resourceModel, resourceModel.configStruct);
      new ResourceEmitter(code).emit(resourceModel);
    });
    for (const struct of resourceModel.structs) {
      structEmitter.emitStructMappers(struct, className);
    }
    code.closeFile(topFile);
  });

  const namespaceBody = renderVirtualFile(code, nsFile);
  const topLevel = renderVirtualFile(code, topFile);

  const header = [
    ...GENERATED_LICENSE_HEADER,
    `// generated from terraform resource schema (awscc provider) — do not edit by hand`,
    `// https://registry.terraform.io/providers/hashicorp/awscc/${providerVersion ?? "latest"}/docs/resources/${planned.awsccName.replace(/^awscc_/, "")}`,
    ``,
    `import { Construct } from 'constructs';`,
    `import * as cdktn from 'cdktn';`,
    ``,
  ].join("\n");

  const fileText = `${header}${topLevel}\nexport namespace ${className} {\n${namespaceBody}}\n`;

  fs.writeFileSync(path.join(moduleAbsDir, `${fileBase}.ts`), fileText);

  return { fileBase, className, nestedTypes: structs.length, recovered };
}

export async function generateGroupedWithStats(
  schemaJson: ProviderSchema,
  db: SpecDatabase,
  outDir: string,
  options?: GenerateGroupedOptions,
): Promise<GenerateGroupedResult> {
  const fqpn = options?.fqpn ?? DEFAULT_FQPN;
  const providerVersion: string | undefined = (schemaJson as any).provider_versions?.[fqpn];
  const planned = planResources(schemaJson, db, fqpn, options);

  const byModule = new Map<string, PlannedResource[]>();
  for (const p of planned) {
    const list = byModule.get(p.moduleDir);
    if (list) list.push(p);
    else byModule.set(p.moduleDir, [p]);
  }

  fs.mkdirSync(outDir, { recursive: true });

  // Iteration 3b, finding 4: `.jsiirc.json` must be derived from the *effective* (auto-extended)
  // scope map, not just the vendored one, or an auto-extended module has no namespace to derive
  // its dotnet/java targets from and falls through to `jsiircFor`'s directory-name fallback.
  // Computed once, up front, from every planned resource's CFN type — the same input
  // `scope-map.effective.json` below is built from.
  const matchedCfnTypesForJsiirc = planned.map((p) => p.cfnType).filter((t) => t.length > 0);
  const effectiveScopeMapForJsiirc = effectiveScopeMap(matchedCfnTypesForJsiirc);

  const files: string[] = [];
  const moduleDirs = [...byModule.keys()].sort(cmp);
  let nestedTypes = 0;
  let recovered = 0;
  let fallback = 0;
  const byResource: Record<string, { total: number; recovered: number }> = {};

  const rootLines: string[] = [];
  for (const moduleDir of moduleDirs) {
    const resourcesInModule = [...(byModule.get(moduleDir) ?? [])].sort((a, b) => cmp(a.awsccName, b.awsccName));
    const moduleAbsDir = path.join(outDir, moduleDir);
    fs.mkdirSync(moduleAbsDir, { recursive: true });

    const indexLines: string[] = [];
    for (const p of resourcesInModule) {
      const emitted = emitResourceFile(schemaJson, fqpn, db, p, moduleAbsDir, providerVersion, !!options?.emitCfnPropertyMap);
      files.push(`${moduleDir}/${emitted.fileBase}.ts`);
      indexLines.push(`export * from './${emitted.fileBase}';`);
      nestedTypes += emitted.nestedTypes;
      recovered += emitted.recovered;
      fallback += emitted.nestedTypes - emitted.recovered;
      byResource[p.awsccName] = { total: emitted.nestedTypes, recovered: emitted.recovered };
    }
    indexLines.sort(); // export order tracks the (already sorted) resource list; kept explicit
    fs.writeFileSync(
      path.join(moduleAbsDir, "index.ts"),
      `${GENERATED_LICENSE_HEADER.join("\n")}\n${indexLines.join("\n")}\n`,
    );
    files.push(`${moduleDir}/index.ts`);

    fs.writeFileSync(
      path.join(moduleAbsDir, ".jsiirc.json"),
      `${JSON.stringify(jsiircFor(moduleDir, effectiveScopeMapForJsiirc), null, 2)}\n`,
    );
    files.push(`${moduleDir}/.jsiirc.json`);

    rootLines.push(`export * as ${moduleDir.replace(/-/g, "_")} from './${moduleDir}';`);
  }

  if (moduleDirs.length > 0) {
    fs.writeFileSync(
      path.join(outDir, "index.ts"),
      `${GENERATED_LICENSE_HEADER.join("\n")}\n${rootLines.join("\n")}\n`,
    );
    files.push("index.ts");
  }

  if (options?.manifest) {
    // Whole-tree artifacts (CONTRACT.md "Iteration 3 — full emission"): gated behind `manifest` so
    // a filtered run (mini fixture, single module) emits exactly what it did before iteration 3.
    // Same effective map already used for `.jsiirc.json` above (finding 4) — computed once.
    fs.writeFileSync(
      path.join(outDir, "scope-map.effective.json"),
      `${JSON.stringify(effectiveScopeMapForJsiirc, null, 2)}\n`,
    );
    files.push("scope-map.effective.json");

    // Iteration 3b, finding 3: the published package.json lives one level *above* `outDir`
    // (`generated/`), with `main: "generated/index.js"`. Node drops `main` the moment `exports`
    // exists, so every target here must be resolvable from that package root, not from `outDir`
    // itself — hence the `./generated/` prefix on every path (CONTRACT.md "Iteration 3b, finding
    // 3"). The staging model keeps the repo layout: `generated/` is not flattened at publish time.
    const exportsMap: Record<string, unknown> = {
      ".": { types: "./generated/index.d.ts", default: "./generated/index.js" },
    };
    for (const moduleDir of moduleDirs) {
      exportsMap[`./${moduleDir}`] = {
        types: `./generated/${moduleDir}/index.d.ts`,
        default: `./generated/${moduleDir}/index.js`,
      };
    }
    fs.writeFileSync(path.join(outDir, "package.exports.json"), `${JSON.stringify(exportsMap, null, 2)}\n`);
    files.push("package.exports.json");

    // MANIFEST.sha256 covers everything written so far, sorted by path, itself excluded.
    const manifestLines = [...files].sort(cmp).map((rel) => {
      const hash = crypto.createHash("sha256").update(fs.readFileSync(path.join(outDir, rel))).digest("hex");
      return `${hash}  ${rel}`;
    });
    fs.writeFileSync(path.join(outDir, "MANIFEST.sha256"), `${manifestLines.join("\n")}\n`);
    files.push("MANIFEST.sha256");
  }

  files.sort(cmp);
  const stats: GenerationStats = { modules: moduleDirs, resources: planned.length, nestedTypes, recovered, fallback, byResource };
  return { files, stats };
}

/** Emitted paths relative to outDir, POSIX separators, sorted; identical for identical input. */
export async function generateGrouped(
  schemaJson: ProviderSchema,
  db: SpecDatabase,
  outDir: string,
  options?: GenerateGroupedOptions,
): Promise<string[]> {
  return (await generateGroupedWithStats(schemaJson, db, outDir, options)).files;
}
