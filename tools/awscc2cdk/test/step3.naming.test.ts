/**
 * Contract, plan §5 step 3 / §3 naming rules: the pure naming functions of `src/naming.ts`.
 * See CONTRACT.md "Iteration 2 — public API".
 *
 * This file is read-only for the implementer.
 */
import * as path from "node:path";
import { toolRoot } from "./helpers/paths";

let naming: any;

beforeAll(async () => {
  naming = await import(path.join(toolRoot, "src", "naming"));
});

/** Every name a resource's nested types are given has to satisfy `NAME_GRAMMAR.propertyInterface`
 * — which ends the pattern at `Property`, so a `'2'` disambiguation suffix fails it. */
function expectGrammar(produced: Record<string, string>): void {
  for (const name of Object.values(produced)) {
    expect([name, naming.NAME_GRAMMAR.propertyInterface.test(name)]).toEqual([name, true]);
  }
}

describe("className / propsName", () => {
  it("prefixes Cc and keeps CFN casing", () => {
    expect(naming.className("VPC")).toBe("CcVPC");
    expect(naming.className("Subnet")).toBe("CcSubnet");
    expect(naming.className("DBInstance")).toBe("CcDBInstance");
    expect(naming.className("DeliveryStream")).toBe("CcDeliveryStream");
  });

  it("appends the scope-map suffix", () => {
    expect(naming.className("Application", "V2")).toBe("CcApplicationV2");
    expect(naming.className("Application")).toBe("CcApplication");
  });

  it("derives the props interface from the class", () => {
    expect(naming.propsName("VPC")).toBe("CcVPCProps");
    expect(naming.propsName("Application", "V2")).toBe("CcApplicationV2Props");
  });

  it("matches the export grammar", () => {
    expect(naming.NAME_GRAMMAR.resourceClass.test(naming.className("VPC"))).toBe(true);
    expect(naming.NAME_GRAMMAR.propsInterface.test(naming.propsName("VPC"))).toBe(true);
  });
});

describe("propertyTypeName", () => {
  it("appends Property to a recovered CFN definition name, verbatim", () => {
    expect(naming.propertyTypeName("VpcEncryptionControl")).toBe("VpcEncryptionControlProperty");
    expect(naming.propertyTypeName("LoRaWANDeviceProfile")).toBe("LoRaWANDeviceProfileProperty");
    expect(naming.propertyTypeName("S3Location")).toBe("S3LocationProperty");
  });

  it("sanitises a definition name that is not already a plain identifier", () => {
    expect(naming.propertyTypeName("Foo-Bar")).toBe("FooBarProperty");
  });

  it("PascalCases the leaf of a fallback attribute path", () => {
    expect(naming.propertyTypeName(["vpc_encryption_control"])).toBe("VpcEncryptionControlProperty");
    expect(naming.propertyTypeName(["lifecycle_configuration", "rules"])).toBe("RulesProperty");
  });
});

describe("propertyTypeNamesForResource", () => {
  const call = (entries: any[]) => naming.propertyTypeNamesForResource(entries);

  it("keeps short names when nothing collides", () => {
    expect(call([{ path: ["tags"] }, { path: ["rules"] }])).toEqual({
      tags: "TagsProperty",
      rules: "RulesProperty",
    });
  });

  it("expands colliding fallbacks to their full path, never to first-seen order", () => {
    const entries = [{ path: ["rules"] }, { path: ["lifecycle_configuration", "rules"] }];
    const expected = {
      rules: "RulesProperty",
      "lifecycle_configuration.rules": "LifecycleConfigurationRulesProperty",
    };
    expect(call(entries)).toEqual(expected);
    expect(call([...entries].reverse())).toEqual(expected);
  });

  it("lets a recovered CFN definition name win over a colliding fallback", () => {
    const entries = [
      { path: ["rule"], definitionName: "Rule" },
      { path: ["b", "rule"] },
    ];
    const expected = { rule: "RuleProperty", "b.rule": "BRuleProperty" };
    expect(call(entries)).toEqual(expected);
    expect(call([...entries].reverse())).toEqual(expected);
  });

  it("breaks a still-colliding tie by the sorted position of the path key", () => {
    const entries = [{ path: ["a_b", "c"] }, { path: ["a", "b_c"] }];
    const expected = { "a.b_c": "ABCProperty", "a_b.c": "ABCProperty2" };
    expect(call(entries)).toEqual(expected);
    expect(call([...entries].reverse())).toEqual(expected);
  });

  it("treats names that differ only in case as colliding (iteration 5, Go target)", () => {
    // awscc_applicationinsights_application: the recovered CFN definition name
    // `HAClusterPrometheusExporter` and the terraform leaf `ha_cluster_prometheus_exporter` differ
    // only in case, so pacmak-go wrote `CcApplication_HAClusterPrometheusExporterProperty.go` and
    // `CcApplication_HaClusterPrometheusExporterProperty.go` into one package and `go build` died.
    const entries = [
      { path: ["monitoring", "ha_cluster_prometheus_exporter"] },
      { path: ["exporter"], definitionName: "HAClusterPrometheusExporter" },
    ];
    const expected = {
      "monitoring.ha_cluster_prometheus_exporter": "MonitoringHaClusterPrometheusExporterProperty",
      exporter: "HAClusterPrometheusExporterProperty",
    };
    expect(call(entries)).toEqual(expected);
    expect(call([...entries].reverse())).toEqual(expected);
    expectGrammar(expected);
  });

  it("produces names inside the nested-type grammar", () => {
    expectGrammar(call([{ path: ["rules"] }, { path: ["lifecycle_configuration", "rules"] }]));
  });
});

