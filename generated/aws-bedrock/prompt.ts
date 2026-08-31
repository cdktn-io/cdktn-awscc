// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPromptProps extends cdktn.TerraformMetaArguments {
    /**
    * A KMS key ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#customer_encryption_key_arn CcPrompt#customer_encryption_key_arn}
    */
    readonly customerEncryptionKeyArn?: string;
    /**
    * Name for a variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#default_variant CcPrompt#default_variant}
    */
    readonly defaultVariant?: string;
    /**
    * Name for a prompt resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description CcPrompt#description}
    */
    readonly description?: string;
    /**
    * Name for a prompt resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name CcPrompt#name}
    */
    readonly name: string;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tags CcPrompt#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * List of prompt variants
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#variants CcPrompt#variants}
    */
    readonly variants?: CcPrompt.PromptVariantProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt awscc_bedrock_prompt}
*/
export class CcPrompt extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_prompt";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrompt resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrompt to import
    * @param importFromId The id of the existing CcPrompt that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrompt to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_prompt", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt awscc_bedrock_prompt} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPromptProps
    */
    public constructor(scope: Construct, id: string, config: CcPromptProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_prompt',
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
        this._customerEncryptionKeyArn = config.customerEncryptionKeyArn;
        this._defaultVariant = config.defaultVariant;
        this._description = config.description;
        this._name = config.name;
        this._tags = config.tags;
        this._variants.internalValue = config.variants;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // customer_encryption_key_arn - computed: true, optional: true, required: false
    private _customerEncryptionKeyArn?: string; 
    public get customerEncryptionKeyArn() {
        return this.getStringAttribute('customer_encryption_key_arn');
    }
    public set customerEncryptionKeyArn(value: string) {
        this._customerEncryptionKeyArn = value;
    }
    public resetCustomerEncryptionKeyArn() {
        this._customerEncryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerEncryptionKeyArnInput() {
        return this._customerEncryptionKeyArn;
    }

    // default_variant - computed: true, optional: true, required: false
    private _defaultVariant?: string; 
    public get defaultVariant() {
        return this.getStringAttribute('default_variant');
    }
    public set defaultVariant(value: string) {
        this._defaultVariant = value;
    }
    public resetDefaultVariant() {
        this._defaultVariant = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultVariantInput() {
        return this._defaultVariant;
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

    // prompt_id - computed: true, optional: false, required: false
    public get promptId() {
        return this.getStringAttribute('prompt_id');
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

    // variants - computed: true, optional: true, required: false
    private _variants = new CcPrompt.PromptVariantPropertyList(this, "variants", false);
    public get variants() {
        return this._variants;
    }
    public putVariants(value: CcPrompt.PromptVariantProperty[] | cdktn.IResolvable) {
        this._variants.internalValue = value;
    }
    public resetVariants() {
        this._variants.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variantsInput() {
        return this._variants.internalValue;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            customer_encryption_key_arn: cdktn.stringToTerraform(this._customerEncryptionKeyArn),
            default_variant: cdktn.stringToTerraform(this._defaultVariant),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            variants: cdktn.listMapper(ccPromptPromptVariantPropertyToTerraform, false)(this._variants.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            customer_encryption_key_arn: {
                value: cdktn.stringToHclTerraform(this._customerEncryptionKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_variant: {
                value: cdktn.stringToHclTerraform(this._defaultVariant),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            variants: {
                value: cdktn.listMapperHcl(ccPromptPromptVariantPropertyToHclTerraform, false)(this._variants.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPrompt.PromptVariantPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPromptPromptAgentResourcePropertyToTerraform(struct?: CcPrompt.PromptAgentResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_identifier: cdktn.stringToTerraform(struct!.agentIdentifier),
    }
}


export function ccPromptPromptAgentResourcePropertyToHclTerraform(struct?: CcPrompt.PromptAgentResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_identifier: {
            value: cdktn.stringToHclTerraform(struct!.agentIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptPromptGenAiResourcePropertyToTerraform(struct?: CcPrompt.PromptGenAiResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent: ccPromptPromptAgentResourcePropertyToTerraform(struct!.agent),
    }
}


export function ccPromptPromptGenAiResourcePropertyToHclTerraform(struct?: CcPrompt.PromptGenAiResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent: {
            value: ccPromptPromptAgentResourcePropertyToHclTerraform(struct!.agent),
            isBlock: true,
            type: "struct",
            storageClassType: "PromptAgentResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptPromptModelInferenceConfigurationPropertyToTerraform(struct?: CcPrompt.PromptModelInferenceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
        stop_sequences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stopSequences),
        temperature: cdktn.numberToTerraform(struct!.temperature),
        top_p: cdktn.numberToTerraform(struct!.topP),
    }
}


export function ccPromptPromptModelInferenceConfigurationPropertyToHclTerraform(struct?: CcPrompt.PromptModelInferenceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_tokens: {
            value: cdktn.numberToHclTerraform(struct!.maxTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stop_sequences: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stopSequences),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        temperature: {
            value: cdktn.numberToHclTerraform(struct!.temperature),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        top_p: {
            value: cdktn.numberToHclTerraform(struct!.topP),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptPromptInferenceConfigurationPropertyToTerraform(struct?: CcPrompt.PromptInferenceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        text: ccPromptPromptModelInferenceConfigurationPropertyToTerraform(struct!.text),
    }
}


export function ccPromptPromptInferenceConfigurationPropertyToHclTerraform(struct?: CcPrompt.PromptInferenceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        text: {
            value: ccPromptPromptModelInferenceConfigurationPropertyToHclTerraform(struct!.text),
            isBlock: true,
            type: "struct",
            storageClassType: "PromptModelInferenceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptPromptMetadataEntryPropertyToTerraform(struct?: CcPrompt.PromptMetadataEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPromptPromptMetadataEntryPropertyToHclTerraform(struct?: CcPrompt.PromptMetadataEntryProperty | cdktn.IResolvable): any {
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


export function ccPromptPromptInputVariablePropertyToTerraform(struct?: CcPrompt.PromptInputVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPromptPromptInputVariablePropertyToHclTerraform(struct?: CcPrompt.PromptInputVariableProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptCachePointBlockPropertyToTerraform(struct?: CcPrompt.CachePointBlockProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPromptCachePointBlockPropertyToHclTerraform(struct?: CcPrompt.CachePointBlockProperty | cdktn.IResolvable): any {
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


export function ccPromptContentBlockPropertyToTerraform(struct?: CcPrompt.ContentBlockProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cache_point: ccPromptCachePointBlockPropertyToTerraform(struct!.cachePoint),
        text: cdktn.stringToTerraform(struct!.text),
    }
}


export function ccPromptContentBlockPropertyToHclTerraform(struct?: CcPrompt.ContentBlockProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cache_point: {
            value: ccPromptCachePointBlockPropertyToHclTerraform(struct!.cachePoint),
            isBlock: true,
            type: "struct",
            storageClassType: "CachePointBlockProperty",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptMessagePropertyToTerraform(struct?: CcPrompt.MessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.listMapper(ccPromptContentBlockPropertyToTerraform, false)(struct!.content),
        role: cdktn.stringToTerraform(struct!.role),
    }
}


export function ccPromptMessagePropertyToHclTerraform(struct?: CcPrompt.MessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.listMapperHcl(ccPromptContentBlockPropertyToHclTerraform, false)(struct!.content),
            isBlock: true,
            type: "list",
            storageClassType: "ContentBlockPropertyList",
        },
        role: {
            value: cdktn.stringToHclTerraform(struct!.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptVariantsTemplateConfigurationChatSystemCachePointPropertyToTerraform(struct?: CcPrompt.VariantsTemplateConfigurationChatSystemCachePointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPromptVariantsTemplateConfigurationChatSystemCachePointPropertyToHclTerraform(struct?: CcPrompt.VariantsTemplateConfigurationChatSystemCachePointProperty | cdktn.IResolvable): any {
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


export function ccPromptSystemContentBlockPropertyToTerraform(struct?: CcPrompt.SystemContentBlockProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cache_point: ccPromptVariantsTemplateConfigurationChatSystemCachePointPropertyToTerraform(struct!.cachePoint),
        text: cdktn.stringToTerraform(struct!.text),
    }
}


export function ccPromptSystemContentBlockPropertyToHclTerraform(struct?: CcPrompt.SystemContentBlockProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cache_point: {
            value: ccPromptVariantsTemplateConfigurationChatSystemCachePointPropertyToHclTerraform(struct!.cachePoint),
            isBlock: true,
            type: "struct",
            storageClassType: "VariantsTemplateConfigurationChatSystemCachePointProperty",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptSpecificToolChoicePropertyToTerraform(struct?: CcPrompt.SpecificToolChoiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPromptSpecificToolChoicePropertyToHclTerraform(struct?: CcPrompt.SpecificToolChoiceProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptToolChoicePropertyToTerraform(struct?: CcPrompt.ToolChoiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        any: cdktn.stringToTerraform(struct!.any),
        auto: cdktn.stringToTerraform(struct!.auto),
        tool: ccPromptSpecificToolChoicePropertyToTerraform(struct!.tool),
    }
}


export function ccPromptToolChoicePropertyToHclTerraform(struct?: CcPrompt.ToolChoiceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        any: {
            value: cdktn.stringToHclTerraform(struct!.any),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auto: {
            value: cdktn.stringToHclTerraform(struct!.auto),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tool: {
            value: ccPromptSpecificToolChoicePropertyToHclTerraform(struct!.tool),
            isBlock: true,
            type: "struct",
            storageClassType: "SpecificToolChoiceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointPropertyToTerraform(struct?: CcPrompt.VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointPropertyToHclTerraform(struct?: CcPrompt.VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty | cdktn.IResolvable): any {
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


export function ccPromptToolInputSchemaPropertyToTerraform(struct?: CcPrompt.ToolInputSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json: cdktn.stringToTerraform(struct!.json),
    }
}


export function ccPromptToolInputSchemaPropertyToHclTerraform(struct?: CcPrompt.ToolInputSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json: {
            value: cdktn.stringToHclTerraform(struct!.json),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptToolSpecificationPropertyToTerraform(struct?: CcPrompt.ToolSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        input_schema: ccPromptToolInputSchemaPropertyToTerraform(struct!.inputSchema),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPromptToolSpecificationPropertyToHclTerraform(struct?: CcPrompt.ToolSpecificationProperty | cdktn.IResolvable): any {
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
        input_schema: {
            value: ccPromptToolInputSchemaPropertyToHclTerraform(struct!.inputSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolInputSchemaProperty",
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


export function ccPromptToolPropertyToTerraform(struct?: CcPrompt.ToolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cache_point: ccPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointPropertyToTerraform(struct!.cachePoint),
        tool_spec: ccPromptToolSpecificationPropertyToTerraform(struct!.toolSpec),
    }
}


export function ccPromptToolPropertyToHclTerraform(struct?: CcPrompt.ToolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cache_point: {
            value: ccPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointPropertyToHclTerraform(struct!.cachePoint),
            isBlock: true,
            type: "struct",
            storageClassType: "VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty",
        },
        tool_spec: {
            value: ccPromptToolSpecificationPropertyToHclTerraform(struct!.toolSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolSpecificationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptToolConfigurationPropertyToTerraform(struct?: CcPrompt.ToolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tool_choice: ccPromptToolChoicePropertyToTerraform(struct!.toolChoice),
        tools: cdktn.listMapper(ccPromptToolPropertyToTerraform, false)(struct!.tools),
    }
}


export function ccPromptToolConfigurationPropertyToHclTerraform(struct?: CcPrompt.ToolConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tool_choice: {
            value: ccPromptToolChoicePropertyToHclTerraform(struct!.toolChoice),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolChoiceProperty",
        },
        tools: {
            value: cdktn.listMapperHcl(ccPromptToolPropertyToHclTerraform, false)(struct!.tools),
            isBlock: true,
            type: "list",
            storageClassType: "ToolPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptChatPromptTemplateConfigurationPropertyToTerraform(struct?: CcPrompt.ChatPromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_variables: cdktn.listMapper(ccPromptPromptInputVariablePropertyToTerraform, false)(struct!.inputVariables),
        messages: cdktn.listMapper(ccPromptMessagePropertyToTerraform, false)(struct!.messages),
        system: cdktn.listMapper(ccPromptSystemContentBlockPropertyToTerraform, false)(struct!.systemAttribute),
        tool_configuration: ccPromptToolConfigurationPropertyToTerraform(struct!.toolConfiguration),
    }
}


export function ccPromptChatPromptTemplateConfigurationPropertyToHclTerraform(struct?: CcPrompt.ChatPromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_variables: {
            value: cdktn.listMapperHcl(ccPromptPromptInputVariablePropertyToHclTerraform, false)(struct!.inputVariables),
            isBlock: true,
            type: "list",
            storageClassType: "PromptInputVariablePropertyList",
        },
        messages: {
            value: cdktn.listMapperHcl(ccPromptMessagePropertyToHclTerraform, false)(struct!.messages),
            isBlock: true,
            type: "list",
            storageClassType: "MessagePropertyList",
        },
        system: {
            value: cdktn.listMapperHcl(ccPromptSystemContentBlockPropertyToHclTerraform, false)(struct!.systemAttribute),
            isBlock: true,
            type: "list",
            storageClassType: "SystemContentBlockPropertyList",
        },
        tool_configuration: {
            value: ccPromptToolConfigurationPropertyToHclTerraform(struct!.toolConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ToolConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptVariantsTemplateConfigurationTextCachePointPropertyToTerraform(struct?: CcPrompt.VariantsTemplateConfigurationTextCachePointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPromptVariantsTemplateConfigurationTextCachePointPropertyToHclTerraform(struct?: CcPrompt.VariantsTemplateConfigurationTextCachePointProperty | cdktn.IResolvable): any {
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


export function ccPromptInputVariablesPropertyToTerraform(struct?: CcPrompt.InputVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPromptInputVariablesPropertyToHclTerraform(struct?: CcPrompt.InputVariablesProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptTextS3LocationPropertyToTerraform(struct?: CcPrompt.TextS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccPromptTextS3LocationPropertyToHclTerraform(struct?: CcPrompt.TextS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptTextPromptTemplateConfigurationPropertyToTerraform(struct?: CcPrompt.TextPromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cache_point: ccPromptVariantsTemplateConfigurationTextCachePointPropertyToTerraform(struct!.cachePoint),
        input_variables: cdktn.listMapper(ccPromptInputVariablesPropertyToTerraform, false)(struct!.inputVariables),
        text: cdktn.stringToTerraform(struct!.text),
        text_s3_location: ccPromptTextS3LocationPropertyToTerraform(struct!.textS3Location),
    }
}


export function ccPromptTextPromptTemplateConfigurationPropertyToHclTerraform(struct?: CcPrompt.TextPromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cache_point: {
            value: ccPromptVariantsTemplateConfigurationTextCachePointPropertyToHclTerraform(struct!.cachePoint),
            isBlock: true,
            type: "struct",
            storageClassType: "VariantsTemplateConfigurationTextCachePointProperty",
        },
        input_variables: {
            value: cdktn.listMapperHcl(ccPromptInputVariablesPropertyToHclTerraform, false)(struct!.inputVariables),
            isBlock: true,
            type: "list",
            storageClassType: "InputVariablesPropertyList",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_s3_location: {
            value: ccPromptTextS3LocationPropertyToHclTerraform(struct!.textS3Location),
            isBlock: true,
            type: "struct",
            storageClassType: "TextS3LocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptPromptTemplateConfigurationPropertyToTerraform(struct?: CcPrompt.PromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        chat: ccPromptChatPromptTemplateConfigurationPropertyToTerraform(struct!.chat),
        text: ccPromptTextPromptTemplateConfigurationPropertyToTerraform(struct!.text),
    }
}


export function ccPromptPromptTemplateConfigurationPropertyToHclTerraform(struct?: CcPrompt.PromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        chat: {
            value: ccPromptChatPromptTemplateConfigurationPropertyToHclTerraform(struct!.chat),
            isBlock: true,
            type: "struct",
            storageClassType: "ChatPromptTemplateConfigurationProperty",
        },
        text: {
            value: ccPromptTextPromptTemplateConfigurationPropertyToHclTerraform(struct!.text),
            isBlock: true,
            type: "struct",
            storageClassType: "TextPromptTemplateConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPromptPromptVariantPropertyToTerraform(struct?: CcPrompt.PromptVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_model_request_fields: cdktn.stringToTerraform(struct!.additionalModelRequestFields),
        gen_ai_resource: ccPromptPromptGenAiResourcePropertyToTerraform(struct!.genAiResource),
        inference_configuration: ccPromptPromptInferenceConfigurationPropertyToTerraform(struct!.inferenceConfiguration),
        metadata: cdktn.listMapper(ccPromptPromptMetadataEntryPropertyToTerraform, false)(struct!.metadata),
        model_id: cdktn.stringToTerraform(struct!.modelId),
        name: cdktn.stringToTerraform(struct!.name),
        template_configuration: ccPromptPromptTemplateConfigurationPropertyToTerraform(struct!.templateConfiguration),
        template_type: cdktn.stringToTerraform(struct!.templateType),
    }
}


export function ccPromptPromptVariantPropertyToHclTerraform(struct?: CcPrompt.PromptVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_model_request_fields: {
            value: cdktn.stringToHclTerraform(struct!.additionalModelRequestFields),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gen_ai_resource: {
            value: ccPromptPromptGenAiResourcePropertyToHclTerraform(struct!.genAiResource),
            isBlock: true,
            type: "struct",
            storageClassType: "PromptGenAiResourceProperty",
        },
        inference_configuration: {
            value: ccPromptPromptInferenceConfigurationPropertyToHclTerraform(struct!.inferenceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PromptInferenceConfigurationProperty",
        },
        metadata: {
            value: cdktn.listMapperHcl(ccPromptPromptMetadataEntryPropertyToHclTerraform, false)(struct!.metadata),
            isBlock: true,
            type: "list",
            storageClassType: "PromptMetadataEntryPropertyList",
        },
        model_id: {
            value: cdktn.stringToHclTerraform(struct!.modelId),
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
        template_configuration: {
            value: ccPromptPromptTemplateConfigurationPropertyToHclTerraform(struct!.templateConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "PromptTemplateConfigurationProperty",
        },
        template_type: {
            value: cdktn.stringToHclTerraform(struct!.templateType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPrompt {
export interface PromptAgentResourceProperty {
    /**
    * Arn representation of the Agent Alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#agent_identifier CcPrompt#agent_identifier}
    */
    readonly agentIdentifier?: string;
}
export class PromptAgentResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptAgentResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentIdentifier = this._agentIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptAgentResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentIdentifier = value.agentIdentifier;
        }
    }

    // agent_identifier - computed: true, optional: true, required: false
    private _agentIdentifier?: string; 
    public get agentIdentifier() {
        return this.getStringAttribute('agent_identifier');
    }
    public set agentIdentifier(value: string) {
        this._agentIdentifier = value;
    }
    public resetAgentIdentifier() {
        this._agentIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentIdentifierInput() {
        return this._agentIdentifier;
    }
}
export interface PromptGenAiResourceProperty {
    /**
    * Target Agent to invoke with Prompt
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#agent CcPrompt#agent}
    */
    readonly agent?: PromptAgentResourceProperty;
}
export class PromptGenAiResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptGenAiResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agent?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agent = this._agent?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptGenAiResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agent.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agent.internalValue = value.agent;
        }
    }

    // agent - computed: true, optional: true, required: false
    private _agent = new PromptAgentResourcePropertyOutputReference(this, "agent");
    public get agent() {
        return this._agent;
    }
    public putAgent(value: PromptAgentResourceProperty) {
        this._agent.internalValue = value;
    }
    public resetAgent() {
        this._agent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentInput() {
        return this._agent.internalValue;
    }
}
export interface PromptModelInferenceConfigurationProperty {
    /**
    * Maximum length of output
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#max_tokens CcPrompt#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * List of stop sequences
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#stop_sequences CcPrompt#stop_sequences}
    */
    readonly stopSequences?: string[];
    /**
    * Controls randomness, higher values increase diversity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#temperature CcPrompt#temperature}
    */
    readonly temperature?: number;
    /**
    * Cumulative probability cutoff for token selection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#top_p CcPrompt#top_p}
    */
    readonly topP?: number;
}
export class PromptModelInferenceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptModelInferenceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTokens = this._maxTokens;
        }
        if (this._stopSequences !== undefined) {
            hasAnyValues = true;
            internalValueResult.stopSequences = this._stopSequences;
        }
        if (this._temperature !== undefined) {
            hasAnyValues = true;
            internalValueResult.temperature = this._temperature;
        }
        if (this._topP !== undefined) {
            hasAnyValues = true;
            internalValueResult.topP = this._topP;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptModelInferenceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxTokens = undefined;
            this._stopSequences = undefined;
            this._temperature = undefined;
            this._topP = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxTokens = value.maxTokens;
            this._stopSequences = value.stopSequences;
            this._temperature = value.temperature;
            this._topP = value.topP;
        }
    }

    // max_tokens - computed: true, optional: true, required: false
    private _maxTokens?: number; 
    public get maxTokens() {
        return this.getNumberAttribute('max_tokens');
    }
    public set maxTokens(value: number) {
        this._maxTokens = value;
    }
    public resetMaxTokens() {
        this._maxTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTokensInput() {
        return this._maxTokens;
    }

    // stop_sequences - computed: true, optional: true, required: false
    private _stopSequences?: string[]; 
    public get stopSequences() {
        return this.getListAttribute('stop_sequences');
    }
    public set stopSequences(value: string[]) {
        this._stopSequences = value;
    }
    public resetStopSequences() {
        this._stopSequences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stopSequencesInput() {
        return this._stopSequences;
    }

    // temperature - computed: true, optional: true, required: false
    private _temperature?: number; 
    public get temperature() {
        return this.getNumberAttribute('temperature');
    }
    public set temperature(value: number) {
        this._temperature = value;
    }
    public resetTemperature() {
        this._temperature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get temperatureInput() {
        return this._temperature;
    }

    // top_p - computed: true, optional: true, required: false
    private _topP?: number; 
    public get topP() {
        return this.getNumberAttribute('top_p');
    }
    public set topP(value: number) {
        this._topP = value;
    }
    public resetTopP() {
        this._topP = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topPInput() {
        return this._topP;
    }
}
export interface PromptInferenceConfigurationProperty {
    /**
    * Prompt model inference configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text CcPrompt#text}
    */
    readonly text?: PromptModelInferenceConfigurationProperty;
}
export class PromptInferenceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptInferenceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._text?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptInferenceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._text.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._text.internalValue = value.text;
        }
    }

    // text - computed: true, optional: true, required: false
    private _text = new PromptModelInferenceConfigurationPropertyOutputReference(this, "text");
    public get text() {
        return this._text;
    }
    public putText(value: PromptModelInferenceConfigurationProperty) {
        this._text.internalValue = value;
    }
    public resetText() {
        this._text.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text.internalValue;
    }
}
export interface PromptMetadataEntryProperty {
    /**
    * The key of a metadata tag for a prompt variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#key CcPrompt#key}
    */
    readonly key?: string;
    /**
    * The value of a metadata tag for a prompt variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#value CcPrompt#value}
    */
    readonly value?: string;
}
export class PromptMetadataEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PromptMetadataEntryProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PromptMetadataEntryProperty | cdktn.IResolvable | undefined) {
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

export class PromptMetadataEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : PromptMetadataEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): PromptMetadataEntryPropertyOutputReference {
        return new PromptMetadataEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PromptInputVariableProperty {
    /**
    * Name for an input variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name CcPrompt#name}
    */
    readonly name?: string;
}
export class PromptInputVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PromptInputVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptInputVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}

export class PromptInputVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : PromptInputVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): PromptInputVariablePropertyOutputReference {
        return new PromptInputVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CachePointBlockProperty {
    /**
    * CachePoint types for CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type CcPrompt#type}
    */
    readonly type?: string;
}
export class CachePointBlockPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CachePointBlockProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CachePointBlockProperty | cdktn.IResolvable | undefined) {
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
export interface ContentBlockProperty {
    /**
    * CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point CcPrompt#cache_point}
    */
    readonly cachePoint?: CachePointBlockProperty;
    /**
    * Configuration for chat prompt template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text CcPrompt#text}
    */
    readonly text?: string;
}
export class ContentBlockPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContentBlockProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cachePoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachePoint = this._cachePoint?.internalValue;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentBlockProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = undefined;
            this._text = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = value.cachePoint;
            this._text = value.text;
        }
    }

    // cache_point - computed: true, optional: true, required: false
    private _cachePoint = new CachePointBlockPropertyOutputReference(this, "cache_point");
    public get cachePoint() {
        return this._cachePoint;
    }
    public putCachePoint(value: CachePointBlockProperty) {
        this._cachePoint.internalValue = value;
    }
    public resetCachePoint() {
        this._cachePoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachePointInput() {
        return this._cachePoint.internalValue;
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }
}

export class ContentBlockPropertyList extends cdktn.ComplexList {
    public internalValue? : ContentBlockProperty[] | cdktn.IResolvable

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
    public get(index: number): ContentBlockPropertyOutputReference {
        return new ContentBlockPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MessageProperty {
    /**
    * List of Content Blocks
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#content CcPrompt#content}
    */
    readonly content?: ContentBlockProperty[] | cdktn.IResolvable;
    /**
    * Conversation roles for the chat prompt
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#role CcPrompt#role}
    */
    readonly role?: string;
}
export class MessagePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content?.internalValue;
        }
        if (this._role !== undefined) {
            hasAnyValues = true;
            internalValueResult.role = this._role;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content.internalValue = undefined;
            this._role = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content.internalValue = value.content;
            this._role = value.role;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content = new ContentBlockPropertyList(this, "content", false);
    public get content() {
        return this._content;
    }
    public putContent(value: ContentBlockProperty[] | cdktn.IResolvable) {
        this._content.internalValue = value;
    }
    public resetContent() {
        this._content.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content.internalValue;
    }

    // role - computed: true, optional: true, required: false
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    public resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }
}

export class MessagePropertyList extends cdktn.ComplexList {
    public internalValue? : MessageProperty[] | cdktn.IResolvable

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
    public get(index: number): MessagePropertyOutputReference {
        return new MessagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VariantsTemplateConfigurationChatSystemCachePointProperty {
    /**
    * CachePoint types for CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type CcPrompt#type}
    */
    readonly type?: string;
}
export class VariantsTemplateConfigurationChatSystemCachePointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VariantsTemplateConfigurationChatSystemCachePointProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VariantsTemplateConfigurationChatSystemCachePointProperty | cdktn.IResolvable | undefined) {
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
export interface SystemContentBlockProperty {
    /**
    * CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point CcPrompt#cache_point}
    */
    readonly cachePoint?: VariantsTemplateConfigurationChatSystemCachePointProperty;
    /**
    * Configuration for chat prompt template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text CcPrompt#text}
    */
    readonly text?: string;
}
export class SystemContentBlockPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SystemContentBlockProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cachePoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachePoint = this._cachePoint?.internalValue;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemContentBlockProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = undefined;
            this._text = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = value.cachePoint;
            this._text = value.text;
        }
    }

    // cache_point - computed: true, optional: true, required: false
    private _cachePoint = new VariantsTemplateConfigurationChatSystemCachePointPropertyOutputReference(this, "cache_point");
    public get cachePoint() {
        return this._cachePoint;
    }
    public putCachePoint(value: VariantsTemplateConfigurationChatSystemCachePointProperty) {
        this._cachePoint.internalValue = value;
    }
    public resetCachePoint() {
        this._cachePoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachePointInput() {
        return this._cachePoint.internalValue;
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }
}

export class SystemContentBlockPropertyList extends cdktn.ComplexList {
    public internalValue? : SystemContentBlockProperty[] | cdktn.IResolvable

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
    public get(index: number): SystemContentBlockPropertyOutputReference {
        return new SystemContentBlockPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SpecificToolChoiceProperty {
    /**
    * Tool name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name CcPrompt#name}
    */
    readonly name?: string;
}
export class SpecificToolChoicePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpecificToolChoiceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpecificToolChoiceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}
export interface ToolChoiceProperty {
    /**
    * Any Tool choice
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#any CcPrompt#any}
    */
    readonly any?: string;
    /**
    * Auto Tool choice
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#auto CcPrompt#auto}
    */
    readonly auto?: string;
    /**
    * Specific Tool choice
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool CcPrompt#tool}
    */
    readonly tool?: SpecificToolChoiceProperty;
}
export class ToolChoicePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolChoiceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._any !== undefined) {
            hasAnyValues = true;
            internalValueResult.any = this._any;
        }
        if (this._auto !== undefined) {
            hasAnyValues = true;
            internalValueResult.auto = this._auto;
        }
        if (this._tool?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tool = this._tool?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolChoiceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._any = undefined;
            this._auto = undefined;
            this._tool.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._any = value.any;
            this._auto = value.auto;
            this._tool.internalValue = value.tool;
        }
    }

    // any - computed: true, optional: true, required: false
    private _any?: string; 
    public get any() {
        return this.getStringAttribute('any');
    }
    public set any(value: string) {
        this._any = value;
    }
    public resetAny() {
        this._any = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get anyInput() {
        return this._any;
    }

    // auto - computed: true, optional: true, required: false
    private _auto?: string; 
    public get auto() {
        return this.getStringAttribute('auto');
    }
    public set auto(value: string) {
        this._auto = value;
    }
    public resetAuto() {
        this._auto = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoInput() {
        return this._auto;
    }

    // tool - computed: true, optional: true, required: false
    private _tool = new SpecificToolChoicePropertyOutputReference(this, "tool");
    public get tool() {
        return this._tool;
    }
    public putTool(value: SpecificToolChoiceProperty) {
        this._tool.internalValue = value;
    }
    public resetTool() {
        this._tool.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolInput() {
        return this._tool.internalValue;
    }
}
export interface VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty {
    /**
    * CachePoint types for CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type CcPrompt#type}
    */
    readonly type?: string;
}
export class VariantsTemplateConfigurationChatToolConfigurationToolsCachePointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty | cdktn.IResolvable | undefined) {
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
export interface ToolInputSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#json CcPrompt#json}
    */
    readonly json?: string;
}
export class ToolInputSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolInputSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._json !== undefined) {
            hasAnyValues = true;
            internalValueResult.json = this._json;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolInputSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._json = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._json = value.json;
        }
    }

    // json - computed: true, optional: true, required: false
    private _json?: string; 
    public get json() {
        return this.getStringAttribute('json');
    }
    public set json(value: string) {
        this._json = value;
    }
    public resetJson() {
        this._json = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonInput() {
        return this._json;
    }
}
export interface ToolSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#description CcPrompt#description}
    */
    readonly description?: string;
    /**
    * Tool input schema
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_schema CcPrompt#input_schema}
    */
    readonly inputSchema?: ToolInputSchemaProperty;
    /**
    * Tool name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name CcPrompt#name}
    */
    readonly name?: string;
}
export class ToolSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inputSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputSchema = this._inputSchema?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._inputSchema.internalValue = undefined;
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
            this._inputSchema.internalValue = value.inputSchema;
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

    // input_schema - computed: true, optional: true, required: false
    private _inputSchema = new ToolInputSchemaPropertyOutputReference(this, "input_schema");
    public get inputSchema() {
        return this._inputSchema;
    }
    public putInputSchema(value: ToolInputSchemaProperty) {
        this._inputSchema.internalValue = value;
    }
    public resetInputSchema() {
        this._inputSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSchemaInput() {
        return this._inputSchema.internalValue;
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
export interface ToolProperty {
    /**
    * CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point CcPrompt#cache_point}
    */
    readonly cachePoint?: VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty;
    /**
    * Tool specification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_spec CcPrompt#tool_spec}
    */
    readonly toolSpec?: ToolSpecificationProperty;
}
export class ToolPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ToolProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cachePoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachePoint = this._cachePoint?.internalValue;
        }
        if (this._toolSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolSpec = this._toolSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = undefined;
            this._toolSpec.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = value.cachePoint;
            this._toolSpec.internalValue = value.toolSpec;
        }
    }

    // cache_point - computed: true, optional: true, required: false
    private _cachePoint = new VariantsTemplateConfigurationChatToolConfigurationToolsCachePointPropertyOutputReference(this, "cache_point");
    public get cachePoint() {
        return this._cachePoint;
    }
    public putCachePoint(value: VariantsTemplateConfigurationChatToolConfigurationToolsCachePointProperty) {
        this._cachePoint.internalValue = value;
    }
    public resetCachePoint() {
        this._cachePoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachePointInput() {
        return this._cachePoint.internalValue;
    }

    // tool_spec - computed: true, optional: true, required: false
    private _toolSpec = new ToolSpecificationPropertyOutputReference(this, "tool_spec");
    public get toolSpec() {
        return this._toolSpec;
    }
    public putToolSpec(value: ToolSpecificationProperty) {
        this._toolSpec.internalValue = value;
    }
    public resetToolSpec() {
        this._toolSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolSpecInput() {
        return this._toolSpec.internalValue;
    }
}

export class ToolPropertyList extends cdktn.ComplexList {
    public internalValue? : ToolProperty[] | cdktn.IResolvable

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
    public get(index: number): ToolPropertyOutputReference {
        return new ToolPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ToolConfigurationProperty {
    /**
    * Tool choice
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_choice CcPrompt#tool_choice}
    */
    readonly toolChoice?: ToolChoiceProperty;
    /**
    * List of Tools
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tools CcPrompt#tools}
    */
    readonly tools?: ToolProperty[] | cdktn.IResolvable;
}
export class ToolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._toolChoice?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolChoice = this._toolChoice?.internalValue;
        }
        if (this._tools?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tools = this._tools?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._toolChoice.internalValue = undefined;
            this._tools.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._toolChoice.internalValue = value.toolChoice;
            this._tools.internalValue = value.tools;
        }
    }

    // tool_choice - computed: true, optional: true, required: false
    private _toolChoice = new ToolChoicePropertyOutputReference(this, "tool_choice");
    public get toolChoice() {
        return this._toolChoice;
    }
    public putToolChoice(value: ToolChoiceProperty) {
        this._toolChoice.internalValue = value;
    }
    public resetToolChoice() {
        this._toolChoice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolChoiceInput() {
        return this._toolChoice.internalValue;
    }

    // tools - computed: true, optional: true, required: false
    private _tools = new ToolPropertyList(this, "tools", false);
    public get tools() {
        return this._tools;
    }
    public putTools(value: ToolProperty[] | cdktn.IResolvable) {
        this._tools.internalValue = value;
    }
    public resetTools() {
        this._tools.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolsInput() {
        return this._tools.internalValue;
    }
}
export interface ChatPromptTemplateConfigurationProperty {
    /**
    * List of input variables
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_variables CcPrompt#input_variables}
    */
    readonly inputVariables?: PromptInputVariableProperty[] | cdktn.IResolvable;
    /**
    * List of messages for chat prompt template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#messages CcPrompt#messages}
    */
    readonly messages?: MessageProperty[] | cdktn.IResolvable;
    /**
    * Configuration for chat prompt template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#system CcPrompt#system}
    */
    readonly systemAttribute?: SystemContentBlockProperty[] | cdktn.IResolvable;
    /**
    * Tool configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#tool_configuration CcPrompt#tool_configuration}
    */
    readonly toolConfiguration?: ToolConfigurationProperty;
}
export class ChatPromptTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChatPromptTemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inputVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputVariables = this._inputVariables?.internalValue;
        }
        if (this._messages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.messages = this._messages?.internalValue;
        }
        if (this._system?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemAttribute = this._system?.internalValue;
        }
        if (this._toolConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolConfiguration = this._toolConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChatPromptTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputVariables.internalValue = undefined;
            this._messages.internalValue = undefined;
            this._system.internalValue = undefined;
            this._toolConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputVariables.internalValue = value.inputVariables;
            this._messages.internalValue = value.messages;
            this._system.internalValue = value.systemAttribute;
            this._toolConfiguration.internalValue = value.toolConfiguration;
        }
    }

    // input_variables - computed: true, optional: true, required: false
    private _inputVariables = new PromptInputVariablePropertyList(this, "input_variables", false);
    public get inputVariables() {
        return this._inputVariables;
    }
    public putInputVariables(value: PromptInputVariableProperty[] | cdktn.IResolvable) {
        this._inputVariables.internalValue = value;
    }
    public resetInputVariables() {
        this._inputVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputVariablesInput() {
        return this._inputVariables.internalValue;
    }

    // messages - computed: true, optional: true, required: false
    private _messages = new MessagePropertyList(this, "messages", false);
    public get messages() {
        return this._messages;
    }
    public putMessages(value: MessageProperty[] | cdktn.IResolvable) {
        this._messages.internalValue = value;
    }
    public resetMessages() {
        this._messages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messagesInput() {
        return this._messages.internalValue;
    }

    // system - computed: true, optional: true, required: false
    private _system = new SystemContentBlockPropertyList(this, "system", false);
    public get systemAttribute() {
        return this._system;
    }
    public putSystemAttribute(value: SystemContentBlockProperty[] | cdktn.IResolvable) {
        this._system.internalValue = value;
    }
    public resetSystemAttribute() {
        this._system.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemAttributeInput() {
        return this._system.internalValue;
    }

    // tool_configuration - computed: true, optional: true, required: false
    private _toolConfiguration = new ToolConfigurationPropertyOutputReference(this, "tool_configuration");
    public get toolConfiguration() {
        return this._toolConfiguration;
    }
    public putToolConfiguration(value: ToolConfigurationProperty) {
        this._toolConfiguration.internalValue = value;
    }
    public resetToolConfiguration() {
        this._toolConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolConfigurationInput() {
        return this._toolConfiguration.internalValue;
    }
}
export interface VariantsTemplateConfigurationTextCachePointProperty {
    /**
    * CachePoint types for CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#type CcPrompt#type}
    */
    readonly type?: string;
}
export class VariantsTemplateConfigurationTextCachePointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VariantsTemplateConfigurationTextCachePointProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VariantsTemplateConfigurationTextCachePointProperty | cdktn.IResolvable | undefined) {
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
export interface InputVariablesProperty {
    /**
    * Name for an input variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name CcPrompt#name}
    */
    readonly name?: string;
}
export class InputVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}

export class InputVariablesPropertyList extends cdktn.ComplexList {
    public internalValue? : InputVariablesProperty[] | cdktn.IResolvable

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
    public get(index: number): InputVariablesPropertyOutputReference {
        return new InputVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TextS3LocationProperty {
    /**
    * A bucket in S3
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#bucket CcPrompt#bucket}
    */
    readonly bucket?: string;
    /**
    * A object key in S3
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#key CcPrompt#key}
    */
    readonly key?: string;
    /**
    * The version of the the S3 object to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#version CcPrompt#version}
    */
    readonly version?: string;
}
export class TextS3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TextS3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TextS3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
            this._version = value.version;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface TextPromptTemplateConfigurationProperty {
    /**
    * CachePointBlock
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#cache_point CcPrompt#cache_point}
    */
    readonly cachePoint?: VariantsTemplateConfigurationTextCachePointProperty;
    /**
    * List of input variables
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#input_variables CcPrompt#input_variables}
    */
    readonly inputVariables?: InputVariablesProperty[] | cdktn.IResolvable;
    /**
    * Prompt content for String prompt template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text CcPrompt#text}
    */
    readonly text?: string;
    /**
    * The identifier for the S3 resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text_s3_location CcPrompt#text_s3_location}
    */
    readonly textS3Location?: TextS3LocationProperty;
}
export class TextPromptTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TextPromptTemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cachePoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachePoint = this._cachePoint?.internalValue;
        }
        if (this._inputVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputVariables = this._inputVariables?.internalValue;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._textS3Location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.textS3Location = this._textS3Location?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TextPromptTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = undefined;
            this._inputVariables.internalValue = undefined;
            this._text = undefined;
            this._textS3Location.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cachePoint.internalValue = value.cachePoint;
            this._inputVariables.internalValue = value.inputVariables;
            this._text = value.text;
            this._textS3Location.internalValue = value.textS3Location;
        }
    }

    // cache_point - computed: true, optional: true, required: false
    private _cachePoint = new VariantsTemplateConfigurationTextCachePointPropertyOutputReference(this, "cache_point");
    public get cachePoint() {
        return this._cachePoint;
    }
    public putCachePoint(value: VariantsTemplateConfigurationTextCachePointProperty) {
        this._cachePoint.internalValue = value;
    }
    public resetCachePoint() {
        this._cachePoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachePointInput() {
        return this._cachePoint.internalValue;
    }

    // input_variables - computed: true, optional: true, required: false
    private _inputVariables = new InputVariablesPropertyList(this, "input_variables", false);
    public get inputVariables() {
        return this._inputVariables;
    }
    public putInputVariables(value: InputVariablesProperty[] | cdktn.IResolvable) {
        this._inputVariables.internalValue = value;
    }
    public resetInputVariables() {
        this._inputVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputVariablesInput() {
        return this._inputVariables.internalValue;
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }

    // text_s3_location - computed: true, optional: true, required: false
    private _textS3Location = new TextS3LocationPropertyOutputReference(this, "text_s3_location");
    public get textS3Location() {
        return this._textS3Location;
    }
    public putTextS3Location(value: TextS3LocationProperty) {
        this._textS3Location.internalValue = value;
    }
    public resetTextS3Location() {
        this._textS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textS3LocationInput() {
        return this._textS3Location.internalValue;
    }
}
export interface PromptTemplateConfigurationProperty {
    /**
    * Configuration for chat prompt template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#chat CcPrompt#chat}
    */
    readonly chat?: ChatPromptTemplateConfigurationProperty;
    /**
    * Configuration for text prompt template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#text CcPrompt#text}
    */
    readonly text?: TextPromptTemplateConfigurationProperty;
}
export class PromptTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptTemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._chat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.chat = this._chat?.internalValue;
        }
        if (this._text?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._chat.internalValue = undefined;
            this._text.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._chat.internalValue = value.chat;
            this._text.internalValue = value.text;
        }
    }

    // chat - computed: true, optional: true, required: false
    private _chat = new ChatPromptTemplateConfigurationPropertyOutputReference(this, "chat");
    public get chat() {
        return this._chat;
    }
    public putChat(value: ChatPromptTemplateConfigurationProperty) {
        this._chat.internalValue = value;
    }
    public resetChat() {
        this._chat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get chatInput() {
        return this._chat.internalValue;
    }

    // text - computed: true, optional: true, required: false
    private _text = new TextPromptTemplateConfigurationPropertyOutputReference(this, "text");
    public get text() {
        return this._text;
    }
    public putText(value: TextPromptTemplateConfigurationProperty) {
        this._text.internalValue = value;
    }
    public resetText() {
        this._text.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text.internalValue;
    }
}
export interface PromptVariantProperty {
    /**
    * Contains model-specific configurations
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#additional_model_request_fields CcPrompt#additional_model_request_fields}
    */
    readonly additionalModelRequestFields?: string;
    /**
    * Target resource to invoke with Prompt
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#gen_ai_resource CcPrompt#gen_ai_resource}
    */
    readonly genAiResource?: PromptGenAiResourceProperty;
    /**
    * Model inference configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#inference_configuration CcPrompt#inference_configuration}
    */
    readonly inferenceConfiguration?: PromptInferenceConfigurationProperty;
    /**
    * List of metadata to associate with the prompt variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#metadata CcPrompt#metadata}
    */
    readonly metadata?: PromptMetadataEntryProperty[] | cdktn.IResolvable;
    /**
    * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#model_id CcPrompt#model_id}
    */
    readonly modelId?: string;
    /**
    * Name for a variant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#name CcPrompt#name}
    */
    readonly name?: string;
    /**
    * Prompt template configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#template_configuration CcPrompt#template_configuration}
    */
    readonly templateConfiguration?: PromptTemplateConfigurationProperty;
    /**
    * Prompt template type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_prompt#template_type CcPrompt#template_type}
    */
    readonly templateType?: string;
}
export class PromptVariantPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PromptVariantProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalModelRequestFields !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalModelRequestFields = this._additionalModelRequestFields;
        }
        if (this._genAiResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.genAiResource = this._genAiResource?.internalValue;
        }
        if (this._inferenceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceConfiguration = this._inferenceConfiguration?.internalValue;
        }
        if (this._metadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata?.internalValue;
        }
        if (this._modelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelId = this._modelId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._templateConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateConfiguration = this._templateConfiguration?.internalValue;
        }
        if (this._templateType !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateType = this._templateType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptVariantProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalModelRequestFields = undefined;
            this._genAiResource.internalValue = undefined;
            this._inferenceConfiguration.internalValue = undefined;
            this._metadata.internalValue = undefined;
            this._modelId = undefined;
            this._name = undefined;
            this._templateConfiguration.internalValue = undefined;
            this._templateType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalModelRequestFields = value.additionalModelRequestFields;
            this._genAiResource.internalValue = value.genAiResource;
            this._inferenceConfiguration.internalValue = value.inferenceConfiguration;
            this._metadata.internalValue = value.metadata;
            this._modelId = value.modelId;
            this._name = value.name;
            this._templateConfiguration.internalValue = value.templateConfiguration;
            this._templateType = value.templateType;
        }
    }

    // additional_model_request_fields - computed: true, optional: true, required: false
    private _additionalModelRequestFields?: string; 
    public get additionalModelRequestFields() {
        return this.getStringAttribute('additional_model_request_fields');
    }
    public set additionalModelRequestFields(value: string) {
        this._additionalModelRequestFields = value;
    }
    public resetAdditionalModelRequestFields() {
        this._additionalModelRequestFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalModelRequestFieldsInput() {
        return this._additionalModelRequestFields;
    }

    // gen_ai_resource - computed: true, optional: true, required: false
    private _genAiResource = new PromptGenAiResourcePropertyOutputReference(this, "gen_ai_resource");
    public get genAiResource() {
        return this._genAiResource;
    }
    public putGenAiResource(value: PromptGenAiResourceProperty) {
        this._genAiResource.internalValue = value;
    }
    public resetGenAiResource() {
        this._genAiResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get genAiResourceInput() {
        return this._genAiResource.internalValue;
    }

    // inference_configuration - computed: true, optional: true, required: false
    private _inferenceConfiguration = new PromptInferenceConfigurationPropertyOutputReference(this, "inference_configuration");
    public get inferenceConfiguration() {
        return this._inferenceConfiguration;
    }
    public putInferenceConfiguration(value: PromptInferenceConfigurationProperty) {
        this._inferenceConfiguration.internalValue = value;
    }
    public resetInferenceConfiguration() {
        this._inferenceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceConfigurationInput() {
        return this._inferenceConfiguration.internalValue;
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata = new PromptMetadataEntryPropertyList(this, "metadata", false);
    public get metadata() {
        return this._metadata;
    }
    public putMetadata(value: PromptMetadataEntryProperty[] | cdktn.IResolvable) {
        this._metadata.internalValue = value;
    }
    public resetMetadata() {
        this._metadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata.internalValue;
    }

    // model_id - computed: true, optional: true, required: false
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    public resetModelId() {
        this._modelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
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

    // template_configuration - computed: true, optional: true, required: false
    private _templateConfiguration = new PromptTemplateConfigurationPropertyOutputReference(this, "template_configuration");
    public get templateConfiguration() {
        return this._templateConfiguration;
    }
    public putTemplateConfiguration(value: PromptTemplateConfigurationProperty) {
        this._templateConfiguration.internalValue = value;
    }
    public resetTemplateConfiguration() {
        this._templateConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateConfigurationInput() {
        return this._templateConfiguration.internalValue;
    }

    // template_type - computed: true, optional: true, required: false
    private _templateType?: string; 
    public get templateType() {
        return this.getStringAttribute('template_type');
    }
    public set templateType(value: string) {
        this._templateType = value;
    }
    public resetTemplateType() {
        this._templateType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateTypeInput() {
        return this._templateType;
    }
}

export class PromptVariantPropertyList extends cdktn.ComplexList {
    public internalValue? : PromptVariantProperty[] | cdktn.IResolvable

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
    public get(index: number): PromptVariantPropertyOutputReference {
        return new PromptVariantPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
