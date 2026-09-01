// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * An object representing the Access Config to use for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#access_config CcCluster#access_config}
    */
    readonly accessConfig?: CcCluster.AccessConfigProperty;
    /**
    * Set this value to false to avoid creating the default networking add-ons when the cluster is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#bootstrap_self_managed_addons CcCluster#bootstrap_self_managed_addons}
    */
    readonly bootstrapSelfManagedAddons?: boolean | cdktn.IResolvable;
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#compute_config CcCluster#compute_config}
    */
    readonly computeConfig?: CcCluster.ComputeConfigProperty;
    /**
    * Configuration for provisioned control plane scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_scaling_config CcCluster#control_plane_scaling_config}
    */
    readonly controlPlaneScalingConfig?: CcCluster.ControlPlaneScalingConfigProperty;
    /**
    * Set this value to true to enable deletion protection for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#deletion_protection CcCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#encryption_config CcCluster#encryption_config}
    */
    readonly encryptionConfig?: CcCluster.EncryptionConfigProperty[] | cdktn.IResolvable;
    /**
    * Force cluster version update
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#force CcCluster#force}
    */
    readonly force?: boolean | cdktn.IResolvable;
    /**
    * The configuration for the Kubernetes API server on an Amazon EKS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kube_api_server_config CcCluster#kube_api_server_config}
    */
    readonly kubeApiServerConfig?: CcCluster.KubeApiServerConfigProperty;
    /**
    * The configuration for the Kubernetes controller manager on an Amazon EKS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kube_controller_manager_config CcCluster#kube_controller_manager_config}
    */
    readonly kubeControllerManagerConfig?: CcCluster.KubeControllerManagerConfigProperty;
    /**
    * The configuration for the Kubernetes scheduler on an Amazon EKS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kube_scheduler_config CcCluster#kube_scheduler_config}
    */
    readonly kubeSchedulerConfig?: CcCluster.KubeSchedulerConfigProperty;
    /**
    * The Kubernetes network configuration for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#kubernetes_network_config CcCluster#kubernetes_network_config}
    */
    readonly kubernetesNetworkConfig?: CcCluster.KubernetesNetworkConfigProperty;
    /**
    * Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. By default, cluster control plane logs aren't exported to CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#logging CcCluster#logging}
    */
    readonly logging?: CcCluster.LoggingProperty;
    /**
    * The unique name to give to your cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#name CcCluster#name}
    */
    readonly name?: string;
    /**
    * An object representing the Outpost configuration to use for AWS EKS outpost cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#outpost_config CcCluster#outpost_config}
    */
    readonly outpostConfig?: CcCluster.OutpostConfigProperty;
    /**
    * Configuration fields for specifying on-premises node and pod CIDRs that are external to the VPC passed during cluster creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#remote_network_config CcCluster#remote_network_config}
    */
    readonly remoteNetworkConfig?: CcCluster.RemoteNetworkConfigProperty;
    /**
    * An object representing the VPC configuration to use for an Amazon EKS cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#resources_vpc_config CcCluster#resources_vpc_config}
    */
    readonly resourcesVpcConfig: CcCluster.ResourcesVpcConfigProperty;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#role_arn CcCluster#role_arn}
    */
    readonly roleArn: string;
    /**
    * The rollback configuration to use for the cluster version rollback.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#rollback_config CcCluster#rollback_config}
    */
    readonly rollbackConfig?: CcCluster.RollbackConfigProperty;
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#storage_config CcCluster#storage_config}
    */
    readonly storageConfig?: CcCluster.StorageConfigProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * An object representing the Upgrade Policy to use for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#upgrade_policy CcCluster#upgrade_policy}
    */
    readonly upgradePolicy?: CcCluster.UpgradePolicyProperty;
    /**
    * The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#version CcCluster#version}
    */
    readonly version?: string;
    /**
    * The current zonal shift configuration to use for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#zonal_shift_config CcCluster#zonal_shift_config}
    */
    readonly zonalShiftConfig?: CcCluster.ZonalShiftConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster awscc_eks_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eks_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster awscc_eks_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eks_cluster',
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
        this._accessConfig.internalValue = config.accessConfig;
        this._bootstrapSelfManagedAddons = config.bootstrapSelfManagedAddons;
        this._computeConfig.internalValue = config.computeConfig;
        this._controlPlaneScalingConfig.internalValue = config.controlPlaneScalingConfig;
        this._deletionProtection = config.deletionProtection;
        this._encryptionConfig.internalValue = config.encryptionConfig;
        this._force = config.force;
        this._kubeApiServerConfig.internalValue = config.kubeApiServerConfig;
        this._kubeControllerManagerConfig.internalValue = config.kubeControllerManagerConfig;
        this._kubeSchedulerConfig.internalValue = config.kubeSchedulerConfig;
        this._kubernetesNetworkConfig.internalValue = config.kubernetesNetworkConfig;
        this._logging.internalValue = config.logging;
        this._name = config.name;
        this._outpostConfig.internalValue = config.outpostConfig;
        this._remoteNetworkConfig.internalValue = config.remoteNetworkConfig;
        this._resourcesVpcConfig.internalValue = config.resourcesVpcConfig;
        this._roleArn = config.roleArn;
        this._rollbackConfig.internalValue = config.rollbackConfig;
        this._storageConfig.internalValue = config.storageConfig;
        this._tags.internalValue = config.tags;
        this._upgradePolicy.internalValue = config.upgradePolicy;
        this._version = config.version;
        this._zonalShiftConfig.internalValue = config.zonalShiftConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_config - computed: true, optional: true, required: false
    private _accessConfig = new CcCluster.AccessConfigPropertyOutputReference(this, "access_config");
    public get accessConfig() {
        return this._accessConfig;
    }
    public putAccessConfig(value: CcCluster.AccessConfigProperty) {
        this._accessConfig.internalValue = value;
    }
    public resetAccessConfig() {
        this._accessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessConfigInput() {
        return this._accessConfig.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // bootstrap_self_managed_addons - computed: true, optional: true, required: false
    private _bootstrapSelfManagedAddons?: boolean | cdktn.IResolvable; 
    public get bootstrapSelfManagedAddons() {
        return this.getBooleanAttribute('bootstrap_self_managed_addons');
    }
    public set bootstrapSelfManagedAddons(value: boolean | cdktn.IResolvable) {
        this._bootstrapSelfManagedAddons = value;
    }
    public resetBootstrapSelfManagedAddons() {
        this._bootstrapSelfManagedAddons = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bootstrapSelfManagedAddonsInput() {
        return this._bootstrapSelfManagedAddons;
    }

    // certificate_authority_data - computed: true, optional: false, required: false
    public get certificateAuthorityData() {
        return this.getStringAttribute('certificate_authority_data');
    }

    // cluster_id - computed: true, optional: false, required: false
    public get clusterId() {
        return this.getStringAttribute('cluster_id');
    }

    // cluster_security_group_id - computed: true, optional: false, required: false
    public get clusterSecurityGroupId() {
        return this.getStringAttribute('cluster_security_group_id');
    }

    // compute_config - computed: true, optional: true, required: false
    private _computeConfig = new CcCluster.ComputeConfigPropertyOutputReference(this, "compute_config");
    public get computeConfig() {
        return this._computeConfig;
    }
    public putComputeConfig(value: CcCluster.ComputeConfigProperty) {
        this._computeConfig.internalValue = value;
    }
    public resetComputeConfig() {
        this._computeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeConfigInput() {
        return this._computeConfig.internalValue;
    }

    // control_plane_scaling_config - computed: true, optional: true, required: false
    private _controlPlaneScalingConfig = new CcCluster.ControlPlaneScalingConfigPropertyOutputReference(this, "control_plane_scaling_config");
    public get controlPlaneScalingConfig() {
        return this._controlPlaneScalingConfig;
    }
    public putControlPlaneScalingConfig(value: CcCluster.ControlPlaneScalingConfigProperty) {
        this._controlPlaneScalingConfig.internalValue = value;
    }
    public resetControlPlaneScalingConfig() {
        this._controlPlaneScalingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPlaneScalingConfigInput() {
        return this._controlPlaneScalingConfig.internalValue;
    }

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: boolean | cdktn.IResolvable; 
    public get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    public set deletionProtection(value: boolean | cdktn.IResolvable) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
    }

    // encryption_config - computed: true, optional: true, required: false
    private _encryptionConfig = new CcCluster.EncryptionConfigPropertyList(this, "encryption_config", false);
    public get encryptionConfig() {
        return this._encryptionConfig;
    }
    public putEncryptionConfig(value: CcCluster.EncryptionConfigProperty[] | cdktn.IResolvable) {
        this._encryptionConfig.internalValue = value;
    }
    public resetEncryptionConfig() {
        this._encryptionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigInput() {
        return this._encryptionConfig.internalValue;
    }

    // encryption_config_key_arn - computed: true, optional: false, required: false
    public get encryptionConfigKeyArn() {
        return this.getStringAttribute('encryption_config_key_arn');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }

    // force - computed: true, optional: true, required: false
    private _force?: boolean | cdktn.IResolvable; 
    public get force() {
        return this.getBooleanAttribute('force');
    }
    public set force(value: boolean | cdktn.IResolvable) {
        this._force = value;
    }
    public resetForce() {
        this._force = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceInput() {
        return this._force;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kube_api_server_config - computed: true, optional: true, required: false
    private _kubeApiServerConfig = new CcCluster.KubeApiServerConfigPropertyOutputReference(this, "kube_api_server_config");
    public get kubeApiServerConfig() {
        return this._kubeApiServerConfig;
    }
    public putKubeApiServerConfig(value: CcCluster.KubeApiServerConfigProperty) {
        this._kubeApiServerConfig.internalValue = value;
    }
    public resetKubeApiServerConfig() {
        this._kubeApiServerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubeApiServerConfigInput() {
        return this._kubeApiServerConfig.internalValue;
    }

    // kube_controller_manager_config - computed: true, optional: true, required: false
    private _kubeControllerManagerConfig = new CcCluster.KubeControllerManagerConfigPropertyOutputReference(this, "kube_controller_manager_config");
    public get kubeControllerManagerConfig() {
        return this._kubeControllerManagerConfig;
    }
    public putKubeControllerManagerConfig(value: CcCluster.KubeControllerManagerConfigProperty) {
        this._kubeControllerManagerConfig.internalValue = value;
    }
    public resetKubeControllerManagerConfig() {
        this._kubeControllerManagerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubeControllerManagerConfigInput() {
        return this._kubeControllerManagerConfig.internalValue;
    }

    // kube_scheduler_config - computed: true, optional: true, required: false
    private _kubeSchedulerConfig = new CcCluster.KubeSchedulerConfigPropertyOutputReference(this, "kube_scheduler_config");
    public get kubeSchedulerConfig() {
        return this._kubeSchedulerConfig;
    }
    public putKubeSchedulerConfig(value: CcCluster.KubeSchedulerConfigProperty) {
        this._kubeSchedulerConfig.internalValue = value;
    }
    public resetKubeSchedulerConfig() {
        this._kubeSchedulerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubeSchedulerConfigInput() {
        return this._kubeSchedulerConfig.internalValue;
    }

    // kubernetes_network_config - computed: true, optional: true, required: false
    private _kubernetesNetworkConfig = new CcCluster.KubernetesNetworkConfigPropertyOutputReference(this, "kubernetes_network_config");
    public get kubernetesNetworkConfig() {
        return this._kubernetesNetworkConfig;
    }
    public putKubernetesNetworkConfig(value: CcCluster.KubernetesNetworkConfigProperty) {
        this._kubernetesNetworkConfig.internalValue = value;
    }
    public resetKubernetesNetworkConfig() {
        this._kubernetesNetworkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kubernetesNetworkConfigInput() {
        return this._kubernetesNetworkConfig.internalValue;
    }

    // logging - computed: true, optional: true, required: false
    private _logging = new CcCluster.LoggingPropertyOutputReference(this, "logging");
    public get logging() {
        return this._logging;
    }
    public putLogging(value: CcCluster.LoggingProperty) {
        this._logging.internalValue = value;
    }
    public resetLogging() {
        this._logging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
        return this._logging.internalValue;
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

    // open_id_connect_issuer_url - computed: true, optional: false, required: false
    public get openIdConnectIssuerUrl() {
        return this.getStringAttribute('open_id_connect_issuer_url');
    }

    // outpost_config - computed: true, optional: true, required: false
    private _outpostConfig = new CcCluster.OutpostConfigPropertyOutputReference(this, "outpost_config");
    public get outpostConfig() {
        return this._outpostConfig;
    }
    public putOutpostConfig(value: CcCluster.OutpostConfigProperty) {
        this._outpostConfig.internalValue = value;
    }
    public resetOutpostConfig() {
        this._outpostConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostConfigInput() {
        return this._outpostConfig.internalValue;
    }

    // remote_network_config - computed: true, optional: true, required: false
    private _remoteNetworkConfig = new CcCluster.RemoteNetworkConfigPropertyOutputReference(this, "remote_network_config");
    public get remoteNetworkConfig() {
        return this._remoteNetworkConfig;
    }
    public putRemoteNetworkConfig(value: CcCluster.RemoteNetworkConfigProperty) {
        this._remoteNetworkConfig.internalValue = value;
    }
    public resetRemoteNetworkConfig() {
        this._remoteNetworkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteNetworkConfigInput() {
        return this._remoteNetworkConfig.internalValue;
    }

    // resources_vpc_config - computed: false, optional: false, required: true
    private _resourcesVpcConfig = new CcCluster.ResourcesVpcConfigPropertyOutputReference(this, "resources_vpc_config");
    public get resourcesVpcConfig() {
        return this._resourcesVpcConfig;
    }
    public putResourcesVpcConfig(value: CcCluster.ResourcesVpcConfigProperty) {
        this._resourcesVpcConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesVpcConfigInput() {
        return this._resourcesVpcConfig.internalValue;
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

    // rollback_config - computed: true, optional: true, required: false
    private _rollbackConfig = new CcCluster.RollbackConfigPropertyOutputReference(this, "rollback_config");
    public get rollbackConfig() {
        return this._rollbackConfig;
    }
    public putRollbackConfig(value: CcCluster.RollbackConfigProperty) {
        this._rollbackConfig.internalValue = value;
    }
    public resetRollbackConfig() {
        this._rollbackConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackConfigInput() {
        return this._rollbackConfig.internalValue;
    }

    // storage_config - computed: true, optional: true, required: false
    private _storageConfig = new CcCluster.StorageConfigPropertyOutputReference(this, "storage_config");
    public get storageConfig() {
        return this._storageConfig;
    }
    public putStorageConfig(value: CcCluster.StorageConfigProperty) {
        this._storageConfig.internalValue = value;
    }
    public resetStorageConfig() {
        this._storageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigInput() {
        return this._storageConfig.internalValue;
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

    // upgrade_policy - computed: true, optional: true, required: false
    private _upgradePolicy = new CcCluster.UpgradePolicyPropertyOutputReference(this, "upgrade_policy");
    public get upgradePolicy() {
        return this._upgradePolicy;
    }
    public putUpgradePolicy(value: CcCluster.UpgradePolicyProperty) {
        this._upgradePolicy.internalValue = value;
    }
    public resetUpgradePolicy() {
        this._upgradePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upgradePolicyInput() {
        return this._upgradePolicy.internalValue;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }

    // zonal_shift_config - computed: true, optional: true, required: false
    private _zonalShiftConfig = new CcCluster.ZonalShiftConfigPropertyOutputReference(this, "zonal_shift_config");
    public get zonalShiftConfig() {
        return this._zonalShiftConfig;
    }
    public putZonalShiftConfig(value: CcCluster.ZonalShiftConfigProperty) {
        this._zonalShiftConfig.internalValue = value;
    }
    public resetZonalShiftConfig() {
        this._zonalShiftConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zonalShiftConfigInput() {
        return this._zonalShiftConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_config: ccClusterAccessConfigPropertyToTerraform(this._accessConfig.internalValue),
            bootstrap_self_managed_addons: cdktn.booleanToTerraform(this._bootstrapSelfManagedAddons),
            compute_config: ccClusterComputeConfigPropertyToTerraform(this._computeConfig.internalValue),
            control_plane_scaling_config: ccClusterControlPlaneScalingConfigPropertyToTerraform(this._controlPlaneScalingConfig.internalValue),
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            encryption_config: cdktn.listMapper(ccClusterEncryptionConfigPropertyToTerraform, false)(this._encryptionConfig.internalValue),
            force: cdktn.booleanToTerraform(this._force),
            kube_api_server_config: ccClusterKubeApiServerConfigPropertyToTerraform(this._kubeApiServerConfig.internalValue),
            kube_controller_manager_config: ccClusterKubeControllerManagerConfigPropertyToTerraform(this._kubeControllerManagerConfig.internalValue),
            kube_scheduler_config: ccClusterKubeSchedulerConfigPropertyToTerraform(this._kubeSchedulerConfig.internalValue),
            kubernetes_network_config: ccClusterKubernetesNetworkConfigPropertyToTerraform(this._kubernetesNetworkConfig.internalValue),
            logging: ccClusterLoggingPropertyToTerraform(this._logging.internalValue),
            name: cdktn.stringToTerraform(this._name),
            outpost_config: ccClusterOutpostConfigPropertyToTerraform(this._outpostConfig.internalValue),
            remote_network_config: ccClusterRemoteNetworkConfigPropertyToTerraform(this._remoteNetworkConfig.internalValue),
            resources_vpc_config: ccClusterResourcesVpcConfigPropertyToTerraform(this._resourcesVpcConfig.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            rollback_config: ccClusterRollbackConfigPropertyToTerraform(this._rollbackConfig.internalValue),
            storage_config: ccClusterStorageConfigPropertyToTerraform(this._storageConfig.internalValue),
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            upgrade_policy: ccClusterUpgradePolicyPropertyToTerraform(this._upgradePolicy.internalValue),
            version: cdktn.stringToTerraform(this._version),
            zonal_shift_config: ccClusterZonalShiftConfigPropertyToTerraform(this._zonalShiftConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_config: {
                value: ccClusterAccessConfigPropertyToHclTerraform(this._accessConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.AccessConfigProperty",
            },
            bootstrap_self_managed_addons: {
                value: cdktn.booleanToHclTerraform(this._bootstrapSelfManagedAddons),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            compute_config: {
                value: ccClusterComputeConfigPropertyToHclTerraform(this._computeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ComputeConfigProperty",
            },
            control_plane_scaling_config: {
                value: ccClusterControlPlaneScalingConfigPropertyToHclTerraform(this._controlPlaneScalingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ControlPlaneScalingConfigProperty",
            },
            deletion_protection: {
                value: cdktn.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            encryption_config: {
                value: cdktn.listMapperHcl(ccClusterEncryptionConfigPropertyToHclTerraform, false)(this._encryptionConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.EncryptionConfigPropertyList",
            },
            force: {
                value: cdktn.booleanToHclTerraform(this._force),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kube_api_server_config: {
                value: ccClusterKubeApiServerConfigPropertyToHclTerraform(this._kubeApiServerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.KubeApiServerConfigProperty",
            },
            kube_controller_manager_config: {
                value: ccClusterKubeControllerManagerConfigPropertyToHclTerraform(this._kubeControllerManagerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.KubeControllerManagerConfigProperty",
            },
            kube_scheduler_config: {
                value: ccClusterKubeSchedulerConfigPropertyToHclTerraform(this._kubeSchedulerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.KubeSchedulerConfigProperty",
            },
            kubernetes_network_config: {
                value: ccClusterKubernetesNetworkConfigPropertyToHclTerraform(this._kubernetesNetworkConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.KubernetesNetworkConfigProperty",
            },
            logging: {
                value: ccClusterLoggingPropertyToHclTerraform(this._logging.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.LoggingProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outpost_config: {
                value: ccClusterOutpostConfigPropertyToHclTerraform(this._outpostConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.OutpostConfigProperty",
            },
            remote_network_config: {
                value: ccClusterRemoteNetworkConfigPropertyToHclTerraform(this._remoteNetworkConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.RemoteNetworkConfigProperty",
            },
            resources_vpc_config: {
                value: ccClusterResourcesVpcConfigPropertyToHclTerraform(this._resourcesVpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ResourcesVpcConfigProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rollback_config: {
                value: ccClusterRollbackConfigPropertyToHclTerraform(this._rollbackConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.RollbackConfigProperty",
            },
            storage_config: {
                value: ccClusterStorageConfigPropertyToHclTerraform(this._storageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.StorageConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCluster.TagPropertyList",
            },
            upgrade_policy: {
                value: ccClusterUpgradePolicyPropertyToHclTerraform(this._upgradePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.UpgradePolicyProperty",
            },
            version: {
                value: cdktn.stringToHclTerraform(this._version),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zonal_shift_config: {
                value: ccClusterZonalShiftConfigPropertyToHclTerraform(this._zonalShiftConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.ZonalShiftConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccClusterAccessConfigPropertyToTerraform(struct?: CcCluster.AccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_mode: cdktn.stringToTerraform(struct!.authenticationMode),
        bootstrap_cluster_creator_admin_permissions: cdktn.booleanToTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
    }
}


export function ccClusterAccessConfigPropertyToHclTerraform(struct?: CcCluster.AccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_mode: {
            value: cdktn.stringToHclTerraform(struct!.authenticationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bootstrap_cluster_creator_admin_permissions: {
            value: cdktn.booleanToHclTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterComputeConfigPropertyToTerraform(struct?: CcCluster.ComputeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        node_pools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nodePools),
        node_role_arn: cdktn.stringToTerraform(struct!.nodeRoleArn),
    }
}


export function ccClusterComputeConfigPropertyToHclTerraform(struct?: CcCluster.ComputeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        node_pools: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nodePools),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        node_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.nodeRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterControlPlaneScalingConfigPropertyToTerraform(struct?: CcCluster.ControlPlaneScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tier: cdktn.stringToTerraform(struct!.tier),
    }
}


export function ccClusterControlPlaneScalingConfigPropertyToHclTerraform(struct?: CcCluster.ControlPlaneScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tier: {
            value: cdktn.stringToHclTerraform(struct!.tier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterProviderPropertyToTerraform(struct?: CcCluster.ProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_arn: cdktn.stringToTerraform(struct!.keyArn),
    }
}


export function ccClusterProviderPropertyToHclTerraform(struct?: CcCluster.ProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_arn: {
            value: cdktn.stringToHclTerraform(struct!.keyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterEncryptionConfigPropertyToTerraform(struct?: CcCluster.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provider: ccClusterProviderPropertyToTerraform(struct!.provider),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    }
}


export function ccClusterEncryptionConfigPropertyToHclTerraform(struct?: CcCluster.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provider: {
            value: ccClusterProviderPropertyToHclTerraform(struct!.provider),
            isBlock: true,
            type: "struct",
            storageClassType: "ProviderProperty",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterServiceNodePortRangePropertyToTerraform(struct?: CcCluster.ServiceNodePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_port: cdktn.numberToTerraform(struct!.maxPort),
        min_port: cdktn.numberToTerraform(struct!.minPort),
    }
}


export function ccClusterServiceNodePortRangePropertyToHclTerraform(struct?: CcCluster.ServiceNodePortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_port: {
            value: cdktn.numberToHclTerraform(struct!.maxPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_port: {
            value: cdktn.numberToHclTerraform(struct!.minPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterKubeApiServerConfigPropertyToTerraform(struct?: CcCluster.KubeApiServerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_ttl: cdktn.stringToTerraform(struct!.eventTtl),
        service_node_port_range: ccClusterServiceNodePortRangePropertyToTerraform(struct!.serviceNodePortRange),
    }
}


export function ccClusterKubeApiServerConfigPropertyToHclTerraform(struct?: CcCluster.KubeApiServerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_ttl: {
            value: cdktn.stringToHclTerraform(struct!.eventTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_node_port_range: {
            value: ccClusterServiceNodePortRangePropertyToHclTerraform(struct!.serviceNodePortRange),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNodePortRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterHorizontalPodAutoscalerControllerConfigPropertyToTerraform(struct?: CcCluster.HorizontalPodAutoscalerControllerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        horizontal_pod_autoscaler_sync_period: cdktn.stringToTerraform(struct!.horizontalPodAutoscalerSyncPeriod),
    }
}


export function ccClusterHorizontalPodAutoscalerControllerConfigPropertyToHclTerraform(struct?: CcCluster.HorizontalPodAutoscalerControllerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        horizontal_pod_autoscaler_sync_period: {
            value: cdktn.stringToHclTerraform(struct!.horizontalPodAutoscalerSyncPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterKubeControllerManagerConfigPropertyToTerraform(struct?: CcCluster.KubeControllerManagerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        horizontal_pod_autoscaler_controller_config: ccClusterHorizontalPodAutoscalerControllerConfigPropertyToTerraform(struct!.horizontalPodAutoscalerControllerConfig),
    }
}


export function ccClusterKubeControllerManagerConfigPropertyToHclTerraform(struct?: CcCluster.KubeControllerManagerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        horizontal_pod_autoscaler_controller_config: {
            value: ccClusterHorizontalPodAutoscalerControllerConfigPropertyToHclTerraform(struct!.horizontalPodAutoscalerControllerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HorizontalPodAutoscalerControllerConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterResourceWeightPropertyToTerraform(struct?: CcCluster.ResourceWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccClusterResourceWeightPropertyToHclTerraform(struct?: CcCluster.ResourceWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterScoringStrategyPropertyToTerraform(struct?: CcCluster.ScoringStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resources: cdktn.listMapper(ccClusterResourceWeightPropertyToTerraform, false)(struct!.resources),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccClusterScoringStrategyPropertyToHclTerraform(struct?: CcCluster.ScoringStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resources: {
            value: cdktn.listMapperHcl(ccClusterResourceWeightPropertyToHclTerraform, false)(struct!.resources),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceWeightPropertyList",
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


export function ccClusterNodeResourcesFitConfigPropertyToTerraform(struct?: CcCluster.NodeResourcesFitConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scoring_strategy: ccClusterScoringStrategyPropertyToTerraform(struct!.scoringStrategy),
    }
}


export function ccClusterNodeResourcesFitConfigPropertyToHclTerraform(struct?: CcCluster.NodeResourcesFitConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scoring_strategy: {
            value: ccClusterScoringStrategyPropertyToHclTerraform(struct!.scoringStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "ScoringStrategyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterKubeSchedulerConfigPropertyToTerraform(struct?: CcCluster.KubeSchedulerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        node_resources_fit: ccClusterNodeResourcesFitConfigPropertyToTerraform(struct!.nodeResourcesFit),
    }
}


export function ccClusterKubeSchedulerConfigPropertyToHclTerraform(struct?: CcCluster.KubeSchedulerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        node_resources_fit: {
            value: ccClusterNodeResourcesFitConfigPropertyToHclTerraform(struct!.nodeResourcesFit),
            isBlock: true,
            type: "struct",
            storageClassType: "NodeResourcesFitConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterElasticLoadBalancingPropertyToTerraform(struct?: CcCluster.ElasticLoadBalancingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterElasticLoadBalancingPropertyToHclTerraform(struct?: CcCluster.ElasticLoadBalancingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterKubernetesNetworkConfigPropertyToTerraform(struct?: CcCluster.KubernetesNetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        elastic_load_balancing: ccClusterElasticLoadBalancingPropertyToTerraform(struct!.elasticLoadBalancing),
        ip_family: cdktn.stringToTerraform(struct!.ipFamily),
        service_ipv_4_cidr: cdktn.stringToTerraform(struct!.serviceIpv4Cidr),
    }
}


export function ccClusterKubernetesNetworkConfigPropertyToHclTerraform(struct?: CcCluster.KubernetesNetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        elastic_load_balancing: {
            value: ccClusterElasticLoadBalancingPropertyToHclTerraform(struct!.elasticLoadBalancing),
            isBlock: true,
            type: "struct",
            storageClassType: "ElasticLoadBalancingProperty",
        },
        ip_family: {
            value: cdktn.stringToHclTerraform(struct!.ipFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_ipv_4_cidr: {
            value: cdktn.stringToHclTerraform(struct!.serviceIpv4Cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterLoggingTypeConfigPropertyToTerraform(struct?: CcCluster.LoggingTypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccClusterLoggingTypeConfigPropertyToHclTerraform(struct?: CcCluster.LoggingTypeConfigProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterClusterLoggingPropertyToTerraform(struct?: CcCluster.ClusterLoggingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled_types: cdktn.listMapper(ccClusterLoggingTypeConfigPropertyToTerraform, false)(struct!.enabledTypes),
    }
}


export function ccClusterClusterLoggingPropertyToHclTerraform(struct?: CcCluster.ClusterLoggingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled_types: {
            value: cdktn.listMapperHcl(ccClusterLoggingTypeConfigPropertyToHclTerraform, false)(struct!.enabledTypes),
            isBlock: true,
            type: "list",
            storageClassType: "LoggingTypeConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterLoggingPropertyToTerraform(struct?: CcCluster.LoggingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_logging: ccClusterClusterLoggingPropertyToTerraform(struct!.clusterLogging),
    }
}


export function ccClusterLoggingPropertyToHclTerraform(struct?: CcCluster.LoggingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_logging: {
            value: ccClusterClusterLoggingPropertyToHclTerraform(struct!.clusterLogging),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterLoggingProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterControlPlanePlacementPropertyToTerraform(struct?: CcCluster.ControlPlanePlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_name: cdktn.stringToTerraform(struct!.groupName),
        spread_level: cdktn.stringToTerraform(struct!.spreadLevel),
    }
}


export function ccClusterControlPlanePlacementPropertyToHclTerraform(struct?: CcCluster.ControlPlanePlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_name: {
            value: cdktn.stringToHclTerraform(struct!.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spread_level: {
            value: cdktn.stringToHclTerraform(struct!.spreadLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterEtcdPlacementPropertyToTerraform(struct?: CcCluster.EtcdPlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        spread_level: cdktn.stringToTerraform(struct!.spreadLevel),
    }
}


export function ccClusterEtcdPlacementPropertyToHclTerraform(struct?: CcCluster.EtcdPlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        spread_level: {
            value: cdktn.stringToHclTerraform(struct!.spreadLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterOutpostConfigPropertyToTerraform(struct?: CcCluster.OutpostConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        control_plane_instance_type: cdktn.stringToTerraform(struct!.controlPlaneInstanceType),
        control_plane_placement: ccClusterControlPlanePlacementPropertyToTerraform(struct!.controlPlanePlacement),
        etcd_instance_type: cdktn.stringToTerraform(struct!.etcdInstanceType),
        etcd_placement: ccClusterEtcdPlacementPropertyToTerraform(struct!.etcdPlacement),
        outpost_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outpostArns),
    }
}


export function ccClusterOutpostConfigPropertyToHclTerraform(struct?: CcCluster.OutpostConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        control_plane_instance_type: {
            value: cdktn.stringToHclTerraform(struct!.controlPlaneInstanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        control_plane_placement: {
            value: ccClusterControlPlanePlacementPropertyToHclTerraform(struct!.controlPlanePlacement),
            isBlock: true,
            type: "struct",
            storageClassType: "ControlPlanePlacementProperty",
        },
        etcd_instance_type: {
            value: cdktn.stringToHclTerraform(struct!.etcdInstanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        etcd_placement: {
            value: ccClusterEtcdPlacementPropertyToHclTerraform(struct!.etcdPlacement),
            isBlock: true,
            type: "struct",
            storageClassType: "EtcdPlacementProperty",
        },
        outpost_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outpostArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRemoteNodeNetworkPropertyToTerraform(struct?: CcCluster.RemoteNodeNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
    }
}


export function ccClusterRemoteNodeNetworkPropertyToHclTerraform(struct?: CcCluster.RemoteNodeNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidrs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRemotePodNetworkPropertyToTerraform(struct?: CcCluster.RemotePodNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
    }
}


export function ccClusterRemotePodNetworkPropertyToHclTerraform(struct?: CcCluster.RemotePodNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidrs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRemoteNetworkConfigPropertyToTerraform(struct?: CcCluster.RemoteNetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        remote_node_networks: cdktn.listMapper(ccClusterRemoteNodeNetworkPropertyToTerraform, false)(struct!.remoteNodeNetworks),
        remote_pod_networks: cdktn.listMapper(ccClusterRemotePodNetworkPropertyToTerraform, false)(struct!.remotePodNetworks),
    }
}


export function ccClusterRemoteNetworkConfigPropertyToHclTerraform(struct?: CcCluster.RemoteNetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        remote_node_networks: {
            value: cdktn.listMapperHcl(ccClusterRemoteNodeNetworkPropertyToHclTerraform, false)(struct!.remoteNodeNetworks),
            isBlock: true,
            type: "list",
            storageClassType: "RemoteNodeNetworkPropertyList",
        },
        remote_pod_networks: {
            value: cdktn.listMapperHcl(ccClusterRemotePodNetworkPropertyToHclTerraform, false)(struct!.remotePodNetworks),
            isBlock: true,
            type: "list",
            storageClassType: "RemotePodNetworkPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterResourcesVpcConfigPropertyToTerraform(struct?: CcCluster.ResourcesVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        control_plane_egress_mode: cdktn.stringToTerraform(struct!.controlPlaneEgressMode),
        endpoint_private_access: cdktn.booleanToTerraform(struct!.endpointPrivateAccess),
        endpoint_public_access: cdktn.booleanToTerraform(struct!.endpointPublicAccess),
        public_access_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.publicAccessCidrs),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccClusterResourcesVpcConfigPropertyToHclTerraform(struct?: CcCluster.ResourcesVpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        control_plane_egress_mode: {
            value: cdktn.stringToHclTerraform(struct!.controlPlaneEgressMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint_private_access: {
            value: cdktn.booleanToHclTerraform(struct!.endpointPrivateAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        endpoint_public_access: {
            value: cdktn.booleanToHclTerraform(struct!.endpointPublicAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        public_access_cidrs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.publicAccessCidrs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterRollbackConfigPropertyToTerraform(struct?: CcCluster.RollbackConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    }
}


export function ccClusterRollbackConfigPropertyToHclTerraform(struct?: CcCluster.RollbackConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timeout_minutes: {
            value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterBlockStoragePropertyToTerraform(struct?: CcCluster.BlockStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterBlockStoragePropertyToHclTerraform(struct?: CcCluster.BlockStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterStorageConfigPropertyToTerraform(struct?: CcCluster.StorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_storage: ccClusterBlockStoragePropertyToTerraform(struct!.blockStorage),
    }
}


export function ccClusterStorageConfigPropertyToHclTerraform(struct?: CcCluster.StorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_storage: {
            value: ccClusterBlockStoragePropertyToHclTerraform(struct!.blockStorage),
            isBlock: true,
            type: "struct",
            storageClassType: "BlockStorageProperty",
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


export function ccClusterUpgradePolicyPropertyToTerraform(struct?: CcCluster.UpgradePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        support_type: cdktn.stringToTerraform(struct!.supportType),
    }
}


export function ccClusterUpgradePolicyPropertyToHclTerraform(struct?: CcCluster.UpgradePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        support_type: {
            value: cdktn.stringToHclTerraform(struct!.supportType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterZonalShiftConfigPropertyToTerraform(struct?: CcCluster.ZonalShiftConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccClusterZonalShiftConfigPropertyToHclTerraform(struct?: CcCluster.ZonalShiftConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCluster {
export interface AccessConfigProperty {
    /**
    * Specify the authentication mode that should be used to create your cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#authentication_mode CcCluster#authentication_mode}
    */
    readonly authenticationMode?: string;
    /**
    * Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions CcCluster#bootstrap_cluster_creator_admin_permissions}
    */
    readonly bootstrapClusterCreatorAdminPermissions?: boolean | cdktn.IResolvable;
}
export class AccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationMode = this._authenticationMode;
        }
        if (this._bootstrapClusterCreatorAdminPermissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.bootstrapClusterCreatorAdminPermissions = this._bootstrapClusterCreatorAdminPermissions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationMode = undefined;
            this._bootstrapClusterCreatorAdminPermissions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationMode = value.authenticationMode;
            this._bootstrapClusterCreatorAdminPermissions = value.bootstrapClusterCreatorAdminPermissions;
        }
    }

    // authentication_mode - computed: true, optional: true, required: false
    private _authenticationMode?: string; 
    public get authenticationMode() {
        return this.getStringAttribute('authentication_mode');
    }
    public set authenticationMode(value: string) {
        this._authenticationMode = value;
    }
    public resetAuthenticationMode() {
        this._authenticationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationModeInput() {
        return this._authenticationMode;
    }

    // bootstrap_cluster_creator_admin_permissions - computed: true, optional: true, required: false
    private _bootstrapClusterCreatorAdminPermissions?: boolean | cdktn.IResolvable; 
    public get bootstrapClusterCreatorAdminPermissions() {
        return this.getBooleanAttribute('bootstrap_cluster_creator_admin_permissions');
    }
    public set bootstrapClusterCreatorAdminPermissions(value: boolean | cdktn.IResolvable) {
        this._bootstrapClusterCreatorAdminPermissions = value;
    }
    public resetBootstrapClusterCreatorAdminPermissions() {
        this._bootstrapClusterCreatorAdminPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bootstrapClusterCreatorAdminPermissionsInput() {
        return this._bootstrapClusterCreatorAdminPermissions;
    }
}
export interface ComputeConfigProperty {
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#node_pools CcCluster#node_pools}
    */
    readonly nodePools?: string[];
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#node_role_arn CcCluster#node_role_arn}
    */
    readonly nodeRoleArn?: string;
}
export class ComputeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._nodePools !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodePools = this._nodePools;
        }
        if (this._nodeRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeRoleArn = this._nodeRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._nodePools = undefined;
            this._nodeRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._nodePools = value.nodePools;
            this._nodeRoleArn = value.nodeRoleArn;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // node_pools - computed: true, optional: true, required: false
    private _nodePools?: string[]; 
    public get nodePools() {
        return this.getListAttribute('node_pools');
    }
    public set nodePools(value: string[]) {
        this._nodePools = value;
    }
    public resetNodePools() {
        this._nodePools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodePoolsInput() {
        return this._nodePools;
    }

    // node_role_arn - computed: true, optional: true, required: false
    private _nodeRoleArn?: string; 
    public get nodeRoleArn() {
        return this.getStringAttribute('node_role_arn');
    }
    public set nodeRoleArn(value: string) {
        this._nodeRoleArn = value;
    }
    public resetNodeRoleArn() {
        this._nodeRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeRoleArnInput() {
        return this._nodeRoleArn;
    }
}
export interface ControlPlaneScalingConfigProperty {
    /**
    * The scaling tier for the provisioned control plane.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#tier CcCluster#tier}
    */
    readonly tier?: string;
}
export class ControlPlaneScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ControlPlaneScalingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tier !== undefined) {
            hasAnyValues = true;
            internalValueResult.tier = this._tier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ControlPlaneScalingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tier = value.tier;
        }
    }

    // tier - computed: true, optional: true, required: false
    private _tier?: string; 
    public get tier() {
        return this.getStringAttribute('tier');
    }
    public set tier(value: string) {
        this._tier = value;
    }
    public resetTier() {
        this._tier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier;
    }
}
export interface ProviderProperty {
    /**
    * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#key_arn CcCluster#key_arn}
    */
    readonly keyArn?: string;
}
export class ProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyArn = this._keyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyArn = value.keyArn;
        }
    }

    // key_arn - computed: true, optional: true, required: false
    private _keyArn?: string; 
    public get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string) {
        this._keyArn = value;
    }
    public resetKeyArn() {
        this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
        return this._keyArn;
    }
}
export interface EncryptionConfigProperty {
    /**
    * The encryption provider for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#provider CcCluster#provider}
    */
    readonly provider?: ProviderProperty;
    /**
    * Specifies the resources to be encrypted. The only supported value is "secrets".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#resources CcCluster#resources}
    */
    readonly resources?: string[];
}
export class EncryptionConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EncryptionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provider = this._provider?.internalValue;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provider.internalValue = undefined;
            this._resources = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provider.internalValue = value.provider;
            this._resources = value.resources;
        }
    }

    // provider - computed: true, optional: true, required: false
    private _provider = new ProviderPropertyOutputReference(this, "provider");
    public get provider() {
        return this._provider;
    }
    public putProvider(value: ProviderProperty) {
        this._provider.internalValue = value;
    }
    public resetProvider() {
        this._provider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInput() {
        return this._provider.internalValue;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }
}

export class EncryptionConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : EncryptionConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): EncryptionConfigPropertyOutputReference {
        return new EncryptionConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceNodePortRangeProperty {
    /**
    * The maximum port number in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#max_port CcCluster#max_port}
    */
    readonly maxPort?: number;
    /**
    * The minimum port number in the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#min_port CcCluster#min_port}
    */
    readonly minPort?: number;
}
export class ServiceNodePortRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNodePortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPort = this._maxPort;
        }
        if (this._minPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.minPort = this._minPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNodePortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxPort = undefined;
            this._minPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxPort = value.maxPort;
            this._minPort = value.minPort;
        }
    }

    // max_port - computed: true, optional: true, required: false
    private _maxPort?: number; 
    public get maxPort() {
        return this.getNumberAttribute('max_port');
    }
    public set maxPort(value: number) {
        this._maxPort = value;
    }
    public resetMaxPort() {
        this._maxPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPortInput() {
        return this._maxPort;
    }

    // min_port - computed: true, optional: true, required: false
    private _minPort?: number; 
    public get minPort() {
        return this.getNumberAttribute('min_port');
    }
    public set minPort(value: number) {
        this._minPort = value;
    }
    public resetMinPort() {
        this._minPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minPortInput() {
        return this._minPort;
    }
}
export interface KubeApiServerConfigProperty {
    /**
    * The duration that Kubernetes events are retained (e.g., 30m, 1h).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#event_ttl CcCluster#event_ttl}
    */
    readonly eventTtl?: string;
    /**
    * The port range for Kubernetes NodePort services.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#service_node_port_range CcCluster#service_node_port_range}
    */
    readonly serviceNodePortRange?: ServiceNodePortRangeProperty;
}
export class KubeApiServerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KubeApiServerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventTtl = this._eventTtl;
        }
        if (this._serviceNodePortRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNodePortRange = this._serviceNodePortRange?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KubeApiServerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventTtl = undefined;
            this._serviceNodePortRange.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventTtl = value.eventTtl;
            this._serviceNodePortRange.internalValue = value.serviceNodePortRange;
        }
    }

    // event_ttl - computed: true, optional: true, required: false
    private _eventTtl?: string; 
    public get eventTtl() {
        return this.getStringAttribute('event_ttl');
    }
    public set eventTtl(value: string) {
        this._eventTtl = value;
    }
    public resetEventTtl() {
        this._eventTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTtlInput() {
        return this._eventTtl;
    }

    // service_node_port_range - computed: true, optional: true, required: false
    private _serviceNodePortRange = new ServiceNodePortRangePropertyOutputReference(this, "service_node_port_range");
    public get serviceNodePortRange() {
        return this._serviceNodePortRange;
    }
    public putServiceNodePortRange(value: ServiceNodePortRangeProperty) {
        this._serviceNodePortRange.internalValue = value;
    }
    public resetServiceNodePortRange() {
        this._serviceNodePortRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNodePortRangeInput() {
        return this._serviceNodePortRange.internalValue;
    }
}
export interface HorizontalPodAutoscalerControllerConfigProperty {
    /**
    * The interval between each sync of the horizontal pod autoscaler (e.g., 15s, 1m).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_sync_period CcCluster#horizontal_pod_autoscaler_sync_period}
    */
    readonly horizontalPodAutoscalerSyncPeriod?: string;
}
export class HorizontalPodAutoscalerControllerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HorizontalPodAutoscalerControllerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._horizontalPodAutoscalerSyncPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.horizontalPodAutoscalerSyncPeriod = this._horizontalPodAutoscalerSyncPeriod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HorizontalPodAutoscalerControllerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._horizontalPodAutoscalerSyncPeriod = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._horizontalPodAutoscalerSyncPeriod = value.horizontalPodAutoscalerSyncPeriod;
        }
    }

    // horizontal_pod_autoscaler_sync_period - computed: true, optional: true, required: false
    private _horizontalPodAutoscalerSyncPeriod?: string; 
    public get horizontalPodAutoscalerSyncPeriod() {
        return this.getStringAttribute('horizontal_pod_autoscaler_sync_period');
    }
    public set horizontalPodAutoscalerSyncPeriod(value: string) {
        this._horizontalPodAutoscalerSyncPeriod = value;
    }
    public resetHorizontalPodAutoscalerSyncPeriod() {
        this._horizontalPodAutoscalerSyncPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get horizontalPodAutoscalerSyncPeriodInput() {
        return this._horizontalPodAutoscalerSyncPeriod;
    }
}
export interface KubeControllerManagerConfigProperty {
    /**
    * The horizontal pod autoscaler controller configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#horizontal_pod_autoscaler_controller_config CcCluster#horizontal_pod_autoscaler_controller_config}
    */
    readonly horizontalPodAutoscalerControllerConfig?: HorizontalPodAutoscalerControllerConfigProperty;
}
export class KubeControllerManagerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KubeControllerManagerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._horizontalPodAutoscalerControllerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.horizontalPodAutoscalerControllerConfig = this._horizontalPodAutoscalerControllerConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KubeControllerManagerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._horizontalPodAutoscalerControllerConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._horizontalPodAutoscalerControllerConfig.internalValue = value.horizontalPodAutoscalerControllerConfig;
        }
    }

    // horizontal_pod_autoscaler_controller_config - computed: true, optional: true, required: false
    private _horizontalPodAutoscalerControllerConfig = new HorizontalPodAutoscalerControllerConfigPropertyOutputReference(this, "horizontal_pod_autoscaler_controller_config");
    public get horizontalPodAutoscalerControllerConfig() {
        return this._horizontalPodAutoscalerControllerConfig;
    }
    public putHorizontalPodAutoscalerControllerConfig(value: HorizontalPodAutoscalerControllerConfigProperty) {
        this._horizontalPodAutoscalerControllerConfig.internalValue = value;
    }
    public resetHorizontalPodAutoscalerControllerConfig() {
        this._horizontalPodAutoscalerControllerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get horizontalPodAutoscalerControllerConfigInput() {
        return this._horizontalPodAutoscalerControllerConfig.internalValue;
    }
}
export interface ResourceWeightProperty {
    /**
    * The name of the resource (for example, cpu or memory).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#name CcCluster#name}
    */
    readonly name?: string;
    /**
    * The weight assigned to the resource for scoring. Must be between 1 and 100.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#weight CcCluster#weight}
    */
    readonly weight?: number;
}
export class ResourceWeightPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceWeightProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceWeightProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._weight = value.weight;
        }
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

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class ResourceWeightPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceWeightProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceWeightPropertyOutputReference {
        return new ResourceWeightPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScoringStrategyProperty {
    /**
    * The resource weights used for scoring nodes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#resources CcCluster#resources}
    */
    readonly resources?: ResourceWeightProperty[] | cdktn.IResolvable;
    /**
    * The scoring strategy type (LeastAllocated or MostAllocated).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#type CcCluster#type}
    */
    readonly type?: string;
}
export class ScoringStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScoringStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScoringStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resources.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resources.internalValue = value.resources;
            this._type = value.type;
        }
    }

    // resources - computed: true, optional: true, required: false
    private _resources = new ResourceWeightPropertyList(this, "resources", false);
    public get resources() {
        return this._resources;
    }
    public putResources(value: ResourceWeightProperty[] | cdktn.IResolvable) {
        this._resources.internalValue = value;
    }
    public resetResources() {
        this._resources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources.internalValue;
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
export interface NodeResourcesFitConfigProperty {
    /**
    * The scoring strategy configuration for the NodeResourcesFit scheduler plugin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#scoring_strategy CcCluster#scoring_strategy}
    */
    readonly scoringStrategy?: ScoringStrategyProperty;
}
export class NodeResourcesFitConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeResourcesFitConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scoringStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scoringStrategy = this._scoringStrategy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeResourcesFitConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scoringStrategy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scoringStrategy.internalValue = value.scoringStrategy;
        }
    }

    // scoring_strategy - computed: true, optional: true, required: false
    private _scoringStrategy = new ScoringStrategyPropertyOutputReference(this, "scoring_strategy");
    public get scoringStrategy() {
        return this._scoringStrategy;
    }
    public putScoringStrategy(value: ScoringStrategyProperty) {
        this._scoringStrategy.internalValue = value;
    }
    public resetScoringStrategy() {
        this._scoringStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scoringStrategyInput() {
        return this._scoringStrategy.internalValue;
    }
}
export interface KubeSchedulerConfigProperty {
    /**
    * The NodeResourcesFit plugin configuration for the Kubernetes scheduler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#node_resources_fit CcCluster#node_resources_fit}
    */
    readonly nodeResourcesFit?: NodeResourcesFitConfigProperty;
}
export class KubeSchedulerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KubeSchedulerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nodeResourcesFit?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeResourcesFit = this._nodeResourcesFit?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KubeSchedulerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nodeResourcesFit.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nodeResourcesFit.internalValue = value.nodeResourcesFit;
        }
    }

    // node_resources_fit - computed: true, optional: true, required: false
    private _nodeResourcesFit = new NodeResourcesFitConfigPropertyOutputReference(this, "node_resources_fit");
    public get nodeResourcesFit() {
        return this._nodeResourcesFit;
    }
    public putNodeResourcesFit(value: NodeResourcesFitConfigProperty) {
        this._nodeResourcesFit.internalValue = value;
    }
    public resetNodeResourcesFit() {
        this._nodeResourcesFit.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeResourcesFitInput() {
        return this._nodeResourcesFit.internalValue;
    }
}
export interface ElasticLoadBalancingProperty {
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ElasticLoadBalancingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticLoadBalancingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticLoadBalancingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface KubernetesNetworkConfigProperty {
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#elastic_load_balancing CcCluster#elastic_load_balancing}
    */
    readonly elasticLoadBalancing?: ElasticLoadBalancingProperty;
    /**
    * Ipv4 or Ipv6. You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#ip_family CcCluster#ip_family}
    */
    readonly ipFamily?: string;
    /**
    * The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#service_ipv_4_cidr CcCluster#service_ipv_4_cidr}
    */
    readonly serviceIpv4Cidr?: string;
}
export class KubernetesNetworkConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KubernetesNetworkConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._elasticLoadBalancing?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elasticLoadBalancing = this._elasticLoadBalancing?.internalValue;
        }
        if (this._ipFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipFamily = this._ipFamily;
        }
        if (this._serviceIpv4Cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceIpv4Cidr = this._serviceIpv4Cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KubernetesNetworkConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._elasticLoadBalancing.internalValue = undefined;
            this._ipFamily = undefined;
            this._serviceIpv4Cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._elasticLoadBalancing.internalValue = value.elasticLoadBalancing;
            this._ipFamily = value.ipFamily;
            this._serviceIpv4Cidr = value.serviceIpv4Cidr;
        }
    }

    // elastic_load_balancing - computed: true, optional: true, required: false
    private _elasticLoadBalancing = new ElasticLoadBalancingPropertyOutputReference(this, "elastic_load_balancing");
    public get elasticLoadBalancing() {
        return this._elasticLoadBalancing;
    }
    public putElasticLoadBalancing(value: ElasticLoadBalancingProperty) {
        this._elasticLoadBalancing.internalValue = value;
    }
    public resetElasticLoadBalancing() {
        this._elasticLoadBalancing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticLoadBalancingInput() {
        return this._elasticLoadBalancing.internalValue;
    }

    // ip_family - computed: true, optional: true, required: false
    private _ipFamily?: string; 
    public get ipFamily() {
        return this.getStringAttribute('ip_family');
    }
    public set ipFamily(value: string) {
        this._ipFamily = value;
    }
    public resetIpFamily() {
        this._ipFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipFamilyInput() {
        return this._ipFamily;
    }

    // service_ipv_4_cidr - computed: true, optional: true, required: false
    private _serviceIpv4Cidr?: string; 
    public get serviceIpv4Cidr() {
        return this.getStringAttribute('service_ipv_4_cidr');
    }
    public set serviceIpv4Cidr(value: string) {
        this._serviceIpv4Cidr = value;
    }
    public resetServiceIpv4Cidr() {
        this._serviceIpv4Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIpv4CidrInput() {
        return this._serviceIpv4Cidr;
    }

    // service_ipv_6_cidr - computed: true, optional: false, required: false
    public get serviceIpv6Cidr() {
        return this.getStringAttribute('service_ipv_6_cidr');
    }
}
export interface LoggingTypeConfigProperty {
    /**
    * name of the log type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#type CcCluster#type}
    */
    readonly type?: string;
}
export class LoggingTypeConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LoggingTypeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingTypeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
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
}

export class LoggingTypeConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : LoggingTypeConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): LoggingTypeConfigPropertyOutputReference {
        return new LoggingTypeConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClusterLoggingProperty {
    /**
    * Enable control plane logs for your cluster, all log types will be disabled if the array is empty
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled_types CcCluster#enabled_types}
    */
    readonly enabledTypes?: LoggingTypeConfigProperty[] | cdktn.IResolvable;
}
export class ClusterLoggingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterLoggingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabledTypes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledTypes = this._enabledTypes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterLoggingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabledTypes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabledTypes.internalValue = value.enabledTypes;
        }
    }

    // enabled_types - computed: true, optional: true, required: false
    private _enabledTypes = new LoggingTypeConfigPropertyList(this, "enabled_types", false);
    public get enabledTypes() {
        return this._enabledTypes;
    }
    public putEnabledTypes(value: LoggingTypeConfigProperty[] | cdktn.IResolvable) {
        this._enabledTypes.internalValue = value;
    }
    public resetEnabledTypes() {
        this._enabledTypes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledTypesInput() {
        return this._enabledTypes.internalValue;
    }
}
export interface LoggingProperty {
    /**
    * The cluster control plane logging configuration for your cluster. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#cluster_logging CcCluster#cluster_logging}
    */
    readonly clusterLogging?: ClusterLoggingProperty;
}
export class LoggingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterLogging?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterLogging = this._clusterLogging?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterLogging.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterLogging.internalValue = value.clusterLogging;
        }
    }

    // cluster_logging - computed: true, optional: true, required: false
    private _clusterLogging = new ClusterLoggingPropertyOutputReference(this, "cluster_logging");
    public get clusterLogging() {
        return this._clusterLogging;
    }
    public putClusterLogging(value: ClusterLoggingProperty) {
        this._clusterLogging.internalValue = value;
    }
    public resetClusterLogging() {
        this._clusterLogging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterLoggingInput() {
        return this._clusterLogging.internalValue;
    }
}
export interface ControlPlanePlacementProperty {
    /**
    * The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#group_name CcCluster#group_name}
    */
    readonly groupName?: string;
    /**
    * Optional parameter to specify the placement group spread level for control plane instances. If not provided, EKS will deploy control plane instances without a placement group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#spread_level CcCluster#spread_level}
    */
    readonly spreadLevel?: string;
}
export class ControlPlanePlacementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ControlPlanePlacementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._spreadLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.spreadLevel = this._spreadLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ControlPlanePlacementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupName = undefined;
            this._spreadLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupName = value.groupName;
            this._spreadLevel = value.spreadLevel;
        }
    }

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // spread_level - computed: true, optional: true, required: false
    private _spreadLevel?: string; 
    public get spreadLevel() {
        return this.getStringAttribute('spread_level');
    }
    public set spreadLevel(value: string) {
        this._spreadLevel = value;
    }
    public resetSpreadLevel() {
        this._spreadLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spreadLevelInput() {
        return this._spreadLevel;
    }
}
export interface EtcdPlacementProperty {
    /**
    * Optional parameter to specify the placement group spread level for etcd instances. If not provided, EKS will deploy etcd instances without a placement group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#spread_level CcCluster#spread_level}
    */
    readonly spreadLevel?: string;
}
export class EtcdPlacementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EtcdPlacementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._spreadLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.spreadLevel = this._spreadLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EtcdPlacementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._spreadLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._spreadLevel = value.spreadLevel;
        }
    }

    // spread_level - computed: true, optional: true, required: false
    private _spreadLevel?: string; 
    public get spreadLevel() {
        return this.getStringAttribute('spread_level');
    }
    public set spreadLevel(value: string) {
        this._spreadLevel = value;
    }
    public resetSpreadLevel() {
        this._spreadLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spreadLevelInput() {
        return this._spreadLevel;
    }
}
export interface OutpostConfigProperty {
    /**
    * The EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on AWS Outposts. This instance type applies to all control plane instances and cannot be changed after cluster creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_instance_type CcCluster#control_plane_instance_type}
    */
    readonly controlPlaneInstanceType?: string;
    /**
    * An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_placement CcCluster#control_plane_placement}
    */
    readonly controlPlanePlacement?: ControlPlanePlacementProperty;
    /**
    * The EC2 instance type for etcd instances of your local Amazon EKS cluster on AWS Outposts. This instance type applies to all etcd instances and cannot be changed after cluster creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#etcd_instance_type CcCluster#etcd_instance_type}
    */
    readonly etcdInstanceType?: string;
    /**
    * An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an AWS Outpost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#etcd_placement CcCluster#etcd_placement}
    */
    readonly etcdPlacement?: EtcdPlacementProperty;
    /**
    * The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#outpost_arns CcCluster#outpost_arns}
    */
    readonly outpostArns?: string[];
}
export class OutpostConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutpostConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._controlPlaneInstanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlPlaneInstanceType = this._controlPlaneInstanceType;
        }
        if (this._controlPlanePlacement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlPlanePlacement = this._controlPlanePlacement?.internalValue;
        }
        if (this._etcdInstanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.etcdInstanceType = this._etcdInstanceType;
        }
        if (this._etcdPlacement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.etcdPlacement = this._etcdPlacement?.internalValue;
        }
        if (this._outpostArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.outpostArns = this._outpostArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutpostConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._controlPlaneInstanceType = undefined;
            this._controlPlanePlacement.internalValue = undefined;
            this._etcdInstanceType = undefined;
            this._etcdPlacement.internalValue = undefined;
            this._outpostArns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._controlPlaneInstanceType = value.controlPlaneInstanceType;
            this._controlPlanePlacement.internalValue = value.controlPlanePlacement;
            this._etcdInstanceType = value.etcdInstanceType;
            this._etcdPlacement.internalValue = value.etcdPlacement;
            this._outpostArns = value.outpostArns;
        }
    }

    // control_plane_instance_type - computed: true, optional: true, required: false
    private _controlPlaneInstanceType?: string; 
    public get controlPlaneInstanceType() {
        return this.getStringAttribute('control_plane_instance_type');
    }
    public set controlPlaneInstanceType(value: string) {
        this._controlPlaneInstanceType = value;
    }
    public resetControlPlaneInstanceType() {
        this._controlPlaneInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPlaneInstanceTypeInput() {
        return this._controlPlaneInstanceType;
    }

    // control_plane_placement - computed: true, optional: true, required: false
    private _controlPlanePlacement = new ControlPlanePlacementPropertyOutputReference(this, "control_plane_placement");
    public get controlPlanePlacement() {
        return this._controlPlanePlacement;
    }
    public putControlPlanePlacement(value: ControlPlanePlacementProperty) {
        this._controlPlanePlacement.internalValue = value;
    }
    public resetControlPlanePlacement() {
        this._controlPlanePlacement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPlanePlacementInput() {
        return this._controlPlanePlacement.internalValue;
    }

    // etcd_instance_type - computed: true, optional: true, required: false
    private _etcdInstanceType?: string; 
    public get etcdInstanceType() {
        return this.getStringAttribute('etcd_instance_type');
    }
    public set etcdInstanceType(value: string) {
        this._etcdInstanceType = value;
    }
    public resetEtcdInstanceType() {
        this._etcdInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get etcdInstanceTypeInput() {
        return this._etcdInstanceType;
    }

    // etcd_placement - computed: true, optional: true, required: false
    private _etcdPlacement = new EtcdPlacementPropertyOutputReference(this, "etcd_placement");
    public get etcdPlacement() {
        return this._etcdPlacement;
    }
    public putEtcdPlacement(value: EtcdPlacementProperty) {
        this._etcdPlacement.internalValue = value;
    }
    public resetEtcdPlacement() {
        this._etcdPlacement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get etcdPlacementInput() {
        return this._etcdPlacement.internalValue;
    }

    // outpost_arns - computed: true, optional: true, required: false
    private _outpostArns?: string[]; 
    public get outpostArns() {
        return this.getListAttribute('outpost_arns');
    }
    public set outpostArns(value: string[]) {
        this._outpostArns = value;
    }
    public resetOutpostArns() {
        this._outpostArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnsInput() {
        return this._outpostArns;
    }
}
export interface RemoteNodeNetworkProperty {
    /**
    * Specifies the list of remote node CIDRs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#cidrs CcCluster#cidrs}
    */
    readonly cidrs?: string[];
}
export class RemoteNodeNetworkPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RemoteNodeNetworkProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrs = this._cidrs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RemoteNodeNetworkProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrs = value.cidrs;
        }
    }

    // cidrs - computed: true, optional: true, required: false
    private _cidrs?: string[]; 
    public get cidrs() {
        return this.getListAttribute('cidrs');
    }
    public set cidrs(value: string[]) {
        this._cidrs = value;
    }
    public resetCidrs() {
        this._cidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrsInput() {
        return this._cidrs;
    }
}

export class RemoteNodeNetworkPropertyList extends cdktn.ComplexList {
    public internalValue? : RemoteNodeNetworkProperty[] | cdktn.IResolvable

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
    public get(index: number): RemoteNodeNetworkPropertyOutputReference {
        return new RemoteNodeNetworkPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RemotePodNetworkProperty {
    /**
    * Specifies the list of remote pod CIDRs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#cidrs CcCluster#cidrs}
    */
    readonly cidrs?: string[];
}
export class RemotePodNetworkPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RemotePodNetworkProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrs = this._cidrs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RemotePodNetworkProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrs = value.cidrs;
        }
    }

    // cidrs - computed: true, optional: true, required: false
    private _cidrs?: string[]; 
    public get cidrs() {
        return this.getListAttribute('cidrs');
    }
    public set cidrs(value: string[]) {
        this._cidrs = value;
    }
    public resetCidrs() {
        this._cidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrsInput() {
        return this._cidrs;
    }
}

export class RemotePodNetworkPropertyList extends cdktn.ComplexList {
    public internalValue? : RemotePodNetworkProperty[] | cdktn.IResolvable

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
    public get(index: number): RemotePodNetworkPropertyOutputReference {
        return new RemotePodNetworkPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RemoteNetworkConfigProperty {
    /**
    * Network configuration of nodes run on-premises with EKS Hybrid Nodes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#remote_node_networks CcCluster#remote_node_networks}
    */
    readonly remoteNodeNetworks?: RemoteNodeNetworkProperty[] | cdktn.IResolvable;
    /**
    * Network configuration of pods run on-premises with EKS Hybrid Nodes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#remote_pod_networks CcCluster#remote_pod_networks}
    */
    readonly remotePodNetworks?: RemotePodNetworkProperty[] | cdktn.IResolvable;
}
export class RemoteNetworkConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RemoteNetworkConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._remoteNodeNetworks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.remoteNodeNetworks = this._remoteNodeNetworks?.internalValue;
        }
        if (this._remotePodNetworks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.remotePodNetworks = this._remotePodNetworks?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RemoteNetworkConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._remoteNodeNetworks.internalValue = undefined;
            this._remotePodNetworks.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._remoteNodeNetworks.internalValue = value.remoteNodeNetworks;
            this._remotePodNetworks.internalValue = value.remotePodNetworks;
        }
    }

    // remote_node_networks - computed: true, optional: true, required: false
    private _remoteNodeNetworks = new RemoteNodeNetworkPropertyList(this, "remote_node_networks", false);
    public get remoteNodeNetworks() {
        return this._remoteNodeNetworks;
    }
    public putRemoteNodeNetworks(value: RemoteNodeNetworkProperty[] | cdktn.IResolvable) {
        this._remoteNodeNetworks.internalValue = value;
    }
    public resetRemoteNodeNetworks() {
        this._remoteNodeNetworks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteNodeNetworksInput() {
        return this._remoteNodeNetworks.internalValue;
    }

    // remote_pod_networks - computed: true, optional: true, required: false
    private _remotePodNetworks = new RemotePodNetworkPropertyList(this, "remote_pod_networks", false);
    public get remotePodNetworks() {
        return this._remotePodNetworks;
    }
    public putRemotePodNetworks(value: RemotePodNetworkProperty[] | cdktn.IResolvable) {
        this._remotePodNetworks.internalValue = value;
    }
    public resetRemotePodNetworks() {
        this._remotePodNetworks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remotePodNetworksInput() {
        return this._remotePodNetworks.internalValue;
    }
}
export interface ResourcesVpcConfigProperty {
    /**
    * Specify the egress mode for the cluster control plane. If you set this to CUSTOMER_ROUTED, the control plane routes traffic through your VPC subnets instead of using AWS managed networking.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#control_plane_egress_mode CcCluster#control_plane_egress_mode}
    */
    readonly controlPlaneEgressMode?: string;
    /**
    * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#endpoint_private_access CcCluster#endpoint_private_access}
    */
    readonly endpointPrivateAccess?: boolean | cdktn.IResolvable;
    /**
    * Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#endpoint_public_access CcCluster#endpoint_public_access}
    */
    readonly endpointPublicAccess?: boolean | cdktn.IResolvable;
    /**
    * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#public_access_cidrs CcCluster#public_access_cidrs}
    */
    readonly publicAccessCidrs?: string[];
    /**
    * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#security_group_ids CcCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#subnet_ids CcCluster#subnet_ids}
    */
    readonly subnetIds: string[];
}
export class ResourcesVpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourcesVpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._controlPlaneEgressMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlPlaneEgressMode = this._controlPlaneEgressMode;
        }
        if (this._endpointPrivateAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointPrivateAccess = this._endpointPrivateAccess;
        }
        if (this._endpointPublicAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointPublicAccess = this._endpointPublicAccess;
        }
        if (this._publicAccessCidrs !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicAccessCidrs = this._publicAccessCidrs;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcesVpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._controlPlaneEgressMode = undefined;
            this._endpointPrivateAccess = undefined;
            this._endpointPublicAccess = undefined;
            this._publicAccessCidrs = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._controlPlaneEgressMode = value.controlPlaneEgressMode;
            this._endpointPrivateAccess = value.endpointPrivateAccess;
            this._endpointPublicAccess = value.endpointPublicAccess;
            this._publicAccessCidrs = value.publicAccessCidrs;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // control_plane_egress_mode - computed: true, optional: true, required: false
    private _controlPlaneEgressMode?: string; 
    public get controlPlaneEgressMode() {
        return this.getStringAttribute('control_plane_egress_mode');
    }
    public set controlPlaneEgressMode(value: string) {
        this._controlPlaneEgressMode = value;
    }
    public resetControlPlaneEgressMode() {
        this._controlPlaneEgressMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPlaneEgressModeInput() {
        return this._controlPlaneEgressMode;
    }

    // endpoint_private_access - computed: true, optional: true, required: false
    private _endpointPrivateAccess?: boolean | cdktn.IResolvable; 
    public get endpointPrivateAccess() {
        return this.getBooleanAttribute('endpoint_private_access');
    }
    public set endpointPrivateAccess(value: boolean | cdktn.IResolvable) {
        this._endpointPrivateAccess = value;
    }
    public resetEndpointPrivateAccess() {
        this._endpointPrivateAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointPrivateAccessInput() {
        return this._endpointPrivateAccess;
    }

    // endpoint_public_access - computed: true, optional: true, required: false
    private _endpointPublicAccess?: boolean | cdktn.IResolvable; 
    public get endpointPublicAccess() {
        return this.getBooleanAttribute('endpoint_public_access');
    }
    public set endpointPublicAccess(value: boolean | cdktn.IResolvable) {
        this._endpointPublicAccess = value;
    }
    public resetEndpointPublicAccess() {
        this._endpointPublicAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointPublicAccessInput() {
        return this._endpointPublicAccess;
    }

    // public_access_cidrs - computed: true, optional: true, required: false
    private _publicAccessCidrs?: string[]; 
    public get publicAccessCidrs() {
        return this.getListAttribute('public_access_cidrs');
    }
    public set publicAccessCidrs(value: string[]) {
        this._publicAccessCidrs = value;
    }
    public resetPublicAccessCidrs() {
        this._publicAccessCidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicAccessCidrsInput() {
        return this._publicAccessCidrs;
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

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
export interface RollbackConfigProperty {
    /**
    * The timeout in minutes for the version rollback operation. If not specified, defaults to 720 minutes (12 hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#timeout_minutes CcCluster#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
}
export class RollbackConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RollbackConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutMinutes = this._timeoutMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RollbackConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timeoutMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timeoutMinutes = value.timeoutMinutes;
        }
    }

    // timeout_minutes - computed: true, optional: true, required: false
    private _timeoutMinutes?: number; 
    public get timeoutMinutes() {
        return this.getNumberAttribute('timeout_minutes');
    }
    public set timeoutMinutes(value: number) {
        this._timeoutMinutes = value;
    }
    public resetTimeoutMinutes() {
        this._timeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMinutesInput() {
        return this._timeoutMinutes;
    }
}
export interface BlockStorageProperty {
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class BlockStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BlockStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlockStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface StorageConfigProperty {
    /**
    * Todo: add description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#block_storage CcCluster#block_storage}
    */
    readonly blockStorage?: BlockStorageProperty;
}
export class StorageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockStorage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockStorage = this._blockStorage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockStorage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockStorage.internalValue = value.blockStorage;
        }
    }

    // block_storage - computed: true, optional: true, required: false
    private _blockStorage = new BlockStoragePropertyOutputReference(this, "block_storage");
    public get blockStorage() {
        return this._blockStorage;
    }
    public putBlockStorage(value: BlockStorageProperty) {
        this._blockStorage.internalValue = value;
    }
    public resetBlockStorage() {
        this._blockStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockStorageInput() {
        return this._blockStorage.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#value CcCluster#value}
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
export interface UpgradePolicyProperty {
    /**
    * Specify the support type for your cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#support_type CcCluster#support_type}
    */
    readonly supportType?: string;
}
export class UpgradePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpgradePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._supportType !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportType = this._supportType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpgradePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._supportType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._supportType = value.supportType;
        }
    }

    // support_type - computed: true, optional: true, required: false
    private _supportType?: string; 
    public get supportType() {
        return this.getStringAttribute('support_type');
    }
    public set supportType(value: string) {
        this._supportType = value;
    }
    public resetSupportType() {
        this._supportType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportTypeInput() {
        return this._supportType;
    }
}
export interface ZonalShiftConfigProperty {
    /**
    * Set this value to true to enable zonal shift for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_cluster#enabled CcCluster#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ZonalShiftConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZonalShiftConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZonalShiftConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
}
