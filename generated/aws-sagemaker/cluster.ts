// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration for cluster auto-scaling
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#auto_scaling CcCluster#auto_scaling}
    */
    readonly autoScaling?: CcCluster.ClusterAutoScalingConfigProperty;
    /**
    * The name of the HyperPod Cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#cluster_name CcCluster#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * The cluster role for the autoscaler to assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#cluster_role CcCluster#cluster_role}
    */
    readonly clusterRole?: string;
    /**
    * The instance groups of the SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_groups CcCluster#instance_groups}
    */
    readonly instanceGroups?: CcCluster.ClusterInstanceGroupProperty[] | cdktn.IResolvable;
    /**
    * Determines the scaling strategy for the SageMaker HyperPod cluster. When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#node_provisioning_mode CcCluster#node_provisioning_mode}
    */
    readonly nodeProvisioningMode?: string;
    /**
    * If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. If set to false, nodes will be labelled when a fault is detected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#node_recovery CcCluster#node_recovery}
    */
    readonly nodeRecovery?: string;
    /**
    * Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster or Slurm configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#orchestrator CcCluster#orchestrator}
    */
    readonly orchestrator?: CcCluster.OrchestratorProperty;
    /**
    * The restricted instance groups of the SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#restricted_instance_groups CcCluster#restricted_instance_groups}
    */
    readonly restrictedInstanceGroups?: CcCluster.ClusterRestrictedInstanceGroupProperty[] | cdktn.IResolvable;
    /**
    * The cluster-level configuration for restricted instance groups, including shared environment settings for inter-RIG communication and FSx Lustre sharing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#restricted_instance_groups_config CcCluster#restricted_instance_groups_config}
    */
    readonly restrictedInstanceGroupsConfig?: CcCluster.RestrictedInstanceGroupsConfigProperty;
    /**
    * Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. You can add tags to your cluster in the same way you add them in other AWS services that support tagging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * Configuration for tiered storage in the SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#tiered_storage_config CcCluster#tiered_storage_config}
    */
    readonly tieredStorageConfig?: CcCluster.TieredStorageConfigProperty;
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#vpc_config CcCluster#vpc_config}
    */
    readonly vpcConfig?: CcCluster.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster awscc_sagemaker_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster awscc_sagemaker_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_cluster',
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
        this._autoScaling.internalValue = config.autoScaling;
        this._clusterName = config.clusterName;
        this._clusterRole = config.clusterRole;
        this._instanceGroups.internalValue = config.instanceGroups;
        this._nodeProvisioningMode = config.nodeProvisioningMode;
        this._nodeRecovery = config.nodeRecovery;
        this._orchestrator.internalValue = config.orchestrator;
        this._restrictedInstanceGroups.internalValue = config.restrictedInstanceGroups;
        this._restrictedInstanceGroupsConfig.internalValue = config.restrictedInstanceGroupsConfig;
        this._tags.internalValue = config.tags;
        this._tieredStorageConfig.internalValue = config.tieredStorageConfig;
        this._vpcConfig.internalValue = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_scaling - computed: true, optional: true, required: false
    private _autoScaling = new CcCluster.ClusterAutoScalingConfigPropertyOutputReference(this, "auto_scaling");
    public get autoScaling() {
        return this._autoScaling;
    }
    public putAutoScaling(value: CcCluster.ClusterAutoScalingConfigProperty) {
        this._autoScaling.internalValue = value;
    }
    public resetAutoScaling() {
        this._autoScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingInput() {
        return this._autoScaling.internalValue;
    }

    // cluster_arn - computed: true, optional: false, required: false
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // cluster_role - computed: true, optional: true, required: false
    private _clusterRole?: string; 
    public get clusterRole() {
        return this.getStringAttribute('cluster_role');
    }
    public set clusterRole(value: string) {
        this._clusterRole = value;
    }
    public resetClusterRole() {
        this._clusterRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterRoleInput() {
        return this._clusterRole;
    }

    // cluster_status - computed: true, optional: false, required: false
    public get clusterStatus() {
        return this.getStringAttribute('cluster_status');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // failure_message - computed: true, optional: false, required: false
    public get failureMessage() {
        return this.getStringAttribute('failure_message');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_groups - computed: true, optional: true, required: false
    private _instanceGroups = new CcCluster.ClusterInstanceGroupPropertyList(this, "instance_groups", false);
    public get instanceGroups() {
        return this._instanceGroups;
    }
    public putInstanceGroups(value: CcCluster.ClusterInstanceGroupProperty[] | cdktn.IResolvable) {
        this._instanceGroups.internalValue = value;
    }
    public resetInstanceGroups() {
        this._instanceGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceGroupsInput() {
        return this._instanceGroups.internalValue;
    }

    // node_provisioning_mode - computed: true, optional: true, required: false
    private _nodeProvisioningMode?: string; 
    public get nodeProvisioningMode() {
        return this.getStringAttribute('node_provisioning_mode');
    }
    public set nodeProvisioningMode(value: string) {
        this._nodeProvisioningMode = value;
    }
    public resetNodeProvisioningMode() {
        this._nodeProvisioningMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeProvisioningModeInput() {
        return this._nodeProvisioningMode;
    }

    // node_recovery - computed: true, optional: true, required: false
    private _nodeRecovery?: string; 
    public get nodeRecovery() {
        return this.getStringAttribute('node_recovery');
    }
    public set nodeRecovery(value: string) {
        this._nodeRecovery = value;
    }
    public resetNodeRecovery() {
        this._nodeRecovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeRecoveryInput() {
        return this._nodeRecovery;
    }

    // orchestrator - computed: true, optional: true, required: false
    private _orchestrator = new CcCluster.OrchestratorPropertyOutputReference(this, "orchestrator");
    public get orchestrator() {
        return this._orchestrator;
    }
    public putOrchestrator(value: CcCluster.OrchestratorProperty) {
        this._orchestrator.internalValue = value;
    }
    public resetOrchestrator() {
        this._orchestrator.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orchestratorInput() {
        return this._orchestrator.internalValue;
    }

    // restricted_instance_groups - computed: true, optional: true, required: false
    private _restrictedInstanceGroups = new CcCluster.ClusterRestrictedInstanceGroupPropertyList(this, "restricted_instance_groups", false);
    public get restrictedInstanceGroups() {
        return this._restrictedInstanceGroups;
    }
    public putRestrictedInstanceGroups(value: CcCluster.ClusterRestrictedInstanceGroupProperty[] | cdktn.IResolvable) {
        this._restrictedInstanceGroups.internalValue = value;
    }
    public resetRestrictedInstanceGroups() {
        this._restrictedInstanceGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedInstanceGroupsInput() {
        return this._restrictedInstanceGroups.internalValue;
    }

    // restricted_instance_groups_config - computed: true, optional: true, required: false
    private _restrictedInstanceGroupsConfig = new CcCluster.RestrictedInstanceGroupsConfigPropertyOutputReference(this, "restricted_instance_groups_config");
    public get restrictedInstanceGroupsConfig() {
        return this._restrictedInstanceGroupsConfig;
    }
    public putRestrictedInstanceGroupsConfig(value: CcCluster.RestrictedInstanceGroupsConfigProperty) {
        this._restrictedInstanceGroupsConfig.internalValue = value;
    }
    public resetRestrictedInstanceGroupsConfig() {
        this._restrictedInstanceGroupsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedInstanceGroupsConfigInput() {
        return this._restrictedInstanceGroupsConfig.internalValue;
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

    // tiered_storage_config - computed: true, optional: true, required: false
    private _tieredStorageConfig = new CcCluster.TieredStorageConfigPropertyOutputReference(this, "tiered_storage_config");
    public get tieredStorageConfig() {
        return this._tieredStorageConfig;
    }
    public putTieredStorageConfig(value: CcCluster.TieredStorageConfigProperty) {
        this._tieredStorageConfig.internalValue = value;
    }
    public resetTieredStorageConfig() {
        this._tieredStorageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tieredStorageConfigInput() {
        return this._tieredStorageConfig.internalValue;
    }

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new CcCluster.VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcCluster.VpcConfigProperty) {
        this._vpcConfig.internalValue = value;
    }
    public resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_scaling: ccClusterClusterAutoScalingConfigPropertyToTerraform(this._autoScaling.internalValue),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            cluster_role: cdktn.stringToTerraform(this._clusterRole),
            instance_groups: cdktn.listMapper(ccClusterClusterInstanceGroupPropertyToTerraform, false)(this._instanceGroups.internalValue),
            node_provisioning_mode: cdktn.stringToTerraform(this._nodeProvisioningMode),
            node_recovery: cdktn.stringToTerraform(this._nodeRecovery),
            orchestrator: ccClusterOrchestratorPropertyToTerraform(this._orchestrator.internalValue),
            restricted_instance_groups: cdktn.listMapper(ccClusterClusterRestrictedInstanceGroupPropertyToTerraform, false)(this._restrictedInstanceGroups.internalValue),
            restricted_instance_groups_config: ccClusterRestrictedInstanceGroupsConfigPropertyToTerraform(this._restrictedInstanceGroupsConfig.internalValue),
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            tiered_storage_config: ccClusterTieredStorageConfigPropertyToTerraform(this._tieredStorageConfig.internalValue),
            vpc_config: ccClusterVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_scaling: {
                value: ccClusterClusterAutoScalingConfigPropertyToHclTerraform(this._autoScaling.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ClusterAutoScalingConfigProperty",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_role: {
                value: cdktn.stringToHclTerraform(this._clusterRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_groups: {
                value: cdktn.listMapperHcl(ccClusterClusterInstanceGroupPropertyToHclTerraform, false)(this._instanceGroups.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.ClusterInstanceGroupPropertyList",
            },
            node_provisioning_mode: {
                value: cdktn.stringToHclTerraform(this._nodeProvisioningMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_recovery: {
                value: cdktn.stringToHclTerraform(this._nodeRecovery),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            orchestrator: {
                value: ccClusterOrchestratorPropertyToHclTerraform(this._orchestrator.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.OrchestratorProperty",
            },
            restricted_instance_groups: {
                value: cdktn.listMapperHcl(ccClusterClusterRestrictedInstanceGroupPropertyToHclTerraform, false)(this._restrictedInstanceGroups.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.ClusterRestrictedInstanceGroupPropertyList",
            },
            restricted_instance_groups_config: {
                value: ccClusterRestrictedInstanceGroupsConfigPropertyToHclTerraform(this._restrictedInstanceGroupsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.RestrictedInstanceGroupsConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCluster.TagPropertyList",
            },
            tiered_storage_config: {
                value: ccClusterTieredStorageConfigPropertyToHclTerraform(this._tieredStorageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.TieredStorageConfigProperty",
            },
            vpc_config: {
                value: ccClusterVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.VpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterClusterAutoScalingConfigPropertyToTerraform(struct?: CcCluster.ClusterAutoScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaler_type: cdktn.stringToTerraform(struct!.autoScalerType),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccClusterClusterAutoScalingConfigPropertyToHclTerraform(struct?: CcCluster.ClusterAutoScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaler_type: {
            value: cdktn.stringToHclTerraform(struct!.autoScalerType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterAlarmDetailsPropertyToTerraform(struct?: CcCluster.AlarmDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    }
}


export function ccClusterAlarmDetailsPropertyToHclTerraform(struct?: CcCluster.AlarmDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterCapacitySizeConfigPropertyToTerraform(struct?: CcCluster.CapacitySizeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccClusterCapacitySizeConfigPropertyToHclTerraform(struct?: CcCluster.CapacitySizeConfigProperty | cdktn.IResolvable): any {
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


export function ccClusterInstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToTerraform(struct?: CcCluster.InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccClusterInstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToHclTerraform(struct?: CcCluster.InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
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


export function ccClusterRollingUpdatePolicyPropertyToTerraform(struct?: CcCluster.RollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_batch_size: ccClusterCapacitySizeConfigPropertyToTerraform(struct!.maximumBatchSize),
        rollback_maximum_batch_size: ccClusterInstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToTerraform(struct!.rollbackMaximumBatchSize),
    }
}


export function ccClusterRollingUpdatePolicyPropertyToHclTerraform(struct?: CcCluster.RollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_batch_size: {
            value: ccClusterCapacitySizeConfigPropertyToHclTerraform(struct!.maximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacitySizeConfigProperty",
        },
        rollback_maximum_batch_size: {
            value: ccClusterInstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToHclTerraform(struct!.rollbackMaximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterDeploymentConfigPropertyToTerraform(struct?: CcCluster.DeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_rollback_configuration: cdktn.listMapper(ccClusterAlarmDetailsPropertyToTerraform, false)(struct!.autoRollbackConfiguration),
        rolling_update_policy: ccClusterRollingUpdatePolicyPropertyToTerraform(struct!.rollingUpdatePolicy),
        wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    }
}


export function ccClusterDeploymentConfigPropertyToHclTerraform(struct?: CcCluster.DeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_rollback_configuration: {
            value: cdktn.listMapperHcl(ccClusterAlarmDetailsPropertyToHclTerraform, false)(struct!.autoRollbackConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmDetailsPropertyList",
        },
        rolling_update_policy: {
            value: ccClusterRollingUpdatePolicyPropertyToHclTerraform(struct!.rollingUpdatePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "RollingUpdatePolicyProperty",
        },
        wait_interval_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterPatchSchedulePropertyToTerraform(struct?: CcCluster.PatchScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        next_patch_date: cdktn.stringToTerraform(struct!.nextPatchDate),
    }
}


export function ccClusterPatchSchedulePropertyToHclTerraform(struct?: CcCluster.PatchScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        next_patch_date: {
            value: cdktn.stringToHclTerraform(struct!.nextPatchDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterAutoPatchConfigPropertyToTerraform(struct?: CcCluster.AutoPatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_config: ccClusterDeploymentConfigPropertyToTerraform(struct!.deploymentConfig),
        patch_schedule: ccClusterPatchSchedulePropertyToTerraform(struct!.patchSchedule),
        patching_strategy: cdktn.stringToTerraform(struct!.patchingStrategy),
    }
}


export function ccClusterAutoPatchConfigPropertyToHclTerraform(struct?: CcCluster.AutoPatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deployment_config: {
            value: ccClusterDeploymentConfigPropertyToHclTerraform(struct!.deploymentConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentConfigProperty",
        },
        patch_schedule: {
            value: ccClusterPatchSchedulePropertyToHclTerraform(struct!.patchSchedule),
            isBlock: true,
            type: "struct",
            storageClassType: "PatchScheduleProperty",
        },
        patching_strategy: {
            value: cdktn.stringToHclTerraform(struct!.patchingStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterCapacityRequirementsPropertyToTerraform(struct?: CcCluster.ClusterCapacityRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_demand: cdktn.stringToTerraform(struct!.onDemand),
        spot: cdktn.stringToTerraform(struct!.spot),
    }
}


export function ccClusterClusterCapacityRequirementsPropertyToHclTerraform(struct?: CcCluster.ClusterCapacityRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_demand: {
            value: cdktn.stringToHclTerraform(struct!.onDemand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot: {
            value: cdktn.stringToHclTerraform(struct!.spot),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterInstanceRequirementsPropertyToTerraform(struct?: CcCluster.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceTypes),
    }
}


export function ccClusterInstanceRequirementsPropertyToHclTerraform(struct?: CcCluster.InstanceRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterEbsVolumeConfigPropertyToTerraform(struct?: CcCluster.ClusterEbsVolumeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        root_volume: cdktn.booleanToTerraform(struct!.rootVolume),
        volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
        volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    }
}


export function ccClusterClusterEbsVolumeConfigPropertyToHclTerraform(struct?: CcCluster.ClusterEbsVolumeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        root_volume: {
            value: cdktn.booleanToHclTerraform(struct!.rootVolume),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        volume_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterFsxLustreConfigPropertyToTerraform(struct?: CcCluster.ClusterFsxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_name: cdktn.stringToTerraform(struct!.dnsName),
        mount_name: cdktn.stringToTerraform(struct!.mountName),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccClusterClusterFsxLustreConfigPropertyToHclTerraform(struct?: CcCluster.ClusterFsxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_name: {
            value: cdktn.stringToHclTerraform(struct!.dnsName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_name: {
            value: cdktn.stringToHclTerraform(struct!.mountName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterFsxOpenZfsConfigPropertyToTerraform(struct?: CcCluster.ClusterFsxOpenZfsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_name: cdktn.stringToTerraform(struct!.dnsName),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccClusterClusterFsxOpenZfsConfigPropertyToHclTerraform(struct?: CcCluster.ClusterFsxOpenZfsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_name: {
            value: cdktn.stringToHclTerraform(struct!.dnsName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterInstanceStorageConfigPropertyToTerraform(struct?: CcCluster.ClusterInstanceStorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_volume_config: ccClusterClusterEbsVolumeConfigPropertyToTerraform(struct!.ebsVolumeConfig),
        fsx_lustre_config: ccClusterClusterFsxLustreConfigPropertyToTerraform(struct!.fsxLustreConfig),
        fsx_open_zfs_config: ccClusterClusterFsxOpenZfsConfigPropertyToTerraform(struct!.fsxOpenZfsConfig),
    }
}


export function ccClusterClusterInstanceStorageConfigPropertyToHclTerraform(struct?: CcCluster.ClusterInstanceStorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_volume_config: {
            value: ccClusterClusterEbsVolumeConfigPropertyToHclTerraform(struct!.ebsVolumeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterEbsVolumeConfigProperty",
        },
        fsx_lustre_config: {
            value: ccClusterClusterFsxLustreConfigPropertyToHclTerraform(struct!.fsxLustreConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterFsxLustreConfigProperty",
        },
        fsx_open_zfs_config: {
            value: ccClusterClusterFsxOpenZfsConfigPropertyToHclTerraform(struct!.fsxOpenZfsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterFsxOpenZfsConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterKubernetesTaintPropertyToTerraform(struct?: CcCluster.ClusterKubernetesTaintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        effect: cdktn.stringToTerraform(struct!.effect),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccClusterClusterKubernetesTaintPropertyToHclTerraform(struct?: CcCluster.ClusterKubernetesTaintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        effect: {
            value: cdktn.stringToHclTerraform(struct!.effect),
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


export function ccClusterClusterKubernetesConfigPropertyToTerraform(struct?: CcCluster.ClusterKubernetesConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
        taints: cdktn.listMapper(ccClusterClusterKubernetesTaintPropertyToTerraform, false)(struct!.taints),
    }
}


export function ccClusterClusterKubernetesConfigPropertyToHclTerraform(struct?: CcCluster.ClusterKubernetesConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        labels: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        taints: {
            value: cdktn.listMapperHcl(ccClusterClusterKubernetesTaintPropertyToHclTerraform, false)(struct!.taints),
            isBlock: true,
            type: "list",
            storageClassType: "ClusterKubernetesTaintPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterLifeCycleConfigPropertyToTerraform(struct?: CcCluster.ClusterLifeCycleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_create: cdktn.stringToTerraform(struct!.onCreate),
        on_init_complete: cdktn.stringToTerraform(struct!.onInitComplete),
        source_s3_uri: cdktn.stringToTerraform(struct!.sourceS3Uri),
    }
}


export function ccClusterClusterLifeCycleConfigPropertyToHclTerraform(struct?: CcCluster.ClusterLifeCycleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_create: {
            value: cdktn.stringToHclTerraform(struct!.onCreate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_init_complete: {
            value: cdktn.stringToHclTerraform(struct!.onInitComplete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.sourceS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterNetworkInterfacePropertyToTerraform(struct?: CcCluster.ClusterNetworkInterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interface_type: cdktn.stringToTerraform(struct!.interfaceType),
    }
}


export function ccClusterClusterNetworkInterfacePropertyToHclTerraform(struct?: CcCluster.ClusterNetworkInterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interface_type: {
            value: cdktn.stringToHclTerraform(struct!.interfaceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterInstanceGroupsOverrideVpcConfigPropertyToTerraform(struct?: CcCluster.InstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccClusterInstanceGroupsOverrideVpcConfigPropertyToHclTerraform(struct?: CcCluster.InstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterAutoRollbackConfigurationPropertyToTerraform(struct?: CcCluster.AutoRollbackConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    }
}


export function ccClusterAutoRollbackConfigurationPropertyToHclTerraform(struct?: CcCluster.AutoRollbackConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterMaximumBatchSizePropertyToTerraform(struct?: CcCluster.MaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccClusterMaximumBatchSizePropertyToHclTerraform(struct?: CcCluster.MaximumBatchSizeProperty | cdktn.IResolvable): any {
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


export function ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToTerraform(struct?: CcCluster.InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToHclTerraform(struct?: CcCluster.InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
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


export function ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyPropertyToTerraform(struct?: CcCluster.InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_batch_size: ccClusterMaximumBatchSizePropertyToTerraform(struct!.maximumBatchSize),
        rollback_maximum_batch_size: ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToTerraform(struct!.rollbackMaximumBatchSize),
    }
}


export function ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyPropertyToHclTerraform(struct?: CcCluster.InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_batch_size: {
            value: ccClusterMaximumBatchSizePropertyToHclTerraform(struct!.maximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "MaximumBatchSizeProperty",
        },
        rollback_maximum_batch_size: {
            value: ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyToHclTerraform(struct!.rollbackMaximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigPropertyToTerraform(struct?: CcCluster.InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_rollback_configuration: cdktn.listMapper(ccClusterAutoRollbackConfigurationPropertyToTerraform, false)(struct!.autoRollbackConfiguration),
        rolling_update_policy: ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyPropertyToTerraform(struct!.rollingUpdatePolicy),
        wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    }
}


export function ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigPropertyToHclTerraform(struct?: CcCluster.InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_rollback_configuration: {
            value: cdktn.listMapperHcl(ccClusterAutoRollbackConfigurationPropertyToHclTerraform, false)(struct!.autoRollbackConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "AutoRollbackConfigurationPropertyList",
        },
        rolling_update_policy: {
            value: ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyPropertyToHclTerraform(struct!.rollingUpdatePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty",
        },
        wait_interval_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterScheduledUpdateConfigPropertyToTerraform(struct?: CcCluster.ScheduledUpdateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_config: ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigPropertyToTerraform(struct!.deploymentConfig),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    }
}


export function ccClusterScheduledUpdateConfigPropertyToHclTerraform(struct?: CcCluster.ScheduledUpdateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deployment_config: {
            value: ccClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigPropertyToHclTerraform(struct!.deploymentConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterSlurmConfigPropertyToTerraform(struct?: CcCluster.ClusterSlurmConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        node_type: cdktn.stringToTerraform(struct!.nodeType),
        partition_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.partitionNames),
    }
}


export function ccClusterClusterSlurmConfigPropertyToHclTerraform(struct?: CcCluster.ClusterSlurmConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        node_type: {
            value: cdktn.stringToHclTerraform(struct!.nodeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.partitionNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterInstanceGroupPropertyToTerraform(struct?: CcCluster.ClusterInstanceGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_patch_config: ccClusterAutoPatchConfigPropertyToTerraform(struct!.autoPatchConfig),
        capacity_requirements: ccClusterClusterCapacityRequirementsPropertyToTerraform(struct!.capacityRequirements),
        current_count: cdktn.numberToTerraform(struct!.currentCount),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        image_id: cdktn.stringToTerraform(struct!.imageId),
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
        instance_requirements: ccClusterInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
        instance_storage_configs: cdktn.listMapper(ccClusterClusterInstanceStorageConfigPropertyToTerraform, false)(struct!.instanceStorageConfigs),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        kubernetes_config: ccClusterClusterKubernetesConfigPropertyToTerraform(struct!.kubernetesConfig),
        life_cycle_config: ccClusterClusterLifeCycleConfigPropertyToTerraform(struct!.lifeCycleConfig),
        min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
        network_interface: ccClusterClusterNetworkInterfacePropertyToTerraform(struct!.networkInterface),
        on_start_deep_health_checks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.onStartDeepHealthChecks),
        override_vpc_config: ccClusterInstanceGroupsOverrideVpcConfigPropertyToTerraform(struct!.overrideVpcConfig),
        scheduled_update_config: ccClusterScheduledUpdateConfigPropertyToTerraform(struct!.scheduledUpdateConfig),
        slurm_config: ccClusterClusterSlurmConfigPropertyToTerraform(struct!.slurmConfig),
        threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccClusterClusterInstanceGroupPropertyToHclTerraform(struct?: CcCluster.ClusterInstanceGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_patch_config: {
            value: ccClusterAutoPatchConfigPropertyToHclTerraform(struct!.autoPatchConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoPatchConfigProperty",
        },
        capacity_requirements: {
            value: ccClusterClusterCapacityRequirementsPropertyToHclTerraform(struct!.capacityRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterCapacityRequirementsProperty",
        },
        current_count: {
            value: cdktn.numberToHclTerraform(struct!.currentCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_id: {
            value: cdktn.stringToHclTerraform(struct!.imageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_count: {
            value: cdktn.numberToHclTerraform(struct!.instanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_group_name: {
            value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_requirements: {
            value: ccClusterInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceRequirementsProperty",
        },
        instance_storage_configs: {
            value: cdktn.listMapperHcl(ccClusterClusterInstanceStorageConfigPropertyToHclTerraform, false)(struct!.instanceStorageConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "ClusterInstanceStorageConfigPropertyList",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kubernetes_config: {
            value: ccClusterClusterKubernetesConfigPropertyToHclTerraform(struct!.kubernetesConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterKubernetesConfigProperty",
        },
        life_cycle_config: {
            value: ccClusterClusterLifeCycleConfigPropertyToHclTerraform(struct!.lifeCycleConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterLifeCycleConfigProperty",
        },
        min_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.minInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_interface: {
            value: ccClusterClusterNetworkInterfacePropertyToHclTerraform(struct!.networkInterface),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterNetworkInterfaceProperty",
        },
        on_start_deep_health_checks: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.onStartDeepHealthChecks),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        override_vpc_config: {
            value: ccClusterInstanceGroupsOverrideVpcConfigPropertyToHclTerraform(struct!.overrideVpcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceGroupsOverrideVpcConfigProperty",
        },
        scheduled_update_config: {
            value: ccClusterScheduledUpdateConfigPropertyToHclTerraform(struct!.scheduledUpdateConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduledUpdateConfigProperty",
        },
        slurm_config: {
            value: ccClusterClusterSlurmConfigPropertyToHclTerraform(struct!.slurmConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterSlurmConfigProperty",
        },
        threads_per_core: {
            value: cdktn.numberToHclTerraform(struct!.threadsPerCore),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterOrchestratorEksConfigPropertyToTerraform(struct?: CcCluster.ClusterOrchestratorEksConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    }
}


export function ccClusterClusterOrchestratorEksConfigPropertyToHclTerraform(struct?: CcCluster.ClusterOrchestratorEksConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_arn: {
            value: cdktn.stringToHclTerraform(struct!.clusterArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterAccountingDatabasePropertyToTerraform(struct?: CcCluster.AccountingDatabaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        name: cdktn.stringToTerraform(struct!.name),
        port: cdktn.numberToTerraform(struct!.port),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccClusterAccountingDatabasePropertyToHclTerraform(struct?: CcCluster.AccountingDatabaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
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
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterOrchestratorSlurmConfigPropertyToTerraform(struct?: CcCluster.ClusterOrchestratorSlurmConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accounting_database: ccClusterAccountingDatabasePropertyToTerraform(struct!.accountingDatabase),
        slurm_config_strategy: cdktn.stringToTerraform(struct!.slurmConfigStrategy),
    }
}


export function ccClusterClusterOrchestratorSlurmConfigPropertyToHclTerraform(struct?: CcCluster.ClusterOrchestratorSlurmConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accounting_database: {
            value: ccClusterAccountingDatabasePropertyToHclTerraform(struct!.accountingDatabase),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountingDatabaseProperty",
        },
        slurm_config_strategy: {
            value: cdktn.stringToHclTerraform(struct!.slurmConfigStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterOrchestratorPropertyToTerraform(struct?: CcCluster.OrchestratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eks: ccClusterClusterOrchestratorEksConfigPropertyToTerraform(struct!.eks),
        slurm: ccClusterClusterOrchestratorSlurmConfigPropertyToTerraform(struct!.slurm),
    }
}


export function ccClusterOrchestratorPropertyToHclTerraform(struct?: CcCluster.OrchestratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eks: {
            value: ccClusterClusterOrchestratorEksConfigPropertyToHclTerraform(struct!.eks),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterOrchestratorEksConfigProperty",
        },
        slurm: {
            value: ccClusterClusterOrchestratorSlurmConfigPropertyToHclTerraform(struct!.slurm),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterOrchestratorSlurmConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterFSxLustreConfigPropertyToTerraform(struct?: CcCluster.FSxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        per_unit_storage_throughput: cdktn.numberToTerraform(struct!.perUnitStorageThroughput),
        size_in_gi_b: cdktn.numberToTerraform(struct!.sizeInGiB),
    }
}


export function ccClusterFSxLustreConfigPropertyToHclTerraform(struct?: CcCluster.FSxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        per_unit_storage_throughput: {
            value: cdktn.numberToHclTerraform(struct!.perUnitStorageThroughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        size_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeInGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterEnvironmentConfigPropertyToTerraform(struct?: CcCluster.EnvironmentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fsx_lustre_config: ccClusterFSxLustreConfigPropertyToTerraform(struct!.fsxLustreConfig),
    }
}


export function ccClusterEnvironmentConfigPropertyToHclTerraform(struct?: CcCluster.EnvironmentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fsx_lustre_config: {
            value: ccClusterFSxLustreConfigPropertyToHclTerraform(struct!.fsxLustreConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FSxLustreConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterEbsVolumeConfigPropertyToTerraform(struct?: CcCluster.EbsVolumeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        root_volume: cdktn.booleanToTerraform(struct!.rootVolume),
        volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
        volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    }
}


export function ccClusterEbsVolumeConfigPropertyToHclTerraform(struct?: CcCluster.EbsVolumeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        root_volume: {
            value: cdktn.booleanToHclTerraform(struct!.rootVolume),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        volume_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigPropertyToTerraform(struct?: CcCluster.RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_name: cdktn.stringToTerraform(struct!.dnsName),
        mount_name: cdktn.stringToTerraform(struct!.mountName),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccClusterRestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigPropertyToHclTerraform(struct?: CcCluster.RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_name: {
            value: cdktn.stringToHclTerraform(struct!.dnsName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_name: {
            value: cdktn.stringToHclTerraform(struct!.mountName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterFsxOpenZfsConfigPropertyToTerraform(struct?: CcCluster.FsxOpenZfsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_name: cdktn.stringToTerraform(struct!.dnsName),
        mount_path: cdktn.stringToTerraform(struct!.mountPath),
    }
}


export function ccClusterFsxOpenZfsConfigPropertyToHclTerraform(struct?: CcCluster.FsxOpenZfsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_name: {
            value: cdktn.stringToHclTerraform(struct!.dnsName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mount_path: {
            value: cdktn.stringToHclTerraform(struct!.mountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterInstanceStorageConfigsPropertyToTerraform(struct?: CcCluster.InstanceStorageConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_volume_config: ccClusterEbsVolumeConfigPropertyToTerraform(struct!.ebsVolumeConfig),
        fsx_lustre_config: ccClusterRestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigPropertyToTerraform(struct!.fsxLustreConfig),
        fsx_open_zfs_config: ccClusterFsxOpenZfsConfigPropertyToTerraform(struct!.fsxOpenZfsConfig),
    }
}


export function ccClusterInstanceStorageConfigsPropertyToHclTerraform(struct?: CcCluster.InstanceStorageConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_volume_config: {
            value: ccClusterEbsVolumeConfigPropertyToHclTerraform(struct!.ebsVolumeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EbsVolumeConfigProperty",
        },
        fsx_lustre_config: {
            value: ccClusterRestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigPropertyToHclTerraform(struct!.fsxLustreConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty",
        },
        fsx_open_zfs_config: {
            value: ccClusterFsxOpenZfsConfigPropertyToHclTerraform(struct!.fsxOpenZfsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "FsxOpenZfsConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRestrictedInstanceGroupsOverrideVpcConfigPropertyToTerraform(struct?: CcCluster.RestrictedInstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccClusterRestrictedInstanceGroupsOverrideVpcConfigPropertyToHclTerraform(struct?: CcCluster.RestrictedInstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterRestrictedInstanceGroupPropertyToTerraform(struct?: CcCluster.ClusterRestrictedInstanceGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        current_count: cdktn.numberToTerraform(struct!.currentCount),
        environment_config: ccClusterEnvironmentConfigPropertyToTerraform(struct!.environmentConfig),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
        instance_storage_configs: cdktn.listMapper(ccClusterInstanceStorageConfigsPropertyToTerraform, false)(struct!.instanceStorageConfigs),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        on_start_deep_health_checks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.onStartDeepHealthChecks),
        override_vpc_config: ccClusterRestrictedInstanceGroupsOverrideVpcConfigPropertyToTerraform(struct!.overrideVpcConfig),
        threads_per_core: cdktn.numberToTerraform(struct!.threadsPerCore),
        training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    }
}


export function ccClusterClusterRestrictedInstanceGroupPropertyToHclTerraform(struct?: CcCluster.ClusterRestrictedInstanceGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        current_count: {
            value: cdktn.numberToHclTerraform(struct!.currentCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        environment_config: {
            value: ccClusterEnvironmentConfigPropertyToHclTerraform(struct!.environmentConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EnvironmentConfigProperty",
        },
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_count: {
            value: cdktn.numberToHclTerraform(struct!.instanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_group_name: {
            value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_storage_configs: {
            value: cdktn.listMapperHcl(ccClusterInstanceStorageConfigsPropertyToHclTerraform, false)(struct!.instanceStorageConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "InstanceStorageConfigsPropertyList",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_start_deep_health_checks: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.onStartDeepHealthChecks),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        override_vpc_config: {
            value: ccClusterRestrictedInstanceGroupsOverrideVpcConfigPropertyToHclTerraform(struct!.overrideVpcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RestrictedInstanceGroupsOverrideVpcConfigProperty",
        },
        threads_per_core: {
            value: cdktn.numberToHclTerraform(struct!.threadsPerCore),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        training_plan_arn: {
            value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigPropertyToTerraform(struct?: CcCluster.RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        per_unit_storage_throughput: cdktn.numberToTerraform(struct!.perUnitStorageThroughput),
        size_in_gi_b: cdktn.numberToTerraform(struct!.sizeInGiB),
    }
}


export function ccClusterRestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigPropertyToHclTerraform(struct?: CcCluster.RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        per_unit_storage_throughput: {
            value: cdktn.numberToHclTerraform(struct!.perUnitStorageThroughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        size_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeInGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterSharedEnvironmentConfigPropertyToTerraform(struct?: CcCluster.SharedEnvironmentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fsx_lustre_config: ccClusterRestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigPropertyToTerraform(struct!.fsxLustreConfig),
        fsx_lustre_deletion_policy: cdktn.stringToTerraform(struct!.fsxLustreDeletionPolicy),
    }
}


export function ccClusterSharedEnvironmentConfigPropertyToHclTerraform(struct?: CcCluster.SharedEnvironmentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fsx_lustre_config: {
            value: ccClusterRestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigPropertyToHclTerraform(struct!.fsxLustreConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty",
        },
        fsx_lustre_deletion_policy: {
            value: cdktn.stringToHclTerraform(struct!.fsxLustreDeletionPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRestrictedInstanceGroupsConfigPropertyToTerraform(struct?: CcCluster.RestrictedInstanceGroupsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        shared_environment_config: ccClusterSharedEnvironmentConfigPropertyToTerraform(struct!.sharedEnvironmentConfig),
    }
}


export function ccClusterRestrictedInstanceGroupsConfigPropertyToHclTerraform(struct?: CcCluster.RestrictedInstanceGroupsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        shared_environment_config: {
            value: ccClusterSharedEnvironmentConfigPropertyToHclTerraform(struct!.sharedEnvironmentConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SharedEnvironmentConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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


export function ccClusterTieredStorageConfigPropertyToTerraform(struct?: CcCluster.TieredStorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_memory_allocation_percentage: cdktn.numberToTerraform(struct!.instanceMemoryAllocationPercentage),
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccClusterTieredStorageConfigPropertyToHclTerraform(struct?: CcCluster.TieredStorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_memory_allocation_percentage: {
            value: cdktn.numberToHclTerraform(struct!.instanceMemoryAllocationPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterVpcConfigPropertyToTerraform(struct?: CcCluster.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccClusterVpcConfigPropertyToHclTerraform(struct?: CcCluster.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCluster {
export interface ClusterAutoScalingConfigProperty {
    /**
    * The type of auto-scaler to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#auto_scaler_type CcCluster#auto_scaler_type}
    */
    readonly autoScalerType?: string;
    /**
    * The auto-scaling mode for the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mode CcCluster#mode}
    */
    readonly mode?: string;
}
export class ClusterAutoScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterAutoScalingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalerType !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalerType = this._autoScalerType;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterAutoScalingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalerType = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalerType = value.autoScalerType;
            this._mode = value.mode;
        }
    }

    // auto_scaler_type - computed: true, optional: true, required: false
    private _autoScalerType?: string; 
    public get autoScalerType() {
        return this.getStringAttribute('auto_scaler_type');
    }
    public set autoScalerType(value: string) {
        this._autoScalerType = value;
    }
    public resetAutoScalerType() {
        this._autoScalerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalerTypeInput() {
        return this._autoScalerType;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface AlarmDetailsProperty {
    /**
    * The name of the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#alarm_name CcCluster#alarm_name}
    */
    readonly alarmName?: string;
}
export class AlarmDetailsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
    }
}

export class AlarmDetailsPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmDetailsProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmDetailsPropertyOutputReference {
        return new AlarmDetailsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CapacitySizeConfigProperty {
    /**
    * Specifies whether SageMaker should process the update by amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#type CcCluster#type}
    */
    readonly type?: string;
    /**
    * Specifies the amount or percentage of instances SageMaker updates at a time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#value CcCluster#value}
    */
    readonly value?: number;
}
export class CapacitySizeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacitySizeConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CapacitySizeConfigProperty | cdktn.IResolvable | undefined) {
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
export interface InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty {
    /**
    * Specifies whether SageMaker should process the update by amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#type CcCluster#type}
    */
    readonly type?: string;
    /**
    * Specifies the amount or percentage of instances SageMaker updates at a time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#value CcCluster#value}
    */
    readonly value?: number;
}
export class InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined) {
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
export interface RollingUpdatePolicyProperty {
    /**
    * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#maximum_batch_size CcCluster#maximum_batch_size}
    */
    readonly maximumBatchSize?: CapacitySizeConfigProperty;
    /**
    * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#rollback_maximum_batch_size CcCluster#rollback_maximum_batch_size}
    */
    readonly rollbackMaximumBatchSize?: InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty;
}
export class RollingUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RollingUpdatePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
        }
        if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RollingUpdatePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = undefined;
            this._rollbackMaximumBatchSize.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = value.maximumBatchSize;
            this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
        }
    }

    // maximum_batch_size - computed: true, optional: true, required: false
    private _maximumBatchSize = new CapacitySizeConfigPropertyOutputReference(this, "maximum_batch_size");
    public get maximumBatchSize() {
        return this._maximumBatchSize;
    }
    public putMaximumBatchSize(value: CapacitySizeConfigProperty) {
        this._maximumBatchSize.internalValue = value;
    }
    public resetMaximumBatchSize() {
        this._maximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchSizeInput() {
        return this._maximumBatchSize.internalValue;
    }

    // rollback_maximum_batch_size - computed: true, optional: true, required: false
    private _rollbackMaximumBatchSize = new InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyOutputReference(this, "rollback_maximum_batch_size");
    public get rollbackMaximumBatchSize() {
        return this._rollbackMaximumBatchSize;
    }
    public putRollbackMaximumBatchSize(value: InstanceGroupsAutoPatchConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty) {
        this._rollbackMaximumBatchSize.internalValue = value;
    }
    public resetRollbackMaximumBatchSize() {
        this._rollbackMaximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackMaximumBatchSizeInput() {
        return this._rollbackMaximumBatchSize.internalValue;
    }
}
export interface DeploymentConfigProperty {
    /**
    * An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#auto_rollback_configuration CcCluster#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: AlarmDetailsProperty[] | cdktn.IResolvable;
    /**
    * The policy that SageMaker uses when updating the AMI versions of the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#rolling_update_policy CcCluster#rolling_update_policy}
    */
    readonly rollingUpdatePolicy?: RollingUpdatePolicyProperty;
    /**
    * The duration in seconds that SageMaker waits before updating more instances in the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#wait_interval_in_seconds CcCluster#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds?: number;
}
export class DeploymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoRollbackConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
        }
        if (this._rollingUpdatePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
        }
        if (this._waitIntervalInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = undefined;
            this._rollingUpdatePolicy.internalValue = undefined;
            this._waitIntervalInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
            this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
            this._waitIntervalInSeconds = value.waitIntervalInSeconds;
        }
    }

    // auto_rollback_configuration - computed: true, optional: true, required: false
    private _autoRollbackConfiguration = new AlarmDetailsPropertyList(this, "auto_rollback_configuration", false);
    public get autoRollbackConfiguration() {
        return this._autoRollbackConfiguration;
    }
    public putAutoRollbackConfiguration(value: AlarmDetailsProperty[] | cdktn.IResolvable) {
        this._autoRollbackConfiguration.internalValue = value;
    }
    public resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration.internalValue;
    }

    // rolling_update_policy - computed: true, optional: true, required: false
    private _rollingUpdatePolicy = new RollingUpdatePolicyPropertyOutputReference(this, "rolling_update_policy");
    public get rollingUpdatePolicy() {
        return this._rollingUpdatePolicy;
    }
    public putRollingUpdatePolicy(value: RollingUpdatePolicyProperty) {
        this._rollingUpdatePolicy.internalValue = value;
    }
    public resetRollingUpdatePolicy() {
        this._rollingUpdatePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollingUpdatePolicyInput() {
        return this._rollingUpdatePolicy.internalValue;
    }

    // wait_interval_in_seconds - computed: true, optional: true, required: false
    private _waitIntervalInSeconds?: number; 
    public get waitIntervalInSeconds() {
        return this.getNumberAttribute('wait_interval_in_seconds');
    }
    public set waitIntervalInSeconds(value: number) {
        this._waitIntervalInSeconds = value;
    }
    public resetWaitIntervalInSeconds() {
        this._waitIntervalInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitIntervalInSecondsInput() {
        return this._waitIntervalInSeconds;
    }
}
export interface PatchScheduleProperty {
    /**
    * The date and time of the next scheduled patch, set by the system when a patch AMI is detected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#next_patch_date CcCluster#next_patch_date}
    */
    readonly nextPatchDate?: string;
}
export class PatchSchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PatchScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nextPatchDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.nextPatchDate = this._nextPatchDate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PatchScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nextPatchDate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nextPatchDate = value.nextPatchDate;
        }
    }

    // next_patch_date - computed: true, optional: true, required: false
    private _nextPatchDate?: string; 
    public get nextPatchDate() {
        return this.getStringAttribute('next_patch_date');
    }
    public set nextPatchDate(value: string) {
        this._nextPatchDate = value;
    }
    public resetNextPatchDate() {
        this._nextPatchDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nextPatchDateInput() {
        return this._nextPatchDate;
    }
}
export interface AutoPatchConfigProperty {
    /**
    * The configuration to use when updating the AMI versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#deployment_config CcCluster#deployment_config}
    */
    readonly deploymentConfig?: DeploymentConfigProperty;
    /**
    * The schedule configuration for automatic patching.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#patch_schedule CcCluster#patch_schedule}
    */
    readonly patchSchedule?: PatchScheduleProperty;
    /**
    * The patching strategy that determines when and how instances are patched. WhenIdle patches instances as they become idle. WhenAllIdle patches all instances when they are all idle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#patching_strategy CcCluster#patching_strategy}
    */
    readonly patchingStrategy?: string;
}
export class AutoPatchConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoPatchConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deploymentConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentConfig = this._deploymentConfig?.internalValue;
        }
        if (this._patchSchedule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.patchSchedule = this._patchSchedule?.internalValue;
        }
        if (this._patchingStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.patchingStrategy = this._patchingStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoPatchConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentConfig.internalValue = undefined;
            this._patchSchedule.internalValue = undefined;
            this._patchingStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentConfig.internalValue = value.deploymentConfig;
            this._patchSchedule.internalValue = value.patchSchedule;
            this._patchingStrategy = value.patchingStrategy;
        }
    }

    // deployment_config - computed: true, optional: true, required: false
    private _deploymentConfig = new DeploymentConfigPropertyOutputReference(this, "deployment_config");
    public get deploymentConfig() {
        return this._deploymentConfig;
    }
    public putDeploymentConfig(value: DeploymentConfigProperty) {
        this._deploymentConfig.internalValue = value;
    }
    public resetDeploymentConfig() {
        this._deploymentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigInput() {
        return this._deploymentConfig.internalValue;
    }

    // patch_schedule - computed: true, optional: true, required: false
    private _patchSchedule = new PatchSchedulePropertyOutputReference(this, "patch_schedule");
    public get patchSchedule() {
        return this._patchSchedule;
    }
    public putPatchSchedule(value: PatchScheduleProperty) {
        this._patchSchedule.internalValue = value;
    }
    public resetPatchSchedule() {
        this._patchSchedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchScheduleInput() {
        return this._patchSchedule.internalValue;
    }

    // patching_strategy - computed: true, optional: true, required: false
    private _patchingStrategy?: string; 
    public get patchingStrategy() {
        return this.getStringAttribute('patching_strategy');
    }
    public set patchingStrategy(value: string) {
        this._patchingStrategy = value;
    }
    public resetPatchingStrategy() {
        this._patchingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchingStrategyInput() {
        return this._patchingStrategy;
    }
}
export interface ClusterCapacityRequirementsProperty {
    /**
    * Options for OnDemand capacity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#on_demand CcCluster#on_demand}
    */
    readonly onDemand?: string;
    /**
    * Options for Spot capacity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#spot CcCluster#spot}
    */
    readonly spot?: string;
}
export class ClusterCapacityRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterCapacityRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onDemand !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemand = this._onDemand;
        }
        if (this._spot !== undefined) {
            hasAnyValues = true;
            internalValueResult.spot = this._spot;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterCapacityRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onDemand = undefined;
            this._spot = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onDemand = value.onDemand;
            this._spot = value.spot;
        }
    }

    // on_demand - computed: true, optional: true, required: false
    private _onDemand?: string; 
    public get onDemand() {
        return this.getStringAttribute('on_demand');
    }
    public set onDemand(value: string) {
        this._onDemand = value;
    }
    public resetOnDemand() {
        this._onDemand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandInput() {
        return this._onDemand;
    }

    // spot - computed: true, optional: true, required: false
    private _spot?: string; 
    public get spot() {
        return this.getStringAttribute('spot');
    }
    public set spot(value: string) {
        this._spot = value;
    }
    public resetSpot() {
        this._spot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotInput() {
        return this._spot;
    }
}
export interface InstanceRequirementsProperty {
    /**
    * A list of instance types that can be used for this instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_types CcCluster#instance_types}
    */
    readonly instanceTypes?: string[];
}
export class InstanceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceTypes = this._instanceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceTypes = value.instanceTypes;
        }
    }

    // instance_types - computed: true, optional: true, required: false
    private _instanceTypes?: string[]; 
    public get instanceTypes() {
        return this.getListAttribute('instance_types');
    }
    public set instanceTypes(value: string[]) {
        this._instanceTypes = value;
    }
    public resetInstanceTypes() {
        this._instanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypesInput() {
        return this._instanceTypes;
    }
}
export interface ClusterEbsVolumeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#root_volume CcCluster#root_volume}
    */
    readonly rootVolume?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#volume_kms_key_id CcCluster#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#volume_size_in_gb CcCluster#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
}
export class ClusterEbsVolumeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterEbsVolumeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rootVolume !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootVolume = this._rootVolume;
        }
        if (this._volumeKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
        }
        if (this._volumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterEbsVolumeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rootVolume = undefined;
            this._volumeKmsKeyId = undefined;
            this._volumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rootVolume = value.rootVolume;
            this._volumeKmsKeyId = value.volumeKmsKeyId;
            this._volumeSizeInGb = value.volumeSizeInGb;
        }
    }

    // root_volume - computed: true, optional: true, required: false
    private _rootVolume?: boolean | cdktn.IResolvable; 
    public get rootVolume() {
        return this.getBooleanAttribute('root_volume');
    }
    public set rootVolume(value: boolean | cdktn.IResolvable) {
        this._rootVolume = value;
    }
    public resetRootVolume() {
        this._rootVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootVolumeInput() {
        return this._rootVolume;
    }

    // volume_kms_key_id - computed: true, optional: true, required: false
    private _volumeKmsKeyId?: string; 
    public get volumeKmsKeyId() {
        return this.getStringAttribute('volume_kms_key_id');
    }
    public set volumeKmsKeyId(value: string) {
        this._volumeKmsKeyId = value;
    }
    public resetVolumeKmsKeyId() {
        this._volumeKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeKmsKeyIdInput() {
        return this._volumeKmsKeyId;
    }

    // volume_size_in_gb - computed: true, optional: true, required: false
    private _volumeSizeInGb?: number; 
    public get volumeSizeInGb() {
        return this.getNumberAttribute('volume_size_in_gb');
    }
    public set volumeSizeInGb(value: number) {
        this._volumeSizeInGb = value;
    }
    public resetVolumeSizeInGb() {
        this._volumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInGbInput() {
        return this._volumeSizeInGb;
    }
}
export interface ClusterFsxLustreConfigProperty {
    /**
    * The DNS name of the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#dns_name CcCluster#dns_name}
    */
    readonly dnsName?: string;
    /**
    * The mount name of the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mount_name CcCluster#mount_name}
    */
    readonly mountName?: string;
    /**
    * The mount path for the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mount_path CcCluster#mount_path}
    */
    readonly mountPath?: string;
}
export class ClusterFsxLustreConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterFsxLustreConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsName = this._dnsName;
        }
        if (this._mountName !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountName = this._mountName;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterFsxLustreConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsName = undefined;
            this._mountName = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsName = value.dnsName;
            this._mountName = value.mountName;
            this._mountPath = value.mountPath;
        }
    }

    // dns_name - computed: true, optional: true, required: false
    private _dnsName?: string; 
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    public set dnsName(value: string) {
        this._dnsName = value;
    }
    public resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameInput() {
        return this._dnsName;
    }

    // mount_name - computed: true, optional: true, required: false
    private _mountName?: string; 
    public get mountName() {
        return this.getStringAttribute('mount_name');
    }
    public set mountName(value: string) {
        this._mountName = value;
    }
    public resetMountName() {
        this._mountName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountNameInput() {
        return this._mountName;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface ClusterFsxOpenZfsConfigProperty {
    /**
    * The DNS name of the FSx for OpenZFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#dns_name CcCluster#dns_name}
    */
    readonly dnsName?: string;
    /**
    * The mount path for the FSx for OpenZFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mount_path CcCluster#mount_path}
    */
    readonly mountPath?: string;
}
export class ClusterFsxOpenZfsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterFsxOpenZfsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsName = this._dnsName;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterFsxOpenZfsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsName = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsName = value.dnsName;
            this._mountPath = value.mountPath;
        }
    }

    // dns_name - computed: true, optional: true, required: false
    private _dnsName?: string; 
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    public set dnsName(value: string) {
        this._dnsName = value;
    }
    public resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameInput() {
        return this._dnsName;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface ClusterInstanceStorageConfigProperty {
    /**
    * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#ebs_volume_config CcCluster#ebs_volume_config}
    */
    readonly ebsVolumeConfig?: ClusterEbsVolumeConfigProperty;
    /**
    * Configuration for mounting an Amazon FSx Lustre file system to the instances in the SageMaker HyperPod cluster instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#fsx_lustre_config CcCluster#fsx_lustre_config}
    */
    readonly fsxLustreConfig?: ClusterFsxLustreConfigProperty;
    /**
    * Configuration for mounting an Amazon FSx OpenZFS file system to the instances in the SageMaker HyperPod cluster instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#fsx_open_zfs_config CcCluster#fsx_open_zfs_config}
    */
    readonly fsxOpenZfsConfig?: ClusterFsxOpenZfsConfigProperty;
}
export class ClusterInstanceStorageConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClusterInstanceStorageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsVolumeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsVolumeConfig = this._ebsVolumeConfig?.internalValue;
        }
        if (this._fsxLustreConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreConfig = this._fsxLustreConfig?.internalValue;
        }
        if (this._fsxOpenZfsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxOpenZfsConfig = this._fsxOpenZfsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterInstanceStorageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = undefined;
            this._fsxLustreConfig.internalValue = undefined;
            this._fsxOpenZfsConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = value.ebsVolumeConfig;
            this._fsxLustreConfig.internalValue = value.fsxLustreConfig;
            this._fsxOpenZfsConfig.internalValue = value.fsxOpenZfsConfig;
        }
    }

    // ebs_volume_config - computed: true, optional: true, required: false
    private _ebsVolumeConfig = new ClusterEbsVolumeConfigPropertyOutputReference(this, "ebs_volume_config");
    public get ebsVolumeConfig() {
        return this._ebsVolumeConfig;
    }
    public putEbsVolumeConfig(value: ClusterEbsVolumeConfigProperty) {
        this._ebsVolumeConfig.internalValue = value;
    }
    public resetEbsVolumeConfig() {
        this._ebsVolumeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeConfigInput() {
        return this._ebsVolumeConfig.internalValue;
    }

    // fsx_lustre_config - computed: true, optional: true, required: false
    private _fsxLustreConfig = new ClusterFsxLustreConfigPropertyOutputReference(this, "fsx_lustre_config");
    public get fsxLustreConfig() {
        return this._fsxLustreConfig;
    }
    public putFsxLustreConfig(value: ClusterFsxLustreConfigProperty) {
        this._fsxLustreConfig.internalValue = value;
    }
    public resetFsxLustreConfig() {
        this._fsxLustreConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreConfigInput() {
        return this._fsxLustreConfig.internalValue;
    }

    // fsx_open_zfs_config - computed: true, optional: true, required: false
    private _fsxOpenZfsConfig = new ClusterFsxOpenZfsConfigPropertyOutputReference(this, "fsx_open_zfs_config");
    public get fsxOpenZfsConfig() {
        return this._fsxOpenZfsConfig;
    }
    public putFsxOpenZfsConfig(value: ClusterFsxOpenZfsConfigProperty) {
        this._fsxOpenZfsConfig.internalValue = value;
    }
    public resetFsxOpenZfsConfig() {
        this._fsxOpenZfsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxOpenZfsConfigInput() {
        return this._fsxOpenZfsConfig.internalValue;
    }
}

export class ClusterInstanceStorageConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : ClusterInstanceStorageConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): ClusterInstanceStorageConfigPropertyOutputReference {
        return new ClusterInstanceStorageConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClusterKubernetesTaintProperty {
    /**
    * The effect of the taint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#effect CcCluster#effect}
    */
    readonly effect?: string;
    /**
    * The key of the taint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The value of the taint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#value CcCluster#value}
    */
    readonly value?: string;
}
export class ClusterKubernetesTaintPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClusterKubernetesTaintProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._effect !== undefined) {
            hasAnyValues = true;
            internalValueResult.effect = this._effect;
        }
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

    public set internalValue(value: ClusterKubernetesTaintProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._effect = undefined;
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
            this._effect = value.effect;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // effect - computed: true, optional: true, required: false
    private _effect?: string; 
    public get effect() {
        return this.getStringAttribute('effect');
    }
    public set effect(value: string) {
        this._effect = value;
    }
    public resetEffect() {
        this._effect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get effectInput() {
        return this._effect;
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

export class ClusterKubernetesTaintPropertyList extends cdktn.ComplexList {
    public internalValue? : ClusterKubernetesTaintProperty[] | cdktn.IResolvable

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
    public get(index: number): ClusterKubernetesTaintPropertyOutputReference {
        return new ClusterKubernetesTaintPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClusterKubernetesConfigProperty {
    /**
    * A map of Kubernetes labels to apply to cluster nodes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#labels CcCluster#labels}
    */
    readonly labels?: { [key: string]: string };
    /**
    * A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#taints CcCluster#taints}
    */
    readonly taints?: ClusterKubernetesTaintProperty[] | cdktn.IResolvable;
}
export class ClusterKubernetesConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterKubernetesConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._labels !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels;
        }
        if (this._taints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.taints = this._taints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterKubernetesConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._labels = undefined;
            this._taints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._labels = value.labels;
            this._taints.internalValue = value.taints;
        }
    }

    // labels - computed: true, optional: true, required: false
    private _labels?: { [key: string]: string }; 
    public get labels() {
        return this.getStringMapAttribute('labels');
    }
    public set labels(value: { [key: string]: string }) {
        this._labels = value;
    }
    public resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
        return this._labels;
    }

    // taints - computed: true, optional: true, required: false
    private _taints = new ClusterKubernetesTaintPropertyList(this, "taints", false);
    public get taints() {
        return this._taints;
    }
    public putTaints(value: ClusterKubernetesTaintProperty[] | cdktn.IResolvable) {
        this._taints.internalValue = value;
    }
    public resetTaints() {
        this._taints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taintsInput() {
        return this._taints.internalValue;
    }
}
export interface ClusterLifeCycleConfigProperty {
    /**
    * The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation. Mutually exclusive with OnInitComplete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#on_create CcCluster#on_create}
    */
    readonly onCreate?: string;
    /**
    * The file name of the extension script under SourceS3Uri. This script runs after HyperPod configures the default software on the instance. Mutually exclusive with OnCreate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#on_init_complete CcCluster#on_init_complete}
    */
    readonly onInitComplete?: string;
    /**
    * An Amazon S3 bucket path where your lifecycle scripts are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#source_s3_uri CcCluster#source_s3_uri}
    */
    readonly sourceS3Uri?: string;
}
export class ClusterLifeCycleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterLifeCycleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onCreate !== undefined) {
            hasAnyValues = true;
            internalValueResult.onCreate = this._onCreate;
        }
        if (this._onInitComplete !== undefined) {
            hasAnyValues = true;
            internalValueResult.onInitComplete = this._onInitComplete;
        }
        if (this._sourceS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceS3Uri = this._sourceS3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterLifeCycleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onCreate = undefined;
            this._onInitComplete = undefined;
            this._sourceS3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onCreate = value.onCreate;
            this._onInitComplete = value.onInitComplete;
            this._sourceS3Uri = value.sourceS3Uri;
        }
    }

    // on_create - computed: true, optional: true, required: false
    private _onCreate?: string; 
    public get onCreate() {
        return this.getStringAttribute('on_create');
    }
    public set onCreate(value: string) {
        this._onCreate = value;
    }
    public resetOnCreate() {
        this._onCreate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onCreateInput() {
        return this._onCreate;
    }

    // on_init_complete - computed: true, optional: true, required: false
    private _onInitComplete?: string; 
    public get onInitComplete() {
        return this.getStringAttribute('on_init_complete');
    }
    public set onInitComplete(value: string) {
        this._onInitComplete = value;
    }
    public resetOnInitComplete() {
        this._onInitComplete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onInitCompleteInput() {
        return this._onInitComplete;
    }

    // source_s3_uri - computed: true, optional: true, required: false
    private _sourceS3Uri?: string; 
    public get sourceS3Uri() {
        return this.getStringAttribute('source_s3_uri');
    }
    public set sourceS3Uri(value: string) {
        this._sourceS3Uri = value;
    }
    public resetSourceS3Uri() {
        this._sourceS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceS3UriInput() {
        return this._sourceS3Uri;
    }
}
export interface ClusterNetworkInterfaceProperty {
    /**
    * The type of network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#interface_type CcCluster#interface_type}
    */
    readonly interfaceType?: string;
}
export class ClusterNetworkInterfacePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterNetworkInterfaceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interfaceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.interfaceType = this._interfaceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterNetworkInterfaceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interfaceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interfaceType = value.interfaceType;
        }
    }

    // interface_type - computed: true, optional: true, required: false
    private _interfaceType?: string; 
    public get interfaceType() {
        return this.getStringAttribute('interface_type');
    }
    public set interfaceType(value: string) {
        this._interfaceType = value;
    }
    public resetInterfaceType() {
        this._interfaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceTypeInput() {
        return this._interfaceType;
    }
}
export interface InstanceGroupsOverrideVpcConfigProperty {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#subnets CcCluster#subnets}
    */
    readonly subnets?: string[];
}
export class InstanceGroupsOverrideVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
        }
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

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface AutoRollbackConfigurationProperty {
    /**
    * The name of the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#alarm_name CcCluster#alarm_name}
    */
    readonly alarmName?: string;
}
export class AutoRollbackConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AutoRollbackConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoRollbackConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
    }
}

export class AutoRollbackConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : AutoRollbackConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): AutoRollbackConfigurationPropertyOutputReference {
        return new AutoRollbackConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MaximumBatchSizeProperty {
    /**
    * Specifies whether SageMaker should process the update by amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#type CcCluster#type}
    */
    readonly type?: string;
    /**
    * Specifies the amount or percentage of instances SageMaker updates at a time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#value CcCluster#value}
    */
    readonly value?: number;
}
export class MaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaximumBatchSizeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MaximumBatchSizeProperty | cdktn.IResolvable | undefined) {
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
export interface InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty {
    /**
    * Specifies whether SageMaker should process the update by amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#type CcCluster#type}
    */
    readonly type?: string;
    /**
    * Specifies the amount or percentage of instances SageMaker updates at a time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#value CcCluster#value}
    */
    readonly value?: number;
}
export class InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined) {
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
export interface InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty {
    /**
    * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#maximum_batch_size CcCluster#maximum_batch_size}
    */
    readonly maximumBatchSize?: MaximumBatchSizeProperty;
    /**
    * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#rollback_maximum_batch_size CcCluster#rollback_maximum_batch_size}
    */
    readonly rollbackMaximumBatchSize?: InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty;
}
export class InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
        }
        if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = undefined;
            this._rollbackMaximumBatchSize.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = value.maximumBatchSize;
            this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
        }
    }

    // maximum_batch_size - computed: true, optional: true, required: false
    private _maximumBatchSize = new MaximumBatchSizePropertyOutputReference(this, "maximum_batch_size");
    public get maximumBatchSize() {
        return this._maximumBatchSize;
    }
    public putMaximumBatchSize(value: MaximumBatchSizeProperty) {
        this._maximumBatchSize.internalValue = value;
    }
    public resetMaximumBatchSize() {
        this._maximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchSizeInput() {
        return this._maximumBatchSize.internalValue;
    }

    // rollback_maximum_batch_size - computed: true, optional: true, required: false
    private _rollbackMaximumBatchSize = new InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizePropertyOutputReference(this, "rollback_maximum_batch_size");
    public get rollbackMaximumBatchSize() {
        return this._rollbackMaximumBatchSize;
    }
    public putRollbackMaximumBatchSize(value: InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeProperty) {
        this._rollbackMaximumBatchSize.internalValue = value;
    }
    public resetRollbackMaximumBatchSize() {
        this._rollbackMaximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackMaximumBatchSizeInput() {
        return this._rollbackMaximumBatchSize.internalValue;
    }
}
export interface InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty {
    /**
    * An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#auto_rollback_configuration CcCluster#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: AutoRollbackConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The policy that SageMaker uses when updating the AMI versions of the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#rolling_update_policy CcCluster#rolling_update_policy}
    */
    readonly rollingUpdatePolicy?: InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty;
    /**
    * The duration in seconds that SageMaker waits before updating more instances in the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#wait_interval_in_seconds CcCluster#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds?: number;
}
export class InstanceGroupsScheduledUpdateConfigDeploymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoRollbackConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
        }
        if (this._rollingUpdatePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
        }
        if (this._waitIntervalInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = undefined;
            this._rollingUpdatePolicy.internalValue = undefined;
            this._waitIntervalInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
            this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
            this._waitIntervalInSeconds = value.waitIntervalInSeconds;
        }
    }

    // auto_rollback_configuration - computed: true, optional: true, required: false
    private _autoRollbackConfiguration = new AutoRollbackConfigurationPropertyList(this, "auto_rollback_configuration", false);
    public get autoRollbackConfiguration() {
        return this._autoRollbackConfiguration;
    }
    public putAutoRollbackConfiguration(value: AutoRollbackConfigurationProperty[] | cdktn.IResolvable) {
        this._autoRollbackConfiguration.internalValue = value;
    }
    public resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration.internalValue;
    }

    // rolling_update_policy - computed: true, optional: true, required: false
    private _rollingUpdatePolicy = new InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyPropertyOutputReference(this, "rolling_update_policy");
    public get rollingUpdatePolicy() {
        return this._rollingUpdatePolicy;
    }
    public putRollingUpdatePolicy(value: InstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyProperty) {
        this._rollingUpdatePolicy.internalValue = value;
    }
    public resetRollingUpdatePolicy() {
        this._rollingUpdatePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollingUpdatePolicyInput() {
        return this._rollingUpdatePolicy.internalValue;
    }

    // wait_interval_in_seconds - computed: true, optional: true, required: false
    private _waitIntervalInSeconds?: number; 
    public get waitIntervalInSeconds() {
        return this.getNumberAttribute('wait_interval_in_seconds');
    }
    public set waitIntervalInSeconds(value: number) {
        this._waitIntervalInSeconds = value;
    }
    public resetWaitIntervalInSeconds() {
        this._waitIntervalInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitIntervalInSecondsInput() {
        return this._waitIntervalInSeconds;
    }
}
export interface ScheduledUpdateConfigProperty {
    /**
    * The configuration to use when updating the AMI versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#deployment_config CcCluster#deployment_config}
    */
    readonly deploymentConfig?: InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty;
    /**
    * A cron expression that specifies the schedule that SageMaker follows when updating the AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#schedule_expression CcCluster#schedule_expression}
    */
    readonly scheduleExpression?: string;
}
export class ScheduledUpdateConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduledUpdateConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deploymentConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentConfig = this._deploymentConfig?.internalValue;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduledUpdateConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentConfig.internalValue = undefined;
            this._scheduleExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentConfig.internalValue = value.deploymentConfig;
            this._scheduleExpression = value.scheduleExpression;
        }
    }

    // deployment_config - computed: true, optional: true, required: false
    private _deploymentConfig = new InstanceGroupsScheduledUpdateConfigDeploymentConfigPropertyOutputReference(this, "deployment_config");
    public get deploymentConfig() {
        return this._deploymentConfig;
    }
    public putDeploymentConfig(value: InstanceGroupsScheduledUpdateConfigDeploymentConfigProperty) {
        this._deploymentConfig.internalValue = value;
    }
    public resetDeploymentConfig() {
        this._deploymentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigInput() {
        return this._deploymentConfig.internalValue;
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }
}
export interface ClusterSlurmConfigProperty {
    /**
    * The type of Slurm node for this instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#node_type CcCluster#node_type}
    */
    readonly nodeType?: string;
    /**
    * The Slurm partitions that this instance group belongs to. Maximum of 1 partition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#partition_names CcCluster#partition_names}
    */
    readonly partitionNames?: string[];
}
export class ClusterSlurmConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterSlurmConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nodeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeType = this._nodeType;
        }
        if (this._partitionNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionNames = this._partitionNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterSlurmConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nodeType = undefined;
            this._partitionNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nodeType = value.nodeType;
            this._partitionNames = value.partitionNames;
        }
    }

    // node_type - computed: true, optional: true, required: false
    private _nodeType?: string; 
    public get nodeType() {
        return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string) {
        this._nodeType = value;
    }
    public resetNodeType() {
        this._nodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeTypeInput() {
        return this._nodeType;
    }

    // partition_names - computed: true, optional: true, required: false
    private _partitionNames?: string[]; 
    public get partitionNames() {
        return this.getListAttribute('partition_names');
    }
    public set partitionNames(value: string[]) {
        this._partitionNames = value;
    }
    public resetPartitionNames() {
        this._partitionNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionNamesInput() {
        return this._partitionNames;
    }
}
export interface ClusterInstanceGroupProperty {
    /**
    * The configuration for automatic patching of the instance group. Enables workload-aware, patch-level AMI updates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#auto_patch_config CcCluster#auto_patch_config}
    */
    readonly autoPatchConfig?: AutoPatchConfigProperty;
    /**
    * Specifies the capacity requirements configuration for an instance group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#capacity_requirements CcCluster#capacity_requirements}
    */
    readonly capacityRequirements?: ClusterCapacityRequirementsProperty;
    /**
    * The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#current_count CcCluster#current_count}
    */
    readonly currentCount?: number;
    /**
    * The execution role for the instance group to assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#execution_role CcCluster#execution_role}
    */
    readonly executionRole?: string;
    /**
    * AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#image_id CcCluster#image_id}
    */
    readonly imageId?: string;
    /**
    * The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_count CcCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * The name of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_group_name CcCluster#instance_group_name}
    */
    readonly instanceGroupName?: string;
    /**
    * The instance requirements for the instance group. Specifies a list of instance types that can be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_requirements CcCluster#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsProperty;
    /**
    * The instance storage configuration for the instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_storage_configs CcCluster#instance_storage_configs}
    */
    readonly instanceStorageConfigs?: ClusterInstanceStorageConfigProperty[] | cdktn.IResolvable;
    /**
    * The instance type of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_type CcCluster#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Kubernetes configuration for cluster nodes including labels and taints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#kubernetes_config CcCluster#kubernetes_config}
    */
    readonly kubernetesConfig?: ClusterKubernetesConfigProperty;
    /**
    * The lifecycle configuration for a SageMaker HyperPod cluster. When omitted, the instance group uses Bootstrap mode. When provided with SourceS3Uri and OnCreate, uses Customer Managed mode. When provided with SourceS3Uri and OnInitComplete, uses Extended mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#life_cycle_config CcCluster#life_cycle_config}
    */
    readonly lifeCycleConfig?: ClusterLifeCycleConfigProperty;
    /**
    * The minimum number of instances required for the instance group to be InService. MinInstanceCount must be less than or equal to InstanceCount.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#min_instance_count CcCluster#min_instance_count}
    */
    readonly minInstanceCount?: number;
    /**
    * Specifies the network interface configuration for the instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#network_interface CcCluster#network_interface}
    */
    readonly networkInterface?: ClusterNetworkInterfaceProperty;
    /**
    * Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks CcCluster#on_start_deep_health_checks}
    */
    readonly onStartDeepHealthChecks?: string[];
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#override_vpc_config CcCluster#override_vpc_config}
    */
    readonly overrideVpcConfig?: InstanceGroupsOverrideVpcConfigProperty;
    /**
    * The configuration object of the schedule that SageMaker follows when updating the AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#scheduled_update_config CcCluster#scheduled_update_config}
    */
    readonly scheduledUpdateConfig?: ScheduledUpdateConfigProperty;
    /**
    * Slurm configuration for the instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#slurm_config CcCluster#slurm_config}
    */
    readonly slurmConfig?: ClusterSlurmConfigProperty;
    /**
    * The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#threads_per_core CcCluster#threads_per_core}
    */
    readonly threadsPerCore?: number;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#training_plan_arn CcCluster#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class ClusterInstanceGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClusterInstanceGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoPatchConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoPatchConfig = this._autoPatchConfig?.internalValue;
        }
        if (this._capacityRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityRequirements = this._capacityRequirements?.internalValue;
        }
        if (this._currentCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.currentCount = this._currentCount;
        }
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._imageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageId = this._imageId;
        }
        if (this._instanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceGroupName = this._instanceGroupName;
        }
        if (this._instanceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
        }
        if (this._instanceStorageConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceStorageConfigs = this._instanceStorageConfigs?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._kubernetesConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kubernetesConfig = this._kubernetesConfig?.internalValue;
        }
        if (this._lifeCycleConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifeCycleConfig = this._lifeCycleConfig?.internalValue;
        }
        if (this._minInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.minInstanceCount = this._minInstanceCount;
        }
        if (this._networkInterface?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterface = this._networkInterface?.internalValue;
        }
        if (this._onStartDeepHealthChecks !== undefined) {
            hasAnyValues = true;
            internalValueResult.onStartDeepHealthChecks = this._onStartDeepHealthChecks;
        }
        if (this._overrideVpcConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideVpcConfig = this._overrideVpcConfig?.internalValue;
        }
        if (this._scheduledUpdateConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledUpdateConfig = this._scheduledUpdateConfig?.internalValue;
        }
        if (this._slurmConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurmConfig = this._slurmConfig?.internalValue;
        }
        if (this._threadsPerCore !== undefined) {
            hasAnyValues = true;
            internalValueResult.threadsPerCore = this._threadsPerCore;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterInstanceGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoPatchConfig.internalValue = undefined;
            this._capacityRequirements.internalValue = undefined;
            this._currentCount = undefined;
            this._executionRole = undefined;
            this._imageId = undefined;
            this._instanceCount = undefined;
            this._instanceGroupName = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._instanceStorageConfigs.internalValue = undefined;
            this._instanceType = undefined;
            this._kubernetesConfig.internalValue = undefined;
            this._lifeCycleConfig.internalValue = undefined;
            this._minInstanceCount = undefined;
            this._networkInterface.internalValue = undefined;
            this._onStartDeepHealthChecks = undefined;
            this._overrideVpcConfig.internalValue = undefined;
            this._scheduledUpdateConfig.internalValue = undefined;
            this._slurmConfig.internalValue = undefined;
            this._threadsPerCore = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoPatchConfig.internalValue = value.autoPatchConfig;
            this._capacityRequirements.internalValue = value.capacityRequirements;
            this._currentCount = value.currentCount;
            this._executionRole = value.executionRole;
            this._imageId = value.imageId;
            this._instanceCount = value.instanceCount;
            this._instanceGroupName = value.instanceGroupName;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._instanceStorageConfigs.internalValue = value.instanceStorageConfigs;
            this._instanceType = value.instanceType;
            this._kubernetesConfig.internalValue = value.kubernetesConfig;
            this._lifeCycleConfig.internalValue = value.lifeCycleConfig;
            this._minInstanceCount = value.minInstanceCount;
            this._networkInterface.internalValue = value.networkInterface;
            this._onStartDeepHealthChecks = value.onStartDeepHealthChecks;
            this._overrideVpcConfig.internalValue = value.overrideVpcConfig;
            this._scheduledUpdateConfig.internalValue = value.scheduledUpdateConfig;
            this._slurmConfig.internalValue = value.slurmConfig;
            this._threadsPerCore = value.threadsPerCore;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // auto_patch_config - computed: true, optional: true, required: false
    private _autoPatchConfig = new AutoPatchConfigPropertyOutputReference(this, "auto_patch_config");
    public get autoPatchConfig() {
        return this._autoPatchConfig;
    }
    public putAutoPatchConfig(value: AutoPatchConfigProperty) {
        this._autoPatchConfig.internalValue = value;
    }
    public resetAutoPatchConfig() {
        this._autoPatchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoPatchConfigInput() {
        return this._autoPatchConfig.internalValue;
    }

    // capacity_requirements - computed: true, optional: true, required: false
    private _capacityRequirements = new ClusterCapacityRequirementsPropertyOutputReference(this, "capacity_requirements");
    public get capacityRequirements() {
        return this._capacityRequirements;
    }
    public putCapacityRequirements(value: ClusterCapacityRequirementsProperty) {
        this._capacityRequirements.internalValue = value;
    }
    public resetCapacityRequirements() {
        this._capacityRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityRequirementsInput() {
        return this._capacityRequirements.internalValue;
    }

    // current_count - computed: true, optional: true, required: false
    private _currentCount?: number; 
    public get currentCount() {
        return this.getNumberAttribute('current_count');
    }
    public set currentCount(value: number) {
        this._currentCount = value;
    }
    public resetCurrentCount() {
        this._currentCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentCountInput() {
        return this._currentCount;
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // image_id - computed: true, optional: true, required: false
    private _imageId?: string; 
    public get imageId() {
        return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
        this._imageId = value;
    }
    public resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
        return this._imageId;
    }

    // instance_count - computed: true, optional: true, required: false
    private _instanceCount?: number; 
    public get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number) {
        this._instanceCount = value;
    }
    public resetInstanceCount() {
        this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
        return this._instanceCount;
    }

    // instance_group_name - computed: true, optional: true, required: false
    private _instanceGroupName?: string; 
    public get instanceGroupName() {
        return this.getStringAttribute('instance_group_name');
    }
    public set instanceGroupName(value: string) {
        this._instanceGroupName = value;
    }
    public resetInstanceGroupName() {
        this._instanceGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceGroupNameInput() {
        return this._instanceGroupName;
    }

    // instance_requirements - computed: true, optional: true, required: false
    private _instanceRequirements = new InstanceRequirementsPropertyOutputReference(this, "instance_requirements");
    public get instanceRequirements() {
        return this._instanceRequirements;
    }
    public putInstanceRequirements(value: InstanceRequirementsProperty) {
        this._instanceRequirements.internalValue = value;
    }
    public resetInstanceRequirements() {
        this._instanceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRequirementsInput() {
        return this._instanceRequirements.internalValue;
    }

    // instance_storage_configs - computed: true, optional: true, required: false
    private _instanceStorageConfigs = new ClusterInstanceStorageConfigPropertyList(this, "instance_storage_configs", false);
    public get instanceStorageConfigs() {
        return this._instanceStorageConfigs;
    }
    public putInstanceStorageConfigs(value: ClusterInstanceStorageConfigProperty[] | cdktn.IResolvable) {
        this._instanceStorageConfigs.internalValue = value;
    }
    public resetInstanceStorageConfigs() {
        this._instanceStorageConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceStorageConfigsInput() {
        return this._instanceStorageConfigs.internalValue;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // kubernetes_config - computed: true, optional: true, required: false
    private _kubernetesConfig = new ClusterKubernetesConfigPropertyOutputReference(this, "kubernetes_config");
    public get kubernetesConfig() {
        return this._kubernetesConfig;
    }
    public putKubernetesConfig(value: ClusterKubernetesConfigProperty) {
        this._kubernetesConfig.internalValue = value;
    }
    public resetKubernetesConfig() {
        this._kubernetesConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubernetesConfigInput() {
        return this._kubernetesConfig.internalValue;
    }

    // life_cycle_config - computed: true, optional: true, required: false
    private _lifeCycleConfig = new ClusterLifeCycleConfigPropertyOutputReference(this, "life_cycle_config");
    public get lifeCycleConfig() {
        return this._lifeCycleConfig;
    }
    public putLifeCycleConfig(value: ClusterLifeCycleConfigProperty) {
        this._lifeCycleConfig.internalValue = value;
    }
    public resetLifeCycleConfig() {
        this._lifeCycleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifeCycleConfigInput() {
        return this._lifeCycleConfig.internalValue;
    }

    // min_instance_count - computed: true, optional: true, required: false
    private _minInstanceCount?: number; 
    public get minInstanceCount() {
        return this.getNumberAttribute('min_instance_count');
    }
    public set minInstanceCount(value: number) {
        this._minInstanceCount = value;
    }
    public resetMinInstanceCount() {
        this._minInstanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInstanceCountInput() {
        return this._minInstanceCount;
    }

    // network_interface - computed: true, optional: true, required: false
    private _networkInterface = new ClusterNetworkInterfacePropertyOutputReference(this, "network_interface");
    public get networkInterface() {
        return this._networkInterface;
    }
    public putNetworkInterface(value: ClusterNetworkInterfaceProperty) {
        this._networkInterface.internalValue = value;
    }
    public resetNetworkInterface() {
        this._networkInterface.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceInput() {
        return this._networkInterface.internalValue;
    }

    // on_start_deep_health_checks - computed: true, optional: true, required: false
    private _onStartDeepHealthChecks?: string[]; 
    public get onStartDeepHealthChecks() {
        return this.getListAttribute('on_start_deep_health_checks');
    }
    public set onStartDeepHealthChecks(value: string[]) {
        this._onStartDeepHealthChecks = value;
    }
    public resetOnStartDeepHealthChecks() {
        this._onStartDeepHealthChecks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onStartDeepHealthChecksInput() {
        return this._onStartDeepHealthChecks;
    }

    // override_vpc_config - computed: true, optional: true, required: false
    private _overrideVpcConfig = new InstanceGroupsOverrideVpcConfigPropertyOutputReference(this, "override_vpc_config");
    public get overrideVpcConfig() {
        return this._overrideVpcConfig;
    }
    public putOverrideVpcConfig(value: InstanceGroupsOverrideVpcConfigProperty) {
        this._overrideVpcConfig.internalValue = value;
    }
    public resetOverrideVpcConfig() {
        this._overrideVpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideVpcConfigInput() {
        return this._overrideVpcConfig.internalValue;
    }

    // scheduled_update_config - computed: true, optional: true, required: false
    private _scheduledUpdateConfig = new ScheduledUpdateConfigPropertyOutputReference(this, "scheduled_update_config");
    public get scheduledUpdateConfig() {
        return this._scheduledUpdateConfig;
    }
    public putScheduledUpdateConfig(value: ScheduledUpdateConfigProperty) {
        this._scheduledUpdateConfig.internalValue = value;
    }
    public resetScheduledUpdateConfig() {
        this._scheduledUpdateConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledUpdateConfigInput() {
        return this._scheduledUpdateConfig.internalValue;
    }

    // slurm_config - computed: true, optional: true, required: false
    private _slurmConfig = new ClusterSlurmConfigPropertyOutputReference(this, "slurm_config");
    public get slurmConfig() {
        return this._slurmConfig;
    }
    public putSlurmConfig(value: ClusterSlurmConfigProperty) {
        this._slurmConfig.internalValue = value;
    }
    public resetSlurmConfig() {
        this._slurmConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmConfigInput() {
        return this._slurmConfig.internalValue;
    }

    // threads_per_core - computed: true, optional: true, required: false
    private _threadsPerCore?: number; 
    public get threadsPerCore() {
        return this.getNumberAttribute('threads_per_core');
    }
    public set threadsPerCore(value: number) {
        this._threadsPerCore = value;
    }
    public resetThreadsPerCore() {
        this._threadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threadsPerCoreInput() {
        return this._threadsPerCore;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}

export class ClusterInstanceGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : ClusterInstanceGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): ClusterInstanceGroupPropertyOutputReference {
        return new ClusterInstanceGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClusterOrchestratorEksConfigProperty {
    /**
    * The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#cluster_arn CcCluster#cluster_arn}
    */
    readonly clusterArn?: string;
}
export class ClusterOrchestratorEksConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterOrchestratorEksConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterArn = this._clusterArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterOrchestratorEksConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterArn = value.clusterArn;
        }
    }

    // cluster_arn - computed: true, optional: true, required: false
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    public resetClusterArn() {
        this._clusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }
}
export interface AccountingDatabaseProperty {
    /**
    * Hostname or endpoint of the accounting database, such as an RDS endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#endpoint CcCluster#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Name of the accounting database schema. Defaults to slurm_acct_db when omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#name CcCluster#name}
    */
    readonly name?: string;
    /**
    * TCP port of the accounting database. Defaults to 3306 when omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#port CcCluster#port}
    */
    readonly port?: number;
    /**
    * ARN of the Secrets Manager secret holding the database credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#secret_arn CcCluster#secret_arn}
    */
    readonly secretArn?: string;
}
export class AccountingDatabasePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccountingDatabaseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccountingDatabaseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
            this._name = undefined;
            this._port = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
            this._name = value.name;
            this._port = value.port;
            this._secretArn = value.secretArn;
        }
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
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

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface ClusterOrchestratorSlurmConfigProperty {
    /**
    * External MySQL-compatible accounting database that a Slurm cluster's slurmdbd connects to. Database credentials are supplied out-of-band through the referenced Secrets Manager secret. Supported only with Continuous node provisioning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#accounting_database CcCluster#accounting_database}
    */
    readonly accountingDatabase?: AccountingDatabaseProperty;
    /**
    * The strategy for managing Slurm configuration on the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#slurm_config_strategy CcCluster#slurm_config_strategy}
    */
    readonly slurmConfigStrategy?: string;
}
export class ClusterOrchestratorSlurmConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterOrchestratorSlurmConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountingDatabase?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountingDatabase = this._accountingDatabase?.internalValue;
        }
        if (this._slurmConfigStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurmConfigStrategy = this._slurmConfigStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterOrchestratorSlurmConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountingDatabase.internalValue = undefined;
            this._slurmConfigStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountingDatabase.internalValue = value.accountingDatabase;
            this._slurmConfigStrategy = value.slurmConfigStrategy;
        }
    }

    // accounting_database - computed: true, optional: true, required: false
    private _accountingDatabase = new AccountingDatabasePropertyOutputReference(this, "accounting_database");
    public get accountingDatabase() {
        return this._accountingDatabase;
    }
    public putAccountingDatabase(value: AccountingDatabaseProperty) {
        this._accountingDatabase.internalValue = value;
    }
    public resetAccountingDatabase() {
        this._accountingDatabase.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountingDatabaseInput() {
        return this._accountingDatabase.internalValue;
    }

    // slurm_config_strategy - computed: true, optional: true, required: false
    private _slurmConfigStrategy?: string; 
    public get slurmConfigStrategy() {
        return this.getStringAttribute('slurm_config_strategy');
    }
    public set slurmConfigStrategy(value: string) {
        this._slurmConfigStrategy = value;
    }
    public resetSlurmConfigStrategy() {
        this._slurmConfigStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmConfigStrategyInput() {
        return this._slurmConfigStrategy;
    }
}
export interface OrchestratorProperty {
    /**
    * Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#eks CcCluster#eks}
    */
    readonly eks?: ClusterOrchestratorEksConfigProperty;
    /**
    * Specifies parameter(s) related to Slurm as orchestrator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#slurm CcCluster#slurm}
    */
    readonly slurm?: ClusterOrchestratorSlurmConfigProperty;
}
export class OrchestratorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrchestratorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eks = this._eks?.internalValue;
        }
        if (this._slurm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slurm = this._slurm?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrchestratorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eks.internalValue = undefined;
            this._slurm.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eks.internalValue = value.eks;
            this._slurm.internalValue = value.slurm;
        }
    }

    // eks - computed: true, optional: true, required: false
    private _eks = new ClusterOrchestratorEksConfigPropertyOutputReference(this, "eks");
    public get eks() {
        return this._eks;
    }
    public putEks(value: ClusterOrchestratorEksConfigProperty) {
        this._eks.internalValue = value;
    }
    public resetEks() {
        this._eks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eksInput() {
        return this._eks.internalValue;
    }

    // slurm - computed: true, optional: true, required: false
    private _slurm = new ClusterOrchestratorSlurmConfigPropertyOutputReference(this, "slurm");
    public get slurm() {
        return this._slurm;
    }
    public putSlurm(value: ClusterOrchestratorSlurmConfigProperty) {
        this._slurm.internalValue = value;
    }
    public resetSlurm() {
        this._slurm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slurmInput() {
        return this._slurm.internalValue;
    }
}
export interface FSxLustreConfigProperty {
    /**
    * The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#per_unit_storage_throughput CcCluster#per_unit_storage_throughput}
    */
    readonly perUnitStorageThroughput?: number;
    /**
    * The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#size_in_gi_b CcCluster#size_in_gi_b}
    */
    readonly sizeInGiB?: number;
}
export class FSxLustreConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FSxLustreConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._perUnitStorageThroughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.perUnitStorageThroughput = this._perUnitStorageThroughput;
        }
        if (this._sizeInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInGiB = this._sizeInGiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FSxLustreConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._perUnitStorageThroughput = undefined;
            this._sizeInGiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._perUnitStorageThroughput = value.perUnitStorageThroughput;
            this._sizeInGiB = value.sizeInGiB;
        }
    }

    // per_unit_storage_throughput - computed: true, optional: true, required: false
    private _perUnitStorageThroughput?: number; 
    public get perUnitStorageThroughput() {
        return this.getNumberAttribute('per_unit_storage_throughput');
    }
    public set perUnitStorageThroughput(value: number) {
        this._perUnitStorageThroughput = value;
    }
    public resetPerUnitStorageThroughput() {
        this._perUnitStorageThroughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perUnitStorageThroughputInput() {
        return this._perUnitStorageThroughput;
    }

    // size_in_gi_b - computed: true, optional: true, required: false
    private _sizeInGiB?: number; 
    public get sizeInGiB() {
        return this.getNumberAttribute('size_in_gi_b');
    }
    public set sizeInGiB(value: number) {
        this._sizeInGiB = value;
    }
    public resetSizeInGiB() {
        this._sizeInGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInGiBInput() {
        return this._sizeInGiB;
    }
}
export interface EnvironmentConfigProperty {
    /**
    * Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#fsx_lustre_config CcCluster#fsx_lustre_config}
    */
    readonly fsxLustreConfig?: FSxLustreConfigProperty;
}
export class EnvironmentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnvironmentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fsxLustreConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreConfig = this._fsxLustreConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnvironmentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fsxLustreConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fsxLustreConfig.internalValue = value.fsxLustreConfig;
        }
    }

    // fsx_lustre_config - computed: true, optional: true, required: false
    private _fsxLustreConfig = new FSxLustreConfigPropertyOutputReference(this, "fsx_lustre_config");
    public get fsxLustreConfig() {
        return this._fsxLustreConfig;
    }
    public putFsxLustreConfig(value: FSxLustreConfigProperty) {
        this._fsxLustreConfig.internalValue = value;
    }
    public resetFsxLustreConfig() {
        this._fsxLustreConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreConfigInput() {
        return this._fsxLustreConfig.internalValue;
    }
}
export interface EbsVolumeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#root_volume CcCluster#root_volume}
    */
    readonly rootVolume?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#volume_kms_key_id CcCluster#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#volume_size_in_gb CcCluster#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
}
export class EbsVolumeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EbsVolumeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rootVolume !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootVolume = this._rootVolume;
        }
        if (this._volumeKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
        }
        if (this._volumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EbsVolumeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rootVolume = undefined;
            this._volumeKmsKeyId = undefined;
            this._volumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rootVolume = value.rootVolume;
            this._volumeKmsKeyId = value.volumeKmsKeyId;
            this._volumeSizeInGb = value.volumeSizeInGb;
        }
    }

    // root_volume - computed: true, optional: true, required: false
    private _rootVolume?: boolean | cdktn.IResolvable; 
    public get rootVolume() {
        return this.getBooleanAttribute('root_volume');
    }
    public set rootVolume(value: boolean | cdktn.IResolvable) {
        this._rootVolume = value;
    }
    public resetRootVolume() {
        this._rootVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootVolumeInput() {
        return this._rootVolume;
    }

    // volume_kms_key_id - computed: true, optional: true, required: false
    private _volumeKmsKeyId?: string; 
    public get volumeKmsKeyId() {
        return this.getStringAttribute('volume_kms_key_id');
    }
    public set volumeKmsKeyId(value: string) {
        this._volumeKmsKeyId = value;
    }
    public resetVolumeKmsKeyId() {
        this._volumeKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeKmsKeyIdInput() {
        return this._volumeKmsKeyId;
    }

    // volume_size_in_gb - computed: true, optional: true, required: false
    private _volumeSizeInGb?: number; 
    public get volumeSizeInGb() {
        return this.getNumberAttribute('volume_size_in_gb');
    }
    public set volumeSizeInGb(value: number) {
        this._volumeSizeInGb = value;
    }
    public resetVolumeSizeInGb() {
        this._volumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInGbInput() {
        return this._volumeSizeInGb;
    }
}
export interface RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty {
    /**
    * The DNS name of the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#dns_name CcCluster#dns_name}
    */
    readonly dnsName?: string;
    /**
    * The mount name of the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mount_name CcCluster#mount_name}
    */
    readonly mountName?: string;
    /**
    * The mount path for the FSx for Lustre file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mount_path CcCluster#mount_path}
    */
    readonly mountPath?: string;
}
export class RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsName = this._dnsName;
        }
        if (this._mountName !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountName = this._mountName;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsName = undefined;
            this._mountName = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsName = value.dnsName;
            this._mountName = value.mountName;
            this._mountPath = value.mountPath;
        }
    }

    // dns_name - computed: true, optional: true, required: false
    private _dnsName?: string; 
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    public set dnsName(value: string) {
        this._dnsName = value;
    }
    public resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameInput() {
        return this._dnsName;
    }

    // mount_name - computed: true, optional: true, required: false
    private _mountName?: string; 
    public get mountName() {
        return this.getStringAttribute('mount_name');
    }
    public set mountName(value: string) {
        this._mountName = value;
    }
    public resetMountName() {
        this._mountName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountNameInput() {
        return this._mountName;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface FsxOpenZfsConfigProperty {
    /**
    * The DNS name of the FSx for OpenZFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#dns_name CcCluster#dns_name}
    */
    readonly dnsName?: string;
    /**
    * The mount path for the FSx for OpenZFS file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mount_path CcCluster#mount_path}
    */
    readonly mountPath?: string;
}
export class FsxOpenZfsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FsxOpenZfsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsName = this._dnsName;
        }
        if (this._mountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.mountPath = this._mountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FsxOpenZfsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsName = undefined;
            this._mountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsName = value.dnsName;
            this._mountPath = value.mountPath;
        }
    }

    // dns_name - computed: true, optional: true, required: false
    private _dnsName?: string; 
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    public set dnsName(value: string) {
        this._dnsName = value;
    }
    public resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameInput() {
        return this._dnsName;
    }

    // mount_path - computed: true, optional: true, required: false
    private _mountPath?: string; 
    public get mountPath() {
        return this.getStringAttribute('mount_path');
    }
    public set mountPath(value: string) {
        this._mountPath = value;
    }
    public resetMountPath() {
        this._mountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountPathInput() {
        return this._mountPath;
    }
}
export interface InstanceStorageConfigsProperty {
    /**
    * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#ebs_volume_config CcCluster#ebs_volume_config}
    */
    readonly ebsVolumeConfig?: EbsVolumeConfigProperty;
    /**
    * Configuration for mounting an Amazon FSx Lustre file system to the instances in the SageMaker HyperPod cluster instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#fsx_lustre_config CcCluster#fsx_lustre_config}
    */
    readonly fsxLustreConfig?: RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty;
    /**
    * Configuration for mounting an Amazon FSx OpenZFS file system to the instances in the SageMaker HyperPod cluster instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#fsx_open_zfs_config CcCluster#fsx_open_zfs_config}
    */
    readonly fsxOpenZfsConfig?: FsxOpenZfsConfigProperty;
}
export class InstanceStorageConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InstanceStorageConfigsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsVolumeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsVolumeConfig = this._ebsVolumeConfig?.internalValue;
        }
        if (this._fsxLustreConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreConfig = this._fsxLustreConfig?.internalValue;
        }
        if (this._fsxOpenZfsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxOpenZfsConfig = this._fsxOpenZfsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceStorageConfigsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = undefined;
            this._fsxLustreConfig.internalValue = undefined;
            this._fsxOpenZfsConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = value.ebsVolumeConfig;
            this._fsxLustreConfig.internalValue = value.fsxLustreConfig;
            this._fsxOpenZfsConfig.internalValue = value.fsxOpenZfsConfig;
        }
    }

    // ebs_volume_config - computed: true, optional: true, required: false
    private _ebsVolumeConfig = new EbsVolumeConfigPropertyOutputReference(this, "ebs_volume_config");
    public get ebsVolumeConfig() {
        return this._ebsVolumeConfig;
    }
    public putEbsVolumeConfig(value: EbsVolumeConfigProperty) {
        this._ebsVolumeConfig.internalValue = value;
    }
    public resetEbsVolumeConfig() {
        this._ebsVolumeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeConfigInput() {
        return this._ebsVolumeConfig.internalValue;
    }

    // fsx_lustre_config - computed: true, optional: true, required: false
    private _fsxLustreConfig = new RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigPropertyOutputReference(this, "fsx_lustre_config");
    public get fsxLustreConfig() {
        return this._fsxLustreConfig;
    }
    public putFsxLustreConfig(value: RestrictedInstanceGroupsInstanceStorageConfigsFsxLustreConfigProperty) {
        this._fsxLustreConfig.internalValue = value;
    }
    public resetFsxLustreConfig() {
        this._fsxLustreConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreConfigInput() {
        return this._fsxLustreConfig.internalValue;
    }

    // fsx_open_zfs_config - computed: true, optional: true, required: false
    private _fsxOpenZfsConfig = new FsxOpenZfsConfigPropertyOutputReference(this, "fsx_open_zfs_config");
    public get fsxOpenZfsConfig() {
        return this._fsxOpenZfsConfig;
    }
    public putFsxOpenZfsConfig(value: FsxOpenZfsConfigProperty) {
        this._fsxOpenZfsConfig.internalValue = value;
    }
    public resetFsxOpenZfsConfig() {
        this._fsxOpenZfsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxOpenZfsConfigInput() {
        return this._fsxOpenZfsConfig.internalValue;
    }
}

export class InstanceStorageConfigsPropertyList extends cdktn.ComplexList {
    public internalValue? : InstanceStorageConfigsProperty[] | cdktn.IResolvable

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
    public get(index: number): InstanceStorageConfigsPropertyOutputReference {
        return new InstanceStorageConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RestrictedInstanceGroupsOverrideVpcConfigProperty {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#subnets CcCluster#subnets}
    */
    readonly subnets?: string[];
}
export class RestrictedInstanceGroupsOverrideVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestrictedInstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictedInstanceGroupsOverrideVpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
        }
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

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface ClusterRestrictedInstanceGroupProperty {
    /**
    * The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#current_count CcCluster#current_count}
    */
    readonly currentCount?: number;
    /**
    * The configuration for the restricted instance groups (RIG) environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#environment_config CcCluster#environment_config}
    */
    readonly environmentConfig?: EnvironmentConfigProperty;
    /**
    * The execution role for the instance group to assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#execution_role CcCluster#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_count CcCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * The name of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_group_name CcCluster#instance_group_name}
    */
    readonly instanceGroupName?: string;
    /**
    * The instance storage configuration for the instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_storage_configs CcCluster#instance_storage_configs}
    */
    readonly instanceStorageConfigs?: InstanceStorageConfigsProperty[] | cdktn.IResolvable;
    /**
    * The instance type of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_type CcCluster#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks CcCluster#on_start_deep_health_checks}
    */
    readonly onStartDeepHealthChecks?: string[];
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#override_vpc_config CcCluster#override_vpc_config}
    */
    readonly overrideVpcConfig?: RestrictedInstanceGroupsOverrideVpcConfigProperty;
    /**
    * The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#threads_per_core CcCluster#threads_per_core}
    */
    readonly threadsPerCore?: number;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#training_plan_arn CcCluster#training_plan_arn}
    */
    readonly trainingPlanArn?: string;
}
export class ClusterRestrictedInstanceGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClusterRestrictedInstanceGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._currentCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.currentCount = this._currentCount;
        }
        if (this._environmentConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentConfig = this._environmentConfig?.internalValue;
        }
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._instanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceGroupName = this._instanceGroupName;
        }
        if (this._instanceStorageConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceStorageConfigs = this._instanceStorageConfigs?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._onStartDeepHealthChecks !== undefined) {
            hasAnyValues = true;
            internalValueResult.onStartDeepHealthChecks = this._onStartDeepHealthChecks;
        }
        if (this._overrideVpcConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrideVpcConfig = this._overrideVpcConfig?.internalValue;
        }
        if (this._threadsPerCore !== undefined) {
            hasAnyValues = true;
            internalValueResult.threadsPerCore = this._threadsPerCore;
        }
        if (this._trainingPlanArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingPlanArn = this._trainingPlanArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterRestrictedInstanceGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._currentCount = undefined;
            this._environmentConfig.internalValue = undefined;
            this._executionRole = undefined;
            this._instanceCount = undefined;
            this._instanceGroupName = undefined;
            this._instanceStorageConfigs.internalValue = undefined;
            this._instanceType = undefined;
            this._onStartDeepHealthChecks = undefined;
            this._overrideVpcConfig.internalValue = undefined;
            this._threadsPerCore = undefined;
            this._trainingPlanArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._currentCount = value.currentCount;
            this._environmentConfig.internalValue = value.environmentConfig;
            this._executionRole = value.executionRole;
            this._instanceCount = value.instanceCount;
            this._instanceGroupName = value.instanceGroupName;
            this._instanceStorageConfigs.internalValue = value.instanceStorageConfigs;
            this._instanceType = value.instanceType;
            this._onStartDeepHealthChecks = value.onStartDeepHealthChecks;
            this._overrideVpcConfig.internalValue = value.overrideVpcConfig;
            this._threadsPerCore = value.threadsPerCore;
            this._trainingPlanArn = value.trainingPlanArn;
        }
    }

    // current_count - computed: true, optional: true, required: false
    private _currentCount?: number; 
    public get currentCount() {
        return this.getNumberAttribute('current_count');
    }
    public set currentCount(value: number) {
        this._currentCount = value;
    }
    public resetCurrentCount() {
        this._currentCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentCountInput() {
        return this._currentCount;
    }

    // environment_config - computed: true, optional: true, required: false
    private _environmentConfig = new EnvironmentConfigPropertyOutputReference(this, "environment_config");
    public get environmentConfig() {
        return this._environmentConfig;
    }
    public putEnvironmentConfig(value: EnvironmentConfigProperty) {
        this._environmentConfig.internalValue = value;
    }
    public resetEnvironmentConfig() {
        this._environmentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentConfigInput() {
        return this._environmentConfig.internalValue;
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // instance_count - computed: true, optional: true, required: false
    private _instanceCount?: number; 
    public get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number) {
        this._instanceCount = value;
    }
    public resetInstanceCount() {
        this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
        return this._instanceCount;
    }

    // instance_group_name - computed: true, optional: true, required: false
    private _instanceGroupName?: string; 
    public get instanceGroupName() {
        return this.getStringAttribute('instance_group_name');
    }
    public set instanceGroupName(value: string) {
        this._instanceGroupName = value;
    }
    public resetInstanceGroupName() {
        this._instanceGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceGroupNameInput() {
        return this._instanceGroupName;
    }

    // instance_storage_configs - computed: true, optional: true, required: false
    private _instanceStorageConfigs = new InstanceStorageConfigsPropertyList(this, "instance_storage_configs", false);
    public get instanceStorageConfigs() {
        return this._instanceStorageConfigs;
    }
    public putInstanceStorageConfigs(value: InstanceStorageConfigsProperty[] | cdktn.IResolvable) {
        this._instanceStorageConfigs.internalValue = value;
    }
    public resetInstanceStorageConfigs() {
        this._instanceStorageConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceStorageConfigsInput() {
        return this._instanceStorageConfigs.internalValue;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // on_start_deep_health_checks - computed: true, optional: true, required: false
    private _onStartDeepHealthChecks?: string[]; 
    public get onStartDeepHealthChecks() {
        return this.getListAttribute('on_start_deep_health_checks');
    }
    public set onStartDeepHealthChecks(value: string[]) {
        this._onStartDeepHealthChecks = value;
    }
    public resetOnStartDeepHealthChecks() {
        this._onStartDeepHealthChecks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onStartDeepHealthChecksInput() {
        return this._onStartDeepHealthChecks;
    }

    // override_vpc_config - computed: true, optional: true, required: false
    private _overrideVpcConfig = new RestrictedInstanceGroupsOverrideVpcConfigPropertyOutputReference(this, "override_vpc_config");
    public get overrideVpcConfig() {
        return this._overrideVpcConfig;
    }
    public putOverrideVpcConfig(value: RestrictedInstanceGroupsOverrideVpcConfigProperty) {
        this._overrideVpcConfig.internalValue = value;
    }
    public resetOverrideVpcConfig() {
        this._overrideVpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideVpcConfigInput() {
        return this._overrideVpcConfig.internalValue;
    }

    // threads_per_core - computed: true, optional: true, required: false
    private _threadsPerCore?: number; 
    public get threadsPerCore() {
        return this.getNumberAttribute('threads_per_core');
    }
    public set threadsPerCore(value: number) {
        this._threadsPerCore = value;
    }
    public resetThreadsPerCore() {
        this._threadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threadsPerCoreInput() {
        return this._threadsPerCore;
    }

    // training_plan_arn - computed: true, optional: true, required: false
    private _trainingPlanArn?: string; 
    public get trainingPlanArn() {
        return this.getStringAttribute('training_plan_arn');
    }
    public set trainingPlanArn(value: string) {
        this._trainingPlanArn = value;
    }
    public resetTrainingPlanArn() {
        this._trainingPlanArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingPlanArnInput() {
        return this._trainingPlanArn;
    }
}

export class ClusterRestrictedInstanceGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : ClusterRestrictedInstanceGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): ClusterRestrictedInstanceGroupPropertyOutputReference {
        return new ClusterRestrictedInstanceGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty {
    /**
    * The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#per_unit_storage_throughput CcCluster#per_unit_storage_throughput}
    */
    readonly perUnitStorageThroughput?: number;
    /**
    * The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#size_in_gi_b CcCluster#size_in_gi_b}
    */
    readonly sizeInGiB?: number;
}
export class RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._perUnitStorageThroughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.perUnitStorageThroughput = this._perUnitStorageThroughput;
        }
        if (this._sizeInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInGiB = this._sizeInGiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._perUnitStorageThroughput = undefined;
            this._sizeInGiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._perUnitStorageThroughput = value.perUnitStorageThroughput;
            this._sizeInGiB = value.sizeInGiB;
        }
    }

    // per_unit_storage_throughput - computed: true, optional: true, required: false
    private _perUnitStorageThroughput?: number; 
    public get perUnitStorageThroughput() {
        return this.getNumberAttribute('per_unit_storage_throughput');
    }
    public set perUnitStorageThroughput(value: number) {
        this._perUnitStorageThroughput = value;
    }
    public resetPerUnitStorageThroughput() {
        this._perUnitStorageThroughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perUnitStorageThroughputInput() {
        return this._perUnitStorageThroughput;
    }

    // size_in_gi_b - computed: true, optional: true, required: false
    private _sizeInGiB?: number; 
    public get sizeInGiB() {
        return this.getNumberAttribute('size_in_gi_b');
    }
    public set sizeInGiB(value: number) {
        this._sizeInGiB = value;
    }
    public resetSizeInGiB() {
        this._sizeInGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInGiBInput() {
        return this._sizeInGiB;
    }
}
export interface SharedEnvironmentConfigProperty {
    /**
    * Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#fsx_lustre_config CcCluster#fsx_lustre_config}
    */
    readonly fsxLustreConfig?: RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty;
    /**
    * The deletion policy for the shared FSx Lustre file system. Keep retains the FSx when RIGs are deleted. DeleteIfNotUsed deletes the FSx when no RIGs reference it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#fsx_lustre_deletion_policy CcCluster#fsx_lustre_deletion_policy}
    */
    readonly fsxLustreDeletionPolicy?: string;
}
export class SharedEnvironmentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SharedEnvironmentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fsxLustreConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreConfig = this._fsxLustreConfig?.internalValue;
        }
        if (this._fsxLustreDeletionPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxLustreDeletionPolicy = this._fsxLustreDeletionPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SharedEnvironmentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fsxLustreConfig.internalValue = undefined;
            this._fsxLustreDeletionPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fsxLustreConfig.internalValue = value.fsxLustreConfig;
            this._fsxLustreDeletionPolicy = value.fsxLustreDeletionPolicy;
        }
    }

    // fsx_lustre_config - computed: true, optional: true, required: false
    private _fsxLustreConfig = new RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigPropertyOutputReference(this, "fsx_lustre_config");
    public get fsxLustreConfig() {
        return this._fsxLustreConfig;
    }
    public putFsxLustreConfig(value: RestrictedInstanceGroupsConfigSharedEnvironmentConfigFsxLustreConfigProperty) {
        this._fsxLustreConfig.internalValue = value;
    }
    public resetFsxLustreConfig() {
        this._fsxLustreConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreConfigInput() {
        return this._fsxLustreConfig.internalValue;
    }

    // fsx_lustre_deletion_policy - computed: true, optional: true, required: false
    private _fsxLustreDeletionPolicy?: string; 
    public get fsxLustreDeletionPolicy() {
        return this.getStringAttribute('fsx_lustre_deletion_policy');
    }
    public set fsxLustreDeletionPolicy(value: string) {
        this._fsxLustreDeletionPolicy = value;
    }
    public resetFsxLustreDeletionPolicy() {
        this._fsxLustreDeletionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxLustreDeletionPolicyInput() {
        return this._fsxLustreDeletionPolicy;
    }
}
export interface RestrictedInstanceGroupsConfigProperty {
    /**
    * The shared environment configuration for restricted instance groups that use cluster-level shared FSx Lustre storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#shared_environment_config CcCluster#shared_environment_config}
    */
    readonly sharedEnvironmentConfig?: SharedEnvironmentConfigProperty;
}
export class RestrictedInstanceGroupsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestrictedInstanceGroupsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sharedEnvironmentConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharedEnvironmentConfig = this._sharedEnvironmentConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictedInstanceGroupsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sharedEnvironmentConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sharedEnvironmentConfig.internalValue = value.sharedEnvironmentConfig;
        }
    }

    // shared_environment_config - computed: true, optional: true, required: false
    private _sharedEnvironmentConfig = new SharedEnvironmentConfigPropertyOutputReference(this, "shared_environment_config");
    public get sharedEnvironmentConfig() {
        return this._sharedEnvironmentConfig;
    }
    public putSharedEnvironmentConfig(value: SharedEnvironmentConfigProperty) {
        this._sharedEnvironmentConfig.internalValue = value;
    }
    public resetSharedEnvironmentConfig() {
        this._sharedEnvironmentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharedEnvironmentConfigInput() {
        return this._sharedEnvironmentConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#value CcCluster#value}
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
export interface TieredStorageConfigProperty {
    /**
    * The percentage of instance memory to allocate for tiered storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#instance_memory_allocation_percentage CcCluster#instance_memory_allocation_percentage}
    */
    readonly instanceMemoryAllocationPercentage?: number;
    /**
    * The mode of tiered storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#mode CcCluster#mode}
    */
    readonly mode?: string;
}
export class TieredStorageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TieredStorageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceMemoryAllocationPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceMemoryAllocationPercentage = this._instanceMemoryAllocationPercentage;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TieredStorageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceMemoryAllocationPercentage = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceMemoryAllocationPercentage = value.instanceMemoryAllocationPercentage;
            this._mode = value.mode;
        }
    }

    // instance_memory_allocation_percentage - computed: true, optional: true, required: false
    private _instanceMemoryAllocationPercentage?: number; 
    public get instanceMemoryAllocationPercentage() {
        return this.getNumberAttribute('instance_memory_allocation_percentage');
    }
    public set instanceMemoryAllocationPercentage(value: number) {
        this._instanceMemoryAllocationPercentage = value;
    }
    public resetInstanceMemoryAllocationPercentage() {
        this._instanceMemoryAllocationPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMemoryAllocationPercentageInput() {
        return this._instanceMemoryAllocationPercentage;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }
}
export interface VpcConfigProperty {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/sagemaker_cluster#subnets CcCluster#subnets}
    */
    readonly subnets?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
        }
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

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
}
