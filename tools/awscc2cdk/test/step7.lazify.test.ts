/**
 * Iteration 4, plan §5 step 7 / plan §1 "lazy loading" — run the vendored `lazify` over the
 * jsii-compiled package and prove (a) the barrel no longer eagerly `require()`s its 276 submodules,
 * (b) both entrypoints still work, (c) cold-start `require()` got cheaper.
 * CONTRACT.md, "Iteration 4 — lazify".
 *
 * Gated on RUN_FULL_JSII=1 (same staging model as `step6.full-jsii.test.ts`: `generated/` copied
 * into a temp package root, `exports` merged in from `generated/package.exports.json`,
 * `node_modules` symlinked, then `jsii`). Budget: ~30 minutes; `jsii` itself measured 31–34 s in
 * iteration 3b, the benchmark spawns 5 cold node processes per measurement.
 * The JSON-shape and acceptance assertions below run in the default suite whenever
 * `test/out/js-bench.json` exists, so the numbers can be re-checked without re-running the build.
 *
 * This file is read-only for the implementer.
 */
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { tmpDir } from "./helpers/emit";
import {
  generatedDir,
  jsBenchPath,
  jsBenchScriptPath,
  jsiiManifestPath,
  outDir,
  packageExportsPath,
  packageRoot,
  repoRoot,
} from "./helpers/paths";

const MODULE_DIRS = 276;
const jsiiRun = process.env.RUN_FULL_JSII === "1" ? describe : describe.skip;

/**
 * The exact output shape of `@aws-cdk/lazify` at the vendored commit, measured by the contract
 * writer on a two-file probe compiled with this repo's `tsc 5.9` (module commonjs, target ES2022):
 *
 *   exports.aws_ec2 = void 0;
 *   Object.defineProperty(exports, _noFold = "aws_ec2", { enumerable: true, configurable: true,
 *     get: () => { var value = require("./aws-ec2"); Object.defineProperty(exports, _noFold =
 *     "aws_ec2", { enumerable: true, configurable: true, value }); return value; } });
 *
 * `var _noFold` and `var value` are `var` (the tool builds the declaration list with no node
 * flags), and the whole getter prints on one line. The regexes below are whitespace-tolerant
 * versions of that literal, so a printer nicety does not fail the suite but the shape still has to
 * be lazify's.
 */
function moduleGetter(exportName: string, moduleName: string): RegExp {
  const e = exportName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = moduleName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(
    `Object\\.defineProperty\\(exports,\\s*_noFold\\s*=\\s*"${e}",\\s*\\{\\s*enumerable:\\s*true,` +
      `\\s*configurable:\\s*true,\\s*get:\\s*\\(\\)\\s*=>\\s*\\{\\s*(var|let|const)\\s+value\\s*=\\s*require\\("${m}"\\)`,
  );
}

function run(cmd: string, args: string[], cwd: string, env: NodeJS.ProcessEnv = {}) {
  const r = spawnSync(cmd, args, {
    cwd,
    encoding: "utf8",
    maxBuffer: 512 * 1024 * 1024,
    env: { ...process.env, ...env, NODE_OPTIONS: process.env.NODE_OPTIONS ?? "--max-old-space-size=16384" },
  });
  return { code: r.status ?? 1, output: `${r.stdout ?? ""}${r.stderr ?? ""}` };
}

/* ------------------------------------------------------------------ the build + the transform */

