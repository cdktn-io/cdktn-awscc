# awscc2cdk — test contract, iteration 1 (plan §5 steps 1–2)

Source of truth: `docs/awscdk-compat-plan.md` §5 (work breakdown) and §7 (testing contract).
This file is written by the **contract writer** before any implementation exists. It fixes the
public API the implementer must expose and the acceptance criteria the verifier re-checks.

## Rules

1. **`tools/awscc2cdk/test/**` is read-only for the implementer.** No edits to tests, fixtures,
   the golden file, `extract-fixture.py` or this document. The verifier diffs this directory and
   treats any change as a failed iteration. If a test looks wrong, report it — do not fix it.
2. Scope is steps 1–2 only. No renaming (`Cc*`), no grouping/module emission, no `.jsiirc.json`,
   no jsii run. Anything from step 3 onwards is out of scope for this iteration.
3. `jsii` must never be run on the full schema in this iteration. `pnpm test` must stay under
   two minutes; the full-schema check is opt-in via `RUN_FULL=1`.
4. Vendored code is **copied, then adapted minimally**. cdktf-named symbols in cdk-terrain are
   deliberate migration-compat names — never rename them.

## Commands

```
cd cdktn-awscc
pnpm install
pnpm test                     # the contract (fast; < 2 min)
RUN_FULL=1 pnpm test          # adds the full-schema cfn-map check (needs ../schemas/schema.json)
python3 tools/awscc2cdk/test/fixtures/extract-fixture.py --check   # fixture is up to date
```

## Fixture

`tools/awscc2cdk/test/fixtures/awscc-mini.schema.json` (0.83 MB, committed) is produced
deterministically by `fixtures/extract-fixture.py` from `../schemas/schema.json`
(awscc **1.98.0**, provider key `registry.terraform.io/hashicorp/awscc`). It keeps the shape
terraform emits — `format_version`, `provider_schemas{<fqpn>: {provider, resource_schemas}}` —
plus the additive `provider_versions` map that `@cdktn/provider-schema`'s `readSchema()` adds and
that the generator needs for the registry doc links it emits. Data sources, list resources and
resource identity schemas are excluded.

Resources (11):
`awscc_accessanalyzer_analyzer`, `awscc_apigateway_resource`, `awscc_cloudformation_stack`,
`awscc_ec2_subnet`, `awscc_ec2_vpc`, `awscc_iotwireless_device_profile`,
`awscc_kinesisanalyticsv2_application`, `awscc_kinesisfirehose_delivery_stream`,
`awscc_lambda_function`, `awscc_lex_bot`, `awscc_s3_bucket`.

Two deviations from the list in plan §7, both measured against awscc 1.98.0:

* `awscc_kinesisanalytics_application` **does not exist** — awscc has no KinesisAnalytics v1
  resources. The merged-scope case is covered by the v2 resource plus a direct scope-map
  assertion for `AWS::KinesisAnalytics::Application`.
* The struct-sharding trigger in this fixture is **`awscc_lex_bot`**, not
  `awscc_kinesisfirehose_delivery_stream`: at 1.98.0 only lex_bot exceeds
  `STRUCT_SHARDING_THRESHOLD` (400) and gets an `index-structs/` folder. The test asserts the
  observed behaviour: lex_bot shards, firehose does not.

Pinned spec: `@aws-cdk/aws-service-spec@0.1.206` / `@aws-cdk/service-spec-types@0.0.272`
(1,747 CFN resources). Both are exact-pinned in `package.json`; do not float them.

## Public API the implementer must expose

All paths relative to `cdktn-awscc/tools/awscc2cdk/`. Tests import these by exactly these
specifiers; names and shapes are part of the contract.

### `src/vendored/` + `src/vendored/VENDORED.md`

Copied sources live under `src/vendored/`. Suggested split (not asserted):
`src/vendored/cdktn/…` for the cdk-terrain generator (`resource-parser.ts`, `provider-generator.ts`,
`models/*`, `emitter/*` and whatever they pull in), `src/vendored/spec2cdk/…` for
`naming/conventions.ts`, `module-topology.ts`, `util/jsii.ts`, and `src/vendored/scope-map.json`.

`VENDORED.md` is asserted. It must contain a markdown table whose rows are, in this exact column
order and with these exact headers:

```
| vendored | origin | commit |
| --- | --- | --- |
| src/vendored/cdktn/resource-parser.ts | /Users/…/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/resource-parser.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
```

