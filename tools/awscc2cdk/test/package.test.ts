/**
 * `pnpm package --targets js` — the packaging script's own test. `step6.full-jsii.test.ts` proves
 * jsii/jsii-pacmak exit 0 over a hand-built stage; this proves the actual `pnpm package` command
 * a contributor/CI runs produces a real npm tarball whose `package.json` resolves `main`/`types`/
 * `exports`, and that `require()`-ing the extracted tarball from a `node_modules`-nested location
 * actually works — the same failure mode iteration 3b's finding 3 fixed for the raw staged tree.
 *
 * Gated on RUN_FULL_JSII=1 (same budget as step6/step7 — this runs the identical jsii + jsii-pacmak
 * pipeline via `pnpm package` instead of the tests' own inline staging code).
 */
import { execFileSync, spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { tmpDir } from "./helpers/emit";
import { packageRoot } from "./helpers/paths";

const jsiiRun = process.env.RUN_FULL_JSII === "1" ? describe : describe.skip;

jsiiRun("pnpm package --targets js (RUN_FULL_JSII=1)", () => {
  const distJsDir = path.join(packageRoot, "dist", "js");

  beforeAll(() => {
    execFileSync(
      path.join(packageRoot, "node_modules", ".bin", "ts-node"),
      ["--transpile-only", path.join(packageRoot, "tools", "awscc2cdk", "bin", "package.ts")],
      {
        cwd: packageRoot,
        stdio: "inherit",
        env: {
          ...process.env,
          PACKAGE_VERSION: "0.0.0-test",
          PACMAK_TARGETS: "js",
          NODE_OPTIONS: process.env.NODE_OPTIONS ?? "--max-old-space-size=16384",
        },
      },
    );
  }, 3600000);

  it("produces exactly one npm tarball and a metrics.json", () => {
    expect(fs.readdirSync(distJsDir).filter((f) => f.endsWith(".tgz"))).toHaveLength(1);
    const metrics = JSON.parse(fs.readFileSync(path.join(packageRoot, "dist", "metrics.json"), "utf8"));
    expect(metrics.js?.bytes).toBeGreaterThan(0);
  });

  it("the tarball's package.json resolves main/types/exports and require() works", () => {
    const [tgz] = fs.readdirSync(distJsDir).filter((f) => f.endsWith(".tgz"));
    const consumer = tmpDir("awscc2cdk-package-consumer-");
    execFileSync("tar", ["-xzf", path.join(distJsDir, tgz), "-C", consumer]);
    const extracted = path.join(consumer, "package");

    const pkg = JSON.parse(fs.readFileSync(path.join(extracted, "package.json"), "utf8"));
    expect(pkg.version).toBe("0.0.0-test");
    expect(fs.existsSync(path.join(extracted, pkg.main))).toBe(true);
    expect(fs.existsSync(path.join(extracted, pkg.types))).toBe(true);
    expect(pkg.exports["."]).toBeDefined();
    expect(pkg.exports["./aws-ec2"]).toBeDefined();

    // Nest the extracted tarball under node_modules so resolution behaves like a real install —
    // the same shape iteration 3b's finding 3 test proves on the unpacked staged tree.
    const nodeModules = path.join(consumer, "node_modules");
    fs.mkdirSync(path.join(nodeModules, "@cdktn"), { recursive: true });
    fs.renameSync(extracted, path.join(nodeModules, "@cdktn", "awscc"));
    fs.symlinkSync(path.join(packageRoot, "node_modules", "cdktn"), path.join(nodeModules, "cdktn"), "dir");
    fs.symlinkSync(
      path.join(packageRoot, "node_modules", "constructs"),
      path.join(nodeModules, "constructs"),
      "dir",
    );

    const run = spawnSync(
      process.execPath,
      [
        "-e",
        "if (typeof require('@cdktn/awscc/aws-ec2').CcVPC !== 'function') process.exit(3); require('@cdktn/awscc');",
      ],
      { cwd: consumer, encoding: "utf8" },
    );
    expect([run.status, `${run.stderr}`.slice(0, 4000)]).toEqual([0, `${run.stderr}`.slice(0, 4000)]);
    fs.rmSync(consumer, { recursive: true, force: true });
  }, 900000);
});
