/**
 * Shared plumbing for the iteration-2 structural tests: load the fixture schema and the pinned
 * service-spec database, run `generateGrouped`, list what came out, and type-check it.
 *
 * This file is read-only for the implementer.
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import * as ts from "typescript";
import { AWSCC_FQPN, fullSchemaPath, miniSchemaPath, packageRoot, toolRoot } from "./paths";

export interface GenerateGroupedOptions {
  readonly fqpn?: string;
  readonly modules?: string[];
  readonly resources?: string[];
}

export type GenerateGrouped = (
  schemaJson: any,
  db: any,
  outDir: string,
  options?: GenerateGroupedOptions,
) => Promise<string[]>;

export async function loadGenerateGrouped(): Promise<GenerateGrouped> {
  const mod: { generateGrouped: GenerateGrouped } = await import(
    path.join(toolRoot, "src", "grouped-generate")
  );
  if (typeof mod.generateGrouped !== "function") {
    throw new Error("src/grouped-generate.ts must export generateGrouped()");
  }
  return mod.generateGrouped;
}

let cachedDb: any;
export function specDb(): any {
  if (!cachedDb) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    cachedDb = require("@aws-cdk/aws-service-spec").loadAwsServiceSpecSync();
  }
  return cachedDb;
}

export function readSchema(file: string): any {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function miniSchema(): any {
  return readSchema(miniSchemaPath);
}

export function fullSchema(): any {
  return readSchema(fullSchemaPath);
}

/** Same schema with the `resource_schemas` keys in reverse order — used by the determinism test. */
export function reversedResourceOrder(schema: any, fqpn = AWSCC_FQPN): any {
  const copy = JSON.parse(JSON.stringify(schema));
  const rs = copy.provider_schemas[fqpn].resource_schemas;
  const flipped: Record<string, unknown> = {};
  for (const k of Object.keys(rs).reverse()) flipped[k] = rs[k];
  copy.provider_schemas[fqpn].resource_schemas = flipped;
  return copy;
}

export function tmpDir(prefix: string): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

/** Every file below `dir`, relative, POSIX separators, sorted. */
export function listFiles(dir: string): string[] {
  const out: string[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else out.push(path.relative(dir, p).split(path.sep).join("/"));
    }
  };
  walk(dir);
  return out.sort();
}

/** sha-independent content map, for the determinism check. */
export function fileBytes(dir: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const rel of listFiles(dir)) {
    map[rel] = fs.readFileSync(path.join(dir, rel), "utf8");
  }
  return map;
}

export interface TscResult {
  readonly ok: boolean;
  readonly diagnostics: string[];
}

/**
 * `tsc --noEmit` over an emitted package, with the same compiler options the real package uses and
 * the repo's `node_modules` on the resolution path (so `cdktn`/`constructs` resolve).
 */
export function typeCheck(dir: string, extraExcludes: string[] = []): TscResult {
  const files = listFiles(dir)
    .filter((f) => f.endsWith(".ts"))
    .filter((f) => !extraExcludes.some((x) => f === x || f.startsWith(`${x}/`)))
    .map((f) => path.join(dir, f));

  const program = ts.createProgram(files, {
    target: ts.ScriptTarget.ES2022,
    lib: ["lib.es2022.d.ts"],
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.Node10,
    declaration: true,
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    resolveJsonModule: true,
    noEmit: true,
    types: ["node"],
    typeRoots: [path.join(packageRoot, "node_modules", "@types")],
    baseUrl: packageRoot,
    paths: { "*": ["node_modules/*"] },
  });

  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .map((d) => {
      const where = d.file && d.start !== undefined
        ? `${path.relative(dir, d.file.fileName)}:${d.file.getLineAndCharacterOfPosition(d.start).line + 1}`
        : "";
      return `${where} TS${d.code}: ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`;
    })
    .slice(0, 40);

  return { ok: diagnostics.length === 0, diagnostics };
}

/** Runs a binary from the package's node_modules/.bin, returning stdout+stderr and the exit code. */
export function runBin(
  bin: string,
  args: string[],
  cwd: string,
): { code: number; output: string } {
  try {
    const output = execFileSync(path.join(packageRoot, "node_modules", ".bin", bin), args, {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 256 * 1024 * 1024,
    });
    return { code: 0, output };
  } catch (e: any) {
    return { code: e.status ?? 1, output: `${e.stdout ?? ""}${e.stderr ?? ""}` };
  }
}

export { fullSchemaPath, miniSchemaPath };
