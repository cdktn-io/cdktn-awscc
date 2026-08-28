/**
 * Contract, plan §5 step 1: the vendored cdk-terrain generator, run unchanged over the mini
 * fixture, reproduces today's per-resource output. See CONTRACT.md.
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  classBody,
  exportedIdentifiers,
  normalizeGenerated,
} from "./helpers/normalize";
import { goldenDir, miniSchemaPath, outDir, toolRoot } from "./helpers/paths";

const RESOURCE_DIRS = [
  "accessanalyzer-analyzer",
  "apigateway-resource",
  "cloudformation-stack",
  "ec2-subnet",
  "ec2-vpc",
  "iotwireless-device-profile",
  "kinesisanalyticsv2-application",
  "kinesisfirehose-delivery-stream",
  "lambda-function",
  "lex-bot",
  "s3-bucket",
];

/** the only fixture resource whose structs exceed STRUCT_SHARDING_THRESHOLD (400) at awscc 1.98.0 */
const SHARDED = "lex-bot";

type GenerateLegacy = (
  schemaJson: any,
  out: string,
  options?: { readonly fqpn?: string },
) => Promise<string[]>;

let tmpDir: string;
let emitted: string[];

function read(rel: string): string {
  return fs.readFileSync(path.join(tmpDir, rel), "utf8");
}

beforeAll(async () => {
  const mod: { generateLegacy: GenerateLegacy } = await import(
    path.join(toolRoot, "src", "legacy-generate")
  );
  expect(typeof mod.generateLegacy).toBe("function");

  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "awscc2cdk-step1-"));
  const schema = JSON.parse(fs.readFileSync(miniSchemaPath, "utf8"));
  emitted = await mod.generateLegacy(schema, tmpDir);
}, 120000);

afterAll(() => {
  if (tmpDir) fs.rmSync(tmpDir, { recursive: true, force: true });
});

describe("generateLegacy layout", () => {
  it("emits one index.ts per fixture resource, plus provider and barrels", () => {
    for (const dir of RESOURCE_DIRS) {
      const rel = `providers/awscc/${dir}/index.ts`;
      expect(fs.existsSync(path.join(tmpDir, rel))).toBe(true);
    }
    for (const rel of [
      "providers/awscc/provider/index.ts",
      "providers/awscc/index.ts",
      "providers/awscc/lazy-index.ts",
    ]) {
      expect(fs.existsSync(path.join(tmpDir, rel))).toBe(true);
    }
  });

  it("emits no resource directory beyond the fixture list", () => {
    const dirs = fs
      .readdirSync(path.join(tmpDir, "providers", "awscc"), {
        withFileTypes: true,
      })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    expect(dirs).toEqual([...RESOURCE_DIRS, "provider"].sort());
  });

  it("returns the emitted file list", () => {
    expect(Array.isArray(emitted)).toBe(true);
    const normalized = emitted.map((f) => f.split(path.sep).join("/"));
    for (const dir of RESOURCE_DIRS) {
      expect(
        normalized.some((f) => f.includes(`providers/awscc/${dir}/index.ts`)),
      ).toBe(true);
    }
  });

  it("shards structs for the giant resource only", () => {
    const structsDir = path.join(
      tmpDir,
      "providers/awscc",
      SHARDED,
      "index-structs",
    );
    expect(fs.existsSync(structsDir)).toBe(true);
    expect(fs.readdirSync(structsDir).sort()).toEqual([
      "index.ts",
      "structs0.ts",
      "structs400.ts",
    ]);
    // the resource file re-exports the shard folder instead of declaring the structs
    expect(read(`providers/awscc/${SHARDED}/index.ts`)).toContain(
      "export * from './index-structs/index'",
    );

    for (const dir of RESOURCE_DIRS.filter((d) => d !== SHARDED)) {
      expect(
        fs.existsSync(path.join(tmpDir, "providers/awscc", dir, "index-structs")),
      ).toBe(false);
    }
  });
});

describe("golden: accessanalyzer-analyzer matches @cdktn/provider-awscc", () => {
  const goldenPath = path.join(goldenDir, "accessanalyzer-analyzer.index.ts");
  let actual: string;
  let expected: string;

  beforeAll(() => {
    actual = normalizeGenerated(read("providers/awscc/accessanalyzer-analyzer/index.ts"));
    expected = normalizeGenerated(fs.readFileSync(goldenPath, "utf8"));
  });

  it("exports exactly the same identifiers", () => {
    expect(exportedIdentifiers(actual)).toEqual(exportedIdentifiers(expected));
  });

  it("has an identical resource class body", () => {
    expect(classBody(actual, "AccessanalyzerAnalyzer")).toEqual(
      classBody(expected, "AccessanalyzerAnalyzer"),
    );
  });

  it("is byte-identical after normalising header/version lines", () => {
    if (process.env.GOLDEN_BYTES === "0") {
      // Contract escape hatch: record the diff for the verifier instead of failing.
      // Using it is a finding; the default run must be green without it.
      if (actual !== expected) {
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(
          path.join(outDir, "golden.diff"),
          diffLines(expected, actual),
        );
      }
      return;
    }
    expect(actual).toEqual(expected);
  });
});

function diffLines(expected: string, actual: string): string {
  const e = expected.split("\n");
  const a = actual.split("\n");
  const lines: string[] = [];
  for (let i = 0; i < Math.max(e.length, a.length); i++) {
    if (e[i] !== a[i]) {
      lines.push(`@@ line ${i + 1}`);
      lines.push(`- ${e[i] ?? "<eof>"}`);
      lines.push(`+ ${a[i] ?? "<eof>"}`);
    }
  }
  return lines.join("\n") + "\n";
}
