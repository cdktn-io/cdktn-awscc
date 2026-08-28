/**
 * Contract: vendoring hygiene. VENDORED.md must account for every copied file and point at an
 * origin that exists on this machine. See CONTRACT.md, "Vendoring hygiene".
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { toolRoot } from "./helpers/paths";

const vendoredDir = path.join(toolRoot, "src", "vendored");
const manifestPath = path.join(vendoredDir, "VENDORED.md");

interface Row {
  vendored: string;
  origin: string;
  commit: string;
}

function parseManifest(md: string): Row[] {
  const rows: Row[] = [];
  for (const line of md.split("\n")) {
    const t = line.trim();
    if (!t.startsWith("|")) continue;
    const cells = t.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length < 3) continue;
    if (cells[0].toLowerCase() === "vendored") continue; // header
    if (/^-{2,}$/.test(cells[0].replace(/\s/g, ""))) continue; // separator
    rows.push({ vendored: cells[0], origin: cells[1], commit: cells[2] });
  }
  return rows;
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function expandHome(p: string): string {
  return p.startsWith("~/")
    ? path.join(process.env.HOME ?? "", p.slice(2))
    : p;
}

describe("VENDORED.md", () => {
  it("exists", () => {
    expect(fs.existsSync(manifestPath)).toBe(true);
  });

  it("has parseable rows", () => {
    const rows = parseManifest(fs.readFileSync(manifestPath, "utf8"));
    expect(rows.length).toBeGreaterThan(0);
  });

  it("lists a vendored file that exists, an origin that exists, and a commit sha", () => {
    const rows = parseManifest(fs.readFileSync(manifestPath, "utf8"));
    for (const row of rows) {
      expect([row.vendored, fs.existsSync(path.join(toolRoot, row.vendored))]).toEqual([
        row.vendored,
        true,
      ]);
      expect([row.vendored, row.origin, fs.existsSync(expandHome(row.origin))]).toEqual([
        row.vendored,
        row.origin,
        true,
      ]);
      expect([row.vendored, /^[0-9a-f]{40}$/.test(row.commit)]).toEqual([
        row.vendored,
        true,
      ]);
    }
  });

  it("accounts for every file under src/vendored", () => {
    const rows = parseManifest(fs.readFileSync(manifestPath, "utf8"));
    const listed = new Set(rows.map((r) => path.resolve(toolRoot, r.vendored)));
    const onDisk = walk(vendoredDir).filter(
      (f) => path.basename(f) !== "VENDORED.md",
    );
    const missing = onDisk.filter((f) => !listed.has(f));
    expect(missing).toEqual([]);
  });
});
