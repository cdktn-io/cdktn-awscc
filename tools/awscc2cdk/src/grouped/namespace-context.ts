/**
 * A resource's nested types (`TagProperty`, `TagPropertyOutputReference`, …) are declared once,
 * inside `export namespace CcVPC { ... }`, but referenced from two places: from *inside* that same
 * namespace (sibling struct interfaces/classes referencing each other — no qualification needed,
 * plain scoping resolves it) and from *outside* it (the `CcVPCProps` interface and the `CcVPC`
 * class body, both emitted at the top level of the file — TypeScript's class+namespace
 * declaration-merging trick exposes nested members only under the qualified name `CcVPC.Foo`, not
 * bare `Foo`, even from inside the class's own methods).
 *
 * `models/attribute-type-model.ts`'s `StructAttributeTypeModel` is the one place a struct's type
 * is turned into a name string; it reads `current()` at that moment and prefixes accordingly. The
 * emitter sets this immediately before generating top-level content and clears it before generating
 * namespace-body content — generation is synchronous and single-threaded, so a plain mutable
 * module value is sufficient (no need to thread a parameter through every model getter).
 */
let qualifier: string | undefined;

/** Run `fn` with the namespace qualifier set to `name` (or cleared, if `name` is undefined). */
export function withQualifier<T>(name: string | undefined, fn: () => T): T {
  const previous = qualifier;
  qualifier = name;
  try {
    return fn();
  } finally {
    qualifier = previous;
  }
}

/** The class name to prefix a struct-derived type/value reference with, or undefined when inside
 * that class's own merged namespace (where bare names already resolve correctly). */
export function current(): string | undefined {
  return qualifier;
}

/** Prefixes `name` with the current qualifier, if any. */
export function qualify(name: string): string {
  return qualifier ? `${qualifier}.${name}` : name;
}

/**
 * Mapper function names (`tagsPropertyToTerraform`) are always emitted at the *top level* of the
 * file — never inside the namespace — regardless of whether the struct they serialize is itself
 * top-level or deeply nested. That makes them a second, orthogonal collision surface: two
 * *different* resources in the *same module* commonly both have (say) a `tags` attribute, so a
 * bare `tagsPropertyToTerraform` from each collides the moment the module's `index.ts` re-exports
 * both files with `export *`. `resourcePrefix()` is the current resource's own class name,
 * incorporated into every mapper function name (`ccVPCTagsPropertyToTerraform` vs.
 * `ccSubnetTagsPropertyToTerraform`) to keep them unique module-wide. Unlike the toggled
 * `qualifier` above, this is set once for the whole resource file and read unconditionally by
 * `StructAttributeTypeModel#toTerraformFunction`/`#toHclTerraformFunction` (models/attribute-type-
 * model.ts) and by `emitter/struct-emitter.ts`'s `emitStructMappers`, so a call to a mapper
 * function always agrees with how that function was actually named, in both the namespace body and
 * the top-level region.
 */
let resourcePrefixValue: string | undefined;

export function withResourcePrefix<T>(name: string, fn: () => T): T {
  const previous = resourcePrefixValue;
  resourcePrefixValue = name;
  try {
    return fn();
  } finally {
    resourcePrefixValue = previous;
  }
}

export function resourcePrefix(): string {
  if (resourcePrefixValue === undefined) {
    throw new Error("namespace-context: resourcePrefix() read outside withResourcePrefix()");
  }
  return resourcePrefixValue;
}
