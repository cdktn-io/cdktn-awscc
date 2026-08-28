/**
 * Iteration 4, plan §5 step 8 — the documentation deliverables: the package README (plan §10
 * import table, `Cc` naming, nested Property types, how to regenerate, the build gates), the
 * consolidated `docs/phase1-results.md` (JS load time + a conclusion that answers the two concerns
 * phase 1 was opened on + the Phase 2 gap list), and one jsii-docgen module as a sample.
 * CONTRACT.md, "Iteration 4 — docs".
 *
 * All cheap and unconditional: these run in `pnpm test`.
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import { readTables, tableWithHeaders } from "./helpers/md-table";
import { ec2ApiDocPath, packageJsonPath, phase1ResultsPath, readmePath } from "./helpers/paths";

const headings = (md: string) =>
  md.split(/\r?\n/).filter((l) => /^#{1,6}\s/.test(l)).map((l) => l.replace(/^#{1,6}\s+/, "").trim());

const hasHeading = (md: string, needle: string) =>
  headings(md).some((h) => h.toLowerCase().includes(needle.toLowerCase()));

/* ------------------------------------------------------------------ README */

const IMPORT_HEADERS = ["language", "aws-cdk-lib", "@cdktn/awscc"];
const LANGUAGES = ["TypeScript", "Python", "Java", "C#", "Go"];

describe("cdktn-awscc/README.md", () => {
  let md: string;
  beforeAll(() => {
    md = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, "utf8") : "";
  });

  it("exists", () => {
    expect(fs.existsSync(readmePath)).toBe(true);
  });

  it("says what the package is, in the plan's terms", () => {
    expect(md).toMatch(/@cdktn\/awscc/);
    expect(md).toMatch(/aws-cdk-lib/);
    expect(md).toMatch(/Cloud Control/i);
    expect(md).toMatch(/L1/);
    expect(md).toMatch(/experimental|PoC|phase 1/i);
  });

  it("carries the plan §10 import table, one row per language", () => {
    const table = tableWithHeaders(readTables(readmePath), IMPORT_HEADERS);
    expect(table).toBeDefined();
    const rows = table!.rows;
    expect(rows.map((r) => r.language)).toEqual(LANGUAGES);
    for (const row of rows) {
      // the CDK column is the thing a reader is migrating *from*, the cdktn column the thing they
      // migrate *to*: `Cfn` -> `Cc` and the root import, per plan §10.
      expect([row.language, /Cfn/.test(row["aws-cdk-lib"])]).toEqual([row.language, true]);
      expect([row.language, /\bCc/.test(row["@cdktn/awscc"])]).toEqual([row.language, true]);
      expect([row.language, /Cfn/.test(row["@cdktn/awscc"])]).toEqual([row.language, false]);
    }
    const byLang = Object.fromEntries(rows.map((r) => [r.language, r]));
    expect(byLang.TypeScript["@cdktn/awscc"]).toMatch(/@cdktn\/awscc/);
    expect(byLang.Python["@cdktn/awscc"]).toMatch(/cdktn_awscc/);
    expect(byLang.Java["@cdktn/awscc"]).toMatch(/io\.cdktn\.awscc/);
    expect(byLang["C#"]["@cdktn/awscc"]).toMatch(/Io\.Cdktn\.AwsCc/);
    expect(byLang.Go["@cdktn/awscc"]).toMatch(/cdktn-awscc-go/);
  });

  it("flags the per-module layouts no build has confirmed yet", () => {
    // Only the python target has actually been through jsii-pacmak (iteration 3b); the Java/.NET/Go
    // per-module segment layouts in plan §10 are still assumptions and the README must not present
    // them as verified.
    expect(md).toMatch(/assumption|unconfirmed|not (yet )?(been )?(built|verified)/i);
  });

  it("explains the naming and the nested Property types", () => {
    expect(md).toMatch(/`?Cc`? prefix|prefix .{0,20}`?Cc`?/i);
    expect(md).toMatch(/CcVPC|CcVpc/);
    expect(md).toMatch(/Property/);
    expect(md).toMatch(/namespace/i); // declaration merging: `export namespace CcVPC { interface TagProperty }`
    expect(md).toMatch(/aws_ec2|aws-ec2/);
  });

  it("explains how generation works, how to regenerate, and the build gates", () => {
    expect(hasHeading(md, "generat")).toBe(true);
    expect(md).toMatch(/pnpm generate/);
    expect(md).toMatch(/generated\//);
    expect(md).toMatch(/scope-map/);
    expect(md).toMatch(/@aws-cdk\/aws-service-spec|service-spec/);
    // the gates, verbatim enough to be runnable
    expect(md).toMatch(/pnpm test/);
    expect(md).toMatch(/RUN_FULL=1/);
    expect(md).toMatch(/RUN_FULL_JSII=1/);
    expect(md).toMatch(/max-old-space-size=16384/);
    expect(md).toMatch(/lazify/);
  });
});

