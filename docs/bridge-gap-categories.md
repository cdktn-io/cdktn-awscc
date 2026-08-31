# Bridge gap categories — who owns what between @cdktn/awscc, the synthesis backend, and cfncompat

2026-08-31. Agreed categorization of every known gap for the aws-cdk-lib → Terraform bridge
(cdktn-planning#1, cfncompat RFC 002, `awscdk-compat-plan.md` §8, and the measurement/probe work
recorded in `docs/keymap-decision.html` and the seam report). This is the planning source of truth
for the PR sequence on top of PR #2/#3; each item names its home and its vehicle.

**Scope rule for PR #3** (decided): PR #3 carries the *generated spelling oracles* only —
`CFN_PROPERTY_NAME_MAP` and `CFN_ATTRIBUTE_NAME_MAP` — because they share one flag, one emitter
pattern, one review theme, and one API-freeze window. Everything below with generated knowledge is
a **stacked follow-up**, sequenced after the public AWS CDK seam RFC lands (expected ~10 days),
since the RFC may reshape what the reference/intrinsic resolvers consume.

## 1. Generated polyfills — home: `@cdktn/awscc` codegen

| Artifact | Vehicle | Status |
|---|---|---|
| `CFN_PROPERTY_NAME_MAP` (CFN PascalCase property → tf attribute) | PR #3 | implemented, measured (size ~1–4%/target, load-only runtime cost, synth zero) |
| `CFN_ATTRIBUTE_NAME_MAP` (CFN `Fn::GetAtt` name → tf attribute / dotted path) | PR #3 (this branch) | implemented (`de92a2b`, NUL fix `87d1330`) — full flag-on regen: **4,411 of 4,443** CFN attributes mapped across 1,306 resources (32 skipped: no tf counterpart), 370 dotted keys emitted, 364 path-valued entries; motivating probe: 31 GetAtt names defeat naive case conversion. Figures manually synced with the PR description — cdktn-awscc#7 proposes the checked-in coverage probe that makes this drift-proof |
| Ref table (`Ref` → plan-time input attr, else computed `id`; composite ids `\|`-joined) | **PR #4** — prompt below | designed |
| `CfnTypeIndex` (CFN type → tf type + `submodule.Class`) | **PR #4** (companion static; decided 2026-08-31: generated jsii index, not sidecar JSON / per-class static / bridge re-derivation) | designed |
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
> **(b) CfnTypeIndex.** One generated module (e.g. `generated/cfn-type-index.ts`) with a class
> exposing `TF_TYPE: {[cfnType]: tfResourceType}` and `BINDING: {[cfnType]: "submodule.Class"}`
> for all matched resources (unmatched CFN types absent — the renderer's fallback/error signal),
> reusing the generator's own `cfnTypeFor`/`normalizeKey` join and scope-map quirks. Flag-gated,
> sorted, deterministic; ~1,494 entries. Do not defeat lazify (the index must not import resource
> modules). Tests: `AWS::EC2::VPC` → `awscc_ec2_vpc` / `aws_ec2.CcVPC`; `AWS::Kendra::Index` file
> quirk; absence of a known-missing type (`AWS::SQS::QueuePolicy`).

## 2. Synthesis backend (Terrain-side renderer/resolvers)

- **`AWS::NoValue`** — `Token.nullValue()` → tf `null` in attribute position (already documented in
  cfncompat README / RFC 006 §4); **inside lists the backend must drop the element or wrap in
  `compact()`** — backend-owned, confirmed.
- **`Fn::ForEach`** — hard synth-time error, same as `Fn::Transform`, until evidence appears that
  aws-cdk-lib apps ever emit it (it is a template-language transform; the big risks —
  `AWS::Serverless`, `AWS::LanguageExtensions` — are server-side and cannot be polyfilled).
- **`DependsOn` — more than a meta-rule? Two layers, one of which is already solved by the
  keystone design.** The *rendering* layer (a resource-level `DependsOn` entry → `depends_on`
  meta-argument) is a fixed rule. The *semantic* layer — construct-tree dependencies expanding to
  all inner resources of a composite — is what forced TerraConstructs into its
  `TerraformDependencyAspect`: tcons is cdktf-based, and cdktf has no equivalent of aws-cdk core's
  `prepareApp`/`findTransitiveDeps`, which reifies `construct.node.addDependency` into
  resource-level deps during `synthesize()`. **Our bridge keeps aws-cdk-lib's own synthesis
  pipeline (the RFC 002 deferral keystone), so `prepareApp` still runs** and the renderer receives
  already-reified resource-level deps — the tcons Aspect compensates for a gap this design doesn't
  have. The **residual PR #6 scope** (synthesis backend, with generated knowledge only via the
  decomposition maps): dependency fidelity through 1:N expansion — renderer-generated resources
  (e.g. the IAM::Policy decomposition below) must inherit the original element's deps and order
  among themselves — plus an end-to-end test that resource-level deps actually render as
  `depends_on` through cdktn.
- **IAM::Policy 1:N decomposition** — renderer logic with generated target knowledge; full
  explanation in `docs/iam-policy-decomposition.md` (this repo).

## 3. Provider-side (the 254 missing CFN types)

L2-usage-weighted (see the seam report): 37 of 254 are constructed by hand-written aws-cdk-lib L2
code; 28 of those in maintained L2s are the real drop-in blockers. Proposal, split by churn:

- **Fallback to `terraform-provider-aws` for big, churny resources** (`CloudFront::Distribution`,
  `Cognito::UserPool`, `CodeBuild::Project`, `EKS::Nodegroup`, `FSx::FileSystem`, DocDB, …): the
  bridge renders these as `aws_*` resources. Cost is the provider download (~120 MB+) **at
  plan/apply time only, and only for stacks that actually hit a fallback resource** — the provider
  block is emitted per-stack on first use (singleton per stack), so apps fully inside awscc
  coverage never pay it. Registry download caching makes the penalty once-per-machine-per-version.
- **cfncompat candidates for the small, stable policy/attachment types**
  (`SQS::QueuePolicy`, `SNS::TopicPolicy`, and IAM attachment types not covered by decomposition):
  single-API-call, low-churn resources — implementing them in cfncompat keeps the common
  grant-pattern path at one provider dependency. Decide per type at Phase-2 kickoff.

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
  the bridge). Honest cons: release-cadence coupling, and RFC 002 §14's separate-package naming
  would need amending. **Decide with the seam RFC text in hand.**

## PR roadmap (stacked)

| PR | Content | Gate |
|---|---|---|
| #2 | go-case naming fix (`dedupeDefinitionNames`) | in review |
| #3 | spelling oracles: property map + attribute map + these docs | both maps implemented; in review (gates proposed: cdktn-awscc#6 git-binary check, #7 coverage probe) |
| #4 | Ref table + CfnTypeIndex (prompt above) | after seam RFC |
| #5 | typed coercion map (`{key, kind}` values) | after seam RFC |
| #6 | dependency fidelity through 1:N expansion (synthesis backend) | with decomposition work |
