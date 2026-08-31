/**
 * One-off analysis script for cdktn-planning#1 / awscdk-compat-plan.md §8, run once to decide
 * whether `GenerateGroupedOptions#emitCfnPropertyMap` (src/grouped-generate.ts) could safely emit
 * one *flat*, resource-wide map rather than one map per nested struct: for every awscc resource
 * matched to a CFN resource, collect every (CFN PascalCase property name -> terraform snake_case
 * attribute name) pair reachable from the resource's own terraform schema tree (top level +
 * nested structs), and report:
 *   - totals, and how many terraform attributes / CFN properties found no counterpart
 *   - whether the same CFN PascalCase name ever needs two different terraform spellings,
 *     globally and per-resource
 *
 * Not part of the test suite (no assertions — this is analysis, not a contract check); requires
 * `schemas/schema.json` fetched (`pnpm schema:fetch`). Run from the repo root with:
 *   npx ts-node --transpile-only scripts/cfn-property-map-prestudy.ts
 *
 * Result at the time `emitCfnPropertyMap` was implemented (awscc 1.98.0 /
 * @aws-cdk/aws-service-spec 0.1.206): 1,493/1,494 resources matched a CFN type; 30,674 pairs
 * collected; 0 global conflicts, 0 per-resource conflicts (out of 11,453 distinct CFN names) — the
 * mapping is consistent enough that the flat-merge design is safe, both per-resource and,
 * incidentally, as a single package-wide map (open question 2 of
 * docs/planning-issue-1-impact.md in the sibling cdktn-grouped-resources workspace).
 */
import * as fs from "node:fs";
import * as path from "node:path";
import type { SpecDatabase } from "@aws-cdk/service-spec-types";
import type { ProviderSchema, Schema } from "@cdktn/commons";

