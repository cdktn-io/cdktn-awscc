// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Adapted from src/vendored/cdktn/resource-parser.ts — see src/grouped/README.md.
//
// Two structural differences from the vendored `Parser`/`ResourceParser`:
//
//  1. No cross-resource dedup state (`classNames`/`usedBaseNames`). The vendored generator emits
//     every resource into one flat, shared TypeScript scope, so struct names must be unique across
//     the *whole provider*. The grouped generator gives every resource's structs their own
//     `namespace`, so nothing needs to be unique outside that one resource — `parseResourceAttributes`
//     is called fresh per resource with no shared state, which is also what makes the result
//     independent of resource processing order (the determinism the structure test checks).
//  2. Every struct gets a temporary name (an incrementing counter — genuinely arbitrary, since
//     every caller immediately renames every struct via `naming.ts#propertyTypeNamesForResource`
//     before emitting) and its `path`: the terraform attribute path from the resource root, e.g.
//     `['lifecycle_configuration', 'rules']`. That path is what CFN-definition-name recovery
//     (`cfn-recovery.ts`) and the final naming pass join on.
import { toCamelCase } from "codemaker";
import {
  Attribute,
  AttributeNestedType,
  AttributeType,
  Block,
  BlockType,
  isAttributeNestedType,
  isNestedTypeAttribute,
  Schema,
} from "@cdktn/commons";
import {
  AttributeModel,
  AttributeTypeModel,
  ListAttributeTypeModel,
  MapAttributeTypeModel,
  Scope,
  SetAttributeTypeModel,
  SimpleAttributeTypeModel,
  SkippedAttributeTypeModel,
  Struct,
  StructAttributeTypeModel,
} from "./models";
import { detectAttributeLoops } from "./loop-detection";
import { shouldSkipAttribute } from "../vendored/cdktn/skipped-attributes";

/**
 * Remove attributes that may conflict after being snake cased (see the vendored original for the
 * motivating example — a provider with two attributes that camelCase to the same name).
 */
function deduplicateAttributesWithSameName(attributes: AttributeModel[]): AttributeModel[] {
  return attributes.filter((attr, idx) => {
    const hasOtherWithSameName = attributes
      .slice(idx + 1)
      .some((other) => other.name === attr.name && other !== attr);
    return !hasOtherWithSameName;
  });
}

export interface ParsedResource {
  readonly attributes: AttributeModel[];
  /** every nested-type struct reached from the resource root, each with a temporary name and its
   * real `path` — callers rename every one of these before emitting. */
  readonly structs: Struct[];
}

class Parser {
  private structs = new Array<Struct>();
  private structCounter = 0;

  private nextTempName(): string {
    return `TempStruct${this.structCounter++}`;
  }

  public parse(schema: Schema): ParsedResource {
    const rootScope = new Scope({ name: "resource", isProvider: false });
    let attributes = this.renderAttributesForBlock(rootScope, schema.block, []);

    // Introduce recursion for genuinely self-referential CFN structures (e.g. a policy document
    // that can nest itself). Rare in awscc, but cheap to guard against a stack overflow from.
    function getStructAttribute(attrs: AttributeModel[], path: string): AttributeModel {
      const [first, ...rest] = path.split(".");
      const attribute = attrs.find((att) => att.terraformName === first);
      if (!attribute) throw new Error(`Expected to find recursive attribute at path: ${path}`);
      if (!attribute.type.struct) {
        throw new Error(`Expected to find struct type attribute at path: ${path} but got ${attribute.type.storedClassType}`);
      }
      if (rest.length === 0) return attribute;
      return getStructAttribute(attribute.type.struct.attributes, rest.join("."));
    }

    const recursiveAttributePaths = detectAttributeLoops(attributes);
    Object.entries(recursiveAttributePaths).forEach(([attributePath, structPath]) => {
      const recursionTargetStructAttribute = getStructAttribute(attributes, structPath);
      const parts = attributePath.split(".");
      const attributeName = parts.pop();
      const parentAttribute = getStructAttribute(attributes, parts.join("."));
      const indexToReplace = parentAttribute.type.struct!.attributes.findIndex(
        (att) => att.terraformName === attributeName,
      );
      if (indexToReplace === -1) throw new Error(`Can't find attribute at path ${attributePath}`);
      const previousAttribute = parentAttribute.type.struct!.attributes[indexToReplace];
      parentAttribute.type.struct!.attributes[indexToReplace] = recursionTargetStructAttribute;

      const disposeStructs = (attr: AttributeModel) => {
        if (attr.type.struct) {
          attr.type.struct.attributes.forEach(disposeStructs);
          this.structs = this.structs.filter((s) => s !== attr.type.struct);
        }
      };
      disposeStructs(previousAttribute);
    });

    attributes = deduplicateAttributesWithSameName(attributes);

    return { attributes, structs: this.structs };
  }

