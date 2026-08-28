/**
 * Normalisation used by the golden test. Kept deliberately narrow: it removes only the
 * differences that cannot exist in generator output (the repo licence header) or that depend on
 * the provider version / ConstructsMakerTarget, which `generateLegacy` does not take.
 * See CONTRACT.md, "Step 1".
 */
export function normalizeGenerated(source: string): string {
  let out = source;
  // 1. leading licence block comment the provider repo prepends
  out = out.replace(/^\/\*\*(?:(?!\*\/)[\s\S])*\*\/\n\n?/, "");
  // 2. providerVersionConstraint comes from a ConstructsMakerTarget; drop the field
  out = out.replace(
    /providerVersion: '[^']*',\n\s*providerVersionConstraint: '[^']*'/g,
    "providerVersion: '<VERSION>'",
  );
  // 3. provider version in the metadata field and in registry doc links
  out = out.replace(/providerVersion: '[^']*'/g, "providerVersion: '<VERSION>'");
  out = out.replace(
    /(providers\/hashicorp\/awscc\/)[^/]+(\/docs)/g,
    "$1<VERSION>$2",
  );
  return out;
}

/** Every `export <kind> <Name>` identifier, sorted and de-duplicated. */
export function exportedIdentifiers(source: string): string[] {
  const re =
    /^export\s+(?:declare\s+)?(?:abstract\s+)?(?:class|interface|namespace|enum|type|function|const|let|var)\s+([A-Za-z0-9_$]+)/gm;
  const names = new Set<string>();
  for (const m of source.matchAll(re)) names.add(m[1]);
  return [...names].sort();
}

/** The body of `export class <name> extends …` up to the end of the file. */
export function classBody(source: string, name: string): string {
  const idx = source.indexOf(`export class ${name} `);
  if (idx < 0) throw new Error(`class ${name} not found in generated source`);
  return source.slice(idx);
}
