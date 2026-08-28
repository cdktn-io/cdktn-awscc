// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkgroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#base_capacity CcWorkgroup#base_capacity}
    */
    readonly baseCapacity?: number;
    /**
    * A list of parameters to set for finer control over a database. Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#config_parameters CcWorkgroup#config_parameters}
    */
    readonly configParameters?: CcWorkgroup.ConfigParameterProperty[] | cdktn.IResolvable;
    /**
    * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing CcWorkgroup#enhanced_vpc_routing}
    */
    readonly enhancedVpcRouting?: boolean | cdktn.IResolvable;
    /**
    * The max compute capacity of the workgroup in Redshift Processing Units (RPUs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#max_capacity CcWorkgroup#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The namespace the workgroup is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#namespace_name CcWorkgroup#namespace_name}
    */
    readonly namespaceName?: string;
    /**
    * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#port CcWorkgroup#port}
    */
    readonly port?: number;
    /**
    * A property that represents the price performance target settings for the workgroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#price_performance_target CcWorkgroup#price_performance_target}
    */
    readonly pricePerformanceTarget?: CcWorkgroup.PerformanceTargetProperty;
    /**
    * A value that specifies whether the workgroup can be accessible from a public network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#publicly_accessible CcWorkgroup#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * The identifier of the recovery point to restore the namespace from. When this resource is first created, the namespace is restored from this recovery point. On subsequent updates, a restore occurs only when RecoveryPointId changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#recovery_point_id CcWorkgroup#recovery_point_id}
    */
    readonly recoveryPointId?: string;
    /**
    * A list of security group IDs to associate with the workgroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#security_group_ids CcWorkgroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The Amazon Resource Name (ARN) of the snapshot to restore the namespace from. Specify either SnapshotArn or SnapshotName, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotArn changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#snapshot_arn CcWorkgroup#snapshot_arn}
    */
    readonly snapshotArn?: string;
    /**
    * The name of the snapshot to restore the namespace from. Because snapshot names are unique only within an account, also specify SnapshotOwnerAccount when restoring from a snapshot owned by a different account. Specify either SnapshotName or SnapshotArn, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotName or SnapshotOwnerAccount changes from its previous value. If both values are unchanged or SnapshotName is removed, no restore takes place and existing data is preserved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#snapshot_name CcWorkgroup#snapshot_name}
    */
    readonly snapshotName?: string;
    /**
    * The AWS account ID that owns the snapshot. Required when restoring from a snapshot shared by another account. Used in combination with SnapshotName. On updates, changing this value while SnapshotName is set triggers a restore from the newly referenced snapshot. If the value is unchanged, no restore takes place and existing data is preserved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#snapshot_owner_account CcWorkgroup#snapshot_owner_account}
    */
    readonly snapshotOwnerAccount?: string;
    /**
    * A list of subnet IDs the workgroup is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#subnet_ids CcWorkgroup#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * The map of the key-value pairs used to tag the workgroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#tags CcWorkgroup#tags}
    */
    readonly tags?: CcWorkgroup.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#track_name CcWorkgroup#track_name}
    */
    readonly trackName?: string;
    /**
    * Definition for workgroup resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#workgroup CcWorkgroup#workgroup}
    */
    readonly workgroup?: CcWorkgroup.WorkgroupProperty;
    /**
    * The name of the workgroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#workgroup_name CcWorkgroup#workgroup_name}
    */
    readonly workgroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup}
