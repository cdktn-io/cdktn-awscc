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

---

# Iteration 2 — plan §5 steps 3–4 (naming spike + grouped emission)

Written by the contract writer 2026-08-28, after iteration 1 was verified. Everything above stays
in force: `tools/awscc2cdk/test/**` is read-only for the implementer (the one exception is
`test/jsii-exclude.json`, see "Exclusions"), tests may be run but not edited, and a test that looks
wrong is a report, not a fix.

## Iteration 2 changes to the iteration-1 API

None. `generateLegacy`, `normalizeKey`, `cfnTypeFor`, `buildCfnMap` and `moduleForCfnType` keep
their signatures and their acceptance tests unchanged; `step1.golden.test.ts`, `step2.cfnmap.test.ts`
and `vendored.test.ts` must stay green untouched. Iteration 2 only *adds* modules
(`src/naming.ts`, `src/spike-naming.ts`, `src/grouped-generate.ts`) and three toolchain devDeps.

## Commands

```
cd cdktn-awscc
pnpm install
pnpm test                       # contract layers 1–4 (adds ~1 min for the spike over the full schema)
pnpm spike:naming               # just the step-3 spike; rewrites test/out/spike-naming.json
RUN_FULL=1 pnpm test            # + the real aws-ec2 module gate (109 resources) and the iter-1 full cfn map
pnpm test:jsii                  # RUN_JSII=1: jsii over the generated mini package
pnpm test:pacmak                # RUN_JSII=1 RUN_PACMAK=1: + jsii-pacmak --targets python
```

