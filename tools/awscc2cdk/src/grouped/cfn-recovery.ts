/**
 * Recovers CloudFormation `TypeDefinition` names for a terraform attribute path, by joining the
 * awscc terraform schema's attribute tree to the CFN resource-spec property tree one property at
 * a time. Plan §2 step 4 / §5 step 4: "nested property type names from CFN definition names
 * recovered via service-spec (`db.follow('usesType', resource)`), joined to the Terraform
 * attribute path by normalised key, with a deterministic, order-independent path-based fallback
 * for unmatched" (see `src/naming.ts#propertyTypeNamesForResource`, which is that fallback).
 */
import type { SpecDatabase } from "@aws-cdk/service-spec-types";
import { normalizeKey } from "../cfn-map";

/** Matches the private shapes of `@aws-cdk/service-spec-types` closely enough to walk them. */
interface PropertyTypeRef {
  readonly type: string;
  readonly reference?: { readonly $ref: string };
  readonly element?: PropertyTypeRef;
  readonly types?: PropertyTypeRef[];
}
interface TypeDefinitionLike {
  readonly name: string;
  readonly properties: Record<string, { readonly type: PropertyTypeRef }>;
}

/** A pseudo `TypeDefinition` for the legacy `{type: 'tag'}` primitive (`BuiltinTagType`,
 * `@aws-cdk/service-spec-types`'s `common.ts`) — service-spec's "old resource spec" tag type,
 * distinct from a `ref` to an ordinary `TypeDefinition`. It carries no properties of its own in
 * the spec (CFN tags are always the fixed `{Key, Value}` shape aws-cdk-lib hand-writes as `Tag`),
 * so it can only ever be a *terminal* path segment here — but it is an extremely common one: every
 * taggable resource has one, so treating `{type:'tag'}` as "unresolvable" (the `default` branch)
 * alone accounted for a large share of missed recoveries across the full schema. */
const TAG_TYPE_DEFINITION: TypeDefinitionLike = { name: "Tag", properties: {} };

function unwrapDefinitionRef(db: SpecDatabase, type: PropertyTypeRef): TypeDefinitionLike | undefined {
  switch (type.type) {
    case "ref":
      return type.reference
        ? ((db as any).get("typeDefinition", type.reference.$ref) as TypeDefinitionLike | undefined)
        : undefined;
    case "tag":
      return TAG_TYPE_DEFINITION;
    case "array":
    case "map":
      return type.element ? unwrapDefinitionRef(db, type.element) : undefined;
    case "union":
      for (const t of type.types ?? []) {
        const found = unwrapDefinitionRef(db, t);
        if (found) return found;
      }
      return undefined;
    default:
      return undefined;
  }
}

function findResourceByCfnType(db: SpecDatabase, cfnType: string): { properties: Record<string, { type: PropertyTypeRef }> } | undefined {
  const hits = (db as any).lookup("resource", "cloudFormationType", "equals", cfnType);
  return hits.length > 0 ? hits[0] : undefined;
}

/**
 * Resolves the CFN `TypeDefinition` reached by walking `path` (terraform attribute names, e.g.
 * `['lifecycle_configuration', 'rules']`) down from `cfnType`'s own properties, matching each
 * segment to a CFN property key by `normalizeKey` (order-independent, join-key logic shared with
 * `cfn-map.ts`). Returns the CFN definition name at the end of the path, or `undefined` if the
 * path doesn't correspond to an object-typed CFN property (primitive, unmapped, or the awscc
 * schema diverged from the CFN spec at this point) — callers fall back to path-based naming.
 */
export function resolveDefinitionName(
  db: SpecDatabase,
  cfnType: string,
  path: readonly string[],
): string | undefined {
  const resource = findResourceByCfnType(db, cfnType);
  if (!resource) return undefined;

  let properties: Record<string, { type: PropertyTypeRef }> = resource.properties;
  let def: TypeDefinitionLike | undefined;

  for (const segment of path) {
    const key = normalizeKey(segment);
    const propName = Object.keys(properties).find((k) => normalizeKey(k) === key);
    if (propName === undefined) return undefined;
    def = unwrapDefinitionRef(db, properties[propName].type);
    if (!def) return undefined;
    properties = def.properties;
  }

  return def?.name;
}
