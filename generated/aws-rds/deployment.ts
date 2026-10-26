// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeploymentProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Blue/Green Deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#blue_green_deployment_name CcDeployment#blue_green_deployment_name}
    */
    readonly blueGreenDeploymentName: string;
    /**
    * The ARN of the source production database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#source CcDeployment#source}
    */
    readonly source: string;
    /**
    * The tags assigned to the Blue/Green Deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#tags CcDeployment#tags}
    */
    readonly tags?: CcDeployment.TagsProperty[] | cdktn.IResolvable;
    /**
    * The allocated storage size in GiB for the target DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_allocated_storage CcDeployment#target_allocated_storage}
    */
    readonly targetAllocatedStorage?: number;
    /**
    * The DB cluster parameter group for the target Aurora DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_cluster_parameter_group_name CcDeployment#target_db_cluster_parameter_group_name}
    */
    readonly targetDbClusterParameterGroupName?: string;
    /**
    * The DB instance class for target RDS DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_instance_class CcDeployment#target_db_instance_class}
    */
    readonly targetDbInstanceClass?: string;
    /**
    * The DB parameter group for the target DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_db_parameter_group_name CcDeployment#target_db_parameter_group_name}
    */
    readonly targetDbParameterGroupName?: string;
    /**
    * The DB engine version for the target database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_engine_version CcDeployment#target_engine_version}
    */
    readonly targetEngineVersion?: string;
    /**
    * The Provisioned IOPS value for the target DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_iops CcDeployment#target_iops}
    */
    readonly targetIops?: number;
    /**
    * The storage throughput value for the target DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_throughput CcDeployment#target_storage_throughput}
    */
    readonly targetStorageThroughput?: number;
    /**
    * The storage type for the target DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#target_storage_type CcDeployment#target_storage_type}
    */
    readonly targetStorageType?: string;
    /**
    * Whether to upgrade the storage file system configuration on the target database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#upgrade_target_storage_config CcDeployment#upgrade_target_storage_config}
    */
    readonly upgradeTargetStorageConfig?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment awscc_rds_deployment}
