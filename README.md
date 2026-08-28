# `@cdktn/awscc`

`@cdktn/awscc` is an **experimental, phase-1 proof-of-concept**: an aws-cdk-lib-shaped **L1** layer
over AWS **Cloud Control** (the `awscc` Terraform provider), generated from the awscc provider
schema instead of the CloudFormation resource specification. It is not a Terraform-shaped provider
— that already exists as `@cdktn/provider-awscc` — this package's whole point is to *look like*
`aws-cdk-lib` closely enough that a future migration can be close to a mechanical `Cfn` → `Cc`
rename. See `docs/awscdk-compat-plan.md` for the plan this package implements and
`docs/phase1-results.md` for the measured results.

## What this package is (and isn't)

* One submodule per CFN service (`aws-ec2`, `aws-s3`, `aws-lambda`, …), driven by a copied
  `aws-cdk-lib` `scope-map.json` — the same grouping aws-cdk-lib itself uses, so a merged CFN
  namespace (e.g. `AWS::KinesisAnalytics` + `AWS::KinesisAnalyticsV2`) lands in one module here too.
* Every resource is an **L1** construct only — no L2s, no escape hatches beyond what Cloud Control
  itself exposes. Phase 2 (an actual `aws-cdk-lib` substitution) is out of scope for this package.
* 276 modules, 1,494 resources, generated in one pass from `../schemas/schema.json` (an
  `awscc`-provider `terraform providers schema -json` dump) against the pinned
  `@aws-cdk/aws-service-spec` database. `generated/` is committed, like the sibling provider repos
  commit `src/`.

## Import table (plan §10)

The consumer-visible difference between `aws-cdk-lib` and `@cdktn/awscc` is the root import plus a
mechanical `Cfn` → `Cc` rename:

| language | aws-cdk-lib | @cdktn/awscc |
| --- | --- | --- |
| TypeScript | `import { aws_ec2 } from 'aws-cdk-lib'; aws_ec2.CfnVPC` | `import { aws_ec2 } from '@cdktn/awscc'; aws_ec2.CcVPC` (or `require('@cdktn/awscc/aws-ec2')`) |
| Python | `from aws_cdk import aws_ec2; aws_ec2.CfnVPC` | `from cdktn_awscc import aws_ec2; aws_ec2.CcVPC` |
| Java | `software.amazon.awscdk.services.ec2.CfnVPC` | `io.cdktn.awscc.services.ec2.CcVPC` |
| C# | `Amazon.CDK.AWS.EC2.CfnVPC` | `Io.Cdktn.AwsCc.EC2.CcVPC` |
| Go | `awsec2.NewCfnVPC` (`aws-cdk-go/awscdk/v2/awsec2`) | `awsec2.CcVPC` via `NewCcVPC()` (`cdktn-awscc-go/awsec2`) |

> **Only the Python target has actually been built and imported (`jsii-pacmak --targets python`,
> see `docs/phase1-results.md`).** The Java, .NET and Go per-module segment layouts above are
> **assumptions carried over from plan §10** — `io.cdktn.awscc.services.ec2` mirrors
> `software.amazon.awscdk.services.ec2`, `Io.Cdktn.AwsCc.EC2` mirrors `Amazon.CDK.AWS.EC2` minus the
> `AWS` segment, and the Go package name is jsii-pacmak's default from the submodule symbol — none
> of those three targets has been through `jsii-pacmak` yet, so treat those cells as **unconfirmed**
> until Phase 2 actually builds them.

## Naming: the `Cc` prefix and nested `Property` types

A bare resource name (`Vpc`, `Function`) collides with jsii/TypeScript reserved identifiers and
would block a future L2 construct sharing the same name in the same submodule; `Cfn` would also
misdescribe the API, since these resources go through **Cloud Control**, not raw CloudFormation.
So every resource class gets a **`Cc` prefix** instead: `AWS::EC2::VPC` → `aws_ec2.CcVPC`, with a
matching `CcVPCProps` interface. This keeps a uniform marker and makes a future Phase-2 codemod a
pure `Cfn` → `Cc` rename with no per-resource exceptions.

Nested CloudFormation property types are attached to the resource class exactly the way
`aws-cdk-lib` does it — via TypeScript declaration merging between the class and a `namespace` of
the same name:

```ts
export class CcVPC extends cdktn.TerraformResource { /* … */ }
export namespace CcVPC {
  export interface VpcEncryptionControlProperty { /* … */ }
  export class VpcEncryptionControlPropertyOutputReference extends cdktn.ComplexObject { /* … */ }
}
```

Where the awscc schema's own CFN `TypeDefinition` name is recoverable, the `…Property` interface is
named after it (`VpcEncryptionControlProperty`); otherwise it falls back to the resource's
Terraform attribute path, PascalCased. See `docs/spike-naming.md` for the naming rules and
`docs/phase1-results.md` for the collision numbers behind that choice.

## How generation works

```
@aws-cdk/aws-service-spec (CFN type + property database)
        │
        ▼
CFN type ↔ awscc resource mapping (tools/awscc2cdk/src/cfn-map.ts)
        │
        ▼
scope-map grouping (vendored aws-cdk-lib scope-map.json, tools/awscc2cdk/src/scope-map.ts)
        │
        ▼
emit into generated/<module>/<resource>.ts   (tools/awscc2cdk/src/grouped-generate.ts)
```

1. `../schemas/schema.json` (a `terraform providers schema -json` dump of the `awscc` provider) is
   read for resource shapes; `@aws-cdk/aws-service-spec` supplies the CloudFormation side of the
   join (type names, `TypeDefinition` names for nested structs).
2. Each `awscc_<svc>_<res>` resource is mapped to its CFN type (`AWS::Svc::Res`) where one exists;
   unmapped resources still get a module and a name, derived straight from the awscc identifier
   (see CONTRACT.md, "Iteration 3 — full emission").
3. The CFN namespace is resolved to an `aws-cdk-lib` module directory through the vendored
   `scope-map.json`, auto-extended for the handful of namespaces the map doesn't list.
4. The (adapted) `cdk-terrain` / `spec2cdk` generator emits one file per resource, plus a
   `.jsiirc.json` and `index.ts` per module and a root barrel.

### Regenerating

```
pnpm schema:fetch     # fetches the pinned awscc provider schema into schemas/schema.json (gitignored)
pnpm generate
```

`pnpm schema:fetch` needs a `terraform`- or `opentofu`-compatible binary on `PATH` and network
access; it fetches the exact version recorded in the committed `schemas/PROVIDER_VERSION` (not
"latest" — see `scripts/update-provider-schema.ts`), so a plain `pnpm schema:fetch` always
reproduces what `generated/` was built from. `pnpm generate` then rewrites `generated/` from
scratch against that schema (so a stale resource that changed module never survives). This is the
same code path the `RUN_FULL=1` test suite calls, so `pnpm schema:fetch && pnpm generate && git
diff --stat generated/` is the offline way to check the committed tree is current — `build.yml`
runs exactly this as its "generated/ is current" gate.

Bumping the pinned version is `upgrade.yml`'s job (weekly + on demand): it resolves the newest
`hashicorp/awscc` version, regenerates against it, and opens a PR if anything changed, without
touching `main` directly.

## Build gates

```
cd cdktn-awscc
pnpm test                                              # fast contract, < 5 min
RUN_FULL=1 pnpm test                                   # + full-schema regeneration, determinism, tsc
PATH="/opt/homebrew/bin:$PATH" NODE_OPTIONS=--max-old-space-size=16384 \
  RUN_FULL_JSII=1 pnpm test:full-jsii                  # jsii + jsii-pacmak over the whole tree, ~80 s on an M-series Mac (jsii ~30-50 s + pacmak ~30 s); 16 GB heap
```

`--max-old-space-size=16384` (16 GB) is needed because `jsii` compiling all 276 submodules /
1,494 resources at once peaks in the multi-gigabyte range (measured 5.3–6.5 GB RSS on the machine
this was built on — see `docs/phase1-results.md`); raise it further if it OOMs on a smaller machine.

After `jsii` compiles the package, a **post-build `lazify` pass** rewrites the compiled `.js` so
`require('@cdktn/awscc')` no longer eagerly pulls in all 276 submodule barrels (and everything they
transitively require) — only the submodules actually touched at runtime get loaded:

```
pnpm lazify <staged-package-dir>       # vendored from ~/cdk/aws-cdk/tools/@aws-cdk/lazify — see tools/lazify/VENDORED.md
```