const TOOL_ROOT = path.resolve(__dirname, "..", "tools", "awscc2cdk");
const PACKAGE_ROOT = path.resolve(__dirname, "..");
const AWSCC_FQPN = "registry.terraform.io/hashicorp/awscc";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { cfnTypeFor } = require(path.join(TOOL_ROOT, "src", "cfn-map"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { normalizeKey } = require(path.join(TOOL_ROOT, "src", "cfn-map"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { parseResourceAttributes } = require(path.join(TOOL_ROOT, "src", "grouped", "resource-parser"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolvePropertiesAtPath } = require(path.join(TOOL_ROOT, "src", "grouped", "cfn-recovery"));

interface Pair {
  readonly resource: string;
  readonly path: string;
  readonly cfnName: string;
  readonly terraformName: string;
}

function main() {
  const schemaPath = path.join(PACKAGE_ROOT, "schemas", "schema.json");
  const schemaJson: ProviderSchema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  const db: SpecDatabase = require("@aws-cdk/aws-service-spec").loadAwsServiceSpecSync();

  const resourceSchemas = (schemaJson as any).provider_schemas?.[AWSCC_FQPN]?.resource_schemas ?? {};
  const allAwsccNames: string[] = Object.keys(resourceSchemas).sort();

  let resourcesMatched = 0;
  let resourcesUnmatched = 0;

  const pairs: Pair[] = [];
  let terraformAttrsNoCfnMatch = 0;
  let cfnPropsNoTerraformMatch = 0;

  // global: literal CFN PascalCase name -> set of terraform spellings seen anywhere
  const globalNameToSpellings = new Map<string, Set<string>>();
  const globalConflicts: { cfnName: string; spellings: string[]; examples: Pair[] }[] = [];

  // per-resource conflicts
  const perResourceConflicts: { resource: string; cfnName: string; spellings: string[] }[] = [];

  for (const awsccName of allAwsccNames) {
    const cfnType = cfnTypeFor(awsccName, db);
    if (!cfnType) {
      resourcesUnmatched++;
      continue;
    }
    resourcesMatched++;

    const resourceSchema = resourceSchemas[awsccName] as Schema;
    const parsed = parseResourceAttributes(resourceSchema);

    // (path key, attributes) for root + every nested struct
    const levels: { pathKey: string; path: readonly string[]; attributes: any[] }[] = [
      { pathKey: "", path: [], attributes: parsed.attributes },
      ...parsed.structs.map((s: any) => ({ pathKey: s.path.join("."), path: s.path, attributes: s.attributes })),
    ];

    const resourcePairs: Pair[] = [];

    for (const level of levels) {
      const properties = resolvePropertiesAtPath(db, cfnType, level.path);
      if (!properties) continue; // path didn't correspond to an object-typed CFN property; skip level

      const cfnKeys = Object.keys(properties);
      const matchedCfnKeys = new Set<string>();

      for (const att of level.attributes) {
        const terraformName: string | undefined = att.terraformName;
        if (!terraformName) continue;
        const key = normalizeKey(terraformName);
        const propName = cfnKeys.find((k) => normalizeKey(k) === key);
        if (propName === undefined) {
          terraformAttrsNoCfnMatch++;
          continue;
        }
        matchedCfnKeys.add(propName);
        const pair: Pair = { resource: awsccName, path: level.pathKey, cfnName: propName, terraformName };
        pairs.push(pair);
        resourcePairs.push(pair);
      }

      cfnPropsNoTerraformMatch += cfnKeys.length - matchedCfnKeys.size;
    }

    // per-resource consistency: does one CFN PascalCase name need two different terraform
    // spellings anywhere within this one resource's whole tree?
    const resourceNameToSpellings = new Map<string, Set<string>>();
    for (const p of resourcePairs) {
      let set = resourceNameToSpellings.get(p.cfnName);
      if (!set) {
        set = new Set();
        resourceNameToSpellings.set(p.cfnName, set);
      }
      set.add(p.terraformName);
    }
    for (const [cfnName, spellings] of resourceNameToSpellings) {
      if (spellings.size > 1) {
        perResourceConflicts.push({ resource: awsccName, cfnName, spellings: [...spellings].sort() });
      }
    }

    // feed the global map
    for (const p of pairs.slice(pairs.length - resourcePairs.length)) {
      let set = globalNameToSpellings.get(p.cfnName);
      if (!set) {
        set = new Set();
        globalNameToSpellings.set(p.cfnName, set);
      }
      set.add(p.terraformName);
    }
  }

  for (const [cfnName, spellings] of globalNameToSpellings) {
    if (spellings.size > 1) {
      const examples = pairs.filter((p) => p.cfnName === cfnName);
      globalConflicts.push({ cfnName, spellings: [...spellings].sort(), examples: examples.slice(0, 5) });
    }
  }

  console.log("=== cdktn-planning#1 pre-study: CFN PascalCase -> terraform snake_case ===");
  console.log(`awscc resources total:      ${allAwsccNames.length}`);
  console.log(`  matched to a CFN type:    ${resourcesMatched}`);
  console.log(`  unmatched (no CFN type):  ${resourcesUnmatched}`);
  console.log();
  console.log(`total (CFN name -> tf name) pairs collected: ${pairs.length}`);
  console.log(`terraform attributes with no CFN counterpart (within reached CFN levels): ${terraformAttrsNoCfnMatch}`);
  console.log(`CFN properties with no terraform counterpart (within reached CFN levels): ${cfnPropsNoTerraformMatch}`);
  console.log();
  console.log(`GLOBAL consistency: same CFN PascalCase name -> >1 terraform spelling anywhere in the schema?`);
  console.log(`  distinct CFN names seen: ${globalNameToSpellings.size}`);
  console.log(`  conflicting CFN names:   ${globalConflicts.length}`);
  for (const c of globalConflicts.slice(0, 50)) {
    console.log(`    ${c.cfnName} -> ${JSON.stringify(c.spellings)}`);
    for (const ex of c.examples) console.log(`        e.g. ${ex.resource} [${ex.path || "<root>"}] -> ${ex.terraformName}`);
  }
  console.log();
  console.log(`PER-RESOURCE consistency: same CFN PascalCase name -> >1 terraform spelling within one resource's own tree?`);
  console.log(`  conflicting (resource, cfnName) pairs: ${perResourceConflicts.length}`);
  for (const c of perResourceConflicts.slice(0, 50)) {
    console.log(`    ${c.resource}: ${c.cfnName} -> ${JSON.stringify(c.spellings)}`);
  }

  const out = {
    resourcesTotal: allAwsccNames.length,
    resourcesMatched,
    resourcesUnmatched,
    totalPairs: pairs.length,
    terraformAttrsNoCfnMatch,
    cfnPropsNoTerraformMatch,
    distinctCfnNames: globalNameToSpellings.size,
    globalConflicts,
    perResourceConflicts,
  };
  const resultPath = path.join(require("node:os").tmpdir(), "cfn-property-map-prestudy-result.json");
  fs.writeFileSync(resultPath, JSON.stringify(out, null, 2));
  console.log();
  console.log(`full result written to ${resultPath}`);
}

main();
