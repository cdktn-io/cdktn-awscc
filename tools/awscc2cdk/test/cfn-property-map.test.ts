/**
 * cdktn-planning#1 / awscdk-compat-plan.md §8: `GenerateGroupedOptions#emitCfnPropertyMap`
 * (default off) emits, per resource, a static `CFN_PROPERTY_NAME_MAP` (CFN PascalCase property
 * name -> terraform snake_case attribute name), for a Phase-2 bridge's
 * `TerraformIntrinsicResolver` to translate PascalCase property-bag literals embedded in
 * unmodified aws-cdk-lib intrinsic calls. See `docs/planning-issue-1-impact.md` in the sibling
 * `cdktn-grouped-resources` workspace for the full evaluation and
 * `scripts/cfn-property-map-prestudy.ts` for the empirical pre-study this feature is built on.
 *
 * Not a "step" test (no numbered plan section covers this — it is the optional, pre-v0.1.0 change
 * the impact evaluation recommended), so it isn't prefixed `stepN.` like the plan-driven suites.
 *
 * The same flag also gates a second static, `CFN_ATTRIBUTE_NAME_MAP` (CFN `Fn::GetAtt` attribute
 * name -> terraform attribute/attribute-path, `src/grouped/cfn-attribute-map.ts`) — its flag-on
 * behaviour is covered by the sibling `cfn-attribute-map.test.ts`; the flag-off byte-identical
 * check below covers both statics at once.
 */
import { AWSCC_FQPN } from "./helpers/paths";
import { loadGenerateGrouped, miniSchema, specDb, tmpDir, fileBytes } from "./helpers/emit";
import * as fs from "node:fs";
import * as path from "node:path";

describe("emitCfnPropertyMap (cdktn-planning#1)", () => {
  it("flag off: output is byte-identical to not passing the option at all", async () => {
    const generateGrouped = await loadGenerateGrouped();
    const outAbsent = tmpDir("cfn-property-map-absent-");
    const outFalse = tmpDir("cfn-property-map-false-");

    await generateGrouped(miniSchema(), specDb(), outAbsent, {
      fqpn: AWSCC_FQPN,
      resources: ["awscc_ec2_vpc"],
    });
    // `emitCfnPropertyMap` is a genuinely new, additive option — passing it explicitly `false`
    // must be indistinguishable from a caller (e.g. every pre-existing test in this suite) that
    // never knew the option existed.
    await (generateGrouped as unknown as (
      schema: any,
      db: any,
      outDir: string,
      options: { fqpn: string; resources: string[]; emitCfnPropertyMap: boolean },
    ) => Promise<string[]>)(miniSchema(), specDb(), outFalse, {
      fqpn: AWSCC_FQPN,
      resources: ["awscc_ec2_vpc"],
      emitCfnPropertyMap: false,
    });

    expect(fileBytes(outFalse)).toEqual(fileBytes(outAbsent));

    const vpcText = fs.readFileSync(path.join(outAbsent, "aws-ec2", "vpc.ts"), "utf8");
    expect(vpcText).not.toContain("CFN_PROPERTY_NAME_MAP");
    // cdktn-planning#1 continued (src/grouped/cfn-attribute-map.ts): same flag, same guarantee —
    // see cfn-attribute-map.test.ts for the flag-on behaviour.
    expect(vpcText).not.toContain("CFN_ATTRIBUTE_NAME_MAP");
  });

  it("flag on: CcVPC.CFN_PROPERTY_NAME_MAP has the top-level Ipv4IpamPoolId entry and a nested VpcEncryptionControl entry", async () => {
    const generateGrouped = await loadGenerateGrouped();
    const outDir = tmpDir("cfn-property-map-on-");

    await (generateGrouped as unknown as (
      schema: any,
      db: any,
      outDir: string,
      options: { fqpn: string; resources: string[]; emitCfnPropertyMap: boolean },
    ) => Promise<string[]>)(miniSchema(), specDb(), outDir, {
      fqpn: AWSCC_FQPN,
      resources: ["awscc_ec2_vpc"],
      emitCfnPropertyMap: true,
    });

    const vpcText = fs.readFileSync(path.join(outDir, "aws-ec2", "vpc.ts"), "utf8");

    expect(vpcText).toContain("public static readonly CFN_PROPERTY_NAME_MAP: { [cfnName: string]: string }");
    // Top-level: CFN `Ipv4IpamPoolId` -> awscc `ipv_4_ipam_pool_id` — the counter-example that
    // proves a naive PascalCase->snake_case ("ipv4_ipam_pool_id") is wrong.
    expect(vpcText).toContain(`"Ipv4IpamPoolId": "ipv_4_ipam_pool_id"`);
    // Nested: reached only via the VpcEncryptionControl struct, merged flat into the same map.
    expect(vpcText).toContain(`"EgressOnlyInternetGatewayExclusion": "egress_only_internet_gateway_exclusion"`);

    // Only load the module (not eval CFN_PROPERTY_NAME_MAP as JS) to keep this a pure text/shape
    // assertion consistent with the rest of this suite's `tsc`-based checks — parse the object
    // literal out of the emitted text instead of requiring compiled output.
    const mapBlockMatch = vpcText.match(/CFN_PROPERTY_NAME_MAP: \{ \[cfnName: string\]: string \} = \{([\s\S]*?)\};/);
    expect(mapBlockMatch).toBeTruthy();
    // Keys are sorted, so this is also a determinism check on the emitted object literal.
    const keys = [...(mapBlockMatch?.[1].matchAll(/"([^"]+)":/g) ?? [])].map((m) => m[1]);
    expect(keys).toEqual([...keys].sort());
    expect(keys.length).toBeGreaterThan(20);
  });
});
