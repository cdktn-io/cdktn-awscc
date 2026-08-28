/**
 * Iteration 4, plan §5 step 7 — vendoring hygiene for `cdktn-awscc/tools/lazify`, the copy of
 * `~/cdk/aws-cdk/tools/@aws-cdk/lazify` (private, `"private": true`, never published to npm).
 * See CONTRACT.md, "Iteration 4 — vendored lazify".
 *
 * The rules are the ones `vendored.test.ts` already applies to `src/vendored`, plus two that only
 * matter here: the copy is **byte-verbatim except for a prepended provenance/licence header**, and
 * upstream's Apache-2.0 `LICENSE` comes along with it.
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { lazifyDir, lazifyOriginDir, lazifyVendoredDocPath } from "./helpers/paths";

const ORIGIN_COMMIT = "a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1";

/** Files that must be vendored, relative to both `tools/lazify` and the upstream package. */
const REQUIRED_FILES = ["lib/index.ts", "bin/lazify.ts", "bin/lazify", "README.md", "LICENSE"];

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
    const cells = t.split("|").slice(1, -1).map((c) => c.trim().replace(/`/g, ""));
    if (cells.length < 3) continue;
    if (cells[0].toLowerCase() === "vendored") continue; // header
    if (/^-{2,}$/.test(cells[0].replace(/\s/g, ""))) continue; // separator
    rows.push({ vendored: cells[0], origin: cells[1], commit: cells[2] });
  }
  return rows;
}

function expandHome(p: string): string {
  return p.startsWith("~/") ? path.join(process.env.HOME ?? "", p.slice(2)) : p;
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

describe("tools/lazify — vendored @aws-cdk/lazify", () => {
  it("has a VENDORED.md", () => {
    expect(fs.existsSync(lazifyVendoredDocPath)).toBe(true);
  });

  it("vendors every file the tool needs to run", () => {
    for (const f of REQUIRED_FILES) {
      expect([f, fs.existsSync(path.join(lazifyDir, f))]).toEqual([f, true]);
    }
  });

  it("names the origin commit and an origin that exists on this machine", () => {
    const md = fs.readFileSync(lazifyVendoredDocPath, "utf8");
    const rows = parseManifest(md);
    expect(rows.length).toBeGreaterThanOrEqual(REQUIRED_FILES.length);
    for (const row of rows) {
      expect([row.vendored, fs.existsSync(path.join(lazifyDir, row.vendored))]).toEqual([row.vendored, true]);
      expect([row.vendored, row.origin, fs.existsSync(expandHome(row.origin))]).toEqual([row.vendored, row.origin, true]);
      expect([row.vendored, row.commit]).toEqual([row.vendored, ORIGIN_COMMIT]);
    }
    const listed = new Set(rows.map((r) => r.vendored));
    for (const f of REQUIRED_FILES) expect([f, listed.has(f)]).toEqual([f, true]);
  });

  it("accounts for every file under tools/lazify", () => {
    const rows = parseManifest(fs.readFileSync(lazifyVendoredDocPath, "utf8"));
    const listed = new Set(rows.map((r) => path.resolve(lazifyDir, r.vendored)));
    const onDisk = walk(lazifyDir).filter((f) => path.basename(f) !== "VENDORED.md");
    expect(onDisk.filter((f) => !listed.has(f))).toEqual([]);
  });

  it("carries upstream's Apache-2.0 licence", () => {
    const licence = fs.readFileSync(path.join(lazifyDir, "LICENSE"), "utf8");
    expect(licence).toMatch(/Apache License/);
    expect(licence).toMatch(/Version 2\.0/);
  });

  it("puts an Apache-2.0 provenance header on each vendored source file", () => {
    for (const f of ["lib/index.ts", "bin/lazify.ts"]) {
      const head = fs.readFileSync(path.join(lazifyDir, f), "utf8").slice(0, 1500);
      expect([f, /Apache-2\.0/.test(head)]).toEqual([f, true]);
      expect([f, /@aws-cdk\/lazify/.test(head)]).toEqual([f, true]);
      expect([f, head.includes(ORIGIN_COMMIT)]).toEqual([f, true]);
    }
  });

  it("is byte-verbatim upstream apart from that prepended header", () => {
    // The origin is on this machine (asserted above), so "verbatim" is checkable, not a promise:
    // the vendored file must *end with* upstream's bytes. Adapting the tool is done by adding
    // devDependencies (fs-extra), never by editing the copy.
    for (const f of REQUIRED_FILES) {
      const upstream = fs.readFileSync(path.join(lazifyOriginDir, f), "utf8");
      const vendored = fs.readFileSync(path.join(lazifyDir, f), "utf8");
      expect([f, vendored.endsWith(upstream)]).toEqual([f, true]);
    }
  });
});

describe("cdktn-awscc/package.json — what running the vendored tool needs", () => {
  it("declares lazify's runtime dependency and a `lazify` script", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(lazifyDir, "..", "..", "package.json"), "utf8"));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    expect(deps["fs-extra"]).toBeTruthy();
    expect(deps["@types/fs-extra"]).toBeTruthy();
    expect(typeof pkg.scripts?.lazify).toBe("string");
    expect(pkg.scripts.lazify).toMatch(/tools\/lazify\/bin\/lazify\.ts/);
  });
});
