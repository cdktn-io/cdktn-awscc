// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Adapted from src/vendored/cdktn/emitter/resource-emitter.ts — see src/grouped/README.md.
// Trimmed to managed resources only: no provider/data-source/ephemeral-resource branches, no
// provider-defined-functions getter (ResourceModel dropped both, see models/resource-model.ts).
//
// Everything emitted here is TOP LEVEL (outside the resource's merged `namespace`) — the caller
// (grouped-generate.ts) wraps this whole call in `withQualifier(resource.className, ...)` so any
// nested-struct type this attribute code touches (via attribute-type-model.ts) is referenced as
// `<ClassName>.<StructName>`, not the bare name that only resolves inside the namespace itself.
import { CodeMaker } from "codemaker";
import { ResourceModel } from "../models";
import { AttributesEmitter } from "./attributes-emitter";
import { sanitizedComment } from "../sanitized-comments";

export class ResourceEmitter {
  attributesEmitter: AttributesEmitter;

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code);
  }

  public emit(resource: ResourceModel) {
    this.code.line();

    const comment = sanitizedComment(this.code);
    comment.line(`Represents a {@link ${resource.linkToDocs} ${resource.terraformResourceType}}`);
    comment.end();
    this.code.openBlock(`export class ${resource.className} extends cdktn.${resource.parentClassName}`);

    this.emitHeader("STATIC PROPERTIES");
    this.emitStaticProperties(resource);

    this.emitHeader("STATIC Methods");
    this.emitStaticMethods(resource);

    this.emitHeader("INITIALIZER");
    this.emitInitializer(resource);

    this.emitHeader("ATTRIBUTES");
    this.emitResourceAttributes(resource);

    this.emitHeader("SYNTHESIS");
    this.emitResourceSynthesis(resource);
    this.emitHclResourceSynthesis(resource);

    this.code.closeBlock(); // construct
  }

  private emitHeader(title: string) {
    this.code.line();
    this.code.line("// " + "=".repeat(title.length));
    this.code.line(`// ${title}`);
    this.code.line("// " + "=".repeat(title.length));
  }

  private emitStaticProperties(resource: ResourceModel) {
    this.code.line(`public static readonly tfResourceType = "${resource.terraformResourceType}";`);
    this.emitCfnPropertyNameMap(resource);
    this.emitCfnAttributeNameMap(resource);
  }

  /**
   * cdktn-planning#1 (`GenerateGroupedOptions#emitCfnPropertyMap`, default off): a static,
   * jsii-visible CFN PascalCase-name -> terraform snake_case-key map, for a Phase-2 bridge's
   * `TerraformIntrinsicResolver` to translate PascalCase property-bag literals embedded in
   * unmodified aws-cdk-lib intrinsic calls. A `public static readonly` field survives jsii the way
   * the exported nested-struct `*ToTerraform` functions do not (jsii's assembler only visits
   * class/interface/enum declarations — a top-level `export function`/`export const` is invisible
   * to every non-TS/JS target language, i.e. to jsii-pacmak's Python/Java/.NET/Go output). Emitted
   * only when the map has at least one entry — an unmatched awscc resource, or the flag being off,
   * both leave the resource's emitted text byte-identical to before this feature existed. Keys are
   * sorted so the emitted object literal (and therefore the whole file) stays deterministic and
   * order-independent, matching every other emitter in this generator.
   */
  private emitCfnPropertyNameMap(resource: ResourceModel) {
    const map = resource.cfnPropertyMap;
    if (!map) return;
    const keys = Object.keys(map).sort();
    if (keys.length === 0) return;

    const comment = sanitizedComment(this.code);
    comment.line(`CFN PascalCase property name -> terraform attribute name, for this resource's whole`);
    comment.line(`property tree (top level and nested structs merged). See cdktn-planning#1.`);
    comment.end();
    this.code.open(`public static readonly CFN_PROPERTY_NAME_MAP: { [cfnName: string]: string } = {`);
    for (const key of keys) {
      this.code.line(`${JSON.stringify(key)}: ${JSON.stringify(map[key])},`);
    }
    this.code.close(`};`);
  }

  /**
   * cdktn-planning#1 continued (`GenerateGroupedOptions#emitCfnPropertyMap`, default off — same
   * flag as `CFN_PROPERTY_NAME_MAP` above): a static, jsii-visible CFN `Fn::GetAtt` attribute name
   * -> terraform attribute map, for RFC 002's reference-resolver seam to translate a literal
   * `getAtt(...)` call name on an unmodified aws-cdk-lib `CfnResource` into the awscc terraform
   * attribute that carries the same value.
   *
   * A CFN attribute name may itself contain dots (e.g. `CertificateAuthority.Data` — CFN's own
   * struct-nesting notation for `Fn::GetAtt` names, keyed here verbatim, dots and all). Most
   * values are a bare terraform attribute name; some are a dotted terraform attribute *path*
   * (e.g. `vpc_encryption_control.vpc_id`) for a CFN attribute only reachable by walking the
   * resource's nested terraform attribute tree — terraform attribute names never themselves
   * contain a dot, so a consumer distinguishes the two only by whether it needs to `.split('.')`
   * and walk, exactly the way `cfn-recovery.ts` walks a terraform path down the CFN side. See
   * `src/grouped/cfn-attribute-map.ts` for the full matching rules.
   *
   * Emitted only when the map has at least one entry — an unmatched awscc resource, a resource
   * with no `Fn::GetAtt` attributes, or the flag being off all leave the resource's emitted text
   * byte-identical to before this feature existed. Keys are sorted for the same reason
   * `CFN_PROPERTY_NAME_MAP`'s are: a deterministic, order-independent emitted object literal.
   */
  private emitCfnAttributeNameMap(resource: ResourceModel) {
    const map = resource.cfnAttributeMap;
    if (!map) return;
    const keys = Object.keys(map).sort();
    if (keys.length === 0) return;

    const comment = sanitizedComment(this.code);
    comment.line(`CFN Fn::GetAtt attribute name -> terraform attribute (or, for a dotted value,`);
    comment.line(`terraform attribute *path* — split on '.' and walk it) for this resource. See`);
    comment.line(`cdktn-planning#1 / RFC 002.`);
    comment.end();
    this.code.open(`public static readonly CFN_ATTRIBUTE_NAME_MAP: { [cfnAttributeName: string]: string } = {`);
    for (const key of keys) {
      this.code.line(`${JSON.stringify(key)}: ${JSON.stringify(map[key])},`);
    }
    this.code.close(`};`);
  }

  private emitStaticMethods(resource: ResourceModel) {
    const comment = sanitizedComment(this.code);
    comment.line(
      `Generates CDKTN code for importing a ${resource.className} resource upon running "cdktn plan <stack-name>"`,
    );
    comment.line(`@param scope The scope in which to define this construct`);
    comment.line(
      `@param importToId The construct id used in the generated config for the ${resource.className} to import`,
    );
    comment.line(
      `@param importFromId The id of the existing ${resource.className} that should be imported. Refer to the {@link ${resource.linkToDocs}#import import section} in the documentation of this resource for the id to use`,
    );
    comment.line(
      `@param provider? Optional instance of the provider where the ${resource.className} to import is found`,
    );
    comment.end();
    this.code.line(
      `public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "${resource.terraformResourceType}", importId: importFromId, provider });
      }`,
    );
  }

  private emitHclResourceSynthesis(resource: ResourceModel) {
    this.code.line();
    this.code.openBlock(`protected synthesizeHclAttributes(): { [name: string]: any }`);
    this.code.open(`const attrs = {`);

    for (const att of resource.synthesizableAttributes) {
      this.attributesEmitter.emitToHclTerraform(att, false, true);
    }

    this.code.close(`};`);

    if (resource.synthesizableAttributes.length > 0) {
      this.code.line();
      this.code.line(`// remove undefined attributes`);
      this.code.line(
        `return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))`,
      );
    } else {
      this.code.line(`return attrs;`);
    }

    this.code.closeBlock();
  }

  private emitResourceSynthesis(resource: ResourceModel) {
    this.code.line();
    this.code.openBlock(`protected synthesizeAttributes(): { [name: string]: any }`);
    this.code.open(`return {`);

    for (const att of resource.synthesizableAttributes) {
      this.attributesEmitter.emitToTerraform(att, false, true);
    }

    this.code.close(`};`);
    this.code.closeBlock();
  }

  private emitResourceAttributes(resource: ResourceModel) {
    for (const att of resource.attributes) {
      this.attributesEmitter.emit(
        att,
        this.attributesEmitter.needsResetEscape(att, resource.attributes),
        this.attributesEmitter.needsInputEscape(att, resource.attributes),
      );
    }
  }

  private emitInitializer(resource: ResourceModel) {
    this.code.line();
    const comment = sanitizedComment(this.code);
    comment.line(`Create a new {@link ${resource.linkToDocs} ${resource.terraformResourceType}} Resource`);
    comment.line(``);
    comment.line(`@param scope The scope in which to define this construct`);
    comment.line(`@param id The scoped construct ID. Must be unique amongst siblings in the same scope`);
    comment.line(`@param options ${resource.configStruct.attributeType}`);
    comment.end();
    this.code.openBlock(
      `public constructor(scope: Construct, id: string, config: ${resource.configStruct.attributeType})`,
    );

    this.emitResourceSuper(resource);

    for (const att of resource.configStruct.assignableAttributes) {
      if (att.setterType._type === "stored_class") {
        this.code.line(`this.${att.storageName}.internalValue = config.${att.name};`);
      } else {
        this.code.line(`this.${att.storageName} = config.${att.name};`);
      }
    }

    this.code.closeBlock();
  }

  private emitResourceSuper(resource: ResourceModel) {
    this.code.open(`super(scope, id, {`);
    this.code.line(`terraformResourceType: '${resource.terraformResourceType}',`);
    this.emitTerraformGeneratorMetadata(resource);
    this.code.line(`provider: config.provider,`);
    this.code.line(`dependsOn: config.dependsOn,`);
    this.code.line(`count: config.count,`);
    this.code.line(`lifecycle: config.lifecycle,`);
    this.code.line(`provisioners: config.provisioners,`);
    this.code.line(`connection: config.connection,`);
    this.code.line(`forEach: config.forEach`);
    this.code.close(`});`);
  }

  private emitTerraformGeneratorMetadata(resource: ResourceModel) {
    this.code.open(`terraformGeneratorMetadata: {`);
    this.code.line(
      `providerName: '${resource.provider}'${resource.providerVersion ? "," : ""}`,
    );
    if (resource.providerVersion) {
      this.code.line(`providerVersion: '${resource.providerVersion}'`);
    }
    this.code.close(`},`);
  }
}
