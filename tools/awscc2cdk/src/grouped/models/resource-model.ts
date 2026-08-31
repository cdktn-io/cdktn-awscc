// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Adapted from src/vendored/cdktn/models/resource-model.ts — see src/grouped/README.md.
// Trimmed to managed resources only (awscc's terraform schema has no provider/data-source/
// ephemeral-resource schemas to generate bindings for), and `className`/`configStructName` are
// public so grouped-generate.ts can rename them (Cc-prefixed CFN name instead of the vendored
// resource-parser's flat, provider-prefixed PascalCase) after parsing.
import { FQPN, parseFQPN, ProviderName } from "@cdktn/provider-schema";
import { Schema } from "@cdktn/commons";
import { AttributeModel } from "./attribute-model";
import { Struct, ConfigStruct } from "./struct";

interface ResourceModelOptions {
  terraformType: string;
  className: string;
  configStructName: string;
  attributes: AttributeModel[];
  structs: Struct[];
  fqpn: FQPN;
  schema: Schema;
  providerVersion?: string;
  /** cdktn-planning#1 (`GenerateGroupedOptions#emitCfnPropertyMap`): the resource's flat CFN
   * PascalCase-name -> terraform snake_case-key map, or `undefined` when the flag is off or
   * nothing matched — see `src/grouped/cfn-property-map.ts`. */
  cfnPropertyMap?: Record<string, string>;
  /** cdktn-planning#1 continued (same flag): the resource's CFN `Fn::GetAtt` attribute name ->
   * terraform attribute (or attribute-path) map, or `undefined` when the flag is off or nothing
   * matched — see `src/grouped/cfn-attribute-map.ts`. */
  cfnAttributeMap?: Record<string, string>;
}

export class ResourceModel {
  public className: string;
  public configStructName: string;
  public terraformType: string;
  public provider: ProviderName;
  public fqpn: FQPN;
  public providerVersion?: string;
  public attributes: AttributeModel[];
  public schema: Schema;
  public readonly structs: Struct[];
  public readonly cfnPropertyMap?: Record<string, string>;
  public readonly cfnAttributeMap?: Record<string, string>;

  constructor(options: ResourceModelOptions) {
    this.className = options.className;
    this.configStructName = options.configStructName;
    this.terraformType = options.terraformType;
    this.attributes = options.attributes;
    this.schema = options.schema;
    this.fqpn = options.fqpn;
    this.provider = parseFQPN(options.fqpn).name;
    this.providerVersion = options.providerVersion;
    this.structs = options.structs;
    this.cfnPropertyMap = options.cfnPropertyMap;
    this.cfnAttributeMap = options.cfnAttributeMap;
  }

  /** The resource's own Props struct — always index 0 conceptually, kept separate from the
   * nested-type structs so callers can address "everything but Props" without filtering. */
  public get configStruct(): ConfigStruct {
    return new ConfigStruct(this.configStructName, this.attributes);
  }

  public get synthesizableAttributes(): AttributeModel[] {
    return this.configStruct.assignableAttributes;
  }

  public get parentClassName(): string {
    return "TerraformResource";
  }

  public get terraformResourceType(): string {
    return this.terraformType;
  }

  public get linkToDocs(): string {
    const { hostname, namespace, name } = parseFQPN(this.fqpn);
    const version = this.providerVersion || "latest";
    const docName = this.terraformType.replace(new RegExp(`^${this.provider}_`, "i"), "");
    return `https://${hostname}/providers/${namespace}/${name}/${version}/docs/resources/${docName}`;
  }
}
