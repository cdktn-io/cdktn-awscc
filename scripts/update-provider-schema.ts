/**
 * Fetches the hashicorp/awscc terraform provider schema (via the terraform/opentofu CLI,
 * `@cdktn/provider-schema`'s `readSchema()`) and writes it to `schemas/awscc.schema.json`.
 *
 * Not exercised by the test suite (network + a terraform-compatible CLI binary required); run it
 * manually or in CI to refresh the schema used to regenerate fixtures. Plan §5 step 1.
 *
 * Usage: `npx ts-node scripts/update-provider-schema.ts [providerVersion]`
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { TerraformProviderConstraint } from "@cdktn/commons";
import { readSchema } from "@cdktn/provider-schema";

const OUT_PATH = path.join(__dirname, "..", "schemas", "awscc.schema.json");

async function main(): Promise<void> {
  const version = process.argv[2];
  const source = version ? `hashicorp/awscc@${version}` : "hashicorp/awscc";
  const constraint = new TerraformProviderConstraint(source);

  const cacheDir = fs.mkdtempSync(
    path.join(os.tmpdir(), "awscc2cdk-schema-cache-"),
  );
  try {
    const { providerSchema } = await readSchema([constraint], cacheDir);
    if (!providerSchema) {
      throw new Error(
        `readSchema() returned no providerSchema for ${source}`,
      );
    }

    fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
    fs.writeFileSync(OUT_PATH, JSON.stringify(providerSchema, null, 2) + "\n");
    // eslint-disable-next-line no-console
    console.log(`wrote ${OUT_PATH}`);
  } finally {
    fs.rmSync(cacheDir, { recursive: true, force: true });
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});
