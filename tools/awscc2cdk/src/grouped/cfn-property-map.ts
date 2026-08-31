// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Per-resource CFN PascalCase-name -> terraform snake_case-key map (open-constructs/
 * cdktn-planning#1, evaluated in cdktn-grouped-resources/docs/planning-issue-1-impact.md): the
 * Phase-2 bridge's `TerraformIntrinsicResolver` needs to translate PascalCase property-bag
 * literals embedded in unmodified aws-cdk-lib intrinsic calls (e.g. `Fn.conditionIf(..., {
 * EncryptionType, KeyId })`) into the awscc terraform attribute names — a mapping that is not
 * mechanically derivable (`Ipv4IpamPoolId` -> `ipv_4_ipam_pool_id`, not `ipv4_ipam_pool_id`).
 *
 * Emission is opt-in (`GenerateGroupedOptions#emitCfnPropertyMap`, default off) — see
 * `grouped-generate.ts`.
 */
import type { SpecDatabase } from "@aws-cdk/service-spec-types";
import { normalizeKey } from "../cfn-map";
import { resolvePropertiesAtPath } from "./cfn-recovery";
import type { AttributeModel } from "./models/attribute-model";
import type { Struct } from "./models/struct";

/**
 * One flat, resource-wide map, merged across the resource's own top-level properties and every
 * nested struct's properties, keyed by the literal CFN PascalCase property name.
 *
 * Flat-merged, not per-struct: `scripts/cfn-property-map-prestudy.ts` (run once over the full
 * pinned awscc 1.98.0 schema / CFN spec — see that script's header comment for the numbers) found
 * zero cases — globally across the whole schema, and within any single resource's own nested
 * tree — where the same CFN PascalCase name needs two different terraform spellings. Merging
 * therefore loses no information, and is what a consumer that recursively walks an unknown object
 * literal (`TerraformIntrinsicResolver`) actually wants: one lookup table per resource, not one
 * per nesting level the caller would otherwise have to track alongside its walk.
 *
 * Returns an empty object when `cfnType` is `""` (the awscc resource has no matching CFN
 * resource — `grouped-generate.ts`'s fallback-plan case) or when nothing matched; callers skip
 * emitting the static property entirely in that case, so an unmatched resource's output is
 * unaffected by the flag.
 */
export function buildResourceCfnPropertyMap(
  db: SpecDatabase,
  cfnType: string,
  rootAttributes: readonly AttributeModel[],
  structs: readonly Struct[],
): Record<string, string> {
  const result: Record<string, string> = {};
  if (!cfnType) return result;

  const levels: { readonly path: readonly string[]; readonly attributes: readonly AttributeModel[] }[] = [
    { path: [], attributes: rootAttributes },
    ...structs.map((s) => ({ path: s.path, attributes: s.attributes })),
  ];

  for (const level of levels) {
    const properties = resolvePropertiesAtPath(db, cfnType, level.path);
    if (!properties) continue; // path doesn't correspond to an object-typed CFN property
    const cfnKeys = Object.keys(properties);

    for (const att of level.attributes) {
      const terraformName = att.terraformName;
      if (!terraformName) continue;
      const key = normalizeKey(terraformName);
      const propName = cfnKeys.find((k) => normalizeKey(k) === key);
      if (propName === undefined) continue; // no CFN counterpart at this level: skip (per plan)
      // First-writer-wins: a safety net, not a load-bearing tie-break — the pre-study found this
      // branch is never actually taken (no CFN name needs two different terraform spellings
      // within one resource's tree). If a future schema version disagrees, this keeps the map
      // deterministic (levels are walked root-first, then struct order) rather than throwing.
      if (!(propName in result)) {
        result[propName] = terraformName;
      }
    }
  }

  return result;
}
