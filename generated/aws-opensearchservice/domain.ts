// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#access_policies CcDomain#access_policies}
    */
    readonly accessPolicies?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#advanced_options CcDomain#advanced_options}
    */
    readonly advancedOptions?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#advanced_security_options CcDomain#advanced_security_options}
    */
    readonly advancedSecurityOptions?: CcDomain.AdvancedSecurityOptionsInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#aiml_options CcDomain#aiml_options}
    */
    readonly aimlOptions?: CcDomain.AIMLOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#automated_snapshot_pause_options CcDomain#automated_snapshot_pause_options}
    */
    readonly automatedSnapshotPauseOptions?: CcDomain.AutomatedSnapshotPauseOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#cluster_config CcDomain#cluster_config}
    */
    readonly clusterConfig?: CcDomain.ClusterConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#cognito_options CcDomain#cognito_options}
    */
    readonly cognitoOptions?: CcDomain.CognitoOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#deployment_strategy_options CcDomain#deployment_strategy_options}
    */
    readonly deploymentStrategyOptions?: CcDomain.DeploymentStrategyOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#domain_endpoint_options CcDomain#domain_endpoint_options}
    */
    readonly domainEndpointOptions?: CcDomain.DomainEndpointOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#domain_name CcDomain#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#ebs_options CcDomain#ebs_options}
    */
    readonly ebsOptions?: CcDomain.EBSOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#encryption_at_rest_options CcDomain#encryption_at_rest_options}
    */
    readonly encryptionAtRestOptions?: CcDomain.EncryptionAtRestOptionsProperty;
    /**
    * The engine mode of the domain. Determines whether the domain runs the standard (GENERAL) engine or the optimized multi-engine (OPTIMIZED) engine. This value cannot be changed after the domain is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#engine_mode CcDomain#engine_mode}
    */
    readonly engineMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#engine_version CcDomain#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Options for configuring Identity Center
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#identity_center_options CcDomain#identity_center_options}
    */
    readonly identityCenterOptions?: CcDomain.IdentityCenterOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#ip_address_type CcDomain#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#log_publishing_options CcDomain#log_publishing_options}
    */
    readonly logPublishingOptions?: { [key: string]: CcDomain.LogPublishingOptionProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#node_to_node_encryption_options CcDomain#node_to_node_encryption_options}
    */
    readonly nodeToNodeEncryptionOptions?: CcDomain.NodeToNodeEncryptionOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#off_peak_window_options CcDomain#off_peak_window_options}
    */
    readonly offPeakWindowOptions?: CcDomain.OffPeakWindowOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#skip_shard_migration_wait CcDomain#skip_shard_migration_wait}
    */
    readonly skipShardMigrationWait?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#snapshot_options CcDomain#snapshot_options}
    */
    readonly snapshotOptions?: CcDomain.SnapshotOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#software_update_options CcDomain#software_update_options}
    */
    readonly softwareUpdateOptions?: CcDomain.SoftwareUpdateOptionsProperty;
    /**
    * An arbitrary set of tags (key-value pairs) for this Domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#tags CcDomain#tags}
    */
    readonly tags?: CcDomain.TagProperty[] | cdktn.IResolvable;
    /**
    * The primary use case of the domain. Determines the default configuration tuned for the workload. For GENERAL engine-mode domains, this value can be changed after creation. For OPTIMIZED engine-mode domains, this value cannot be changed after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#use_case CcDomain#use_case}
    */
    readonly useCase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#vpc_options CcDomain#vpc_options}
    */
    readonly vpcOptions?: CcDomain.VPCOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain awscc_opensearchservice_domain}