*/
export class CcDeployment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_deployment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeployment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeployment to import
    * @param importFromId The id of the existing CcDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeployment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_deployment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment awscc_rds_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeploymentProps
    */
    public constructor(scope: Construct, id: string, config: CcDeploymentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_deployment',
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
        this._blueGreenDeploymentName = config.blueGreenDeploymentName;
        this._source = config.source;
        this._tags.internalValue = config.tags;
        this._targetAllocatedStorage = config.targetAllocatedStorage;
        this._targetDbClusterParameterGroupName = config.targetDbClusterParameterGroupName;
        this._targetDbInstanceClass = config.targetDbInstanceClass;
        this._targetDbParameterGroupName = config.targetDbParameterGroupName;
        this._targetEngineVersion = config.targetEngineVersion;
        this._targetIops = config.targetIops;
        this._targetStorageThroughput = config.targetStorageThroughput;
        this._targetStorageType = config.targetStorageType;
        this._upgradeTargetStorageConfig = config.upgradeTargetStorageConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // blue_green_deployment_identifier - computed: true, optional: false, required: false
    public get blueGreenDeploymentIdentifier() {
        return this.getStringAttribute('blue_green_deployment_identifier');
    }

    // blue_green_deployment_name - computed: false, optional: false, required: true
    private _blueGreenDeploymentName?: string; 
    public get blueGreenDeploymentName() {
        return this.getStringAttribute('blue_green_deployment_name');
    }
    public set blueGreenDeploymentName(value: string) {
        this._blueGreenDeploymentName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get blueGreenDeploymentNameInput() {
        return this._blueGreenDeploymentName;
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
        return this.getStringAttribute('create_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // switchover_details - computed: true, optional: false, required: false
    private _switchoverDetails = new CcDeployment.SwitchoverDetailsPropertyList(this, "switchover_details", false);
    public get switchoverDetails() {
        return this._switchoverDetails;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDeployment.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDeployment.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target - computed: true, optional: false, required: false
    public get target() {
        return this.getStringAttribute('target');
    }

    // target_allocated_storage - computed: true, optional: true, required: false
    private _targetAllocatedStorage?: number; 
    public get targetAllocatedStorage() {
        return this.getNumberAttribute('target_allocated_storage');
    }
    public set targetAllocatedStorage(value: number) {
        this._targetAllocatedStorage = value;
    }
    public resetTargetAllocatedStorage() {
        this._targetAllocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAllocatedStorageInput() {
        return this._targetAllocatedStorage;
    }

    // target_db_cluster_parameter_group_name - computed: true, optional: true, required: false
    private _targetDbClusterParameterGroupName?: string; 
    public get targetDbClusterParameterGroupName() {
        return this.getStringAttribute('target_db_cluster_parameter_group_name');
    }
    public set targetDbClusterParameterGroupName(value: string) {
        this._targetDbClusterParameterGroupName = value;
    }
    public resetTargetDbClusterParameterGroupName() {
        this._targetDbClusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDbClusterParameterGroupNameInput() {
        return this._targetDbClusterParameterGroupName;
    }

    // target_db_instance_class - computed: true, optional: true, required: false
    private _targetDbInstanceClass?: string; 
    public get targetDbInstanceClass() {
        return this.getStringAttribute('target_db_instance_class');
    }
    public set targetDbInstanceClass(value: string) {
        this._targetDbInstanceClass = value;
    }
    public resetTargetDbInstanceClass() {
        this._targetDbInstanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDbInstanceClassInput() {
        return this._targetDbInstanceClass;
    }

    // target_db_parameter_group_name - computed: true, optional: true, required: false
    private _targetDbParameterGroupName?: string; 
    public get targetDbParameterGroupName() {
        return this.getStringAttribute('target_db_parameter_group_name');
    }
    public set targetDbParameterGroupName(value: string) {
        this._targetDbParameterGroupName = value;
    }
    public resetTargetDbParameterGroupName() {
        this._targetDbParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDbParameterGroupNameInput() {
        return this._targetDbParameterGroupName;
    }

    // target_engine_version - computed: true, optional: true, required: false
    private _targetEngineVersion?: string; 
    public get targetEngineVersion() {
        return this.getStringAttribute('target_engine_version');
    }
    public set targetEngineVersion(value: string) {
        this._targetEngineVersion = value;
    }
    public resetTargetEngineVersion() {
        this._targetEngineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetEngineVersionInput() {
        return this._targetEngineVersion;
    }

    // target_iops - computed: true, optional: true, required: false
    private _targetIops?: number; 
    public get targetIops() {
        return this.getNumberAttribute('target_iops');
    }
    public set targetIops(value: number) {
        this._targetIops = value;
    }
    public resetTargetIops() {
        this._targetIops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIopsInput() {
        return this._targetIops;
    }

    // target_storage_throughput - computed: true, optional: true, required: false
    private _targetStorageThroughput?: number; 
    public get targetStorageThroughput() {
        return this.getNumberAttribute('target_storage_throughput');
    }
    public set targetStorageThroughput(value: number) {
        this._targetStorageThroughput = value;
    }
    public resetTargetStorageThroughput() {
        this._targetStorageThroughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetStorageThroughputInput() {
        return this._targetStorageThroughput;
    }

    // target_storage_type - computed: true, optional: true, required: false
    private _targetStorageType?: string; 
    public get targetStorageType() {
        return this.getStringAttribute('target_storage_type');
    }
    public set targetStorageType(value: string) {
        this._targetStorageType = value;
    }
    public resetTargetStorageType() {
        this._targetStorageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetStorageTypeInput() {
        return this._targetStorageType;
    }

    // tasks - computed: true, optional: false, required: false
    private _tasks = new CcDeployment.TasksPropertyList(this, "tasks", false);
    public get tasks() {
        return this._tasks;
    }

    // upgrade_target_storage_config - computed: true, optional: true, required: false
    private _upgradeTargetStorageConfig?: boolean | cdktn.IResolvable; 
    public get upgradeTargetStorageConfig() {
        return this.getBooleanAttribute('upgrade_target_storage_config');
    }
    public set upgradeTargetStorageConfig(value: boolean | cdktn.IResolvable) {
        this._upgradeTargetStorageConfig = value;
    }
    public resetUpgradeTargetStorageConfig() {
        this._upgradeTargetStorageConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upgradeTargetStorageConfigInput() {
        return this._upgradeTargetStorageConfig;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            blue_green_deployment_name: cdktn.stringToTerraform(this._blueGreenDeploymentName),
            source: cdktn.stringToTerraform(this._source),
            tags: cdktn.listMapper(ccDeploymentTagsPropertyToTerraform, false)(this._tags.internalValue),
            target_allocated_storage: cdktn.numberToTerraform(this._targetAllocatedStorage),
            target_db_cluster_parameter_group_name: cdktn.stringToTerraform(this._targetDbClusterParameterGroupName),
            target_db_instance_class: cdktn.stringToTerraform(this._targetDbInstanceClass),
            target_db_parameter_group_name: cdktn.stringToTerraform(this._targetDbParameterGroupName),
            target_engine_version: cdktn.stringToTerraform(this._targetEngineVersion),
            target_iops: cdktn.numberToTerraform(this._targetIops),
            target_storage_throughput: cdktn.numberToTerraform(this._targetStorageThroughput),
            target_storage_type: cdktn.stringToTerraform(this._targetStorageType),
            upgrade_target_storage_config: cdktn.booleanToTerraform(this._upgradeTargetStorageConfig),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            blue_green_deployment_name: {
                value: cdktn.stringToHclTerraform(this._blueGreenDeploymentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktn.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDeploymentTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDeployment.TagsPropertyList",
            },
            target_allocated_storage: {
                value: cdktn.numberToHclTerraform(this._targetAllocatedStorage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            target_db_cluster_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._targetDbClusterParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_db_instance_class: {
                value: cdktn.stringToHclTerraform(this._targetDbInstanceClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_db_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._targetDbParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_engine_version: {
                value: cdktn.stringToHclTerraform(this._targetEngineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_iops: {
                value: cdktn.numberToHclTerraform(this._targetIops),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            target_storage_throughput: {
                value: cdktn.numberToHclTerraform(this._targetStorageThroughput),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            target_storage_type: {
                value: cdktn.stringToHclTerraform(this._targetStorageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            upgrade_target_storage_config: {
                value: cdktn.booleanToHclTerraform(this._upgradeTargetStorageConfig),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeploymentSwitchoverDetailsPropertyToTerraform(struct?: CcDeployment.SwitchoverDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDeploymentSwitchoverDetailsPropertyToHclTerraform(struct?: CcDeployment.SwitchoverDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDeploymentTagsPropertyToTerraform(struct?: CcDeployment.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentTagsPropertyToHclTerraform(struct?: CcDeployment.TagsProperty | cdktn.IResolvable): any {
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


export function ccDeploymentTasksPropertyToTerraform(struct?: CcDeployment.TasksProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDeploymentTasksPropertyToHclTerraform(struct?: CcDeployment.TasksProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcDeployment {
export interface SwitchoverDetailsProperty {
}
export class SwitchoverDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): SwitchoverDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SwitchoverDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // source_member - computed: true, optional: false, required: false
    public get sourceMember() {
        return this.getStringAttribute('source_member');
    }

    // switchover_detail_status - computed: true, optional: false, required: false
    public get switchoverDetailStatus() {
        return this.getStringAttribute('switchover_detail_status');
    }

    // target_member - computed: true, optional: false, required: false
    public get targetMember() {
        return this.getStringAttribute('target_member');
    }
}

export class SwitchoverDetailsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): SwitchoverDetailsPropertyOutputReference {
        return new SwitchoverDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#key CcDeployment#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/rds_deployment#value CcDeployment#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TasksProperty {
}
export class TasksPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TasksProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TasksProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // task_name - computed: true, optional: false, required: false
    public get taskName() {
        return this.getStringAttribute('task_name');
    }

    // task_status - computed: true, optional: false, required: false
    public get taskStatus() {
        return this.getStringAttribute('task_status');
    }
}

export class TasksPropertyList extends cdktn.ComplexList {

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
    public get(index: number): TasksPropertyOutputReference {
        return new TasksPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
