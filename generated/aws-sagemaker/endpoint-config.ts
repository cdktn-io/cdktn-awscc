// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies configuration for how an endpoint performs asynchronous inference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#async_inference_config CcEndpointConfig#async_inference_config}
    */
    readonly asyncInferenceConfig?: CcEndpointConfig.AsyncInferenceConfigProperty;
    /**
    * Specifies how to capture endpoint data for model monitor. The data capture configuration applies to all production variants hosted at the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#data_capture_config CcEndpointConfig#data_capture_config}
    */
    readonly dataCaptureConfig?: CcEndpointConfig.DataCaptureConfigProperty;
    /**
    * Sets whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#enable_network_isolation CcEndpointConfig#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
    /**
    * The name of the endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#endpoint_config_name CcEndpointConfig#endpoint_config_name}
    */
    readonly endpointConfigName?: string;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform actions on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#execution_role_arn CcEndpointConfig#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * A parameter to activate explainers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#explainer_config CcEndpointConfig#explainer_config}
    */
    readonly explainerConfig?: CcEndpointConfig.ExplainerConfigProperty;
    /**
    * The Amazon Resource Name (ARN) of an AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#kms_key_id CcEndpointConfig#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Specifies the metrics that the endpoint publishes to Amazon CloudWatch, the frequency of publication, and whether to enable enhanced or detailed observability metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#metrics_config CcEndpointConfig#metrics_config}
    */
    readonly metricsConfig?: CcEndpointConfig.MetricsConfigProperty;
    /**
    * A list of ProductionVariant objects, one for each model that you want to host at this endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#production_variants CcEndpointConfig#production_variants}
    */
    readonly productionVariants: CcEndpointConfig.ProductionVariantProperty[] | cdktn.IResolvable;
    /**
    * Array of ProductionVariant objects. There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#shadow_production_variants CcEndpointConfig#shadow_production_variants}
    */
    readonly shadowProductionVariants?: CcEndpointConfig.ShadowProductionVariantsProperty[] | cdktn.IResolvable;
    /**
    * A list of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#tags CcEndpointConfig#tags}
    */
    readonly tags?: CcEndpointConfig.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#vpc_config CcEndpointConfig#vpc_config}
    */
    readonly vpcConfig?: CcEndpointConfig.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config}
