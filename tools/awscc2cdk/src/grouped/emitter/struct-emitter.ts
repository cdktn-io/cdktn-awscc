// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Adapted from src/vendored/cdktn/emitter/struct-emitter.ts — see src/grouped/README.md.
//
// Split into three entry points (the vendored file has one `emit()` that interleaves all of this
// at the top level of one flat file):
//
//  - `emitStructInterface` — the struct's own `interface`, into the namespace body.
//  - `emitStructClass` — its `OutputReference`/`List`/`Map`/... wrapper classes, also into the
//    namespace body.
//  - `emitStructMappers` — the two top-level `toTerraform`/`toHclTerraform` functions. These are
//    the one place a struct's name is referenced directly as a template string rather than through
//    `attribute-type-model.ts`, so their signature qualifies it with the owning class name
//    explicitly (`qualifyName`) — everything these two functions reference in their *bodies* is
//    either another (always top-level, never-qualified) mapper function name or a value access,
//    never a bare type name.
//
// No sharding: `emitNamespacedStructs`/`STRUCT_SHARDING_THRESHOLD` are dropped. Plan §5 defers
// cross-file namespace sharding to step 5 (CONTRACT.md "Exclusions" — a resource whose struct count
// makes this matter this iteration is listed in `test/jsii-exclude.json`, not sharded here).
import { CodeMaker } from "codemaker";
import { ResourceModel, Struct } from "../models";
import type { AttributeModel } from "../models/attribute-model";
import { AttributesEmitter } from "./attributes-emitter";
import { downcaseFirst } from "../util";
import { sanitizedComment } from "../sanitized-comments";