  private renderAttributeType(
    scope: Scope[],
    path: readonly string[],
    attributeType: AttributeType | AttributeNestedType,
    parentKind?: string,
  ): AttributeTypeModel {
    const parent = scope[scope.length - 1];
    if (shouldSkipAttribute(parent.baseName)) {
      return new MapAttributeTypeModel(new SimpleAttributeTypeModel("any"));
    }

    if (typeof attributeType === "string") {
      switch (attributeType) {
        case "bool":
          return new SimpleAttributeTypeModel("boolean");
        case "string":
          return new SimpleAttributeTypeModel("string");
        case "number":
          return new SimpleAttributeTypeModel("number");
        case "dynamic":
          return new MapAttributeTypeModel(new SimpleAttributeTypeModel("any"));
        default:
          throw new Error(`invalid primitive type ${attributeType}`);
      }
    }

    if (Array.isArray(attributeType)) {
      if (attributeType.length !== 2) throw new Error(`unexpected array`);
      const [kind, type] = attributeType;

      if (kind === "set" || kind === "list") {
        const elementType = this.renderAttributeType(scope, path, type as AttributeType, [kind, parentKind].join(""));
        return kind === "list"
          ? new ListAttributeTypeModel(elementType, false, false)
          : new SetAttributeTypeModel(elementType, false, false);
      }

      if (kind === "map") {
        const valueType = this.renderAttributeType(scope, path, type as AttributeType, [kind, parentKind].join(""));
        return new MapAttributeTypeModel(valueType);
      }

      if (kind === "object") {
        const objAttributes = type as { [name: string]: AttributeType };
        const attributes: { [name: string]: Attribute } = {};
        for (const [name, t] of Object.entries(objAttributes)) attributes[name] = { type: t };
        const struct = this.addAnonymousStruct(scope, path, attributes, parentKind ?? kind);
        return new StructAttributeTypeModel(struct);
      }
    }

    if (isAttributeNestedType(attributeType)) {
      let struct: Struct;
      switch (attributeType.nesting_mode) {
        case "list":
          struct = this.addAnonymousStruct(scope, path, attributeType.attributes, attributeType.nesting_mode);
          return new ListAttributeTypeModel(new StructAttributeTypeModel(struct), false, false);
        case "set":
          struct = this.addAnonymousStruct(scope, path, attributeType.attributes, attributeType.nesting_mode);
          return new SetAttributeTypeModel(new StructAttributeTypeModel(struct), false, false);
        case "map":
          struct = this.addAnonymousStruct(scope, path, attributeType.attributes, attributeType.nesting_mode);
          return new MapAttributeTypeModel(new StructAttributeTypeModel(struct));
        case "single":
          struct = this.addAnonymousStruct(scope, path, attributeType.attributes, attributeType.nesting_mode);
          return new StructAttributeTypeModel(struct);
        default:
          throw new Error(
            `nested_type with nesting_mode "${attributeType.nesting_mode}" not supported (attribute scope: ${scope.map((s) => s.fullName).join(",")}`,
          );
      }
    }

    throw new Error(`unknown type ${JSON.stringify(attributeType)}`);
  }

  public renderAttributesForBlock(parentType: Scope, block: Block, path: readonly string[]): AttributeModel[] {
    const attributes = new Array<AttributeModel>();

    for (const [terraformAttributeName, att] of Object.entries(block.attributes || {})) {
      let type: AttributeTypeModel;
      let forcePlainGetterType = false;
      const childPath = [...path, terraformAttributeName];
      if (shouldSkipAttribute(parentType.fullName(terraformAttributeName))) {
        type = new SkippedAttributeTypeModel();
        forcePlainGetterType = true;
      } else {
        type = this.renderAttributeType(
          [
            parentType,
            new Scope({
              name: terraformAttributeName,
              parent: parentType,
              isComputed: !!att.computed,
              isOptional: !!att.optional,
              isRequired: !!att.required,
              isNestedType: isNestedTypeAttribute(att),
              isProvider: false,
            }),
          ],
          childPath,
          att.type || att.nested_type,
        );
      }

      const name = toCamelCase(terraformAttributeName);
      attributes.push(
        new AttributeModel({
          terraformFullName: parentType.fullName(terraformAttributeName),
          description: att.description,
          name,
          storageName: `_${name}`,
          computed: !!att.computed,
          optional: !!att.optional,
          terraformName: terraformAttributeName,
          type,
          provider: false,
          required: !!att.required,
          forcePlainGetterType,
          isWriteOnly: !!att.write_only,
        }),
      );
    }

    for (const [blockTypeName, blockType] of Object.entries(block.block_types || {})) {
      const childPath = [...path, blockTypeName];
      if (shouldSkipAttribute(parentType.fullName(blockTypeName))) {
        const name = toCamelCase(blockTypeName);
        attributes.push(
          new AttributeModel({
            name,
            terraformName: blockTypeName,
            terraformFullName: parentType.fullName(blockTypeName),
            type: new SkippedAttributeTypeModel(),
            description: `${blockTypeName} block`,
            storageName: `_${name}`,
            optional: true,
            computed: false,
            provider: false,
            required: false,
          }),
        );
        continue;
      }

      let blockAttributes = this.renderAttributesForBlock(
        new Scope({
          name: `${parentType.name}_${blockTypeName}`,
          parent: parentType,
          inBlockType: true,
          isProvider: false,
        }),
        blockType.block,
        childPath,
      );
      blockAttributes = deduplicateAttributesWithSameName(blockAttributes);

      const blockStruct = this.addStruct(
        [parentType, new Scope({ name: blockTypeName, parent: parentType, isProvider: false })],
        childPath,
        blockAttributes,
        blockType.nesting_mode,
        (blockType.nesting_mode === "list" || blockType.nesting_mode === "set") && blockType.max_items === 1,
      );

      attributes.push(this.attributeForBlockType(blockTypeName, blockType, blockStruct, parentType));
    }

    return attributes;
  }

