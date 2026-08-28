/**
 * Licensing hygiene: this package vendors/adapts code from two upstream licenses
 * (Apache-2.0 from aws/aws-cdk, MPL-2.0 from cdktn-io/cdk-terrain). See NOTICE for the full
 * structure and reasoning. This test asserts the mechanical parts of that structure stay true:
 * LICENSE/NOTICE files exist, every vendored/adapted file carries the right SPDX header, and
 * generated output carries the header `grouped-generate.ts` is supposed to emit.
 *
 * Kept fast: no schema loading, no generation — only reads files already on disk (a small,
 * bounded sample of `generated/`, not the whole 1,494-resource tree).
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { generatedDir, packageJsonPath, packageRoot, toolRoot } from "./helpers/paths";

const vendoredCdktnDir = path.join(toolRoot, "src", "vendored", "cdktn");
const vendoredSpec2cdkDir = path.join(toolRoot, "src", "vendored", "spec2cdk");
const groupedDir = path.join(toolRoot, "src", "grouped");
const lazifyDir = path.join(packageRoot, "tools", "lazify");

const MPL_SPDX = "SPDX-License-Identifier: MPL-2.0";
const APACHE_SPDX = "SPDX-License-Identifier: Apache-2.0";
/** how far into a file we look for the header — generous, but bounded (keeps this fast) */
const HEADER_WINDOW = 700;

function listTsFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listTsFiles(p));
    else if (entry.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

function head(file: string): string {
  return fs.readFileSync(file, "utf8").slice(0, HEADER_WINDOW);
}

describe("root LICENSE / NOTICE", () => {
  it("has a root LICENSE file (MPL-2.0)", () => {
    const licensePath = path.join(packageRoot, "LICENSE");
    expect(fs.existsSync(licensePath)).toBe(true);
    expect(fs.readFileSync(licensePath, "utf8")).toContain("Mozilla Public License");
  });

  it("has a root NOTICE file explaining the vendored license structure", () => {
    const noticePath = path.join(packageRoot, "NOTICE");
    expect(fs.existsSync(noticePath)).toBe(true);
    const notice = fs.readFileSync(noticePath, "utf8");
    expect(notice).toContain("Apache");
    expect(notice).toContain("MPL-2.0");
    expect(notice).toContain("aws/aws-cdk");
    expect(notice).toContain("cdk-terrain");
  });

  it("package.json declares the same license as the root LICENSE file", () => {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    expect(pkg.license).toBe("MPL-2.0");
  });
});

describe("tools/lazify — vendored Apache-2.0 tool", () => {
  it("has its own LICENSE (Apache-2.0)", () => {
    const licensePath = path.join(lazifyDir, "LICENSE");
    expect(fs.existsSync(licensePath)).toBe(true);
    expect(fs.readFileSync(licensePath, "utf8")).toContain("Apache License");
  });

  it("both vendored .ts files carry an Apache-2.0 provenance header", () => {
    for (const rel of ["lib/index.ts", "bin/lazify.ts"]) {
      const content = head(path.join(lazifyDir, rel));
      expect([rel, content]).toEqual([rel, expect.stringContaining("Apache-2.0")]);
      expect([rel, content]).toEqual([rel, expect.stringContaining("Vendored from")]);
    }
  });
});

describe("tools/awscc2cdk/src/vendored/spec2cdk — vendored Apache-2.0 sources", () => {
  it("has its own LICENSE (Apache-2.0)", () => {
    const licensePath = path.join(vendoredSpec2cdkDir, "LICENSE");
    expect(fs.existsSync(licensePath)).toBe(true);
    expect(fs.readFileSync(licensePath, "utf8")).toContain("Apache License");
  });

  it("every vendored .ts file carries the Apache-2.0 SPDX header", () => {
    const files = listTsFiles(vendoredSpec2cdkDir);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const content = head(file);
      expect([file, content]).toEqual([file, expect.stringContaining(APACHE_SPDX)]);
    }
  });

  it("marks its one modified file (util/jsii.ts) with a modification note", () => {
    const content = head(path.join(vendoredSpec2cdkDir, "util", "jsii.ts"));
    expect(content).toContain("Modified by cdktn-io");
  });
});

