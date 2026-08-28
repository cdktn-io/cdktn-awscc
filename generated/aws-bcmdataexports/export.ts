// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcExportProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#export CcExport#export}
    */
    readonly export: CcExport.ExportProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#tags CcExport#tags}
    */
    readonly tags?: CcExport.ResourceTagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export awscc_bcmdataexports_export}
*/
export class CcExport extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bcmdataexports_export";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcExport resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcExport to import
    * @param importFromId The id of the existing CcExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcExport to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bcmdataexports_export", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export awscc_bcmdataexports_export} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcExportProps
    */
    public constructor(scope: Construct, id: string, config: CcExportProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bcmdataexports_export',
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
        this._export.internalValue = config.export;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // export - computed: false, optional: false, required: true
    private _export = new CcExport.ExportPropertyOutputReference(this, "export");
    public get export() {
        return this._export;
    }
    public putExport(value: CcExport.ExportProperty) {
        this._export.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exportInput() {
        return this._export.internalValue;
    }

    // export_arn - computed: true, optional: false, required: false
    public get exportArn() {
        return this.getStringAttribute('export_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcExport.ResourceTagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcExport.ResourceTagProperty[] | cdktn.IResolvable) {
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
            export: ccExportExportPropertyToTerraform(this._export.internalValue),
            tags: cdktn.listMapper(ccExportResourceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            export: {
                value: ccExportExportPropertyToHclTerraform(this._export.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExport.ExportProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccExportResourceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcExport.ResourceTagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccExportDataQueryPropertyToTerraform(struct?: CcExport.DataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query_statement: cdktn.stringToTerraform(struct!.queryStatement),
        table_configurations: cdktn.hashMapper(cdktn.hashMapper(cdktn.stringToTerraform))(struct!.tableConfigurations),
    }
}


export function ccExportDataQueryPropertyToHclTerraform(struct?: CcExport.DataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query_statement: {
            value: cdktn.stringToHclTerraform(struct!.queryStatement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_configurations: {
            value: cdktn.hashMapperHcl(cdktn.hashMapperHcl(cdktn.stringToHclTerraform))(struct!.tableConfigurations),
            isBlock: false,
            type: "map",
            storageClassType: "stringMapMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExportS3OutputConfigurationsPropertyToTerraform(struct?: CcExport.S3OutputConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression: cdktn.stringToTerraform(struct!.compression),
        format: cdktn.stringToTerraform(struct!.format),
        output_type: cdktn.stringToTerraform(struct!.outputType),
        overwrite: cdktn.stringToTerraform(struct!.overwrite),
    }
}


export function ccExportS3OutputConfigurationsPropertyToHclTerraform(struct?: CcExport.S3OutputConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression: {
            value: cdktn.stringToHclTerraform(struct!.compression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_type: {
            value: cdktn.stringToHclTerraform(struct!.outputType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overwrite: {
            value: cdktn.stringToHclTerraform(struct!.overwrite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExportS3DestinationPropertyToTerraform(struct?: CcExport.S3DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_bucket_owner: cdktn.stringToTerraform(struct!.s3BucketOwner),
        s3_output_configurations: ccExportS3OutputConfigurationsPropertyToTerraform(struct!.s3OutputConfigurations),
        s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
        s3_region: cdktn.stringToTerraform(struct!.s3Region),
    }
}


export function ccExportS3DestinationPropertyToHclTerraform(struct?: CcExport.S3DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_configurations: {
            value: ccExportS3OutputConfigurationsPropertyToHclTerraform(struct!.s3OutputConfigurations),
            isBlock: true,
            type: "struct",
            storageClassType: "S3OutputConfigurationsProperty",
        },
        s3_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3Prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_region: {
            value: cdktn.stringToHclTerraform(struct!.s3Region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExportDestinationConfigurationsPropertyToTerraform(struct?: CcExport.DestinationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_destination: ccExportS3DestinationPropertyToTerraform(struct!.s3Destination),
    }
}


export function ccExportDestinationConfigurationsPropertyToHclTerraform(struct?: CcExport.DestinationConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_destination: {
            value: ccExportS3DestinationPropertyToHclTerraform(struct!.s3Destination),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExportRefreshCadencePropertyToTerraform(struct?: CcExport.RefreshCadenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        frequency: cdktn.stringToTerraform(struct!.frequency),
    }
}


export function ccExportRefreshCadencePropertyToHclTerraform(struct?: CcExport.RefreshCadenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        frequency: {
            value: cdktn.stringToHclTerraform(struct!.frequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExportExportPropertyToTerraform(struct?: CcExport.ExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_query: ccExportDataQueryPropertyToTerraform(struct!.dataQuery),
        description: cdktn.stringToTerraform(struct!.description),
        destination_configurations: ccExportDestinationConfigurationsPropertyToTerraform(struct!.destinationConfigurations),
        name: cdktn.stringToTerraform(struct!.name),
        refresh_cadence: ccExportRefreshCadencePropertyToTerraform(struct!.refreshCadence),
    }
}


export function ccExportExportPropertyToHclTerraform(struct?: CcExport.ExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_query: {
            value: ccExportDataQueryPropertyToHclTerraform(struct!.dataQuery),
            isBlock: true,
            type: "struct",
            storageClassType: "DataQueryProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_configurations: {
            value: ccExportDestinationConfigurationsPropertyToHclTerraform(struct!.destinationConfigurations),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationConfigurationsProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh_cadence: {
            value: ccExportRefreshCadencePropertyToHclTerraform(struct!.refreshCadence),
            isBlock: true,
            type: "struct",
            storageClassType: "RefreshCadenceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExportResourceTagPropertyToTerraform(struct?: CcExport.ResourceTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccExportResourceTagPropertyToHclTerraform(struct?: CcExport.ResourceTagProperty | cdktn.IResolvable): any {
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


export namespace CcExport {
export interface DataQueryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#query_statement CcExport#query_statement}
    */
    readonly queryStatement: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#table_configurations CcExport#table_configurations}
    */
    readonly tableConfigurations?: { [key: string]: { [key: string]: string } } | cdktn.IResolvable;
}
export class DataQueryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queryStatement !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStatement = this._queryStatement;
        }
        if (this._tableConfigurations !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableConfigurations = this._tableConfigurations;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queryStatement = undefined;
            this._tableConfigurations = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queryStatement = value.queryStatement;
            this._tableConfigurations = value.tableConfigurations;
        }
    }

    // query_statement - computed: false, optional: false, required: true
    private _queryStatement?: string; 
    public get queryStatement() {
        return this.getStringAttribute('query_statement');
    }
    public set queryStatement(value: string) {
        this._queryStatement = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStatementInput() {
        return this._queryStatement;
    }

    // table_configurations - computed: true, optional: true, required: false
    private _tableConfigurations?: { [key: string]: { [key: string]: string } } | cdktn.IResolvable; 
    public get tableConfigurations() {
        return this.interpolationForAttribute('table_configurations');
    }
    public set tableConfigurations(value: { [key: string]: { [key: string]: string } } | cdktn.IResolvable) {
        this._tableConfigurations = value;
    }
    public resetTableConfigurations() {
        this._tableConfigurations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableConfigurationsInput() {
        return this._tableConfigurations;
    }
}
export interface S3OutputConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#compression CcExport#compression}
    */
    readonly compression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#format CcExport#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#output_type CcExport#output_type}
    */
    readonly outputType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#overwrite CcExport#overwrite}
    */
    readonly overwrite: string;
}
export class S3OutputConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3OutputConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compression !== undefined) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._outputType !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputType = this._outputType;
        }
        if (this._overwrite !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwrite = this._overwrite;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3OutputConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compression = undefined;
            this._format = undefined;
            this._outputType = undefined;
            this._overwrite = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compression = value.compression;
            this._format = value.format;
            this._outputType = value.outputType;
            this._overwrite = value.overwrite;
        }
    }

    // compression - computed: false, optional: false, required: true
    private _compression?: string; 
    public get compression() {
        return this.getStringAttribute('compression');
    }
    public set compression(value: string) {
        this._compression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionInput() {
        return this._compression;
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // output_type - computed: false, optional: false, required: true
    private _outputType?: string; 
    public get outputType() {
        return this.getStringAttribute('output_type');
    }
    public set outputType(value: string) {
        this._outputType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputTypeInput() {
        return this._outputType;
    }

    // overwrite - computed: false, optional: false, required: true
    private _overwrite?: string; 
    public get overwrite() {
        return this.getStringAttribute('overwrite');
    }
    public set overwrite(value: string) {
        this._overwrite = value;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteInput() {
        return this._overwrite;
    }
}
export interface S3DestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#s3_bucket CcExport#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#s3_bucket_owner CcExport#s3_bucket_owner}
    */
    readonly s3BucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#s3_output_configurations CcExport#s3_output_configurations}
    */
    readonly s3OutputConfigurations: S3OutputConfigurationsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#s3_prefix CcExport#s3_prefix}
    */
    readonly s3Prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#s3_region CcExport#s3_region}
    */
    readonly s3Region: string;
}
export class S3DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3BucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketOwner = this._s3BucketOwner;
        }
        if (this._s3OutputConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputConfigurations = this._s3OutputConfigurations?.internalValue;
        }
        if (this._s3Prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Prefix = this._s3Prefix;
        }
        if (this._s3Region !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Region = this._s3Region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3BucketOwner = undefined;
            this._s3OutputConfigurations.internalValue = undefined;
            this._s3Prefix = undefined;
            this._s3Region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3BucketOwner = value.s3BucketOwner;
            this._s3OutputConfigurations.internalValue = value.s3OutputConfigurations;
            this._s3Prefix = value.s3Prefix;
            this._s3Region = value.s3Region;
        }
    }

    // s3_bucket - computed: false, optional: false, required: true
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_bucket_owner - computed: true, optional: true, required: false
    private _s3BucketOwner?: string; 
    public get s3BucketOwner() {
        return this.getStringAttribute('s3_bucket_owner');
    }
    public set s3BucketOwner(value: string) {
        this._s3BucketOwner = value;
    }
    public resetS3BucketOwner() {
        this._s3BucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketOwnerInput() {
        return this._s3BucketOwner;
    }

    // s3_output_configurations - computed: false, optional: false, required: true
    private _s3OutputConfigurations = new S3OutputConfigurationsPropertyOutputReference(this, "s3_output_configurations");
    public get s3OutputConfigurations() {
        return this._s3OutputConfigurations;
    }
    public putS3OutputConfigurations(value: S3OutputConfigurationsProperty) {
        this._s3OutputConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputConfigurationsInput() {
        return this._s3OutputConfigurations.internalValue;
    }

    // s3_prefix - computed: false, optional: false, required: true
    private _s3Prefix?: string; 
    public get s3Prefix() {
        return this.getStringAttribute('s3_prefix');
    }
    public set s3Prefix(value: string) {
        this._s3Prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3PrefixInput() {
        return this._s3Prefix;
    }

    // s3_region - computed: false, optional: false, required: true
    private _s3Region?: string; 
    public get s3Region() {
        return this.getStringAttribute('s3_region');
    }
    public set s3Region(value: string) {
        this._s3Region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3RegionInput() {
        return this._s3Region;
    }
}
export interface DestinationConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#s3_destination CcExport#s3_destination}
    */
    readonly s3Destination: S3DestinationProperty;
}
export class DestinationConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Destination = this._s3Destination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Destination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Destination.internalValue = value.s3Destination;
        }
    }

    // s3_destination - computed: false, optional: false, required: true
    private _s3Destination = new S3DestinationPropertyOutputReference(this, "s3_destination");
    public get s3Destination() {
        return this._s3Destination;
    }
    public putS3Destination(value: S3DestinationProperty) {
        this._s3Destination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DestinationInput() {
        return this._s3Destination.internalValue;
    }
}
export interface RefreshCadenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#frequency CcExport#frequency}
    */
    readonly frequency: string;
}
export class RefreshCadencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RefreshCadenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._frequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.frequency = this._frequency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RefreshCadenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._frequency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._frequency = value.frequency;
        }
    }

    // frequency - computed: false, optional: false, required: true
    private _frequency?: string; 
    public get frequency() {
        return this.getStringAttribute('frequency');
    }
    public set frequency(value: string) {
        this._frequency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
        return this._frequency;
    }
}
export interface ExportProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#data_query CcExport#data_query}
    */
    readonly dataQuery: DataQueryProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#description CcExport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#destination_configurations CcExport#destination_configurations}
    */
    readonly destinationConfigurations: DestinationConfigurationsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#name CcExport#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#refresh_cadence CcExport#refresh_cadence}
    */
    readonly refreshCadence: RefreshCadenceProperty;
}
export class ExportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataQuery?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataQuery = this._dataQuery?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._destinationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationConfigurations = this._destinationConfigurations?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._refreshCadence?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshCadence = this._refreshCadence?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataQuery.internalValue = undefined;
            this._description = undefined;
            this._destinationConfigurations.internalValue = undefined;
            this._name = undefined;
            this._refreshCadence.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataQuery.internalValue = value.dataQuery;
            this._description = value.description;
            this._destinationConfigurations.internalValue = value.destinationConfigurations;
            this._name = value.name;
            this._refreshCadence.internalValue = value.refreshCadence;
        }
    }

    // data_query - computed: false, optional: false, required: true
    private _dataQuery = new DataQueryPropertyOutputReference(this, "data_query");
    public get dataQuery() {
        return this._dataQuery;
    }
    public putDataQuery(value: DataQueryProperty) {
        this._dataQuery.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataQueryInput() {
        return this._dataQuery.internalValue;
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

    // destination_configurations - computed: false, optional: false, required: true
    private _destinationConfigurations = new DestinationConfigurationsPropertyOutputReference(this, "destination_configurations");
    public get destinationConfigurations() {
        return this._destinationConfigurations;
    }
    public putDestinationConfigurations(value: DestinationConfigurationsProperty) {
        this._destinationConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigurationsInput() {
        return this._destinationConfigurations.internalValue;
    }

    // export_arn - computed: true, optional: false, required: false
    public get exportArn() {
        return this.getStringAttribute('export_arn');
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

    // refresh_cadence - computed: false, optional: false, required: true
    private _refreshCadence = new RefreshCadencePropertyOutputReference(this, "refresh_cadence");
    public get refreshCadence() {
        return this._refreshCadence;
    }
    public putRefreshCadence(value: RefreshCadenceProperty) {
        this._refreshCadence.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshCadenceInput() {
        return this._refreshCadence.internalValue;
    }
}
export interface ResourceTagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#key CcExport#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bcmdataexports_export#value CcExport#value}
    */
    readonly value?: string;
}
export class ResourceTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ResourceTagProperty | cdktn.IResolvable | undefined) {
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

export class ResourceTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagPropertyOutputReference {
        return new ResourceTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
