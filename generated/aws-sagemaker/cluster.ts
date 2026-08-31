// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration for cluster auto-scaling
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#auto_scaling CcCluster#auto_scaling}
    */
    readonly autoScaling?: CcCluster.ClusterAutoScalingConfigProperty;
    /**
    * The name of the HyperPod Cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#cluster_name CcCluster#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * The cluster role for the autoscaler to assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#cluster_role CcCluster#cluster_role}
    */
    readonly clusterRole?: string;
    /**
    * The instance groups of the SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_groups CcCluster#instance_groups}
    */
    readonly instanceGroups?: CcCluster.ClusterInstanceGroupProperty[] | cdktn.IResolvable;
    /**
    * Determines the scaling strategy for the SageMaker HyperPod cluster. When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#node_provisioning_mode CcCluster#node_provisioning_mode}
    */
    readonly nodeProvisioningMode?: string;
    /**
    * If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. If set to false, nodes will be labelled when a fault is detected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#node_recovery CcCluster#node_recovery}
    */
    readonly nodeRecovery?: string;
    /**
    * Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#orchestrator CcCluster#orchestrator}
    */
    readonly orchestrator?: CcCluster.OrchestratorProperty;
    /**
    * The restricted instance groups of the SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#restricted_instance_groups CcCluster#restricted_instance_groups}
    */
    readonly restrictedInstanceGroups?: CcCluster.ClusterRestrictedInstanceGroupProperty[] | cdktn.IResolvable;
    /**
    * Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. You can add tags to your cluster in the same way you add them in other AWS services that support tagging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * Configuration for tiered storage in the SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#tiered_storage_config CcCluster#tiered_storage_config}
    */
    readonly tieredStorageConfig?: CcCluster.TieredStorageConfigProperty;
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#vpc_config CcCluster#vpc_config}
    */
    readonly vpcConfig?: CcCluster.VpcConfigProperty2;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster awscc_sagemaker_cluster}
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
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster awscc_sagemaker_cluster} Resource
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
        this._autoScaling.internalValue = config.autoScaling;
        this._clusterName = config.clusterName;
        this._clusterRole = config.clusterRole;
        this._instanceGroups.internalValue = config.instanceGroups;
        this._nodeProvisioningMode = config.nodeProvisioningMode;
        this._nodeRecovery = config.nodeRecovery;
        this._orchestrator.internalValue = config.orchestrator;
        this._restrictedInstanceGroups.internalValue = config.restrictedInstanceGroups;
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
    private _vpcConfig = new CcCluster.VpcConfigProperty2OutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcCluster.VpcConfigProperty2) {
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
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            tiered_storage_config: ccClusterTieredStorageConfigPropertyToTerraform(this._tieredStorageConfig.internalValue),
            vpc_config: ccClusterVpcConfigProperty2ToTerraform(this._vpcConfig.internalValue),
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
                value: ccClusterVpcConfigProperty2ToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.VpcConfigProperty2",
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


export function ccClusterClusterInstanceStorageConfigPropertyToTerraform(struct?: CcCluster.ClusterInstanceStorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_volume_config: ccClusterClusterEbsVolumeConfigPropertyToTerraform(struct!.ebsVolumeConfig),
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


export function ccClusterRollbackMaximumBatchSizePropertyToTerraform(struct?: CcCluster.RollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccClusterRollbackMaximumBatchSizePropertyToHclTerraform(struct?: CcCluster.RollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
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
        rollback_maximum_batch_size: ccClusterRollbackMaximumBatchSizePropertyToTerraform(struct!.rollbackMaximumBatchSize),
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
            value: ccClusterRollbackMaximumBatchSizePropertyToHclTerraform(struct!.rollbackMaximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "RollbackMaximumBatchSizeProperty",
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


export function ccClusterScheduledUpdateConfigPropertyToTerraform(struct?: CcCluster.ScheduledUpdateConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_config: ccClusterDeploymentConfigPropertyToTerraform(struct!.deploymentConfig),
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
            value: ccClusterDeploymentConfigPropertyToHclTerraform(struct!.deploymentConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DeploymentConfigProperty",
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


export function ccClusterClusterInstanceGroupPropertyToTerraform(struct?: CcCluster.ClusterInstanceGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_requirements: ccClusterClusterCapacityRequirementsPropertyToTerraform(struct!.capacityRequirements),
        current_count: cdktn.numberToTerraform(struct!.currentCount),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        image_id: cdktn.stringToTerraform(struct!.imageId),
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
        instance_storage_configs: cdktn.listMapper(ccClusterClusterInstanceStorageConfigPropertyToTerraform, false)(struct!.instanceStorageConfigs),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        kubernetes_config: ccClusterClusterKubernetesConfigPropertyToTerraform(struct!.kubernetesConfig),
        life_cycle_config: ccClusterClusterLifeCycleConfigPropertyToTerraform(struct!.lifeCycleConfig),
        min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
        on_start_deep_health_checks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.onStartDeepHealthChecks),
        override_vpc_config: ccClusterVpcConfigPropertyToTerraform(struct!.overrideVpcConfig),
        scheduled_update_config: ccClusterScheduledUpdateConfigPropertyToTerraform(struct!.scheduledUpdateConfig),
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
        on_start_deep_health_checks: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.onStartDeepHealthChecks),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        override_vpc_config: {
            value: ccClusterVpcConfigPropertyToHclTerraform(struct!.overrideVpcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigProperty",
        },
        scheduled_update_config: {
            value: ccClusterScheduledUpdateConfigPropertyToHclTerraform(struct!.scheduledUpdateConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduledUpdateConfigProperty",
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


export function ccClusterOrchestratorPropertyToTerraform(struct?: CcCluster.OrchestratorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eks: ccClusterClusterOrchestratorEksConfigPropertyToTerraform(struct!.eks),
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


export function ccClusterInstanceStorageConfigsPropertyToTerraform(struct?: CcCluster.InstanceStorageConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_volume_config: ccClusterEbsVolumeConfigPropertyToTerraform(struct!.ebsVolumeConfig),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterOverrideVpcConfigPropertyToTerraform(struct?: CcCluster.OverrideVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccClusterOverrideVpcConfigPropertyToHclTerraform(struct?: CcCluster.OverrideVpcConfigProperty | cdktn.IResolvable): any {
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
        override_vpc_config: ccClusterOverrideVpcConfigPropertyToTerraform(struct!.overrideVpcConfig),
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
            value: ccClusterOverrideVpcConfigPropertyToHclTerraform(struct!.overrideVpcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideVpcConfigProperty",
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


export function ccClusterVpcConfigProperty2ToTerraform(struct?: CcCluster.VpcConfigProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccClusterVpcConfigProperty2ToHclTerraform(struct?: CcCluster.VpcConfigProperty2 | cdktn.IResolvable): any {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#auto_scaler_type CcCluster#auto_scaler_type}
    */
    readonly autoScalerType?: string;
    /**
    * The auto-scaling mode for the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#mode CcCluster#mode}
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
export interface ClusterCapacityRequirementsProperty {
    /**
    * Options for OnDemand capacity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_demand CcCluster#on_demand}
    */
    readonly onDemand?: string;
    /**
    * Options for Spot capacity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#spot CcCluster#spot}
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
export interface ClusterEbsVolumeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#root_volume CcCluster#root_volume}
    */
    readonly rootVolume?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_kms_key_id CcCluster#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_size_in_gb CcCluster#volume_size_in_gb}
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
export interface ClusterInstanceStorageConfigProperty {
    /**
    * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#ebs_volume_config CcCluster#ebs_volume_config}
    */
    readonly ebsVolumeConfig?: ClusterEbsVolumeConfigProperty;
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterInstanceStorageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = value.ebsVolumeConfig;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#effect CcCluster#effect}
    */
    readonly effect?: string;
    /**
    * The key of the taint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The value of the taint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value CcCluster#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#labels CcCluster#labels}
    */
    readonly labels?: { [key: string]: string };
    /**
    * A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#taints CcCluster#taints}
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
    * The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_create CcCluster#on_create}
    */
    readonly onCreate?: string;
    /**
    * An Amazon S3 bucket path where your lifecycle scripts are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#source_s3_uri CcCluster#source_s3_uri}
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
export interface VpcConfigProperty {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#subnets CcCluster#subnets}
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
export interface AlarmDetailsProperty {
    /**
    * The name of the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#alarm_name CcCluster#alarm_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#type CcCluster#type}
    */
    readonly type?: string;
    /**
    * Specifies the amount or percentage of instances SageMaker updates at a time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value CcCluster#value}
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
export interface RollbackMaximumBatchSizeProperty {
    /**
    * Specifies whether SageMaker should process the update by amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#type CcCluster#type}
    */
    readonly type?: string;
    /**
    * Specifies the amount or percentage of instances SageMaker updates at a time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value CcCluster#value}
    */
    readonly value?: number;
}
export class RollbackMaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#maximum_batch_size CcCluster#maximum_batch_size}
    */
    readonly maximumBatchSize?: CapacitySizeConfigProperty;
    /**
    * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#rollback_maximum_batch_size CcCluster#rollback_maximum_batch_size}
    */
    readonly rollbackMaximumBatchSize?: RollbackMaximumBatchSizeProperty;
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
    private _rollbackMaximumBatchSize = new RollbackMaximumBatchSizePropertyOutputReference(this, "rollback_maximum_batch_size");
    public get rollbackMaximumBatchSize() {
        return this._rollbackMaximumBatchSize;
    }
    public putRollbackMaximumBatchSize(value: RollbackMaximumBatchSizeProperty) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#auto_rollback_configuration CcCluster#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: AlarmDetailsProperty[] | cdktn.IResolvable;
    /**
    * The policy that SageMaker uses when updating the AMI versions of the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#rolling_update_policy CcCluster#rolling_update_policy}
    */
    readonly rollingUpdatePolicy?: RollingUpdatePolicyProperty;
    /**
    * The duration in seconds that SageMaker waits before updating more instances in the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#wait_interval_in_seconds CcCluster#wait_interval_in_seconds}
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
export interface ScheduledUpdateConfigProperty {
    /**
    * The configuration to use when updating the AMI versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#deployment_config CcCluster#deployment_config}
    */
    readonly deploymentConfig?: DeploymentConfigProperty;
    /**
    * A cron expression that specifies the schedule that SageMaker follows when updating the AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#schedule_expression CcCluster#schedule_expression}
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
export interface ClusterInstanceGroupProperty {
    /**
    * Specifies the capacity requirements configuration for an instance group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#capacity_requirements CcCluster#capacity_requirements}
    */
    readonly capacityRequirements?: ClusterCapacityRequirementsProperty;
    /**
    * The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#current_count CcCluster#current_count}
    */
    readonly currentCount?: number;
    /**
    * The execution role for the instance group to assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#execution_role CcCluster#execution_role}
    */
    readonly executionRole?: string;
    /**
    * AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#image_id CcCluster#image_id}
    */
    readonly imageId?: string;
    /**
    * The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_count CcCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * The name of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_group_name CcCluster#instance_group_name}
    */
    readonly instanceGroupName?: string;
    /**
    * The instance storage configuration for the instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_storage_configs CcCluster#instance_storage_configs}
    */
    readonly instanceStorageConfigs?: ClusterInstanceStorageConfigProperty[] | cdktn.IResolvable;
    /**
    * The instance type of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_type CcCluster#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Kubernetes configuration for cluster nodes including labels and taints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#kubernetes_config CcCluster#kubernetes_config}
    */
    readonly kubernetesConfig?: ClusterKubernetesConfigProperty;
    /**
    * The lifecycle configuration for a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#life_cycle_config CcCluster#life_cycle_config}
    */
    readonly lifeCycleConfig?: ClusterLifeCycleConfigProperty;
    /**
    * The minimum number of instances required for the instance group to be InService. MinInstanceCount must be less than or equal to InstanceCount.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#min_instance_count CcCluster#min_instance_count}
    */
    readonly minInstanceCount?: number;
    /**
    * Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks CcCluster#on_start_deep_health_checks}
    */
    readonly onStartDeepHealthChecks?: string[];
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#override_vpc_config CcCluster#override_vpc_config}
    */
    readonly overrideVpcConfig?: VpcConfigProperty;
    /**
    * The configuration object of the schedule that SageMaker follows when updating the AMI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#scheduled_update_config CcCluster#scheduled_update_config}
    */
    readonly scheduledUpdateConfig?: ScheduledUpdateConfigProperty;
    /**
    * The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#threads_per_core CcCluster#threads_per_core}
    */
    readonly threadsPerCore?: number;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#training_plan_arn CcCluster#training_plan_arn}
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
            this._capacityRequirements.internalValue = undefined;
            this._currentCount = undefined;
            this._executionRole = undefined;
            this._imageId = undefined;
            this._instanceCount = undefined;
            this._instanceGroupName = undefined;
            this._instanceStorageConfigs.internalValue = undefined;
            this._instanceType = undefined;
            this._kubernetesConfig.internalValue = undefined;
            this._lifeCycleConfig.internalValue = undefined;
            this._minInstanceCount = undefined;
            this._onStartDeepHealthChecks = undefined;
            this._overrideVpcConfig.internalValue = undefined;
            this._scheduledUpdateConfig.internalValue = undefined;
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
            this._capacityRequirements.internalValue = value.capacityRequirements;
            this._currentCount = value.currentCount;
            this._executionRole = value.executionRole;
            this._imageId = value.imageId;
            this._instanceCount = value.instanceCount;
            this._instanceGroupName = value.instanceGroupName;
            this._instanceStorageConfigs.internalValue = value.instanceStorageConfigs;
            this._instanceType = value.instanceType;
            this._kubernetesConfig.internalValue = value.kubernetesConfig;
            this._lifeCycleConfig.internalValue = value.lifeCycleConfig;
            this._minInstanceCount = value.minInstanceCount;
            this._onStartDeepHealthChecks = value.onStartDeepHealthChecks;
            this._overrideVpcConfig.internalValue = value.overrideVpcConfig;
            this._scheduledUpdateConfig.internalValue = value.scheduledUpdateConfig;
            this._threadsPerCore = value.threadsPerCore;
            this._trainingPlanArn = value.trainingPlanArn;
        }
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
    private _overrideVpcConfig = new VpcConfigPropertyOutputReference(this, "override_vpc_config");
    public get overrideVpcConfig() {
        return this._overrideVpcConfig;
    }
    public putOverrideVpcConfig(value: VpcConfigProperty) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#cluster_arn CcCluster#cluster_arn}
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
export interface OrchestratorProperty {
    /**
    * Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#eks CcCluster#eks}
    */
    readonly eks?: ClusterOrchestratorEksConfigProperty;
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrchestratorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eks.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eks.internalValue = value.eks;
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
}
export interface FSxLustreConfigProperty {
    /**
    * The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#per_unit_storage_throughput CcCluster#per_unit_storage_throughput}
    */
    readonly perUnitStorageThroughput?: number;
    /**
    * The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#size_in_gi_b CcCluster#size_in_gi_b}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#fsx_lustre_config CcCluster#fsx_lustre_config}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#root_volume CcCluster#root_volume}
    */
    readonly rootVolume?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_kms_key_id CcCluster#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#volume_size_in_gb CcCluster#volume_size_in_gb}
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
export interface InstanceStorageConfigsProperty {
    /**
    * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#ebs_volume_config CcCluster#ebs_volume_config}
    */
    readonly ebsVolumeConfig?: EbsVolumeConfigProperty;
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceStorageConfigsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsVolumeConfig.internalValue = value.ebsVolumeConfig;
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
export interface OverrideVpcConfigProperty {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#subnets CcCluster#subnets}
    */
    readonly subnets?: string[];
}
export class OverrideVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideVpcConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: OverrideVpcConfigProperty | cdktn.IResolvable | undefined) {
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#current_count CcCluster#current_count}
    */
    readonly currentCount?: number;
    /**
    * The configuration for the restricted instance groups (RIG) environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#environment_config CcCluster#environment_config}
    */
    readonly environmentConfig?: EnvironmentConfigProperty;
    /**
    * The execution role for the instance group to assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#execution_role CcCluster#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_count CcCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * The name of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_group_name CcCluster#instance_group_name}
    */
    readonly instanceGroupName?: string;
    /**
    * The instance storage configuration for the instance group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_storage_configs CcCluster#instance_storage_configs}
    */
    readonly instanceStorageConfigs?: InstanceStorageConfigsProperty[] | cdktn.IResolvable;
    /**
    * The instance type of the instance group of a SageMaker HyperPod cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_type CcCluster#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#on_start_deep_health_checks CcCluster#on_start_deep_health_checks}
    */
    readonly onStartDeepHealthChecks?: string[];
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#override_vpc_config CcCluster#override_vpc_config}
    */
    readonly overrideVpcConfig?: OverrideVpcConfigProperty;
    /**
    * The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#threads_per_core CcCluster#threads_per_core}
    */
    readonly threadsPerCore?: number;
    /**
    * The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#training_plan_arn CcCluster#training_plan_arn}
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
    private _overrideVpcConfig = new OverrideVpcConfigPropertyOutputReference(this, "override_vpc_config");
    public get overrideVpcConfig() {
        return this._overrideVpcConfig;
    }
    public putOverrideVpcConfig(value: OverrideVpcConfigProperty) {
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
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#value CcCluster#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#instance_memory_allocation_percentage CcCluster#instance_memory_allocation_percentage}
    */
    readonly instanceMemoryAllocationPercentage?: number;
    /**
    * The mode of tiered storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#mode CcCluster#mode}
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
export interface VpcConfigProperty2 {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_cluster#subnets CcCluster#subnets}
    */
    readonly subnets?: string[];
}
export class VpcConfigProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty2 | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VpcConfigProperty2 | cdktn.IResolvable | undefined) {
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
