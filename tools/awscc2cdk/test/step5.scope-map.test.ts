/**
 * Iteration 3, plan §5 step 5 — the scope-map refresh and spec2cdk's auto-extend rule.
 * CONTRACT.md "Iteration 3 — scope map".
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { specDb } from "./helpers/emit";
import { readTables } from "./helpers/md-table";
import {
  AWSCC_FQPN,
  effectiveScopeMapPath,
  fullSchemaPath,
  scopeMapPath,
  toolRoot,
  vendoredDocPath,
} from "./helpers/paths";

/** aws/aws-cdk main, 2026-08-28 */
const SCOPE_MAP_SHA = "6808bb7e04d64a903a73ad56a7879c75019a5908";
const SCOPE_MAP_ENTRIES = 302;
const ADDED_SINCE_a9e6639d = [
  "aws-artifact",
  "aws-backupsearch",
  "aws-cognitosync",
  "aws-networkflowmonitor",
  "aws-scn",
  "aws-states",
  "aws-storagegateway",
  "aws-thinclient",
  "aws-transcribe",
  "aws-usernotifications",
  "aws-wellarchitected",
];

/**
 * The CFN namespaces awscc 1.98.0 uses that the refreshed aws-cdk-lib scope map does not list, with
 * the module `modulePartsFromNamespace(namespace)` derives for each. Eight, not seven: the refresh
 * *removed* `aws-dataexchange` from the map, so AWS::DataExchange now needs auto-extending too.
 */
const AUTO_EXTENDED: Record<string, string> = {
  "AWS::AccountAccess": "aws-accountaccess",
  "AWS::AgentRegistry": "aws-agentregistry",
  "AWS::CloudHSM": "aws-cloudhsm",
  "AWS::DRS": "aws-drs",
  "AWS::DataExchange": "aws-dataexchange",
  "AWS::OpenSearch": "aws-opensearch",
  "AWS::ServerlessRepo": "aws-serverlessrepo",
  "AWS::Wickr": "aws-wickr",
};

const full = process.env.RUN_FULL === "1" ? describe : describe.skip;

let scopeMap: Record<string, any>;
let scopeMapModule: any;

beforeAll(async () => {
  scopeMap = JSON.parse(fs.readFileSync(scopeMapPath, "utf8"));
  scopeMapModule = await import(path.join(toolRoot, "src", "scope-map"));
});

describe("the vendored scope map is refreshed to aws/aws-cdk main", () => {
  it(`has ${SCOPE_MAP_ENTRIES} entries`, () => {
    expect(Object.keys(scopeMap).length).toBe(SCOPE_MAP_ENTRIES);
  });

  it("contains the 11 modules added since a9e6639d", () => {
    expect(ADDED_SINCE_a9e6639d.filter((m) => !(m in scopeMap))).toEqual([]);
  });

  it("no longer contains aws-dataexchange", () => {
    expect("aws-dataexchange" in scopeMap).toBe(false);
  });

  it("records the origin commit in VENDORED.md", () => {
    const row = readTables(vendoredDocPath)
      .flatMap((t) => t.rows)
      .find((r) => r.vendored === "src/vendored/scope-map.json");
    expect(row).toBeDefined();
    expect(row!.commit).toBe(SCOPE_MAP_SHA);
  });

  it("exposes that commit as SCOPE_MAP_COMMIT", () => {
    expect(scopeMapModule.SCOPE_MAP_COMMIT).toBe(SCOPE_MAP_SHA);
  });

  it("still resolves the iteration-2 modules the same way", () => {
    expect(scopeMapModule.moduleForCfnType("AWS::EC2::VPC")).toEqual({ module: "aws-ec2" });
    expect(scopeMapModule.moduleForCfnType("AWS::KinesisAnalyticsV2::Application")).toEqual({
      module: "aws-kinesisanalytics",
      suffix: "V2",
    });
    expect(scopeMapModule.moduleForCfnType("AWS::CloudFormation::Stack")).toEqual({ module: "aws-cloudformation" });
  });
});

