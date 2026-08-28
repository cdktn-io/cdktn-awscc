/**
 * Iteration 3, findings 1–5 of the iteration-2 verification (CONTRACT.md "Iteration 3 — findings
 * carried over"). One describe per finding. Finding 5 (the shape-parity ratchet) is data, not code:
 * it lives in `shape-parity.baseline.json` and is asserted by `step4.shape-parity.test.ts`; the
 * check here only guards that the raised baseline is the one on disk.
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { fullSchema, specDb } from "./helpers/emit";
import { num, readTables, tableWithHeaders } from "./helpers/md-table";
import { AWSCC_FQPN, outDir, shapeParityBaselinePath, spikeDocPath, toolRoot } from "./helpers/paths";

const SANITIZERS = ["propertyNameFromCloudFormation", "sanitizeTypeName", "santitizeFieldName"] as const;
const DECISIONS = ["keep", "drop", "replace"];
const BUCKET_KEYS = ["identical", "divergesOnly", "breaksJsii"] as const;

let report: any;

beforeAll(async () => {
  // Always recomputed (never read back from test/out/spike-naming.json): jest gives no ordering
  // guarantee between test files, so a cached report could be one implementation round stale.
  const mod = await import(path.join(toolRoot, "src", "spike-naming"));
  report = mod.runNamingSpike(fullSchema(), specDb(), { fqpn: AWSCC_FQPN });
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "spike-naming.json"), JSON.stringify(report, null, 2) + "\n");
}, 900000);

/* ------------------------------------------------------------------ finding 2 */

describe("finding 2 — `cfnRecovery` is a declared field of NamingSpikeReport", () => {
  it("is declared in the NamingSpikeReport interface in src/spike-naming.ts", () => {
    const src = fs.readFileSync(path.join(toolRoot, "src", "spike-naming.ts"), "utf8");
    const iface = /export interface NamingSpikeReport \{([\s\S]*?)\n\}/.exec(src);
    expect(iface).not.toBeNull();
    expect(iface![1]).toMatch(/readonly cfnRecovery:\s*SanitizerBuckets;/);
  });

  it("is present in the report and has the SanitizerBuckets shape", () => {
    expect(report.cfnRecovery).toBeDefined();
    for (const k of BUCKET_KEYS) {
      expect([k, Number.isInteger(report.cfnRecovery[k])]).toEqual([k, true]);
      expect(report.cfnRecovery[k]).toBeGreaterThanOrEqual(0);
    }
    expect(DECISIONS).toContain(report.cfnRecovery.decision);
    expect(Array.isArray(report.cfnRecovery.examples)).toBe(true);
  });

  it("stays out of the `sanitizers` map (whose keys are exactly the plan §4 three)", () => {
    expect(Object.keys(report.sanitizers).sort()).toEqual([...SANITIZERS].sort());
  });
});

/* ------------------------------------------------------------------ finding 1 */

describe("finding 1 — breaks-jsii is measured post-suffix", () => {
  it("reports 0 breaks-jsii for CFN-definition-name recovery", () => {
    // `naming.ts#propertyTypeName` unconditionally appends `Property`, so a bare `…List` /
    // `Lifecycle` base never reaches jsii: the emitted identifier is `…ListProperty`.
    // Measured on the identifier the generator actually emits, the count is 0 — the 70 hits of
    // round 2 were an artefact of measuring the pre-suffix base name.
    expect(report.cfnRecovery.breaksJsii).toBe(0);
  });

  it("reports 0 breaks-jsii for each of the three sanitizers", () => {
    for (const s of SANITIZERS) {
      expect([s, report.sanitizers[s].breaksJsii]).toEqual([s, 0]);
    }
  });

  it("docs/spike-naming.md states the post-suffix rule", () => {
    const md = fs.readFileSync(spikeDocPath, "utf8");
    expect(md).toMatch(/post-suffix/i);
  });

  it("docs/spike-naming.md's CFN-recovery row matches the report and shows 0", () => {
    const table = tableWithHeaders(readTables(spikeDocPath), [
      "transform",
      "identical",
      "diverges-only",
      "breaks-jsii",
      "decision",
    ]);
    expect(table).toBeDefined();
    const row = table!.rows.find((r) => /recovery/i.test(r.transform));
    expect(row).toBeDefined();
    expect(num(row!["breaks-jsii"])).toBe(0);
    expect(num(row!.identical)).toBe(report.cfnRecovery.identical);
    expect(num(row!["diverges-only"])).toBe(report.cfnRecovery.divergesOnly);
    expect(DECISIONS).toContain(row!.decision.split(/[\s—-]/)[0].toLowerCase());
  });
});

/* ------------------------------------------------------------------ finding 3 */

