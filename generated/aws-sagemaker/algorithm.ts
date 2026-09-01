// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAlgorithmProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#algorithm_description CcAlgorithm#algorithm_description}
    */
    readonly algorithmDescription?: string;
    /**
    * The name of the algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#algorithm_name CcAlgorithm#algorithm_name}
    */
    readonly algorithmName: string;
    /**
    * Whether to certify the algorithm so that it can be listed in AWS Marketplace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#certify_for_marketplace CcAlgorithm#certify_for_marketplace}
    */
    readonly certifyForMarketplace?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#inference_specification CcAlgorithm#inference_specification}
    */
    readonly inferenceSpecification?: CcAlgorithm.InferenceSpecificationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#tags CcAlgorithm#tags}
    */
    readonly tags?: CcAlgorithm.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#training_specification CcAlgorithm#training_specification}
    */
    readonly trainingSpecification: CcAlgorithm.TrainingSpecificationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm awscc_sagemaker_algorithm}
*/
export class CcAlgorithm extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_algorithm";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlgorithm resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlgorithm to import
    * @param importFromId The id of the existing CcAlgorithm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlgorithm to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_algorithm", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm awscc_sagemaker_algorithm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAlgorithmProps
    */
    public constructor(scope: Construct, id: string, config: CcAlgorithmProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_algorithm',
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
        this._algorithmDescription = config.algorithmDescription;
        this._algorithmName = config.algorithmName;
        this._certifyForMarketplace = config.certifyForMarketplace;
        this._inferenceSpecification.internalValue = config.inferenceSpecification;
        this._tags.internalValue = config.tags;
        this._trainingSpecification.internalValue = config.trainingSpecification;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // algorithm_arn - computed: true, optional: false, required: false
    public get algorithmArn() {
        return this.getStringAttribute('algorithm_arn');
    }

    // algorithm_description - computed: true, optional: true, required: false
    private _algorithmDescription?: string; 
    public get algorithmDescription() {
        return this.getStringAttribute('algorithm_description');
    }
    public set algorithmDescription(value: string) {
        this._algorithmDescription = value;
    }
    public resetAlgorithmDescription() {
        this._algorithmDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmDescriptionInput() {
        return this._algorithmDescription;
    }

    // algorithm_name - computed: false, optional: false, required: true
    private _algorithmName?: string; 
    public get algorithmName() {
        return this.getStringAttribute('algorithm_name');
    }
    public set algorithmName(value: string) {
        this._algorithmName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmNameInput() {
        return this._algorithmName;
    }

    // certify_for_marketplace - computed: true, optional: true, required: false
    private _certifyForMarketplace?: boolean | cdktn.IResolvable; 
    public get certifyForMarketplace() {
        return this.getBooleanAttribute('certify_for_marketplace');
    }
    public set certifyForMarketplace(value: boolean | cdktn.IResolvable) {
        this._certifyForMarketplace = value;
    }
    public resetCertifyForMarketplace() {
        this._certifyForMarketplace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certifyForMarketplaceInput() {
        return this._certifyForMarketplace;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inference_specification - computed: true, optional: true, required: false
    private _inferenceSpecification = new CcAlgorithm.InferenceSpecificationPropertyOutputReference(this, "inference_specification");
    public get inferenceSpecification() {
        return this._inferenceSpecification;
    }
    public putInferenceSpecification(value: CcAlgorithm.InferenceSpecificationProperty) {
        this._inferenceSpecification.internalValue = value;
    }
    public resetInferenceSpecification() {
        this._inferenceSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceSpecificationInput() {
        return this._inferenceSpecification.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAlgorithm.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAlgorithm.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // training_specification - computed: false, optional: false, required: true
    private _trainingSpecification = new CcAlgorithm.TrainingSpecificationPropertyOutputReference(this, "training_specification");
    public get trainingSpecification() {
        return this._trainingSpecification;
    }
    public putTrainingSpecification(value: CcAlgorithm.TrainingSpecificationProperty) {
        this._trainingSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingSpecificationInput() {
        return this._trainingSpecification.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            algorithm_description: cdktn.stringToTerraform(this._algorithmDescription),
            algorithm_name: cdktn.stringToTerraform(this._algorithmName),
            certify_for_marketplace: cdktn.booleanToTerraform(this._certifyForMarketplace),
            inference_specification: ccAlgorithmInferenceSpecificationPropertyToTerraform(this._inferenceSpecification.internalValue),
            tags: cdktn.listMapper(ccAlgorithmTagPropertyToTerraform, false)(this._tags.internalValue),
            training_specification: ccAlgorithmTrainingSpecificationPropertyToTerraform(this._trainingSpecification.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            algorithm_description: {
                value: cdktn.stringToHclTerraform(this._algorithmDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            algorithm_name: {
                value: cdktn.stringToHclTerraform(this._algorithmName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certify_for_marketplace: {
                value: cdktn.booleanToHclTerraform(this._certifyForMarketplace),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            inference_specification: {
                value: ccAlgorithmInferenceSpecificationPropertyToHclTerraform(this._inferenceSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlgorithm.InferenceSpecificationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAlgorithmTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAlgorithm.TagPropertyList",
            },
            training_specification: {
                value: ccAlgorithmTrainingSpecificationPropertyToHclTerraform(this._trainingSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlgorithm.TrainingSpecificationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAlgorithmModelInputPropertyToTerraform(struct?: CcAlgorithm.ModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
    }
}


export function ccAlgorithmModelInputPropertyToHclTerraform(struct?: CcAlgorithm.ModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_input_config: {
            value: cdktn.stringToHclTerraform(struct!.dataInputConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmModelPackageContainerDefinitionPropertyToTerraform(struct?: CcAlgorithm.ModelPackageContainerDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        framework: cdktn.stringToTerraform(struct!.framework),
        framework_version: cdktn.stringToTerraform(struct!.frameworkVersion),
        image: cdktn.stringToTerraform(struct!.image),
        image_digest: cdktn.stringToTerraform(struct!.imageDigest),
        is_checkpoint: cdktn.booleanToTerraform(struct!.isCheckpoint),
        model_input: ccAlgorithmModelInputPropertyToTerraform(struct!.modelInput),
        nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
    }
}


export function ccAlgorithmModelPackageContainerDefinitionPropertyToHclTerraform(struct?: CcAlgorithm.ModelPackageContainerDefinitionProperty | cdktn.IResolvable): any {
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
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        framework: {
            value: cdktn.stringToHclTerraform(struct!.framework),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        framework_version: {
            value: cdktn.stringToHclTerraform(struct!.frameworkVersion),
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
        image_digest: {
            value: cdktn.stringToHclTerraform(struct!.imageDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_checkpoint: {
            value: cdktn.booleanToHclTerraform(struct!.isCheckpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        model_input: {
            value: ccAlgorithmModelInputPropertyToHclTerraform(struct!.modelInput),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelInputProperty",
        },
        nearest_model_name: {
            value: cdktn.stringToHclTerraform(struct!.nearestModelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmInferenceSpecificationPropertyToTerraform(struct?: CcAlgorithm.InferenceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        containers: cdktn.listMapper(ccAlgorithmModelPackageContainerDefinitionPropertyToTerraform, false)(struct!.containers),
        supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
        supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
        supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
        supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
    }
}


export function ccAlgorithmInferenceSpecificationPropertyToHclTerraform(struct?: CcAlgorithm.InferenceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        containers: {
            value: cdktn.listMapperHcl(ccAlgorithmModelPackageContainerDefinitionPropertyToHclTerraform, false)(struct!.containers),
            isBlock: true,
            type: "list",
            storageClassType: "ModelPackageContainerDefinitionPropertyList",
        },
        supported_content_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_realtime_inference_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_response_mime_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_transform_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmTagPropertyToTerraform(struct?: CcAlgorithm.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAlgorithmTagPropertyToHclTerraform(struct?: CcAlgorithm.TagProperty | cdktn.IResolvable): any {
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


export function ccAlgorithmMetricDefinitionPropertyToTerraform(struct?: CcAlgorithm.MetricDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        regex: cdktn.stringToTerraform(struct!.regex),
    }
}


export function ccAlgorithmMetricDefinitionPropertyToHclTerraform(struct?: CcAlgorithm.MetricDefinitionProperty | cdktn.IResolvable): any {
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
        regex: {
            value: cdktn.stringToHclTerraform(struct!.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmCategoricalParameterRangeSpecificationPropertyToTerraform(struct?: CcAlgorithm.CategoricalParameterRangeSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAlgorithmCategoricalParameterRangeSpecificationPropertyToHclTerraform(struct?: CcAlgorithm.CategoricalParameterRangeSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmContinuousParameterRangeSpecificationPropertyToTerraform(struct?: CcAlgorithm.ContinuousParameterRangeSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.stringToTerraform(struct!.maxValue),
        min_value: cdktn.stringToTerraform(struct!.minValue),
    }
}


export function ccAlgorithmContinuousParameterRangeSpecificationPropertyToHclTerraform(struct?: CcAlgorithm.ContinuousParameterRangeSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.stringToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_value: {
            value: cdktn.stringToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmIntegerParameterRangeSpecificationPropertyToTerraform(struct?: CcAlgorithm.IntegerParameterRangeSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_value: cdktn.stringToTerraform(struct!.maxValue),
        min_value: cdktn.stringToTerraform(struct!.minValue),
    }
}


export function ccAlgorithmIntegerParameterRangeSpecificationPropertyToHclTerraform(struct?: CcAlgorithm.IntegerParameterRangeSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_value: {
            value: cdktn.stringToHclTerraform(struct!.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_value: {
            value: cdktn.stringToHclTerraform(struct!.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmParameterRangePropertyToTerraform(struct?: CcAlgorithm.ParameterRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        categorical_parameter_range_specification: ccAlgorithmCategoricalParameterRangeSpecificationPropertyToTerraform(struct!.categoricalParameterRangeSpecification),
        continuous_parameter_range_specification: ccAlgorithmContinuousParameterRangeSpecificationPropertyToTerraform(struct!.continuousParameterRangeSpecification),
        integer_parameter_range_specification: ccAlgorithmIntegerParameterRangeSpecificationPropertyToTerraform(struct!.integerParameterRangeSpecification),
    }
}


export function ccAlgorithmParameterRangePropertyToHclTerraform(struct?: CcAlgorithm.ParameterRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        categorical_parameter_range_specification: {
            value: ccAlgorithmCategoricalParameterRangeSpecificationPropertyToHclTerraform(struct!.categoricalParameterRangeSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CategoricalParameterRangeSpecificationProperty",
        },
        continuous_parameter_range_specification: {
            value: ccAlgorithmContinuousParameterRangeSpecificationPropertyToHclTerraform(struct!.continuousParameterRangeSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "ContinuousParameterRangeSpecificationProperty",
        },
        integer_parameter_range_specification: {
            value: ccAlgorithmIntegerParameterRangeSpecificationPropertyToHclTerraform(struct!.integerParameterRangeSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "IntegerParameterRangeSpecificationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmHyperParameterSpecificationPropertyToTerraform(struct?: CcAlgorithm.HyperParameterSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        description: cdktn.stringToTerraform(struct!.description),
        is_required: cdktn.booleanToTerraform(struct!.isRequired),
        is_tunable: cdktn.booleanToTerraform(struct!.isTunable),
        name: cdktn.stringToTerraform(struct!.name),
        range: ccAlgorithmParameterRangePropertyToTerraform(struct!.range),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlgorithmHyperParameterSpecificationPropertyToHclTerraform(struct?: CcAlgorithm.HyperParameterSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_required: {
            value: cdktn.booleanToHclTerraform(struct!.isRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_tunable: {
            value: cdktn.booleanToHclTerraform(struct!.isTunable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range: {
            value: ccAlgorithmParameterRangePropertyToHclTerraform(struct!.range),
            isBlock: true,
            type: "struct",
            storageClassType: "ParameterRangeProperty",
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


export function ccAlgorithmHyperParameterTuningJobObjectivePropertyToTerraform(struct?: CcAlgorithm.HyperParameterTuningJobObjectiveProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlgorithmHyperParameterTuningJobObjectivePropertyToHclTerraform(struct?: CcAlgorithm.HyperParameterTuningJobObjectiveProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccAlgorithmChannelSpecificationPropertyToTerraform(struct?: CcAlgorithm.ChannelSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        is_required: cdktn.booleanToTerraform(struct!.isRequired),
        name: cdktn.stringToTerraform(struct!.name),
        supported_compression_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedCompressionTypes),
        supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
        supported_input_modes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedInputModes),
    }
}


export function ccAlgorithmChannelSpecificationPropertyToHclTerraform(struct?: CcAlgorithm.ChannelSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_required: {
            value: cdktn.booleanToHclTerraform(struct!.isRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        supported_compression_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedCompressionTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_content_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_input_modes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedInputModes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlgorithmTrainingSpecificationPropertyToTerraform(struct?: CcAlgorithm.TrainingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_definitions: cdktn.listMapper(ccAlgorithmMetricDefinitionPropertyToTerraform, false)(struct!.metricDefinitions),
        supported_hyper_parameters: cdktn.listMapper(ccAlgorithmHyperParameterSpecificationPropertyToTerraform, false)(struct!.supportedHyperParameters),
        supported_training_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTrainingInstanceTypes),
        supported_tuning_job_objective_metrics: cdktn.listMapper(ccAlgorithmHyperParameterTuningJobObjectivePropertyToTerraform, false)(struct!.supportedTuningJobObjectiveMetrics),
        supports_distributed_training: cdktn.booleanToTerraform(struct!.supportsDistributedTraining),
        training_channels: cdktn.listMapper(ccAlgorithmChannelSpecificationPropertyToTerraform, false)(struct!.trainingChannels),
        training_image: cdktn.stringToTerraform(struct!.trainingImage),
        training_image_digest: cdktn.stringToTerraform(struct!.trainingImageDigest),
    }
}


export function ccAlgorithmTrainingSpecificationPropertyToHclTerraform(struct?: CcAlgorithm.TrainingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_definitions: {
            value: cdktn.listMapperHcl(ccAlgorithmMetricDefinitionPropertyToHclTerraform, false)(struct!.metricDefinitions),
            isBlock: true,
            type: "list",
            storageClassType: "MetricDefinitionPropertyList",
        },
        supported_hyper_parameters: {
            value: cdktn.listMapperHcl(ccAlgorithmHyperParameterSpecificationPropertyToHclTerraform, false)(struct!.supportedHyperParameters),
            isBlock: true,
            type: "list",
            storageClassType: "HyperParameterSpecificationPropertyList",
        },
        supported_training_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTrainingInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_tuning_job_objective_metrics: {
            value: cdktn.listMapperHcl(ccAlgorithmHyperParameterTuningJobObjectivePropertyToHclTerraform, false)(struct!.supportedTuningJobObjectiveMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "HyperParameterTuningJobObjectivePropertyList",
        },
        supports_distributed_training: {
            value: cdktn.booleanToHclTerraform(struct!.supportsDistributedTraining),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        training_channels: {
            value: cdktn.listMapperHcl(ccAlgorithmChannelSpecificationPropertyToHclTerraform, false)(struct!.trainingChannels),
            isBlock: true,
            type: "list",
            storageClassType: "ChannelSpecificationPropertyList",
        },
        training_image: {
            value: cdktn.stringToHclTerraform(struct!.trainingImage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        training_image_digest: {
            value: cdktn.stringToHclTerraform(struct!.trainingImageDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAlgorithm {
export interface ModelInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#data_input_config CcAlgorithm#data_input_config}
    */
    readonly dataInputConfig?: string;
}
export class ModelInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataInputConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataInputConfig = this._dataInputConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataInputConfig = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataInputConfig = value.dataInputConfig;
        }
    }

    // data_input_config - computed: true, optional: true, required: false
    private _dataInputConfig?: string; 
    public get dataInputConfig() {
        return this.getStringAttribute('data_input_config');
    }
    public set dataInputConfig(value: string) {
        this._dataInputConfig = value;
    }
    public resetDataInputConfig() {
        this._dataInputConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInputConfigInput() {
        return this._dataInputConfig;
    }
}
export interface ModelPackageContainerDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#container_hostname CcAlgorithm#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#environment CcAlgorithm#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#framework CcAlgorithm#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#framework_version CcAlgorithm#framework_version}
    */
    readonly frameworkVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#image CcAlgorithm#image}
    */
    readonly image?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#image_digest CcAlgorithm#image_digest}
    */
    readonly imageDigest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#is_checkpoint CcAlgorithm#is_checkpoint}
    */
    readonly isCheckpoint?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#model_input CcAlgorithm#model_input}
    */
    readonly modelInput?: ModelInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#nearest_model_name CcAlgorithm#nearest_model_name}
    */
    readonly nearestModelName?: string;
}
export class ModelPackageContainerDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ModelPackageContainerDefinitionProperty | cdktn.IResolvable | undefined {
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
        if (this._framework !== undefined) {
            hasAnyValues = true;
            internalValueResult.framework = this._framework;
        }
        if (this._frameworkVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameworkVersion = this._frameworkVersion;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._imageDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageDigest = this._imageDigest;
        }
        if (this._isCheckpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.isCheckpoint = this._isCheckpoint;
        }
        if (this._modelInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelInput = this._modelInput?.internalValue;
        }
        if (this._nearestModelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.nearestModelName = this._nearestModelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelPackageContainerDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerHostname = undefined;
            this._environment = undefined;
            this._framework = undefined;
            this._frameworkVersion = undefined;
            this._image = undefined;
            this._imageDigest = undefined;
            this._isCheckpoint = undefined;
            this._modelInput.internalValue = undefined;
            this._nearestModelName = undefined;
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
            this._framework = value.framework;
            this._frameworkVersion = value.frameworkVersion;
            this._image = value.image;
            this._imageDigest = value.imageDigest;
            this._isCheckpoint = value.isCheckpoint;
            this._modelInput.internalValue = value.modelInput;
            this._nearestModelName = value.nearestModelName;
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
    private _environment?: { [key: string]: string }; 
    public get environment() {
        return this.getStringMapAttribute('environment');
    }
    public set environment(value: { [key: string]: string }) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // framework - computed: true, optional: true, required: false
    private _framework?: string; 
    public get framework() {
        return this.getStringAttribute('framework');
    }
    public set framework(value: string) {
        this._framework = value;
    }
    public resetFramework() {
        this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkInput() {
        return this._framework;
    }

    // framework_version - computed: true, optional: true, required: false
    private _frameworkVersion?: string; 
    public get frameworkVersion() {
        return this.getStringAttribute('framework_version');
    }
    public set frameworkVersion(value: string) {
        this._frameworkVersion = value;
    }
    public resetFrameworkVersion() {
        this._frameworkVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkVersionInput() {
        return this._frameworkVersion;
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

    // image_digest - computed: true, optional: true, required: false
    private _imageDigest?: string; 
    public get imageDigest() {
        return this.getStringAttribute('image_digest');
    }
    public set imageDigest(value: string) {
        this._imageDigest = value;
    }
    public resetImageDigest() {
        this._imageDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageDigestInput() {
        return this._imageDigest;
    }

    // is_checkpoint - computed: true, optional: true, required: false
    private _isCheckpoint?: boolean | cdktn.IResolvable; 
    public get isCheckpoint() {
        return this.getBooleanAttribute('is_checkpoint');
    }
    public set isCheckpoint(value: boolean | cdktn.IResolvable) {
        this._isCheckpoint = value;
    }
    public resetIsCheckpoint() {
        this._isCheckpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isCheckpointInput() {
        return this._isCheckpoint;
    }

    // model_input - computed: true, optional: true, required: false
    private _modelInput = new ModelInputPropertyOutputReference(this, "model_input");
    public get modelInput() {
        return this._modelInput;
    }
    public putModelInput(value: ModelInputProperty) {
        this._modelInput.internalValue = value;
    }
    public resetModelInput() {
        this._modelInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInputInput() {
        return this._modelInput.internalValue;
    }

    // nearest_model_name - computed: true, optional: true, required: false
    private _nearestModelName?: string; 
    public get nearestModelName() {
        return this.getStringAttribute('nearest_model_name');
    }
    public set nearestModelName(value: string) {
        this._nearestModelName = value;
    }
    public resetNearestModelName() {
        this._nearestModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nearestModelNameInput() {
        return this._nearestModelName;
    }
}

export class ModelPackageContainerDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : ModelPackageContainerDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): ModelPackageContainerDefinitionPropertyOutputReference {
        return new ModelPackageContainerDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InferenceSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#containers CcAlgorithm#containers}
    */
    readonly containers?: ModelPackageContainerDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_content_types CcAlgorithm#supported_content_types}
    */
    readonly supportedContentTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types CcAlgorithm#supported_realtime_inference_instance_types}
    */
    readonly supportedRealtimeInferenceInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_response_mime_types CcAlgorithm#supported_response_mime_types}
    */
    readonly supportedResponseMimeTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types CcAlgorithm#supported_transform_instance_types}
    */
    readonly supportedTransformInstanceTypes?: string[];
}
export class InferenceSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containers = this._containers?.internalValue;
        }
        if (this._supportedContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedContentTypes = this._supportedContentTypes;
        }
        if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
        }
        if (this._supportedResponseMimeTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
        }
        if (this._supportedTransformInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containers.internalValue = undefined;
            this._supportedContentTypes = undefined;
            this._supportedRealtimeInferenceInstanceTypes = undefined;
            this._supportedResponseMimeTypes = undefined;
            this._supportedTransformInstanceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containers.internalValue = value.containers;
            this._supportedContentTypes = value.supportedContentTypes;
            this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
            this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
            this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
        }
    }

    // containers - computed: true, optional: true, required: false
    private _containers = new ModelPackageContainerDefinitionPropertyList(this, "containers", false);
    public get containers() {
        return this._containers;
    }
    public putContainers(value: ModelPackageContainerDefinitionProperty[] | cdktn.IResolvable) {
        this._containers.internalValue = value;
    }
    public resetContainers() {
        this._containers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containersInput() {
        return this._containers.internalValue;
    }

    // supported_content_types - computed: true, optional: true, required: false
    private _supportedContentTypes?: string[]; 
    public get supportedContentTypes() {
        return this.getListAttribute('supported_content_types');
    }
    public set supportedContentTypes(value: string[]) {
        this._supportedContentTypes = value;
    }
    public resetSupportedContentTypes() {
        this._supportedContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedContentTypesInput() {
        return this._supportedContentTypes;
    }

    // supported_realtime_inference_instance_types - computed: true, optional: true, required: false
    private _supportedRealtimeInferenceInstanceTypes?: string[]; 
    public get supportedRealtimeInferenceInstanceTypes() {
        return this.getListAttribute('supported_realtime_inference_instance_types');
    }
    public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
        this._supportedRealtimeInferenceInstanceTypes = value;
    }
    public resetSupportedRealtimeInferenceInstanceTypes() {
        this._supportedRealtimeInferenceInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedRealtimeInferenceInstanceTypesInput() {
        return this._supportedRealtimeInferenceInstanceTypes;
    }

    // supported_response_mime_types - computed: true, optional: true, required: false
    private _supportedResponseMimeTypes?: string[]; 
    public get supportedResponseMimeTypes() {
        return this.getListAttribute('supported_response_mime_types');
    }
    public set supportedResponseMimeTypes(value: string[]) {
        this._supportedResponseMimeTypes = value;
    }
    public resetSupportedResponseMimeTypes() {
        this._supportedResponseMimeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedResponseMimeTypesInput() {
        return this._supportedResponseMimeTypes;
    }

    // supported_transform_instance_types - computed: true, optional: true, required: false
    private _supportedTransformInstanceTypes?: string[]; 
    public get supportedTransformInstanceTypes() {
        return this.getListAttribute('supported_transform_instance_types');
    }
    public set supportedTransformInstanceTypes(value: string[]) {
        this._supportedTransformInstanceTypes = value;
    }
    public resetSupportedTransformInstanceTypes() {
        this._supportedTransformInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedTransformInstanceTypesInput() {
        return this._supportedTransformInstanceTypes;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#key CcAlgorithm#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#value CcAlgorithm#value}
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
export interface MetricDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#name CcAlgorithm#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#regex CcAlgorithm#regex}
    */
    readonly regex?: string;
}
export class MetricDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._regex !== undefined) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._regex = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._regex = value.regex;
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

    // regex - computed: true, optional: true, required: false
    private _regex?: string; 
    public get regex() {
        return this.getStringAttribute('regex');
    }
    public set regex(value: string) {
        this._regex = value;
    }
    public resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
        return this._regex;
    }
}

export class MetricDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDefinitionProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDefinitionPropertyOutputReference {
        return new MetricDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CategoricalParameterRangeSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#values CcAlgorithm#values}
    */
    readonly values?: string[];
}
export class CategoricalParameterRangeSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CategoricalParameterRangeSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CategoricalParameterRangeSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._values = value.values;
        }
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}
export interface ContinuousParameterRangeSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#max_value CcAlgorithm#max_value}
    */
    readonly maxValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#min_value CcAlgorithm#min_value}
    */
    readonly minValue?: string;
}
export class ContinuousParameterRangeSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContinuousParameterRangeSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContinuousParameterRangeSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: string; 
    public get maxValue() {
        return this.getStringAttribute('max_value');
    }
    public set maxValue(value: string) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: string; 
    public get minValue() {
        return this.getStringAttribute('min_value');
    }
    public set minValue(value: string) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface IntegerParameterRangeSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#max_value CcAlgorithm#max_value}
    */
    readonly maxValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#min_value CcAlgorithm#min_value}
    */
    readonly minValue?: string;
}
export class IntegerParameterRangeSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntegerParameterRangeSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegerParameterRangeSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }

    // max_value - computed: true, optional: true, required: false
    private _maxValue?: string; 
    public get maxValue() {
        return this.getStringAttribute('max_value');
    }
    public set maxValue(value: string) {
        this._maxValue = value;
    }
    public resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxValueInput() {
        return this._maxValue;
    }

    // min_value - computed: true, optional: true, required: false
    private _minValue?: string; 
    public get minValue() {
        return this.getStringAttribute('min_value');
    }
    public set minValue(value: string) {
        this._minValue = value;
    }
    public resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minValueInput() {
        return this._minValue;
    }
}
export interface ParameterRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification CcAlgorithm#categorical_parameter_range_specification}
    */
    readonly categoricalParameterRangeSpecification?: CategoricalParameterRangeSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification CcAlgorithm#continuous_parameter_range_specification}
    */
    readonly continuousParameterRangeSpecification?: ContinuousParameterRangeSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification CcAlgorithm#integer_parameter_range_specification}
    */
    readonly integerParameterRangeSpecification?: IntegerParameterRangeSpecificationProperty;
}
export class ParameterRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParameterRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._categoricalParameterRangeSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.categoricalParameterRangeSpecification = this._categoricalParameterRangeSpecification?.internalValue;
        }
        if (this._continuousParameterRangeSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.continuousParameterRangeSpecification = this._continuousParameterRangeSpecification?.internalValue;
        }
        if (this._integerParameterRangeSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerParameterRangeSpecification = this._integerParameterRangeSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._categoricalParameterRangeSpecification.internalValue = undefined;
            this._continuousParameterRangeSpecification.internalValue = undefined;
            this._integerParameterRangeSpecification.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._categoricalParameterRangeSpecification.internalValue = value.categoricalParameterRangeSpecification;
            this._continuousParameterRangeSpecification.internalValue = value.continuousParameterRangeSpecification;
            this._integerParameterRangeSpecification.internalValue = value.integerParameterRangeSpecification;
        }
    }

    // categorical_parameter_range_specification - computed: true, optional: true, required: false
    private _categoricalParameterRangeSpecification = new CategoricalParameterRangeSpecificationPropertyOutputReference(this, "categorical_parameter_range_specification");
    public get categoricalParameterRangeSpecification() {
        return this._categoricalParameterRangeSpecification;
    }
    public putCategoricalParameterRangeSpecification(value: CategoricalParameterRangeSpecificationProperty) {
        this._categoricalParameterRangeSpecification.internalValue = value;
    }
    public resetCategoricalParameterRangeSpecification() {
        this._categoricalParameterRangeSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoricalParameterRangeSpecificationInput() {
        return this._categoricalParameterRangeSpecification.internalValue;
    }

    // continuous_parameter_range_specification - computed: true, optional: true, required: false
    private _continuousParameterRangeSpecification = new ContinuousParameterRangeSpecificationPropertyOutputReference(this, "continuous_parameter_range_specification");
    public get continuousParameterRangeSpecification() {
        return this._continuousParameterRangeSpecification;
    }
    public putContinuousParameterRangeSpecification(value: ContinuousParameterRangeSpecificationProperty) {
        this._continuousParameterRangeSpecification.internalValue = value;
    }
    public resetContinuousParameterRangeSpecification() {
        this._continuousParameterRangeSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get continuousParameterRangeSpecificationInput() {
        return this._continuousParameterRangeSpecification.internalValue;
    }

    // integer_parameter_range_specification - computed: true, optional: true, required: false
    private _integerParameterRangeSpecification = new IntegerParameterRangeSpecificationPropertyOutputReference(this, "integer_parameter_range_specification");
    public get integerParameterRangeSpecification() {
        return this._integerParameterRangeSpecification;
    }
    public putIntegerParameterRangeSpecification(value: IntegerParameterRangeSpecificationProperty) {
        this._integerParameterRangeSpecification.internalValue = value;
    }
    public resetIntegerParameterRangeSpecification() {
        this._integerParameterRangeSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerParameterRangeSpecificationInput() {
        return this._integerParameterRangeSpecification.internalValue;
    }
}
export interface HyperParameterSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#default_value CcAlgorithm#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#description CcAlgorithm#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#is_required CcAlgorithm#is_required}
    */
    readonly isRequired?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#is_tunable CcAlgorithm#is_tunable}
    */
    readonly isTunable?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#name CcAlgorithm#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#range CcAlgorithm#range}
    */
    readonly range?: ParameterRangeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#type CcAlgorithm#type}
    */
    readonly type?: string;
}
export class HyperParameterSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HyperParameterSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._isRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.isRequired = this._isRequired;
        }
        if (this._isTunable !== undefined) {
            hasAnyValues = true;
            internalValueResult.isTunable = this._isTunable;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._range?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.range = this._range?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HyperParameterSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._description = undefined;
            this._isRequired = undefined;
            this._isTunable = undefined;
            this._name = undefined;
            this._range.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._description = value.description;
            this._isRequired = value.isRequired;
            this._isTunable = value.isTunable;
            this._name = value.name;
            this._range.internalValue = value.range;
            this._type = value.type;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // is_required - computed: true, optional: true, required: false
    private _isRequired?: boolean | cdktn.IResolvable; 
    public get isRequired() {
        return this.getBooleanAttribute('is_required');
    }
    public set isRequired(value: boolean | cdktn.IResolvable) {
        this._isRequired = value;
    }
    public resetIsRequired() {
        this._isRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isRequiredInput() {
        return this._isRequired;
    }

    // is_tunable - computed: true, optional: true, required: false
    private _isTunable?: boolean | cdktn.IResolvable; 
    public get isTunable() {
        return this.getBooleanAttribute('is_tunable');
    }
    public set isTunable(value: boolean | cdktn.IResolvable) {
        this._isTunable = value;
    }
    public resetIsTunable() {
        this._isTunable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isTunableInput() {
        return this._isTunable;
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

    // range - computed: true, optional: true, required: false
    private _range = new ParameterRangePropertyOutputReference(this, "range");
    public get range() {
        return this._range;
    }
    public putRange(value: ParameterRangeProperty) {
        this._range.internalValue = value;
    }
    public resetRange() {
        this._range.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeInput() {
        return this._range.internalValue;
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

export class HyperParameterSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : HyperParameterSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): HyperParameterSpecificationPropertyOutputReference {
        return new HyperParameterSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HyperParameterTuningJobObjectiveProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#metric_name CcAlgorithm#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#type CcAlgorithm#type}
    */
    readonly type?: string;
}
export class HyperParameterTuningJobObjectivePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HyperParameterTuningJobObjectiveProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HyperParameterTuningJobObjectiveProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricName = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricName = value.metricName;
            this._type = value.type;
        }
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
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

export class HyperParameterTuningJobObjectivePropertyList extends cdktn.ComplexList {
    public internalValue? : HyperParameterTuningJobObjectiveProperty[] | cdktn.IResolvable

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
    public get(index: number): HyperParameterTuningJobObjectivePropertyOutputReference {
        return new HyperParameterTuningJobObjectivePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ChannelSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#description CcAlgorithm#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#is_required CcAlgorithm#is_required}
    */
    readonly isRequired?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#name CcAlgorithm#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_compression_types CcAlgorithm#supported_compression_types}
    */
    readonly supportedCompressionTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_content_types CcAlgorithm#supported_content_types}
    */
    readonly supportedContentTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_input_modes CcAlgorithm#supported_input_modes}
    */
    readonly supportedInputModes: string[];
}
export class ChannelSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ChannelSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._isRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.isRequired = this._isRequired;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._supportedCompressionTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedCompressionTypes = this._supportedCompressionTypes;
        }
        if (this._supportedContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedContentTypes = this._supportedContentTypes;
        }
        if (this._supportedInputModes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedInputModes = this._supportedInputModes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChannelSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._isRequired = undefined;
            this._name = undefined;
            this._supportedCompressionTypes = undefined;
            this._supportedContentTypes = undefined;
            this._supportedInputModes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._isRequired = value.isRequired;
            this._name = value.name;
            this._supportedCompressionTypes = value.supportedCompressionTypes;
            this._supportedContentTypes = value.supportedContentTypes;
            this._supportedInputModes = value.supportedInputModes;
        }
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

    // is_required - computed: true, optional: true, required: false
    private _isRequired?: boolean | cdktn.IResolvable; 
    public get isRequired() {
        return this.getBooleanAttribute('is_required');
    }
    public set isRequired(value: boolean | cdktn.IResolvable) {
        this._isRequired = value;
    }
    public resetIsRequired() {
        this._isRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isRequiredInput() {
        return this._isRequired;
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

    // supported_compression_types - computed: true, optional: true, required: false
    private _supportedCompressionTypes?: string[]; 
    public get supportedCompressionTypes() {
        return this.getListAttribute('supported_compression_types');
    }
    public set supportedCompressionTypes(value: string[]) {
        this._supportedCompressionTypes = value;
    }
    public resetSupportedCompressionTypes() {
        this._supportedCompressionTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedCompressionTypesInput() {
        return this._supportedCompressionTypes;
    }

    // supported_content_types - computed: false, optional: false, required: true
    private _supportedContentTypes?: string[]; 
    public get supportedContentTypes() {
        return this.getListAttribute('supported_content_types');
    }
    public set supportedContentTypes(value: string[]) {
        this._supportedContentTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedContentTypesInput() {
        return this._supportedContentTypes;
    }

    // supported_input_modes - computed: false, optional: false, required: true
    private _supportedInputModes?: string[]; 
    public get supportedInputModes() {
        return this.getListAttribute('supported_input_modes');
    }
    public set supportedInputModes(value: string[]) {
        this._supportedInputModes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedInputModesInput() {
        return this._supportedInputModes;
    }
}

export class ChannelSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : ChannelSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): ChannelSpecificationPropertyOutputReference {
        return new ChannelSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TrainingSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#metric_definitions CcAlgorithm#metric_definitions}
    */
    readonly metricDefinitions?: MetricDefinitionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters CcAlgorithm#supported_hyper_parameters}
    */
    readonly supportedHyperParameters?: HyperParameterSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_training_instance_types CcAlgorithm#supported_training_instance_types}
    */
    readonly supportedTrainingInstanceTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics CcAlgorithm#supported_tuning_job_objective_metrics}
    */
    readonly supportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjectiveProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#supports_distributed_training CcAlgorithm#supports_distributed_training}
    */
    readonly supportsDistributedTraining?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#training_channels CcAlgorithm#training_channels}
    */
    readonly trainingChannels: ChannelSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#training_image CcAlgorithm#training_image}
    */
    readonly trainingImage: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_algorithm#training_image_digest CcAlgorithm#training_image_digest}
    */
    readonly trainingImageDigest?: string;
}
export class TrainingSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrainingSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDefinitions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
        }
        if (this._supportedHyperParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedHyperParameters = this._supportedHyperParameters?.internalValue;
        }
        if (this._supportedTrainingInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedTrainingInstanceTypes = this._supportedTrainingInstanceTypes;
        }
        if (this._supportedTuningJobObjectiveMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedTuningJobObjectiveMetrics = this._supportedTuningJobObjectiveMetrics?.internalValue;
        }
        if (this._supportsDistributedTraining !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportsDistributedTraining = this._supportsDistributedTraining;
        }
        if (this._trainingChannels?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingChannels = this._trainingChannels?.internalValue;
        }
        if (this._trainingImage !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingImage = this._trainingImage;
        }
        if (this._trainingImageDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.trainingImageDigest = this._trainingImageDigest;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrainingSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDefinitions.internalValue = undefined;
            this._supportedHyperParameters.internalValue = undefined;
            this._supportedTrainingInstanceTypes = undefined;
            this._supportedTuningJobObjectiveMetrics.internalValue = undefined;
            this._supportsDistributedTraining = undefined;
            this._trainingChannels.internalValue = undefined;
            this._trainingImage = undefined;
            this._trainingImageDigest = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDefinitions.internalValue = value.metricDefinitions;
            this._supportedHyperParameters.internalValue = value.supportedHyperParameters;
            this._supportedTrainingInstanceTypes = value.supportedTrainingInstanceTypes;
            this._supportedTuningJobObjectiveMetrics.internalValue = value.supportedTuningJobObjectiveMetrics;
            this._supportsDistributedTraining = value.supportsDistributedTraining;
            this._trainingChannels.internalValue = value.trainingChannels;
            this._trainingImage = value.trainingImage;
            this._trainingImageDigest = value.trainingImageDigest;
        }
    }

    // metric_definitions - computed: true, optional: true, required: false
    private _metricDefinitions = new MetricDefinitionPropertyList(this, "metric_definitions", false);
    public get metricDefinitions() {
        return this._metricDefinitions;
    }
    public putMetricDefinitions(value: MetricDefinitionProperty[] | cdktn.IResolvable) {
        this._metricDefinitions.internalValue = value;
    }
    public resetMetricDefinitions() {
        this._metricDefinitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDefinitionsInput() {
        return this._metricDefinitions.internalValue;
    }

    // supported_hyper_parameters - computed: true, optional: true, required: false
    private _supportedHyperParameters = new HyperParameterSpecificationPropertyList(this, "supported_hyper_parameters", false);
    public get supportedHyperParameters() {
        return this._supportedHyperParameters;
    }
    public putSupportedHyperParameters(value: HyperParameterSpecificationProperty[] | cdktn.IResolvable) {
        this._supportedHyperParameters.internalValue = value;
    }
    public resetSupportedHyperParameters() {
        this._supportedHyperParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedHyperParametersInput() {
        return this._supportedHyperParameters.internalValue;
    }

    // supported_training_instance_types - computed: false, optional: false, required: true
    private _supportedTrainingInstanceTypes?: string[]; 
    public get supportedTrainingInstanceTypes() {
        return this.getListAttribute('supported_training_instance_types');
    }
    public set supportedTrainingInstanceTypes(value: string[]) {
        this._supportedTrainingInstanceTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedTrainingInstanceTypesInput() {
        return this._supportedTrainingInstanceTypes;
    }

    // supported_tuning_job_objective_metrics - computed: true, optional: true, required: false
    private _supportedTuningJobObjectiveMetrics = new HyperParameterTuningJobObjectivePropertyList(this, "supported_tuning_job_objective_metrics", false);
    public get supportedTuningJobObjectiveMetrics() {
        return this._supportedTuningJobObjectiveMetrics;
    }
    public putSupportedTuningJobObjectiveMetrics(value: HyperParameterTuningJobObjectiveProperty[] | cdktn.IResolvable) {
        this._supportedTuningJobObjectiveMetrics.internalValue = value;
    }
    public resetSupportedTuningJobObjectiveMetrics() {
        this._supportedTuningJobObjectiveMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedTuningJobObjectiveMetricsInput() {
        return this._supportedTuningJobObjectiveMetrics.internalValue;
    }

    // supports_distributed_training - computed: true, optional: true, required: false
    private _supportsDistributedTraining?: boolean | cdktn.IResolvable; 
    public get supportsDistributedTraining() {
        return this.getBooleanAttribute('supports_distributed_training');
    }
    public set supportsDistributedTraining(value: boolean | cdktn.IResolvable) {
        this._supportsDistributedTraining = value;
    }
    public resetSupportsDistributedTraining() {
        this._supportsDistributedTraining = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsDistributedTrainingInput() {
        return this._supportsDistributedTraining;
    }

    // training_channels - computed: false, optional: false, required: true
    private _trainingChannels = new ChannelSpecificationPropertyList(this, "training_channels", false);
    public get trainingChannels() {
        return this._trainingChannels;
    }
    public putTrainingChannels(value: ChannelSpecificationProperty[] | cdktn.IResolvable) {
        this._trainingChannels.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingChannelsInput() {
        return this._trainingChannels.internalValue;
    }

    // training_image - computed: false, optional: false, required: true
    private _trainingImage?: string; 
    public get trainingImage() {
        return this.getStringAttribute('training_image');
    }
    public set trainingImage(value: string) {
        this._trainingImage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingImageInput() {
        return this._trainingImage;
    }

    // training_image_digest - computed: true, optional: true, required: false
    private _trainingImageDigest?: string; 
    public get trainingImageDigest() {
        return this.getStringAttribute('training_image_digest');
    }
    public set trainingImageDigest(value: string) {
        this._trainingImageDigest = value;
    }
    public resetTrainingImageDigest() {
        this._trainingImageDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingImageDigestInput() {
        return this._trainingImageDigest;
    }
}
}