*/
export class CcWorkgroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshiftserverless_workgroup";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkgroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkgroup to import
    * @param importFromId The id of the existing CcWorkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkgroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshiftserverless_workgroup", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkgroupProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkgroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshiftserverless_workgroup',
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
        this._baseCapacity = config.baseCapacity;
        this._configParameters.internalValue = config.configParameters;
        this._enhancedVpcRouting = config.enhancedVpcRouting;
        this._maxCapacity = config.maxCapacity;
        this._namespaceName = config.namespaceName;
        this._port = config.port;
        this._pricePerformanceTarget.internalValue = config.pricePerformanceTarget;
        this._publiclyAccessible = config.publiclyAccessible;
        this._recoveryPointId = config.recoveryPointId;
        this._securityGroupIds = config.securityGroupIds;
        this._snapshotArn = config.snapshotArn;
        this._snapshotName = config.snapshotName;
        this._snapshotOwnerAccount = config.snapshotOwnerAccount;
        this._subnetIds = config.subnetIds;
        this._tags.internalValue = config.tags;
        this._trackName = config.trackName;
        this._workgroup.internalValue = config.workgroup;
        this._workgroupName = config.workgroupName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // base_capacity - computed: true, optional: true, required: false
    private _baseCapacity?: number; 
    public get baseCapacity() {
        return this.getNumberAttribute('base_capacity');
    }
    public set baseCapacity(value: number) {
        this._baseCapacity = value;
    }
    public resetBaseCapacity() {
        this._baseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseCapacityInput() {
        return this._baseCapacity;
    }

    // config_parameters - computed: true, optional: true, required: false
    private _configParameters = new CcWorkgroup.ConfigParameterPropertyList(this, "config_parameters", true);
    public get configParameters() {
        return this._configParameters;
    }
    public putConfigParameters(value: CcWorkgroup.ConfigParameterProperty[] | cdktn.IResolvable) {
        this._configParameters.internalValue = value;
    }
    public resetConfigParameters() {
        this._configParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configParametersInput() {
        return this._configParameters.internalValue;
    }

    // enhanced_vpc_routing - computed: true, optional: true, required: false
    private _enhancedVpcRouting?: boolean | cdktn.IResolvable; 
    public get enhancedVpcRouting() {
        return this.getBooleanAttribute('enhanced_vpc_routing');
    }
    public set enhancedVpcRouting(value: boolean | cdktn.IResolvable) {
        this._enhancedVpcRouting = value;
    }
    public resetEnhancedVpcRouting() {
        this._enhancedVpcRouting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedVpcRoutingInput() {
        return this._enhancedVpcRouting;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // namespace_name - computed: true, optional: true, required: false
    private _namespaceName?: string; 
    public get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }
    public set namespaceName(value: string) {
        this._namespaceName = value;
    }
    public resetNamespaceName() {
        this._namespaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceNameInput() {
        return this._namespaceName;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // price_performance_target - computed: true, optional: true, required: false
    private _pricePerformanceTarget = new CcWorkgroup.PerformanceTargetPropertyOutputReference(this, "price_performance_target");
    public get pricePerformanceTarget() {
        return this._pricePerformanceTarget;
    }
    public putPricePerformanceTarget(value: CcWorkgroup.PerformanceTargetProperty) {
        this._pricePerformanceTarget.internalValue = value;
    }
    public resetPricePerformanceTarget() {
        this._pricePerformanceTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pricePerformanceTargetInput() {
        return this._pricePerformanceTarget.internalValue;
    }

    // publicly_accessible - computed: true, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktn.IResolvable; 
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
        this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
        return this._publiclyAccessible;
    }

    // recovery_point_id - computed: true, optional: true, required: false
    private _recoveryPointId?: string; 
    public get recoveryPointId() {
        return this.getStringAttribute('recovery_point_id');
    }
    public set recoveryPointId(value: string) {
        this._recoveryPointId = value;
    }
    public resetRecoveryPointId() {
        this._recoveryPointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryPointIdInput() {
        return this._recoveryPointId;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
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

    // snapshot_name - computed: true, optional: true, required: false
    private _snapshotName?: string; 
    public get snapshotName() {
        return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string) {
        this._snapshotName = value;
    }
    public resetSnapshotName() {
        this._snapshotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotNameInput() {
        return this._snapshotName;
    }

    // snapshot_owner_account - computed: true, optional: true, required: false
    private _snapshotOwnerAccount?: string; 
    public get snapshotOwnerAccount() {
        return this.getStringAttribute('snapshot_owner_account');
    }
    public set snapshotOwnerAccount(value: string) {
        this._snapshotOwnerAccount = value;
    }
    public resetSnapshotOwnerAccount() {
        this._snapshotOwnerAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotOwnerAccountInput() {
        return this._snapshotOwnerAccount;
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
    private _tags = new CcWorkgroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkgroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // track_name - computed: true, optional: true, required: false
    private _trackName?: string; 
    public get trackName() {
        return this.getStringAttribute('track_name');
    }
    public set trackName(value: string) {
        this._trackName = value;
    }
    public resetTrackName() {
        this._trackName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackNameInput() {
        return this._trackName;
    }

    // workgroup - computed: true, optional: true, required: false
    private _workgroup = new CcWorkgroup.WorkgroupPropertyOutputReference(this, "workgroup");
    public get workgroup() {
        return this._workgroup;
    }
    public putWorkgroup(value: CcWorkgroup.WorkgroupProperty) {
        this._workgroup.internalValue = value;
    }
    public resetWorkgroup() {
        this._workgroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupInput() {
        return this._workgroup.internalValue;
    }

    // workgroup_name - computed: false, optional: false, required: true
    private _workgroupName?: string; 
    public get workgroupName() {
        return this.getStringAttribute('workgroup_name');
    }
    public set workgroupName(value: string) {
        this._workgroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupNameInput() {
        return this._workgroupName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            base_capacity: cdktn.numberToTerraform(this._baseCapacity),
            config_parameters: cdktn.listMapper(ccWorkgroupConfigParameterPropertyToTerraform, false)(this._configParameters.internalValue),
            enhanced_vpc_routing: cdktn.booleanToTerraform(this._enhancedVpcRouting),
            max_capacity: cdktn.numberToTerraform(this._maxCapacity),
            namespace_name: cdktn.stringToTerraform(this._namespaceName),
            port: cdktn.numberToTerraform(this._port),
            price_performance_target: ccWorkgroupPerformanceTargetPropertyToTerraform(this._pricePerformanceTarget.internalValue),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            recovery_point_id: cdktn.stringToTerraform(this._recoveryPointId),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            snapshot_arn: cdktn.stringToTerraform(this._snapshotArn),
            snapshot_name: cdktn.stringToTerraform(this._snapshotName),
            snapshot_owner_account: cdktn.stringToTerraform(this._snapshotOwnerAccount),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            tags: cdktn.listMapper(ccWorkgroupTagPropertyToTerraform, false)(this._tags.internalValue),
            track_name: cdktn.stringToTerraform(this._trackName),
            workgroup: ccWorkgroupWorkgroupPropertyToTerraform(this._workgroup.internalValue),
            workgroup_name: cdktn.stringToTerraform(this._workgroupName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            base_capacity: {
                value: cdktn.numberToHclTerraform(this._baseCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            config_parameters: {
                value: cdktn.listMapperHcl(ccWorkgroupConfigParameterPropertyToHclTerraform, false)(this._configParameters.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWorkgroup.ConfigParameterPropertyList",
            },
            enhanced_vpc_routing: {
                value: cdktn.booleanToHclTerraform(this._enhancedVpcRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_capacity: {
                value: cdktn.numberToHclTerraform(this._maxCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            namespace_name: {
                value: cdktn.stringToHclTerraform(this._namespaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            price_performance_target: {
                value: ccWorkgroupPerformanceTargetPropertyToHclTerraform(this._pricePerformanceTarget.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkgroup.PerformanceTargetProperty",
            },
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            recovery_point_id: {
                value: cdktn.stringToHclTerraform(this._recoveryPointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            snapshot_arn: {
                value: cdktn.stringToHclTerraform(this._snapshotArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_name: {
                value: cdktn.stringToHclTerraform(this._snapshotName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_owner_account: {
                value: cdktn.stringToHclTerraform(this._snapshotOwnerAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkgroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkgroup.TagPropertyList",
            },
            track_name: {
                value: cdktn.stringToHclTerraform(this._trackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workgroup: {
                value: ccWorkgroupWorkgroupPropertyToHclTerraform(this._workgroup.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkgroup.WorkgroupProperty",
            },
            workgroup_name: {
                value: cdktn.stringToHclTerraform(this._workgroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkgroupConfigParameterPropertyToTerraform(struct?: CcWorkgroup.ConfigParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameter_key: cdktn.stringToTerraform(struct!.parameterKey),
        parameter_value: cdktn.stringToTerraform(struct!.parameterValue),
    }
}


export function ccWorkgroupConfigParameterPropertyToHclTerraform(struct?: CcWorkgroup.ConfigParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameter_key: {
            value: cdktn.stringToHclTerraform(struct!.parameterKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter_value: {
            value: cdktn.stringToHclTerraform(struct!.parameterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkgroupPerformanceTargetPropertyToTerraform(struct?: CcWorkgroup.PerformanceTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        level: cdktn.numberToTerraform(struct!.level),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccWorkgroupPerformanceTargetPropertyToHclTerraform(struct?: CcWorkgroup.PerformanceTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        level: {
            value: cdktn.numberToHclTerraform(struct!.level),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkgroupTagPropertyToTerraform(struct?: CcWorkgroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkgroupTagPropertyToHclTerraform(struct?: CcWorkgroup.TagProperty | cdktn.IResolvable): any {
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


export function ccWorkgroupConfigParametersPropertyToTerraform(struct?: CcWorkgroup.ConfigParametersProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccWorkgroupConfigParametersPropertyToHclTerraform(struct?: CcWorkgroup.ConfigParametersProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccWorkgroupNetworkInterfacePropertyToTerraform(struct?: CcWorkgroup.NetworkInterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccWorkgroupNetworkInterfacePropertyToHclTerraform(struct?: CcWorkgroup.NetworkInterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_interface_id: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_ip_address: {
            value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkgroupVpcEndpointPropertyToTerraform(struct?: CcWorkgroup.VpcEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        network_interfaces: cdktn.listMapper(ccWorkgroupNetworkInterfacePropertyToTerraform, false)(struct!.networkInterfaces),
        vpc_endpoint_id: cdktn.stringToTerraform(struct!.vpcEndpointId),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccWorkgroupVpcEndpointPropertyToHclTerraform(struct?: CcWorkgroup.VpcEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        network_interfaces: {
            value: cdktn.listMapperHcl(ccWorkgroupNetworkInterfacePropertyToHclTerraform, false)(struct!.networkInterfaces),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkInterfacePropertyList",
        },
        vpc_endpoint_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcEndpointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkgroupEndpointPropertyToTerraform(struct?: CcWorkgroup.EndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_endpoints: cdktn.listMapper(ccWorkgroupVpcEndpointPropertyToTerraform, false)(struct!.vpcEndpoints),
    }
}


export function ccWorkgroupEndpointPropertyToHclTerraform(struct?: CcWorkgroup.EndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_endpoints: {
            value: cdktn.listMapperHcl(ccWorkgroupVpcEndpointPropertyToHclTerraform, false)(struct!.vpcEndpoints),
            isBlock: true,
            type: "list",
            storageClassType: "VpcEndpointPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkgroupPricePerformanceTargetPropertyToTerraform(struct?: CcWorkgroup.PricePerformanceTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        level: cdktn.numberToTerraform(struct!.level),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccWorkgroupPricePerformanceTargetPropertyToHclTerraform(struct?: CcWorkgroup.PricePerformanceTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        level: {
            value: cdktn.numberToHclTerraform(struct!.level),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkgroupWorkgroupPropertyToTerraform(struct?: CcWorkgroup.WorkgroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: ccWorkgroupEndpointPropertyToTerraform(struct!.endpoint),
        price_performance_target: ccWorkgroupPricePerformanceTargetPropertyToTerraform(struct!.pricePerformanceTarget),
    }
}


export function ccWorkgroupWorkgroupPropertyToHclTerraform(struct?: CcWorkgroup.WorkgroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint: {
            value: ccWorkgroupEndpointPropertyToHclTerraform(struct!.endpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointProperty",
        },
        price_performance_target: {
            value: ccWorkgroupPricePerformanceTargetPropertyToHclTerraform(struct!.pricePerformanceTarget),
            isBlock: true,
            type: "struct",
            storageClassType: "PricePerformanceTargetProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWorkgroup {
export interface ConfigParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#parameter_key CcWorkgroup#parameter_key}
    */
    readonly parameterKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#parameter_value CcWorkgroup#parameter_value}
    */
    readonly parameterValue?: string;
}
export class ConfigParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameterKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterKey = this._parameterKey;
        }
        if (this._parameterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameterValue = this._parameterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameterKey = undefined;
            this._parameterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameterKey = value.parameterKey;
            this._parameterValue = value.parameterValue;
        }
    }

    // parameter_key - computed: true, optional: true, required: false
    private _parameterKey?: string; 
    public get parameterKey() {
        return this.getStringAttribute('parameter_key');
    }
    public set parameterKey(value: string) {
        this._parameterKey = value;
    }
    public resetParameterKey() {
        this._parameterKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterKeyInput() {
        return this._parameterKey;
    }

    // parameter_value - computed: true, optional: true, required: false
    private _parameterValue?: string; 
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
    public set parameterValue(value: string) {
        this._parameterValue = value;
    }
    public resetParameterValue() {
        this._parameterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterValueInput() {
        return this._parameterValue;
    }
}

export class ConfigParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ConfigParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfigParameterPropertyOutputReference {
        return new ConfigParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PerformanceTargetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#level CcWorkgroup#level}
    */
    readonly level?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#status CcWorkgroup#status}
    */
    readonly status?: string;
}
export class PerformanceTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PerformanceTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PerformanceTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._level = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._level = value.level;
            this._status = value.status;
        }
    }

    // level - computed: true, optional: true, required: false
    private _level?: number; 
    public get level() {
        return this.getNumberAttribute('level');
    }
    public set level(value: number) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#key CcWorkgroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#value CcWorkgroup#value}
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
export interface ConfigParametersProperty {
}
export class ConfigParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfigParametersProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigParametersProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // parameter_key - computed: true, optional: false, required: false
    public get parameterKey() {
        return this.getStringAttribute('parameter_key');
    }

    // parameter_value - computed: true, optional: false, required: false
    public get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
}

export class ConfigParametersPropertyList extends cdktn.ComplexList {

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
    public get(index: number): ConfigParametersPropertyOutputReference {
        return new ConfigParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkInterfaceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#availability_zone CcWorkgroup#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#network_interface_id CcWorkgroup#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#private_ip_address CcWorkgroup#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#subnet_id CcWorkgroup#subnet_id}
    */
    readonly subnetId?: string;
}
export class NetworkInterfacePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkInterfaceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
        }
        if (this._privateIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIpAddress = this._privateIpAddress;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfaceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._networkInterfaceId = undefined;
            this._privateIpAddress = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._networkInterfaceId = value.networkInterfaceId;
            this._privateIpAddress = value.privateIpAddress;
            this._subnetId = value.subnetId;
        }
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }

    // private_ip_address - computed: true, optional: true, required: false
    private _privateIpAddress?: string; 
    public get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
    public set privateIpAddress(value: string) {
        this._privateIpAddress = value;
    }
    public resetPrivateIpAddress() {
        this._privateIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpAddressInput() {
        return this._privateIpAddress;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}

export class NetworkInterfacePropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkInterfaceProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkInterfacePropertyOutputReference {
        return new NetworkInterfacePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcEndpointProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#network_interfaces CcWorkgroup#network_interfaces}
    */
    readonly networkInterfaces?: NetworkInterfaceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#vpc_endpoint_id CcWorkgroup#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#vpc_id CcWorkgroup#vpc_id}
    */
    readonly vpcId?: string;
}
export class VpcEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VpcEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._networkInterfaces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
        }
        if (this._vpcEndpointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEndpointId = this._vpcEndpointId;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._networkInterfaces.internalValue = undefined;
            this._vpcEndpointId = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._networkInterfaces.internalValue = value.networkInterfaces;
            this._vpcEndpointId = value.vpcEndpointId;
            this._vpcId = value.vpcId;
        }
    }

    // network_interfaces - computed: true, optional: true, required: false
    private _networkInterfaces = new NetworkInterfacePropertyList(this, "network_interfaces", false);
    public get networkInterfaces() {
        return this._networkInterfaces;
    }
    public putNetworkInterfaces(value: NetworkInterfaceProperty[] | cdktn.IResolvable) {
        this._networkInterfaces.internalValue = value;
    }
    public resetNetworkInterfaces() {
        this._networkInterfaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfacesInput() {
        return this._networkInterfaces.internalValue;
    }

    // vpc_endpoint_id - computed: true, optional: true, required: false
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
        this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
        return this._vpcEndpointId;
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}

export class VpcEndpointPropertyList extends cdktn.ComplexList {
    public internalValue? : VpcEndpointProperty[] | cdktn.IResolvable

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
    public get(index: number): VpcEndpointPropertyOutputReference {
        return new VpcEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EndpointProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#vpc_endpoints CcWorkgroup#vpc_endpoints}
    */
    readonly vpcEndpoints?: VpcEndpointProperty[] | cdktn.IResolvable;
}
export class EndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcEndpoints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEndpoints = this._vpcEndpoints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcEndpoints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcEndpoints.internalValue = value.vpcEndpoints;
        }
    }

    // address - computed: true, optional: false, required: false
    public get address() {
        return this.getStringAttribute('address');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getNumberAttribute('port');
    }

    // vpc_endpoints - computed: true, optional: true, required: false
    private _vpcEndpoints = new VpcEndpointPropertyList(this, "vpc_endpoints", false);
    public get vpcEndpoints() {
        return this._vpcEndpoints;
    }
    public putVpcEndpoints(value: VpcEndpointProperty[] | cdktn.IResolvable) {
        this._vpcEndpoints.internalValue = value;
    }
    public resetVpcEndpoints() {
        this._vpcEndpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointsInput() {
        return this._vpcEndpoints.internalValue;
    }
}
export interface PricePerformanceTargetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#level CcWorkgroup#level}
    */
    readonly level?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#status CcWorkgroup#status}
    */
    readonly status?: string;
}
export class PricePerformanceTargetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PricePerformanceTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PricePerformanceTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._level = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._level = value.level;
            this._status = value.status;
        }
    }

    // level - computed: true, optional: true, required: false
    private _level?: number; 
    public get level() {
        return this.getNumberAttribute('level');
    }
    public set level(value: number) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}
export interface WorkgroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#endpoint CcWorkgroup#endpoint}
    */
    readonly endpoint?: EndpointProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshiftserverless_workgroup#price_performance_target CcWorkgroup#price_performance_target}
    */
    readonly pricePerformanceTarget?: PricePerformanceTargetProperty;
}
export class WorkgroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkgroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint?.internalValue;
        }
        if (this._pricePerformanceTarget?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pricePerformanceTarget = this._pricePerformanceTarget?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkgroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint.internalValue = undefined;
            this._pricePerformanceTarget.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint.internalValue = value.endpoint;
            this._pricePerformanceTarget.internalValue = value.pricePerformanceTarget;
        }
    }

    // base_capacity - computed: true, optional: false, required: false
    public get baseCapacity() {
        return this.getNumberAttribute('base_capacity');
    }

    // config_parameters - computed: true, optional: false, required: false
    private _configParameters = new ConfigParametersPropertyList(this, "config_parameters", true);
    public get configParameters() {
        return this._configParameters;
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint = new EndpointPropertyOutputReference(this, "endpoint");
    public get endpoint() {
        return this._endpoint;
    }
    public putEndpoint(value: EndpointProperty) {
        this._endpoint.internalValue = value;
    }
    public resetEndpoint() {
        this._endpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint.internalValue;
    }

    // enhanced_vpc_routing - computed: true, optional: false, required: false
    public get enhancedVpcRouting() {
        return this.getBooleanAttribute('enhanced_vpc_routing');
    }

    // max_capacity - computed: true, optional: false, required: false
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }

    // namespace_name - computed: true, optional: false, required: false
    public get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }

    // price_performance_target - computed: true, optional: true, required: false
    private _pricePerformanceTarget = new PricePerformanceTargetPropertyOutputReference(this, "price_performance_target");
    public get pricePerformanceTarget() {
        return this._pricePerformanceTarget;
    }
    public putPricePerformanceTarget(value: PricePerformanceTargetProperty) {
        this._pricePerformanceTarget.internalValue = value;
    }
    public resetPricePerformanceTarget() {
        this._pricePerformanceTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pricePerformanceTargetInput() {
        return this._pricePerformanceTarget.internalValue;
    }

    // publicly_accessible - computed: true, optional: false, required: false
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }

    // track_name - computed: true, optional: false, required: false
    public get trackName() {
        return this.getStringAttribute('track_name');
    }

    // workgroup_arn - computed: true, optional: false, required: false
    public get workgroupArn() {
        return this.getStringAttribute('workgroup_arn');
    }

    // workgroup_id - computed: true, optional: false, required: false
    public get workgroupId() {
        return this.getStringAttribute('workgroup_id');
    }

    // workgroup_name - computed: true, optional: false, required: false
    public get workgroupName() {
        return this.getStringAttribute('workgroup_name');
    }
}
}
