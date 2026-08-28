// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDatasetProps extends cdktn.TerraformMetaArguments {
    /**
    * Frequency of data collection. This parameter is required for RELATED_TIME_SERIES
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#data_frequency CcDataset#data_frequency}
    */
    readonly dataFrequency?: string;
    /**
    * A name for the dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#dataset_name CcDataset#dataset_name}
    */
    readonly datasetName: string;
    /**
    * The dataset type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#dataset_type CcDataset#dataset_type}
    */
    readonly datasetType: string;
    /**
    * The domain associated with the dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#domain CcDataset#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#encryption_config CcDataset#encryption_config}
    */
    readonly encryptionConfig?: CcDataset.EncryptionConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#schema CcDataset#schema}
    */
    readonly schema: CcDataset.SchemaProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#tags CcDataset#tags}
    */
    readonly tags?: CcDataset.TagsItemsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset awscc_forecast_dataset}
*/
export class CcDataset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_forecast_dataset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataset to import
    * @param importFromId The id of the existing CcDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_forecast_dataset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset awscc_forecast_dataset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDatasetProps
    */
    public constructor(scope: Construct, id: string, config: CcDatasetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_forecast_dataset',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dataFrequency = config.dataFrequency;
        this._datasetName = config.datasetName;
        this._datasetType = config.datasetType;
        this._domain = config.domain;
        this._encryptionConfig.internalValue = config.encryptionConfig;
        this._schema.internalValue = config.schema;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // data_frequency - computed: true, optional: true, required: false
    private _dataFrequency?: string; 
    public get dataFrequency() {
        return this.getStringAttribute('data_frequency');
    }
    public set dataFrequency(value: string) {
        this._dataFrequency = value;
    }
    public resetDataFrequency() {
        this._dataFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFrequencyInput() {
        return this._dataFrequency;
    }

    // dataset_name - computed: false, optional: false, required: true
    private _datasetName?: string; 
    public get datasetName() {
        return this.getStringAttribute('dataset_name');
    }
    public set datasetName(value: string) {
        this._datasetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetNameInput() {
        return this._datasetName;
    }

    // dataset_type - computed: false, optional: false, required: true
    private _datasetType?: string; 
    public get datasetType() {
        return this.getStringAttribute('dataset_type');
    }
    public set datasetType(value: string) {
        this._datasetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetTypeInput() {
        return this._datasetType;
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // encryption_config - computed: true, optional: true, required: false
    private _encryptionConfig = new CcDataset.EncryptionConfigPropertyOutputReference(this, "encryption_config");
    public get encryptionConfig() {
        return this._encryptionConfig;
    }
    public putEncryptionConfig(value: CcDataset.EncryptionConfigProperty) {
        this._encryptionConfig.internalValue = value;
    }
    public resetEncryptionConfig() {
        this._encryptionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigInput() {
        return this._encryptionConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // schema - computed: false, optional: false, required: true
    private _schema = new CcDataset.SchemaPropertyOutputReference(this, "schema");
    public get schema() {
        return this._schema;
    }
    public putSchema(value: CcDataset.SchemaProperty) {
        this._schema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataset.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataset.TagsItemsProperty[] | cdktn.IResolvable) {
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
            data_frequency: cdktn.stringToTerraform(this._dataFrequency),
            dataset_name: cdktn.stringToTerraform(this._datasetName),
            dataset_type: cdktn.stringToTerraform(this._datasetType),
            domain: cdktn.stringToTerraform(this._domain),
            encryption_config: ccDatasetEncryptionConfigPropertyToTerraform(this._encryptionConfig.internalValue),
            schema: ccDatasetSchemaPropertyToTerraform(this._schema.internalValue),
            tags: cdktn.listMapper(ccDatasetTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_frequency: {
                value: cdktn.stringToHclTerraform(this._dataFrequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dataset_name: {
                value: cdktn.stringToHclTerraform(this._datasetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dataset_type: {
                value: cdktn.stringToHclTerraform(this._datasetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_config: {
                value: ccDatasetEncryptionConfigPropertyToHclTerraform(this._encryptionConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataset.EncryptionConfigProperty",
            },
            schema: {
                value: ccDatasetSchemaPropertyToHclTerraform(this._schema.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataset.SchemaProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDatasetTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataset.TagsItemsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDatasetEncryptionConfigPropertyToTerraform(struct?: CcDataset.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDatasetEncryptionConfigPropertyToHclTerraform(struct?: CcDataset.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetAttributesItemsPropertyToTerraform(struct?: CcDataset.AttributesItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_name: cdktn.stringToTerraform(struct!.attributeName),
        attribute_type: cdktn.stringToTerraform(struct!.attributeType),
    }
}


export function ccDatasetAttributesItemsPropertyToHclTerraform(struct?: CcDataset.AttributesItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_name: {
            value: cdktn.stringToHclTerraform(struct!.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_type: {
            value: cdktn.stringToHclTerraform(struct!.attributeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetSchemaPropertyToTerraform(struct?: CcDataset.SchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.listMapper(ccDatasetAttributesItemsPropertyToTerraform, false)(struct!.attributes),
    }
}


export function ccDatasetSchemaPropertyToHclTerraform(struct?: CcDataset.SchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.listMapperHcl(ccDatasetAttributesItemsPropertyToHclTerraform, false)(struct!.attributes),
            isBlock: true,
            type: "list",
            storageClassType: "AttributesItemsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetTagsItemsPropertyToTerraform(struct?: CcDataset.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDatasetTagsItemsPropertyToHclTerraform(struct?: CcDataset.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcDataset {
export interface EncryptionConfigProperty {
    /**
    * KMS key used to encrypt the Dataset data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#kms_key_arn CcDataset#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#role_arn CcDataset#role_arn}
    */
    readonly roleArn?: string;
}
export class EncryptionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
            this._roleArn = value.roleArn;
        }
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}
export interface AttributesItemsProperty {
    /**
    * Name of the dataset field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#attribute_name CcDataset#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Data type of the field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#attribute_type CcDataset#attribute_type}
    */
    readonly attributeType?: string;
}
export class AttributesItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributesItemsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeName = this._attributeName;
        }
        if (this._attributeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeType = this._attributeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributesItemsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeName = undefined;
            this._attributeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeName = value.attributeName;
            this._attributeType = value.attributeType;
        }
    }

    // attribute_name - computed: true, optional: true, required: false
    private _attributeName?: string; 
    public get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    public set attributeName(value: string) {
        this._attributeName = value;
    }
    public resetAttributeName() {
        this._attributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeNameInput() {
        return this._attributeName;
    }

    // attribute_type - computed: true, optional: true, required: false
    private _attributeType?: string; 
    public get attributeType() {
        return this.getStringAttribute('attribute_type');
    }
    public set attributeType(value: string) {
        this._attributeType = value;
    }
    public resetAttributeType() {
        this._attributeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeTypeInput() {
        return this._attributeType;
    }
}

export class AttributesItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : AttributesItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): AttributesItemsPropertyOutputReference {
        return new AttributesItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#attributes CcDataset#attributes}
    */
    readonly attributes?: AttributesItemsProperty[] | cdktn.IResolvable;
}
export class SchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes.internalValue = value.attributes;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes = new AttributesItemsPropertyList(this, "attributes", false);
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: AttributesItemsProperty[] | cdktn.IResolvable) {
        this._attributes.internalValue = value;
    }
    public resetAttributes() {
        this._attributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }
}
export interface TagsItemsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#key CcDataset#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/forecast_dataset#value CcDataset#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
