/**
 * The auditable escape hatch of iteration 2 (see CONTRACT.md "Exclusions").
 *
 * `test/jsii-exclude.json` is committed by the contract writer with an empty list. The implementer
 * may add entries for the two known-hard fixture resources only, and an entry means the resource is
 * *not generated at all* (a resource that is emitted but skipped later would still be re-exported by
 * its module `index.ts`, so partial exclusion is not a sound state). Every test that honours an
 * exclusion prints it, so the verifier sees it without diffing.
 *
 * This file is read-only for the implementer (the JSON next to it is not).
 */
import * as fs from "node:fs";
import { exclusionsPath } from "./paths";

/** Only these two fixture resources may ever appear in the exclusions file (plan §5 step 5). */
export const EXCLUDABLE = [
  "awscc_kinesisfirehose_delivery_stream",
  "awscc_lex_bot",
];

export interface Exclusion {
  readonly resource: string;
  readonly reason: string;
}

let printed = false;

export function readExclusions(): Exclusion[] {
  const raw = JSON.parse(fs.readFileSync(exclusionsPath, "utf8"));
  if (!Array.isArray(raw.exclusions)) {
    throw new Error(`${exclusionsPath}: "exclusions" must be an array`);
  }
  for (const e of raw.exclusions as Exclusion[]) {
    if (!EXCLUDABLE.includes(e.resource)) {
      throw new Error(
        `${exclusionsPath}: ${e.resource} may not be excluded; only ${EXCLUDABLE.join(", ")} may`,
      );
    }
    if (typeof e.reason !== "string" || e.reason.trim().length < 20) {
      throw new Error(`${exclusionsPath}: ${e.resource}: reason must be a sentence (>= 20 chars)`);
    }
  }
  if (!printed) {
    printed = true;
    const list = raw.exclusions as Exclusion[];
    if (list.length === 0) console.log("[jsii-exclude.json] no exclusions");
    for (const e of list) console.log(`[jsii-exclude.json] EXCLUDED ${e.resource}: ${e.reason}`);
  }
  return raw.exclusions;
}

export function excludedResources(): string[] {
  return readExclusions().map((e) => e.resource).sort();
}