New devDeps (installed and locked by the contract writer, do not float them):
`aws-cdk-lib` 2.267.0 (shape-parity reference — read from `node_modules/aws-cdk-lib/<module>/lib/*.generated.d.ts`,
never fetched), `jsii` ~5.9.53, `jsii-pacmak` ^1.140.0, `typescript` ~5.9.3 (jsii 5.9 pins `typescript ~5.9`),
plus the runtime dep `camelcase` ^6.3.0 (v6 is the last CJS release; the adapted spec2cdk naming code
needs it). `constructs` is **pinned to 10.7.0**: cdktn 0.24.0 declares `peerDependencies.constructs
">=10.6.0 <10.8.0"`, and jsii refuses to compile a tree outside that range ("Declared dependency on
version >=10.6.0 <10.8.0 of constructs, but version 10.8.1 was found") — measured while validating
this contract. Do not float it back to `^10.4.2`.

## Iteration 2 — debt from iteration 1 (`iter2.debt.test.ts`)

(a) **`tsc --noEmit` must be clean.** It is red today only because three vendored spec2cdk files
import `@cdklabs/typewriter`, `@aws-cdk/pkglint` and `camelcase`. `@aws-cdk/pkglint` is not on npm at
all, so the intended fix is: keep `src/vendored/**` pristine (it is evidence, and `vendored.test.ts`
checks it), add `"tools/awscc2cdk/src/vendored/spec2cdk/**"` to the `tsconfig.json` `exclude` list
with a comment saying why, and put the *adapted* copies of what we actually use
(`propertyNameFromCloudFormation`, `sanitizeTypeName`, `santitizeFieldName`,
`modulePartsFromNamespace`, `namespaceToModuleDefinition`, the local `ModuleDefinition` shape) under
`src/naming.ts` / `src/grouped/`, where they are compiled. Any other route to a green
`tsc --noEmit` is acceptable as long as `src/vendored/**` keeps byte-identical copies.

(b) **One schema path.** `scripts/update-provider-schema.ts` must write the file the tests read,
`<repo>/schemas/schema.json` (the sibling `schemas/` directory, gitignored, awscc 1.98.0) — not
`cdktn-awscc/schemas/awscc.schema.json`. Document the choice in the script's header comment.

(c) **`cfnTypeFor` memoises its index.** The spec index must be built once per `SpecDatabase`, not
per call (20 000 lookups in < 2 s).

## Iteration 2 — public API

All paths relative to `cdktn-awscc/tools/awscc2cdk/`. Tests import exactly these specifiers.

### `src/naming.ts` — plan §3 naming rules, pure and order-independent

```ts
export const CC_PREFIX = 'Cc';

/** ('VPC') -> 'CcVPC'; ('Application', 'V2') -> 'CcApplicationV2'. CFN casing is kept verbatim. */
export function className(cfnResourceName: string, suffix?: string): string;

/** ('VPC') -> 'CcVPCProps' — always className(...) + 'Props'. */
export function propsName(cfnResourceName: string, suffix?: string): string;

/**
 * A single nested-type name.
 *  - string  = a recovered CFN definition name: returned verbatim + 'Property'
 *              ('VpcEncryptionControl' -> 'VpcEncryptionControlProperty', 'LoRaWANDeviceProfile'
 *              -> 'LoRaWANDeviceProfileProperty'), sanitised to a plain identifier first if it is
 *              not already one.
 *  - string[] = the fallback: the terraform attribute path below the resource, PascalCase of the
 *              *leaf* + 'Property' (['a','rules'] -> 'RulesProperty').
 */
export function propertyTypeName(source: string | readonly string[]): string;

export interface PropertyTypePath {
  /** terraform attribute path below the resource root, e.g. ['lifecycle_configuration', 'rules'] */
  readonly path: readonly string[];
  /** the CFN TypeDefinition name, when the property mapping recovered one */
  readonly definitionName?: string;
}

/**
 * All nested-type names of ONE resource at once, keyed by `path.join('.')`.
 * Deterministic and order-independent — this is the fix for cdktn's order-dependent
 * `uniqueClassName` (plan §3, risk 4):
 *   1. candidate = propertyTypeName(definitionName ?? path)
 *   2. if a candidate is claimed by more than one entry, every *fallback* entry in that group is
 *      re-derived from its full path (all segments PascalCased and concatenated + 'Property');
 *      entries carrying a recovered CFN definition name keep the short name.
 *   3. if names still collide, the entries collide-sorted by path key keep the name, then '2', '3',
 *      … are appended in that sorted order.
 */
export function propertyTypeNamesForResource(
  entries: readonly PropertyTypePath[],
): Record<string, string>;

export interface ModuleName {
  /** directory / submodule name, aws-cdk-lib spelling: 'aws-ec2' */
  readonly dir: string;
  /** jsii submodule symbol, aws-cdk-lib spelling: 'aws_ec2' */
  readonly symbol: string;
  /** class-name suffix from the merged scope, e.g. 'V2' */
  readonly suffix?: string;
}
export function moduleNameFor(cfnType: string): ModuleName | undefined;

/** 'CcVPC' -> 'vpc', 'CcApplicationV2' -> 'application-v2', 'CcDBInstance' -> 'db-instance' (no extension). */
export function fileNameFor(className: string): string;

export const NAME_GRAMMAR: {
  readonly resourceClass: RegExp;            // ^Cc[A-Z][A-Za-z0-9]*$
  readonly propsInterface: RegExp;           // ^Cc[A-Z][A-Za-z0-9]*Props$
  readonly propertyInterface: RegExp;        // ^[A-Z][A-Za-z0-9]*Property$
  readonly propertyOutputReference: RegExp;  // ^[A-Z][A-Za-z0-9]*PropertyOutputReference$
  readonly propertyList: RegExp;             // ^[A-Z][A-Za-z0-9]*PropertyList$
  readonly propertyMap: RegExp;              // ^[A-Z][A-Za-z0-9]*PropertyMap$
  readonly mapperFunction: RegExp;           // ^[a-z][A-Za-z0-9]*To(Hcl)?Terraform$
};
```

**Export grammar (asserted over every emitted file).** At the top level of a resource file only:
a class matching `resourceClass` and not ending in `Props`; the interface matching `propsInterface`;
a `namespace` matching `resourceClass` (merged with the class, same file); and `toTerraform` /
`toHclTerraform` mapper functions matching `mapperFunction`. No exported `const`, `enum` or type
alias. Inside the namespace only `Property` / `PropertyOutputReference` / `PropertyList` /
`PropertyMap` types. `index.ts` files carry only `export * from './<file>'` (module) and
`export * as <snake_case> from './<dir>'` (root).

**Reserved-name policy.** The `Cc` prefix makes bare reserved names (`Function`, `Map`, `Resource`)
moot for *resource classes*, so no per-resource rename list is needed. Nested property-type names and
`Props` member names are still exposed to jsii's per-language reserved words; they are validated by
the jsii oracle (`step4.jsii.test.ts`), never by a hand-maintained list in the generator. If jsii
rejects a name, fix it with a rule in `src/naming.ts` and record the rule in `docs/spike-naming.md`.

### `src/spike-naming.ts` — plan §4

```ts
export type Decision = 'keep' | 'drop' | 'replace';

export interface SpikeCandidate {
  readonly awscc: string;                 // 'awscc_ec2_vpc'
  readonly cfnType?: string;              // 'AWS::EC2::VPC' when the mapping found one
  readonly kind: 'resource' | 'type';
  readonly path: string[];                // [] for kind 'resource'
  readonly cdk: string;                   // (a) spec2cdk's name, with its sanitizers
  readonly raw: string;                   // (b) the same name with the sanitizers switched off
  readonly cdktnCurrent: string;          // (c) what cdktn generates today
}

export interface SanitizerBuckets {
  readonly identical: number;             // (a) === (b)
  readonly divergesOnly: number;          // cosmetic difference
  readonly breaksJsii: number;            // (b) hits a jsii reserved word / generator-owned suffix
  readonly decision: Decision;
  readonly examples: unknown[];
}

export interface NamingSpikeReport {
  readonly schema: { readonly path: string; readonly providerVersion: string; readonly resourceCount: number };
  readonly sanitizers: Record<string, SanitizerBuckets>;  // exactly the three names below
  readonly candidates: SpikeCandidate[];
}

export function runNamingSpike(
  schemaJson: ProviderSchema,
  db: SpecDatabase,
  options?: { readonly fqpn?: string },
): NamingSpikeReport;
```

The three sanitizers under test are the ones plan §4 names: `propertyNameFromCloudFormation`,
`sanitizeTypeName`, `santitizeFieldName` (upstream's typo — keep it, it is the symbol name).

`docs/spike-naming.md` is the deliverable of step 3. It must contain a markdown table with the
columns `sanitizer | identical | diverges-only | breaks-jsii | decision`, one row per sanitizer, and
its numbers must equal the report's. `test/out/spike-naming.json` is written by the contract test
itself from `runNamingSpike` (`test/out/` is gitignored, so a committed artifact would not survive);
`pnpm spike:naming` regenerates it. `breaks-jsii` must be evidence-based: a name counts as breaking
if jsii's own reserved-word lists reject it, or if it collides with a generator-owned suffix
(`*Props`, `*Property*`, `*List`, `*Map`, `*OutputReference`) or a `cdktn.TerraformResource` member.

### `src/grouped-generate.ts` — plan §5 step 4

```ts
export interface GenerateGroupedOptions {
  readonly fqpn?: string;                 // default 'registry.terraform.io/hashicorp/awscc'
  readonly modules?: string[];            // module dirs to emit, e.g. ['aws-ec2']
  readonly resources?: string[];          // awscc resource names to emit
}                                          // modules & resources intersect when both are given

export interface GenerationStats {
  readonly modules: string[];
  readonly resources: number;
  readonly nestedTypes: number;
  readonly recovered: number;             // nested types named from a CFN definition name
  readonly fallback: number;              // nested types named from the attribute path
  readonly byResource: Record<string, { readonly total: number; readonly recovered: number }>;
}

export interface GenerateGroupedResult {
  readonly files: string[];
  readonly stats: GenerationStats;
}

/** Emitted paths relative to outDir, POSIX separators, sorted; identical for identical input. */
export function generateGrouped(
  schemaJson: ProviderSchema,
  db: SpecDatabase,
  outDir: string,
  options?: GenerateGroupedOptions,
): Promise<string[]>;

export function generateGroupedWithStats(
  schemaJson: ProviderSchema,
  db: SpecDatabase,
  outDir: string,
  options?: GenerateGroupedOptions,
): Promise<GenerateGroupedResult>;   // generateGrouped(...) === (await …).files
```

Emitted layout (plan §1/§3):

```
<outDir>/index.ts                 export * as aws_ec2 from './aws-ec2';  (one line per module)
<outDir>/aws-ec2/index.ts         export * from './vpc'; …
<outDir>/aws-ec2/.jsiirc.json     { targets: { python, dotnet, java } }
<outDir>/aws-ec2/vpc.ts           class CcVPC + interface CcVPCProps + namespace CcVPC
<outDir>/aws-lex/bot-structs0.ts  only if a resource has to shard (namespace merging across files)
```

`.jsiirc.json` for `aws-ec2` is exactly
`{"targets":{"python":{"module":"cdktn_awscc.aws_ec2"},"dotnet":{"namespace":"Io.Cdktn.AwsCc.EC2"},"java":{"package":"io.cdktn.awscc.services.ec2"}}}`
— no `go` key: Go submodule naming is left to jsii-pacmak's defaults from the root
`jsii.targets.go.moduleName` (`github.com/cdktn-io/cdktn-awscc-go` -> package `awsec2`), which is
what plan §10 assumes and what the pacmak run in layer 5 confirms.

The generator adapts *copies* of the vendored cdk-terrain parser/emitters under `src/grouped/`;
`src/vendored/**` stays pristine (`vendored.test.ts`).

## Iteration 2 — acceptance

### Step 3 — naming (`step3.naming.test.ts`, `spike-naming.test.ts`)

Unit contract for every function of `src/naming.ts` above, including the three collision cases
(fallback expansion, CFN-definition-name wins, sorted-index tie-break) each asserted twice with the
input order reversed. Spike contract as described above.

### Step 4 — structure (`step4.structure.test.ts`)

`generateGrouped` over the mini fixture, inspected with the TypeScript compiler API:

| resource | module | class | file |
|---|---|---|---|
| `awscc_accessanalyzer_analyzer` | `aws-accessanalyzer` | `CcAnalyzer` | `analyzer.ts` |
| `awscc_apigateway_resource` | `aws-apigateway` | `CcResource` | `resource.ts` |
| `awscc_cloudformation_stack` | `aws-cloudformation` | `CcStack` | `stack.ts` |
| `awscc_ec2_subnet` | `aws-ec2` | `CcSubnet` | `subnet.ts` |
| `awscc_ec2_vpc` | `aws-ec2` | `CcVPC` | `vpc.ts` |
| `awscc_iotwireless_device_profile` | `aws-iotwireless` | `CcDeviceProfile` | `device-profile.ts` |
| `awscc_kinesisanalyticsv2_application` | `aws-kinesisanalytics` | `CcApplicationV2` | `application-v2.ts` |
| `awscc_kinesisfirehose_delivery_stream` | `aws-kinesisfirehose` | `CcDeliveryStream` | `delivery-stream.ts` |
| `awscc_lambda_function` | `aws-lambda` | `CcFunction` | `function.ts` |
| `awscc_lex_bot` | `aws-lex` | `CcBot` | `bot.ts` |
| `awscc_s3_bucket` | `aws-s3` | `CcBucket` | `bucket.ts` |

plus: returned paths === what is on disk (sorted, POSIX, relative); one dir per module with
`index.ts` + `.jsiirc.json`; only struct shards may sit beside a resource file; `CcVPC` extends
`cdktn.TerraformResource`, `CcVPCProps` extends `cdktn.TerraformMetaArguments`, `namespace CcVPC`
merges in the same file and contains `VpcEncryptionControlProperty` +
`VpcEncryptionControlPropertyOutputReference` (the *recovered CFN* name, not the terraform leaf);
nothing exported outside the grammar; `modules`/`resources` filtering; `tsc --noEmit` clean over the
emitted package; and **determinism** — generating again with `resource_schemas` reversed produces
identical file lists and identical bytes.

`aws-kinesisanalytics` holds `CcApplicationV2` only. awscc 1.98.0 has no KinesisAnalytics *v1*
resource (recorded in the iteration-1 fixture notes above), so `CcApplication` cannot exist in this
fixture; the merged-scope shape under test is the `V2` suffix plus the shared module directory.

### Step 4 — shape parity (`step4.shape-parity.test.ts`, `helpers/shape-diff.ts`)

For each fixture resource, the aws-cdk-lib `Cfn*` class is read out of
`aws-cdk-lib/<module>/lib/*.generated.d.ts` (canned-metrics / augmentations / grants files skipped)
and compared with ours after `Cfn` -> `Cc`: class name, `Props` member names, nested `*Property`
interface names. `test/out/shape-parity.json` records
`{identical, classMatch, propsMembers:{cdkOnly,ourOnly,common}, propertyTypes:{cdkOnly,ourOnly,common}, propertyTypeMembers}`.

Hard: `classMatch` for every resource. **Ratchet**: `propertyTypes.common.length` per resource may
not fall below `test/shape-parity.baseline.json`, committed at all zeros for iteration 2 — the
implementer may not raise it; the verifier raises it to the measured values when accepting an
iteration. Member *names* inside property types are recorded and printed but never asserted: CDK
camelCases CFN names while we camelCase awscc's snake_case ones, and closing that gap is plan §8
work.

### Step 4 — jsii oracle (`step4.jsii.test.ts`, `RUN_JSII=1`)

The emitted mini package is written to a temp dir together with a `package.json` fixed by this
contract (name `@cdktn/awscc`, the plan §10 jsii targets, `cdktn`/`constructs` as peer + dev deps,
the repo's `node_modules` symlinked in) and `jsii` must exit 0, produce `.jsii`, and the assembly
must contain the `@cdktn/awscc.aws_ec2` submodule and a `CcVPC` type. With `RUN_PACMAK=1` as well,
`jsii-pacmak --targets python --code-only` (the cheapest target, no extra toolchain) must exit 0 and
produce `dist/python/src/cdktn_awscc/aws_ec2/__init__.py`. `--code-only` is deliberate: the
cross-language *names* are what layer 5 verifies, while building the wheel makes pacmak provision a
python venv and fails on machines whose pip is too old (measured here). jsii is never run over the
full schema in this iteration.

### Step 4 — real module gate (`step4.ec2-full.test.ts`, `RUN_FULL=1`)

`generateGroupedWithStats` over `../schemas/schema.json` with `modules: ['aws-ec2']`: exactly **109**
resource files, `tsc --noEmit` clean, and `test/out/ec2-typenames.json` written with the
CFN-definition-name recovery statistic. Threshold: `recovered / nestedTypes >= 0.60`. **This 60% is
provisional** — it is a first measurement of how well the property-level join of plan §2 step 4
recovers CFN `TypeDefinition` names, chosen before any data exists. If the implementer lands well
above or genuinely cannot pass it, that is a finding for the verifier, who fixes the number in this
contract for iteration 3 rather than the implementer weakening the test.

## Exclusions (`test/jsii-exclude.json`)

The one writable file under `test/`. Committed with an empty list. Plan §5 defers sharded giants to
step 5, so if `awscc_kinesisfirehose_delivery_stream` or `awscc_lex_bot` cannot be emitted or
compiled in this iteration, the implementer may list them here with a reason (>= 20 characters):

```json
{ "exclusions": [ { "resource": "awscc_lex_bot", "reason": "…" } ] }
```

No other resource may be listed — the helper throws otherwise. An exclusion means the resource is
**not generated at all** (a resource emitted but skipped later would still be re-exported by its
module `index.ts`), and every test that honours one prints it. Using this is a finding for the
verifier, not a fix; the ratchet baseline stays at zero for excluded resources, so re-including them
later can only improve the numbers.

## Contract decisions taken beyond the plan (2026-08-28)

1. **One file per resource, kebab-cased from the class name** (`vpc.ts`, `application-v2.ts`) —
   aws-cdk-lib uses one file per *service*, but cdktn's emitters are per-resource and the submodule
   `index.ts` makes the difference invisible to consumers. Shards are `<file>-structs<N>.ts`.
2. **`.jsiirc.json` has no `go` key**; Go submodule names come from pacmak defaults (plan §10).
3. **`test/out/spike-naming.json` is produced by the contract test**, not committed, because
   `test/out/` is gitignored.
4. **Exclusions are all-or-nothing per resource** rather than per stage (see above).
5. **Property-type member names are recorded, not asserted** (the camelCase source differs; plan §8).
6. **Determinism is asserted on bytes**, not just on names, so re-running the generator on a
   reordered schema is a no-op for `git diff` in the future `generated/` tree.

## Contract validation (contract writer, 2026-08-28)

As in iteration 1, the harness was proven against a throwaway fixture (deleted, never committed)
before this contract was committed — a hand-written three-file "emitted package"
(`index.ts`, `aws-ec2/index.ts`, `aws-ec2/vpc.ts` with `CcVPC`, `CcVPCProps`, `namespace CcVPC`,
`.jsiirc.json`). Confirmed on this machine:

* `helpers/shape-diff.ts` reads `CfnVPC` out of `aws-cdk-lib@2.267.0` (8 props members, 3 nested
  `*Property` interfaces, incl. `VpcEncryptionControlProperty`);
* `helpers/emit.ts#typeCheck` type-checks a package generated **outside** the repo tree — `cdktn`
  and `constructs` resolve through the compiler-host `paths` mapping into `cdktn-awscc/node_modules`;
* `helpers/emitted-shape.ts` sees the merged class + namespace, the nested types, the mapper
  function and both barrel forms;
* the jsii oracle: `jsii --project-references=false` exits 0 on that package with the plan §10
  manifest, writes `.jsii` with submodule `@cdktn/awscc.aws_ec2` and type `…aws_ec2.CcVPC`, and
  `jsii-pacmak --targets python --code-only` then writes
  `dist/python/src/cdktn_awscc/aws_ec2/__init__.py`.

So the acceptance criteria are known-reachable and the failure of a new test means the
implementation, not the contract. What is *not* pre-validated (and is genuinely open work): whether
the adapted cdktn emitters can produce that shape for all 11 fixture resources, the CFN
definition-name recovery rate, and the sharded resources.