*/
export class CcEndpointConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_endpoint_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpointConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpointConfig to import
    * @param importFromId The id of the existing CcEndpointConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpointConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_endpoint_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config awscc_sagemaker_endpoint_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_endpoint_config',
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
        this._asyncInferenceConfig.internalValue = config.asyncInferenceConfig;
        this._dataCaptureConfig.internalValue = config.dataCaptureConfig;
        this._enableNetworkIsolation = config.enableNetworkIsolation;
        this._endpointConfigName = config.endpointConfigName;
        this._executionRoleArn = config.executionRoleArn;
        this._explainerConfig.internalValue = config.explainerConfig;
        this._kmsKeyId = config.kmsKeyId;
        this._metricsConfig.internalValue = config.metricsConfig;
        this._productionVariants.internalValue = config.productionVariants;
        this._shadowProductionVariants.internalValue = config.shadowProductionVariants;
        this._tags.internalValue = config.tags;
        this._vpcConfig.internalValue = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // async_inference_config - computed: true, optional: true, required: false
    private _asyncInferenceConfig = new CcEndpointConfig.AsyncInferenceConfigPropertyOutputReference(this, "async_inference_config");
    public get asyncInferenceConfig() {
        return this._asyncInferenceConfig;
    }
    public putAsyncInferenceConfig(value: CcEndpointConfig.AsyncInferenceConfigProperty) {
        this._asyncInferenceConfig.internalValue = value;
    }
    public resetAsyncInferenceConfig() {
        this._asyncInferenceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asyncInferenceConfigInput() {
        return this._asyncInferenceConfig.internalValue;
    }

    // data_capture_config - computed: true, optional: true, required: false
    private _dataCaptureConfig = new CcEndpointConfig.DataCaptureConfigPropertyOutputReference(this, "data_capture_config");
    public get dataCaptureConfig() {
        return this._dataCaptureConfig;
    }
    public putDataCaptureConfig(value: CcEndpointConfig.DataCaptureConfigProperty) {
        this._dataCaptureConfig.internalValue = value;
    }
    public resetDataCaptureConfig() {
        this._dataCaptureConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCaptureConfigInput() {
        return this._dataCaptureConfig.internalValue;
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

    // endpoint_config_arn - computed: true, optional: false, required: false
    public get endpointConfigArn() {
        return this.getStringAttribute('endpoint_config_arn');
    }

    // endpoint_config_name - computed: true, optional: true, required: false
    private _endpointConfigName?: string; 
    public get endpointConfigName() {
        return this.getStringAttribute('endpoint_config_name');
    }
    public set endpointConfigName(value: string) {
        this._endpointConfigName = value;
    }
    public resetEndpointConfigName() {
        this._endpointConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigNameInput() {
        return this._endpointConfigName;
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

    // explainer_config - computed: true, optional: true, required: false
    private _explainerConfig = new CcEndpointConfig.ExplainerConfigPropertyOutputReference(this, "explainer_config");
    public get explainerConfig() {
        return this._explainerConfig;
    }
    public putExplainerConfig(value: CcEndpointConfig.ExplainerConfigProperty) {
        this._explainerConfig.internalValue = value;
    }
    public resetExplainerConfig() {
        this._explainerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explainerConfigInput() {
        return this._explainerConfig.internalValue;
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

    // metrics_config - computed: true, optional: true, required: false
    private _metricsConfig = new CcEndpointConfig.MetricsConfigPropertyOutputReference(this, "metrics_config");
    public get metricsConfig() {
        return this._metricsConfig;
    }
    public putMetricsConfig(value: CcEndpointConfig.MetricsConfigProperty) {
        this._metricsConfig.internalValue = value;
    }
    public resetMetricsConfig() {
        this._metricsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsConfigInput() {
        return this._metricsConfig.internalValue;
    }

    // production_variants - computed: false, optional: false, required: true
    private _productionVariants = new CcEndpointConfig.ProductionVariantPropertyList(this, "production_variants", false);
    public get productionVariants() {
        return this._productionVariants;
    }
    public putProductionVariants(value: CcEndpointConfig.ProductionVariantProperty[] | cdktn.IResolvable) {
        this._productionVariants.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get productionVariantsInput() {
        return this._productionVariants.internalValue;
    }

    // shadow_production_variants - computed: true, optional: true, required: false
    private _shadowProductionVariants = new CcEndpointConfig.ShadowProductionVariantsPropertyList(this, "shadow_production_variants", false);
    public get shadowProductionVariants() {
        return this._shadowProductionVariants;
    }
    public putShadowProductionVariants(value: CcEndpointConfig.ShadowProductionVariantsProperty[] | cdktn.IResolvable) {
        this._shadowProductionVariants.internalValue = value;
    }
    public resetShadowProductionVariants() {
        this._shadowProductionVariants.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shadowProductionVariantsInput() {
        return this._shadowProductionVariants.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEndpointConfig.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEndpointConfig.TagProperty[] | cdktn.IResolvable) {
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
    private _vpcConfig = new CcEndpointConfig.VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcEndpointConfig.VpcConfigProperty) {
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
            async_inference_config: ccEndpointConfigAsyncInferenceConfigPropertyToTerraform(this._asyncInferenceConfig.internalValue),
            data_capture_config: ccEndpointConfigDataCaptureConfigPropertyToTerraform(this._dataCaptureConfig.internalValue),
            enable_network_isolation: cdktn.booleanToTerraform(this._enableNetworkIsolation),
            endpoint_config_name: cdktn.stringToTerraform(this._endpointConfigName),
            execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
            explainer_config: ccEndpointConfigExplainerConfigPropertyToTerraform(this._explainerConfig.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            metrics_config: ccEndpointConfigMetricsConfigPropertyToTerraform(this._metricsConfig.internalValue),
            production_variants: cdktn.listMapper(ccEndpointConfigProductionVariantPropertyToTerraform, false)(this._productionVariants.internalValue),
            shadow_production_variants: cdktn.listMapper(ccEndpointConfigShadowProductionVariantsPropertyToTerraform, false)(this._shadowProductionVariants.internalValue),
            tags: cdktn.listMapper(ccEndpointConfigTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_config: ccEndpointConfigVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            async_inference_config: {
                value: ccEndpointConfigAsyncInferenceConfigPropertyToHclTerraform(this._asyncInferenceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpointConfig.AsyncInferenceConfigProperty",
            },
            data_capture_config: {
                value: ccEndpointConfigDataCaptureConfigPropertyToHclTerraform(this._dataCaptureConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpointConfig.DataCaptureConfigProperty",
            },
            enable_network_isolation: {
                value: cdktn.booleanToHclTerraform(this._enableNetworkIsolation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            endpoint_config_name: {
                value: cdktn.stringToHclTerraform(this._endpointConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            explainer_config: {
                value: ccEndpointConfigExplainerConfigPropertyToHclTerraform(this._explainerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpointConfig.ExplainerConfigProperty",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metrics_config: {
                value: ccEndpointConfigMetricsConfigPropertyToHclTerraform(this._metricsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpointConfig.MetricsConfigProperty",
            },
            production_variants: {
                value: cdktn.listMapperHcl(ccEndpointConfigProductionVariantPropertyToHclTerraform, false)(this._productionVariants.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpointConfig.ProductionVariantPropertyList",
            },
            shadow_production_variants: {
                value: cdktn.listMapperHcl(ccEndpointConfigShadowProductionVariantsPropertyToHclTerraform, false)(this._shadowProductionVariants.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpointConfig.ShadowProductionVariantsPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEndpointConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpointConfig.TagPropertyList",
            },
            vpc_config: {
                value: ccEndpointConfigVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpointConfig.VpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEndpointConfigAsyncInferenceClientConfigPropertyToTerraform(struct?: CcEndpointConfig.AsyncInferenceClientConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_concurrent_invocations_per_instance: cdktn.numberToTerraform(struct!.maxConcurrentInvocationsPerInstance),
    }
}


export function ccEndpointConfigAsyncInferenceClientConfigPropertyToHclTerraform(struct?: CcEndpointConfig.AsyncInferenceClientConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_concurrent_invocations_per_instance: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentInvocationsPerInstance),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigAsyncInferenceNotificationConfigPropertyToTerraform(struct?: CcEndpointConfig.AsyncInferenceNotificationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_topic: cdktn.stringToTerraform(struct!.errorTopic),
        include_inference_response_in: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeInferenceResponseIn),
        success_topic: cdktn.stringToTerraform(struct!.successTopic),
    }
}


export function ccEndpointConfigAsyncInferenceNotificationConfigPropertyToHclTerraform(struct?: CcEndpointConfig.AsyncInferenceNotificationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_topic: {
            value: cdktn.stringToHclTerraform(struct!.errorTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_inference_response_in: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeInferenceResponseIn),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        success_topic: {
            value: cdktn.stringToHclTerraform(struct!.successTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigAsyncInferenceOutputConfigPropertyToTerraform(struct?: CcEndpointConfig.AsyncInferenceOutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        notification_config: ccEndpointConfigAsyncInferenceNotificationConfigPropertyToTerraform(struct!.notificationConfig),
        s3_failure_path: cdktn.stringToTerraform(struct!.s3FailurePath),
        s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    }
}


export function ccEndpointConfigAsyncInferenceOutputConfigPropertyToHclTerraform(struct?: CcEndpointConfig.AsyncInferenceOutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_config: {
            value: ccEndpointConfigAsyncInferenceNotificationConfigPropertyToHclTerraform(struct!.notificationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AsyncInferenceNotificationConfigProperty",
        },
        s3_failure_path: {
            value: cdktn.stringToHclTerraform(struct!.s3FailurePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_path: {
            value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigAsyncInferenceConfigPropertyToTerraform(struct?: CcEndpointConfig.AsyncInferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_config: ccEndpointConfigAsyncInferenceClientConfigPropertyToTerraform(struct!.clientConfig),
        output_config: ccEndpointConfigAsyncInferenceOutputConfigPropertyToTerraform(struct!.outputConfig),
    }
}


export function ccEndpointConfigAsyncInferenceConfigPropertyToHclTerraform(struct?: CcEndpointConfig.AsyncInferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_config: {
            value: ccEndpointConfigAsyncInferenceClientConfigPropertyToHclTerraform(struct!.clientConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AsyncInferenceClientConfigProperty",
        },
        output_config: {
            value: ccEndpointConfigAsyncInferenceOutputConfigPropertyToHclTerraform(struct!.outputConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AsyncInferenceOutputConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigCaptureContentTypeHeaderPropertyToTerraform(struct?: CcEndpointConfig.CaptureContentTypeHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.csvContentTypes),
        json_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.jsonContentTypes),
    }
}


export function ccEndpointConfigCaptureContentTypeHeaderPropertyToHclTerraform(struct?: CcEndpointConfig.CaptureContentTypeHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        csv_content_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.csvContentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        json_content_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.jsonContentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigCaptureOptionPropertyToTerraform(struct?: CcEndpointConfig.CaptureOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capture_mode: cdktn.stringToTerraform(struct!.captureMode),
    }
}


export function ccEndpointConfigCaptureOptionPropertyToHclTerraform(struct?: CcEndpointConfig.CaptureOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capture_mode: {
            value: cdktn.stringToHclTerraform(struct!.captureMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigDataCaptureConfigPropertyToTerraform(struct?: CcEndpointConfig.DataCaptureConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capture_content_type_header: ccEndpointConfigCaptureContentTypeHeaderPropertyToTerraform(struct!.captureContentTypeHeader),
        capture_options: cdktn.listMapper(ccEndpointConfigCaptureOptionPropertyToTerraform, false)(struct!.captureOptions),
        destination_s3_uri: cdktn.stringToTerraform(struct!.destinationS3Uri),
        enable_capture: cdktn.booleanToTerraform(struct!.enableCapture),
        initial_sampling_percentage: cdktn.numberToTerraform(struct!.initialSamplingPercentage),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccEndpointConfigDataCaptureConfigPropertyToHclTerraform(struct?: CcEndpointConfig.DataCaptureConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capture_content_type_header: {
            value: ccEndpointConfigCaptureContentTypeHeaderPropertyToHclTerraform(struct!.captureContentTypeHeader),
            isBlock: true,
            type: "struct",
            storageClassType: "CaptureContentTypeHeaderProperty",
        },
        capture_options: {
            value: cdktn.listMapperHcl(ccEndpointConfigCaptureOptionPropertyToHclTerraform, false)(struct!.captureOptions),
            isBlock: true,
            type: "list",
            storageClassType: "CaptureOptionPropertyList",
        },
        destination_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.destinationS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_capture: {
            value: cdktn.booleanToHclTerraform(struct!.enableCapture),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        initial_sampling_percentage: {
            value: cdktn.numberToHclTerraform(struct!.initialSamplingPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccEndpointConfigClarifyInferenceConfigPropertyToTerraform(struct?: CcEndpointConfig.ClarifyInferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_template: cdktn.stringToTerraform(struct!.contentTemplate),
        feature_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.featureHeaders),
        feature_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.featureTypes),
        features_attribute: cdktn.stringToTerraform(struct!.featuresAttribute),
        label_attribute: cdktn.stringToTerraform(struct!.labelAttribute),
        label_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labelHeaders),
        label_index: cdktn.numberToTerraform(struct!.labelIndex),
        max_payload_in_mb: cdktn.numberToTerraform(struct!.maxPayloadInMb),
        max_record_count: cdktn.numberToTerraform(struct!.maxRecordCount),
        probability_attribute: cdktn.stringToTerraform(struct!.probabilityAttribute),
        probability_index: cdktn.numberToTerraform(struct!.probabilityIndex),
    }
}


export function ccEndpointConfigClarifyInferenceConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ClarifyInferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_template: {
            value: cdktn.stringToHclTerraform(struct!.contentTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        feature_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.featureHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        feature_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.featureTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        features_attribute: {
            value: cdktn.stringToHclTerraform(struct!.featuresAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label_attribute: {
            value: cdktn.stringToHclTerraform(struct!.labelAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labelHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        label_index: {
            value: cdktn.numberToHclTerraform(struct!.labelIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_payload_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.maxPayloadInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_record_count: {
            value: cdktn.numberToHclTerraform(struct!.maxRecordCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        probability_attribute: {
            value: cdktn.stringToHclTerraform(struct!.probabilityAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        probability_index: {
            value: cdktn.numberToHclTerraform(struct!.probabilityIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigClarifyShapBaselineConfigPropertyToTerraform(struct?: CcEndpointConfig.ClarifyShapBaselineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mime_type: cdktn.stringToTerraform(struct!.mimeType),
        shap_baseline: cdktn.stringToTerraform(struct!.shapBaseline),
        shap_baseline_uri: cdktn.stringToTerraform(struct!.shapBaselineUri),
    }
}


export function ccEndpointConfigClarifyShapBaselineConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ClarifyShapBaselineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mime_type: {
            value: cdktn.stringToHclTerraform(struct!.mimeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shap_baseline: {
            value: cdktn.stringToHclTerraform(struct!.shapBaseline),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shap_baseline_uri: {
            value: cdktn.stringToHclTerraform(struct!.shapBaselineUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigClarifyTextConfigPropertyToTerraform(struct?: CcEndpointConfig.ClarifyTextConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        granularity: cdktn.stringToTerraform(struct!.granularity),
        language: cdktn.stringToTerraform(struct!.language),
    }
}


export function ccEndpointConfigClarifyTextConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ClarifyTextConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        granularity: {
            value: cdktn.stringToHclTerraform(struct!.granularity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        language: {
            value: cdktn.stringToHclTerraform(struct!.language),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigClarifyShapConfigPropertyToTerraform(struct?: CcEndpointConfig.ClarifyShapConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_of_samples: cdktn.numberToTerraform(struct!.numberOfSamples),
        seed: cdktn.numberToTerraform(struct!.seed),
        shap_baseline_config: ccEndpointConfigClarifyShapBaselineConfigPropertyToTerraform(struct!.shapBaselineConfig),
        text_config: ccEndpointConfigClarifyTextConfigPropertyToTerraform(struct!.textConfig),
        use_logit: cdktn.booleanToTerraform(struct!.useLogit),
    }
}


export function ccEndpointConfigClarifyShapConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ClarifyShapConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_of_samples: {
            value: cdktn.numberToHclTerraform(struct!.numberOfSamples),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        seed: {
            value: cdktn.numberToHclTerraform(struct!.seed),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        shap_baseline_config: {
            value: ccEndpointConfigClarifyShapBaselineConfigPropertyToHclTerraform(struct!.shapBaselineConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClarifyShapBaselineConfigProperty",
        },
        text_config: {
            value: ccEndpointConfigClarifyTextConfigPropertyToHclTerraform(struct!.textConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClarifyTextConfigProperty",
        },
        use_logit: {
            value: cdktn.booleanToHclTerraform(struct!.useLogit),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigClarifyExplainerConfigPropertyToTerraform(struct?: CcEndpointConfig.ClarifyExplainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_explanations: cdktn.stringToTerraform(struct!.enableExplanations),
        inference_config: ccEndpointConfigClarifyInferenceConfigPropertyToTerraform(struct!.inferenceConfig),
        shap_config: ccEndpointConfigClarifyShapConfigPropertyToTerraform(struct!.shapConfig),
    }
}


export function ccEndpointConfigClarifyExplainerConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ClarifyExplainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_explanations: {
            value: cdktn.stringToHclTerraform(struct!.enableExplanations),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inference_config: {
            value: ccEndpointConfigClarifyInferenceConfigPropertyToHclTerraform(struct!.inferenceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClarifyInferenceConfigProperty",
        },
        shap_config: {
            value: ccEndpointConfigClarifyShapConfigPropertyToHclTerraform(struct!.shapConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClarifyShapConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigExplainerConfigPropertyToTerraform(struct?: CcEndpointConfig.ExplainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clarify_explainer_config: ccEndpointConfigClarifyExplainerConfigPropertyToTerraform(struct!.clarifyExplainerConfig),
    }
}


export function ccEndpointConfigExplainerConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ExplainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clarify_explainer_config: {
            value: ccEndpointConfigClarifyExplainerConfigPropertyToHclTerraform(struct!.clarifyExplainerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClarifyExplainerConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigMetricsConfigPropertyToTerraform(struct?: CcEndpointConfig.MetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_detailed_observability: cdktn.booleanToTerraform(struct!.enableDetailedObservability),
        enable_enhanced_metrics: cdktn.booleanToTerraform(struct!.enableEnhancedMetrics),
        metric_publish_frequency_in_seconds: cdktn.numberToTerraform(struct!.metricPublishFrequencyInSeconds),
    }
}


export function ccEndpointConfigMetricsConfigPropertyToHclTerraform(struct?: CcEndpointConfig.MetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_detailed_observability: {
            value: cdktn.booleanToHclTerraform(struct!.enableDetailedObservability),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_enhanced_metrics: {
            value: cdktn.booleanToHclTerraform(struct!.enableEnhancedMetrics),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        metric_publish_frequency_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.metricPublishFrequencyInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigCapacityReservationConfigPropertyToTerraform(struct?: CcEndpointConfig.CapacityReservationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
        ml_reservation_arn: cdktn.stringToTerraform(struct!.mlReservationArn),
    }
}


export function ccEndpointConfigCapacityReservationConfigPropertyToHclTerraform(struct?: CcEndpointConfig.CapacityReservationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_preference: {
            value: cdktn.stringToHclTerraform(struct!.capacityReservationPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ml_reservation_arn: {
            value: cdktn.stringToHclTerraform(struct!.mlReservationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigCoreDumpConfigPropertyToTerraform(struct?: CcEndpointConfig.CoreDumpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_s3_uri: cdktn.stringToTerraform(struct!.destinationS3Uri),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccEndpointConfigCoreDumpConfigPropertyToHclTerraform(struct?: CcEndpointConfig.CoreDumpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.destinationS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccEndpointConfigInstancePoolsPropertyToTerraform(struct?: CcEndpointConfig.InstancePoolsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        model_name_override: cdktn.stringToTerraform(struct!.modelNameOverride),
        priority: cdktn.numberToTerraform(struct!.priority),
    }
}


export function ccEndpointConfigInstancePoolsPropertyToHclTerraform(struct?: CcEndpointConfig.InstancePoolsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_name_override: {
            value: cdktn.stringToHclTerraform(struct!.modelNameOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigScaleInPolicyPropertyToTerraform(struct?: CcEndpointConfig.ScaleInPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cooldown_in_minutes: cdktn.numberToTerraform(struct!.cooldownInMinutes),
        maximum_step_size: cdktn.numberToTerraform(struct!.maximumStepSize),
        strategy: cdktn.stringToTerraform(struct!.strategy),
    }
}


export function ccEndpointConfigScaleInPolicyPropertyToHclTerraform(struct?: CcEndpointConfig.ScaleInPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cooldown_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.cooldownInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_step_size: {
            value: cdktn.numberToHclTerraform(struct!.maximumStepSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strategy: {
            value: cdktn.stringToHclTerraform(struct!.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigManagedInstanceScalingPropertyToTerraform(struct?: CcEndpointConfig.ManagedInstanceScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_instance_count: cdktn.numberToTerraform(struct!.maxInstanceCount),
        min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
        scale_in_policy: ccEndpointConfigScaleInPolicyPropertyToTerraform(struct!.scaleInPolicy),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccEndpointConfigManagedInstanceScalingPropertyToHclTerraform(struct?: CcEndpointConfig.ManagedInstanceScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.maxInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.minInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_in_policy: {
            value: ccEndpointConfigScaleInPolicyPropertyToHclTerraform(struct!.scaleInPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ScaleInPolicyProperty",
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


export function ccEndpointConfigPrefixAwareRoutingConfigPropertyToTerraform(struct?: CcEndpointConfig.PrefixAwareRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        concurrency_threshold: cdktn.numberToTerraform(struct!.concurrencyThreshold),
        prefix_length: cdktn.numberToTerraform(struct!.prefixLength),
    }
}


export function ccEndpointConfigPrefixAwareRoutingConfigPropertyToHclTerraform(struct?: CcEndpointConfig.PrefixAwareRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        concurrency_threshold: {
            value: cdktn.numberToHclTerraform(struct!.concurrencyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        prefix_length: {
            value: cdktn.numberToHclTerraform(struct!.prefixLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigRoutingConfigPropertyToTerraform(struct?: CcEndpointConfig.RoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prefix_aware_routing_config: ccEndpointConfigPrefixAwareRoutingConfigPropertyToTerraform(struct!.prefixAwareRoutingConfig),
        routing_strategy: cdktn.stringToTerraform(struct!.routingStrategy),
    }
}


export function ccEndpointConfigRoutingConfigPropertyToHclTerraform(struct?: CcEndpointConfig.RoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prefix_aware_routing_config: {
            value: ccEndpointConfigPrefixAwareRoutingConfigPropertyToHclTerraform(struct!.prefixAwareRoutingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrefixAwareRoutingConfigProperty",
        },
        routing_strategy: {
            value: cdktn.stringToHclTerraform(struct!.routingStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigServerlessConfigPropertyToTerraform(struct?: CcEndpointConfig.ServerlessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_concurrency: cdktn.numberToTerraform(struct!.maxConcurrency),
        memory_size_in_mb: cdktn.numberToTerraform(struct!.memorySizeInMb),
        provisioned_concurrency: cdktn.numberToTerraform(struct!.provisionedConcurrency),
    }
}


export function ccEndpointConfigServerlessConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ServerlessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_size_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.memorySizeInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        provisioned_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.provisionedConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigProductionVariantPropertyToTerraform(struct?: CcEndpointConfig.ProductionVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_config: ccEndpointConfigCapacityReservationConfigPropertyToTerraform(struct!.capacityReservationConfig),
        container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
        core_dump_config: ccEndpointConfigCoreDumpConfigPropertyToTerraform(struct!.coreDumpConfig),
        enable_ssm_access: cdktn.booleanToTerraform(struct!.enableSsmAccess),
        inference_ami_version: cdktn.stringToTerraform(struct!.inferenceAmiVersion),
        initial_instance_count: cdktn.numberToTerraform(struct!.initialInstanceCount),
        initial_variant_weight: cdktn.numberToTerraform(struct!.initialVariantWeight),
        instance_pools: cdktn.listMapper(ccEndpointConfigInstancePoolsPropertyToTerraform, false)(struct!.instancePools),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        managed_instance_scaling: ccEndpointConfigManagedInstanceScalingPropertyToTerraform(struct!.managedInstanceScaling),
        model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
        model_name: cdktn.stringToTerraform(struct!.modelName),
        routing_config: ccEndpointConfigRoutingConfigPropertyToTerraform(struct!.routingConfig),
        serverless_config: ccEndpointConfigServerlessConfigPropertyToTerraform(struct!.serverlessConfig),
        variant_instance_provision_timeout_in_seconds: cdktn.numberToTerraform(struct!.variantInstanceProvisionTimeoutInSeconds),
        variant_name: cdktn.stringToTerraform(struct!.variantName),
        volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    }
}


export function ccEndpointConfigProductionVariantPropertyToHclTerraform(struct?: CcEndpointConfig.ProductionVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_config: {
            value: ccEndpointConfigCapacityReservationConfigPropertyToHclTerraform(struct!.capacityReservationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationConfigProperty",
        },
        container_startup_health_check_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        core_dump_config: {
            value: ccEndpointConfigCoreDumpConfigPropertyToHclTerraform(struct!.coreDumpConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CoreDumpConfigProperty",
        },
        enable_ssm_access: {
            value: cdktn.booleanToHclTerraform(struct!.enableSsmAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        inference_ami_version: {
            value: cdktn.stringToHclTerraform(struct!.inferenceAmiVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        initial_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.initialInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        initial_variant_weight: {
            value: cdktn.numberToHclTerraform(struct!.initialVariantWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_pools: {
            value: cdktn.listMapperHcl(ccEndpointConfigInstancePoolsPropertyToHclTerraform, false)(struct!.instancePools),
            isBlock: true,
            type: "list",
            storageClassType: "InstancePoolsPropertyList",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_instance_scaling: {
            value: ccEndpointConfigManagedInstanceScalingPropertyToHclTerraform(struct!.managedInstanceScaling),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstanceScalingProperty",
        },
        model_data_download_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        model_name: {
            value: cdktn.stringToHclTerraform(struct!.modelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_config: {
            value: ccEndpointConfigRoutingConfigPropertyToHclTerraform(struct!.routingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RoutingConfigProperty",
        },
        serverless_config: {
            value: ccEndpointConfigServerlessConfigPropertyToHclTerraform(struct!.serverlessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ServerlessConfigProperty",
        },
        variant_instance_provision_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.variantInstanceProvisionTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        variant_name: {
            value: cdktn.stringToHclTerraform(struct!.variantName),
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


export function ccEndpointConfigShadowProductionVariantsCapacityReservationConfigPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsCapacityReservationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
        ml_reservation_arn: cdktn.stringToTerraform(struct!.mlReservationArn),
    }
}


export function ccEndpointConfigShadowProductionVariantsCapacityReservationConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsCapacityReservationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_preference: {
            value: cdktn.stringToHclTerraform(struct!.capacityReservationPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ml_reservation_arn: {
            value: cdktn.stringToHclTerraform(struct!.mlReservationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigShadowProductionVariantsCoreDumpConfigPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsCoreDumpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_s3_uri: cdktn.stringToTerraform(struct!.destinationS3Uri),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccEndpointConfigShadowProductionVariantsCoreDumpConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsCoreDumpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.destinationS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccEndpointConfigShadowProductionVariantsInstancePoolsPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsInstancePoolsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        model_name_override: cdktn.stringToTerraform(struct!.modelNameOverride),
        priority: cdktn.numberToTerraform(struct!.priority),
    }
}


export function ccEndpointConfigShadowProductionVariantsInstancePoolsPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsInstancePoolsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_name_override: {
            value: cdktn.stringToHclTerraform(struct!.modelNameOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cooldown_in_minutes: cdktn.numberToTerraform(struct!.cooldownInMinutes),
        maximum_step_size: cdktn.numberToTerraform(struct!.maximumStepSize),
        strategy: cdktn.stringToTerraform(struct!.strategy),
    }
}


export function ccEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cooldown_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.cooldownInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_step_size: {
            value: cdktn.numberToHclTerraform(struct!.maximumStepSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strategy: {
            value: cdktn.stringToHclTerraform(struct!.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigShadowProductionVariantsManagedInstanceScalingPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsManagedInstanceScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_instance_count: cdktn.numberToTerraform(struct!.maxInstanceCount),
        min_instance_count: cdktn.numberToTerraform(struct!.minInstanceCount),
        scale_in_policy: ccEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyPropertyToTerraform(struct!.scaleInPolicy),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccEndpointConfigShadowProductionVariantsManagedInstanceScalingPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsManagedInstanceScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.maxInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.minInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_in_policy: {
            value: ccEndpointConfigShadowProductionVariantsManagedInstanceScalingScaleInPolicyPropertyToHclTerraform(struct!.scaleInPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty",
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


export function ccEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        concurrency_threshold: cdktn.numberToTerraform(struct!.concurrencyThreshold),
        prefix_length: cdktn.numberToTerraform(struct!.prefixLength),
    }
}


export function ccEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        concurrency_threshold: {
            value: cdktn.numberToHclTerraform(struct!.concurrencyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        prefix_length: {
            value: cdktn.numberToHclTerraform(struct!.prefixLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigShadowProductionVariantsRoutingConfigPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prefix_aware_routing_config: ccEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigPropertyToTerraform(struct!.prefixAwareRoutingConfig),
        routing_strategy: cdktn.stringToTerraform(struct!.routingStrategy),
    }
}


export function ccEndpointConfigShadowProductionVariantsRoutingConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prefix_aware_routing_config: {
            value: ccEndpointConfigShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigPropertyToHclTerraform(struct!.prefixAwareRoutingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty",
        },
        routing_strategy: {
            value: cdktn.stringToHclTerraform(struct!.routingStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigShadowProductionVariantsServerlessConfigPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsServerlessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_concurrency: cdktn.numberToTerraform(struct!.maxConcurrency),
        memory_size_in_mb: cdktn.numberToTerraform(struct!.memorySizeInMb),
        provisioned_concurrency: cdktn.numberToTerraform(struct!.provisionedConcurrency),
    }
}


export function ccEndpointConfigShadowProductionVariantsServerlessConfigPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsServerlessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_size_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.memorySizeInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        provisioned_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.provisionedConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointConfigShadowProductionVariantsPropertyToTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_reservation_config: ccEndpointConfigShadowProductionVariantsCapacityReservationConfigPropertyToTerraform(struct!.capacityReservationConfig),
        container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
        core_dump_config: ccEndpointConfigShadowProductionVariantsCoreDumpConfigPropertyToTerraform(struct!.coreDumpConfig),
        enable_ssm_access: cdktn.booleanToTerraform(struct!.enableSsmAccess),
        inference_ami_version: cdktn.stringToTerraform(struct!.inferenceAmiVersion),
        initial_instance_count: cdktn.numberToTerraform(struct!.initialInstanceCount),
        initial_variant_weight: cdktn.numberToTerraform(struct!.initialVariantWeight),
        instance_pools: cdktn.listMapper(ccEndpointConfigShadowProductionVariantsInstancePoolsPropertyToTerraform, false)(struct!.instancePools),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        managed_instance_scaling: ccEndpointConfigShadowProductionVariantsManagedInstanceScalingPropertyToTerraform(struct!.managedInstanceScaling),
        model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
        model_name: cdktn.stringToTerraform(struct!.modelName),
        routing_config: ccEndpointConfigShadowProductionVariantsRoutingConfigPropertyToTerraform(struct!.routingConfig),
        serverless_config: ccEndpointConfigShadowProductionVariantsServerlessConfigPropertyToTerraform(struct!.serverlessConfig),
        variant_instance_provision_timeout_in_seconds: cdktn.numberToTerraform(struct!.variantInstanceProvisionTimeoutInSeconds),
        variant_name: cdktn.stringToTerraform(struct!.variantName),
        volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    }
}


export function ccEndpointConfigShadowProductionVariantsPropertyToHclTerraform(struct?: CcEndpointConfig.ShadowProductionVariantsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_reservation_config: {
            value: ccEndpointConfigShadowProductionVariantsCapacityReservationConfigPropertyToHclTerraform(struct!.capacityReservationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ShadowProductionVariantsCapacityReservationConfigProperty",
        },
        container_startup_health_check_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        core_dump_config: {
            value: ccEndpointConfigShadowProductionVariantsCoreDumpConfigPropertyToHclTerraform(struct!.coreDumpConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ShadowProductionVariantsCoreDumpConfigProperty",
        },
        enable_ssm_access: {
            value: cdktn.booleanToHclTerraform(struct!.enableSsmAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        inference_ami_version: {
            value: cdktn.stringToHclTerraform(struct!.inferenceAmiVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        initial_instance_count: {
            value: cdktn.numberToHclTerraform(struct!.initialInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        initial_variant_weight: {
            value: cdktn.numberToHclTerraform(struct!.initialVariantWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_pools: {
            value: cdktn.listMapperHcl(ccEndpointConfigShadowProductionVariantsInstancePoolsPropertyToHclTerraform, false)(struct!.instancePools),
            isBlock: true,
            type: "list",
            storageClassType: "ShadowProductionVariantsInstancePoolsPropertyList",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_instance_scaling: {
            value: ccEndpointConfigShadowProductionVariantsManagedInstanceScalingPropertyToHclTerraform(struct!.managedInstanceScaling),
            isBlock: true,
            type: "struct",
            storageClassType: "ShadowProductionVariantsManagedInstanceScalingProperty",
        },
        model_data_download_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        model_name: {
            value: cdktn.stringToHclTerraform(struct!.modelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_config: {
            value: ccEndpointConfigShadowProductionVariantsRoutingConfigPropertyToHclTerraform(struct!.routingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ShadowProductionVariantsRoutingConfigProperty",
        },
        serverless_config: {
            value: ccEndpointConfigShadowProductionVariantsServerlessConfigPropertyToHclTerraform(struct!.serverlessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ShadowProductionVariantsServerlessConfigProperty",
        },
        variant_instance_provision_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.variantInstanceProvisionTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        variant_name: {
            value: cdktn.stringToHclTerraform(struct!.variantName),
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


export function ccEndpointConfigTagPropertyToTerraform(struct?: CcEndpointConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEndpointConfigTagPropertyToHclTerraform(struct?: CcEndpointConfig.TagProperty | cdktn.IResolvable): any {
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


export function ccEndpointConfigVpcConfigPropertyToTerraform(struct?: CcEndpointConfig.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccEndpointConfigVpcConfigPropertyToHclTerraform(struct?: CcEndpointConfig.VpcConfigProperty | cdktn.IResolvable): any {
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


export namespace CcEndpointConfig {
export interface AsyncInferenceClientConfigProperty {
    /**
    * The maximum number of concurrent requests sent by the SageMaker client to the model container. If no value is provided, SageMaker will choose an optimal value for you.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#max_concurrent_invocations_per_instance CcEndpointConfig#max_concurrent_invocations_per_instance}
    */
    readonly maxConcurrentInvocationsPerInstance?: number;
}
export class AsyncInferenceClientConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AsyncInferenceClientConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxConcurrentInvocationsPerInstance !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentInvocationsPerInstance = this._maxConcurrentInvocationsPerInstance;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AsyncInferenceClientConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxConcurrentInvocationsPerInstance = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxConcurrentInvocationsPerInstance = value.maxConcurrentInvocationsPerInstance;
        }
    }

    // max_concurrent_invocations_per_instance - computed: true, optional: true, required: false
    private _maxConcurrentInvocationsPerInstance?: number; 
    public get maxConcurrentInvocationsPerInstance() {
        return this.getNumberAttribute('max_concurrent_invocations_per_instance');
    }
    public set maxConcurrentInvocationsPerInstance(value: number) {
        this._maxConcurrentInvocationsPerInstance = value;
    }
    public resetMaxConcurrentInvocationsPerInstance() {
        this._maxConcurrentInvocationsPerInstance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentInvocationsPerInstanceInput() {
        return this._maxConcurrentInvocationsPerInstance;
    }
}
export interface AsyncInferenceNotificationConfigProperty {
    /**
    * Amazon SNS topic to post a notification to when an inference fails. If no topic is provided, no notification is sent on failure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#error_topic CcEndpointConfig#error_topic}
    */
    readonly errorTopic?: string;
    /**
    * The Amazon SNS topics where you want the inference response to be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#include_inference_response_in CcEndpointConfig#include_inference_response_in}
    */
    readonly includeInferenceResponseIn?: string[];
    /**
    * Amazon SNS topic to post a notification to when an inference completes successfully. If no topic is provided, no notification is sent on success.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#success_topic CcEndpointConfig#success_topic}
    */
    readonly successTopic?: string;
}
export class AsyncInferenceNotificationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AsyncInferenceNotificationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorTopic = this._errorTopic;
        }
        if (this._includeInferenceResponseIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeInferenceResponseIn = this._includeInferenceResponseIn;
        }
        if (this._successTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.successTopic = this._successTopic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AsyncInferenceNotificationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorTopic = undefined;
            this._includeInferenceResponseIn = undefined;
            this._successTopic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorTopic = value.errorTopic;
            this._includeInferenceResponseIn = value.includeInferenceResponseIn;
            this._successTopic = value.successTopic;
        }
    }

    // error_topic - computed: true, optional: true, required: false
    private _errorTopic?: string; 
    public get errorTopic() {
        return this.getStringAttribute('error_topic');
    }
    public set errorTopic(value: string) {
        this._errorTopic = value;
    }
    public resetErrorTopic() {
        this._errorTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorTopicInput() {
        return this._errorTopic;
    }

    // include_inference_response_in - computed: true, optional: true, required: false
    private _includeInferenceResponseIn?: string[]; 
    public get includeInferenceResponseIn() {
        return this.getListAttribute('include_inference_response_in');
    }
    public set includeInferenceResponseIn(value: string[]) {
        this._includeInferenceResponseIn = value;
    }
    public resetIncludeInferenceResponseIn() {
        this._includeInferenceResponseIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeInferenceResponseInInput() {
        return this._includeInferenceResponseIn;
    }

    // success_topic - computed: true, optional: true, required: false
    private _successTopic?: string; 
    public get successTopic() {
        return this.getStringAttribute('success_topic');
    }
    public set successTopic(value: string) {
        this._successTopic = value;
    }
    public resetSuccessTopic() {
        this._successTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successTopicInput() {
        return this._successTopic;
    }
}
export interface AsyncInferenceOutputConfigProperty {
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#kms_key_id CcEndpointConfig#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Specifies the configuration for notifications of inference results for asynchronous inference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#notification_config CcEndpointConfig#notification_config}
    */
    readonly notificationConfig?: AsyncInferenceNotificationConfigProperty;
    /**
    * The Amazon S3 location to upload failure inference responses to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#s3_failure_path CcEndpointConfig#s3_failure_path}
    */
    readonly s3FailurePath?: string;
    /**
    * The Amazon S3 location to upload inference responses to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#s3_output_path CcEndpointConfig#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export class AsyncInferenceOutputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AsyncInferenceOutputConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._notificationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
        }
        if (this._s3FailurePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3FailurePath = this._s3FailurePath;
        }
        if (this._s3OutputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AsyncInferenceOutputConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._notificationConfig.internalValue = undefined;
            this._s3FailurePath = undefined;
            this._s3OutputPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._notificationConfig.internalValue = value.notificationConfig;
            this._s3FailurePath = value.s3FailurePath;
            this._s3OutputPath = value.s3OutputPath;
        }
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

    // notification_config - computed: true, optional: true, required: false
    private _notificationConfig = new AsyncInferenceNotificationConfigPropertyOutputReference(this, "notification_config");
    public get notificationConfig() {
        return this._notificationConfig;
    }
    public putNotificationConfig(value: AsyncInferenceNotificationConfigProperty) {
        this._notificationConfig.internalValue = value;
    }
    public resetNotificationConfig() {
        this._notificationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigInput() {
        return this._notificationConfig.internalValue;
    }

    // s3_failure_path - computed: true, optional: true, required: false
    private _s3FailurePath?: string; 
    public get s3FailurePath() {
        return this.getStringAttribute('s3_failure_path');
    }
    public set s3FailurePath(value: string) {
        this._s3FailurePath = value;
    }
    public resetS3FailurePath() {
        this._s3FailurePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3FailurePathInput() {
        return this._s3FailurePath;
    }

    // s3_output_path - computed: true, optional: true, required: false
    private _s3OutputPath?: string; 
    public get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string) {
        this._s3OutputPath = value;
    }
    public resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
export interface AsyncInferenceConfigProperty {
    /**
    * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#client_config CcEndpointConfig#client_config}
    */
    readonly clientConfig?: AsyncInferenceClientConfigProperty;
    /**
    * Specifies the configuration for asynchronous inference invocation outputs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#output_config CcEndpointConfig#output_config}
    */
    readonly outputConfig?: AsyncInferenceOutputConfigProperty;
}
export class AsyncInferenceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AsyncInferenceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientConfig = this._clientConfig?.internalValue;
        }
        if (this._outputConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputConfig = this._outputConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AsyncInferenceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientConfig.internalValue = undefined;
            this._outputConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientConfig.internalValue = value.clientConfig;
            this._outputConfig.internalValue = value.outputConfig;
        }
    }

    // client_config - computed: true, optional: true, required: false
    private _clientConfig = new AsyncInferenceClientConfigPropertyOutputReference(this, "client_config");
    public get clientConfig() {
        return this._clientConfig;
    }
    public putClientConfig(value: AsyncInferenceClientConfigProperty) {
        this._clientConfig.internalValue = value;
    }
    public resetClientConfig() {
        this._clientConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientConfigInput() {
        return this._clientConfig.internalValue;
    }

    // output_config - computed: true, optional: true, required: false
    private _outputConfig = new AsyncInferenceOutputConfigPropertyOutputReference(this, "output_config");
    public get outputConfig() {
        return this._outputConfig;
    }
    public putOutputConfig(value: AsyncInferenceOutputConfigProperty) {
        this._outputConfig.internalValue = value;
    }
    public resetOutputConfig() {
        this._outputConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConfigInput() {
        return this._outputConfig.internalValue;
    }
}
export interface CaptureContentTypeHeaderProperty {
    /**
    * A list of the CSV content types of the data that the endpoint captures. For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#csv_content_types CcEndpointConfig#csv_content_types}
    */
    readonly csvContentTypes?: string[];
    /**
    * A list of the JSON content types of the data that the endpoint captures. For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#json_content_types CcEndpointConfig#json_content_types}
    */
    readonly jsonContentTypes?: string[];
}
export class CaptureContentTypeHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CaptureContentTypeHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._csvContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvContentTypes = this._csvContentTypes;
        }
        if (this._jsonContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonContentTypes = this._jsonContentTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaptureContentTypeHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._csvContentTypes = undefined;
            this._jsonContentTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._csvContentTypes = value.csvContentTypes;
            this._jsonContentTypes = value.jsonContentTypes;
        }
    }

    // csv_content_types - computed: true, optional: true, required: false
    private _csvContentTypes?: string[]; 
    public get csvContentTypes() {
        return this.getListAttribute('csv_content_types');
    }
    public set csvContentTypes(value: string[]) {
        this._csvContentTypes = value;
    }
    public resetCsvContentTypes() {
        this._csvContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvContentTypesInput() {
        return this._csvContentTypes;
    }

    // json_content_types - computed: true, optional: true, required: false
    private _jsonContentTypes?: string[]; 
    public get jsonContentTypes() {
        return this.getListAttribute('json_content_types');
    }
    public set jsonContentTypes(value: string[]) {
        this._jsonContentTypes = value;
    }
    public resetJsonContentTypes() {
        this._jsonContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonContentTypesInput() {
        return this._jsonContentTypes;
    }
}
export interface CaptureOptionProperty {
    /**
    * Specifies whether the endpoint captures input data or output data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#capture_mode CcEndpointConfig#capture_mode}
    */
    readonly captureMode?: string;
}
export class CaptureOptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CaptureOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._captureMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.captureMode = this._captureMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaptureOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._captureMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._captureMode = value.captureMode;
        }
    }

    // capture_mode - computed: true, optional: true, required: false
    private _captureMode?: string; 
    public get captureMode() {
        return this.getStringAttribute('capture_mode');
    }
    public set captureMode(value: string) {
        this._captureMode = value;
    }
    public resetCaptureMode() {
        this._captureMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get captureModeInput() {
        return this._captureMode;
    }
}

export class CaptureOptionPropertyList extends cdktn.ComplexList {
    public internalValue? : CaptureOptionProperty[] | cdktn.IResolvable

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
    public get(index: number): CaptureOptionPropertyOutputReference {
        return new CaptureOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DataCaptureConfigProperty {
    /**
    * A list of the JSON and CSV content type that the endpoint captures.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#capture_content_type_header CcEndpointConfig#capture_content_type_header}
    */
    readonly captureContentTypeHeader?: CaptureContentTypeHeaderProperty;
    /**
    * Specifies whether the endpoint captures input data to your model, output data from your model, or both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#capture_options CcEndpointConfig#capture_options}
    */
    readonly captureOptions?: CaptureOptionProperty[] | cdktn.IResolvable;
    /**
    * The S3 bucket where model monitor stores captured data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#destination_s3_uri CcEndpointConfig#destination_s3_uri}
    */
    readonly destinationS3Uri?: string;
    /**
    * Set to True to enable data capture.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#enable_capture CcEndpointConfig#enable_capture}
    */
    readonly enableCapture?: boolean | cdktn.IResolvable;
    /**
    * The percentage of data to capture.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#initial_sampling_percentage CcEndpointConfig#initial_sampling_percentage}
    */
    readonly initialSamplingPercentage?: number;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the captured data at rest using Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#kms_key_id CcEndpointConfig#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class DataCaptureConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataCaptureConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._captureContentTypeHeader?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.captureContentTypeHeader = this._captureContentTypeHeader?.internalValue;
        }
        if (this._captureOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.captureOptions = this._captureOptions?.internalValue;
        }
        if (this._destinationS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationS3Uri = this._destinationS3Uri;
        }
        if (this._enableCapture !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableCapture = this._enableCapture;
        }
        if (this._initialSamplingPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialSamplingPercentage = this._initialSamplingPercentage;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCaptureConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._captureContentTypeHeader.internalValue = undefined;
            this._captureOptions.internalValue = undefined;
            this._destinationS3Uri = undefined;
            this._enableCapture = undefined;
            this._initialSamplingPercentage = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._captureContentTypeHeader.internalValue = value.captureContentTypeHeader;
            this._captureOptions.internalValue = value.captureOptions;
            this._destinationS3Uri = value.destinationS3Uri;
            this._enableCapture = value.enableCapture;
            this._initialSamplingPercentage = value.initialSamplingPercentage;
            this._kmsKeyId = value.kmsKeyId;
        }
    }

    // capture_content_type_header - computed: true, optional: true, required: false
    private _captureContentTypeHeader = new CaptureContentTypeHeaderPropertyOutputReference(this, "capture_content_type_header");
    public get captureContentTypeHeader() {
        return this._captureContentTypeHeader;
    }
    public putCaptureContentTypeHeader(value: CaptureContentTypeHeaderProperty) {
        this._captureContentTypeHeader.internalValue = value;
    }
    public resetCaptureContentTypeHeader() {
        this._captureContentTypeHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get captureContentTypeHeaderInput() {
        return this._captureContentTypeHeader.internalValue;
    }

    // capture_options - computed: true, optional: true, required: false
    private _captureOptions = new CaptureOptionPropertyList(this, "capture_options", false);
    public get captureOptions() {
        return this._captureOptions;
    }
    public putCaptureOptions(value: CaptureOptionProperty[] | cdktn.IResolvable) {
        this._captureOptions.internalValue = value;
    }
    public resetCaptureOptions() {
        this._captureOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get captureOptionsInput() {
        return this._captureOptions.internalValue;
    }

    // destination_s3_uri - computed: true, optional: true, required: false
    private _destinationS3Uri?: string; 
    public get destinationS3Uri() {
        return this.getStringAttribute('destination_s3_uri');
    }
    public set destinationS3Uri(value: string) {
        this._destinationS3Uri = value;
    }
    public resetDestinationS3Uri() {
        this._destinationS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationS3UriInput() {
        return this._destinationS3Uri;
    }

    // enable_capture - computed: true, optional: true, required: false
    private _enableCapture?: boolean | cdktn.IResolvable; 
    public get enableCapture() {
        return this.getBooleanAttribute('enable_capture');
    }
    public set enableCapture(value: boolean | cdktn.IResolvable) {
        this._enableCapture = value;
    }
    public resetEnableCapture() {
        this._enableCapture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCaptureInput() {
        return this._enableCapture;
    }

    // initial_sampling_percentage - computed: true, optional: true, required: false
    private _initialSamplingPercentage?: number; 
    public get initialSamplingPercentage() {
        return this.getNumberAttribute('initial_sampling_percentage');
    }
    public set initialSamplingPercentage(value: number) {
        this._initialSamplingPercentage = value;
    }
    public resetInitialSamplingPercentage() {
        this._initialSamplingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialSamplingPercentageInput() {
        return this._initialSamplingPercentage;
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
export interface ClarifyInferenceConfigProperty {
    /**
    * A template string used to format a JSON record into an acceptable model container input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#content_template CcEndpointConfig#content_template}
    */
    readonly contentTemplate?: string;
    /**
    * The names of the features. If provided, these are included in the endpoint response payload to help readability of the InvokeEndpoint output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#feature_headers CcEndpointConfig#feature_headers}
    */
    readonly featureHeaders?: string[];
    /**
    * A list of data types of the features (optional). Applicable only to NLP explainability. If provided, FeatureTypes must have at least one 'text' string (for example, ['text']). If FeatureTypes is not provided, the explainer infers the feature types based on the baseline data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#feature_types CcEndpointConfig#feature_types}
    */
    readonly featureTypes?: string[];
    /**
    * Provides the JMESPath expression to extract the features from a model container input in JSON Lines format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#features_attribute CcEndpointConfig#features_attribute}
    */
    readonly featuresAttribute?: string;
    /**
    * A JMESPath expression used to locate the list of label headers in the model container output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#label_attribute CcEndpointConfig#label_attribute}
    */
    readonly labelAttribute?: string;
    /**
    * For multiclass classification problems, the label headers are the names of the classes. Otherwise, the label header is the name of the predicted label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#label_headers CcEndpointConfig#label_headers}
    */
    readonly labelHeaders?: string[];
    /**
    * A zero-based index used to extract a label header or list of label headers from model container output in CSV format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#label_index CcEndpointConfig#label_index}
    */
    readonly labelIndex?: number;
    /**
    * The maximum payload size (MB) allowed of a request from the explainer to the model container. Defaults to 6 MB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#max_payload_in_mb CcEndpointConfig#max_payload_in_mb}
    */
    readonly maxPayloadInMb?: number;
    /**
    * The maximum number of records in a request that the model container can process when querying the model container for the predictions of a synthetic dataset. A record is a unit of input data that inference can be made on, for example, a single line in CSV data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#max_record_count CcEndpointConfig#max_record_count}
    */
    readonly maxRecordCount?: number;
    /**
    * A JMESPath expression used to extract the probability (or score) from the model container output if the model container is in JSON Lines format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#probability_attribute CcEndpointConfig#probability_attribute}
    */
    readonly probabilityAttribute?: string;
    /**
    * A zero-based index used to extract a probability value (score) or list from model container output in CSV format. If this value is not provided, the entire model container output will be treated as a probability value (score) or list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#probability_index CcEndpointConfig#probability_index}
    */
    readonly probabilityIndex?: number;
}
export class ClarifyInferenceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClarifyInferenceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTemplate = this._contentTemplate;
        }
        if (this._featureHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureHeaders = this._featureHeaders;
        }
        if (this._featureTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureTypes = this._featureTypes;
        }
        if (this._featuresAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.featuresAttribute = this._featuresAttribute;
        }
        if (this._labelAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelAttribute = this._labelAttribute;
        }
        if (this._labelHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelHeaders = this._labelHeaders;
        }
        if (this._labelIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelIndex = this._labelIndex;
        }
        if (this._maxPayloadInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPayloadInMb = this._maxPayloadInMb;
        }
        if (this._maxRecordCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRecordCount = this._maxRecordCount;
        }
        if (this._probabilityAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.probabilityAttribute = this._probabilityAttribute;
        }
        if (this._probabilityIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.probabilityIndex = this._probabilityIndex;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClarifyInferenceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentTemplate = undefined;
            this._featureHeaders = undefined;
            this._featureTypes = undefined;
            this._featuresAttribute = undefined;
            this._labelAttribute = undefined;
            this._labelHeaders = undefined;
            this._labelIndex = undefined;
            this._maxPayloadInMb = undefined;
            this._maxRecordCount = undefined;
            this._probabilityAttribute = undefined;
            this._probabilityIndex = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentTemplate = value.contentTemplate;
            this._featureHeaders = value.featureHeaders;
            this._featureTypes = value.featureTypes;
            this._featuresAttribute = value.featuresAttribute;
            this._labelAttribute = value.labelAttribute;
            this._labelHeaders = value.labelHeaders;
            this._labelIndex = value.labelIndex;
            this._maxPayloadInMb = value.maxPayloadInMb;
            this._maxRecordCount = value.maxRecordCount;
            this._probabilityAttribute = value.probabilityAttribute;
            this._probabilityIndex = value.probabilityIndex;
        }
    }

    // content_template - computed: true, optional: true, required: false
    private _contentTemplate?: string; 
    public get contentTemplate() {
        return this.getStringAttribute('content_template');
    }
    public set contentTemplate(value: string) {
        this._contentTemplate = value;
    }
    public resetContentTemplate() {
        this._contentTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTemplateInput() {
        return this._contentTemplate;
    }

    // feature_headers - computed: true, optional: true, required: false
    private _featureHeaders?: string[]; 
    public get featureHeaders() {
        return this.getListAttribute('feature_headers');
    }
    public set featureHeaders(value: string[]) {
        this._featureHeaders = value;
    }
    public resetFeatureHeaders() {
        this._featureHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featureHeadersInput() {
        return this._featureHeaders;
    }

    // feature_types - computed: true, optional: true, required: false
    private _featureTypes?: string[]; 
    public get featureTypes() {
        return this.getListAttribute('feature_types');
    }
    public set featureTypes(value: string[]) {
        this._featureTypes = value;
    }
    public resetFeatureTypes() {
        this._featureTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featureTypesInput() {
        return this._featureTypes;
    }

    // features_attribute - computed: true, optional: true, required: false
    private _featuresAttribute?: string; 
    public get featuresAttribute() {
        return this.getStringAttribute('features_attribute');
    }
    public set featuresAttribute(value: string) {
        this._featuresAttribute = value;
    }
    public resetFeaturesAttribute() {
        this._featuresAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featuresAttributeInput() {
        return this._featuresAttribute;
    }

    // label_attribute - computed: true, optional: true, required: false
    private _labelAttribute?: string; 
    public get labelAttribute() {
        return this.getStringAttribute('label_attribute');
    }
    public set labelAttribute(value: string) {
        this._labelAttribute = value;
    }
    public resetLabelAttribute() {
        this._labelAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelAttributeInput() {
        return this._labelAttribute;
    }

    // label_headers - computed: true, optional: true, required: false
    private _labelHeaders?: string[]; 
    public get labelHeaders() {
        return this.getListAttribute('label_headers');
    }
    public set labelHeaders(value: string[]) {
        this._labelHeaders = value;
    }
    public resetLabelHeaders() {
        this._labelHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelHeadersInput() {
        return this._labelHeaders;
    }

    // label_index - computed: true, optional: true, required: false
    private _labelIndex?: number; 
    public get labelIndex() {
        return this.getNumberAttribute('label_index');
    }
    public set labelIndex(value: number) {
        this._labelIndex = value;
    }
    public resetLabelIndex() {
        this._labelIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelIndexInput() {
        return this._labelIndex;
    }

    // max_payload_in_mb - computed: true, optional: true, required: false
    private _maxPayloadInMb?: number; 
    public get maxPayloadInMb() {
        return this.getNumberAttribute('max_payload_in_mb');
    }
    public set maxPayloadInMb(value: number) {
        this._maxPayloadInMb = value;
    }
    public resetMaxPayloadInMb() {
        this._maxPayloadInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPayloadInMbInput() {
        return this._maxPayloadInMb;
    }

    // max_record_count - computed: true, optional: true, required: false
    private _maxRecordCount?: number; 
    public get maxRecordCount() {
        return this.getNumberAttribute('max_record_count');
    }
    public set maxRecordCount(value: number) {
        this._maxRecordCount = value;
    }
    public resetMaxRecordCount() {
        this._maxRecordCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRecordCountInput() {
        return this._maxRecordCount;
    }

    // probability_attribute - computed: true, optional: true, required: false
    private _probabilityAttribute?: string; 
    public get probabilityAttribute() {
        return this.getStringAttribute('probability_attribute');
    }
    public set probabilityAttribute(value: string) {
        this._probabilityAttribute = value;
    }
    public resetProbabilityAttribute() {
        this._probabilityAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get probabilityAttributeInput() {
        return this._probabilityAttribute;
    }

    // probability_index - computed: true, optional: true, required: false
    private _probabilityIndex?: number; 
    public get probabilityIndex() {
        return this.getNumberAttribute('probability_index');
    }
    public set probabilityIndex(value: number) {
        this._probabilityIndex = value;
    }
    public resetProbabilityIndex() {
        this._probabilityIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get probabilityIndexInput() {
        return this._probabilityIndex;
    }
}
export interface ClarifyShapBaselineConfigProperty {
    /**
    * The MIME type of the baseline data. Choose from 'text/csv' or 'application/jsonlines'. Defaults to 'text/csv'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#mime_type CcEndpointConfig#mime_type}
    */
    readonly mimeType?: string;
    /**
    * The inline SHAP baseline data in string format. ShapBaseline can have one or multiple records to be used as the baseline dataset. The format of the SHAP baseline file should be the same format as the training dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#shap_baseline CcEndpointConfig#shap_baseline}
    */
    readonly shapBaseline?: string;
    /**
    * The uniform resource identifier (URI) of the S3 bucket where the SHAP baseline file is stored. The format of the SHAP baseline file should be the same format as the format of the training dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#shap_baseline_uri CcEndpointConfig#shap_baseline_uri}
    */
    readonly shapBaselineUri?: string;
}
export class ClarifyShapBaselineConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClarifyShapBaselineConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mimeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.mimeType = this._mimeType;
        }
        if (this._shapBaseline !== undefined) {
            hasAnyValues = true;
            internalValueResult.shapBaseline = this._shapBaseline;
        }
        if (this._shapBaselineUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.shapBaselineUri = this._shapBaselineUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClarifyShapBaselineConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mimeType = undefined;
            this._shapBaseline = undefined;
            this._shapBaselineUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mimeType = value.mimeType;
            this._shapBaseline = value.shapBaseline;
            this._shapBaselineUri = value.shapBaselineUri;
        }
    }

    // mime_type - computed: true, optional: true, required: false
    private _mimeType?: string; 
    public get mimeType() {
        return this.getStringAttribute('mime_type');
    }
    public set mimeType(value: string) {
        this._mimeType = value;
    }
    public resetMimeType() {
        this._mimeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mimeTypeInput() {
        return this._mimeType;
    }

    // shap_baseline - computed: true, optional: true, required: false
    private _shapBaseline?: string; 
    public get shapBaseline() {
        return this.getStringAttribute('shap_baseline');
    }
    public set shapBaseline(value: string) {
        this._shapBaseline = value;
    }
    public resetShapBaseline() {
        this._shapBaseline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shapBaselineInput() {
        return this._shapBaseline;
    }

    // shap_baseline_uri - computed: true, optional: true, required: false
    private _shapBaselineUri?: string; 
    public get shapBaselineUri() {
        return this.getStringAttribute('shap_baseline_uri');
    }
    public set shapBaselineUri(value: string) {
        this._shapBaselineUri = value;
    }
    public resetShapBaselineUri() {
        this._shapBaselineUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shapBaselineUriInput() {
        return this._shapBaselineUri;
    }
}
export interface ClarifyTextConfigProperty {
    /**
    * The unit of granularity for the analysis of text features. For example, if the unit is 'token', then each token (like a word in English) of the text is treated as a feature. SHAP values are computed for each unit/feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#granularity CcEndpointConfig#granularity}
    */
    readonly granularity?: string;
    /**
    * Specifies the language of the text features in ISO 639-1 or ISO 639-3 code of a supported language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#language CcEndpointConfig#language}
    */
    readonly language?: string;
}
export class ClarifyTextConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClarifyTextConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._granularity !== undefined) {
            hasAnyValues = true;
            internalValueResult.granularity = this._granularity;
        }
        if (this._language !== undefined) {
            hasAnyValues = true;
            internalValueResult.language = this._language;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClarifyTextConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._granularity = undefined;
            this._language = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._granularity = value.granularity;
            this._language = value.language;
        }
    }

    // granularity - computed: true, optional: true, required: false
    private _granularity?: string; 
    public get granularity() {
        return this.getStringAttribute('granularity');
    }
    public set granularity(value: string) {
        this._granularity = value;
    }
    public resetGranularity() {
        this._granularity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get granularityInput() {
        return this._granularity;
    }

    // language - computed: true, optional: true, required: false
    private _language?: string; 
    public get language() {
        return this.getStringAttribute('language');
    }
    public set language(value: string) {
        this._language = value;
    }
    public resetLanguage() {
        this._language = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageInput() {
        return this._language;
    }
}
export interface ClarifyShapConfigProperty {
    /**
    * The number of samples to be used for analysis by the Kernal SHAP algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#number_of_samples CcEndpointConfig#number_of_samples}
    */
    readonly numberOfSamples?: number;
    /**
    * The starting value used to initialize the random number generator in the explainer. Provide a value for this parameter to obtain a deterministic SHAP result.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#seed CcEndpointConfig#seed}
    */
    readonly seed?: number;
    /**
    * The configuration for the SHAP baseline of the Kernal SHAP algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#shap_baseline_config CcEndpointConfig#shap_baseline_config}
    */
    readonly shapBaselineConfig?: ClarifyShapBaselineConfigProperty;
    /**
    * A parameter that indicates if text features are treated as text and explanations are provided for individual units of text. Required for natural language processing (NLP) explainability only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#text_config CcEndpointConfig#text_config}
    */
    readonly textConfig?: ClarifyTextConfigProperty;
    /**
    * A Boolean toggle to indicate if you want to use the logit function (true) or log-odds units (false) for model predictions. Defaults to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#use_logit CcEndpointConfig#use_logit}
    */
    readonly useLogit?: boolean | cdktn.IResolvable;
}
export class ClarifyShapConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClarifyShapConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberOfSamples !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfSamples = this._numberOfSamples;
        }
        if (this._seed !== undefined) {
            hasAnyValues = true;
            internalValueResult.seed = this._seed;
        }
        if (this._shapBaselineConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.shapBaselineConfig = this._shapBaselineConfig?.internalValue;
        }
        if (this._textConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.textConfig = this._textConfig?.internalValue;
        }
        if (this._useLogit !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLogit = this._useLogit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClarifyShapConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberOfSamples = undefined;
            this._seed = undefined;
            this._shapBaselineConfig.internalValue = undefined;
            this._textConfig.internalValue = undefined;
            this._useLogit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberOfSamples = value.numberOfSamples;
            this._seed = value.seed;
            this._shapBaselineConfig.internalValue = value.shapBaselineConfig;
            this._textConfig.internalValue = value.textConfig;
            this._useLogit = value.useLogit;
        }
    }

    // number_of_samples - computed: true, optional: true, required: false
    private _numberOfSamples?: number; 
    public get numberOfSamples() {
        return this.getNumberAttribute('number_of_samples');
    }
    public set numberOfSamples(value: number) {
        this._numberOfSamples = value;
    }
    public resetNumberOfSamples() {
        this._numberOfSamples = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfSamplesInput() {
        return this._numberOfSamples;
    }

    // seed - computed: true, optional: true, required: false
    private _seed?: number; 
    public get seed() {
        return this.getNumberAttribute('seed');
    }
    public set seed(value: number) {
        this._seed = value;
    }
    public resetSeed() {
        this._seed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get seedInput() {
        return this._seed;
    }

    // shap_baseline_config - computed: true, optional: true, required: false
    private _shapBaselineConfig = new ClarifyShapBaselineConfigPropertyOutputReference(this, "shap_baseline_config");
    public get shapBaselineConfig() {
        return this._shapBaselineConfig;
    }
    public putShapBaselineConfig(value: ClarifyShapBaselineConfigProperty) {
        this._shapBaselineConfig.internalValue = value;
    }
    public resetShapBaselineConfig() {
        this._shapBaselineConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shapBaselineConfigInput() {
        return this._shapBaselineConfig.internalValue;
    }

    // text_config - computed: true, optional: true, required: false
    private _textConfig = new ClarifyTextConfigPropertyOutputReference(this, "text_config");
    public get textConfig() {
        return this._textConfig;
    }
    public putTextConfig(value: ClarifyTextConfigProperty) {
        this._textConfig.internalValue = value;
    }
    public resetTextConfig() {
        this._textConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textConfigInput() {
        return this._textConfig.internalValue;
    }

    // use_logit - computed: true, optional: true, required: false
    private _useLogit?: boolean | cdktn.IResolvable; 
    public get useLogit() {
        return this.getBooleanAttribute('use_logit');
    }
    public set useLogit(value: boolean | cdktn.IResolvable) {
        this._useLogit = value;
    }
    public resetUseLogit() {
        this._useLogit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLogitInput() {
        return this._useLogit;
    }
}
export interface ClarifyExplainerConfigProperty {
    /**
    * A JMESPath boolean expression used to filter which records to explain. Explanations are activated by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#enable_explanations CcEndpointConfig#enable_explanations}
    */
    readonly enableExplanations?: string;
    /**
    * The inference configuration parameter for the model container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#inference_config CcEndpointConfig#inference_config}
    */
    readonly inferenceConfig?: ClarifyInferenceConfigProperty;
    /**
    * The configuration for SHAP analysis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#shap_config CcEndpointConfig#shap_config}
    */
    readonly shapConfig?: ClarifyShapConfigProperty;
}
export class ClarifyExplainerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClarifyExplainerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableExplanations !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableExplanations = this._enableExplanations;
        }
        if (this._inferenceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceConfig = this._inferenceConfig?.internalValue;
        }
        if (this._shapConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.shapConfig = this._shapConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClarifyExplainerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableExplanations = undefined;
            this._inferenceConfig.internalValue = undefined;
            this._shapConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableExplanations = value.enableExplanations;
            this._inferenceConfig.internalValue = value.inferenceConfig;
            this._shapConfig.internalValue = value.shapConfig;
        }
    }

    // enable_explanations - computed: true, optional: true, required: false
    private _enableExplanations?: string; 
    public get enableExplanations() {
        return this.getStringAttribute('enable_explanations');
    }
    public set enableExplanations(value: string) {
        this._enableExplanations = value;
    }
    public resetEnableExplanations() {
        this._enableExplanations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableExplanationsInput() {
        return this._enableExplanations;
    }

    // inference_config - computed: true, optional: true, required: false
    private _inferenceConfig = new ClarifyInferenceConfigPropertyOutputReference(this, "inference_config");
    public get inferenceConfig() {
        return this._inferenceConfig;
    }
    public putInferenceConfig(value: ClarifyInferenceConfigProperty) {
        this._inferenceConfig.internalValue = value;
    }
    public resetInferenceConfig() {
        this._inferenceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceConfigInput() {
        return this._inferenceConfig.internalValue;
    }

    // shap_config - computed: true, optional: true, required: false
    private _shapConfig = new ClarifyShapConfigPropertyOutputReference(this, "shap_config");
    public get shapConfig() {
        return this._shapConfig;
    }
    public putShapConfig(value: ClarifyShapConfigProperty) {
        this._shapConfig.internalValue = value;
    }
    public resetShapConfig() {
        this._shapConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shapConfigInput() {
        return this._shapConfig.internalValue;
    }
}
export interface ExplainerConfigProperty {
    /**
    * A member of ExplainerConfig that contains configuration parameters for the SageMaker Clarify explainer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#clarify_explainer_config CcEndpointConfig#clarify_explainer_config}
    */
    readonly clarifyExplainerConfig?: ClarifyExplainerConfigProperty;
}
export class ExplainerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplainerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clarifyExplainerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clarifyExplainerConfig = this._clarifyExplainerConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplainerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clarifyExplainerConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clarifyExplainerConfig.internalValue = value.clarifyExplainerConfig;
        }
    }

    // clarify_explainer_config - computed: true, optional: true, required: false
    private _clarifyExplainerConfig = new ClarifyExplainerConfigPropertyOutputReference(this, "clarify_explainer_config");
    public get clarifyExplainerConfig() {
        return this._clarifyExplainerConfig;
    }
    public putClarifyExplainerConfig(value: ClarifyExplainerConfigProperty) {
        this._clarifyExplainerConfig.internalValue = value;
    }
    public resetClarifyExplainerConfig() {
        this._clarifyExplainerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clarifyExplainerConfigInput() {
        return this._clarifyExplainerConfig.internalValue;
    }
}
export interface MetricsConfigProperty {
    /**
    * Specifies whether to enable detailed observability for the endpoint. When set to true, the endpoint publishes container-level inference metrics, per-GPU metrics, per-instance host metrics, and inference component placement metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#enable_detailed_observability CcEndpointConfig#enable_detailed_observability}
    */
    readonly enableDetailedObservability?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether to enable enhanced metrics for the endpoint. Enhanced metrics provide utilization and invocation data at instance and container granularity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#enable_enhanced_metrics CcEndpointConfig#enable_enhanced_metrics}
    */
    readonly enableEnhancedMetrics?: boolean | cdktn.IResolvable;
    /**
    * The interval, in seconds, at which the endpoint publishes metrics to Amazon CloudWatch. Valid values are 10, 30, 60, 120, 180, 240, and 300. The default is 60.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#metric_publish_frequency_in_seconds CcEndpointConfig#metric_publish_frequency_in_seconds}
    */
    readonly metricPublishFrequencyInSeconds?: number;
}
export class MetricsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableDetailedObservability !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableDetailedObservability = this._enableDetailedObservability;
        }
        if (this._enableEnhancedMetrics !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableEnhancedMetrics = this._enableEnhancedMetrics;
        }
        if (this._metricPublishFrequencyInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricPublishFrequencyInSeconds = this._metricPublishFrequencyInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableDetailedObservability = undefined;
            this._enableEnhancedMetrics = undefined;
            this._metricPublishFrequencyInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableDetailedObservability = value.enableDetailedObservability;
            this._enableEnhancedMetrics = value.enableEnhancedMetrics;
            this._metricPublishFrequencyInSeconds = value.metricPublishFrequencyInSeconds;
        }
    }

    // enable_detailed_observability - computed: true, optional: true, required: false
    private _enableDetailedObservability?: boolean | cdktn.IResolvable; 
    public get enableDetailedObservability() {
        return this.getBooleanAttribute('enable_detailed_observability');
    }
    public set enableDetailedObservability(value: boolean | cdktn.IResolvable) {
        this._enableDetailedObservability = value;
    }
    public resetEnableDetailedObservability() {
        this._enableDetailedObservability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDetailedObservabilityInput() {
        return this._enableDetailedObservability;
    }

    // enable_enhanced_metrics - computed: true, optional: true, required: false
    private _enableEnhancedMetrics?: boolean | cdktn.IResolvable; 
    public get enableEnhancedMetrics() {
        return this.getBooleanAttribute('enable_enhanced_metrics');
    }
    public set enableEnhancedMetrics(value: boolean | cdktn.IResolvable) {
        this._enableEnhancedMetrics = value;
    }
    public resetEnableEnhancedMetrics() {
        this._enableEnhancedMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableEnhancedMetricsInput() {
        return this._enableEnhancedMetrics;
    }

    // metric_publish_frequency_in_seconds - computed: true, optional: true, required: false
    private _metricPublishFrequencyInSeconds?: number; 
    public get metricPublishFrequencyInSeconds() {
        return this.getNumberAttribute('metric_publish_frequency_in_seconds');
    }
    public set metricPublishFrequencyInSeconds(value: number) {
        this._metricPublishFrequencyInSeconds = value;
    }
    public resetMetricPublishFrequencyInSeconds() {
        this._metricPublishFrequencyInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricPublishFrequencyInSecondsInput() {
        return this._metricPublishFrequencyInSeconds;
    }
}
export interface CapacityReservationConfigProperty {
    /**
    * Options that you can choose for the capacity reservation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_preference CcEndpointConfig#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#ml_reservation_arn CcEndpointConfig#ml_reservation_arn}
    */
    readonly mlReservationArn?: string;
}
export class CapacityReservationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityReservationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityReservationPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
        }
        if (this._mlReservationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.mlReservationArn = this._mlReservationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityReservationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationPreference = undefined;
            this._mlReservationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationPreference = value.capacityReservationPreference;
            this._mlReservationArn = value.mlReservationArn;
        }
    }

    // capacity_reservation_preference - computed: true, optional: true, required: false
    private _capacityReservationPreference?: string; 
    public get capacityReservationPreference() {
        return this.getStringAttribute('capacity_reservation_preference');
    }
    public set capacityReservationPreference(value: string) {
        this._capacityReservationPreference = value;
    }
    public resetCapacityReservationPreference() {
        this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationPreferenceInput() {
        return this._capacityReservationPreference;
    }

    // ml_reservation_arn - computed: true, optional: true, required: false
    private _mlReservationArn?: string; 
    public get mlReservationArn() {
        return this.getStringAttribute('ml_reservation_arn');
    }
    public set mlReservationArn(value: string) {
        this._mlReservationArn = value;
    }
    public resetMlReservationArn() {
        this._mlReservationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlReservationArnInput() {
        return this._mlReservationArn;
    }
}
export interface CoreDumpConfigProperty {
    /**
    * The Amazon S3 bucket to send the core dump to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#destination_s3_uri CcEndpointConfig#destination_s3_uri}
    */
    readonly destinationS3Uri?: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must include permissions to call kms:Encrypt.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#kms_key_id CcEndpointConfig#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class CoreDumpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CoreDumpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationS3Uri = this._destinationS3Uri;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CoreDumpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationS3Uri = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationS3Uri = value.destinationS3Uri;
            this._kmsKeyId = value.kmsKeyId;
        }
    }

    // destination_s3_uri - computed: true, optional: true, required: false
    private _destinationS3Uri?: string; 
    public get destinationS3Uri() {
        return this.getStringAttribute('destination_s3_uri');
    }
    public set destinationS3Uri(value: string) {
        this._destinationS3Uri = value;
    }
    public resetDestinationS3Uri() {
        this._destinationS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationS3UriInput() {
        return this._destinationS3Uri;
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
export interface InstancePoolsProperty {
    /**
    * The ML compute instance type for the instance pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#instance_type CcEndpointConfig#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The name of a SageMaker model to use for this instance pool instead of the model specified for the production variant. Use this to deploy a different model optimized for the instance type in this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#model_name_override CcEndpointConfig#model_name_override}
    */
    readonly modelNameOverride?: string;
    /**
    * The priority for the instance pool. SageMaker attempts to provision instances in order of priority, starting with the lowest value. If instances for a higher-priority pool are unavailable, SageMaker attempts to provision from the next pool. Valid values: 1 to 5, where 1 is the highest priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#priority CcEndpointConfig#priority}
    */
    readonly priority?: number;
}
export class InstancePoolsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InstancePoolsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._modelNameOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelNameOverride = this._modelNameOverride;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstancePoolsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._modelNameOverride = undefined;
            this._priority = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._modelNameOverride = value.modelNameOverride;
            this._priority = value.priority;
        }
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

    // model_name_override - computed: true, optional: true, required: false
    private _modelNameOverride?: string; 
    public get modelNameOverride() {
        return this.getStringAttribute('model_name_override');
    }
    public set modelNameOverride(value: string) {
        this._modelNameOverride = value;
    }
    public resetModelNameOverride() {
        this._modelNameOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelNameOverrideInput() {
        return this._modelNameOverride;
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }
}

export class InstancePoolsPropertyList extends cdktn.ComplexList {
    public internalValue? : InstancePoolsProperty[] | cdktn.IResolvable

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
    public get(index: number): InstancePoolsPropertyOutputReference {
        return new InstancePoolsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScaleInPolicyProperty {
    /**
    * The cooldown period, in minutes, after the last endpoint operation before the endpoint evaluates consolidation scale-in opportunities. Valid values are 5 to 1440. The default is 20.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#cooldown_in_minutes CcEndpointConfig#cooldown_in_minutes}
    */
    readonly cooldownInMinutes?: number;
    /**
    * The maximum number of instances that the endpoint can terminate at a time during a consolidation scale-in operation. Valid values are 1 to 100. The default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#maximum_step_size CcEndpointConfig#maximum_step_size}
    */
    readonly maximumStepSize?: number;
    /**
    * The strategy for scaling in instances. IDLE_RELEASE releases instances that have no hosted inference component copies. CONSOLIDATION consolidates inference component copies onto fewer instances to release more instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#strategy CcEndpointConfig#strategy}
    */
    readonly strategy?: string;
}
export class ScaleInPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScaleInPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cooldownInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.cooldownInMinutes = this._cooldownInMinutes;
        }
        if (this._maximumStepSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumStepSize = this._maximumStepSize;
        }
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScaleInPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cooldownInMinutes = undefined;
            this._maximumStepSize = undefined;
            this._strategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cooldownInMinutes = value.cooldownInMinutes;
            this._maximumStepSize = value.maximumStepSize;
            this._strategy = value.strategy;
        }
    }

    // cooldown_in_minutes - computed: true, optional: true, required: false
    private _cooldownInMinutes?: number; 
    public get cooldownInMinutes() {
        return this.getNumberAttribute('cooldown_in_minutes');
    }
    public set cooldownInMinutes(value: number) {
        this._cooldownInMinutes = value;
    }
    public resetCooldownInMinutes() {
        this._cooldownInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownInMinutesInput() {
        return this._cooldownInMinutes;
    }

    // maximum_step_size - computed: true, optional: true, required: false
    private _maximumStepSize?: number; 
    public get maximumStepSize() {
        return this.getNumberAttribute('maximum_step_size');
    }
    public set maximumStepSize(value: number) {
        this._maximumStepSize = value;
    }
    public resetMaximumStepSize() {
        this._maximumStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumStepSizeInput() {
        return this._maximumStepSize;
    }

    // strategy - computed: true, optional: true, required: false
    private _strategy?: string; 
    public get strategy() {
        return this.getStringAttribute('strategy');
    }
    public set strategy(value: string) {
        this._strategy = value;
    }
    public resetStrategy() {
        this._strategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyInput() {
        return this._strategy;
    }
}
export interface ManagedInstanceScalingProperty {
    /**
    * The maximum number of instances that the endpoint can provision when it scales up to accommodate an increase in traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#max_instance_count CcEndpointConfig#max_instance_count}
    */
    readonly maxInstanceCount?: number;
    /**
    * The minimum number of instances that the endpoint must retain when it scales down to accommodate a decrease in traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#min_instance_count CcEndpointConfig#min_instance_count}
    */
    readonly minInstanceCount?: number;
    /**
    * Configures the scale-in behavior for managed instance scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#scale_in_policy CcEndpointConfig#scale_in_policy}
    */
    readonly scaleInPolicy?: ScaleInPolicyProperty;
    /**
    * Indicates whether managed instance scaling is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#status CcEndpointConfig#status}
    */
    readonly status?: string;
}
export class ManagedInstanceScalingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstanceScalingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxInstanceCount = this._maxInstanceCount;
        }
        if (this._minInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.minInstanceCount = this._minInstanceCount;
        }
        if (this._scaleInPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInPolicy = this._scaleInPolicy?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstanceScalingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxInstanceCount = undefined;
            this._minInstanceCount = undefined;
            this._scaleInPolicy.internalValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxInstanceCount = value.maxInstanceCount;
            this._minInstanceCount = value.minInstanceCount;
            this._scaleInPolicy.internalValue = value.scaleInPolicy;
            this._status = value.status;
        }
    }

    // max_instance_count - computed: true, optional: true, required: false
    private _maxInstanceCount?: number; 
    public get maxInstanceCount() {
        return this.getNumberAttribute('max_instance_count');
    }
    public set maxInstanceCount(value: number) {
        this._maxInstanceCount = value;
    }
    public resetMaxInstanceCount() {
        this._maxInstanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInstanceCountInput() {
        return this._maxInstanceCount;
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

    // scale_in_policy - computed: true, optional: true, required: false
    private _scaleInPolicy = new ScaleInPolicyPropertyOutputReference(this, "scale_in_policy");
    public get scaleInPolicy() {
        return this._scaleInPolicy;
    }
    public putScaleInPolicy(value: ScaleInPolicyProperty) {
        this._scaleInPolicy.internalValue = value;
    }
    public resetScaleInPolicy() {
        this._scaleInPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInPolicyInput() {
        return this._scaleInPolicy.internalValue;
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
export interface PrefixAwareRoutingConfigProperty {
    /**
    * The maximum number of in-flight requests on the target instance before the endpoint routes to another instance. Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1 to 1024.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#concurrency_threshold CcEndpointConfig#concurrency_threshold}
    */
    readonly concurrencyThreshold?: number;
    /**
    * The maximum length of the prefix used for routing decisions. Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1024 to 65536.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#prefix_length CcEndpointConfig#prefix_length}
    */
    readonly prefixLength?: number;
}
export class PrefixAwareRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrefixAwareRoutingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._concurrencyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.concurrencyThreshold = this._concurrencyThreshold;
        }
        if (this._prefixLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixLength = this._prefixLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrefixAwareRoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._concurrencyThreshold = undefined;
            this._prefixLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._concurrencyThreshold = value.concurrencyThreshold;
            this._prefixLength = value.prefixLength;
        }
    }

    // concurrency_threshold - computed: true, optional: true, required: false
    private _concurrencyThreshold?: number; 
    public get concurrencyThreshold() {
        return this.getNumberAttribute('concurrency_threshold');
    }
    public set concurrencyThreshold(value: number) {
        this._concurrencyThreshold = value;
    }
    public resetConcurrencyThreshold() {
        this._concurrencyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrencyThresholdInput() {
        return this._concurrencyThreshold;
    }

    // prefix_length - computed: true, optional: true, required: false
    private _prefixLength?: number; 
    public get prefixLength() {
        return this.getNumberAttribute('prefix_length');
    }
    public set prefixLength(value: number) {
        this._prefixLength = value;
    }
    public resetPrefixLength() {
        this._prefixLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixLengthInput() {
        return this._prefixLength;
    }
}
export interface RoutingConfigProperty {
    /**
    * The configuration for prefix-aware routing. Specify this property only when you set RoutingStrategy to PREFIX_AWARE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#prefix_aware_routing_config CcEndpointConfig#prefix_aware_routing_config}
    */
    readonly prefixAwareRoutingConfig?: PrefixAwareRoutingConfigProperty;
    /**
    * Sets how the endpoint routes incoming traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#routing_strategy CcEndpointConfig#routing_strategy}
    */
    readonly routingStrategy?: string;
}
export class RoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RoutingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prefixAwareRoutingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixAwareRoutingConfig = this._prefixAwareRoutingConfig?.internalValue;
        }
        if (this._routingStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingStrategy = this._routingStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prefixAwareRoutingConfig.internalValue = undefined;
            this._routingStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prefixAwareRoutingConfig.internalValue = value.prefixAwareRoutingConfig;
            this._routingStrategy = value.routingStrategy;
        }
    }

    // prefix_aware_routing_config - computed: true, optional: true, required: false
    private _prefixAwareRoutingConfig = new PrefixAwareRoutingConfigPropertyOutputReference(this, "prefix_aware_routing_config");
    public get prefixAwareRoutingConfig() {
        return this._prefixAwareRoutingConfig;
    }
    public putPrefixAwareRoutingConfig(value: PrefixAwareRoutingConfigProperty) {
        this._prefixAwareRoutingConfig.internalValue = value;
    }
    public resetPrefixAwareRoutingConfig() {
        this._prefixAwareRoutingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixAwareRoutingConfigInput() {
        return this._prefixAwareRoutingConfig.internalValue;
    }

    // routing_strategy - computed: true, optional: true, required: false
    private _routingStrategy?: string; 
    public get routingStrategy() {
        return this.getStringAttribute('routing_strategy');
    }
    public set routingStrategy(value: string) {
        this._routingStrategy = value;
    }
    public resetRoutingStrategy() {
        this._routingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingStrategyInput() {
        return this._routingStrategy;
    }
}
export interface ServerlessConfigProperty {
    /**
    * The maximum number of concurrent invocations your serverless endpoint can process.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#max_concurrency CcEndpointConfig#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * The memory size of your serverless endpoint. Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#memory_size_in_mb CcEndpointConfig#memory_size_in_mb}
    */
    readonly memorySizeInMb?: number;
    /**
    * The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to MaxConcurrency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#provisioned_concurrency CcEndpointConfig#provisioned_concurrency}
    */
    readonly provisionedConcurrency?: number;
}
export class ServerlessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerlessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrency = this._maxConcurrency;
        }
        if (this._memorySizeInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.memorySizeInMb = this._memorySizeInMb;
        }
        if (this._provisionedConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedConcurrency = this._provisionedConcurrency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerlessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxConcurrency = undefined;
            this._memorySizeInMb = undefined;
            this._provisionedConcurrency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxConcurrency = value.maxConcurrency;
            this._memorySizeInMb = value.memorySizeInMb;
            this._provisionedConcurrency = value.provisionedConcurrency;
        }
    }

    // max_concurrency - computed: true, optional: true, required: false
    private _maxConcurrency?: number; 
    public get maxConcurrency() {
        return this.getNumberAttribute('max_concurrency');
    }
    public set maxConcurrency(value: number) {
        this._maxConcurrency = value;
    }
    public resetMaxConcurrency() {
        this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
        return this._maxConcurrency;
    }

    // memory_size_in_mb - computed: true, optional: true, required: false
    private _memorySizeInMb?: number; 
    public get memorySizeInMb() {
        return this.getNumberAttribute('memory_size_in_mb');
    }
    public set memorySizeInMb(value: number) {
        this._memorySizeInMb = value;
    }
    public resetMemorySizeInMb() {
        this._memorySizeInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memorySizeInMbInput() {
        return this._memorySizeInMb;
    }

    // provisioned_concurrency - computed: true, optional: true, required: false
    private _provisionedConcurrency?: number; 
    public get provisionedConcurrency() {
        return this.getNumberAttribute('provisioned_concurrency');
    }
    public set provisionedConcurrency(value: number) {
        this._provisionedConcurrency = value;
    }
    public resetProvisionedConcurrency() {
        this._provisionedConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConcurrencyInput() {
        return this._provisionedConcurrency;
    }
}
export interface ProductionVariantProperty {
    /**
    * Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_config CcEndpointConfig#capacity_reservation_config}
    */
    readonly capacityReservationConfig?: CapacityReservationConfigProperty;
    /**
    * The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#container_startup_health_check_timeout_in_seconds CcEndpointConfig#container_startup_health_check_timeout_in_seconds}
    */
    readonly containerStartupHealthCheckTimeoutInSeconds?: number;
    /**
    * Specifies configuration for a core dump from the model container when the process crashes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#core_dump_config CcEndpointConfig#core_dump_config}
    */
    readonly coreDumpConfig?: CoreDumpConfigProperty;
    /**
    * You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint. By default, SSM access is disabled for all production variants behind an endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#enable_ssm_access CcEndpointConfig#enable_ssm_access}
    */
    readonly enableSsmAccess?: boolean | cdktn.IResolvable;
    /**
    * Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images. Each image is configured by AWS with a set of software and driver versions. AWS optimizes these configurations for different machine learning workloads. By selecting an AMI version, you can ensure that your inference environment is compatible with specific software requirements, such as CUDA driver versions, Linux kernel versions, or AWS Neuron driver versions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#inference_ami_version CcEndpointConfig#inference_ami_version}
    */
    readonly inferenceAmiVersion?: string;
    /**
    * Number of instances to launch initially.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#initial_instance_count CcEndpointConfig#initial_instance_count}
    */
    readonly initialInstanceCount?: number;
    /**
    * Determines initial traffic distribution among all of the models that you specify in the endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#initial_variant_weight CcEndpointConfig#initial_variant_weight}
    */
    readonly initialVariantWeight?: number;
    /**
    * A list of instance pools for the production variant. Each instance pool specifies an instance type and its priority for provisioning. Use instance pools to configure heterogeneous endpoints that deploy models across multiple instance types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#instance_pools CcEndpointConfig#instance_pools}
    */
    readonly instancePools?: InstancePoolsProperty[] | cdktn.IResolvable;
    /**
    * The ML compute instance type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#instance_type CcEndpointConfig#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#managed_instance_scaling CcEndpointConfig#managed_instance_scaling}
    */
    readonly managedInstanceScaling?: ManagedInstanceScalingProperty;
    /**
    * The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#model_data_download_timeout_in_seconds CcEndpointConfig#model_data_download_timeout_in_seconds}
    */
    readonly modelDataDownloadTimeoutInSeconds?: number;
    /**
    * The name of the model that you want to host. This is the name that you specified when creating the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#model_name CcEndpointConfig#model_name}
    */
    readonly modelName?: string;
    /**
    * Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#routing_config CcEndpointConfig#routing_config}
    */
    readonly routingConfig?: RoutingConfigProperty;
    /**
    * The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#serverless_config CcEndpointConfig#serverless_config}
    */
    readonly serverlessConfig?: ServerlessConfigProperty;
    /**
    * The timeout value, in seconds, for provisioning instances for the production variant. When SageMaker encounters an insufficient capacity error while provisioning instances, it retries with the next instance pool (if configured) or waits until the timeout expires. This timeout applies only to capacity provisioning and does not include the time for model download or container startup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#variant_instance_provision_timeout_in_seconds CcEndpointConfig#variant_instance_provision_timeout_in_seconds}
    */
    readonly variantInstanceProvisionTimeoutInSeconds?: number;
    /**
    * The name of the production variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#variant_name CcEndpointConfig#variant_name}
    */
    readonly variantName: string;
    /**
    * The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. Currently only Amazon EBS gp2 storage volumes are supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#volume_size_in_gb CcEndpointConfig#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
}
export class ProductionVariantPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProductionVariantProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityReservationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationConfig = this._capacityReservationConfig?.internalValue;
        }
        if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
        }
        if (this._coreDumpConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.coreDumpConfig = this._coreDumpConfig?.internalValue;
        }
        if (this._enableSsmAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableSsmAccess = this._enableSsmAccess;
        }
        if (this._inferenceAmiVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceAmiVersion = this._inferenceAmiVersion;
        }
        if (this._initialInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialInstanceCount = this._initialInstanceCount;
        }
        if (this._initialVariantWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialVariantWeight = this._initialVariantWeight;
        }
        if (this._instancePools?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancePools = this._instancePools?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._managedInstanceScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedInstanceScaling = this._managedInstanceScaling?.internalValue;
        }
        if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
        }
        if (this._modelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelName = this._modelName;
        }
        if (this._routingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingConfig = this._routingConfig?.internalValue;
        }
        if (this._serverlessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverlessConfig = this._serverlessConfig?.internalValue;
        }
        if (this._variantInstanceProvisionTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.variantInstanceProvisionTimeoutInSeconds = this._variantInstanceProvisionTimeoutInSeconds;
        }
        if (this._variantName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variantName = this._variantName;
        }
        if (this._volumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProductionVariantProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationConfig.internalValue = undefined;
            this._containerStartupHealthCheckTimeoutInSeconds = undefined;
            this._coreDumpConfig.internalValue = undefined;
            this._enableSsmAccess = undefined;
            this._inferenceAmiVersion = undefined;
            this._initialInstanceCount = undefined;
            this._initialVariantWeight = undefined;
            this._instancePools.internalValue = undefined;
            this._instanceType = undefined;
            this._managedInstanceScaling.internalValue = undefined;
            this._modelDataDownloadTimeoutInSeconds = undefined;
            this._modelName = undefined;
            this._routingConfig.internalValue = undefined;
            this._serverlessConfig.internalValue = undefined;
            this._variantInstanceProvisionTimeoutInSeconds = undefined;
            this._variantName = undefined;
            this._volumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationConfig.internalValue = value.capacityReservationConfig;
            this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
            this._coreDumpConfig.internalValue = value.coreDumpConfig;
            this._enableSsmAccess = value.enableSsmAccess;
            this._inferenceAmiVersion = value.inferenceAmiVersion;
            this._initialInstanceCount = value.initialInstanceCount;
            this._initialVariantWeight = value.initialVariantWeight;
            this._instancePools.internalValue = value.instancePools;
            this._instanceType = value.instanceType;
            this._managedInstanceScaling.internalValue = value.managedInstanceScaling;
            this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
            this._modelName = value.modelName;
            this._routingConfig.internalValue = value.routingConfig;
            this._serverlessConfig.internalValue = value.serverlessConfig;
            this._variantInstanceProvisionTimeoutInSeconds = value.variantInstanceProvisionTimeoutInSeconds;
            this._variantName = value.variantName;
            this._volumeSizeInGb = value.volumeSizeInGb;
        }
    }

    // capacity_reservation_config - computed: true, optional: true, required: false
    private _capacityReservationConfig = new CapacityReservationConfigPropertyOutputReference(this, "capacity_reservation_config");
    public get capacityReservationConfig() {
        return this._capacityReservationConfig;
    }
    public putCapacityReservationConfig(value: CapacityReservationConfigProperty) {
        this._capacityReservationConfig.internalValue = value;
    }
    public resetCapacityReservationConfig() {
        this._capacityReservationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationConfigInput() {
        return this._capacityReservationConfig.internalValue;
    }

    // container_startup_health_check_timeout_in_seconds - computed: true, optional: true, required: false
    private _containerStartupHealthCheckTimeoutInSeconds?: number; 
    public get containerStartupHealthCheckTimeoutInSeconds() {
        return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
    }
    public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
        this._containerStartupHealthCheckTimeoutInSeconds = value;
    }
    public resetContainerStartupHealthCheckTimeoutInSeconds() {
        this._containerStartupHealthCheckTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerStartupHealthCheckTimeoutInSecondsInput() {
        return this._containerStartupHealthCheckTimeoutInSeconds;
    }

    // core_dump_config - computed: true, optional: true, required: false
    private _coreDumpConfig = new CoreDumpConfigPropertyOutputReference(this, "core_dump_config");
    public get coreDumpConfig() {
        return this._coreDumpConfig;
    }
    public putCoreDumpConfig(value: CoreDumpConfigProperty) {
        this._coreDumpConfig.internalValue = value;
    }
    public resetCoreDumpConfig() {
        this._coreDumpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreDumpConfigInput() {
        return this._coreDumpConfig.internalValue;
    }

    // enable_ssm_access - computed: true, optional: true, required: false
    private _enableSsmAccess?: boolean | cdktn.IResolvable; 
    public get enableSsmAccess() {
        return this.getBooleanAttribute('enable_ssm_access');
    }
    public set enableSsmAccess(value: boolean | cdktn.IResolvable) {
        this._enableSsmAccess = value;
    }
    public resetEnableSsmAccess() {
        this._enableSsmAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSsmAccessInput() {
        return this._enableSsmAccess;
    }

    // inference_ami_version - computed: true, optional: true, required: false
    private _inferenceAmiVersion?: string; 
    public get inferenceAmiVersion() {
        return this.getStringAttribute('inference_ami_version');
    }
    public set inferenceAmiVersion(value: string) {
        this._inferenceAmiVersion = value;
    }
    public resetInferenceAmiVersion() {
        this._inferenceAmiVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAmiVersionInput() {
        return this._inferenceAmiVersion;
    }

    // initial_instance_count - computed: true, optional: true, required: false
    private _initialInstanceCount?: number; 
    public get initialInstanceCount() {
        return this.getNumberAttribute('initial_instance_count');
    }
    public set initialInstanceCount(value: number) {
        this._initialInstanceCount = value;
    }
    public resetInitialInstanceCount() {
        this._initialInstanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialInstanceCountInput() {
        return this._initialInstanceCount;
    }

    // initial_variant_weight - computed: true, optional: true, required: false
    private _initialVariantWeight?: number; 
    public get initialVariantWeight() {
        return this.getNumberAttribute('initial_variant_weight');
    }
    public set initialVariantWeight(value: number) {
        this._initialVariantWeight = value;
    }
    public resetInitialVariantWeight() {
        this._initialVariantWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialVariantWeightInput() {
        return this._initialVariantWeight;
    }

    // instance_pools - computed: true, optional: true, required: false
    private _instancePools = new InstancePoolsPropertyList(this, "instance_pools", false);
    public get instancePools() {
        return this._instancePools;
    }
    public putInstancePools(value: InstancePoolsProperty[] | cdktn.IResolvable) {
        this._instancePools.internalValue = value;
    }
    public resetInstancePools() {
        this._instancePools.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePoolsInput() {
        return this._instancePools.internalValue;
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

    // managed_instance_scaling - computed: true, optional: true, required: false
    private _managedInstanceScaling = new ManagedInstanceScalingPropertyOutputReference(this, "managed_instance_scaling");
    public get managedInstanceScaling() {
        return this._managedInstanceScaling;
    }
    public putManagedInstanceScaling(value: ManagedInstanceScalingProperty) {
        this._managedInstanceScaling.internalValue = value;
    }
    public resetManagedInstanceScaling() {
        this._managedInstanceScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedInstanceScalingInput() {
        return this._managedInstanceScaling.internalValue;
    }

    // model_data_download_timeout_in_seconds - computed: true, optional: true, required: false
    private _modelDataDownloadTimeoutInSeconds?: number; 
    public get modelDataDownloadTimeoutInSeconds() {
        return this.getNumberAttribute('model_data_download_timeout_in_seconds');
    }
    public set modelDataDownloadTimeoutInSeconds(value: number) {
        this._modelDataDownloadTimeoutInSeconds = value;
    }
    public resetModelDataDownloadTimeoutInSeconds() {
        this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataDownloadTimeoutInSecondsInput() {
        return this._modelDataDownloadTimeoutInSeconds;
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

    // routing_config - computed: true, optional: true, required: false
    private _routingConfig = new RoutingConfigPropertyOutputReference(this, "routing_config");
    public get routingConfig() {
        return this._routingConfig;
    }
    public putRoutingConfig(value: RoutingConfigProperty) {
        this._routingConfig.internalValue = value;
    }
    public resetRoutingConfig() {
        this._routingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingConfigInput() {
        return this._routingConfig.internalValue;
    }

    // serverless_config - computed: true, optional: true, required: false
    private _serverlessConfig = new ServerlessConfigPropertyOutputReference(this, "serverless_config");
    public get serverlessConfig() {
        return this._serverlessConfig;
    }
    public putServerlessConfig(value: ServerlessConfigProperty) {
        this._serverlessConfig.internalValue = value;
    }
    public resetServerlessConfig() {
        this._serverlessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessConfigInput() {
        return this._serverlessConfig.internalValue;
    }

    // variant_instance_provision_timeout_in_seconds - computed: true, optional: true, required: false
    private _variantInstanceProvisionTimeoutInSeconds?: number; 
    public get variantInstanceProvisionTimeoutInSeconds() {
        return this.getNumberAttribute('variant_instance_provision_timeout_in_seconds');
    }
    public set variantInstanceProvisionTimeoutInSeconds(value: number) {
        this._variantInstanceProvisionTimeoutInSeconds = value;
    }
    public resetVariantInstanceProvisionTimeoutInSeconds() {
        this._variantInstanceProvisionTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variantInstanceProvisionTimeoutInSecondsInput() {
        return this._variantInstanceProvisionTimeoutInSeconds;
    }

    // variant_name - computed: false, optional: false, required: true
    private _variantName?: string; 
    public get variantName() {
        return this.getStringAttribute('variant_name');
    }
    public set variantName(value: string) {
        this._variantName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get variantNameInput() {
        return this._variantName;
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

export class ProductionVariantPropertyList extends cdktn.ComplexList {
    public internalValue? : ProductionVariantProperty[] | cdktn.IResolvable

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
    public get(index: number): ProductionVariantPropertyOutputReference {
        return new ProductionVariantPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ShadowProductionVariantsCapacityReservationConfigProperty {
    /**
    * Options that you can choose for the capacity reservation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_preference CcEndpointConfig#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#ml_reservation_arn CcEndpointConfig#ml_reservation_arn}
    */
    readonly mlReservationArn?: string;
}
export class ShadowProductionVariantsCapacityReservationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowProductionVariantsCapacityReservationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityReservationPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
        }
        if (this._mlReservationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.mlReservationArn = this._mlReservationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsCapacityReservationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationPreference = undefined;
            this._mlReservationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationPreference = value.capacityReservationPreference;
            this._mlReservationArn = value.mlReservationArn;
        }
    }

    // capacity_reservation_preference - computed: true, optional: true, required: false
    private _capacityReservationPreference?: string; 
    public get capacityReservationPreference() {
        return this.getStringAttribute('capacity_reservation_preference');
    }
    public set capacityReservationPreference(value: string) {
        this._capacityReservationPreference = value;
    }
    public resetCapacityReservationPreference() {
        this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationPreferenceInput() {
        return this._capacityReservationPreference;
    }

    // ml_reservation_arn - computed: true, optional: true, required: false
    private _mlReservationArn?: string; 
    public get mlReservationArn() {
        return this.getStringAttribute('ml_reservation_arn');
    }
    public set mlReservationArn(value: string) {
        this._mlReservationArn = value;
    }
    public resetMlReservationArn() {
        this._mlReservationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlReservationArnInput() {
        return this._mlReservationArn;
    }
}
export interface ShadowProductionVariantsCoreDumpConfigProperty {
    /**
    * The Amazon S3 bucket to send the core dump to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#destination_s3_uri CcEndpointConfig#destination_s3_uri}
    */
    readonly destinationS3Uri?: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must include permissions to call kms:Encrypt.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#kms_key_id CcEndpointConfig#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class ShadowProductionVariantsCoreDumpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowProductionVariantsCoreDumpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationS3Uri = this._destinationS3Uri;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsCoreDumpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationS3Uri = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationS3Uri = value.destinationS3Uri;
            this._kmsKeyId = value.kmsKeyId;
        }
    }

    // destination_s3_uri - computed: true, optional: true, required: false
    private _destinationS3Uri?: string; 
    public get destinationS3Uri() {
        return this.getStringAttribute('destination_s3_uri');
    }
    public set destinationS3Uri(value: string) {
        this._destinationS3Uri = value;
    }
    public resetDestinationS3Uri() {
        this._destinationS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationS3UriInput() {
        return this._destinationS3Uri;
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
export interface ShadowProductionVariantsInstancePoolsProperty {
    /**
    * The ML compute instance type for the instance pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#instance_type CcEndpointConfig#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The name of a SageMaker model to use for this instance pool instead of the model specified for the production variant. Use this to deploy a different model optimized for the instance type in this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#model_name_override CcEndpointConfig#model_name_override}
    */
    readonly modelNameOverride?: string;
    /**
    * The priority for the instance pool. SageMaker attempts to provision instances in order of priority, starting with the lowest value. If instances for a higher-priority pool are unavailable, SageMaker attempts to provision from the next pool. Valid values: 1 to 5, where 1 is the highest priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#priority CcEndpointConfig#priority}
    */
    readonly priority?: number;
}
export class ShadowProductionVariantsInstancePoolsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ShadowProductionVariantsInstancePoolsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._modelNameOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelNameOverride = this._modelNameOverride;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsInstancePoolsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._modelNameOverride = undefined;
            this._priority = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._modelNameOverride = value.modelNameOverride;
            this._priority = value.priority;
        }
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

    // model_name_override - computed: true, optional: true, required: false
    private _modelNameOverride?: string; 
    public get modelNameOverride() {
        return this.getStringAttribute('model_name_override');
    }
    public set modelNameOverride(value: string) {
        this._modelNameOverride = value;
    }
    public resetModelNameOverride() {
        this._modelNameOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelNameOverrideInput() {
        return this._modelNameOverride;
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }
}

export class ShadowProductionVariantsInstancePoolsPropertyList extends cdktn.ComplexList {
    public internalValue? : ShadowProductionVariantsInstancePoolsProperty[] | cdktn.IResolvable

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
    public get(index: number): ShadowProductionVariantsInstancePoolsPropertyOutputReference {
        return new ShadowProductionVariantsInstancePoolsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty {
    /**
    * The cooldown period, in minutes, after the last endpoint operation before the endpoint evaluates consolidation scale-in opportunities. Valid values are 5 to 1440. The default is 20.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#cooldown_in_minutes CcEndpointConfig#cooldown_in_minutes}
    */
    readonly cooldownInMinutes?: number;
    /**
    * The maximum number of instances that the endpoint can terminate at a time during a consolidation scale-in operation. Valid values are 1 to 100. The default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#maximum_step_size CcEndpointConfig#maximum_step_size}
    */
    readonly maximumStepSize?: number;
    /**
    * The strategy for scaling in instances. IDLE_RELEASE releases instances that have no hosted inference component copies. CONSOLIDATION consolidates inference component copies onto fewer instances to release more instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#strategy CcEndpointConfig#strategy}
    */
    readonly strategy?: string;
}
export class ShadowProductionVariantsManagedInstanceScalingScaleInPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cooldownInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.cooldownInMinutes = this._cooldownInMinutes;
        }
        if (this._maximumStepSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumStepSize = this._maximumStepSize;
        }
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cooldownInMinutes = undefined;
            this._maximumStepSize = undefined;
            this._strategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cooldownInMinutes = value.cooldownInMinutes;
            this._maximumStepSize = value.maximumStepSize;
            this._strategy = value.strategy;
        }
    }

    // cooldown_in_minutes - computed: true, optional: true, required: false
    private _cooldownInMinutes?: number; 
    public get cooldownInMinutes() {
        return this.getNumberAttribute('cooldown_in_minutes');
    }
    public set cooldownInMinutes(value: number) {
        this._cooldownInMinutes = value;
    }
    public resetCooldownInMinutes() {
        this._cooldownInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownInMinutesInput() {
        return this._cooldownInMinutes;
    }

    // maximum_step_size - computed: true, optional: true, required: false
    private _maximumStepSize?: number; 
    public get maximumStepSize() {
        return this.getNumberAttribute('maximum_step_size');
    }
    public set maximumStepSize(value: number) {
        this._maximumStepSize = value;
    }
    public resetMaximumStepSize() {
        this._maximumStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumStepSizeInput() {
        return this._maximumStepSize;
    }

    // strategy - computed: true, optional: true, required: false
    private _strategy?: string; 
    public get strategy() {
        return this.getStringAttribute('strategy');
    }
    public set strategy(value: string) {
        this._strategy = value;
    }
    public resetStrategy() {
        this._strategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strategyInput() {
        return this._strategy;
    }
}
export interface ShadowProductionVariantsManagedInstanceScalingProperty {
    /**
    * The maximum number of instances that the endpoint can provision when it scales up to accommodate an increase in traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#max_instance_count CcEndpointConfig#max_instance_count}
    */
    readonly maxInstanceCount?: number;
    /**
    * The minimum number of instances that the endpoint must retain when it scales down to accommodate a decrease in traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#min_instance_count CcEndpointConfig#min_instance_count}
    */
    readonly minInstanceCount?: number;
    /**
    * Configures the scale-in behavior for managed instance scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#scale_in_policy CcEndpointConfig#scale_in_policy}
    */
    readonly scaleInPolicy?: ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty;
    /**
    * Indicates whether managed instance scaling is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#status CcEndpointConfig#status}
    */
    readonly status?: string;
}
export class ShadowProductionVariantsManagedInstanceScalingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowProductionVariantsManagedInstanceScalingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxInstanceCount = this._maxInstanceCount;
        }
        if (this._minInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.minInstanceCount = this._minInstanceCount;
        }
        if (this._scaleInPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInPolicy = this._scaleInPolicy?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsManagedInstanceScalingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxInstanceCount = undefined;
            this._minInstanceCount = undefined;
            this._scaleInPolicy.internalValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxInstanceCount = value.maxInstanceCount;
            this._minInstanceCount = value.minInstanceCount;
            this._scaleInPolicy.internalValue = value.scaleInPolicy;
            this._status = value.status;
        }
    }

    // max_instance_count - computed: true, optional: true, required: false
    private _maxInstanceCount?: number; 
    public get maxInstanceCount() {
        return this.getNumberAttribute('max_instance_count');
    }
    public set maxInstanceCount(value: number) {
        this._maxInstanceCount = value;
    }
    public resetMaxInstanceCount() {
        this._maxInstanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInstanceCountInput() {
        return this._maxInstanceCount;
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

    // scale_in_policy - computed: true, optional: true, required: false
    private _scaleInPolicy = new ShadowProductionVariantsManagedInstanceScalingScaleInPolicyPropertyOutputReference(this, "scale_in_policy");
    public get scaleInPolicy() {
        return this._scaleInPolicy;
    }
    public putScaleInPolicy(value: ShadowProductionVariantsManagedInstanceScalingScaleInPolicyProperty) {
        this._scaleInPolicy.internalValue = value;
    }
    public resetScaleInPolicy() {
        this._scaleInPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInPolicyInput() {
        return this._scaleInPolicy.internalValue;
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
export interface ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty {
    /**
    * The maximum number of in-flight requests on the target instance before the endpoint routes to another instance. Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1 to 1024.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#concurrency_threshold CcEndpointConfig#concurrency_threshold}
    */
    readonly concurrencyThreshold?: number;
    /**
    * The maximum length of the prefix used for routing decisions. Required when RoutingStrategy is PREFIX_AWARE. Valid values are 1024 to 65536.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#prefix_length CcEndpointConfig#prefix_length}
    */
    readonly prefixLength?: number;
}
export class ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._concurrencyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.concurrencyThreshold = this._concurrencyThreshold;
        }
        if (this._prefixLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixLength = this._prefixLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._concurrencyThreshold = undefined;
            this._prefixLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._concurrencyThreshold = value.concurrencyThreshold;
            this._prefixLength = value.prefixLength;
        }
    }

    // concurrency_threshold - computed: true, optional: true, required: false
    private _concurrencyThreshold?: number; 
    public get concurrencyThreshold() {
        return this.getNumberAttribute('concurrency_threshold');
    }
    public set concurrencyThreshold(value: number) {
        this._concurrencyThreshold = value;
    }
    public resetConcurrencyThreshold() {
        this._concurrencyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrencyThresholdInput() {
        return this._concurrencyThreshold;
    }

    // prefix_length - computed: true, optional: true, required: false
    private _prefixLength?: number; 
    public get prefixLength() {
        return this.getNumberAttribute('prefix_length');
    }
    public set prefixLength(value: number) {
        this._prefixLength = value;
    }
    public resetPrefixLength() {
        this._prefixLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixLengthInput() {
        return this._prefixLength;
    }
}
export interface ShadowProductionVariantsRoutingConfigProperty {
    /**
    * The configuration for prefix-aware routing. Specify this property only when you set RoutingStrategy to PREFIX_AWARE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#prefix_aware_routing_config CcEndpointConfig#prefix_aware_routing_config}
    */
    readonly prefixAwareRoutingConfig?: ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty;
    /**
    * Sets how the endpoint routes incoming traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#routing_strategy CcEndpointConfig#routing_strategy}
    */
    readonly routingStrategy?: string;
}
export class ShadowProductionVariantsRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prefixAwareRoutingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefixAwareRoutingConfig = this._prefixAwareRoutingConfig?.internalValue;
        }
        if (this._routingStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingStrategy = this._routingStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsRoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prefixAwareRoutingConfig.internalValue = undefined;
            this._routingStrategy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prefixAwareRoutingConfig.internalValue = value.prefixAwareRoutingConfig;
            this._routingStrategy = value.routingStrategy;
        }
    }

    // prefix_aware_routing_config - computed: true, optional: true, required: false
    private _prefixAwareRoutingConfig = new ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigPropertyOutputReference(this, "prefix_aware_routing_config");
    public get prefixAwareRoutingConfig() {
        return this._prefixAwareRoutingConfig;
    }
    public putPrefixAwareRoutingConfig(value: ShadowProductionVariantsRoutingConfigPrefixAwareRoutingConfigProperty) {
        this._prefixAwareRoutingConfig.internalValue = value;
    }
    public resetPrefixAwareRoutingConfig() {
        this._prefixAwareRoutingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixAwareRoutingConfigInput() {
        return this._prefixAwareRoutingConfig.internalValue;
    }

    // routing_strategy - computed: true, optional: true, required: false
    private _routingStrategy?: string; 
    public get routingStrategy() {
        return this.getStringAttribute('routing_strategy');
    }
    public set routingStrategy(value: string) {
        this._routingStrategy = value;
    }
    public resetRoutingStrategy() {
        this._routingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingStrategyInput() {
        return this._routingStrategy;
    }
}
export interface ShadowProductionVariantsServerlessConfigProperty {
    /**
    * The maximum number of concurrent invocations your serverless endpoint can process.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#max_concurrency CcEndpointConfig#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * The memory size of your serverless endpoint. Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#memory_size_in_mb CcEndpointConfig#memory_size_in_mb}
    */
    readonly memorySizeInMb?: number;
    /**
    * The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to MaxConcurrency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#provisioned_concurrency CcEndpointConfig#provisioned_concurrency}
    */
    readonly provisionedConcurrency?: number;
}
export class ShadowProductionVariantsServerlessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowProductionVariantsServerlessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrency = this._maxConcurrency;
        }
        if (this._memorySizeInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.memorySizeInMb = this._memorySizeInMb;
        }
        if (this._provisionedConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedConcurrency = this._provisionedConcurrency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsServerlessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxConcurrency = undefined;
            this._memorySizeInMb = undefined;
            this._provisionedConcurrency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxConcurrency = value.maxConcurrency;
            this._memorySizeInMb = value.memorySizeInMb;
            this._provisionedConcurrency = value.provisionedConcurrency;
        }
    }

    // max_concurrency - computed: true, optional: true, required: false
    private _maxConcurrency?: number; 
    public get maxConcurrency() {
        return this.getNumberAttribute('max_concurrency');
    }
    public set maxConcurrency(value: number) {
        this._maxConcurrency = value;
    }
    public resetMaxConcurrency() {
        this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
        return this._maxConcurrency;
    }

    // memory_size_in_mb - computed: true, optional: true, required: false
    private _memorySizeInMb?: number; 
    public get memorySizeInMb() {
        return this.getNumberAttribute('memory_size_in_mb');
    }
    public set memorySizeInMb(value: number) {
        this._memorySizeInMb = value;
    }
    public resetMemorySizeInMb() {
        this._memorySizeInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memorySizeInMbInput() {
        return this._memorySizeInMb;
    }

    // provisioned_concurrency - computed: true, optional: true, required: false
    private _provisionedConcurrency?: number; 
    public get provisionedConcurrency() {
        return this.getNumberAttribute('provisioned_concurrency');
    }
    public set provisionedConcurrency(value: number) {
        this._provisionedConcurrency = value;
    }
    public resetProvisionedConcurrency() {
        this._provisionedConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConcurrencyInput() {
        return this._provisionedConcurrency;
    }
}
export interface ShadowProductionVariantsProperty {
    /**
    * Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#capacity_reservation_config CcEndpointConfig#capacity_reservation_config}
    */
    readonly capacityReservationConfig?: ShadowProductionVariantsCapacityReservationConfigProperty;
    /**
    * The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#container_startup_health_check_timeout_in_seconds CcEndpointConfig#container_startup_health_check_timeout_in_seconds}
    */
    readonly containerStartupHealthCheckTimeoutInSeconds?: number;
    /**
    * Specifies configuration for a core dump from the model container when the process crashes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#core_dump_config CcEndpointConfig#core_dump_config}
    */
    readonly coreDumpConfig?: ShadowProductionVariantsCoreDumpConfigProperty;
    /**
    * You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint. By default, SSM access is disabled for all production variants behind an endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#enable_ssm_access CcEndpointConfig#enable_ssm_access}
    */
    readonly enableSsmAccess?: boolean | cdktn.IResolvable;
    /**
    * Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images. Each image is configured by AWS with a set of software and driver versions. AWS optimizes these configurations for different machine learning workloads. By selecting an AMI version, you can ensure that your inference environment is compatible with specific software requirements, such as CUDA driver versions, Linux kernel versions, or AWS Neuron driver versions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#inference_ami_version CcEndpointConfig#inference_ami_version}
    */
    readonly inferenceAmiVersion?: string;
    /**
    * Number of instances to launch initially.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#initial_instance_count CcEndpointConfig#initial_instance_count}
    */
    readonly initialInstanceCount?: number;
    /**
    * Determines initial traffic distribution among all of the models that you specify in the endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#initial_variant_weight CcEndpointConfig#initial_variant_weight}
    */
    readonly initialVariantWeight?: number;
    /**
    * A list of instance pools for the production variant. Each instance pool specifies an instance type and its priority for provisioning. Use instance pools to configure heterogeneous endpoints that deploy models across multiple instance types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#instance_pools CcEndpointConfig#instance_pools}
    */
    readonly instancePools?: ShadowProductionVariantsInstancePoolsProperty[] | cdktn.IResolvable;
    /**
    * The ML compute instance type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#instance_type CcEndpointConfig#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#managed_instance_scaling CcEndpointConfig#managed_instance_scaling}
    */
    readonly managedInstanceScaling?: ShadowProductionVariantsManagedInstanceScalingProperty;
    /**
    * The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#model_data_download_timeout_in_seconds CcEndpointConfig#model_data_download_timeout_in_seconds}
    */
    readonly modelDataDownloadTimeoutInSeconds?: number;
    /**
    * The name of the model that you want to host. This is the name that you specified when creating the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#model_name CcEndpointConfig#model_name}
    */
    readonly modelName?: string;
    /**
    * Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#routing_config CcEndpointConfig#routing_config}
    */
    readonly routingConfig?: ShadowProductionVariantsRoutingConfigProperty;
    /**
    * The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#serverless_config CcEndpointConfig#serverless_config}
    */
    readonly serverlessConfig?: ShadowProductionVariantsServerlessConfigProperty;
    /**
    * The timeout value, in seconds, for provisioning instances for the production variant. When SageMaker encounters an insufficient capacity error while provisioning instances, it retries with the next instance pool (if configured) or waits until the timeout expires. This timeout applies only to capacity provisioning and does not include the time for model download or container startup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#variant_instance_provision_timeout_in_seconds CcEndpointConfig#variant_instance_provision_timeout_in_seconds}
    */
    readonly variantInstanceProvisionTimeoutInSeconds?: number;
    /**
    * The name of the production variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#variant_name CcEndpointConfig#variant_name}
    */
    readonly variantName?: string;
    /**
    * The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. Currently only Amazon EBS gp2 storage volumes are supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#volume_size_in_gb CcEndpointConfig#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
}
export class ShadowProductionVariantsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ShadowProductionVariantsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityReservationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationConfig = this._capacityReservationConfig?.internalValue;
        }
        if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
        }
        if (this._coreDumpConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.coreDumpConfig = this._coreDumpConfig?.internalValue;
        }
        if (this._enableSsmAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableSsmAccess = this._enableSsmAccess;
        }
        if (this._inferenceAmiVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceAmiVersion = this._inferenceAmiVersion;
        }
        if (this._initialInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialInstanceCount = this._initialInstanceCount;
        }
        if (this._initialVariantWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialVariantWeight = this._initialVariantWeight;
        }
        if (this._instancePools?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancePools = this._instancePools?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._managedInstanceScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedInstanceScaling = this._managedInstanceScaling?.internalValue;
        }
        if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
        }
        if (this._modelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelName = this._modelName;
        }
        if (this._routingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingConfig = this._routingConfig?.internalValue;
        }
        if (this._serverlessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverlessConfig = this._serverlessConfig?.internalValue;
        }
        if (this._variantInstanceProvisionTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.variantInstanceProvisionTimeoutInSeconds = this._variantInstanceProvisionTimeoutInSeconds;
        }
        if (this._variantName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variantName = this._variantName;
        }
        if (this._volumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowProductionVariantsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityReservationConfig.internalValue = undefined;
            this._containerStartupHealthCheckTimeoutInSeconds = undefined;
            this._coreDumpConfig.internalValue = undefined;
            this._enableSsmAccess = undefined;
            this._inferenceAmiVersion = undefined;
            this._initialInstanceCount = undefined;
            this._initialVariantWeight = undefined;
            this._instancePools.internalValue = undefined;
            this._instanceType = undefined;
            this._managedInstanceScaling.internalValue = undefined;
            this._modelDataDownloadTimeoutInSeconds = undefined;
            this._modelName = undefined;
            this._routingConfig.internalValue = undefined;
            this._serverlessConfig.internalValue = undefined;
            this._variantInstanceProvisionTimeoutInSeconds = undefined;
            this._variantName = undefined;
            this._volumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityReservationConfig.internalValue = value.capacityReservationConfig;
            this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
            this._coreDumpConfig.internalValue = value.coreDumpConfig;
            this._enableSsmAccess = value.enableSsmAccess;
            this._inferenceAmiVersion = value.inferenceAmiVersion;
            this._initialInstanceCount = value.initialInstanceCount;
            this._initialVariantWeight = value.initialVariantWeight;
            this._instancePools.internalValue = value.instancePools;
            this._instanceType = value.instanceType;
            this._managedInstanceScaling.internalValue = value.managedInstanceScaling;
            this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
            this._modelName = value.modelName;
            this._routingConfig.internalValue = value.routingConfig;
            this._serverlessConfig.internalValue = value.serverlessConfig;
            this._variantInstanceProvisionTimeoutInSeconds = value.variantInstanceProvisionTimeoutInSeconds;
            this._variantName = value.variantName;
            this._volumeSizeInGb = value.volumeSizeInGb;
        }
    }

    // capacity_reservation_config - computed: true, optional: true, required: false
    private _capacityReservationConfig = new ShadowProductionVariantsCapacityReservationConfigPropertyOutputReference(this, "capacity_reservation_config");
    public get capacityReservationConfig() {
        return this._capacityReservationConfig;
    }
    public putCapacityReservationConfig(value: ShadowProductionVariantsCapacityReservationConfigProperty) {
        this._capacityReservationConfig.internalValue = value;
    }
    public resetCapacityReservationConfig() {
        this._capacityReservationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationConfigInput() {
        return this._capacityReservationConfig.internalValue;
    }

    // container_startup_health_check_timeout_in_seconds - computed: true, optional: true, required: false
    private _containerStartupHealthCheckTimeoutInSeconds?: number; 
    public get containerStartupHealthCheckTimeoutInSeconds() {
        return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
    }
    public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
        this._containerStartupHealthCheckTimeoutInSeconds = value;
    }
    public resetContainerStartupHealthCheckTimeoutInSeconds() {
        this._containerStartupHealthCheckTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerStartupHealthCheckTimeoutInSecondsInput() {
        return this._containerStartupHealthCheckTimeoutInSeconds;
    }

    // core_dump_config - computed: true, optional: true, required: false
    private _coreDumpConfig = new ShadowProductionVariantsCoreDumpConfigPropertyOutputReference(this, "core_dump_config");
    public get coreDumpConfig() {
        return this._coreDumpConfig;
    }
    public putCoreDumpConfig(value: ShadowProductionVariantsCoreDumpConfigProperty) {
        this._coreDumpConfig.internalValue = value;
    }
    public resetCoreDumpConfig() {
        this._coreDumpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreDumpConfigInput() {
        return this._coreDumpConfig.internalValue;
    }

    // enable_ssm_access - computed: true, optional: true, required: false
    private _enableSsmAccess?: boolean | cdktn.IResolvable; 
    public get enableSsmAccess() {
        return this.getBooleanAttribute('enable_ssm_access');
    }
    public set enableSsmAccess(value: boolean | cdktn.IResolvable) {
        this._enableSsmAccess = value;
    }
    public resetEnableSsmAccess() {
        this._enableSsmAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSsmAccessInput() {
        return this._enableSsmAccess;
    }

    // inference_ami_version - computed: true, optional: true, required: false
    private _inferenceAmiVersion?: string; 
    public get inferenceAmiVersion() {
        return this.getStringAttribute('inference_ami_version');
    }
    public set inferenceAmiVersion(value: string) {
        this._inferenceAmiVersion = value;
    }
    public resetInferenceAmiVersion() {
        this._inferenceAmiVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAmiVersionInput() {
        return this._inferenceAmiVersion;
    }

    // initial_instance_count - computed: true, optional: true, required: false
    private _initialInstanceCount?: number; 
    public get initialInstanceCount() {
        return this.getNumberAttribute('initial_instance_count');
    }
    public set initialInstanceCount(value: number) {
        this._initialInstanceCount = value;
    }
    public resetInitialInstanceCount() {
        this._initialInstanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialInstanceCountInput() {
        return this._initialInstanceCount;
    }

    // initial_variant_weight - computed: true, optional: true, required: false
    private _initialVariantWeight?: number; 
    public get initialVariantWeight() {
        return this.getNumberAttribute('initial_variant_weight');
    }
    public set initialVariantWeight(value: number) {
        this._initialVariantWeight = value;
    }
    public resetInitialVariantWeight() {
        this._initialVariantWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialVariantWeightInput() {
        return this._initialVariantWeight;
    }

    // instance_pools - computed: true, optional: true, required: false
    private _instancePools = new ShadowProductionVariantsInstancePoolsPropertyList(this, "instance_pools", false);
    public get instancePools() {
        return this._instancePools;
    }
    public putInstancePools(value: ShadowProductionVariantsInstancePoolsProperty[] | cdktn.IResolvable) {
        this._instancePools.internalValue = value;
    }
    public resetInstancePools() {
        this._instancePools.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePoolsInput() {
        return this._instancePools.internalValue;
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

    // managed_instance_scaling - computed: true, optional: true, required: false
    private _managedInstanceScaling = new ShadowProductionVariantsManagedInstanceScalingPropertyOutputReference(this, "managed_instance_scaling");
    public get managedInstanceScaling() {
        return this._managedInstanceScaling;
    }
    public putManagedInstanceScaling(value: ShadowProductionVariantsManagedInstanceScalingProperty) {
        this._managedInstanceScaling.internalValue = value;
    }
    public resetManagedInstanceScaling() {
        this._managedInstanceScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedInstanceScalingInput() {
        return this._managedInstanceScaling.internalValue;
    }

    // model_data_download_timeout_in_seconds - computed: true, optional: true, required: false
    private _modelDataDownloadTimeoutInSeconds?: number; 
    public get modelDataDownloadTimeoutInSeconds() {
        return this.getNumberAttribute('model_data_download_timeout_in_seconds');
    }
    public set modelDataDownloadTimeoutInSeconds(value: number) {
        this._modelDataDownloadTimeoutInSeconds = value;
    }
    public resetModelDataDownloadTimeoutInSeconds() {
        this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataDownloadTimeoutInSecondsInput() {
        return this._modelDataDownloadTimeoutInSeconds;
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

    // routing_config - computed: true, optional: true, required: false
    private _routingConfig = new ShadowProductionVariantsRoutingConfigPropertyOutputReference(this, "routing_config");
    public get routingConfig() {
        return this._routingConfig;
    }
    public putRoutingConfig(value: ShadowProductionVariantsRoutingConfigProperty) {
        this._routingConfig.internalValue = value;
    }
    public resetRoutingConfig() {
        this._routingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingConfigInput() {
        return this._routingConfig.internalValue;
    }

    // serverless_config - computed: true, optional: true, required: false
    private _serverlessConfig = new ShadowProductionVariantsServerlessConfigPropertyOutputReference(this, "serverless_config");
    public get serverlessConfig() {
        return this._serverlessConfig;
    }
    public putServerlessConfig(value: ShadowProductionVariantsServerlessConfigProperty) {
        this._serverlessConfig.internalValue = value;
    }
    public resetServerlessConfig() {
        this._serverlessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessConfigInput() {
        return this._serverlessConfig.internalValue;
    }

    // variant_instance_provision_timeout_in_seconds - computed: true, optional: true, required: false
    private _variantInstanceProvisionTimeoutInSeconds?: number; 
    public get variantInstanceProvisionTimeoutInSeconds() {
        return this.getNumberAttribute('variant_instance_provision_timeout_in_seconds');
    }
    public set variantInstanceProvisionTimeoutInSeconds(value: number) {
        this._variantInstanceProvisionTimeoutInSeconds = value;
    }
    public resetVariantInstanceProvisionTimeoutInSeconds() {
        this._variantInstanceProvisionTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variantInstanceProvisionTimeoutInSecondsInput() {
        return this._variantInstanceProvisionTimeoutInSeconds;
    }

    // variant_name - computed: true, optional: true, required: false
    private _variantName?: string; 
    public get variantName() {
        return this.getStringAttribute('variant_name');
    }
    public set variantName(value: string) {
        this._variantName = value;
    }
    public resetVariantName() {
        this._variantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variantNameInput() {
        return this._variantName;
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

export class ShadowProductionVariantsPropertyList extends cdktn.ComplexList {
    public internalValue? : ShadowProductionVariantsProperty[] | cdktn.IResolvable

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
    public get(index: number): ShadowProductionVariantsPropertyOutputReference {
        return new ShadowProductionVariantsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The tag key. Tag keys must be unique per resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#key CcEndpointConfig#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#value CcEndpointConfig#value}
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
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#security_group_ids CcEndpointConfig#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect your training job or model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_endpoint_config#subnets CcEndpointConfig#subnets}
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