describe("tools/awscc2cdk/src/vendored/cdktn — vendored MPL-2.0 sources", () => {
  it("every vendored .ts file carries the MPL-2.0 SPDX header", () => {
    const files = listTsFiles(vendoredCdktnDir);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const content = head(file);
      expect([file, content]).toEqual([file, expect.stringContaining(MPL_SPDX)]);
    }
  });
});

describe("tools/awscc2cdk/src/grouped — adapted MPL-2.0 derivatives", () => {
  const groupedFiles = listTsFiles(groupedDir);

  it("finds a non-trivial number of files to check", () => {
    expect(groupedFiles.length).toBeGreaterThan(10);
  });

  it("every file with a same-relative-path counterpart under vendored/cdktn carries the MPL-2.0 SPDX header", () => {
    let checked = 0;
    for (const file of groupedFiles) {
      const rel = path.relative(groupedDir, file);
      const counterpart = path.join(vendoredCdktnDir, rel);
      if (!fs.existsSync(counterpart)) continue;
      checked++;
      const content = head(file);
      expect([rel, content]).toEqual([rel, expect.stringContaining(MPL_SPDX)]);
    }
    // sanity: this is the bulk of src/grouped/** — if the counterpart-matching logic regresses to
    // 0 matches (e.g. a directory rename), this catches it rather than silently checking nothing.
    expect(checked).toBeGreaterThan(10);
  });

  it("files adapted from vendored/cdktn that differ from their counterpart carry a modification note", () => {
    for (const file of groupedFiles) {
      const rel = path.relative(groupedDir, file);
      const counterpart = path.join(vendoredCdktnDir, rel);
      if (!fs.existsSync(counterpart)) continue;
      const same = fs.readFileSync(file, "utf8") === fs.readFileSync(counterpart, "utf8");
      if (same) continue; // byte-identical copy: no modification note required
      const content = head(file);
      expect([rel, content]).toEqual([
        rel,
        expect.stringMatching(/Adapted from|Modified by cdktn-io/),
      ]);
    }
  });

  it("sanitizers.ts (adapted from vendored/spec2cdk) carries the Apache-2.0 SPDX header and a modification note", () => {
    const content = head(path.join(groupedDir, "sanitizers.ts"));
    expect(content).toContain(APACHE_SPDX);
    expect(content).toMatch(/Adapted copy|Adapted from/);
  });
});

describe("generated/ — emitted bindings carry the cdktn-io MPL-2.0 header", () => {
  /** bounded sample: the root barrel, one full module, and a few resource files spread across
   * the tree — not all 1,494 resource files (this test must stay fast). */
  function sampleGeneratedTsFiles(): string[] {
    const files = [path.join(generatedDir, "index.ts")];
    const modules = fs
      .readdirSync(generatedDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    expect(modules.length).toBeGreaterThan(0);
    // every 37th module (coprime-ish stride over ~276 modules) keeps the sample small but spread out
    for (let i = 0; i < modules.length; i += 37) {
      const moduleDir = path.join(generatedDir, modules[i]);
      files.push(path.join(moduleDir, "index.ts"));
      const resourceFiles = fs
        .readdirSync(moduleDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts");
      if (resourceFiles.length > 0) files.push(path.join(moduleDir, resourceFiles[0]));
    }
    return files;
  }

  it("every sampled generated .ts file starts with the cdktn-io MPL-2.0 header", () => {
    const files = sampleGeneratedTsFiles();
    expect(files.length).toBeGreaterThan(5);
    for (const file of files) {
      const firstTwoLines = fs.readFileSync(file, "utf8").split(/\r?\n/).slice(0, 2).join("\n");
      expect([path.relative(generatedDir, file), firstTwoLines]).toEqual([
        path.relative(generatedDir, file),
        "// Copyright (c) cdktn-io\n// SPDX-License-Identifier: MPL-2.0",
      ]);
    }
  });

  it("metadata files (.jsiirc.json etc.) are untouched JSON — no header expected", () => {
    const jsiircPath = path.join(generatedDir, "aws-ec2", ".jsiirc.json");
    if (fs.existsSync(jsiircPath)) {
      expect(() => JSON.parse(fs.readFileSync(jsiircPath, "utf8"))).not.toThrow();
    }
  });
});