* `vendored` — path relative to `tools/awscc2cdk/`, must exist.
* `origin` — absolute path of the file it was copied from, must exist on this machine.
  Known origin roots: `~/cdktn/cdk-terrain` (commit `358edc7c39b0b380ba89fd31881f0577fe9b6214`)
  and `~/cdk/aws-cdk` (commit `a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1`).
* `commit` — 40-hex commit of the origin repo.

Every file under `src/vendored/` (except `VENDORED.md` itself and `*.json` fixtures of our own
making) must appear in the table, and the table must list at least the vendored files that
`legacy-generate.ts` and `scope-map.ts` depend on. Licence headers of copied files are kept.

### `src/legacy-generate.ts`

```ts
import type { ProviderSchema } from '@cdktn/commons';

export interface GenerateLegacyOptions {
  /** provider fqpn to generate; default 'registry.terraform.io/hashicorp/awscc' */
  readonly fqpn?: string;
}

/**
 * Runs the vendored cdk-terrain generator unchanged over `schemaJson`, writing to `outDir`.
 * Returns the emitted file paths, relative to outDir, POSIX separators, sorted.
 */
export function generateLegacy(
  schemaJson: ProviderSchema,
  outDir: string,
  options?: GenerateLegacyOptions,
): Promise<string[]>;
```

Output layout is the vendored generator's own (`providers/<provider>/<resource-dir>/index.ts`,
plus `README.md` per resource, `provider/index.ts`, `index.ts`, `lazy-index.ts`, and
`<resource-dir>/index-structs/` for sharded resources). It must not be changed in this iteration.

### `src/cfn-map.ts`

```ts
import type { SpecDatabase } from '@aws-cdk/service-spec-types';
import type { ProviderSchema } from '@cdktn/commons';

/** s.toLowerCase().replace(/[^a-z0-9]/g, '') */
export function normalizeKey(s: string): string;

/** 'awscc_ec2_vpc' -> 'AWS::EC2::VPC'; undefined when the spec has no counterpart. */
export function cfnTypeFor(awsccName: string, db: SpecDatabase): string | undefined;

export interface CfnMapEntry {
  readonly awsccName: string;   // 'awscc_ec2_vpc'
  readonly cfnType: string;     // 'AWS::EC2::VPC'
  readonly module?: string;     // 'aws-ec2'  (from the vendored scope-map; undefined if unmapped)
  readonly suffix?: string;     // 'V2' for AWS::KinesisAnalyticsV2 inside aws-kinesisanalytics
}

export interface CfnMapAmbiguity {
  readonly key: string;          // the join key that collided
  readonly awscc: string[];
  readonly cfnTypes: string[];
}

export interface CfnMapReport {
  readonly matched: CfnMapEntry[];   // sorted by awsccName
  readonly unmatched: string[];      // awscc resources with no CFN counterpart, sorted
  readonly specOnly: string[];       // CFN types with no awscc resource, sorted (informational)
  readonly ambiguous: CfnMapAmbiguity[];
  readonly counts: {
    readonly awscc: number; readonly spec: number; readonly matched: number;
    readonly unmatched: number; readonly specOnly: number; readonly ambiguous: number;
  };
}

export function buildCfnMap(
  schema: ProviderSchema,
  db: SpecDatabase,
  options?: { readonly fqpn?: string },
): CfnMapReport;
```

Join key (plan §2): `norm(Svc) + '.' + norm(Res)` for `AWS::Svc::Res`, and `svc + '.' + norm(rest)`
for `awscc_<svc>_<rest>`. Matching must be pure and order-independent.

### `src/scope-map.ts`

```ts
export interface ScopeMapHit { readonly module: string; readonly suffix?: string; }

/** Backed by the vendored aws-cdk-lib scope-map.json. */
export function moduleForCfnType(cfnType: string): ScopeMapHit | undefined;
```

A CFN namespace listed by more than one module (`AWS::KinesisAnalyticsV2` is in both
`aws-kinesisanalytics` and `aws-kinesisanalyticsv2`) resolves **deterministically to the first
module in ascending `localeCompare` order of module name** — i.e. `aws-kinesisanalytics`, with its
`suffix: 'V2'`. This is the merged-scope shape the plan targets (§1, §3).

## Acceptance

### Step 1 — scaffold + vendored generator reproduces today's output (`step1.golden.test.ts`)

* `generateLegacy(miniSchema, tmpDir)` emits exactly one `providers/awscc/<dir>/index.ts` for each
  of the 11 fixture resources, with the expected directory names, plus `provider/index.ts`,
  `providers/awscc/index.ts` and `providers/awscc/lazy-index.ts`.
* `lex-bot` (and only lex-bot) gets a sharded `index-structs/` folder containing
  `index.ts`, `structs0.ts`, `structs400.ts`.
