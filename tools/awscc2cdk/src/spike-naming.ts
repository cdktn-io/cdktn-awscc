/**
 * Plan §4 spike: "dropping spec2cdk's sanitizing / quirk fixes". Runs the three spec2cdk
 * sanitizers (`propertyNameFromCloudFormation`, `sanitizeTypeName`, `santitizeFieldName` —
 * adapted, dependency-free copies in `src/grouped/sanitizers.ts`) over every awscc resource and
 * every nested type path in the full schema, and buckets each sanitizer by whether it changes
 * anything, and whether the change it makes is load-bearing (fixes a name jsii's own reserved-word
 * lists — or this generator's own naming grammar — would otherwise reject; see
 * `src/grouped/jsii-evidence.ts`) or purely cosmetic. See CONTRACT.md "Iteration 2 — public API"
 * and `docs/spike-naming.md` for the write-up this report feeds.
 */
import type { SpecDatabase } from "@aws-cdk/service-spec-types";
import type { ProviderSchema } from "@cdktn/commons";
import { toCamelCase, toPascalCase } from "codemaker";
import { cfnTypeFor } from "./cfn-map";
import { resolveDefinitionName } from "./grouped/cfn-recovery";
import { breaksJsii } from "./grouped/jsii-evidence";
import { propertyNameFromCloudFormation, santitizeFieldName, sanitizeTypeName } from "./grouped/sanitizers";

const DEFAULT_FQPN = "registry.terraform.io/hashicorp/awscc";
/** awscc 1.98.0 has no `provider_versions` entry in the un-fixtured full schema; this is the
 * version CONTRACT.md pins `../schemas/schema.json` at, used only as a documentation fallback. */
const FALLBACK_PROVIDER_VERSION = "1.98.0";

export type Decision = "keep" | "drop" | "replace";

export interface SpikeCandidate {
  readonly awscc: string;
  readonly cfnType?: string;
  readonly kind: "resource" | "type";
  readonly path: string[];
  readonly cdk: string;
  readonly raw: string;
  readonly cdktnCurrent: string;
}

export interface SanitizerBuckets {
  readonly identical: number;
  readonly divergesOnly: number;
  readonly breaksJsii: number;
  readonly decision: Decision;
  readonly examples: unknown[];
}

export interface NamingSpikeReport {
  readonly schema: { readonly path: string; readonly providerVersion: string; readonly resourceCount: number };
  readonly sanitizers: Record<string, SanitizerBuckets>;
  readonly candidates: SpikeCandidate[];
}

function pascal(s: string): string {
  const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);
  return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

function awsccBaseName(awsccName: string): string {
  return awsccName.startsWith("awscc_") ? awsccName.slice("awscc_".length) : awsccName;
}

/** Terraform attribute-type shapes we walk for struct boundaries; see resource-parser.ts. */
type AttrType = string | [string, unknown] | { nesting_mode: string; attributes?: Record<string, any> };

function walkAttributeType(
  t: AttrType | undefined,
  path: string[],
  ctx: { awscc: string; cfnType?: string; db: SpecDatabase },
  out: SpikeCandidate[],
): void {
  if (t === undefined || typeof t === "string") return;

  if (Array.isArray(t)) {
    const [kind, inner] = t;
    if (kind === "list" || kind === "set" || kind === "map") {
      walkAttributeType(inner as AttrType, path, ctx, out);
      return;
    }
    if (kind === "object") {
      out.push(makeTypeCandidate(path, ctx));
      for (const [subName, subType] of Object.entries(inner as Record<string, unknown>)) {
        walkAttributeType(subType as AttrType, [...path, subName], ctx, out);
      }
    }
    return;
  }

  if ("nesting_mode" in t) {
    out.push(makeTypeCandidate(path, ctx));
    walkBlockAttributes(t.attributes, path, ctx, out);
  }
}

function walkBlockAttributes(
  attributes: Record<string, { type?: AttrType; nested_type?: AttrType }> | undefined,
  path: string[],
  ctx: { awscc: string; cfnType?: string; db: SpecDatabase },
  out: SpikeCandidate[],
): void {
  for (const [name, att] of Object.entries(attributes ?? {})) {
    walkAttributeType(att.type ?? att.nested_type, [...path, name], ctx, out);
  }
}

interface BlockLike {
  attributes?: Record<string, { type?: AttrType; nested_type?: AttrType }>;
  block_types?: Record<string, { block: BlockLike }>;
}

function walkBlock(
  block: BlockLike,
  path: string[],
  ctx: { awscc: string; cfnType?: string; db: SpecDatabase },
  out: SpikeCandidate[],
): void {
  walkBlockAttributes(block.attributes, path, ctx, out);
  for (const [name, blockType] of Object.entries(block.block_types ?? {})) {
    out.push(makeTypeCandidate([...path, name], ctx));
    walkBlock(blockType.block, [...path, name], ctx, out);
  }
}

function makeTypeCandidate(
  path: string[],
  ctx: { awscc: string; cfnType?: string; db: SpecDatabase },
): SpikeCandidate {
  const leaf = path[path.length - 1];
  const definitionName = ctx.cfnType ? resolveDefinitionName(ctx.db, ctx.cfnType, path) : undefined;
  const typeStyleName = definitionName ?? pascal(leaf);
  return {
    awscc: ctx.awscc,
    cfnType: ctx.cfnType,
    kind: "type",
    path: [...path],
    raw: pascal(leaf),
    cdk: sanitizeTypeName(typeStyleName),
    cdktnCurrent: toPascalCase(`${awsccBaseName(ctx.awscc)}_${path.join("_")}`),
  };
}

