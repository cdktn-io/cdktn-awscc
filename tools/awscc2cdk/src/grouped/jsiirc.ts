/**
 * `.jsiirc.json` target block for one aws-cdk-lib-spelled submodule (plan §10, CONTRACT.md
 * "Iteration 3 — `.jsiirc.json` goes through `modulePartsFromNamespace`"). No `go` key — Go
 * submodule naming is left to jsii-pacmak's defaults from the root `jsii.targets.go.moduleName`
 * (plan §10, iteration-2 decision).
 *
 * Iteration-2 derived the dotnet/java segment from `scopes[0].namespace.split('::')[1]`, which is
 * wrong for every non-`AWS` family (`Alexa::ASK` -> `'ASK'`, fine by luck, but `AWS::Serverless`
 * never became `SAM`) and can't apply a `targets` override correctly. This rewrite goes through the
 * same computation spec2cdk's `namespaceToModuleDefinition()` performs
 * (`src/vendored/spec2cdk/util/jsii.ts`, built on `modulePartsFromNamespace` from
 * `src/vendored/spec2cdk/naming/conventions.ts` — copied verbatim; loadable at runtime because
 * `@cdklabs/typewriter`, the one value-import dependency that file's *other* functions need, is now
 * a devDependency, see VENDORED.md) with the plan §10 roots.
 */
import scopeMapJson from "../vendored/scope-map.json";
import { modulePartsFromNamespace } from "../vendored/spec2cdk/naming/conventions";

export interface JsiircTargets {
  readonly targets: {
    readonly python: { readonly module: string };
    readonly dotnet: { readonly namespace: string };
    readonly java: { readonly package: string };
  };
}

export interface ModuleParts {
  /** the scope-map key, e.g. 'aws-ec2' / 'core' */
  readonly moduleDir: string;
  /** moduleDir with '-' -> '_' */
  readonly submoduleName: string;
  /** scopes[0].namespace, verbatim (e.g. 'AWS::Serverless', not the 'AWS::SAM' spec2cdk derives
   * moduleFamily/moduleBaseName from internally) */
  readonly primaryNamespace: string;
  /** 'AWS' | 'Alexa' | … */
  readonly moduleFamily: string;
  /** 'EC2' | 'ASK' | 'SAM' | … */
  readonly moduleBaseName: string;
}

interface ScopeMapEntry {
  readonly scopes?: { readonly namespace: string }[];
  // `Record<string, unknown>` here (not a narrower `{dotnet?: …; java?: …}` shape) so this type
  // also accepts `../scope-map.ts`'s `ScopeMapFile` (its `ModuleEntry.targets` has the same wide
  // type) — `effectiveScopeMap()`'s result passes straight in, no cast needed at the call site.
  readonly targets?: Record<string, any>;
}

type ScopeMapFile = Record<string, ScopeMapEntry>;

/**
 * undefined when the module has no namespace at all (the scope map's `interfaces` entry).
 *
 * `scopeMap` defaults to the vendored map. Iteration 3b, finding 4: an auto-extended module (one
 * `effectiveScopeMap` invented for a namespace the vendored map does not list) has no entry in the
 * vendored map at all, so it fell through to the directory-name fallback below
 * (`Io.Cdktn.AwsCc.Cloudhsm` instead of `.CloudHSM`). Passing the *effective* map here gives it a
 * real `primaryNamespace` to derive from, same as any vendored module.
 */
export function modulePartsForModule(moduleDir: string, scopeMap: ScopeMapFile = scopeMapJson as ScopeMapFile): ModuleParts | undefined {
  const primaryNamespace = scopeMap[moduleDir]?.scopes?.[0]?.namespace;
  if (!primaryNamespace) return undefined;
  const { moduleFamily, moduleBaseName } = modulePartsFromNamespace(primaryNamespace);
  return {
    moduleDir,
    submoduleName: moduleDir.replace(/-/g, "_"),
    primaryNamespace,
    moduleFamily,
    moduleBaseName,
  };
}

