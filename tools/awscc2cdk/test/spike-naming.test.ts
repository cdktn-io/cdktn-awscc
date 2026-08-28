/**
 * Contract, plan §5 step 3 (§4 "Spike: dropping spec2cdk's sanitizing / quirk fixes").
 *
 * Two halves:
 *  - the write-up `docs/spike-naming.md` must carry a decision table with one row per spec2cdk
 *    sanitizer named in plan §4;
 *  - the numbers in that table must come from real data: `runNamingSpike()` over the FULL awscc
 *    schema, whose report this test writes to `test/out/spike-naming.json` (test/out is gitignored,
 *    so the artifact is regenerated here rather than committed) and then validates.
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { AWSCC_FQPN, fullSchemaPath, outDir, spikeDocPath, toolRoot } from "./helpers/paths";

/** the sanitizers of spec2cdk `lib/naming/conventions.ts` that plan §4 puts up for removal */
const SANITIZERS = ["propertyNameFromCloudFormation", "sanitizeTypeName", "santitizeFieldName"];
const DECISIONS = ["keep", "drop", "replace"];
const HEADERS = ["sanitizer", "identical", "diverges-only", "breaks-jsii", "decision"];

interface MdRow {
  [column: string]: string;
}

/** Every markdown table in `md`, as {header cells, rows keyed by header}. */
function markdownTables(md: string): { headers: string[]; rows: MdRow[] }[] {
  const lines = md.split("\n");
  const tables: { headers: string[]; rows: MdRow[] }[] = [];
  const cells = (line: string) =>
    line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
  for (let i = 0; i < lines.length - 1; i++) {
    if (!lines[i].trim().startsWith("|")) continue;
    if (!/^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) continue;
    const headers = cells(lines[i]).map((h) => h.toLowerCase());
    const rows: MdRow[] = [];
    for (let j = i + 2; j < lines.length && lines[j].trim().startsWith("|"); j++) {
      const c = cells(lines[j]);
      const row: MdRow = {};
      headers.forEach((h, k) => (row[h] = c[k] ?? ""));
      rows.push(row);
      i = j;
    }
    tables.push({ headers, rows });
  }
  return tables;
}

let doc: string;
let table: { headers: string[]; rows: MdRow[] } | undefined;
let report: any;

beforeAll(async () => {
  expect(fs.existsSync(spikeDocPath)).toBe(true);
  doc = fs.readFileSync(spikeDocPath, "utf8");
  table = markdownTables(doc).find((t) => HEADERS.every((h) => t.headers.includes(h)));

  const mod = await import(path.join(toolRoot, "src", "spike-naming"));
  expect(typeof mod.runNamingSpike).toBe("function");
  const schema = JSON.parse(fs.readFileSync(fullSchemaPath, "utf8"));
  const db = require("@aws-cdk/aws-service-spec").loadAwsServiceSpecSync();
  report = mod.runNamingSpike(schema, db, { fqpn: AWSCC_FQPN });
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "spike-naming.json"), JSON.stringify(report, null, 2) + "\n");
}, 600000);

describe("docs/spike-naming.md", () => {
  it(`has a table with the columns ${HEADERS.join(", ")}`, () => {
    expect(table).toBeDefined();
  });

  it.each(SANITIZERS)("has a decided row for %s", (sanitizer) => {
    const row = table!.rows.find((r) => r.sanitizer.replace(/`/g, "").trim() === sanitizer);
    expect(row).toBeDefined();
    expect(DECISIONS).toContain(row!.decision.replace(/`/g, "").trim().split(/[\s—-]/)[0].toLowerCase());
  });
});

describe("test/out/spike-naming.json", () => {
  it("describes the full schema it was run over", () => {
    expect(report.schema.resourceCount).toBe(1494);
    expect(typeof report.schema.providerVersion).toBe("string");
  });

  it("buckets every sanitizer of plan §4", () => {
    expect(Object.keys(report.sanitizers).sort()).toEqual([...SANITIZERS].sort());
    for (const s of SANITIZERS) {
      const b = report.sanitizers[s];
      for (const k of ["identical", "divergesOnly", "breaksJsii"]) {
        expect(Number.isInteger(b[k])).toBe(true);
        expect(b[k]).toBeGreaterThanOrEqual(0);
      }
      expect(DECISIONS).toContain(b.decision);
      expect(Array.isArray(b.examples)).toBe(true);
    }
  });

  it("carries a CDK / raw / cdktn-current candidate for every resource and every nested type", () => {
    const resources = report.candidates.filter((c: any) => c.kind === "resource");
    const types = report.candidates.filter((c: any) => c.kind === "type");
    expect(resources.length).toBe(1494);
    expect(new Set(resources.map((c: any) => c.awscc)).size).toBe(1494);
    expect(types.length).toBeGreaterThan(1000);
    for (const c of report.candidates) {
      expect(typeof c.awscc).toBe("string");
      expect(Array.isArray(c.path)).toBe(true);
      for (const k of ["cdk", "raw", "cdktnCurrent"]) {
        expect(typeof c[k]).toBe("string");
        expect(c[k].length).toBeGreaterThan(0);
      }
    }
  });

  it("agrees with the counts written into docs/spike-naming.md", () => {
    for (const sanitizer of SANITIZERS) {
      const row = table!.rows.find((r) => r.sanitizer.replace(/`/g, "").trim() === sanitizer)!;
      const b = report.sanitizers[sanitizer];
      const num = (s: string) => Number(s.replace(/[`,\s]/g, ""));
      expect([sanitizer, num(row.identical)]).toEqual([sanitizer, b.identical]);
      expect([sanitizer, num(row["diverges-only"])]).toEqual([sanitizer, b.divergesOnly]);
      expect([sanitizer, num(row["breaks-jsii"])]).toEqual([sanitizer, b.breaksJsii]);
      expect([sanitizer, row.decision.replace(/`/g, "").trim().split(/[\s—-]/)[0].toLowerCase()]).toEqual([
        sanitizer,
        b.decision,
      ]);
    }
  });
});
