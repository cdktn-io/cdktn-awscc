/**
 * Naming rules for the grouped (aws-cdk-lib-shaped) awscc bindings. Plan §3 "naming rules" /
 * §5 step 3. Pure, order-independent functions — no filesystem or schema access here.
 *
 * This is an *adapted* rewrite, not a copy, of ideas from `src/vendored/spec2cdk/naming/
 * conventions.ts` (`sanitizeTypeName`, `santitizeFieldName`) and cdktn's `uniqueClassName`
 * (which this file deliberately replaces with a deterministic, set-based algorithm — see
 * `propertyTypeNamesForResource` below and CONTRACT.md "Contract decisions … 2"). See
 * CONTRACT.md "Iteration 2 — public API" for the exact contract every function here satisfies.
 */
import { moduleForCfnType } from "./scope-map";

export const CC_PREFIX = "Cc";

/** ('VPC') -> 'CcVPC'; ('Application', 'V2') -> 'CcApplicationV2'. CFN casing kept verbatim. */
export function className(cfnResourceName: string, suffix?: string): string {
  return `${CC_PREFIX}${cfnResourceName}${suffix ?? ""}`;
}

/** ('VPC') -> 'CcVPCProps' — always className(...) + 'Props'. */
export function propsName(cfnResourceName: string, suffix?: string): string {
  return `${className(cfnResourceName, suffix)}Props`;
}

const PLAIN_IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

/**
 * Prefixed when a PascalCased name would start with a digit: `'3dModel' -> 'N3dModel'`. Iteration 3
 * finding 3 (CONTRACT.md "digit-leading identifiers get an uppercase repair"): a `_`-prefixed name
 * (the iteration-2 rule) is a legal TypeScript identifier but not a legal jsii *type* name — jsii
 * requires PascalCase, i.e. an uppercase first letter. `N` (mnemonic: numeric) is deterministic,
 * one character, keeps the rest of the name intact, and yields the uppercase first letter jsii
 * wants; it is never `_`.
 */
export const DIGIT_LEAD_PREFIX = "N";

const DIGIT_START = /^[0-9]/;

/**
 * `pascalCaseWords`/`fullPathBase` only capitalise word-initial letters; they never guarantee a
 * legal, jsii-acceptable *leading character* for the identifier as a whole. A path segment that
 * starts with a digit (e.g. `3d_model`) would otherwise survive as `3dModel...`, a legal TypeScript
 * identifier but not a legal jsii type name. No occurrence in awscc 1.98.0 (0 digit-leading leaves
 * across all 8,590 nested-type candidates — see `docs/spike-naming.md`), so this is latent, not
 * observed.
 */
function ensureIdentifierStart(s: string): string {
  if (s.length === 0) return s;
  if (DIGIT_START.test(s)) return `${DIGIT_LEAD_PREFIX}${s}`;
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

/** Splits on any run of non-identifier characters, capitalising the first letter of each piece. */
function pascalCaseWords(s: string): string {
  const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);
  return ensureIdentifierStart(parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(""));
}

/** All path segments PascalCased individually and concatenated — the "full path" fallback name. */
function fullPathBase(path: readonly string[]): string {
  return ensureIdentifierStart(path.map(pascalCaseWords).join(""));
}

/**
 * A single nested-type name.
 *  - string  = a recovered CFN definition name: returned verbatim + 'Property', sanitised to a
 *              plain identifier first if it is not already one.
 *  - string[] = the fallback: PascalCase of the *leaf* (last path segment) + 'Property'.
 */
export function propertyTypeName(source: string | readonly string[]): string {
  if (typeof source === "string") {
    const base = PLAIN_IDENTIFIER.test(source) ? source : pascalCaseWords(source);
    return `${base}Property`;
  }
  const leaf = source.length > 0 ? source[source.length - 1] : "";
  return `${pascalCaseWords(leaf)}Property`;
}

export interface PropertyTypePath {
  /** terraform attribute path below the resource root, e.g. ['lifecycle_configuration', 'rules'] */
  readonly path: readonly string[];
  /** the CFN TypeDefinition name, when the property mapping recovered one */
  readonly definitionName?: string;
}

interface ResolvedEntry {
  readonly key: string;
  readonly path: readonly string[];
  readonly definitionName?: string;
  /** propertyTypeName(definitionName ?? path) — the short, preferred name */
  readonly short: string;
  /** the full-path name; equals `short` for entries that carry a definitionName */
  readonly full: string;
}

/**
 * Collision-detection key. Names are compared **case-insensitively** (iteration 5 finding: the Go
 * target). jsii-pacmak's Go emitter writes one file per type, `<Class>_<NestedType>.go`, and
 * `go build` rejects a package whose file names differ only in case ("case-insensitive file name
 * collision") — as does the C# compiler for its PascalCase directories. Two names that are
 * distinct to TypeScript, Python and Java (`HAClusterPrometheusExporterProperty` from a recovered
 * CFN definition name, `HaClusterPrometheusExporterProperty` from the terraform leaf
 * `ha_cluster_prometheus_exporter`) therefore have to be treated as *colliding* here. Same rule as
 * the vendored cdktn parser's `uniqueBaseName`, which lowercases before comparing for exactly this
 * reason; it was never carried into this file.
 */