/* ------------------------------------------------------------------ phase1-results.md */

const JS_HEADERS = ["#", "measurement", "package", "phase", "median s", "modules loaded", "heap MB"];

describe("docs/phase1-results.md — consolidated", () => {
  let md: string;
  beforeAll(() => {
    md = fs.readFileSync(phase1ResultsPath, "utf8");
  });

  it("has the three iteration-4 sections", () => {
    for (const h of ["JS load time", "Conclusion", "Phase 2 gaps"]) {
      expect([h, hasHeading(md, h)]).toEqual([h, true]);
    }
  });

  it("has the JS load time table, before/after/baseline", () => {
    const table = tableWithHeaders(readTables(phase1ResultsPath), JS_HEADERS);
    expect(table).toBeDefined();
    const key = (r: Record<string, string>) => `${r["#"].toLowerCase()}/${r.phase.toLowerCase()}`;
    const keys = table!.rows.map(key);
    for (const k of ["a/before", "a/after", "b/before", "b/after", "c/baseline"]) {
      expect([k, keys.includes(k)]).toEqual([k, true]);
    }
    for (const row of table!.rows) {
      for (const cell of ["median s", "modules loaded", "heap MB"]) {
        expect([key(row), cell, Number.isFinite(Number(row[cell].replace(/[,\s]/g, "")))]).toEqual([
          key(row),
          cell,
          true,
        ]);
      }
    }
    expect(md).toMatch(/node version:\s*v?\d+/i);
    expect(md).toMatch(/scripts\/bench_js_require\.mjs/);
  });

  it("the conclusion answers the two concerns phase 1 was opened on", () => {
    const section = md.slice(md.search(/^#{2,3}\s.*Conclusion/im));
    // concern 1 — interface-name collisions (docs/schema-sweep.md numbers + what we implemented)
    expect(section).toMatch(/collision/i);
    expect(section).toMatch(/8,?590/); // distinct struct names under the resource-prefixed scheme
    expect(section).toMatch(/141/); // CDK-style leaf names, within single resources
    expect(section).toMatch(/277/); // per-service namespace + leaf attr name
    expect(section).toMatch(/schema-sweep/);
    // concern 2 — python performance, and the lazy-loading observation behind the module counts
    expect(section).toMatch(/273/);
    expect(section).toMatch(/jsii-pacmak/);
    expect(section).toMatch(/laz(y|ify|ily)/i);
  });

  it("the Phase 2 gap list names the three open gaps", () => {
    const section = md.slice(md.search(/^#{2,3}\s.*Phase 2 gaps/im));
    expect(section).toMatch(/ourOnly/);
    expect(section).toMatch(/cdkOnly/);
    expect(section).toMatch(/meta-propert/i);
    expect(section).toMatch(/DeletionPolicy/); // the §8 spike list, not just a pointer
    expect(section).toMatch(/data source/i);
    expect(section).toMatch(/2,?621/); // the dropped data sources (plan §9)
    expect(section).toMatch(/docs\/spike-meta-properties\.md/);
  });

  it("states the size of the jsii-docgen sample", () => {
    expect(md).toMatch(/docs\/api\/aws-ec2\.md/);
    expect(md).toMatch(/jsii-docgen/);
    expect(md).toMatch(/aws-ec2\.md[^\n]*\d[\d,.]*\s*(bytes|B|KB|MB|kB)/i);
    expect(md).toMatch(/276/); // "one of 276 modules" — the sample is a sample
  });
});

/* ------------------------------------------------------------------ the docgen sample */

describe("docs/api/aws-ec2.md", () => {
  it("exists and documents the module's resources", () => {
    expect(fs.existsSync(ec2ApiDocPath)).toBe(true);
    const md = fs.readFileSync(ec2ApiDocPath, "utf8");
    expect(md).toMatch(/CcVPC/);
    expect(md.length).toBeGreaterThan(50000);
  });

  it("is generated by jsii-docgen, declared as a devDependency", () => {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    expect(pkg.devDependencies["jsii-docgen"]).toBeTruthy();
    expect(typeof pkg.scripts?.docgen).toBe("string");
    expect(pkg.scripts.docgen).toMatch(/jsii-docgen/);
  });
});
