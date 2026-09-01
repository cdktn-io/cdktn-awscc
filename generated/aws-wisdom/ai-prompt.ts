// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAIPromptProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#api_format CcAIPrompt#api_format}
    */
    readonly apiFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#assistant_id CcAIPrompt#assistant_id}
    */
    readonly assistantId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#description CcAIPrompt#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#model_id CcAIPrompt#model_id}
    */
    readonly modelId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#name CcAIPrompt#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#tags CcAIPrompt#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#template_configuration CcAIPrompt#template_configuration}
    */
    readonly templateConfiguration: CcAIPrompt.AIPromptTemplateConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#template_type CcAIPrompt#template_type}
    */
    readonly templateType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#type CcAIPrompt#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt awscc_wisdom_ai_prompt}
*/
export class CcAIPrompt extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_ai_prompt";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAIPrompt resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAIPrompt to import
    * @param importFromId The id of the existing CcAIPrompt that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAIPrompt to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_prompt", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt awscc_wisdom_ai_prompt} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAIPromptProps
    */
    public constructor(scope: Construct, id: string, config: CcAIPromptProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_ai_prompt',
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
        this._apiFormat = config.apiFormat;
        this._assistantId = config.assistantId;
        this._description = config.description;
        this._modelId = config.modelId;
        this._name = config.name;
        this._tags = config.tags;
        this._templateConfiguration.internalValue = config.templateConfiguration;
        this._templateType = config.templateType;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ai_prompt_arn - computed: true, optional: false, required: false
    public get aiPromptArn() {
        return this.getStringAttribute('ai_prompt_arn');
    }

    // ai_prompt_id - computed: true, optional: false, required: false
    public get aiPromptId() {
        return this.getStringAttribute('ai_prompt_id');
    }

    // api_format - computed: false, optional: false, required: true
    private _apiFormat?: string; 
    public get apiFormat() {
        return this.getStringAttribute('api_format');
    }
    public set apiFormat(value: string) {
        this._apiFormat = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiFormatInput() {
        return this._apiFormat;
    }

    // assistant_arn - computed: true, optional: false, required: false
    public get assistantArn() {
        return this.getStringAttribute('assistant_arn');
    }

    // assistant_id - computed: true, optional: true, required: false
    private _assistantId?: string; 
    public get assistantId() {
        return this.getStringAttribute('assistant_id');
    }
    public set assistantId(value: string) {
        this._assistantId = value;
    }
    public resetAssistantId() {
        this._assistantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assistantIdInput() {
        return this._assistantId;
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

    // model_id - computed: false, optional: false, required: true
    private _modelId?: string; 
    public get modelId() {
        return this.getStringAttribute('model_id');
    }
    public set modelId(value: string) {
        this._modelId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelIdInput() {
        return this._modelId;
    }

    // modified_time_seconds - computed: true, optional: false, required: false
    public get modifiedTimeSeconds() {
        return this.getNumberAttribute('modified_time_seconds');
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

    // template_configuration - computed: false, optional: false, required: true
    private _templateConfiguration = new CcAIPrompt.AIPromptTemplateConfigurationPropertyOutputReference(this, "template_configuration");
    public get templateConfiguration() {
        return this._templateConfiguration;
    }
    public putTemplateConfiguration(value: CcAIPrompt.AIPromptTemplateConfigurationProperty) {
        this._templateConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateConfigurationInput() {
        return this._templateConfiguration.internalValue;
    }

    // template_type - computed: false, optional: false, required: true
    private _templateType?: string; 
    public get templateType() {
        return this.getStringAttribute('template_type');
    }
    public set templateType(value: string) {
        this._templateType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateTypeInput() {
        return this._templateType;
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
            api_format: cdktn.stringToTerraform(this._apiFormat),
            assistant_id: cdktn.stringToTerraform(this._assistantId),
            description: cdktn.stringToTerraform(this._description),
            model_id: cdktn.stringToTerraform(this._modelId),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            template_configuration: ccAIPromptAIPromptTemplateConfigurationPropertyToTerraform(this._templateConfiguration.internalValue),
            template_type: cdktn.stringToTerraform(this._templateType),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_format: {
                value: cdktn.stringToHclTerraform(this._apiFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assistant_id: {
                value: cdktn.stringToHclTerraform(this._assistantId),
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
            model_id: {
                value: cdktn.stringToHclTerraform(this._modelId),
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
            template_configuration: {
                value: ccAIPromptAIPromptTemplateConfigurationPropertyToHclTerraform(this._templateConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAIPrompt.AIPromptTemplateConfigurationProperty",
            },
            template_type: {
                value: cdktn.stringToHclTerraform(this._templateType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccAIPromptTextFullAIPromptEditTemplateConfigurationPropertyToTerraform(struct?: CcAIPrompt.TextFullAIPromptEditTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        text: cdktn.stringToTerraform(struct!.text),
    }
}


export function ccAIPromptTextFullAIPromptEditTemplateConfigurationPropertyToHclTerraform(struct?: CcAIPrompt.TextFullAIPromptEditTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccAIPromptAIPromptTemplateConfigurationPropertyToTerraform(struct?: CcAIPrompt.AIPromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        text_full_ai_prompt_edit_template_configuration: ccAIPromptTextFullAIPromptEditTemplateConfigurationPropertyToTerraform(struct!.textFullAiPromptEditTemplateConfiguration),
    }
}


export function ccAIPromptAIPromptTemplateConfigurationPropertyToHclTerraform(struct?: CcAIPrompt.AIPromptTemplateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        text_full_ai_prompt_edit_template_configuration: {
            value: ccAIPromptTextFullAIPromptEditTemplateConfigurationPropertyToHclTerraform(struct!.textFullAiPromptEditTemplateConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "TextFullAIPromptEditTemplateConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAIPrompt {
export interface TextFullAIPromptEditTemplateConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#text CcAIPrompt#text}
    */
    readonly text?: string;
}
export class TextFullAIPromptEditTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TextFullAIPromptEditTemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TextFullAIPromptEditTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._text = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._text = value.text;
        }
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
export interface AIPromptTemplateConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration CcAIPrompt#text_full_ai_prompt_edit_template_configuration}
    */
    readonly textFullAiPromptEditTemplateConfiguration?: TextFullAIPromptEditTemplateConfigurationProperty;
}
export class AIPromptTemplateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AIPromptTemplateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._textFullAiPromptEditTemplateConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.textFullAiPromptEditTemplateConfiguration = this._textFullAiPromptEditTemplateConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AIPromptTemplateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._textFullAiPromptEditTemplateConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._textFullAiPromptEditTemplateConfiguration.internalValue = value.textFullAiPromptEditTemplateConfiguration;
        }
    }

    // text_full_ai_prompt_edit_template_configuration - computed: true, optional: true, required: false
    private _textFullAiPromptEditTemplateConfiguration = new TextFullAIPromptEditTemplateConfigurationPropertyOutputReference(this, "text_full_ai_prompt_edit_template_configuration");
    public get textFullAiPromptEditTemplateConfiguration() {
        return this._textFullAiPromptEditTemplateConfiguration;
    }
    public putTextFullAiPromptEditTemplateConfiguration(value: TextFullAIPromptEditTemplateConfigurationProperty) {
        this._textFullAiPromptEditTemplateConfiguration.internalValue = value;
    }
    public resetTextFullAiPromptEditTemplateConfiguration() {
        this._textFullAiPromptEditTemplateConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textFullAiPromptEditTemplateConfigurationInput() {
        return this._textFullAiPromptEditTemplateConfiguration.internalValue;
    }
}
}
