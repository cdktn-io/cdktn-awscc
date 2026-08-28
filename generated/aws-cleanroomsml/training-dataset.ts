// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrainingDatasetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#description CcTrainingDataset#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#name CcTrainingDataset#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#role_arn CcTrainingDataset#role_arn}
    */
    readonly roleArn: string;
    /**
    * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#tags CcTrainingDataset#tags}
    */
    readonly tags?: CcTrainingDataset.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#training_data CcTrainingDataset#training_data}
    */
    readonly trainingData: CcTrainingDataset.DatasetProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset awscc_cleanroomsml_training_dataset}
*/
export class CcTrainingDataset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanroomsml_training_dataset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrainingDataset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrainingDataset to import
    * @param importFromId The id of the existing CcTrainingDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrainingDataset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanroomsml_training_dataset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset awscc_cleanroomsml_training_dataset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrainingDatasetProps
    */
    public constructor(scope: Construct, id: string, config: CcTrainingDatasetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanroomsml_training_dataset',
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
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._trainingData.internalValue = config.trainingData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTrainingDataset.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTrainingDataset.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // training_data - computed: false, optional: false, required: true
    private _trainingData = new CcTrainingDataset.DatasetPropertyList(this, "training_data", false);
    public get trainingData() {
        return this._trainingData;
    }
    public putTrainingData(value: CcTrainingDataset.DatasetProperty[] | cdktn.IResolvable) {
        this._trainingData.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingDataInput() {
        return this._trainingData.internalValue;
    }

    // training_dataset_arn - computed: true, optional: false, required: false
    public get trainingDatasetArn() {
        return this.getStringAttribute('training_dataset_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccTrainingDatasetTagPropertyToTerraform, false)(this._tags.internalValue),
            training_data: cdktn.listMapper(ccTrainingDatasetDatasetPropertyToTerraform, false)(this._trainingData.internalValue),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTrainingDatasetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTrainingDataset.TagPropertyList",
            },
            training_data: {
                value: cdktn.listMapperHcl(ccTrainingDatasetDatasetPropertyToHclTerraform, false)(this._trainingData.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrainingDataset.DatasetPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTrainingDatasetTagPropertyToTerraform(struct?: CcTrainingDataset.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTrainingDatasetTagPropertyToHclTerraform(struct?: CcTrainingDataset.TagProperty | cdktn.IResolvable): any {
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


export function ccTrainingDatasetGlueDataSourcePropertyToTerraform(struct?: CcTrainingDataset.GlueDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccTrainingDatasetGlueDataSourcePropertyToHclTerraform(struct?: CcTrainingDataset.GlueDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_id: {
            value: cdktn.stringToHclTerraform(struct!.catalogId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrainingDatasetDataSourcePropertyToTerraform(struct?: CcTrainingDataset.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_data_source: ccTrainingDatasetGlueDataSourcePropertyToTerraform(struct!.glueDataSource),
    }
}


export function ccTrainingDatasetDataSourcePropertyToHclTerraform(struct?: CcTrainingDataset.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_data_source: {
            value: ccTrainingDatasetGlueDataSourcePropertyToHclTerraform(struct!.glueDataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "GlueDataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrainingDatasetColumnSchemaPropertyToTerraform(struct?: CcTrainingDataset.ColumnSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        column_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnTypes),
    }
}


export function ccTrainingDatasetColumnSchemaPropertyToHclTerraform(struct?: CcTrainingDataset.ColumnSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrainingDatasetDatasetInputConfigPropertyToTerraform(struct?: CcTrainingDataset.DatasetInputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_source: ccTrainingDatasetDataSourcePropertyToTerraform(struct!.dataSource),
        schema: cdktn.listMapper(ccTrainingDatasetColumnSchemaPropertyToTerraform, false)(struct!.schema),
    }
}


export function ccTrainingDatasetDatasetInputConfigPropertyToHclTerraform(struct?: CcTrainingDataset.DatasetInputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_source: {
            value: ccTrainingDatasetDataSourcePropertyToHclTerraform(struct!.dataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceProperty",
        },
        schema: {
            value: cdktn.listMapperHcl(ccTrainingDatasetColumnSchemaPropertyToHclTerraform, false)(struct!.schema),
            isBlock: true,
            type: "list",
            storageClassType: "ColumnSchemaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTrainingDatasetDatasetPropertyToTerraform(struct?: CcTrainingDataset.DatasetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_config: ccTrainingDatasetDatasetInputConfigPropertyToTerraform(struct!.inputConfig),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTrainingDatasetDatasetPropertyToHclTerraform(struct?: CcTrainingDataset.DatasetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_config: {
            value: ccTrainingDatasetDatasetInputConfigPropertyToHclTerraform(struct!.inputConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DatasetInputConfigProperty",
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


export namespace CcTrainingDataset {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#key CcTrainingDataset#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#value CcTrainingDataset#value}
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
export interface GlueDataSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#catalog_id CcTrainingDataset#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#database_name CcTrainingDataset#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#table_name CcTrainingDataset#table_name}
    */
    readonly tableName: string;
}
export class GlueDataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlueDataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlueDataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._databaseName = value.databaseName;
            this._tableName = value.tableName;
        }
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    public resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // table_name - computed: false, optional: false, required: true
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface DataSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#glue_data_source CcTrainingDataset#glue_data_source}
    */
    readonly glueDataSource: GlueDataSourceProperty;
}
export class DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueDataSource = this._glueDataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueDataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueDataSource.internalValue = value.glueDataSource;
        }
    }

    // glue_data_source - computed: false, optional: false, required: true
    private _glueDataSource = new GlueDataSourcePropertyOutputReference(this, "glue_data_source");
    public get glueDataSource() {
        return this._glueDataSource;
    }
    public putGlueDataSource(value: GlueDataSourceProperty) {
        this._glueDataSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get glueDataSourceInput() {
        return this._glueDataSource.internalValue;
    }
}
export interface ColumnSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#column_name CcTrainingDataset#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#column_types CcTrainingDataset#column_types}
    */
    readonly columnTypes: string[];
}
export class ColumnSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ColumnSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._columnTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnTypes = this._columnTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._columnTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._columnTypes = value.columnTypes;
        }
    }

    // column_name - computed: false, optional: false, required: true
    private _columnName?: string; 
    public get columnName() {
        return this.getStringAttribute('column_name');
    }
    public set columnName(value: string) {
        this._columnName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNameInput() {
        return this._columnName;
    }

    // column_types - computed: false, optional: false, required: true
    private _columnTypes?: string[]; 
    public get columnTypes() {
        return this.getListAttribute('column_types');
    }
    public set columnTypes(value: string[]) {
        this._columnTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get columnTypesInput() {
        return this._columnTypes;
    }
}

export class ColumnSchemaPropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnSchemaProperty[] | cdktn.IResolvable

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
    public get(index: number): ColumnSchemaPropertyOutputReference {
        return new ColumnSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DatasetInputConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#data_source CcTrainingDataset#data_source}
    */
    readonly dataSource: DataSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#schema CcTrainingDataset#schema}
    */
    readonly schema: ColumnSchemaProperty[] | cdktn.IResolvable;
}
export class DatasetInputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetInputConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSource = this._dataSource?.internalValue;
        }
        if (this._schema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetInputConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSource.internalValue = undefined;
            this._schema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSource.internalValue = value.dataSource;
            this._schema.internalValue = value.schema;
        }
    }

    // data_source - computed: false, optional: false, required: true
    private _dataSource = new DataSourcePropertyOutputReference(this, "data_source");
    public get dataSource() {
        return this._dataSource;
    }
    public putDataSource(value: DataSourceProperty) {
        this._dataSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceInput() {
        return this._dataSource.internalValue;
    }

    // schema - computed: false, optional: false, required: true
    private _schema = new ColumnSchemaPropertyList(this, "schema", false);
    public get schema() {
        return this._schema;
    }
    public putSchema(value: ColumnSchemaProperty[] | cdktn.IResolvable) {
        this._schema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema.internalValue;
    }
}
export interface DatasetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#input_config CcTrainingDataset#input_config}
    */
    readonly inputConfig: DatasetInputConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanroomsml_training_dataset#type CcTrainingDataset#type}
    */
    readonly type: string;
}
export class DatasetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DatasetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputConfig = this._inputConfig?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputConfig.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputConfig.internalValue = value.inputConfig;
            this._type = value.type;
        }
    }

    // input_config - computed: false, optional: false, required: true
    private _inputConfig = new DatasetInputConfigPropertyOutputReference(this, "input_config");
    public get inputConfig() {
        return this._inputConfig;
    }
    public putInputConfig(value: DatasetInputConfigProperty) {
        this._inputConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputConfigInput() {
        return this._inputConfig.internalValue;
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

export class DatasetPropertyList extends cdktn.ComplexList {
    public internalValue? : DatasetProperty[] | cdktn.IResolvable

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
    public get(index: number): DatasetPropertyOutputReference {
        return new DatasetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