* `providers/awscc/accessanalyzer-analyzer/index.ts` equals the committed golden
  `fixtures/golden/accessanalyzer-analyzer.index.ts` (a copy of
  `~/cdktn/cdktn-provider-awscc/src/accessanalyzer-analyzer/index.ts`, awscc 1.98.0)
  **byte for byte after normalisation**. Normalisation (`helpers/normalize.ts`, verified to make
  the two files equal today) removes only: the repo's leading licence block comment; the
  `providerVersionConstraint: '…'` line (it comes from a `ConstructsMakerTarget` that
  `generateLegacy` does not take); and the provider version inside registry doc URLs and the
  `providerVersion:` field. Nothing else may be normalised away.
* Independently of the byte check, the **structural** check must pass: identical set of exported
  identifiers, and an identical resource-class body.
* Escape hatch, auditable: if the vendored cdk-terrain HEAD legitimately diverges from the
  cdktn 0.24.0 build that produced the golden, running with `GOLDEN_BYTES=0` downgrades the byte
  check to writing `test/out/golden.diff` while the structural check stays hard. Using it is a
  **finding for the verifier**, not a fix: the default run (`pnpm test`) must be green without it.

### Step 2 — CFN mapping (`step2.cfnmap.test.ts`)

* Over the mini fixture, `buildCfnMap` matches all 11 resources to exactly this table, with
  `unmatched` and `ambiguous` empty:

  | awscc resource | CFN type | module | suffix |
  |---|---|---|---|
  | `awscc_accessanalyzer_analyzer` | `AWS::AccessAnalyzer::Analyzer` | `aws-accessanalyzer` | – |
  | `awscc_apigateway_resource` | `AWS::ApiGateway::Resource` | `aws-apigateway` | – |
  | `awscc_cloudformation_stack` | `AWS::CloudFormation::Stack` | `aws-cloudformation` | – |
  | `awscc_ec2_subnet` | `AWS::EC2::Subnet` | `aws-ec2` | – |
  | `awscc_ec2_vpc` | `AWS::EC2::VPC` | `aws-ec2` | – |
  | `awscc_iotwireless_device_profile` | `AWS::IoTWireless::DeviceProfile` | `aws-iotwireless` | – |
  | `awscc_kinesisanalyticsv2_application` | `AWS::KinesisAnalyticsV2::Application` | `aws-kinesisanalytics` | `V2` |
  | `awscc_kinesisfirehose_delivery_stream` | `AWS::KinesisFirehose::DeliveryStream` | `aws-kinesisfirehose` | – |
  | `awscc_lambda_function` | `AWS::Lambda::Function` | `aws-lambda` | – |
  | `awscc_lex_bot` | `AWS::Lex::Bot` | `aws-lex` | – |
  | `awscc_s3_bucket` | `AWS::S3::Bucket` | `aws-s3` | – |

  plus the scope-map-only row `AWS::KinesisAnalytics::Application` → `aws-kinesisanalytics`,
  no suffix (no awscc counterpart exists).
* `cfnTypeFor` alone returns the same CFN types, and `undefined` for a made-up resource.
* Full-schema check (skipped unless `RUN_FULL=1`): `buildCfnMap` over `../schemas/schema.json`
  (1,494 awscc resources) gives `matched >= 1450` and `ambiguous.length === 0`, and the report is
  written to `tools/awscc2cdk/test/out/cfn-map-report.json`.

### Vendoring hygiene (`vendored.test.ts`)

* `src/vendored/VENDORED.md` exists, parses, lists every file under `src/vendored/`, and every
  `origin` path in it exists on disk with a 40-hex `commit`.

## Contract validation (contract writer, 2026-08-28)

Before commit, this contract was run green against a throwaway prototype (deleted; never
committed) that called cdk-terrain's built `generateProviderBindingsFromSchema` and a 40-line
`cfn-map`. Confirmed: 39 fast tests pass in < 1 s, the golden file is byte-identical after
normalisation, `lex-bot` is the sharded resource, and the full-schema run gives
`{awscc: 1494, spec: 1747, matched: 1493, unmatched: 1, specOnly: 254, ambiguous: 0}` in 221 ms.
So the acceptance numbers are known-reachable; a failing test means the implementation, not the
contract.

## Out of scope for iteration 1 (do not implement)

Renaming to `Cc*`/`*Props`, module grouping and per-module `index.ts`/`.jsiirc.json`, nested
`namespace` emission, the naming spike, shape-parity ratchet, jsii/pacmak runs, lazify,
`scripts/update-provider-schema.ts`, data sources and list resources.
