// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTableOptimizerProps extends cdktn.TerraformMetaArguments {
    /**
    * The catalog ID of the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#catalog_id CcTableOptimizer#catalog_id}
    */
    readonly catalogId: string;
    /**
    * The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#database_name CcTableOptimizer#database_name}
    */
    readonly databaseName: string;
    /**
    * The table name. For Hive compatibility, this must be entirely lowercase.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#table_name CcTableOptimizer#table_name}
    */
    readonly tableName: string;
    /**
    * Specifies configuration details of a table optimizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#table_optimizer_configuration CcTableOptimizer#table_optimizer_configuration}
    */
    readonly tableOptimizerConfiguration: CcTableOptimizer.TableOptimizerConfigurationProperty;
    /**
    * The type of table optimizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#type CcTableOptimizer#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer awscc_glue_table_optimizer}
*/
export class CcTableOptimizer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_table_optimizer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTableOptimizer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTableOptimizer to import
    * @param importFromId The id of the existing CcTableOptimizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTableOptimizer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_table_optimizer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer awscc_glue_table_optimizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTableOptimizerProps
    */
    public constructor(scope: Construct, id: string, config: CcTableOptimizerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_table_optimizer',
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
        this._catalogId = config.catalogId;
        this._databaseName = config.databaseName;
        this._tableName = config.tableName;
        this._tableOptimizerConfiguration.internalValue = config.tableOptimizerConfiguration;
        this._type = config.type;
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

    // table_optimizer_configuration - computed: false, optional: false, required: true
    private _tableOptimizerConfiguration = new CcTableOptimizer.TableOptimizerConfigurationPropertyOutputReference(this, "table_optimizer_configuration");
    public get tableOptimizerConfiguration() {
        return this._tableOptimizerConfiguration;
    }
    public putTableOptimizerConfiguration(value: CcTableOptimizer.TableOptimizerConfigurationProperty) {
        this._tableOptimizerConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableOptimizerConfigurationInput() {
        return this._tableOptimizerConfiguration.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            catalog_id: cdktn.stringToTerraform(this._catalogId),
            database_name: cdktn.stringToTerraform(this._databaseName),
            table_name: cdktn.stringToTerraform(this._tableName),
            table_optimizer_configuration: ccTableOptimizerTableOptimizerConfigurationPropertyToTerraform(this._tableOptimizerConfiguration.internalValue),
            type: cdktn.stringToTerraform(this._type),
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
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            table_optimizer_configuration: {
                value: ccTableOptimizerTableOptimizerConfigurationPropertyToHclTerraform(this._tableOptimizerConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTableOptimizer.TableOptimizerConfigurationProperty",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTableOptimizerIcebergCompactionConfigurationPropertyToTerraform(struct?: CcTableOptimizer.IcebergCompactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_file_threshold: cdktn.numberToTerraform(struct!.deleteFileThreshold),
        min_input_files: cdktn.numberToTerraform(struct!.minInputFiles),
        strategy: cdktn.stringToTerraform(struct!.strategy),
    }
}


export function ccTableOptimizerIcebergCompactionConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.IcebergCompactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delete_file_threshold: {
            value: cdktn.numberToHclTerraform(struct!.deleteFileThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_input_files: {
            value: cdktn.numberToHclTerraform(struct!.minInputFiles),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strategy: {
            value: cdktn.stringToHclTerraform(struct!.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOptimizerCompactionConfigurationPropertyToTerraform(struct?: CcTableOptimizer.CompactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iceberg_configuration: ccTableOptimizerIcebergCompactionConfigurationPropertyToTerraform(struct!.icebergConfiguration),
    }
}


export function ccTableOptimizerCompactionConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.CompactionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iceberg_configuration: {
            value: ccTableOptimizerIcebergCompactionConfigurationPropertyToHclTerraform(struct!.icebergConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergCompactionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOptimizerIcebergConfigurationPropertyToTerraform(struct?: CcTableOptimizer.IcebergConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        location: cdktn.stringToTerraform(struct!.location),
        orphan_file_retention_period_in_days: cdktn.numberToTerraform(struct!.orphanFileRetentionPeriodInDays),
    }
}


export function ccTableOptimizerIcebergConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.IcebergConfigurationProperty | cdktn.IResolvable): any {
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
        orphan_file_retention_period_in_days: {
            value: cdktn.numberToHclTerraform(struct!.orphanFileRetentionPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOptimizerOrphanFileDeletionConfigurationPropertyToTerraform(struct?: CcTableOptimizer.OrphanFileDeletionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iceberg_configuration: ccTableOptimizerIcebergConfigurationPropertyToTerraform(struct!.icebergConfiguration),
    }
}


export function ccTableOptimizerOrphanFileDeletionConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.OrphanFileDeletionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iceberg_configuration: {
            value: ccTableOptimizerIcebergConfigurationPropertyToHclTerraform(struct!.icebergConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOptimizerIcebergRetentionConfigurationPropertyToTerraform(struct?: CcTableOptimizer.IcebergRetentionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clean_expired_files: cdktn.booleanToTerraform(struct!.cleanExpiredFiles),
        number_of_snapshots_to_retain: cdktn.numberToTerraform(struct!.numberOfSnapshotsToRetain),
        snapshot_retention_period_in_days: cdktn.numberToTerraform(struct!.snapshotRetentionPeriodInDays),
    }
}


export function ccTableOptimizerIcebergRetentionConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.IcebergRetentionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clean_expired_files: {
            value: cdktn.booleanToHclTerraform(struct!.cleanExpiredFiles),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        number_of_snapshots_to_retain: {
            value: cdktn.numberToHclTerraform(struct!.numberOfSnapshotsToRetain),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        snapshot_retention_period_in_days: {
            value: cdktn.numberToHclTerraform(struct!.snapshotRetentionPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOptimizerRetentionConfigurationPropertyToTerraform(struct?: CcTableOptimizer.RetentionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iceberg_configuration: ccTableOptimizerIcebergRetentionConfigurationPropertyToTerraform(struct!.icebergConfiguration),
    }
}


export function ccTableOptimizerRetentionConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.RetentionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iceberg_configuration: {
            value: ccTableOptimizerIcebergRetentionConfigurationPropertyToHclTerraform(struct!.icebergConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IcebergRetentionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOptimizerVpcConfigurationPropertyToTerraform(struct?: CcTableOptimizer.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_connection_name: cdktn.stringToTerraform(struct!.glueConnectionName),
    }
}


export function ccTableOptimizerVpcConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_connection_name: {
            value: cdktn.stringToHclTerraform(struct!.glueConnectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableOptimizerTableOptimizerConfigurationPropertyToTerraform(struct?: CcTableOptimizer.TableOptimizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compaction_configuration: ccTableOptimizerCompactionConfigurationPropertyToTerraform(struct!.compactionConfiguration),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        orphan_file_deletion_configuration: ccTableOptimizerOrphanFileDeletionConfigurationPropertyToTerraform(struct!.orphanFileDeletionConfiguration),
        retention_configuration: ccTableOptimizerRetentionConfigurationPropertyToTerraform(struct!.retentionConfiguration),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        vpc_configuration: ccTableOptimizerVpcConfigurationPropertyToTerraform(struct!.vpcConfiguration),
    }
}


export function ccTableOptimizerTableOptimizerConfigurationPropertyToHclTerraform(struct?: CcTableOptimizer.TableOptimizerConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compaction_configuration: {
            value: ccTableOptimizerCompactionConfigurationPropertyToHclTerraform(struct!.compactionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CompactionConfigurationProperty",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        orphan_file_deletion_configuration: {
            value: ccTableOptimizerOrphanFileDeletionConfigurationPropertyToHclTerraform(struct!.orphanFileDeletionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OrphanFileDeletionConfigurationProperty",
        },
        retention_configuration: {
            value: ccTableOptimizerRetentionConfigurationPropertyToHclTerraform(struct!.retentionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RetentionConfigurationProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_configuration: {
            value: ccTableOptimizerVpcConfigurationPropertyToHclTerraform(struct!.vpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTableOptimizer {
export interface IcebergCompactionConfigurationProperty {
    /**
    * The minimum number of deletes in a data file to make it eligible for compaction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#delete_file_threshold CcTableOptimizer#delete_file_threshold}
    */
    readonly deleteFileThreshold?: number;
    /**
    * The minimum number of input files before compaction is triggered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#min_input_files CcTableOptimizer#min_input_files}
    */
    readonly minInputFiles?: number;
    /**
    * The compaction strategy to use. Valid values are binpack, sort, and z-order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#strategy CcTableOptimizer#strategy}
    */
    readonly strategy?: string;
}
export class IcebergCompactionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergCompactionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deleteFileThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteFileThreshold = this._deleteFileThreshold;
        }
        if (this._minInputFiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.minInputFiles = this._minInputFiles;
        }
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergCompactionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteFileThreshold = undefined;
            this._minInputFiles = undefined;
            this._strategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteFileThreshold = value.deleteFileThreshold;
            this._minInputFiles = value.minInputFiles;
            this._strategy = value.strategy;
        }
    }

    // delete_file_threshold - computed: true, optional: true, required: false
    private _deleteFileThreshold?: number; 
    public get deleteFileThreshold() {
        return this.getNumberAttribute('delete_file_threshold');
    }
    public set deleteFileThreshold(value: number) {
        this._deleteFileThreshold = value;
    }
    public resetDeleteFileThreshold() {
        this._deleteFileThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteFileThresholdInput() {
        return this._deleteFileThreshold;
    }

    // min_input_files - computed: true, optional: true, required: false
    private _minInputFiles?: number; 
    public get minInputFiles() {
        return this.getNumberAttribute('min_input_files');
    }
    public set minInputFiles(value: number) {
        this._minInputFiles = value;
    }
    public resetMinInputFiles() {
        this._minInputFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInputFilesInput() {
        return this._minInputFiles;
    }

    // strategy - computed: true, optional: true, required: false
    private _strategy?: string; 
    public get strategy() {
        return this.getStringAttribute('strategy');
    }
    public set strategy(value: string) {
        this._strategy = value;
    }
    public resetStrategy() {
        this._strategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyInput() {
        return this._strategy;
    }
}
export interface CompactionConfigurationProperty {
    /**
    * The configuration for an Iceberg compaction optimizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#iceberg_configuration CcTableOptimizer#iceberg_configuration}
    */
    readonly icebergConfiguration?: IcebergCompactionConfigurationProperty;
}
export class CompactionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CompactionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._icebergConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompactionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._icebergConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._icebergConfiguration.internalValue = value.icebergConfiguration;
        }
    }

    // iceberg_configuration - computed: true, optional: true, required: false
    private _icebergConfiguration = new IcebergCompactionConfigurationPropertyOutputReference(this, "iceberg_configuration");
    public get icebergConfiguration() {
        return this._icebergConfiguration;
    }
    public putIcebergConfiguration(value: IcebergCompactionConfigurationProperty) {
        this._icebergConfiguration.internalValue = value;
    }
    public resetIcebergConfiguration() {
        this._icebergConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icebergConfigurationInput() {
        return this._icebergConfiguration.internalValue;
    }
}
export interface IcebergConfigurationProperty {
    /**
    * Specifies a directory in which to look for orphan files (defaults to the table's location). You may choose a sub-directory rather than the top-level table location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#location CcTableOptimizer#location}
    */
    readonly location?: string;
    /**
    * The specific number of days you want to keep the orphan files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#orphan_file_retention_period_in_days CcTableOptimizer#orphan_file_retention_period_in_days}
    */
    readonly orphanFileRetentionPeriodInDays?: number;
}
export class IcebergConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._location !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._orphanFileRetentionPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.orphanFileRetentionPeriodInDays = this._orphanFileRetentionPeriodInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._location = undefined;
            this._orphanFileRetentionPeriodInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._location = value.location;
            this._orphanFileRetentionPeriodInDays = value.orphanFileRetentionPeriodInDays;
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

    // orphan_file_retention_period_in_days - computed: true, optional: true, required: false
    private _orphanFileRetentionPeriodInDays?: number; 
    public get orphanFileRetentionPeriodInDays() {
        return this.getNumberAttribute('orphan_file_retention_period_in_days');
    }
    public set orphanFileRetentionPeriodInDays(value: number) {
        this._orphanFileRetentionPeriodInDays = value;
    }
    public resetOrphanFileRetentionPeriodInDays() {
        this._orphanFileRetentionPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orphanFileRetentionPeriodInDaysInput() {
        return this._orphanFileRetentionPeriodInDays;
    }
}
export interface OrphanFileDeletionConfigurationProperty {
    /**
    * The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#iceberg_configuration CcTableOptimizer#iceberg_configuration}
    */
    readonly icebergConfiguration?: IcebergConfigurationProperty;
}
export class OrphanFileDeletionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrphanFileDeletionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._icebergConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrphanFileDeletionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._icebergConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._icebergConfiguration.internalValue = value.icebergConfiguration;
        }
    }

    // iceberg_configuration - computed: true, optional: true, required: false
    private _icebergConfiguration = new IcebergConfigurationPropertyOutputReference(this, "iceberg_configuration");
    public get icebergConfiguration() {
        return this._icebergConfiguration;
    }
    public putIcebergConfiguration(value: IcebergConfigurationProperty) {
        this._icebergConfiguration.internalValue = value;
    }
    public resetIcebergConfiguration() {
        this._icebergConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icebergConfigurationInput() {
        return this._icebergConfiguration.internalValue;
    }
}
export interface IcebergRetentionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#clean_expired_files CcTableOptimizer#clean_expired_files}
    */
    readonly cleanExpiredFiles?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain CcTableOptimizer#number_of_snapshots_to_retain}
    */
    readonly numberOfSnapshotsToRetain?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days CcTableOptimizer#snapshot_retention_period_in_days}
    */
    readonly snapshotRetentionPeriodInDays?: number;
}
export class IcebergRetentionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergRetentionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cleanExpiredFiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.cleanExpiredFiles = this._cleanExpiredFiles;
        }
        if (this._numberOfSnapshotsToRetain !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfSnapshotsToRetain = this._numberOfSnapshotsToRetain;
        }
        if (this._snapshotRetentionPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotRetentionPeriodInDays = this._snapshotRetentionPeriodInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergRetentionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cleanExpiredFiles = undefined;
            this._numberOfSnapshotsToRetain = undefined;
            this._snapshotRetentionPeriodInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cleanExpiredFiles = value.cleanExpiredFiles;
            this._numberOfSnapshotsToRetain = value.numberOfSnapshotsToRetain;
            this._snapshotRetentionPeriodInDays = value.snapshotRetentionPeriodInDays;
        }
    }

    // clean_expired_files - computed: true, optional: true, required: false
    private _cleanExpiredFiles?: boolean | cdktn.IResolvable; 
    public get cleanExpiredFiles() {
        return this.getBooleanAttribute('clean_expired_files');
    }
    public set cleanExpiredFiles(value: boolean | cdktn.IResolvable) {
        this._cleanExpiredFiles = value;
    }
    public resetCleanExpiredFiles() {
        this._cleanExpiredFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cleanExpiredFilesInput() {
        return this._cleanExpiredFiles;
    }

    // number_of_snapshots_to_retain - computed: true, optional: true, required: false
    private _numberOfSnapshotsToRetain?: number; 
    public get numberOfSnapshotsToRetain() {
        return this.getNumberAttribute('number_of_snapshots_to_retain');
    }
    public set numberOfSnapshotsToRetain(value: number) {
        this._numberOfSnapshotsToRetain = value;
    }
    public resetNumberOfSnapshotsToRetain() {
        this._numberOfSnapshotsToRetain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfSnapshotsToRetainInput() {
        return this._numberOfSnapshotsToRetain;
    }

    // snapshot_retention_period_in_days - computed: true, optional: true, required: false
    private _snapshotRetentionPeriodInDays?: number; 
    public get snapshotRetentionPeriodInDays() {
        return this.getNumberAttribute('snapshot_retention_period_in_days');
    }
    public set snapshotRetentionPeriodInDays(value: number) {
        this._snapshotRetentionPeriodInDays = value;
    }
    public resetSnapshotRetentionPeriodInDays() {
        this._snapshotRetentionPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotRetentionPeriodInDaysInput() {
        return this._snapshotRetentionPeriodInDays;
    }
}
export interface RetentionConfigurationProperty {
    /**
    * The configuration for an Iceberg snapshot retention optimizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#iceberg_configuration CcTableOptimizer#iceberg_configuration}
    */
    readonly icebergConfiguration?: IcebergRetentionConfigurationProperty;
}
export class RetentionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetentionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._icebergConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetentionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._icebergConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._icebergConfiguration.internalValue = value.icebergConfiguration;
        }
    }

    // iceberg_configuration - computed: true, optional: true, required: false
    private _icebergConfiguration = new IcebergRetentionConfigurationPropertyOutputReference(this, "iceberg_configuration");
    public get icebergConfiguration() {
        return this._icebergConfiguration;
    }
    public putIcebergConfiguration(value: IcebergRetentionConfigurationProperty) {
        this._icebergConfiguration.internalValue = value;
    }
    public resetIcebergConfiguration() {
        this._icebergConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icebergConfigurationInput() {
        return this._icebergConfiguration.internalValue;
    }
}
export interface VpcConfigurationProperty {
    /**
    * The name of the AWS Glue connection used for the VPC for the table optimizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#glue_connection_name CcTableOptimizer#glue_connection_name}
    */
    readonly glueConnectionName?: string;
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueConnectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueConnectionName = this._glueConnectionName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueConnectionName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueConnectionName = value.glueConnectionName;
        }
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
}
export interface TableOptimizerConfigurationProperty {
    /**
    * The configuration for a compaction optimizer. This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#compaction_configuration CcTableOptimizer#compaction_configuration}
    */
    readonly compactionConfiguration?: CompactionConfigurationProperty;
    /**
    * Whether the table optimization is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#enabled CcTableOptimizer#enabled}
    */
    readonly enabled: boolean | cdktn.IResolvable;
    /**
    * OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource. It controls the automatic deletion of orphaned files - files that are not tracked by the table metadata, and older than the configured age limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#orphan_file_deletion_configuration CcTableOptimizer#orphan_file_deletion_configuration}
    */
    readonly orphanFileDeletionConfiguration?: OrphanFileDeletionConfigurationProperty;
    /**
    * The configuration for a snapshot retention optimizer for Apache Iceberg tables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#retention_configuration CcTableOptimizer#retention_configuration}
    */
    readonly retentionConfiguration?: RetentionConfigurationProperty;
    /**
    * A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#role_arn CcTableOptimizer#role_arn}
    */
    readonly roleArn: string;
    /**
    * An object that describes the VPC configuration for a table optimizer. This configuration is necessary to perform optimization on tables that are in a customer VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_table_optimizer#vpc_configuration CcTableOptimizer#vpc_configuration}
    */
    readonly vpcConfiguration?: VpcConfigurationProperty;
}
export class TableOptimizerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TableOptimizerConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compactionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compactionConfiguration = this._compactionConfiguration?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._orphanFileDeletionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orphanFileDeletionConfiguration = this._orphanFileDeletionConfiguration?.internalValue;
        }
        if (this._retentionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionConfiguration = this._retentionConfiguration?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._vpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TableOptimizerConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compactionConfiguration.internalValue = undefined;
            this._enabled = undefined;
            this._orphanFileDeletionConfiguration.internalValue = undefined;
            this._retentionConfiguration.internalValue = undefined;
            this._roleArn = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compactionConfiguration.internalValue = value.compactionConfiguration;
            this._enabled = value.enabled;
            this._orphanFileDeletionConfiguration.internalValue = value.orphanFileDeletionConfiguration;
            this._retentionConfiguration.internalValue = value.retentionConfiguration;
            this._roleArn = value.roleArn;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }

    // compaction_configuration - computed: true, optional: true, required: false
    private _compactionConfiguration = new CompactionConfigurationPropertyOutputReference(this, "compaction_configuration");
    public get compactionConfiguration() {
        return this._compactionConfiguration;
    }
    public putCompactionConfiguration(value: CompactionConfigurationProperty) {
        this._compactionConfiguration.internalValue = value;
    }
    public resetCompactionConfiguration() {
        this._compactionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compactionConfigurationInput() {
        return this._compactionConfiguration.internalValue;
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // orphan_file_deletion_configuration - computed: true, optional: true, required: false
    private _orphanFileDeletionConfiguration = new OrphanFileDeletionConfigurationPropertyOutputReference(this, "orphan_file_deletion_configuration");
    public get orphanFileDeletionConfiguration() {
        return this._orphanFileDeletionConfiguration;
    }
    public putOrphanFileDeletionConfiguration(value: OrphanFileDeletionConfigurationProperty) {
        this._orphanFileDeletionConfiguration.internalValue = value;
    }
    public resetOrphanFileDeletionConfiguration() {
        this._orphanFileDeletionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orphanFileDeletionConfigurationInput() {
        return this._orphanFileDeletionConfiguration.internalValue;
    }

    // retention_configuration - computed: true, optional: true, required: false
    private _retentionConfiguration = new RetentionConfigurationPropertyOutputReference(this, "retention_configuration");
    public get retentionConfiguration() {
        return this._retentionConfiguration;
    }
    public putRetentionConfiguration(value: RetentionConfigurationProperty) {
        this._retentionConfiguration.internalValue = value;
    }
    public resetRetentionConfiguration() {
        this._retentionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionConfigurationInput() {
        return this._retentionConfiguration.internalValue;
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

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: VpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
}
