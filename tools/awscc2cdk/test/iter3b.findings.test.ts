/**
 * Iteration 3b — the iteration-3 verifier's findings, minus the two that are edits to existing
 * files (finding 1, retired assertions in `step2.cfnmap.test.ts` / `step3.naming.test.ts`, and
 * findings 2/5, which live in `step6.full-jsii.test.ts`). See CONTRACT.md "Iteration 3b".
 *
 * finding 3  the `exports` map must resolve from the *package root*, not from `generated/`
 * finding 4  `.jsiirc.json` must go through the effective (auto-extended) scope map
 * finding 6  `src/vendored/scope-map.json` must be the upstream bytes, verbatim
 * finding 7  the benchmark must fail fast on old python and consume the pipeline's own wheel
 *
 * This file is read-only for the implementer.
 */
import { spawnSync } from "node:child_process";
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { tmpDir } from "./helpers/emit";
import {
  benchScriptPath,
  distPythonDir,
  generatedDir,
  jsiiManifestPath,
  packageExportsPath,
  packageGitignorePath,
  packageRoot,
  phase1ResultsPath,
  scopeMapPath,
  toolRoot,
  vendoredDocPath,
} from "./helpers/paths";

/* ================================================================== finding 3 — the exports map */

/**
 * The staged package is `{ package.json, generated/** }` — the repo layout, kept — so a target of
 * `"./index.js"` resolves to `<pkg>/index.js`, which does not exist, and because `exports` wins
 * over `main` in every modern Node, `require('@cdktn/awscc')` then fails MODULE_NOT_FOUND.
 * Every target must therefore be `./generated/…`.
 *
 * This test does not need a compiled tree: it stages the *real* `package.exports.json` next to a
 * stub file at every path that map claims, and makes Node and tsc resolve it. If the map is wrong,
 * either the stub lands somewhere Node cannot see it, or resolution fails — both are the defect.
 */
