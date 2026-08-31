/**
 * Iteration 5 — the Go target's case-insensitive file-name rule.
 * See CONTRACT.md "Iteration 5 — Go target case collisions (2026-08-31)".
 *
 * `jsii-pacmak`'s Go emitter writes one file per type into the module's Go package,
 * `<Class>.go` for a top-level type and `<Class>_<NestedType>.go` for a namespace-nested one.
 * `go build` refuses a package whose file names differ only in case:
 *
 *   package .../cdktnawscc/awsapplicationinsights: case-insensitive file name collision:
 *   "CcApplication_HAClusterPrometheusExporterProperty.go" and
 *   "CcApplication_HaClusterPrometheusExporterProperty.go"
 *
 * `build.yml` never runs pacmak, so nothing in CI exercises the Go target — only `release.yml`
 * does, at which point it is a released-artifact failure. This suite is that gate, checked
 * directly on the committed `generated/` tree so it costs ~2s and needs no jsii run.
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";
import { generatedDir, toolRoot } from "./helpers/paths";

/**
 * The base name pacmak-go derives for every exported type in one module: the type name for a
 * top-level declaration, `<Namespace>_<Type>` for a namespace-nested one (nesting is one level
 * deep in this generator, but the walk is general).
 */
function goTypeBaseNames(moduleDir: string): { name: string; file: string }[] {
  const out: { name: string; file: string }[] = [];
  for (const file of fs.readdirSync(moduleDir).filter((f) => f.endsWith(".ts")).sort()) {
    const src = ts.createSourceFile(
      file,
      fs.readFileSync(path.join(moduleDir, file), "utf8"),
      ts.ScriptTarget.Latest,
      true,
    );
    const visit = (node: ts.Node, prefix: string): void => {
      if (ts.isModuleDeclaration(node) && node.body && ts.isModuleBlock(node.body)) {
        const inner = `${prefix}${node.name.getText(src)}_`;
        node.body.statements.forEach((s) => visit(s, inner));
        return;
      }
      if (ts.isInterfaceDeclaration(node) || ts.isClassDeclaration(node) || ts.isEnumDeclaration(node)) {
        const exported = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
        if (exported && node.name) out.push({ name: `${prefix}${node.name.getText(src)}`, file });
      }
    };
    src.statements.forEach((s) => visit(s, ""));
  }
  return out;
}

describe("Go target — case-insensitive type-name uniqueness", () => {
  let naming: any;
  beforeAll(async () => {
    naming = await import(path.join(toolRoot, "src", "naming"));
  });

  const modules = fs
    .readdirSync(generatedDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  it("has the committed generated tree to check", () => {
    expect(modules.length).toBeGreaterThan(200);
  });

  it("gives every type in a module a name no other type in it shares case-insensitively", () => {
    const collisions: string[] = [];
    for (const mod of modules) {
      const byLower = new Map<string, Set<string>>();
      for (const { name } of goTypeBaseNames(path.join(generatedDir, mod))) {
        const key = name.toLowerCase();
        const seen = byLower.get(key);
        if (seen) seen.add(name);
        else byLower.set(key, new Set([name]));
      }
      for (const [, names] of [...byLower.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))) {
        if (names.size > 1) collisions.push(`${mod}: ${[...names].sort().join(" <> ")}`);
      }
    }
    // Empty, or `go build` fails the release with "case-insensitive file name collision".
    expect(collisions).toEqual([]);
  });

  /**
   * The disambiguation that resolves a collision has to land back *inside* the naming grammar.
   * `propertyTypeNamesForResource`'s last-resort `'2'`/`'3'` suffix does not: every
   * `NAME_GRAMMAR` pattern ends at `Property` / `PropertyOutputReference` / …, no trailing digit.
   * Reused CFN definition names — the one thing that used to reach that suffix on real awscc data
   * — are cleared upstream by `naming.dedupeDefinitionNames`, so nothing in the tree needs it.
   */
  it("gives every committed type a name inside the naming grammar", () => {
    const grammars = () => [
      naming.NAME_GRAMMAR.resourceClass,
      naming.NAME_GRAMMAR.propsInterface,
      naming.NAME_GRAMMAR.propertyInterface,
      naming.NAME_GRAMMAR.propertyOutputReference,
      naming.NAME_GRAMMAR.propertyList,
      naming.NAME_GRAMMAR.propertyMap,
    ];
    const offenders: string[] = [];
    for (const mod of modules) {
      for (const { name, file } of goTypeBaseNames(path.join(generatedDir, mod))) {
        // `<Namespace>_<Type>` for a nested type — the grammar governs each half on its own.
        for (const part of name.split("_")) {
          if (!grammars().some((re) => re.test(part))) offenders.push(`${mod}/${file}: ${part}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});
