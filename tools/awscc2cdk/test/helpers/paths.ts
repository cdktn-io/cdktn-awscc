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
