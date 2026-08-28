/**
 * `.jsiirc.json` target block for one aws-cdk-lib-spelled submodule (plan §10, CONTRACT.md
 * "`.jsiirc.json` for `aws-ec2` is exactly …"). No `go` key — Go submodule naming is left to
 * jsii-pacmak's defaults from the root `jsii.targets.go.moduleName` (plan §10).
 *
 * The dotnet/java service segment is the CFN service part exactly as spelled in the module's
 * *primary* scope-map namespace (`src/vendored/scope-map.json`'s `scopes[0].namespace` — the same
 * one `spec2cdk`'s `module-topology.ts#namespaceToModuleDefinition` would pick), not derived from
 * any one resource's own CFN type: a merged-scope module (e.g. `aws-kinesisanalytics`, holding both
 * `AWS::KinesisAnalytics` and the suffixed `AWS::KinesisAnalyticsV2`) needs one canonical answer
 * for the whole module, and `scopes[0]` is what the vendored aws-cdk-lib tooling itself treats as
 * canonical.
 */
import scopeMapJson from "../vendored/scope-map.json";

export interface JsiircTargets {
  readonly targets: {
    readonly python: { readonly module: string };
    readonly dotnet: { readonly namespace: string };
    readonly java: { readonly package: string };
  };
}

interface ScopeMapFile {
  [module: string]: { scopes?: { namespace: string }[] };
}

export function jsiircFor(moduleDir: string): JsiircTargets {
  const symbol = moduleDir.replace(/-/g, "_");
  const primaryNamespace = (scopeMapJson as ScopeMapFile)[moduleDir]?.scopes?.[0]?.namespace;
  const servicePart = primaryNamespace ? primaryNamespace.split("::")[1] : moduleDir.replace(/^aws-/, "");
  return {
    targets: {
      python: { module: `cdktn_awscc.${symbol}` },
      dotnet: { namespace: `Io.Cdktn.AwsCc.${servicePart}` },
      java: { package: `io.cdktn.awscc.services.${servicePart.toLowerCase()}` },
    },
  };
}