describe("dedupeDefinitionNames", () => {
  const dedupe = (entries: any[]) => naming.dedupeDefinitionNames(entries);
  const names = (entries: any[]) => naming.propertyTypeNamesForResource(dedupe(entries));

  it("leaves entries alone when no definition name is reused", () => {
    const entries = [
      { path: ["rule"], definitionName: "Rule" },
      { path: ["b", "target"], definitionName: "Target" },
    ];
    // The result keeps the caller's entry order; only the definition names may change.
    expect(dedupe(entries)).toEqual(entries);
    expect(dedupe([...entries].reverse())).toEqual([...entries].reverse());
  });

  it("keeps one occurrence of a reused definition name and clears the rest", () => {
    // awscc_appsync_graph_ql_api: CFN's single `OpenIDConnectConfig` TypeDefinition is reached at
    // two attribute paths, so both occurrences recover the same name.
    const entries = [
      {
        path: ["additional_authentication_providers", "open_id_connect_config"],
        definitionName: "OpenIDConnectConfig",
      },
      { path: ["open_id_connect_config"], definitionName: "OpenIDConnectConfig" },
    ];
    // The top-level occurrence keeps it: its full attribute path is only its leaf, so the
    // path-derived fallback it would otherwise get (`OpenIdConnectConfigProperty`) is exactly the
    // name that case-collides. The nested occurrence has a path to fall back to.
    const expected = {
      open_id_connect_config: "OpenIDConnectConfigProperty",
      "additional_authentication_providers.open_id_connect_config":
        "AdditionalAuthenticationProvidersOpenIdConnectConfigProperty",
    };
    expect(names(entries)).toEqual(expected);
    expect(names([...entries].reverse())).toEqual(expected);
    expectGrammar(expected);
  });

  it("compares reused definition names case-insensitively (iteration 5, Go target)", () => {
    // `HACluster` and `HaCluster` are one name to `go build`, so only one of them may survive —
    // otherwise the loser reaches `propertyTypeNamesForResource` as a second recovered name and is
    // driven out of the grammar with a `'2'` suffix.
    const entries = [
      { path: ["ha_cluster"], definitionName: "HACluster" },
      { path: ["monitoring", "ha_cluster"], definitionName: "HaCluster" },
    ];
    const expected = {
      ha_cluster: "HAClusterProperty",
      "monitoring.ha_cluster": "MonitoringHaClusterProperty",
    };
    expect(names(entries)).toEqual(expected);
    expect(names([...entries].reverse())).toEqual(expected);
    expectGrammar(expected);
  });

  it("never leaves a digit-suffixed name behind for a reused definition name", () => {
    const entries = [
      { path: ["subject"], definitionName: "Subject" },
      { path: ["csr_extensions", "access_location", "directory_name"], definitionName: "Subject" },
      { path: ["vpc_config"], definitionName: "VpcConfig" },
      { path: ["instance_groups", "override_vpc_config"], definitionName: "VpcConfig" },
    ];
    const produced = names(entries);
    expect(Object.values(produced)).toEqual(expect.not.arrayContaining([expect.stringMatching(/[0-9]$/)]));
    expectGrammar(produced);
    expect(names([...entries].reverse())).toEqual(produced);
  });
});

describe("moduleNameFor", () => {
  it("maps a CFN type to its aws-cdk-lib submodule dir and symbol", () => {
    expect(naming.moduleNameFor("AWS::EC2::VPC")).toEqual({ dir: "aws-ec2", symbol: "aws_ec2" });
    expect(naming.moduleNameFor("AWS::S3::Bucket")).toEqual({ dir: "aws-s3", symbol: "aws_s3" });
  });

  it("carries the merged-scope suffix", () => {
    expect(naming.moduleNameFor("AWS::KinesisAnalyticsV2::Application")).toEqual({
      dir: "aws-kinesisanalytics",
      symbol: "aws_kinesisanalytics",
      suffix: "V2",
    });
  });

  it("auto-extends an unmapped namespace (iteration 3b, finding 1)", () => {
    // Retired `toBeUndefined()`: `moduleForCfnType` auto-extends, so `moduleNameFor` does too.
    // CONTRACT.md "Iteration 3b".
    expect(naming.moduleNameFor("AWS::NotAService::Thing")).toEqual({
      dir: "aws-notaservice",
      symbol: "aws_notaservice",
    });
  });
});

describe("fileNameFor", () => {
  it("kebab-cases the class name, without the Cc prefix or an extension", () => {
    expect(naming.fileNameFor("CcVPC")).toBe("vpc");
    expect(naming.fileNameFor("CcApplicationV2")).toBe("application-v2");
    expect(naming.fileNameFor("CcDBInstance")).toBe("db-instance");
    expect(naming.fileNameFor("CcDeliveryStream")).toBe("delivery-stream");
  });
});