describe("finding 3 — digit-leading names get an uppercase repair, never `_`", () => {
  let naming: any;
  beforeAll(async () => {
    naming = await import(path.join(toolRoot, "src", "naming"));
  });

  it("exposes the documented prefix", () => {
    expect(naming.DIGIT_LEAD_PREFIX).toBe("N");
  });

  it.each([
    [["3d_model"], "N3dModelProperty"],
    [["a", "3d_model"], "N3dModelProperty"],
    [["9lives"], "N9livesProperty"],
    [["model_3d"], "Model3dProperty"],
  ])("propertyTypeName(%p) === %s", (input, expected) => {
    expect(naming.propertyTypeName(input as string[])).toBe(expected);
  });

  it("repairs a recovered CFN definition name too", () => {
    expect(naming.propertyTypeName("3DModel")).toBe("N3DModelProperty");
  });

  it("repairs the full-path fallback as well", () => {
    const names = naming.propertyTypeNamesForResource([
      { path: ["3d_model", "rules"] },
      { path: ["other", "rules"] },
    ]);
    expect(names["3d_model.rules"]).toBe("N3dModelRulesProperty");
    expect(names["other.rules"]).toBe("OtherRulesProperty");
  });

  it("never yields a leading underscore and always matches the name grammar", () => {
    const names = naming.propertyTypeNamesForResource([
      { path: ["3d_model"] },
      { path: ["_hidden"] },
      { path: ["9lives", "3rd_party"] },
    ]);
    for (const n of Object.values(names) as string[]) {
      expect([n, n.startsWith("_")]).toEqual([n, false]);
      expect([n, naming.NAME_GRAMMAR.propertyInterface.test(n)]).toEqual([n, true]);
    }
  });

  it("is order-independent", () => {
    const a = naming.propertyTypeNamesForResource([{ path: ["3d_model", "rules"] }, { path: ["other", "rules"] }]);
    const b = naming.propertyTypeNamesForResource([{ path: ["other", "rules"] }, { path: ["3d_model", "rules"] }]);
    expect(a).toEqual(b);
  });
});

/* ------------------------------------------------------------------ finding 4 */

/**
 * Expected values derived by hand from spec2cdk `namespaceToModuleDefinition()`
 * (`src/vendored/spec2cdk/util/jsii.ts`) with the plan §10 roots
 * python `cdktn_awscc` / dotnet `Io.Cdktn.AwsCc` / java `io.cdktn.awscc`, plus the two rules
 * CONTRACT.md "Iteration 3 — `.jsiirc.json`" fixes: the `AWS` family segment is dropped from the
 * dotnet namespace (plan §10: `Io.Cdktn.AwsCc.EC2`, mirroring `Amazon.CDK.AWS.EC2`), and a
 * scope-map `targets` override wins after its aws-cdk-lib root is swapped for ours.
 */
const JSIIRC_EXPECTED: Record<string, { python: string; dotnet: string; java: string }> = {
  // AWS::EC2 — plain derivation, unchanged from iteration 2
  "aws-ec2": {
    python: "cdktn_awscc.aws_ec2",
    dotnet: "Io.Cdktn.AwsCc.EC2",
    java: "io.cdktn.awscc.services.ec2",
  },
  // Alexa::ASK — non-AWS family; scope-map override `Amazon.CDK.Alexa.Ask` / `…alexa.ask`
  "alexa-ask": {
    python: "cdktn_awscc.alexa_ask",
    dotnet: "Io.Cdktn.AwsCc.Alexa.Ask",
    java: "io.cdktn.awscc.alexa.ask",
  },
  // AWS::Serverless -> AWS::SAM inside modulePartsFromNamespace
  "aws-sam": {
    python: "cdktn_awscc.aws_sam",
    dotnet: "Io.Cdktn.AwsCc.SAM",
    java: "io.cdktn.awscc.services.sam",
  },
  // module dir 'core', namespace AWS::CloudFormation: python follows the *directory*, dotnet/java
  // follow the namespace. Never emitted (aws-cloudformation wins the shared namespace), asserted
  // to pin the derivation.
  core: {
    python: "cdktn_awscc.core",
    dotnet: "Io.Cdktn.AwsCc.CloudFormation",
    java: "io.cdktn.awscc.services.cloudformation",
  },
  // dotnet override only (`Amazon.CDK.AWS.APIGateway`), java derived
  "aws-apigateway": {
    python: "cdktn_awscc.aws_apigateway",
    dotnet: "Io.Cdktn.AwsCc.APIGateway",
    java: "io.cdktn.awscc.services.apigateway",
  },
  // java override only (`software.amazon.awscdk.services.waf.regional`), dotnet derived
  "aws-wafregional": {
    python: "cdktn_awscc.aws_wafregional",
    dotnet: "Io.Cdktn.AwsCc.WAFRegional",
    java: "io.cdktn.awscc.services.waf.regional",
  },
};

