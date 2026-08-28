// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcModelProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies the containers in the inference pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#containers CcModel#containers}
    */
    readonly containers?: CcModel.ContainerDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#enable_network_isolation CcModel#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that you specified for the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#execution_role_arn CcModel#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Specifies details about how containers in a multi-container endpoint are run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#inference_execution_config CcModel#inference_execution_config}
    */
    readonly inferenceExecutionConfig?: CcModel.InferenceExecutionConfigProperty;
    /**
    * The name of the new model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_name CcModel#model_name}
    */
    readonly modelName?: string;
    /**
    * Describes the container, as part of model definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#primary_container CcModel#primary_container}
    */
    readonly primaryContainer?: CcModel.PrimaryContainerProperty;
    /**
    * An array of key-value pairs. You can use tags to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#tags CcModel#tags}
    */
    readonly tags?: CcModel.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#vpc_config CcModel#vpc_config}
    */
    readonly vpcConfig?: CcModel.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model awscc_sagemaker_model}
*/
export class CcModel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_model";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcModel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcModel to import
    * @param importFromId The id of the existing CcModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcModel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model awscc_sagemaker_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcModelProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcModelProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_model',
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
        this._containers.internalValue = config.containers;
        this._enableNetworkIsolation = config.enableNetworkIsolation;
        this._executionRoleArn = config.executionRoleArn;
        this._inferenceExecutionConfig.internalValue = config.inferenceExecutionConfig;
        this._modelName = config.modelName;
        this._primaryContainer.internalValue = config.primaryContainer;
        this._tags.internalValue = config.tags;
        this._vpcConfig.internalValue = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // containers - computed: true, optional: true, required: false
    private _containers = new CcModel.ContainerDefinitionPropertyList(this, "containers", false);
    public get containers() {
        return this._containers;
    }
    public putContainers(value: CcModel.ContainerDefinitionProperty[] | cdktn.IResolvable) {
        this._containers.internalValue = value;
    }
    public resetContainers() {
        this._containers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containersInput() {
        return this._containers.internalValue;
    }

    // enable_network_isolation - computed: true, optional: true, required: false
    private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
    public get enableNetworkIsolation() {
        return this.getBooleanAttribute('enable_network_isolation');
    }
    public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
        this._enableNetworkIsolation = value;
    }
    public resetEnableNetworkIsolation() {
        this._enableNetworkIsolation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableNetworkIsolationInput() {
        return this._enableNetworkIsolation;
    }

    // execution_role_arn - computed: true, optional: true, required: false
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inference_execution_config - computed: true, optional: true, required: false
    private _inferenceExecutionConfig = new CcModel.InferenceExecutionConfigPropertyOutputReference(this, "inference_execution_config");
    public get inferenceExecutionConfig() {
        return this._inferenceExecutionConfig;
    }
    public putInferenceExecutionConfig(value: CcModel.InferenceExecutionConfigProperty) {
        this._inferenceExecutionConfig.internalValue = value;
    }
    public resetInferenceExecutionConfig() {
        this._inferenceExecutionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceExecutionConfigInput() {
        return this._inferenceExecutionConfig.internalValue;
    }

    // model_arn - computed: true, optional: false, required: false
    public get modelArn() {
        return this.getStringAttribute('model_arn');
    }

    // model_name - computed: true, optional: true, required: false
    private _modelName?: string; 
    public get modelName() {
        return this.getStringAttribute('model_name');
    }
    public set modelName(value: string) {
        this._modelName = value;
    }
    public resetModelName() {
        this._modelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelNameInput() {
        return this._modelName;
    }

    // primary_container - computed: true, optional: true, required: false
    private _primaryContainer = new CcModel.PrimaryContainerPropertyOutputReference(this, "primary_container");
    public get primaryContainer() {
        return this._primaryContainer;
    }
    public putPrimaryContainer(value: CcModel.PrimaryContainerProperty) {
        this._primaryContainer.internalValue = value;
    }
    public resetPrimaryContainer() {
        this._primaryContainer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryContainerInput() {
        return this._primaryContainer.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcModel.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcModel.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new CcModel.VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcModel.VpcConfigProperty) {
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
            containers: cdktn.listMapper(ccModelContainerDefinitionPropertyToTerraform, false)(this._containers.internalValue),
            enable_network_isolation: cdktn.booleanToTerraform(this._enableNetworkIsolation),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            inference_execution_config: ccModelInferenceExecutionConfigPropertyToTerraform(this._inferenceExecutionConfig.internalValue),
            model_name: cdktn.stringToTerraform(this._modelName),
            primary_container: ccModelPrimaryContainerPropertyToTerraform(this._primaryContainer.internalValue),
            tags: cdktn.listMapper(ccModelTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_config: ccModelVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            containers: {
                value: cdktn.listMapperHcl(ccModelContainerDefinitionPropertyToHclTerraform, false)(this._containers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcModel.ContainerDefinitionPropertyList",
            },
            enable_network_isolation: {
                value: cdktn.booleanToHclTerraform(this._enableNetworkIsolation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inference_execution_config: {
                value: ccModelInferenceExecutionConfigPropertyToHclTerraform(this._inferenceExecutionConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModel.InferenceExecutionConfigProperty",
            },
            model_name: {
                value: cdktn.stringToHclTerraform(this._modelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            primary_container: {
                value: ccModelPrimaryContainerPropertyToHclTerraform(this._primaryContainer.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModel.PrimaryContainerProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccModelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcModel.TagPropertyList",
            },
            vpc_config: {
                value: ccModelVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModel.VpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccModelRepositoryAuthConfigPropertyToTerraform(struct?: CcModel.RepositoryAuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_credentials_provider_arn: cdktn.stringToTerraform(struct!.repositoryCredentialsProviderArn),
    }
}


export function ccModelRepositoryAuthConfigPropertyToHclTerraform(struct?: CcModel.RepositoryAuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_credentials_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelImageConfigPropertyToTerraform(struct?: CcModel.ImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_access_mode: cdktn.stringToTerraform(struct!.repositoryAccessMode),
        repository_auth_config: ccModelRepositoryAuthConfigPropertyToTerraform(struct!.repositoryAuthConfig),
    }
}


export function ccModelImageConfigPropertyToHclTerraform(struct?: CcModel.ImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_access_mode: {
            value: cdktn.stringToHclTerraform(struct!.repositoryAccessMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository_auth_config: {
            value: ccModelRepositoryAuthConfigPropertyToHclTerraform(struct!.repositoryAuthConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RepositoryAuthConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelHubAccessConfigPropertyToTerraform(struct?: CcModel.HubAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
    }
}


export function ccModelHubAccessConfigPropertyToHclTerraform(struct?: CcModel.HubAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hub_content_arn: {
            value: cdktn.stringToHclTerraform(struct!.hubContentArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelModelAccessConfigPropertyToTerraform(struct?: CcModel.ModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
    }
}


export function ccModelModelAccessConfigPropertyToHclTerraform(struct?: CcModel.ModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accept_eula: {
            value: cdktn.booleanToHclTerraform(struct!.acceptEula),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelS3DataSourcePropertyToTerraform(struct?: CcModel.S3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        hub_access_config: ccModelHubAccessConfigPropertyToTerraform(struct!.hubAccessConfig),
        model_access_config: ccModelModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
        s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelS3DataSourcePropertyToHclTerraform(struct?: CcModel.S3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hub_access_config: {
            value: ccModelHubAccessConfigPropertyToHclTerraform(struct!.hubAccessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HubAccessConfigProperty",
        },
        model_access_config: {
            value: ccModelModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelAccessConfigProperty",
        },
        s3_data_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelModelDataSourcePropertyToTerraform(struct?: CcModel.ModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_source: ccModelS3DataSourcePropertyToTerraform(struct!.s3DataSource),
    }
}


export function ccModelModelDataSourcePropertyToHclTerraform(struct?: CcModel.ModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_source: {
            value: ccModelS3DataSourcePropertyToHclTerraform(struct!.s3DataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelMultiModelConfigPropertyToTerraform(struct?: CcModel.MultiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_cache_setting: cdktn.stringToTerraform(struct!.modelCacheSetting),
    }
}


export function ccModelMultiModelConfigPropertyToHclTerraform(struct?: CcModel.MultiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_cache_setting: {
            value: cdktn.stringToHclTerraform(struct!.modelCacheSetting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelContainerDefinitionPropertyToTerraform(struct?: CcModel.ContainerDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
        environment: cdktn.stringToTerraform(struct!.environment),
        image: cdktn.stringToTerraform(struct!.image),
        image_config: ccModelImageConfigPropertyToTerraform(struct!.imageConfig),
        inference_specification_name: cdktn.stringToTerraform(struct!.inferenceSpecificationName),
        mode: cdktn.stringToTerraform(struct!.mode),
        model_data_source: ccModelModelDataSourcePropertyToTerraform(struct!.modelDataSource),
        model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
        model_package_name: cdktn.stringToTerraform(struct!.modelPackageName),
        multi_model_config: ccModelMultiModelConfigPropertyToTerraform(struct!.multiModelConfig),
    }
}


export function ccModelContainerDefinitionPropertyToHclTerraform(struct?: CcModel.ContainerDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_hostname: {
            value: cdktn.stringToHclTerraform(struct!.containerHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.stringToHclTerraform(struct!.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_config: {
            value: ccModelImageConfigPropertyToHclTerraform(struct!.imageConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageConfigProperty",
        },
        inference_specification_name: {
            value: cdktn.stringToHclTerraform(struct!.inferenceSpecificationName),
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
        model_data_source: {
            value: ccModelModelDataSourcePropertyToHclTerraform(struct!.modelDataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelDataSourceProperty",
        },
        model_data_url: {
            value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_package_name: {
            value: cdktn.stringToHclTerraform(struct!.modelPackageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        multi_model_config: {
            value: ccModelMultiModelConfigPropertyToHclTerraform(struct!.multiModelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MultiModelConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelInferenceExecutionConfigPropertyToTerraform(struct?: CcModel.InferenceExecutionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccModelInferenceExecutionConfigPropertyToHclTerraform(struct?: CcModel.InferenceExecutionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToTerraform(struct?: CcModel.PrimaryContainerImageConfigRepositoryAuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_credentials_provider_arn: cdktn.stringToTerraform(struct!.repositoryCredentialsProviderArn),
    }
}


export function ccModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToHclTerraform(struct?: CcModel.PrimaryContainerImageConfigRepositoryAuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_credentials_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPrimaryContainerImageConfigPropertyToTerraform(struct?: CcModel.PrimaryContainerImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repository_access_mode: cdktn.stringToTerraform(struct!.repositoryAccessMode),
        repository_auth_config: ccModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToTerraform(struct!.repositoryAuthConfig),
    }
}


export function ccModelPrimaryContainerImageConfigPropertyToHclTerraform(struct?: CcModel.PrimaryContainerImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repository_access_mode: {
            value: cdktn.stringToHclTerraform(struct!.repositoryAccessMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository_auth_config: {
            value: ccModelPrimaryContainerImageConfigRepositoryAuthConfigPropertyToHclTerraform(struct!.repositoryAuthConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryContainerImageConfigRepositoryAuthConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigPropertyToTerraform(struct?: CcModel.PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
    }
}


export function ccModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigPropertyToHclTerraform(struct?: CcModel.PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hub_content_arn: {
            value: cdktn.stringToHclTerraform(struct!.hubContentArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: CcModel.PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
    }
}


export function ccModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: CcModel.PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accept_eula: {
            value: cdktn.booleanToHclTerraform(struct!.acceptEula),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPrimaryContainerModelDataSourceS3DataSourcePropertyToTerraform(struct?: CcModel.PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        hub_access_config: ccModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigPropertyToTerraform(struct!.hubAccessConfig),
        model_access_config: ccModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
        s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPrimaryContainerModelDataSourceS3DataSourcePropertyToHclTerraform(struct?: CcModel.PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hub_access_config: {
            value: ccModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigPropertyToHclTerraform(struct!.hubAccessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty",
        },
        model_access_config: {
            value: ccModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty",
        },
        s3_data_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPrimaryContainerModelDataSourcePropertyToTerraform(struct?: CcModel.PrimaryContainerModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_source: ccModelPrimaryContainerModelDataSourceS3DataSourcePropertyToTerraform(struct!.s3DataSource),
    }
}


export function ccModelPrimaryContainerModelDataSourcePropertyToHclTerraform(struct?: CcModel.PrimaryContainerModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_source: {
            value: ccModelPrimaryContainerModelDataSourceS3DataSourcePropertyToHclTerraform(struct!.s3DataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryContainerModelDataSourceS3DataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPrimaryContainerMultiModelConfigPropertyToTerraform(struct?: CcModel.PrimaryContainerMultiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_cache_setting: cdktn.stringToTerraform(struct!.modelCacheSetting),
    }
}


export function ccModelPrimaryContainerMultiModelConfigPropertyToHclTerraform(struct?: CcModel.PrimaryContainerMultiModelConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_cache_setting: {
            value: cdktn.stringToHclTerraform(struct!.modelCacheSetting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPrimaryContainerPropertyToTerraform(struct?: CcModel.PrimaryContainerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
        environment: cdktn.stringToTerraform(struct!.environment),
        image: cdktn.stringToTerraform(struct!.image),
        image_config: ccModelPrimaryContainerImageConfigPropertyToTerraform(struct!.imageConfig),
        inference_specification_name: cdktn.stringToTerraform(struct!.inferenceSpecificationName),
        mode: cdktn.stringToTerraform(struct!.mode),
        model_data_source: ccModelPrimaryContainerModelDataSourcePropertyToTerraform(struct!.modelDataSource),
        model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
        model_package_name: cdktn.stringToTerraform(struct!.modelPackageName),
        multi_model_config: ccModelPrimaryContainerMultiModelConfigPropertyToTerraform(struct!.multiModelConfig),
    }
}


export function ccModelPrimaryContainerPropertyToHclTerraform(struct?: CcModel.PrimaryContainerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_hostname: {
            value: cdktn.stringToHclTerraform(struct!.containerHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.stringToHclTerraform(struct!.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_config: {
            value: ccModelPrimaryContainerImageConfigPropertyToHclTerraform(struct!.imageConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryContainerImageConfigProperty",
        },
        inference_specification_name: {
            value: cdktn.stringToHclTerraform(struct!.inferenceSpecificationName),
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
        model_data_source: {
            value: ccModelPrimaryContainerModelDataSourcePropertyToHclTerraform(struct!.modelDataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryContainerModelDataSourceProperty",
        },
        model_data_url: {
            value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_package_name: {
            value: cdktn.stringToHclTerraform(struct!.modelPackageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        multi_model_config: {
            value: ccModelPrimaryContainerMultiModelConfigPropertyToHclTerraform(struct!.multiModelConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrimaryContainerMultiModelConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelTagPropertyToTerraform(struct?: CcModel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccModelTagPropertyToHclTerraform(struct?: CcModel.TagProperty | cdktn.IResolvable): any {
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


export function ccModelVpcConfigPropertyToTerraform(struct?: CcModel.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccModelVpcConfigPropertyToHclTerraform(struct?: CcModel.VpcConfigProperty | cdktn.IResolvable): any {
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


export namespace CcModel {
export interface RepositoryAuthConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#repository_credentials_provider_arn CcModel#repository_credentials_provider_arn}
    */
    readonly repositoryCredentialsProviderArn?: string;
}
export class RepositoryAuthConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RepositoryAuthConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryCredentialsProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepositoryAuthConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryCredentialsProviderArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
        }
    }

    // repository_credentials_provider_arn - computed: true, optional: true, required: false
    private _repositoryCredentialsProviderArn?: string; 
    public get repositoryCredentialsProviderArn() {
        return this.getStringAttribute('repository_credentials_provider_arn');
    }
    public set repositoryCredentialsProviderArn(value: string) {
        this._repositoryCredentialsProviderArn = value;
    }
    public resetRepositoryCredentialsProviderArn() {
        this._repositoryCredentialsProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryCredentialsProviderArnInput() {
        return this._repositoryCredentialsProviderArn;
    }
}
export interface ImageConfigProperty {
    /**
    * Set this to one of the following values: Platform - The model image is hosted in Amazon ECR. Vpc - The model image is hosted in a private Docker registry in your VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#repository_access_mode CcModel#repository_access_mode}
    */
    readonly repositoryAccessMode?: string;
    /**
    * Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#repository_auth_config CcModel#repository_auth_config}
    */
    readonly repositoryAuthConfig?: RepositoryAuthConfigProperty;
}
export class ImageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryAccessMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
        }
        if (this._repositoryAuthConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryAccessMode = undefined;
            this._repositoryAuthConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryAccessMode = value.repositoryAccessMode;
            this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
        }
    }

    // repository_access_mode - computed: true, optional: true, required: false
    private _repositoryAccessMode?: string; 
    public get repositoryAccessMode() {
        return this.getStringAttribute('repository_access_mode');
    }
    public set repositoryAccessMode(value: string) {
        this._repositoryAccessMode = value;
    }
    public resetRepositoryAccessMode() {
        this._repositoryAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryAccessModeInput() {
        return this._repositoryAccessMode;
    }

    // repository_auth_config - computed: true, optional: true, required: false
    private _repositoryAuthConfig = new RepositoryAuthConfigPropertyOutputReference(this, "repository_auth_config");
    public get repositoryAuthConfig() {
        return this._repositoryAuthConfig;
    }
    public putRepositoryAuthConfig(value: RepositoryAuthConfigProperty) {
        this._repositoryAuthConfig.internalValue = value;
    }
    public resetRepositoryAuthConfig() {
        this._repositoryAuthConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryAuthConfigInput() {
        return this._repositoryAuthConfig.internalValue;
    }
}
export interface HubAccessConfigProperty {
    /**
    * The ARN of the hub content for which deployment access is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#hub_content_arn CcModel#hub_content_arn}
    */
    readonly hubContentArn?: string;
}
export class HubAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HubAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hubContentArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hubContentArn = this._hubContentArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HubAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hubContentArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hubContentArn = value.hubContentArn;
        }
    }

    // hub_content_arn - computed: true, optional: true, required: false
    private _hubContentArn?: string; 
    public get hubContentArn() {
        return this.getStringAttribute('hub_content_arn');
    }
    public set hubContentArn(value: string) {
        this._hubContentArn = value;
    }
    public resetHubContentArn() {
        this._hubContentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hubContentArnInput() {
        return this._hubContentArn;
    }
}
export interface ModelAccessConfigProperty {
    /**
    * Specifies agreement to the model end-user license agreement (EULA). The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#accept_eula CcModel#accept_eula}
    */
    readonly acceptEula?: boolean | cdktn.IResolvable;
}
export class ModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceptEula !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceptEula = this._acceptEula;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceptEula = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceptEula = value.acceptEula;
        }
    }

    // accept_eula - computed: true, optional: true, required: false
    private _acceptEula?: boolean | cdktn.IResolvable; 
    public get acceptEula() {
        return this.getBooleanAttribute('accept_eula');
    }
    public set acceptEula(value: boolean | cdktn.IResolvable) {
        this._acceptEula = value;
    }
    public resetAcceptEula() {
        this._acceptEula = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptEulaInput() {
        return this._acceptEula;
    }
}
export interface S3DataSourceProperty {
    /**
    * Specifies how the ML model data is prepared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#compression_type CcModel#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Configuration information specifying which hub contents have accessible deployment options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#hub_access_config CcModel#hub_access_config}
    */
    readonly hubAccessConfig?: HubAccessConfigProperty;
    /**
    * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_access_config CcModel#model_access_config}
    */
    readonly modelAccessConfig?: ModelAccessConfigProperty;
    /**
    * Specifies the type of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#s3_data_type CcModel#s3_data_type}
    */
    readonly s3DataType?: string;
    /**
    * Specifies the S3 path of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#s3_uri CcModel#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._hubAccessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
        }
        if (this._modelAccessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
        }
        if (this._s3DataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataType = this._s3DataType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionType = undefined;
            this._hubAccessConfig.internalValue = undefined;
            this._modelAccessConfig.internalValue = undefined;
            this._s3DataType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionType = value.compressionType;
            this._hubAccessConfig.internalValue = value.hubAccessConfig;
            this._modelAccessConfig.internalValue = value.modelAccessConfig;
            this._s3DataType = value.s3DataType;
            this._s3Uri = value.s3Uri;
        }
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // hub_access_config - computed: true, optional: true, required: false
    private _hubAccessConfig = new HubAccessConfigPropertyOutputReference(this, "hub_access_config");
    public get hubAccessConfig() {
        return this._hubAccessConfig;
    }
    public putHubAccessConfig(value: HubAccessConfigProperty) {
        this._hubAccessConfig.internalValue = value;
    }
    public resetHubAccessConfig() {
        this._hubAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hubAccessConfigInput() {
        return this._hubAccessConfig.internalValue;
    }

    // model_access_config - computed: true, optional: true, required: false
    private _modelAccessConfig = new ModelAccessConfigPropertyOutputReference(this, "model_access_config");
    public get modelAccessConfig() {
        return this._modelAccessConfig;
    }
    public putModelAccessConfig(value: ModelAccessConfigProperty) {
        this._modelAccessConfig.internalValue = value;
    }
    public resetModelAccessConfig() {
        this._modelAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelAccessConfigInput() {
        return this._modelAccessConfig.internalValue;
    }

    // s3_data_type - computed: true, optional: true, required: false
    private _s3DataType?: string; 
    public get s3DataType() {
        return this.getStringAttribute('s3_data_type');
    }
    public set s3DataType(value: string) {
        this._s3DataType = value;
    }
    public resetS3DataType() {
        this._s3DataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataTypeInput() {
        return this._s3DataType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelDataSourceProperty {
    /**
    * Specifies the S3 location of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#s3_data_source CcModel#s3_data_source}
    */
    readonly s3DataSource?: S3DataSourceProperty;
}
export class ModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelDataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelDataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = value.s3DataSource;
        }
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource = new S3DataSourcePropertyOutputReference(this, "s3_data_source");
    public get s3DataSource() {
        return this._s3DataSource;
    }
    public putS3DataSource(value: S3DataSourceProperty) {
        this._s3DataSource.internalValue = value;
    }
    public resetS3DataSource() {
        this._s3DataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource.internalValue;
    }
}
export interface MultiModelConfigProperty {
    /**
    * Whether to cache models for a multi-model endpoint. By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_cache_setting CcModel#model_cache_setting}
    */
    readonly modelCacheSetting?: string;
}
export class MultiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelCacheSetting !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelCacheSetting = this._modelCacheSetting;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelCacheSetting = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelCacheSetting = value.modelCacheSetting;
        }
    }

    // model_cache_setting - computed: true, optional: true, required: false
    private _modelCacheSetting?: string; 
    public get modelCacheSetting() {
        return this.getStringAttribute('model_cache_setting');
    }
    public set modelCacheSetting(value: string) {
        this._modelCacheSetting = value;
    }
    public resetModelCacheSetting() {
        this._modelCacheSetting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelCacheSettingInput() {
        return this._modelCacheSetting;
    }
}
export interface ContainerDefinitionProperty {
    /**
    * This parameter is ignored for models that contain only a PrimaryContainer.
    * 
    * When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#container_hostname CcModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.
    * 
    * The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#environment CcModel#environment}
    */
    readonly environment?: string;
    /**
    * The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#image CcModel#image}
    */
    readonly image?: string;
    /**
    * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#image_config CcModel#image_config}
    */
    readonly imageConfig?: ImageConfigProperty;
    /**
    * The inference specification name in the model package version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#inference_specification_name CcModel#inference_specification_name}
    */
    readonly inferenceSpecificationName?: string;
    /**
    * Whether the container hosts a single model or multiple models.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#mode CcModel#mode}
    */
    readonly mode?: string;
    /**
    * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_data_source CcModel#model_data_source}
    */
    readonly modelDataSource?: ModelDataSourceProperty;
    /**
    * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).
    * 
    * If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_data_url CcModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * The name or Amazon Resource Name (ARN) of the model package to use to create the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_package_name CcModel#model_package_name}
    */
    readonly modelPackageName?: string;
    /**
    * Specifies additional configuration for multi-model endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#multi_model_config CcModel#multi_model_config}
    */
    readonly multiModelConfig?: MultiModelConfigProperty;
}
export class ContainerDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContainerDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerHostname = this._containerHostname;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._imageConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageConfig = this._imageConfig?.internalValue;
        }
        if (this._inferenceSpecificationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._modelDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
        }
        if (this._modelDataUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataUrl = this._modelDataUrl;
        }
        if (this._modelPackageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelPackageName = this._modelPackageName;
        }
        if (this._multiModelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerHostname = undefined;
            this._environment = undefined;
            this._image = undefined;
            this._imageConfig.internalValue = undefined;
            this._inferenceSpecificationName = undefined;
            this._mode = undefined;
            this._modelDataSource.internalValue = undefined;
            this._modelDataUrl = undefined;
            this._modelPackageName = undefined;
            this._multiModelConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerHostname = value.containerHostname;
            this._environment = value.environment;
            this._image = value.image;
            this._imageConfig.internalValue = value.imageConfig;
            this._inferenceSpecificationName = value.inferenceSpecificationName;
            this._mode = value.mode;
            this._modelDataSource.internalValue = value.modelDataSource;
            this._modelDataUrl = value.modelDataUrl;
            this._modelPackageName = value.modelPackageName;
            this._multiModelConfig.internalValue = value.multiModelConfig;
        }
    }

    // container_hostname - computed: true, optional: true, required: false
    private _containerHostname?: string; 
    public get containerHostname() {
        return this.getStringAttribute('container_hostname');
    }
    public set containerHostname(value: string) {
        this._containerHostname = value;
    }
    public resetContainerHostname() {
        this._containerHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerHostnameInput() {
        return this._containerHostname;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: string; 
    public get environment() {
        return this.getStringAttribute('environment');
    }
    public set environment(value: string) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }

    // image_config - computed: true, optional: true, required: false
    private _imageConfig = new ImageConfigPropertyOutputReference(this, "image_config");
    public get imageConfig() {
        return this._imageConfig;
    }
    public putImageConfig(value: ImageConfigProperty) {
        this._imageConfig.internalValue = value;
    }
    public resetImageConfig() {
        this._imageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigInput() {
        return this._imageConfig.internalValue;
    }

    // inference_specification_name - computed: true, optional: true, required: false
    private _inferenceSpecificationName?: string; 
    public get inferenceSpecificationName() {
        return this.getStringAttribute('inference_specification_name');
    }
    public set inferenceSpecificationName(value: string) {
        this._inferenceSpecificationName = value;
    }
    public resetInferenceSpecificationName() {
        this._inferenceSpecificationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceSpecificationNameInput() {
        return this._inferenceSpecificationName;
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

    // model_data_source - computed: true, optional: true, required: false
    private _modelDataSource = new ModelDataSourcePropertyOutputReference(this, "model_data_source");
    public get modelDataSource() {
        return this._modelDataSource;
    }
    public putModelDataSource(value: ModelDataSourceProperty) {
        this._modelDataSource.internalValue = value;
    }
    public resetModelDataSource() {
        this._modelDataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataSourceInput() {
        return this._modelDataSource.internalValue;
    }

    // model_data_url - computed: true, optional: true, required: false
    private _modelDataUrl?: string; 
    public get modelDataUrl() {
        return this.getStringAttribute('model_data_url');
    }
    public set modelDataUrl(value: string) {
        this._modelDataUrl = value;
    }
    public resetModelDataUrl() {
        this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataUrlInput() {
        return this._modelDataUrl;
    }

    // model_package_name - computed: true, optional: true, required: false
    private _modelPackageName?: string; 
    public get modelPackageName() {
        return this.getStringAttribute('model_package_name');
    }
    public set modelPackageName(value: string) {
        this._modelPackageName = value;
    }
    public resetModelPackageName() {
        this._modelPackageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageNameInput() {
        return this._modelPackageName;
    }

    // multi_model_config - computed: true, optional: true, required: false
    private _multiModelConfig = new MultiModelConfigPropertyOutputReference(this, "multi_model_config");
    public get multiModelConfig() {
        return this._multiModelConfig;
    }
    public putMultiModelConfig(value: MultiModelConfigProperty) {
        this._multiModelConfig.internalValue = value;
    }
    public resetMultiModelConfig() {
        this._multiModelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiModelConfigInput() {
        return this._multiModelConfig.internalValue;
    }
}

export class ContainerDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : ContainerDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): ContainerDefinitionPropertyOutputReference {
        return new ContainerDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InferenceExecutionConfigProperty {
    /**
    * How containers in a multi-container are run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#mode CcModel#mode}
    */
    readonly mode?: string;
}
export class InferenceExecutionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceExecutionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceExecutionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
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
export interface PrimaryContainerImageConfigRepositoryAuthConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#repository_credentials_provider_arn CcModel#repository_credentials_provider_arn}
    */
    readonly repositoryCredentialsProviderArn?: string;
}
export class PrimaryContainerImageConfigRepositoryAuthConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerImageConfigRepositoryAuthConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryCredentialsProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerImageConfigRepositoryAuthConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryCredentialsProviderArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
        }
    }

    // repository_credentials_provider_arn - computed: true, optional: true, required: false
    private _repositoryCredentialsProviderArn?: string; 
    public get repositoryCredentialsProviderArn() {
        return this.getStringAttribute('repository_credentials_provider_arn');
    }
    public set repositoryCredentialsProviderArn(value: string) {
        this._repositoryCredentialsProviderArn = value;
    }
    public resetRepositoryCredentialsProviderArn() {
        this._repositoryCredentialsProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryCredentialsProviderArnInput() {
        return this._repositoryCredentialsProviderArn;
    }
}
export interface PrimaryContainerImageConfigProperty {
    /**
    * Set this to one of the following values: Platform - The model image is hosted in Amazon ECR. Vpc - The model image is hosted in a private Docker registry in your VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#repository_access_mode CcModel#repository_access_mode}
    */
    readonly repositoryAccessMode?: string;
    /**
    * Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#repository_auth_config CcModel#repository_auth_config}
    */
    readonly repositoryAuthConfig?: PrimaryContainerImageConfigRepositoryAuthConfigProperty;
}
export class PrimaryContainerImageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerImageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositoryAccessMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
        }
        if (this._repositoryAuthConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerImageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositoryAccessMode = undefined;
            this._repositoryAuthConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositoryAccessMode = value.repositoryAccessMode;
            this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
        }
    }

    // repository_access_mode - computed: true, optional: true, required: false
    private _repositoryAccessMode?: string; 
    public get repositoryAccessMode() {
        return this.getStringAttribute('repository_access_mode');
    }
    public set repositoryAccessMode(value: string) {
        this._repositoryAccessMode = value;
    }
    public resetRepositoryAccessMode() {
        this._repositoryAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryAccessModeInput() {
        return this._repositoryAccessMode;
    }

    // repository_auth_config - computed: true, optional: true, required: false
    private _repositoryAuthConfig = new PrimaryContainerImageConfigRepositoryAuthConfigPropertyOutputReference(this, "repository_auth_config");
    public get repositoryAuthConfig() {
        return this._repositoryAuthConfig;
    }
    public putRepositoryAuthConfig(value: PrimaryContainerImageConfigRepositoryAuthConfigProperty) {
        this._repositoryAuthConfig.internalValue = value;
    }
    public resetRepositoryAuthConfig() {
        this._repositoryAuthConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryAuthConfigInput() {
        return this._repositoryAuthConfig.internalValue;
    }
}
export interface PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty {
    /**
    * The ARN of the hub content for which deployment access is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#hub_content_arn CcModel#hub_content_arn}
    */
    readonly hubContentArn?: string;
}
export class PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hubContentArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hubContentArn = this._hubContentArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hubContentArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hubContentArn = value.hubContentArn;
        }
    }

    // hub_content_arn - computed: true, optional: true, required: false
    private _hubContentArn?: string; 
    public get hubContentArn() {
        return this.getStringAttribute('hub_content_arn');
    }
    public set hubContentArn(value: string) {
        this._hubContentArn = value;
    }
    public resetHubContentArn() {
        this._hubContentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hubContentArnInput() {
        return this._hubContentArn;
    }
}
export interface PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty {
    /**
    * Specifies agreement to the model end-user license agreement (EULA). The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#accept_eula CcModel#accept_eula}
    */
    readonly acceptEula?: boolean | cdktn.IResolvable;
}
export class PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceptEula !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceptEula = this._acceptEula;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceptEula = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceptEula = value.acceptEula;
        }
    }

    // accept_eula - computed: true, optional: true, required: false
    private _acceptEula?: boolean | cdktn.IResolvable; 
    public get acceptEula() {
        return this.getBooleanAttribute('accept_eula');
    }
    public set acceptEula(value: boolean | cdktn.IResolvable) {
        this._acceptEula = value;
    }
    public resetAcceptEula() {
        this._acceptEula = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptEulaInput() {
        return this._acceptEula;
    }
}
export interface PrimaryContainerModelDataSourceS3DataSourceProperty {
    /**
    * Specifies how the ML model data is prepared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#compression_type CcModel#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Configuration information specifying which hub contents have accessible deployment options.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#hub_access_config CcModel#hub_access_config}
    */
    readonly hubAccessConfig?: PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty;
    /**
    * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_access_config CcModel#model_access_config}
    */
    readonly modelAccessConfig?: PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty;
    /**
    * Specifies the type of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#s3_data_type CcModel#s3_data_type}
    */
    readonly s3DataType?: string;
    /**
    * Specifies the S3 path of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#s3_uri CcModel#s3_uri}
    */
    readonly s3Uri?: string;
}
export class PrimaryContainerModelDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._hubAccessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
        }
        if (this._modelAccessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
        }
        if (this._s3DataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataType = this._s3DataType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionType = undefined;
            this._hubAccessConfig.internalValue = undefined;
            this._modelAccessConfig.internalValue = undefined;
            this._s3DataType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionType = value.compressionType;
            this._hubAccessConfig.internalValue = value.hubAccessConfig;
            this._modelAccessConfig.internalValue = value.modelAccessConfig;
            this._s3DataType = value.s3DataType;
            this._s3Uri = value.s3Uri;
        }
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // hub_access_config - computed: true, optional: true, required: false
    private _hubAccessConfig = new PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigPropertyOutputReference(this, "hub_access_config");
    public get hubAccessConfig() {
        return this._hubAccessConfig;
    }
    public putHubAccessConfig(value: PrimaryContainerModelDataSourceS3DataSourceHubAccessConfigProperty) {
        this._hubAccessConfig.internalValue = value;
    }
    public resetHubAccessConfig() {
        this._hubAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hubAccessConfigInput() {
        return this._hubAccessConfig.internalValue;
    }

    // model_access_config - computed: true, optional: true, required: false
    private _modelAccessConfig = new PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this, "model_access_config");
    public get modelAccessConfig() {
        return this._modelAccessConfig;
    }
    public putModelAccessConfig(value: PrimaryContainerModelDataSourceS3DataSourceModelAccessConfigProperty) {
        this._modelAccessConfig.internalValue = value;
    }
    public resetModelAccessConfig() {
        this._modelAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelAccessConfigInput() {
        return this._modelAccessConfig.internalValue;
    }

    // s3_data_type - computed: true, optional: true, required: false
    private _s3DataType?: string; 
    public get s3DataType() {
        return this.getStringAttribute('s3_data_type');
    }
    public set s3DataType(value: string) {
        this._s3DataType = value;
    }
    public resetS3DataType() {
        this._s3DataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataTypeInput() {
        return this._s3DataType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface PrimaryContainerModelDataSourceProperty {
    /**
    * Specifies the S3 location of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#s3_data_source CcModel#s3_data_source}
    */
    readonly s3DataSource?: PrimaryContainerModelDataSourceS3DataSourceProperty;
}
export class PrimaryContainerModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerModelDataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerModelDataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = value.s3DataSource;
        }
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource = new PrimaryContainerModelDataSourceS3DataSourcePropertyOutputReference(this, "s3_data_source");
    public get s3DataSource() {
        return this._s3DataSource;
    }
    public putS3DataSource(value: PrimaryContainerModelDataSourceS3DataSourceProperty) {
        this._s3DataSource.internalValue = value;
    }
    public resetS3DataSource() {
        this._s3DataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource.internalValue;
    }
}
export interface PrimaryContainerMultiModelConfigProperty {
    /**
    * Whether to cache models for a multi-model endpoint. By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_cache_setting CcModel#model_cache_setting}
    */
    readonly modelCacheSetting?: string;
}
export class PrimaryContainerMultiModelConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerMultiModelConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelCacheSetting !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelCacheSetting = this._modelCacheSetting;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerMultiModelConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelCacheSetting = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelCacheSetting = value.modelCacheSetting;
        }
    }

    // model_cache_setting - computed: true, optional: true, required: false
    private _modelCacheSetting?: string; 
    public get modelCacheSetting() {
        return this.getStringAttribute('model_cache_setting');
    }
    public set modelCacheSetting(value: string) {
        this._modelCacheSetting = value;
    }
    public resetModelCacheSetting() {
        this._modelCacheSetting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelCacheSettingInput() {
        return this._modelCacheSetting;
    }
}
export interface PrimaryContainerProperty {
    /**
    * This parameter is ignored for models that contain only a PrimaryContainer.
    * 
    * When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#container_hostname CcModel#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.
    * 
    * The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#environment CcModel#environment}
    */
    readonly environment?: string;
    /**
    * The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#image CcModel#image}
    */
    readonly image?: string;
    /**
    * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#image_config CcModel#image_config}
    */
    readonly imageConfig?: PrimaryContainerImageConfigProperty;
    /**
    * The inference specification name in the model package version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#inference_specification_name CcModel#inference_specification_name}
    */
    readonly inferenceSpecificationName?: string;
    /**
    * Whether the container hosts a single model or multiple models.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#mode CcModel#mode}
    */
    readonly mode?: string;
    /**
    * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_data_source CcModel#model_data_source}
    */
    readonly modelDataSource?: PrimaryContainerModelDataSourceProperty;
    /**
    * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).
    * 
    * If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_data_url CcModel#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * The name or Amazon Resource Name (ARN) of the model package to use to create the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#model_package_name CcModel#model_package_name}
    */
    readonly modelPackageName?: string;
    /**
    * Specifies additional configuration for multi-model endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#multi_model_config CcModel#multi_model_config}
    */
    readonly multiModelConfig?: PrimaryContainerMultiModelConfigProperty;
}
export class PrimaryContainerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryContainerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerHostname = this._containerHostname;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._imageConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageConfig = this._imageConfig?.internalValue;
        }
        if (this._inferenceSpecificationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._modelDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
        }
        if (this._modelDataUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataUrl = this._modelDataUrl;
        }
        if (this._modelPackageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelPackageName = this._modelPackageName;
        }
        if (this._multiModelConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryContainerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerHostname = undefined;
            this._environment = undefined;
            this._image = undefined;
            this._imageConfig.internalValue = undefined;
            this._inferenceSpecificationName = undefined;
            this._mode = undefined;
            this._modelDataSource.internalValue = undefined;
            this._modelDataUrl = undefined;
            this._modelPackageName = undefined;
            this._multiModelConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerHostname = value.containerHostname;
            this._environment = value.environment;
            this._image = value.image;
            this._imageConfig.internalValue = value.imageConfig;
            this._inferenceSpecificationName = value.inferenceSpecificationName;
            this._mode = value.mode;
            this._modelDataSource.internalValue = value.modelDataSource;
            this._modelDataUrl = value.modelDataUrl;
            this._modelPackageName = value.modelPackageName;
            this._multiModelConfig.internalValue = value.multiModelConfig;
        }
    }

    // container_hostname - computed: true, optional: true, required: false
    private _containerHostname?: string; 
    public get containerHostname() {
        return this.getStringAttribute('container_hostname');
    }
    public set containerHostname(value: string) {
        this._containerHostname = value;
    }
    public resetContainerHostname() {
        this._containerHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerHostnameInput() {
        return this._containerHostname;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: string; 
    public get environment() {
        return this.getStringAttribute('environment');
    }
    public set environment(value: string) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }

    // image_config - computed: true, optional: true, required: false
    private _imageConfig = new PrimaryContainerImageConfigPropertyOutputReference(this, "image_config");
    public get imageConfig() {
        return this._imageConfig;
    }
    public putImageConfig(value: PrimaryContainerImageConfigProperty) {
        this._imageConfig.internalValue = value;
    }
    public resetImageConfig() {
        this._imageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigInput() {
        return this._imageConfig.internalValue;
    }

    // inference_specification_name - computed: true, optional: true, required: false
    private _inferenceSpecificationName?: string; 
    public get inferenceSpecificationName() {
        return this.getStringAttribute('inference_specification_name');
    }
    public set inferenceSpecificationName(value: string) {
        this._inferenceSpecificationName = value;
    }
    public resetInferenceSpecificationName() {
        this._inferenceSpecificationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceSpecificationNameInput() {
        return this._inferenceSpecificationName;
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

    // model_data_source - computed: true, optional: true, required: false
    private _modelDataSource = new PrimaryContainerModelDataSourcePropertyOutputReference(this, "model_data_source");
    public get modelDataSource() {
        return this._modelDataSource;
    }
    public putModelDataSource(value: PrimaryContainerModelDataSourceProperty) {
        this._modelDataSource.internalValue = value;
    }
    public resetModelDataSource() {
        this._modelDataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataSourceInput() {
        return this._modelDataSource.internalValue;
    }

    // model_data_url - computed: true, optional: true, required: false
    private _modelDataUrl?: string; 
    public get modelDataUrl() {
        return this.getStringAttribute('model_data_url');
    }
    public set modelDataUrl(value: string) {
        this._modelDataUrl = value;
    }
    public resetModelDataUrl() {
        this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataUrlInput() {
        return this._modelDataUrl;
    }

    // model_package_name - computed: true, optional: true, required: false
    private _modelPackageName?: string; 
    public get modelPackageName() {
        return this.getStringAttribute('model_package_name');
    }
    public set modelPackageName(value: string) {
        this._modelPackageName = value;
    }
    public resetModelPackageName() {
        this._modelPackageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageNameInput() {
        return this._modelPackageName;
    }

    // multi_model_config - computed: true, optional: true, required: false
    private _multiModelConfig = new PrimaryContainerMultiModelConfigPropertyOutputReference(this, "multi_model_config");
    public get multiModelConfig() {
        return this._multiModelConfig;
    }
    public putMultiModelConfig(value: PrimaryContainerMultiModelConfigProperty) {
        this._multiModelConfig.internalValue = value;
    }
    public resetMultiModelConfig() {
        this._multiModelConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiModelConfigInput() {
        return this._multiModelConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#key CcModel#key}
    */
    readonly key?: string;
    /**
    * The tag key. Tag keys must be unique per resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#value CcModel#value}
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
export interface VpcConfigProperty {
    /**
    * The VPC security group IDs, in the form `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#security_group_ids CcModel#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_model#subnets CcModel#subnets}
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
