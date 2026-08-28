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
