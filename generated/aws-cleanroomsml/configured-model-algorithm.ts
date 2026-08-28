// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfiguredModelAlgorithmProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#description CcConfiguredModelAlgorithm#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CcConfiguredModelAlgorithm#inference_container_config}
    */
    readonly inferenceContainerConfig?: CcConfiguredModelAlgorithm.InferenceContainerConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CcConfiguredModelAlgorithm#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CcConfiguredModelAlgorithm#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CcConfiguredModelAlgorithm#role_arn}
    */
    readonly roleArn: string;
    /**
    * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#tags CcConfiguredModelAlgorithm#tags}
    */
    readonly tags?: CcConfiguredModelAlgorithm.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CcConfiguredModelAlgorithm#training_container_config}
    */
    readonly trainingContainerConfig?: CcConfiguredModelAlgorithm.ContainerConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm awscc_cleanroomsml_configured_model_algorithm}
*/
export class CcConfiguredModelAlgorithm extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanroomsml_configured_model_algorithm";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfiguredModelAlgorithm to import
    * @param importFromId The id of the existing CcConfiguredModelAlgorithm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfiguredModelAlgorithm to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanroomsml_configured_model_algorithm", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm awscc_cleanroomsml_configured_model_algorithm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfiguredModelAlgorithmProps
    */
    public constructor(scope: Construct, id: string, config: CcConfiguredModelAlgorithmProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanroomsml_configured_model_algorithm',
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
        this._description = config.description;
        this._inferenceContainerConfig.internalValue = config.inferenceContainerConfig;
        this._kmsKeyArn = config.kmsKeyArn;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._trainingContainerConfig.internalValue = config.trainingContainerConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configured_model_algorithm_arn - computed: true, optional: false, required: false
    public get configuredModelAlgorithmArn() {
        return this.getStringAttribute('configured_model_algorithm_arn');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inference_container_config - computed: true, optional: true, required: false
    private _inferenceContainerConfig = new CcConfiguredModelAlgorithm.InferenceContainerConfigPropertyOutputReference(this, "inference_container_config");
    public get inferenceContainerConfig() {
        return this._inferenceContainerConfig;
    }
    public putInferenceContainerConfig(value: CcConfiguredModelAlgorithm.InferenceContainerConfigProperty) {
        this._inferenceContainerConfig.internalValue = value;
    }
    public resetInferenceContainerConfig() {
        this._inferenceContainerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceContainerConfigInput() {
        return this._inferenceContainerConfig.internalValue;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfiguredModelAlgorithm.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfiguredModelAlgorithm.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // training_container_config - computed: true, optional: true, required: false
    private _trainingContainerConfig = new CcConfiguredModelAlgorithm.ContainerConfigPropertyOutputReference(this, "training_container_config");
    public get trainingContainerConfig() {
        return this._trainingContainerConfig;
    }
    public putTrainingContainerConfig(value: CcConfiguredModelAlgorithm.ContainerConfigProperty) {
        this._trainingContainerConfig.internalValue = value;
    }
    public resetTrainingContainerConfig() {
        this._trainingContainerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trainingContainerConfigInput() {
        return this._trainingContainerConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            inference_container_config: ccConfiguredModelAlgorithmInferenceContainerConfigPropertyToTerraform(this._inferenceContainerConfig.internalValue),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccConfiguredModelAlgorithmTagPropertyToTerraform, false)(this._tags.internalValue),
            training_container_config: ccConfiguredModelAlgorithmContainerConfigPropertyToTerraform(this._trainingContainerConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inference_container_config: {
                value: ccConfiguredModelAlgorithmInferenceContainerConfigPropertyToHclTerraform(this._inferenceContainerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfiguredModelAlgorithm.InferenceContainerConfigProperty",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            tags: {
                value: cdktn.listMapperHcl(ccConfiguredModelAlgorithmTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConfiguredModelAlgorithm.TagPropertyList",
            },
            training_container_config: {
                value: ccConfiguredModelAlgorithmContainerConfigPropertyToHclTerraform(this._trainingContainerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfiguredModelAlgorithm.ContainerConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfiguredModelAlgorithmInferenceContainerConfigPropertyToTerraform(struct?: CcConfiguredModelAlgorithm.InferenceContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_uri: cdktn.stringToTerraform(struct!.imageUri),
    }
}


export function ccConfiguredModelAlgorithmInferenceContainerConfigPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithm.InferenceContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_uri: {
            value: cdktn.stringToHclTerraform(struct!.imageUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredModelAlgorithmTagPropertyToTerraform(struct?: CcConfiguredModelAlgorithm.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfiguredModelAlgorithmTagPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithm.TagProperty | cdktn.IResolvable): any {
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


export function ccConfiguredModelAlgorithmMetricDefinitionPropertyToTerraform(struct?: CcConfiguredModelAlgorithm.MetricDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        regex: cdktn.stringToTerraform(struct!.regex),
    }
}


export function ccConfiguredModelAlgorithmMetricDefinitionPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithm.MetricDefinitionProperty | cdktn.IResolvable): any {
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


export function ccConfiguredModelAlgorithmContainerConfigPropertyToTerraform(struct?: CcConfiguredModelAlgorithm.ContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.arguments),
        entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entrypoint),
        image_uri: cdktn.stringToTerraform(struct!.imageUri),
        metric_definitions: cdktn.listMapper(ccConfiguredModelAlgorithmMetricDefinitionPropertyToTerraform, false)(struct!.metricDefinitions),
    }
}


export function ccConfiguredModelAlgorithmContainerConfigPropertyToHclTerraform(struct?: CcConfiguredModelAlgorithm.ContainerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arguments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.arguments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        entrypoint: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entrypoint),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        image_uri: {
            value: cdktn.stringToHclTerraform(struct!.imageUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_definitions: {
            value: cdktn.listMapperHcl(ccConfiguredModelAlgorithmMetricDefinitionPropertyToHclTerraform, false)(struct!.metricDefinitions),
            isBlock: true,
            type: "list",
            storageClassType: "MetricDefinitionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConfiguredModelAlgorithm {
export interface InferenceContainerConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CcConfiguredModelAlgorithm#image_uri}
    */
    readonly imageUri?: string;
}
export class InferenceContainerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceContainerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUri = this._imageUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceContainerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageUri = value.imageUri;
        }
    }

    // image_uri - computed: true, optional: true, required: false
    private _imageUri?: string; 
    public get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string) {
        this._imageUri = value;
    }
    public resetImageUri() {
        this._imageUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
        return this._imageUri;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#key CcConfiguredModelAlgorithm#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#value CcConfiguredModelAlgorithm#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CcConfiguredModelAlgorithm#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#regex CcConfiguredModelAlgorithm#regex}
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
export interface ContainerConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CcConfiguredModelAlgorithm#arguments}
    */
    readonly arguments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CcConfiguredModelAlgorithm#entrypoint}
    */
    readonly entrypoint?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CcConfiguredModelAlgorithm#image_uri}
    */
    readonly imageUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CcConfiguredModelAlgorithm#metric_definitions}
    */
    readonly metricDefinitions?: MetricDefinitionProperty[] | cdktn.IResolvable;
}
export class ContainerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arguments !== undefined) {
            hasAnyValues = true;
            internalValueResult.arguments = this._arguments;
        }
        if (this._entrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entrypoint = this._entrypoint;
        }
        if (this._imageUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUri = this._imageUri;
        }
        if (this._metricDefinitions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arguments = undefined;
            this._entrypoint = undefined;
            this._imageUri = undefined;
            this._metricDefinitions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arguments = value.arguments;
            this._entrypoint = value.entrypoint;
            this._imageUri = value.imageUri;
            this._metricDefinitions.internalValue = value.metricDefinitions;
        }
    }

    // arguments - computed: true, optional: true, required: false
    private _arguments?: string[]; 
    public get arguments() {
        return this.getListAttribute('arguments');
    }
    public set arguments(value: string[]) {
        this._arguments = value;
    }
    public resetArguments() {
        this._arguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get argumentsInput() {
        return this._arguments;
    }

    // entrypoint - computed: true, optional: true, required: false
    private _entrypoint?: string[]; 
    public get entrypoint() {
        return this.getListAttribute('entrypoint');
    }
    public set entrypoint(value: string[]) {
        this._entrypoint = value;
    }
    public resetEntrypoint() {
        this._entrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entrypointInput() {
        return this._entrypoint;
    }

    // image_uri - computed: true, optional: true, required: false
    private _imageUri?: string; 
    public get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string) {
        this._imageUri = value;
    }
    public resetImageUri() {
        this._imageUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
        return this._imageUri;
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
}
}
