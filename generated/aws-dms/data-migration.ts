// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataMigrationProps extends cdktn.TerraformMetaArguments {
    /**
    * The property describes an ARN of the data migration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#data_migration_identifier CcDataMigration#data_migration_identifier}
    */
    readonly dataMigrationIdentifier?: string;
    /**
    * The property describes a name to identify the data migration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#data_migration_name CcDataMigration#data_migration_name}
    */
    readonly dataMigrationName?: string;
    /**
    * The property describes the settings for the data migration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#data_migration_settings CcDataMigration#data_migration_settings}
    */
    readonly dataMigrationSettings?: CcDataMigration.DataMigrationSettingsProperty;
    /**
    * The property describes the type of migration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#data_migration_type CcDataMigration#data_migration_type}
    */
    readonly dataMigrationType: string;
    /**
    * The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#migration_project_identifier CcDataMigration#migration_project_identifier}
    */
    readonly migrationProjectIdentifier: string;
    /**
    * The property describes Amazon Resource Name (ARN) of the service access role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#service_access_role_arn CcDataMigration#service_access_role_arn}
    */
    readonly serviceAccessRoleArn: string;
    /**
    * The property describes the settings for the data migration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#source_data_settings CcDataMigration#source_data_settings}
    */
    readonly sourceDataSettings?: CcDataMigration.SourceDataSettingsProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#tags CcDataMigration#tags}
    */
    readonly tags?: CcDataMigration.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration awscc_dms_data_migration}
