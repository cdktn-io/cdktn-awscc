#!/usr/bin/env node
/**
 * `pnpm generate` — regenerates the whole committed `cdktn-awscc/generated/` tree from the full
 * awscc schema (`schemas/schema.json`, fetched into the package root by `pnpm schema:fetch` —
 * see `scripts/update-provider-schema.ts`) against the pinned `@aws-cdk/aws-service-spec`
 * database. Same code path `step6.full-emit.test.ts`'s `RUN_FULL=1` suite calls
 * (`generateGroupedWithStats(..., { manifest: true })`), so a fresh `pnpm generate` followed by
 * `git diff --stat generated/` is the offline way to check the committed tree is current.
 * CONTRACT.md "Iteration 3 — full emission".
 *
 * The schema is pinned, not "latest": the committed `generated/` tree (and the resource/module
 * counts baked into CONTRACT.md and the test suite) reflect one specific awscc provider version.
 * `pnpm schema:fetch <version>` (`build.yml`'s "generated-is-current" check) fetches that pinned
 * version; only `upgrade.yml`'s scheduled job fetches the newest version on purpose, to open a PR
 * when the schema — and therefore `generated/` — has actually moved.
 *
 * `.gitattributes` (`linguist-generated=true`) is committed source, not generator output — it is
 * (re)written here too only so a clean checkout followed by `pnpm generate` always leaves a
 * complete tree, even though its content never changes between runs.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { generateGroupedWithStats } from "../src/grouped-generate";

const PACKAGE_ROOT = path.resolve(__dirname, "..", "..", "..");
const AWSCC_FQPN = "registry.terraform.io/hashicorp/awscc";
const GENERATED_DIR = path.join(PACKAGE_ROOT, "generated");

const GITATTRIBUTES = "* linguist-generated=true\n";

async function main(): Promise<void> {
  const schemaPath = path.join(PACKAGE_ROOT, "schemas", "schema.json");
  const schemaJson = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const db = require("@aws-cdk/aws-service-spec").loadAwsServiceSpecSync();

  console.log(`[generate-all] schema: ${schemaPath}`);
  console.log(`[generate-all] out: ${GENERATED_DIR}`);

  // Start from a clean directory so stale files from a previous run (a resource that moved module,
  // a module that lost its last resource) never survive a regeneration.
  fs.rmSync(GENERATED_DIR, { recursive: true, force: true });
  fs.mkdirSync(GENERATED_DIR, { recursive: true });

  const started = Date.now();
  const result = await generateGroupedWithStats(schemaJson, db, GENERATED_DIR, {
    fqpn: AWSCC_FQPN,
    manifest: true,
  });
  const seconds = (Date.now() - started) / 1000;

  fs.writeFileSync(path.join(GENERATED_DIR, ".gitattributes"), GITATTRIBUTES);

  console.log(
    `[generate-all] ${result.stats.resources} resources, ${result.stats.modules.length} modules, ` +
      `${result.files.length} files, ${seconds.toFixed(1)}s`,
  );
  console.log(
    `[generate-all] nested types: ${result.stats.nestedTypes} (recovered ${result.stats.recovered}, ` +
      `fallback ${result.stats.fallback})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