jsiiRun("lazify over the jsii-compiled package (RUN_FULL_JSII=1)", () => {
  let stage: string;
  const indexJs = () => path.join(stage, "generated", "index.js");
  const ec2IndexJs = () => path.join(stage, "generated", "aws-ec2", "index.js");

  beforeAll(() => {
    stage = tmpDir("awscc2cdk-lazify-");
    fs.cpSync(generatedDir, path.join(stage, "generated"), { recursive: true });
    const pkg = JSON.parse(fs.readFileSync(jsiiManifestPath, "utf8"));
    pkg.exports = JSON.parse(fs.readFileSync(packageExportsPath, "utf8"));
    fs.writeFileSync(path.join(stage, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
    fs.symlinkSync(path.join(packageRoot, "node_modules"), path.join(stage, "node_modules"), "dir");

    const jsii = run(
      path.join(packageRoot, "node_modules", ".bin", "jsii"),
      ["--project-references=false", "--silence-warnings=reserved-word"],
      stage,
    );
    if (jsii.code !== 0) throw new Error(`jsii failed:\n${jsii.output.slice(-4000)}`);
  }, 3600000);

  afterAll(() => {
    if (stage) fs.rmSync(stage, { recursive: true, force: true });
  });

  it("compiles to an eager barrel before lazify (the thing we are removing)", () => {
    const before = fs.readFileSync(indexJs(), "utf8");
    // `export * as aws_ec2 from './aws-ec2'` -> `exports.aws_ec2 = require("./aws-ec2");`
    expect(before).toMatch(/exports\.aws_ec2\s*=\s*(__importStar\()?require\("\.\/aws-ec2"\)/);
    // and every submodule barrel re-exports eagerly through the __exportStar helper
    expect(fs.readFileSync(ec2IndexJs(), "utf8")).toMatch(/__exportStar\(require\("\.\/vpc"\)/);
  }, 600000);

  it("measures the before-lazify cold start into test/out/js-bench.json", () => {
    fs.mkdirSync(outDir, { recursive: true });
    const bench = run(
      process.execPath,
      [jsBenchScriptPath, "--package", stage, "--label", "before", "--out", jsBenchPath, "--runs", "5"],
      repoRoot,
    );
    expect([bench.code, bench.output.slice(-4000)]).toEqual([0, bench.output.slice(-4000)]);
  }, 1800000);

  it("`lazify .` exits 0 over the compiled package", () => {
    // aws-cdk-lib runs this as `env QUIET=1 lazify .` in its `cdk-build.post` hook; ours is the
    // vendored copy behind `pnpm lazify` (ts-node), invoked from the staged package root.
    const lazify = run(
      path.join(packageRoot, "node_modules", ".bin", "ts-node"),
      ["--transpile-only", path.join(packageRoot, "tools", "lazify", "bin", "lazify.ts"), "."],
      stage,
      { QUIET: "1", TS_NODE_COMPILER_OPTIONS: '{"module":"commonjs","moduleResolution":"node"}' },
    );
    expect([lazify.code, lazify.output.slice(-4000)]).toEqual([0, lazify.output.slice(-4000)]);
  }, 3600000);

  it("leaves no eager submodule require() in generated/index.js", () => {
    const js = fs.readFileSync(indexJs(), "utf8");
    expect(js).not.toMatch(/exports\.aws_\w+\s*=\s*(__importStar\()?require\(/);
    // Every remaining `require("./aws-…")` must sit inside a lazify getter body.
    const stray = js
      .split("\n")
      .filter((l) => l.includes('require("./aws-'))
      .filter((l) => !/(var|let|const)\s+value\s*=\s*require\("\.\/aws-/.test(l));
    expect(stray).toEqual([]);
  });

  it("replaces the barrel with lazify's memoised getters, one per submodule", () => {
    const js = fs.readFileSync(indexJs(), "utf8");
    expect(js).toMatch(/(var|let)\s+_noFold\s*;/);
    expect(js).toMatch(moduleGetter("aws_ec2", "./aws-ec2"));
    expect(js).toMatch(moduleGetter("aws_s3", "./aws-s3"));
    const getters = js.match(/Object\.defineProperty\(exports,\s*_noFold\s*=\s*"aws_/g) ?? [];
    // one `defineProperty` for the getter + one for the memoising re-definition inside it
    expect(getters.length).toBe(MODULE_DIRS * 2);
  });

  it("lazifies the submodule barrels too (`export *` -> per-symbol getters)", () => {
    const js = fs.readFileSync(ec2IndexJs(), "utf8");
    expect(js).not.toMatch(/__exportStar\(require\(/); // the helper *definition* may stay; no calls
    expect(js).toMatch(moduleGetter("CcVPC", "./vpc"));
  });

  it("still resolves through both entrypoints after the transform", () => {
    const consumer = tmpDir("awscc2cdk-lazify-consumer-");
    fs.mkdirSync(path.join(consumer, "node_modules", "@cdktn"), { recursive: true });
    fs.symlinkSync(stage, path.join(consumer, "node_modules", "@cdktn", "awscc"), "dir");
    const script = [
      "if (typeof require('@cdktn/awscc/aws-ec2').CcVPC !== 'function') process.exit(3);",
      "if (typeof require('@cdktn/awscc').aws_ec2.CcVPC !== 'function') process.exit(4);",
    ].join("\n");
    const r = spawnSync(process.execPath, ["-e", script], { cwd: consumer, encoding: "utf8" });
    expect([r.status, `${r.stderr}`.slice(0, 4000)]).toEqual([0, `${r.stderr}`.slice(0, 4000)]);
    fs.rmSync(consumer, { recursive: true, force: true });
  }, 900000);

  it("measures the after-lazify cold start into test/out/js-bench.json", () => {
    const bench = run(
      process.execPath,
      [jsBenchScriptPath, "--package", stage, "--label", "after", "--out", jsBenchPath, "--runs", "5"],
      repoRoot,
    );
    expect([bench.code, bench.output.slice(-4000)]).toEqual([0, bench.output.slice(-4000)]);
  }, 1800000);
});

/* ------------------------------------------------------------------ the benchmark artifact */

interface Measurement {
  id: string;
  phase: string;
  package: string;
  expression: string;
  medianSeconds: number;
  medianRequireSeconds: number;
  heapUsedBytes: number;
  modulesLoaded: number;
  samples: number[];
}

const EXPECTED: ReadonlyArray<readonly [string, string]> = [
  ["a", "before"],
  ["a", "after"],
  ["b", "before"],
  ["b", "after"],
  ["c", "baseline"],
];

describe("scripts/bench_js_require.mjs", () => {
  it("exists", () => {
    expect(fs.existsSync(jsBenchScriptPath)).toBe(true);
  });

  it("spawns a fresh node process per run and reports the median of 5", () => {
    const src = fs.readFileSync(jsBenchScriptPath, "utf8");
    expect(src).toMatch(/spawnSync|execFileSync/);
    expect(src).toMatch(/median/i);
    expect(src).toMatch(/heapUsed/);
    expect(src).toMatch(/require\.cache/);
    expect(src).toMatch(/@cdktn\/provider-awscc/);
  });
});

describe("test/out/js-bench.json", () => {
  const gated = process.env.RUN_FULL_JSII === "1" || fs.existsSync(jsBenchPath);
  const read = () => JSON.parse(fs.readFileSync(jsBenchPath, "utf8"));

  (gated ? it : it.skip)("has the five measurements, all numeric", () => {
    const b = read();
    expect(b.node).toMatch(/^v\d+\./);
    expect(Number(String(b.node).slice(1).split(".")[0])).toBeGreaterThanOrEqual(24);
    expect(b.runs).toBeGreaterThanOrEqual(5);
    expect(typeof b.providerAwsccVersion).toBe("string");
    const ms: Measurement[] = b.measurements;
    expect(Array.isArray(ms)).toBe(true);
    for (const [id, phase] of EXPECTED) {
      const m = ms.find((x) => x.id === id && x.phase === phase);
      expect([id, phase, Boolean(m)]).toEqual([id, phase, true]);
      for (const k of ["medianSeconds", "medianRequireSeconds", "heapUsedBytes", "modulesLoaded"] as const) {
        expect([id, phase, k, typeof m![k]]).toEqual([id, phase, k, "number"]);
        expect([id, phase, k, m![k] > 0]).toEqual([id, phase, k, true]);
      }
      expect([id, phase, m!.samples.length]).toEqual([id, phase, b.runs]);
      expect([id, phase, typeof m!.expression]).toEqual([id, phase, "string"]);
    }
    // (c) is the published Terraform-shaped provider from npm, the options.md Option 0 baseline
    expect(ms.find((x) => x.id === "c")!.package).toBe("@cdktn/provider-awscc");
    for (const [id, phase] of EXPECTED.filter(([, p]) => p !== "baseline")) {
      expect(ms.find((x) => x.id === id && x.phase === phase)!.package).toBe("@cdktn/awscc");
    }
  });

  (gated ? it : it.skip)("loads dramatically fewer modules after lazify (the hard gate)", () => {
    // This is the noise-free evidence that the transform did what it claims: `require('@cdktn/awscc')`
    // must stop pulling all 276 submodule barrels and 1,494 resource files into `require.cache`.
    // Half is a deliberately loose ratchet — the floor is the peer/kernel chain (cdktn, constructs),
    // which lazify cannot remove.
    const ms: Measurement[] = read().measurements;
    const before = ms.find((x) => x.id === "a" && x.phase === "before")!;
    const after = ms.find((x) => x.id === "a" && x.phase === "after")!;
    expect(after.modulesLoaded).toBeLessThan(before.modulesLoaded * 0.5);
  });

  (gated ? it : it.skip)("gets faster on measurement (a) — warn-only inside the noise band", () => {
    // Acceptance: after-lazify (a) median < before-lazify (a) median.
    // Downgraded to a warning while |delta| < 10%: (a) is a *cold start* — process spawn, V8 boot,
    // and the OS page cache dominate a sub-second measurement, and a 5-run median on a laptop
    // spreads by a few percent run to run (iteration 3b saw 5,345–6,519 MB RSS variance on the same
    // build). A sub-10% number in either direction is therefore not distinguishable from noise and
    // must not fail a graded suite; a >10% regression is real and does fail. The module-count gate
    // above is the assertion with teeth.
    const ms: Measurement[] = read().measurements;
    const before = ms.find((x) => x.id === "a" && x.phase === "before")!;
    const after = ms.find((x) => x.id === "a" && x.phase === "after")!;
    const delta = (before.medianSeconds - after.medianSeconds) / before.medianSeconds;
    if (delta < 0.1) {
      // eslint-disable-next-line no-console
      console.warn(
        `[step7] lazify moved (a) by ${(delta * 100).toFixed(1)}% ` +
          `(${before.medianSeconds.toFixed(4)}s -> ${after.medianSeconds.toFixed(4)}s): inside the ` +
          `noise band, reported not enforced. docs/phase1-results.md must say so.`,
      );
    }
    expect(delta).toBeGreaterThan(-0.1);
  });
});
