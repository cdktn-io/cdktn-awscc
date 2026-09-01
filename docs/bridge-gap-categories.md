# Bridge gap categories — who owns what between @cdktn/awscc, the synthesis backend, and cfncompat

2026-08-31. Agreed categorization of every known gap for the aws-cdk-lib → Terraform bridge
(cdktn-planning#1, cfncompat RFC 002, `awscdk-compat-plan.md` §8, and the measurement/probe work
recorded in `docs/keymap-decision.html` and the seam report). This is the planning source of truth
for the PR sequence on top of PR #2/#3; each item names its home and its vehicle. Term definitions
(owner labels, "bridge", "seam", "renderer", "keystone", "oracle" vs "curated table") live in
[`glossary.md`](glossary.md).

**Scope rule for PR #3** (decided): PR #3 carries the *generated spelling oracles* only —
`CFN_PROPERTY_NAME_MAP` and `CFN_ATTRIBUTE_NAME_MAP` — because they share one flag, one emitter
pattern, one review theme, and one API-freeze window. Everything below with generated knowledge is
a **stacked follow-up**, sequenced after the public AWS CDK seam RFC lands (expected ~10 days),
since the RFC may reshape what the reference/intrinsic resolvers consume.

## 1. Generated polyfills — home: `@cdktn/awscc` codegen

| Artifact | Vehicle | Status |
|---|---|---|
| `CFN_PROPERTY_NAME_MAP` (CFN PascalCase property → tf attribute) | PR #3 | implemented, measured (size ~1–4%/target, load-only runtime cost, synth zero). CFN-side coverage probed 2026-09-01 (branch `probe/cfn-property-coverage`, commit `9015b1d`): 23,255 of 26,234 reachable CFN properties mapped (88.64% raw), **1,444/1,493 resources (96.7%) fully covered, only 210 root-cause gaps** (2,437 of the 2,979 raw gaps are the subtrees under three QuickSight `Definition` properties). Re-eval at awscc 1.99.0 (spec pin unchanged): 197 root-cause, 1,488/1,527 (97.45%) fully covered — only 13 gaps closed, so the big ones (QuickSight `Definition`, S3 `BucketNamespace`, EKS `ActiveCertificateAuthorityId`, launch-template `NestedVirtualization`) are **standing awscc omissions, not one-release lag**; meanwhile the spec pin now lags awscc the other way (5 unmatched new resources with **zero** map coverage — invisible to the coverage %, exposed as `unmatchedNames`). Gate shape (issue #7): per-resource baseline JSON + a *floor* on fully-covered % (denominator grows per release) + a ratchet on `unmatchedNames.length` |
| `CFN_ATTRIBUTE_NAME_MAP` (CFN `Fn::GetAtt` name → tf attribute / dotted path) | PR #3 (this branch) | implemented (`de92a2b`, NUL fix `87d1330`) — full flag-on regen: **4,411 of 4,443** CFN attributes mapped across 1,306 resources (32 skipped: no tf counterpart), 370 dotted keys emitted, 364 path-valued entries; motivating probe: 31 GetAtt names defeat naive case conversion. Figures manually synced with the PR description — cdktn-awscc#7 proposes the checked-in coverage probe that makes this drift-proof |
| Ref table (`Ref` → plan-time input attr, else computed `id`; composite ids `\|`-joined) | **PR #4** — prompt below | designed |
| `CfnTypeIndex` (CFN type → tf type + `submodule.Class`; generated entries + curated OVERRIDE layer routing the §3 fallbacks) | **PR #4** (companion static; decided 2026-08-31: generated jsii index, not sidecar JSON / per-class static / bridge re-derivation; OVERRIDE amendment 2026-09-01) | designed |
| Typed coercion map (entry values `{key, kind}`: json-stringified-document fields, list/set/map nesting modes) | **PR #5** — generative source is the `AttributeTypeModel`/`Struct` layer; TerraConstructs has nothing liftable (its coercions are hand-inlined per resource) | planned |

### Why the Ref table is not in PR #3

