// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNotebookInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance. Currently, only one instance type can be associated with a notebook instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#accelerator_types CcNotebookInstance#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#additional_code_repositories CcNotebookInstance#additional_code_repositories}
    */
    readonly additionalCodeRepositories?: string[];
    /**
    * The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#default_code_repository CcNotebookInstance#default_code_repository}
    */
    readonly defaultCodeRepository?: string;
    /**
    * Sets whether SageMaker AI provides internet access to the notebook instance. If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#direct_internet_access CcNotebookInstance#direct_internet_access}
    */
    readonly directInternetAccess?: string;
    /**
    * Information on the IMDS configuration of the notebook instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_metadata_service_configuration CcNotebookInstance#instance_metadata_service_configuration}
    */
    readonly instanceMetadataServiceConfiguration?: CcNotebookInstance.InstanceMetadataServiceConfigurationProperty;
    /**
    * The type of ML compute instance to launch for the notebook instance. Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#instance_type CcNotebookInstance#instance_type}
    */
    readonly instanceType: string;
    /**
    * The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#kms_key_id CcNotebookInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of a lifecycle configuration to associate with the notebook instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#lifecycle_config_name CcNotebookInstance#lifecycle_config_name}
    */
    readonly lifecycleConfigName?: string;
    /**
    * The name of the new notebook instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#notebook_instance_name CcNotebookInstance#notebook_instance_name}
    */
    readonly notebookInstanceName?: string;
    /**
    * The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#platform_identifier CcNotebookInstance#platform_identifier}
    */
    readonly platformIdentifier?: string;
    /**
    * When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. To be able to pass this role to SageMaker AI, the caller of this API must have the iam:PassRole permission.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#role_arn CcNotebookInstance#role_arn}
    */
    readonly roleArn: string;
    /**
    * Whether root access is enabled or disabled for users of the notebook instance. The default value is Enabled. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#root_access CcNotebookInstance#root_access}
    */
    readonly rootAccess?: string;
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#security_group_ids CcNotebookInstance#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#subnet_id CcNotebookInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * A list of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#tags CcNotebookInstance#tags}
    */
    readonly tags?: CcNotebookInstance.TagProperty[] | cdktn.IResolvable;
    /**
    * The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB. Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#volume_size_in_gb CcNotebookInstance#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance awscc_sagemaker_notebook_instance}
*/
export class CcNotebookInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_notebook_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNotebookInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNotebookInstance to import
    * @param importFromId The id of the existing CcNotebookInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNotebookInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_notebook_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance awscc_sagemaker_notebook_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNotebookInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcNotebookInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_notebook_instance',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._acceleratorTypes = config.acceleratorTypes;
        this._additionalCodeRepositories = config.additionalCodeRepositories;
        this._defaultCodeRepository = config.defaultCodeRepository;
        this._directInternetAccess = config.directInternetAccess;
        this._instanceMetadataServiceConfiguration.internalValue = config.instanceMetadataServiceConfiguration;
        this._instanceType = config.instanceType;
        this._kmsKeyId = config.kmsKeyId;
        this._lifecycleConfigName = config.lifecycleConfigName;
        this._notebookInstanceName = config.notebookInstanceName;
        this._platformIdentifier = config.platformIdentifier;
        this._roleArn = config.roleArn;
        this._rootAccess = config.rootAccess;
        this._securityGroupIds = config.securityGroupIds;
        this._subnetId = config.subnetId;
        this._tags.internalValue = config.tags;
        this._volumeSizeInGb = config.volumeSizeInGb;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accelerator_types - computed: true, optional: true, required: false
    private _acceleratorTypes?: string[]; 
    public get acceleratorTypes() {
        return this.getListAttribute('accelerator_types');
    }
    public set acceleratorTypes(value: string[]) {
        this._acceleratorTypes = value;
    }
    public resetAcceleratorTypes() {
        this._acceleratorTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorTypesInput() {
        return this._acceleratorTypes;
    }

    // additional_code_repositories - computed: true, optional: true, required: false
    private _additionalCodeRepositories?: string[]; 
    public get additionalCodeRepositories() {
        return this.getListAttribute('additional_code_repositories');
    }
    public set additionalCodeRepositories(value: string[]) {
        this._additionalCodeRepositories = value;
    }
    public resetAdditionalCodeRepositories() {
        this._additionalCodeRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalCodeRepositoriesInput() {
        return this._additionalCodeRepositories;
    }

    // default_code_repository - computed: true, optional: true, required: false
    private _defaultCodeRepository?: string; 
    public get defaultCodeRepository() {
        return this.getStringAttribute('default_code_repository');
    }
    public set defaultCodeRepository(value: string) {
        this._defaultCodeRepository = value;
    }
    public resetDefaultCodeRepository() {
        this._defaultCodeRepository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCodeRepositoryInput() {
        return this._defaultCodeRepository;
    }

    // direct_internet_access - computed: true, optional: true, required: false
    private _directInternetAccess?: string; 
    public get directInternetAccess() {
        return this.getStringAttribute('direct_internet_access');
    }
    public set directInternetAccess(value: string) {
        this._directInternetAccess = value;
    }
    public resetDirectInternetAccess() {
        this._directInternetAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directInternetAccessInput() {
        return this._directInternetAccess;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_metadata_service_configuration - computed: true, optional: true, required: false
    private _instanceMetadataServiceConfiguration = new CcNotebookInstance.InstanceMetadataServiceConfigurationPropertyOutputReference(this, "instance_metadata_service_configuration");
    public get instanceMetadataServiceConfiguration() {
        return this._instanceMetadataServiceConfiguration;
    }
    public putInstanceMetadataServiceConfiguration(value: CcNotebookInstance.InstanceMetadataServiceConfigurationProperty) {
        this._instanceMetadataServiceConfiguration.internalValue = value;
    }
    public resetInstanceMetadataServiceConfiguration() {
        this._instanceMetadataServiceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMetadataServiceConfigurationInput() {
        return this._instanceMetadataServiceConfiguration.internalValue;
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
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

    // lifecycle_config_name - computed: true, optional: true, required: false
    private _lifecycleConfigName?: string; 
    public get lifecycleConfigName() {
        return this.getStringAttribute('lifecycle_config_name');
    }
    public set lifecycleConfigName(value: string) {
        this._lifecycleConfigName = value;
    }
    public resetLifecycleConfigName() {
        this._lifecycleConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigNameInput() {
        return this._lifecycleConfigName;
    }

    // notebook_instance_arn - computed: true, optional: false, required: false
    public get notebookInstanceArn() {
        return this.getStringAttribute('notebook_instance_arn');
    }

    // notebook_instance_name - computed: true, optional: true, required: false
    private _notebookInstanceName?: string; 
    public get notebookInstanceName() {
        return this.getStringAttribute('notebook_instance_name');
    }
    public set notebookInstanceName(value: string) {
        this._notebookInstanceName = value;
    }
    public resetNotebookInstanceName() {
        this._notebookInstanceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notebookInstanceNameInput() {
        return this._notebookInstanceName;
    }

    // platform_identifier - computed: true, optional: true, required: false
    private _platformIdentifier?: string; 
    public get platformIdentifier() {
        return this.getStringAttribute('platform_identifier');
    }
    public set platformIdentifier(value: string) {
        this._platformIdentifier = value;
    }
    public resetPlatformIdentifier() {
        this._platformIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformIdentifierInput() {
        return this._platformIdentifier;
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

    // root_access - computed: true, optional: true, required: false
    private _rootAccess?: string; 
    public get rootAccess() {
        return this.getStringAttribute('root_access');
    }
    public set rootAccess(value: string) {
        this._rootAccess = value;
    }
    public resetRootAccess() {
        this._rootAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootAccessInput() {
        return this._rootAccess;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNotebookInstance.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNotebookInstance.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._acceleratorTypes),
            additional_code_repositories: cdktn.listMapper(cdktn.stringToTerraform, false)(this._additionalCodeRepositories),
            default_code_repository: cdktn.stringToTerraform(this._defaultCodeRepository),
            direct_internet_access: cdktn.stringToTerraform(this._directInternetAccess),
            instance_metadata_service_configuration: ccNotebookInstanceInstanceMetadataServiceConfigurationPropertyToTerraform(this._instanceMetadataServiceConfiguration.internalValue),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            lifecycle_config_name: cdktn.stringToTerraform(this._lifecycleConfigName),
            notebook_instance_name: cdktn.stringToTerraform(this._notebookInstanceName),
            platform_identifier: cdktn.stringToTerraform(this._platformIdentifier),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            root_access: cdktn.stringToTerraform(this._rootAccess),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
            tags: cdktn.listMapper(ccNotebookInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
            volume_size_in_gb: cdktn.numberToTerraform(this._volumeSizeInGb),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accelerator_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._acceleratorTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            additional_code_repositories: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._additionalCodeRepositories),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            default_code_repository: {
                value: cdktn.stringToHclTerraform(this._defaultCodeRepository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direct_internet_access: {
                value: cdktn.stringToHclTerraform(this._directInternetAccess),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_metadata_service_configuration: {
                value: ccNotebookInstanceInstanceMetadataServiceConfigurationPropertyToHclTerraform(this._instanceMetadataServiceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNotebookInstance.InstanceMetadataServiceConfigurationProperty",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
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
            lifecycle_config_name: {
                value: cdktn.stringToHclTerraform(this._lifecycleConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notebook_instance_name: {
                value: cdktn.stringToHclTerraform(this._notebookInstanceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            platform_identifier: {
                value: cdktn.stringToHclTerraform(this._platformIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            root_access: {
                value: cdktn.stringToHclTerraform(this._rootAccess),
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
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNotebookInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNotebookInstance.TagPropertyList",
            },
            volume_size_in_gb: {
                value: cdktn.numberToHclTerraform(this._volumeSizeInGb),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNotebookInstanceInstanceMetadataServiceConfigurationPropertyToTerraform(struct?: CcNotebookInstance.InstanceMetadataServiceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        minimum_instance_metadata_service_version: cdktn.stringToTerraform(struct!.minimumInstanceMetadataServiceVersion),
    }
}


export function ccNotebookInstanceInstanceMetadataServiceConfigurationPropertyToHclTerraform(struct?: CcNotebookInstance.InstanceMetadataServiceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        minimum_instance_metadata_service_version: {
            value: cdktn.stringToHclTerraform(struct!.minimumInstanceMetadataServiceVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNotebookInstanceTagPropertyToTerraform(struct?: CcNotebookInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNotebookInstanceTagPropertyToHclTerraform(struct?: CcNotebookInstance.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNotebookInstance {
export interface InstanceMetadataServiceConfigurationProperty {
    /**
    * Indicates the minimum IMDS version that the notebook instance supports. When passed as part of CreateNotebookInstance, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of UpdateNotebookInstance, there is no default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#minimum_instance_metadata_service_version CcNotebookInstance#minimum_instance_metadata_service_version}
    */
    readonly minimumInstanceMetadataServiceVersion?: string;
}
export class InstanceMetadataServiceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceMetadataServiceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._minimumInstanceMetadataServiceVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumInstanceMetadataServiceVersion = this._minimumInstanceMetadataServiceVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceMetadataServiceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._minimumInstanceMetadataServiceVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._minimumInstanceMetadataServiceVersion = value.minimumInstanceMetadataServiceVersion;
        }
    }

    // minimum_instance_metadata_service_version - computed: true, optional: true, required: false
    private _minimumInstanceMetadataServiceVersion?: string; 
    public get minimumInstanceMetadataServiceVersion() {
        return this.getStringAttribute('minimum_instance_metadata_service_version');
    }
    public set minimumInstanceMetadataServiceVersion(value: string) {
        this._minimumInstanceMetadataServiceVersion = value;
    }
    public resetMinimumInstanceMetadataServiceVersion() {
        this._minimumInstanceMetadataServiceVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumInstanceMetadataServiceVersionInput() {
        return this._minimumInstanceMetadataServiceVersion;
    }
}
export interface TagProperty {
    /**
    * The tag key. Tag keys must be unique per resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#key CcNotebookInstance#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_notebook_instance#value CcNotebookInstance#value}
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
