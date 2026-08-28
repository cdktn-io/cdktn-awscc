#!/usr/bin/env node
/**
 * `pnpm package` — builds the publishable `@cdktn/awscc` artifacts: stage the package
 * (`src/stage.ts#stagePackage`, the same model `step6.full-jsii.test.ts` /
 * `step7.lazify.test.ts` use), run `jsii` over it, run `lazify` over the compiled output
 * (README.md, "post-build lazify pass"), then `jsii-pacmak` for the requested targets into
 * `dist/{js,python,java,dotnet,go}`.
 *
 * Needs the same 16 GB heap the full jsii build always has (README.md, "Build gates").
 *
 * Usage:
 *   pnpm package [--version 0.1.0] [--targets js,python]
 *
 * Env (checked before the matching flag, so CI can opt more targets in without changing the
 * command a contributor runs locally):
 *   PACKAGE_VERSION   overrides --version (default "0.0.0")
 *   PACMAK_TARGETS    overrides --targets (default "js,python"; maven/dotnet/go are opt-in here —
 *                     jsii-pacmak's target names are "java", "dotnet", "go")
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import { stagePackage } from "../src/stage";

const PACKAGE_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUT_DIR = path.join(PACKAGE_ROOT, "dist");
const STAGE_DIR = path.join(OUT_DIR, "stage");

function flag(name: string): string | undefined {
  const idx = process.argv.indexOf(`--${name}`);
  return idx !== -1 && idx + 1 < process.argv.length ? process.argv[idx + 1] : undefined;
}

function csv(value: string): string[] {
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}

const version = process.env.PACKAGE_VERSION ?? flag("version") ?? "0.0.0";
const targets = csv(process.env.PACMAK_TARGETS ?? flag("targets") ?? "js,python");

function bin(name: string): string {
  return path.join(PACKAGE_ROOT, "node_modules", ".bin", name);
}

function run(cmd: string, args: string[], cwd: string, env: NodeJS.ProcessEnv = {}): void {
  console.log(`[package] $ ${[cmd, ...args].join(" ")}`);
  execFileSync(cmd, args, {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      NODE_OPTIONS: process.env.NODE_OPTIONS ?? "--max-old-space-size=16384",
      ...env,
    },
  });
}

function dirBytes(dir: string): number {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    total += entry.isDirectory() ? dirBytes(p) : fs.statSync(p).size;
  }
  return total;
}

function humanMB(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/** Prints and records the size of every target's output directory; written to dist/metrics.json
 * so `release.yml` can attach it to the GitHub Release alongside the artifacts themselves. */
function writeMetrics(outDir: string, builtTargets: string[]): void {
  const metrics: Record<string, { bytes: number; human: string }> = {};
  for (const target of builtTargets) {
    const dir = path.join(outDir, target);
    if (!fs.existsSync(dir)) continue;
    const bytes = dirBytes(dir);
    metrics[target] = { bytes, human: humanMB(bytes) };
    console.log(`[package] dist/${target}: ${humanMB(bytes)}`);
  }
  fs.writeFileSync(path.join(outDir, "metrics.json"), JSON.stringify(metrics, null, 2) + "\n");
}

async function main(): Promise<void> {
  console.log(`[package] version=${version} targets=${targets.join(",")}`);

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  stagePackage({ packageRoot: PACKAGE_ROOT, version, stageDir: STAGE_DIR });

  run(bin("jsii"), ["--project-references=false", "--silence-warnings=reserved-word"], STAGE_DIR);

  // README.md, "post-build lazify pass": rewrites the compiled .js so require('@cdktn/awscc')
  // doesn't eagerly pull in all submodule barrels. Same TS_NODE_COMPILER_OPTIONS override the
  // `lazify` package.json script and step7.lazify.test.ts use — the staged tsconfig jsii wrote
  // is `module: NodeNext`, which ts-node otherwise refuses to start under (TS5109).
  run(
    bin("ts-node"),
    ["--transpile-only", path.join(PACKAGE_ROOT, "tools", "lazify", "bin", "lazify.ts"), "."],
    STAGE_DIR,
    { QUIET: "1", TS_NODE_COMPILER_OPTIONS: '{"module":"commonjs","moduleResolution":"node"}' },
  );

  run(bin("jsii-pacmak"), ["--targets", ...targets, "--outdir", OUT_DIR], STAGE_DIR);

  writeMetrics(OUT_DIR, targets);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