function collisionKey(name: string): string {
  return name.toLowerCase();
}

/**
 * All nested-type names of ONE resource at once, keyed by `path.join('.')`. Deterministic and
 * order-independent — the fix for cdktn's order-dependent `uniqueClassName` (plan §3, risk 4).
 *
 * Two entries are put in the same collision cluster if EITHER their short names collide or their
 * full-path names collide — where "collide" means *case-insensitively* equal, see `collisionKey`
 * (the latter catches paths that are only distinguishable in their
 * un-PascalCased, segment-boundary form, e.g. ['a_b','c'] vs ['a','b_c'] — see
 * step3.naming.test.ts "breaks a still-colliding tie…"). Every *fallback* entry in a colliding
 * cluster is re-derived from its full path; entries carrying a recovered CFN definition name keep
 * their short name. If names still collide after that, the entries are sorted by path key and
 * '2', '3', … are appended in that order — never first-seen order, so the result never depends on
 * input order.
 */
export function propertyTypeNamesForResource(
  entries: readonly PropertyTypePath[],
): Record<string, string> {
  const items: ResolvedEntry[] = entries.map((e) => {
    const key = e.path.join(".");
    const short = propertyTypeName(e.definitionName ?? e.path);
    const full = e.definitionName !== undefined ? short : `${fullPathBase(e.path)}Property`;
    return { key, path: e.path, definitionName: e.definitionName, short, full };
  });

  // Union-find over "collides via short name" OR "collides via full-path name".
  const parent = items.map((_, i) => i);
  function find(i: number): number {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]];
      i = parent[i];
    }
    return i;
  }
  function union(a: number, b: number): void {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  }
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (
        collisionKey(items[i].short) === collisionKey(items[j].short) ||
        collisionKey(items[i].full) === collisionKey(items[j].full)
      ) {
        union(i, j);
      }
    }
  }

  const clusters = new Map<number, ResolvedEntry[]>();
  items.forEach((item, i) => {
    const root = find(i);
    const list = clusters.get(root);
    if (list) list.push(item);
    else clusters.set(root, [item]);
  });

  const result: Record<string, string> = {};
  // Every entry's own `key` (never Map/array iteration order) drives what ends up in `result`,
  // and within-cluster tie-breaks are sorted by key below — so the order clusters are visited in
  // here cannot leak into the output.
  for (const cluster of clusters.values()) {
    if (cluster.length === 1) {
      result[cluster[0].key] = cluster[0].short;
      continue;
    }
    const assigned = cluster.map((item) => ({
      key: item.key,
      name: item.definitionName !== undefined ? item.short : item.full,
    }));
    const bySubname = new Map<string, typeof assigned>();
    for (const a of assigned) {
      const list = bySubname.get(collisionKey(a.name));
      if (list) list.push(a);
      else bySubname.set(collisionKey(a.name), [a]);
    }
    for (const subgroup of bySubname.values()) {
      if (subgroup.length === 1) {
        result[subgroup[0].key] = subgroup[0].name;
        continue;
      }
      const sorted = [...subgroup].sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
      sorted.forEach((entry, idx) => {
        result[entry.key] = idx === 0 ? entry.name : `${entry.name}${idx + 1}`;
      });
    }
  }

  return result;
}

export interface ModuleName {
  /** directory / submodule name, aws-cdk-lib spelling: 'aws-ec2' */
  readonly dir: string;
  /** jsii submodule symbol, aws-cdk-lib spelling: 'aws_ec2' */
  readonly symbol: string;
  /** class-name suffix from the merged scope, e.g. 'V2' */
  readonly suffix?: string;
}

/** Backed by the vendored aws-cdk-lib scope-map.json, via `./scope-map`. */
export function moduleNameFor(cfnType: string): ModuleName | undefined {
  const hit = moduleForCfnType(cfnType);
  if (!hit) return undefined;
  return hit.suffix
    ? { dir: hit.module, symbol: hit.module.replace(/-/g, "_"), suffix: hit.suffix }
    : { dir: hit.module, symbol: hit.module.replace(/-/g, "_") };
}

/** 'CcVPC' -> 'vpc', 'CcApplicationV2' -> 'application-v2', 'CcDBInstance' -> 'db-instance'. */
export function fileNameFor(cls: string): string {
  const base = cls.startsWith(CC_PREFIX) ? cls.slice(CC_PREFIX.length) : cls;
  const withAcronymBoundary = base.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");
  const withWordBoundary = withAcronymBoundary.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
  return withWordBoundary.toLowerCase();
}

export const NAME_GRAMMAR = {
  resourceClass: /^Cc[A-Z][A-Za-z0-9]*$/,
  propsInterface: /^Cc[A-Z][A-Za-z0-9]*Props$/,
  propertyInterface: /^[A-Z][A-Za-z0-9]*Property$/,
  propertyOutputReference: /^[A-Z][A-Za-z0-9]*PropertyOutputReference$/,
  propertyList: /^[A-Z][A-Za-z0-9]*PropertyList$/,
  propertyMap: /^[A-Z][A-Za-z0-9]*PropertyMap$/,
  mapperFunction: /^[a-z][A-Za-z0-9]*To(Hcl)?Terraform$/,
} as const;
