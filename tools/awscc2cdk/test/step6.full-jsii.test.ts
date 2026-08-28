/**
 * Iteration 3, plan §5 step 6 (second half) — jsii + jsii-pacmak over the *whole* generated tree,
 * with the metrics and the python import benchmark plan §7 layer 6 asks for.
 * CONTRACT.md "Iteration 3 — full jsii build".
 *
 * Gated on RUN_FULL_JSII=1: budget 90 minutes, NODE_OPTIONS=--max-old-space-size=16384.
 * The manifest assertions and the docs assertions run in the default suite — they are cheap and
 * they are what the implementer has to get right before the expensive run is worth starting.
 *
 * This file is read-only for the implementer.
 */
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { listFiles, tmpDir } from "./helpers/emit";
import { num, readTables, tableWithHeaders } from "./helpers/md-table";
import {
  benchScriptPath,
  distPythonDir,
  fullBuildMetricsPath,
  generatedDir,
  jsiiManifestPath,
  outDir,
  packageExportsPath,
  packageRoot,
  phase1ResultsPath,
} from "./helpers/paths";

const MODULE_DIRS = 276;
const RESOURCE_FILES = 1494;
const jsiiRun = process.env.RUN_FULL_JSII === "1" ? describe : describe.skip;

/* ------------------------------------------------------------------ the manifest */

describe("tools/awscc2cdk/jsii/package.json — the published @cdktn/awscc manifest", () => {
  let pkg: any;
  beforeAll(() => {
    pkg = JSON.parse(fs.readFileSync(jsiiManifestPath, "utf8"));
  });

  it("is the plan §6/§10 package", () => {
    expect(pkg.name).toBe("@cdktn/awscc");
    expect(pkg.private).toBeUndefined();
    expect(pkg.license).toBe("Apache-2.0");
    expect(typeof pkg.version).toBe("string");
    expect(typeof pkg.description).toBe("string");
    expect(pkg.stability).toBe("experimental");
    expect(pkg.author?.name).toBeTruthy();
    expect(pkg.repository?.url).toContain("cdktn-io/cdktn-awscc");
  });

  it("points main/types at the generated barrel", () => {
    expect(pkg.main).toBe("generated/index.js");
    expect(pkg.types).toBe("generated/index.d.ts");
  });

  it("declares the plan §10 jsii targets", () => {
    expect(pkg.jsii.outdir).toBe("dist");
    expect(pkg.jsii.targets).toEqual({
      python: { distName: "cdktn-awscc", module: "cdktn_awscc" },
      java: { package: "io.cdktn.awscc", maven: { groupId: "io.cdktn", artifactId: "cdktn-awscc" } },
      dotnet: { namespace: "Io.Cdktn.AwsCc", packageId: "Io.Cdktn.AwsCc" },
      go: { moduleName: "github.com/cdktn-io/cdktn-awscc-go" },
    });
  });

  it("takes cdktn and constructs as peers", () => {
    expect(pkg.peerDependencies).toEqual({ cdktn: "^0.24.0", constructs: "^10.7.0" });
    // jsii refuses a tree outside cdktn 0.24's constructs range (CONTRACT.md, iteration 2)
    expect(pkg.devDependencies.constructs).toBe("10.7.0");
    expect(pkg.devDependencies.cdktn).toBe("0.24.0");
  });

  it("carries no hand-written exports map — the generator writes it", () => {
    expect(pkg.exports).toBeUndefined();
  });
});

/* ------------------------------------------------------------------ the build */

interface Metrics {
  jsii: { seconds: number; maxRssMB: number; jsiiFileBytes: number; submodules: number; types: number };
  pacmak_python: { seconds: number; wheelBytes: number; fileCount: number };
}

/**
 * `/usr/bin/time -l` on macOS prints its report — including "maximum resident set size", in bytes —
 * on **stderr**, not stdout (iteration-3 finding 2: reading `execFileSync`'s return value, i.e.
 * stdout only, made `maxRssMB` always 0). `spawnSync` gives us both streams on success and on
 * failure, so the regex runs over `stdout + stderr` either way.
 */
function timedRun(cmd: string, args: string[], cwd: string): { code: number; seconds: number; maxRssMB: number; output: string } {
  const started = Date.now();
  const run = spawnSync("/usr/bin/time", ["-l", cmd, ...args], {
    cwd,
    encoding: "utf8",
    maxBuffer: 512 * 1024 * 1024,
    env: { ...process.env, NODE_OPTIONS: process.env.NODE_OPTIONS ?? "--max-old-space-size=16384" },
  });
  const output = `${run.stdout ?? ""}${run.stderr ?? ""}`;
  const rss = /(\d+)\s+maximum resident set size/.exec(output);
  return {
    code: run.status ?? 1,
    seconds: (Date.now() - started) / 1000,
    maxRssMB: rss ? Number(rss[1]) / (1024 * 1024) : 0,
    output,
  };
}