*/
export class CcDataMigration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dms_data_migration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataMigration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataMigration to import
    * @param importFromId The id of the existing CcDataMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataMigration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_data_migration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration awscc_dms_data_migration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataMigrationProps
    */
    public constructor(scope: Construct, id: string, config: CcDataMigrationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dms_data_migration',
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
        this._dataMigrationIdentifier = config.dataMigrationIdentifier;
        this._dataMigrationName = config.dataMigrationName;
        this._dataMigrationSettings.internalValue = config.dataMigrationSettings;
        this._dataMigrationType = config.dataMigrationType;
        this._migrationProjectIdentifier = config.migrationProjectIdentifier;
        this._serviceAccessRoleArn = config.serviceAccessRoleArn;
        this._sourceDataSettings.internalValue = config.sourceDataSettings;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_migration_arn - computed: true, optional: false, required: false
    public get dataMigrationArn() {
        return this.getStringAttribute('data_migration_arn');
    }

    // data_migration_create_time - computed: true, optional: false, required: false
    public get dataMigrationCreateTime() {
        return this.getStringAttribute('data_migration_create_time');
    }

    // data_migration_identifier - computed: true, optional: true, required: false
    private _dataMigrationIdentifier?: string; 
    public get dataMigrationIdentifier() {
        return this.getStringAttribute('data_migration_identifier');
    }
    public set dataMigrationIdentifier(value: string) {
        this._dataMigrationIdentifier = value;
    }
    public resetDataMigrationIdentifier() {
        this._dataMigrationIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataMigrationIdentifierInput() {
        return this._dataMigrationIdentifier;
    }

    // data_migration_name - computed: true, optional: true, required: false
    private _dataMigrationName?: string; 
    public get dataMigrationName() {
        return this.getStringAttribute('data_migration_name');
    }
    public set dataMigrationName(value: string) {
        this._dataMigrationName = value;
    }
    public resetDataMigrationName() {
        this._dataMigrationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataMigrationNameInput() {
        return this._dataMigrationName;
    }

    // data_migration_settings - computed: true, optional: true, required: false
    private _dataMigrationSettings = new CcDataMigration.DataMigrationSettingsPropertyOutputReference(this, "data_migration_settings");
    public get dataMigrationSettings() {
        return this._dataMigrationSettings;
    }
    public putDataMigrationSettings(value: CcDataMigration.DataMigrationSettingsProperty) {
        this._dataMigrationSettings.internalValue = value;
    }
    public resetDataMigrationSettings() {
        this._dataMigrationSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataMigrationSettingsInput() {
        return this._dataMigrationSettings.internalValue;
    }

    // data_migration_type - computed: false, optional: false, required: true
    private _dataMigrationType?: string; 
    public get dataMigrationType() {
        return this.getStringAttribute('data_migration_type');
    }
    public set dataMigrationType(value: string) {
        this._dataMigrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataMigrationTypeInput() {
        return this._dataMigrationType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // migration_project_identifier - computed: false, optional: false, required: true
    private _migrationProjectIdentifier?: string; 
    public get migrationProjectIdentifier() {
        return this.getStringAttribute('migration_project_identifier');
    }
    public set migrationProjectIdentifier(value: string) {
        this._migrationProjectIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get migrationProjectIdentifierInput() {
        return this._migrationProjectIdentifier;
    }

    // service_access_role_arn - computed: false, optional: false, required: true
    private _serviceAccessRoleArn?: string; 
    public get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string) {
        this._serviceAccessRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }

    // source_data_settings - computed: true, optional: true, required: false
    private _sourceDataSettings = new CcDataMigration.SourceDataSettingsPropertyList(this, "source_data_settings", true);
    public get sourceDataSettings() {
        return this._sourceDataSettings;
    }
    public putSourceDataSettings(value: CcDataMigration.SourceDataSettingsProperty[] | cdktn.IResolvable) {
        this._sourceDataSettings.internalValue = value;
    }
    public resetSourceDataSettings() {
        this._sourceDataSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDataSettingsInput() {
        return this._sourceDataSettings.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataMigration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataMigration.TagProperty[] | cdktn.IResolvable) {
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
            data_migration_identifier: cdktn.stringToTerraform(this._dataMigrationIdentifier),
            data_migration_name: cdktn.stringToTerraform(this._dataMigrationName),
            data_migration_settings: ccDataMigrationDataMigrationSettingsPropertyToTerraform(this._dataMigrationSettings.internalValue),
            data_migration_type: cdktn.stringToTerraform(this._dataMigrationType),
            migration_project_identifier: cdktn.stringToTerraform(this._migrationProjectIdentifier),
            service_access_role_arn: cdktn.stringToTerraform(this._serviceAccessRoleArn),
            source_data_settings: cdktn.listMapper(ccDataMigrationSourceDataSettingsPropertyToTerraform, false)(this._sourceDataSettings.internalValue),
            tags: cdktn.listMapper(ccDataMigrationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_migration_identifier: {
                value: cdktn.stringToHclTerraform(this._dataMigrationIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_migration_name: {
                value: cdktn.stringToHclTerraform(this._dataMigrationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_migration_settings: {
                value: ccDataMigrationDataMigrationSettingsPropertyToHclTerraform(this._dataMigrationSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataMigration.DataMigrationSettingsProperty",
            },
            data_migration_type: {
                value: cdktn.stringToHclTerraform(this._dataMigrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            migration_project_identifier: {
                value: cdktn.stringToHclTerraform(this._migrationProjectIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_access_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceAccessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_data_settings: {
                value: cdktn.listMapperHcl(ccDataMigrationSourceDataSettingsPropertyToHclTerraform, false)(this._sourceDataSettings.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDataMigration.SourceDataSettingsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataMigrationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDataMigration.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataMigrationDataMigrationSettingsPropertyToTerraform(struct?: CcDataMigration.DataMigrationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_enabled: cdktn.booleanToTerraform(struct!.cloudwatchLogsEnabled),
        number_of_jobs: cdktn.numberToTerraform(struct!.numberOfJobs),
        selection_rules: cdktn.stringToTerraform(struct!.selectionRules),
    }
}


export function ccDataMigrationDataMigrationSettingsPropertyToHclTerraform(struct?: CcDataMigration.DataMigrationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.cloudwatchLogsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        number_of_jobs: {
            value: cdktn.numberToHclTerraform(struct!.numberOfJobs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        selection_rules: {
            value: cdktn.stringToHclTerraform(struct!.selectionRules),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataMigrationSourceDataSettingsPropertyToTerraform(struct?: CcDataMigration.SourceDataSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cdc_start_position: cdktn.stringToTerraform(struct!.cdcStartPosition),
        cdc_start_time: cdktn.stringToTerraform(struct!.cdcStartTime),
        cdc_stop_time: cdktn.stringToTerraform(struct!.cdcStopTime),
        slot_name: cdktn.stringToTerraform(struct!.slotName),
    }
}


export function ccDataMigrationSourceDataSettingsPropertyToHclTerraform(struct?: CcDataMigration.SourceDataSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cdc_start_position: {
            value: cdktn.stringToHclTerraform(struct!.cdcStartPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cdc_start_time: {
            value: cdktn.stringToHclTerraform(struct!.cdcStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cdc_stop_time: {
            value: cdktn.stringToHclTerraform(struct!.cdcStopTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        slot_name: {
            value: cdktn.stringToHclTerraform(struct!.slotName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataMigrationTagPropertyToTerraform(struct?: CcDataMigration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataMigrationTagPropertyToHclTerraform(struct?: CcDataMigration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataMigration {
export interface DataMigrationSettingsProperty {
    /**
    * The property specifies whether to enable the CloudWatch log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#cloudwatch_logs_enabled CcDataMigration#cloudwatch_logs_enabled}
    */
    readonly cloudwatchLogsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#number_of_jobs CcDataMigration#number_of_jobs}
    */
    readonly numberOfJobs?: number;
    /**
    * The property specifies the rules of selecting objects for data migration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#selection_rules CcDataMigration#selection_rules}
    */
    readonly selectionRules?: string;
}
export class DataMigrationSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataMigrationSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsEnabled = this._cloudwatchLogsEnabled;
        }
        if (this._numberOfJobs !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfJobs = this._numberOfJobs;
        }
        if (this._selectionRules !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionRules = this._selectionRules;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataMigrationSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsEnabled = undefined;
            this._numberOfJobs = undefined;
            this._selectionRules = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsEnabled = value.cloudwatchLogsEnabled;
            this._numberOfJobs = value.numberOfJobs;
            this._selectionRules = value.selectionRules;
        }
    }

    // cloudwatch_logs_enabled - computed: true, optional: true, required: false
    private _cloudwatchLogsEnabled?: boolean | cdktn.IResolvable; 
    public get cloudwatchLogsEnabled() {
        return this.getBooleanAttribute('cloudwatch_logs_enabled');
    }
    public set cloudwatchLogsEnabled(value: boolean | cdktn.IResolvable) {
        this._cloudwatchLogsEnabled = value;
    }
    public resetCloudwatchLogsEnabled() {
        this._cloudwatchLogsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsEnabledInput() {
        return this._cloudwatchLogsEnabled;
    }

    // number_of_jobs - computed: true, optional: true, required: false
    private _numberOfJobs?: number; 
    public get numberOfJobs() {
        return this.getNumberAttribute('number_of_jobs');
    }
    public set numberOfJobs(value: number) {
        this._numberOfJobs = value;
    }
    public resetNumberOfJobs() {
        this._numberOfJobs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfJobsInput() {
        return this._numberOfJobs;
    }

    // selection_rules - computed: true, optional: true, required: false
    private _selectionRules?: string; 
    public get selectionRules() {
        return this.getStringAttribute('selection_rules');
    }
    public set selectionRules(value: string) {
        this._selectionRules = value;
    }
    public resetSelectionRules() {
        this._selectionRules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionRulesInput() {
        return this._selectionRules;
    }
}
export interface SourceDataSettingsProperty {
    /**
    * The property is a point in the database engine's log that defines a time where you can begin CDC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#cdc_start_position CcDataMigration#cdc_start_position}
    */
    readonly cdcStartPosition?: string;
    /**
    * The property indicates the start time for a change data capture (CDC) operation. The value is server time in UTC format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#cdc_start_time CcDataMigration#cdc_start_time}
    */
    readonly cdcStartTime?: string;
    /**
    * The property indicates the stop time for a change data capture (CDC) operation. The value is server time in UTC format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#cdc_stop_time CcDataMigration#cdc_stop_time}
    */
    readonly cdcStopTime?: string;
    /**
    * The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#slot_name CcDataMigration#slot_name}
    */
    readonly slotName?: string;
}
export class SourceDataSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceDataSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cdcStartPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcStartPosition = this._cdcStartPosition;
        }
        if (this._cdcStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcStartTime = this._cdcStartTime;
        }
        if (this._cdcStopTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcStopTime = this._cdcStopTime;
        }
        if (this._slotName !== undefined) {
            hasAnyValues = true;
            internalValueResult.slotName = this._slotName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceDataSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cdcStartPosition = undefined;
            this._cdcStartTime = undefined;
            this._cdcStopTime = undefined;
            this._slotName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cdcStartPosition = value.cdcStartPosition;
            this._cdcStartTime = value.cdcStartTime;
            this._cdcStopTime = value.cdcStopTime;
            this._slotName = value.slotName;
        }
    }

    // cdc_start_position - computed: true, optional: true, required: false
    private _cdcStartPosition?: string; 
    public get cdcStartPosition() {
        return this.getStringAttribute('cdc_start_position');
    }
    public set cdcStartPosition(value: string) {
        this._cdcStartPosition = value;
    }
    public resetCdcStartPosition() {
        this._cdcStartPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStartPositionInput() {
        return this._cdcStartPosition;
    }

    // cdc_start_time - computed: true, optional: true, required: false
    private _cdcStartTime?: string; 
    public get cdcStartTime() {
        return this.getStringAttribute('cdc_start_time');
    }
    public set cdcStartTime(value: string) {
        this._cdcStartTime = value;
    }
    public resetCdcStartTime() {
        this._cdcStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStartTimeInput() {
        return this._cdcStartTime;
    }

    // cdc_stop_time - computed: true, optional: true, required: false
    private _cdcStopTime?: string; 
    public get cdcStopTime() {
        return this.getStringAttribute('cdc_stop_time');
    }
    public set cdcStopTime(value: string) {
        this._cdcStopTime = value;
    }
    public resetCdcStopTime() {
        this._cdcStopTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcStopTimeInput() {
        return this._cdcStopTime;
    }

    // slot_name - computed: true, optional: true, required: false
    private _slotName?: string; 
    public get slotName() {
        return this.getStringAttribute('slot_name');
    }
    public set slotName(value: string) {
        this._slotName = value;
    }
    public resetSlotName() {
        this._slotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slotNameInput() {
        return this._slotName;
    }
}

export class SourceDataSettingsPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceDataSettingsProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceDataSettingsPropertyOutputReference {
        return new SourceDataSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#key CcDataMigration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_data_migration#value CcDataMigration#value}
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
