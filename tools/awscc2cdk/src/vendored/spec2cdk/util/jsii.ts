// Portions Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Vendored from aws/aws-cdk tools/@aws-cdk/spec2cdk/lib/util/jsii.ts (Apache-2.0),
// commit a9e6639df5ed1cbed0f247d3d18bc3db1eaf5ee1 — see ../../VENDORED.md. Upstream carries the
// Apache-2.0 license/NOTICE at the spec2cdk package root (mirrored alongside naming/conventions.ts
// as LICENSE), not as a per-file header.
// Modified by cdktn-io: the import below was `../naming` (upstream's `naming/index.ts` barrel,
// re-exporting conventions.ts + doclink.ts); only conventions.ts is vendored here, so this file
// imports it directly as `../naming/conventions`. `namespaceToModuleDefinition` only ever used
// `naming.modulePartsFromNamespace`, which lives in conventions.ts, so this is not a behavioural
// change (see ../../VENDORED.md).
import type { ModuleDefinition } from '@aws-cdk/pkglint';
import * as naming from '../naming/conventions';

export interface PackageBaseNames {
  javascript: string;
  dotnet: string;
  java: string;
  python: string;
}

export const AWS_CDK_LIB_BASE_NAMES: PackageBaseNames = {
  javascript: 'aws-cdk-lib',
  dotnet: 'Amazon.CDK',
  java: 'software.amazon.awscdk',
  python: 'aws-cdk',
};

/**
 * Creates a module definition for the given namespace
 *
 * @param namespace - the namespace to create a module definition for
 * @param bases - provide different package base names and overwrite jsii targets
 * @returns the module definition
 */
export function namespaceToModuleDefinition(namespace: string, bases: PackageBaseNames = AWS_CDK_LIB_BASE_NAMES): ModuleDefinition {
  // [aws-s3, AWS, S3]
  const { moduleName, moduleFamily, moduleBaseName } = naming.modulePartsFromNamespace(namespace);
  const submoduleName = moduleName.replace('-', '_'); // aws_s3

  const lowcaseModuleName = moduleBaseName.toLocaleLowerCase(); // s3
  const packageName = `${bases.javascript}/${moduleName}`; // aws-cdk-lib/aws-s3

  // dotnet names
  const dotnetPackage = `${bases.dotnet}.${moduleFamily}.${moduleBaseName}`; // Amazon.CDK.AWS.S3

  // java names
  const javaGroupId = bases.java;
  const javaPackage =
    moduleFamily === 'AWS'
      ? `${bases.java}.services.${lowcaseModuleName}`
      : `${bases.java}.${moduleFamily.toLocaleLowerCase()}.${lowcaseModuleName}`;
  const javaArtifactId =
    moduleFamily === 'AWS' ? lowcaseModuleName : `${moduleFamily.toLocaleLowerCase()}-${lowcaseModuleName}`;

  // python names
  const pythonDistName = `${bases.python}.${moduleName}`; // aws-cdk.aws-s3
  const pythonModuleName = pythonDistName.replace(/-/g, '_'); // aws_cdk.aws_s3

  return {
    namespace,
    moduleName,
    submoduleName,
    moduleFamily,
    moduleBaseName,
    packageName,
    dotnetPackage,
    javaGroupId,
    javaPackage,
    javaArtifactId,
    pythonDistName,
    pythonModuleName,
  };
}
