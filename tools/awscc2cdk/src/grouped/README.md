# src/grouped/

Adapted **copies** of `src/vendored/cdktn/**` (plan §5 step 4). Unlike `src/vendored/`, which stays
byte-identical to its origin and is tracked in `src/vendored/VENDORED.md`, these files are meant to
diverge — they are what actually generates the grouped (aws-cdk-lib-shaped) output. `vendored.test.ts`
only checks `src/vendored/**`, so nothing here is asserted to match upstream.

What changed from the vendored originals, and why:

* **`models/struct.ts`** — `name` is mutable (was `readonly`) and carries a new `path: readonly
  string[]` (the terraform attribute path from the resource root). `resource-parser.ts` gives every
  struct a temporary, always-unique name while parsing; `grouped-generate.ts` renames every struct
  to its final `naming.ts#propertyTypeNamesForResource` name in one pass per resource, after parsing
  and CFN-definition-name recovery are both done. Every other model reads `struct.name` through a
  getter (never caches it), so this rename is transparent to the rest of the pipeline.
* **`models/attribute-type-model.ts`** — `StructAttributeTypeModel#storedClassType`,
  `#inputTypeDefinition` and `#getStoredClassInitializer` consult `namespace-context.ts`'s current
  qualifier and prefix the struct-derived name with it (`CcVPC.TagProperty` instead of
  `TagProperty`). Every other type (`List`/`Set`/`Map`, built on top of this one) composes its own
  name by string-appending a suffix (`List`, `Map`, `OutputReference`, …) to the element's
  `storedClassType`, so qualification propagates through them for free — no other method needed
  changing. Mapper *function* names are untouched (never qualified: they are always emitted at the
  top level of the file, so a bare reference is always correct — see `struct-emitter.ts`).
* **`models/resource-model.ts`** — `configStructName` is public (was `private`) so it can be
  renamed; the provider/data-source/ephemeral-resource branches are dropped (awscc's terraform
  schema only ever has managed resources).
* **`resource-parser.ts`** — rewritten as a single `parseResourceAttributes()` entry point with no
  cross-resource state (the vendored `Parser` shares `classNames`/`usedBaseNames` across every
  resource in a provider, by design, to keep flat top-level names unique; grouped output never has
  that problem — every resource's structs live in their own `namespace`, so nothing needs to be
  unique *across* resources). Every struct is given a temporary name and its full `path`; renaming
  happens afterward in `grouped-generate.ts`. Baggage this iteration doesn't need — providers, data
  sources, ephemeral resources, provider-defined functions — is dropped.
* **`emitter/struct-emitter.ts`** — split into three entry points instead of one `emit()`:
  `emitStructInterface` (interface only, into the namespace body), `emitStructClass` (the
  `OutputReference`/`List`/`Map` wrapper classes, also into the namespace body) and
  `emitStructMappers` (the two top-level `toTerraform`/`toHclTerraform` functions, whose signature
  qualifies the struct type it takes with the owning class name — the one place a struct name is
  referenced directly as a template string rather than through `attribute-type-model.ts`). No
  sharding (`emitNamespacedStructs`/`STRUCT_SHARDING_THRESHOLD`): plan §5 defers cross-file
  namespace sharding to step 5; see CONTRACT.md "Exclusions".
* **`emitter/resource-emitter.ts`** — same trim as `resource-model.ts` (managed resources only, no
  provider-defined-functions getter).
* **`emitter/attributes-emitter.ts`** — unchanged logic, copied only so it resolves its sibling
  imports against this directory's `models/` (which carries the qualification behaviour above).

New, with no vendored equivalent: `namespace-context.ts` (the qualifier toggle described above),
`cfn-recovery.ts` (joins a terraform attribute path to a CFN `TypeDefinition` name via
`@aws-cdk/service-spec-types`), `sanitizers.ts` and `jsii-evidence.ts` (plan §4 spike, also used by
`spike-naming.ts`).
