// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInferenceExperimentProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon S3 location and configuration for storing inference request and response data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#data_storage_config CcInferenceExperiment#data_storage_config}
    */
    readonly dataStorageConfig?: CcInferenceExperiment.DataStorageConfigProperty;
    /**
    * The description of the inference experiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#description CcInferenceExperiment#description}
    */
    readonly description?: string;
    /**
    * The desired state of the experiment after starting or stopping operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#desired_state CcInferenceExperiment#desired_state}
    */
    readonly desiredState?: string;
    /**
    * The name of the endpoint used to run the inference experiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#endpoint_name CcInferenceExperiment#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#kms_key CcInferenceExperiment#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#model_variants CcInferenceExperiment#model_variants}
    */
    readonly modelVariants: CcInferenceExperiment.ModelVariantConfigProperty[] | cdktn.IResolvable;
    /**
    * The name for the inference experiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#name CcInferenceExperiment#name}
    */
    readonly name: string;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#role_arn CcInferenceExperiment#role_arn}
    */
    readonly roleArn: string;
    /**
    * The duration for which you want the inference experiment to run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#schedule CcInferenceExperiment#schedule}
    */
    readonly schedule?: CcInferenceExperiment.InferenceExperimentScheduleProperty;
    /**
    * The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#shadow_mode_config CcInferenceExperiment#shadow_mode_config}
    */
    readonly shadowModeConfig?: CcInferenceExperiment.ShadowModeConfigProperty;
    /**
    * The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#status_reason CcInferenceExperiment#status_reason}
    */
    readonly statusReason?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#tags CcInferenceExperiment#tags}
    */
    readonly tags?: CcInferenceExperiment.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of the inference experiment that you want to run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#type CcInferenceExperiment#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}
