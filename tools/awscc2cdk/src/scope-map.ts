/**
 * CFN type -> aws-cdk-lib submodule, backed by the vendored `scope-map.json`
 * (`src/vendored/scope-map.json`, copied from `packages/aws-cdk-lib/scripts/scope-map.json`).
 *
 * Every `scopes[].namespace` entry in that file is exactly two `::`-separated segments
 * (`AWS::Service`, e.g. `AWS::EC2`) — verified against the vendored copy — so matching a CFN type
 * like `AWS::EC2::VPC` only needs its first two segments. See plan §2, §3 and CONTRACT.md.
 */
import scopeMapJson from "./vendored/scope-map.json";

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
}

type ScopeMapFile = Record<string, ModuleEntry>;

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
 */
export function moduleForCfnType(cfnType: string): ScopeMapHit | undefined {
  const hits = NAMESPACE_INDEX.get(namespaceOf(cfnType));
  if (!hits || hits.length === 0) return undefined;
  if (hits.length === 1) return hits[0];
  return [...hits].sort((a, b) => a.module.localeCompare(b.module))[0];
}