function makeResourceCandidate(awscc: string, cfnType: string | undefined): SpikeCandidate {
  const base = awsccBaseName(awscc);
  const cfnResourcePart = cfnType ? cfnType.split("::").pop()! : pascal(base.split("_").pop() ?? base);
  return {
    awscc,
    cfnType,
    kind: "resource",
    path: [],
    raw: `Cfn${pascal(cfnResourcePart)}`,
    cdk: `Cfn${sanitizeTypeName(cfnResourcePart)}`,
    cdktnCurrent: toPascalCase(base),
  };
}

interface SanitizerEvaluation {
  readonly before: string;
  readonly after: string;
  readonly context: { awscc: string; path: string[] };
}

function bucketize(evaluations: SanitizerEvaluation[]): Omit<SanitizerBuckets, "decision"> {
  let identical = 0;
  let divergesOnly = 0;
  let breaks = 0;
  const examples: unknown[] = [];
  for (const e of evaluations) {
    if (e.before === e.after) {
      identical++;
      continue;
    }
    const beforeBreaks = breaksJsii(e.before);
    const afterBreaks = breaksJsii(e.after);
    if (beforeBreaks && !afterBreaks) {
      breaks++;
      if (examples.length < 5) examples.push({ ...e.context, before: e.before, after: e.after, reason: "breaks-jsii" });
    } else {
      divergesOnly++;
      if (examples.length < 5) examples.push({ ...e.context, before: e.before, after: e.after, reason: "cosmetic" });
    }
  }
  return { identical, divergesOnly, breaksJsii: breaks, examples };
}

export function runNamingSpike(
  schemaJson: ProviderSchema,
  db: SpecDatabase,
  options?: { readonly fqpn?: string },
): NamingSpikeReport {
  const fqpn = options?.fqpn ?? DEFAULT_FQPN;
  const providerSchema = (schemaJson as any).provider_schemas?.[fqpn];
  const resourceSchemas: Record<string, { block: BlockLike }> = providerSchema?.resource_schemas ?? {};
  const providerVersion: string =
    (schemaJson as any).provider_versions?.[fqpn] ?? FALLBACK_PROVIDER_VERSION;

  const awsccNames = Object.keys(resourceSchemas).sort();
  const candidates: SpikeCandidate[] = [];

  // Evidence for sanitizeTypeName: TYPE-styled names, both resource classes and nested types
  // (candidate.raw / candidate.cdk are exactly that comparison for every candidate).
  const typeNameEvals: SanitizerEvaluation[] = [];
  // Evidence for santitizeFieldName: FIELD-styled (camelCase) names of every nested type's own
  // leaf segment (the "field name" this type would be assigned under, on its parent).
  const fieldNameEvals: SanitizerEvaluation[] = [];
  // Evidence for propertyNameFromCloudFormation: the CFN-style spelling (recovered definition
  // name when we have one, else a Pascal guess) run through naive vs. CFN-aware camelCasing.
  const cfnPropertyEvals: SanitizerEvaluation[] = [];

  for (const awscc of awsccNames) {
    const cfnType = cfnTypeFor(awscc, db);
    const resourceCandidate = makeResourceCandidate(awscc, cfnType);
    candidates.push(resourceCandidate);
    typeNameEvals.push({
      before: resourceCandidate.raw,
      after: resourceCandidate.cdk,
      context: { awscc, path: [] },
    });

    const typeCandidates: SpikeCandidate[] = [];
    walkBlock(resourceSchemas[awscc].block, [], { awscc, cfnType, db }, typeCandidates);
    for (const c of typeCandidates) {
      candidates.push(c);
      typeNameEvals.push({ before: c.raw, after: c.cdk, context: { awscc, path: c.path } });

      const leaf = c.path[c.path.length - 1];
      const camelLeaf = toCamelCase(leaf);
      fieldNameEvals.push({
        before: camelLeaf,
        after: santitizeFieldName(camelLeaf),
        context: { awscc, path: c.path },
      });

      const cfnStyleName = resolveDefinitionName(db, cfnType ?? "", c.path) ?? pascal(leaf);
      const naiveCamel = cfnStyleName.charAt(0).toLowerCase() + cfnStyleName.slice(1);
      cfnPropertyEvals.push({
        before: naiveCamel,
        after: propertyNameFromCloudFormation(cfnStyleName),
        context: { awscc, path: c.path },
      });
    }
  }

  const sanitizers: Record<string, SanitizerBuckets> = {
    sanitizeTypeName: decide(bucketize(typeNameEvals)),
    santitizeFieldName: decide(bucketize(fieldNameEvals)),
    propertyNameFromCloudFormation: decide(bucketize(cfnPropertyEvals)),
  };

  return {
    schema: { path: fqpn, providerVersion, resourceCount: awsccNames.length },
    sanitizers,
    candidates,
  };
}

/**
 * Evidence-based decision: a sanitizer earns 'keep' only if it was ever observed fixing a name
 * that would otherwise break jsii (or this generator's own naming grammar); otherwise its only
 * effect across the full schema is cosmetic (or nonexistent), so 'drop' it. No sanitizer here
 * exercises the 'replace' branch — none of the three shows a case where dropping and *replacing*
 * with a different mechanism (as opposed to keeping or dropping outright) is warranted; see
 * docs/spike-naming.md for the per-sanitizer reasoning.
 */
function decide(buckets: Omit<SanitizerBuckets, "decision">): SanitizerBuckets {
  return { ...buckets, decision: buckets.breaksJsii > 0 ? "keep" : "drop" };
}
