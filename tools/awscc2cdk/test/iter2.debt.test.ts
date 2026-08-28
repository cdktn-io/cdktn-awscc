/**
 * Contract, iteration 2: the three pieces of iteration-1 debt that must be cleared.
 * See CONTRACT.md "Iteration 2 — debt from iteration 1".
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { runBin } from "./helpers/emit";
import { fullSchemaPath, packageRoot, toolRoot } from "./helpers/paths";

describe("(a) the package builds", () => {
  it("tsc --noEmit is clean over src/ and tools/", () => {
    const { code, output } = runBin("tsc", ["--noEmit"], packageRoot);
    if (code !== 0) console.log(output.slice(0, 8000));
    expect(output.trim()).toBe("");
    expect(code).toBe(0);
  }, 600000);
});

describe("(b) one provider-schema path", () => {
  const script = path.join(packageRoot, "scripts", "update-provider-schema.ts");

  it("the updater writes the schema the tests read", () => {
    const src = fs.readFileSync(script, "utf8");
    expect(src).not.toContain("awscc.schema.json");
    expect(src).toContain("schema.json");
    // ../schemas/schema.json, i.e. the repo-level schemas dir the test helpers point at
    expect(path.basename(path.dirname(fullSchemaPath))).toBe("schemas");
    expect(src).toContain("schemas");
  });
});

describe("(c) cfnTypeFor is memoised", () => {
  it("answers 20k lookups without rebuilding the spec index", async () => {
    const cfnMap = await import(path.join(toolRoot, "src", "cfn-map"));
    const db = require("@aws-cdk/aws-service-spec").loadAwsServiceSpecSync();
    expect(cfnMap.cfnTypeFor("awscc_ec2_vpc", db)).toBe("AWS::EC2::VPC"); // warm up
    const started = Date.now();
    for (let i = 0; i < 20000; i++) cfnMap.cfnTypeFor("awscc_ec2_vpc", db);
    const elapsed = Date.now() - started;
    console.log(`[memoise] 20000 cfnTypeFor lookups in ${elapsed} ms`);
    expect(elapsed).toBeLessThan(2000);
  }, 300000);
});
