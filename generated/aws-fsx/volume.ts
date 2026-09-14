// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVolumeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#backup_id CcVolume#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#name CcVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#ontap_configuration CcVolume#ontap_configuration}
    */
    readonly ontapConfiguration?: CcVolume.OntapConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#open_zfs_configuration CcVolume#open_zfs_configuration}
    */
    readonly openZfsConfiguration?: CcVolume.OpenZFSConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#tags CcVolume#tags}
    */
    readonly tags?: CcVolume.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#volume_type CcVolume#volume_type}
    */
    readonly volumeType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume awscc_fsx_volume}
*/
export class CcVolume extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fsx_volume";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVolume resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVolume to import
    * @param importFromId The id of the existing CcVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVolume to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fsx_volume", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume awscc_fsx_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVolumeProps
    */
    public constructor(scope: Construct, id: string, config: CcVolumeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fsx_volume',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.101.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._backupId = config.backupId;
        this._name = config.name;
        this._ontapConfiguration.internalValue = config.ontapConfiguration;
        this._openZfsConfiguration.internalValue = config.openZfsConfiguration;
        this._tags.internalValue = config.tags;
        this._volumeType = config.volumeType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // backup_id - computed: true, optional: true, required: false
    private _backupId?: string; 
    public get backupId() {
        return this.getStringAttribute('backup_id');
    }
    public set backupId(value: string) {
        this._backupId = value;
    }
    public resetBackupId() {
        this._backupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupIdInput() {
        return this._backupId;
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

    // ontap_configuration - computed: true, optional: true, required: false
    private _ontapConfiguration = new CcVolume.OntapConfigurationPropertyOutputReference(this, "ontap_configuration");
    public get ontapConfiguration() {
        return this._ontapConfiguration;
    }
    public putOntapConfiguration(value: CcVolume.OntapConfigurationProperty) {
        this._ontapConfiguration.internalValue = value;
    }
    public resetOntapConfiguration() {
        this._ontapConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ontapConfigurationInput() {
        return this._ontapConfiguration.internalValue;
    }

    // open_zfs_configuration - computed: true, optional: true, required: false
    private _openZfsConfiguration = new CcVolume.OpenZFSConfigurationPropertyOutputReference(this, "open_zfs_configuration");
    public get openZfsConfiguration() {
        return this._openZfsConfiguration;
    }
    public putOpenZfsConfiguration(value: CcVolume.OpenZFSConfigurationProperty) {
        this._openZfsConfiguration.internalValue = value;
    }
    public resetOpenZfsConfiguration() {
        this._openZfsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openZfsConfigurationInput() {
        return this._openZfsConfiguration.internalValue;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVolume.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVolume.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // uuid - computed: true, optional: false, required: false
    public get uuid() {
        return this.getStringAttribute('uuid');
    }

    // volume_id - computed: true, optional: false, required: false
    public get volumeId() {
        return this.getStringAttribute('volume_id');
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string; 
    public get volumeType() {
        return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string) {
        this._volumeType = value;
    }
    public resetVolumeType() {
        this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
        return this._volumeType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            backup_id: cdktn.stringToTerraform(this._backupId),
            name: cdktn.stringToTerraform(this._name),
            ontap_configuration: ccVolumeOntapConfigurationPropertyToTerraform(this._ontapConfiguration.internalValue),
            open_zfs_configuration: ccVolumeOpenZFSConfigurationPropertyToTerraform(this._openZfsConfiguration.internalValue),
            tags: cdktn.listMapper(ccVolumeTagPropertyToTerraform, false)(this._tags.internalValue),
            volume_type: cdktn.stringToTerraform(this._volumeType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            backup_id: {
                value: cdktn.stringToHclTerraform(this._backupId),
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
            ontap_configuration: {
                value: ccVolumeOntapConfigurationPropertyToHclTerraform(this._ontapConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVolume.OntapConfigurationProperty",
            },
            open_zfs_configuration: {
                value: ccVolumeOpenZFSConfigurationPropertyToHclTerraform(this._openZfsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVolume.OpenZFSConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVolumeTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcVolume.TagPropertyList",
            },
            volume_type: {
                value: cdktn.stringToHclTerraform(this._volumeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVolumeAggregateConfigurationPropertyToTerraform(struct?: CcVolume.AggregateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aggregates),
        constituents_per_aggregate: cdktn.numberToTerraform(struct!.constituentsPerAggregate),
    }
}


export function ccVolumeAggregateConfigurationPropertyToHclTerraform(struct?: CcVolume.AggregateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aggregates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        constituents_per_aggregate: {
            value: cdktn.numberToHclTerraform(struct!.constituentsPerAggregate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeAutocommitPeriodPropertyToTerraform(struct?: CcVolume.AutocommitPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccVolumeAutocommitPeriodPropertyToHclTerraform(struct?: CcVolume.AutocommitPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeRetentionPeriodPropertyToTerraform(struct?: CcVolume.RetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccVolumeRetentionPeriodPropertyToHclTerraform(struct?: CcVolume.RetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeMaximumRetentionPropertyToTerraform(struct?: CcVolume.MaximumRetentionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccVolumeMaximumRetentionPropertyToHclTerraform(struct?: CcVolume.MaximumRetentionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeMinimumRetentionPropertyToTerraform(struct?: CcVolume.MinimumRetentionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccVolumeMinimumRetentionPropertyToHclTerraform(struct?: CcVolume.MinimumRetentionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeSnaplockRetentionPeriodPropertyToTerraform(struct?: CcVolume.SnaplockRetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_retention: ccVolumeRetentionPeriodPropertyToTerraform(struct!.defaultRetention),
        maximum_retention: ccVolumeMaximumRetentionPropertyToTerraform(struct!.maximumRetention),
        minimum_retention: ccVolumeMinimumRetentionPropertyToTerraform(struct!.minimumRetention),
    }
}


export function ccVolumeSnaplockRetentionPeriodPropertyToHclTerraform(struct?: CcVolume.SnaplockRetentionPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_retention: {
            value: ccVolumeRetentionPeriodPropertyToHclTerraform(struct!.defaultRetention),
            isBlock: true,
            type: "struct",
            storageClassType: "RetentionPeriodProperty",
        },
        maximum_retention: {
            value: ccVolumeMaximumRetentionPropertyToHclTerraform(struct!.maximumRetention),
            isBlock: true,
            type: "struct",
            storageClassType: "MaximumRetentionProperty",
        },
        minimum_retention: {
            value: ccVolumeMinimumRetentionPropertyToHclTerraform(struct!.minimumRetention),
            isBlock: true,
            type: "struct",
            storageClassType: "MinimumRetentionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeSnaplockConfigurationPropertyToTerraform(struct?: CcVolume.SnaplockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audit_log_volume: cdktn.stringToTerraform(struct!.auditLogVolume),
        autocommit_period: ccVolumeAutocommitPeriodPropertyToTerraform(struct!.autocommitPeriod),
        privileged_delete: cdktn.stringToTerraform(struct!.privilegedDelete),
        retention_period: ccVolumeSnaplockRetentionPeriodPropertyToTerraform(struct!.retentionPeriod),
        snaplock_type: cdktn.stringToTerraform(struct!.snaplockType),
        volume_append_mode_enabled: cdktn.stringToTerraform(struct!.volumeAppendModeEnabled),
    }
}


export function ccVolumeSnaplockConfigurationPropertyToHclTerraform(struct?: CcVolume.SnaplockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audit_log_volume: {
            value: cdktn.stringToHclTerraform(struct!.auditLogVolume),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        autocommit_period: {
            value: ccVolumeAutocommitPeriodPropertyToHclTerraform(struct!.autocommitPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "AutocommitPeriodProperty",
        },
        privileged_delete: {
            value: cdktn.stringToHclTerraform(struct!.privilegedDelete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retention_period: {
            value: ccVolumeSnaplockRetentionPeriodPropertyToHclTerraform(struct!.retentionPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "SnaplockRetentionPeriodProperty",
        },
        snaplock_type: {
            value: cdktn.stringToHclTerraform(struct!.snaplockType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_append_mode_enabled: {
            value: cdktn.stringToHclTerraform(struct!.volumeAppendModeEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeTieringPolicyPropertyToTerraform(struct?: CcVolume.TieringPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cooling_period: cdktn.numberToTerraform(struct!.coolingPeriod),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccVolumeTieringPolicyPropertyToHclTerraform(struct?: CcVolume.TieringPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cooling_period: {
            value: cdktn.numberToHclTerraform(struct!.coolingPeriod),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeOntapConfigurationPropertyToTerraform(struct?: CcVolume.OntapConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregate_configuration: ccVolumeAggregateConfigurationPropertyToTerraform(struct!.aggregateConfiguration),
        copy_tags_to_backups: cdktn.stringToTerraform(struct!.copyTagsToBackups),
        junction_path: cdktn.stringToTerraform(struct!.junctionPath),
        ontap_volume_type: cdktn.stringToTerraform(struct!.ontapVolumeType),
        security_style: cdktn.stringToTerraform(struct!.securityStyle),
        size_in_bytes: cdktn.stringToTerraform(struct!.sizeInBytes),
        size_in_megabytes: cdktn.stringToTerraform(struct!.sizeInMegabytes),
        snaplock_configuration: ccVolumeSnaplockConfigurationPropertyToTerraform(struct!.snaplockConfiguration),
        snapshot_policy: cdktn.stringToTerraform(struct!.snapshotPolicy),
        storage_efficiency_enabled: cdktn.stringToTerraform(struct!.storageEfficiencyEnabled),
        storage_virtual_machine_id: cdktn.stringToTerraform(struct!.storageVirtualMachineId),
        tiering_policy: ccVolumeTieringPolicyPropertyToTerraform(struct!.tieringPolicy),
        volume_style: cdktn.stringToTerraform(struct!.volumeStyle),
    }
}


export function ccVolumeOntapConfigurationPropertyToHclTerraform(struct?: CcVolume.OntapConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregate_configuration: {
            value: ccVolumeAggregateConfigurationPropertyToHclTerraform(struct!.aggregateConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AggregateConfigurationProperty",
        },
        copy_tags_to_backups: {
            value: cdktn.stringToHclTerraform(struct!.copyTagsToBackups),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        junction_path: {
            value: cdktn.stringToHclTerraform(struct!.junctionPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ontap_volume_type: {
            value: cdktn.stringToHclTerraform(struct!.ontapVolumeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_style: {
            value: cdktn.stringToHclTerraform(struct!.securityStyle),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size_in_bytes: {
            value: cdktn.stringToHclTerraform(struct!.sizeInBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size_in_megabytes: {
            value: cdktn.stringToHclTerraform(struct!.sizeInMegabytes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snaplock_configuration: {
            value: ccVolumeSnaplockConfigurationPropertyToHclTerraform(struct!.snaplockConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SnaplockConfigurationProperty",
        },
        snapshot_policy: {
            value: cdktn.stringToHclTerraform(struct!.snapshotPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_efficiency_enabled: {
            value: cdktn.stringToHclTerraform(struct!.storageEfficiencyEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_virtual_machine_id: {
            value: cdktn.stringToHclTerraform(struct!.storageVirtualMachineId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tiering_policy: {
            value: ccVolumeTieringPolicyPropertyToHclTerraform(struct!.tieringPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "TieringPolicyProperty",
        },
        volume_style: {
            value: cdktn.stringToHclTerraform(struct!.volumeStyle),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeClientConfigurationsPropertyToTerraform(struct?: CcVolume.ClientConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clients: cdktn.stringToTerraform(struct!.clients),
        options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.options),
    }
}


export function ccVolumeClientConfigurationsPropertyToHclTerraform(struct?: CcVolume.ClientConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clients: {
            value: cdktn.stringToHclTerraform(struct!.clients),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        options: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.options),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeNfsExportsPropertyToTerraform(struct?: CcVolume.NfsExportsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_configurations: cdktn.listMapper(ccVolumeClientConfigurationsPropertyToTerraform, false)(struct!.clientConfigurations),
    }
}


export function ccVolumeNfsExportsPropertyToHclTerraform(struct?: CcVolume.NfsExportsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_configurations: {
            value: cdktn.listMapperHcl(ccVolumeClientConfigurationsPropertyToHclTerraform, false)(struct!.clientConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ClientConfigurationsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeOriginSnapshotPropertyToTerraform(struct?: CcVolume.OriginSnapshotProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_strategy: cdktn.stringToTerraform(struct!.copyStrategy),
        snapshot_arn: cdktn.stringToTerraform(struct!.snapshotArn),
    }
}


export function ccVolumeOriginSnapshotPropertyToHclTerraform(struct?: CcVolume.OriginSnapshotProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_strategy: {
            value: cdktn.stringToHclTerraform(struct!.copyStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snapshot_arn: {
            value: cdktn.stringToHclTerraform(struct!.snapshotArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeUserAndGroupQuotasPropertyToTerraform(struct?: CcVolume.UserAndGroupQuotasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.numberToTerraform(struct!.id),
        storage_capacity_quota_gi_b: cdktn.numberToTerraform(struct!.storageCapacityQuotaGiB),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccVolumeUserAndGroupQuotasPropertyToHclTerraform(struct?: CcVolume.UserAndGroupQuotasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.numberToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_capacity_quota_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.storageCapacityQuotaGiB),
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


export function ccVolumeOpenZFSConfigurationPropertyToTerraform(struct?: CcVolume.OpenZFSConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copy_tags_to_snapshots: cdktn.booleanToTerraform(struct!.copyTagsToSnapshots),
        data_compression_type: cdktn.stringToTerraform(struct!.dataCompressionType),
        nfs_exports: cdktn.listMapper(ccVolumeNfsExportsPropertyToTerraform, false)(struct!.nfsExports),
        options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.options),
        origin_snapshot: ccVolumeOriginSnapshotPropertyToTerraform(struct!.originSnapshot),
        parent_volume_id: cdktn.stringToTerraform(struct!.parentVolumeId),
        read_only: cdktn.booleanToTerraform(struct!.readOnly),
        record_size_ki_b: cdktn.numberToTerraform(struct!.recordSizeKiB),
        storage_capacity_quota_gi_b: cdktn.numberToTerraform(struct!.storageCapacityQuotaGiB),
        storage_capacity_reservation_gi_b: cdktn.numberToTerraform(struct!.storageCapacityReservationGiB),
        user_and_group_quotas: cdktn.listMapper(ccVolumeUserAndGroupQuotasPropertyToTerraform, false)(struct!.userAndGroupQuotas),
    }
}


export function ccVolumeOpenZFSConfigurationPropertyToHclTerraform(struct?: CcVolume.OpenZFSConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copy_tags_to_snapshots: {
            value: cdktn.booleanToHclTerraform(struct!.copyTagsToSnapshots),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        data_compression_type: {
            value: cdktn.stringToHclTerraform(struct!.dataCompressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nfs_exports: {
            value: cdktn.listMapperHcl(ccVolumeNfsExportsPropertyToHclTerraform, false)(struct!.nfsExports),
            isBlock: true,
            type: "list",
            storageClassType: "NfsExportsPropertyList",
        },
        options: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.options),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        origin_snapshot: {
            value: ccVolumeOriginSnapshotPropertyToHclTerraform(struct!.originSnapshot),
            isBlock: true,
            type: "struct",
            storageClassType: "OriginSnapshotProperty",
        },
        parent_volume_id: {
            value: cdktn.stringToHclTerraform(struct!.parentVolumeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_only: {
            value: cdktn.booleanToHclTerraform(struct!.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        record_size_ki_b: {
            value: cdktn.numberToHclTerraform(struct!.recordSizeKiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_capacity_quota_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.storageCapacityQuotaGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_capacity_reservation_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.storageCapacityReservationGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        user_and_group_quotas: {
            value: cdktn.listMapperHcl(ccVolumeUserAndGroupQuotasPropertyToHclTerraform, false)(struct!.userAndGroupQuotas),
            isBlock: true,
            type: "list",
            storageClassType: "UserAndGroupQuotasPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVolumeTagPropertyToTerraform(struct?: CcVolume.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVolumeTagPropertyToHclTerraform(struct?: CcVolume.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVolume {
export interface AggregateConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#aggregates CcVolume#aggregates}
    */
    readonly aggregates?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#constituents_per_aggregate CcVolume#constituents_per_aggregate}
    */
    readonly constituentsPerAggregate?: number;
}
export class AggregateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AggregateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregates !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregates = this._aggregates;
        }
        if (this._constituentsPerAggregate !== undefined) {
            hasAnyValues = true;
            internalValueResult.constituentsPerAggregate = this._constituentsPerAggregate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AggregateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregates = undefined;
            this._constituentsPerAggregate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregates = value.aggregates;
            this._constituentsPerAggregate = value.constituentsPerAggregate;
        }
    }

    // aggregates - computed: true, optional: true, required: false
    private _aggregates?: string[]; 
    public get aggregates() {
        return this.getListAttribute('aggregates');
    }
    public set aggregates(value: string[]) {
        this._aggregates = value;
    }
    public resetAggregates() {
        this._aggregates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregatesInput() {
        return this._aggregates;
    }

    // constituents_per_aggregate - computed: true, optional: true, required: false
    private _constituentsPerAggregate?: number; 
    public get constituentsPerAggregate() {
        return this.getNumberAttribute('constituents_per_aggregate');
    }
    public set constituentsPerAggregate(value: number) {
        this._constituentsPerAggregate = value;
    }
    public resetConstituentsPerAggregate() {
        this._constituentsPerAggregate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constituentsPerAggregateInput() {
        return this._constituentsPerAggregate;
    }
}
export interface AutocommitPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#type CcVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#value CcVolume#value}
    */
    readonly value?: number;
}
export class AutocommitPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutocommitPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutocommitPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface RetentionPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#type CcVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#value CcVolume#value}
    */
    readonly value?: number;
}
export class RetentionPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RetentionPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetentionPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface MaximumRetentionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#type CcVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#value CcVolume#value}
    */
    readonly value?: number;
}
export class MaximumRetentionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaximumRetentionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaximumRetentionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface MinimumRetentionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#type CcVolume#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#value CcVolume#value}
    */
    readonly value?: number;
}
export class MinimumRetentionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MinimumRetentionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MinimumRetentionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface SnaplockRetentionPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#default_retention CcVolume#default_retention}
    */
    readonly defaultRetention?: RetentionPeriodProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#maximum_retention CcVolume#maximum_retention}
    */
    readonly maximumRetention?: MaximumRetentionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#minimum_retention CcVolume#minimum_retention}
    */
    readonly minimumRetention?: MinimumRetentionProperty;
}
export class SnaplockRetentionPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnaplockRetentionPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultRetention?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
        }
        if (this._maximumRetention?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumRetention = this._maximumRetention?.internalValue;
        }
        if (this._minimumRetention?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumRetention = this._minimumRetention?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnaplockRetentionPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultRetention.internalValue = undefined;
            this._maximumRetention.internalValue = undefined;
            this._minimumRetention.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultRetention.internalValue = value.defaultRetention;
            this._maximumRetention.internalValue = value.maximumRetention;
            this._minimumRetention.internalValue = value.minimumRetention;
        }
    }

    // default_retention - computed: true, optional: true, required: false
    private _defaultRetention = new RetentionPeriodPropertyOutputReference(this, "default_retention");
    public get defaultRetention() {
        return this._defaultRetention;
    }
    public putDefaultRetention(value: RetentionPeriodProperty) {
        this._defaultRetention.internalValue = value;
    }
    public resetDefaultRetention() {
        this._defaultRetention.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRetentionInput() {
        return this._defaultRetention.internalValue;
    }

    // maximum_retention - computed: true, optional: true, required: false
    private _maximumRetention = new MaximumRetentionPropertyOutputReference(this, "maximum_retention");
    public get maximumRetention() {
        return this._maximumRetention;
    }
    public putMaximumRetention(value: MaximumRetentionProperty) {
        this._maximumRetention.internalValue = value;
    }
    public resetMaximumRetention() {
        this._maximumRetention.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetentionInput() {
        return this._maximumRetention.internalValue;
    }

    // minimum_retention - computed: true, optional: true, required: false
    private _minimumRetention = new MinimumRetentionPropertyOutputReference(this, "minimum_retention");
    public get minimumRetention() {
        return this._minimumRetention;
    }
    public putMinimumRetention(value: MinimumRetentionProperty) {
        this._minimumRetention.internalValue = value;
    }
    public resetMinimumRetention() {
        this._minimumRetention.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumRetentionInput() {
        return this._minimumRetention.internalValue;
    }
}
export interface SnaplockConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#audit_log_volume CcVolume#audit_log_volume}
    */
    readonly auditLogVolume?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#autocommit_period CcVolume#autocommit_period}
    */
    readonly autocommitPeriod?: AutocommitPeriodProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#privileged_delete CcVolume#privileged_delete}
    */
    readonly privilegedDelete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#retention_period CcVolume#retention_period}
    */
    readonly retentionPeriod?: SnaplockRetentionPeriodProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#snaplock_type CcVolume#snaplock_type}
    */
    readonly snaplockType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#volume_append_mode_enabled CcVolume#volume_append_mode_enabled}
    */
    readonly volumeAppendModeEnabled?: string;
}
export class SnaplockConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnaplockConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._auditLogVolume !== undefined) {
            hasAnyValues = true;
            internalValueResult.auditLogVolume = this._auditLogVolume;
        }
        if (this._autocommitPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autocommitPeriod = this._autocommitPeriod?.internalValue;
        }
        if (this._privilegedDelete !== undefined) {
            hasAnyValues = true;
            internalValueResult.privilegedDelete = this._privilegedDelete;
        }
        if (this._retentionPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionPeriod = this._retentionPeriod?.internalValue;
        }
        if (this._snaplockType !== undefined) {
            hasAnyValues = true;
            internalValueResult.snaplockType = this._snaplockType;
        }
        if (this._volumeAppendModeEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeAppendModeEnabled = this._volumeAppendModeEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnaplockConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auditLogVolume = undefined;
            this._autocommitPeriod.internalValue = undefined;
            this._privilegedDelete = undefined;
            this._retentionPeriod.internalValue = undefined;
            this._snaplockType = undefined;
            this._volumeAppendModeEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auditLogVolume = value.auditLogVolume;
            this._autocommitPeriod.internalValue = value.autocommitPeriod;
            this._privilegedDelete = value.privilegedDelete;
            this._retentionPeriod.internalValue = value.retentionPeriod;
            this._snaplockType = value.snaplockType;
            this._volumeAppendModeEnabled = value.volumeAppendModeEnabled;
        }
    }

    // audit_log_volume - computed: true, optional: true, required: false
    private _auditLogVolume?: string; 
    public get auditLogVolume() {
        return this.getStringAttribute('audit_log_volume');
    }
    public set auditLogVolume(value: string) {
        this._auditLogVolume = value;
    }
    public resetAuditLogVolume() {
        this._auditLogVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditLogVolumeInput() {
        return this._auditLogVolume;
    }

    // autocommit_period - computed: true, optional: true, required: false
    private _autocommitPeriod = new AutocommitPeriodPropertyOutputReference(this, "autocommit_period");
    public get autocommitPeriod() {
        return this._autocommitPeriod;
    }
    public putAutocommitPeriod(value: AutocommitPeriodProperty) {
        this._autocommitPeriod.internalValue = value;
    }
    public resetAutocommitPeriod() {
        this._autocommitPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autocommitPeriodInput() {
        return this._autocommitPeriod.internalValue;
    }

    // privileged_delete - computed: true, optional: true, required: false
    private _privilegedDelete?: string; 
    public get privilegedDelete() {
        return this.getStringAttribute('privileged_delete');
    }
    public set privilegedDelete(value: string) {
        this._privilegedDelete = value;
    }
    public resetPrivilegedDelete() {
        this._privilegedDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privilegedDeleteInput() {
        return this._privilegedDelete;
    }

    // retention_period - computed: true, optional: true, required: false
    private _retentionPeriod = new SnaplockRetentionPeriodPropertyOutputReference(this, "retention_period");
    public get retentionPeriod() {
        return this._retentionPeriod;
    }
    public putRetentionPeriod(value: SnaplockRetentionPeriodProperty) {
        this._retentionPeriod.internalValue = value;
    }
    public resetRetentionPeriod() {
        this._retentionPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
        return this._retentionPeriod.internalValue;
    }

    // snaplock_type - computed: true, optional: true, required: false
    private _snaplockType?: string; 
    public get snaplockType() {
        return this.getStringAttribute('snaplock_type');
    }
    public set snaplockType(value: string) {
        this._snaplockType = value;
    }
    public resetSnaplockType() {
        this._snaplockType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snaplockTypeInput() {
        return this._snaplockType;
    }

    // volume_append_mode_enabled - computed: true, optional: true, required: false
    private _volumeAppendModeEnabled?: string; 
    public get volumeAppendModeEnabled() {
        return this.getStringAttribute('volume_append_mode_enabled');
    }
    public set volumeAppendModeEnabled(value: string) {
        this._volumeAppendModeEnabled = value;
    }
    public resetVolumeAppendModeEnabled() {
        this._volumeAppendModeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeAppendModeEnabledInput() {
        return this._volumeAppendModeEnabled;
    }
}
export interface TieringPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#cooling_period CcVolume#cooling_period}
    */
    readonly coolingPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#name CcVolume#name}
    */
    readonly name?: string;
}
export class TieringPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TieringPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._coolingPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.coolingPeriod = this._coolingPeriod;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TieringPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._coolingPeriod = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._coolingPeriod = value.coolingPeriod;
            this._name = value.name;
        }
    }

    // cooling_period - computed: true, optional: true, required: false
    private _coolingPeriod?: number; 
    public get coolingPeriod() {
        return this.getNumberAttribute('cooling_period');
    }
    public set coolingPeriod(value: number) {
        this._coolingPeriod = value;
    }
    public resetCoolingPeriod() {
        this._coolingPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coolingPeriodInput() {
        return this._coolingPeriod;
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
export interface OntapConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#aggregate_configuration CcVolume#aggregate_configuration}
    */
    readonly aggregateConfiguration?: AggregateConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#copy_tags_to_backups CcVolume#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#junction_path CcVolume#junction_path}
    */
    readonly junctionPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#ontap_volume_type CcVolume#ontap_volume_type}
    */
    readonly ontapVolumeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#security_style CcVolume#security_style}
    */
    readonly securityStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#size_in_bytes CcVolume#size_in_bytes}
    */
    readonly sizeInBytes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#size_in_megabytes CcVolume#size_in_megabytes}
    */
    readonly sizeInMegabytes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#snaplock_configuration CcVolume#snaplock_configuration}
    */
    readonly snaplockConfiguration?: SnaplockConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#snapshot_policy CcVolume#snapshot_policy}
    */
    readonly snapshotPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#storage_efficiency_enabled CcVolume#storage_efficiency_enabled}
    */
    readonly storageEfficiencyEnabled?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#storage_virtual_machine_id CcVolume#storage_virtual_machine_id}
    */
    readonly storageVirtualMachineId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#tiering_policy CcVolume#tiering_policy}
    */
    readonly tieringPolicy?: TieringPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#volume_style CcVolume#volume_style}
    */
    readonly volumeStyle?: string;
}
export class OntapConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OntapConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregateConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregateConfiguration = this._aggregateConfiguration?.internalValue;
        }
        if (this._copyTagsToBackups !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyTagsToBackups = this._copyTagsToBackups;
        }
        if (this._junctionPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.junctionPath = this._junctionPath;
        }
        if (this._ontapVolumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ontapVolumeType = this._ontapVolumeType;
        }
        if (this._securityStyle !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityStyle = this._securityStyle;
        }
        if (this._sizeInBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInBytes = this._sizeInBytes;
        }
        if (this._sizeInMegabytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInMegabytes = this._sizeInMegabytes;
        }
        if (this._snaplockConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snaplockConfiguration = this._snaplockConfiguration?.internalValue;
        }
        if (this._snapshotPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotPolicy = this._snapshotPolicy;
        }
        if (this._storageEfficiencyEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageEfficiencyEnabled = this._storageEfficiencyEnabled;
        }
        if (this._storageVirtualMachineId !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageVirtualMachineId = this._storageVirtualMachineId;
        }
        if (this._tieringPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tieringPolicy = this._tieringPolicy?.internalValue;
        }
        if (this._volumeStyle !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeStyle = this._volumeStyle;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OntapConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregateConfiguration.internalValue = undefined;
            this._copyTagsToBackups = undefined;
            this._junctionPath = undefined;
            this._ontapVolumeType = undefined;
            this._securityStyle = undefined;
            this._sizeInBytes = undefined;
            this._sizeInMegabytes = undefined;
            this._snaplockConfiguration.internalValue = undefined;
            this._snapshotPolicy = undefined;
            this._storageEfficiencyEnabled = undefined;
            this._storageVirtualMachineId = undefined;
            this._tieringPolicy.internalValue = undefined;
            this._volumeStyle = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregateConfiguration.internalValue = value.aggregateConfiguration;
            this._copyTagsToBackups = value.copyTagsToBackups;
            this._junctionPath = value.junctionPath;
            this._ontapVolumeType = value.ontapVolumeType;
            this._securityStyle = value.securityStyle;
            this._sizeInBytes = value.sizeInBytes;
            this._sizeInMegabytes = value.sizeInMegabytes;
            this._snaplockConfiguration.internalValue = value.snaplockConfiguration;
            this._snapshotPolicy = value.snapshotPolicy;
            this._storageEfficiencyEnabled = value.storageEfficiencyEnabled;
            this._storageVirtualMachineId = value.storageVirtualMachineId;
            this._tieringPolicy.internalValue = value.tieringPolicy;
            this._volumeStyle = value.volumeStyle;
        }
    }

    // aggregate_configuration - computed: true, optional: true, required: false
    private _aggregateConfiguration = new AggregateConfigurationPropertyOutputReference(this, "aggregate_configuration");
    public get aggregateConfiguration() {
        return this._aggregateConfiguration;
    }
    public putAggregateConfiguration(value: AggregateConfigurationProperty) {
        this._aggregateConfiguration.internalValue = value;
    }
    public resetAggregateConfiguration() {
        this._aggregateConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregateConfigurationInput() {
        return this._aggregateConfiguration.internalValue;
    }

    // copy_tags_to_backups - computed: true, optional: true, required: false
    private _copyTagsToBackups?: string; 
    public get copyTagsToBackups() {
        return this.getStringAttribute('copy_tags_to_backups');
    }
    public set copyTagsToBackups(value: string) {
        this._copyTagsToBackups = value;
    }
    public resetCopyTagsToBackups() {
        this._copyTagsToBackups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToBackupsInput() {
        return this._copyTagsToBackups;
    }

    // junction_path - computed: true, optional: true, required: false
    private _junctionPath?: string; 
    public get junctionPath() {
        return this.getStringAttribute('junction_path');
    }
    public set junctionPath(value: string) {
        this._junctionPath = value;
    }
    public resetJunctionPath() {
        this._junctionPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get junctionPathInput() {
        return this._junctionPath;
    }

    // ontap_volume_type - computed: true, optional: true, required: false
    private _ontapVolumeType?: string; 
    public get ontapVolumeType() {
        return this.getStringAttribute('ontap_volume_type');
    }
    public set ontapVolumeType(value: string) {
        this._ontapVolumeType = value;
    }
    public resetOntapVolumeType() {
        this._ontapVolumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ontapVolumeTypeInput() {
        return this._ontapVolumeType;
    }

    // security_style - computed: true, optional: true, required: false
    private _securityStyle?: string; 
    public get securityStyle() {
        return this.getStringAttribute('security_style');
    }
    public set securityStyle(value: string) {
        this._securityStyle = value;
    }
    public resetSecurityStyle() {
        this._securityStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityStyleInput() {
        return this._securityStyle;
    }

    // size_in_bytes - computed: true, optional: true, required: false
    private _sizeInBytes?: string; 
    public get sizeInBytes() {
        return this.getStringAttribute('size_in_bytes');
    }
    public set sizeInBytes(value: string) {
        this._sizeInBytes = value;
    }
    public resetSizeInBytes() {
        this._sizeInBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInBytesInput() {
        return this._sizeInBytes;
    }

    // size_in_megabytes - computed: true, optional: true, required: false
    private _sizeInMegabytes?: string; 
    public get sizeInMegabytes() {
        return this.getStringAttribute('size_in_megabytes');
    }
    public set sizeInMegabytes(value: string) {
        this._sizeInMegabytes = value;
    }
    public resetSizeInMegabytes() {
        this._sizeInMegabytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInMegabytesInput() {
        return this._sizeInMegabytes;
    }

    // snaplock_configuration - computed: true, optional: true, required: false
    private _snaplockConfiguration = new SnaplockConfigurationPropertyOutputReference(this, "snaplock_configuration");
    public get snaplockConfiguration() {
        return this._snaplockConfiguration;
    }
    public putSnaplockConfiguration(value: SnaplockConfigurationProperty) {
        this._snaplockConfiguration.internalValue = value;
    }
    public resetSnaplockConfiguration() {
        this._snaplockConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snaplockConfigurationInput() {
        return this._snaplockConfiguration.internalValue;
    }

    // snapshot_policy - computed: true, optional: true, required: false
    private _snapshotPolicy?: string; 
    public get snapshotPolicy() {
        return this.getStringAttribute('snapshot_policy');
    }
    public set snapshotPolicy(value: string) {
        this._snapshotPolicy = value;
    }
    public resetSnapshotPolicy() {
        this._snapshotPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotPolicyInput() {
        return this._snapshotPolicy;
    }

    // storage_efficiency_enabled - computed: true, optional: true, required: false
    private _storageEfficiencyEnabled?: string; 
    public get storageEfficiencyEnabled() {
        return this.getStringAttribute('storage_efficiency_enabled');
    }
    public set storageEfficiencyEnabled(value: string) {
        this._storageEfficiencyEnabled = value;
    }
    public resetStorageEfficiencyEnabled() {
        this._storageEfficiencyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageEfficiencyEnabledInput() {
        return this._storageEfficiencyEnabled;
    }

    // storage_virtual_machine_id - computed: true, optional: true, required: false
    private _storageVirtualMachineId?: string; 
    public get storageVirtualMachineId() {
        return this.getStringAttribute('storage_virtual_machine_id');
    }
    public set storageVirtualMachineId(value: string) {
        this._storageVirtualMachineId = value;
    }
    public resetStorageVirtualMachineId() {
        this._storageVirtualMachineId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageVirtualMachineIdInput() {
        return this._storageVirtualMachineId;
    }

    // tiering_policy - computed: true, optional: true, required: false
    private _tieringPolicy = new TieringPolicyPropertyOutputReference(this, "tiering_policy");
    public get tieringPolicy() {
        return this._tieringPolicy;
    }
    public putTieringPolicy(value: TieringPolicyProperty) {
        this._tieringPolicy.internalValue = value;
    }
    public resetTieringPolicy() {
        this._tieringPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tieringPolicyInput() {
        return this._tieringPolicy.internalValue;
    }

    // volume_style - computed: true, optional: true, required: false
    private _volumeStyle?: string; 
    public get volumeStyle() {
        return this.getStringAttribute('volume_style');
    }
    public set volumeStyle(value: string) {
        this._volumeStyle = value;
    }
    public resetVolumeStyle() {
        this._volumeStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeStyleInput() {
        return this._volumeStyle;
    }
}
export interface ClientConfigurationsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#clients CcVolume#clients}
    */
    readonly clients?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#options CcVolume#options}
    */
    readonly options?: string[];
}
export class ClientConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClientConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clients !== undefined) {
            hasAnyValues = true;
            internalValueResult.clients = this._clients;
        }
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clients = undefined;
            this._options = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clients = value.clients;
            this._options = value.options;
        }
    }

    // clients - computed: true, optional: true, required: false
    private _clients?: string; 
    public get clients() {
        return this.getStringAttribute('clients');
    }
    public set clients(value: string) {
        this._clients = value;
    }
    public resetClients() {
        this._clients = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientsInput() {
        return this._clients;
    }

    // options - computed: true, optional: true, required: false
    private _options?: string[]; 
    public get options() {
        return this.getListAttribute('options');
    }
    public set options(value: string[]) {
        this._options = value;
    }
    public resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options;
    }
}

export class ClientConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ClientConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ClientConfigurationsPropertyOutputReference {
        return new ClientConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NfsExportsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#client_configurations CcVolume#client_configurations}
    */
    readonly clientConfigurations?: ClientConfigurationsProperty[] | cdktn.IResolvable;
}
export class NfsExportsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NfsExportsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientConfigurations = this._clientConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NfsExportsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientConfigurations.internalValue = value.clientConfigurations;
        }
    }

    // client_configurations - computed: true, optional: true, required: false
    private _clientConfigurations = new ClientConfigurationsPropertyList(this, "client_configurations", false);
    public get clientConfigurations() {
        return this._clientConfigurations;
    }
    public putClientConfigurations(value: ClientConfigurationsProperty[] | cdktn.IResolvable) {
        this._clientConfigurations.internalValue = value;
    }
    public resetClientConfigurations() {
        this._clientConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientConfigurationsInput() {
        return this._clientConfigurations.internalValue;
    }
}

export class NfsExportsPropertyList extends cdktn.ComplexList {
    public internalValue? : NfsExportsProperty[] | cdktn.IResolvable

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
    public get(index: number): NfsExportsPropertyOutputReference {
        return new NfsExportsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OriginSnapshotProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#copy_strategy CcVolume#copy_strategy}
    */
    readonly copyStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#snapshot_arn CcVolume#snapshot_arn}
    */
    readonly snapshotArn?: string;
}
export class OriginSnapshotPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OriginSnapshotProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyStrategy = this._copyStrategy;
        }
        if (this._snapshotArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotArn = this._snapshotArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OriginSnapshotProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyStrategy = undefined;
            this._snapshotArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyStrategy = value.copyStrategy;
            this._snapshotArn = value.snapshotArn;
        }
    }

    // copy_strategy - computed: true, optional: true, required: false
    private _copyStrategy?: string; 
    public get copyStrategy() {
        return this.getStringAttribute('copy_strategy');
    }
    public set copyStrategy(value: string) {
        this._copyStrategy = value;
    }
    public resetCopyStrategy() {
        this._copyStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyStrategyInput() {
        return this._copyStrategy;
    }

    // snapshot_arn - computed: true, optional: true, required: false
    private _snapshotArn?: string; 
    public get snapshotArn() {
        return this.getStringAttribute('snapshot_arn');
    }
    public set snapshotArn(value: string) {
        this._snapshotArn = value;
    }
    public resetSnapshotArn() {
        this._snapshotArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotArnInput() {
        return this._snapshotArn;
    }
}
export interface UserAndGroupQuotasProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#id CcVolume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b CcVolume#storage_capacity_quota_gi_b}
    */
    readonly storageCapacityQuotaGiB?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#type CcVolume#type}
    */
    readonly type?: string;
}
export class UserAndGroupQuotasPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserAndGroupQuotasProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._storageCapacityQuotaGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageCapacityQuotaGiB = this._storageCapacityQuotaGiB;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserAndGroupQuotasProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._storageCapacityQuotaGiB = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._storageCapacityQuotaGiB = value.storageCapacityQuotaGiB;
            this._type = value.type;
        }
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

    // storage_capacity_quota_gi_b - computed: true, optional: true, required: false
    private _storageCapacityQuotaGiB?: number; 
    public get storageCapacityQuotaGiB() {
        return this.getNumberAttribute('storage_capacity_quota_gi_b');
    }
    public set storageCapacityQuotaGiB(value: number) {
        this._storageCapacityQuotaGiB = value;
    }
    public resetStorageCapacityQuotaGiB() {
        this._storageCapacityQuotaGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityQuotaGiBInput() {
        return this._storageCapacityQuotaGiB;
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

export class UserAndGroupQuotasPropertyList extends cdktn.ComplexList {
    public internalValue? : UserAndGroupQuotasProperty[] | cdktn.IResolvable

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
    public get(index: number): UserAndGroupQuotasPropertyOutputReference {
        return new UserAndGroupQuotasPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OpenZFSConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#copy_tags_to_snapshots CcVolume#copy_tags_to_snapshots}
    */
    readonly copyTagsToSnapshots?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#data_compression_type CcVolume#data_compression_type}
    */
    readonly dataCompressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#nfs_exports CcVolume#nfs_exports}
    */
    readonly nfsExports?: NfsExportsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#options CcVolume#options}
    */
    readonly options?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#origin_snapshot CcVolume#origin_snapshot}
    */
    readonly originSnapshot?: OriginSnapshotProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#parent_volume_id CcVolume#parent_volume_id}
    */
    readonly parentVolumeId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#read_only CcVolume#read_only}
    */
    readonly readOnly?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#record_size_ki_b CcVolume#record_size_ki_b}
    */
    readonly recordSizeKiB?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#storage_capacity_quota_gi_b CcVolume#storage_capacity_quota_gi_b}
    */
    readonly storageCapacityQuotaGiB?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#storage_capacity_reservation_gi_b CcVolume#storage_capacity_reservation_gi_b}
    */
    readonly storageCapacityReservationGiB?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#user_and_group_quotas CcVolume#user_and_group_quotas}
    */
    readonly userAndGroupQuotas?: UserAndGroupQuotasProperty[] | cdktn.IResolvable;
}
export class OpenZFSConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenZFSConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyTagsToSnapshots !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyTagsToSnapshots = this._copyTagsToSnapshots;
        }
        if (this._dataCompressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCompressionType = this._dataCompressionType;
        }
        if (this._nfsExports?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nfsExports = this._nfsExports?.internalValue;
        }
        if (this._options !== undefined) {
            hasAnyValues = true;
            internalValueResult.options = this._options;
        }
        if (this._originSnapshot?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.originSnapshot = this._originSnapshot?.internalValue;
        }
        if (this._parentVolumeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.parentVolumeId = this._parentVolumeId;
        }
        if (this._readOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readOnly = this._readOnly;
        }
        if (this._recordSizeKiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordSizeKiB = this._recordSizeKiB;
        }
        if (this._storageCapacityQuotaGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageCapacityQuotaGiB = this._storageCapacityQuotaGiB;
        }
        if (this._storageCapacityReservationGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageCapacityReservationGiB = this._storageCapacityReservationGiB;
        }
        if (this._userAndGroupQuotas?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userAndGroupQuotas = this._userAndGroupQuotas?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenZFSConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyTagsToSnapshots = undefined;
            this._dataCompressionType = undefined;
            this._nfsExports.internalValue = undefined;
            this._options = undefined;
            this._originSnapshot.internalValue = undefined;
            this._parentVolumeId = undefined;
            this._readOnly = undefined;
            this._recordSizeKiB = undefined;
            this._storageCapacityQuotaGiB = undefined;
            this._storageCapacityReservationGiB = undefined;
            this._userAndGroupQuotas.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyTagsToSnapshots = value.copyTagsToSnapshots;
            this._dataCompressionType = value.dataCompressionType;
            this._nfsExports.internalValue = value.nfsExports;
            this._options = value.options;
            this._originSnapshot.internalValue = value.originSnapshot;
            this._parentVolumeId = value.parentVolumeId;
            this._readOnly = value.readOnly;
            this._recordSizeKiB = value.recordSizeKiB;
            this._storageCapacityQuotaGiB = value.storageCapacityQuotaGiB;
            this._storageCapacityReservationGiB = value.storageCapacityReservationGiB;
            this._userAndGroupQuotas.internalValue = value.userAndGroupQuotas;
        }
    }

    // copy_tags_to_snapshots - computed: true, optional: true, required: false
    private _copyTagsToSnapshots?: boolean | cdktn.IResolvable; 
    public get copyTagsToSnapshots() {
        return this.getBooleanAttribute('copy_tags_to_snapshots');
    }
    public set copyTagsToSnapshots(value: boolean | cdktn.IResolvable) {
        this._copyTagsToSnapshots = value;
    }
    public resetCopyTagsToSnapshots() {
        this._copyTagsToSnapshots = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToSnapshotsInput() {
        return this._copyTagsToSnapshots;
    }

    // data_compression_type - computed: true, optional: true, required: false
    private _dataCompressionType?: string; 
    public get dataCompressionType() {
        return this.getStringAttribute('data_compression_type');
    }
    public set dataCompressionType(value: string) {
        this._dataCompressionType = value;
    }
    public resetDataCompressionType() {
        this._dataCompressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCompressionTypeInput() {
        return this._dataCompressionType;
    }

    // nfs_exports - computed: true, optional: true, required: false
    private _nfsExports = new NfsExportsPropertyList(this, "nfs_exports", false);
    public get nfsExports() {
        return this._nfsExports;
    }
    public putNfsExports(value: NfsExportsProperty[] | cdktn.IResolvable) {
        this._nfsExports.internalValue = value;
    }
    public resetNfsExports() {
        this._nfsExports.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nfsExportsInput() {
        return this._nfsExports.internalValue;
    }

    // options - computed: true, optional: true, required: false
    private _options?: string[]; 
    public get options() {
        return this.getListAttribute('options');
    }
    public set options(value: string[]) {
        this._options = value;
    }
    public resetOptions() {
        this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options;
    }

    // origin_snapshot - computed: true, optional: true, required: false
    private _originSnapshot = new OriginSnapshotPropertyOutputReference(this, "origin_snapshot");
    public get originSnapshot() {
        return this._originSnapshot;
    }
    public putOriginSnapshot(value: OriginSnapshotProperty) {
        this._originSnapshot.internalValue = value;
    }
    public resetOriginSnapshot() {
        this._originSnapshot.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originSnapshotInput() {
        return this._originSnapshot.internalValue;
    }

    // parent_volume_id - computed: true, optional: true, required: false
    private _parentVolumeId?: string; 
    public get parentVolumeId() {
        return this.getStringAttribute('parent_volume_id');
    }
    public set parentVolumeId(value: string) {
        this._parentVolumeId = value;
    }
    public resetParentVolumeId() {
        this._parentVolumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parentVolumeIdInput() {
        return this._parentVolumeId;
    }

    // read_only - computed: true, optional: true, required: false
    private _readOnly?: boolean | cdktn.IResolvable; 
    public get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    public set readOnly(value: boolean | cdktn.IResolvable) {
        this._readOnly = value;
    }
    public resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readOnlyInput() {
        return this._readOnly;
    }

    // record_size_ki_b - computed: true, optional: true, required: false
    private _recordSizeKiB?: number; 
    public get recordSizeKiB() {
        return this.getNumberAttribute('record_size_ki_b');
    }
    public set recordSizeKiB(value: number) {
        this._recordSizeKiB = value;
    }
    public resetRecordSizeKiB() {
        this._recordSizeKiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordSizeKiBInput() {
        return this._recordSizeKiB;
    }

    // storage_capacity_quota_gi_b - computed: true, optional: true, required: false
    private _storageCapacityQuotaGiB?: number; 
    public get storageCapacityQuotaGiB() {
        return this.getNumberAttribute('storage_capacity_quota_gi_b');
    }
    public set storageCapacityQuotaGiB(value: number) {
        this._storageCapacityQuotaGiB = value;
    }
    public resetStorageCapacityQuotaGiB() {
        this._storageCapacityQuotaGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityQuotaGiBInput() {
        return this._storageCapacityQuotaGiB;
    }

    // storage_capacity_reservation_gi_b - computed: true, optional: true, required: false
    private _storageCapacityReservationGiB?: number; 
    public get storageCapacityReservationGiB() {
        return this.getNumberAttribute('storage_capacity_reservation_gi_b');
    }
    public set storageCapacityReservationGiB(value: number) {
        this._storageCapacityReservationGiB = value;
    }
    public resetStorageCapacityReservationGiB() {
        this._storageCapacityReservationGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityReservationGiBInput() {
        return this._storageCapacityReservationGiB;
    }

    // user_and_group_quotas - computed: true, optional: true, required: false
    private _userAndGroupQuotas = new UserAndGroupQuotasPropertyList(this, "user_and_group_quotas", false);
    public get userAndGroupQuotas() {
        return this._userAndGroupQuotas;
    }
    public putUserAndGroupQuotas(value: UserAndGroupQuotasProperty[] | cdktn.IResolvable) {
        this._userAndGroupQuotas.internalValue = value;
    }
    public resetUserAndGroupQuotas() {
        this._userAndGroupQuotas.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAndGroupQuotasInput() {
        return this._userAndGroupQuotas.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#key CcVolume#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/fsx_volume#value CcVolume#value}
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