  private attributeForBlockType(
    terraformName: string,
    blockType: BlockType,
    struct: Struct,
    parent: Scope,
  ): AttributeModel {
    const name = toCamelCase(terraformName);
    let optional: boolean;
    let required: boolean;

    switch (blockType.nesting_mode) {
      case "single": {
        optional = !struct.attributes.some((x) => !x.optional);
        required = !struct.attributes.some((x) => !x.required);
        if (!optional && !required) {
          optional = struct.attributes.some((x) => x.optional || x.required);
        }
        return new AttributeModel({
          name,
          terraformName,
          terraformFullName: parent.fullName(terraformName),
          type: new StructAttributeTypeModel(struct),
          description: `${terraformName} block`,
          storageName: `_${name}`,
          optional,
          computed: false,
          provider: false,
          required,
        });
      }
      case "map":
        return new AttributeModel({
          name,
          terraformName,
          terraformFullName: parent.fullName(terraformName),
          type: new MapAttributeTypeModel(new StructAttributeTypeModel(struct)),
          description: `${terraformName} block`,
          storageName: `_${name}`,
          optional: false,
          computed: false,
          provider: false,
          required: false,
        });
      case "list":
      case "set":
        optional = blockType.min_items === undefined ? true : blockType.min_items < 1;
        required = blockType.min_items === undefined ? false : blockType.min_items > 0;
        return new AttributeModel({
          name,
          terraformName,
          terraformFullName: parent.fullName(terraformName),
          type:
            blockType.nesting_mode === "list"
              ? new ListAttributeTypeModel(new StructAttributeTypeModel(struct), blockType.max_items === 1, true)
              : new SetAttributeTypeModel(new StructAttributeTypeModel(struct), blockType.max_items === 1, true),
          description: `${terraformName} block`,
          storageName: `_${name}`,
          optional,
          computed: false,
          provider: false,
          required,
        });
      default:
        throw new Error(`nesting_mode "${(blockType as BlockType).nesting_mode}" not supported for block_types`);
    }
  }

  private addAnonymousStruct(
    scope: Scope[],
    path: readonly string[],
    attrs: { [name: string]: Attribute } | undefined,
    nesting_mode: string,
  ): Struct {
    let attributes = new Array<AttributeModel>();
    const parent = scope[scope.length - 1];
    if (attrs) {
      for (const [terraformName, att] of Object.entries(attrs)) {
        const computed = !!parent.isComputed || (parent.isNestedType && !!att.computed);
        const optional = parent.isNestedType ? !!att.optional : !!parent.isOptional;
        const required = parent.isNestedType ? !!att.required : !!parent.isRequired;
        const name = toCamelCase(terraformName);
        const type = this.renderAttributeType(
          [
            ...scope,
            new Scope({
              name: terraformName,
              parent,
              isComputed: computed,
              isOptional: optional,
              isRequired: required,
              isNestedType: parent.isNestedType,
              isProvider: false,
            }),
          ],
          [...path, terraformName],
          att.type || att.nested_type,
        );
        attributes.push(
          new AttributeModel({
            name,
            storageName: `_${name}`,
            computed,
            description: att.description,
            optional,
            terraformName,
            terraformFullName: parent.fullName(terraformName),
            type,
            provider: false,
            required,
            isWriteOnly: !!att.write_only,
          }),
        );
      }
    }
    attributes = deduplicateAttributesWithSameName(attributes);
    return this.addStruct(scope, path, attributes, nesting_mode);
  }

  private addStruct(
    _scope: Scope[],
    path: readonly string[],
    attributes: AttributeModel[],
    nesting_mode: string,
    isSingleItem = false,
  ): Struct {
    const parent = _scope[_scope.length - 1];
    const isClass = (parent.isComputed && !parent.isOptional) || isSingleItem;
    const s = new Struct(this.nextTempName(), attributes, isClass, true, isSingleItem, nesting_mode, path);
    this.structs.push(s);
    return s;
  }
}

/** Parses one resource's terraform schema block into attributes + (temporarily named) structs. */
export function parseResourceAttributes(schema: Schema): ParsedResource {
  return new Parser().parse(schema);
}
