/**
 * Structural inspection of an emitted module, via the TypeScript compiler API.
 * Used by step4.structure.test.ts. Read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";

export interface TopLevelExport {
  readonly kind: "class" | "interface" | "namespace" | "function" | "enum" | "variable" | "type" | "other";
  readonly name: string;
  readonly file: string;
}

export interface NamespaceMember {
  readonly kind: "interface" | "class" | "other";
  readonly name: string;
}

export function parseFile(file: string): ts.SourceFile {
  return ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.ES2022, true);
}

function isExported(node: ts.Node): boolean {
  return !!(ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export);
}

export function topLevelExports(sf: ts.SourceFile): TopLevelExport[] {
  const out: TopLevelExport[] = [];
  const file = path.basename(sf.fileName);
  for (const st of sf.statements) {
    if (!isExported(st)) continue;
    if (ts.isClassDeclaration(st) && st.name) out.push({ kind: "class", name: st.name.text, file });
    else if (ts.isInterfaceDeclaration(st)) out.push({ kind: "interface", name: st.name.text, file });
    else if (ts.isModuleDeclaration(st) && ts.isIdentifier(st.name)) out.push({ kind: "namespace", name: st.name.text, file });
    else if (ts.isFunctionDeclaration(st) && st.name) out.push({ kind: "function", name: st.name.text, file });
    else if (ts.isEnumDeclaration(st)) out.push({ kind: "enum", name: st.name.text, file });
    else if (ts.isTypeAliasDeclaration(st)) out.push({ kind: "type", name: st.name.text, file });
    else if (ts.isVariableStatement(st)) {
      for (const d of st.declarationList.declarations) {
        if (ts.isIdentifier(d.name)) out.push({ kind: "variable", name: d.name.text, file });
      }
    } else out.push({ kind: "other", name: st.getText().slice(0, 40), file });
  }
  return out;
}

export function findClass(sf: ts.SourceFile, name: string): ts.ClassDeclaration | undefined {
  return sf.statements.find((s): s is ts.ClassDeclaration => ts.isClassDeclaration(s) && s.name?.text === name);
}

export function findInterface(sf: ts.SourceFile, name: string): ts.InterfaceDeclaration | undefined {
  return sf.statements.find((s): s is ts.InterfaceDeclaration => ts.isInterfaceDeclaration(s) && s.name.text === name);
}

export function findNamespace(sf: ts.SourceFile, name: string): ts.ModuleDeclaration | undefined {
  return sf.statements.find(
    (s): s is ts.ModuleDeclaration =>
      ts.isModuleDeclaration(s) && ts.isIdentifier(s.name) && s.name.text === name,
  );
}

/** The `extends` clause types of a class or interface, as source text. */
export function heritage(node: ts.ClassDeclaration | ts.InterfaceDeclaration): string[] {
  const out: string[] = [];
  for (const clause of node.heritageClauses ?? []) {
    if (clause.token !== ts.SyntaxKind.ExtendsKeyword) continue;
    for (const t of clause.types) out.push(t.expression.getText());
  }
  return out;
}

export function namespaceMembers(ns: ts.ModuleDeclaration): NamespaceMember[] {
  const out: NamespaceMember[] = [];
  if (!ns.body || !ts.isModuleBlock(ns.body)) return out;
  for (const st of ns.body.statements) {
    if (ts.isInterfaceDeclaration(st)) out.push({ kind: "interface", name: st.name.text });
    else if (ts.isClassDeclaration(st) && st.name) out.push({ kind: "class", name: st.name.text });
    else if (ts.isFunctionDeclaration(st) && st.name) out.push({ kind: "other", name: st.name.text });
    else if (ts.isEnumDeclaration(st)) out.push({ kind: "other", name: st.name.text });
  }
  return out;
}

/** `export * as aws_ec2 from './aws-ec2'` -> ['aws_ec2', './aws-ec2'] pairs. */
export function starAsExports(sf: ts.SourceFile): { symbol: string; from: string }[] {
  const out: { symbol: string; from: string }[] = [];
  for (const st of sf.statements) {
    if (!ts.isExportDeclaration(st) || !st.moduleSpecifier) continue;
    const from = (st.moduleSpecifier as ts.StringLiteral).text;
    const clause = st.exportClause;
    if (clause && ts.isNamespaceExport(clause)) out.push({ symbol: clause.name.text, from });
  }
  return out;
}

/** `export * from './vpc'` module specifiers. */
export function starExports(sf: ts.SourceFile): string[] {
  const out: string[] = [];
  for (const st of sf.statements) {
    if (ts.isExportDeclaration(st) && st.moduleSpecifier && !st.exportClause) {
      out.push((st.moduleSpecifier as ts.StringLiteral).text);
    }
  }
  return out;
}