`cdktn`'s own `lazy-index.ts` pattern (already emitted per-provider by the vendored generator) is
kept as a **documented fallback only** — it only lazifies the top-level barrel, not `require()`s
*inside* already-loaded modules, so it doesn't get the same win `lazify` does. No code wires it up;
`lazify` is what actually runs. Numbers for the before/after difference are in
`docs/phase1-results.md`, "JS load time".

## CI and releases

Three workflows, all on `depot-ubuntu-24.04-8` (8 core / 32 GB — the same runner label the fleet's
other heap-heavy providers use) with `NODE_OPTIONS=--max-old-space-size=16384`:

* **`build.yml`** (every PR + push to `main`): `pnpm install --frozen-lockfile`, `pnpm build`,
  `pnpm test`, `RUN_FULL=1 pnpm test`, a check that `pnpm generate` against the pinned schema
  produces no diff against committed `generated/`, then `pnpm package --targets js,python`
  (uploaded as the `dist` artifact).
* **`release.yml`** (tag `v*`, or `workflow_dispatch` with an explicit version + optional dry run):
  packages all five targets (`pnpm package` with `PACMAK_TARGETS=js,python,java,dotnet,go`), then
  publishes npm (OIDC trusted publishing, `--provenance`, no token), PyPI (OIDC via
  `pypa/gh-action-pypi-publish`, the `pypi` GitHub environment), Maven Central and NuGet
  (credentials as secrets), and Go (`publib-golang` pushing `dist/go` to
  `cdktn-io/cdktn-awscc-go`), plus a GitHub Release with the npm tarball, the wheel, and
  `dist/metrics.json` attached. See `docs/oidc-setup.md` for the one-time manual setup every one of
  those publishers needs before the first real tag.
* **`upgrade.yml`** (weekly + `workflow_dispatch`): resolves the newest `hashicorp/awscc` version,
  regenerates against it if it moved, and opens a PR (not auto-merged — a version bump can change
  resource/module counts the test suite's magic numbers are pinned to, which is exactly the kind of
  diff worth a human looking at) rather than committing straight to `main`.

`pnpm package [--version X.Y.Z] [--targets js,python]` (`tools/awscc2cdk/bin/package.ts`, env
`PACKAGE_VERSION` / `PACMAK_TARGETS` overrides for CI) is what all three workflows share: stage
`generated/` + `tools/awscc2cdk/jsii/package.json` (`src/stage.ts`, the same model
`step6.full-jsii.test.ts` / `step7.lazify.test.ts` use for their own inline staging), `jsii`,
`lazify`, then `jsii-pacmak` into `dist/{js,python,java,dotnet,go}` — the same pipeline described
under "Build gates" above, just as a runnable command instead of a test.

## Generating the API doc sample

```
pnpm docgen
```

runs `jsii-docgen` over a single module (`aws-ec2`) and writes `docs/api/aws-ec2.md`. Running it
over the full 276-module assembly is not a phase-1 deliverable (see `docs/phase1-results.md` for
the size the one-module sample came out at); this script only ever builds and documents one
submodule at a time.

## License

This package is [MPL-2.0](LICENSE), matching the rest of the cdktn-io provider family
(`cdk-terrain`, `cdktn-provider-*`). It vendors and adapts code from two upstream projects, each
under its own license:

* **Apache-2.0**, from [aws/aws-cdk](https://github.com/aws/aws-cdk) (`tools/@aws-cdk/spec2cdk`,
  `tools/@aws-cdk/lazify`, `packages/aws-cdk-lib/scripts/scope-map.json`) — vendored under
  `tools/awscc2cdk/src/vendored/spec2cdk/`, `tools/lazify/`, and `tools/awscc2cdk/src/vendored/scope-map.json`.
* **MPL-2.0**, from [cdktn-io/cdk-terrain](https://github.com/cdktn-io/cdk-terrain)
  (`packages/@cdktn/provider-generator`) — vendored under `tools/awscc2cdk/src/vendored/cdktn/`,
  with adapted derivatives under `tools/awscc2cdk/src/grouped/`.

See [`NOTICE`](NOTICE) for the full attribution, which directories carry which license, and the
reasoning behind the header on `generated/` (the emitted resource bindings). Every vendored or
adapted source file carries a per-file `SPDX-License-Identifier` header identifying its own
license; `tools/awscc2cdk/test/licensing.test.ts` asserts this stays true.
