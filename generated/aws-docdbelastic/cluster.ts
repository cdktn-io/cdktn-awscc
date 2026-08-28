// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#admin_user_name CcCluster#admin_user_name}
    */
    readonly adminUserName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#admin_user_password CcCluster#admin_user_password}
    */
    readonly adminUserPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#auth_type CcCluster#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#backup_retention_period CcCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#cluster_name CcCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#kms_key_id CcCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#preferred_backup_window CcCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#preferred_maintenance_window CcCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#shard_capacity CcCluster#shard_capacity}
    */
    readonly shardCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#shard_count CcCluster#shard_count}
    */
    readonly shardCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#shard_instance_count CcCluster#shard_instance_count}
    */
    readonly shardInstanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#subnet_ids CcCluster#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#vpc_security_group_ids CcCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster awscc_docdbelastic_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_docdbelastic_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_docdbelastic_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster awscc_docdbelastic_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_docdbelastic_cluster',
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
        this._adminUserName = config.adminUserName;
        this._adminUserPassword = config.adminUserPassword;
        this._authType = config.authType;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._clusterName = config.clusterName;
        this._kmsKeyId = config.kmsKeyId;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._shardCapacity = config.shardCapacity;
        this._shardCount = config.shardCount;
        this._shardInstanceCount = config.shardInstanceCount;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admin_user_name - computed: false, optional: false, required: true
    private _adminUserName?: string; 
    public get adminUserName() {
        return this.getStringAttribute('admin_user_name');
    }
    public set adminUserName(value: string) {
        this._adminUserName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get adminUserNameInput() {
        return this._adminUserName;
    }

    // admin_user_password - computed: true, optional: true, required: false
    private _adminUserPassword?: string; 
    public get adminUserPassword() {
        return this.getStringAttribute('admin_user_password');
    }
    public set adminUserPassword(value: string) {
        this._adminUserPassword = value;
    }
    public resetAdminUserPassword() {
        this._adminUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminUserPasswordInput() {
        return this._adminUserPassword;
    }

    // auth_type - computed: false, optional: false, required: true
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // backup_retention_period - computed: true, optional: true, required: false
    private _backupRetentionPeriod?: number; 
    public get backupRetentionPeriod() {
        return this.getNumberAttribute('backup_retention_period');
    }
    public set backupRetentionPeriod(value: number) {
        this._backupRetentionPeriod = value;
    }
    public resetBackupRetentionPeriod() {
        this._backupRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupRetentionPeriodInput() {
        return this._backupRetentionPeriod;
    }

    // cluster_arn - computed: true, optional: false, required: false
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }

    // cluster_endpoint - computed: true, optional: false, required: false
    public get clusterEndpoint() {
        return this.getStringAttribute('cluster_endpoint');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // preferred_backup_window - computed: true, optional: true, required: false
    private _preferredBackupWindow?: string; 
    public get preferredBackupWindow() {
        return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string) {
        this._preferredBackupWindow = value;
    }
    public resetPreferredBackupWindow() {
        this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredBackupWindowInput() {
        return this._preferredBackupWindow;
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string; 
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string) {
        this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
    }

    // shard_capacity - computed: false, optional: false, required: true
    private _shardCapacity?: number; 
    public get shardCapacity() {
        return this.getNumberAttribute('shard_capacity');
    }
    public set shardCapacity(value: number) {
        this._shardCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get shardCapacityInput() {
        return this._shardCapacity;
    }

    // shard_count - computed: false, optional: false, required: true
    private _shardCount?: number; 
    public get shardCount() {
        return this.getNumberAttribute('shard_count');
    }
    public set shardCount(value: number) {
        this._shardCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get shardCountInput() {
        return this._shardCount;
    }

    // shard_instance_count - computed: true, optional: true, required: false
    private _shardInstanceCount?: number; 
    public get shardInstanceCount() {
        return this.getNumberAttribute('shard_instance_count');
    }
    public set shardInstanceCount(value: number) {
        this._shardInstanceCount = value;
    }
    public resetShardInstanceCount() {
        this._shardInstanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shardInstanceCountInput() {
        return this._shardInstanceCount;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCluster.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCluster.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[]; 
    public get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[]) {
        this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            admin_user_name: cdktn.stringToTerraform(this._adminUserName),
            admin_user_password: cdktn.stringToTerraform(this._adminUserPassword),
            auth_type: cdktn.stringToTerraform(this._authType),
            backup_retention_period: cdktn.numberToTerraform(this._backupRetentionPeriod),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            preferred_backup_window: cdktn.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            shard_capacity: cdktn.numberToTerraform(this._shardCapacity),
            shard_count: cdktn.numberToTerraform(this._shardCount),
            shard_instance_count: cdktn.numberToTerraform(this._shardInstanceCount),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            admin_user_name: {
                value: cdktn.stringToHclTerraform(this._adminUserName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            admin_user_password: {
                value: cdktn.stringToHclTerraform(this._adminUserPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_type: {
                value: cdktn.stringToHclTerraform(this._authType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backup_retention_period: {
                value: cdktn.numberToHclTerraform(this._backupRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_backup_window: {
                value: cdktn.stringToHclTerraform(this._preferredBackupWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_maintenance_window: {
                value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            shard_capacity: {
                value: cdktn.numberToHclTerraform(this._shardCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            shard_count: {
                value: cdktn.numberToHclTerraform(this._shardCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            shard_instance_count: {
                value: cdktn.numberToHclTerraform(this._shardInstanceCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCluster.TagPropertyList",
            },
            vpc_security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterTagPropertyToTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccClusterTagPropertyToHclTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCluster {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/docdbelastic_cluster#value CcCluster#value}
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
