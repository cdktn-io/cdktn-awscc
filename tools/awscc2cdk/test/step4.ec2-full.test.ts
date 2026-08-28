/**
 * Contract, plan §5 step 4 acceptance ("generate aws-ec2 only, 109 resources, tsc --noEmit passes")
 * plus the CFN-definition-name recovery statistic that decides how close the nested type names are
 * to aws-cdk-lib's.
 *
 * Skipped unless RUN_FULL=1 — it reads ../schemas/schema.json (gitignored, ~90 MB).
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import {
  fullSchema,
  listFiles,
  specDb,
  tmpDir,
  typeCheck,
} from "./helpers/emit";
import { AWSCC_FQPN, outDir, toolRoot } from "./helpers/paths";

/** every awscc_ec2_* resource in awscc 1.98.0 */
const EC2_RESOURCES = 109;
/** provisional (CONTRACT.md): at least this share of nested types must get a CFN definition name */
const MIN_RECOVERED_RATIO = 0.6;

const full = process.env.RUN_FULL === "1" ? describe : describe.skip;

full("aws-ec2 from the full schema (RUN_FULL=1)", () => {
  let dir: string;
  let files: string[];
  let stats: any;

  beforeAll(async () => {
    const mod = await import(path.join(toolRoot, "src", "grouped-generate"));
    expect(typeof mod.generateGroupedWithStats).toBe("function");
    dir = tmpDir("awscc2cdk-ec2-");
    const result = await mod.generateGroupedWithStats(fullSchema(), specDb(), dir, {
      fqpn: AWSCC_FQPN,
      modules: ["aws-ec2"],
    });
    files = result.files;
    stats = result.stats;
    expect(files).toEqual(listFiles(dir));
  }, 1800000);

  afterAll(() => {
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  });

  it(`emits ${EC2_RESOURCES} resource files in aws-ec2`, () => {
    const resourceFiles = files.filter(
      (f) => f.startsWith("aws-ec2/") && f.endsWith(".ts") && f !== "aws-ec2/index.ts" && !/-structs\d+\.ts$/.test(f),
    );
    expect(resourceFiles.length).toBe(EC2_RESOURCES);
    expect(files).toContain("aws-ec2/.jsiirc.json");
    expect(files).toContain("index.ts");
  });

  it("type-checks", () => {
    const result = typeCheck(dir);
    expect(result.diagnostics).toEqual([]);
  }, 1800000);

  it(`recovers a CFN definition name for at least ${MIN_RECOVERED_RATIO * 100}% of nested types`, () => {
    const ratio = stats.nestedTypes === 0 ? 0 : stats.recovered / stats.nestedTypes;
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      path.join(outDir, "ec2-typenames.json"),
      JSON.stringify(
        {
          module: "aws-ec2",
          resources: stats.resources,
          nestedTypes: stats.nestedTypes,
          recovered: stats.recovered,
          fallback: stats.fallback,
          recoveredRatio: Number(ratio.toFixed(4)),
          byResource: stats.byResource,
        },
        null,
        2,
      ) + "\n",
    );
    console.log(
      `[ec2-typenames] ${stats.recovered}/${stats.nestedTypes} nested types from CFN definition names (${(ratio * 100).toFixed(1)}%)`,
    );
    expect(stats.resources).toBe(EC2_RESOURCES);
    expect(stats.recovered + stats.fallback).toBe(stats.nestedTypes);
    expect(ratio).toBeGreaterThanOrEqual(MIN_RECOVERED_RATIO);
  });
});
