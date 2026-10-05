// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPartitionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the catalog database in which to create the partition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#catalog_id CcPartition#catalog_id}
    */
    readonly catalogId: string;
    /**
    * The AWS account ID of the catalog in which the partion is to be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#database_name CcPartition#database_name}
    */
    readonly databaseName: string;
    /**
    * The structure used to create and update a partition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#partition_input CcPartition#partition_input}
    */
    readonly partitionInput: CcPartition.PartitionInputProperty;
    /**
    * The name of the metadata table in which the partition is to be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#table_name CcPartition#table_name}
    */
    readonly tableName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition awscc_glue_partition}
*/
export class CcPartition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_partition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPartition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPartition to import
    * @param importFromId The id of the existing CcPartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPartition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_partition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition awscc_glue_partition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPartitionProps
    */
    public constructor(scope: Construct, id: string, config: CcPartitionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_partition',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._catalogId = config.catalogId;
        this._databaseName = config.databaseName;
        this._partitionInput.internalValue = config.partitionInput;
        this._tableName = config.tableName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // catalog_id - computed: false, optional: false, required: true
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier_partition_input_values - computed: true, optional: false, required: false
    public get identifierPartitionInputValues() {
        return this.getStringAttribute('identifier_partition_input_values');
    }

    // partition_input - computed: false, optional: false, required: true
    private _partitionInput = new CcPartition.PartitionInputPropertyOutputReference(this, "partition_input");
    public get partitionInput() {
        return this._partitionInput;
    }
    public putPartitionInput(value: CcPartition.PartitionInputProperty) {
        this._partitionInput.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionInputInput() {
        return this._partitionInput.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            catalog_id: cdktn.stringToTerraform(this._catalogId),
            database_name: cdktn.stringToTerraform(this._databaseName),
            partition_input: ccPartitionPartitionInputPropertyToTerraform(this._partitionInput.internalValue),
            table_name: cdktn.stringToTerraform(this._tableName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            catalog_id: {
                value: cdktn.stringToHclTerraform(this._catalogId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            partition_input: {
                value: ccPartitionPartitionInputPropertyToHclTerraform(this._partitionInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPartition.PartitionInputProperty",
            },
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPartitionColumnPropertyToTerraform(struct?: CcPartition.ColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPartitionColumnPropertyToHclTerraform(struct?: CcPartition.ColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
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


export function ccPartitionSchemaIdPropertyToTerraform(struct?: CcPartition.SchemaIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        registry_name: cdktn.stringToTerraform(struct!.registryName),
        schema_arn: cdktn.stringToTerraform(struct!.schemaArn),
        schema_name: cdktn.stringToTerraform(struct!.schemaName),
    }
}


export function ccPartitionSchemaIdPropertyToHclTerraform(struct?: CcPartition.SchemaIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        registry_name: {
            value: cdktn.stringToHclTerraform(struct!.registryName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_arn: {
            value: cdktn.stringToHclTerraform(struct!.schemaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_name: {
            value: cdktn.stringToHclTerraform(struct!.schemaName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartitionSchemaReferencePropertyToTerraform(struct?: CcPartition.SchemaReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schema_id: ccPartitionSchemaIdPropertyToTerraform(struct!.schemaId),
        schema_version_id: cdktn.stringToTerraform(struct!.schemaVersionId),
        schema_version_number: cdktn.numberToTerraform(struct!.schemaVersionNumber),
    }
}


export function ccPartitionSchemaReferencePropertyToHclTerraform(struct?: CcPartition.SchemaReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schema_id: {
            value: ccPartitionSchemaIdPropertyToHclTerraform(struct!.schemaId),
            isBlock: true,
            type: "struct",
            storageClassType: "SchemaIdProperty",
        },
        schema_version_id: {
            value: cdktn.stringToHclTerraform(struct!.schemaVersionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_version_number: {
            value: cdktn.numberToHclTerraform(struct!.schemaVersionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartitionSerdeInfoPropertyToTerraform(struct?: CcPartition.SerdeInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        parameters: cdktn.stringToTerraform(struct!.parameters),
        serialization_library: cdktn.stringToTerraform(struct!.serializationLibrary),
    }
}


export function ccPartitionSerdeInfoPropertyToHclTerraform(struct?: CcPartition.SerdeInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.stringToHclTerraform(struct!.parameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serialization_library: {
            value: cdktn.stringToHclTerraform(struct!.serializationLibrary),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartitionSkewedInfoPropertyToTerraform(struct?: CcPartition.SkewedInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        skewed_column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnNames),
        skewed_column_value_location_maps: cdktn.stringToTerraform(struct!.skewedColumnValueLocationMaps),
        skewed_column_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnValues),
    }
}


export function ccPartitionSkewedInfoPropertyToHclTerraform(struct?: CcPartition.SkewedInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        skewed_column_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        skewed_column_value_location_maps: {
            value: cdktn.stringToHclTerraform(struct!.skewedColumnValueLocationMaps),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        skewed_column_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartitionOrderPropertyToTerraform(struct?: CcPartition.OrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column: cdktn.stringToTerraform(struct!.column),
        sort_order: cdktn.numberToTerraform(struct!.sortOrder),
    }
}


export function ccPartitionOrderPropertyToHclTerraform(struct?: CcPartition.OrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column: {
            value: cdktn.stringToHclTerraform(struct!.column),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sort_order: {
            value: cdktn.numberToHclTerraform(struct!.sortOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartitionStorageDescriptorPropertyToTerraform(struct?: CcPartition.StorageDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bucketColumns),
        columns: cdktn.listMapper(ccPartitionColumnPropertyToTerraform, false)(struct!.columns),
        compressed: cdktn.booleanToTerraform(struct!.compressed),
        input_format: cdktn.stringToTerraform(struct!.inputFormat),
        location: cdktn.stringToTerraform(struct!.location),
        number_of_buckets: cdktn.numberToTerraform(struct!.numberOfBuckets),
        output_format: cdktn.stringToTerraform(struct!.outputFormat),
        parameters: cdktn.stringToTerraform(struct!.parameters),
        schema_reference: ccPartitionSchemaReferencePropertyToTerraform(struct!.schemaReference),
        serde_info: ccPartitionSerdeInfoPropertyToTerraform(struct!.serdeInfo),
        skewed_info: ccPartitionSkewedInfoPropertyToTerraform(struct!.skewedInfo),
        sort_columns: cdktn.listMapper(ccPartitionOrderPropertyToTerraform, false)(struct!.sortColumns),
        stored_as_sub_directories: cdktn.booleanToTerraform(struct!.storedAsSubDirectories),
    }
}


export function ccPartitionStorageDescriptorPropertyToHclTerraform(struct?: CcPartition.StorageDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bucketColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        columns: {
            value: cdktn.listMapperHcl(ccPartitionColumnPropertyToHclTerraform, false)(struct!.columns),
            isBlock: true,
            type: "list",
            storageClassType: "ColumnPropertyList",
        },
        compressed: {
            value: cdktn.booleanToHclTerraform(struct!.compressed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        input_format: {
            value: cdktn.stringToHclTerraform(struct!.inputFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location: {
            value: cdktn.stringToHclTerraform(struct!.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        number_of_buckets: {
            value: cdktn.numberToHclTerraform(struct!.numberOfBuckets),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        output_format: {
            value: cdktn.stringToHclTerraform(struct!.outputFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.stringToHclTerraform(struct!.parameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_reference: {
            value: ccPartitionSchemaReferencePropertyToHclTerraform(struct!.schemaReference),
            isBlock: true,
            type: "struct",
            storageClassType: "SchemaReferenceProperty",
        },
        serde_info: {
            value: ccPartitionSerdeInfoPropertyToHclTerraform(struct!.serdeInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "SerdeInfoProperty",
        },
        skewed_info: {
            value: ccPartitionSkewedInfoPropertyToHclTerraform(struct!.skewedInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "SkewedInfoProperty",
        },
        sort_columns: {
            value: cdktn.listMapperHcl(ccPartitionOrderPropertyToHclTerraform, false)(struct!.sortColumns),
            isBlock: true,
            type: "list",
            storageClassType: "OrderPropertyList",
        },
        stored_as_sub_directories: {
            value: cdktn.booleanToHclTerraform(struct!.storedAsSubDirectories),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPartitionPartitionInputPropertyToTerraform(struct?: CcPartition.PartitionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameters: cdktn.stringToTerraform(struct!.parameters),
        storage_descriptor: ccPartitionStorageDescriptorPropertyToTerraform(struct!.storageDescriptor),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccPartitionPartitionInputPropertyToHclTerraform(struct?: CcPartition.PartitionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameters: {
            value: cdktn.stringToHclTerraform(struct!.parameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_descriptor: {
            value: ccPartitionStorageDescriptorPropertyToHclTerraform(struct!.storageDescriptor),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageDescriptorProperty",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPartition {
export interface ColumnProperty {
    /**
    * A free-form text comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#comment CcPartition#comment}
    */
    readonly comment?: string;
    /**
    * The name of the Column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#name CcPartition#name}
    */
    readonly name?: string;
    /**
    * The data type of the Column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#type CcPartition#type}
    */
    readonly type?: string;
}
export class ColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
            this._name = value.name;
            this._type = value.type;
        }
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class ColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): ColumnPropertyOutputReference {
        return new ColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaIdProperty {
    /**
    * The name of the schema registry that contains the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#registry_name CcPartition#registry_name}
    */
    readonly registryName?: string;
    /**
    * The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#schema_arn CcPartition#schema_arn}
    */
    readonly schemaArn?: string;
    /**
    * The name of the schema. One of SchemaArn or SchemaName has to be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#schema_name CcPartition#schema_name}
    */
    readonly schemaName?: string;
}
export class SchemaIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._registryName !== undefined) {
            hasAnyValues = true;
            internalValueResult.registryName = this._registryName;
        }
        if (this._schemaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaArn = this._schemaArn;
        }
        if (this._schemaName !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaName = this._schemaName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._registryName = undefined;
            this._schemaArn = undefined;
            this._schemaName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._registryName = value.registryName;
            this._schemaArn = value.schemaArn;
            this._schemaName = value.schemaName;
        }
    }

    // registry_name - computed: true, optional: true, required: false
    private _registryName?: string; 
    public get registryName() {
        return this.getStringAttribute('registry_name');
    }
    public set registryName(value: string) {
        this._registryName = value;
    }
    public resetRegistryName() {
        this._registryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registryNameInput() {
        return this._registryName;
    }

    // schema_arn - computed: true, optional: true, required: false
    private _schemaArn?: string; 
    public get schemaArn() {
        return this.getStringAttribute('schema_arn');
    }
    public set schemaArn(value: string) {
        this._schemaArn = value;
    }
    public resetSchemaArn() {
        this._schemaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaArnInput() {
        return this._schemaArn;
    }

    // schema_name - computed: true, optional: true, required: false
    private _schemaName?: string; 
    public get schemaName() {
        return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string) {
        this._schemaName = value;
    }
    public resetSchemaName() {
        this._schemaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
        return this._schemaName;
    }
}
export interface SchemaReferenceProperty {
    /**
    * A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#schema_id CcPartition#schema_id}
    */
    readonly schemaId?: SchemaIdProperty;
    /**
    * The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#schema_version_id CcPartition#schema_version_id}
    */
    readonly schemaVersionId?: string;
    /**
    * The version number of the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#schema_version_number CcPartition#schema_version_number}
    */
    readonly schemaVersionNumber?: number;
}
export class SchemaReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._schemaId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaId = this._schemaId?.internalValue;
        }
        if (this._schemaVersionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaVersionId = this._schemaVersionId;
        }
        if (this._schemaVersionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaVersionNumber = this._schemaVersionNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._schemaId.internalValue = undefined;
            this._schemaVersionId = undefined;
            this._schemaVersionNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._schemaId.internalValue = value.schemaId;
            this._schemaVersionId = value.schemaVersionId;
            this._schemaVersionNumber = value.schemaVersionNumber;
        }
    }

    // schema_id - computed: true, optional: true, required: false
    private _schemaId = new SchemaIdPropertyOutputReference(this, "schema_id");
    public get schemaId() {
        return this._schemaId;
    }
    public putSchemaId(value: SchemaIdProperty) {
        this._schemaId.internalValue = value;
    }
    public resetSchemaId() {
        this._schemaId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaIdInput() {
        return this._schemaId.internalValue;
    }

    // schema_version_id - computed: true, optional: true, required: false
    private _schemaVersionId?: string; 
    public get schemaVersionId() {
        return this.getStringAttribute('schema_version_id');
    }
    public set schemaVersionId(value: string) {
        this._schemaVersionId = value;
    }
    public resetSchemaVersionId() {
        this._schemaVersionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaVersionIdInput() {
        return this._schemaVersionId;
    }

    // schema_version_number - computed: true, optional: true, required: false
    private _schemaVersionNumber?: number; 
    public get schemaVersionNumber() {
        return this.getNumberAttribute('schema_version_number');
    }
    public set schemaVersionNumber(value: number) {
        this._schemaVersionNumber = value;
    }
    public resetSchemaVersionNumber() {
        this._schemaVersionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaVersionNumberInput() {
        return this._schemaVersionNumber;
    }
}
export interface SerdeInfoProperty {
    /**
    * Name of the SerDe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#name CcPartition#name}
    */
    readonly name?: string;
    /**
    * These key-value pairs define initialization parameters for the SerDe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#parameters CcPartition#parameters}
    */
    readonly parameters?: string;
    /**
    * Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#serialization_library CcPartition#serialization_library}
    */
    readonly serializationLibrary?: string;
}
export class SerdeInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SerdeInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._serializationLibrary !== undefined) {
            hasAnyValues = true;
            internalValueResult.serializationLibrary = this._serializationLibrary;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SerdeInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._parameters = undefined;
            this._serializationLibrary = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._parameters = value.parameters;
            this._serializationLibrary = value.serializationLibrary;
        }
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

    // parameters - computed: true, optional: true, required: false
    private _parameters?: string; 
    public get parameters() {
        return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // serialization_library - computed: true, optional: true, required: false
    private _serializationLibrary?: string; 
    public get serializationLibrary() {
        return this.getStringAttribute('serialization_library');
    }
    public set serializationLibrary(value: string) {
        this._serializationLibrary = value;
    }
    public resetSerializationLibrary() {
        this._serializationLibrary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serializationLibraryInput() {
        return this._serializationLibrary;
    }
}
export interface SkewedInfoProperty {
    /**
    * A list of values that appear so frequently as to be considered skewed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#skewed_column_names CcPartition#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * A mapping of skewed values to the columns that contain them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#skewed_column_value_location_maps CcPartition#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: string;
    /**
    * A list of names of columns that contain skewed values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#skewed_column_values CcPartition#skewed_column_values}
    */
    readonly skewedColumnValues?: string[];
}
export class SkewedInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SkewedInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._skewedColumnNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.skewedColumnNames = this._skewedColumnNames;
        }
        if (this._skewedColumnValueLocationMaps !== undefined) {
            hasAnyValues = true;
            internalValueResult.skewedColumnValueLocationMaps = this._skewedColumnValueLocationMaps;
        }
        if (this._skewedColumnValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.skewedColumnValues = this._skewedColumnValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SkewedInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._skewedColumnNames = undefined;
            this._skewedColumnValueLocationMaps = undefined;
            this._skewedColumnValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._skewedColumnNames = value.skewedColumnNames;
            this._skewedColumnValueLocationMaps = value.skewedColumnValueLocationMaps;
            this._skewedColumnValues = value.skewedColumnValues;
        }
    }

    // skewed_column_names - computed: true, optional: true, required: false
    private _skewedColumnNames?: string[]; 
    public get skewedColumnNames() {
        return this.getListAttribute('skewed_column_names');
    }
    public set skewedColumnNames(value: string[]) {
        this._skewedColumnNames = value;
    }
    public resetSkewedColumnNames() {
        this._skewedColumnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnNamesInput() {
        return this._skewedColumnNames;
    }

    // skewed_column_value_location_maps - computed: true, optional: true, required: false
    private _skewedColumnValueLocationMaps?: string; 
    public get skewedColumnValueLocationMaps() {
        return this.getStringAttribute('skewed_column_value_location_maps');
    }
    public set skewedColumnValueLocationMaps(value: string) {
        this._skewedColumnValueLocationMaps = value;
    }
    public resetSkewedColumnValueLocationMaps() {
        this._skewedColumnValueLocationMaps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnValueLocationMapsInput() {
        return this._skewedColumnValueLocationMaps;
    }

    // skewed_column_values - computed: true, optional: true, required: false
    private _skewedColumnValues?: string[]; 
    public get skewedColumnValues() {
        return this.getListAttribute('skewed_column_values');
    }
    public set skewedColumnValues(value: string[]) {
        this._skewedColumnValues = value;
    }
    public resetSkewedColumnValues() {
        this._skewedColumnValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedColumnValuesInput() {
        return this._skewedColumnValues;
    }
}
export interface OrderProperty {
    /**
    * The name of the column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#column CcPartition#column}
    */
    readonly column?: string;
    /**
    * Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#sort_order CcPartition#sort_order}
    */
    readonly sortOrder?: number;
}
export class OrderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OrderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._column !== undefined) {
            hasAnyValues = true;
            internalValueResult.column = this._column;
        }
        if (this._sortOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortOrder = this._sortOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._column = undefined;
            this._sortOrder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._column = value.column;
            this._sortOrder = value.sortOrder;
        }
    }

    // column - computed: true, optional: true, required: false
    private _column?: string; 
    public get column() {
        return this.getStringAttribute('column');
    }
    public set column(value: string) {
        this._column = value;
    }
    public resetColumn() {
        this._column = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnInput() {
        return this._column;
    }

    // sort_order - computed: true, optional: true, required: false
    private _sortOrder?: number; 
    public get sortOrder() {
        return this.getNumberAttribute('sort_order');
    }
    public set sortOrder(value: number) {
        this._sortOrder = value;
    }
    public resetSortOrder() {
        this._sortOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortOrderInput() {
        return this._sortOrder;
    }
}

export class OrderPropertyList extends cdktn.ComplexList {
    public internalValue? : OrderProperty[] | cdktn.IResolvable

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
    public get(index: number): OrderPropertyOutputReference {
        return new OrderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StorageDescriptorProperty {
    /**
    * A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#bucket_columns CcPartition#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * A list of the Columns in the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#columns CcPartition#columns}
    */
    readonly columns?: ColumnProperty[] | cdktn.IResolvable;
    /**
    * True if the data in the table is compressed, or False if not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#compressed CcPartition#compressed}
    */
    readonly compressed?: boolean | cdktn.IResolvable;
    /**
    * The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#input_format CcPartition#input_format}
    */
    readonly inputFormat?: string;
    /**
    * The physical location of the table. By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#location CcPartition#location}
    */
    readonly location?: string;
    /**
    * The number of buckets. You must specify this property if the partition contains any dimension columns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#number_of_buckets CcPartition#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#output_format CcPartition#output_format}
    */
    readonly outputFormat?: string;
    /**
    * The user-supplied properties in key-value form.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#parameters CcPartition#parameters}
    */
    readonly parameters?: string;
    /**
    * An object that references a schema stored in the AWS Glue Schema Registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#schema_reference CcPartition#schema_reference}
    */
    readonly schemaReference?: SchemaReferenceProperty;
    /**
    * The serialization/deserialization (SerDe) information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#serde_info CcPartition#serde_info}
    */
    readonly serdeInfo?: SerdeInfoProperty;
    /**
    * The information about values that appear frequently in a column (skewed values).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#skewed_info CcPartition#skewed_info}
    */
    readonly skewedInfo?: SkewedInfoProperty;
    /**
    * A list specifying the sort order of each bucket in the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#sort_columns CcPartition#sort_columns}
    */
    readonly sortColumns?: OrderProperty[] | cdktn.IResolvable;
    /**
    * True if the table data is stored in subdirectories, or False if not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#stored_as_sub_directories CcPartition#stored_as_sub_directories}
    */
    readonly storedAsSubDirectories?: boolean | cdktn.IResolvable;
}
export class StorageDescriptorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageDescriptorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketColumns = this._bucketColumns;
        }
        if (this._columns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns?.internalValue;
        }
        if (this._compressed !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressed = this._compressed;
        }
        if (this._inputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputFormat = this._inputFormat;
        }
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._numberOfBuckets !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfBuckets = this._numberOfBuckets;
        }
        if (this._outputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputFormat = this._outputFormat;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._schemaReference?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaReference = this._schemaReference?.internalValue;
        }
        if (this._serdeInfo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serdeInfo = this._serdeInfo?.internalValue;
        }
        if (this._skewedInfo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.skewedInfo = this._skewedInfo?.internalValue;
        }
        if (this._sortColumns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortColumns = this._sortColumns?.internalValue;
        }
        if (this._storedAsSubDirectories !== undefined) {
            hasAnyValues = true;
            internalValueResult.storedAsSubDirectories = this._storedAsSubDirectories;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageDescriptorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketColumns = undefined;
            this._columns.internalValue = undefined;
            this._compressed = undefined;
            this._inputFormat = undefined;
            this._location = undefined;
            this._numberOfBuckets = undefined;
            this._outputFormat = undefined;
            this._parameters = undefined;
            this._schemaReference.internalValue = undefined;
            this._serdeInfo.internalValue = undefined;
            this._skewedInfo.internalValue = undefined;
            this._sortColumns.internalValue = undefined;
            this._storedAsSubDirectories = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketColumns = value.bucketColumns;
            this._columns.internalValue = value.columns;
            this._compressed = value.compressed;
            this._inputFormat = value.inputFormat;
            this._location = value.location;
            this._numberOfBuckets = value.numberOfBuckets;
            this._outputFormat = value.outputFormat;
            this._parameters = value.parameters;
            this._schemaReference.internalValue = value.schemaReference;
            this._serdeInfo.internalValue = value.serdeInfo;
            this._skewedInfo.internalValue = value.skewedInfo;
            this._sortColumns.internalValue = value.sortColumns;
            this._storedAsSubDirectories = value.storedAsSubDirectories;
        }
    }

    // bucket_columns - computed: true, optional: true, required: false
    private _bucketColumns?: string[]; 
    public get bucketColumns() {
        return this.getListAttribute('bucket_columns');
    }
    public set bucketColumns(value: string[]) {
        this._bucketColumns = value;
    }
    public resetBucketColumns() {
        this._bucketColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketColumnsInput() {
        return this._bucketColumns;
    }

    // columns - computed: true, optional: true, required: false
    private _columns = new ColumnPropertyList(this, "columns", false);
    public get columns() {
        return this._columns;
    }
    public putColumns(value: ColumnProperty[] | cdktn.IResolvable) {
        this._columns.internalValue = value;
    }
    public resetColumns() {
        this._columns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns.internalValue;
    }

    // compressed - computed: true, optional: true, required: false
    private _compressed?: boolean | cdktn.IResolvable; 
    public get compressed() {
        return this.getBooleanAttribute('compressed');
    }
    public set compressed(value: boolean | cdktn.IResolvable) {
        this._compressed = value;
    }
    public resetCompressed() {
        this._compressed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressedInput() {
        return this._compressed;
    }

    // input_format - computed: true, optional: true, required: false
    private _inputFormat?: string; 
    public get inputFormat() {
        return this.getStringAttribute('input_format');
    }
    public set inputFormat(value: string) {
        this._inputFormat = value;
    }
    public resetInputFormat() {
        this._inputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputFormatInput() {
        return this._inputFormat;
    }

    // location - computed: true, optional: true, required: false
    private _location?: string; 
    public get location() {
        return this.getStringAttribute('location');
    }
    public set location(value: string) {
        this._location = value;
    }
    public resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location;
    }

    // number_of_buckets - computed: true, optional: true, required: false
    private _numberOfBuckets?: number; 
    public get numberOfBuckets() {
        return this.getNumberAttribute('number_of_buckets');
    }
    public set numberOfBuckets(value: number) {
        this._numberOfBuckets = value;
    }
    public resetNumberOfBuckets() {
        this._numberOfBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfBucketsInput() {
        return this._numberOfBuckets;
    }

    // output_format - computed: true, optional: true, required: false
    private _outputFormat?: string; 
    public get outputFormat() {
        return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string) {
        this._outputFormat = value;
    }
    public resetOutputFormat() {
        this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
        return this._outputFormat;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: string; 
    public get parameters() {
        return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // schema_reference - computed: true, optional: true, required: false
    private _schemaReference = new SchemaReferencePropertyOutputReference(this, "schema_reference");
    public get schemaReference() {
        return this._schemaReference;
    }
    public putSchemaReference(value: SchemaReferenceProperty) {
        this._schemaReference.internalValue = value;
    }
    public resetSchemaReference() {
        this._schemaReference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaReferenceInput() {
        return this._schemaReference.internalValue;
    }

    // serde_info - computed: true, optional: true, required: false
    private _serdeInfo = new SerdeInfoPropertyOutputReference(this, "serde_info");
    public get serdeInfo() {
        return this._serdeInfo;
    }
    public putSerdeInfo(value: SerdeInfoProperty) {
        this._serdeInfo.internalValue = value;
    }
    public resetSerdeInfo() {
        this._serdeInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serdeInfoInput() {
        return this._serdeInfo.internalValue;
    }

    // skewed_info - computed: true, optional: true, required: false
    private _skewedInfo = new SkewedInfoPropertyOutputReference(this, "skewed_info");
    public get skewedInfo() {
        return this._skewedInfo;
    }
    public putSkewedInfo(value: SkewedInfoProperty) {
        this._skewedInfo.internalValue = value;
    }
    public resetSkewedInfo() {
        this._skewedInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skewedInfoInput() {
        return this._skewedInfo.internalValue;
    }

    // sort_columns - computed: true, optional: true, required: false
    private _sortColumns = new OrderPropertyList(this, "sort_columns", false);
    public get sortColumns() {
        return this._sortColumns;
    }
    public putSortColumns(value: OrderProperty[] | cdktn.IResolvable) {
        this._sortColumns.internalValue = value;
    }
    public resetSortColumns() {
        this._sortColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sortColumnsInput() {
        return this._sortColumns.internalValue;
    }

    // stored_as_sub_directories - computed: true, optional: true, required: false
    private _storedAsSubDirectories?: boolean | cdktn.IResolvable; 
    public get storedAsSubDirectories() {
        return this.getBooleanAttribute('stored_as_sub_directories');
    }
    public set storedAsSubDirectories(value: boolean | cdktn.IResolvable) {
        this._storedAsSubDirectories = value;
    }
    public resetStoredAsSubDirectories() {
        this._storedAsSubDirectories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storedAsSubDirectoriesInput() {
        return this._storedAsSubDirectories;
    }
}
export interface PartitionInputProperty {
    /**
    * Key-value pairs defining partition parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#parameters CcPartition#parameters}
    */
    readonly parameters?: string;
    /**
    * Provides information about the physical location where the partition is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#storage_descriptor CcPartition#storage_descriptor}
    */
    readonly storageDescriptor?: StorageDescriptorProperty;
    /**
    * The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input. The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/glue_partition#values CcPartition#values}
    */
    readonly values: string[];
}
export class PartitionInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PartitionInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._storageDescriptor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageDescriptor = this._storageDescriptor?.internalValue;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameters = undefined;
            this._storageDescriptor.internalValue = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameters = value.parameters;
            this._storageDescriptor.internalValue = value.storageDescriptor;
            this._values = value.values;
        }
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: string; 
    public get parameters() {
        return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // storage_descriptor - computed: true, optional: true, required: false
    private _storageDescriptor = new StorageDescriptorPropertyOutputReference(this, "storage_descriptor");
    public get storageDescriptor() {
        return this._storageDescriptor;
    }
    public putStorageDescriptor(value: StorageDescriptorProperty) {
        this._storageDescriptor.internalValue = value;
    }
    public resetStorageDescriptor() {
        this._storageDescriptor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageDescriptorInput() {
        return this._storageDescriptor.internalValue;
    }

    // values - computed: false, optional: false, required: true
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}
}