Three reasons. (1) It is a different artifact *kind*: the name maps are pure spellings; the Ref
table encodes a **semantic preference** (plan-time-known input attribute over apply-time computed
`id`) plus composite-identifier structure — it deserves its own review. (2) It is the artifact most
exposed to the pending AWS seam RFC: `Ref` resolution is the keystone seam (`IReferenceResolver`),
and the RFC may prescribe what reference metadata the resolver receives — emitting the table before
reading the RFC risks freezing the wrong shape. (3) PR #3 is reviewed, measured, and mergeable;
holding it open for a second design discussion delays the naming fix (PR #2) underneath it.

### Prepared prompt — PR #4 (Ref table + CfnTypeIndex)

> In `~/cdktn/cdktn-awscc`, branch `feat/cfn-ref-table` stacked on `feat/cfn-key-map` (or `main`
> once PR #3 merges), behind the same `emitCfnPropertyMap` flag family:
>
> **(a) Ref table.** Pre-study first, over all 1,493 matched resources: how many registry
> `primaryIdentifier`s (carried in `@aws-cdk/aws-service-spec`) are single-part vs composite; how
> many single-part identifiers correspond to a *writable input* attribute vs a computed-only one;
> any resources where documented `Ref` semantics diverge from `primaryIdentifier`. Then emit a
> per-resource jsii-legal static `CFN_REF` (flatten to strings) encoding: prefer the plan-time-known
> input attribute whose normalized name matches a single-part `primaryIdentifier` (AWS::IAM::Role →
> `role_name`); else fall back to the computed `id` (the Cloud Control identifier; for composite
> identifiers also emit the ordered component attribute list so the bridge can build the `\|`-joined
> form). Tests: IAM Role → `role_name`; IAM ManagedPolicy → `policy_arn` (verify against the
> registry — RFC 002's example); one composite-identifier resource. Flag off byte-identical; follow
> CONTRACT.md conventions; measure size delta.
>
> **(b) CfnTypeIndex — the single machine-readable router.** One generated module
> (`generated/cfn-type-index.ts`) exposing `TF_TYPE: {[cfnType]: tfResourceType}` and
> `BINDING: {[cfnType]: "submodule.Class"}` for all matched resources, reusing the generator's
> own `cfnTypeFor`/`normalizeKey` join and scope-map quirks. Flag-gated, sorted, deterministic;
> ~1,494 generated entries. Do not defeat lazify (the index must not import resource modules).
>
> **Plus a curated OVERRIDE layer** (amendment 2026-09-01), emitted from a checked-in
> `overrides.json` next to `scope-map.json` and merged into the same index so the renderer has
> **one** lookup with **three** outcomes:
>
> | Index state | Meaning | Renderer behaviour |
> |---|---|---|
> | present, generated | awscc covers the type | render `awscc_*` from `TF_TYPE`/`BINDING` |
> | present, `override` | curated fallback/polyfill target | render the override target; emit the extra provider block per-stack on first use |
> | **absent** | no known target | **hard error at synth time**, naming the CFN type, the construct path, and the reason bucket (template-engine / legacy / active-service) — prior art for actionable errors: cdktf-aws-cdk throws with a pre-filled GitHub-issue URL (`src/mapping/index.ts:40-45`) |
>
> Override entry shape (curated truth, visibly curated — §4's rule):
> `{ "AWS::CloudFront::Distribution": { "kind": "aws-provider", "tfType": "aws_cloudfront_distribution", "binding": "aws_cloudfront.CfnDistribution", "note": "churny; maintained-L2 call sites" } }`
> with `kind ∈ { "aws-provider", "cfncompat", "decompose" }` — `decompose` pointing at the curated
> 1:N table (`AWS::IAM::Policy`) rather than a single target. Seed entries: the §3 fallback list
> (`CloudFront::Distribution`, `Cognito::UserPool`, `CodeBuild::Project`, `EKS::Nodegroup`,
> `FSx::FileSystem`, DocDB) as `aws-provider`; `SQS::QueuePolicy` / `SNS::TopicPolicy` also as
> `aws-provider` (`aws_sqs_queue_policy`, `aws_sns_topic_policy` — decided 2026-09-01, no
> cfncompat resources for these; the `cfncompat` kind stays in the enum for future
> deploy-protocol cases); `AWS::IAM::Policy` as `decompose`.
> Invariants to test: an override never shadows a generated entry (CI fails if awscc gains the
> type — that is the signal to *delete* the override); every override names a real resource type
> in the pinned schema of its provider; absence of a known-missing type still errors
> (`AWS::SQS::QueuePolicy` until an override lands). Tests: `AWS::EC2::VPC` → `awscc_ec2_vpc` /
> `aws_ec2.CcVPC`; `AWS::Kendra::Index` file quirk; the three-state assertion above.

## 2. Synthesis backend (Terrain-side renderer/resolvers)

- **`AWS::NoValue`** — `Token.nullValue()` → tf `null` in attribute position (already documented in
  cfncompat README / RFC 006 §4); **inside lists the backend must drop the element or wrap in
  `compact()`** — backend-owned, confirmed. Real L2 instance of the list shape: `aws-eks(-v2)`
  `KubectlProvider`'s `Fn::If`-produced `AWS::NoValue` inside `ManagedPolicyArns` (see Conditions
  below).
- **`Fn::ForEach`** — hard synth-time error, same as `Fn::Transform`, until evidence appears that
  aws-cdk-lib apps ever emit it (it is a template-language transform; the big risks —
  `AWS::Serverless`, `AWS::LanguageExtensions` — are server-side and cannot be polyfilled).
- **Conditions — three distinct gaps, not one** (measured 2026-09-01 against aws-cdk-lib 2.267.0:
  exactly 4 constructs in 3 of 346 modules emit template conditions):
  - **Value-level condition expressions / `Fn::If`** — solved: RFC 004 ships
    `provider::cfncompat::condition_*` (if/and/or/not/equals/contains/each_member_*), so a
    `CfnCondition` expression tree renders as an apply-time boolean. RFC 002 §7's "CFN Conditions
    out of contract" is stale for this half. The three real L2 sites are all property-level:
    `aws-kinesis` `Stream` (China-partition KMS guard on `StreamEncryption`) and `aws-eks(-v2)`
    `KubectlProvider` (`HasEcrPublic`: `Fn::If` returning `AWS::NoValue` **inside the
    `ManagedPolicyArns` list** — the NoValue-in-list shape above). All three predicates are
    partition/region facts knowable at synth — prefer synth-time folding (TerraConstructs'
    `TerraformLocal` + ternary idiom) over apply-time deferral for these.
  - **Resource-level `Condition:` attribute (`cfnOptions.condition`) → `count`** — LOW priority,
    now quantified: exactly **one** L2 site in all of aws-cdk-lib (`aws-dynamodb` `Table`
    per-region replica custom resource, and only under an env-agnostic stack), whose target is a
    Lambda-backed custom resource. The `count = <bool> ? 1 : 0` idiom (plan §8, verdict
    "approximate") is the rendering if ever needed — with the real cost that every reference to a
    counted resource must re-address to `res[0].attr`, so the reference resolver must know which
    elements are conditional. **Primary behavior: hard synth-time error, documented as
    unsupported.** The adapter's locals + `count` rendering (cdktf-aws-cdk) is the documented
    **last resort**, adopted only on evidence — and never without the indexed re-addressing the
    adapter itself skipped. (Also: `AWS::CDK::Metadata` + `CDKMetadataAvailable` is dropped entirely —
    no awscc mapping, no analytics value in TF.)
  - **Synth-time conditional existence — `CfnResource.shouldSynthesize()`** — the structural one,
    previously missing from this doc. Core hook (`core/lib/cfn-resource.ts:666`):
    `_toCloudFormation()` returns `{}` when false, and `renderDependsOn` filters non-synthesized
    resources out of other resources' `DependsOn`. Sole override in the library: `aws-iam`
    `CfnPolicyConditional` (`aws-iam/lib/policy.ts:165-180`) — an inline policy is emitted only if
    `force || referenceTaken || (!document.isEmpty && isAttached)`, via
    `PolicyDocument implements IResolvable` keying off `IResolveContext.preparing`. This fires on
    essentially every stack with Role/User/Group default policies, and it is what forced
    cdktf-based TerraConstructs into multi-pass `prepareStack()` with idempotent child creation
    across ~14 constructs. **Ownership (corrected 2026-09-01): the seam design stays in the
    construct tree — the resolvers replace CFN-intrinsic production where it is hardcoded;
    consuming rendered `_toCloudFormation()` fragments is the adapter architecture the seam
    exists to avoid. So this filtering is NOT free: the synthesis backend must honor the
    predicate itself.** HIGH priority; vehicle: renderer core. What it has to solve:
    1. evaluate `shouldSynthesize()` per `CfnResource` at render time — it is `protected`
       (runtime-callable in JS, but the seam RFC should be asked to expose it to backends as a
       supported surface, since subclass overrides are already the extension point);
    2. evaluate it **after** the prepare pass: the predicate reads state (`isAttached`,
       `referenceTaken`, `document.isEmpty`) finalized only once the retained pipeline's
       preparing resolution has run — the deferral keystone gives us aws-cdk's own ordering, so
       the renderer must simply not read it earlier;
    3. mirror `renderDependsOn`'s filter (`cfn-resource.ts:600`): `depends_on` edges pointing at
       non-synthesized resources must be dropped by our renderer too;
    4. dangling references: a `Ref`/`GetAtt` to a resource that did not synthesize must be a
       synth-time error in the reference resolver — upstream stays self-consistent because
       `referenceTaken` flips synthesis on, so preserve that by evaluating the predicate last;
    5. tests: empty unattached `Policy` vanishes; attached policy emits; a `policyName`
       reference forces emission.
- **Template sections (`Parameters`, `Mappings`, `Outputs`)** — backend-owned rendering, with one
  cfncompat spike. `CfnParameter` → `TerraformVariable` and `CfnOutput` → `TerraformOutput` are
  clean synth-time mappings (defaults/types carried over; `CfnOutput` is also the producer half
  of the cross-stack story — the remaining gaps there are cross-stack references and
  `Fn::ImportValue`, §5). CFN *dynamic* parameter types (`AWS::SSM::Parameter::Value<String>`)
  are a CFN-engine feature resolved at deploy time — exactly cfncompat's vehicle (§6): **spike a
  `cfncompat_ssm_parameter_value`-style data-source polyfill** (plan-time read matching CFN's
  resolution semantics) rather than hard-failing. `Mappings` has no Terraform section: the
  renderer emits the mapping as a synth-time `locals` map (evaluated by Terraform at plan), or
  folds `Fn::FindInMap` entirely when keys are literal; `provider::cfncompat::find_in_map`
  (RFC 004 §3.3) is the accessor for token-valued keys. cfncompat owns the *accessor function*,
  never the *section rendering* — that split is why §6 lists "template sections" as not-owned.
  `awscdk-compat-plan.md` §8 lists these as "design note only" — this row upgrades them to owned
  items.
- **Renderer invariant: unmapped property key → hard synth-time error, never a silent drop.**
  Prior art: cdktf-aws-cdk's delete-as-consumed + "cannot map some properties" throw
  (`src/aws-adapter.ts:171-180`). Our measured exposure (probe 2026-09-01, awscc 1.99.0): 197
  root-cause CFN properties have no map entry — mostly **standing awscc omissions** (only 13 of
  210 closed on the 1.98.0→1.99.0 bump), plus 5 whole resources unmatched by the spec pin —
  precisely the cases that must fail loudly at synth rather than surface as a mysteriously
  missing plan attribute.
  Fold into the renderer work (PR #6 vehicle); the codegen-side twin is issue #7's coverage
  ratchet.
- **`DependsOn` — more than a meta-rule? Two layers, one of which is already solved by the
  keystone design.** The *rendering* layer (a resource-level `DependsOn` entry → `depends_on`
  meta-argument) is a fixed rule. The *semantic* layer — construct-tree dependencies expanding to
  all inner resources of a composite — is what forced TerraConstructs into its
  `TerraformDependencyAspect`: tcons is cdktf-based, and cdktf has no equivalent of aws-cdk core's
  `prepareApp`/`findTransitiveDeps`, which reifies `construct.node.addDependency` into
  resource-level deps during `synthesize()`. **Our bridge keeps aws-cdk-lib's own synthesis
  pipeline (the RFC 002 deferral keystone), so `prepareApp` still runs** and the renderer receives
  already-reified resource-level deps — the tcons Aspect compensates for a gap this design doesn't
  have. **Key requirement to carry into the public seam RFC:** the seam must be invoked with (or
  after) the reified construct-tree dependency set — the renderer needs post-`prepareApp`
  resource-level deps to propagate `depends_on` correctly through decomposition, where one CFN
  resource fans out across awscc / cfncompat / aws-fallback targets. This construct-tree
  capability is exactly what the adapter lacked. The **residual PR #6 scope** (synthesis backend, with generated knowledge only via the
  decomposition maps): dependency fidelity through 1:N expansion — renderer-generated resources
  (e.g. the IAM::Policy decomposition below) must inherit the original element's deps and order
  among themselves — plus an end-to-end test that resource-level deps actually render as
  `depends_on` through cdktn.
- **IAM::Policy 1:N decomposition** — renderer logic with generated target knowledge; full
  explanation in `docs/iam-policy-decomposition.md` (this repo).

## 3. Provider-side (the 254 missing CFN types) — routed by CfnTypeIndex OVERRIDE entries

Routing is data-driven: each item below becomes an `override` entry in the amended CfnTypeIndex
(PR #4 prompt above); everything not matched and not overridden hard-fails at synth.

L2-usage-weighted (see the seam report): 37 of 254 are constructed by hand-written aws-cdk-lib L2
code; 28 of those in maintained L2s are the real drop-in blockers. Proposal, split by churn:

- **Fallback to `terraform-provider-aws` for big, churny resources** (`CloudFront::Distribution`,
  `Cognito::UserPool`, `CodeBuild::Project`, `EKS::Nodegroup`, `FSx::FileSystem`, DocDB, …): the
  bridge renders these as `aws_*` resources. Cost is the provider download (~120 MB+) **at
  plan/apply time only, and only for stacks that actually hit a fallback resource** — the provider
  block is emitted per-stack on first use (singleton per stack), so apps fully inside awscc
  coverage never pay it. Registry download caching makes the penalty once-per-machine-per-version.
- **Small, stable policy/attachment types route to `terraform-provider-aws` too** (decided
  2026-09-01): `SQS::QueuePolicy`, `SNS::TopicPolicy`, and IAM attachment types not covered by
  decomposition are absent from awscc (QueuePolicy is the canonical known-missing test). The
  earlier idea of implementing them as cfncompat resources is **dropped** — once the fallback
  provider is already a dependency for the big types above, splitting the gap surface across two
  providers buys nothing. They become `aws-provider` OVERRIDE entries (`aws_sqs_queue_policy`,
  `aws_sns_topic_policy`, `aws_iam_*` attachments).

## 4. Curated tables (not codegen — do not masquerade as generated truth)

- **Per-resource meta-property equivalents** (`DeletionPolicy: Snapshot` →
  `skip_final_snapshot`/`final_snapshot_identifier`, `CreationPolicy`, `UpdatePolicy`): semantic
  mappings, hand-curated, small. Stays exactly where planned: **plan §8 spike deliverable**
  (`docs/spike-meta-properties.md`).

## 5. Deferred / spikes

- **`Fn::ImportValue`** — needs its own spike, because the answer depends on topology: (a) producer
  is a real CFN stack → a cfncompat `cloudformation_export`-style data source works (one read API);
  (b) **both stacks are bridge stacks → the value never exists as a CFN export — it lives in
  Terraform state**, so the options are `terraform_remote_state` (requires backend/key knowledge the
  bridge can't assume) or **synth-time resolution via AWS CDK context providers/lookups** (a lookup
  that reads the producing stack's outputs/state and bakes the value, cached in `cdk.context.json`);
  (c) same-app cross-stack refs are not ImportValue at all — they take RFC 002 §7's cross-stack
  path. Spike deliverable: pick per topology and decide whether cfncompat grows the data source.
- **`Fn::Transform`** — synth-time error stands. cfncompat *could* invoke a customer macro Lambda
  (custom-resource-polyfill shape) but can never polyfill the server-side transforms
  (`AWS::Serverless`, `AWS::LanguageExtensions`) — no invokable endpoint — and those are the ones
  that matter.
- **aws-cdk-lib fork via codemod** — **HELD**, not rejected: revisit only if the seam RFC
  disappoints. A fork doesn't remove the runtime maps (Lazy-produced literals are invisible to any
  static codemod) and adds the fork treadmill + ecosystem-split costs; everything built so far
  serves both paths.
- **Spike option: "cdktn-awscc IS the bridge".** Merge bindings + synthesis backend + provider
  mapping + polyfill wiring into this one package. Strongest argument: **the maps stop being public
  API** (they become internal wiring — the only objection left after the size measurements
  dissolves), and versioning collapses to one train (schema, maps, renderer pinned together — no
  shared-artifact drift discipline). Technical shape that makes it work: implement the AWS seam
  interfaces as plain exported TS **excluded from jsii** — the same assembler behavior that hides
  the `*ToTerraform` mappers hides the bridge, avoiding the killer problem of aws-cdk-lib types
  entering the jsii dependency closure; aws-cdk-lib stays an optional peer. Standalone-`Cc*`
  consumers are a weak objection (classic `cdktn-provider-awscc` exists; the L1 shape existed *for*
  the bridge). Honest cons: release-cadence coupling, and RFC 002 §0/§3's separate-package naming
  (`@cdktn/aws-cdk-terraform-provider`) would need amending. **Decide with the seam RFC text in
  hand.**

## 6. cfncompat capabilities & responsibilities (2026-09)

`terraform-provider-cfncompat` (`registry.terraform.io/cdktn-io/cfncompat`, MPL-2.0, Terraform
Plugin Framework) is the **apply-time** half of the bridge: it supplies CloudFormation semantics
that only exist while Terraform/OpenTofu is running — pure CFN-semantics computation, values that
need an AWS API call, and the CFN deployment protocol. It holds **no CloudFormation schema** and
therefore owns nothing that requires per-resource CFN knowledge.

Provider-defined functions require the Terraform 1.8+ plugin protocol (the repo declares
Terraform >= 1.8, Go >= 1.25); on OpenTofu the equivalent floor is the release that introduced
provider-defined functions. Anything a pre-1.8 consumer needs must be folded at synth time.

### Ships today (v0.3.0)

**17 provider-defined functions** (`provider::cfncompat::*`, `internal/provider/function_*.go`),
each matching AWS-documented CFN semantics with unit + acceptance tests derived from the doc
examples:

| Value functions (9) | Condition / rule functions (8) |
|---|---|
| `base64`, `cidr` (IPv4+IPv6), `find_in_map` (variadic `default_value`), `join`, `length`, `select`, `split`, `sub` (explicit `variables` map, `${!Literal}` escaping), `to_json_string` | `condition_and`, `condition_or` (2–10 args), `condition_not`, `condition_equals`, `condition_if`, `condition_contains`, `condition_each_member_equals`, `condition_each_member_in` |

Naming rule: snake_case of the AWS CDK `Fn` method, so generated CDKTN/JSII bindings camelCase
back to `Fn.*`. The `condition_` prefix exists because `if`/`and`/`or`/`not` are reserved words in
JSII target languages. One non-mechanical entry: CFN `Fn::Length` = CDK `Fn.len()` = TF `length`
= binding `lengthOf`.

**2 data sources** (`internal/provider/data_source_*.go`):

| Data source | Covers |
|---|---|
| `cfncompat_pseudo_parameters` | 7 of the 8 `AWS::*` pseudo parameters in one node and one STS `GetCallerIdentity`: `account_id`, `partition`, `region`, `url_suffix`, echoed `stack_name` / `notification_arns`, plus a **deterministic, stateless `stack_id`** (`arn:<partition>:cloudformation:<region>:<account>:stack/<name>/<uuid-v5>`) so custom-resource handlers can keep using it as an ownership key across applies |
| `cfncompat_availability_zones` | `Fn::GetAZs`, with the optional `region` argument (unset ≡ `AWS::Region`) and CloudFormation's documented **EC2-VPC default-subnet behaviour** in `names` (fallback to all available zones when no AZ has a default subnet), plus `all_names` / `zone_ids` |

**1 resource**: `cfncompat_custom_resource` — the CloudFormation **engine side** of the
custom-resource protocol (Lambda async invoke or SNS publish, pre-signed S3 `ResponseURL`,
`ServiceTimeout`, `NoEcho`, replacement-cleanup DELETE, CFN's `PhysicalResourceId` defaulting), so
existing handlers — hand-written, CDK provider-framework, and `AwsCustomResource` — run unmodified.

**Provider configuration**: awscc-parity credential chain via `hashicorp/aws-sdk-go-base/v2`
(static creds, profile, shared config files, `assume_role`, `assume_role_with_web_identity`,
retries, IMDS opt-out, proxies) plus `custom_resource_bucket` and `endpoints` overrides for
`lambda`/`sns`/`s3`/`sts`/`ec2`. **Configure is lenient**: resolution failures are stored and only
surfaced when a resource/data source actually needs AWS — the 17 functions work with a completely
unconfigured provider.

### Owns going forward

1. **Apply-time CFN semantic fidelity.** Every intrinsic that is a pure computation, and every CFN
   value that needs an AWS API call, is cfncompat's to implement and to keep exactly matching the
   AWS documentation — deliberately *not* mapped onto near-miss Terraform core functions.
2. **The CFN deployment protocol.** The custom-resource protocol today; `cfncompat_signal`
   (`cfn-signal` / `CreationPolicy`, SQS long-poll blueprint) and `cfncompat_aws_sdk_call`
   (native arbitrary-SDK-call, removing `AwsCustomResource`'s runtime-Lambda dependency) are the
   two committed-but-deferred items.
3. **NOT growing CFN resource types by default** (decided 2026-09-01, reversing the earlier
   candidacy): `SQS::QueuePolicy` / `SNS::TopicPolicy` / IAM attachments route to
   `terraform-provider-aws` OVERRIDE entries instead — once the fallback provider is a dependency
   anyway, splitting the gap surface across two providers buys nothing. cfncompat stays
   functions + data sources + protocol resources unless a gap needs deploy-protocol semantics.
4. **Candidate home for two data-source polyfills**: a `cloudformation_export`-style read if the
   `Fn::ImportValue` spike finds a real-CFN-producer topology worth supporting, and an
   `ssm_parameter_value`-style read for CFN dynamic parameter types
   (`AWS::SSM::Parameter::Value<*>` — see the template-sections row in §2).
5. **Its own registry contract**: schema stability, docs under `docs/`, changelog, and the
   Terraform-version floor its function surface implies.

### Explicitly does NOT own

| Not cfncompat's | Whose it is |
|---|---|
| **Property-key spelling** (CFN PascalCase → awscc attribute) | The generated `CFN_PROPERTY_NAME_MAP` (23,255 entries) from `@cdktn/awscc` codegen. cfncompat has no CFN schema and receives whatever keys the caller renders. |
| **`Fn::GetAtt` attribute spelling**, incl. dotted/path-valued names | Generated `CFN_ATTRIBUTE_NAME_MAP` (4,411/4,443) — same owner. |
| **`Ref` semantics** (per-resource plan-time input attribute vs computed `id`, composite ids) | Generated Ref table (`@cdktn/awscc`, PR #4) consumed by the reference resolver. |
| **Resource existence, type routing and `count` wiring** — which CFN type maps to which provider, whether a resource is emitted at all | `CfnTypeIndex` (`@cdktn/awscc`) for routing; the synthesis backend for emission and `count`. Resource-level `Condition:` → `count` is a **renderer** idiom, not a provider function. |
| **1:N decomposition** (`AWS::IAM::Policy` → role/user/group policies), child ids, dependency propagation | Synthesis backend / `AwsccL1Renderer` (algorithm) + curated decomposition table. |
| **Meta-property equivalence** (`DeletionPolicy`, `UpdateReplacePolicy`, `CreationPolicy`, `UpdatePolicy`, `Metadata`) | Curated table + renderer. `CreationPolicy` may *later* reach a `cfncompat_signal` resource, but the equivalence decision is not the provider's. |
| **`Ref` / `Fn::GetAtt` / `Fn::ImportValue` / `Fn::Transform` / `Fn::ForEach` / `Fn::RefAll` / `Fn::ValueOf*`** | Reference resolver, cross-stack model, or a hard synth-time error — all synthesis-backend side. |
| **`AWS::NoValue`** | Bridge-side `Token.nullValue()`; the list-position drop/`compact()` fix-up is the backend's. |
| **Stack-wide event delivery for `AWS::NotificationARNs`** | Above the provider: the plugin protocol has no apply-lifecycle RPC. The data source only echoes; delivery belongs to the cdktn CLI wrapper (`apply -json`) or Terraform 1.14 actions. |
| **Template sections** (`Parameters`, `Mappings`, `Outputs`, `Conditions` as a named section) | Synthesis backend. `find_in_map` takes the mapping **inline** precisely because Terraform has no Mappings section. |
| **Region-fact literals at synth time** | Consumers already carry aws-cdk `region-info`; `region_facts.go` exists only because the table must also be readable inside the Go plugin at apply time. |

## 7. Prior art — cdktf-aws-cdk adapter: what we adopt, what only influenced us

From the 2026-09-01 analysis of `hashicorp/cdktf-aws-cdk` (HEAD `e457f4e`; archived read-only with
CDKTF 2025-12; ~15 hand mappings in 5 files against 1,747 CFN types). File:line references are
into that repo. Comparison artifact: the "cdktf-aws-cdk comparison" page.

| Adapter mechanic (file:line) | Verdict | Owner here | How it influenced our path |
|---|---|---|---|
| Delete-as-consumed + "cannot map some properties" throw (`aws-adapter.ts:171-180`) | **adopt** | synthesis backend (renderer, PR #6) + `cdktn-awscc` (issue #7 ratchet) | Became the unmapped-key hard-error renderer invariant (§2); the probe's 210 root-cause gaps are exactly what must fail loudly instead of dropping silently |
| Supported-type Set as membership router (`src/awscc/supportedTypes.ts`, `mapping/index.ts:36-62`) | **validates + shaped** | `cdktn-awscc` (`CfnTypeIndex`, PR #4) | Confirmed "one generated membership structure = machine-readable gap definition"; we extended it to the three-state generated/override/absent router |
| Hard error carrying a pre-filled GitHub-issue URL (`mapping/index.ts:40-45`) | **adopt** | synthesis backend (absent-state diagnostic) | Copied into the CfnTypeIndex absent-state error spec: name the CFN type, construct path, reason bucket, and an actionable link |
| Conditions as locals + `count = cond ? 1 : 0` (`aws-adapter.ts:192-220,507-515`, snapshot-tested) | **documented last resort** | synthesis backend | Kept only as the fallback rendering for resource-level `Condition:` (1 known L2 site); primary behavior is a hard synth-time error — and any adoption must add the `res[0]` indexed re-addressing the adapter skipped |
| Curated mapping entry shape: props-transform + per-type `attributes` table (`mapping/helper.ts:67-135`, `iam-policy.ts`) | **format draft** | `cdktn-awscc` curated tables (§4) | Template for OVERRIDE-entry and decomposition-table structure; their two gap-driven entries (`IAM::Policy`, `Lambda::Permission` — both absent from their CC set) are first-draft content |
| `AWS::IAM::Policy` → managed policy + attachments, positional child ids, no dep propagation (`iam-policy.ts:14-60`) | **reject semantics, keep the lesson** | synthesis backend + curated table | Sharpened `iam-policy-decomposition.md`: faithful inline targets (`awscc_iam_*_policy`), stable child-id scheme, and dependency inheritance through 1:N (PR #6) — the part every prior art skips |
| `Fn::ForEach` / `Fn::Transform` / `Fn::ImportValue` documented as not supported (their docs) | **confirms** | synthesis backend | Same posture, arrived at independently and *by decision on both sides* — strengthens our documented-hard-fail rows |
| Opaque `aws_cloudcontrolapi_resource` fallback with `jsonencode`d PascalCase props (`mapping/index.ts:36-62`) | **reject — as evidence** | provider-side §3 | Their universal-but-degraded fallback (no per-attribute diff, plan-time-unknown GetAtt) is the measured cost that justifies our inverted architecture: universal typed awscc + thin curated fallback |
| Synth-time intrinsic translation onto TF core functions, 14 mapped (`aws-adapter.ts:380-547`; broken `Fn::FindInMap`, `xit`-disabled Cidr test) | **reject — as evidence** | cfncompat | Empirical support for RFC 004's "TF core functions are near-misses": their bugs are the failure mode our apply-time `provider::cfncompat::*` functions avoid |
| Bypassing aws-cdk synthesis (`super(undefined,id)`, `DependsOn` never read) + `time_sleep` EventualConsistencyWorkaroundAspect | **reject — as evidence** | synthesis backend (keystone) | Strongest external confirmation that the retained-`prepareApp` deferral keystone is load-bearing; their missing dependency layer is the disease, our §2 `DependsOn` rows are the cure |
| Mechanical `camelCase()` + per-resource overrides (`mapping/helper.ts:43-51,21-27`) | **reject — as evidence** | `cdktn-awscc` oracles | The hand-override accumulation curve (15 mappings in ~4 years) is the maintenance model our generated `CFN_PROPERTY_NAME_MAP`/`CFN_ATTRIBUTE_NAME_MAP` replace |
| Per-region aliased provider for `Fn::GetAZs` (`aws-adapter.ts:103-136,403-411`) | **not adopted** | — | Superseded before we saw it: `cfncompat_availability_zones` takes `region` as an argument (RFC 006), so the alias machinery has nothing left to solve |

## PR roadmap (stacked)

| PR | Content | Gate |
|---|---|---|
| #2 | go-case naming fix (`dedupeDefinitionNames`) | merged (`df5ddf9`) |
| #3 | spelling oracles: property map + attribute map + these docs | merged (`7f149a5`); gate #6 (git-binary check) merged via PR #8; #7 coverage probe prototyped on `probe/cfn-property-coverage` |
| #4 | Ref table + CfnTypeIndex (generated entries + curated OVERRIDE layer; prompt above) | after seam RFC |
| #5 | typed coercion map (`{key, kind}` values) | after seam RFC |
| #6 | dependency fidelity through 1:N expansion (synthesis backend) | with decomposition work |