/** `Amazon.CDK.AWS.` / `Amazon.CDK.` -> `Io.Cdktn.AwsCc.`, longest match first. */
function swapDotnetRoot(namespace: string): string {
  if (namespace.startsWith("Amazon.CDK.AWS.")) return `Io.Cdktn.AwsCc.${namespace.slice("Amazon.CDK.AWS.".length)}`;
  if (namespace.startsWith("Amazon.CDK.")) return `Io.Cdktn.AwsCc.${namespace.slice("Amazon.CDK.".length)}`;
  return namespace;
}

/** `software.amazon.awscdk.` -> `io.cdktn.awscc.`. */
function swapJavaRoot(pkg: string): string {
  const prefix = "software.amazon.awscdk.";
  return pkg.startsWith(prefix) ? `io.cdktn.awscc.${pkg.slice(prefix.length)}` : pkg;
}

/** aws-cdk-lib mirrors: `Amazon.CDK.AWS.EC2` (family dropped only for `AWS`) — plan §10 drops the
 * family segment for us too, so `Io.Cdktn.AwsCc.EC2`, not `Io.Cdktn.AwsCc.AWS.EC2`. */
function deriveDotnet(parts: ModuleParts): string {
  return parts.moduleFamily === "AWS"
    ? `Io.Cdktn.AwsCc.${parts.moduleBaseName}`
    : `Io.Cdktn.AwsCc.${parts.moduleFamily}.${parts.moduleBaseName}`;
}

/** exactly `namespaceToModuleDefinition`'s `javaPackage`, with our root. */
function deriveJava(parts: ModuleParts): string {
  const lower = parts.moduleBaseName.toLowerCase();
  return parts.moduleFamily === "AWS"
    ? `io.cdktn.awscc.services.${lower}`
    : `io.cdktn.awscc.${parts.moduleFamily.toLowerCase()}.${lower}`;
}

/** PascalCase a kebab-case module-directory fragment (`'foo-bar'` -> `'FooBar'`) — only used for
 * the no-namespace fallback, where there is no CFN family/service to derive from. */
function pascalCaseDir(s: string): string {
  return s
    .split(/-+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

/** `scopeMap` defaults to the vendored map — see `modulePartsForModule`. */
export function jsiircFor(moduleDir: string, scopeMap: ScopeMapFile = scopeMapJson as ScopeMapFile): JsiircTargets {
  const symbol = moduleDir.replace(/-/g, "_");
  const entry = scopeMap[moduleDir];
  const parts = modulePartsForModule(moduleDir, scopeMap);

  let dotnet: string;
  let java: string;
  if (parts) {
    dotnet = deriveDotnet(parts);
    java = deriveJava(parts);
  } else {
    // No namespace at all (the scope map's `interfaces` entry): fall back to the directory.
    const withoutPrefix = moduleDir.replace(/^aws-/, "");
    dotnet = `Io.Cdktn.AwsCc.${pascalCaseDir(withoutPrefix)}`;
    java = `io.cdktn.awscc.services.${withoutPrefix.toLowerCase()}`;
  }

  // A scope-map `targets` override wins, with its aws-cdk-lib root swapped for ours.
  const dotnetOverride = entry?.targets?.dotnet?.namespace;
  const javaOverride = entry?.targets?.java?.package;
  if (dotnetOverride !== undefined) dotnet = swapDotnetRoot(dotnetOverride);
  if (javaOverride !== undefined) java = swapJavaRoot(javaOverride);

  return {
    targets: {
      // python always follows the directory we emit, never the namespace: `core` is
      // `cdktn_awscc.core`, not `…aws_cloudformation`.
      python: { module: `cdktn_awscc.${symbol}` },
      dotnet: { namespace: dotnet },
      java: { package: java },
    },
  };
}
