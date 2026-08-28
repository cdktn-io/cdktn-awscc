// Adapted from src/vendored/cdktn/models/index.ts — see src/grouped/README.md.
// provider-function-model is dropped: awscc has no `provider`-shaped terraform schema type
// (plan §5 step 4 only ever emits managed resources), so ResourceModel never needs it here.
export * from "./attribute-model";
export * from "./attribute-type-model";
export * from "./resource-model";
export * from "./scope";
export * from "./struct";
