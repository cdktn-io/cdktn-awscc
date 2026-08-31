/**
 * Fetches the hashicorp/awscc terraform provider schema (via the terraform/opentofu CLI,
 * `@cdktn/provider-schema`'s `readSchema()`) and writes it to `cdktn-awscc/schemas/schema.json`
 * (gitignored — this repo is standalone, not nested one level under a workspace root), which is
 * the single path every test helper (`tools/awscc2cdk/test/helpers/paths.ts#fullSchemaPath`) reads
 * from, and what `pnpm generate` reads from too. Iteration 1 wrote a second, package-local
 * `schemas/` directory instead (a stale "awscc." + "schema.json" path under `cdktn-awscc/`); that
 * path is retired (iteration-2 debt (b), see CONTRACT.md "Iteration 2 — debt from iteration 1").
 *
 * Needs network + a terraform-or-opentofu binary on `PATH` (or `TERRAFORM_BINARY_NAME`); CI runs
 * this in `build.yml` / `upgrade.yml` behind `hashicorp/setup-terraform`, caching the result with
 * `actions/cache` keyed on the resolved awscc provider version so a schema that hasn't changed
 * doesn't get re-fetched (and re-run `terraform init`) on every build.
 *
 * `schemas/schema.json` is pinned, not "latest": the committed `generated/` tree (and the
 * resource/module counts baked into CONTRACT.md and the test suite) reflect one specific awscc
 * provider version, recorded in the committed `schemas/PROVIDER_VERSION`. With no CLI argument,
 * this script fetches *that* pinned version — the safe default for `build.yml`'s
 * "generated-is-current" check and for any contributor running `pnpm generate` locally. Only
 * `upgrade.yml`'s scheduled job passes an explicit newer version (queried from the registry) on
 * purpose, to find out whether `generated/` needs regenerating — and if a resulting PR is merged,
 * it also rewrites `schemas/PROVIDER_VERSION` to match, so the pin and `generated/` never drift
 * apart.
 *
 * Usage: `pnpm schema:fetch [providerVersion]` (or `npx ts-node scripts/update-provider-schema.ts
 * [providerVersion]` directly)
 */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { TerraformProviderConstraint } from "@cdktn/commons";
import { readSchema } from "@cdktn/provider-schema";

const OUT_PATH = path.join(__dirname, "..", "schemas", "schema.json");
const PINNED_VERSION_PATH = path.join(__dirname, "..", "schemas", "PROVIDER_VERSION");

function pinnedVersion(): string | undefined {
  if (!fs.existsSync(PINNED_VERSION_PATH)) return undefined;
  return fs.readFileSync(PINNED_VERSION_PATH, "utf8").trim() || undefined;
}

async function main(): Promise<void> {
  const version = process.argv[2] ?? pinnedVersion();
  if (!version) {
    // eslint-disable-next-line no-console
    console.warn(
      "[update-provider-schema] no version given and no schemas/PROVIDER_VERSION found — " +
        "fetching the newest hashicorp/awscc, which will not match the pinned generated/ tree.",
    );
  }
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
