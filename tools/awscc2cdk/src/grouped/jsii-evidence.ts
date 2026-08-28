/**
 * Evidence for "does this name break jsii" — plan §4 spike, CONTRACT.md "breaks-jsii must be
 * evidence-based". Two sources, both cited:
 *
 *  1. jsii's own per-language reserved-word lists, loaded from the installed `jsii` package at
 *     `lib/reserved-words.js` (not `require('jsii/lib/reserved-words')` directly: jsii's
 *     `package.json` `exports` map doesn't expose that subpath, so we resolve the package root via
 *     `require.resolve('jsii/package.json')` and read the file by its real path).
 *  2. generator-owned suffixes this codebase's own naming grammar reserves
 *     (`*Props`, `*Property*`, `*List`, `*Map`, `*OutputReference`, plan §3 / `src/naming.ts`
 *     `NAME_GRAMMAR`) and the public member names of `cdktn.TerraformResource` /
 *     `TerraformMetaArguments`, both declared in `node_modules/cdktn/lib/terraform-resource.d.ts`
 *     (a name that collides with one of these would shadow a real member on the emitted class,
 *     which is what "generator-owned" means here).
 */
import * as fs from "node:fs";
import * as path from "node:path";

interface ReservedWordsModule {
  isReservedName(name: string): string[] | undefined;
}

function loadReservedWords(): ReservedWordsModule {
  const jsiiPkgJson = require.resolve("jsii/package.json");
  const reservedWordsPath = path.join(path.dirname(jsiiPkgJson), "lib", "reserved-words.js");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(reservedWordsPath);
}

let cached: ReservedWordsModule | undefined;
function reservedWords(): ReservedWordsModule {
  if (!cached) cached = loadReservedWords();
  return cached;
}

/** jsii's own reserved-word lists (C#, Java, Python, Go) reject this identifier. */
export function isReservedByJsii(name: string): boolean {
  return reservedWords().isReservedName(name) !== undefined;
}

const GENERATOR_OWNED_SUFFIXES = ["Props", "Property", "PropertyOutputReference", "PropertyList", "PropertyMap", "List", "Map", "OutputReference"];

/**
 * Public member names of `cdktn.TerraformResource` and `TerraformMetaArguments`
 * (`node_modules/cdktn/lib/terraform-resource.d.ts`, `terraform-meta-arguments.d.ts`), read once.
 * A nested-type or property name that collides with one of these would shadow real behaviour on
 * the emitted class/props interface.
 */
function loadTerraformResourceMembers(): Set<string> {
  const members = new Set<string>();
  try {
    const cdktnPkgJson = require.resolve("cdktn/package.json");
    const libDir = path.join(path.dirname(cdktnPkgJson), "lib");
    for (const file of ["terraform-resource.d.ts"]) {
      const full = path.join(libDir, file);
      if (!fs.existsSync(full)) continue;
      const src = fs.readFileSync(full, "utf8");
      const re =
        /^\s*(?:readonly\s+|protected\s+|private\s+|static\s+|public\s+|get\s+|set\s+)*([a-zA-Z_$][A-Za-z0-9_$]*)\s*[?:(]/gm;
      for (const m of src.matchAll(re)) members.add(m[1]);
    }
  } catch {
    // best-effort: an empty set just means this evidence source contributes nothing
  }
  return members;
}

let cachedMembers: Set<string> | undefined;
function terraformResourceMembers(): Set<string> {
  if (!cachedMembers) cachedMembers = loadTerraformResourceMembers();
  return cachedMembers;
}

/**
 * `name` collides with a generator-owned suffix (would be mistaken for, or shadow, a
 * `*Props`/`*Property`/`*List`/`*Map`/`*OutputReference` construct) or with a real member of
 * `cdktn.TerraformResource`/`TerraformMetaArguments`.
 */
export function breaksGeneratorOwnedName(name: string): boolean {
  if (GENERATOR_OWNED_SUFFIXES.some((suffix) => name !== suffix && name.endsWith(suffix))) {
    return true;
  }
  const decapitalized = name.charAt(0).toLowerCase() + name.slice(1);
  return terraformResourceMembers().has(name) || terraformResourceMembers().has(decapitalized);
}

/** Combined evidence: jsii reserved word, or a generator-owned name collision. */
export function breaksJsii(name: string): boolean {
  return isReservedByJsii(name) || breaksGeneratorOwnedName(name);
}

/**
 * Iteration 3, finding 1 (CONTRACT.md "Iteration 3 — findings … 1. `breaks-jsii` is measured
 * post-suffix"): the two kinds of identifier this generator actually emits for a name candidate.
 * `resourceClass` -> `Cc<base>`; `propertyType` -> `<base>Property`.
 */
export type EmittedKind = "resourceClass" | "propertyType";

/** The identifier the generator actually emits for `base`, given its kind. */
export function emittedIdentifier(base: string, kind: EmittedKind): string {
  return kind === "resourceClass" ? `Cc${base}` : `${base}Property`;
}

/** A doubled property-type suffix (`FooProperty` -> `FooPropertyProperty`) is ambiguous; a base
 * merely ending in a bare `List`/`Map`/`OutputReference` is NOT included here — post-suffix that
 * becomes `...ListProperty` etc., which collides with nothing (this is exactly the iteration-2
 * misattribution finding 1 corrects). */
const DOUBLED_PROPERTY_SUFFIXES = ["PropertyOutputReference", "PropertyList", "PropertyMap", "Property", "Props"];

/**
 * Post-suffix breaks-jsii evidence: whether the identifier the generator actually emits for `base`
 * (see `emittedIdentifier`) is rejected, checked in the order CONTRACT.md finding 1 specifies:
 * jsii's own per-language reserved-word lists, then a `cdktn.TerraformResource`/
 * `TerraformMetaArguments` member collision, then (for a nested type only) a doubled
 * generator-owned suffix on the *base*. `isReservedByJsii` and `breaksGeneratorOwnedName` above are
 * unchanged — they answer "is this bare name legal"; this is the emitted-identifier entry point the
 * naming spike (`spike-naming.ts`) uses instead of `breaksJsii` for resource-class and
 * property-type candidates.
 */
export function breaksJsiiEmitted(base: string, kind: EmittedKind): boolean {
  const emitted = emittedIdentifier(base, kind);
  if (isReservedByJsii(emitted)) return true;
  const decapitalized = emitted.charAt(0).toLowerCase() + emitted.slice(1);
  if (terraformResourceMembers().has(emitted) || terraformResourceMembers().has(decapitalized)) return true;
  if (kind === "propertyType") {
    return DOUBLED_PROPERTY_SUFFIXES.some((suffix) => base !== suffix && base.endsWith(suffix));
  }
  return false;
}
