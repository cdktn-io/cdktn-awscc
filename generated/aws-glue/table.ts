// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTableProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the Data Catalog in which to create the Table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id CcTable#catalog_id}
    */
    readonly catalogId: string;
    /**
    * The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name CcTable#database_name}
    */
    readonly databaseName: string;
    /**
    * The table name. For Hive compatibility, this is folded to lowercase when it is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * Specifies an OpenTableFormatInput structure when creating an open format table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#open_table_format_input CcTable#open_table_format_input}
    */
    readonly openTableFormatInput?: CcTable.OpenTableFormatInputProperty;
    /**
    * A structure used to define a table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_input CcTable#table_input}
    */
    readonly tableInput?: CcTable.TableInputProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table awscc_glue_table}
*/
export class CcTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTable to import
    * @param importFromId The id of the existing CcTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table awscc_glue_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTableProps
    */
    public constructor(scope: Construct, id: string, config: CcTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_table',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
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
        this._name = config.name;
        this._openTableFormatInput.internalValue = config.openTableFormatInput;
        this._tableInput.internalValue = config.tableInput;
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

    // open_table_format_input - computed: true, optional: true, required: false
    private _openTableFormatInput = new CcTable.OpenTableFormatInputPropertyOutputReference(this, "open_table_format_input");
    public get openTableFormatInput() {
        return this._openTableFormatInput;
    }
    public putOpenTableFormatInput(value: CcTable.OpenTableFormatInputProperty) {
        this._openTableFormatInput.internalValue = value;
    }
    public resetOpenTableFormatInput() {
        this._openTableFormatInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openTableFormatInputInput() {
        return this._openTableFormatInput.internalValue;
    }

    // table_input - computed: true, optional: true, required: false
    private _tableInput = new CcTable.TableInputPropertyOutputReference(this, "table_input");
    public get tableInput() {
        return this._tableInput;
    }
    public putTableInput(value: CcTable.TableInputProperty) {
        this._tableInput.internalValue = value;
    }
    public resetTableInput() {
        this._tableInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableInputInput() {
        return this._tableInput.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            catalog_id: cdktn.stringToTerraform(this._catalogId),
            database_name: cdktn.stringToTerraform(this._databaseName),
            name: cdktn.stringToTerraform(this._name),
            open_table_format_input: ccTableOpenTableFormatInputPropertyToTerraform(this._openTableFormatInput.internalValue),
            table_input: ccTableTableInputPropertyToTerraform(this._tableInput.internalValue),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            open_table_format_input: {
                value: ccTableOpenTableFormatInputPropertyToHclTerraform(this._openTableFormatInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.OpenTableFormatInputProperty",
            },
            table_input: {
                value: ccTableTableInputPropertyToHclTerraform(this._tableInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.TableInputProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTableIcebergPartitionFieldPropertyToTerraform(struct?: CcTable.IcebergPartitionFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_id: cdktn.numberToTerraform(struct!.fieldId),
        name: cdktn.stringToTerraform(struct!.name),
        source_id: cdktn.numberToTerraform(struct!.sourceId),
        transform: cdktn.stringToTerraform(struct!.transform),
    }
}


export function ccTableIcebergPartitionFieldPropertyToHclTerraform(struct?: CcTable.IcebergPartitionFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_id: {
            value: cdktn.numberToHclTerraform(struct!.fieldId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_id: {
            value: cdktn.numberToHclTerraform(struct!.sourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        transform: {
            value: cdktn.stringToHclTerraform(struct!.transform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableIcebergPartitionSpecPropertyToTerraform(struct?: CcTable.IcebergPartitionSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fields: cdktn.listMapper(ccTableIcebergPartitionFieldPropertyToTerraform, false)(struct!.fields),
        spec_id: cdktn.numberToTerraform(struct!.specId),
    }
}


export function ccTableIcebergPartitionSpecPropertyToHclTerraform(struct?: CcTable.IcebergPartitionSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fields: {
            value: cdktn.listMapperHcl(ccTableIcebergPartitionFieldPropertyToHclTerraform, false)(struct!.fields),
            isBlock: true,
            type: "list",
            storageClassType: "IcebergPartitionFieldPropertyList",
        },
        spec_id: {
            value: cdktn.numberToHclTerraform(struct!.specId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableIcebergStructFieldPropertyToTerraform(struct?: CcTable.IcebergStructFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        doc: cdktn.stringToTerraform(struct!.doc),
        id: cdktn.numberToTerraform(struct!.id),
        name: cdktn.stringToTerraform(struct!.name),
        required: cdktn.booleanToTerraform(struct!.required),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTableIcebergStructFieldPropertyToHclTerraform(struct?: CcTable.IcebergStructFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        doc: {
            value: cdktn.stringToHclTerraform(struct!.doc),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.numberToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccTableIcebergSchemaPropertyToTerraform(struct?: CcTable.IcebergSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fields: cdktn.listMapper(ccTableIcebergStructFieldPropertyToTerraform, false)(struct!.fields),
        identifier_field_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.identifierFieldIds),
        schema_id: cdktn.numberToTerraform(struct!.schemaId),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTableIcebergSchemaPropertyToHclTerraform(struct?: CcTable.IcebergSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fields: {
            value: cdktn.listMapperHcl(ccTableIcebergStructFieldPropertyToHclTerraform, false)(struct!.fields),
            isBlock: true,
            type: "list",
            storageClassType: "IcebergStructFieldPropertyList",
        },
        identifier_field_ids: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.identifierFieldIds),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        schema_id: {
            value: cdktn.numberToHclTerraform(struct!.schemaId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccTableIcebergSortFieldPropertyToTerraform(struct?: CcTable.IcebergSortFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        direction: cdktn.stringToTerraform(struct!.direction),
        null_order: cdktn.stringToTerraform(struct!.nullOrder),
        source_id: cdktn.numberToTerraform(struct!.sourceId),
        transform: cdktn.stringToTerraform(struct!.transform),
    }
}


export function ccTableIcebergSortFieldPropertyToHclTerraform(struct?: CcTable.IcebergSortFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        direction: {
            value: cdktn.stringToHclTerraform(struct!.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        null_order: {
            value: cdktn.stringToHclTerraform(struct!.nullOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_id: {
            value: cdktn.numberToHclTerraform(struct!.sourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        transform: {
            value: cdktn.stringToHclTerraform(struct!.transform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableIcebergSortOrderPropertyToTerraform(struct?: CcTable.IcebergSortOrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fields: cdktn.listMapper(ccTableIcebergSortFieldPropertyToTerraform, false)(struct!.fields),
        order_id: cdktn.numberToTerraform(struct!.orderId),
    }
}


export function ccTableIcebergSortOrderPropertyToHclTerraform(struct?: CcTable.IcebergSortOrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fields: {
            value: cdktn.listMapperHcl(ccTableIcebergSortFieldPropertyToHclTerraform, false)(struct!.fields),
            isBlock: true,
            type: "list",
            storageClassType: "IcebergSortFieldPropertyList",
        },
        order_id: {
            value: cdktn.numberToHclTerraform(struct!.orderId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableIcebergTableInputPropertyToTerraform(struct?: CcTable.IcebergTableInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        location: cdktn.stringToTerraform(struct!.location),
        partition_spec: ccTableIcebergPartitionSpecPropertyToTerraform(struct!.partitionSpec),
        properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
        schema: ccTableIcebergSchemaPropertyToTerraform(struct!.schema),
        write_order: ccTableIcebergSortOrderPropertyToTerraform(struct!.writeOrder),
    }
}


export function ccTableIcebergTableInputPropertyToHclTerraform(struct?: CcTable.IcebergTableInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        location: {
            value: cdktn.stringToHclTerraform(struct!.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_spec: {
            value: ccTableIcebergPartitionSpecPropertyToHclTerraform(struct!.partitionSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergPartitionSpecProperty",
        },
        properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        schema: {
            value: ccTableIcebergSchemaPropertyToHclTerraform(struct!.schema),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergSchemaProperty",
        },
        write_order: {
            value: ccTableIcebergSortOrderPropertyToHclTerraform(struct!.writeOrder),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergSortOrderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableIcebergInputPropertyToTerraform(struct?: CcTable.IcebergInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iceberg_table_input: ccTableIcebergTableInputPropertyToTerraform(struct!.icebergTableInput),
        metadata_operation: cdktn.stringToTerraform(struct!.metadataOperation),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccTableIcebergInputPropertyToHclTerraform(struct?: CcTable.IcebergInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iceberg_table_input: {
            value: ccTableIcebergTableInputPropertyToHclTerraform(struct!.icebergTableInput),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergTableInputProperty",
        },
        metadata_operation: {
            value: cdktn.stringToHclTerraform(struct!.metadataOperation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOpenTableFormatInputPropertyToTerraform(struct?: CcTable.OpenTableFormatInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iceberg_input: ccTableIcebergInputPropertyToTerraform(struct!.icebergInput),
    }
}


export function ccTableOpenTableFormatInputPropertyToHclTerraform(struct?: CcTable.OpenTableFormatInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iceberg_input: {
            value: ccTableIcebergInputPropertyToHclTerraform(struct!.icebergInput),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableColumnPropertyToTerraform(struct?: CcTable.ColumnProperty | cdktn.IResolvable): any {
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


export function ccTableColumnPropertyToHclTerraform(struct?: CcTable.ColumnProperty | cdktn.IResolvable): any {
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


export function ccTableColumnsPropertyToTerraform(struct?: CcTable.ColumnsProperty | cdktn.IResolvable): any {
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


export function ccTableColumnsPropertyToHclTerraform(struct?: CcTable.ColumnsProperty | cdktn.IResolvable): any {
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


export function ccTableSchemaIdPropertyToTerraform(struct?: CcTable.SchemaIdProperty | cdktn.IResolvable): any {
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


export function ccTableSchemaIdPropertyToHclTerraform(struct?: CcTable.SchemaIdProperty | cdktn.IResolvable): any {
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


export function ccTableSchemaReferencePropertyToTerraform(struct?: CcTable.SchemaReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schema_id: ccTableSchemaIdPropertyToTerraform(struct!.schemaId),
        schema_version_id: cdktn.stringToTerraform(struct!.schemaVersionId),
        schema_version_number: cdktn.numberToTerraform(struct!.schemaVersionNumber),
    }
}


export function ccTableSchemaReferencePropertyToHclTerraform(struct?: CcTable.SchemaReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schema_id: {
            value: ccTableSchemaIdPropertyToHclTerraform(struct!.schemaId),
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


export function ccTableSerdeInfoPropertyToTerraform(struct?: CcTable.SerdeInfoProperty | cdktn.IResolvable): any {
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


export function ccTableSerdeInfoPropertyToHclTerraform(struct?: CcTable.SerdeInfoProperty | cdktn.IResolvable): any {
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


export function ccTableSkewedInfoPropertyToTerraform(struct?: CcTable.SkewedInfoProperty | cdktn.IResolvable): any {
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


export function ccTableSkewedInfoPropertyToHclTerraform(struct?: CcTable.SkewedInfoProperty | cdktn.IResolvable): any {
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


export function ccTableOrderPropertyToTerraform(struct?: CcTable.OrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column: cdktn.stringToTerraform(struct!.column),
        sort_order: cdktn.numberToTerraform(struct!.sortOrder),
    }
}


export function ccTableOrderPropertyToHclTerraform(struct?: CcTable.OrderProperty | cdktn.IResolvable): any {
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


export function ccTableStorageDescriptorPropertyToTerraform(struct?: CcTable.StorageDescriptorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bucketColumns),
        columns: cdktn.listMapper(ccTableColumnsPropertyToTerraform, false)(struct!.columns),
        compressed: cdktn.booleanToTerraform(struct!.compressed),
        input_format: cdktn.stringToTerraform(struct!.inputFormat),
        location: cdktn.stringToTerraform(struct!.location),
        number_of_buckets: cdktn.numberToTerraform(struct!.numberOfBuckets),
        output_format: cdktn.stringToTerraform(struct!.outputFormat),
        parameters: cdktn.stringToTerraform(struct!.parameters),
        schema_reference: ccTableSchemaReferencePropertyToTerraform(struct!.schemaReference),
        serde_info: ccTableSerdeInfoPropertyToTerraform(struct!.serdeInfo),
        skewed_info: ccTableSkewedInfoPropertyToTerraform(struct!.skewedInfo),
        sort_columns: cdktn.listMapper(ccTableOrderPropertyToTerraform, false)(struct!.sortColumns),
        stored_as_sub_directories: cdktn.booleanToTerraform(struct!.storedAsSubDirectories),
    }
}


export function ccTableStorageDescriptorPropertyToHclTerraform(struct?: CcTable.StorageDescriptorProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccTableColumnsPropertyToHclTerraform, false)(struct!.columns),
            isBlock: true,
            type: "list",
            storageClassType: "ColumnsPropertyList",
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
            value: ccTableSchemaReferencePropertyToHclTerraform(struct!.schemaReference),
            isBlock: true,
            type: "struct",
            storageClassType: "SchemaReferenceProperty",
        },
        serde_info: {
            value: ccTableSerdeInfoPropertyToHclTerraform(struct!.serdeInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "SerdeInfoProperty",
        },
        skewed_info: {
            value: ccTableSkewedInfoPropertyToHclTerraform(struct!.skewedInfo),
            isBlock: true,
            type: "struct",
            storageClassType: "SkewedInfoProperty",
        },
        sort_columns: {
            value: cdktn.listMapperHcl(ccTableOrderPropertyToHclTerraform, false)(struct!.sortColumns),
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


export function ccTableTableIdentifierPropertyToTerraform(struct?: CcTable.TableIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        name: cdktn.stringToTerraform(struct!.name),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccTableTableIdentifierPropertyToHclTerraform(struct?: CcTable.TableIdentifierProperty | cdktn.IResolvable): any {
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableViewRepresentationPropertyToTerraform(struct?: CcTable.ViewRepresentationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dialect: cdktn.stringToTerraform(struct!.dialect),
        dialect_version: cdktn.stringToTerraform(struct!.dialectVersion),
        validation_connection: cdktn.stringToTerraform(struct!.validationConnection),
        view_expanded_text: cdktn.stringToTerraform(struct!.viewExpandedText),
        view_original_text: cdktn.stringToTerraform(struct!.viewOriginalText),
    }
}


export function ccTableViewRepresentationPropertyToHclTerraform(struct?: CcTable.ViewRepresentationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dialect: {
            value: cdktn.stringToHclTerraform(struct!.dialect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dialect_version: {
            value: cdktn.stringToHclTerraform(struct!.dialectVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation_connection: {
            value: cdktn.stringToHclTerraform(struct!.validationConnection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        view_expanded_text: {
            value: cdktn.stringToHclTerraform(struct!.viewExpandedText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        view_original_text: {
            value: cdktn.stringToHclTerraform(struct!.viewOriginalText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableViewDefinitionPropertyToTerraform(struct?: CcTable.ViewDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definer: cdktn.stringToTerraform(struct!.definer),
        is_protected: cdktn.booleanToTerraform(struct!.isProtected),
        representations: cdktn.listMapper(ccTableViewRepresentationPropertyToTerraform, false)(struct!.representations),
        sub_objects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subObjects),
    }
}


export function ccTableViewDefinitionPropertyToHclTerraform(struct?: CcTable.ViewDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definer: {
            value: cdktn.stringToHclTerraform(struct!.definer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_protected: {
            value: cdktn.booleanToHclTerraform(struct!.isProtected),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        representations: {
            value: cdktn.listMapperHcl(ccTableViewRepresentationPropertyToHclTerraform, false)(struct!.representations),
            isBlock: true,
            type: "list",
            storageClassType: "ViewRepresentationPropertyList",
        },
        sub_objects: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subObjects),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableTableInputPropertyToTerraform(struct?: CcTable.TableInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
        owner: cdktn.stringToTerraform(struct!.owner),
        parameters: cdktn.stringToTerraform(struct!.parameters),
        partition_keys: cdktn.listMapper(ccTableColumnPropertyToTerraform, false)(struct!.partitionKeys),
        retention: cdktn.numberToTerraform(struct!.retention),
        storage_descriptor: ccTableStorageDescriptorPropertyToTerraform(struct!.storageDescriptor),
        table_type: cdktn.stringToTerraform(struct!.tableType),
        target_table: ccTableTableIdentifierPropertyToTerraform(struct!.targetTable),
        view_definition: ccTableViewDefinitionPropertyToTerraform(struct!.viewDefinition),
        view_expanded_text: cdktn.stringToTerraform(struct!.viewExpandedText),
        view_original_text: cdktn.stringToTerraform(struct!.viewOriginalText),
    }
}


export function ccTableTableInputPropertyToHclTerraform(struct?: CcTable.TableInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
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
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
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
        partition_keys: {
            value: cdktn.listMapperHcl(ccTableColumnPropertyToHclTerraform, false)(struct!.partitionKeys),
            isBlock: true,
            type: "list",
            storageClassType: "ColumnPropertyList",
        },
        retention: {
            value: cdktn.numberToHclTerraform(struct!.retention),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_descriptor: {
            value: ccTableStorageDescriptorPropertyToHclTerraform(struct!.storageDescriptor),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageDescriptorProperty",
        },
        table_type: {
            value: cdktn.stringToHclTerraform(struct!.tableType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_table: {
            value: ccTableTableIdentifierPropertyToHclTerraform(struct!.targetTable),
            isBlock: true,
            type: "struct",
            storageClassType: "TableIdentifierProperty",
        },
        view_definition: {
            value: ccTableViewDefinitionPropertyToHclTerraform(struct!.viewDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "ViewDefinitionProperty",
        },
        view_expanded_text: {
            value: cdktn.stringToHclTerraform(struct!.viewExpandedText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        view_original_text: {
            value: cdktn.stringToHclTerraform(struct!.viewOriginalText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTable {
export interface IcebergPartitionFieldProperty {
    /**
    * The partition field ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#field_id CcTable#field_id}
    */
    readonly fieldId?: number;
    /**
    * The partition field name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * The source field ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#source_id CcTable#source_id}
    */
    readonly sourceId?: number;
    /**
    * The transform to apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#transform CcTable#transform}
    */
    readonly transform?: string;
}
export class IcebergPartitionFieldPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IcebergPartitionFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldId = this._fieldId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceId = this._sourceId;
        }
        if (this._transform !== undefined) {
            hasAnyValues = true;
            internalValueResult.transform = this._transform;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergPartitionFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldId = undefined;
            this._name = undefined;
            this._sourceId = undefined;
            this._transform = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldId = value.fieldId;
            this._name = value.name;
            this._sourceId = value.sourceId;
            this._transform = value.transform;
        }
    }

    // field_id - computed: true, optional: true, required: false
    private _fieldId?: number; 
    public get fieldId() {
        return this.getNumberAttribute('field_id');
    }
    public set fieldId(value: number) {
        this._fieldId = value;
    }
    public resetFieldId() {
        this._fieldId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldIdInput() {
        return this._fieldId;
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

    // source_id - computed: true, optional: true, required: false
    private _sourceId?: number; 
    public get sourceId() {
        return this.getNumberAttribute('source_id');
    }
    public set sourceId(value: number) {
        this._sourceId = value;
    }
    public resetSourceId() {
        this._sourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdInput() {
        return this._sourceId;
    }

    // transform - computed: true, optional: true, required: false
    private _transform?: string; 
    public get transform() {
        return this.getStringAttribute('transform');
    }
    public set transform(value: string) {
        this._transform = value;
    }
    public resetTransform() {
        this._transform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformInput() {
        return this._transform;
    }
}

export class IcebergPartitionFieldPropertyList extends cdktn.ComplexList {
    public internalValue? : IcebergPartitionFieldProperty[] | cdktn.IResolvable

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
    public get(index: number): IcebergPartitionFieldPropertyOutputReference {
        return new IcebergPartitionFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IcebergPartitionSpecProperty {
    /**
    * The partition fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields CcTable#fields}
    */
    readonly fields?: IcebergPartitionFieldProperty[] | cdktn.IResolvable;
    /**
    * The spec ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#spec_id CcTable#spec_id}
    */
    readonly specId?: number;
}
export class IcebergPartitionSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergPartitionSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fields = this._fields?.internalValue;
        }
        if (this._specId !== undefined) {
            hasAnyValues = true;
            internalValueResult.specId = this._specId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergPartitionSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fields.internalValue = undefined;
            this._specId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fields.internalValue = value.fields;
            this._specId = value.specId;
        }
    }

    // fields - computed: true, optional: true, required: false
    private _fields = new IcebergPartitionFieldPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: IcebergPartitionFieldProperty[] | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    public resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }

    // spec_id - computed: true, optional: true, required: false
    private _specId?: number; 
    public get specId() {
        return this.getNumberAttribute('spec_id');
    }
    public set specId(value: number) {
        this._specId = value;
    }
    public resetSpecId() {
        this._specId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get specIdInput() {
        return this._specId;
    }
}
export interface IcebergStructFieldProperty {
    /**
    * Documentation for the field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#doc CcTable#doc}
    */
    readonly doc?: string;
    /**
    * The field ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#id CcTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: number;
    /**
    * The field name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * Whether the field is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#required CcTable#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
    /**
    * The field type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type CcTable#type}
    */
    readonly type?: string;
}
export class IcebergStructFieldPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IcebergStructFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._doc !== undefined) {
            hasAnyValues = true;
            internalValueResult.doc = this._doc;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergStructFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._doc = undefined;
            this._id = undefined;
            this._name = undefined;
            this._required = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._doc = value.doc;
            this._id = value.id;
            this._name = value.name;
            this._required = value.required;
            this._type = value.type;
        }
    }

    // doc - computed: true, optional: true, required: false
    private _doc?: string; 
    public get doc() {
        return this.getStringAttribute('doc');
    }
    public set doc(value: string) {
        this._doc = value;
    }
    public resetDoc() {
        this._doc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get docInput() {
        return this._doc;
    }

    // id - computed: true, optional: true, required: false
    private _id?: number; 
    public get id() {
        return this.getNumberAttribute('id');
    }
    public set id(value: number) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
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

export class IcebergStructFieldPropertyList extends cdktn.ComplexList {
    public internalValue? : IcebergStructFieldProperty[] | cdktn.IResolvable

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
    public get(index: number): IcebergStructFieldPropertyOutputReference {
        return new IcebergStructFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IcebergSchemaProperty {
    /**
    * The fields in the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields CcTable#fields}
    */
    readonly fields?: IcebergStructFieldProperty[] | cdktn.IResolvable;
    /**
    * The identifier field IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#identifier_field_ids CcTable#identifier_field_ids}
    */
    readonly identifierFieldIds?: number[];
    /**
    * The schema ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id CcTable#schema_id}
    */
    readonly schemaId?: number;
    /**
    * The type of the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type CcTable#type}
    */
    readonly type?: string;
}
export class IcebergSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fields = this._fields?.internalValue;
        }
        if (this._identifierFieldIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifierFieldIds = this._identifierFieldIds;
        }
        if (this._schemaId !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaId = this._schemaId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fields.internalValue = undefined;
            this._identifierFieldIds = undefined;
            this._schemaId = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fields.internalValue = value.fields;
            this._identifierFieldIds = value.identifierFieldIds;
            this._schemaId = value.schemaId;
            this._type = value.type;
        }
    }

    // fields - computed: true, optional: true, required: false
    private _fields = new IcebergStructFieldPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: IcebergStructFieldProperty[] | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    public resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }

    // identifier_field_ids - computed: true, optional: true, required: false
    private _identifierFieldIds?: number[]; 
    public get identifierFieldIds() {
        return this.getNumberListAttribute('identifier_field_ids');
    }
    public set identifierFieldIds(value: number[]) {
        this._identifierFieldIds = value;
    }
    public resetIdentifierFieldIds() {
        this._identifierFieldIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierFieldIdsInput() {
        return this._identifierFieldIds;
    }

    // schema_id - computed: true, optional: true, required: false
    private _schemaId?: number; 
    public get schemaId() {
        return this.getNumberAttribute('schema_id');
    }
    public set schemaId(value: number) {
        this._schemaId = value;
    }
    public resetSchemaId() {
        this._schemaId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaIdInput() {
        return this._schemaId;
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
export interface IcebergSortFieldProperty {
    /**
    * The sort direction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#direction CcTable#direction}
    */
    readonly direction?: string;
    /**
    * The null ordering.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#null_order CcTable#null_order}
    */
    readonly nullOrder?: string;
    /**
    * The source field ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#source_id CcTable#source_id}
    */
    readonly sourceId?: number;
    /**
    * The transform to apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#transform CcTable#transform}
    */
    readonly transform?: string;
}
export class IcebergSortFieldPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IcebergSortFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._nullOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.nullOrder = this._nullOrder;
        }
        if (this._sourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceId = this._sourceId;
        }
        if (this._transform !== undefined) {
            hasAnyValues = true;
            internalValueResult.transform = this._transform;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergSortFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._direction = undefined;
            this._nullOrder = undefined;
            this._sourceId = undefined;
            this._transform = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._direction = value.direction;
            this._nullOrder = value.nullOrder;
            this._sourceId = value.sourceId;
            this._transform = value.transform;
        }
    }

    // direction - computed: true, optional: true, required: false
    private _direction?: string; 
    public get direction() {
        return this.getStringAttribute('direction');
    }
    public set direction(value: string) {
        this._direction = value;
    }
    public resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directionInput() {
        return this._direction;
    }

    // null_order - computed: true, optional: true, required: false
    private _nullOrder?: string; 
    public get nullOrder() {
        return this.getStringAttribute('null_order');
    }
    public set nullOrder(value: string) {
        this._nullOrder = value;
    }
    public resetNullOrder() {
        this._nullOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nullOrderInput() {
        return this._nullOrder;
    }

    // source_id - computed: true, optional: true, required: false
    private _sourceId?: number; 
    public get sourceId() {
        return this.getNumberAttribute('source_id');
    }
    public set sourceId(value: number) {
        this._sourceId = value;
    }
    public resetSourceId() {
        this._sourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdInput() {
        return this._sourceId;
    }

    // transform - computed: true, optional: true, required: false
    private _transform?: string; 
    public get transform() {
        return this.getStringAttribute('transform');
    }
    public set transform(value: string) {
        this._transform = value;
    }
    public resetTransform() {
        this._transform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformInput() {
        return this._transform;
    }
}

export class IcebergSortFieldPropertyList extends cdktn.ComplexList {
    public internalValue? : IcebergSortFieldProperty[] | cdktn.IResolvable

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
    public get(index: number): IcebergSortFieldPropertyOutputReference {
        return new IcebergSortFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IcebergSortOrderProperty {
    /**
    * The sort fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#fields CcTable#fields}
    */
    readonly fields?: IcebergSortFieldProperty[] | cdktn.IResolvable;
    /**
    * The order ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#order_id CcTable#order_id}
    */
    readonly orderId?: number;
}
export class IcebergSortOrderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergSortOrderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fields = this._fields?.internalValue;
        }
        if (this._orderId !== undefined) {
            hasAnyValues = true;
            internalValueResult.orderId = this._orderId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergSortOrderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fields.internalValue = undefined;
            this._orderId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fields.internalValue = value.fields;
            this._orderId = value.orderId;
        }
    }

    // fields - computed: true, optional: true, required: false
    private _fields = new IcebergSortFieldPropertyList(this, "fields", false);
    public get fields() {
        return this._fields;
    }
    public putFields(value: IcebergSortFieldProperty[] | cdktn.IResolvable) {
        this._fields.internalValue = value;
    }
    public resetFields() {
        this._fields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
        return this._fields.internalValue;
    }

    // order_id - computed: true, optional: true, required: false
    private _orderId?: number; 
    public get orderId() {
        return this.getNumberAttribute('order_id');
    }
    public set orderId(value: number) {
        this._orderId = value;
    }
    public resetOrderId() {
        this._orderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderIdInput() {
        return this._orderId;
    }
}
export interface IcebergTableInputProperty {
    /**
    * The location of the Iceberg table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location CcTable#location}
    */
    readonly location?: string;
    /**
    * The partition spec for the Iceberg table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_spec CcTable#partition_spec}
    */
    readonly partitionSpec?: IcebergPartitionSpecProperty;
    /**
    * The properties for the Iceberg table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#properties CcTable#properties}
    */
    readonly properties?: { [key: string]: string };
    /**
    * The schema for the Iceberg table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema CcTable#schema}
    */
    readonly schema?: IcebergSchemaProperty;
    /**
    * The write order for the Iceberg table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#write_order CcTable#write_order}
    */
    readonly writeOrder?: IcebergSortOrderProperty;
}
export class IcebergTableInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergTableInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._partitionSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionSpec = this._partitionSpec?.internalValue;
        }
        if (this._properties !== undefined) {
            hasAnyValues = true;
            internalValueResult.properties = this._properties;
        }
        if (this._schema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema?.internalValue;
        }
        if (this._writeOrder?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeOrder = this._writeOrder?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergTableInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._location = undefined;
            this._partitionSpec.internalValue = undefined;
            this._properties = undefined;
            this._schema.internalValue = undefined;
            this._writeOrder.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._location = value.location;
            this._partitionSpec.internalValue = value.partitionSpec;
            this._properties = value.properties;
            this._schema.internalValue = value.schema;
            this._writeOrder.internalValue = value.writeOrder;
        }
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

    // partition_spec - computed: true, optional: true, required: false
    private _partitionSpec = new IcebergPartitionSpecPropertyOutputReference(this, "partition_spec");
    public get partitionSpec() {
        return this._partitionSpec;
    }
    public putPartitionSpec(value: IcebergPartitionSpecProperty) {
        this._partitionSpec.internalValue = value;
    }
    public resetPartitionSpec() {
        this._partitionSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionSpecInput() {
        return this._partitionSpec.internalValue;
    }

    // properties - computed: true, optional: true, required: false
    private _properties?: { [key: string]: string }; 
    public get properties() {
        return this.getStringMapAttribute('properties');
    }
    public set properties(value: { [key: string]: string }) {
        this._properties = value;
    }
    public resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties;
    }

    // schema - computed: true, optional: true, required: false
    private _schema = new IcebergSchemaPropertyOutputReference(this, "schema");
    public get schema() {
        return this._schema;
    }
    public putSchema(value: IcebergSchemaProperty) {
        this._schema.internalValue = value;
    }
    public resetSchema() {
        this._schema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema.internalValue;
    }

    // write_order - computed: true, optional: true, required: false
    private _writeOrder = new IcebergSortOrderPropertyOutputReference(this, "write_order");
    public get writeOrder() {
        return this._writeOrder;
    }
    public putWriteOrder(value: IcebergSortOrderProperty) {
        this._writeOrder.internalValue = value;
    }
    public resetWriteOrder() {
        this._writeOrder.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeOrderInput() {
        return this._writeOrder.internalValue;
    }
}
export interface IcebergInputProperty {
    /**
    * Specifies the Iceberg table configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_table_input CcTable#iceberg_table_input}
    */
    readonly icebergTableInput?: IcebergTableInputProperty;
    /**
    * A required metadata operation. Can only be set to CREATE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#metadata_operation CcTable#metadata_operation}
    */
    readonly metadataOperation?: string;
    /**
    * The table version of the Iceberg table. Defaults to 2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#version CcTable#version}
    */
    readonly version?: string;
}
export class IcebergInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._icebergTableInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icebergTableInput = this._icebergTableInput?.internalValue;
        }
        if (this._metadataOperation !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataOperation = this._metadataOperation;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._icebergTableInput.internalValue = undefined;
            this._metadataOperation = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._icebergTableInput.internalValue = value.icebergTableInput;
            this._metadataOperation = value.metadataOperation;
            this._version = value.version;
        }
    }

    // iceberg_table_input - computed: true, optional: true, required: false
    private _icebergTableInput = new IcebergTableInputPropertyOutputReference(this, "iceberg_table_input");
    public get icebergTableInput() {
        return this._icebergTableInput;
    }
    public putIcebergTableInput(value: IcebergTableInputProperty) {
        this._icebergTableInput.internalValue = value;
    }
    public resetIcebergTableInput() {
        this._icebergTableInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icebergTableInputInput() {
        return this._icebergTableInput.internalValue;
    }

    // metadata_operation - computed: true, optional: true, required: false
    private _metadataOperation?: string; 
    public get metadataOperation() {
        return this.getStringAttribute('metadata_operation');
    }
    public set metadataOperation(value: string) {
        this._metadataOperation = value;
    }
    public resetMetadataOperation() {
        this._metadataOperation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataOperationInput() {
        return this._metadataOperation;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface OpenTableFormatInputProperty {
    /**
    * Specifies an IcebergInput structure that defines an Apache Iceberg metadata table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#iceberg_input CcTable#iceberg_input}
    */
    readonly icebergInput?: IcebergInputProperty;
}
export class OpenTableFormatInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenTableFormatInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._icebergInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icebergInput = this._icebergInput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenTableFormatInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._icebergInput.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._icebergInput.internalValue = value.icebergInput;
        }
    }

    // iceberg_input - computed: true, optional: true, required: false
    private _icebergInput = new IcebergInputPropertyOutputReference(this, "iceberg_input");
    public get icebergInput() {
        return this._icebergInput;
    }
    public putIcebergInput(value: IcebergInputProperty) {
        this._icebergInput.internalValue = value;
    }
    public resetIcebergInput() {
        this._icebergInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icebergInputInput() {
        return this._icebergInput.internalValue;
    }
}
export interface ColumnProperty {
    /**
    * A free-form text comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#comment CcTable#comment}
    */
    readonly comment?: string;
    /**
    * The name of the Column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * The data type of the Column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type CcTable#type}
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
export interface ColumnsProperty {
    /**
    * A free-form text comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#comment CcTable#comment}
    */
    readonly comment?: string;
    /**
    * The name of the Column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * The data type of the Column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#type CcTable#type}
    */
    readonly type?: string;
}
export class ColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ColumnsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ColumnsProperty | cdktn.IResolvable | undefined) {
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

export class ColumnsPropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnsProperty[] | cdktn.IResolvable

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
    public get(index: number): ColumnsPropertyOutputReference {
        return new ColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaIdProperty {
    /**
    * The name of the schema registry that contains the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#registry_name CcTable#registry_name}
    */
    readonly registryName?: string;
    /**
    * The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_arn CcTable#schema_arn}
    */
    readonly schemaArn?: string;
    /**
    * The name of the schema. One of SchemaArn or SchemaName has to be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_name CcTable#schema_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_id CcTable#schema_id}
    */
    readonly schemaId?: SchemaIdProperty;
    /**
    * The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_id CcTable#schema_version_id}
    */
    readonly schemaVersionId?: string;
    /**
    * The version number of the schema.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_version_number CcTable#schema_version_number}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * These key-value pairs define initialization parameters for the SerDe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters CcTable#parameters}
    */
    readonly parameters?: string;
    /**
    * Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serialization_library CcTable#serialization_library}
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
    * A list of names of columns that contain skewed values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_names CcTable#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * A mapping of skewed values to the columns that contain them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_value_location_maps CcTable#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: string;
    /**
    * A list of names of columns that contain skewed values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_column_values CcTable#skewed_column_values}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#column CcTable#column}
    */
    readonly column?: string;
    /**
    * Indicates that the column is sorted in ascending order (==1), or in descending order (==0).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sort_order CcTable#sort_order}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#bucket_columns CcTable#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * A list of the Columns in the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#columns CcTable#columns}
    */
    readonly columns?: ColumnsProperty[] | cdktn.IResolvable;
    /**
    * True if the data in the table is compressed, or False if not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#compressed CcTable#compressed}
    */
    readonly compressed?: boolean | cdktn.IResolvable;
    /**
    * The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#input_format CcTable#input_format}
    */
    readonly inputFormat?: string;
    /**
    * The physical location of the table. By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#location CcTable#location}
    */
    readonly location?: string;
    /**
    * Must be specified if the table contains any dimension columns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#number_of_buckets CcTable#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#output_format CcTable#output_format}
    */
    readonly outputFormat?: string;
    /**
    * The user-supplied properties in key-value form.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters CcTable#parameters}
    */
    readonly parameters?: string;
    /**
    * An object that references a schema stored in the AWS Glue Schema Registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#schema_reference CcTable#schema_reference}
    */
    readonly schemaReference?: SchemaReferenceProperty;
    /**
    * The serialization/deserialization (SerDe) information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#serde_info CcTable#serde_info}
    */
    readonly serdeInfo?: SerdeInfoProperty;
    /**
    * The information about values that appear frequently in a column (skewed values).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#skewed_info CcTable#skewed_info}
    */
    readonly skewedInfo?: SkewedInfoProperty;
    /**
    * A list specifying the sort order of each bucket in the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sort_columns CcTable#sort_columns}
    */
    readonly sortColumns?: OrderProperty[] | cdktn.IResolvable;
    /**
    * True if the table data is stored in subdirectories, or False if not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#stored_as_sub_directories CcTable#stored_as_sub_directories}
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
    private _columns = new ColumnsPropertyList(this, "columns", false);
    public get columns() {
        return this._columns;
    }
    public putColumns(value: ColumnsProperty[] | cdktn.IResolvable) {
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
export interface TableIdentifierProperty {
    /**
    * The ID of the Data Catalog in which the table resides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#catalog_id CcTable#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The name of the catalog database that contains the target table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#database_name CcTable#database_name}
    */
    readonly databaseName?: string;
    /**
    * The name of the target table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * The Region of the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#region CcTable#region}
    */
    readonly region?: string;
}
export class TableIdentifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TableIdentifierProperty | cdktn.IResolvable | undefined {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TableIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._name = undefined;
            this._region = undefined;
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
            this._name = value.name;
            this._region = value.region;
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

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
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

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}
export interface ViewRepresentationProperty {
    /**
    * The dialect of the view representation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#dialect CcTable#dialect}
    */
    readonly dialect?: string;
    /**
    * The version of the dialect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#dialect_version CcTable#dialect_version}
    */
    readonly dialectVersion?: string;
    /**
    * The connection used for validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#validation_connection CcTable#validation_connection}
    */
    readonly validationConnection?: string;
    /**
    * The expanded text of the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_expanded_text CcTable#view_expanded_text}
    */
    readonly viewExpandedText?: string;
    /**
    * The original text of the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_original_text CcTable#view_original_text}
    */
    readonly viewOriginalText?: string;
}
export class ViewRepresentationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ViewRepresentationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dialect !== undefined) {
            hasAnyValues = true;
            internalValueResult.dialect = this._dialect;
        }
        if (this._dialectVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.dialectVersion = this._dialectVersion;
        }
        if (this._validationConnection !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationConnection = this._validationConnection;
        }
        if (this._viewExpandedText !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewExpandedText = this._viewExpandedText;
        }
        if (this._viewOriginalText !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewOriginalText = this._viewOriginalText;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ViewRepresentationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dialect = undefined;
            this._dialectVersion = undefined;
            this._validationConnection = undefined;
            this._viewExpandedText = undefined;
            this._viewOriginalText = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dialect = value.dialect;
            this._dialectVersion = value.dialectVersion;
            this._validationConnection = value.validationConnection;
            this._viewExpandedText = value.viewExpandedText;
            this._viewOriginalText = value.viewOriginalText;
        }
    }

    // dialect - computed: true, optional: true, required: false
    private _dialect?: string; 
    public get dialect() {
        return this.getStringAttribute('dialect');
    }
    public set dialect(value: string) {
        this._dialect = value;
    }
    public resetDialect() {
        this._dialect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dialectInput() {
        return this._dialect;
    }

    // dialect_version - computed: true, optional: true, required: false
    private _dialectVersion?: string; 
    public get dialectVersion() {
        return this.getStringAttribute('dialect_version');
    }
    public set dialectVersion(value: string) {
        this._dialectVersion = value;
    }
    public resetDialectVersion() {
        this._dialectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dialectVersionInput() {
        return this._dialectVersion;
    }

    // validation_connection - computed: true, optional: true, required: false
    private _validationConnection?: string; 
    public get validationConnection() {
        return this.getStringAttribute('validation_connection');
    }
    public set validationConnection(value: string) {
        this._validationConnection = value;
    }
    public resetValidationConnection() {
        this._validationConnection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationConnectionInput() {
        return this._validationConnection;
    }

    // view_expanded_text - computed: true, optional: true, required: false
    private _viewExpandedText?: string; 
    public get viewExpandedText() {
        return this.getStringAttribute('view_expanded_text');
    }
    public set viewExpandedText(value: string) {
        this._viewExpandedText = value;
    }
    public resetViewExpandedText() {
        this._viewExpandedText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewExpandedTextInput() {
        return this._viewExpandedText;
    }

    // view_original_text - computed: true, optional: true, required: false
    private _viewOriginalText?: string; 
    public get viewOriginalText() {
        return this.getStringAttribute('view_original_text');
    }
    public set viewOriginalText(value: string) {
        this._viewOriginalText = value;
    }
    public resetViewOriginalText() {
        this._viewOriginalText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewOriginalTextInput() {
        return this._viewOriginalText;
    }
}

export class ViewRepresentationPropertyList extends cdktn.ComplexList {
    public internalValue? : ViewRepresentationProperty[] | cdktn.IResolvable

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
    public get(index: number): ViewRepresentationPropertyOutputReference {
        return new ViewRepresentationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ViewDefinitionProperty {
    /**
    * The definer of the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#definer CcTable#definer}
    */
    readonly definer?: string;
    /**
    * Indicates whether the view is protected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#is_protected CcTable#is_protected}
    */
    readonly isProtected?: boolean | cdktn.IResolvable;
    /**
    * The representations of the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#representations CcTable#representations}
    */
    readonly representations?: ViewRepresentationProperty[] | cdktn.IResolvable;
    /**
    * The sub-objects of the view.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#sub_objects CcTable#sub_objects}
    */
    readonly subObjects?: string[];
}
export class ViewDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ViewDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definer !== undefined) {
            hasAnyValues = true;
            internalValueResult.definer = this._definer;
        }
        if (this._isProtected !== undefined) {
            hasAnyValues = true;
            internalValueResult.isProtected = this._isProtected;
        }
        if (this._representations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.representations = this._representations?.internalValue;
        }
        if (this._subObjects !== undefined) {
            hasAnyValues = true;
            internalValueResult.subObjects = this._subObjects;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ViewDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definer = undefined;
            this._isProtected = undefined;
            this._representations.internalValue = undefined;
            this._subObjects = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definer = value.definer;
            this._isProtected = value.isProtected;
            this._representations.internalValue = value.representations;
            this._subObjects = value.subObjects;
        }
    }

    // definer - computed: true, optional: true, required: false
    private _definer?: string; 
    public get definer() {
        return this.getStringAttribute('definer');
    }
    public set definer(value: string) {
        this._definer = value;
    }
    public resetDefiner() {
        this._definer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definerInput() {
        return this._definer;
    }

    // is_protected - computed: true, optional: true, required: false
    private _isProtected?: boolean | cdktn.IResolvable; 
    public get isProtected() {
        return this.getBooleanAttribute('is_protected');
    }
    public set isProtected(value: boolean | cdktn.IResolvable) {
        this._isProtected = value;
    }
    public resetIsProtected() {
        this._isProtected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isProtectedInput() {
        return this._isProtected;
    }

    // representations - computed: true, optional: true, required: false
    private _representations = new ViewRepresentationPropertyList(this, "representations", false);
    public get representations() {
        return this._representations;
    }
    public putRepresentations(value: ViewRepresentationProperty[] | cdktn.IResolvable) {
        this._representations.internalValue = value;
    }
    public resetRepresentations() {
        this._representations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get representationsInput() {
        return this._representations.internalValue;
    }

    // sub_objects - computed: true, optional: true, required: false
    private _subObjects?: string[]; 
    public get subObjects() {
        return this.getListAttribute('sub_objects');
    }
    public set subObjects(value: string[]) {
        this._subObjects = value;
    }
    public resetSubObjects() {
        this._subObjects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subObjectsInput() {
        return this._subObjects;
    }
}
export interface TableInputProperty {
    /**
    * A description of the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#description CcTable#description}
    */
    readonly description?: string;
    /**
    * The table name. For Hive compatibility, this is folded to lowercase when it is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#name CcTable#name}
    */
    readonly name?: string;
    /**
    * The table owner. Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#owner CcTable#owner}
    */
    readonly owner?: string;
    /**
    * These key-value pairs define properties associated with the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#parameters CcTable#parameters}
    */
    readonly parameters?: string;
    /**
    * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#partition_keys CcTable#partition_keys}
    */
    readonly partitionKeys?: ColumnProperty[] | cdktn.IResolvable;
    /**
    * The retention time for this table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#retention CcTable#retention}
    */
    readonly retention?: number;
    /**
    * A storage descriptor containing information about the physical storage of this table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#storage_descriptor CcTable#storage_descriptor}
    */
    readonly storageDescriptor?: StorageDescriptorProperty;
    /**
    * The type of this table. AWS Glue will create tables with the EXTERNAL_TABLE type. Other services, such as Athena, may create tables with additional table types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#table_type CcTable#table_type}
    */
    readonly tableType?: string;
    /**
    * A TableIdentifier structure that describes a target table for resource linking.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#target_table CcTable#target_table}
    */
    readonly targetTable?: TableIdentifierProperty;
    /**
    * The view definition for the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_definition CcTable#view_definition}
    */
    readonly viewDefinition?: ViewDefinitionProperty;
    /**
    * Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_expanded_text CcTable#view_expanded_text}
    */
    readonly viewExpandedText?: string;
    /**
    * Included for Apache Hive compatibility. Not used in the normal course of AWS Glue operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/glue_table#view_original_text CcTable#view_original_text}
    */
    readonly viewOriginalText?: string;
}
export class TableInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TableInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._partitionKeys?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionKeys = this._partitionKeys?.internalValue;
        }
        if (this._retention !== undefined) {
            hasAnyValues = true;
            internalValueResult.retention = this._retention;
        }
        if (this._storageDescriptor?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageDescriptor = this._storageDescriptor?.internalValue;
        }
        if (this._tableType !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableType = this._tableType;
        }
        if (this._targetTable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTable = this._targetTable?.internalValue;
        }
        if (this._viewDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewDefinition = this._viewDefinition?.internalValue;
        }
        if (this._viewExpandedText !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewExpandedText = this._viewExpandedText;
        }
        if (this._viewOriginalText !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewOriginalText = this._viewOriginalText;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TableInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._name = undefined;
            this._owner = undefined;
            this._parameters = undefined;
            this._partitionKeys.internalValue = undefined;
            this._retention = undefined;
            this._storageDescriptor.internalValue = undefined;
            this._tableType = undefined;
            this._targetTable.internalValue = undefined;
            this._viewDefinition.internalValue = undefined;
            this._viewExpandedText = undefined;
            this._viewOriginalText = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._name = value.name;
            this._owner = value.owner;
            this._parameters = value.parameters;
            this._partitionKeys.internalValue = value.partitionKeys;
            this._retention = value.retention;
            this._storageDescriptor.internalValue = value.storageDescriptor;
            this._tableType = value.tableType;
            this._targetTable.internalValue = value.targetTable;
            this._viewDefinition.internalValue = value.viewDefinition;
            this._viewExpandedText = value.viewExpandedText;
            this._viewOriginalText = value.viewOriginalText;
        }
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

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
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

    // partition_keys - computed: true, optional: true, required: false
    private _partitionKeys = new ColumnPropertyList(this, "partition_keys", false);
    public get partitionKeys() {
        return this._partitionKeys;
    }
    public putPartitionKeys(value: ColumnProperty[] | cdktn.IResolvable) {
        this._partitionKeys.internalValue = value;
    }
    public resetPartitionKeys() {
        this._partitionKeys.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeysInput() {
        return this._partitionKeys.internalValue;
    }

    // retention - computed: true, optional: true, required: false
    private _retention?: number; 
    public get retention() {
        return this.getNumberAttribute('retention');
    }
    public set retention(value: number) {
        this._retention = value;
    }
    public resetRetention() {
        this._retention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionInput() {
        return this._retention;
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

    // table_type - computed: true, optional: true, required: false
    private _tableType?: string; 
    public get tableType() {
        return this.getStringAttribute('table_type');
    }
    public set tableType(value: string) {
        this._tableType = value;
    }
    public resetTableType() {
        this._tableType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableTypeInput() {
        return this._tableType;
    }

    // target_table - computed: true, optional: true, required: false
    private _targetTable = new TableIdentifierPropertyOutputReference(this, "target_table");
    public get targetTable() {
        return this._targetTable;
    }
    public putTargetTable(value: TableIdentifierProperty) {
        this._targetTable.internalValue = value;
    }
    public resetTargetTable() {
        this._targetTable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTableInput() {
        return this._targetTable.internalValue;
    }

    // view_definition - computed: true, optional: true, required: false
    private _viewDefinition = new ViewDefinitionPropertyOutputReference(this, "view_definition");
    public get viewDefinition() {
        return this._viewDefinition;
    }
    public putViewDefinition(value: ViewDefinitionProperty) {
        this._viewDefinition.internalValue = value;
    }
    public resetViewDefinition() {
        this._viewDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewDefinitionInput() {
        return this._viewDefinition.internalValue;
    }

    // view_expanded_text - computed: true, optional: true, required: false
    private _viewExpandedText?: string; 
    public get viewExpandedText() {
        return this.getStringAttribute('view_expanded_text');
    }
    public set viewExpandedText(value: string) {
        this._viewExpandedText = value;
    }
    public resetViewExpandedText() {
        this._viewExpandedText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewExpandedTextInput() {
        return this._viewExpandedText;
    }

    // view_original_text - computed: true, optional: true, required: false
    private _viewOriginalText?: string; 
    public get viewOriginalText() {
        return this.getStringAttribute('view_original_text');
    }
    public set viewOriginalText(value: string) {
        this._viewOriginalText = value;
    }
    public resetViewOriginalText() {
        this._viewOriginalText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewOriginalTextInput() {
        return this._viewOriginalText;
    }
}
}
