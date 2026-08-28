/**
 * Runs the vendored cdk-terrain generator (`src/vendored/cdktn/`) unchanged over a provider
 * schema, reproducing today's `@cdktn/provider-awscc` per-resource output. Plan §5 step 1. See
 * CONTRACT.md.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker } from "codemaker";
import {
  ConstructsMakerProviderTarget,
  Language,
  TerraformProviderConstraint,
} from "@cdktn/commons";
import type { ProviderSchema } from "@cdktn/commons";
import { TerraformProviderGenerator } from "./vendored/cdktn/provider-generator";

const DEFAULT_FQPN = "registry.terraform.io/hashicorp/awscc";

export interface GenerateLegacyOptions {
  /** provider fqpn to generate; default 'registry.terraform.io/hashicorp/awscc' */
  readonly fqpn?: string;
}

function walk(dir: string, base: string, out: string[]): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      walk(abs, rel, out);
    } else {
      out.push(rel);
    }
  }
}

/**
 * Runs the vendored cdk-terrain generator unchanged over `schemaJson`, writing to `outDir`.
 * Returns the emitted file paths, relative to outDir, POSIX separators, sorted.
 */
export async function generateLegacy(
  schemaJson: ProviderSchema,
  outDir: string,
  options?: GenerateLegacyOptions,
): Promise<string[]> {
  const fqpn = options?.fqpn ?? DEFAULT_FQPN;

  const code = new CodeMaker();
  const generator = new TerraformProviderGenerator(code, schemaJson);
  const target = new ConstructsMakerProviderTarget(
    new TerraformProviderConstraint(fqpn),
    Language.TYPESCRIPT,
  );
  generator.generate(target);

  fs.mkdirSync(outDir, { recursive: true });
  await code.save(outDir);

  const emitted: string[] = [];
  walk(outDir, "", emitted);
  return emitted.map((f) => f.split(path.sep).join("/")).sort();
}
