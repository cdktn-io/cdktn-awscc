// Portions Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// (upstream aws-cdk/tools/@aws-cdk/spec2cdk carries this license at the repo root — see its
// LICENSE/NOTICE — with no per-file header on lib/naming/conventions.ts itself, confirmed against
// the vendored copy at src/vendored/spec2cdk/naming/conventions.ts.)
/**
 * Adapted copy of the three plan §4 sanitizers from
 * `src/vendored/spec2cdk/naming/conventions.ts` (upstream spec2cdk `lib/naming/conventions.ts`).
 *
 * That vendored file also imports `@cdklabs/typewriter` (a value import, for `qualifiedName`),
 * which is not a dependency of this package and is excluded from the TypeScript build
 * (iteration-2 debt (a), see CONTRACT.md and tsconfig.json). These three functions have no such
 * dependency — they only use `camelcase`, a real runtime dependency of this package — so they are
 * copied here verbatim (logic unchanged) to be compiled and actually run, by `spike-naming.ts` and
 * `grouped-generate.ts`. Do not edit `src/vendored/**`; edit this file instead.
 */
import camelcase from "camelcase";

/**
 * Convert a CloudFormation name to a nice TypeScript name.
 *
 * We use a library to camelcase, and fix up some things that translate incorrectly.
 *
 * For example, the library breaks when pluralizing an abbreviation, such as "ProviderARNs" ->
 * "providerArNs". We currently recognize "ARNs", "MBs" and "AZs".
 */
export function propertyNameFromCloudFormation(name: string): string {
  if (name === "VPCs") {
    return "vpcs";
  }

  // Lightsail contains a property called "GetObject", which isn't a jsii-compliant name
  // as it conflicts with generated getters in other languages (e.g., Java, C#).
  if (name === "GetObject") {
    name = "objectAccess";
  }

  // GuardDuty contains a property named "Equals", which isn't a jsii-compliant name as it
  // conflicts with standard Java/C# object methods.
  if (name === "Equals") {
    name = "equalTo";
  }

  let ret = camelcase(name);

  const suffixes: { [key: string]: string } = { ARNs: "Arns", MBs: "MBs", AZs: "AZs" };

  for (const suffix of Object.keys(suffixes)) {
    if (name.endsWith(suffix)) {
      return ret.slice(0, -suffix.length) + suffixes[suffix];
    }
  }

  return ret;
}

const RESERVED_TYPE_NAMES_LIST = new Set(["Object", "Tag", "Math"]);
const RESERVED_FIELD_NAMES_LIST = new Set(["build"]);

/**
 * Not all characters are allowed in identifiers.
 * E.g. if it doesn't start with an allowed character, prefix with a '_'
 */
function makeIdentifier(s: string): string {
  s = s.replace(/([^a-zA-Z0-9_])/g, "");
  s = s.replace(/^([^a-zA-Z_])/, "_$1");
  return s;
}

/**
 * Sanitize a type name to be a valid TypeScript identifier. Converts kebab-case and other
 * invalid characters to PascalCase. Also has a list of identifiers we need to avoid because they
 * might cause problems in some languages.
 */
export function sanitizeTypeName(name: string): string {
  const id = makeIdentifier(camelcase(name, { pascalCase: true }));
  return RESERVED_TYPE_NAMES_LIST.has(id) ? `${id}Type` : id;
}

export function santitizeFieldName(name: string): string {
  return RESERVED_FIELD_NAMES_LIST.has(name) ? `${name}Property` : name;
}
