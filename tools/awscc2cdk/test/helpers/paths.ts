import * as path from "node:path";

/** cdktn-awscc/tools/awscc2cdk */
export const toolRoot = path.resolve(__dirname, "..", "..");
/** cdktn-awscc */
export const packageRoot = path.resolve(toolRoot, "..", "..");
/** cdktn-grouped-resources */
export const repoRoot = path.resolve(packageRoot, "..");
export const testRoot = path.resolve(toolRoot, "test");
export const fixturesDir = path.join(testRoot, "fixtures");
export const miniSchemaPath = path.join(fixturesDir, "awscc-mini.schema.json");
export const goldenDir = path.join(fixturesDir, "golden");
export const outDir = path.join(testRoot, "out");
export const fullSchemaPath = path.join(repoRoot, "schemas", "schema.json");
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
