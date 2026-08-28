# Vendored sources

Copied, then adapted minimally (plan §2, §5 step 1). cdktf-named symbols inherited from
cdk-terrain are deliberate migration-compat names and are never renamed.

Adaptations made beyond copying (all mechanical, no behaviour change):

* `src/vendored/cdktn/models/struct.ts`, `.../models/attribute-type-model.ts`,
  `.../models/supported-stored-classes.ts`, `.../emitter/struct-emitter.ts`: the import of the
  package-local `util.ts` (`downcaseFirst`/`uppercaseFirst`) was `../../../util` in cdk-terrain
  (three directories up from `src/get/generator/{models,emitter}`); the vendored tree is two
  directories shallower (`src/vendored/cdktn/{models,emitter}` with `util.ts` alongside
  `cdktn/`), so the import became `../util`.
* `src/vendored/spec2cdk/util/jsii.ts`: originally imported the `../naming` barrel
  (`naming/index.ts`, re-exporting `conventions.ts` + `doclink.ts`). Only `conventions.ts` is in
  the vendored set (per plan §2 — `doclink.ts` is not on the list and nothing here uses it), so
  the import was pointed straight at it: `../naming/conventions`. `namespaceToModuleDefinition`
  only ever used `naming.modulePartsFromNamespace`, which lives in `conventions.ts`, so this is
  not a behavioural change.

**Iteration 3 refresh of `scope-map.json`** (CONTRACT.md "Iteration 3 — scope map"): re-fetched from
`aws/aws-cdk` **main** at commit `6808bb7e04d64a903a73ad56a7879c75019a5908` (2026-08-28) via
`gh api "repos/aws/aws-cdk/contents/packages/aws-cdk-lib/scripts/scope-map.json?ref=6808bb7e04d64a903a73ad56a7879c75019a5908" --jq .content | base64 -d`,
**not** from the local `~/cdk/aws-cdk` checkout the other spec2cdk rows below are pinned to (that
checkout is at `a9e6639d…`, the scope map's own previous commit) — this one file is therefore
ahead of the rest of the vendored tree by design: 302 entries (was 292), **+**
`aws-artifact`, `aws-backupsearch`, `aws-cognitosync`, `aws-networkflowmonitor`, `aws-scn`,
`aws-states`, `aws-storagegateway`, `aws-thinclient`, `aws-transcribe`, `aws-usernotifications`,
`aws-wellarchitected`; **−** `aws-dataexchange`. The refresh changes no existing namespace's winning
module, so iterations 1–2 stay green.

**Iteration 3b, finding 6**: the copy committed above had been JSON-round-tripped (in `aws-kinesisanalytics`, `deprecated` had moved ahead of `namespace`/`suffix` — the byte-for-byte "unmodified" claim below was wrong). Re-copied verbatim with the same command; the bytes now hash to sha256 `24633aa19d9e1076f597c8af470e87d40c0f65bc509c624b2707bdab24dfa2d2` (32677 bytes), and upstream's `namespace`, `suffix`, `deprecated` key order survives in `AWS::KinesisAnalyticsV2`. Resolution is unaffected — iterations 1–3 stay green on these bytes.

Not vendored from the plan's spec2cdk list: `packages/aws-cdk-lib/scripts/scope-map.json` is
present (as `src/vendored/scope-map.json`, unmodified) but its loader in this iteration is the
new `src/scope-map.ts`, not spec2cdk's `module-topology.ts` `readModuleMap` (that reads/writes the
richer `ModuleMap` shape spec2cdk itself builds, and is unused until step 4+). `module-topology.ts`
and `util/jsii.ts` are vendored per the plan's step-1 instruction for a later iteration and are not
imported by any step 1/2 code.

| vendored | origin | commit |
| --- | --- | --- |
| src/vendored/cdktn/resource-parser.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/resource-parser.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/provider-generator.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/provider-generator.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/custom-defaults.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/custom-defaults.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/loop-detection.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/loop-detection.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/sanitized-comments.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/sanitized-comments.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/skipped-attributes.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/skipped-attributes.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/util.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/util.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/attribute-model.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/attribute-model.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/attribute-type-model.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/attribute-type-model.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/index.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/index.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/provider-function-model.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/provider-function-model.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/resource-model.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/resource-model.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/scope.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/scope.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/struct.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/struct.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/models/supported-stored-classes.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/models/supported-stored-classes.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/emitter/attributes-emitter.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/emitter/attributes-emitter.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/emitter/index.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/emitter/index.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/emitter/provider-functions-emitter.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/emitter/provider-functions-emitter.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/emitter/resource-emitter.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/emitter/resource-emitter.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/cdktn/emitter/struct-emitter.ts | /Users/vincentsmet/cdktn/cdk-terrain/packages/@cdktn/provider-generator/src/get/generator/emitter/struct-emitter.ts | 358edc7c39b0b380ba89fd31881f0577fe9b6214 |
| src/vendored/scope-map.json | /Users/vincentsmet/cdk/aws-cdk/packages/aws-cdk-lib/scripts/scope-map.json | 6808bb7e04d64a903a73ad56a7879c75019a5908 |
| src/vendored/spec2cdk/naming/conventions.ts | /Users/vincentsmet/cdk/aws-cdk/tools/@aws-cdk/spec2cdk/lib/naming/conventions.ts | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |
| src/vendored/spec2cdk/module-topology.ts | /Users/vincentsmet/cdk/aws-cdk/tools/@aws-cdk/spec2cdk/lib/module-topology.ts | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |
| src/vendored/spec2cdk/util/jsii.ts | /Users/vincentsmet/cdk/aws-cdk/tools/@aws-cdk/spec2cdk/lib/util/jsii.ts | a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 |
