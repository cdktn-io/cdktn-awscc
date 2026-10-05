// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEntityRecognizerProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn CcEntityRecognizer#data_access_role_arn}
    */
    readonly dataAccessRoleArn: string;
    /**
    * Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#input_data_config CcEntityRecognizer#input_data_config}
    */
    readonly inputDataConfig: CcEntityRecognizer.InputDataConfigProperty;
    /**
    * The language of the input documents. All documents must be in the same language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#language_code CcEntityRecognizer#language_code}
    */
    readonly languageCode: string;
    /**
    * ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id CcEntityRecognizer#model_kms_key_id}
    */
    readonly modelKmsKeyId?: string;
    /**
    * The JSON resource-based policy to attach to your custom entity recognizer model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#model_policy CcEntityRecognizer#model_policy}
    */
    readonly modelPolicy?: string;
    /**
    * The name given to the entity recognizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#recognizer_name CcEntityRecognizer#recognizer_name}
    */
    readonly recognizerName: string;
    /**
    * Tags to associate with the entity recognizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#tags CcEntityRecognizer#tags}
    */
    readonly tags?: CcEntityRecognizer.TagsProperty[] | cdktn.IResolvable;
    /**
    * The version name given to the entity recognizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#version_name CcEntityRecognizer#version_name}
    */
    readonly versionName?: string;
    /**
    * ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id CcEntityRecognizer#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#vpc_config CcEntityRecognizer#vpc_config}
    */
    readonly vpcConfig?: CcEntityRecognizer.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}
