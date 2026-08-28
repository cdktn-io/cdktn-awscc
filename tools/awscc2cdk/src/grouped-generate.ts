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
import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker } from "codemaker";
import type { SpecDatabase } from "@aws-cdk/service-spec-types";
import type { ProviderSchema, Schema } from "@cdktn/commons";
import type { FQPN } from "@cdktn/provider-schema";
import { cfnTypeFor } from "./cfn-map";
import * as naming from "./naming";
import { parseResourceAttributes } from "./grouped/resource-parser";
import { resolveDefinitionName } from "./grouped/cfn-recovery";
import { jsiircFor } from "./grouped/jsiirc";
import { ResourceModel, Struct } from "./grouped/models";
import { ResourceEmitter } from "./grouped/emitter/resource-emitter";
import { StructEmitter } from "./grouped/emitter/struct-emitter";
import { withQualifier, withResourcePrefix } from "./grouped/namespace-context";

const DEFAULT_FQPN = "registry.terraform.io/hashicorp/awscc";

export interface GenerateGroupedOptions {
  readonly fqpn?: string;
  readonly modules?: string[];
  readonly resources?: string[];
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
  readonly cfnType: string;
  readonly moduleDir: string;
  readonly moduleSymbol: string;
  readonly suffix?: string;
  readonly cfnResourceName: string;
}

const cmp = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0);

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
    if (!cfnType) continue;
    const moduleName = naming.moduleNameFor(cfnType);
    if (!moduleName) continue;
    if (options?.modules && !options.modules.includes(moduleName.dir)) continue;
    const cfnResourceName = cfnType.split("::").pop() as string;
    planned.push({
      awsccName,
      cfnType,
      moduleDir: moduleName.dir,
      moduleSymbol: moduleName.symbol,
      suffix: moduleName.suffix,
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

/**
 * CFN can reuse one `TypeDefinition` at more than one property path (the same shared type used by
 * two different attributes, possibly nested completely differently at each — one a single embedded
 * object, the other a list of them). Our per-occurrence struct parser (`resource-parser.ts`) gives
 * each occurrence its own struct — correctly, since each occurrence needs its own nesting shape
 * (constructor signature, wrapper classes) — but that means two structs can recover the *same* CFN
 * definition name. `naming.ts#propertyTypeNamesForResource` (correctly, per its own contract) does
 * NOT collapse two entries that both carry a definition name into one, so left alone this produces
 * two `*Property` declarations that collide down to a `*Property2`, breaking the naming grammar
 * (`NAME_GRAMMAR.propertyInterface` etc. all end the pattern at `Property`, no trailing digit).
 *
 * The fix is at the naming layer, not the struct model: only the lexicographically-first occurrence
 * (by path) keeps its recovered definition name; every other occurrence's definition name is
 * cleared here so it falls back to `naming.ts`'s ordinary path-based fallback name instead, which
 * — since the two paths are different — cannot collide with the first occurrence's name. Each
 * struct stays its own distinct object with its own correct nesting shape; only the *name* of the
 * later occurrences changes, and only when this specific collision would otherwise occur.
 */
function dedupeDefinitionNames(
  structs: readonly Struct[],
  definitionNames: ReadonlyMap<Struct, string | undefined>,
): Map<Struct, string | undefined> {
  const claimed = new Set<string>();
  const result = new Map<Struct, string | undefined>();
  for (const s of [...structs].sort((a, b) => cmp(a.path.join("."), b.path.join(".")))) {
    const def = definitionNames.get(s);
    if (def !== undefined && !claimed.has(def)) {
      claimed.add(def);
      result.set(s, def);
    } else {
      result.set(s, undefined);
    }
  }
  return result;
}

function emitResourceFile(
  schemaJson: ProviderSchema,
  fqpn: string,
  db: SpecDatabase,
  planned: PlannedResource,
  moduleAbsDir: string,
  providerVersion: string | undefined,
): EmittedResource {
  const resourceSchema = (schemaJson as any).provider_schemas[fqpn].resource_schemas[planned.awsccName] as Schema;

  const parsed = parseResourceAttributes(resourceSchema);
  const structs = parsed.structs;

  const rawDefinitionNames = new Map<Struct, string | undefined>(
    structs.map((s) => [s, resolveDefinitionName(db, planned.cfnType, s.path)] as const),
  );
  const definitionNames = dedupeDefinitionNames(structs, rawDefinitionNames);

  const entries = structs.map((s) => ({ path: s.path, definitionName: definitionNames.get(s) }));
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
  const fileBase = naming.fileNameFor(className);

  const resourceModel = new ResourceModel({
    terraformType: planned.awsccName,
    className,
    configStructName,
    attributes: parsed.attributes,
    structs,
    fqpn: fqpn as FQPN,
    schema: resourceSchema,
    providerVersion,
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
      const emitted = emitResourceFile(schemaJson, fqpn, db, p, moduleAbsDir, providerVersion);
      files.push(`${moduleDir}/${emitted.fileBase}.ts`);
      indexLines.push(`export * from './${emitted.fileBase}';`);
      nestedTypes += emitted.nestedTypes;
      recovered += emitted.recovered;
      fallback += emitted.nestedTypes - emitted.recovered;
      byResource[p.awsccName] = { total: emitted.nestedTypes, recovered: emitted.recovered };
    }
    indexLines.sort(); // export order tracks the (already sorted) resource list; kept explicit
    fs.writeFileSync(path.join(moduleAbsDir, "index.ts"), `${indexLines.join("\n")}\n`);
    files.push(`${moduleDir}/index.ts`);

    fs.writeFileSync(path.join(moduleAbsDir, ".jsiirc.json"), `${JSON.stringify(jsiircFor(moduleDir), null, 2)}\n`);
    files.push(`${moduleDir}/.jsiirc.json`);

    rootLines.push(`export * as ${moduleDir.replace(/-/g, "_")} from './${moduleDir}';`);
  }

  if (moduleDirs.length > 0) {
    fs.writeFileSync(path.join(outDir, "index.ts"), `${rootLines.join("\n")}\n`);
    files.push("index.ts");
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
