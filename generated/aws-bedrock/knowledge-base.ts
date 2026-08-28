// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKnowledgeBaseProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#description CcKnowledgeBase#description}
    */
    readonly description?: string;
    /**
    * Contains details about the embeddings model used for the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#knowledge_base_configuration CcKnowledgeBase#knowledge_base_configuration}
    */
    readonly knowledgeBaseConfiguration: CcKnowledgeBase.KnowledgeBaseConfigurationProperty;
    /**
    * The name of the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#name CcKnowledgeBase#name}
    */
    readonly name: string;
    /**
    * The ARN of the IAM role with permissions to invoke API operations on the knowledge base. The ARN must begin with AmazonBedrockExecutionRoleForKnowledgeBase_
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#role_arn CcKnowledgeBase#role_arn}
    */
    readonly roleArn: string;
    /**
    * The vector store service in which the knowledge base is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#storage_configuration CcKnowledgeBase#storage_configuration}
    */
    readonly storageConfiguration?: CcKnowledgeBase.StorageConfigurationProperty;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#tags CcKnowledgeBase#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base awscc_bedrock_knowledge_base}
*/
export class CcKnowledgeBase extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_knowledge_base";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKnowledgeBase resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKnowledgeBase to import
    * @param importFromId The id of the existing CcKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKnowledgeBase to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_knowledge_base", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base awscc_bedrock_knowledge_base} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKnowledgeBaseProps
    */
    public constructor(scope: Construct, id: string, config: CcKnowledgeBaseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_knowledge_base',
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
        this._description = config.description;
        this._knowledgeBaseConfiguration.internalValue = config.knowledgeBaseConfiguration;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._storageConfiguration.internalValue = config.storageConfiguration;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // failure_reasons - computed: true, optional: false, required: false
    public get failureReasons() {
        return this.getListAttribute('failure_reasons');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // knowledge_base_arn - computed: true, optional: false, required: false
    public get knowledgeBaseArn() {
        return this.getStringAttribute('knowledge_base_arn');
    }

    // knowledge_base_configuration - computed: false, optional: false, required: true
    private _knowledgeBaseConfiguration = new CcKnowledgeBase.KnowledgeBaseConfigurationPropertyOutputReference(this, "knowledge_base_configuration");
    public get knowledgeBaseConfiguration() {
        return this._knowledgeBaseConfiguration;
    }
    public putKnowledgeBaseConfiguration(value: CcKnowledgeBase.KnowledgeBaseConfigurationProperty) {
        this._knowledgeBaseConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseConfigurationInput() {
        return this._knowledgeBaseConfiguration.internalValue;
    }

    // knowledge_base_id - computed: true, optional: false, required: false
    public get knowledgeBaseId() {
        return this.getStringAttribute('knowledge_base_id');
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // storage_configuration - computed: true, optional: true, required: false
    private _storageConfiguration = new CcKnowledgeBase.StorageConfigurationPropertyOutputReference(this, "storage_configuration");
    public get storageConfiguration() {
        return this._storageConfiguration;
    }
    public putStorageConfiguration(value: CcKnowledgeBase.StorageConfigurationProperty) {
        this._storageConfiguration.internalValue = value;
    }
    public resetStorageConfiguration() {
        this._storageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationInput() {
        return this._storageConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            knowledge_base_configuration: ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToTerraform(this._knowledgeBaseConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            storage_configuration: ccKnowledgeBaseStorageConfigurationPropertyToTerraform(this._storageConfiguration.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
            knowledge_base_configuration: {
                value: ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToHclTerraform(this._knowledgeBaseConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.KnowledgeBaseConfigurationProperty",
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
            storage_configuration: {
                value: ccKnowledgeBaseStorageConfigurationPropertyToHclTerraform(this._storageConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcKnowledgeBase.StorageConfigurationProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kendra_index_arn: cdktn.stringToTerraform(struct!.kendraIndexArn),
    }
}


export function ccKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kendra_index_arn: {
            value: cdktn.stringToHclTerraform(struct!.kendraIndexArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseAudioSegmentationConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.AudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
    }
}


export function ccKnowledgeBaseAudioSegmentationConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.AudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fixed_length_duration: {
            value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseAudioConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.AudioConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segmentation_configuration: ccKnowledgeBaseAudioSegmentationConfigurationPropertyToTerraform(struct!.segmentationConfiguration),
    }
}


export function ccKnowledgeBaseAudioConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.AudioConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segmentation_configuration: {
            value: ccKnowledgeBaseAudioSegmentationConfigurationPropertyToHclTerraform(struct!.segmentationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AudioSegmentationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseVideoSegmentationConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.VideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
    }
}


export function ccKnowledgeBaseVideoSegmentationConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.VideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fixed_length_duration: {
            value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseVideoConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.VideoConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segmentation_configuration: ccKnowledgeBaseVideoSegmentationConfigurationPropertyToTerraform(struct!.segmentationConfiguration),
    }
}


export function ccKnowledgeBaseVideoConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.VideoConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segmentation_configuration: {
            value: ccKnowledgeBaseVideoSegmentationConfigurationPropertyToHclTerraform(struct!.segmentationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoSegmentationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseBedrockEmbeddingModelConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.BedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio: cdktn.listMapper(ccKnowledgeBaseAudioConfigurationPropertyToTerraform, false)(struct!.audio),
        dimensions: cdktn.numberToTerraform(struct!.dimensions),
        embedding_data_type: cdktn.stringToTerraform(struct!.embeddingDataType),
        video: cdktn.listMapper(ccKnowledgeBaseVideoConfigurationPropertyToTerraform, false)(struct!.video),
    }
}


export function ccKnowledgeBaseBedrockEmbeddingModelConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.BedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseAudioConfigurationPropertyToHclTerraform, false)(struct!.audio),
            isBlock: true,
            type: "list",
            storageClassType: "AudioConfigurationPropertyList",
        },
        dimensions: {
            value: cdktn.numberToHclTerraform(struct!.dimensions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        embedding_data_type: {
            value: cdktn.stringToHclTerraform(struct!.embeddingDataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        video: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseVideoConfigurationPropertyToHclTerraform, false)(struct!.video),
            isBlock: true,
            type: "list",
            storageClassType: "VideoConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseEmbeddingModelConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.EmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bedrock_embedding_model_configuration: ccKnowledgeBaseBedrockEmbeddingModelConfigurationPropertyToTerraform(struct!.bedrockEmbeddingModelConfiguration),
    }
}


export function ccKnowledgeBaseEmbeddingModelConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.EmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bedrock_embedding_model_configuration: {
            value: ccKnowledgeBaseBedrockEmbeddingModelConfigurationPropertyToHclTerraform(struct!.bedrockEmbeddingModelConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "BedrockEmbeddingModelConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseManagedKnowledgeBaseServerSideEncryptionConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccKnowledgeBaseManagedKnowledgeBaseServerSideEncryptionConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        embedding_model_arn: cdktn.stringToTerraform(struct!.embeddingModelArn),
        embedding_model_configuration: ccKnowledgeBaseEmbeddingModelConfigurationPropertyToTerraform(struct!.embeddingModelConfiguration),
        embedding_model_type: cdktn.stringToTerraform(struct!.embeddingModelType),
        server_side_encryption_configuration: ccKnowledgeBaseManagedKnowledgeBaseServerSideEncryptionConfigurationPropertyToTerraform(struct!.serverSideEncryptionConfiguration),
    }
}


export function ccKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        embedding_model_arn: {
            value: cdktn.stringToHclTerraform(struct!.embeddingModelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        embedding_model_configuration: {
            value: ccKnowledgeBaseEmbeddingModelConfigurationPropertyToHclTerraform(struct!.embeddingModelConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EmbeddingModelConfigurationProperty",
        },
        embedding_model_type: {
            value: cdktn.stringToHclTerraform(struct!.embeddingModelType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_side_encryption_configuration: {
            value: ccKnowledgeBaseManagedKnowledgeBaseServerSideEncryptionConfigurationPropertyToHclTerraform(struct!.serverSideEncryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftProvisionedAuthConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftProvisionedAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_user: cdktn.stringToTerraform(struct!.databaseUser),
        type: cdktn.stringToTerraform(struct!.type),
        username_password_secret_arn: cdktn.stringToTerraform(struct!.usernamePasswordSecretArn),
    }
}


export function ccKnowledgeBaseRedshiftProvisionedAuthConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftProvisionedAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_user: {
            value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
        username_password_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.usernamePasswordSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftProvisionedConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftProvisionedConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_configuration: ccKnowledgeBaseRedshiftProvisionedAuthConfigurationPropertyToTerraform(struct!.authConfiguration),
        cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    }
}


export function ccKnowledgeBaseRedshiftProvisionedConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftProvisionedConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_configuration: {
            value: ccKnowledgeBaseRedshiftProvisionedAuthConfigurationPropertyToHclTerraform(struct!.authConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftProvisionedAuthConfigurationProperty",
        },
        cluster_identifier: {
            value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftServerlessAuthConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftServerlessAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        username_password_secret_arn: cdktn.stringToTerraform(struct!.usernamePasswordSecretArn),
    }
}


export function ccKnowledgeBaseRedshiftServerlessAuthConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftServerlessAuthConfigurationProperty | cdktn.IResolvable): any {
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
        username_password_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.usernamePasswordSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftServerlessConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftServerlessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_configuration: ccKnowledgeBaseRedshiftServerlessAuthConfigurationPropertyToTerraform(struct!.authConfiguration),
        workgroup_arn: cdktn.stringToTerraform(struct!.workgroupArn),
    }
}


export function ccKnowledgeBaseRedshiftServerlessConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftServerlessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_configuration: {
            value: ccKnowledgeBaseRedshiftServerlessAuthConfigurationPropertyToHclTerraform(struct!.authConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftServerlessAuthConfigurationProperty",
        },
        workgroup_arn: {
            value: cdktn.stringToHclTerraform(struct!.workgroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftQueryEngineConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provisioned_configuration: ccKnowledgeBaseRedshiftProvisionedConfigurationPropertyToTerraform(struct!.provisionedConfiguration),
        serverless_configuration: ccKnowledgeBaseRedshiftServerlessConfigurationPropertyToTerraform(struct!.serverlessConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccKnowledgeBaseRedshiftQueryEngineConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provisioned_configuration: {
            value: ccKnowledgeBaseRedshiftProvisionedConfigurationPropertyToHclTerraform(struct!.provisionedConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftProvisionedConfigurationProperty",
        },
        serverless_configuration: {
            value: ccKnowledgeBaseRedshiftServerlessConfigurationPropertyToHclTerraform(struct!.serverlessConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftServerlessConfigurationProperty",
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


export function ccKnowledgeBaseCuratedQueryPropertyToTerraform(struct?: CcKnowledgeBase.CuratedQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        natural_language: cdktn.stringToTerraform(struct!.naturalLanguage),
        sql: cdktn.stringToTerraform(struct!.sql),
    }
}


export function ccKnowledgeBaseCuratedQueryPropertyToHclTerraform(struct?: CcKnowledgeBase.CuratedQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        natural_language: {
            value: cdktn.stringToHclTerraform(struct!.naturalLanguage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql: {
            value: cdktn.stringToHclTerraform(struct!.sql),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseQueryGenerationColumnPropertyToTerraform(struct?: CcKnowledgeBase.QueryGenerationColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        inclusion: cdktn.stringToTerraform(struct!.inclusion),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccKnowledgeBaseQueryGenerationColumnPropertyToHclTerraform(struct?: CcKnowledgeBase.QueryGenerationColumnProperty | cdktn.IResolvable): any {
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
        inclusion: {
            value: cdktn.stringToHclTerraform(struct!.inclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseQueryGenerationTablePropertyToTerraform(struct?: CcKnowledgeBase.QueryGenerationTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        columns: cdktn.listMapper(ccKnowledgeBaseQueryGenerationColumnPropertyToTerraform, false)(struct!.columns),
        description: cdktn.stringToTerraform(struct!.description),
        inclusion: cdktn.stringToTerraform(struct!.inclusion),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccKnowledgeBaseQueryGenerationTablePropertyToHclTerraform(struct?: CcKnowledgeBase.QueryGenerationTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        columns: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseQueryGenerationColumnPropertyToHclTerraform, false)(struct!.columns),
            isBlock: true,
            type: "list",
            storageClassType: "QueryGenerationColumnPropertyList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inclusion: {
            value: cdktn.stringToHclTerraform(struct!.inclusion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseQueryGenerationContextPropertyToTerraform(struct?: CcKnowledgeBase.QueryGenerationContextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        curated_queries: cdktn.listMapper(ccKnowledgeBaseCuratedQueryPropertyToTerraform, false)(struct!.curatedQueries),
        tables: cdktn.listMapper(ccKnowledgeBaseQueryGenerationTablePropertyToTerraform, false)(struct!.tables),
    }
}


export function ccKnowledgeBaseQueryGenerationContextPropertyToHclTerraform(struct?: CcKnowledgeBase.QueryGenerationContextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        curated_queries: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseCuratedQueryPropertyToHclTerraform, false)(struct!.curatedQueries),
            isBlock: true,
            type: "list",
            storageClassType: "CuratedQueryPropertyList",
        },
        tables: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseQueryGenerationTablePropertyToHclTerraform, false)(struct!.tables),
            isBlock: true,
            type: "list",
            storageClassType: "QueryGenerationTablePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseQueryGenerationConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.QueryGenerationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_timeout_seconds: cdktn.numberToTerraform(struct!.executionTimeoutSeconds),
        generation_context: ccKnowledgeBaseQueryGenerationContextPropertyToTerraform(struct!.generationContext),
    }
}


export function ccKnowledgeBaseQueryGenerationConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.QueryGenerationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.executionTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        generation_context: {
            value: ccKnowledgeBaseQueryGenerationContextPropertyToHclTerraform(struct!.generationContext),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryGenerationContextProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftQueryEngineAwsDataCatalogStorageConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tableNames),
    }
}


export function ccKnowledgeBaseRedshiftQueryEngineAwsDataCatalogStorageConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        table_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tableNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftQueryEngineRedshiftStorageConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineRedshiftStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
    }
}


export function ccKnowledgeBaseRedshiftQueryEngineRedshiftStorageConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineRedshiftStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRedshiftQueryEngineStorageConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_data_catalog_configuration: ccKnowledgeBaseRedshiftQueryEngineAwsDataCatalogStorageConfigurationPropertyToTerraform(struct!.awsDataCatalogConfiguration),
        redshift_configuration: ccKnowledgeBaseRedshiftQueryEngineRedshiftStorageConfigurationPropertyToTerraform(struct!.redshiftConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccKnowledgeBaseRedshiftQueryEngineStorageConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftQueryEngineStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_data_catalog_configuration: {
            value: ccKnowledgeBaseRedshiftQueryEngineAwsDataCatalogStorageConfigurationPropertyToHclTerraform(struct!.awsDataCatalogConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty",
        },
        redshift_configuration: {
            value: ccKnowledgeBaseRedshiftQueryEngineRedshiftStorageConfigurationPropertyToHclTerraform(struct!.redshiftConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftQueryEngineRedshiftStorageConfigurationProperty",
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


export function ccKnowledgeBaseRedshiftConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RedshiftConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query_engine_configuration: ccKnowledgeBaseRedshiftQueryEngineConfigurationPropertyToTerraform(struct!.queryEngineConfiguration),
        query_generation_configuration: ccKnowledgeBaseQueryGenerationConfigurationPropertyToTerraform(struct!.queryGenerationConfiguration),
        storage_configurations: cdktn.listMapper(ccKnowledgeBaseRedshiftQueryEngineStorageConfigurationPropertyToTerraform, false)(struct!.storageConfigurations),
    }
}


export function ccKnowledgeBaseRedshiftConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RedshiftConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query_engine_configuration: {
            value: ccKnowledgeBaseRedshiftQueryEngineConfigurationPropertyToHclTerraform(struct!.queryEngineConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftQueryEngineConfigurationProperty",
        },
        query_generation_configuration: {
            value: ccKnowledgeBaseQueryGenerationConfigurationPropertyToHclTerraform(struct!.queryGenerationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryGenerationConfigurationProperty",
        },
        storage_configurations: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseRedshiftQueryEngineStorageConfigurationPropertyToHclTerraform, false)(struct!.storageConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "RedshiftQueryEngineStorageConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        redshift_configuration: ccKnowledgeBaseRedshiftConfigurationPropertyToTerraform(struct!.redshiftConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        redshift_configuration: {
            value: ccKnowledgeBaseRedshiftConfigurationPropertyToHclTerraform(struct!.redshiftConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftConfigurationProperty",
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


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
    }
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fixed_length_duration: {
            value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseAudioPropertyToTerraform(struct?: CcKnowledgeBase.AudioProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segmentation_configuration: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToTerraform(struct!.segmentationConfiguration),
    }
}


export function ccKnowledgeBaseAudioPropertyToHclTerraform(struct?: CcKnowledgeBase.AudioProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segmentation_configuration: {
            value: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyToHclTerraform(struct!.segmentationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fixed_length_duration: cdktn.numberToTerraform(struct!.fixedLengthDuration),
    }
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fixed_length_duration: {
            value: cdktn.numberToHclTerraform(struct!.fixedLengthDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseVideoPropertyToTerraform(struct?: CcKnowledgeBase.VideoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segmentation_configuration: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToTerraform(struct!.segmentationConfiguration),
    }
}


export function ccKnowledgeBaseVideoPropertyToHclTerraform(struct?: CcKnowledgeBase.VideoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segmentation_configuration: {
            value: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyToHclTerraform(struct!.segmentationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio: cdktn.listMapper(ccKnowledgeBaseAudioPropertyToTerraform, false)(struct!.audio),
        dimensions: cdktn.numberToTerraform(struct!.dimensions),
        embedding_data_type: cdktn.stringToTerraform(struct!.embeddingDataType),
        video: cdktn.listMapper(ccKnowledgeBaseVideoPropertyToTerraform, false)(struct!.video),
    }
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseAudioPropertyToHclTerraform, false)(struct!.audio),
            isBlock: true,
            type: "list",
            storageClassType: "AudioPropertyList",
        },
        dimensions: {
            value: cdktn.numberToHclTerraform(struct!.dimensions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        embedding_data_type: {
            value: cdktn.stringToHclTerraform(struct!.embeddingDataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        video: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseVideoPropertyToHclTerraform, false)(struct!.video),
            isBlock: true,
            type: "list",
            storageClassType: "VideoPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bedrock_embedding_model_configuration: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToTerraform(struct!.bedrockEmbeddingModelConfiguration),
    }
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bedrock_embedding_model_configuration: {
            value: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyToHclTerraform(struct!.bedrockEmbeddingModelConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseS3LocationPropertyToTerraform(struct?: CcKnowledgeBase.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccKnowledgeBaseS3LocationPropertyToHclTerraform(struct?: CcKnowledgeBase.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseSupplementalDataStorageLocationPropertyToTerraform(struct?: CcKnowledgeBase.SupplementalDataStorageLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_location: ccKnowledgeBaseS3LocationPropertyToTerraform(struct!.s3Location),
        supplemental_data_storage_location_type: cdktn.stringToTerraform(struct!.supplementalDataStorageLocationType),
    }
}


export function ccKnowledgeBaseSupplementalDataStorageLocationPropertyToHclTerraform(struct?: CcKnowledgeBase.SupplementalDataStorageLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_location: {
            value: ccKnowledgeBaseS3LocationPropertyToHclTerraform(struct!.s3Location),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LocationProperty",
        },
        supplemental_data_storage_location_type: {
            value: cdktn.stringToHclTerraform(struct!.supplementalDataStorageLocationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseSupplementalDataStorageConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.SupplementalDataStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        supplemental_data_storage_locations: cdktn.listMapper(ccKnowledgeBaseSupplementalDataStorageLocationPropertyToTerraform, false)(struct!.supplementalDataStorageLocations),
    }
}


export function ccKnowledgeBaseSupplementalDataStorageConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.SupplementalDataStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        supplemental_data_storage_locations: {
            value: cdktn.listMapperHcl(ccKnowledgeBaseSupplementalDataStorageLocationPropertyToHclTerraform, false)(struct!.supplementalDataStorageLocations),
            isBlock: true,
            type: "list",
            storageClassType: "SupplementalDataStorageLocationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        embedding_model_arn: cdktn.stringToTerraform(struct!.embeddingModelArn),
        embedding_model_configuration: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToTerraform(struct!.embeddingModelConfiguration),
        supplemental_data_storage_configuration: ccKnowledgeBaseSupplementalDataStorageConfigurationPropertyToTerraform(struct!.supplementalDataStorageConfiguration),
    }
}


export function ccKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        embedding_model_arn: {
            value: cdktn.stringToHclTerraform(struct!.embeddingModelArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        embedding_model_configuration: {
            value: ccKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyToHclTerraform(struct!.embeddingModelConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty",
        },
        supplemental_data_storage_configuration: {
            value: ccKnowledgeBaseSupplementalDataStorageConfigurationPropertyToHclTerraform(struct!.supplementalDataStorageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SupplementalDataStorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kendra_knowledge_base_configuration: ccKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToTerraform(struct!.kendraKnowledgeBaseConfiguration),
        managed_knowledge_base_configuration: ccKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToTerraform(struct!.managedKnowledgeBaseConfiguration),
        sql_knowledge_base_configuration: ccKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToTerraform(struct!.sqlKnowledgeBaseConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
        vector_knowledge_base_configuration: ccKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToTerraform(struct!.vectorKnowledgeBaseConfiguration),
    }
}


export function ccKnowledgeBaseKnowledgeBaseConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.KnowledgeBaseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kendra_knowledge_base_configuration: {
            value: ccKnowledgeBaseKendraKnowledgeBaseConfigurationPropertyToHclTerraform(struct!.kendraKnowledgeBaseConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "KendraKnowledgeBaseConfigurationProperty",
        },
        managed_knowledge_base_configuration: {
            value: ccKnowledgeBaseManagedKnowledgeBaseConfigurationPropertyToHclTerraform(struct!.managedKnowledgeBaseConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedKnowledgeBaseConfigurationProperty",
        },
        sql_knowledge_base_configuration: {
            value: ccKnowledgeBaseSqlKnowledgeBaseConfigurationPropertyToHclTerraform(struct!.sqlKnowledgeBaseConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SqlKnowledgeBaseConfigurationProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vector_knowledge_base_configuration: {
            value: ccKnowledgeBaseVectorKnowledgeBaseConfigurationPropertyToHclTerraform(struct!.vectorKnowledgeBaseConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "VectorKnowledgeBaseConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseMongoDbAtlasFieldMappingPropertyToTerraform(struct?: CcKnowledgeBase.MongoDbAtlasFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_field: cdktn.stringToTerraform(struct!.metadataField),
        text_field: cdktn.stringToTerraform(struct!.textField),
        vector_field: cdktn.stringToTerraform(struct!.vectorField),
    }
}


export function ccKnowledgeBaseMongoDbAtlasFieldMappingPropertyToHclTerraform(struct?: CcKnowledgeBase.MongoDbAtlasFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_field: {
            value: cdktn.stringToHclTerraform(struct!.metadataField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_field: {
            value: cdktn.stringToHclTerraform(struct!.textField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vector_field: {
            value: cdktn.stringToHclTerraform(struct!.vectorField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseMongoDbAtlasConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.MongoDbAtlasConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        collection_name: cdktn.stringToTerraform(struct!.collectionName),
        credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        endpoint_service_name: cdktn.stringToTerraform(struct!.endpointServiceName),
        field_mapping: ccKnowledgeBaseMongoDbAtlasFieldMappingPropertyToTerraform(struct!.fieldMapping),
        text_index_name: cdktn.stringToTerraform(struct!.textIndexName),
        vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    }
}


export function ccKnowledgeBaseMongoDbAtlasConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.MongoDbAtlasConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        collection_name: {
            value: cdktn.stringToHclTerraform(struct!.collectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint_service_name: {
            value: cdktn.stringToHclTerraform(struct!.endpointServiceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_mapping: {
            value: ccKnowledgeBaseMongoDbAtlasFieldMappingPropertyToHclTerraform(struct!.fieldMapping),
            isBlock: true,
            type: "struct",
            storageClassType: "MongoDbAtlasFieldMappingProperty",
        },
        text_index_name: {
            value: cdktn.stringToHclTerraform(struct!.textIndexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vector_index_name: {
            value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseNeptuneAnalyticsFieldMappingPropertyToTerraform(struct?: CcKnowledgeBase.NeptuneAnalyticsFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_field: cdktn.stringToTerraform(struct!.metadataField),
        text_field: cdktn.stringToTerraform(struct!.textField),
    }
}


export function ccKnowledgeBaseNeptuneAnalyticsFieldMappingPropertyToHclTerraform(struct?: CcKnowledgeBase.NeptuneAnalyticsFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_field: {
            value: cdktn.stringToHclTerraform(struct!.metadataField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_field: {
            value: cdktn.stringToHclTerraform(struct!.textField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_mapping: ccKnowledgeBaseNeptuneAnalyticsFieldMappingPropertyToTerraform(struct!.fieldMapping),
        graph_arn: cdktn.stringToTerraform(struct!.graphArn),
    }
}


export function ccKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_mapping: {
            value: ccKnowledgeBaseNeptuneAnalyticsFieldMappingPropertyToHclTerraform(struct!.fieldMapping),
            isBlock: true,
            type: "struct",
            storageClassType: "NeptuneAnalyticsFieldMappingProperty",
        },
        graph_arn: {
            value: cdktn.stringToHclTerraform(struct!.graphArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseOpenSearchManagedClusterFieldMappingPropertyToTerraform(struct?: CcKnowledgeBase.OpenSearchManagedClusterFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_field: cdktn.stringToTerraform(struct!.metadataField),
        text_field: cdktn.stringToTerraform(struct!.textField),
        vector_field: cdktn.stringToTerraform(struct!.vectorField),
    }
}


export function ccKnowledgeBaseOpenSearchManagedClusterFieldMappingPropertyToHclTerraform(struct?: CcKnowledgeBase.OpenSearchManagedClusterFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_field: {
            value: cdktn.stringToHclTerraform(struct!.metadataField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_field: {
            value: cdktn.stringToHclTerraform(struct!.textField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vector_field: {
            value: cdktn.stringToHclTerraform(struct!.vectorField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseOpenSearchManagedClusterConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.OpenSearchManagedClusterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_arn: cdktn.stringToTerraform(struct!.domainArn),
        domain_endpoint: cdktn.stringToTerraform(struct!.domainEndpoint),
        field_mapping: ccKnowledgeBaseOpenSearchManagedClusterFieldMappingPropertyToTerraform(struct!.fieldMapping),
        vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    }
}


export function ccKnowledgeBaseOpenSearchManagedClusterConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.OpenSearchManagedClusterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_arn: {
            value: cdktn.stringToHclTerraform(struct!.domainArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.domainEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_mapping: {
            value: ccKnowledgeBaseOpenSearchManagedClusterFieldMappingPropertyToHclTerraform(struct!.fieldMapping),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenSearchManagedClusterFieldMappingProperty",
        },
        vector_index_name: {
            value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseOpenSearchServerlessFieldMappingPropertyToTerraform(struct?: CcKnowledgeBase.OpenSearchServerlessFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_field: cdktn.stringToTerraform(struct!.metadataField),
        text_field: cdktn.stringToTerraform(struct!.textField),
        vector_field: cdktn.stringToTerraform(struct!.vectorField),
    }
}


export function ccKnowledgeBaseOpenSearchServerlessFieldMappingPropertyToHclTerraform(struct?: CcKnowledgeBase.OpenSearchServerlessFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_field: {
            value: cdktn.stringToHclTerraform(struct!.metadataField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_field: {
            value: cdktn.stringToHclTerraform(struct!.textField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vector_field: {
            value: cdktn.stringToHclTerraform(struct!.vectorField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseOpenSearchServerlessConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.OpenSearchServerlessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        collection_arn: cdktn.stringToTerraform(struct!.collectionArn),
        field_mapping: ccKnowledgeBaseOpenSearchServerlessFieldMappingPropertyToTerraform(struct!.fieldMapping),
        vector_index_name: cdktn.stringToTerraform(struct!.vectorIndexName),
    }
}


export function ccKnowledgeBaseOpenSearchServerlessConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.OpenSearchServerlessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        collection_arn: {
            value: cdktn.stringToHclTerraform(struct!.collectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_mapping: {
            value: ccKnowledgeBaseOpenSearchServerlessFieldMappingPropertyToHclTerraform(struct!.fieldMapping),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenSearchServerlessFieldMappingProperty",
        },
        vector_index_name: {
            value: cdktn.stringToHclTerraform(struct!.vectorIndexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBasePineconeFieldMappingPropertyToTerraform(struct?: CcKnowledgeBase.PineconeFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metadata_field: cdktn.stringToTerraform(struct!.metadataField),
        text_field: cdktn.stringToTerraform(struct!.textField),
    }
}


export function ccKnowledgeBasePineconeFieldMappingPropertyToHclTerraform(struct?: CcKnowledgeBase.PineconeFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metadata_field: {
            value: cdktn.stringToHclTerraform(struct!.metadataField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_field: {
            value: cdktn.stringToHclTerraform(struct!.textField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBasePineconeConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.PineconeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_string: cdktn.stringToTerraform(struct!.connectionString),
        credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
        field_mapping: ccKnowledgeBasePineconeFieldMappingPropertyToTerraform(struct!.fieldMapping),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccKnowledgeBasePineconeConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.PineconeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_string: {
            value: cdktn.stringToHclTerraform(struct!.connectionString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_mapping: {
            value: ccKnowledgeBasePineconeFieldMappingPropertyToHclTerraform(struct!.fieldMapping),
            isBlock: true,
            type: "struct",
            storageClassType: "PineconeFieldMappingProperty",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRdsFieldMappingPropertyToTerraform(struct?: CcKnowledgeBase.RdsFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_metadata_field: cdktn.stringToTerraform(struct!.customMetadataField),
        metadata_field: cdktn.stringToTerraform(struct!.metadataField),
        primary_key_field: cdktn.stringToTerraform(struct!.primaryKeyField),
        text_field: cdktn.stringToTerraform(struct!.textField),
        vector_field: cdktn.stringToTerraform(struct!.vectorField),
    }
}


export function ccKnowledgeBaseRdsFieldMappingPropertyToHclTerraform(struct?: CcKnowledgeBase.RdsFieldMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_metadata_field: {
            value: cdktn.stringToHclTerraform(struct!.customMetadataField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metadata_field: {
            value: cdktn.stringToHclTerraform(struct!.metadataField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_key_field: {
            value: cdktn.stringToHclTerraform(struct!.primaryKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_field: {
            value: cdktn.stringToHclTerraform(struct!.textField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vector_field: {
            value: cdktn.stringToHclTerraform(struct!.vectorField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseRdsConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.RdsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        field_mapping: ccKnowledgeBaseRdsFieldMappingPropertyToTerraform(struct!.fieldMapping),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccKnowledgeBaseRdsConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.RdsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credentials_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_mapping: {
            value: ccKnowledgeBaseRdsFieldMappingPropertyToHclTerraform(struct!.fieldMapping),
            isBlock: true,
            type: "struct",
            storageClassType: "RdsFieldMappingProperty",
        },
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseS3VectorsConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.S3VectorsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        index_arn: cdktn.stringToTerraform(struct!.indexArn),
        index_name: cdktn.stringToTerraform(struct!.indexName),
        vector_bucket_arn: cdktn.stringToTerraform(struct!.vectorBucketArn),
    }
}


export function ccKnowledgeBaseS3VectorsConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.S3VectorsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        index_arn: {
            value: cdktn.stringToHclTerraform(struct!.indexArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index_name: {
            value: cdktn.stringToHclTerraform(struct!.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vector_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.vectorBucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccKnowledgeBaseStorageConfigurationPropertyToTerraform(struct?: CcKnowledgeBase.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mongo_db_atlas_configuration: ccKnowledgeBaseMongoDbAtlasConfigurationPropertyToTerraform(struct!.mongoDbAtlasConfiguration),
        neptune_analytics_configuration: ccKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToTerraform(struct!.neptuneAnalyticsConfiguration),
        opensearch_managed_cluster_configuration: ccKnowledgeBaseOpenSearchManagedClusterConfigurationPropertyToTerraform(struct!.opensearchManagedClusterConfiguration),
        opensearch_serverless_configuration: ccKnowledgeBaseOpenSearchServerlessConfigurationPropertyToTerraform(struct!.opensearchServerlessConfiguration),
        pinecone_configuration: ccKnowledgeBasePineconeConfigurationPropertyToTerraform(struct!.pineconeConfiguration),
        rds_configuration: ccKnowledgeBaseRdsConfigurationPropertyToTerraform(struct!.rdsConfiguration),
        s3_vectors_configuration: ccKnowledgeBaseS3VectorsConfigurationPropertyToTerraform(struct!.s3VectorsConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccKnowledgeBaseStorageConfigurationPropertyToHclTerraform(struct?: CcKnowledgeBase.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mongo_db_atlas_configuration: {
            value: ccKnowledgeBaseMongoDbAtlasConfigurationPropertyToHclTerraform(struct!.mongoDbAtlasConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MongoDbAtlasConfigurationProperty",
        },
        neptune_analytics_configuration: {
            value: ccKnowledgeBaseNeptuneAnalyticsConfigurationPropertyToHclTerraform(struct!.neptuneAnalyticsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NeptuneAnalyticsConfigurationProperty",
        },
        opensearch_managed_cluster_configuration: {
            value: ccKnowledgeBaseOpenSearchManagedClusterConfigurationPropertyToHclTerraform(struct!.opensearchManagedClusterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenSearchManagedClusterConfigurationProperty",
        },
        opensearch_serverless_configuration: {
            value: ccKnowledgeBaseOpenSearchServerlessConfigurationPropertyToHclTerraform(struct!.opensearchServerlessConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenSearchServerlessConfigurationProperty",
        },
        pinecone_configuration: {
            value: ccKnowledgeBasePineconeConfigurationPropertyToHclTerraform(struct!.pineconeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PineconeConfigurationProperty",
        },
        rds_configuration: {
            value: ccKnowledgeBaseRdsConfigurationPropertyToHclTerraform(struct!.rdsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RdsConfigurationProperty",
        },
        s3_vectors_configuration: {
            value: ccKnowledgeBaseS3VectorsConfigurationPropertyToHclTerraform(struct!.s3VectorsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3VectorsConfigurationProperty",
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


export namespace CcKnowledgeBase {
export interface KendraKnowledgeBaseConfigurationProperty {
    /**
    * Arn of a Kendra index
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#kendra_index_arn CcKnowledgeBase#kendra_index_arn}
    */
    readonly kendraIndexArn?: string;
}
export class KendraKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kendraIndexArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kendraIndexArn = this._kendraIndexArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KendraKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kendraIndexArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kendraIndexArn = value.kendraIndexArn;
        }
    }

    // kendra_index_arn - computed: true, optional: true, required: false
    private _kendraIndexArn?: string; 
    public get kendraIndexArn() {
        return this.getStringAttribute('kendra_index_arn');
    }
    public set kendraIndexArn(value: string) {
        this._kendraIndexArn = value;
    }
    public resetKendraIndexArn() {
        this._kendraIndexArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kendraIndexArnInput() {
        return this._kendraIndexArn;
    }
}
export interface AudioSegmentationConfigurationProperty {
    /**
    * Duration in seconds to segment the multi modal media
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#fixed_length_duration CcKnowledgeBase#fixed_length_duration}
    */
    readonly fixedLengthDuration?: number;
}
export class AudioSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fixedLengthDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = value.fixedLengthDuration;
        }
    }

    // fixed_length_duration - computed: true, optional: true, required: false
    private _fixedLengthDuration?: number; 
    public get fixedLengthDuration() {
        return this.getNumberAttribute('fixed_length_duration');
    }
    public set fixedLengthDuration(value: number) {
        this._fixedLengthDuration = value;
    }
    public resetFixedLengthDuration() {
        this._fixedLengthDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedLengthDurationInput() {
        return this._fixedLengthDuration;
    }
}
export interface AudioConfigurationProperty {
    /**
    * Configure the audio segmentation configuration for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#segmentation_configuration CcKnowledgeBase#segmentation_configuration}
    */
    readonly segmentationConfiguration?: AudioSegmentationConfigurationProperty;
}
export class AudioConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AudioConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
        }
    }

    // segmentation_configuration - computed: true, optional: true, required: false
    private _segmentationConfiguration = new AudioSegmentationConfigurationPropertyOutputReference(this, "segmentation_configuration");
    public get segmentationConfiguration() {
        return this._segmentationConfiguration;
    }
    public putSegmentationConfiguration(value: AudioSegmentationConfigurationProperty) {
        this._segmentationConfiguration.internalValue = value;
    }
    public resetSegmentationConfiguration() {
        this._segmentationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationConfigurationInput() {
        return this._segmentationConfiguration.internalValue;
    }
}

export class AudioConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : AudioConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): AudioConfigurationPropertyOutputReference {
        return new AudioConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VideoSegmentationConfigurationProperty {
    /**
    * Duration in seconds to segment the multi modal media
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#fixed_length_duration CcKnowledgeBase#fixed_length_duration}
    */
    readonly fixedLengthDuration?: number;
}
export class VideoSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fixedLengthDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = value.fixedLengthDuration;
        }
    }

    // fixed_length_duration - computed: true, optional: true, required: false
    private _fixedLengthDuration?: number; 
    public get fixedLengthDuration() {
        return this.getNumberAttribute('fixed_length_duration');
    }
    public set fixedLengthDuration(value: number) {
        this._fixedLengthDuration = value;
    }
    public resetFixedLengthDuration() {
        this._fixedLengthDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedLengthDurationInput() {
        return this._fixedLengthDuration;
    }
}
export interface VideoConfigurationProperty {
    /**
    * Configure the video segmentation configuration for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#segmentation_configuration CcKnowledgeBase#segmentation_configuration}
    */
    readonly segmentationConfiguration?: VideoSegmentationConfigurationProperty;
}
export class VideoConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VideoConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
        }
    }

    // segmentation_configuration - computed: true, optional: true, required: false
    private _segmentationConfiguration = new VideoSegmentationConfigurationPropertyOutputReference(this, "segmentation_configuration");
    public get segmentationConfiguration() {
        return this._segmentationConfiguration;
    }
    public putSegmentationConfiguration(value: VideoSegmentationConfigurationProperty) {
        this._segmentationConfiguration.internalValue = value;
    }
    public resetSegmentationConfiguration() {
        this._segmentationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationConfigurationInput() {
        return this._segmentationConfiguration.internalValue;
    }
}

export class VideoConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : VideoConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): VideoConfigurationPropertyOutputReference {
        return new VideoConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BedrockEmbeddingModelConfigurationProperty {
    /**
    * List of audio configurations for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#audio CcKnowledgeBase#audio}
    */
    readonly audio?: AudioConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The dimensions details for the vector configuration used on the Bedrock embeddings model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#dimensions CcKnowledgeBase#dimensions}
    */
    readonly dimensions?: number;
    /**
    * The data type for the vectors when using a model to convert text into vector embeddings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#embedding_data_type CcKnowledgeBase#embedding_data_type}
    */
    readonly embeddingDataType?: string;
    /**
    * List of video configurations for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#video CcKnowledgeBase#video}
    */
    readonly video?: VideoConfigurationProperty[] | cdktn.IResolvable;
}
export class BedrockEmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audio?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.audio = this._audio?.internalValue;
        }
        if (this._dimensions !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
        }
        if (this._embeddingDataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.embeddingDataType = this._embeddingDataType;
        }
        if (this._video?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.video = this._video?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audio.internalValue = undefined;
            this._dimensions = undefined;
            this._embeddingDataType = undefined;
            this._video.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audio.internalValue = value.audio;
            this._dimensions = value.dimensions;
            this._embeddingDataType = value.embeddingDataType;
            this._video.internalValue = value.video;
        }
    }

    // audio - computed: true, optional: true, required: false
    private _audio = new AudioConfigurationPropertyList(this, "audio", false);
    public get audio() {
        return this._audio;
    }
    public putAudio(value: AudioConfigurationProperty[] | cdktn.IResolvable) {
        this._audio.internalValue = value;
    }
    public resetAudio() {
        this._audio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioInput() {
        return this._audio.internalValue;
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions?: number; 
    public get dimensions() {
        return this.getNumberAttribute('dimensions');
    }
    public set dimensions(value: number) {
        this._dimensions = value;
    }
    public resetDimensions() {
        this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions;
    }

    // embedding_data_type - computed: true, optional: true, required: false
    private _embeddingDataType?: string; 
    public get embeddingDataType() {
        return this.getStringAttribute('embedding_data_type');
    }
    public set embeddingDataType(value: string) {
        this._embeddingDataType = value;
    }
    public resetEmbeddingDataType() {
        this._embeddingDataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embeddingDataTypeInput() {
        return this._embeddingDataType;
    }

    // video - computed: true, optional: true, required: false
    private _video = new VideoConfigurationPropertyList(this, "video", false);
    public get video() {
        return this._video;
    }
    public putVideo(value: VideoConfigurationProperty[] | cdktn.IResolvable) {
        this._video.internalValue = value;
    }
    public resetVideo() {
        this._video.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoInput() {
        return this._video.internalValue;
    }
}
export interface EmbeddingModelConfigurationProperty {
    /**
    * The vector configuration details for the Bedrock embeddings model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#bedrock_embedding_model_configuration CcKnowledgeBase#bedrock_embedding_model_configuration}
    */
    readonly bedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfigurationProperty;
}
export class EmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bedrockEmbeddingModelConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockEmbeddingModelConfiguration = this._bedrockEmbeddingModelConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bedrockEmbeddingModelConfiguration.internalValue = value.bedrockEmbeddingModelConfiguration;
        }
    }

    // bedrock_embedding_model_configuration - computed: true, optional: true, required: false
    private _bedrockEmbeddingModelConfiguration = new BedrockEmbeddingModelConfigurationPropertyOutputReference(this, "bedrock_embedding_model_configuration");
    public get bedrockEmbeddingModelConfiguration() {
        return this._bedrockEmbeddingModelConfiguration;
    }
    public putBedrockEmbeddingModelConfiguration(value: BedrockEmbeddingModelConfigurationProperty) {
        this._bedrockEmbeddingModelConfiguration.internalValue = value;
    }
    public resetBedrockEmbeddingModelConfiguration() {
        this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockEmbeddingModelConfigurationInput() {
        return this._bedrockEmbeddingModelConfiguration.internalValue;
    }
}
export interface ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty {
    /**
    * The ARN of the AWS KMS key used to encrypt the managed knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#kms_key_arn CcKnowledgeBase#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class ManagedKnowledgeBaseServerSideEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
        }
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
}
export interface ManagedKnowledgeBaseConfigurationProperty {
    /**
    * The ARN of the model used to create vector embeddings for the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#embedding_model_arn CcKnowledgeBase#embedding_model_arn}
    */
    readonly embeddingModelArn?: string;
    /**
    * The embeddings model configuration details for the vector model used in Knowledge Base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#embedding_model_configuration CcKnowledgeBase#embedding_model_configuration}
    */
    readonly embeddingModelConfiguration?: EmbeddingModelConfigurationProperty;
    /**
    * The type of embedding model to use for the managed knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#embedding_model_type CcKnowledgeBase#embedding_model_type}
    */
    readonly embeddingModelType?: string;
    /**
    * Contains details about the server-side encryption for the managed knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#server_side_encryption_configuration CcKnowledgeBase#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty;
}
export class ManagedKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._embeddingModelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.embeddingModelArn = this._embeddingModelArn;
        }
        if (this._embeddingModelConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.embeddingModelConfiguration = this._embeddingModelConfiguration?.internalValue;
        }
        if (this._embeddingModelType !== undefined) {
            hasAnyValues = true;
            internalValueResult.embeddingModelType = this._embeddingModelType;
        }
        if (this._serverSideEncryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideEncryptionConfiguration = this._serverSideEncryptionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._embeddingModelArn = undefined;
            this._embeddingModelConfiguration.internalValue = undefined;
            this._embeddingModelType = undefined;
            this._serverSideEncryptionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._embeddingModelArn = value.embeddingModelArn;
            this._embeddingModelConfiguration.internalValue = value.embeddingModelConfiguration;
            this._embeddingModelType = value.embeddingModelType;
            this._serverSideEncryptionConfiguration.internalValue = value.serverSideEncryptionConfiguration;
        }
    }

    // embedding_model_arn - computed: true, optional: true, required: false
    private _embeddingModelArn?: string; 
    public get embeddingModelArn() {
        return this.getStringAttribute('embedding_model_arn');
    }
    public set embeddingModelArn(value: string) {
        this._embeddingModelArn = value;
    }
    public resetEmbeddingModelArn() {
        this._embeddingModelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embeddingModelArnInput() {
        return this._embeddingModelArn;
    }

    // embedding_model_configuration - computed: true, optional: true, required: false
    private _embeddingModelConfiguration = new EmbeddingModelConfigurationPropertyOutputReference(this, "embedding_model_configuration");
    public get embeddingModelConfiguration() {
        return this._embeddingModelConfiguration;
    }
    public putEmbeddingModelConfiguration(value: EmbeddingModelConfigurationProperty) {
        this._embeddingModelConfiguration.internalValue = value;
    }
    public resetEmbeddingModelConfiguration() {
        this._embeddingModelConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embeddingModelConfigurationInput() {
        return this._embeddingModelConfiguration.internalValue;
    }

    // embedding_model_type - computed: true, optional: true, required: false
    private _embeddingModelType?: string; 
    public get embeddingModelType() {
        return this.getStringAttribute('embedding_model_type');
    }
    public set embeddingModelType(value: string) {
        this._embeddingModelType = value;
    }
    public resetEmbeddingModelType() {
        this._embeddingModelType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embeddingModelTypeInput() {
        return this._embeddingModelType;
    }

    // server_side_encryption_configuration - computed: true, optional: true, required: false
    private _serverSideEncryptionConfiguration = new ManagedKnowledgeBaseServerSideEncryptionConfigurationPropertyOutputReference(this, "server_side_encryption_configuration");
    public get serverSideEncryptionConfiguration() {
        return this._serverSideEncryptionConfiguration;
    }
    public putServerSideEncryptionConfiguration(value: ManagedKnowledgeBaseServerSideEncryptionConfigurationProperty) {
        this._serverSideEncryptionConfiguration.internalValue = value;
    }
    public resetServerSideEncryptionConfiguration() {
        this._serverSideEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionConfigurationInput() {
        return this._serverSideEncryptionConfiguration.internalValue;
    }
}
export interface RedshiftProvisionedAuthConfigurationProperty {
    /**
    * Redshift database user
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#database_user CcKnowledgeBase#database_user}
    */
    readonly databaseUser?: string;
    /**
    * Provisioned Redshift auth type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#type CcKnowledgeBase#type}
    */
    readonly type?: string;
    /**
    * Arn of a SecretsManager Secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#username_password_secret_arn CcKnowledgeBase#username_password_secret_arn}
    */
    readonly usernamePasswordSecretArn?: string;
}
export class RedshiftProvisionedAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftProvisionedAuthConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseUser = this._databaseUser;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._usernamePasswordSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.usernamePasswordSecretArn = this._usernamePasswordSecretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftProvisionedAuthConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseUser = undefined;
            this._type = undefined;
            this._usernamePasswordSecretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseUser = value.databaseUser;
            this._type = value.type;
            this._usernamePasswordSecretArn = value.usernamePasswordSecretArn;
        }
    }

    // database_user - computed: true, optional: true, required: false
    private _databaseUser?: string; 
    public get databaseUser() {
        return this.getStringAttribute('database_user');
    }
    public set databaseUser(value: string) {
        this._databaseUser = value;
    }
    public resetDatabaseUser() {
        this._databaseUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseUserInput() {
        return this._databaseUser;
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

    // username_password_secret_arn - computed: true, optional: true, required: false
    private _usernamePasswordSecretArn?: string; 
    public get usernamePasswordSecretArn() {
        return this.getStringAttribute('username_password_secret_arn');
    }
    public set usernamePasswordSecretArn(value: string) {
        this._usernamePasswordSecretArn = value;
    }
    public resetUsernamePasswordSecretArn() {
        this._usernamePasswordSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernamePasswordSecretArnInput() {
        return this._usernamePasswordSecretArn;
    }
}
export interface RedshiftProvisionedConfigurationProperty {
    /**
    * Configurations for Redshift query engine provisioned auth setup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#auth_configuration CcKnowledgeBase#auth_configuration}
    */
    readonly authConfiguration?: RedshiftProvisionedAuthConfigurationProperty;
    /**
    * Redshift cluster identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#cluster_identifier CcKnowledgeBase#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
}
export class RedshiftProvisionedConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftProvisionedConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authConfiguration = this._authConfiguration?.internalValue;
        }
        if (this._clusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftProvisionedConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authConfiguration.internalValue = undefined;
            this._clusterIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authConfiguration.internalValue = value.authConfiguration;
            this._clusterIdentifier = value.clusterIdentifier;
        }
    }

    // auth_configuration - computed: true, optional: true, required: false
    private _authConfiguration = new RedshiftProvisionedAuthConfigurationPropertyOutputReference(this, "auth_configuration");
    public get authConfiguration() {
        return this._authConfiguration;
    }
    public putAuthConfiguration(value: RedshiftProvisionedAuthConfigurationProperty) {
        this._authConfiguration.internalValue = value;
    }
    public resetAuthConfiguration() {
        this._authConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authConfigurationInput() {
        return this._authConfiguration.internalValue;
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
}
export interface RedshiftServerlessAuthConfigurationProperty {
    /**
    * Serverless Redshift auth type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#type CcKnowledgeBase#type}
    */
    readonly type?: string;
    /**
    * Arn of a SecretsManager Secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#username_password_secret_arn CcKnowledgeBase#username_password_secret_arn}
    */
    readonly usernamePasswordSecretArn?: string;
}
export class RedshiftServerlessAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftServerlessAuthConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._usernamePasswordSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.usernamePasswordSecretArn = this._usernamePasswordSecretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftServerlessAuthConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._usernamePasswordSecretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._usernamePasswordSecretArn = value.usernamePasswordSecretArn;
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

    // username_password_secret_arn - computed: true, optional: true, required: false
    private _usernamePasswordSecretArn?: string; 
    public get usernamePasswordSecretArn() {
        return this.getStringAttribute('username_password_secret_arn');
    }
    public set usernamePasswordSecretArn(value: string) {
        this._usernamePasswordSecretArn = value;
    }
    public resetUsernamePasswordSecretArn() {
        this._usernamePasswordSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernamePasswordSecretArnInput() {
        return this._usernamePasswordSecretArn;
    }
}
export interface RedshiftServerlessConfigurationProperty {
    /**
    * Configurations for Redshift query engine serverless auth setup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#auth_configuration CcKnowledgeBase#auth_configuration}
    */
    readonly authConfiguration?: RedshiftServerlessAuthConfigurationProperty;
    /**
    * Workgroup arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#workgroup_arn CcKnowledgeBase#workgroup_arn}
    */
    readonly workgroupArn?: string;
}
export class RedshiftServerlessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftServerlessConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authConfiguration = this._authConfiguration?.internalValue;
        }
        if (this._workgroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.workgroupArn = this._workgroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftServerlessConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authConfiguration.internalValue = undefined;
            this._workgroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authConfiguration.internalValue = value.authConfiguration;
            this._workgroupArn = value.workgroupArn;
        }
    }

    // auth_configuration - computed: true, optional: true, required: false
    private _authConfiguration = new RedshiftServerlessAuthConfigurationPropertyOutputReference(this, "auth_configuration");
    public get authConfiguration() {
        return this._authConfiguration;
    }
    public putAuthConfiguration(value: RedshiftServerlessAuthConfigurationProperty) {
        this._authConfiguration.internalValue = value;
    }
    public resetAuthConfiguration() {
        this._authConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authConfigurationInput() {
        return this._authConfiguration.internalValue;
    }

    // workgroup_arn - computed: true, optional: true, required: false
    private _workgroupArn?: string; 
    public get workgroupArn() {
        return this.getStringAttribute('workgroup_arn');
    }
    public set workgroupArn(value: string) {
        this._workgroupArn = value;
    }
    public resetWorkgroupArn() {
        this._workgroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupArnInput() {
        return this._workgroupArn;
    }
}
export interface RedshiftQueryEngineConfigurationProperty {
    /**
    * Configurations for provisioned Redshift query engine
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#provisioned_configuration CcKnowledgeBase#provisioned_configuration}
    */
    readonly provisionedConfiguration?: RedshiftProvisionedConfigurationProperty;
    /**
    * Configurations for serverless Redshift query engine
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#serverless_configuration CcKnowledgeBase#serverless_configuration}
    */
    readonly serverlessConfiguration?: RedshiftServerlessConfigurationProperty;
    /**
    * Redshift query engine type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#type CcKnowledgeBase#type}
    */
    readonly type?: string;
}
export class RedshiftQueryEngineConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftQueryEngineConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provisionedConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedConfiguration = this._provisionedConfiguration?.internalValue;
        }
        if (this._serverlessConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverlessConfiguration = this._serverlessConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftQueryEngineConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provisionedConfiguration.internalValue = undefined;
            this._serverlessConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provisionedConfiguration.internalValue = value.provisionedConfiguration;
            this._serverlessConfiguration.internalValue = value.serverlessConfiguration;
            this._type = value.type;
        }
    }

    // provisioned_configuration - computed: true, optional: true, required: false
    private _provisionedConfiguration = new RedshiftProvisionedConfigurationPropertyOutputReference(this, "provisioned_configuration");
    public get provisionedConfiguration() {
        return this._provisionedConfiguration;
    }
    public putProvisionedConfiguration(value: RedshiftProvisionedConfigurationProperty) {
        this._provisionedConfiguration.internalValue = value;
    }
    public resetProvisionedConfiguration() {
        this._provisionedConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConfigurationInput() {
        return this._provisionedConfiguration.internalValue;
    }

    // serverless_configuration - computed: true, optional: true, required: false
    private _serverlessConfiguration = new RedshiftServerlessConfigurationPropertyOutputReference(this, "serverless_configuration");
    public get serverlessConfiguration() {
        return this._serverlessConfiguration;
    }
    public putServerlessConfiguration(value: RedshiftServerlessConfigurationProperty) {
        this._serverlessConfiguration.internalValue = value;
    }
    public resetServerlessConfiguration() {
        this._serverlessConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessConfigurationInput() {
        return this._serverlessConfiguration.internalValue;
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
export interface CuratedQueryProperty {
    /**
    * Question for the curated query
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#natural_language CcKnowledgeBase#natural_language}
    */
    readonly naturalLanguage?: string;
    /**
    * Answer for the curated query
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#sql CcKnowledgeBase#sql}
    */
    readonly sql?: string;
}
export class CuratedQueryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CuratedQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._naturalLanguage !== undefined) {
            hasAnyValues = true;
            internalValueResult.naturalLanguage = this._naturalLanguage;
        }
        if (this._sql !== undefined) {
            hasAnyValues = true;
            internalValueResult.sql = this._sql;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CuratedQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._naturalLanguage = undefined;
            this._sql = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._naturalLanguage = value.naturalLanguage;
            this._sql = value.sql;
        }
    }

    // natural_language - computed: true, optional: true, required: false
    private _naturalLanguage?: string; 
    public get naturalLanguage() {
        return this.getStringAttribute('natural_language');
    }
    public set naturalLanguage(value: string) {
        this._naturalLanguage = value;
    }
    public resetNaturalLanguage() {
        this._naturalLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get naturalLanguageInput() {
        return this._naturalLanguage;
    }

    // sql - computed: true, optional: true, required: false
    private _sql?: string; 
    public get sql() {
        return this.getStringAttribute('sql');
    }
    public set sql(value: string) {
        this._sql = value;
    }
    public resetSql() {
        this._sql = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlInput() {
        return this._sql;
    }
}

export class CuratedQueryPropertyList extends cdktn.ComplexList {
    public internalValue? : CuratedQueryProperty[] | cdktn.IResolvable

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
    public get(index: number): CuratedQueryPropertyOutputReference {
        return new CuratedQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueryGenerationColumnProperty {
    /**
    * Description for the attached entity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#description CcKnowledgeBase#description}
    */
    readonly description?: string;
    /**
    * Include or Exclude status for an entity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#inclusion CcKnowledgeBase#inclusion}
    */
    readonly inclusion?: string;
    /**
    * Query generation column name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#name CcKnowledgeBase#name}
    */
    readonly name?: string;
}
export class QueryGenerationColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): QueryGenerationColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusion = this._inclusion;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryGenerationColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._inclusion = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._inclusion = value.inclusion;
            this._name = value.name;
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

    // inclusion - computed: true, optional: true, required: false
    private _inclusion?: string; 
    public get inclusion() {
        return this.getStringAttribute('inclusion');
    }
    public set inclusion(value: string) {
        this._inclusion = value;
    }
    public resetInclusion() {
        this._inclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionInput() {
        return this._inclusion;
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
}

export class QueryGenerationColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : QueryGenerationColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): QueryGenerationColumnPropertyOutputReference {
        return new QueryGenerationColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueryGenerationTableProperty {
    /**
    * List of Redshift query generation columns
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#columns CcKnowledgeBase#columns}
    */
    readonly columns?: QueryGenerationColumnProperty[] | cdktn.IResolvable;
    /**
    * Description for the attached entity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#description CcKnowledgeBase#description}
    */
    readonly description?: string;
    /**
    * Include or Exclude status for an entity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#inclusion CcKnowledgeBase#inclusion}
    */
    readonly inclusion?: string;
    /**
    * Query generation table name. Must follow three-part notation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#name CcKnowledgeBase#name}
    */
    readonly name?: string;
}
export class QueryGenerationTablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): QueryGenerationTableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inclusion !== undefined) {
            hasAnyValues = true;
            internalValueResult.inclusion = this._inclusion;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryGenerationTableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columns.internalValue = undefined;
            this._description = undefined;
            this._inclusion = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columns.internalValue = value.columns;
            this._description = value.description;
            this._inclusion = value.inclusion;
            this._name = value.name;
        }
    }

    // columns - computed: true, optional: true, required: false
    private _columns = new QueryGenerationColumnPropertyList(this, "columns", false);
    public get columns() {
        return this._columns;
    }
    public putColumns(value: QueryGenerationColumnProperty[] | cdktn.IResolvable) {
        this._columns.internalValue = value;
    }
    public resetColumns() {
        this._columns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns.internalValue;
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

    // inclusion - computed: true, optional: true, required: false
    private _inclusion?: string; 
    public get inclusion() {
        return this.getStringAttribute('inclusion');
    }
    public set inclusion(value: string) {
        this._inclusion = value;
    }
    public resetInclusion() {
        this._inclusion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inclusionInput() {
        return this._inclusion;
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
}

export class QueryGenerationTablePropertyList extends cdktn.ComplexList {
    public internalValue? : QueryGenerationTableProperty[] | cdktn.IResolvable

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
    public get(index: number): QueryGenerationTablePropertyOutputReference {
        return new QueryGenerationTablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueryGenerationContextProperty {
    /**
    * List of example queries and results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#curated_queries CcKnowledgeBase#curated_queries}
    */
    readonly curatedQueries?: CuratedQueryProperty[] | cdktn.IResolvable;
    /**
    * List of tables used for Redshift query generation context
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#tables CcKnowledgeBase#tables}
    */
    readonly tables?: QueryGenerationTableProperty[] | cdktn.IResolvable;
}
export class QueryGenerationContextPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryGenerationContextProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._curatedQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.curatedQueries = this._curatedQueries?.internalValue;
        }
        if (this._tables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tables = this._tables?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryGenerationContextProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._curatedQueries.internalValue = undefined;
            this._tables.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._curatedQueries.internalValue = value.curatedQueries;
            this._tables.internalValue = value.tables;
        }
    }

    // curated_queries - computed: true, optional: true, required: false
    private _curatedQueries = new CuratedQueryPropertyList(this, "curated_queries", false);
    public get curatedQueries() {
        return this._curatedQueries;
    }
    public putCuratedQueries(value: CuratedQueryProperty[] | cdktn.IResolvable) {
        this._curatedQueries.internalValue = value;
    }
    public resetCuratedQueries() {
        this._curatedQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get curatedQueriesInput() {
        return this._curatedQueries.internalValue;
    }

    // tables - computed: true, optional: true, required: false
    private _tables = new QueryGenerationTablePropertyList(this, "tables", false);
    public get tables() {
        return this._tables;
    }
    public putTables(value: QueryGenerationTableProperty[] | cdktn.IResolvable) {
        this._tables.internalValue = value;
    }
    public resetTables() {
        this._tables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tablesInput() {
        return this._tables.internalValue;
    }
}
export interface QueryGenerationConfigurationProperty {
    /**
    * Max query execution timeout
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#execution_timeout_seconds CcKnowledgeBase#execution_timeout_seconds}
    */
    readonly executionTimeoutSeconds?: number;
    /**
    * Context used to improve query generation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#generation_context CcKnowledgeBase#generation_context}
    */
    readonly generationContext?: QueryGenerationContextProperty;
}
export class QueryGenerationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryGenerationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executionTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionTimeoutSeconds = this._executionTimeoutSeconds;
        }
        if (this._generationContext?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generationContext = this._generationContext?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryGenerationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionTimeoutSeconds = undefined;
            this._generationContext.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionTimeoutSeconds = value.executionTimeoutSeconds;
            this._generationContext.internalValue = value.generationContext;
        }
    }

    // execution_timeout_seconds - computed: true, optional: true, required: false
    private _executionTimeoutSeconds?: number; 
    public get executionTimeoutSeconds() {
        return this.getNumberAttribute('execution_timeout_seconds');
    }
    public set executionTimeoutSeconds(value: number) {
        this._executionTimeoutSeconds = value;
    }
    public resetExecutionTimeoutSeconds() {
        this._executionTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionTimeoutSecondsInput() {
        return this._executionTimeoutSeconds;
    }

    // generation_context - computed: true, optional: true, required: false
    private _generationContext = new QueryGenerationContextPropertyOutputReference(this, "generation_context");
    public get generationContext() {
        return this._generationContext;
    }
    public putGenerationContext(value: QueryGenerationContextProperty) {
        this._generationContext.internalValue = value;
    }
    public resetGenerationContext() {
        this._generationContext.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generationContextInput() {
        return this._generationContext.internalValue;
    }
}
export interface RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty {
    /**
    * List of table names in AWS Data Catalog. Must follow two part notation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#table_names CcKnowledgeBase#table_names}
    */
    readonly tableNames?: string[];
}
export class RedshiftQueryEngineAwsDataCatalogStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableNames = this._tableNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableNames = value.tableNames;
        }
    }

    // table_names - computed: true, optional: true, required: false
    private _tableNames?: string[]; 
    public get tableNames() {
        return this.getListAttribute('table_names');
    }
    public set tableNames(value: string[]) {
        this._tableNames = value;
    }
    public resetTableNames() {
        this._tableNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNamesInput() {
        return this._tableNames;
    }
}
export interface RedshiftQueryEngineRedshiftStorageConfigurationProperty {
    /**
    * Redshift database name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#database_name CcKnowledgeBase#database_name}
    */
    readonly databaseName?: string;
}
export class RedshiftQueryEngineRedshiftStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftQueryEngineRedshiftStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftQueryEngineRedshiftStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
        }
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }
}
export interface RedshiftQueryEngineStorageConfigurationProperty {
    /**
    * Configurations for Redshift query engine AWS Data Catalog backed storage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#aws_data_catalog_configuration CcKnowledgeBase#aws_data_catalog_configuration}
    */
    readonly awsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty;
    /**
    * Configurations for Redshift query engine Redshift backed storage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#redshift_configuration CcKnowledgeBase#redshift_configuration}
    */
    readonly redshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfigurationProperty;
    /**
    * Redshift query engine storage type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#type CcKnowledgeBase#type}
    */
    readonly type?: string;
}
export class RedshiftQueryEngineStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RedshiftQueryEngineStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsDataCatalogConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsDataCatalogConfiguration = this._awsDataCatalogConfiguration?.internalValue;
        }
        if (this._redshiftConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftConfiguration = this._redshiftConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftQueryEngineStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsDataCatalogConfiguration.internalValue = undefined;
            this._redshiftConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsDataCatalogConfiguration.internalValue = value.awsDataCatalogConfiguration;
            this._redshiftConfiguration.internalValue = value.redshiftConfiguration;
            this._type = value.type;
        }
    }

    // aws_data_catalog_configuration - computed: true, optional: true, required: false
    private _awsDataCatalogConfiguration = new RedshiftQueryEngineAwsDataCatalogStorageConfigurationPropertyOutputReference(this, "aws_data_catalog_configuration");
    public get awsDataCatalogConfiguration() {
        return this._awsDataCatalogConfiguration;
    }
    public putAwsDataCatalogConfiguration(value: RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty) {
        this._awsDataCatalogConfiguration.internalValue = value;
    }
    public resetAwsDataCatalogConfiguration() {
        this._awsDataCatalogConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsDataCatalogConfigurationInput() {
        return this._awsDataCatalogConfiguration.internalValue;
    }

    // redshift_configuration - computed: true, optional: true, required: false
    private _redshiftConfiguration = new RedshiftQueryEngineRedshiftStorageConfigurationPropertyOutputReference(this, "redshift_configuration");
    public get redshiftConfiguration() {
        return this._redshiftConfiguration;
    }
    public putRedshiftConfiguration(value: RedshiftQueryEngineRedshiftStorageConfigurationProperty) {
        this._redshiftConfiguration.internalValue = value;
    }
    public resetRedshiftConfiguration() {
        this._redshiftConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftConfigurationInput() {
        return this._redshiftConfiguration.internalValue;
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

export class RedshiftQueryEngineStorageConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : RedshiftQueryEngineStorageConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): RedshiftQueryEngineStorageConfigurationPropertyOutputReference {
        return new RedshiftQueryEngineStorageConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RedshiftConfigurationProperty {
    /**
    * Configurations for Redshift query engine
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#query_engine_configuration CcKnowledgeBase#query_engine_configuration}
    */
    readonly queryEngineConfiguration?: RedshiftQueryEngineConfigurationProperty;
    /**
    * Configurations for generating Redshift engine queries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#query_generation_configuration CcKnowledgeBase#query_generation_configuration}
    */
    readonly queryGenerationConfiguration?: QueryGenerationConfigurationProperty;
    /**
    * List of configurations for available Redshift query engine storage types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#storage_configurations CcKnowledgeBase#storage_configurations}
    */
    readonly storageConfigurations?: RedshiftQueryEngineStorageConfigurationProperty[] | cdktn.IResolvable;
}
export class RedshiftConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queryEngineConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryEngineConfiguration = this._queryEngineConfiguration?.internalValue;
        }
        if (this._queryGenerationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryGenerationConfiguration = this._queryGenerationConfiguration?.internalValue;
        }
        if (this._storageConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageConfigurations = this._storageConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queryEngineConfiguration.internalValue = undefined;
            this._queryGenerationConfiguration.internalValue = undefined;
            this._storageConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queryEngineConfiguration.internalValue = value.queryEngineConfiguration;
            this._queryGenerationConfiguration.internalValue = value.queryGenerationConfiguration;
            this._storageConfigurations.internalValue = value.storageConfigurations;
        }
    }

    // query_engine_configuration - computed: true, optional: true, required: false
    private _queryEngineConfiguration = new RedshiftQueryEngineConfigurationPropertyOutputReference(this, "query_engine_configuration");
    public get queryEngineConfiguration() {
        return this._queryEngineConfiguration;
    }
    public putQueryEngineConfiguration(value: RedshiftQueryEngineConfigurationProperty) {
        this._queryEngineConfiguration.internalValue = value;
    }
    public resetQueryEngineConfiguration() {
        this._queryEngineConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryEngineConfigurationInput() {
        return this._queryEngineConfiguration.internalValue;
    }

    // query_generation_configuration - computed: true, optional: true, required: false
    private _queryGenerationConfiguration = new QueryGenerationConfigurationPropertyOutputReference(this, "query_generation_configuration");
    public get queryGenerationConfiguration() {
        return this._queryGenerationConfiguration;
    }
    public putQueryGenerationConfiguration(value: QueryGenerationConfigurationProperty) {
        this._queryGenerationConfiguration.internalValue = value;
    }
    public resetQueryGenerationConfiguration() {
        this._queryGenerationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryGenerationConfigurationInput() {
        return this._queryGenerationConfiguration.internalValue;
    }

    // storage_configurations - computed: true, optional: true, required: false
    private _storageConfigurations = new RedshiftQueryEngineStorageConfigurationPropertyList(this, "storage_configurations", false);
    public get storageConfigurations() {
        return this._storageConfigurations;
    }
    public putStorageConfigurations(value: RedshiftQueryEngineStorageConfigurationProperty[] | cdktn.IResolvable) {
        this._storageConfigurations.internalValue = value;
    }
    public resetStorageConfigurations() {
        this._storageConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationsInput() {
        return this._storageConfigurations.internalValue;
    }
}
export interface SqlKnowledgeBaseConfigurationProperty {
    /**
    * Configurations for a Redshift knowledge base
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#redshift_configuration CcKnowledgeBase#redshift_configuration}
    */
    readonly redshiftConfiguration?: RedshiftConfigurationProperty;
    /**
    * SQL query engine type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#type CcKnowledgeBase#type}
    */
    readonly type?: string;
}
export class SqlKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._redshiftConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftConfiguration = this._redshiftConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqlKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._redshiftConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._redshiftConfiguration.internalValue = value.redshiftConfiguration;
            this._type = value.type;
        }
    }

    // redshift_configuration - computed: true, optional: true, required: false
    private _redshiftConfiguration = new RedshiftConfigurationPropertyOutputReference(this, "redshift_configuration");
    public get redshiftConfiguration() {
        return this._redshiftConfiguration;
    }
    public putRedshiftConfiguration(value: RedshiftConfigurationProperty) {
        this._redshiftConfiguration.internalValue = value;
    }
    public resetRedshiftConfiguration() {
        this._redshiftConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftConfigurationInput() {
        return this._redshiftConfiguration.internalValue;
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
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty {
    /**
    * Duration in seconds to segment the multi modal media
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#fixed_length_duration CcKnowledgeBase#fixed_length_duration}
    */
    readonly fixedLengthDuration?: number;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fixedLengthDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = value.fixedLengthDuration;
        }
    }

    // fixed_length_duration - computed: true, optional: true, required: false
    private _fixedLengthDuration?: number; 
    public get fixedLengthDuration() {
        return this.getNumberAttribute('fixed_length_duration');
    }
    public set fixedLengthDuration(value: number) {
        this._fixedLengthDuration = value;
    }
    public resetFixedLengthDuration() {
        this._fixedLengthDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedLengthDurationInput() {
        return this._fixedLengthDuration;
    }
}
export interface AudioProperty {
    /**
    * Configure the audio segmentation configuration for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#segmentation_configuration CcKnowledgeBase#segmentation_configuration}
    */
    readonly segmentationConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty;
}
export class AudioPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AudioProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
        }
    }

    // segmentation_configuration - computed: true, optional: true, required: false
    private _segmentationConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationPropertyOutputReference(this, "segmentation_configuration");
    public get segmentationConfiguration() {
        return this._segmentationConfiguration;
    }
    public putSegmentationConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationAudioSegmentationConfigurationProperty) {
        this._segmentationConfiguration.internalValue = value;
    }
    public resetSegmentationConfiguration() {
        this._segmentationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationConfigurationInput() {
        return this._segmentationConfiguration.internalValue;
    }
}

export class AudioPropertyList extends cdktn.ComplexList {
    public internalValue? : AudioProperty[] | cdktn.IResolvable

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
    public get(index: number): AudioPropertyOutputReference {
        return new AudioPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty {
    /**
    * Duration in seconds to segment the multi modal media
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#fixed_length_duration CcKnowledgeBase#fixed_length_duration}
    */
    readonly fixedLengthDuration?: number;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fixedLengthDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedLengthDuration = this._fixedLengthDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fixedLengthDuration = value.fixedLengthDuration;
        }
    }

    // fixed_length_duration - computed: true, optional: true, required: false
    private _fixedLengthDuration?: number; 
    public get fixedLengthDuration() {
        return this.getNumberAttribute('fixed_length_duration');
    }
    public set fixedLengthDuration(value: number) {
        this._fixedLengthDuration = value;
    }
    public resetFixedLengthDuration() {
        this._fixedLengthDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedLengthDurationInput() {
        return this._fixedLengthDuration;
    }
}
export interface VideoProperty {
    /**
    * Configure the video segmentation configuration for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#segmentation_configuration CcKnowledgeBase#segmentation_configuration}
    */
    readonly segmentationConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty;
}
export class VideoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VideoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationConfiguration = this._segmentationConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentationConfiguration.internalValue = value.segmentationConfiguration;
        }
    }

    // segmentation_configuration - computed: true, optional: true, required: false
    private _segmentationConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationPropertyOutputReference(this, "segmentation_configuration");
    public get segmentationConfiguration() {
        return this._segmentationConfiguration;
    }
    public putSegmentationConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationVideoSegmentationConfigurationProperty) {
        this._segmentationConfiguration.internalValue = value;
    }
    public resetSegmentationConfiguration() {
        this._segmentationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationConfigurationInput() {
        return this._segmentationConfiguration.internalValue;
    }
}

export class VideoPropertyList extends cdktn.ComplexList {
    public internalValue? : VideoProperty[] | cdktn.IResolvable

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
    public get(index: number): VideoPropertyOutputReference {
        return new VideoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty {
    /**
    * List of audio configurations for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#audio CcKnowledgeBase#audio}
    */
    readonly audio?: AudioProperty[] | cdktn.IResolvable;
    /**
    * The dimensions details for the vector configuration used on the Bedrock embeddings model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#dimensions CcKnowledgeBase#dimensions}
    */
    readonly dimensions?: number;
    /**
    * The data type for the vectors when using a model to convert text into vector embeddings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#embedding_data_type CcKnowledgeBase#embedding_data_type}
    */
    readonly embeddingDataType?: string;
    /**
    * List of video configurations for multi modal ingestion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#video CcKnowledgeBase#video}
    */
    readonly video?: VideoProperty[] | cdktn.IResolvable;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audio?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.audio = this._audio?.internalValue;
        }
        if (this._dimensions !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
        }
        if (this._embeddingDataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.embeddingDataType = this._embeddingDataType;
        }
        if (this._video?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.video = this._video?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audio.internalValue = undefined;
            this._dimensions = undefined;
            this._embeddingDataType = undefined;
            this._video.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audio.internalValue = value.audio;
            this._dimensions = value.dimensions;
            this._embeddingDataType = value.embeddingDataType;
            this._video.internalValue = value.video;
        }
    }

    // audio - computed: true, optional: true, required: false
    private _audio = new AudioPropertyList(this, "audio", false);
    public get audio() {
        return this._audio;
    }
    public putAudio(value: AudioProperty[] | cdktn.IResolvable) {
        this._audio.internalValue = value;
    }
    public resetAudio() {
        this._audio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioInput() {
        return this._audio.internalValue;
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions?: number; 
    public get dimensions() {
        return this.getNumberAttribute('dimensions');
    }
    public set dimensions(value: number) {
        this._dimensions = value;
    }
    public resetDimensions() {
        this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions;
    }

    // embedding_data_type - computed: true, optional: true, required: false
    private _embeddingDataType?: string; 
    public get embeddingDataType() {
        return this.getStringAttribute('embedding_data_type');
    }
    public set embeddingDataType(value: string) {
        this._embeddingDataType = value;
    }
    public resetEmbeddingDataType() {
        this._embeddingDataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embeddingDataTypeInput() {
        return this._embeddingDataType;
    }

    // video - computed: true, optional: true, required: false
    private _video = new VideoPropertyList(this, "video", false);
    public get video() {
        return this._video;
    }
    public putVideo(value: VideoProperty[] | cdktn.IResolvable) {
        this._video.internalValue = value;
    }
    public resetVideo() {
        this._video.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoInput() {
        return this._video.internalValue;
    }
}
export interface KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty {
    /**
    * The vector configuration details for the Bedrock embeddings model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#bedrock_embedding_model_configuration CcKnowledgeBase#bedrock_embedding_model_configuration}
    */
    readonly bedrockEmbeddingModelConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty;
}
export class KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bedrockEmbeddingModelConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockEmbeddingModelConfiguration = this._bedrockEmbeddingModelConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bedrockEmbeddingModelConfiguration.internalValue = value.bedrockEmbeddingModelConfiguration;
        }
    }

    // bedrock_embedding_model_configuration - computed: true, optional: true, required: false
    private _bedrockEmbeddingModelConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationPropertyOutputReference(this, "bedrock_embedding_model_configuration");
    public get bedrockEmbeddingModelConfiguration() {
        return this._bedrockEmbeddingModelConfiguration;
    }
    public putBedrockEmbeddingModelConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationProperty) {
        this._bedrockEmbeddingModelConfiguration.internalValue = value;
    }
    public resetBedrockEmbeddingModelConfiguration() {
        this._bedrockEmbeddingModelConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockEmbeddingModelConfigurationInput() {
        return this._bedrockEmbeddingModelConfiguration.internalValue;
    }
}
export interface S3LocationProperty {
    /**
    * The location's URI
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#uri CcKnowledgeBase#uri}
    */
    readonly uri?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uri = value.uri;
        }
    }

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}
export interface SupplementalDataStorageLocationProperty {
    /**
    * An Amazon S3 location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#s3_location CcKnowledgeBase#s3_location}
    */
    readonly s3Location?: S3LocationProperty;
    /**
    * Supplemental data storage location type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#supplemental_data_storage_location_type CcKnowledgeBase#supplemental_data_storage_location_type}
    */
    readonly supplementalDataStorageLocationType?: string;
}
export class SupplementalDataStorageLocationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SupplementalDataStorageLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Location = this._s3Location?.internalValue;
        }
        if (this._supplementalDataStorageLocationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.supplementalDataStorageLocationType = this._supplementalDataStorageLocationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SupplementalDataStorageLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Location.internalValue = undefined;
            this._supplementalDataStorageLocationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Location.internalValue = value.s3Location;
            this._supplementalDataStorageLocationType = value.supplementalDataStorageLocationType;
        }
    }

    // s3_location - computed: true, optional: true, required: false
    private _s3Location = new S3LocationPropertyOutputReference(this, "s3_location");
    public get s3Location() {
        return this._s3Location;
    }
    public putS3Location(value: S3LocationProperty) {
        this._s3Location.internalValue = value;
    }
    public resetS3Location() {
        this._s3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LocationInput() {
        return this._s3Location.internalValue;
    }

    // supplemental_data_storage_location_type - computed: true, optional: true, required: false
    private _supplementalDataStorageLocationType?: string; 
    public get supplementalDataStorageLocationType() {
        return this.getStringAttribute('supplemental_data_storage_location_type');
    }
    public set supplementalDataStorageLocationType(value: string) {
        this._supplementalDataStorageLocationType = value;
    }
    public resetSupplementalDataStorageLocationType() {
        this._supplementalDataStorageLocationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supplementalDataStorageLocationTypeInput() {
        return this._supplementalDataStorageLocationType;
    }
}

export class SupplementalDataStorageLocationPropertyList extends cdktn.ComplexList {
    public internalValue? : SupplementalDataStorageLocationProperty[] | cdktn.IResolvable

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
    public get(index: number): SupplementalDataStorageLocationPropertyOutputReference {
        return new SupplementalDataStorageLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SupplementalDataStorageConfigurationProperty {
    /**
    * List of supplemental data storage locations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#supplemental_data_storage_locations CcKnowledgeBase#supplemental_data_storage_locations}
    */
    readonly supplementalDataStorageLocations?: SupplementalDataStorageLocationProperty[] | cdktn.IResolvable;
}
export class SupplementalDataStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SupplementalDataStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._supplementalDataStorageLocations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.supplementalDataStorageLocations = this._supplementalDataStorageLocations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SupplementalDataStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._supplementalDataStorageLocations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._supplementalDataStorageLocations.internalValue = value.supplementalDataStorageLocations;
        }
    }

    // supplemental_data_storage_locations - computed: true, optional: true, required: false
    private _supplementalDataStorageLocations = new SupplementalDataStorageLocationPropertyList(this, "supplemental_data_storage_locations", false);
    public get supplementalDataStorageLocations() {
        return this._supplementalDataStorageLocations;
    }
    public putSupplementalDataStorageLocations(value: SupplementalDataStorageLocationProperty[] | cdktn.IResolvable) {
        this._supplementalDataStorageLocations.internalValue = value;
    }
    public resetSupplementalDataStorageLocations() {
        this._supplementalDataStorageLocations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supplementalDataStorageLocationsInput() {
        return this._supplementalDataStorageLocations.internalValue;
    }
}
export interface VectorKnowledgeBaseConfigurationProperty {
    /**
    * The ARN of the model used to create vector embeddings for the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#embedding_model_arn CcKnowledgeBase#embedding_model_arn}
    */
    readonly embeddingModelArn?: string;
    /**
    * The embeddings model configuration details for the vector model used in Knowledge Base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#embedding_model_configuration CcKnowledgeBase#embedding_model_configuration}
    */
    readonly embeddingModelConfiguration?: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty;
    /**
    * Configurations for supplemental data storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#supplemental_data_storage_configuration CcKnowledgeBase#supplemental_data_storage_configuration}
    */
    readonly supplementalDataStorageConfiguration?: SupplementalDataStorageConfigurationProperty;
}
export class VectorKnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._embeddingModelArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.embeddingModelArn = this._embeddingModelArn;
        }
        if (this._embeddingModelConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.embeddingModelConfiguration = this._embeddingModelConfiguration?.internalValue;
        }
        if (this._supplementalDataStorageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.supplementalDataStorageConfiguration = this._supplementalDataStorageConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VectorKnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._embeddingModelArn = undefined;
            this._embeddingModelConfiguration.internalValue = undefined;
            this._supplementalDataStorageConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._embeddingModelArn = value.embeddingModelArn;
            this._embeddingModelConfiguration.internalValue = value.embeddingModelConfiguration;
            this._supplementalDataStorageConfiguration.internalValue = value.supplementalDataStorageConfiguration;
        }
    }

    // embedding_model_arn - computed: true, optional: true, required: false
    private _embeddingModelArn?: string; 
    public get embeddingModelArn() {
        return this.getStringAttribute('embedding_model_arn');
    }
    public set embeddingModelArn(value: string) {
        this._embeddingModelArn = value;
    }
    public resetEmbeddingModelArn() {
        this._embeddingModelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embeddingModelArnInput() {
        return this._embeddingModelArn;
    }

    // embedding_model_configuration - computed: true, optional: true, required: false
    private _embeddingModelConfiguration = new KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationPropertyOutputReference(this, "embedding_model_configuration");
    public get embeddingModelConfiguration() {
        return this._embeddingModelConfiguration;
    }
    public putEmbeddingModelConfiguration(value: KnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationProperty) {
        this._embeddingModelConfiguration.internalValue = value;
    }
    public resetEmbeddingModelConfiguration() {
        this._embeddingModelConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embeddingModelConfigurationInput() {
        return this._embeddingModelConfiguration.internalValue;
    }

    // supplemental_data_storage_configuration - computed: true, optional: true, required: false
    private _supplementalDataStorageConfiguration = new SupplementalDataStorageConfigurationPropertyOutputReference(this, "supplemental_data_storage_configuration");
    public get supplementalDataStorageConfiguration() {
        return this._supplementalDataStorageConfiguration;
    }
    public putSupplementalDataStorageConfiguration(value: SupplementalDataStorageConfigurationProperty) {
        this._supplementalDataStorageConfiguration.internalValue = value;
    }
    public resetSupplementalDataStorageConfiguration() {
        this._supplementalDataStorageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supplementalDataStorageConfigurationInput() {
        return this._supplementalDataStorageConfiguration.internalValue;
    }
}
export interface KnowledgeBaseConfigurationProperty {
    /**
    * Configurations for a Kendra knowledge base
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#kendra_knowledge_base_configuration CcKnowledgeBase#kendra_knowledge_base_configuration}
    */
    readonly kendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfigurationProperty;
    /**
    * Contains details about the model used to create vector embeddings for a managed knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#managed_knowledge_base_configuration CcKnowledgeBase#managed_knowledge_base_configuration}
    */
    readonly managedKnowledgeBaseConfiguration?: ManagedKnowledgeBaseConfigurationProperty;
    /**
    * Configurations for a SQL knowledge base
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#sql_knowledge_base_configuration CcKnowledgeBase#sql_knowledge_base_configuration}
    */
    readonly sqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfigurationProperty;
    /**
    * The type of a knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#type CcKnowledgeBase#type}
    */
    readonly type: string;
    /**
    * Contains details about the model used to create vector embeddings for the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_knowledge_base_configuration CcKnowledgeBase#vector_knowledge_base_configuration}
    */
    readonly vectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfigurationProperty;
}
export class KnowledgeBaseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kendraKnowledgeBaseConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kendraKnowledgeBaseConfiguration = this._kendraKnowledgeBaseConfiguration?.internalValue;
        }
        if (this._managedKnowledgeBaseConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedKnowledgeBaseConfiguration = this._managedKnowledgeBaseConfiguration?.internalValue;
        }
        if (this._sqlKnowledgeBaseConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlKnowledgeBaseConfiguration = this._sqlKnowledgeBaseConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._vectorKnowledgeBaseConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorKnowledgeBaseConfiguration = this._vectorKnowledgeBaseConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KnowledgeBaseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kendraKnowledgeBaseConfiguration.internalValue = undefined;
            this._managedKnowledgeBaseConfiguration.internalValue = undefined;
            this._sqlKnowledgeBaseConfiguration.internalValue = undefined;
            this._type = undefined;
            this._vectorKnowledgeBaseConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kendraKnowledgeBaseConfiguration.internalValue = value.kendraKnowledgeBaseConfiguration;
            this._managedKnowledgeBaseConfiguration.internalValue = value.managedKnowledgeBaseConfiguration;
            this._sqlKnowledgeBaseConfiguration.internalValue = value.sqlKnowledgeBaseConfiguration;
            this._type = value.type;
            this._vectorKnowledgeBaseConfiguration.internalValue = value.vectorKnowledgeBaseConfiguration;
        }
    }

    // kendra_knowledge_base_configuration - computed: true, optional: true, required: false
    private _kendraKnowledgeBaseConfiguration = new KendraKnowledgeBaseConfigurationPropertyOutputReference(this, "kendra_knowledge_base_configuration");
    public get kendraKnowledgeBaseConfiguration() {
        return this._kendraKnowledgeBaseConfiguration;
    }
    public putKendraKnowledgeBaseConfiguration(value: KendraKnowledgeBaseConfigurationProperty) {
        this._kendraKnowledgeBaseConfiguration.internalValue = value;
    }
    public resetKendraKnowledgeBaseConfiguration() {
        this._kendraKnowledgeBaseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kendraKnowledgeBaseConfigurationInput() {
        return this._kendraKnowledgeBaseConfiguration.internalValue;
    }

    // managed_knowledge_base_configuration - computed: true, optional: true, required: false
    private _managedKnowledgeBaseConfiguration = new ManagedKnowledgeBaseConfigurationPropertyOutputReference(this, "managed_knowledge_base_configuration");
    public get managedKnowledgeBaseConfiguration() {
        return this._managedKnowledgeBaseConfiguration;
    }
    public putManagedKnowledgeBaseConfiguration(value: ManagedKnowledgeBaseConfigurationProperty) {
        this._managedKnowledgeBaseConfiguration.internalValue = value;
    }
    public resetManagedKnowledgeBaseConfiguration() {
        this._managedKnowledgeBaseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedKnowledgeBaseConfigurationInput() {
        return this._managedKnowledgeBaseConfiguration.internalValue;
    }

    // sql_knowledge_base_configuration - computed: true, optional: true, required: false
    private _sqlKnowledgeBaseConfiguration = new SqlKnowledgeBaseConfigurationPropertyOutputReference(this, "sql_knowledge_base_configuration");
    public get sqlKnowledgeBaseConfiguration() {
        return this._sqlKnowledgeBaseConfiguration;
    }
    public putSqlKnowledgeBaseConfiguration(value: SqlKnowledgeBaseConfigurationProperty) {
        this._sqlKnowledgeBaseConfiguration.internalValue = value;
    }
    public resetSqlKnowledgeBaseConfiguration() {
        this._sqlKnowledgeBaseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlKnowledgeBaseConfigurationInput() {
        return this._sqlKnowledgeBaseConfiguration.internalValue;
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

    // vector_knowledge_base_configuration - computed: true, optional: true, required: false
    private _vectorKnowledgeBaseConfiguration = new VectorKnowledgeBaseConfigurationPropertyOutputReference(this, "vector_knowledge_base_configuration");
    public get vectorKnowledgeBaseConfiguration() {
        return this._vectorKnowledgeBaseConfiguration;
    }
    public putVectorKnowledgeBaseConfiguration(value: VectorKnowledgeBaseConfigurationProperty) {
        this._vectorKnowledgeBaseConfiguration.internalValue = value;
    }
    public resetVectorKnowledgeBaseConfiguration() {
        this._vectorKnowledgeBaseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorKnowledgeBaseConfigurationInput() {
        return this._vectorKnowledgeBaseConfiguration.internalValue;
    }
}
export interface MongoDbAtlasFieldMappingProperty {
    /**
    * The name of the field in which Amazon Bedrock stores metadata about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#metadata_field CcKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#text_field CcKnowledgeBase#text_field}
    */
    readonly textField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_field CcKnowledgeBase#vector_field}
    */
    readonly vectorField?: string;
}
export class MongoDbAtlasFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MongoDbAtlasFieldMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataField !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataField = this._metadataField;
        }
        if (this._textField !== undefined) {
            hasAnyValues = true;
            internalValueResult.textField = this._textField;
        }
        if (this._vectorField !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorField = this._vectorField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MongoDbAtlasFieldMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataField = undefined;
            this._textField = undefined;
            this._vectorField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataField = value.metadataField;
            this._textField = value.textField;
            this._vectorField = value.vectorField;
        }
    }

    // metadata_field - computed: true, optional: true, required: false
    private _metadataField?: string; 
    public get metadataField() {
        return this.getStringAttribute('metadata_field');
    }
    public set metadataField(value: string) {
        this._metadataField = value;
    }
    public resetMetadataField() {
        this._metadataField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataFieldInput() {
        return this._metadataField;
    }

    // text_field - computed: true, optional: true, required: false
    private _textField?: string; 
    public get textField() {
        return this.getStringAttribute('text_field');
    }
    public set textField(value: string) {
        this._textField = value;
    }
    public resetTextField() {
        this._textField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFieldInput() {
        return this._textField;
    }

    // vector_field - computed: true, optional: true, required: false
    private _vectorField?: string; 
    public get vectorField() {
        return this.getStringAttribute('vector_field');
    }
    public set vectorField(value: string) {
        this._vectorField = value;
    }
    public resetVectorField() {
        this._vectorField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorFieldInput() {
        return this._vectorField;
    }
}
export interface MongoDbAtlasConfigurationProperty {
    /**
    * Name of the collection within MongoDB Atlas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#collection_name CcKnowledgeBase#collection_name}
    */
    readonly collectionName?: string;
    /**
    * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon Mongo database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#credentials_secret_arn CcKnowledgeBase#credentials_secret_arn}
    */
    readonly credentialsSecretArn?: string;
    /**
    * Name of the database within MongoDB Atlas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#database_name CcKnowledgeBase#database_name}
    */
    readonly databaseName?: string;
    /**
    * MongoDB Atlas endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#endpoint CcKnowledgeBase#endpoint}
    */
    readonly endpoint?: string;
    /**
    * MongoDB Atlas endpoint service name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#endpoint_service_name CcKnowledgeBase#endpoint_service_name}
    */
    readonly endpointServiceName?: string;
    /**
    * Contains the names of the fields to which to map information about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#field_mapping CcKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: MongoDbAtlasFieldMappingProperty;
    /**
    * Name of a MongoDB Atlas text index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#text_index_name CcKnowledgeBase#text_index_name}
    */
    readonly textIndexName?: string;
    /**
    * Name of a MongoDB Atlas index.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_index_name CcKnowledgeBase#vector_index_name}
    */
    readonly vectorIndexName?: string;
}
export class MongoDbAtlasConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MongoDbAtlasConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._collectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.collectionName = this._collectionName;
        }
        if (this._credentialsSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._endpointServiceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointServiceName = this._endpointServiceName;
        }
        if (this._fieldMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
        }
        if (this._textIndexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.textIndexName = this._textIndexName;
        }
        if (this._vectorIndexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorIndexName = this._vectorIndexName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MongoDbAtlasConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._collectionName = undefined;
            this._credentialsSecretArn = undefined;
            this._databaseName = undefined;
            this._endpoint = undefined;
            this._endpointServiceName = undefined;
            this._fieldMapping.internalValue = undefined;
            this._textIndexName = undefined;
            this._vectorIndexName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._collectionName = value.collectionName;
            this._credentialsSecretArn = value.credentialsSecretArn;
            this._databaseName = value.databaseName;
            this._endpoint = value.endpoint;
            this._endpointServiceName = value.endpointServiceName;
            this._fieldMapping.internalValue = value.fieldMapping;
            this._textIndexName = value.textIndexName;
            this._vectorIndexName = value.vectorIndexName;
        }
    }

    // collection_name - computed: true, optional: true, required: false
    private _collectionName?: string; 
    public get collectionName() {
        return this.getStringAttribute('collection_name');
    }
    public set collectionName(value: string) {
        this._collectionName = value;
    }
    public resetCollectionName() {
        this._collectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get collectionNameInput() {
        return this._collectionName;
    }

    // credentials_secret_arn - computed: true, optional: true, required: false
    private _credentialsSecretArn?: string; 
    public get credentialsSecretArn() {
        return this.getStringAttribute('credentials_secret_arn');
    }
    public set credentialsSecretArn(value: string) {
        this._credentialsSecretArn = value;
    }
    public resetCredentialsSecretArn() {
        this._credentialsSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsSecretArnInput() {
        return this._credentialsSecretArn;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }

    // endpoint_service_name - computed: true, optional: true, required: false
    private _endpointServiceName?: string; 
    public get endpointServiceName() {
        return this.getStringAttribute('endpoint_service_name');
    }
    public set endpointServiceName(value: string) {
        this._endpointServiceName = value;
    }
    public resetEndpointServiceName() {
        this._endpointServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointServiceNameInput() {
        return this._endpointServiceName;
    }

    // field_mapping - computed: true, optional: true, required: false
    private _fieldMapping = new MongoDbAtlasFieldMappingPropertyOutputReference(this, "field_mapping");
    public get fieldMapping() {
        return this._fieldMapping;
    }
    public putFieldMapping(value: MongoDbAtlasFieldMappingProperty) {
        this._fieldMapping.internalValue = value;
    }
    public resetFieldMapping() {
        this._fieldMapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldMappingInput() {
        return this._fieldMapping.internalValue;
    }

    // text_index_name - computed: true, optional: true, required: false
    private _textIndexName?: string; 
    public get textIndexName() {
        return this.getStringAttribute('text_index_name');
    }
    public set textIndexName(value: string) {
        this._textIndexName = value;
    }
    public resetTextIndexName() {
        this._textIndexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textIndexNameInput() {
        return this._textIndexName;
    }

    // vector_index_name - computed: true, optional: true, required: false
    private _vectorIndexName?: string; 
    public get vectorIndexName() {
        return this.getStringAttribute('vector_index_name');
    }
    public set vectorIndexName(value: string) {
        this._vectorIndexName = value;
    }
    public resetVectorIndexName() {
        this._vectorIndexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorIndexNameInput() {
        return this._vectorIndexName;
    }
}
export interface NeptuneAnalyticsFieldMappingProperty {
    /**
    * The name of the field in which Amazon Bedrock stores metadata about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#metadata_field CcKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#text_field CcKnowledgeBase#text_field}
    */
    readonly textField?: string;
}
export class NeptuneAnalyticsFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NeptuneAnalyticsFieldMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataField !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataField = this._metadataField;
        }
        if (this._textField !== undefined) {
            hasAnyValues = true;
            internalValueResult.textField = this._textField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NeptuneAnalyticsFieldMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataField = undefined;
            this._textField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataField = value.metadataField;
            this._textField = value.textField;
        }
    }

    // metadata_field - computed: true, optional: true, required: false
    private _metadataField?: string; 
    public get metadataField() {
        return this.getStringAttribute('metadata_field');
    }
    public set metadataField(value: string) {
        this._metadataField = value;
    }
    public resetMetadataField() {
        this._metadataField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataFieldInput() {
        return this._metadataField;
    }

    // text_field - computed: true, optional: true, required: false
    private _textField?: string; 
    public get textField() {
        return this.getStringAttribute('text_field');
    }
    public set textField(value: string) {
        this._textField = value;
    }
    public resetTextField() {
        this._textField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFieldInput() {
        return this._textField;
    }
}
export interface NeptuneAnalyticsConfigurationProperty {
    /**
    * A mapping of Bedrock Knowledge Base fields to Neptune Analytics fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#field_mapping CcKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: NeptuneAnalyticsFieldMappingProperty;
    /**
    * ARN for Neptune Analytics graph database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#graph_arn CcKnowledgeBase#graph_arn}
    */
    readonly graphArn?: string;
}
export class NeptuneAnalyticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
        }
        if (this._graphArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.graphArn = this._graphArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NeptuneAnalyticsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldMapping.internalValue = undefined;
            this._graphArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldMapping.internalValue = value.fieldMapping;
            this._graphArn = value.graphArn;
        }
    }

    // field_mapping - computed: true, optional: true, required: false
    private _fieldMapping = new NeptuneAnalyticsFieldMappingPropertyOutputReference(this, "field_mapping");
    public get fieldMapping() {
        return this._fieldMapping;
    }
    public putFieldMapping(value: NeptuneAnalyticsFieldMappingProperty) {
        this._fieldMapping.internalValue = value;
    }
    public resetFieldMapping() {
        this._fieldMapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldMappingInput() {
        return this._fieldMapping.internalValue;
    }

    // graph_arn - computed: true, optional: true, required: false
    private _graphArn?: string; 
    public get graphArn() {
        return this.getStringAttribute('graph_arn');
    }
    public set graphArn(value: string) {
        this._graphArn = value;
    }
    public resetGraphArn() {
        this._graphArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get graphArnInput() {
        return this._graphArn;
    }
}
export interface OpenSearchManagedClusterFieldMappingProperty {
    /**
    * The name of the field in which Amazon Bedrock stores metadata about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#metadata_field CcKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#text_field CcKnowledgeBase#text_field}
    */
    readonly textField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_field CcKnowledgeBase#vector_field}
    */
    readonly vectorField?: string;
}
export class OpenSearchManagedClusterFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchManagedClusterFieldMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataField !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataField = this._metadataField;
        }
        if (this._textField !== undefined) {
            hasAnyValues = true;
            internalValueResult.textField = this._textField;
        }
        if (this._vectorField !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorField = this._vectorField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchManagedClusterFieldMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataField = undefined;
            this._textField = undefined;
            this._vectorField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataField = value.metadataField;
            this._textField = value.textField;
            this._vectorField = value.vectorField;
        }
    }

    // metadata_field - computed: true, optional: true, required: false
    private _metadataField?: string; 
    public get metadataField() {
        return this.getStringAttribute('metadata_field');
    }
    public set metadataField(value: string) {
        this._metadataField = value;
    }
    public resetMetadataField() {
        this._metadataField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataFieldInput() {
        return this._metadataField;
    }

    // text_field - computed: true, optional: true, required: false
    private _textField?: string; 
    public get textField() {
        return this.getStringAttribute('text_field');
    }
    public set textField(value: string) {
        this._textField = value;
    }
    public resetTextField() {
        this._textField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFieldInput() {
        return this._textField;
    }

    // vector_field - computed: true, optional: true, required: false
    private _vectorField?: string; 
    public get vectorField() {
        return this.getStringAttribute('vector_field');
    }
    public set vectorField(value: string) {
        this._vectorField = value;
    }
    public resetVectorField() {
        this._vectorField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorFieldInput() {
        return this._vectorField;
    }
}
export interface OpenSearchManagedClusterConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the OpenSearch domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#domain_arn CcKnowledgeBase#domain_arn}
    */
    readonly domainArn?: string;
    /**
    * The endpoint URL the OpenSearch domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#domain_endpoint CcKnowledgeBase#domain_endpoint}
    */
    readonly domainEndpoint?: string;
    /**
    * A mapping of Bedrock Knowledge Base fields to OpenSearch Managed Cluster field names
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#field_mapping CcKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: OpenSearchManagedClusterFieldMappingProperty;
    /**
    * The name of the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_index_name CcKnowledgeBase#vector_index_name}
    */
    readonly vectorIndexName?: string;
}
export class OpenSearchManagedClusterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchManagedClusterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainArn = this._domainArn;
        }
        if (this._domainEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainEndpoint = this._domainEndpoint;
        }
        if (this._fieldMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
        }
        if (this._vectorIndexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorIndexName = this._vectorIndexName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchManagedClusterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainArn = undefined;
            this._domainEndpoint = undefined;
            this._fieldMapping.internalValue = undefined;
            this._vectorIndexName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainArn = value.domainArn;
            this._domainEndpoint = value.domainEndpoint;
            this._fieldMapping.internalValue = value.fieldMapping;
            this._vectorIndexName = value.vectorIndexName;
        }
    }

    // domain_arn - computed: true, optional: true, required: false
    private _domainArn?: string; 
    public get domainArn() {
        return this.getStringAttribute('domain_arn');
    }
    public set domainArn(value: string) {
        this._domainArn = value;
    }
    public resetDomainArn() {
        this._domainArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainArnInput() {
        return this._domainArn;
    }

    // domain_endpoint - computed: true, optional: true, required: false
    private _domainEndpoint?: string; 
    public get domainEndpoint() {
        return this.getStringAttribute('domain_endpoint');
    }
    public set domainEndpoint(value: string) {
        this._domainEndpoint = value;
    }
    public resetDomainEndpoint() {
        this._domainEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainEndpointInput() {
        return this._domainEndpoint;
    }

    // field_mapping - computed: true, optional: true, required: false
    private _fieldMapping = new OpenSearchManagedClusterFieldMappingPropertyOutputReference(this, "field_mapping");
    public get fieldMapping() {
        return this._fieldMapping;
    }
    public putFieldMapping(value: OpenSearchManagedClusterFieldMappingProperty) {
        this._fieldMapping.internalValue = value;
    }
    public resetFieldMapping() {
        this._fieldMapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldMappingInput() {
        return this._fieldMapping.internalValue;
    }

    // vector_index_name - computed: true, optional: true, required: false
    private _vectorIndexName?: string; 
    public get vectorIndexName() {
        return this.getStringAttribute('vector_index_name');
    }
    public set vectorIndexName(value: string) {
        this._vectorIndexName = value;
    }
    public resetVectorIndexName() {
        this._vectorIndexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorIndexNameInput() {
        return this._vectorIndexName;
    }
}
export interface OpenSearchServerlessFieldMappingProperty {
    /**
    * The name of the field in which Amazon Bedrock stores metadata about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#metadata_field CcKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#text_field CcKnowledgeBase#text_field}
    */
    readonly textField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_field CcKnowledgeBase#vector_field}
    */
    readonly vectorField?: string;
}
export class OpenSearchServerlessFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchServerlessFieldMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataField !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataField = this._metadataField;
        }
        if (this._textField !== undefined) {
            hasAnyValues = true;
            internalValueResult.textField = this._textField;
        }
        if (this._vectorField !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorField = this._vectorField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchServerlessFieldMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataField = undefined;
            this._textField = undefined;
            this._vectorField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataField = value.metadataField;
            this._textField = value.textField;
            this._vectorField = value.vectorField;
        }
    }

    // metadata_field - computed: true, optional: true, required: false
    private _metadataField?: string; 
    public get metadataField() {
        return this.getStringAttribute('metadata_field');
    }
    public set metadataField(value: string) {
        this._metadataField = value;
    }
    public resetMetadataField() {
        this._metadataField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataFieldInput() {
        return this._metadataField;
    }

    // text_field - computed: true, optional: true, required: false
    private _textField?: string; 
    public get textField() {
        return this.getStringAttribute('text_field');
    }
    public set textField(value: string) {
        this._textField = value;
    }
    public resetTextField() {
        this._textField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFieldInput() {
        return this._textField;
    }

    // vector_field - computed: true, optional: true, required: false
    private _vectorField?: string; 
    public get vectorField() {
        return this.getStringAttribute('vector_field');
    }
    public set vectorField(value: string) {
        this._vectorField = value;
    }
    public resetVectorField() {
        this._vectorField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorFieldInput() {
        return this._vectorField;
    }
}
export interface OpenSearchServerlessConfigurationProperty {
    /**
    * The ARN of the OpenSearch Service vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#collection_arn CcKnowledgeBase#collection_arn}
    */
    readonly collectionArn?: string;
    /**
    * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#field_mapping CcKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: OpenSearchServerlessFieldMappingProperty;
    /**
    * The name of the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_index_name CcKnowledgeBase#vector_index_name}
    */
    readonly vectorIndexName?: string;
}
export class OpenSearchServerlessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchServerlessConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._collectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.collectionArn = this._collectionArn;
        }
        if (this._fieldMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
        }
        if (this._vectorIndexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorIndexName = this._vectorIndexName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchServerlessConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._collectionArn = undefined;
            this._fieldMapping.internalValue = undefined;
            this._vectorIndexName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._collectionArn = value.collectionArn;
            this._fieldMapping.internalValue = value.fieldMapping;
            this._vectorIndexName = value.vectorIndexName;
        }
    }

    // collection_arn - computed: true, optional: true, required: false
    private _collectionArn?: string; 
    public get collectionArn() {
        return this.getStringAttribute('collection_arn');
    }
    public set collectionArn(value: string) {
        this._collectionArn = value;
    }
    public resetCollectionArn() {
        this._collectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get collectionArnInput() {
        return this._collectionArn;
    }

    // field_mapping - computed: true, optional: true, required: false
    private _fieldMapping = new OpenSearchServerlessFieldMappingPropertyOutputReference(this, "field_mapping");
    public get fieldMapping() {
        return this._fieldMapping;
    }
    public putFieldMapping(value: OpenSearchServerlessFieldMappingProperty) {
        this._fieldMapping.internalValue = value;
    }
    public resetFieldMapping() {
        this._fieldMapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldMappingInput() {
        return this._fieldMapping.internalValue;
    }

    // vector_index_name - computed: true, optional: true, required: false
    private _vectorIndexName?: string; 
    public get vectorIndexName() {
        return this.getStringAttribute('vector_index_name');
    }
    public set vectorIndexName(value: string) {
        this._vectorIndexName = value;
    }
    public resetVectorIndexName() {
        this._vectorIndexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorIndexNameInput() {
        return this._vectorIndexName;
    }
}
export interface PineconeFieldMappingProperty {
    /**
    * The name of the field in which Amazon Bedrock stores metadata about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#metadata_field CcKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#text_field CcKnowledgeBase#text_field}
    */
    readonly textField?: string;
}
export class PineconeFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PineconeFieldMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metadataField !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataField = this._metadataField;
        }
        if (this._textField !== undefined) {
            hasAnyValues = true;
            internalValueResult.textField = this._textField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PineconeFieldMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metadataField = undefined;
            this._textField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metadataField = value.metadataField;
            this._textField = value.textField;
        }
    }

    // metadata_field - computed: true, optional: true, required: false
    private _metadataField?: string; 
    public get metadataField() {
        return this.getStringAttribute('metadata_field');
    }
    public set metadataField(value: string) {
        this._metadataField = value;
    }
    public resetMetadataField() {
        this._metadataField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataFieldInput() {
        return this._metadataField;
    }

    // text_field - computed: true, optional: true, required: false
    private _textField?: string; 
    public get textField() {
        return this.getStringAttribute('text_field');
    }
    public set textField(value: string) {
        this._textField = value;
    }
    public resetTextField() {
        this._textField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFieldInput() {
        return this._textField;
    }
}
export interface PineconeConfigurationProperty {
    /**
    * The endpoint URL for your index management page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#connection_string CcKnowledgeBase#connection_string}
    */
    readonly connectionString?: string;
    /**
    * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#credentials_secret_arn CcKnowledgeBase#credentials_secret_arn}
    */
    readonly credentialsSecretArn?: string;
    /**
    * Contains the names of the fields to which to map information about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#field_mapping CcKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: PineconeFieldMappingProperty;
    /**
    * The namespace to be used to write new data to your database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#namespace CcKnowledgeBase#namespace}
    */
    readonly namespace?: string;
}
export class PineconeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PineconeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionString !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionString = this._connectionString;
        }
        if (this._credentialsSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
        }
        if (this._fieldMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PineconeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionString = undefined;
            this._credentialsSecretArn = undefined;
            this._fieldMapping.internalValue = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionString = value.connectionString;
            this._credentialsSecretArn = value.credentialsSecretArn;
            this._fieldMapping.internalValue = value.fieldMapping;
            this._namespace = value.namespace;
        }
    }

    // connection_string - computed: true, optional: true, required: false
    private _connectionString?: string; 
    public get connectionString() {
        return this.getStringAttribute('connection_string');
    }
    public set connectionString(value: string) {
        this._connectionString = value;
    }
    public resetConnectionString() {
        this._connectionString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionStringInput() {
        return this._connectionString;
    }

    // credentials_secret_arn - computed: true, optional: true, required: false
    private _credentialsSecretArn?: string; 
    public get credentialsSecretArn() {
        return this.getStringAttribute('credentials_secret_arn');
    }
    public set credentialsSecretArn(value: string) {
        this._credentialsSecretArn = value;
    }
    public resetCredentialsSecretArn() {
        this._credentialsSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsSecretArnInput() {
        return this._credentialsSecretArn;
    }

    // field_mapping - computed: true, optional: true, required: false
    private _fieldMapping = new PineconeFieldMappingPropertyOutputReference(this, "field_mapping");
    public get fieldMapping() {
        return this._fieldMapping;
    }
    public putFieldMapping(value: PineconeFieldMappingProperty) {
        this._fieldMapping.internalValue = value;
    }
    public resetFieldMapping() {
        this._fieldMapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldMappingInput() {
        return this._fieldMapping.internalValue;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }
}
export interface RdsFieldMappingProperty {
    /**
    * The name of the field in which Amazon Bedrock stores custom metadata about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#custom_metadata_field CcKnowledgeBase#custom_metadata_field}
    */
    readonly customMetadataField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores metadata about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#metadata_field CcKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the ID for each entry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#primary_key_field CcKnowledgeBase#primary_key_field}
    */
    readonly primaryKeyField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#text_field CcKnowledgeBase#text_field}
    */
    readonly textField?: string;
    /**
    * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_field CcKnowledgeBase#vector_field}
    */
    readonly vectorField?: string;
}
export class RdsFieldMappingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RdsFieldMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customMetadataField !== undefined) {
            hasAnyValues = true;
            internalValueResult.customMetadataField = this._customMetadataField;
        }
        if (this._metadataField !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadataField = this._metadataField;
        }
        if (this._primaryKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryKeyField = this._primaryKeyField;
        }
        if (this._textField !== undefined) {
            hasAnyValues = true;
            internalValueResult.textField = this._textField;
        }
        if (this._vectorField !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorField = this._vectorField;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RdsFieldMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customMetadataField = undefined;
            this._metadataField = undefined;
            this._primaryKeyField = undefined;
            this._textField = undefined;
            this._vectorField = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customMetadataField = value.customMetadataField;
            this._metadataField = value.metadataField;
            this._primaryKeyField = value.primaryKeyField;
            this._textField = value.textField;
            this._vectorField = value.vectorField;
        }
    }

    // custom_metadata_field - computed: true, optional: true, required: false
    private _customMetadataField?: string; 
    public get customMetadataField() {
        return this.getStringAttribute('custom_metadata_field');
    }
    public set customMetadataField(value: string) {
        this._customMetadataField = value;
    }
    public resetCustomMetadataField() {
        this._customMetadataField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customMetadataFieldInput() {
        return this._customMetadataField;
    }

    // metadata_field - computed: true, optional: true, required: false
    private _metadataField?: string; 
    public get metadataField() {
        return this.getStringAttribute('metadata_field');
    }
    public set metadataField(value: string) {
        this._metadataField = value;
    }
    public resetMetadataField() {
        this._metadataField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataFieldInput() {
        return this._metadataField;
    }

    // primary_key_field - computed: true, optional: true, required: false
    private _primaryKeyField?: string; 
    public get primaryKeyField() {
        return this.getStringAttribute('primary_key_field');
    }
    public set primaryKeyField(value: string) {
        this._primaryKeyField = value;
    }
    public resetPrimaryKeyField() {
        this._primaryKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryKeyFieldInput() {
        return this._primaryKeyField;
    }

    // text_field - computed: true, optional: true, required: false
    private _textField?: string; 
    public get textField() {
        return this.getStringAttribute('text_field');
    }
    public set textField(value: string) {
        this._textField = value;
    }
    public resetTextField() {
        this._textField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFieldInput() {
        return this._textField;
    }

    // vector_field - computed: true, optional: true, required: false
    private _vectorField?: string; 
    public get vectorField() {
        return this.getStringAttribute('vector_field');
    }
    public set vectorField(value: string) {
        this._vectorField = value;
    }
    public resetVectorField() {
        this._vectorField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorFieldInput() {
        return this._vectorField;
    }
}
export interface RdsConfigurationProperty {
    /**
    * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#credentials_secret_arn CcKnowledgeBase#credentials_secret_arn}
    */
    readonly credentialsSecretArn?: string;
    /**
    * The name of your Amazon RDS database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#database_name CcKnowledgeBase#database_name}
    */
    readonly databaseName?: string;
    /**
    * Contains the names of the fields to which to map information about the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#field_mapping CcKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: RdsFieldMappingProperty;
    /**
    * The ARN of the vector store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#resource_arn CcKnowledgeBase#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * The name of the table in the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#table_name CcKnowledgeBase#table_name}
    */
    readonly tableName?: string;
}
export class RdsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RdsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialsSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._fieldMapping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldMapping = this._fieldMapping?.internalValue;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RdsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialsSecretArn = undefined;
            this._databaseName = undefined;
            this._fieldMapping.internalValue = undefined;
            this._resourceArn = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialsSecretArn = value.credentialsSecretArn;
            this._databaseName = value.databaseName;
            this._fieldMapping.internalValue = value.fieldMapping;
            this._resourceArn = value.resourceArn;
            this._tableName = value.tableName;
        }
    }

    // credentials_secret_arn - computed: true, optional: true, required: false
    private _credentialsSecretArn?: string; 
    public get credentialsSecretArn() {
        return this.getStringAttribute('credentials_secret_arn');
    }
    public set credentialsSecretArn(value: string) {
        this._credentialsSecretArn = value;
    }
    public resetCredentialsSecretArn() {
        this._credentialsSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsSecretArnInput() {
        return this._credentialsSecretArn;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // field_mapping - computed: true, optional: true, required: false
    private _fieldMapping = new RdsFieldMappingPropertyOutputReference(this, "field_mapping");
    public get fieldMapping() {
        return this._fieldMapping;
    }
    public putFieldMapping(value: RdsFieldMappingProperty) {
        this._fieldMapping.internalValue = value;
    }
    public resetFieldMapping() {
        this._fieldMapping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldMappingInput() {
        return this._fieldMapping.internalValue;
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface S3VectorsConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the vector index used for the knowledge base. This ARN identifies the specific vector index resource within Amazon Bedrock.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#index_arn CcKnowledgeBase#index_arn}
    */
    readonly indexArn?: string;
    /**
    * The name of the vector index used for the knowledge base. This name identifies the vector index within the Amazon Bedrock service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#index_name CcKnowledgeBase#index_name}
    */
    readonly indexName?: string;
    /**
    * The Amazon Resource Name (ARN) of the S3 bucket where vector embeddings are stored. This bucket contains the vector data used by the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#vector_bucket_arn CcKnowledgeBase#vector_bucket_arn}
    */
    readonly vectorBucketArn?: string;
}
export class S3VectorsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3VectorsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._indexArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexArn = this._indexArn;
        }
        if (this._indexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        if (this._vectorBucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorBucketArn = this._vectorBucketArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3VectorsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._indexArn = undefined;
            this._indexName = undefined;
            this._vectorBucketArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._indexArn = value.indexArn;
            this._indexName = value.indexName;
            this._vectorBucketArn = value.vectorBucketArn;
        }
    }

    // index_arn - computed: true, optional: true, required: false
    private _indexArn?: string; 
    public get indexArn() {
        return this.getStringAttribute('index_arn');
    }
    public set indexArn(value: string) {
        this._indexArn = value;
    }
    public resetIndexArn() {
        this._indexArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexArnInput() {
        return this._indexArn;
    }

    // index_name - computed: true, optional: true, required: false
    private _indexName?: string; 
    public get indexName() {
        return this.getStringAttribute('index_name');
    }
    public set indexName(value: string) {
        this._indexName = value;
    }
    public resetIndexName() {
        this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
        return this._indexName;
    }

    // vector_bucket_arn - computed: true, optional: true, required: false
    private _vectorBucketArn?: string; 
    public get vectorBucketArn() {
        return this.getStringAttribute('vector_bucket_arn');
    }
    public set vectorBucketArn(value: string) {
        this._vectorBucketArn = value;
    }
    public resetVectorBucketArn() {
        this._vectorBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorBucketArnInput() {
        return this._vectorBucketArn;
    }
}
export interface StorageConfigurationProperty {
    /**
    * Contains the storage configuration of the knowledge base in MongoDb Atlas Cloud.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#mongo_db_atlas_configuration CcKnowledgeBase#mongo_db_atlas_configuration}
    */
    readonly mongoDbAtlasConfiguration?: MongoDbAtlasConfigurationProperty;
    /**
    * Contains the configurations to use Neptune Analytics as Vector Store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#neptune_analytics_configuration CcKnowledgeBase#neptune_analytics_configuration}
    */
    readonly neptuneAnalyticsConfiguration?: NeptuneAnalyticsConfigurationProperty;
    /**
    * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#opensearch_managed_cluster_configuration CcKnowledgeBase#opensearch_managed_cluster_configuration}
    */
    readonly opensearchManagedClusterConfiguration?: OpenSearchManagedClusterConfigurationProperty;
    /**
    * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#opensearch_serverless_configuration CcKnowledgeBase#opensearch_serverless_configuration}
    */
    readonly opensearchServerlessConfiguration?: OpenSearchServerlessConfigurationProperty;
    /**
    * Contains the storage configuration of the knowledge base in Pinecone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#pinecone_configuration CcKnowledgeBase#pinecone_configuration}
    */
    readonly pineconeConfiguration?: PineconeConfigurationProperty;
    /**
    * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see Create a vector index in Amazon RDS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#rds_configuration CcKnowledgeBase#rds_configuration}
    */
    readonly rdsConfiguration?: RdsConfigurationProperty;
    /**
    * Contains the storage configuration of the knowledge base for S3 vectors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#s3_vectors_configuration CcKnowledgeBase#s3_vectors_configuration}
    */
    readonly s3VectorsConfiguration?: S3VectorsConfigurationProperty;
    /**
    * The storage type of a knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_knowledge_base#type CcKnowledgeBase#type}
    */
    readonly type?: string;
}
export class StorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mongoDbAtlasConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mongoDbAtlasConfiguration = this._mongoDbAtlasConfiguration?.internalValue;
        }
        if (this._neptuneAnalyticsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.neptuneAnalyticsConfiguration = this._neptuneAnalyticsConfiguration?.internalValue;
        }
        if (this._opensearchManagedClusterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.opensearchManagedClusterConfiguration = this._opensearchManagedClusterConfiguration?.internalValue;
        }
        if (this._opensearchServerlessConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.opensearchServerlessConfiguration = this._opensearchServerlessConfiguration?.internalValue;
        }
        if (this._pineconeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pineconeConfiguration = this._pineconeConfiguration?.internalValue;
        }
        if (this._rdsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsConfiguration = this._rdsConfiguration?.internalValue;
        }
        if (this._s3VectorsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3VectorsConfiguration = this._s3VectorsConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mongoDbAtlasConfiguration.internalValue = undefined;
            this._neptuneAnalyticsConfiguration.internalValue = undefined;
            this._opensearchManagedClusterConfiguration.internalValue = undefined;
            this._opensearchServerlessConfiguration.internalValue = undefined;
            this._pineconeConfiguration.internalValue = undefined;
            this._rdsConfiguration.internalValue = undefined;
            this._s3VectorsConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mongoDbAtlasConfiguration.internalValue = value.mongoDbAtlasConfiguration;
            this._neptuneAnalyticsConfiguration.internalValue = value.neptuneAnalyticsConfiguration;
            this._opensearchManagedClusterConfiguration.internalValue = value.opensearchManagedClusterConfiguration;
            this._opensearchServerlessConfiguration.internalValue = value.opensearchServerlessConfiguration;
            this._pineconeConfiguration.internalValue = value.pineconeConfiguration;
            this._rdsConfiguration.internalValue = value.rdsConfiguration;
            this._s3VectorsConfiguration.internalValue = value.s3VectorsConfiguration;
            this._type = value.type;
        }
    }

    // mongo_db_atlas_configuration - computed: true, optional: true, required: false
    private _mongoDbAtlasConfiguration = new MongoDbAtlasConfigurationPropertyOutputReference(this, "mongo_db_atlas_configuration");
    public get mongoDbAtlasConfiguration() {
        return this._mongoDbAtlasConfiguration;
    }
    public putMongoDbAtlasConfiguration(value: MongoDbAtlasConfigurationProperty) {
        this._mongoDbAtlasConfiguration.internalValue = value;
    }
    public resetMongoDbAtlasConfiguration() {
        this._mongoDbAtlasConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongoDbAtlasConfigurationInput() {
        return this._mongoDbAtlasConfiguration.internalValue;
    }

    // neptune_analytics_configuration - computed: true, optional: true, required: false
    private _neptuneAnalyticsConfiguration = new NeptuneAnalyticsConfigurationPropertyOutputReference(this, "neptune_analytics_configuration");
    public get neptuneAnalyticsConfiguration() {
        return this._neptuneAnalyticsConfiguration;
    }
    public putNeptuneAnalyticsConfiguration(value: NeptuneAnalyticsConfigurationProperty) {
        this._neptuneAnalyticsConfiguration.internalValue = value;
    }
    public resetNeptuneAnalyticsConfiguration() {
        this._neptuneAnalyticsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neptuneAnalyticsConfigurationInput() {
        return this._neptuneAnalyticsConfiguration.internalValue;
    }

    // opensearch_managed_cluster_configuration - computed: true, optional: true, required: false
    private _opensearchManagedClusterConfiguration = new OpenSearchManagedClusterConfigurationPropertyOutputReference(this, "opensearch_managed_cluster_configuration");
    public get opensearchManagedClusterConfiguration() {
        return this._opensearchManagedClusterConfiguration;
    }
    public putOpensearchManagedClusterConfiguration(value: OpenSearchManagedClusterConfigurationProperty) {
        this._opensearchManagedClusterConfiguration.internalValue = value;
    }
    public resetOpensearchManagedClusterConfiguration() {
        this._opensearchManagedClusterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get opensearchManagedClusterConfigurationInput() {
        return this._opensearchManagedClusterConfiguration.internalValue;
    }

    // opensearch_serverless_configuration - computed: true, optional: true, required: false
    private _opensearchServerlessConfiguration = new OpenSearchServerlessConfigurationPropertyOutputReference(this, "opensearch_serverless_configuration");
    public get opensearchServerlessConfiguration() {
        return this._opensearchServerlessConfiguration;
    }
    public putOpensearchServerlessConfiguration(value: OpenSearchServerlessConfigurationProperty) {
        this._opensearchServerlessConfiguration.internalValue = value;
    }
    public resetOpensearchServerlessConfiguration() {
        this._opensearchServerlessConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get opensearchServerlessConfigurationInput() {
        return this._opensearchServerlessConfiguration.internalValue;
    }

    // pinecone_configuration - computed: true, optional: true, required: false
    private _pineconeConfiguration = new PineconeConfigurationPropertyOutputReference(this, "pinecone_configuration");
    public get pineconeConfiguration() {
        return this._pineconeConfiguration;
    }
    public putPineconeConfiguration(value: PineconeConfigurationProperty) {
        this._pineconeConfiguration.internalValue = value;
    }
    public resetPineconeConfiguration() {
        this._pineconeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pineconeConfigurationInput() {
        return this._pineconeConfiguration.internalValue;
    }

    // rds_configuration - computed: true, optional: true, required: false
    private _rdsConfiguration = new RdsConfigurationPropertyOutputReference(this, "rds_configuration");
    public get rdsConfiguration() {
        return this._rdsConfiguration;
    }
    public putRdsConfiguration(value: RdsConfigurationProperty) {
        this._rdsConfiguration.internalValue = value;
    }
    public resetRdsConfiguration() {
        this._rdsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsConfigurationInput() {
        return this._rdsConfiguration.internalValue;
    }

    // s3_vectors_configuration - computed: true, optional: true, required: false
    private _s3VectorsConfiguration = new S3VectorsConfigurationPropertyOutputReference(this, "s3_vectors_configuration");
    public get s3VectorsConfiguration() {
        return this._s3VectorsConfiguration;
    }
    public putS3VectorsConfiguration(value: S3VectorsConfigurationProperty) {
        this._s3VectorsConfiguration.internalValue = value;
    }
    public resetS3VectorsConfiguration() {
        this._s3VectorsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3VectorsConfigurationInput() {
        return this._s3VectorsConfiguration.internalValue;
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
}
