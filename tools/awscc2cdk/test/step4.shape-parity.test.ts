/**
 * Contract, plan §7 layer 4: shape parity with aws-cdk-lib's L1 layer, as a ratchet.
 *
 * For every fixture resource that has an aws-cdk-lib counterpart we read the `Cfn*` class out of
 * `aws-cdk-lib/<module>/lib/<svc>.generated.d.ts` and compare *names* with ours after `Cfn` -> `Cc`:
 * class name, `Props` member names, nested `*Property` interface names. Member names inside the
 * property types are recorded but never asserted — CDK camelCases CFN names while we camelCase the
 * terraform snake_case ones, and that gap is plan §8 work, not step 4 work.
 *
 * This file is read-only for the implementer; `shape-parity.baseline.json` is the ratchet and is
 * owned by the contract writer / verifier (the implementer must not raise it).
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { loadGenerateGrouped, miniSchema, specDb, tmpDir } from "./helpers/emit";
import { excludedResources } from "./helpers/exclusions";
import { AWSCC_FQPN, outDir, shapeParityBaselinePath } from "./helpers/paths";
import { cfnToCc, diffShapes, readCdkShape, readOurShape, type ShapeDiffEntry } from "./helpers/shape-diff";

/** awscc resource -> [aws-cdk-lib submodule, Cfn class] */
const CDK_COUNTERPART: Record<string, [string, string]> = {
  awscc_accessanalyzer_analyzer: ["aws-accessanalyzer", "CfnAnalyzer"],
  awscc_apigateway_resource: ["aws-apigateway", "CfnResource"],
  awscc_cloudformation_stack: ["aws-cloudformation", "CfnStack"],
  awscc_ec2_subnet: ["aws-ec2", "CfnSubnet"],
  awscc_ec2_vpc: ["aws-ec2", "CfnVPC"],
  awscc_iotwireless_device_profile: ["aws-iotwireless", "CfnDeviceProfile"],
  awscc_kinesisanalyticsv2_application: ["aws-kinesisanalytics", "CfnApplicationV2"],
  awscc_kinesisfirehose_delivery_stream: ["aws-kinesisfirehose", "CfnDeliveryStream"],
  awscc_lambda_function: ["aws-lambda", "CfnFunction"],
  awscc_lex_bot: ["aws-lex", "CfnBot"],
  awscc_s3_bucket: ["aws-s3", "CfnBucket"],
};

/** our module dir per resource (same submodule as CDK — that is the point of the scope map) */
const OUR_MODULE: Record<string, string> = Object.fromEntries(
  Object.entries(CDK_COUNTERPART).map(([r, [m]]) => [r, m]),
);

interface Baseline {
  resources: Record<string, { propertyTypesCommon: number }>;
}

let out: string;
let included: string[];
let diffs: Record<string, ShapeDiffEntry>;
let baseline: Baseline;

beforeAll(async () => {
  baseline = JSON.parse(fs.readFileSync(shapeParityBaselinePath, "utf8"));
  const skip = new Set(excludedResources());
  included = Object.keys(CDK_COUNTERPART).filter((r) => !skip.has(r));

  const generateGrouped = await loadGenerateGrouped();
  out = tmpDir("awscc2cdk-parity-");
  await generateGrouped(miniSchema(), specDb(), out, { fqpn: AWSCC_FQPN, resources: included });

  diffs = {};
  for (const r of included) {
    const [mod, cfnClass] = CDK_COUNTERPART[r];
    const cdk = readCdkShape(mod, cfnClass);
    if (!cdk) throw new Error(`aws-cdk-lib has no ${cfnClass} in ${mod} — fix the contract, not the generator`);
    const ours = readOurShape(path.join(out, OUR_MODULE[r]), cfnToCc(cfnClass));
    diffs[r] = diffShapes(cdk, ours);
  }

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, "shape-parity.json"),
    JSON.stringify(
      Object.fromEntries(
        Object.entries(diffs).map(([r, d]) => [
          r,
          {
            identical: d.identical,
            classMatch: d.classMatch,
            propsMembers: d.propsMembers,
            propertyTypes: d.propertyTypes,
            propertyTypeMembers: d.propertyTypeMembers,
          },
        ]),
      ),
      null,
      2,
    ) + "\n",
  );
}, 600000);

afterAll(() => {
  if (out) fs.rmSync(out, { recursive: true, force: true });
});

describe("class parity", () => {
  it("every fixture resource has our class under the Cfn -> Cc name", () => {
    const bad = Object.entries(diffs)
      .filter(([, d]) => !d.classMatch)
      .map(([r, d]) => `${r}: expected ${d.ccClass}`);
    expect(bad).toEqual([]);
  });
});

describe("property-type ratchet", () => {
  it("shares at least as many nested property-type names as the committed baseline", () => {
    const regressions: string[] = [];
    for (const r of included) {
      const want = baseline.resources[r]?.propertyTypesCommon ?? 0;
      const have = diffs[r].propertyTypes.common.length;
      if (have < want) regressions.push(`${r}: ${have} < baseline ${want}`);
    }
    expect(regressions).toEqual([]);
  });

  it("reports the current numbers (informational)", () => {
    for (const r of included) {
      const d = diffs[r];
      console.log(
        `[shape-parity] ${r}: class ${d.ccClass} ${d.classMatch ? "ok" : "MISSING"}; ` +
          `propertyTypes common=${d.propertyTypes.common.length} cdkOnly=${d.propertyTypes.cdkOnly.length} ` +
          `ourOnly=${d.propertyTypes.ourOnly.length}; props common=${d.propsMembers.common.length} ` +
          `cdkOnly=${d.propsMembers.cdkOnly.length} ourOnly=${d.propsMembers.ourOnly.length}`,
      );
    }
    expect(fs.existsSync(path.join(outDir, "shape-parity.json"))).toBe(true);
  });
});