*/
export class CcEntityRecognizer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_comprehend_entity_recognizer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEntityRecognizer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEntityRecognizer to import
    * @param importFromId The id of the existing CcEntityRecognizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEntityRecognizer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_comprehend_entity_recognizer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEntityRecognizerProps
    */
    public constructor(scope: Construct, id: string, config: CcEntityRecognizerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_comprehend_entity_recognizer',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dataAccessRoleArn = config.dataAccessRoleArn;
        this._inputDataConfig.internalValue = config.inputDataConfig;
        this._languageCode = config.languageCode;
        this._modelKmsKeyId = config.modelKmsKeyId;
        this._modelPolicy = config.modelPolicy;
        this._recognizerName = config.recognizerName;
        this._tags.internalValue = config.tags;
        this._versionName = config.versionName;
        this._volumeKmsKeyId = config.volumeKmsKeyId;
        this._vpcConfig.internalValue = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // data_access_role_arn - computed: false, optional: false, required: true
    private _dataAccessRoleArn?: string; 
    public get dataAccessRoleArn() {
        return this.getStringAttribute('data_access_role_arn');
    }
    public set dataAccessRoleArn(value: string) {
        this._dataAccessRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAccessRoleArnInput() {
        return this._dataAccessRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_data_config - computed: false, optional: false, required: true
    private _inputDataConfig = new CcEntityRecognizer.InputDataConfigPropertyOutputReference(this, "input_data_config");
    public get inputDataConfig() {
        return this._inputDataConfig;
    }
    public putInputDataConfig(value: CcEntityRecognizer.InputDataConfigProperty) {
        this._inputDataConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputDataConfigInput() {
        return this._inputDataConfig.internalValue;
    }

    // language_code - computed: false, optional: false, required: true
    private _languageCode?: string; 
    public get languageCode() {
        return this.getStringAttribute('language_code');
    }
    public set languageCode(value: string) {
        this._languageCode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get languageCodeInput() {
        return this._languageCode;
    }

    // model_kms_key_id - computed: true, optional: true, required: false
    private _modelKmsKeyId?: string; 
    public get modelKmsKeyId() {
        return this.getStringAttribute('model_kms_key_id');
    }
    public set modelKmsKeyId(value: string) {
        this._modelKmsKeyId = value;
    }
    public resetModelKmsKeyId() {
        this._modelKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelKmsKeyIdInput() {
        return this._modelKmsKeyId;
    }

    // model_policy - computed: true, optional: true, required: false
    private _modelPolicy?: string; 
    public get modelPolicy() {
        return this.getStringAttribute('model_policy');
    }
    public set modelPolicy(value: string) {
        this._modelPolicy = value;
    }
    public resetModelPolicy() {
        this._modelPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPolicyInput() {
        return this._modelPolicy;
    }

    // recognizer_name - computed: false, optional: false, required: true
    private _recognizerName?: string; 
    public get recognizerName() {
        return this.getStringAttribute('recognizer_name');
    }
    public set recognizerName(value: string) {
        this._recognizerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recognizerNameInput() {
        return this._recognizerName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEntityRecognizer.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEntityRecognizer.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // version_name - computed: true, optional: true, required: false
    private _versionName?: string; 
    public get versionName() {
        return this.getStringAttribute('version_name');
    }
    public set versionName(value: string) {
        this._versionName = value;
    }
    public resetVersionName() {
        this._versionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionNameInput() {
        return this._versionName;
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

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new CcEntityRecognizer.VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcEntityRecognizer.VpcConfigProperty) {
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
            data_access_role_arn: cdktn.stringToTerraform(this._dataAccessRoleArn),
            input_data_config: ccEntityRecognizerInputDataConfigPropertyToTerraform(this._inputDataConfig.internalValue),
            language_code: cdktn.stringToTerraform(this._languageCode),
            model_kms_key_id: cdktn.stringToTerraform(this._modelKmsKeyId),
            model_policy: cdktn.stringToTerraform(this._modelPolicy),
            recognizer_name: cdktn.stringToTerraform(this._recognizerName),
            tags: cdktn.listMapper(ccEntityRecognizerTagsPropertyToTerraform, false)(this._tags.internalValue),
            version_name: cdktn.stringToTerraform(this._versionName),
            volume_kms_key_id: cdktn.stringToTerraform(this._volumeKmsKeyId),
            vpc_config: ccEntityRecognizerVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_access_role_arn: {
                value: cdktn.stringToHclTerraform(this._dataAccessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input_data_config: {
                value: ccEntityRecognizerInputDataConfigPropertyToHclTerraform(this._inputDataConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEntityRecognizer.InputDataConfigProperty",
            },
            language_code: {
                value: cdktn.stringToHclTerraform(this._languageCode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_kms_key_id: {
                value: cdktn.stringToHclTerraform(this._modelKmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_policy: {
                value: cdktn.stringToHclTerraform(this._modelPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recognizer_name: {
                value: cdktn.stringToHclTerraform(this._recognizerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEntityRecognizerTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEntityRecognizer.TagsPropertyList",
            },
            version_name: {
                value: cdktn.stringToHclTerraform(this._versionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            volume_kms_key_id: {
                value: cdktn.stringToHclTerraform(this._volumeKmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_config: {
                value: ccEntityRecognizerVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEntityRecognizer.VpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEntityRecognizerAnnotationsPropertyToTerraform(struct?: CcEntityRecognizer.AnnotationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
        test_s3_uri: cdktn.stringToTerraform(struct!.testS3Uri),
    }
}


export function ccEntityRecognizerAnnotationsPropertyToHclTerraform(struct?: CcEntityRecognizer.AnnotationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        test_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.testS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEntityRecognizerAugmentedManifestsPropertyToTerraform(struct?: CcEntityRecognizer.AugmentedManifestsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        annotation_data_s3_uri: cdktn.stringToTerraform(struct!.annotationDataS3Uri),
        attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
        document_type: cdktn.stringToTerraform(struct!.documentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
        source_documents_s3_uri: cdktn.stringToTerraform(struct!.sourceDocumentsS3Uri),
        split: cdktn.stringToTerraform(struct!.split),
    }
}


export function ccEntityRecognizerAugmentedManifestsPropertyToHclTerraform(struct?: CcEntityRecognizer.AugmentedManifestsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        annotation_data_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.annotationDataS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attribute_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        document_type: {
            value: cdktn.stringToHclTerraform(struct!.documentType),
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
        source_documents_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.sourceDocumentsS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        split: {
            value: cdktn.stringToHclTerraform(struct!.split),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEntityRecognizerDocumentsPropertyToTerraform(struct?: CcEntityRecognizer.DocumentsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_format: cdktn.stringToTerraform(struct!.inputFormat),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
        test_s3_uri: cdktn.stringToTerraform(struct!.testS3Uri),
    }
}


export function ccEntityRecognizerDocumentsPropertyToHclTerraform(struct?: CcEntityRecognizer.DocumentsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_format: {
            value: cdktn.stringToHclTerraform(struct!.inputFormat),
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
        test_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.testS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEntityRecognizerEntityListPropertyToTerraform(struct?: CcEntityRecognizer.EntityListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccEntityRecognizerEntityListPropertyToHclTerraform(struct?: CcEntityRecognizer.EntityListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccEntityRecognizerEntityTypesPropertyToTerraform(struct?: CcEntityRecognizer.EntityTypesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccEntityRecognizerEntityTypesPropertyToHclTerraform(struct?: CcEntityRecognizer.EntityTypesProperty | cdktn.IResolvable): any {
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


export function ccEntityRecognizerInputDataConfigPropertyToTerraform(struct?: CcEntityRecognizer.InputDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        annotations: ccEntityRecognizerAnnotationsPropertyToTerraform(struct!.annotations),
        augmented_manifests: cdktn.listMapper(ccEntityRecognizerAugmentedManifestsPropertyToTerraform, false)(struct!.augmentedManifests),
        data_format: cdktn.stringToTerraform(struct!.dataFormat),
        documents: ccEntityRecognizerDocumentsPropertyToTerraform(struct!.documents),
        entity_list: ccEntityRecognizerEntityListPropertyToTerraform(struct!.entityList),
        entity_types: cdktn.listMapper(ccEntityRecognizerEntityTypesPropertyToTerraform, false)(struct!.entityTypes),
    }
}


export function ccEntityRecognizerInputDataConfigPropertyToHclTerraform(struct?: CcEntityRecognizer.InputDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        annotations: {
            value: ccEntityRecognizerAnnotationsPropertyToHclTerraform(struct!.annotations),
            isBlock: true,
            type: "struct",
            storageClassType: "AnnotationsProperty",
        },
        augmented_manifests: {
            value: cdktn.listMapperHcl(ccEntityRecognizerAugmentedManifestsPropertyToHclTerraform, false)(struct!.augmentedManifests),
            isBlock: true,
            type: "list",
            storageClassType: "AugmentedManifestsPropertyList",
        },
        data_format: {
            value: cdktn.stringToHclTerraform(struct!.dataFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        documents: {
            value: ccEntityRecognizerDocumentsPropertyToHclTerraform(struct!.documents),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentsProperty",
        },
        entity_list: {
            value: ccEntityRecognizerEntityListPropertyToHclTerraform(struct!.entityList),
            isBlock: true,
            type: "struct",
            storageClassType: "EntityListProperty",
        },
        entity_types: {
            value: cdktn.listMapperHcl(ccEntityRecognizerEntityTypesPropertyToHclTerraform, false)(struct!.entityTypes),
            isBlock: true,
            type: "list",
            storageClassType: "EntityTypesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEntityRecognizerTagsPropertyToTerraform(struct?: CcEntityRecognizer.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEntityRecognizerTagsPropertyToHclTerraform(struct?: CcEntityRecognizer.TagsProperty | cdktn.IResolvable): any {
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


export function ccEntityRecognizerVpcConfigPropertyToTerraform(struct?: CcEntityRecognizer.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccEntityRecognizerVpcConfigPropertyToHclTerraform(struct?: CcEntityRecognizer.VpcConfigProperty | cdktn.IResolvable): any {
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


export namespace CcEntityRecognizer {
export interface AnnotationsProperty {
    /**
    * Specifies the Amazon S3 location where the annotations are located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri CcEntityRecognizer#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * Specifies the Amazon S3 location where the test annotations are located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#test_s3_uri CcEntityRecognizer#test_s3_uri}
    */
    readonly testS3Uri?: string;
}
export class AnnotationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnnotationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        if (this._testS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.testS3Uri = this._testS3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnnotationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
            this._testS3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
            this._testS3Uri = value.testS3Uri;
        }
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

    // test_s3_uri - computed: true, optional: true, required: false
    private _testS3Uri?: string; 
    public get testS3Uri() {
        return this.getStringAttribute('test_s3_uri');
    }
    public set testS3Uri(value: string) {
        this._testS3Uri = value;
    }
    public resetTestS3Uri() {
        this._testS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testS3UriInput() {
        return this._testS3Uri;
    }
}
export interface AugmentedManifestsProperty {
    /**
    * The S3 prefix to the annotation files that are referred in the augmented manifest file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#annotation_data_s3_uri CcEntityRecognizer#annotation_data_s3_uri}
    */
    readonly annotationDataS3Uri?: string;
    /**
    * The JSON attribute that contains the annotations for your training documents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#attribute_names CcEntityRecognizer#attribute_names}
    */
    readonly attributeNames?: string[];
    /**
    * The type of augmented manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#document_type CcEntityRecognizer#document_type}
    */
    readonly documentType?: string;
    /**
    * The Amazon S3 location of the augmented manifest file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri CcEntityRecognizer#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#source_documents_s3_uri CcEntityRecognizer#source_documents_s3_uri}
    */
    readonly sourceDocumentsS3Uri?: string;
    /**
    * The purpose of the data you've provided in the augmented manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#split CcEntityRecognizer#split}
    */
    readonly split?: string;
}
export class AugmentedManifestsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AugmentedManifestsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._annotationDataS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.annotationDataS3Uri = this._annotationDataS3Uri;
        }
        if (this._attributeNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeNames = this._attributeNames;
        }
        if (this._documentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentType = this._documentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        if (this._sourceDocumentsS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceDocumentsS3Uri = this._sourceDocumentsS3Uri;
        }
        if (this._split !== undefined) {
            hasAnyValues = true;
            internalValueResult.split = this._split;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AugmentedManifestsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._annotationDataS3Uri = undefined;
            this._attributeNames = undefined;
            this._documentType = undefined;
            this._s3Uri = undefined;
            this._sourceDocumentsS3Uri = undefined;
            this._split = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._annotationDataS3Uri = value.annotationDataS3Uri;
            this._attributeNames = value.attributeNames;
            this._documentType = value.documentType;
            this._s3Uri = value.s3Uri;
            this._sourceDocumentsS3Uri = value.sourceDocumentsS3Uri;
            this._split = value.split;
        }
    }

    // annotation_data_s3_uri - computed: true, optional: true, required: false
    private _annotationDataS3Uri?: string; 
    public get annotationDataS3Uri() {
        return this.getStringAttribute('annotation_data_s3_uri');
    }
    public set annotationDataS3Uri(value: string) {
        this._annotationDataS3Uri = value;
    }
    public resetAnnotationDataS3Uri() {
        this._annotationDataS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get annotationDataS3UriInput() {
        return this._annotationDataS3Uri;
    }

    // attribute_names - computed: true, optional: true, required: false
    private _attributeNames?: string[]; 
    public get attributeNames() {
        return this.getListAttribute('attribute_names');
    }
    public set attributeNames(value: string[]) {
        this._attributeNames = value;
    }
    public resetAttributeNames() {
        this._attributeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeNamesInput() {
        return this._attributeNames;
    }

    // document_type - computed: true, optional: true, required: false
    private _documentType?: string; 
    public get documentType() {
        return this.getStringAttribute('document_type');
    }
    public set documentType(value: string) {
        this._documentType = value;
    }
    public resetDocumentType() {
        this._documentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentTypeInput() {
        return this._documentType;
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

    // source_documents_s3_uri - computed: true, optional: true, required: false
    private _sourceDocumentsS3Uri?: string; 
    public get sourceDocumentsS3Uri() {
        return this.getStringAttribute('source_documents_s3_uri');
    }
    public set sourceDocumentsS3Uri(value: string) {
        this._sourceDocumentsS3Uri = value;
    }
    public resetSourceDocumentsS3Uri() {
        this._sourceDocumentsS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDocumentsS3UriInput() {
        return this._sourceDocumentsS3Uri;
    }

    // split - computed: true, optional: true, required: false
    private _split?: string; 
    public get split() {
        return this.getStringAttribute('split');
    }
    public set split(value: string) {
        this._split = value;
    }
    public resetSplit() {
        this._split = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitInput() {
        return this._split;
    }
}

export class AugmentedManifestsPropertyList extends cdktn.ComplexList {
    public internalValue? : AugmentedManifestsProperty[] | cdktn.IResolvable

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
    public get(index: number): AugmentedManifestsPropertyOutputReference {
        return new AugmentedManifestsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DocumentsProperty {
    /**
    * Specifies how the text in an input file should be processed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#input_format CcEntityRecognizer#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Specifies the Amazon S3 location where the training documents are located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri CcEntityRecognizer#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * Specifies the Amazon S3 location where the test documents are located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#test_s3_uri CcEntityRecognizer#test_s3_uri}
    */
    readonly testS3Uri?: string;
}
export class DocumentsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputFormat = this._inputFormat;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        if (this._testS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.testS3Uri = this._testS3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputFormat = undefined;
            this._s3Uri = undefined;
            this._testS3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputFormat = value.inputFormat;
            this._s3Uri = value.s3Uri;
            this._testS3Uri = value.testS3Uri;
        }
    }

    // input_format - computed: true, optional: true, required: false
    private _inputFormat?: string; 
    public get inputFormat() {
        return this.getStringAttribute('input_format');
    }
    public set inputFormat(value: string) {
        this._inputFormat = value;
    }
    public resetInputFormat() {
        this._inputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputFormatInput() {
        return this._inputFormat;
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

    // test_s3_uri - computed: true, optional: true, required: false
    private _testS3Uri?: string; 
    public get testS3Uri() {
        return this.getStringAttribute('test_s3_uri');
    }
    public set testS3Uri(value: string) {
        this._testS3Uri = value;
    }
    public resetTestS3Uri() {
        this._testS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testS3UriInput() {
        return this._testS3Uri;
    }
}
export interface EntityListProperty {
    /**
    * Specifies the Amazon S3 location where the entity list is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#s3_uri CcEntityRecognizer#s3_uri}
    */
    readonly s3Uri?: string;
}
export class EntityListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EntityListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntityListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
        }
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
export interface EntityTypesProperty {
    /**
    * An entity type within a labeled training dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#type CcEntityRecognizer#type}
    */
    readonly type: string;
}
export class EntityTypesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EntityTypesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EntityTypesProperty | cdktn.IResolvable | undefined) {
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
}

export class EntityTypesPropertyList extends cdktn.ComplexList {
    public internalValue? : EntityTypesProperty[] | cdktn.IResolvable

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
    public get(index: number): EntityTypesPropertyOutputReference {
        return new EntityTypesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InputDataConfigProperty {
    /**
    * The S3 location of the CSV file that annotates your training documents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#annotations CcEntityRecognizer#annotations}
    */
    readonly annotations?: AnnotationsProperty;
    /**
    * A list of augmented manifest files that provide training data for a custom model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#augmented_manifests CcEntityRecognizer#augmented_manifests}
    */
    readonly augmentedManifests?: AugmentedManifestsProperty[] | cdktn.IResolvable;
    /**
    * The format of your training data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#data_format CcEntityRecognizer#data_format}
    */
    readonly dataFormat?: string;
    /**
    * The S3 location of the folder that contains the training documents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#documents CcEntityRecognizer#documents}
    */
    readonly documents?: DocumentsProperty;
    /**
    * The S3 location of the CSV file that has the entity list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#entity_list CcEntityRecognizer#entity_list}
    */
    readonly entityList?: EntityListProperty;
    /**
    * The entity types in the labeled training data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#entity_types CcEntityRecognizer#entity_types}
    */
    readonly entityTypes: EntityTypesProperty[] | cdktn.IResolvable;
}
export class InputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputDataConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._annotations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.annotations = this._annotations?.internalValue;
        }
        if (this._augmentedManifests?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.augmentedManifests = this._augmentedManifests?.internalValue;
        }
        if (this._dataFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFormat = this._dataFormat;
        }
        if (this._documents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.documents = this._documents?.internalValue;
        }
        if (this._entityList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityList = this._entityList?.internalValue;
        }
        if (this._entityTypes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityTypes = this._entityTypes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputDataConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._annotations.internalValue = undefined;
            this._augmentedManifests.internalValue = undefined;
            this._dataFormat = undefined;
            this._documents.internalValue = undefined;
            this._entityList.internalValue = undefined;
            this._entityTypes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._annotations.internalValue = value.annotations;
            this._augmentedManifests.internalValue = value.augmentedManifests;
            this._dataFormat = value.dataFormat;
            this._documents.internalValue = value.documents;
            this._entityList.internalValue = value.entityList;
            this._entityTypes.internalValue = value.entityTypes;
        }
    }

    // annotations - computed: true, optional: true, required: false
    private _annotations = new AnnotationsPropertyOutputReference(this, "annotations");
    public get annotations() {
        return this._annotations;
    }
    public putAnnotations(value: AnnotationsProperty) {
        this._annotations.internalValue = value;
    }
    public resetAnnotations() {
        this._annotations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get annotationsInput() {
        return this._annotations.internalValue;
    }

    // augmented_manifests - computed: true, optional: true, required: false
    private _augmentedManifests = new AugmentedManifestsPropertyList(this, "augmented_manifests", false);
    public get augmentedManifests() {
        return this._augmentedManifests;
    }
    public putAugmentedManifests(value: AugmentedManifestsProperty[] | cdktn.IResolvable) {
        this._augmentedManifests.internalValue = value;
    }
    public resetAugmentedManifests() {
        this._augmentedManifests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get augmentedManifestsInput() {
        return this._augmentedManifests.internalValue;
    }

    // data_format - computed: true, optional: true, required: false
    private _dataFormat?: string; 
    public get dataFormat() {
        return this.getStringAttribute('data_format');
    }
    public set dataFormat(value: string) {
        this._dataFormat = value;
    }
    public resetDataFormat() {
        this._dataFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFormatInput() {
        return this._dataFormat;
    }

    // documents - computed: true, optional: true, required: false
    private _documents = new DocumentsPropertyOutputReference(this, "documents");
    public get documents() {
        return this._documents;
    }
    public putDocuments(value: DocumentsProperty) {
        this._documents.internalValue = value;
    }
    public resetDocuments() {
        this._documents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentsInput() {
        return this._documents.internalValue;
    }

    // entity_list - computed: true, optional: true, required: false
    private _entityList = new EntityListPropertyOutputReference(this, "entity_list");
    public get entityList() {
        return this._entityList;
    }
    public putEntityList(value: EntityListProperty) {
        this._entityList.internalValue = value;
    }
    public resetEntityList() {
        this._entityList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityListInput() {
        return this._entityList.internalValue;
    }

    // entity_types - computed: false, optional: false, required: true
    private _entityTypes = new EntityTypesPropertyList(this, "entity_types", false);
    public get entityTypes() {
        return this._entityTypes;
    }
    public putEntityTypes(value: EntityTypesProperty[] | cdktn.IResolvable) {
        this._entityTypes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityTypesInput() {
        return this._entityTypes.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key of the key-value pair that forms a tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#key CcEntityRecognizer#key}
    */
    readonly key?: string;
    /**
    * The value of the key-value pair that forms a tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#value CcEntityRecognizer#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcConfigProperty {
    /**
    * The ID number for a security group on an instance of your private VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#security_group_ids CcEntityRecognizer#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID for each subnet being used in your private VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer#subnets CcEntityRecognizer#subnets}
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
