// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDocumentClassifierProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#data_access_role_arn CcDocumentClassifier#data_access_role_arn}
    */
    readonly dataAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#document_classifier_name CcDocumentClassifier#document_classifier_name}
    */
    readonly documentClassifierName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#input_data_config CcDocumentClassifier#input_data_config}
    */
    readonly inputDataConfig: CcDocumentClassifier.DocumentClassifierInputDataConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#language_code CcDocumentClassifier#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#mode CcDocumentClassifier#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#model_kms_key_id CcDocumentClassifier#model_kms_key_id}
    */
    readonly modelKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#model_policy CcDocumentClassifier#model_policy}
    */
    readonly modelPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#output_data_config CcDocumentClassifier#output_data_config}
    */
    readonly outputDataConfig?: CcDocumentClassifier.DocumentClassifierOutputDataConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#tags CcDocumentClassifier#tags}
    */
    readonly tags?: CcDocumentClassifier.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#version_name CcDocumentClassifier#version_name}
    */
    readonly versionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#volume_kms_key_id CcDocumentClassifier#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#vpc_config CcDocumentClassifier#vpc_config}
    */
    readonly vpcConfig?: CcDocumentClassifier.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier awscc_comprehend_document_classifier}
*/
export class CcDocumentClassifier extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_comprehend_document_classifier";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDocumentClassifier resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDocumentClassifier to import
    * @param importFromId The id of the existing CcDocumentClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDocumentClassifier to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_comprehend_document_classifier", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier awscc_comprehend_document_classifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDocumentClassifierProps
    */
    public constructor(scope: Construct, id: string, config: CcDocumentClassifierProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_comprehend_document_classifier',
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
        this._dataAccessRoleArn = config.dataAccessRoleArn;
        this._documentClassifierName = config.documentClassifierName;
        this._inputDataConfig.internalValue = config.inputDataConfig;
        this._languageCode = config.languageCode;
        this._mode = config.mode;
        this._modelKmsKeyId = config.modelKmsKeyId;
        this._modelPolicy = config.modelPolicy;
        this._outputDataConfig.internalValue = config.outputDataConfig;
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

    // document_classifier_name - computed: false, optional: false, required: true
    private _documentClassifierName?: string; 
    public get documentClassifierName() {
        return this.getStringAttribute('document_classifier_name');
    }
    public set documentClassifierName(value: string) {
        this._documentClassifierName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get documentClassifierNameInput() {
        return this._documentClassifierName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // input_data_config - computed: false, optional: false, required: true
    private _inputDataConfig = new CcDocumentClassifier.DocumentClassifierInputDataConfigPropertyOutputReference(this, "input_data_config");
    public get inputDataConfig() {
        return this._inputDataConfig;
    }
    public putInputDataConfig(value: CcDocumentClassifier.DocumentClassifierInputDataConfigProperty) {
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

    // output_data_config - computed: true, optional: true, required: false
    private _outputDataConfig = new CcDocumentClassifier.DocumentClassifierOutputDataConfigPropertyOutputReference(this, "output_data_config");
    public get outputDataConfig() {
        return this._outputDataConfig;
    }
    public putOutputDataConfig(value: CcDocumentClassifier.DocumentClassifierOutputDataConfigProperty) {
        this._outputDataConfig.internalValue = value;
    }
    public resetOutputDataConfig() {
        this._outputDataConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputDataConfigInput() {
        return this._outputDataConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDocumentClassifier.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDocumentClassifier.TagProperty[] | cdktn.IResolvable) {
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
    private _vpcConfig = new CcDocumentClassifier.VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcDocumentClassifier.VpcConfigProperty) {
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
            document_classifier_name: cdktn.stringToTerraform(this._documentClassifierName),
            input_data_config: ccDocumentClassifierDocumentClassifierInputDataConfigPropertyToTerraform(this._inputDataConfig.internalValue),
            language_code: cdktn.stringToTerraform(this._languageCode),
            mode: cdktn.stringToTerraform(this._mode),
            model_kms_key_id: cdktn.stringToTerraform(this._modelKmsKeyId),
            model_policy: cdktn.stringToTerraform(this._modelPolicy),
            output_data_config: ccDocumentClassifierDocumentClassifierOutputDataConfigPropertyToTerraform(this._outputDataConfig.internalValue),
            tags: cdktn.listMapper(ccDocumentClassifierTagPropertyToTerraform, false)(this._tags.internalValue),
            version_name: cdktn.stringToTerraform(this._versionName),
            volume_kms_key_id: cdktn.stringToTerraform(this._volumeKmsKeyId),
            vpc_config: ccDocumentClassifierVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
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
            document_classifier_name: {
                value: cdktn.stringToHclTerraform(this._documentClassifierName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input_data_config: {
                value: ccDocumentClassifierDocumentClassifierInputDataConfigPropertyToHclTerraform(this._inputDataConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDocumentClassifier.DocumentClassifierInputDataConfigProperty",
            },
            language_code: {
                value: cdktn.stringToHclTerraform(this._languageCode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mode: {
                value: cdktn.stringToHclTerraform(this._mode),
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
            output_data_config: {
                value: ccDocumentClassifierDocumentClassifierOutputDataConfigPropertyToHclTerraform(this._outputDataConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDocumentClassifier.DocumentClassifierOutputDataConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDocumentClassifierTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDocumentClassifier.TagPropertyList",
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
                value: ccDocumentClassifierVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDocumentClassifier.VpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDocumentClassifierAugmentedManifestsListItemPropertyToTerraform(struct?: CcDocumentClassifier.AugmentedManifestsListItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
        split: cdktn.stringToTerraform(struct!.split),
    }
}


export function ccDocumentClassifierAugmentedManifestsListItemPropertyToHclTerraform(struct?: CcDocumentClassifier.AugmentedManifestsListItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
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


export function ccDocumentClassifierDocumentReaderConfigPropertyToTerraform(struct?: CcDocumentClassifier.DocumentReaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        document_read_action: cdktn.stringToTerraform(struct!.documentReadAction),
        document_read_mode: cdktn.stringToTerraform(struct!.documentReadMode),
        feature_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.featureTypes),
    }
}


export function ccDocumentClassifierDocumentReaderConfigPropertyToHclTerraform(struct?: CcDocumentClassifier.DocumentReaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        document_read_action: {
            value: cdktn.stringToHclTerraform(struct!.documentReadAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        document_read_mode: {
            value: cdktn.stringToHclTerraform(struct!.documentReadMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        feature_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.featureTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDocumentClassifierDocumentClassifierDocumentsPropertyToTerraform(struct?: CcDocumentClassifier.DocumentClassifierDocumentsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
        test_s3_uri: cdktn.stringToTerraform(struct!.testS3Uri),
    }
}


export function ccDocumentClassifierDocumentClassifierDocumentsPropertyToHclTerraform(struct?: CcDocumentClassifier.DocumentClassifierDocumentsProperty | cdktn.IResolvable): any {
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


export function ccDocumentClassifierDocumentClassifierInputDataConfigPropertyToTerraform(struct?: CcDocumentClassifier.DocumentClassifierInputDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        augmented_manifests: cdktn.listMapper(ccDocumentClassifierAugmentedManifestsListItemPropertyToTerraform, false)(struct!.augmentedManifests),
        data_format: cdktn.stringToTerraform(struct!.dataFormat),
        document_reader_config: ccDocumentClassifierDocumentReaderConfigPropertyToTerraform(struct!.documentReaderConfig),
        document_type: cdktn.stringToTerraform(struct!.documentType),
        documents: ccDocumentClassifierDocumentClassifierDocumentsPropertyToTerraform(struct!.documents),
        label_delimiter: cdktn.stringToTerraform(struct!.labelDelimiter),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
        test_s3_uri: cdktn.stringToTerraform(struct!.testS3Uri),
    }
}


export function ccDocumentClassifierDocumentClassifierInputDataConfigPropertyToHclTerraform(struct?: CcDocumentClassifier.DocumentClassifierInputDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        augmented_manifests: {
            value: cdktn.listMapperHcl(ccDocumentClassifierAugmentedManifestsListItemPropertyToHclTerraform, false)(struct!.augmentedManifests),
            isBlock: true,
            type: "set",
            storageClassType: "AugmentedManifestsListItemPropertyList",
        },
        data_format: {
            value: cdktn.stringToHclTerraform(struct!.dataFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        document_reader_config: {
            value: ccDocumentClassifierDocumentReaderConfigPropertyToHclTerraform(struct!.documentReaderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentReaderConfigProperty",
        },
        document_type: {
            value: cdktn.stringToHclTerraform(struct!.documentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        documents: {
            value: ccDocumentClassifierDocumentClassifierDocumentsPropertyToHclTerraform(struct!.documents),
            isBlock: true,
            type: "struct",
            storageClassType: "DocumentClassifierDocumentsProperty",
        },
        label_delimiter: {
            value: cdktn.stringToHclTerraform(struct!.labelDelimiter),
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


export function ccDocumentClassifierDocumentClassifierOutputDataConfigPropertyToTerraform(struct?: CcDocumentClassifier.DocumentClassifierOutputDataConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccDocumentClassifierDocumentClassifierOutputDataConfigPropertyToHclTerraform(struct?: CcDocumentClassifier.DocumentClassifierOutputDataConfigProperty | cdktn.IResolvable): any {
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


export function ccDocumentClassifierTagPropertyToTerraform(struct?: CcDocumentClassifier.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDocumentClassifierTagPropertyToHclTerraform(struct?: CcDocumentClassifier.TagProperty | cdktn.IResolvable): any {
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


export function ccDocumentClassifierVpcConfigPropertyToTerraform(struct?: CcDocumentClassifier.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccDocumentClassifierVpcConfigPropertyToHclTerraform(struct?: CcDocumentClassifier.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDocumentClassifier {
export interface AugmentedManifestsListItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#attribute_names CcDocumentClassifier#attribute_names}
    */
    readonly attributeNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#s3_uri CcDocumentClassifier#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#split CcDocumentClassifier#split}
    */
    readonly split?: string;
}
export class AugmentedManifestsListItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AugmentedManifestsListItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributeNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeNames = this._attributeNames;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        if (this._split !== undefined) {
            hasAnyValues = true;
            internalValueResult.split = this._split;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AugmentedManifestsListItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeNames = undefined;
            this._s3Uri = undefined;
            this._split = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeNames = value.attributeNames;
            this._s3Uri = value.s3Uri;
            this._split = value.split;
        }
    }

    // attribute_names - computed: true, optional: true, required: false
    private _attributeNames?: string[]; 
    public get attributeNames() {
        return cdktn.Fn.tolist(this.getListAttribute('attribute_names'));
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

export class AugmentedManifestsListItemPropertyList extends cdktn.ComplexList {
    public internalValue? : AugmentedManifestsListItemProperty[] | cdktn.IResolvable

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
    public get(index: number): AugmentedManifestsListItemPropertyOutputReference {
        return new AugmentedManifestsListItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DocumentReaderConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#document_read_action CcDocumentClassifier#document_read_action}
    */
    readonly documentReadAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#document_read_mode CcDocumentClassifier#document_read_mode}
    */
    readonly documentReadMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#feature_types CcDocumentClassifier#feature_types}
    */
    readonly featureTypes?: string[];
}
export class DocumentReaderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentReaderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._documentReadAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentReadAction = this._documentReadAction;
        }
        if (this._documentReadMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentReadMode = this._documentReadMode;
        }
        if (this._featureTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureTypes = this._featureTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentReaderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._documentReadAction = undefined;
            this._documentReadMode = undefined;
            this._featureTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._documentReadAction = value.documentReadAction;
            this._documentReadMode = value.documentReadMode;
            this._featureTypes = value.featureTypes;
        }
    }

    // document_read_action - computed: true, optional: true, required: false
    private _documentReadAction?: string; 
    public get documentReadAction() {
        return this.getStringAttribute('document_read_action');
    }
    public set documentReadAction(value: string) {
        this._documentReadAction = value;
    }
    public resetDocumentReadAction() {
        this._documentReadAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentReadActionInput() {
        return this._documentReadAction;
    }

    // document_read_mode - computed: true, optional: true, required: false
    private _documentReadMode?: string; 
    public get documentReadMode() {
        return this.getStringAttribute('document_read_mode');
    }
    public set documentReadMode(value: string) {
        this._documentReadMode = value;
    }
    public resetDocumentReadMode() {
        this._documentReadMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentReadModeInput() {
        return this._documentReadMode;
    }

    // feature_types - computed: true, optional: true, required: false
    private _featureTypes?: string[]; 
    public get featureTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('feature_types'));
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
}
export interface DocumentClassifierDocumentsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#s3_uri CcDocumentClassifier#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#test_s3_uri CcDocumentClassifier#test_s3_uri}
    */
    readonly testS3Uri?: string;
}
export class DocumentClassifierDocumentsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentClassifierDocumentsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DocumentClassifierDocumentsProperty | cdktn.IResolvable | undefined) {
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
export interface DocumentClassifierInputDataConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#augmented_manifests CcDocumentClassifier#augmented_manifests}
    */
    readonly augmentedManifests?: AugmentedManifestsListItemProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#data_format CcDocumentClassifier#data_format}
    */
    readonly dataFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#document_reader_config CcDocumentClassifier#document_reader_config}
    */
    readonly documentReaderConfig?: DocumentReaderConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#document_type CcDocumentClassifier#document_type}
    */
    readonly documentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#documents CcDocumentClassifier#documents}
    */
    readonly documents?: DocumentClassifierDocumentsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#label_delimiter CcDocumentClassifier#label_delimiter}
    */
    readonly labelDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#s3_uri CcDocumentClassifier#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#test_s3_uri CcDocumentClassifier#test_s3_uri}
    */
    readonly testS3Uri?: string;
}
export class DocumentClassifierInputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentClassifierInputDataConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._augmentedManifests?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.augmentedManifests = this._augmentedManifests?.internalValue;
        }
        if (this._dataFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFormat = this._dataFormat;
        }
        if (this._documentReaderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentReaderConfig = this._documentReaderConfig?.internalValue;
        }
        if (this._documentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentType = this._documentType;
        }
        if (this._documents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.documents = this._documents?.internalValue;
        }
        if (this._labelDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelDelimiter = this._labelDelimiter;
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

    public set internalValue(value: DocumentClassifierInputDataConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._augmentedManifests.internalValue = undefined;
            this._dataFormat = undefined;
            this._documentReaderConfig.internalValue = undefined;
            this._documentType = undefined;
            this._documents.internalValue = undefined;
            this._labelDelimiter = undefined;
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
            this._augmentedManifests.internalValue = value.augmentedManifests;
            this._dataFormat = value.dataFormat;
            this._documentReaderConfig.internalValue = value.documentReaderConfig;
            this._documentType = value.documentType;
            this._documents.internalValue = value.documents;
            this._labelDelimiter = value.labelDelimiter;
            this._s3Uri = value.s3Uri;
            this._testS3Uri = value.testS3Uri;
        }
    }

    // augmented_manifests - computed: true, optional: true, required: false
    private _augmentedManifests = new AugmentedManifestsListItemPropertyList(this, "augmented_manifests", true);
    public get augmentedManifests() {
        return this._augmentedManifests;
    }
    public putAugmentedManifests(value: AugmentedManifestsListItemProperty[] | cdktn.IResolvable) {
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

    // document_reader_config - computed: true, optional: true, required: false
    private _documentReaderConfig = new DocumentReaderConfigPropertyOutputReference(this, "document_reader_config");
    public get documentReaderConfig() {
        return this._documentReaderConfig;
    }
    public putDocumentReaderConfig(value: DocumentReaderConfigProperty) {
        this._documentReaderConfig.internalValue = value;
    }
    public resetDocumentReaderConfig() {
        this._documentReaderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentReaderConfigInput() {
        return this._documentReaderConfig.internalValue;
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

    // documents - computed: true, optional: true, required: false
    private _documents = new DocumentClassifierDocumentsPropertyOutputReference(this, "documents");
    public get documents() {
        return this._documents;
    }
    public putDocuments(value: DocumentClassifierDocumentsProperty) {
        this._documents.internalValue = value;
    }
    public resetDocuments() {
        this._documents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentsInput() {
        return this._documents.internalValue;
    }

    // label_delimiter - computed: true, optional: true, required: false
    private _labelDelimiter?: string; 
    public get labelDelimiter() {
        return this.getStringAttribute('label_delimiter');
    }
    public set labelDelimiter(value: string) {
        this._labelDelimiter = value;
    }
    public resetLabelDelimiter() {
        this._labelDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelDelimiterInput() {
        return this._labelDelimiter;
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
export interface DocumentClassifierOutputDataConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#kms_key_id CcDocumentClassifier#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#s3_uri CcDocumentClassifier#s3_uri}
    */
    readonly s3Uri?: string;
}
export class DocumentClassifierOutputDataConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentClassifierOutputDataConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentClassifierOutputDataConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._s3Uri = value.s3Uri;
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#key CcDocumentClassifier#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#value CcDocumentClassifier#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#security_group_ids CcDocumentClassifier#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/comprehend_document_classifier#subnets CcDocumentClassifier#subnets}
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
        return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
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
        return cdktn.Fn.tolist(this.getListAttribute('subnets'));
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