describe("auto-extend: an unmapped CFN namespace gets modulePartsFromNamespace(namespace)", () => {
  it.each(Object.entries(AUTO_EXTENDED))("%s -> %s", (namespace, moduleDir) => {
    expect(scopeMapModule.moduleForCfnType(`${namespace}::Anything`)).toEqual({ module: moduleDir });
  });

  it("keeps a non-AWS family in the derived module name", () => {
    expect(scopeMapModule.moduleForCfnType("Fake::Service::Thing")).toEqual({ module: "fake-service" });
  });

  it("reports which namespaces it had to extend", () => {
    const cfnTypes = Object.keys(AUTO_EXTENDED)
      .map((ns) => `${ns}::Anything`)
      .concat(["AWS::EC2::VPC", "AWS::S3::Bucket"]);
    expect(scopeMapModule.autoExtendedNamespaces(cfnTypes).sort()).toEqual(Object.keys(AUTO_EXTENDED).sort());
  });

  it("effectiveScopeMap = the vendored map plus flagged entries for exactly those namespaces", () => {
    const cfnTypes = Object.keys(AUTO_EXTENDED).map((ns) => `${ns}::Anything`);
    const eff = scopeMapModule.effectiveScopeMap(cfnTypes);
    expect(Object.keys(eff).length).toBe(SCOPE_MAP_ENTRIES + Object.keys(AUTO_EXTENDED).length);
    for (const [namespace, moduleDir] of Object.entries(AUTO_EXTENDED)) {
      expect([moduleDir, eff[moduleDir]]).toEqual([
        moduleDir,
        { scopes: [{ namespace }], autoExtended: true },
      ]);
    }
    for (const key of Object.keys(scopeMap)) {
      expect([key, eff[key]]).toEqual([key, scopeMap[key]]);
    }
  });
});

describe("generated/scope-map.effective.json", () => {
  it("is committed and equals the vendored map plus the 8 auto-extended entries", () => {
    expect(fs.existsSync(effectiveScopeMapPath)).toBe(true);
    const eff = JSON.parse(fs.readFileSync(effectiveScopeMapPath, "utf8"));
    const extended = Object.entries(eff).filter(([, v]: any) => v?.autoExtended === true);
    expect(Object.fromEntries(extended.map(([k, v]: any) => [v.scopes[0].namespace, k]))).toEqual(AUTO_EXTENDED);
    expect(Object.keys(eff).length).toBe(SCOPE_MAP_ENTRIES + Object.keys(AUTO_EXTENDED).length);
    for (const key of Object.keys(scopeMap)) {
      expect([key, eff[key]]).toEqual([key, scopeMap[key]]);
    }
  });
});

full("over the full awscc schema (RUN_FULL=1)", () => {
  let report: any;

  beforeAll(async () => {
    const mod = await import(path.join(toolRoot, "src", "cfn-map"));
    const schema = JSON.parse(fs.readFileSync(fullSchemaPath, "utf8"));
    report = mod.buildCfnMap(schema, specDb(), { fqpn: AWSCC_FQPN });
  }, 600000);

  it("leaves no matched resource without a module", () => {
    const moduleLess = report.matched.filter((e: any) => !e.module).map((e: any) => e.awsccName);
    expect(moduleLess).toEqual([]);
  });

  it("needs auto-extending for exactly the 8 namespaces above", () => {
    const namespaces = report.matched.map((e: any) => e.cfnType.split("::").slice(0, 2).join("::"));
    expect(scopeMapModule.autoExtendedNamespaces(report.matched.map((e: any) => e.cfnType)).sort()).toEqual(
      Object.keys(AUTO_EXTENDED).sort(),
    );
    expect(new Set(namespaces).size).toBeGreaterThan(200);
  });

  it("still has exactly one unmatched awscc resource", () => {
    expect(report.unmatched).toEqual(["awscc_datasync_storage_system"]);
  });
});