describe("finding 3 — package.exports.json resolves from the staged package root", () => {
  let consumer: string;
  let pkgDir: string;

  beforeAll(() => {
    const root = tmpDir("awscc2cdk-exports-");
    pkgDir = path.join(root, "pkg");
    consumer = path.join(root, "consumer");

    const exportsMap = JSON.parse(fs.readFileSync(packageExportsPath, "utf8")) as Record<string, any>;
    const manifest = JSON.parse(fs.readFileSync(jsiiManifestPath, "utf8"));
    fs.mkdirSync(pkgDir, { recursive: true });
    fs.writeFileSync(
      path.join(pkgDir, "package.json"),
      JSON.stringify({ ...manifest, jsii: undefined, exports: exportsMap }, null, 2) + "\n",
    );

    // Stubs are laid out the way the *package* is laid out — `generated/<module>/index.{js,d.ts}`,
    // one directory per key of the map, mirroring the committed `generated/` tree — deliberately
    // NOT at the paths the map names. Otherwise the test would follow the map wherever it pointed
    // and could never catch a wrong target.
    for (const key of Object.keys(exportsMap)) {
      const symbol = key === "." ? "Root" : "CcVPC";
      const dir = path.join(pkgDir, "generated", key === "." ? "" : key.replace(/^\.\//, ""));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.js"), `class ${symbol} {}\nmodule.exports = { ${symbol} };\n`);
      fs.writeFileSync(path.join(dir, "index.d.ts"), `export declare class ${symbol} { readonly ok: boolean; }\n`);
    }

    fs.mkdirSync(path.join(consumer, "node_modules", "@cdktn"), { recursive: true });
    fs.symlinkSync(pkgDir, path.join(consumer, "node_modules", "@cdktn", "awscc"), "dir");
    fs.writeFileSync(
      path.join(consumer, "package.json"),
      JSON.stringify({ name: "consumer", version: "0.0.0", private: true }, null, 2) + "\n",
    );
  });

  it("every target sits under ./generated/ and exists in the staged package", () => {
    const exportsMap = JSON.parse(fs.readFileSync(packageExportsPath, "utf8")) as Record<string, any>;
    for (const [key, value] of Object.entries(exportsMap)) {
      for (const field of ["types", "default"]) {
        expect([key, field, String(value[field]).startsWith("./generated/")]).toEqual([key, field, true]);
      }
    }
    // `main`/`types` in the manifest and the `.` export must name the same files
    const manifest = JSON.parse(fs.readFileSync(jsiiManifestPath, "utf8"));
    expect(`./${manifest.main}`).toBe(exportsMap["."].default);
    expect(`./${manifest.types}`).toBe(exportsMap["."].types);
  });

  it("node resolves the package root and a module subpath", () => {
    const run = (code: string) =>
      spawnSync(process.execPath, ["-e", code], { cwd: consumer, encoding: "utf8" });

    const root = run("require('@cdktn/awscc');");
    expect([root.status, `${root.stderr}`.slice(0, 2000)]).toEqual([0, `${root.stderr}`.slice(0, 2000)]);

    const sub = run("if (typeof require('@cdktn/awscc/aws-ec2').CcVPC !== 'function') process.exit(3);");
    expect([sub.status, `${sub.stderr}`.slice(0, 2000)]).toEqual([0, `${sub.stderr}`.slice(0, 2000)]);
  });

  it("tsc resolves the .d.ts behind a module subpath", () => {
    fs.writeFileSync(
      path.join(consumer, "index.ts"),
      'import { CcVPC } from "@cdktn/awscc/aws-ec2";\nexport const x: typeof CcVPC = CcVPC;\n',
    );
    fs.writeFileSync(
      path.join(consumer, "tsconfig.json"),
      JSON.stringify(
        {
          compilerOptions: {
            target: "ES2022",
            module: "node16",
            moduleResolution: "node16",
            strict: true,
            noEmit: true,
            types: [],
          },
          files: ["index.ts"],
        },
        null,
        2,
      ) + "\n",
    );
    const tsc = spawnSync(path.join(packageRoot, "node_modules", ".bin", "tsc"), ["-p", consumer], {
      cwd: consumer,
      encoding: "utf8",
    });
    expect([tsc.status, `${tsc.stdout}${tsc.stderr}`.slice(0, 4000)]).toEqual([
      0,
      `${tsc.stdout}${tsc.stderr}`.slice(0, 4000),
    ]);
  });
});

/* ============================================== finding 4 — .jsiirc.json for auto-extended modules */

/**
 * `jsiircFor` read the *vendored* map, so an auto-extended module had no namespace to derive from
 * and fell back to PascalCasing the directory: `Io.Cdktn.AwsCc.Cloudhsm`, not `…CloudHSM`. The
 * derivation must go through the effective map, i.e. `modulePartsFromNamespace(namespace)`.
 *
 * Expected values below are `modulePartsFromNamespace(ns)` + the plan §10 roots, by hand:
 *   dotnet = `Io.Cdktn.AwsCc.<moduleBaseName>` (family `AWS`), java =
 *   `io.cdktn.awscc.services.<lower(moduleBaseName)>`, python = `cdktn_awscc.<dir with '-'→'_'>`.
 * The eight namespaces are exactly `autoExtendedNamespaces()` over awscc 1.98.0's CFN types
 * (CONTRACT.md "Iteration 3 — scope map"); the CFN casing is the spec's, read off
 * `test/out/cfn-map-report.json`.
 */
const AUTO_EXTENDED_JSIIRC: Record<string, { namespace: string; python: string; dotnet: string; java: string }> = {
  "aws-accountaccess": {
    namespace: "AWS::AccountAccess",
    python: "cdktn_awscc.aws_accountaccess",
    dotnet: "Io.Cdktn.AwsCc.AccountAccess",
    java: "io.cdktn.awscc.services.accountaccess",
  },
  "aws-agentregistry": {
    namespace: "AWS::AgentRegistry",
    python: "cdktn_awscc.aws_agentregistry",
    dotnet: "Io.Cdktn.AwsCc.AgentRegistry",
    java: "io.cdktn.awscc.services.agentregistry",
  },
  "aws-cloudhsm": {
    namespace: "AWS::CloudHSM",
    python: "cdktn_awscc.aws_cloudhsm",
    dotnet: "Io.Cdktn.AwsCc.CloudHSM",
    java: "io.cdktn.awscc.services.cloudhsm",
  },
  "aws-dataexchange": {
    namespace: "AWS::DataExchange",
    python: "cdktn_awscc.aws_dataexchange",
    dotnet: "Io.Cdktn.AwsCc.DataExchange",
    java: "io.cdktn.awscc.services.dataexchange",
  },
  "aws-drs": {
    namespace: "AWS::DRS",
    python: "cdktn_awscc.aws_drs",
    dotnet: "Io.Cdktn.AwsCc.DRS",
    java: "io.cdktn.awscc.services.drs",
  },
  "aws-opensearch": {
    namespace: "AWS::OpenSearch",
    python: "cdktn_awscc.aws_opensearch",
    dotnet: "Io.Cdktn.AwsCc.OpenSearch",
    java: "io.cdktn.awscc.services.opensearch",
  },
  "aws-serverlessrepo": {
    namespace: "AWS::ServerlessRepo",
    python: "cdktn_awscc.aws_serverlessrepo",
    dotnet: "Io.Cdktn.AwsCc.ServerlessRepo",
    java: "io.cdktn.awscc.services.serverlessrepo",
  },
  "aws-wickr": {
    namespace: "AWS::Wickr",
    python: "cdktn_awscc.aws_wickr",
    dotnet: "Io.Cdktn.AwsCc.Wickr",
    java: "io.cdktn.awscc.services.wickr",
  },
};

function targetsOf(e: { python: string; dotnet: string; java: string }) {
  return {
    targets: {
      python: { module: e.python },
      dotnet: { namespace: e.dotnet },
      java: { package: e.java },
    },
  };
}

describe("finding 4 — .jsiirc.json for auto-extended modules goes through the effective map", () => {
  let jsiirc: any;
  let effective: any;

  beforeAll(async () => {
    jsiirc = await import(path.join(toolRoot, "src", "grouped", "jsiirc"));
    const scopeMap = await import(path.join(toolRoot, "src", "scope-map"));
    effective = scopeMap.effectiveScopeMap(
      Object.values(AUTO_EXTENDED_JSIIRC).map((e) => `${e.namespace}::Anything`),
    );
  });

  it("the eight auto-extended module dirs are exactly the ones under test", () => {
    const derived = Object.values(AUTO_EXTENDED_JSIIRC).map((e) =>
      e.namespace.replace("::", "-").toLowerCase(),
    );
    expect(derived.sort()).toEqual(Object.keys(AUTO_EXTENDED_JSIIRC).sort());
  });

  it.each(Object.keys(AUTO_EXTENDED_JSIIRC))("jsiircFor(%s, effectiveScopeMap)", (moduleDir) => {
    // additive second parameter: the scope map to derive from, default the vendored one
    expect(jsiirc.jsiircFor(moduleDir, effective)).toEqual(targetsOf(AUTO_EXTENDED_JSIIRC[moduleDir]));
  });

  it.each(Object.keys(AUTO_EXTENDED_JSIIRC))("modulePartsForModule(%s, effectiveScopeMap)", (moduleDir) => {
    const e = AUTO_EXTENDED_JSIIRC[moduleDir];
    const parts = jsiirc.modulePartsForModule(moduleDir, effective);
    expect([moduleDir, parts?.primaryNamespace]).toEqual([moduleDir, e.namespace]);
    expect([moduleDir, parts?.moduleFamily]).toEqual([moduleDir, "AWS"]);
    expect([moduleDir, parts?.moduleBaseName]).toEqual([moduleDir, e.namespace.split("::")[1]]);
    expect([moduleDir, parts?.moduleDir]).toEqual([moduleDir, moduleDir]);
  });

  it("the committed generated/<module>/.jsiirc.json carries those values", () => {
    for (const [moduleDir, e] of Object.entries(AUTO_EXTENDED_JSIIRC)) {
      const p = path.join(generatedDir, moduleDir, ".jsiirc.json");
      expect([moduleDir, fs.existsSync(p)]).toEqual([moduleDir, true]);
      expect([moduleDir, JSON.parse(fs.readFileSync(p, "utf8"))]).toEqual([moduleDir, targetsOf(e)]);
    }
  });

  it("keeps the vendored-map derivation when no map is passed", () => {
    expect(jsiirc.jsiircFor("aws-ec2")).toEqual(
      targetsOf({
        python: "cdktn_awscc.aws_ec2",
        dotnet: "Io.Cdktn.AwsCc.EC2",
        java: "io.cdktn.awscc.services.ec2",
      }),
    );
  });

  it("derives a unique dotnet namespace over the whole effective map (core excluded)", () => {
    const seen = new Map<string, string>();
    for (const moduleDir of Object.keys(effective)) {
      if (moduleDir === "core") continue;
      const ns = jsiirc.jsiircFor(moduleDir, effective).targets.dotnet.namespace;
      expect([ns, seen.get(ns)]).toEqual([ns, undefined]);
      seen.set(ns, moduleDir);
    }
    expect(seen.size).toBe(Object.keys(effective).length - 1);
  });
});

/* ============================================== finding 6 — the vendored scope map is verbatim */

/**
 * Re-fetch with, and compare to, exactly:
 *   gh api repos/aws/aws-cdk/contents/packages/aws-cdk-lib/scripts/scope-map.json --jq .content \
 *     | base64 -d
 * at SCOPE_MAP_COMMIT. The committed copy had been JSON-round-tripped (key order changed inside
 * `aws-kinesisanalytics`), which VENDORED.md claimed it had not been.
 */
const SCOPE_MAP_SHA256 = "24633aa19d9e1076f597c8af470e87d40c0f65bc509c624b2707bdab24dfa2d2";
const SCOPE_MAP_BYTES = 32677;

describe("finding 6 — src/vendored/scope-map.json is the upstream bytes", () => {
  it("hashes to the recorded sha256", () => {
    const buf = fs.readFileSync(scopeMapPath);
    expect(buf.length).toBe(SCOPE_MAP_BYTES);
    expect(crypto.createHash("sha256").update(buf).digest("hex")).toBe(SCOPE_MAP_SHA256);
  });

  it("is not a re-serialisation: upstream's key order survives in aws-kinesisanalytics", () => {
    // The one place a JSON round-trip is visible: upstream writes namespace, suffix, deprecated;
    // the round-tripped copy had sorted them to deprecated, namespace, suffix.
    const text = fs.readFileSync(scopeMapPath, "utf8");
    expect(text).toContain(
      [
        '        "namespace": "AWS::KinesisAnalyticsV2",',
        '        "suffix": "V2",',
        '        "deprecated": "use `aws-kinesisanalyticsv2` instead"',
      ].join("\n"),
    );
  });

  it("VENDORED.md records that sha256 next to the row", () => {
    expect(fs.readFileSync(vendoredDocPath, "utf8")).toContain(SCOPE_MAP_SHA256);
  });
});

/* ============================================== finding 7 — the benchmark and its input wheel */

describe("finding 7 — bench_python_import.py fails fast on old python", () => {
  const bench = fs.existsSync(benchScriptPath) ? fs.readFileSync(benchScriptPath, "utf8") : "";

  it("guards on sys.version_info before doing anything else", () => {
    expect(bench).toMatch(/sys\.version_info/);
    expect(bench).toMatch(/3,\s*10|3\.10/);
  });

  it("names the interpreter to use in the error message", () => {
    expect(bench).toContain("/opt/homebrew/bin/python3.14");
  });

  it("actually exits non-zero with a readable message under python 3.9", () => {
    // /usr/bin/python3 is 3.9 on this machine; skip elsewhere rather than fail for the wrong reason
    const probe = spawnSync("/usr/bin/python3", ["-c", "import sys; print(sys.version_info[:2])"], {
      encoding: "utf8",
    });
    const old = probe.status === 0 && /\(3, [0-9]\)/.test(probe.stdout);
    if (!old) return;
    const run = spawnSync("/usr/bin/python3", [benchScriptPath], { encoding: "utf8" });
    expect(run.status).not.toBe(0);
    expect(`${run.stdout}${run.stderr}`).toMatch(/python 3\.10/i);
    expect(`${run.stdout}${run.stderr}`).toContain("/opt/homebrew/bin/python3.14");
    // a guard, not a traceback from an import that happened to fail
    expect(`${run.stdout}${run.stderr}`).not.toContain("Traceback");
  });

  it("consumes the wheel the graded pipeline leaves at cdktn-awscc/dist/python/", () => {
    expect(bench).toMatch(/dist[\/\\]python/);
  });

  it("dist/ is gitignored", () => {
    expect(fs.readFileSync(packageGitignorePath, "utf8")).toMatch(/^dist\/?$/m);
  });
});

describe("finding 7 — the write-up states how the benchmark was invoked", () => {
  it("docs/phase1-results.md names the interpreter", () => {
    const md = fs.readFileSync(phase1ResultsPath, "utf8");
    expect(md).toContain("/opt/homebrew/bin/python3.14");
    expect(md).toMatch(/scripts\/bench_python_import\.py/);
  });

  it("if a wheel has been built, exactly one sits at the stable path", () => {
    if (!fs.existsSync(distPythonDir)) return;
    const wheels = fs.readdirSync(distPythonDir).filter((f) => f.endsWith(".whl"));
    expect(wheels.length).toBe(1);
    expect(wheels[0]).toMatch(/^cdktn_awscc-/);
  });
});
