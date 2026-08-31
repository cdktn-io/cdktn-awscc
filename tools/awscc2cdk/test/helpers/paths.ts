import * as path from "node:path";

/** cdktn-awscc/tools/awscc2cdk */
export const toolRoot = path.resolve(__dirname, "..", "..");
/** cdktn-awscc */
export const packageRoot = path.resolve(toolRoot, "..", "..");
/**
 * `cdktn-grouped-resources`, the frozen PoC workspace `cdktn-awscc/` was subtree-split out of —
 * still correct for a `~/cdktn/cdktn-grouped-resources`-style checkout, but a standalone clone of
 * `cdktn-io/cdktn-awscc` (what CI, and every other contributor, actually has) has nothing at this
 * path. Only used by the small set of paths below that point at that workspace's `docs/` and
 * `scripts/`, which are intentionally not part of this repo (see the workspace's own README,
 * "Publishing to cdktn-io/cdktn-awscc" — "the evidence docs in this workspace's docs/ are
 * intentionally not part of that repo"). Those paths — and only those — stay broken outside that
 * one workspace checkout; the suites that hard-depend on them are excluded from `pnpm test` in
 * `jest.config.js` (see the comment there) rather than silently left red. `fullSchemaPath` below
 * is deliberately **not** derived from `repoRoot`: the schema is fetched fresh in every checkout
 * (`pnpm schema:fetch` / CI), so it lives inside `packageRoot` instead, where a standalone clone
 * can actually write it.
 */
export const repoRoot = path.resolve(packageRoot, "..");
export const testRoot = path.resolve(toolRoot, "test");
export const fixturesDir = path.join(testRoot, "fixtures");
export const miniSchemaPath = path.join(fixturesDir, "awscc-mini.schema.json");
export const goldenDir = path.join(fixturesDir, "golden");
export const outDir = path.join(testRoot, "out");
/** fetched by `pnpm schema:fetch` (`scripts/update-provider-schema.ts`) into the package itself —
 * gitignored, not a sibling-workspace path — so a standalone clone is self-contained. */
export const fullSchemaPath = path.join(packageRoot, "schemas", "schema.json");
export const AWSCC_FQPN = "registry.terraform.io/hashicorp/awscc";

/* ---- iteration 2 ---- */

/** cdktn-grouped-resources/docs */
export const docsDir = path.join(repoRoot, "docs");
/** the naming spike report the implementer writes (plan §4, §5 step 3) */
export const spikeDocPath = path.join(docsDir, "spike-naming.md");
/** aws-cdk-lib, installed as a devDependency of cdktn-awscc, used as the shape-parity reference */
export const awsCdkLibDir = path.join(packageRoot, "node_modules", "aws-cdk-lib");
/** ratchet baseline, committed by the contract writer */
export const shapeParityBaselinePath = path.join(testRoot, "shape-parity.baseline.json");
/** explicit, auditable list of resources the implementer could not get through a stage */
export const exclusionsPath = path.join(testRoot, "jsii-exclude.json");

/* ---- iteration 3 ---- */

/** the committed generator output — the whole provider (plan §5 step 6) */
export const generatedDir = path.join(packageRoot, "generated");
/** `.gitattributes` marking `generated/**` as linguist-generated */
export const gitattributesPath = path.join(generatedDir, ".gitattributes");
/** hash manifest the generator writes over everything it emitted */
export const manifestPath = path.join(generatedDir, "MANIFEST.sha256");
/** vendored scope-map + the auto-extended entries, written by the generator so it is reviewable */
export const effectiveScopeMapPath = path.join(generatedDir, "scope-map.effective.json");
/** the `exports` map for the published package.json, written by the generator */
export const packageExportsPath = path.join(generatedDir, "package.exports.json");
/** the manifest the published `@cdktn/awscc` uses; staged by the full jsii build */
export const jsiiManifestPath = path.join(toolRoot, "jsii", "package.json");
/** entrypoint that regenerates `generated/` (wired to `pnpm generate`) */
export const generateAllBinPath = path.join(toolRoot, "bin", "generate-all.ts");
/** full-build metrics written by step6.full-jsii.test.ts */
export const fullBuildMetricsPath = path.join(outDir, "full-build-metrics.json");
/** step 6/7 results write-up (plan §7 layer 6) */
export const phase1ResultsPath = path.join(docsDir, "phase1-results.md");
/** python import benchmark, Option 0 baseline vs. ours */
export const benchScriptPath = path.join(repoRoot, "scripts", "bench_python_import.py");
/** the vendored aws-cdk-lib scope map */
export const scopeMapPath = path.join(toolRoot, "src", "vendored", "scope-map.json");
export const vendoredDocPath = path.join(toolRoot, "src", "vendored", "VENDORED.md");

/* ---- iteration 3b ---- */

/** `cdktn-awscc/dist` — jsii's outdir; gitignored. */
export const distDir = path.join(packageRoot, "dist");
/** stable home of the wheel the graded pipeline built, consumed by `scripts/bench_python_import.py` */
export const distPythonDir = path.join(distDir, "python");
/** `cdktn-awscc/.gitignore` — must ignore `dist/` (iteration 3b, finding 7) */
export const packageGitignorePath = path.join(packageRoot, ".gitignore");

/* ---- iteration 4 ---- */

/** `cdktn-awscc/package.json` — the workspace manifest (devDeps for lazify + jsii-docgen) */
export const packageJsonPath = path.join(packageRoot, "package.json");
/** `cdktn-awscc/tools/lazify` — the vendored `@aws-cdk/lazify` (plan §5 step 7) */
export const lazifyDir = path.join(packageRoot, "tools", "lazify");
export const lazifyVendoredDocPath = path.join(lazifyDir, "VENDORED.md");
/** upstream lazify, on this machine — the origin every VENDORED.md row must point at */
export const lazifyOriginDir = path.join(
  process.env.HOME ?? "",
  "cdk", "aws-cdk", "tools", "@aws-cdk", "lazify",
);
/** JS cold-start require benchmark (plan §5 step 7, the JS half of §7 layer 6) */
export const jsBenchScriptPath = path.join(repoRoot, "scripts", "bench_js_require.mjs");
/** written by `scripts/bench_js_require.mjs`, asserted by `step7.lazify.test.ts` */
export const jsBenchPath = path.join(outDir, "js-bench.json");
/** the package README (plan §5 step 8, §10) */
export const readmePath = path.join(packageRoot, "README.md");
/** jsii-docgen sample output (plan §5 step 8) */
export const apiDocsDir = path.join(docsDir, "api");
export const ec2ApiDocPath = path.join(apiDocsDir, "aws-ec2.md");