*/
export class CcDomain extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_opensearchservice_domain";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomain resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomain to import
    * @param importFromId The id of the existing CcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomain to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchservice_domain", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain awscc_opensearchservice_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDomainProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_opensearchservice_domain',
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
        this._accessPolicies = config.accessPolicies;
        this._advancedOptions = config.advancedOptions;
        this._advancedSecurityOptions.internalValue = config.advancedSecurityOptions;
        this._aimlOptions.internalValue = config.aimlOptions;
        this._automatedSnapshotPauseOptions.internalValue = config.automatedSnapshotPauseOptions;
        this._clusterConfig.internalValue = config.clusterConfig;
        this._cognitoOptions.internalValue = config.cognitoOptions;
        this._deploymentStrategyOptions.internalValue = config.deploymentStrategyOptions;
        this._domainEndpointOptions.internalValue = config.domainEndpointOptions;
        this._domainName = config.domainName;
        this._ebsOptions.internalValue = config.ebsOptions;
        this._encryptionAtRestOptions.internalValue = config.encryptionAtRestOptions;
        this._engineMode = config.engineMode;
        this._engineVersion = config.engineVersion;
        this._identityCenterOptions.internalValue = config.identityCenterOptions;
        this._ipAddressType = config.ipAddressType;
        this._logPublishingOptions.internalValue = config.logPublishingOptions;
        this._nodeToNodeEncryptionOptions.internalValue = config.nodeToNodeEncryptionOptions;
        this._offPeakWindowOptions.internalValue = config.offPeakWindowOptions;
        this._skipShardMigrationWait = config.skipShardMigrationWait;
        this._snapshotOptions.internalValue = config.snapshotOptions;
        this._softwareUpdateOptions.internalValue = config.softwareUpdateOptions;
        this._tags.internalValue = config.tags;
        this._useCase = config.useCase;
        this._vpcOptions.internalValue = config.vpcOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_policies - computed: true, optional: true, required: false
    private _accessPolicies?: string; 
    public get accessPolicies() {
        return this.getStringAttribute('access_policies');
    }
    public set accessPolicies(value: string) {
        this._accessPolicies = value;
    }
    public resetAccessPolicies() {
        this._accessPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPoliciesInput() {
        return this._accessPolicies;
    }

    // advanced_options - computed: true, optional: true, required: false
    private _advancedOptions?: { [key: string]: string }; 
    public get advancedOptions() {
        return this.getStringMapAttribute('advanced_options');
    }
    public set advancedOptions(value: { [key: string]: string }) {
        this._advancedOptions = value;
    }
    public resetAdvancedOptions() {
        this._advancedOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedOptionsInput() {
        return this._advancedOptions;
    }

    // advanced_security_options - computed: true, optional: true, required: false
    private _advancedSecurityOptions = new CcDomain.AdvancedSecurityOptionsInputPropertyOutputReference(this, "advanced_security_options");
    public get advancedSecurityOptions() {
        return this._advancedSecurityOptions;
    }
    public putAdvancedSecurityOptions(value: CcDomain.AdvancedSecurityOptionsInputProperty) {
        this._advancedSecurityOptions.internalValue = value;
    }
    public resetAdvancedSecurityOptions() {
        this._advancedSecurityOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedSecurityOptionsInput() {
        return this._advancedSecurityOptions.internalValue;
    }

    // aiml_options - computed: true, optional: true, required: false
    private _aimlOptions = new CcDomain.AIMLOptionsPropertyOutputReference(this, "aiml_options");
    public get aimlOptions() {
        return this._aimlOptions;
    }
    public putAimlOptions(value: CcDomain.AIMLOptionsProperty) {
        this._aimlOptions.internalValue = value;
    }
    public resetAimlOptions() {
        this._aimlOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aimlOptionsInput() {
        return this._aimlOptions.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // automated_snapshot_pause_options - computed: true, optional: true, required: false
    private _automatedSnapshotPauseOptions = new CcDomain.AutomatedSnapshotPauseOptionsPropertyOutputReference(this, "automated_snapshot_pause_options");
    public get automatedSnapshotPauseOptions() {
        return this._automatedSnapshotPauseOptions;
    }
    public putAutomatedSnapshotPauseOptions(value: CcDomain.AutomatedSnapshotPauseOptionsProperty) {
        this._automatedSnapshotPauseOptions.internalValue = value;
    }
    public resetAutomatedSnapshotPauseOptions() {
        this._automatedSnapshotPauseOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automatedSnapshotPauseOptionsInput() {
        return this._automatedSnapshotPauseOptions.internalValue;
    }

    // cluster_config - computed: true, optional: true, required: false
    private _clusterConfig = new CcDomain.ClusterConfigPropertyOutputReference(this, "cluster_config");
    public get clusterConfig() {
        return this._clusterConfig;
    }
    public putClusterConfig(value: CcDomain.ClusterConfigProperty) {
        this._clusterConfig.internalValue = value;
    }
    public resetClusterConfig() {
        this._clusterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterConfigInput() {
        return this._clusterConfig.internalValue;
    }

    // cognito_options - computed: true, optional: true, required: false
    private _cognitoOptions = new CcDomain.CognitoOptionsPropertyOutputReference(this, "cognito_options");
    public get cognitoOptions() {
        return this._cognitoOptions;
    }
    public putCognitoOptions(value: CcDomain.CognitoOptionsProperty) {
        this._cognitoOptions.internalValue = value;
    }
    public resetCognitoOptions() {
        this._cognitoOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoOptionsInput() {
        return this._cognitoOptions.internalValue;
    }

    // deployment_strategy_options - computed: true, optional: true, required: false
    private _deploymentStrategyOptions = new CcDomain.DeploymentStrategyOptionsPropertyOutputReference(this, "deployment_strategy_options");
    public get deploymentStrategyOptions() {
        return this._deploymentStrategyOptions;
    }
    public putDeploymentStrategyOptions(value: CcDomain.DeploymentStrategyOptionsProperty) {
        this._deploymentStrategyOptions.internalValue = value;
    }
    public resetDeploymentStrategyOptions() {
        this._deploymentStrategyOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentStrategyOptionsInput() {
        return this._deploymentStrategyOptions.internalValue;
    }

    // domain_arn - computed: true, optional: false, required: false
    public get domainArn() {
        return this.getStringAttribute('domain_arn');
    }

    // domain_endpoint - computed: true, optional: false, required: false
    public get domainEndpoint() {
        return this.getStringAttribute('domain_endpoint');
    }

    // domain_endpoint_options - computed: true, optional: true, required: false
    private _domainEndpointOptions = new CcDomain.DomainEndpointOptionsPropertyOutputReference(this, "domain_endpoint_options");
    public get domainEndpointOptions() {
        return this._domainEndpointOptions;
    }
    public putDomainEndpointOptions(value: CcDomain.DomainEndpointOptionsProperty) {
        this._domainEndpointOptions.internalValue = value;
    }
    public resetDomainEndpointOptions() {
        this._domainEndpointOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainEndpointOptionsInput() {
        return this._domainEndpointOptions.internalValue;
    }

    // domain_endpoint_v2 - computed: true, optional: false, required: false
    public get domainEndpointV2() {
        return this.getStringAttribute('domain_endpoint_v2');
    }

    // domain_endpoints - computed: true, optional: false, required: false
    private _domainEndpoints = new cdktn.StringMap(this, "domain_endpoints");
    public get domainEndpoints() {
        return this._domainEndpoints;
    }

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_name - computed: true, optional: true, required: false
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    public resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // ebs_options - computed: true, optional: true, required: false
    private _ebsOptions = new CcDomain.EBSOptionsPropertyOutputReference(this, "ebs_options");
    public get ebsOptions() {
        return this._ebsOptions;
    }
    public putEbsOptions(value: CcDomain.EBSOptionsProperty) {
        this._ebsOptions.internalValue = value;
    }
    public resetEbsOptions() {
        this._ebsOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptionsInput() {
        return this._ebsOptions.internalValue;
    }

    // encryption_at_rest_options - computed: true, optional: true, required: false
    private _encryptionAtRestOptions = new CcDomain.EncryptionAtRestOptionsPropertyOutputReference(this, "encryption_at_rest_options");
    public get encryptionAtRestOptions() {
        return this._encryptionAtRestOptions;
    }
    public putEncryptionAtRestOptions(value: CcDomain.EncryptionAtRestOptionsProperty) {
        this._encryptionAtRestOptions.internalValue = value;
    }
    public resetEncryptionAtRestOptions() {
        this._encryptionAtRestOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionAtRestOptionsInput() {
        return this._encryptionAtRestOptions.internalValue;
    }

    // engine_mode - computed: true, optional: true, required: false
    private _engineMode?: string; 
    public get engineMode() {
        return this.getStringAttribute('engine_mode');
    }
    public set engineMode(value: string) {
        this._engineMode = value;
    }
    public resetEngineMode() {
        this._engineMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineModeInput() {
        return this._engineMode;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string; 
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string) {
        this._engineVersion = value;
    }
    public resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_center_options - computed: true, optional: true, required: false
    private _identityCenterOptions = new CcDomain.IdentityCenterOptionsPropertyOutputReference(this, "identity_center_options");
    public get identityCenterOptions() {
        return this._identityCenterOptions;
    }
    public putIdentityCenterOptions(value: CcDomain.IdentityCenterOptionsProperty) {
        this._identityCenterOptions.internalValue = value;
    }
    public resetIdentityCenterOptions() {
        this._identityCenterOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterOptionsInput() {
        return this._identityCenterOptions.internalValue;
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // log_publishing_options - computed: true, optional: true, required: false
    private _logPublishingOptions = new CcDomain.LogPublishingOptionPropertyMap(this, "log_publishing_options");
    public get logPublishingOptions() {
        return this._logPublishingOptions;
    }
    public putLogPublishingOptions(value: { [key: string]: CcDomain.LogPublishingOptionProperty } | cdktn.IResolvable) {
        this._logPublishingOptions.internalValue = value;
    }
    public resetLogPublishingOptions() {
        this._logPublishingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPublishingOptionsInput() {
        return this._logPublishingOptions.internalValue;
    }

    // node_to_node_encryption_options - computed: true, optional: true, required: false
    private _nodeToNodeEncryptionOptions = new CcDomain.NodeToNodeEncryptionOptionsPropertyOutputReference(this, "node_to_node_encryption_options");
    public get nodeToNodeEncryptionOptions() {
        return this._nodeToNodeEncryptionOptions;
    }
    public putNodeToNodeEncryptionOptions(value: CcDomain.NodeToNodeEncryptionOptionsProperty) {
        this._nodeToNodeEncryptionOptions.internalValue = value;
    }
    public resetNodeToNodeEncryptionOptions() {
        this._nodeToNodeEncryptionOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeToNodeEncryptionOptionsInput() {
        return this._nodeToNodeEncryptionOptions.internalValue;
    }

    // off_peak_window_options - computed: true, optional: true, required: false
    private _offPeakWindowOptions = new CcDomain.OffPeakWindowOptionsPropertyOutputReference(this, "off_peak_window_options");
    public get offPeakWindowOptions() {
        return this._offPeakWindowOptions;
    }
    public putOffPeakWindowOptions(value: CcDomain.OffPeakWindowOptionsProperty) {
        this._offPeakWindowOptions.internalValue = value;
    }
    public resetOffPeakWindowOptions() {
        this._offPeakWindowOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offPeakWindowOptionsInput() {
        return this._offPeakWindowOptions.internalValue;
    }

    // service_software_options - computed: true, optional: false, required: false
    private _serviceSoftwareOptions = new CcDomain.ServiceSoftwareOptionsPropertyOutputReference(this, "service_software_options");
    public get serviceSoftwareOptions() {
        return this._serviceSoftwareOptions;
    }

    // skip_shard_migration_wait - computed: true, optional: true, required: false
    private _skipShardMigrationWait?: boolean | cdktn.IResolvable; 
    public get skipShardMigrationWait() {
        return this.getBooleanAttribute('skip_shard_migration_wait');
    }
    public set skipShardMigrationWait(value: boolean | cdktn.IResolvable) {
        this._skipShardMigrationWait = value;
    }
    public resetSkipShardMigrationWait() {
        this._skipShardMigrationWait = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipShardMigrationWaitInput() {
        return this._skipShardMigrationWait;
    }

    // snapshot_options - computed: true, optional: true, required: false
    private _snapshotOptions = new CcDomain.SnapshotOptionsPropertyOutputReference(this, "snapshot_options");
    public get snapshotOptions() {
        return this._snapshotOptions;
    }
    public putSnapshotOptions(value: CcDomain.SnapshotOptionsProperty) {
        this._snapshotOptions.internalValue = value;
    }
    public resetSnapshotOptions() {
        this._snapshotOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotOptionsInput() {
        return this._snapshotOptions.internalValue;
    }

    // software_update_options - computed: true, optional: true, required: false
    private _softwareUpdateOptions = new CcDomain.SoftwareUpdateOptionsPropertyOutputReference(this, "software_update_options");
    public get softwareUpdateOptions() {
        return this._softwareUpdateOptions;
    }
    public putSoftwareUpdateOptions(value: CcDomain.SoftwareUpdateOptionsProperty) {
        this._softwareUpdateOptions.internalValue = value;
    }
    public resetSoftwareUpdateOptions() {
        this._softwareUpdateOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get softwareUpdateOptionsInput() {
        return this._softwareUpdateOptions.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDomain.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDomain.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // use_case - computed: true, optional: true, required: false
    private _useCase?: string; 
    public get useCase() {
        return this.getStringAttribute('use_case');
    }
    public set useCase(value: string) {
        this._useCase = value;
    }
    public resetUseCase() {
        this._useCase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCaseInput() {
        return this._useCase;
    }

    // vpc_options - computed: true, optional: true, required: false
    private _vpcOptions = new CcDomain.VPCOptionsPropertyOutputReference(this, "vpc_options");
    public get vpcOptions() {
        return this._vpcOptions;
    }
    public putVpcOptions(value: CcDomain.VPCOptionsProperty) {
        this._vpcOptions.internalValue = value;
    }
    public resetVpcOptions() {
        this._vpcOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcOptionsInput() {
        return this._vpcOptions.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_policies: cdktn.stringToTerraform(this._accessPolicies),
            advanced_options: cdktn.hashMapper(cdktn.stringToTerraform)(this._advancedOptions),
            advanced_security_options: ccDomainAdvancedSecurityOptionsInputPropertyToTerraform(this._advancedSecurityOptions.internalValue),
            aiml_options: ccDomainAIMLOptionsPropertyToTerraform(this._aimlOptions.internalValue),
            automated_snapshot_pause_options: ccDomainAutomatedSnapshotPauseOptionsPropertyToTerraform(this._automatedSnapshotPauseOptions.internalValue),
            cluster_config: ccDomainClusterConfigPropertyToTerraform(this._clusterConfig.internalValue),
            cognito_options: ccDomainCognitoOptionsPropertyToTerraform(this._cognitoOptions.internalValue),
            deployment_strategy_options: ccDomainDeploymentStrategyOptionsPropertyToTerraform(this._deploymentStrategyOptions.internalValue),
            domain_endpoint_options: ccDomainDomainEndpointOptionsPropertyToTerraform(this._domainEndpointOptions.internalValue),
            domain_name: cdktn.stringToTerraform(this._domainName),
            ebs_options: ccDomainEBSOptionsPropertyToTerraform(this._ebsOptions.internalValue),
            encryption_at_rest_options: ccDomainEncryptionAtRestOptionsPropertyToTerraform(this._encryptionAtRestOptions.internalValue),
            engine_mode: cdktn.stringToTerraform(this._engineMode),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            identity_center_options: ccDomainIdentityCenterOptionsPropertyToTerraform(this._identityCenterOptions.internalValue),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            log_publishing_options: cdktn.hashMapper(ccDomainLogPublishingOptionPropertyToTerraform)(this._logPublishingOptions.internalValue),
            node_to_node_encryption_options: ccDomainNodeToNodeEncryptionOptionsPropertyToTerraform(this._nodeToNodeEncryptionOptions.internalValue),
            off_peak_window_options: ccDomainOffPeakWindowOptionsPropertyToTerraform(this._offPeakWindowOptions.internalValue),
            skip_shard_migration_wait: cdktn.booleanToTerraform(this._skipShardMigrationWait),
            snapshot_options: ccDomainSnapshotOptionsPropertyToTerraform(this._snapshotOptions.internalValue),
            software_update_options: ccDomainSoftwareUpdateOptionsPropertyToTerraform(this._softwareUpdateOptions.internalValue),
            tags: cdktn.listMapper(ccDomainTagPropertyToTerraform, false)(this._tags.internalValue),
            use_case: cdktn.stringToTerraform(this._useCase),
            vpc_options: ccDomainVPCOptionsPropertyToTerraform(this._vpcOptions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_policies: {
                value: cdktn.stringToHclTerraform(this._accessPolicies),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            advanced_options: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._advancedOptions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            advanced_security_options: {
                value: ccDomainAdvancedSecurityOptionsInputPropertyToHclTerraform(this._advancedSecurityOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.AdvancedSecurityOptionsInputProperty",
            },
            aiml_options: {
                value: ccDomainAIMLOptionsPropertyToHclTerraform(this._aimlOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.AIMLOptionsProperty",
            },
            automated_snapshot_pause_options: {
                value: ccDomainAutomatedSnapshotPauseOptionsPropertyToHclTerraform(this._automatedSnapshotPauseOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.AutomatedSnapshotPauseOptionsProperty",
            },
            cluster_config: {
                value: ccDomainClusterConfigPropertyToHclTerraform(this._clusterConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.ClusterConfigProperty",
            },
            cognito_options: {
                value: ccDomainCognitoOptionsPropertyToHclTerraform(this._cognitoOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.CognitoOptionsProperty",
            },
            deployment_strategy_options: {
                value: ccDomainDeploymentStrategyOptionsPropertyToHclTerraform(this._deploymentStrategyOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.DeploymentStrategyOptionsProperty",
            },
            domain_endpoint_options: {
                value: ccDomainDomainEndpointOptionsPropertyToHclTerraform(this._domainEndpointOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.DomainEndpointOptionsProperty",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ebs_options: {
                value: ccDomainEBSOptionsPropertyToHclTerraform(this._ebsOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.EBSOptionsProperty",
            },
            encryption_at_rest_options: {
                value: ccDomainEncryptionAtRestOptionsPropertyToHclTerraform(this._encryptionAtRestOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.EncryptionAtRestOptionsProperty",
            },
            engine_mode: {
                value: cdktn.stringToHclTerraform(this._engineMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_center_options: {
                value: ccDomainIdentityCenterOptionsPropertyToHclTerraform(this._identityCenterOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.IdentityCenterOptionsProperty",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_publishing_options: {
                value: cdktn.hashMapperHcl(ccDomainLogPublishingOptionPropertyToHclTerraform)(this._logPublishingOptions.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcDomain.LogPublishingOptionPropertyMap",
            },
            node_to_node_encryption_options: {
                value: ccDomainNodeToNodeEncryptionOptionsPropertyToHclTerraform(this._nodeToNodeEncryptionOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.NodeToNodeEncryptionOptionsProperty",
            },
            off_peak_window_options: {
                value: ccDomainOffPeakWindowOptionsPropertyToHclTerraform(this._offPeakWindowOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.OffPeakWindowOptionsProperty",
            },
            skip_shard_migration_wait: {
                value: cdktn.booleanToHclTerraform(this._skipShardMigrationWait),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            snapshot_options: {
                value: ccDomainSnapshotOptionsPropertyToHclTerraform(this._snapshotOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.SnapshotOptionsProperty",
            },
            software_update_options: {
                value: ccDomainSoftwareUpdateOptionsPropertyToHclTerraform(this._softwareUpdateOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.SoftwareUpdateOptionsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDomainTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDomain.TagPropertyList",
            },
            use_case: {
                value: cdktn.stringToHclTerraform(this._useCase),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_options: {
                value: ccDomainVPCOptionsPropertyToHclTerraform(this._vpcOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.VPCOptionsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainIAMFederationOptionsPropertyToTerraform(struct?: CcDomain.IAMFederationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        roles_key: cdktn.stringToTerraform(struct!.rolesKey),
        subject_key: cdktn.stringToTerraform(struct!.subjectKey),
    }
}


export function ccDomainIAMFederationOptionsPropertyToHclTerraform(struct?: CcDomain.IAMFederationOptionsProperty | cdktn.IResolvable): any {
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
        roles_key: {
            value: cdktn.stringToHclTerraform(struct!.rolesKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject_key: {
            value: cdktn.stringToHclTerraform(struct!.subjectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainJWTOptionsPropertyToTerraform(struct?: CcDomain.JWTOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        public_key: cdktn.stringToTerraform(struct!.publicKey),
        roles_key: cdktn.stringToTerraform(struct!.rolesKey),
        subject_key: cdktn.stringToTerraform(struct!.subjectKey),
    }
}


export function ccDomainJWTOptionsPropertyToHclTerraform(struct?: CcDomain.JWTOptionsProperty | cdktn.IResolvable): any {
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
        public_key: {
            value: cdktn.stringToHclTerraform(struct!.publicKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        roles_key: {
            value: cdktn.stringToHclTerraform(struct!.rolesKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject_key: {
            value: cdktn.stringToHclTerraform(struct!.subjectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainMasterUserOptionsPropertyToTerraform(struct?: CcDomain.MasterUserOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        master_user_arn: cdktn.stringToTerraform(struct!.masterUserArn),
        master_user_name: cdktn.stringToTerraform(struct!.masterUserName),
        master_user_password: cdktn.stringToTerraform(struct!.masterUserPassword),
    }
}


export function ccDomainMasterUserOptionsPropertyToHclTerraform(struct?: CcDomain.MasterUserOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        master_user_arn: {
            value: cdktn.stringToHclTerraform(struct!.masterUserArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        master_user_name: {
            value: cdktn.stringToHclTerraform(struct!.masterUserName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        master_user_password: {
            value: cdktn.stringToHclTerraform(struct!.masterUserPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainIdpPropertyToTerraform(struct?: CcDomain.IdpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        entity_id: cdktn.stringToTerraform(struct!.entityId),
        metadata_content: cdktn.stringToTerraform(struct!.metadataContent),
    }
}


export function ccDomainIdpPropertyToHclTerraform(struct?: CcDomain.IdpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        entity_id: {
            value: cdktn.stringToHclTerraform(struct!.entityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metadata_content: {
            value: cdktn.stringToHclTerraform(struct!.metadataContent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainSAMLOptionsPropertyToTerraform(struct?: CcDomain.SAMLOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        idp: ccDomainIdpPropertyToTerraform(struct!.idp),
        master_backend_role: cdktn.stringToTerraform(struct!.masterBackendRole),
        master_user_name: cdktn.stringToTerraform(struct!.masterUserName),
        roles_key: cdktn.stringToTerraform(struct!.rolesKey),
        session_timeout_minutes: cdktn.numberToTerraform(struct!.sessionTimeoutMinutes),
        subject_key: cdktn.stringToTerraform(struct!.subjectKey),
    }
}


export function ccDomainSAMLOptionsPropertyToHclTerraform(struct?: CcDomain.SAMLOptionsProperty | cdktn.IResolvable): any {
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
        idp: {
            value: ccDomainIdpPropertyToHclTerraform(struct!.idp),
            isBlock: true,
            type: "struct",
            storageClassType: "IdpProperty",
        },
        master_backend_role: {
            value: cdktn.stringToHclTerraform(struct!.masterBackendRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        master_user_name: {
            value: cdktn.stringToHclTerraform(struct!.masterUserName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        roles_key: {
            value: cdktn.stringToHclTerraform(struct!.rolesKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout_minutes: {
            value: cdktn.numberToHclTerraform(struct!.sessionTimeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        subject_key: {
            value: cdktn.stringToHclTerraform(struct!.subjectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainAdvancedSecurityOptionsInputPropertyToTerraform(struct?: CcDomain.AdvancedSecurityOptionsInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        anonymous_auth_enabled: cdktn.booleanToTerraform(struct!.anonymousAuthEnabled),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        iam_federation_options: ccDomainIAMFederationOptionsPropertyToTerraform(struct!.iamFederationOptions),
        internal_user_database_enabled: cdktn.booleanToTerraform(struct!.internalUserDatabaseEnabled),
        jwt_options: ccDomainJWTOptionsPropertyToTerraform(struct!.jwtOptions),
        master_user_options: ccDomainMasterUserOptionsPropertyToTerraform(struct!.masterUserOptions),
        saml_options: ccDomainSAMLOptionsPropertyToTerraform(struct!.samlOptions),
    }
}


export function ccDomainAdvancedSecurityOptionsInputPropertyToHclTerraform(struct?: CcDomain.AdvancedSecurityOptionsInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        anonymous_auth_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.anonymousAuthEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iam_federation_options: {
            value: ccDomainIAMFederationOptionsPropertyToHclTerraform(struct!.iamFederationOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "IAMFederationOptionsProperty",
        },
        internal_user_database_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.internalUserDatabaseEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        jwt_options: {
            value: ccDomainJWTOptionsPropertyToHclTerraform(struct!.jwtOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "JWTOptionsProperty",
        },
        master_user_options: {
            value: ccDomainMasterUserOptionsPropertyToHclTerraform(struct!.masterUserOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "MasterUserOptionsProperty",
        },
        saml_options: {
            value: ccDomainSAMLOptionsPropertyToHclTerraform(struct!.samlOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "SAMLOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainS3VectorsEnginePropertyToTerraform(struct?: CcDomain.S3VectorsEngineProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccDomainS3VectorsEnginePropertyToHclTerraform(struct?: CcDomain.S3VectorsEngineProperty | cdktn.IResolvable): any {
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


export function ccDomainServerlessVectorAccelerationPropertyToTerraform(struct?: CcDomain.ServerlessVectorAccelerationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccDomainServerlessVectorAccelerationPropertyToHclTerraform(struct?: CcDomain.ServerlessVectorAccelerationProperty | cdktn.IResolvable): any {
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


export function ccDomainAIMLOptionsPropertyToTerraform(struct?: CcDomain.AIMLOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_vectors_engine: ccDomainS3VectorsEnginePropertyToTerraform(struct!.s3VectorsEngine),
        serverless_vector_acceleration: ccDomainServerlessVectorAccelerationPropertyToTerraform(struct!.serverlessVectorAcceleration),
    }
}


export function ccDomainAIMLOptionsPropertyToHclTerraform(struct?: CcDomain.AIMLOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_vectors_engine: {
            value: ccDomainS3VectorsEnginePropertyToHclTerraform(struct!.s3VectorsEngine),
            isBlock: true,
            type: "struct",
            storageClassType: "S3VectorsEngineProperty",
        },
        serverless_vector_acceleration: {
            value: ccDomainServerlessVectorAccelerationPropertyToHclTerraform(struct!.serverlessVectorAcceleration),
            isBlock: true,
            type: "struct",
            storageClassType: "ServerlessVectorAccelerationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainAutomatedSnapshotPauseOptionsPropertyToTerraform(struct?: CcDomain.AutomatedSnapshotPauseOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccDomainAutomatedSnapshotPauseOptionsPropertyToHclTerraform(struct?: CcDomain.AutomatedSnapshotPauseOptionsProperty | cdktn.IResolvable): any {
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
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainColdStorageOptionsPropertyToTerraform(struct?: CcDomain.ColdStorageOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccDomainColdStorageOptionsPropertyToHclTerraform(struct?: CcDomain.ColdStorageOptionsProperty | cdktn.IResolvable): any {
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


export function ccDomainNodeConfigPropertyToTerraform(struct?: CcDomain.NodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        count: cdktn.numberToTerraform(struct!.count),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDomainNodeConfigPropertyToHclTerraform(struct?: CcDomain.NodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        count: {
            value: cdktn.numberToHclTerraform(struct!.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccDomainNodeOptionPropertyToTerraform(struct?: CcDomain.NodeOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        node_config: ccDomainNodeConfigPropertyToTerraform(struct!.nodeConfig),
        node_type: cdktn.stringToTerraform(struct!.nodeType),
    }
}


export function ccDomainNodeOptionPropertyToHclTerraform(struct?: CcDomain.NodeOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        node_config: {
            value: ccDomainNodeConfigPropertyToHclTerraform(struct!.nodeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "NodeConfigProperty",
        },
        node_type: {
            value: cdktn.stringToHclTerraform(struct!.nodeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainZoneAwarenessConfigPropertyToTerraform(struct?: CcDomain.ZoneAwarenessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone_count: cdktn.numberToTerraform(struct!.availabilityZoneCount),
    }
}


export function ccDomainZoneAwarenessConfigPropertyToHclTerraform(struct?: CcDomain.ZoneAwarenessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone_count: {
            value: cdktn.numberToHclTerraform(struct!.availabilityZoneCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainClusterConfigPropertyToTerraform(struct?: CcDomain.ClusterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cold_storage_options: ccDomainColdStorageOptionsPropertyToTerraform(struct!.coldStorageOptions),
        dedicated_master_count: cdktn.numberToTerraform(struct!.dedicatedMasterCount),
        dedicated_master_enabled: cdktn.booleanToTerraform(struct!.dedicatedMasterEnabled),
        dedicated_master_type: cdktn.stringToTerraform(struct!.dedicatedMasterType),
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        multi_az_with_standby_enabled: cdktn.booleanToTerraform(struct!.multiAzWithStandbyEnabled),
        node_options: cdktn.listMapper(ccDomainNodeOptionPropertyToTerraform, false)(struct!.nodeOptions),
        warm_count: cdktn.numberToTerraform(struct!.warmCount),
        warm_enabled: cdktn.booleanToTerraform(struct!.warmEnabled),
        warm_type: cdktn.stringToTerraform(struct!.warmType),
        zone_awareness_config: ccDomainZoneAwarenessConfigPropertyToTerraform(struct!.zoneAwarenessConfig),
        zone_awareness_enabled: cdktn.booleanToTerraform(struct!.zoneAwarenessEnabled),
    }
}


export function ccDomainClusterConfigPropertyToHclTerraform(struct?: CcDomain.ClusterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cold_storage_options: {
            value: ccDomainColdStorageOptionsPropertyToHclTerraform(struct!.coldStorageOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ColdStorageOptionsProperty",
        },
        dedicated_master_count: {
            value: cdktn.numberToHclTerraform(struct!.dedicatedMasterCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dedicated_master_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.dedicatedMasterEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dedicated_master_type: {
            value: cdktn.stringToHclTerraform(struct!.dedicatedMasterType),
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
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        multi_az_with_standby_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.multiAzWithStandbyEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        node_options: {
            value: cdktn.listMapperHcl(ccDomainNodeOptionPropertyToHclTerraform, false)(struct!.nodeOptions),
            isBlock: true,
            type: "list",
            storageClassType: "NodeOptionPropertyList",
        },
        warm_count: {
            value: cdktn.numberToHclTerraform(struct!.warmCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        warm_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.warmEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        warm_type: {
            value: cdktn.stringToHclTerraform(struct!.warmType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_awareness_config: {
            value: ccDomainZoneAwarenessConfigPropertyToHclTerraform(struct!.zoneAwarenessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ZoneAwarenessConfigProperty",
        },
        zone_awareness_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.zoneAwarenessEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainCognitoOptionsPropertyToTerraform(struct?: CcDomain.CognitoOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        identity_pool_id: cdktn.stringToTerraform(struct!.identityPoolId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        user_pool_id: cdktn.stringToTerraform(struct!.userPoolId),
    }
}


export function ccDomainCognitoOptionsPropertyToHclTerraform(struct?: CcDomain.CognitoOptionsProperty | cdktn.IResolvable): any {
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
        identity_pool_id: {
            value: cdktn.stringToHclTerraform(struct!.identityPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_id: {
            value: cdktn.stringToHclTerraform(struct!.userPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDeploymentStrategyOptionsPropertyToTerraform(struct?: CcDomain.DeploymentStrategyOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deployment_strategy: cdktn.stringToTerraform(struct!.deploymentStrategy),
    }
}


export function ccDomainDeploymentStrategyOptionsPropertyToHclTerraform(struct?: CcDomain.DeploymentStrategyOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deployment_strategy: {
            value: cdktn.stringToHclTerraform(struct!.deploymentStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainDomainEndpointOptionsPropertyToTerraform(struct?: CcDomain.DomainEndpointOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_endpoint: cdktn.stringToTerraform(struct!.customEndpoint),
        custom_endpoint_certificate_arn: cdktn.stringToTerraform(struct!.customEndpointCertificateArn),
        custom_endpoint_enabled: cdktn.booleanToTerraform(struct!.customEndpointEnabled),
        enforce_https: cdktn.booleanToTerraform(struct!.enforceHttps),
        tls_security_policy: cdktn.stringToTerraform(struct!.tlsSecurityPolicy),
    }
}


export function ccDomainDomainEndpointOptionsPropertyToHclTerraform(struct?: CcDomain.DomainEndpointOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.customEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_endpoint_certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.customEndpointCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_endpoint_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.customEndpointEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enforce_https: {
            value: cdktn.booleanToHclTerraform(struct!.enforceHttps),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        tls_security_policy: {
            value: cdktn.stringToHclTerraform(struct!.tlsSecurityPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainEBSOptionsPropertyToTerraform(struct?: CcDomain.EBSOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_enabled: cdktn.booleanToTerraform(struct!.ebsEnabled),
        iops: cdktn.numberToTerraform(struct!.iops),
        throughput: cdktn.numberToTerraform(struct!.throughput),
        volume_size: cdktn.numberToTerraform(struct!.volumeSize),
        volume_type: cdktn.stringToTerraform(struct!.volumeType),
    }
}


export function ccDomainEBSOptionsPropertyToHclTerraform(struct?: CcDomain.EBSOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.ebsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iops: {
            value: cdktn.numberToHclTerraform(struct!.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        throughput: {
            value: cdktn.numberToHclTerraform(struct!.throughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_size: {
            value: cdktn.numberToHclTerraform(struct!.volumeSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_type: {
            value: cdktn.stringToHclTerraform(struct!.volumeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainEncryptionAtRestOptionsPropertyToTerraform(struct?: CcDomain.EncryptionAtRestOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccDomainEncryptionAtRestOptionsPropertyToHclTerraform(struct?: CcDomain.EncryptionAtRestOptionsProperty | cdktn.IResolvable): any {
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
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainIdentityCenterOptionsPropertyToTerraform(struct?: CcDomain.IdentityCenterOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled_api_access: cdktn.booleanToTerraform(struct!.enabledApiAccess),
        identity_center_instance_arn: cdktn.stringToTerraform(struct!.identityCenterInstanceArn),
        roles_key: cdktn.stringToTerraform(struct!.rolesKey),
        subject_key: cdktn.stringToTerraform(struct!.subjectKey),
    }
}


export function ccDomainIdentityCenterOptionsPropertyToHclTerraform(struct?: CcDomain.IdentityCenterOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled_api_access: {
            value: cdktn.booleanToHclTerraform(struct!.enabledApiAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        identity_center_instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.identityCenterInstanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        roles_key: {
            value: cdktn.stringToHclTerraform(struct!.rolesKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subject_key: {
            value: cdktn.stringToHclTerraform(struct!.subjectKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainLogPublishingOptionPropertyToTerraform(struct?: CcDomain.LogPublishingOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_log_group_arn: cdktn.stringToTerraform(struct!.cloudwatchLogsLogGroupArn),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccDomainLogPublishingOptionPropertyToHclTerraform(struct?: CcDomain.LogPublishingOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.cloudwatchLogsLogGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccDomainNodeToNodeEncryptionOptionsPropertyToTerraform(struct?: CcDomain.NodeToNodeEncryptionOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccDomainNodeToNodeEncryptionOptionsPropertyToHclTerraform(struct?: CcDomain.NodeToNodeEncryptionOptionsProperty | cdktn.IResolvable): any {
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


export function ccDomainWindowStartTimePropertyToTerraform(struct?: CcDomain.WindowStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hours: cdktn.numberToTerraform(struct!.hours),
        minutes: cdktn.numberToTerraform(struct!.minutes),
    }
}


export function ccDomainWindowStartTimePropertyToHclTerraform(struct?: CcDomain.WindowStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hours: {
            value: cdktn.numberToHclTerraform(struct!.hours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minutes: {
            value: cdktn.numberToHclTerraform(struct!.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainOffPeakWindowPropertyToTerraform(struct?: CcDomain.OffPeakWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        window_start_time: ccDomainWindowStartTimePropertyToTerraform(struct!.windowStartTime),
    }
}


export function ccDomainOffPeakWindowPropertyToHclTerraform(struct?: CcDomain.OffPeakWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        window_start_time: {
            value: ccDomainWindowStartTimePropertyToHclTerraform(struct!.windowStartTime),
            isBlock: true,
            type: "struct",
            storageClassType: "WindowStartTimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainOffPeakWindowOptionsPropertyToTerraform(struct?: CcDomain.OffPeakWindowOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        off_peak_window: ccDomainOffPeakWindowPropertyToTerraform(struct!.offPeakWindow),
    }
}


export function ccDomainOffPeakWindowOptionsPropertyToHclTerraform(struct?: CcDomain.OffPeakWindowOptionsProperty | cdktn.IResolvable): any {
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
        off_peak_window: {
            value: ccDomainOffPeakWindowPropertyToHclTerraform(struct!.offPeakWindow),
            isBlock: true,
            type: "struct",
            storageClassType: "OffPeakWindowProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainServiceSoftwareOptionsPropertyToTerraform(struct?: CcDomain.ServiceSoftwareOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDomainServiceSoftwareOptionsPropertyToHclTerraform(struct?: CcDomain.ServiceSoftwareOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDomainSnapshotOptionsPropertyToTerraform(struct?: CcDomain.SnapshotOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automated_snapshot_start_hour: cdktn.numberToTerraform(struct!.automatedSnapshotStartHour),
    }
}


export function ccDomainSnapshotOptionsPropertyToHclTerraform(struct?: CcDomain.SnapshotOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        automated_snapshot_start_hour: {
            value: cdktn.numberToHclTerraform(struct!.automatedSnapshotStartHour),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainSoftwareUpdateOptionsPropertyToTerraform(struct?: CcDomain.SoftwareUpdateOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_software_update_enabled: cdktn.booleanToTerraform(struct!.autoSoftwareUpdateEnabled),
        use_latest_service_software_for_blue_green: cdktn.booleanToTerraform(struct!.useLatestServiceSoftwareForBlueGreen),
    }
}


export function ccDomainSoftwareUpdateOptionsPropertyToHclTerraform(struct?: CcDomain.SoftwareUpdateOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_software_update_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.autoSoftwareUpdateEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_latest_service_software_for_blue_green: {
            value: cdktn.booleanToHclTerraform(struct!.useLatestServiceSoftwareForBlueGreen),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainTagPropertyToTerraform(struct?: CcDomain.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDomainTagPropertyToHclTerraform(struct?: CcDomain.TagProperty | cdktn.IResolvable): any {
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


export function ccDomainVPCOptionsPropertyToTerraform(struct?: CcDomain.VPCOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        egress_enabled: cdktn.booleanToTerraform(struct!.egressEnabled),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccDomainVPCOptionsPropertyToHclTerraform(struct?: CcDomain.VPCOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        egress_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.egressEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export namespace CcDomain {
export interface IAMFederationOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#roles_key CcDomain#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#subject_key CcDomain#subject_key}
    */
    readonly subjectKey?: string;
}
export class IAMFederationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IAMFederationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._rolesKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.rolesKey = this._rolesKey;
        }
        if (this._subjectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectKey = this._subjectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IAMFederationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._rolesKey = undefined;
            this._subjectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._rolesKey = value.rolesKey;
            this._subjectKey = value.subjectKey;
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

    // roles_key - computed: true, optional: true, required: false
    private _rolesKey?: string; 
    public get rolesKey() {
        return this.getStringAttribute('roles_key');
    }
    public set rolesKey(value: string) {
        this._rolesKey = value;
    }
    public resetRolesKey() {
        this._rolesKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesKeyInput() {
        return this._rolesKey;
    }

    // subject_key - computed: true, optional: true, required: false
    private _subjectKey?: string; 
    public get subjectKey() {
        return this.getStringAttribute('subject_key');
    }
    public set subjectKey(value: string) {
        this._subjectKey = value;
    }
    public resetSubjectKey() {
        this._subjectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectKeyInput() {
        return this._subjectKey;
    }
}
export interface JWTOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#public_key CcDomain#public_key}
    */
    readonly publicKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#roles_key CcDomain#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#subject_key CcDomain#subject_key}
    */
    readonly subjectKey?: string;
}
export class JWTOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JWTOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._publicKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicKey = this._publicKey;
        }
        if (this._rolesKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.rolesKey = this._rolesKey;
        }
        if (this._subjectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectKey = this._subjectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JWTOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._publicKey = undefined;
            this._rolesKey = undefined;
            this._subjectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._publicKey = value.publicKey;
            this._rolesKey = value.rolesKey;
            this._subjectKey = value.subjectKey;
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

    // public_key - computed: true, optional: true, required: false
    private _publicKey?: string; 
    public get publicKey() {
        return this.getStringAttribute('public_key');
    }
    public set publicKey(value: string) {
        this._publicKey = value;
    }
    public resetPublicKey() {
        this._publicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicKeyInput() {
        return this._publicKey;
    }

    // roles_key - computed: true, optional: true, required: false
    private _rolesKey?: string; 
    public get rolesKey() {
        return this.getStringAttribute('roles_key');
    }
    public set rolesKey(value: string) {
        this._rolesKey = value;
    }
    public resetRolesKey() {
        this._rolesKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesKeyInput() {
        return this._rolesKey;
    }

    // subject_key - computed: true, optional: true, required: false
    private _subjectKey?: string; 
    public get subjectKey() {
        return this.getStringAttribute('subject_key');
    }
    public set subjectKey(value: string) {
        this._subjectKey = value;
    }
    public resetSubjectKey() {
        this._subjectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectKeyInput() {
        return this._subjectKey;
    }
}
export interface MasterUserOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#master_user_arn CcDomain#master_user_arn}
    */
    readonly masterUserArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#master_user_name CcDomain#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#master_user_password CcDomain#master_user_password}
    */
    readonly masterUserPassword?: string;
}
export class MasterUserOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MasterUserOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._masterUserArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterUserArn = this._masterUserArn;
        }
        if (this._masterUserName !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterUserName = this._masterUserName;
        }
        if (this._masterUserPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterUserPassword = this._masterUserPassword;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MasterUserOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._masterUserArn = undefined;
            this._masterUserName = undefined;
            this._masterUserPassword = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._masterUserArn = value.masterUserArn;
            this._masterUserName = value.masterUserName;
            this._masterUserPassword = value.masterUserPassword;
        }
    }

    // master_user_arn - computed: true, optional: true, required: false
    private _masterUserArn?: string; 
    public get masterUserArn() {
        return this.getStringAttribute('master_user_arn');
    }
    public set masterUserArn(value: string) {
        this._masterUserArn = value;
    }
    public resetMasterUserArn() {
        this._masterUserArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserArnInput() {
        return this._masterUserArn;
    }

    // master_user_name - computed: true, optional: true, required: false
    private _masterUserName?: string; 
    public get masterUserName() {
        return this.getStringAttribute('master_user_name');
    }
    public set masterUserName(value: string) {
        this._masterUserName = value;
    }
    public resetMasterUserName() {
        this._masterUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserNameInput() {
        return this._masterUserName;
    }

    // master_user_password - computed: true, optional: true, required: false
    private _masterUserPassword?: string; 
    public get masterUserPassword() {
        return this.getStringAttribute('master_user_password');
    }
    public set masterUserPassword(value: string) {
        this._masterUserPassword = value;
    }
    public resetMasterUserPassword() {
        this._masterUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserPasswordInput() {
        return this._masterUserPassword;
    }
}
export interface IdpProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#entity_id CcDomain#entity_id}
    */
    readonly entityId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#metadata_content CcDomain#metadata_content}
    */
    readonly metadataContent?: string;
}
export class IdpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._entityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityId = this._entityId;
        }
        if (this._metadataContent !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataContent = this._metadataContent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entityId = undefined;
            this._metadataContent = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entityId = value.entityId;
            this._metadataContent = value.metadataContent;
        }
    }

    // entity_id - computed: true, optional: true, required: false
    private _entityId?: string; 
    public get entityId() {
        return this.getStringAttribute('entity_id');
    }
    public set entityId(value: string) {
        this._entityId = value;
    }
    public resetEntityId() {
        this._entityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdInput() {
        return this._entityId;
    }

    // metadata_content - computed: true, optional: true, required: false
    private _metadataContent?: string; 
    public get metadataContent() {
        return this.getStringAttribute('metadata_content');
    }
    public set metadataContent(value: string) {
        this._metadataContent = value;
    }
    public resetMetadataContent() {
        this._metadataContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataContentInput() {
        return this._metadataContent;
    }
}
export interface SAMLOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#idp CcDomain#idp}
    */
    readonly idp?: IdpProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#master_backend_role CcDomain#master_backend_role}
    */
    readonly masterBackendRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#master_user_name CcDomain#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#roles_key CcDomain#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#session_timeout_minutes CcDomain#session_timeout_minutes}
    */
    readonly sessionTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#subject_key CcDomain#subject_key}
    */
    readonly subjectKey?: string;
}
export class SAMLOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SAMLOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._idp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.idp = this._idp?.internalValue;
        }
        if (this._masterBackendRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterBackendRole = this._masterBackendRole;
        }
        if (this._masterUserName !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterUserName = this._masterUserName;
        }
        if (this._rolesKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.rolesKey = this._rolesKey;
        }
        if (this._sessionTimeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeoutMinutes = this._sessionTimeoutMinutes;
        }
        if (this._subjectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectKey = this._subjectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAMLOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._idp.internalValue = undefined;
            this._masterBackendRole = undefined;
            this._masterUserName = undefined;
            this._rolesKey = undefined;
            this._sessionTimeoutMinutes = undefined;
            this._subjectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._idp.internalValue = value.idp;
            this._masterBackendRole = value.masterBackendRole;
            this._masterUserName = value.masterUserName;
            this._rolesKey = value.rolesKey;
            this._sessionTimeoutMinutes = value.sessionTimeoutMinutes;
            this._subjectKey = value.subjectKey;
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

    // idp - computed: true, optional: true, required: false
    private _idp = new IdpPropertyOutputReference(this, "idp");
    public get idp() {
        return this._idp;
    }
    public putIdp(value: IdpProperty) {
        this._idp.internalValue = value;
    }
    public resetIdp() {
        this._idp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idpInput() {
        return this._idp.internalValue;
    }

    // master_backend_role - computed: true, optional: true, required: false
    private _masterBackendRole?: string; 
    public get masterBackendRole() {
        return this.getStringAttribute('master_backend_role');
    }
    public set masterBackendRole(value: string) {
        this._masterBackendRole = value;
    }
    public resetMasterBackendRole() {
        this._masterBackendRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterBackendRoleInput() {
        return this._masterBackendRole;
    }

    // master_user_name - computed: true, optional: true, required: false
    private _masterUserName?: string; 
    public get masterUserName() {
        return this.getStringAttribute('master_user_name');
    }
    public set masterUserName(value: string) {
        this._masterUserName = value;
    }
    public resetMasterUserName() {
        this._masterUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserNameInput() {
        return this._masterUserName;
    }

    // roles_key - computed: true, optional: true, required: false
    private _rolesKey?: string; 
    public get rolesKey() {
        return this.getStringAttribute('roles_key');
    }
    public set rolesKey(value: string) {
        this._rolesKey = value;
    }
    public resetRolesKey() {
        this._rolesKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesKeyInput() {
        return this._rolesKey;
    }

    // session_timeout_minutes - computed: true, optional: true, required: false
    private _sessionTimeoutMinutes?: number; 
    public get sessionTimeoutMinutes() {
        return this.getNumberAttribute('session_timeout_minutes');
    }
    public set sessionTimeoutMinutes(value: number) {
        this._sessionTimeoutMinutes = value;
    }
    public resetSessionTimeoutMinutes() {
        this._sessionTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutMinutesInput() {
        return this._sessionTimeoutMinutes;
    }

    // subject_key - computed: true, optional: true, required: false
    private _subjectKey?: string; 
    public get subjectKey() {
        return this.getStringAttribute('subject_key');
    }
    public set subjectKey(value: string) {
        this._subjectKey = value;
    }
    public resetSubjectKey() {
        this._subjectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectKeyInput() {
        return this._subjectKey;
    }
}
export interface AdvancedSecurityOptionsInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#anonymous_auth_enabled CcDomain#anonymous_auth_enabled}
    */
    readonly anonymousAuthEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#iam_federation_options CcDomain#iam_federation_options}
    */
    readonly iamFederationOptions?: IAMFederationOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#internal_user_database_enabled CcDomain#internal_user_database_enabled}
    */
    readonly internalUserDatabaseEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#jwt_options CcDomain#jwt_options}
    */
    readonly jwtOptions?: JWTOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#master_user_options CcDomain#master_user_options}
    */
    readonly masterUserOptions?: MasterUserOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#saml_options CcDomain#saml_options}
    */
    readonly samlOptions?: SAMLOptionsProperty;
}
export class AdvancedSecurityOptionsInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdvancedSecurityOptionsInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._anonymousAuthEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.anonymousAuthEnabled = this._anonymousAuthEnabled;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._iamFederationOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamFederationOptions = this._iamFederationOptions?.internalValue;
        }
        if (this._internalUserDatabaseEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.internalUserDatabaseEnabled = this._internalUserDatabaseEnabled;
        }
        if (this._jwtOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtOptions = this._jwtOptions?.internalValue;
        }
        if (this._masterUserOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterUserOptions = this._masterUserOptions?.internalValue;
        }
        if (this._samlOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.samlOptions = this._samlOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedSecurityOptionsInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._anonymousAuthEnabled = undefined;
            this._enabled = undefined;
            this._iamFederationOptions.internalValue = undefined;
            this._internalUserDatabaseEnabled = undefined;
            this._jwtOptions.internalValue = undefined;
            this._masterUserOptions.internalValue = undefined;
            this._samlOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._anonymousAuthEnabled = value.anonymousAuthEnabled;
            this._enabled = value.enabled;
            this._iamFederationOptions.internalValue = value.iamFederationOptions;
            this._internalUserDatabaseEnabled = value.internalUserDatabaseEnabled;
            this._jwtOptions.internalValue = value.jwtOptions;
            this._masterUserOptions.internalValue = value.masterUserOptions;
            this._samlOptions.internalValue = value.samlOptions;
        }
    }

    // anonymous_auth_disable_date - computed: true, optional: false, required: false
    public get anonymousAuthDisableDate() {
        return this.getStringAttribute('anonymous_auth_disable_date');
    }

    // anonymous_auth_enabled - computed: true, optional: true, required: false
    private _anonymousAuthEnabled?: boolean | cdktn.IResolvable; 
    public get anonymousAuthEnabled() {
        return this.getBooleanAttribute('anonymous_auth_enabled');
    }
    public set anonymousAuthEnabled(value: boolean | cdktn.IResolvable) {
        this._anonymousAuthEnabled = value;
    }
    public resetAnonymousAuthEnabled() {
        this._anonymousAuthEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anonymousAuthEnabledInput() {
        return this._anonymousAuthEnabled;
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

    // iam_federation_options - computed: true, optional: true, required: false
    private _iamFederationOptions = new IAMFederationOptionsPropertyOutputReference(this, "iam_federation_options");
    public get iamFederationOptions() {
        return this._iamFederationOptions;
    }
    public putIamFederationOptions(value: IAMFederationOptionsProperty) {
        this._iamFederationOptions.internalValue = value;
    }
    public resetIamFederationOptions() {
        this._iamFederationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamFederationOptionsInput() {
        return this._iamFederationOptions.internalValue;
    }

    // internal_user_database_enabled - computed: true, optional: true, required: false
    private _internalUserDatabaseEnabled?: boolean | cdktn.IResolvable; 
    public get internalUserDatabaseEnabled() {
        return this.getBooleanAttribute('internal_user_database_enabled');
    }
    public set internalUserDatabaseEnabled(value: boolean | cdktn.IResolvable) {
        this._internalUserDatabaseEnabled = value;
    }
    public resetInternalUserDatabaseEnabled() {
        this._internalUserDatabaseEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internalUserDatabaseEnabledInput() {
        return this._internalUserDatabaseEnabled;
    }

    // jwt_options - computed: true, optional: true, required: false
    private _jwtOptions = new JWTOptionsPropertyOutputReference(this, "jwt_options");
    public get jwtOptions() {
        return this._jwtOptions;
    }
    public putJwtOptions(value: JWTOptionsProperty) {
        this._jwtOptions.internalValue = value;
    }
    public resetJwtOptions() {
        this._jwtOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtOptionsInput() {
        return this._jwtOptions.internalValue;
    }

    // master_user_options - computed: true, optional: true, required: false
    private _masterUserOptions = new MasterUserOptionsPropertyOutputReference(this, "master_user_options");
    public get masterUserOptions() {
        return this._masterUserOptions;
    }
    public putMasterUserOptions(value: MasterUserOptionsProperty) {
        this._masterUserOptions.internalValue = value;
    }
    public resetMasterUserOptions() {
        this._masterUserOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserOptionsInput() {
        return this._masterUserOptions.internalValue;
    }

    // saml_options - computed: true, optional: true, required: false
    private _samlOptions = new SAMLOptionsPropertyOutputReference(this, "saml_options");
    public get samlOptions() {
        return this._samlOptions;
    }
    public putSamlOptions(value: SAMLOptionsProperty) {
        this._samlOptions.internalValue = value;
    }
    public resetSamlOptions() {
        this._samlOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlOptionsInput() {
        return this._samlOptions.internalValue;
    }
}
export interface S3VectorsEngineProperty {
    /**
    * Whether to enable S3 vectors engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class S3VectorsEnginePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3VectorsEngineProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: S3VectorsEngineProperty | cdktn.IResolvable | undefined) {
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
export interface ServerlessVectorAccelerationProperty {
    /**
    * Whether to enable serverless vector acceleration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ServerlessVectorAccelerationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerlessVectorAccelerationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ServerlessVectorAccelerationProperty | cdktn.IResolvable | undefined) {
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
export interface AIMLOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#s3_vectors_engine CcDomain#s3_vectors_engine}
    */
    readonly s3VectorsEngine?: S3VectorsEngineProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#serverless_vector_acceleration CcDomain#serverless_vector_acceleration}
    */
    readonly serverlessVectorAcceleration?: ServerlessVectorAccelerationProperty;
}
export class AIMLOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AIMLOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3VectorsEngine?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3VectorsEngine = this._s3VectorsEngine?.internalValue;
        }
        if (this._serverlessVectorAcceleration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverlessVectorAcceleration = this._serverlessVectorAcceleration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AIMLOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3VectorsEngine.internalValue = undefined;
            this._serverlessVectorAcceleration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3VectorsEngine.internalValue = value.s3VectorsEngine;
            this._serverlessVectorAcceleration.internalValue = value.serverlessVectorAcceleration;
        }
    }

    // s3_vectors_engine - computed: true, optional: true, required: false
    private _s3VectorsEngine = new S3VectorsEnginePropertyOutputReference(this, "s3_vectors_engine");
    public get s3VectorsEngine() {
        return this._s3VectorsEngine;
    }
    public putS3VectorsEngine(value: S3VectorsEngineProperty) {
        this._s3VectorsEngine.internalValue = value;
    }
    public resetS3VectorsEngine() {
        this._s3VectorsEngine.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3VectorsEngineInput() {
        return this._s3VectorsEngine.internalValue;
    }

    // serverless_vector_acceleration - computed: true, optional: true, required: false
    private _serverlessVectorAcceleration = new ServerlessVectorAccelerationPropertyOutputReference(this, "serverless_vector_acceleration");
    public get serverlessVectorAcceleration() {
        return this._serverlessVectorAcceleration;
    }
    public putServerlessVectorAcceleration(value: ServerlessVectorAccelerationProperty) {
        this._serverlessVectorAcceleration.internalValue = value;
    }
    public resetServerlessVectorAcceleration() {
        this._serverlessVectorAcceleration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessVectorAccelerationInput() {
        return this._serverlessVectorAcceleration.internalValue;
    }
}
export interface AutomatedSnapshotPauseOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#end_time CcDomain#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#start_time CcDomain#start_time}
    */
    readonly startTime?: string;
}
export class AutomatedSnapshotPauseOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutomatedSnapshotPauseOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutomatedSnapshotPauseOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._endTime = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._endTime = value.endTime;
            this._startTime = value.startTime;
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

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}
export interface ColdStorageOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class ColdStorageOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ColdStorageOptionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ColdStorageOptionsProperty | cdktn.IResolvable | undefined) {
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
export interface NodeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#count CcDomain#count}
    */
    readonly count?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#type CcDomain#type}
    */
    readonly type?: string;
}
export class NodeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._count = undefined;
            this._enabled = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._count = value.count;
            this._enabled = value.enabled;
            this._type = value.type;
        }
    }

    // count - computed: true, optional: true, required: false
    private _count?: number; 
    public get count() {
        return this.getNumberAttribute('count');
    }
    public set count(value: number) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
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
export interface NodeOptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#node_config CcDomain#node_config}
    */
    readonly nodeConfig?: NodeConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#node_type CcDomain#node_type}
    */
    readonly nodeType?: string;
}
export class NodeOptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NodeOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nodeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
        }
        if (this._nodeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeType = this._nodeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nodeConfig.internalValue = undefined;
            this._nodeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nodeConfig.internalValue = value.nodeConfig;
            this._nodeType = value.nodeType;
        }
    }

    // node_config - computed: true, optional: true, required: false
    private _nodeConfig = new NodeConfigPropertyOutputReference(this, "node_config");
    public get nodeConfig() {
        return this._nodeConfig;
    }
    public putNodeConfig(value: NodeConfigProperty) {
        this._nodeConfig.internalValue = value;
    }
    public resetNodeConfig() {
        this._nodeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeConfigInput() {
        return this._nodeConfig.internalValue;
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
}

export class NodeOptionPropertyList extends cdktn.ComplexList {
    public internalValue? : NodeOptionProperty[] | cdktn.IResolvable

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
    public get(index: number): NodeOptionPropertyOutputReference {
        return new NodeOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ZoneAwarenessConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#availability_zone_count CcDomain#availability_zone_count}
    */
    readonly availabilityZoneCount?: number;
}
export class ZoneAwarenessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZoneAwarenessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZoneCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneCount = this._availabilityZoneCount;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZoneAwarenessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZoneCount = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZoneCount = value.availabilityZoneCount;
        }
    }

    // availability_zone_count - computed: true, optional: true, required: false
    private _availabilityZoneCount?: number; 
    public get availabilityZoneCount() {
        return this.getNumberAttribute('availability_zone_count');
    }
    public set availabilityZoneCount(value: number) {
        this._availabilityZoneCount = value;
    }
    public resetAvailabilityZoneCount() {
        this._availabilityZoneCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneCountInput() {
        return this._availabilityZoneCount;
    }
}
export interface ClusterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#cold_storage_options CcDomain#cold_storage_options}
    */
    readonly coldStorageOptions?: ColdStorageOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#dedicated_master_count CcDomain#dedicated_master_count}
    */
    readonly dedicatedMasterCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#dedicated_master_enabled CcDomain#dedicated_master_enabled}
    */
    readonly dedicatedMasterEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#dedicated_master_type CcDomain#dedicated_master_type}
    */
    readonly dedicatedMasterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#instance_count CcDomain#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#instance_type CcDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled CcDomain#multi_az_with_standby_enabled}
    */
    readonly multiAzWithStandbyEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#node_options CcDomain#node_options}
    */
    readonly nodeOptions?: NodeOptionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#warm_count CcDomain#warm_count}
    */
    readonly warmCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#warm_enabled CcDomain#warm_enabled}
    */
    readonly warmEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#warm_type CcDomain#warm_type}
    */
    readonly warmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#zone_awareness_config CcDomain#zone_awareness_config}
    */
    readonly zoneAwarenessConfig?: ZoneAwarenessConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#zone_awareness_enabled CcDomain#zone_awareness_enabled}
    */
    readonly zoneAwarenessEnabled?: boolean | cdktn.IResolvable;
}
export class ClusterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._coldStorageOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.coldStorageOptions = this._coldStorageOptions?.internalValue;
        }
        if (this._dedicatedMasterCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedicatedMasterCount = this._dedicatedMasterCount;
        }
        if (this._dedicatedMasterEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedicatedMasterEnabled = this._dedicatedMasterEnabled;
        }
        if (this._dedicatedMasterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dedicatedMasterType = this._dedicatedMasterType;
        }
        if (this._instanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._multiAzWithStandbyEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiAzWithStandbyEnabled = this._multiAzWithStandbyEnabled;
        }
        if (this._nodeOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeOptions = this._nodeOptions?.internalValue;
        }
        if (this._warmCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.warmCount = this._warmCount;
        }
        if (this._warmEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.warmEnabled = this._warmEnabled;
        }
        if (this._warmType !== undefined) {
            hasAnyValues = true;
            internalValueResult.warmType = this._warmType;
        }
        if (this._zoneAwarenessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneAwarenessConfig = this._zoneAwarenessConfig?.internalValue;
        }
        if (this._zoneAwarenessEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.zoneAwarenessEnabled = this._zoneAwarenessEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._coldStorageOptions.internalValue = undefined;
            this._dedicatedMasterCount = undefined;
            this._dedicatedMasterEnabled = undefined;
            this._dedicatedMasterType = undefined;
            this._instanceCount = undefined;
            this._instanceType = undefined;
            this._multiAzWithStandbyEnabled = undefined;
            this._nodeOptions.internalValue = undefined;
            this._warmCount = undefined;
            this._warmEnabled = undefined;
            this._warmType = undefined;
            this._zoneAwarenessConfig.internalValue = undefined;
            this._zoneAwarenessEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._coldStorageOptions.internalValue = value.coldStorageOptions;
            this._dedicatedMasterCount = value.dedicatedMasterCount;
            this._dedicatedMasterEnabled = value.dedicatedMasterEnabled;
            this._dedicatedMasterType = value.dedicatedMasterType;
            this._instanceCount = value.instanceCount;
            this._instanceType = value.instanceType;
            this._multiAzWithStandbyEnabled = value.multiAzWithStandbyEnabled;
            this._nodeOptions.internalValue = value.nodeOptions;
            this._warmCount = value.warmCount;
            this._warmEnabled = value.warmEnabled;
            this._warmType = value.warmType;
            this._zoneAwarenessConfig.internalValue = value.zoneAwarenessConfig;
            this._zoneAwarenessEnabled = value.zoneAwarenessEnabled;
        }
    }

    // cold_storage_options - computed: true, optional: true, required: false
    private _coldStorageOptions = new ColdStorageOptionsPropertyOutputReference(this, "cold_storage_options");
    public get coldStorageOptions() {
        return this._coldStorageOptions;
    }
    public putColdStorageOptions(value: ColdStorageOptionsProperty) {
        this._coldStorageOptions.internalValue = value;
    }
    public resetColdStorageOptions() {
        this._coldStorageOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coldStorageOptionsInput() {
        return this._coldStorageOptions.internalValue;
    }

    // dedicated_master_count - computed: true, optional: true, required: false
    private _dedicatedMasterCount?: number; 
    public get dedicatedMasterCount() {
        return this.getNumberAttribute('dedicated_master_count');
    }
    public set dedicatedMasterCount(value: number) {
        this._dedicatedMasterCount = value;
    }
    public resetDedicatedMasterCount() {
        this._dedicatedMasterCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedMasterCountInput() {
        return this._dedicatedMasterCount;
    }

    // dedicated_master_enabled - computed: true, optional: true, required: false
    private _dedicatedMasterEnabled?: boolean | cdktn.IResolvable; 
    public get dedicatedMasterEnabled() {
        return this.getBooleanAttribute('dedicated_master_enabled');
    }
    public set dedicatedMasterEnabled(value: boolean | cdktn.IResolvable) {
        this._dedicatedMasterEnabled = value;
    }
    public resetDedicatedMasterEnabled() {
        this._dedicatedMasterEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedMasterEnabledInput() {
        return this._dedicatedMasterEnabled;
    }

    // dedicated_master_type - computed: true, optional: true, required: false
    private _dedicatedMasterType?: string; 
    public get dedicatedMasterType() {
        return this.getStringAttribute('dedicated_master_type');
    }
    public set dedicatedMasterType(value: string) {
        this._dedicatedMasterType = value;
    }
    public resetDedicatedMasterType() {
        this._dedicatedMasterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedMasterTypeInput() {
        return this._dedicatedMasterType;
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

    // multi_az_with_standby_enabled - computed: true, optional: true, required: false
    private _multiAzWithStandbyEnabled?: boolean | cdktn.IResolvable; 
    public get multiAzWithStandbyEnabled() {
        return this.getBooleanAttribute('multi_az_with_standby_enabled');
    }
    public set multiAzWithStandbyEnabled(value: boolean | cdktn.IResolvable) {
        this._multiAzWithStandbyEnabled = value;
    }
    public resetMultiAzWithStandbyEnabled() {
        this._multiAzWithStandbyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzWithStandbyEnabledInput() {
        return this._multiAzWithStandbyEnabled;
    }

    // node_options - computed: true, optional: true, required: false
    private _nodeOptions = new NodeOptionPropertyList(this, "node_options", false);
    public get nodeOptions() {
        return this._nodeOptions;
    }
    public putNodeOptions(value: NodeOptionProperty[] | cdktn.IResolvable) {
        this._nodeOptions.internalValue = value;
    }
    public resetNodeOptions() {
        this._nodeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeOptionsInput() {
        return this._nodeOptions.internalValue;
    }

    // warm_count - computed: true, optional: true, required: false
    private _warmCount?: number; 
    public get warmCount() {
        return this.getNumberAttribute('warm_count');
    }
    public set warmCount(value: number) {
        this._warmCount = value;
    }
    public resetWarmCount() {
        this._warmCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmCountInput() {
        return this._warmCount;
    }

    // warm_enabled - computed: true, optional: true, required: false
    private _warmEnabled?: boolean | cdktn.IResolvable; 
    public get warmEnabled() {
        return this.getBooleanAttribute('warm_enabled');
    }
    public set warmEnabled(value: boolean | cdktn.IResolvable) {
        this._warmEnabled = value;
    }
    public resetWarmEnabled() {
        this._warmEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmEnabledInput() {
        return this._warmEnabled;
    }

    // warm_type - computed: true, optional: true, required: false
    private _warmType?: string; 
    public get warmType() {
        return this.getStringAttribute('warm_type');
    }
    public set warmType(value: string) {
        this._warmType = value;
    }
    public resetWarmType() {
        this._warmType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmTypeInput() {
        return this._warmType;
    }

    // zone_awareness_config - computed: true, optional: true, required: false
    private _zoneAwarenessConfig = new ZoneAwarenessConfigPropertyOutputReference(this, "zone_awareness_config");
    public get zoneAwarenessConfig() {
        return this._zoneAwarenessConfig;
    }
    public putZoneAwarenessConfig(value: ZoneAwarenessConfigProperty) {
        this._zoneAwarenessConfig.internalValue = value;
    }
    public resetZoneAwarenessConfig() {
        this._zoneAwarenessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneAwarenessConfigInput() {
        return this._zoneAwarenessConfig.internalValue;
    }

    // zone_awareness_enabled - computed: true, optional: true, required: false
    private _zoneAwarenessEnabled?: boolean | cdktn.IResolvable; 
    public get zoneAwarenessEnabled() {
        return this.getBooleanAttribute('zone_awareness_enabled');
    }
    public set zoneAwarenessEnabled(value: boolean | cdktn.IResolvable) {
        this._zoneAwarenessEnabled = value;
    }
    public resetZoneAwarenessEnabled() {
        this._zoneAwarenessEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneAwarenessEnabledInput() {
        return this._zoneAwarenessEnabled;
    }
}
export interface CognitoOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#identity_pool_id CcDomain#identity_pool_id}
    */
    readonly identityPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#role_arn CcDomain#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#user_pool_id CcDomain#user_pool_id}
    */
    readonly userPoolId?: string;
}
export class CognitoOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CognitoOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._identityPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityPoolId = this._identityPoolId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._userPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolId = this._userPoolId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CognitoOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._identityPoolId = undefined;
            this._roleArn = undefined;
            this._userPoolId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._identityPoolId = value.identityPoolId;
            this._roleArn = value.roleArn;
            this._userPoolId = value.userPoolId;
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

    // identity_pool_id - computed: true, optional: true, required: false
    private _identityPoolId?: string; 
    public get identityPoolId() {
        return this.getStringAttribute('identity_pool_id');
    }
    public set identityPoolId(value: string) {
        this._identityPoolId = value;
    }
    public resetIdentityPoolId() {
        this._identityPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolIdInput() {
        return this._identityPoolId;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // user_pool_id - computed: true, optional: true, required: false
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    public resetUserPoolId() {
        this._userPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }
}
export interface DeploymentStrategyOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#deployment_strategy CcDomain#deployment_strategy}
    */
    readonly deploymentStrategy?: string;
}
export class DeploymentStrategyOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentStrategyOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deploymentStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentStrategy = this._deploymentStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentStrategyOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentStrategy = value.deploymentStrategy;
        }
    }

    // deployment_strategy - computed: true, optional: true, required: false
    private _deploymentStrategy?: string; 
    public get deploymentStrategy() {
        return this.getStringAttribute('deployment_strategy');
    }
    public set deploymentStrategy(value: string) {
        this._deploymentStrategy = value;
    }
    public resetDeploymentStrategy() {
        this._deploymentStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentStrategyInput() {
        return this._deploymentStrategy;
    }
}
export interface DomainEndpointOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#custom_endpoint CcDomain#custom_endpoint}
    */
    readonly customEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn CcDomain#custom_endpoint_certificate_arn}
    */
    readonly customEndpointCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#custom_endpoint_enabled CcDomain#custom_endpoint_enabled}
    */
    readonly customEndpointEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enforce_https CcDomain#enforce_https}
    */
    readonly enforceHttps?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#tls_security_policy CcDomain#tls_security_policy}
    */
    readonly tlsSecurityPolicy?: string;
}
export class DomainEndpointOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainEndpointOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.customEndpoint = this._customEndpoint;
        }
        if (this._customEndpointCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.customEndpointCertificateArn = this._customEndpointCertificateArn;
        }
        if (this._customEndpointEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.customEndpointEnabled = this._customEndpointEnabled;
        }
        if (this._enforceHttps !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforceHttps = this._enforceHttps;
        }
        if (this._tlsSecurityPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlsSecurityPolicy = this._tlsSecurityPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainEndpointOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customEndpoint = undefined;
            this._customEndpointCertificateArn = undefined;
            this._customEndpointEnabled = undefined;
            this._enforceHttps = undefined;
            this._tlsSecurityPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customEndpoint = value.customEndpoint;
            this._customEndpointCertificateArn = value.customEndpointCertificateArn;
            this._customEndpointEnabled = value.customEndpointEnabled;
            this._enforceHttps = value.enforceHttps;
            this._tlsSecurityPolicy = value.tlsSecurityPolicy;
        }
    }

    // custom_endpoint - computed: true, optional: true, required: false
    private _customEndpoint?: string; 
    public get customEndpoint() {
        return this.getStringAttribute('custom_endpoint');
    }
    public set customEndpoint(value: string) {
        this._customEndpoint = value;
    }
    public resetCustomEndpoint() {
        this._customEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEndpointInput() {
        return this._customEndpoint;
    }

    // custom_endpoint_certificate_arn - computed: true, optional: true, required: false
    private _customEndpointCertificateArn?: string; 
    public get customEndpointCertificateArn() {
        return this.getStringAttribute('custom_endpoint_certificate_arn');
    }
    public set customEndpointCertificateArn(value: string) {
        this._customEndpointCertificateArn = value;
    }
    public resetCustomEndpointCertificateArn() {
        this._customEndpointCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEndpointCertificateArnInput() {
        return this._customEndpointCertificateArn;
    }

    // custom_endpoint_enabled - computed: true, optional: true, required: false
    private _customEndpointEnabled?: boolean | cdktn.IResolvable; 
    public get customEndpointEnabled() {
        return this.getBooleanAttribute('custom_endpoint_enabled');
    }
    public set customEndpointEnabled(value: boolean | cdktn.IResolvable) {
        this._customEndpointEnabled = value;
    }
    public resetCustomEndpointEnabled() {
        this._customEndpointEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEndpointEnabledInput() {
        return this._customEndpointEnabled;
    }

    // enforce_https - computed: true, optional: true, required: false
    private _enforceHttps?: boolean | cdktn.IResolvable; 
    public get enforceHttps() {
        return this.getBooleanAttribute('enforce_https');
    }
    public set enforceHttps(value: boolean | cdktn.IResolvable) {
        this._enforceHttps = value;
    }
    public resetEnforceHttps() {
        this._enforceHttps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceHttpsInput() {
        return this._enforceHttps;
    }

    // tls_security_policy - computed: true, optional: true, required: false
    private _tlsSecurityPolicy?: string; 
    public get tlsSecurityPolicy() {
        return this.getStringAttribute('tls_security_policy');
    }
    public set tlsSecurityPolicy(value: string) {
        this._tlsSecurityPolicy = value;
    }
    public resetTlsSecurityPolicy() {
        this._tlsSecurityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsSecurityPolicyInput() {
        return this._tlsSecurityPolicy;
    }
}
export interface EBSOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#ebs_enabled CcDomain#ebs_enabled}
    */
    readonly ebsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#iops CcDomain#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#throughput CcDomain#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#volume_size CcDomain#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#volume_type CcDomain#volume_type}
    */
    readonly volumeType?: string;
}
export class EBSOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EBSOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsEnabled = this._ebsEnabled;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSize = this._volumeSize;
        }
        if (this._volumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EBSOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsEnabled = undefined;
            this._iops = undefined;
            this._throughput = undefined;
            this._volumeSize = undefined;
            this._volumeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsEnabled = value.ebsEnabled;
            this._iops = value.iops;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }

    // ebs_enabled - computed: true, optional: true, required: false
    private _ebsEnabled?: boolean | cdktn.IResolvable; 
    public get ebsEnabled() {
        return this.getBooleanAttribute('ebs_enabled');
    }
    public set ebsEnabled(value: boolean | cdktn.IResolvable) {
        this._ebsEnabled = value;
    }
    public resetEbsEnabled() {
        this._ebsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsEnabledInput() {
        return this._ebsEnabled;
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number; 
    public get iops() {
        return this.getNumberAttribute('iops');
    }
    public set iops(value: number) {
        this._iops = value;
    }
    public resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
        return this._iops;
    }

    // throughput - computed: true, optional: true, required: false
    private _throughput?: number; 
    public get throughput() {
        return this.getNumberAttribute('throughput');
    }
    public set throughput(value: number) {
        this._throughput = value;
    }
    public resetThroughput() {
        this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputInput() {
        return this._throughput;
    }

    // volume_size - computed: true, optional: true, required: false
    private _volumeSize?: number; 
    public get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number) {
        this._volumeSize = value;
    }
    public resetVolumeSize() {
        this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
        return this._volumeSize;
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
}
export interface EncryptionAtRestOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#kms_key_id CcDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class EncryptionAtRestOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionAtRestOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionAtRestOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._kmsKeyId = value.kmsKeyId;
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
}
export interface IdentityCenterOptionsProperty {
    /**
    * Whether Identity Center is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled_api_access CcDomain#enabled_api_access}
    */
    readonly enabledApiAccess?: boolean | cdktn.IResolvable;
    /**
    * The ARN of the Identity Center instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#identity_center_instance_arn CcDomain#identity_center_instance_arn}
    */
    readonly identityCenterInstanceArn?: string;
    /**
    * The roles key for Identity Center options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#roles_key CcDomain#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * The subject key for Identity Center options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#subject_key CcDomain#subject_key}
    */
    readonly subjectKey?: string;
}
export class IdentityCenterOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityCenterOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabledApiAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledApiAccess = this._enabledApiAccess;
        }
        if (this._identityCenterInstanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityCenterInstanceArn = this._identityCenterInstanceArn;
        }
        if (this._rolesKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.rolesKey = this._rolesKey;
        }
        if (this._subjectKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectKey = this._subjectKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityCenterOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabledApiAccess = undefined;
            this._identityCenterInstanceArn = undefined;
            this._rolesKey = undefined;
            this._subjectKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabledApiAccess = value.enabledApiAccess;
            this._identityCenterInstanceArn = value.identityCenterInstanceArn;
            this._rolesKey = value.rolesKey;
            this._subjectKey = value.subjectKey;
        }
    }

    // enabled_api_access - computed: true, optional: true, required: false
    private _enabledApiAccess?: boolean | cdktn.IResolvable; 
    public get enabledApiAccess() {
        return this.getBooleanAttribute('enabled_api_access');
    }
    public set enabledApiAccess(value: boolean | cdktn.IResolvable) {
        this._enabledApiAccess = value;
    }
    public resetEnabledApiAccess() {
        this._enabledApiAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledApiAccessInput() {
        return this._enabledApiAccess;
    }

    // identity_center_application_arn - computed: true, optional: false, required: false
    public get identityCenterApplicationArn() {
        return this.getStringAttribute('identity_center_application_arn');
    }

    // identity_center_instance_arn - computed: true, optional: true, required: false
    private _identityCenterInstanceArn?: string; 
    public get identityCenterInstanceArn() {
        return this.getStringAttribute('identity_center_instance_arn');
    }
    public set identityCenterInstanceArn(value: string) {
        this._identityCenterInstanceArn = value;
    }
    public resetIdentityCenterInstanceArn() {
        this._identityCenterInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityCenterInstanceArnInput() {
        return this._identityCenterInstanceArn;
    }

    // identity_store_id - computed: true, optional: false, required: false
    public get identityStoreId() {
        return this.getStringAttribute('identity_store_id');
    }

    // roles_key - computed: true, optional: true, required: false
    private _rolesKey?: string; 
    public get rolesKey() {
        return this.getStringAttribute('roles_key');
    }
    public set rolesKey(value: string) {
        this._rolesKey = value;
    }
    public resetRolesKey() {
        this._rolesKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesKeyInput() {
        return this._rolesKey;
    }

    // subject_key - computed: true, optional: true, required: false
    private _subjectKey?: string; 
    public get subjectKey() {
        return this.getStringAttribute('subject_key');
    }
    public set subjectKey(value: string) {
        this._subjectKey = value;
    }
    public resetSubjectKey() {
        this._subjectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectKeyInput() {
        return this._subjectKey;
    }
}
export interface LogPublishingOptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn CcDomain#cloudwatch_logs_log_group_arn}
    */
    readonly cloudwatchLogsLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class LogPublishingOptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): LogPublishingOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsLogGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsLogGroupArn = this._cloudwatchLogsLogGroupArn;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogPublishingOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogGroupArn = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogGroupArn = value.cloudwatchLogsLogGroupArn;
            this._enabled = value.enabled;
        }
    }

    // cloudwatch_logs_log_group_arn - computed: true, optional: true, required: false
    private _cloudwatchLogsLogGroupArn?: string; 
    public get cloudwatchLogsLogGroupArn() {
        return this.getStringAttribute('cloudwatch_logs_log_group_arn');
    }
    public set cloudwatchLogsLogGroupArn(value: string) {
        this._cloudwatchLogsLogGroupArn = value;
    }
    public resetCloudwatchLogsLogGroupArn() {
        this._cloudwatchLogsLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsLogGroupArnInput() {
        return this._cloudwatchLogsLogGroupArn;
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

export class LogPublishingOptionPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: LogPublishingOptionProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): LogPublishingOptionPropertyOutputReference {
        return new LogPublishingOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface NodeToNodeEncryptionOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class NodeToNodeEncryptionOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NodeToNodeEncryptionOptionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NodeToNodeEncryptionOptionsProperty | cdktn.IResolvable | undefined) {
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
export interface WindowStartTimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#hours CcDomain#hours}
    */
    readonly hours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#minutes CcDomain#minutes}
    */
    readonly minutes?: number;
}
export class WindowStartTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WindowStartTimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hours !== undefined) {
            hasAnyValues = true;
            internalValueResult.hours = this._hours;
        }
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WindowStartTimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hours = undefined;
            this._minutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hours = value.hours;
            this._minutes = value.minutes;
        }
    }

    // hours - computed: true, optional: true, required: false
    private _hours?: number; 
    public get hours() {
        return this.getNumberAttribute('hours');
    }
    public set hours(value: number) {
        this._hours = value;
    }
    public resetHours() {
        this._hours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursInput() {
        return this._hours;
    }

    // minutes - computed: true, optional: true, required: false
    private _minutes?: number; 
    public get minutes() {
        return this.getNumberAttribute('minutes');
    }
    public set minutes(value: number) {
        this._minutes = value;
    }
    public resetMinutes() {
        this._minutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minutesInput() {
        return this._minutes;
    }
}
export interface OffPeakWindowProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#window_start_time CcDomain#window_start_time}
    */
    readonly windowStartTime?: WindowStartTimeProperty;
}
export class OffPeakWindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OffPeakWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._windowStartTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowStartTime = this._windowStartTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OffPeakWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._windowStartTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._windowStartTime.internalValue = value.windowStartTime;
        }
    }

    // window_start_time - computed: true, optional: true, required: false
    private _windowStartTime = new WindowStartTimePropertyOutputReference(this, "window_start_time");
    public get windowStartTime() {
        return this._windowStartTime;
    }
    public putWindowStartTime(value: WindowStartTimeProperty) {
        this._windowStartTime.internalValue = value;
    }
    public resetWindowStartTime() {
        this._windowStartTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowStartTimeInput() {
        return this._windowStartTime.internalValue;
    }
}
export interface OffPeakWindowOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#enabled CcDomain#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#off_peak_window CcDomain#off_peak_window}
    */
    readonly offPeakWindow?: OffPeakWindowProperty;
}
export class OffPeakWindowOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OffPeakWindowOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._offPeakWindow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.offPeakWindow = this._offPeakWindow?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OffPeakWindowOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._offPeakWindow.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._offPeakWindow.internalValue = value.offPeakWindow;
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

    // off_peak_window - computed: true, optional: true, required: false
    private _offPeakWindow = new OffPeakWindowPropertyOutputReference(this, "off_peak_window");
    public get offPeakWindow() {
        return this._offPeakWindow;
    }
    public putOffPeakWindow(value: OffPeakWindowProperty) {
        this._offPeakWindow.internalValue = value;
    }
    public resetOffPeakWindow() {
        this._offPeakWindow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offPeakWindowInput() {
        return this._offPeakWindow.internalValue;
    }
}
export interface ServiceSoftwareOptionsProperty {
}
export class ServiceSoftwareOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceSoftwareOptionsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceSoftwareOptionsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // automated_update_date - computed: true, optional: false, required: false
    public get automatedUpdateDate() {
        return this.getStringAttribute('automated_update_date');
    }

    // cancellable - computed: true, optional: false, required: false
    public get cancellable() {
        return this.getBooleanAttribute('cancellable');
    }

    // current_version - computed: true, optional: false, required: false
    public get currentVersion() {
        return this.getStringAttribute('current_version');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // new_version - computed: true, optional: false, required: false
    public get newVersion() {
        return this.getStringAttribute('new_version');
    }

    // optional_deployment - computed: true, optional: false, required: false
    public get optionalDeployment() {
        return this.getBooleanAttribute('optional_deployment');
    }

    // update_available - computed: true, optional: false, required: false
    public get updateAvailable() {
        return this.getBooleanAttribute('update_available');
    }

    // update_status - computed: true, optional: false, required: false
    public get updateStatus() {
        return this.getStringAttribute('update_status');
    }
}
export interface SnapshotOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#automated_snapshot_start_hour CcDomain#automated_snapshot_start_hour}
    */
    readonly automatedSnapshotStartHour?: number;
}
export class SnapshotOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnapshotOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._automatedSnapshotStartHour !== undefined) {
            hasAnyValues = true;
            internalValueResult.automatedSnapshotStartHour = this._automatedSnapshotStartHour;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnapshotOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._automatedSnapshotStartHour = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._automatedSnapshotStartHour = value.automatedSnapshotStartHour;
        }
    }

    // automated_snapshot_start_hour - computed: true, optional: true, required: false
    private _automatedSnapshotStartHour?: number; 
    public get automatedSnapshotStartHour() {
        return this.getNumberAttribute('automated_snapshot_start_hour');
    }
    public set automatedSnapshotStartHour(value: number) {
        this._automatedSnapshotStartHour = value;
    }
    public resetAutomatedSnapshotStartHour() {
        this._automatedSnapshotStartHour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automatedSnapshotStartHourInput() {
        return this._automatedSnapshotStartHour;
    }
}
export interface SoftwareUpdateOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#auto_software_update_enabled CcDomain#auto_software_update_enabled}
    */
    readonly autoSoftwareUpdateEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#use_latest_service_software_for_blue_green CcDomain#use_latest_service_software_for_blue_green}
    */
    readonly useLatestServiceSoftwareForBlueGreen?: boolean | cdktn.IResolvable;
}
export class SoftwareUpdateOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SoftwareUpdateOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoSoftwareUpdateEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoSoftwareUpdateEnabled = this._autoSoftwareUpdateEnabled;
        }
        if (this._useLatestServiceSoftwareForBlueGreen !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLatestServiceSoftwareForBlueGreen = this._useLatestServiceSoftwareForBlueGreen;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SoftwareUpdateOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoSoftwareUpdateEnabled = undefined;
            this._useLatestServiceSoftwareForBlueGreen = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoSoftwareUpdateEnabled = value.autoSoftwareUpdateEnabled;
            this._useLatestServiceSoftwareForBlueGreen = value.useLatestServiceSoftwareForBlueGreen;
        }
    }

    // auto_software_update_enabled - computed: true, optional: true, required: false
    private _autoSoftwareUpdateEnabled?: boolean | cdktn.IResolvable; 
    public get autoSoftwareUpdateEnabled() {
        return this.getBooleanAttribute('auto_software_update_enabled');
    }
    public set autoSoftwareUpdateEnabled(value: boolean | cdktn.IResolvable) {
        this._autoSoftwareUpdateEnabled = value;
    }
    public resetAutoSoftwareUpdateEnabled() {
        this._autoSoftwareUpdateEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoSoftwareUpdateEnabledInput() {
        return this._autoSoftwareUpdateEnabled;
    }

    // use_latest_service_software_for_blue_green - computed: true, optional: true, required: false
    private _useLatestServiceSoftwareForBlueGreen?: boolean | cdktn.IResolvable; 
    public get useLatestServiceSoftwareForBlueGreen() {
        return this.getBooleanAttribute('use_latest_service_software_for_blue_green');
    }
    public set useLatestServiceSoftwareForBlueGreen(value: boolean | cdktn.IResolvable) {
        this._useLatestServiceSoftwareForBlueGreen = value;
    }
    public resetUseLatestServiceSoftwareForBlueGreen() {
        this._useLatestServiceSoftwareForBlueGreen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLatestServiceSoftwareForBlueGreenInput() {
        return this._useLatestServiceSoftwareForBlueGreen;
    }
}
export interface TagProperty {
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#key CcDomain#key}
    */
    readonly key?: string;
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#value CcDomain#value}
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
export interface VPCOptionsProperty {
    /**
    * Controls whether egress traffic from the domain is routed through the customer VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#egress_enabled CcDomain#egress_enabled}
    */
    readonly egressEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#security_group_ids CcDomain#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchservice_domain#subnet_ids CcDomain#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class VPCOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VPCOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._egressEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.egressEnabled = this._egressEnabled;
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

    public set internalValue(value: VPCOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._egressEnabled = undefined;
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
            this._egressEnabled = value.egressEnabled;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // egress_enabled - computed: true, optional: true, required: false
    private _egressEnabled?: boolean | cdktn.IResolvable; 
    public get egressEnabled() {
        return this.getBooleanAttribute('egress_enabled');
    }
    public set egressEnabled(value: boolean | cdktn.IResolvable) {
        this._egressEnabled = value;
    }
    public resetEgressEnabled() {
        this._egressEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressEnabledInput() {
        return this._egressEnabled;
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
}
}
