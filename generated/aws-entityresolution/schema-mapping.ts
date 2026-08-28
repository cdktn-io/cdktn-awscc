// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSchemaMappingProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the SchemaMapping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#description CcSchemaMapping#description}
    */
    readonly description?: string;
    /**
    * The SchemaMapping attributes input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#mapped_input_fields CcSchemaMapping#mapped_input_fields}
    */
    readonly mappedInputFields: CcSchemaMapping.SchemaInputAttributeProperty[] | cdktn.IResolvable;
    /**
    * The name of the SchemaMapping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#schema_name CcSchemaMapping#schema_name}
    */
    readonly schemaName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#tags CcSchemaMapping#tags}
    */
    readonly tags?: CcSchemaMapping.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping}
*/
export class CcSchemaMapping extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_entityresolution_schema_mapping";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSchemaMapping resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSchemaMapping to import
    * @param importFromId The id of the existing CcSchemaMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSchemaMapping to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_schema_mapping", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSchemaMappingProps
    */
    public constructor(scope: Construct, id: string, config: CcSchemaMappingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_entityresolution_schema_mapping',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._mappedInputFields.internalValue = config.mappedInputFields;
        this._schemaName = config.schemaName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // has_workflows - computed: true, optional: false, required: false
    public get hasWorkflows() {
        return this.getBooleanAttribute('has_workflows');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mapped_input_fields - computed: false, optional: false, required: true
    private _mappedInputFields = new CcSchemaMapping.SchemaInputAttributePropertyList(this, "mapped_input_fields", false);
    public get mappedInputFields() {
        return this._mappedInputFields;
    }
    public putMappedInputFields(value: CcSchemaMapping.SchemaInputAttributeProperty[] | cdktn.IResolvable) {
        this._mappedInputFields.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mappedInputFieldsInput() {
        return this._mappedInputFields.internalValue;
    }

    // schema_arn - computed: true, optional: false, required: false
    public get schemaArn() {
        return this.getStringAttribute('schema_arn');
    }

    // schema_name - computed: false, optional: false, required: true
    private _schemaName?: string; 
    public get schemaName() {
        return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string) {
        this._schemaName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
        return this._schemaName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSchemaMapping.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSchemaMapping.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            mapped_input_fields: cdktn.listMapper(ccSchemaMappingSchemaInputAttributePropertyToTerraform, false)(this._mappedInputFields.internalValue),
            schema_name: cdktn.stringToTerraform(this._schemaName),
            tags: cdktn.listMapper(ccSchemaMappingTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mapped_input_fields: {
                value: cdktn.listMapperHcl(ccSchemaMappingSchemaInputAttributePropertyToHclTerraform, false)(this._mappedInputFields.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSchemaMapping.SchemaInputAttributePropertyList",
            },
            schema_name: {
                value: cdktn.stringToHclTerraform(this._schemaName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSchemaMappingTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSchemaMapping.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSchemaMappingSchemaInputAttributePropertyToTerraform(struct?: CcSchemaMapping.SchemaInputAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        group_name: cdktn.stringToTerraform(struct!.groupName),
        hashed: cdktn.booleanToTerraform(struct!.hashed),
        match_key: cdktn.stringToTerraform(struct!.matchKey),
        sub_type: cdktn.stringToTerraform(struct!.subType),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSchemaMappingSchemaInputAttributePropertyToHclTerraform(struct?: CcSchemaMapping.SchemaInputAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_name: {
            value: cdktn.stringToHclTerraform(struct!.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hashed: {
            value: cdktn.booleanToHclTerraform(struct!.hashed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        match_key: {
            value: cdktn.stringToHclTerraform(struct!.matchKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sub_type: {
            value: cdktn.stringToHclTerraform(struct!.subType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSchemaMappingTagPropertyToTerraform(struct?: CcSchemaMapping.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSchemaMappingTagPropertyToHclTerraform(struct?: CcSchemaMapping.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSchemaMapping {
export interface SchemaInputAttributeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#field_name CcSchemaMapping#field_name}
    */
    readonly fieldName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#group_name CcSchemaMapping#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#hashed CcSchemaMapping#hashed}
    */
    readonly hashed?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#match_key CcSchemaMapping#match_key}
    */
    readonly matchKey?: string;
    /**
    * The subtype of the Attribute. Would be required only when type is PROVIDER_ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#sub_type CcSchemaMapping#sub_type}
    */
    readonly subType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#type CcSchemaMapping#type}
    */
    readonly type: string;
}
export class SchemaInputAttributePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): SchemaInputAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._hashed !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashed = this._hashed;
        }
        if (this._matchKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchKey = this._matchKey;
        }
        if (this._subType !== undefined) {
            hasAnyValues = true;
            internalValueResult.subType = this._subType;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaInputAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldName = undefined;
            this._groupName = undefined;
            this._hashed = undefined;
            this._matchKey = undefined;
            this._subType = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldName = value.fieldName;
            this._groupName = value.groupName;
            this._hashed = value.hashed;
            this._matchKey = value.matchKey;
            this._subType = value.subType;
            this._type = value.type;
        }
    }

    // field_name - computed: false, optional: false, required: true
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // hashed - computed: true, optional: true, required: false
    private _hashed?: boolean | cdktn.IResolvable; 
    public get hashed() {
        return this.getBooleanAttribute('hashed');
    }
    public set hashed(value: boolean | cdktn.IResolvable) {
        this._hashed = value;
    }
    public resetHashed() {
        this._hashed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashedInput() {
        return this._hashed;
    }

    // match_key - computed: true, optional: true, required: false
    private _matchKey?: string; 
    public get matchKey() {
        return this.getStringAttribute('match_key');
    }
    public set matchKey(value: string) {
        this._matchKey = value;
    }
    public resetMatchKey() {
        this._matchKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchKeyInput() {
        return this._matchKey;
    }

    // sub_type - computed: true, optional: true, required: false
    private _subType?: string; 
    public get subType() {
        return this.getStringAttribute('sub_type');
    }
    public set subType(value: string) {
        this._subType = value;
    }
    public resetSubType() {
        this._subType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subTypeInput() {
        return this._subType;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class SchemaInputAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : SchemaInputAttributeProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): SchemaInputAttributePropertyOutputReference {
        return new SchemaInputAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#key CcSchemaMapping#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_schema_mapping#value CcSchemaMapping#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
