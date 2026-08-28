/**
 * Shared staging logic for `pnpm package` (`tools/awscc2cdk/bin/package.ts`): build the same
 * `{package.json, generated/**}` package root the test suite's own (inline, duplicated-by-design)
 * staging code builds in `step6.full-jsii.test.ts` and `step7.lazify.test.ts` — `generated/`
 * copied under the stage root, `tools/awscc2cdk/jsii/package.json` with `exports` merged in from
 * `generated/package.exports.json`, `node_modules` symlinked back to the repo's own install.
 *
 * This module exists only for `pnpm package`; the two test files above are marked "read-only for
 * the implementer" in CONTRACT.md and are intentionally left with their own copies of this logic
 * rather than being pointed at this one, so this file changes nothing about what they assert.
 */
import * as fs from "node:fs";
import * as path from "node:path";

export interface StageOptions {
  /** `cdktn-awscc` — the repo/package root (`tools/awscc2cdk/test/helpers/paths.ts#packageRoot`). */
  readonly packageRoot: string;
  /** written into the staged `package.json`'s `version` field. */
  readonly version: string;
  /** directory the staged package is built into; removed and recreated. */
  readonly stageDir: string;
}

/** Extra root files a consumer expects next to `package.json` — copied if present, skipped if not. */
const EXTRA_FILES = ["README.md", "LICENSE", "NOTICE"];

export function stagePackage({ packageRoot, version, stageDir }: StageOptions): void {
  const jsiiManifestPath = path.join(packageRoot, "tools", "awscc2cdk", "jsii", "package.json");
  const generatedDir = path.join(packageRoot, "generated");
  const packageExportsPath = path.join(generatedDir, "package.exports.json");

  fs.rmSync(stageDir, { recursive: true, force: true });
  fs.mkdirSync(stageDir, { recursive: true });

  fs.cpSync(generatedDir, path.join(stageDir, "generated"), { recursive: true });

  const pkg = JSON.parse(fs.readFileSync(jsiiManifestPath, "utf8"));
  pkg.version = version;
  pkg.exports = JSON.parse(fs.readFileSync(packageExportsPath, "utf8"));
  // The generator's exports map (generated/package.exports.json) only knows about the resource
  // submodules it emits; it doesn't own "./package.json". Add it here, at the one place that
  // actually writes the published package.json, so tools that resolve a package's own manifest
  // via the standard `require("<pkg>/package.json")` / `import.meta.resolve` convention (bundlers,
  // doc generators, version probes) don't hit ERR_PACKAGE_PATH_NOT_EXPORTED.
  pkg.exports["./package.json"] = "./package.json";
  fs.writeFileSync(path.join(stageDir, "package.json"), JSON.stringify(pkg, null, 2) + "\n");

  for (const file of EXTRA_FILES) {
    const src = path.join(packageRoot, file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(stageDir, file));
  }

  // jsii/jsii-pacmak resolve `cdktn`/`constructs` etc. off this; the real publish pipeline (like
  // the test suite's own staging) reuses the repo's own install rather than a second `pnpm install`.
  fs.symlinkSync(path.join(packageRoot, "node_modules"), path.join(stageDir, "node_modules"), "dir");
}
