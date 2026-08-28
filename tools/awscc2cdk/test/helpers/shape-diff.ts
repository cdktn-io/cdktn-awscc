/**
 * Shape parity vs aws-cdk-lib (plan §7 layer 4).
 *
 * Reads the L1 shape of a `Cfn*` class out of `aws-cdk-lib/<module>/lib/<svc>.generated.d.ts` and
 * the same shape out of one of our emitted `.ts` files, and diffs them after `Cfn` -> `Cc`.
 * Only *names* are compared: class name, `Props` member names, nested `*Property` interface names
 * and their member names. Types are deliberately not compared (cdktn emits `IResolvable`/token
 * unions of its own; that gap is plan §8 work).
 *
 * This file is read-only for the implementer.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";
import { awsCdkLibDir } from "./paths";

export interface ResourceShape {
  /** e.g. `CfnVPC` / `CcVPC` */
  readonly className: string;
  /** e.g. `CfnVPCProps` / `CcVPCProps`; undefined when the file has no props interface */
  readonly propsName?: string;
  /** sorted member names of the props interface */
  readonly propsMembers: string[];
  /** nested `*Property` interface name -> sorted member names */
  readonly propertyTypes: Record<string, string[]>;
  /** file the shape was read from */
  readonly file: string;
}

export function cfnToCc(name: string): string {
  return name.replace(/^Cfn/, "Cc");
}

function parse(file: string): ts.SourceFile {
  return ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.ES2022, true);
}

function memberNames(members: ts.NodeArray<ts.TypeElement>): string[] {
  return members
    .filter(ts.isPropertySignature)
    .map((m) => (ts.isIdentifier(m.name) || ts.isStringLiteral(m.name) ? m.name.text : undefined))
    .filter((n): n is string => !!n)
    .sort();
}

/** Extracts the shape of `className` from an already-parsed source file, if present. */
export function shapeFromSourceFile(sf: ts.SourceFile, className: string): ResourceShape | undefined {
  let found = false;
  let propsName: string | undefined;
  let propsMembers: string[] = [];
  const propertyTypes: Record<string, string[]> = {};

  for (const st of sf.statements) {
    if (ts.isClassDeclaration(st) && st.name?.text === className) found = true;
    if (ts.isInterfaceDeclaration(st) && st.name.text === `${className}Props`) {
      propsName = st.name.text;
      propsMembers = memberNames(st.members);
    }
    if (ts.isModuleDeclaration(st) && ts.isIdentifier(st.name) && st.name.text === className && st.body && ts.isModuleBlock(st.body)) {
      for (const inner of st.body.statements) {
        if (ts.isInterfaceDeclaration(inner) && inner.name.text.endsWith("Property")) {
          propertyTypes[inner.name.text] = memberNames(inner.members);
        }
      }
    }
  }

  if (!found) return undefined;
  return { className, propsName, propsMembers, propertyTypes, file: sf.fileName };
}

/** aws-cdk-lib generated files that are not the L1 resource file. */
const NOT_L1 = /-(canned-metrics|augmentations|grants)\.generated\.d\.ts$/;

export function cdkGeneratedFiles(moduleDir: string): string[] {
  const libDir = path.join(awsCdkLibDir, moduleDir, "lib");
  if (!fs.existsSync(libDir)) return [];
  return fs
    .readdirSync(libDir)
    .filter((f) => f.endsWith(".generated.d.ts") && !NOT_L1.test(f))
    .sort()
    .map((f) => path.join(libDir, f));
}

/** The aws-cdk-lib shape of `CfnXxx` inside submodule `moduleDir` (e.g. 'aws-ec2', 'CfnVPC'). */
export function readCdkShape(moduleDir: string, cfnClassName: string): ResourceShape | undefined {
  for (const file of cdkGeneratedFiles(moduleDir)) {
    const shape = shapeFromSourceFile(parse(file), cfnClassName);
    if (shape) return shape;
  }
  return undefined;
}

/** Our shape of `CcXxx`, searched across every `.ts` in an emitted module directory. */
export function readOurShape(moduleOutDir: string, ccClassName: string): ResourceShape | undefined {
  if (!fs.existsSync(moduleOutDir)) return undefined;
  for (const f of fs.readdirSync(moduleOutDir).sort()) {
    if (!f.endsWith(".ts")) continue;
    const shape = shapeFromSourceFile(parse(path.join(moduleOutDir, f)), ccClassName);
    if (shape) return shape;
  }
  return undefined;
}

export interface SetDiff {
  readonly cdkOnly: string[];
  readonly ourOnly: string[];
  readonly common: string[];
}

function setDiff(cdk: string[], ours: string[]): SetDiff {
  const a = new Set(cdk);
  const b = new Set(ours);
  return {
    cdkOnly: [...a].filter((x) => !b.has(x)).sort(),
    ourOnly: [...b].filter((x) => !a.has(x)).sort(),
    common: [...a].filter((x) => b.has(x)).sort(),
  };
}

export interface ShapeDiffEntry {
  readonly cfnClass: string;
  readonly ccClass: string;
  /** true when the class name, the props member set and the property-type name set all match */
  readonly identical: boolean;
  /** our class exists under the `Cfn` -> `Cc` renamed name */
  readonly classMatch: boolean;
  readonly propsMembers: SetDiff;
  readonly propertyTypes: SetDiff;
  /** informational only: per shared property type, member-name differences (never fails a test) */
  readonly propertyTypeMembers: Record<string, SetDiff>;
}

export function diffShapes(cdk: ResourceShape, ours: ResourceShape | undefined): ShapeDiffEntry {
  const ccClass = cfnToCc(cdk.className);
  const props = setDiff(cdk.propsMembers, ours?.propsMembers ?? []);
  const types = setDiff(Object.keys(cdk.propertyTypes), Object.keys(ours?.propertyTypes ?? {}));
  const perType: Record<string, SetDiff> = {};
  for (const t of types.common) {
    perType[t] = setDiff(cdk.propertyTypes[t], ours!.propertyTypes[t]);
  }
  const classMatch = ours?.className === ccClass;
  return {
    cfnClass: cdk.className,
    ccClass,
    classMatch,
    identical:
      classMatch &&
      props.cdkOnly.length === 0 &&
      props.ourOnly.length === 0 &&
      types.cdkOnly.length === 0 &&
      types.ourOnly.length === 0,
    propsMembers: props,
    propertyTypes: types,
    propertyTypeMembers: perType,
  };
}
