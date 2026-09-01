// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDatasetProps extends cdktn.TerraformMetaArguments {
    /**
    * Dataset format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format CcDataset#format}
    */
    readonly format?: string;
    /**
    * Format options for dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format_options CcDataset#format_options}
    */
    readonly formatOptions?: CcDataset.FormatOptionsProperty;
    /**
    * Input
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#input CcDataset#input}
    */
    readonly input: CcDataset.InputProperty;
    /**
    * Dataset name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#name CcDataset#name}
    */
    readonly name: string;
    /**
    * PathOptions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#path_options CcDataset#path_options}
    */
    readonly pathOptions?: CcDataset.PathOptionsProperty;
    /**
    * Source type of the dataset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#source CcDataset#source}
    */
    readonly source?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#tags CcDataset#tags}
    */
    readonly tags?: CcDataset.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset awscc_databrew_dataset}
*/
export class CcDataset extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_databrew_dataset";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataset resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataset to import
    * @param importFromId The id of the existing CcDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataset to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_databrew_dataset", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset awscc_databrew_dataset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDatasetProps
    */
    public constructor(scope: Construct, id: string, config: CcDatasetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_databrew_dataset',
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
        this._format = config.format;
        this._formatOptions.internalValue = config.formatOptions;
        this._input.internalValue = config.input;
        this._name = config.name;
        this._pathOptions.internalValue = config.pathOptions;
        this._source = config.source;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // format_options - computed: true, optional: true, required: false
    private _formatOptions = new CcDataset.FormatOptionsPropertyOutputReference(this, "format_options");
    public get formatOptions() {
        return this._formatOptions;
    }
    public putFormatOptions(value: CcDataset.FormatOptionsProperty) {
        this._formatOptions.internalValue = value;
    }
    public resetFormatOptions() {
        this._formatOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatOptionsInput() {
        return this._formatOptions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input - computed: false, optional: false, required: true
    private _input = new CcDataset.InputPropertyOutputReference(this, "input");
    public get input() {
        return this._input;
    }
    public putInput(value: CcDataset.InputProperty) {
        this._input.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
        return this._input.internalValue;
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

    // path_options - computed: true, optional: true, required: false
    private _pathOptions = new CcDataset.PathOptionsPropertyOutputReference(this, "path_options");
    public get pathOptions() {
        return this._pathOptions;
    }
    public putPathOptions(value: CcDataset.PathOptionsProperty) {
        this._pathOptions.internalValue = value;
    }
    public resetPathOptions() {
        this._pathOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathOptionsInput() {
        return this._pathOptions.internalValue;
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataset.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataset.TagProperty[] | cdktn.IResolvable) {
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
            format: cdktn.stringToTerraform(this._format),
            format_options: ccDatasetFormatOptionsPropertyToTerraform(this._formatOptions.internalValue),
            input: ccDatasetInputPropertyToTerraform(this._input.internalValue),
            name: cdktn.stringToTerraform(this._name),
            path_options: ccDatasetPathOptionsPropertyToTerraform(this._pathOptions.internalValue),
            source: cdktn.stringToTerraform(this._source),
            tags: cdktn.listMapper(ccDatasetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            format: {
                value: cdktn.stringToHclTerraform(this._format),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            format_options: {
                value: ccDatasetFormatOptionsPropertyToHclTerraform(this._formatOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataset.FormatOptionsProperty",
            },
            input: {
                value: ccDatasetInputPropertyToHclTerraform(this._input.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataset.InputProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path_options: {
                value: ccDatasetPathOptionsPropertyToHclTerraform(this._pathOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataset.PathOptionsProperty",
            },
            source: {
                value: cdktn.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDatasetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataset.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDatasetCsvOptionsPropertyToTerraform(struct?: CcDataset.CsvOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delimiter: cdktn.stringToTerraform(struct!.delimiter),
        header_row: cdktn.booleanToTerraform(struct!.headerRow),
    }
}


export function ccDatasetCsvOptionsPropertyToHclTerraform(struct?: CcDataset.CsvOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delimiter: {
            value: cdktn.stringToHclTerraform(struct!.delimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_row: {
            value: cdktn.booleanToHclTerraform(struct!.headerRow),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetExcelOptionsPropertyToTerraform(struct?: CcDataset.ExcelOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_row: cdktn.booleanToTerraform(struct!.headerRow),
        sheet_indexes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.sheetIndexes),
        sheet_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sheetNames),
    }
}


export function ccDatasetExcelOptionsPropertyToHclTerraform(struct?: CcDataset.ExcelOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_row: {
            value: cdktn.booleanToHclTerraform(struct!.headerRow),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sheet_indexes: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.sheetIndexes),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        sheet_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sheetNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetJsonOptionsPropertyToTerraform(struct?: CcDataset.JsonOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        multi_line: cdktn.booleanToTerraform(struct!.multiLine),
    }
}


export function ccDatasetJsonOptionsPropertyToHclTerraform(struct?: CcDataset.JsonOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        multi_line: {
            value: cdktn.booleanToHclTerraform(struct!.multiLine),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetFormatOptionsPropertyToTerraform(struct?: CcDataset.FormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv: ccDatasetCsvOptionsPropertyToTerraform(struct!.csv),
        excel: ccDatasetExcelOptionsPropertyToTerraform(struct!.excel),
        json: ccDatasetJsonOptionsPropertyToTerraform(struct!.json),
    }
}


export function ccDatasetFormatOptionsPropertyToHclTerraform(struct?: CcDataset.FormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        csv: {
            value: ccDatasetCsvOptionsPropertyToHclTerraform(struct!.csv),
            isBlock: true,
            type: "struct",
            storageClassType: "CsvOptionsProperty",
        },
        excel: {
            value: ccDatasetExcelOptionsPropertyToHclTerraform(struct!.excel),
            isBlock: true,
            type: "struct",
            storageClassType: "ExcelOptionsProperty",
        },
        json: {
            value: ccDatasetJsonOptionsPropertyToHclTerraform(struct!.json),
            isBlock: true,
            type: "struct",
            storageClassType: "JsonOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetS3LocationPropertyToTerraform(struct?: CcDataset.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccDatasetS3LocationPropertyToHclTerraform(struct?: CcDataset.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetDataCatalogInputDefinitionPropertyToTerraform(struct?: CcDataset.DataCatalogInputDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        temp_directory: ccDatasetS3LocationPropertyToTerraform(struct!.tempDirectory),
    }
}


export function ccDatasetDataCatalogInputDefinitionPropertyToHclTerraform(struct?: CcDataset.DataCatalogInputDefinitionProperty | cdktn.IResolvable): any {
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
        temp_directory: {
            value: ccDatasetS3LocationPropertyToHclTerraform(struct!.tempDirectory),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetTempDirectoryPropertyToTerraform(struct?: CcDataset.TempDirectoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccDatasetTempDirectoryPropertyToHclTerraform(struct?: CcDataset.TempDirectoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetDatabaseInputDefinitionPropertyToTerraform(struct?: CcDataset.DatabaseInputDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_table_name: cdktn.stringToTerraform(struct!.databaseTableName),
        glue_connection_name: cdktn.stringToTerraform(struct!.glueConnectionName),
        query_string: cdktn.stringToTerraform(struct!.queryString),
        temp_directory: ccDatasetTempDirectoryPropertyToTerraform(struct!.tempDirectory),
    }
}


export function ccDatasetDatabaseInputDefinitionPropertyToHclTerraform(struct?: CcDataset.DatabaseInputDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_table_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseTableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        glue_connection_name: {
            value: cdktn.stringToHclTerraform(struct!.glueConnectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_string: {
            value: cdktn.stringToHclTerraform(struct!.queryString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temp_directory: {
            value: ccDatasetTempDirectoryPropertyToHclTerraform(struct!.tempDirectory),
            isBlock: true,
            type: "struct",
            storageClassType: "TempDirectoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetMetadataPropertyToTerraform(struct?: CcDataset.MetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_arn: cdktn.stringToTerraform(struct!.sourceArn),
    }
}


export function ccDatasetMetadataPropertyToHclTerraform(struct?: CcDataset.MetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_arn: {
            value: cdktn.stringToHclTerraform(struct!.sourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetS3InputDefinitionPropertyToTerraform(struct?: CcDataset.S3InputDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccDatasetS3InputDefinitionPropertyToHclTerraform(struct?: CcDataset.S3InputDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetInputPropertyToTerraform(struct?: CcDataset.InputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_catalog_input_definition: ccDatasetDataCatalogInputDefinitionPropertyToTerraform(struct!.dataCatalogInputDefinition),
        database_input_definition: ccDatasetDatabaseInputDefinitionPropertyToTerraform(struct!.databaseInputDefinition),
        metadata: ccDatasetMetadataPropertyToTerraform(struct!.metadata),
        s3_input_definition: ccDatasetS3InputDefinitionPropertyToTerraform(struct!.s3InputDefinition),
    }
}


export function ccDatasetInputPropertyToHclTerraform(struct?: CcDataset.InputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_catalog_input_definition: {
            value: ccDatasetDataCatalogInputDefinitionPropertyToHclTerraform(struct!.dataCatalogInputDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCatalogInputDefinitionProperty",
        },
        database_input_definition: {
            value: ccDatasetDatabaseInputDefinitionPropertyToHclTerraform(struct!.databaseInputDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "DatabaseInputDefinitionProperty",
        },
        metadata: {
            value: ccDatasetMetadataPropertyToHclTerraform(struct!.metadata),
            isBlock: true,
            type: "struct",
            storageClassType: "MetadataProperty",
        },
        s3_input_definition: {
            value: ccDatasetS3InputDefinitionPropertyToHclTerraform(struct!.s3InputDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "S3InputDefinitionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetFilesLimitPropertyToTerraform(struct?: CcDataset.FilesLimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_files: cdktn.numberToTerraform(struct!.maxFiles),
        order: cdktn.stringToTerraform(struct!.order),
        ordered_by: cdktn.stringToTerraform(struct!.orderedBy),
    }
}


export function ccDatasetFilesLimitPropertyToHclTerraform(struct?: CcDataset.FilesLimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_files: {
            value: cdktn.numberToHclTerraform(struct!.maxFiles),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        order: {
            value: cdktn.stringToHclTerraform(struct!.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ordered_by: {
            value: cdktn.stringToHclTerraform(struct!.orderedBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetFilterValuePropertyToTerraform(struct?: CcDataset.FilterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
        value_reference: cdktn.stringToTerraform(struct!.valueReference),
    }
}


export function ccDatasetFilterValuePropertyToHclTerraform(struct?: CcDataset.FilterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_reference: {
            value: cdktn.stringToHclTerraform(struct!.valueReference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetFilterExpressionPropertyToTerraform(struct?: CcDataset.FilterExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        values_map: cdktn.listMapper(ccDatasetFilterValuePropertyToTerraform, false)(struct!.valuesMap),
    }
}


export function ccDatasetFilterExpressionPropertyToHclTerraform(struct?: CcDataset.FilterExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values_map: {
            value: cdktn.listMapperHcl(ccDatasetFilterValuePropertyToHclTerraform, false)(struct!.valuesMap),
            isBlock: true,
            type: "list",
            storageClassType: "FilterValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetDatetimeOptionsPropertyToTerraform(struct?: CcDataset.DatetimeOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        format: cdktn.stringToTerraform(struct!.format),
        locale_code: cdktn.stringToTerraform(struct!.localeCode),
        timezone_offset: cdktn.stringToTerraform(struct!.timezoneOffset),
    }
}


export function ccDatasetDatetimeOptionsPropertyToHclTerraform(struct?: CcDataset.DatetimeOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locale_code: {
            value: cdktn.stringToHclTerraform(struct!.localeCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timezone_offset: {
            value: cdktn.stringToHclTerraform(struct!.timezoneOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetValuesMapPropertyToTerraform(struct?: CcDataset.ValuesMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
        value_reference: cdktn.stringToTerraform(struct!.valueReference),
    }
}


export function ccDatasetValuesMapPropertyToHclTerraform(struct?: CcDataset.ValuesMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_reference: {
            value: cdktn.stringToHclTerraform(struct!.valueReference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetFilterPropertyToTerraform(struct?: CcDataset.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        values_map: cdktn.listMapper(ccDatasetValuesMapPropertyToTerraform, false)(struct!.valuesMap),
    }
}


export function ccDatasetFilterPropertyToHclTerraform(struct?: CcDataset.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values_map: {
            value: cdktn.listMapperHcl(ccDatasetValuesMapPropertyToHclTerraform, false)(struct!.valuesMap),
            isBlock: true,
            type: "list",
            storageClassType: "ValuesMapPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetDatasetParameterPropertyToTerraform(struct?: CcDataset.DatasetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        create_column: cdktn.booleanToTerraform(struct!.createColumn),
        datetime_options: ccDatasetDatetimeOptionsPropertyToTerraform(struct!.datetimeOptions),
        filter: ccDatasetFilterPropertyToTerraform(struct!.filter),
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDatasetDatasetParameterPropertyToHclTerraform(struct?: CcDataset.DatasetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        create_column: {
            value: cdktn.booleanToHclTerraform(struct!.createColumn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        datetime_options: {
            value: ccDatasetDatetimeOptionsPropertyToHclTerraform(struct!.datetimeOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "DatetimeOptionsProperty",
        },
        filter: {
            value: ccDatasetFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterProperty",
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


export function ccDatasetPathParameterPropertyToTerraform(struct?: CcDataset.PathParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataset_parameter: ccDatasetDatasetParameterPropertyToTerraform(struct!.datasetParameter),
        path_parameter_name: cdktn.stringToTerraform(struct!.pathParameterName),
    }
}


export function ccDatasetPathParameterPropertyToHclTerraform(struct?: CcDataset.PathParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataset_parameter: {
            value: ccDatasetDatasetParameterPropertyToHclTerraform(struct!.datasetParameter),
            isBlock: true,
            type: "struct",
            storageClassType: "DatasetParameterProperty",
        },
        path_parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.pathParameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetPathOptionsPropertyToTerraform(struct?: CcDataset.PathOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        files_limit: ccDatasetFilesLimitPropertyToTerraform(struct!.filesLimit),
        last_modified_date_condition: ccDatasetFilterExpressionPropertyToTerraform(struct!.lastModifiedDateCondition),
        parameters: cdktn.listMapper(ccDatasetPathParameterPropertyToTerraform, false)(struct!.parameters),
    }
}


export function ccDatasetPathOptionsPropertyToHclTerraform(struct?: CcDataset.PathOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        files_limit: {
            value: ccDatasetFilesLimitPropertyToHclTerraform(struct!.filesLimit),
            isBlock: true,
            type: "struct",
            storageClassType: "FilesLimitProperty",
        },
        last_modified_date_condition: {
            value: ccDatasetFilterExpressionPropertyToHclTerraform(struct!.lastModifiedDateCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterExpressionProperty",
        },
        parameters: {
            value: cdktn.listMapperHcl(ccDatasetPathParameterPropertyToHclTerraform, false)(struct!.parameters),
            isBlock: true,
            type: "list",
            storageClassType: "PathParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatasetTagPropertyToTerraform(struct?: CcDataset.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDatasetTagPropertyToHclTerraform(struct?: CcDataset.TagProperty | cdktn.IResolvable): any {
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
export interface CsvOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#delimiter CcDataset#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row CcDataset#header_row}
    */
    readonly headerRow?: boolean | cdktn.IResolvable;
}
export class CsvOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CsvOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._delimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        if (this._headerRow !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerRow = this._headerRow;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CsvOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delimiter = undefined;
            this._headerRow = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delimiter = value.delimiter;
            this._headerRow = value.headerRow;
        }
    }

    // delimiter - computed: true, optional: true, required: false
    private _delimiter?: string; 
    public get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string) {
        this._delimiter = value;
    }
    public resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
        return this._delimiter;
    }

    // header_row - computed: true, optional: true, required: false
    private _headerRow?: boolean | cdktn.IResolvable; 
    public get headerRow() {
        return this.getBooleanAttribute('header_row');
    }
    public set headerRow(value: boolean | cdktn.IResolvable) {
        this._headerRow = value;
    }
    public resetHeaderRow() {
        this._headerRow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerRowInput() {
        return this._headerRow;
    }
}
export interface ExcelOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row CcDataset#header_row}
    */
    readonly headerRow?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_indexes CcDataset#sheet_indexes}
    */
    readonly sheetIndexes?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_names CcDataset#sheet_names}
    */
    readonly sheetNames?: string[];
}
export class ExcelOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExcelOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerRow !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerRow = this._headerRow;
        }
        if (this._sheetIndexes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sheetIndexes = this._sheetIndexes;
        }
        if (this._sheetNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.sheetNames = this._sheetNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExcelOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerRow = undefined;
            this._sheetIndexes = undefined;
            this._sheetNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerRow = value.headerRow;
            this._sheetIndexes = value.sheetIndexes;
            this._sheetNames = value.sheetNames;
        }
    }

    // header_row - computed: true, optional: true, required: false
    private _headerRow?: boolean | cdktn.IResolvable; 
    public get headerRow() {
        return this.getBooleanAttribute('header_row');
    }
    public set headerRow(value: boolean | cdktn.IResolvable) {
        this._headerRow = value;
    }
    public resetHeaderRow() {
        this._headerRow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerRowInput() {
        return this._headerRow;
    }

    // sheet_indexes - computed: true, optional: true, required: false
    private _sheetIndexes?: number[]; 
    public get sheetIndexes() {
        return this.getNumberListAttribute('sheet_indexes');
    }
    public set sheetIndexes(value: number[]) {
        this._sheetIndexes = value;
    }
    public resetSheetIndexes() {
        this._sheetIndexes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sheetIndexesInput() {
        return this._sheetIndexes;
    }

    // sheet_names - computed: true, optional: true, required: false
    private _sheetNames?: string[]; 
    public get sheetNames() {
        return this.getListAttribute('sheet_names');
    }
    public set sheetNames(value: string[]) {
        this._sheetNames = value;
    }
    public resetSheetNames() {
        this._sheetNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sheetNamesInput() {
        return this._sheetNames;
    }
}
export interface JsonOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#multi_line CcDataset#multi_line}
    */
    readonly multiLine?: boolean | cdktn.IResolvable;
}
export class JsonOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JsonOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._multiLine !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiLine = this._multiLine;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JsonOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._multiLine = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._multiLine = value.multiLine;
        }
    }

    // multi_line - computed: true, optional: true, required: false
    private _multiLine?: boolean | cdktn.IResolvable; 
    public get multiLine() {
        return this.getBooleanAttribute('multi_line');
    }
    public set multiLine(value: boolean | cdktn.IResolvable) {
        this._multiLine = value;
    }
    public resetMultiLine() {
        this._multiLine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiLineInput() {
        return this._multiLine;
    }
}
export interface FormatOptionsProperty {
    /**
    * Csv options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#csv CcDataset#csv}
    */
    readonly csv?: CsvOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#excel CcDataset#excel}
    */
    readonly excel?: ExcelOptionsProperty;
    /**
    * Json options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#json CcDataset#json}
    */
    readonly json?: JsonOptionsProperty;
}
export class FormatOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FormatOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._csv?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csv = this._csv?.internalValue;
        }
        if (this._excel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.excel = this._excel?.internalValue;
        }
        if (this._json?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.json = this._json?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FormatOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._csv.internalValue = undefined;
            this._excel.internalValue = undefined;
            this._json.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._csv.internalValue = value.csv;
            this._excel.internalValue = value.excel;
            this._json.internalValue = value.json;
        }
    }

    // csv - computed: true, optional: true, required: false
    private _csv = new CsvOptionsPropertyOutputReference(this, "csv");
    public get csv() {
        return this._csv;
    }
    public putCsv(value: CsvOptionsProperty) {
        this._csv.internalValue = value;
    }
    public resetCsv() {
        this._csv.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvInput() {
        return this._csv.internalValue;
    }

    // excel - computed: true, optional: true, required: false
    private _excel = new ExcelOptionsPropertyOutputReference(this, "excel");
    public get excel() {
        return this._excel;
    }
    public putExcel(value: ExcelOptionsProperty) {
        this._excel.internalValue = value;
    }
    public resetExcel() {
        this._excel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excelInput() {
        return this._excel.internalValue;
    }

    // json - computed: true, optional: true, required: false
    private _json = new JsonOptionsPropertyOutputReference(this, "json");
    public get json() {
        return this._json;
    }
    public putJson(value: JsonOptionsProperty) {
        this._json.internalValue = value;
    }
    public resetJson() {
        this._json.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonInput() {
        return this._json.internalValue;
    }
}
export interface S3LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket CcDataset#bucket}
    */
    readonly bucket?: string;
    /**
    * Bucket owner
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner CcDataset#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key CcDataset#key}
    */
    readonly key?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
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
}
export interface DataCatalogInputDefinitionProperty {
    /**
    * Catalog id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#catalog_id CcDataset#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Database name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_name CcDataset#database_name}
    */
    readonly databaseName?: string;
    /**
    * Table name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#table_name CcDataset#table_name}
    */
    readonly tableName?: string;
    /**
    * Input location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#temp_directory CcDataset#temp_directory}
    */
    readonly tempDirectory?: S3LocationProperty;
}
export class DataCatalogInputDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataCatalogInputDefinitionProperty | cdktn.IResolvable | undefined {
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
        if (this._tempDirectory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCatalogInputDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._tableName = undefined;
            this._tempDirectory.internalValue = undefined;
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
            this._tempDirectory.internalValue = value.tempDirectory;
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

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // temp_directory - computed: true, optional: true, required: false
    private _tempDirectory = new S3LocationPropertyOutputReference(this, "temp_directory");
    public get tempDirectory() {
        return this._tempDirectory;
    }
    public putTempDirectory(value: S3LocationProperty) {
        this._tempDirectory.internalValue = value;
    }
    public resetTempDirectory() {
        this._tempDirectory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tempDirectoryInput() {
        return this._tempDirectory.internalValue;
    }
}
export interface TempDirectoryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket CcDataset#bucket}
    */
    readonly bucket?: string;
    /**
    * Bucket owner
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner CcDataset#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key CcDataset#key}
    */
    readonly key?: string;
}
export class TempDirectoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TempDirectoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TempDirectoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
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
}
export interface DatabaseInputDefinitionProperty {
    /**
    * Database table name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_table_name CcDataset#database_table_name}
    */
    readonly databaseTableName?: string;
    /**
    * Glue connection name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#glue_connection_name CcDataset#glue_connection_name}
    */
    readonly glueConnectionName?: string;
    /**
    * Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#query_string CcDataset#query_string}
    */
    readonly queryString?: string;
    /**
    * Input location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#temp_directory CcDataset#temp_directory}
    */
    readonly tempDirectory?: TempDirectoryProperty;
}
export class DatabaseInputDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatabaseInputDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseTableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseTableName = this._databaseTableName;
        }
        if (this._glueConnectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueConnectionName = this._glueConnectionName;
        }
        if (this._queryString !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._tempDirectory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabaseInputDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseTableName = undefined;
            this._glueConnectionName = undefined;
            this._queryString = undefined;
            this._tempDirectory.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseTableName = value.databaseTableName;
            this._glueConnectionName = value.glueConnectionName;
            this._queryString = value.queryString;
            this._tempDirectory.internalValue = value.tempDirectory;
        }
    }

    // database_table_name - computed: true, optional: true, required: false
    private _databaseTableName?: string; 
    public get databaseTableName() {
        return this.getStringAttribute('database_table_name');
    }
    public set databaseTableName(value: string) {
        this._databaseTableName = value;
    }
    public resetDatabaseTableName() {
        this._databaseTableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseTableNameInput() {
        return this._databaseTableName;
    }

    // glue_connection_name - computed: true, optional: true, required: false
    private _glueConnectionName?: string; 
    public get glueConnectionName() {
        return this.getStringAttribute('glue_connection_name');
    }
    public set glueConnectionName(value: string) {
        this._glueConnectionName = value;
    }
    public resetGlueConnectionName() {
        this._glueConnectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueConnectionNameInput() {
        return this._glueConnectionName;
    }

    // query_string - computed: true, optional: true, required: false
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    public resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // temp_directory - computed: true, optional: true, required: false
    private _tempDirectory = new TempDirectoryPropertyOutputReference(this, "temp_directory");
    public get tempDirectory() {
        return this._tempDirectory;
    }
    public putTempDirectory(value: TempDirectoryProperty) {
        this._tempDirectory.internalValue = value;
    }
    public resetTempDirectory() {
        this._tempDirectory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tempDirectoryInput() {
        return this._tempDirectory.internalValue;
    }
}
export interface MetadataProperty {
    /**
    * Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#source_arn CcDataset#source_arn}
    */
    readonly sourceArn?: string;
}
export class MetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceArn = this._sourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceArn = value.sourceArn;
        }
    }

    // source_arn - computed: true, optional: true, required: false
    private _sourceArn?: string; 
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string) {
        this._sourceArn = value;
    }
    public resetSourceArn() {
        this._sourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
        return this._sourceArn;
    }
}
export interface S3InputDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket CcDataset#bucket}
    */
    readonly bucket?: string;
    /**
    * Bucket owner
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner CcDataset#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key CcDataset#key}
    */
    readonly key?: string;
}
export class S3InputDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3InputDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3InputDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
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
}
export interface InputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#data_catalog_input_definition CcDataset#data_catalog_input_definition}
    */
    readonly dataCatalogInputDefinition?: DataCatalogInputDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_input_definition CcDataset#database_input_definition}
    */
    readonly databaseInputDefinition?: DatabaseInputDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#metadata CcDataset#metadata}
    */
    readonly metadata?: MetadataProperty;
    /**
    * Input location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#s3_input_definition CcDataset#s3_input_definition}
    */
    readonly s3InputDefinition?: S3InputDefinitionProperty;
}
export class InputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataCatalogInputDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCatalogInputDefinition = this._dataCatalogInputDefinition?.internalValue;
        }
        if (this._databaseInputDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseInputDefinition = this._databaseInputDefinition?.internalValue;
        }
        if (this._metadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata?.internalValue;
        }
        if (this._s3InputDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputDefinition = this._s3InputDefinition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataCatalogInputDefinition.internalValue = undefined;
            this._databaseInputDefinition.internalValue = undefined;
            this._metadata.internalValue = undefined;
            this._s3InputDefinition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataCatalogInputDefinition.internalValue = value.dataCatalogInputDefinition;
            this._databaseInputDefinition.internalValue = value.databaseInputDefinition;
            this._metadata.internalValue = value.metadata;
            this._s3InputDefinition.internalValue = value.s3InputDefinition;
        }
    }

    // data_catalog_input_definition - computed: true, optional: true, required: false
    private _dataCatalogInputDefinition = new DataCatalogInputDefinitionPropertyOutputReference(this, "data_catalog_input_definition");
    public get dataCatalogInputDefinition() {
        return this._dataCatalogInputDefinition;
    }
    public putDataCatalogInputDefinition(value: DataCatalogInputDefinitionProperty) {
        this._dataCatalogInputDefinition.internalValue = value;
    }
    public resetDataCatalogInputDefinition() {
        this._dataCatalogInputDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCatalogInputDefinitionInput() {
        return this._dataCatalogInputDefinition.internalValue;
    }

    // database_input_definition - computed: true, optional: true, required: false
    private _databaseInputDefinition = new DatabaseInputDefinitionPropertyOutputReference(this, "database_input_definition");
    public get databaseInputDefinition() {
        return this._databaseInputDefinition;
    }
    public putDatabaseInputDefinition(value: DatabaseInputDefinitionProperty) {
        this._databaseInputDefinition.internalValue = value;
    }
    public resetDatabaseInputDefinition() {
        this._databaseInputDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInputDefinitionInput() {
        return this._databaseInputDefinition.internalValue;
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata = new MetadataPropertyOutputReference(this, "metadata");
    public get metadata() {
        return this._metadata;
    }
    public putMetadata(value: MetadataProperty) {
        this._metadata.internalValue = value;
    }
    public resetMetadata() {
        this._metadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata.internalValue;
    }

    // s3_input_definition - computed: true, optional: true, required: false
    private _s3InputDefinition = new S3InputDefinitionPropertyOutputReference(this, "s3_input_definition");
    public get s3InputDefinition() {
        return this._s3InputDefinition;
    }
    public putS3InputDefinition(value: S3InputDefinitionProperty) {
        this._s3InputDefinition.internalValue = value;
    }
    public resetS3InputDefinition() {
        this._s3InputDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputDefinitionInput() {
        return this._s3InputDefinition.internalValue;
    }
}
export interface FilesLimitProperty {
    /**
    * Maximum number of files
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#max_files CcDataset#max_files}
    */
    readonly maxFiles?: number;
    /**
    * Order
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#order CcDataset#order}
    */
    readonly order?: string;
    /**
    * Ordered by
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#ordered_by CcDataset#ordered_by}
    */
    readonly orderedBy?: string;
}
export class FilesLimitPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilesLimitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxFiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFiles = this._maxFiles;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._orderedBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.orderedBy = this._orderedBy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilesLimitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxFiles = undefined;
            this._order = undefined;
            this._orderedBy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxFiles = value.maxFiles;
            this._order = value.order;
            this._orderedBy = value.orderedBy;
        }
    }

    // max_files - computed: true, optional: true, required: false
    private _maxFiles?: number; 
    public get maxFiles() {
        return this.getNumberAttribute('max_files');
    }
    public set maxFiles(value: number) {
        this._maxFiles = value;
    }
    public resetMaxFiles() {
        this._maxFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFilesInput() {
        return this._maxFiles;
    }

    // order - computed: true, optional: true, required: false
    private _order?: string; 
    public get order() {
        return this.getStringAttribute('order');
    }
    public set order(value: string) {
        this._order = value;
    }
    public resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderInput() {
        return this._order;
    }

    // ordered_by - computed: true, optional: true, required: false
    private _orderedBy?: string; 
    public get orderedBy() {
        return this.getStringAttribute('ordered_by');
    }
    public set orderedBy(value: string) {
        this._orderedBy = value;
    }
    public resetOrderedBy() {
        this._orderedBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderedByInput() {
        return this._orderedBy;
    }
}
export interface FilterValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value CcDataset#value}
    */
    readonly value?: string;
    /**
    * Variable name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value_reference CcDataset#value_reference}
    */
    readonly valueReference?: string;
}
export class FilterValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._valueReference !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueReference = this._valueReference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
            this._valueReference = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
            this._valueReference = value.valueReference;
        }
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

    // value_reference - computed: true, optional: true, required: false
    private _valueReference?: string; 
    public get valueReference() {
        return this.getStringAttribute('value_reference');
    }
    public set valueReference(value: string) {
        this._valueReference = value;
    }
    public resetValueReference() {
        this._valueReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueReferenceInput() {
        return this._valueReference;
    }
}

export class FilterValuePropertyList extends cdktn.ComplexList {
    public internalValue? : FilterValueProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterValuePropertyOutputReference {
        return new FilterValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterExpressionProperty {
    /**
    * Filtering expression for a parameter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#expression CcDataset#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map CcDataset#values_map}
    */
    readonly valuesMap?: FilterValueProperty[] | cdktn.IResolvable;
}
export class FilterExpressionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._valuesMap?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.valuesMap = this._valuesMap?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._valuesMap.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._valuesMap.internalValue = value.valuesMap;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // values_map - computed: true, optional: true, required: false
    private _valuesMap = new FilterValuePropertyList(this, "values_map", false);
    public get valuesMap() {
        return this._valuesMap;
    }
    public putValuesMap(value: FilterValueProperty[] | cdktn.IResolvable) {
        this._valuesMap.internalValue = value;
    }
    public resetValuesMap() {
        this._valuesMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesMapInput() {
        return this._valuesMap.internalValue;
    }
}
export interface DatetimeOptionsProperty {
    /**
    * Date/time format of a date parameter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format CcDataset#format}
    */
    readonly format?: string;
    /**
    * Locale code for a date parameter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#locale_code CcDataset#locale_code}
    */
    readonly localeCode?: string;
    /**
    * Timezone offset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#timezone_offset CcDataset#timezone_offset}
    */
    readonly timezoneOffset?: string;
}
export class DatetimeOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatetimeOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._localeCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.localeCode = this._localeCode;
        }
        if (this._timezoneOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.timezoneOffset = this._timezoneOffset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatetimeOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._format = undefined;
            this._localeCode = undefined;
            this._timezoneOffset = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._format = value.format;
            this._localeCode = value.localeCode;
            this._timezoneOffset = value.timezoneOffset;
        }
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // locale_code - computed: true, optional: true, required: false
    private _localeCode?: string; 
    public get localeCode() {
        return this.getStringAttribute('locale_code');
    }
    public set localeCode(value: string) {
        this._localeCode = value;
    }
    public resetLocaleCode() {
        this._localeCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeCodeInput() {
        return this._localeCode;
    }

    // timezone_offset - computed: true, optional: true, required: false
    private _timezoneOffset?: string; 
    public get timezoneOffset() {
        return this.getStringAttribute('timezone_offset');
    }
    public set timezoneOffset(value: string) {
        this._timezoneOffset = value;
    }
    public resetTimezoneOffset() {
        this._timezoneOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneOffsetInput() {
        return this._timezoneOffset;
    }
}
export interface ValuesMapProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value CcDataset#value}
    */
    readonly value?: string;
    /**
    * Variable name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value_reference CcDataset#value_reference}
    */
    readonly valueReference?: string;
}
export class ValuesMapPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ValuesMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._valueReference !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueReference = this._valueReference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValuesMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
            this._valueReference = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
            this._valueReference = value.valueReference;
        }
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

    // value_reference - computed: true, optional: true, required: false
    private _valueReference?: string; 
    public get valueReference() {
        return this.getStringAttribute('value_reference');
    }
    public set valueReference(value: string) {
        this._valueReference = value;
    }
    public resetValueReference() {
        this._valueReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueReferenceInput() {
        return this._valueReference;
    }
}

export class ValuesMapPropertyList extends cdktn.ComplexList {
    public internalValue? : ValuesMapProperty[] | cdktn.IResolvable

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
    public get(index: number): ValuesMapPropertyOutputReference {
        return new ValuesMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterProperty {
    /**
    * Filtering expression for a parameter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#expression CcDataset#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map CcDataset#values_map}
    */
    readonly valuesMap?: ValuesMapProperty[] | cdktn.IResolvable;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._valuesMap?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.valuesMap = this._valuesMap?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._valuesMap.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._valuesMap.internalValue = value.valuesMap;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // values_map - computed: true, optional: true, required: false
    private _valuesMap = new ValuesMapPropertyList(this, "values_map", false);
    public get valuesMap() {
        return this._valuesMap;
    }
    public putValuesMap(value: ValuesMapProperty[] | cdktn.IResolvable) {
        this._valuesMap.internalValue = value;
    }
    public resetValuesMap() {
        this._valuesMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesMapInput() {
        return this._valuesMap.internalValue;
    }
}
export interface DatasetParameterProperty {
    /**
    * Add the value of this parameter as a column in a dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#create_column CcDataset#create_column}
    */
    readonly createColumn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#datetime_options CcDataset#datetime_options}
    */
    readonly datetimeOptions?: DatetimeOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#filter CcDataset#filter}
    */
    readonly filter?: FilterProperty;
    /**
    * Parameter name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#name CcDataset#name}
    */
    readonly name?: string;
    /**
    * Parameter type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#type CcDataset#type}
    */
    readonly type?: string;
}
export class DatasetParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createColumn !== undefined) {
            hasAnyValues = true;
            internalValueResult.createColumn = this._createColumn;
        }
        if (this._datetimeOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datetimeOptions = this._datetimeOptions?.internalValue;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
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

    public set internalValue(value: DatasetParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createColumn = undefined;
            this._datetimeOptions.internalValue = undefined;
            this._filter.internalValue = undefined;
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
            this._createColumn = value.createColumn;
            this._datetimeOptions.internalValue = value.datetimeOptions;
            this._filter.internalValue = value.filter;
            this._name = value.name;
            this._type = value.type;
        }
    }

    // create_column - computed: true, optional: true, required: false
    private _createColumn?: boolean | cdktn.IResolvable; 
    public get createColumn() {
        return this.getBooleanAttribute('create_column');
    }
    public set createColumn(value: boolean | cdktn.IResolvable) {
        this._createColumn = value;
    }
    public resetCreateColumn() {
        this._createColumn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createColumnInput() {
        return this._createColumn;
    }

    // datetime_options - computed: true, optional: true, required: false
    private _datetimeOptions = new DatetimeOptionsPropertyOutputReference(this, "datetime_options");
    public get datetimeOptions() {
        return this._datetimeOptions;
    }
    public putDatetimeOptions(value: DatetimeOptionsProperty) {
        this._datetimeOptions.internalValue = value;
    }
    public resetDatetimeOptions() {
        this._datetimeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datetimeOptionsInput() {
        return this._datetimeOptions.internalValue;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new FilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: FilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
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
export interface PathParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#dataset_parameter CcDataset#dataset_parameter}
    */
    readonly datasetParameter?: DatasetParameterProperty;
    /**
    * Parameter name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#path_parameter_name CcDataset#path_parameter_name}
    */
    readonly pathParameterName?: string;
}
export class PathParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PathParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._datasetParameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetParameter = this._datasetParameter?.internalValue;
        }
        if (this._pathParameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathParameterName = this._pathParameterName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PathParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._datasetParameter.internalValue = undefined;
            this._pathParameterName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._datasetParameter.internalValue = value.datasetParameter;
            this._pathParameterName = value.pathParameterName;
        }
    }

    // dataset_parameter - computed: true, optional: true, required: false
    private _datasetParameter = new DatasetParameterPropertyOutputReference(this, "dataset_parameter");
    public get datasetParameter() {
        return this._datasetParameter;
    }
    public putDatasetParameter(value: DatasetParameterProperty) {
        this._datasetParameter.internalValue = value;
    }
    public resetDatasetParameter() {
        this._datasetParameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetParameterInput() {
        return this._datasetParameter.internalValue;
    }

    // path_parameter_name - computed: true, optional: true, required: false
    private _pathParameterName?: string; 
    public get pathParameterName() {
        return this.getStringAttribute('path_parameter_name');
    }
    public set pathParameterName(value: string) {
        this._pathParameterName = value;
    }
    public resetPathParameterName() {
        this._pathParameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathParameterNameInput() {
        return this._pathParameterName;
    }
}

export class PathParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : PathParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): PathParameterPropertyOutputReference {
        return new PathParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PathOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#files_limit CcDataset#files_limit}
    */
    readonly filesLimit?: FilesLimitProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#last_modified_date_condition CcDataset#last_modified_date_condition}
    */
    readonly lastModifiedDateCondition?: FilterExpressionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#parameters CcDataset#parameters}
    */
    readonly parameters?: PathParameterProperty[] | cdktn.IResolvable;
}
export class PathOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PathOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filesLimit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filesLimit = this._filesLimit?.internalValue;
        }
        if (this._lastModifiedDateCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastModifiedDateCondition = this._lastModifiedDateCondition?.internalValue;
        }
        if (this._parameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PathOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filesLimit.internalValue = undefined;
            this._lastModifiedDateCondition.internalValue = undefined;
            this._parameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filesLimit.internalValue = value.filesLimit;
            this._lastModifiedDateCondition.internalValue = value.lastModifiedDateCondition;
            this._parameters.internalValue = value.parameters;
        }
    }

    // files_limit - computed: true, optional: true, required: false
    private _filesLimit = new FilesLimitPropertyOutputReference(this, "files_limit");
    public get filesLimit() {
        return this._filesLimit;
    }
    public putFilesLimit(value: FilesLimitProperty) {
        this._filesLimit.internalValue = value;
    }
    public resetFilesLimit() {
        this._filesLimit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filesLimitInput() {
        return this._filesLimit.internalValue;
    }

    // last_modified_date_condition - computed: true, optional: true, required: false
    private _lastModifiedDateCondition = new FilterExpressionPropertyOutputReference(this, "last_modified_date_condition");
    public get lastModifiedDateCondition() {
        return this._lastModifiedDateCondition;
    }
    public putLastModifiedDateCondition(value: FilterExpressionProperty) {
        this._lastModifiedDateCondition.internalValue = value;
    }
    public resetLastModifiedDateCondition() {
        this._lastModifiedDateCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastModifiedDateConditionInput() {
        return this._lastModifiedDateCondition.internalValue;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters = new PathParameterPropertyList(this, "parameters", false);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: PathParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key CcDataset#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value CcDataset#value}
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