const MODULE_PARTS_EXPECTED: Record<string, any> = {
  "aws-ec2": { primaryNamespace: "AWS::EC2", moduleFamily: "AWS", moduleBaseName: "EC2", submoduleName: "aws_ec2" },
  "alexa-ask": { primaryNamespace: "Alexa::ASK", moduleFamily: "Alexa", moduleBaseName: "ASK", submoduleName: "alexa_ask" },
  "aws-sam": { primaryNamespace: "AWS::Serverless", moduleFamily: "AWS", moduleBaseName: "SAM", submoduleName: "aws_sam" },
  core: {
    primaryNamespace: "AWS::CloudFormation",
    moduleFamily: "AWS",
    moduleBaseName: "CloudFormation",
    submoduleName: "core",
  },
};

describe("finding 4 — .jsiirc.json goes through modulePartsFromNamespace", () => {
  let jsiirc: any;
  beforeAll(async () => {
    jsiirc = await import(path.join(toolRoot, "src", "grouped", "jsiirc"));
  });

  it.each(Object.keys(MODULE_PARTS_EXPECTED))("modulePartsForModule(%s)", (moduleDir) => {
    const parts = jsiirc.modulePartsForModule(moduleDir);
    expect(parts).toBeDefined();
    for (const [k, v] of Object.entries(MODULE_PARTS_EXPECTED[moduleDir])) {
      expect([moduleDir, k, parts[k]]).toEqual([moduleDir, k, v]);
    }
    expect([moduleDir, parts.moduleDir]).toEqual([moduleDir, moduleDir]);
  });

  it.each(Object.keys(JSIIRC_EXPECTED))("jsiircFor(%s)", (moduleDir) => {
    const e = JSIIRC_EXPECTED[moduleDir];
    expect(jsiirc.jsiircFor(moduleDir)).toEqual({
      targets: {
        python: { module: e.python },
        dotnet: { namespace: e.dotnet },
        java: { package: e.java },
      },
    });
  });

  it("falls back to the module directory when the scope map has no namespace", () => {
    // `interfaces` is the one scope-map entry with an empty `scopes` array.
    expect(jsiirc.modulePartsForModule("interfaces")).toBeUndefined();
    expect(jsiirc.jsiircFor("interfaces")).toEqual({
      targets: {
        python: { module: "cdktn_awscc.interfaces" },
        dotnet: { namespace: "Io.Cdktn.AwsCc.Interfaces" },
        java: { package: "io.cdktn.awscc.services.interfaces" },
      },
    });
  });

  it("derives every module in the scope map without throwing, with a unique dotnet namespace per module", () => {
    const map = JSON.parse(fs.readFileSync(path.join(toolRoot, "src", "vendored", "scope-map.json"), "utf8"));
    const dotnet = new Map<string, string>();
    for (const moduleDir of Object.keys(map)) {
      const j = jsiirc.jsiircFor(moduleDir);
      expect([moduleDir, Object.keys(j.targets).sort()]).toEqual([moduleDir, ["dotnet", "java", "python"]]);
      expect([moduleDir, j.targets.python.module]).toEqual([
        moduleDir,
        `cdktn_awscc.${moduleDir.replace(/-/g, "_")}`,
      ]);
      // `core` and `aws-cloudformation` legitimately share AWS::CloudFormation; `core` is never
      // emitted (see step6.full-emit.test.ts), so it is excluded from the uniqueness check.
      if (moduleDir === "core") continue;
      const ns = j.targets.dotnet.namespace;
      expect([ns, dotnet.get(ns)]).toEqual([ns, undefined]);
      dotnet.set(ns, moduleDir);
    }
  });
});

/* ------------------------------------------------------------------ finding 5 */

describe("finding 5 — the shape-parity ratchet is raised to the observed numbers", () => {
  it("matches the iteration-2 measurement", () => {
    const baseline = JSON.parse(fs.readFileSync(shapeParityBaselinePath, "utf8"));
    expect(baseline.resources).toEqual({
      awscc_accessanalyzer_analyzer: { propertyTypesCommon: 9 },
      awscc_apigateway_resource: { propertyTypesCommon: 0 },
      awscc_cloudformation_stack: { propertyTypesCommon: 0 },
      awscc_ec2_subnet: { propertyTypesCommon: 2 },
      awscc_ec2_vpc: { propertyTypesCommon: 3 },
      awscc_iotwireless_device_profile: { propertyTypesCommon: 1 },
      awscc_kinesisanalyticsv2_application: { propertyTypesCommon: 39 },
      awscc_kinesisfirehose_delivery_stream: { propertyTypesCommon: 66 },
      awscc_lambda_function: { propertyTypesCommon: 17 },
      awscc_lex_bot: { propertyTypesCommon: 65 },
      awscc_s3_bucket: { propertyTypesCommon: 60 },
    });
  });
});
