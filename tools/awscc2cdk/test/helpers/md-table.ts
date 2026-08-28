/**
 * Minimal markdown pipe-table reader, shared by the doc-assertions of iterations 2 and 3.
 * A table is recognised by its header row; cells are trimmed and backtick-stripped.
 */
import * as fs from "node:fs";

export interface MdTable {
  readonly headers: string[];
  readonly rows: Record<string, string>[];
}

const clean = (s: string) => s.replace(/`/g, "").trim();

export function parseTables(markdown: string): MdTable[] {
  const lines = markdown.split(/\r?\n/);
  const tables: MdTable[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].trim().startsWith("|")) continue;
    const sep = lines[i + 1];
    if (!sep || !/^\s*\|[\s:|-]+\|\s*$/.test(sep)) continue;
    const headers = splitRow(lines[i]).map(clean);
    const rows: Record<string, string>[] = [];
    let j = i + 2;
    for (; j < lines.length && lines[j].trim().startsWith("|"); j++) {
      const cells = splitRow(lines[j]);
      const row: Record<string, string> = {};
      headers.forEach((h, k) => (row[h] = clean(cells[k] ?? "")));
      rows.push(row);
    }
    tables.push({ headers, rows });
    i = j;
  }
  return tables;
}

export function readTables(file: string): MdTable[] {
  return parseTables(fs.readFileSync(file, "utf8"));
}

/** The first table whose headers are exactly `headers` (in order). */
export function tableWithHeaders(tables: MdTable[], headers: readonly string[]): MdTable | undefined {
  return tables.find((t) => t.headers.length === headers.length && t.headers.every((h, i) => h === headers[i]));
}

function splitRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|");
}

/** '1,271' -> 1271; throws-free: NaN when the cell is not a number. */
export function num(cell: string): number {
  return Number(cell.replace(/[,\s]/g, ""));
}