*/
export class CcInferenceExperiment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_inference_experiment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInferenceExperiment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInferenceExperiment to import
    * @param importFromId The id of the existing CcInferenceExperiment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInferenceExperiment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_experiment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInferenceExperimentProps
    */
    public constructor(scope: Construct, id: string, config: CcInferenceExperimentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_inference_experiment',
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
        this._dataStorageConfig.internalValue = config.dataStorageConfig;
        this._description = config.description;
        this._desiredState = config.desiredState;
        this._endpointName = config.endpointName;
        this._kmsKey = config.kmsKey;
        this._modelVariants.internalValue = config.modelVariants;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._schedule.internalValue = config.schedule;
        this._shadowModeConfig.internalValue = config.shadowModeConfig;
        this._statusReason = config.statusReason;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // data_storage_config - computed: true, optional: true, required: false
    private _dataStorageConfig = new CcInferenceExperiment.DataStorageConfigPropertyOutputReference(this, "data_storage_config");
    public get dataStorageConfig() {
        return this._dataStorageConfig;
    }
    public putDataStorageConfig(value: CcInferenceExperiment.DataStorageConfigProperty) {
        this._dataStorageConfig.internalValue = value;
    }
    public resetDataStorageConfig() {
        this._dataStorageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataStorageConfigInput() {
        return this._dataStorageConfig.internalValue;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // desired_state - computed: true, optional: true, required: false
    private _desiredState?: string; 
    public get desiredState() {
        return this.getStringAttribute('desired_state');
    }
    public set desiredState(value: string) {
        this._desiredState = value;
    }
    public resetDesiredState() {
        this._desiredState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredStateInput() {
        return this._desiredState;
    }

    // endpoint_metadata - computed: true, optional: false, required: false
    private _endpointMetadata = new CcInferenceExperiment.EndpointMetadataPropertyOutputReference(this, "endpoint_metadata");
    public get endpointMetadata() {
        return this._endpointMetadata;
    }

    // endpoint_name - computed: false, optional: false, required: true
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // model_variants - computed: false, optional: false, required: true
    private _modelVariants = new CcInferenceExperiment.ModelVariantConfigPropertyList(this, "model_variants", false);
    public get modelVariants() {
        return this._modelVariants;
    }
    public putModelVariants(value: CcInferenceExperiment.ModelVariantConfigProperty[] | cdktn.IResolvable) {
        this._modelVariants.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelVariantsInput() {
        return this._modelVariants.internalValue;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

    // schedule - computed: true, optional: true, required: false
    private _schedule = new CcInferenceExperiment.InferenceExperimentSchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcInferenceExperiment.InferenceExperimentScheduleProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // shadow_mode_config - computed: true, optional: true, required: false
    private _shadowModeConfig = new CcInferenceExperiment.ShadowModeConfigPropertyOutputReference(this, "shadow_mode_config");
    public get shadowModeConfig() {
        return this._shadowModeConfig;
    }
    public putShadowModeConfig(value: CcInferenceExperiment.ShadowModeConfigProperty) {
        this._shadowModeConfig.internalValue = value;
    }
    public resetShadowModeConfig() {
        this._shadowModeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shadowModeConfigInput() {
        return this._shadowModeConfig.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: true, required: false
    private _statusReason?: string; 
    public get statusReason() {
        return this.getStringAttribute('status_reason');
    }
    public set statusReason(value: string) {
        this._statusReason = value;
    }
    public resetStatusReason() {
        this._statusReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusReasonInput() {
        return this._statusReason;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInferenceExperiment.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInferenceExperiment.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_storage_config: ccInferenceExperimentDataStorageConfigPropertyToTerraform(this._dataStorageConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            desired_state: cdktn.stringToTerraform(this._desiredState),
            endpoint_name: cdktn.stringToTerraform(this._endpointName),
            kms_key: cdktn.stringToTerraform(this._kmsKey),
            model_variants: cdktn.listMapper(ccInferenceExperimentModelVariantConfigPropertyToTerraform, false)(this._modelVariants.internalValue),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            schedule: ccInferenceExperimentInferenceExperimentSchedulePropertyToTerraform(this._schedule.internalValue),
            shadow_mode_config: ccInferenceExperimentShadowModeConfigPropertyToTerraform(this._shadowModeConfig.internalValue),
            status_reason: cdktn.stringToTerraform(this._statusReason),
            tags: cdktn.listMapper(ccInferenceExperimentTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_storage_config: {
                value: ccInferenceExperimentDataStorageConfigPropertyToHclTerraform(this._dataStorageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceExperiment.DataStorageConfigProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desired_state: {
                value: cdktn.stringToHclTerraform(this._desiredState),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_name: {
                value: cdktn.stringToHclTerraform(this._endpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key: {
                value: cdktn.stringToHclTerraform(this._kmsKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_variants: {
                value: cdktn.listMapperHcl(ccInferenceExperimentModelVariantConfigPropertyToHclTerraform, false)(this._modelVariants.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInferenceExperiment.ModelVariantConfigPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
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
            schedule: {
                value: ccInferenceExperimentInferenceExperimentSchedulePropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceExperiment.InferenceExperimentScheduleProperty",
            },
            shadow_mode_config: {
                value: ccInferenceExperimentShadowModeConfigPropertyToHclTerraform(this._shadowModeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceExperiment.ShadowModeConfigProperty",
            },
            status_reason: {
                value: cdktn.stringToHclTerraform(this._statusReason),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInferenceExperimentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInferenceExperiment.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInferenceExperimentCaptureContentTypeHeaderPropertyToTerraform(struct?: CcInferenceExperiment.CaptureContentTypeHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.csvContentTypes),
        json_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.jsonContentTypes),
    }
}


export function ccInferenceExperimentCaptureContentTypeHeaderPropertyToHclTerraform(struct?: CcInferenceExperiment.CaptureContentTypeHeaderProperty | cdktn.IResolvable): any {
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


export function ccInferenceExperimentDataStorageConfigPropertyToTerraform(struct?: CcInferenceExperiment.DataStorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: ccInferenceExperimentCaptureContentTypeHeaderPropertyToTerraform(struct!.contentType),
        destination: cdktn.stringToTerraform(struct!.destination),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccInferenceExperimentDataStorageConfigPropertyToHclTerraform(struct?: CcInferenceExperiment.DataStorageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type: {
            value: ccInferenceExperimentCaptureContentTypeHeaderPropertyToHclTerraform(struct!.contentType),
            isBlock: true,
            type: "struct",
            storageClassType: "CaptureContentTypeHeaderProperty",
        },
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceExperimentEndpointMetadataPropertyToTerraform(struct?: CcInferenceExperiment.EndpointMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInferenceExperimentEndpointMetadataPropertyToHclTerraform(struct?: CcInferenceExperiment.EndpointMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInferenceExperimentRealTimeInferenceConfigPropertyToTerraform(struct?: CcInferenceExperiment.RealTimeInferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
    }
}


export function ccInferenceExperimentRealTimeInferenceConfigPropertyToHclTerraform(struct?: CcInferenceExperiment.RealTimeInferenceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceExperimentModelInfrastructureConfigPropertyToTerraform(struct?: CcInferenceExperiment.ModelInfrastructureConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        infrastructure_type: cdktn.stringToTerraform(struct!.infrastructureType),
        real_time_inference_config: ccInferenceExperimentRealTimeInferenceConfigPropertyToTerraform(struct!.realTimeInferenceConfig),
    }
}


export function ccInferenceExperimentModelInfrastructureConfigPropertyToHclTerraform(struct?: CcInferenceExperiment.ModelInfrastructureConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        infrastructure_type: {
            value: cdktn.stringToHclTerraform(struct!.infrastructureType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        real_time_inference_config: {
            value: ccInferenceExperimentRealTimeInferenceConfigPropertyToHclTerraform(struct!.realTimeInferenceConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RealTimeInferenceConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceExperimentModelVariantConfigPropertyToTerraform(struct?: CcInferenceExperiment.ModelVariantConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        infrastructure_config: ccInferenceExperimentModelInfrastructureConfigPropertyToTerraform(struct!.infrastructureConfig),
        model_name: cdktn.stringToTerraform(struct!.modelName),
        variant_name: cdktn.stringToTerraform(struct!.variantName),
    }
}


export function ccInferenceExperimentModelVariantConfigPropertyToHclTerraform(struct?: CcInferenceExperiment.ModelVariantConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        infrastructure_config: {
            value: ccInferenceExperimentModelInfrastructureConfigPropertyToHclTerraform(struct!.infrastructureConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelInfrastructureConfigProperty",
        },
        model_name: {
            value: cdktn.stringToHclTerraform(struct!.modelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variant_name: {
            value: cdktn.stringToHclTerraform(struct!.variantName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceExperimentInferenceExperimentSchedulePropertyToTerraform(struct?: CcInferenceExperiment.InferenceExperimentScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccInferenceExperimentInferenceExperimentSchedulePropertyToHclTerraform(struct?: CcInferenceExperiment.InferenceExperimentScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccInferenceExperimentShadowModelVariantConfigPropertyToTerraform(struct?: CcInferenceExperiment.ShadowModelVariantConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sampling_percentage: cdktn.numberToTerraform(struct!.samplingPercentage),
        shadow_model_variant_name: cdktn.stringToTerraform(struct!.shadowModelVariantName),
    }
}


export function ccInferenceExperimentShadowModelVariantConfigPropertyToHclTerraform(struct?: CcInferenceExperiment.ShadowModelVariantConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sampling_percentage: {
            value: cdktn.numberToHclTerraform(struct!.samplingPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        shadow_model_variant_name: {
            value: cdktn.stringToHclTerraform(struct!.shadowModelVariantName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceExperimentShadowModeConfigPropertyToTerraform(struct?: CcInferenceExperiment.ShadowModeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        shadow_model_variants: cdktn.listMapper(ccInferenceExperimentShadowModelVariantConfigPropertyToTerraform, false)(struct!.shadowModelVariants),
        source_model_variant_name: cdktn.stringToTerraform(struct!.sourceModelVariantName),
    }
}


export function ccInferenceExperimentShadowModeConfigPropertyToHclTerraform(struct?: CcInferenceExperiment.ShadowModeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        shadow_model_variants: {
            value: cdktn.listMapperHcl(ccInferenceExperimentShadowModelVariantConfigPropertyToHclTerraform, false)(struct!.shadowModelVariants),
            isBlock: true,
            type: "list",
            storageClassType: "ShadowModelVariantConfigPropertyList",
        },
        source_model_variant_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceModelVariantName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceExperimentTagPropertyToTerraform(struct?: CcInferenceExperiment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInferenceExperimentTagPropertyToHclTerraform(struct?: CcInferenceExperiment.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInferenceExperiment {
export interface CaptureContentTypeHeaderProperty {
    /**
    * The list of all content type headers that SageMaker will treat as CSV and capture accordingly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#csv_content_types CcInferenceExperiment#csv_content_types}
    */
    readonly csvContentTypes?: string[];
    /**
    * The list of all content type headers that SageMaker will treat as JSON and capture accordingly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#json_content_types CcInferenceExperiment#json_content_types}
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
export interface DataStorageConfigProperty {
    /**
    * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#content_type CcInferenceExperiment#content_type}
    */
    readonly contentType?: CaptureContentTypeHeaderProperty;
    /**
    * The Amazon S3 bucket where the inference request and response data is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#destination CcInferenceExperiment#destination}
    */
    readonly destination?: string;
    /**
    * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#kms_key CcInferenceExperiment#kms_key}
    */
    readonly kmsKey?: string;
}
export class DataStorageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataStorageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType?.internalValue;
        }
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataStorageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType.internalValue = undefined;
            this._destination = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType.internalValue = value.contentType;
            this._destination = value.destination;
            this._kmsKey = value.kmsKey;
        }
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType = new CaptureContentTypeHeaderPropertyOutputReference(this, "content_type");
    public get contentType() {
        return this._contentType;
    }
    public putContentType(value: CaptureContentTypeHeaderProperty) {
        this._contentType.internalValue = value;
    }
    public resetContentType() {
        this._contentType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType.internalValue;
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface EndpointMetadataProperty {
}
export class EndpointMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointMetadataProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointMetadataProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // endpoint_config_name - computed: true, optional: false, required: false
    public get endpointConfigName() {
        return this.getStringAttribute('endpoint_config_name');
    }

    // endpoint_name - computed: true, optional: false, required: false
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }

    // endpoint_status - computed: true, optional: false, required: false
    public get endpointStatus() {
        return this.getStringAttribute('endpoint_status');
    }
}
export interface RealTimeInferenceConfigProperty {
    /**
    * The number of instances of the type specified by InstanceType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#instance_count CcInferenceExperiment#instance_count}
    */
    readonly instanceCount: number;
    /**
    * The instance type the model is deployed to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#instance_type CcInferenceExperiment#instance_type}
    */
    readonly instanceType: string;
}
export class RealTimeInferenceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RealTimeInferenceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RealTimeInferenceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceCount = undefined;
            this._instanceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceCount = value.instanceCount;
            this._instanceType = value.instanceType;
        }
    }

    // instance_count - computed: false, optional: false, required: true
    private _instanceCount?: number; 
    public get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number) {
        this._instanceCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
        return this._instanceCount;
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
}
export interface ModelInfrastructureConfigProperty {
    /**
    * The type of the inference experiment that you want to run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#infrastructure_type CcInferenceExperiment#infrastructure_type}
    */
    readonly infrastructureType: string;
    /**
    * The infrastructure configuration for deploying the model to a real-time inference endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#real_time_inference_config CcInferenceExperiment#real_time_inference_config}
    */
    readonly realTimeInferenceConfig: RealTimeInferenceConfigProperty;
}
export class ModelInfrastructureConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelInfrastructureConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._infrastructureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.infrastructureType = this._infrastructureType;
        }
        if (this._realTimeInferenceConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.realTimeInferenceConfig = this._realTimeInferenceConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelInfrastructureConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._infrastructureType = undefined;
            this._realTimeInferenceConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._infrastructureType = value.infrastructureType;
            this._realTimeInferenceConfig.internalValue = value.realTimeInferenceConfig;
        }
    }

    // infrastructure_type - computed: false, optional: false, required: true
    private _infrastructureType?: string; 
    public get infrastructureType() {
        return this.getStringAttribute('infrastructure_type');
    }
    public set infrastructureType(value: string) {
        this._infrastructureType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureTypeInput() {
        return this._infrastructureType;
    }

    // real_time_inference_config - computed: false, optional: false, required: true
    private _realTimeInferenceConfig = new RealTimeInferenceConfigPropertyOutputReference(this, "real_time_inference_config");
    public get realTimeInferenceConfig() {
        return this._realTimeInferenceConfig;
    }
    public putRealTimeInferenceConfig(value: RealTimeInferenceConfigProperty) {
        this._realTimeInferenceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get realTimeInferenceConfigInput() {
        return this._realTimeInferenceConfig.internalValue;
    }
}
export interface ModelVariantConfigProperty {
    /**
    * The configuration for the infrastructure that the model will be deployed to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#infrastructure_config CcInferenceExperiment#infrastructure_config}
    */
    readonly infrastructureConfig: ModelInfrastructureConfigProperty;
    /**
    * The name of the Amazon SageMaker Model entity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#model_name CcInferenceExperiment#model_name}
    */
    readonly modelName: string;
    /**
    * The name of the variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#variant_name CcInferenceExperiment#variant_name}
    */
    readonly variantName: string;
}
export class ModelVariantConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ModelVariantConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._infrastructureConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.infrastructureConfig = this._infrastructureConfig?.internalValue;
        }
        if (this._modelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelName = this._modelName;
        }
        if (this._variantName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variantName = this._variantName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelVariantConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._infrastructureConfig.internalValue = undefined;
            this._modelName = undefined;
            this._variantName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._infrastructureConfig.internalValue = value.infrastructureConfig;
            this._modelName = value.modelName;
            this._variantName = value.variantName;
        }
    }

    // infrastructure_config - computed: false, optional: false, required: true
    private _infrastructureConfig = new ModelInfrastructureConfigPropertyOutputReference(this, "infrastructure_config");
    public get infrastructureConfig() {
        return this._infrastructureConfig;
    }
    public putInfrastructureConfig(value: ModelInfrastructureConfigProperty) {
        this._infrastructureConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureConfigInput() {
        return this._infrastructureConfig.internalValue;
    }

    // model_name - computed: false, optional: false, required: true
    private _modelName?: string; 
    public get modelName() {
        return this.getStringAttribute('model_name');
    }
    public set modelName(value: string) {
        this._modelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelNameInput() {
        return this._modelName;
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
}

export class ModelVariantConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : ModelVariantConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): ModelVariantConfigPropertyOutputReference {
        return new ModelVariantConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InferenceExperimentScheduleProperty {
    /**
    * The timestamp at which the inference experiment ended or will end.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#end_time CcInferenceExperiment#end_time}
    */
    readonly endTime?: string;
    /**
    * The timestamp at which the inference experiment started or will start.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#start_time CcInferenceExperiment#start_time}
    */
    readonly startTime?: string;
}
export class InferenceExperimentSchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceExperimentScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: InferenceExperimentScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._endTime = value.endTime;
            this._startTime = value.startTime;
        }
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
export interface ShadowModelVariantConfigProperty {
    /**
    * The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#sampling_percentage CcInferenceExperiment#sampling_percentage}
    */
    readonly samplingPercentage?: number;
    /**
    * The name of the shadow variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#shadow_model_variant_name CcInferenceExperiment#shadow_model_variant_name}
    */
    readonly shadowModelVariantName?: string;
}
export class ShadowModelVariantConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ShadowModelVariantConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._samplingPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingPercentage = this._samplingPercentage;
        }
        if (this._shadowModelVariantName !== undefined) {
            hasAnyValues = true;
            internalValueResult.shadowModelVariantName = this._shadowModelVariantName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowModelVariantConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._samplingPercentage = undefined;
            this._shadowModelVariantName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._samplingPercentage = value.samplingPercentage;
            this._shadowModelVariantName = value.shadowModelVariantName;
        }
    }

    // sampling_percentage - computed: true, optional: true, required: false
    private _samplingPercentage?: number; 
    public get samplingPercentage() {
        return this.getNumberAttribute('sampling_percentage');
    }
    public set samplingPercentage(value: number) {
        this._samplingPercentage = value;
    }
    public resetSamplingPercentage() {
        this._samplingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingPercentageInput() {
        return this._samplingPercentage;
    }

    // shadow_model_variant_name - computed: true, optional: true, required: false
    private _shadowModelVariantName?: string; 
    public get shadowModelVariantName() {
        return this.getStringAttribute('shadow_model_variant_name');
    }
    public set shadowModelVariantName(value: string) {
        this._shadowModelVariantName = value;
    }
    public resetShadowModelVariantName() {
        this._shadowModelVariantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shadowModelVariantNameInput() {
        return this._shadowModelVariantName;
    }
}

export class ShadowModelVariantConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : ShadowModelVariantConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): ShadowModelVariantConfigPropertyOutputReference {
        return new ShadowModelVariantConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ShadowModeConfigProperty {
    /**
    * List of shadow variant configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#shadow_model_variants CcInferenceExperiment#shadow_model_variants}
    */
    readonly shadowModelVariants?: ShadowModelVariantConfigProperty[] | cdktn.IResolvable;
    /**
    * The name of the production variant, which takes all the inference requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#source_model_variant_name CcInferenceExperiment#source_model_variant_name}
    */
    readonly sourceModelVariantName?: string;
}
export class ShadowModeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShadowModeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._shadowModelVariants?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.shadowModelVariants = this._shadowModelVariants?.internalValue;
        }
        if (this._sourceModelVariantName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceModelVariantName = this._sourceModelVariantName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShadowModeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._shadowModelVariants.internalValue = undefined;
            this._sourceModelVariantName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._shadowModelVariants.internalValue = value.shadowModelVariants;
            this._sourceModelVariantName = value.sourceModelVariantName;
        }
    }

    // shadow_model_variants - computed: true, optional: true, required: false
    private _shadowModelVariants = new ShadowModelVariantConfigPropertyList(this, "shadow_model_variants", false);
    public get shadowModelVariants() {
        return this._shadowModelVariants;
    }
    public putShadowModelVariants(value: ShadowModelVariantConfigProperty[] | cdktn.IResolvable) {
        this._shadowModelVariants.internalValue = value;
    }
    public resetShadowModelVariants() {
        this._shadowModelVariants.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shadowModelVariantsInput() {
        return this._shadowModelVariants.internalValue;
    }

    // source_model_variant_name - computed: true, optional: true, required: false
    private _sourceModelVariantName?: string; 
    public get sourceModelVariantName() {
        return this.getStringAttribute('source_model_variant_name');
    }
    public set sourceModelVariantName(value: string) {
        this._sourceModelVariantName = value;
    }
    public resetSourceModelVariantName() {
        this._sourceModelVariantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceModelVariantNameInput() {
        return this._sourceModelVariantName;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#key CcInferenceExperiment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_inference_experiment#value CcInferenceExperiment#value}
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
