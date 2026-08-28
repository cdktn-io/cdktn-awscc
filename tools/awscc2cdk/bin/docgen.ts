#!/usr/bin/env node
/**
 * `pnpm docgen` — plan §5 step 8: render **one** module (`aws-ec2`) with `jsii-docgen` as the phase-1
 * sample, into `docs/api/aws-ec2.md`. CONTRACT.md "Iteration 4 — docs" is explicit that docgen over
 * the whole 276-module assembly is not a phase-1 deliverable; this script only ever builds and
 * documents the single submodule named on the command line (default `aws-ec2`), so nobody "fixes"
 * the sample by pointing it at the full tree.
 *
 * What it does:
 *   1. stage a throwaway package containing *only* `generated/<module>/**` (the committed files,
 *      byte for byte — this is not a re-generation) plus a one-line root barrel;
 *   2. compile it with `jsii` (a single module compiles in a couple of seconds, unlike the full
 *      1,494-resource tree);
 *   3. run `jsii-docgen -s <jsii submodule> -l typescript` over the staged assembly;
 *   4. copy the rendered file to `docs/api/<module>.md`.
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

const PACKAGE_ROOT = path.resolve(__dirname, "..", "..", "..");
const REPO_ROOT = path.resolve(PACKAGE_ROOT, "..");
const JSII_MANIFEST = path.join(PACKAGE_ROOT, "tools", "awscc2cdk", "jsii", "package.json");
const GENERATED_DIR = path.join(PACKAGE_ROOT, "generated");
const DOCS_API_DIR = path.join(REPO_ROOT, "docs", "api");

const moduleDir = process.argv[2] ?? "aws-ec2";
const submodule = moduleDir.replace(/^aws-/, "aws_").replace(/-/g, "_");

function run(cmd: string, args: string[], cwd: string): void {
  console.log(`[docgen] $ ${cmd} ${args.join(" ")}  (cwd: ${cwd})`);
  execFileSync(cmd, args, {
    cwd,
    stdio: "inherit",
    env: { ...process.env, NODE_OPTIONS: process.env.NODE_OPTIONS ?? "--max-old-space-size=4096" },
  });
}

function main(): void {
  const srcDir = path.join(GENERATED_DIR, moduleDir);
  if (!fs.existsSync(srcDir)) {
    throw new Error(`no such generated module: ${moduleDir} (looked in ${srcDir})`);
  }

  const stage = fs.mkdtempSync(path.join(os.tmpdir(), "awscc2cdk-docgen-"));
  try {
    fs.cpSync(srcDir, path.join(stage, moduleDir), { recursive: true });
    fs.writeFileSync(
      path.join(stage, "index.ts"),
      `export * as ${submodule} from './${moduleDir}';\n`,
    );
    fs.writeFileSync(path.join(stage, "README.md"), `# @cdktn/awscc (docgen sample: ${moduleDir})\n`);

    const jsiiPkg = JSON.parse(fs.readFileSync(JSII_MANIFEST, "utf8"));
    delete jsiiPkg.exports;
    jsiiPkg.main = "index.js";
    jsiiPkg.types = "index.d.ts";
    fs.writeFileSync(path.join(stage, "package.json"), `${JSON.stringify(jsiiPkg, null, 2)}\n`);
    fs.symlinkSync(path.join(PACKAGE_ROOT, "node_modules"), path.join(stage, "node_modules"), "dir");

    run(
      path.join(PACKAGE_ROOT, "node_modules", ".bin", "jsii"),
      ["--project-references=false", "--silence-warnings=reserved-word"],
      stage,
    );

    run(
      path.join(PACKAGE_ROOT, "node_modules", ".bin", "jsii-docgen"),
      ["-s", submodule, "-o", "api", "-l", "typescript"],
      stage,
    );

    fs.mkdirSync(DOCS_API_DIR, { recursive: true });
    const dest = path.join(DOCS_API_DIR, `${moduleDir}.md`);
    fs.copyFileSync(path.join(stage, "api.md"), dest);
    const bytes = fs.statSync(dest).size;
    console.log(`[docgen] wrote ${path.relative(REPO_ROOT, dest)} (${bytes.toLocaleString()} bytes)`);
  } finally {
    fs.rmSync(stage, { recursive: true, force: true });
  }
}

main();
