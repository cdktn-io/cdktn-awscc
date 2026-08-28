/**
 * Contract, plan §5 step 2: awscc resource -> CloudFormation type via @aws-cdk/aws-service-spec,
 * and CFN type -> aws-cdk-lib submodule via the vendored scope-map. See CONTRACT.md.
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import {
  AWSCC_FQPN,
  fullSchemaPath,
  miniSchemaPath,
  outDir,
  toolRoot,
} from "./helpers/paths";

interface CfnMapEntry {
  awsccName: string;
  cfnType: string;
  module?: string;
  suffix?: string;
}
interface CfnMapReport {
  matched: CfnMapEntry[];
  unmatched: string[];
  specOnly: string[];
  ambiguous: { key: string; awscc: string[]; cfnTypes: string[] }[];
  counts: Record<string, number>;
}

/** hand-written expectation table: awscc resource -> [cfn type, module, suffix] */
const EXPECTED: Record<string, [string, string, string | undefined]> = {
  awscc_accessanalyzer_analyzer: [
    "AWS::AccessAnalyzer::Analyzer",
    "aws-accessanalyzer",
    undefined,
  ],
  awscc_apigateway_resource: [
    "AWS::ApiGateway::Resource",
    "aws-apigateway",
    undefined,
  ],
  awscc_cloudformation_stack: [
    "AWS::CloudFormation::Stack",
    "aws-cloudformation",
    undefined,
  ],
  awscc_ec2_subnet: ["AWS::EC2::Subnet", "aws-ec2", undefined],
  awscc_ec2_vpc: ["AWS::EC2::VPC", "aws-ec2", undefined],
  awscc_iotwireless_device_profile: [
    "AWS::IoTWireless::DeviceProfile",
    "aws-iotwireless",
    undefined,
  ],
  awscc_kinesisanalyticsv2_application: [
    "AWS::KinesisAnalyticsV2::Application",
    "aws-kinesisanalytics",
    "V2",
  ],
  awscc_kinesisfirehose_delivery_stream: [
    "AWS::KinesisFirehose::DeliveryStream",
    "aws-kinesisfirehose",
    undefined,
  ],
  awscc_lambda_function: ["AWS::Lambda::Function", "aws-lambda", undefined],
  awscc_lex_bot: ["AWS::Lex::Bot", "aws-lex", undefined],
  awscc_s3_bucket: ["AWS::S3::Bucket", "aws-s3", undefined],
};

let cfnMap: any;
let scopeMap: any;
let db: any;
let report: CfnMapReport;

beforeAll(async () => {
  cfnMap = await import(path.join(toolRoot, "src", "cfn-map"));
  scopeMap = await import(path.join(toolRoot, "src", "scope-map"));
  const spec = await import("@aws-cdk/aws-service-spec");
  db = spec.loadAwsServiceSpecSync();
  const schema = JSON.parse(fs.readFileSync(miniSchemaPath, "utf8"));
  report = cfnMap.buildCfnMap(schema, db, { fqpn: AWSCC_FQPN });
}, 120000);

describe("normalizeKey", () => {
  it("keeps lowercase alphanumerics only", () => {
    expect(cfnMap.normalizeKey("AWS::KinesisAnalyticsV2")).toBe(
      "awskinesisanalyticsv2",
    );
    expect(cfnMap.normalizeKey("OAuth2CredentialProvider")).toBe(
      cfnMap.normalizeKey("o_auth_2_credential_provider"),
    );
    expect(cfnMap.normalizeKey("FSxONTAP")).toBe(cfnMap.normalizeKey("fsx_ontap"));
  });
});

describe("cfnTypeFor over the mini fixture", () => {
  it.each(Object.keys(EXPECTED))("%s", (awsccName) => {
    expect(cfnMap.cfnTypeFor(awsccName, db)).toBe(EXPECTED[awsccName][0]);
  });

  it("returns undefined for an unknown resource", () => {
    expect(cfnMap.cfnTypeFor("awscc_notaservice_notaresource", db)).toBeUndefined();
  });
});

describe("buildCfnMap over the mini fixture", () => {
  it("matches every fixture resource, with nothing unmatched or ambiguous", () => {
    const byName = new Map(report.matched.map((m) => [m.awsccName, m]));
    expect([...byName.keys()].sort()).toEqual(Object.keys(EXPECTED).sort());
    expect(report.unmatched).toEqual([]);
    expect(report.ambiguous).toEqual([]);
    expect(report.counts.matched).toBe(Object.keys(EXPECTED).length);

    for (const [awsccName, [cfnType, module, suffix]] of Object.entries(EXPECTED)) {
      const entry = byName.get(awsccName)!;
      expect([awsccName, entry.cfnType]).toEqual([awsccName, cfnType]);
      expect([awsccName, entry.module]).toEqual([awsccName, module]);
      expect([awsccName, entry.suffix]).toEqual([awsccName, suffix]);
    }
  });

  it("is order-independent", () => {
    const schema = JSON.parse(fs.readFileSync(miniSchemaPath, "utf8"));
    const rs = schema.provider_schemas[AWSCC_FQPN].resource_schemas;
    const shuffled: Record<string, unknown> = {};
    for (const k of Object.keys(rs).reverse()) shuffled[k] = rs[k];
    schema.provider_schemas[AWSCC_FQPN].resource_schemas = shuffled;
    const again: CfnMapReport = cfnMap.buildCfnMap(schema, db, { fqpn: AWSCC_FQPN });
    expect(again.matched).toEqual(report.matched);
    expect(again.unmatched).toEqual(report.unmatched);
  });
});

describe("moduleForCfnType via the vendored scope-map", () => {
  it.each(Object.values(EXPECTED).map(([cfnType, module, suffix]) => [cfnType, module, suffix]))(
    "%s -> %s",
    (cfnType, module, suffix) => {
      expect(scopeMap.moduleForCfnType(cfnType)).toEqual(
        suffix === undefined ? { module } : { module, suffix },
      );
    },
  );

  it("puts both kinesisanalytics scopes in aws-kinesisanalytics, V2 suffixed", () => {
    // AWS::KinesisAnalytics has no awscc counterpart, so it is asserted straight on the scope map
    expect(scopeMap.moduleForCfnType("AWS::KinesisAnalytics::Application")).toEqual({
      module: "aws-kinesisanalytics",
    });
    expect(scopeMap.moduleForCfnType("AWS::KinesisAnalyticsV2::Application")).toEqual({
      module: "aws-kinesisanalytics",
      suffix: "V2",
    });
  });

  it("returns undefined for an unmapped namespace", () => {
    expect(scopeMap.moduleForCfnType("AWS::NotAService::Thing")).toBeUndefined();
  });
});

const full = process.env.RUN_FULL === "1" ? describe : describe.skip;

full("full schema (RUN_FULL=1)", () => {
  it("maps at least 1450 of the 1494 awscc resources with no ambiguity", () => {
    const schema = JSON.parse(fs.readFileSync(fullSchemaPath, "utf8"));
    const full_report: CfnMapReport = cfnMap.buildCfnMap(schema, db, {
      fqpn: AWSCC_FQPN,
    });
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      path.join(outDir, "cfn-map-report.json"),
      JSON.stringify(full_report, null, 2) + "\n",
    );
    expect(full_report.ambiguous).toEqual([]);
    expect(full_report.counts.awscc).toBe(1494);
    expect(full_report.counts.matched).toBeGreaterThanOrEqual(1450);
  }, 300000);
});
