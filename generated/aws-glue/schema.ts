// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSchemaProps extends cdktn.TerraformMetaArguments {
    /**
    * Specify checkpoint version for update. This is only required to update the Compatibility.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#checkpoint_version CcSchema#checkpoint_version}
    */
    readonly checkpointVersion?: CcSchema.SchemaVersionProperty;
    /**
    * Compatibility setting for the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#compatibility CcSchema#compatibility}
    */
    readonly compatibility: string;
    /**
    * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#data_format CcSchema#data_format}
    */
    readonly dataFormat: string;
    /**
    * A description of the schema. If description is not provided, there will not be any default value for this.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#description CcSchema#description}
    */
    readonly description?: string;
    /**
    * Name of the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#name CcSchema#name}
    */
    readonly name: string;
    /**
    * Identifier for the registry which the schema is part of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#registry CcSchema#registry}
    */
    readonly registry?: CcSchema.RegistryProperty;
    /**
    * Definition for the initial schema version in plain-text.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#schema_definition CcSchema#schema_definition}
    */
    readonly schemaDefinition?: string;
    /**
    * List of tags to tag the schema
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#tags CcSchema#tags}
    */
    readonly tags?: CcSchema.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema awscc_glue_schema}
*/
export class CcSchema extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_schema";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSchema resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSchema to import
    * @param importFromId The id of the existing CcSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSchema to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_schema", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema awscc_glue_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSchemaProps
    */
    public constructor(scope: Construct, id: string, config: CcSchemaProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_schema',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._checkpointVersion.internalValue = config.checkpointVersion;
        this._compatibility = config.compatibility;
        this._dataFormat = config.dataFormat;
        this._description = config.description;
        this._name = config.name;
        this._registry.internalValue = config.registry;
        this._schemaDefinition = config.schemaDefinition;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // checkpoint_version - computed: true, optional: true, required: false
    private _checkpointVersion = new CcSchema.SchemaVersionPropertyOutputReference(this, "checkpoint_version");
    public get checkpointVersion() {
        return this._checkpointVersion;
    }
    public putCheckpointVersion(value: CcSchema.SchemaVersionProperty) {
        this._checkpointVersion.internalValue = value;
    }
    public resetCheckpointVersion() {
        this._checkpointVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get checkpointVersionInput() {
        return this._checkpointVersion.internalValue;
    }

    // compatibility - computed: false, optional: false, required: true
    private _compatibility?: string; 
    public get compatibility() {
        return this.getStringAttribute('compatibility');
    }
    public set compatibility(value: string) {
        this._compatibility = value;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibilityInput() {
        return this._compatibility;
    }

    // data_format - computed: false, optional: false, required: true
    private _dataFormat?: string; 
    public get dataFormat() {
        return this.getStringAttribute('data_format');
    }
    public set dataFormat(value: string) {
        this._dataFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFormatInput() {
        return this._dataFormat;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // initial_schema_version_id - computed: true, optional: false, required: false
    public get initialSchemaVersionId() {
        return this.getStringAttribute('initial_schema_version_id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // registry - computed: true, optional: true, required: false
    private _registry = new CcSchema.RegistryPropertyOutputReference(this, "registry");
    public get registry() {
        return this._registry;
    }
    public putRegistry(value: CcSchema.RegistryProperty) {
        this._registry.internalValue = value;
    }
    public resetRegistry() {
        this._registry.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryInput() {
        return this._registry.internalValue;
    }

    // schema_definition - computed: true, optional: true, required: false
    private _schemaDefinition?: string; 
    public get schemaDefinition() {
        return this.getStringAttribute('schema_definition');
    }
    public set schemaDefinition(value: string) {
        this._schemaDefinition = value;
    }
    public resetSchemaDefinition() {
        this._schemaDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaDefinitionInput() {
        return this._schemaDefinition;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSchema.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSchema.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            checkpoint_version: ccSchemaSchemaVersionPropertyToTerraform(this._checkpointVersion.internalValue),
            compatibility: cdktn.stringToTerraform(this._compatibility),
            data_format: cdktn.stringToTerraform(this._dataFormat),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            registry: ccSchemaRegistryPropertyToTerraform(this._registry.internalValue),
            schema_definition: cdktn.stringToTerraform(this._schemaDefinition),
            tags: cdktn.listMapper(ccSchemaTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            checkpoint_version: {
                value: ccSchemaSchemaVersionPropertyToHclTerraform(this._checkpointVersion.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSchema.SchemaVersionProperty",
            },
            compatibility: {
                value: cdktn.stringToHclTerraform(this._compatibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_format: {
                value: cdktn.stringToHclTerraform(this._dataFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            registry: {
                value: ccSchemaRegistryPropertyToHclTerraform(this._registry.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSchema.RegistryProperty",
            },
            schema_definition: {
                value: cdktn.stringToHclTerraform(this._schemaDefinition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSchemaTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSchema.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSchemaSchemaVersionPropertyToTerraform(struct?: CcSchema.SchemaVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_latest: cdktn.booleanToTerraform(struct!.isLatest),
        version_number: cdktn.numberToTerraform(struct!.versionNumber),
    }
}


export function ccSchemaSchemaVersionPropertyToHclTerraform(struct?: CcSchema.SchemaVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_latest: {
            value: cdktn.booleanToHclTerraform(struct!.isLatest),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        version_number: {
            value: cdktn.numberToHclTerraform(struct!.versionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSchemaRegistryPropertyToTerraform(struct?: CcSchema.RegistryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccSchemaRegistryPropertyToHclTerraform(struct?: CcSchema.RegistryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSchemaTagPropertyToTerraform(struct?: CcSchema.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSchemaTagPropertyToHclTerraform(struct?: CcSchema.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSchema {
export interface SchemaVersionProperty {
    /**
    * Indicates if the latest version needs to be updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#is_latest CcSchema#is_latest}
    */
    readonly isLatest?: boolean | cdktn.IResolvable;
    /**
    * Indicates the version number in the schema to update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#version_number CcSchema#version_number}
    */
    readonly versionNumber?: number;
}
export class SchemaVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isLatest !== undefined) {
            hasAnyValues = true;
            internalValueResult.isLatest = this._isLatest;
        }
        if (this._versionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionNumber = this._versionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isLatest = undefined;
            this._versionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isLatest = value.isLatest;
            this._versionNumber = value.versionNumber;
        }
    }

    // is_latest - computed: true, optional: true, required: false
    private _isLatest?: boolean | cdktn.IResolvable; 
    public get isLatest() {
        return this.getBooleanAttribute('is_latest');
    }
    public set isLatest(value: boolean | cdktn.IResolvable) {
        this._isLatest = value;
    }
    public resetIsLatest() {
        this._isLatest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isLatestInput() {
        return this._isLatest;
    }

    // version_number - computed: true, optional: true, required: false
    private _versionNumber?: number; 
    public get versionNumber() {
        return this.getNumberAttribute('version_number');
    }
    public set versionNumber(value: number) {
        this._versionNumber = value;
    }
    public resetVersionNumber() {
        this._versionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionNumberInput() {
        return this._versionNumber;
    }
}
export interface RegistryProperty {
    /**
    * Amazon Resource Name for the Registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#arn CcSchema#arn}
    */
    readonly arn?: string;
    /**
    * Name of the registry in which the schema will be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#name CcSchema#name}
    */
    readonly name?: string;
}
export class RegistryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegistryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegistryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._name = value.name;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }
}
export interface TagProperty {
    /**
    * A key to identify the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#key CcSchema#key}
    */
    readonly key?: string;
    /**
    * Corresponding tag value for the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_schema#value CcSchema#value}
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
