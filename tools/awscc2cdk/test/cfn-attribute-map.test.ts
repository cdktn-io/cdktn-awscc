/**
 * cdktn-planning#1 continued / RFC 002 reference-resolver context: the same flag as
 * `cfn-property-map.test.ts` (`GenerateGroupedOptions#emitCfnPropertyMap`, default off) also emits,
 * per resource, a static `CFN_ATTRIBUTE_NAME_MAP` (CFN `Fn::GetAtt` attribute name -> terraform
 * attribute, or — when the CFN name is only reachable by walking a nested terraform attribute tree
 * — a dotted terraform attribute *path*). See `src/grouped/cfn-attribute-map.ts` for the matching
 * rules. The flag-off byte-identical guarantee is covered by `cfn-property-map.test.ts` (one flag,
 * one guarantee, checked once); this file covers the flag-on shape.
 *
 * Not a "step" test, for the same reason `cfn-property-map.test.ts` isn't.
 */
import { AWSCC_FQPN } from "./helpers/paths";
import { loadGenerateGrouped, miniSchema, fullSchema, specDb, tmpDir } from "./helpers/emit";
import * as fs from "node:fs";
import * as path from "node:path";

type GenerateGroupedWithFlag = (
  schema: any,
  db: any,
  outDir: string,
  options: { fqpn: string; resources: string[]; emitCfnPropertyMap: boolean },
) => Promise<string[]>;

/** Pulls the sorted list of keys out of an emitted `CFN_ATTRIBUTE_NAME_MAP` object literal, the
 * same text-based way `cfn-property-map.test.ts` reads `CFN_PROPERTY_NAME_MAP` — a pure text/shape
 * assertion, consistent with the rest of this suite's `tsc`-based checks, not an eval of emitted
 * JS. */
function attributeMapEntries(resourceText: string): { keys: string[]; block: string } {
  const match = resourceText.match(
    /CFN_ATTRIBUTE_NAME_MAP: \{ \[cfnAttributeName: string\]: string \} = \{([\s\S]*?)\};/,
  );
  expect(match).toBeTruthy();
  const block = match?.[1] ?? "";
  const keys = [...block.matchAll(/"((?:[^"\\]|\\.)*)":/g)].map((m) => m[1]);
  return { keys, block };
}

describe("emitCfnAttributeMap (cdktn-planning#1 continued)", () => {
  it("flag on: CcVPC.CFN_ATTRIBUTE_NAME_MAP has the top-level Ipv6CidrBlocks and VpcId entries", async () => {
    const generateGrouped = (await loadGenerateGrouped()) as unknown as GenerateGroupedWithFlag;
    const outDir = tmpDir("cfn-attribute-map-vpc-");

    await generateGrouped(miniSchema(), specDb(), outDir, {
      fqpn: AWSCC_FQPN,
      resources: ["awscc_ec2_vpc"],
      emitCfnPropertyMap: true,
    });

    const vpcText = fs.readFileSync(path.join(outDir, "aws-ec2", "vpc.ts"), "utf8");
    expect(vpcText).toContain("public static readonly CFN_ATTRIBUTE_NAME_MAP: { [cfnAttributeName: string]: string }");

    // Flattened top-level match: CFN `Ipv6CidrBlocks` (no dots) -> awscc `ipv_6_cidr_blocks` — the
    // counter-example that proves a naive PascalCase->snake_case ("ipv_6_cidr_blocks" would be
    // wrong the *other* way if the "6" weren't already its own terraform word boundary).
    expect(vpcText).toContain(`"Ipv6CidrBlocks": "ipv_6_cidr_blocks"`);
    // Flattened top-level match, no nesting at all.
    expect(vpcText).toContain(`"VpcId": "vpc_id"`);
    // Nested walk: CFN's own dotted GetAtt name for a struct member resolves to a dotted
    // terraform attribute *path* (not a terraform attribute name — terraform names never contain
    // a dot), one segment matched per level of the nested walk.
    expect(vpcText).toContain(`"VpcEncryptionControl.VpcId": "vpc_encryption_control.vpc_id"`);

    const { keys } = attributeMapEntries(vpcText);
    // Keys are sorted, so this is also a determinism check on the emitted object literal.
    expect(keys).toEqual([...keys].sort());
    expect(keys.length).toBeGreaterThan(5);
  });

  it("flag on, determinism: two independent runs over the same input emit byte-identical maps", async () => {
    const generateGrouped = (await loadGenerateGrouped()) as unknown as GenerateGroupedWithFlag;
    const outA = tmpDir("cfn-attribute-map-det-a-");
    const outB = tmpDir("cfn-attribute-map-det-b-");

    for (const outDir of [outA, outB]) {
      await generateGrouped(miniSchema(), specDb(), outDir, {
        fqpn: AWSCC_FQPN,
        resources: ["awscc_ec2_vpc"],
        emitCfnPropertyMap: true,
      });
    }

    const textA = fs.readFileSync(path.join(outA, "aws-ec2", "vpc.ts"), "utf8");
    const textB = fs.readFileSync(path.join(outB, "aws-ec2", "vpc.ts"), "utf8");
    expect(textA).toEqual(textB);
  });

  // Needs `awscc_eks_cluster`, which the mini fixture doesn't carry — same RUN_FULL=1 gate,
  // fetched full schema, and pattern step6.full-emit.test.ts uses for the same reason.
  const full = process.env.RUN_FULL === "1" ? describe : describe.skip;
  full("against the full schema (RUN_FULL=1)", () => {
    it("EKS cluster: CFN_ATTRIBUTE_NAME_MAP contains the dotted CertificateAuthority.Data entry", async () => {
      const generateGrouped = (await loadGenerateGrouped()) as unknown as GenerateGroupedWithFlag;
      const outDir = tmpDir("cfn-attribute-map-eks-");

      await generateGrouped(fullSchema(), specDb(), outDir, {
        fqpn: AWSCC_FQPN,
        resources: ["awscc_eks_cluster"],
        emitCfnPropertyMap: true,
      });

      const clusterText = fs.readFileSync(path.join(outDir, "aws-eks", "cluster.ts"), "utf8");
      // `CertificateAuthority.Data` is a dotted CFN GetAtt name whose flattened form
      // ("CertificateAuthorityData") *also* happens to match a top-level terraform attribute
      // directly (EKS separately exposes a flat `CertificateAuthorityData` GetAtt name too) — so
      // this is exercised via the flattened-match branch, not the nested walk, and both dotted and
      // flat CFN spellings resolve to the same terraform attribute independently.
      expect(clusterText).toContain(`"CertificateAuthority.Data": "certificate_authority_data"`);
      expect(clusterText).toContain(`"CertificateAuthorityData": "certificate_authority_data"`);

      const { keys } = attributeMapEntries(clusterText);
      expect(keys).toEqual([...keys].sort());
    });
  });
});