/** self-check for the helper above: `maxRssMB` must be a real number, not the silent 0. */
describe("timedRun", () => {
  it("reads maximum resident set size off /usr/bin/time -l's stderr", () => {
    const run = timedRun(process.execPath, ["-e", "process.exit(0)"], process.cwd());
    expect(run.code).toBe(0);
    expect(run.maxRssMB).toBeGreaterThan(0);
  });
});

jsiiRun("jsii + jsii-pacmak over the whole provider (RUN_FULL_JSII=1)", () => {
  let stage: string;
  let metrics: Partial<Metrics> = {};

  beforeAll(() => {
    stage = tmpDir("awscc2cdk-jsii-");
    fs.cpSync(generatedDir, path.join(stage, "generated"), { recursive: true });
    const pkg = JSON.parse(fs.readFileSync(jsiiManifestPath, "utf8"));
    pkg.exports = JSON.parse(fs.readFileSync(packageExportsPath, "utf8"));
    fs.writeFileSync(path.join(stage, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
    fs.symlinkSync(path.join(packageRoot, "node_modules"), path.join(stage, "node_modules"), "dir");
  }, 900000);

  afterAll(() => {
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(fullBuildMetricsPath, JSON.stringify(metrics, null, 2) + "\n");
    if (stage) fs.rmSync(stage, { recursive: true, force: true });
  });

  it("jsii exits 0 over generated/", () => {
    const run = timedRun(
      path.join(packageRoot, "node_modules", ".bin", "jsii"),
      ["--project-references=false", "--silence-warnings=reserved-word"],
      stage,
    );
    expect([run.code, run.output.slice(-4000)]).toEqual([0, run.output.slice(-4000)]);

    const assemblyPath = path.join(stage, ".jsii");
    expect(fs.existsSync(assemblyPath)).toBe(true);
    const assembly = JSON.parse(fs.readFileSync(assemblyPath, "utf8"));
    const submodules = Object.keys(assembly.submodules ?? {});
    expect(submodules.length).toBe(MODULE_DIRS);
    expect(submodules).toContain("@cdktn/awscc.aws_ec2");
    expect(assembly.types["@cdktn/awscc.aws_ec2.CcVPC"]).toBeDefined();
    expect(Object.keys(assembly.types).length).toBeGreaterThan(RESOURCE_FILES);

    metrics.jsii = {
      seconds: run.seconds,
      maxRssMB: run.maxRssMB,
      jsiiFileBytes: fs.statSync(assemblyPath).size,
      submodules: submodules.length,
      types: Object.keys(assembly.types).length,
    };
  }, 5400000);

  it("jsii-pacmak --targets python exits 0 and builds a wheel", () => {
    // Iteration-3 finding 5: pacmak's default `--clean` deletes the loose python source once the
    // wheel is built, so the assertion belongs on the **wheel**, not on `dist/python/src/…`.
    // There is no escape hatch: the wheel is what the benchmark installs and what we ship.
    const run = timedRun(
      path.join(packageRoot, "node_modules", ".bin", "jsii-pacmak"),
      ["--targets", "python"],
      stage,
    );
    expect([run.code, run.output.slice(-4000)]).toEqual([0, run.output.slice(-4000)]);

    const pythonDir = path.join(stage, "dist", "python");
    const wheels = fs.existsSync(pythonDir) ? fs.readdirSync(pythonDir).filter((f) => f.endsWith(".whl")) : [];
    expect(wheels).toHaveLength(1);
    const wheelPath = path.join(pythonDir, wheels[0]);
    expect(wheels[0]).toMatch(/^cdktn_awscc-/);

    const listing = spawnSync("unzip", ["-l", wheelPath], { encoding: "utf8" });
    expect(listing.status).toBe(0);
    expect(listing.stdout).toContain("cdktn_awscc/aws_ec2/__init__.py");
    expect(listing.stdout).toContain("cdktn_awscc/__init__.py");

    // Finding 7: park the graded build's own wheel where the benchmark reads it, so the numbers
    // in docs/phase1-results.md come from this pipeline and not a hand-patched artifact.
    fs.mkdirSync(distPythonDir, { recursive: true });
    for (const stale of fs.readdirSync(distPythonDir).filter((f) => f.endsWith(".whl"))) {
      fs.rmSync(path.join(distPythonDir, stale));
    }
    fs.copyFileSync(wheelPath, path.join(distPythonDir, wheels[0]));

    metrics.pacmak_python = {
      seconds: run.seconds,
      wheelBytes: fs.statSync(wheelPath).size,
      fileCount: listFiles(pythonDir).length,
    };
  }, 5400000);

  it("the staged package is requireable through its exports map", () => {
    // Finding 3, on the real compiled tree this time: jsii has emitted .js/.d.ts next to the .ts,
    // so `require('@cdktn/awscc')` and `require('@cdktn/awscc/aws-ec2')` must both resolve.
    const consumer = tmpDir("awscc2cdk-consumer-");
    fs.mkdirSync(path.join(consumer, "node_modules", "@cdktn"), { recursive: true });
    fs.symlinkSync(stage, path.join(consumer, "node_modules", "@cdktn", "awscc"), "dir");
    const run = spawnSync(
      process.execPath,
      ["-e", "if (typeof require('@cdktn/awscc/aws-ec2').CcVPC !== 'function') process.exit(3); require('@cdktn/awscc');"],
      { cwd: consumer, encoding: "utf8" },
    );
    expect([run.status, `${run.stderr}`.slice(0, 4000)]).toEqual([0, `${run.stderr}`.slice(0, 4000)]);
    fs.rmSync(consumer, { recursive: true, force: true });
  }, 900000);
});

/* ------------------------------------------------------------------ the metrics file */

describe("test/out/full-build-metrics.json", () => {
  const gated = process.env.RUN_FULL_JSII === "1" || fs.existsSync(fullBuildMetricsPath);
  (gated ? it : it.skip)("has every field the contract asks for", () => {
    const m = JSON.parse(fs.readFileSync(fullBuildMetricsPath, "utf8"));
    for (const k of ["seconds", "maxRssMB", "jsiiFileBytes", "submodules", "types"]) {
      expect([k, typeof m.jsii?.[k]]).toEqual([k, "number"]);
      expect([k, m.jsii[k]]).toEqual([k, m.jsii[k]]);
      expect(m.jsii[k]).toBeGreaterThan(0);
    }
    for (const k of ["seconds", "fileCount", "wheelBytes"]) {
      // wheelBytes joined the "> 0" set in iteration 3b: there is no --code-only fallback any more.
      expect([k, typeof m.pacmak_python?.[k]]).toEqual([k, "number"]);
      expect(m.pacmak_python[k]).toBeGreaterThan(0);
    }
    expect(m.jsii.submodules).toBe(MODULE_DIRS);
  });
});

/* ------------------------------------------------------------------ the benchmark */

const BENCH_HEADERS = ["#", "measurement", "package", "median s", "modules loaded"];
const BENCH_ROWS = ["a", "b", "c", "d", "e"];

describe("docs/phase1-results.md — the python import benchmark", () => {
  it("has the benchmark script", () => {
    expect(fs.existsSync(benchScriptPath)).toBe(true);
  });

  it("exists and names the toolchain versions it measured", () => {
    expect(fs.existsSync(phase1ResultsPath)).toBe(true);
    const md = fs.readFileSync(phase1ResultsPath, "utf8");
    expect(md).toMatch(/jsii-pacmak version:\s*\S+/i);
    expect(md).toMatch(/cdktn-provider-awscc version:\s*\S+/i);
  });

  it("has all five measurements for both packages", () => {
    const table = tableWithHeaders(readTables(phase1ResultsPath), BENCH_HEADERS);
    expect(table).toBeDefined();
    const labels = table!.rows.map((r) => r["#"].toLowerCase());
    for (const l of BENCH_ROWS) expect(labels).toContain(l);
    const packages = new Set(table!.rows.map((r) => r.package));
    expect(packages.has("cdktn-provider-awscc")).toBe(true);
    expect(packages.has("cdktn-awscc")).toBe(true);
    // (e) — instantiate a resource in a TerraformStack — is measured for both packages
    expect(table!.rows.filter((r) => r["#"].toLowerCase() === "e").length).toBe(2);
    for (const row of table!.rows) {
      expect([row["#"], Number.isFinite(num(row["median s"]))]).toEqual([row["#"], true]);
      expect([row["#"], Number.isInteger(num(row["modules loaded"]))]).toEqual([row["#"], true]);
    }
  });
});

/* keep the import of `os` meaningful for the record: the metrics are platform-specific */
describe("environment", () => {
  it("records the platform the budgets were measured on", () => {
    expect(["darwin", "linux"]).toContain(os.platform());
  });
});
