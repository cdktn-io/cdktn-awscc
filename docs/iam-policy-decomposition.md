# AWS::IAM::Policy 1:N decomposition — what it is and where the knowledge lives

2026-08-31. Referenced by `docs/bridge-gap-categories.md` §2 and cfncompat RFC 002 (§3 renderer
row, open question 6). Vocabulary: [`glossary.md`](glossary.md). Explains the one place the bridge's renderer must emit *more than one*
Terraform resource for a single CFN resource.

## The problem

`AWS::IAM::Policy` is a pre-registry CFN type with a shape no single awscc resource can express:
one **inline policy document** attached to **N principals at once**:

```yaml
Type: AWS::IAM::Policy
Properties:
  PolicyName: my-inline-policy
  PolicyDocument: { ... }        # one document
  Roles:  [ RoleA, RoleB ]       # attached to two roles
  Groups: [ GroupC ]             # ... and a group
  Users:  [ ]                    # ... and/or users
```

There is **no `awscc_iam_policy`** (verified against awscc 1.98.0 — it is one of the 254 missing
types, and one of the 28 maintained-L2 blockers: aws-cdk-lib's `aws-iam` L2 synthesizes
`AWS::IAM::Policy` from every `Policy`/`addToPolicy` code path). What awscc *does* have — because
AWS later added registry-native single-principal types — are the three exact decomposition targets
(verified present in the pinned schema):

- `awscc_iam_role_policy`  (`AWS::IAM::RolePolicy` — one document, one role)
- `awscc_iam_user_policy`  (`AWS::IAM::UserPolicy`)
- `awscc_iam_group_policy` (`AWS::IAM::GroupPolicy`)

## The mechanism (renderer-side)

When the bridge's `AwsccL1Renderer` meets an `AWS::IAM::Policy` element it expands **1 → N**: one
`awscc_iam_role_policy` per entry in `Roles`, one `awscc_iam_user_policy` per `Users` entry, one
`awscc_iam_group_policy` per `Groups` entry — each carrying the same `policy_name` and the same
`policy_document` (serialized through the `toJsonString` collapse, RFC 002 §3.1). This is what RFC
002 §3's renderer row calls "1:N rendered-element expansion" and what open question 6 flags as
unverified in its exact mapping.

Consequences the expansion must handle (this is why it is renderer *logic*, not a lookup):

1. **Terraform addressing.** One logical id becomes N resource addresses; the renderer must derive
   deterministic child ids (e.g. `<logicalId>-role-<n>`) so plans stay stable across synths.
2. **References.** `Ref` on an `AWS::IAM::Policy` returns the policy name — resolvable against any
   one child (they share `policy_name`). It has no `Fn::GetAtt` attributes of consequence
   (`Id` on the registry types is per-child), so reference fan-in is benign — but the resolver must
   still map the *original* logical id to *some* child deterministically.
3. **Dependencies (the PR #6 tie-in).** Anything that depended on the original element must depend
   on **all N** children, and anything the original depended on must be carried onto each child —
   the dependency-fidelity-through-expansion problem tracked in `bridge-gap-categories.md` §2.
4. **Principal references vs names.** `Roles` entries in real aws-cdk output are usually
   `Ref`s to sibling roles — the expansion happens *before* reference resolution, so each child's
   `role_name` is the same token the original carried, resolved normally afterwards.

## Where the knowledge lives

- **Renderer (synthesis backend)** owns the expansion algorithm, the child-id scheme, and the
  dependency propagation — none of that is schema-derivable.
- **Generator (`@cdktn/awscc`)** owns the *target knowledge*: that the three principal-scoped types
  exist, their tf type names, and their attribute spellings (via the PR #3 name maps and the PR #4
  `CfnTypeIndex`). The decomposition table itself — `AWS::IAM::Policy` → (Roles→`awscc_iam_role_policy`,
  Users→`awscc_iam_user_policy`, Groups→`awscc_iam_group_policy`) — is a **small curated table**
  (one entry today), not codegen: the registry does not encode "this legacy type decomposes into
  those three"; a human asserted it. Keep it beside the meta-properties table (plan §8) so curated
  truth stays visibly curated.
- **Generalization watch-list.** The same 1:N shape may fit other pre-registry attachment types if
  they get cfncompat/aws-provider fallbacks instead: `IAM::UserToGroupAddition` (one user → one
  group addition each), `ElastiCache/Redshift/RDS` security-group ingress lists. Do not generalize
  until a second entry actually needs the machinery.

## Status

Design note only — nothing implemented. Blocked behind: PR #4 (`CfnTypeIndex` — the renderer needs
the target lookup), the seam RFC (reference-resolver shape), and RFC 002 Q6/Q7 verification
(exact `policy_document` token carriage through `JSON.stringify(doc.toJSON())` into an awscc string
field).