export class StructEmitter {
  attributesEmitter: AttributesEmitter;

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code);
  }

  // Due to https://github.com/hashicorp/terraform-plugin-sdk/commit/2387eb85e32c064b4a62718c9f5c80bf00dc7fb9 —
  // some resources get an automatic `id` field; warn about it the same way the vendored generator does.
  private warnAboutIdField(att: AttributeModel) {
    if (att.name === "id") {
      this.code.line(`*`);
      this.code.line(
        `* Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.`,
      );
      this.code.line(
        `* If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.`,
      );
    }
  }

  /** The struct's `interface` (and, for the resource's own Props struct, nothing else — no
   * mapper functions: see the `ConfigStruct` guard in the vendored original). */
  public emitStructInterface(resource: ResourceModel, struct: Struct) {
    this.code.openBlock(`export interface ${struct.name}${struct.extends}`);

    for (const att of struct.assignableAttributes) {
      const comment = sanitizedComment(this.code);
      if (att.description) {
        comment.line(att.description);
        comment.line(``);
      }
      comment.line(
        `Docs at Terraform Registry: {@link ${resource.linkToDocs}#${att.terraformName} ${resource.className}#${att.terraformName}}`,
      );
      this.warnAboutIdField(att);
      comment.end();
      this.code.line(`readonly ${att.typeDefinition};`);
    }
    this.code.closeBlock();
  }

  /** The two top-level mapper functions for a nested struct (never called for a `ConfigStruct` —
   * the resource's own attributes are synthesized directly in the resource class body instead). */
  public emitStructMappers(struct: Struct, qualifyName: string) {
    this.emitMapperFunction(struct, qualifyName, false);
    this.emitMapperFunction(struct, qualifyName, true);
  }

  private emitMapperFunction(struct: Struct, qualifyName: string, hcl: boolean) {
    const qualified = `${qualifyName}.${struct.name}`;
    // Prefixed with the owning resource's class name (`downcaseFirst(qualifyName)`), matching
    // `StructAttributeTypeModel#toTerraformFunction`/`#toHclTerraformFunction`
    // (models/attribute-type-model.ts, via namespace-context.ts's `resourcePrefix()`) exactly —
    // a bare `tagsPropertyToTerraform` from two different resources in the same module would
    // collide the moment the module's index.ts re-exports both files with `export *`.
    const namePrefix = downcaseFirst(qualifyName);
    const fnName = hcl ? `${namePrefix}${struct.name}ToHclTerraform` : `${namePrefix}${struct.name}ToTerraform`;
    const outputRefType = struct.isSingleItem ? `${qualifyName}.${struct.outputReferenceName} | ` : "";

    this.code.line();
    this.code.openBlock(
      `export function ${fnName}(struct?: ${outputRefType}${qualified}${!struct.isClass ? " | cdktn.IResolvable" : ""}): any`,
    );
    this.code.line(`if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }`);
    this.code.openBlock(`if (cdktn.isComplexElement(struct))`);
    this.code.line(
      `throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");`,
    );
    this.code.closeBlock();

    if (hcl) {
      this.code.open(`const attrs = {`);
      for (const att of struct.assignableAttributes) this.attributesEmitter.emitToHclTerraform(att, true);
      this.code.close(`};`);
      if (struct.assignableAttributes.length > 0) {
        this.code.line();
        this.code.line(`// remove undefined attributes`);
        this.code.line(
          `return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));`,
        );
      } else {
        this.code.line(`return attrs;`);
      }
    } else {
      this.code.openBlock("return");
      for (const att of struct.assignableAttributes) this.attributesEmitter.emitToTerraform(att, true);
      this.code.closeBlock(";");
    }

    this.code.closeBlock();
    this.code.line();
  }

  /** The `OutputReference` class and, depending on nesting mode, `List`/`Map`/... wrapper
   * classes — unchanged logic from the vendored original, since every type reference inside them
   * is either a sibling namespace member (bare, correct) or resolved through
   * `attribute-type-model.ts` (already qualification-aware). */
  public emitStructClass(struct: Struct) {
    this.code.openBlock(`export class ${struct.outputReferenceName} extends cdktn.ComplexObject`);

    this.code.line("private isEmptyObject = false;");
    if (!struct.isClass) {
      this.code.line("private resolvableValue?: cdktn.IResolvable;");
    }
    this.code.line();

    const comment = sanitizedComment(this.code);
    comment.line(`@param terraformResource The parent resource`);
    comment.line(`@param terraformAttribute The attribute on the parent resource this class is referencing`);
    if (struct.isSingleItem) {
      comment.end();
      this.code.openBlock(
        `public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string)`,
      );
      this.code.line(`super(terraformResource, terraformAttribute, false, 0);`);
      this.code.closeBlock();
    } else if (struct.nestingMode === "single" || struct.nestingMode === "object") {
      comment.end();
      this.code.openBlock(
        `public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string)`,
      );
      this.code.line(`super(terraformResource, terraformAttribute, false);`);
      this.code.closeBlock();
    } else if (struct.nestingMode.startsWith("map")) {
      this.code.line(`* @param complexObjectKey the key of this item in the map`);
      comment.end();
      this.code.openBlock(
        `public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)`,
      );
      this.code.line(`super(terraformResource, terraformAttribute, false, complexObjectKey);`);
      this.code.closeBlock();
    } else {
      comment.line(`@param complexObjectIndex the index of this item in the list`);
      comment.line(
        `@param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)`,
      );
      comment.end();
      this.code.openBlock(
        `public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)`,
      );
      this.code.line(`super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);`);
      this.code.closeBlock();
    }

    this.code.line();
    this.emitInternalValueGetter(struct);
    this.code.line();
    this.emitInternalValueSetter(struct);

    for (const att of struct.attributes) {
      this.attributesEmitter.emit(
        att,
        this.attributesEmitter.needsResetEscape(att, struct.attributes),
        this.attributesEmitter.needsInputEscape(att, struct.attributes),
      );
    }

    this.code.closeBlock();

    if (!struct.isSingleItem && (struct.nestingMode === "list" || struct.nestingMode === "set")) {
      this.emitComplexListClass(struct);
    } else if (struct.nestingMode === "map") {
      this.emitComplexMapClass(struct);
    } else if (struct.nestingMode === "maplist" || struct.nestingMode === "mapset") {
      this.emitComplexMapListClass(struct);
      this.emitComplexMapClass(struct);
    } else if (struct.nestingMode === "listmap") {
      this.emitComplexListMapClass(struct);
      this.emitComplexListClass(struct);
    } else if (struct.nestingMode === "setmap") {
      this.emitComplexListMapClass(struct);
      this.emitComplexListClass(struct);
    } else if (
      struct.nestingMode === "listlist" ||
      struct.nestingMode === "listset" ||
      struct.nestingMode === "setlist" ||
      struct.nestingMode === "setset"
    ) {
      this.emitComplexListListClass(struct);
      this.emitComplexListClass(struct);
    }
    // other types of nested collections aren't supported
  }

  private emitComplexListClass(struct: Struct) {
    this.code.line();
    this.code.openBlock(`export class ${struct.listName} extends cdktn.ComplexList`);

    if (struct.assignable) {
      this.code.line(`public internalValue? : ${struct.name}[] | cdktn.IResolvable`);
    }

    this.code.line();
    const constructorComment = sanitizedComment(this.code);
    constructorComment.line(`@param terraformResource The parent resource`);
    constructorComment.line(`@param terraformAttribute The attribute on the parent resource this class is referencing`);
    constructorComment.line(
      `@param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)`,
    );
    constructorComment.end();
    this.code.openBlock(
      `constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)`,
    );
    this.code.line(`super(terraformResource, terraformAttribute, wrapsSet);`);
    this.code.closeBlock();

    this.code.line();
    const getterComment = sanitizedComment(this.code);
    getterComment.line(`@param index the index of the item to return`);
    getterComment.end();
    this.code.openBlock(`public get(index: number): ${struct.outputReferenceName}`);
    this.code.line(`return new ${struct.outputReferenceName}(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);`);
    this.code.closeBlock();

    this.code.closeBlock();
  }

  private emitComplexMapClass(struct: Struct) {
    this.code.line();
    this.code.openBlock(`export class ${struct.mapName} extends cdktn.ComplexMap`);

    if (struct.assignable) {
      this.code.line(`public internalValue? : { [key: string]: ${struct.name} } | cdktn.IResolvable`);
    }

    this.code.line();
    const constructorComment = sanitizedComment(this.code);
    constructorComment.line(`@param terraformResource The parent resource`);
    constructorComment.line(`@param terraformAttribute The attribute on the parent resource this class is referencing`);
    constructorComment.end();
    this.code.openBlock(`constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string)`);
    this.code.line(`super(terraformResource, terraformAttribute);`);
    this.code.closeBlock();

    this.code.line();
    const getterComment = sanitizedComment(this.code);
    getterComment.line(`@param key the key of the item to return`);
    getterComment.end();
    this.code.openBlock(`public get(key: string): ${struct.outputReferenceName}`);
    this.code.line(`return new ${struct.outputReferenceName}(this.terraformResource, this.terraformAttribute, key);`);
    this.code.closeBlock();

    this.code.closeBlock();
  }

  private emitComplexMapListClass(struct: Struct) {
    this.code.line();
    this.code.openBlock(`export class ${struct.mapListName} extends cdktn.MapList`);

    if (struct.assignable) {
      this.code.line(`public internalValue? : ${struct.mapName}[] | cdktn.IResolvable`);
    }

    this.code.line();
    const constructorComment = sanitizedComment(this.code);
    constructorComment.line(`@param terraformResource The parent resource`);
    constructorComment.line(`@param terraformAttribute The attribute on the parent resource this class is referencing`);
    constructorComment.line(
      `@param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)`,
    );
    constructorComment.end();
    this.code.openBlock(
      `constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)`,
    );
    this.code.line(`super(terraformResource, terraformAttribute, wrapsSet);`);
    this.code.closeBlock();

    this.code.line();
    const getterComment = sanitizedComment(this.code);
    getterComment.line(`@param index the index of the item to return`);
    getterComment.end();
    this.code.openBlock(`public get(index: number): ${struct.mapName}`);
    this.code.line(`return new ${struct.mapName}(this, \`[\${index}]\`);`);
    this.code.closeBlock();

    this.code.closeBlock();
  }

  private emitComplexListMapClass(struct: Struct) {
    this.code.line();
    this.code.openBlock(`export class ${struct.listMapName} extends cdktn.ComplexMap`);

    if (struct.assignable) {
      this.code.line(`public internalValue? : { [key: string]: ${struct.name}[] } | cdktn.IResolvable`);
    }

    this.code.line();
    const constructorComment = sanitizedComment(this.code);
    constructorComment.line(`@param terraformResource The parent resource`);
    constructorComment.line(`@param terraformAttribute The attribute on the parent resource this class is referencing`);
    constructorComment.end();
    this.code.openBlock(`constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string)`);
    this.code.line(`super(terraformResource, terraformAttribute);`);
    this.code.closeBlock();

    this.code.line();
    const getterComment = sanitizedComment(this.code);
    getterComment.line(`@param key the key of the item to return`);
    getterComment.end();
    this.code.openBlock(`public get(key: string): ${struct.listName}`);
    this.code.line(`return new ${struct.listName}(this, \`[\${key}]\`, ${struct.nestingMode === "setmap"});`);
    this.code.closeBlock();

    this.code.closeBlock();
  }

  private emitComplexListListClass(struct: Struct) {
    this.code.line();
    this.code.openBlock(`export class ${struct.listListName} extends cdktn.MapList`); // despite name, need the same behavior

    if (struct.assignable) {
      this.code.line(`public internalValue? : ${struct.name}[][] | cdktn.IResolvable`);
    }

    this.code.line();
    const constructorComment = sanitizedComment(this.code);
    constructorComment.line(`@param terraformResource The parent resource`);
    constructorComment.line(`@param terraformAttribute The attribute on the parent resource this class is referencing`);
    constructorComment.line(
      `@param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)`,
    );
    constructorComment.end();
    this.code.openBlock(
      `constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)`,
    );
    this.code.line(`super(terraformResource, terraformAttribute, wrapsSet);`);
    this.code.closeBlock();

    this.code.line();
    const getterComment = sanitizedComment(this.code);
    getterComment.line(`@param index the index of the item to return`);
    getterComment.end();
    this.code.openBlock(`public get(index: number): ${struct.listName}`);
    this.code.line(
      `return new ${struct.listName}(this, \`[\${index}]\`, ${struct.nestingMode === "setlist" || struct.nestingMode === "setset"});`,
    );
    this.code.closeBlock();

    this.code.closeBlock();
  }

  private emitInternalValueGetter(struct: Struct) {
    this.code.openBlock(`public get internalValue(): ${struct.name}${!struct.isClass ? " | cdktn.IResolvable" : ""} | undefined`);

    if (!struct.isClass) {
      this.code.openBlock("if (this.resolvableValue)");
      this.code.line("return this.resolvableValue;");
      this.code.closeBlock();
    }

    this.code.line("let hasAnyValues = this.isEmptyObject;");
    this.code.line("const internalValueResult: any = {};");
    for (const att of struct.attributes) {
      if (att.isStored) {
        if (att.getterType._type === "stored_class") {
          this.code.openBlock(`if (this.${att.storageName}?.internalValue !== undefined)`);
        } else {
          this.code.openBlock(`if (this.${att.storageName} !== undefined)`);
        }
        this.code.line("hasAnyValues = true;");
        if (att.getterType._type === "stored_class") {
          this.code.line(`internalValueResult.${att.name} = this.${att.storageName}?.internalValue;`);
        } else {
          this.code.line(`internalValueResult.${att.name} = this.${att.storageName};`);
        }
        this.code.closeBlock();
      }
    }
    this.code.line("return hasAnyValues ? internalValueResult : undefined;");
    this.code.closeBlock();
  }

  private emitInternalValueSetter(struct: Struct) {
    this.code.openBlock(`public set internalValue(value: ${struct.name}${!struct.isClass ? " | cdktn.IResolvable" : ""} | undefined)`);

    this.code.openBlock("if (value === undefined)");
    this.code.line("this.isEmptyObject = false;");
    if (!struct.isClass) {
      this.code.line("this.resolvableValue = undefined;");
    }
    for (const att of struct.attributes) {
      if (att.isStored) {
        if (att.setterType._type === "stored_class") {
          this.code.line(`this.${att.storageName}.internalValue = undefined;`);
        } else if (att.setterType._type !== "none") {
          this.code.line(`this.${att.storageName} = undefined;`);
        }
      }
    }
    this.code.closeBlock();
    if (!struct.isClass) {
      this.code.openBlock("else if (cdktn.Tokenization.isResolvable(value))");
      this.code.line("this.isEmptyObject = false;");
      this.code.line("this.resolvableValue = value;");
      this.code.closeBlock();
    }
    this.code.openBlock("else");
    this.code.line("this.isEmptyObject = Object.keys(value).length === 0;");
    if (!struct.isClass) {
      this.code.line("this.resolvableValue = undefined;");
    }
    for (const att of struct.attributes) {
      if (att.isStored) {
        if (att.setterType._type === "stored_class") {
          this.code.line(`this.${att.storageName}.internalValue = value.${att.name};`);
        } else if (att.setterType._type !== "none") {
          this.code.line(`this.${att.storageName} = value.${att.name};`);
        }
      }
    }
    this.code.closeBlock();
    this.code.closeBlock();
  }
}
