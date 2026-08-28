/**
 * CFN type -> aws-cdk-lib submodule, backed by the vendored `scope-map.json`
 * (`src/vendored/scope-map.json`, copied from `packages/aws-cdk-lib/scripts/scope-map.json`).
 *
 * Every `scopes[].namespace` entry in that file is exactly two `::`-separated segments
 * (`AWS::Service`, e.g. `AWS::EC2`) — verified against the vendored copy — so matching a CFN type
 * like `AWS::EC2::VPC` only needs its first two segments. See plan §2, §3 and CONTRACT.md.
 */
import scopeMapJson from "./vendored/scope-map.json";
import { modulePartsFromNamespace } from "./vendored/spec2cdk/naming/conventions";

/**
 * `src/vendored/spec2cdk/naming/conventions.ts` is copied verbatim (plan §2) but its runtime
 * `require`s a real value, `ClassType`, from `@cdklabs/typewriter` (only used by an unrelated
 * function, `structNameFromTypeDefinition`, that this file never calls) — so loading the module at
 * all needs that package installed as a devDependency (added in iteration 3; see VENDORED.md /
 * package.json). `modulePartsFromNamespace` itself has no dependency on it.
 */

export const SCOPE_MAP_COMMIT = "6808bb7e04d64a903a73ad56a7879c75019a5908";

export interface ScopeMapHit {
  readonly module: string;
  readonly suffix?: string;
}

interface ScopeEntry {
  readonly namespace: string;
  readonly suffix?: string;
  readonly deprecated?: string;
}

interface ModuleEntry {
  readonly scopes: ScopeEntry[];
  readonly targets?: Record<string, unknown>;
  /** iteration 3: set on an entry `effectiveScopeMap` invented for a namespace the vendored map
   * does not list (CONTRACT.md "Iteration 3 — scope map", spec2cdk `generateAll()`'s auto-extend
   * rule). Never present on a vendored entry. */
  readonly autoExtended?: boolean;
}

export type ScopeMapFile = Record<string, ModuleEntry>;

/** namespace ("AWS::EC2") -> every {module, suffix} that claims it, built once at module load. */
function buildNamespaceIndex(raw: ScopeMapFile): Map<string, ScopeMapHit[]> {
  const index = new Map<string, ScopeMapHit[]>();
  for (const [module, entry] of Object.entries(raw)) {
    for (const scope of entry.scopes ?? []) {
      const hit: ScopeMapHit = scope.suffix
        ? { module, suffix: scope.suffix }
        : { module };
      const hits = index.get(scope.namespace);
      if (hits) {
        hits.push(hit);
      } else {
        index.set(scope.namespace, [hit]);
      }
    }
  }
  return index;
}

const NAMESPACE_INDEX = buildNamespaceIndex(scopeMapJson as ScopeMapFile);

function namespaceOf(cfnType: string): string {
  return cfnType.split("::").slice(0, 2).join("::");
}

/**
 * Resolves a CFN type (`AWS::EC2::VPC`) to its aws-cdk-lib submodule.
 *
 * A namespace claimed by more than one module (e.g. `AWS::KinesisAnalyticsV2`, claimed by both
 * `aws-kinesisanalytics` with `suffix: 'V2'` and `aws-kinesisanalyticsv2`) resolves deterministically
 * to the module that sorts first in ascending `localeCompare` order.
 *
 * When the namespace is not in the vendored map at all, auto-extends (spec2cdk `generateAll()`'s
 * rule, plan §2): the module is `modulePartsFromNamespace(namespace).moduleName`, with no suffix.
 * So this only returns `undefined` for a malformed `cfnType` (fewer than two `::`-separated
 * segments) — every well-formed `Family::Service::Resource` resolves to *some* module.
 */
export function moduleForCfnType(cfnType: string): ScopeMapHit | undefined {
  const namespace = namespaceOf(cfnType);
  if (namespace.split("::").length < 2) return undefined;
  const hits = NAMESPACE_INDEX.get(namespace);
  if (hits && hits.length > 0) {
    return hits.length === 1 ? hits[0] : [...hits].sort((a, b) => a.module.localeCompare(b.module))[0];
  }
  return { module: modulePartsFromNamespace(namespace).moduleName };
}

/** The namespaces of `cfnTypes` that the vendored map does not cover, sorted. */
export function autoExtendedNamespaces(cfnTypes: readonly string[]): string[] {
  const namespaces = new Set<string>();
  for (const cfnType of cfnTypes) {
    const namespace = namespaceOf(cfnType);
    if (namespace.split("::").length < 2) continue;
    if (!NAMESPACE_INDEX.has(namespace)) namespaces.add(namespace);
  }
  return [...namespaces].sort();
}

/** The vendored map plus one `{ scopes: [{ namespace }], autoExtended: true }` entry per namespace
 * of `cfnTypes` the vendored map does not cover — the same set `autoExtendedNamespaces` reports. */
export function effectiveScopeMap(cfnTypes: readonly string[]): ScopeMapFile {
  const result: ScopeMapFile = JSON.parse(JSON.stringify(scopeMapJson));
  for (const namespace of autoExtendedNamespaces(cfnTypes)) {
    const moduleName = modulePartsFromNamespace(namespace).moduleName;
    result[moduleName] = { scopes: [{ namespace }], autoExtended: true };
  }
  return result;
}
