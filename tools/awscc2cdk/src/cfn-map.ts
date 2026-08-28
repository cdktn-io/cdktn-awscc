/**
 * awscc resource -> CloudFormation type, via `@aws-cdk/aws-service-spec`. Plan §2 "CFN type ↔
 * awscc resource mapping": the join key absorbs the snake-casing quirks (`OAuth2CredentialProvider`
 * <-> `o_auth_2_credential_provider`, `FSxONTAP` <-> `fsx_ontap`) that break a regex-based reverse
 * mapping. See CONTRACT.md for the exact shapes.
 */
import type { SpecDatabase } from "@aws-cdk/service-spec-types";
import type { ProviderSchema } from "@cdktn/commons";
import { moduleForCfnType } from "./scope-map";

const DEFAULT_FQPN = "registry.terraform.io/hashicorp/awscc";

/** s.toLowerCase().replace(/[^a-z0-9]/g, "") */
export function normalizeKey(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Splits `AWS::Service::Resource` into `["Service", "Resource"]`. */
function splitCfnType(cfnType: string): [service: string, resource: string] | undefined {
  const parts = cfnType.split("::");
  if (parts.length < 3 || parts[0] !== "AWS") return undefined;
  // Tolerate (rare, none observed today) CFN types with extra `::` segments by folding
  // everything after the service into the resource part of the join key.
  return [parts[1], parts.slice(2).join("")];
}

/** Splits `awscc_<svc>_<rest>` into `["svc", "rest"]`. The service token is a single terraform-
 * lowercased word (awscc's provider derives it from the CFN service name, which never contains an
 * underscore), so the first underscore after the `awscc_` prefix is always the true boundary. */
function splitAwsccName(awsccName: string): [service: string, rest: string] | undefined {
  const PREFIX = "awscc_";
  if (!awsccName.startsWith(PREFIX)) return undefined;
  const body = awsccName.slice(PREFIX.length);
  const idx = body.indexOf("_");
  if (idx < 0) return undefined;
  return [body.slice(0, idx), body.slice(idx + 1)];
}

function joinKeyForCfnType(cfnType: string): string | undefined {
  const split = splitCfnType(cfnType);
  if (!split) return undefined;
  const [service, resource] = split;
  return `${normalizeKey(service)}.${normalizeKey(resource)}`;
}

function joinKeyForAwsccName(awsccName: string): string | undefined {
  const split = splitAwsccName(awsccName);
  if (!split) return undefined;
  const [service, rest] = split;
  return `${normalizeKey(service)}.${normalizeKey(rest)}`;
}

interface CfnIndex {
  /** join key -> every CFN type that produced it (almost always exactly one). */
  readonly byKey: Map<string, string[]>;
  readonly allTypes: string[];
}

function buildCfnIndex(db: SpecDatabase): CfnIndex {
  const byKey = new Map<string, string[]>();
  const allTypes: string[] = [];
  for (const resource of db.all("resource")) {
    const cfnType = resource.cloudFormationType;
    allTypes.push(cfnType);
    const key = joinKeyForCfnType(cfnType);
    if (key === undefined) continue;
    const existing = byKey.get(key);
    if (existing) {
      existing.push(cfnType);
    } else {
      byKey.set(key, [cfnType]);
    }
  }
  return { byKey, allTypes };
}

/** 'awscc_ec2_vpc' -> 'AWS::EC2::VPC'; undefined when the spec has no counterpart. */
export function cfnTypeFor(awsccName: string, db: SpecDatabase): string | undefined {
  const key = joinKeyForAwsccName(awsccName);
  if (key === undefined) return undefined;
  const { byKey } = buildCfnIndex(db);
  const hits = byKey.get(key);
  if (!hits || hits.length !== 1) return undefined;
  return hits[0];
}

export interface CfnMapEntry {
  readonly awsccName: string;
  readonly cfnType: string;
  readonly module?: string;
  readonly suffix?: string;
}

export interface CfnMapAmbiguity {
  readonly key: string;
  readonly awscc: string[];
  readonly cfnTypes: string[];
}

export interface CfnMapReport {
  readonly matched: CfnMapEntry[];
  readonly unmatched: string[];
  readonly specOnly: string[];
  readonly ambiguous: CfnMapAmbiguity[];
  readonly counts: {
    readonly awscc: number;
    readonly spec: number;
    readonly matched: number;
    readonly unmatched: number;
    readonly specOnly: number;
    readonly ambiguous: number;
  };
}

export function buildCfnMap(
  schema: ProviderSchema,
  db: SpecDatabase,
  options?: { readonly fqpn?: string },
): CfnMapReport {
  const fqpn = options?.fqpn ?? DEFAULT_FQPN;
  const resourceSchemas = schema.provider_schemas?.[fqpn]?.resource_schemas ?? {};
  const awsccNames = Object.keys(resourceSchemas);

  const cfnIndex = buildCfnIndex(db);

  // Group awscc names by join key too, so a key claimed by >1 awscc resource is caught as
  // ambiguous (order-independent: grouping-then-sorting never depends on iteration order).
  const awsccByKey = new Map<string, string[]>();
  const awsccKeyOf = new Map<string, string | undefined>();
  for (const awsccName of awsccNames) {
    const key = joinKeyForAwsccName(awsccName);
    awsccKeyOf.set(awsccName, key);
    if (key === undefined) continue;
    const existing = awsccByKey.get(key);
    if (existing) {
      existing.push(awsccName);
    } else {
      awsccByKey.set(key, [awsccName]);
    }
  }

  const ambiguous: CfnMapAmbiguity[] = [];
  const ambiguousKeys = new Set<string>();
  for (const [key, names] of awsccByKey) {
    const cfnTypes = cfnIndex.byKey.get(key) ?? [];
    if (names.length > 1 || cfnTypes.length > 1) {
      ambiguousKeys.add(key);
      ambiguous.push({
        key,
        awscc: [...names].sort(),
        cfnTypes: [...cfnTypes].sort(),
      });
    }
  }
  ambiguous.sort((a, b) => a.key.localeCompare(b.key));

  const matched: CfnMapEntry[] = [];
  const unmatched: string[] = [];
  const matchedCfnTypes = new Set<string>();

  for (const awsccName of awsccNames) {
    const key = awsccKeyOf.get(awsccName);
    if (key === undefined || ambiguousKeys.has(key)) {
      unmatched.push(awsccName);
      continue;
    }
    const cfnTypes = cfnIndex.byKey.get(key);
    if (!cfnTypes || cfnTypes.length !== 1) {
      unmatched.push(awsccName);
      continue;
    }
    const cfnType = cfnTypes[0];
    matchedCfnTypes.add(cfnType);
    const hit = moduleForCfnType(cfnType);
    matched.push({
      awsccName,
      cfnType,
      module: hit?.module,
      suffix: hit?.suffix,
    });
  }

  matched.sort((a, b) => a.awsccName.localeCompare(b.awsccName));
  unmatched.sort();

  const specOnly = cfnIndex.allTypes
    .filter((t) => !matchedCfnTypes.has(t))
    .sort();

  return {
    matched,
    unmatched,
    specOnly,
    ambiguous,
    counts: {
      awscc: awsccNames.length,
      spec: cfnIndex.allTypes.length,
      matched: matched.length,
      unmatched: unmatched.length,
      specOnly: specOnly.length,
      ambiguous: ambiguous.length,
    },
  };
}
