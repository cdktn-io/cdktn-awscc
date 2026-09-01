// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMessageTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The channel subtype this message template applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#channel_subtype CcMessageTemplate#channel_subtype}
    */
    readonly channelSubtype: string;
    /**
    * The content of the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#content CcMessageTemplate#content}
    */
    readonly content: CcMessageTemplate.ContentProperty;
    /**
    * An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#default_attributes CcMessageTemplate#default_attributes}
    */
    readonly defaultAttributes?: CcMessageTemplate.MessageTemplateAttributesProperty;
    /**
    * The description of the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#description CcMessageTemplate#description}
    */
    readonly description?: string;
    /**
    * The configuration information of the user groups that the message template is accessible to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#grouping_configuration CcMessageTemplate#grouping_configuration}
    */
    readonly groupingConfiguration?: CcMessageTemplate.GroupingConfigurationProperty;
    /**
    * The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#knowledge_base_arn CcMessageTemplate#knowledge_base_arn}
    */
    readonly knowledgeBaseArn: string;
    /**
    * The language code value for the language in which the message template is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#language CcMessageTemplate#language}
    */
    readonly language?: string;
    /**
    * List of message template attachments
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#message_template_attachments CcMessageTemplate#message_template_attachments}
    */
    readonly messageTemplateAttachments?: CcMessageTemplate.MessageTemplateAttachmentProperty[] | cdktn.IResolvable;
    /**
    * The name of the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#name CcMessageTemplate#name}
    */
    readonly name: string;
    /**
    * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#tags CcMessageTemplate#tags}
    */
    readonly tags?: CcMessageTemplate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template awscc_wisdom_message_template}
*/
export class CcMessageTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_message_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMessageTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMessageTemplate to import
    * @param importFromId The id of the existing CcMessageTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMessageTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_message_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template awscc_wisdom_message_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMessageTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcMessageTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_message_template',
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
        this._channelSubtype = config.channelSubtype;
        this._content.internalValue = config.content;
        this._defaultAttributes.internalValue = config.defaultAttributes;
        this._description = config.description;
        this._groupingConfiguration.internalValue = config.groupingConfiguration;
        this._knowledgeBaseArn = config.knowledgeBaseArn;
        this._language = config.language;
        this._messageTemplateAttachments.internalValue = config.messageTemplateAttachments;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channel_subtype - computed: false, optional: false, required: true
    private _channelSubtype?: string; 
    public get channelSubtype() {
        return this.getStringAttribute('channel_subtype');
    }
    public set channelSubtype(value: string) {
        this._channelSubtype = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelSubtypeInput() {
        return this._channelSubtype;
    }

    // content - computed: false, optional: false, required: true
    private _content = new CcMessageTemplate.ContentPropertyOutputReference(this, "content");
    public get content() {
        return this._content;
    }
    public putContent(value: CcMessageTemplate.ContentProperty) {
        this._content.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content.internalValue;
    }

    // default_attributes - computed: true, optional: true, required: false
    private _defaultAttributes = new CcMessageTemplate.MessageTemplateAttributesPropertyOutputReference(this, "default_attributes");
    public get defaultAttributes() {
        return this._defaultAttributes;
    }
    public putDefaultAttributes(value: CcMessageTemplate.MessageTemplateAttributesProperty) {
        this._defaultAttributes.internalValue = value;
    }
    public resetDefaultAttributes() {
        this._defaultAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultAttributesInput() {
        return this._defaultAttributes.internalValue;
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

    // grouping_configuration - computed: true, optional: true, required: false
    private _groupingConfiguration = new CcMessageTemplate.GroupingConfigurationPropertyOutputReference(this, "grouping_configuration");
    public get groupingConfiguration() {
        return this._groupingConfiguration;
    }
    public putGroupingConfiguration(value: CcMessageTemplate.GroupingConfigurationProperty) {
        this._groupingConfiguration.internalValue = value;
    }
    public resetGroupingConfiguration() {
        this._groupingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupingConfigurationInput() {
        return this._groupingConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // knowledge_base_arn - computed: false, optional: false, required: true
    private _knowledgeBaseArn?: string; 
    public get knowledgeBaseArn() {
        return this.getStringAttribute('knowledge_base_arn');
    }
    public set knowledgeBaseArn(value: string) {
        this._knowledgeBaseArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseArnInput() {
        return this._knowledgeBaseArn;
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

    // message_template_arn - computed: true, optional: false, required: false
    public get messageTemplateArn() {
        return this.getStringAttribute('message_template_arn');
    }

    // message_template_attachments - computed: true, optional: true, required: false
    private _messageTemplateAttachments = new CcMessageTemplate.MessageTemplateAttachmentPropertyList(this, "message_template_attachments", false);
    public get messageTemplateAttachments() {
        return this._messageTemplateAttachments;
    }
    public putMessageTemplateAttachments(value: CcMessageTemplate.MessageTemplateAttachmentProperty[] | cdktn.IResolvable) {
        this._messageTemplateAttachments.internalValue = value;
    }
    public resetMessageTemplateAttachments() {
        this._messageTemplateAttachments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageTemplateAttachmentsInput() {
        return this._messageTemplateAttachments.internalValue;
    }

    // message_template_content_sha_256 - computed: true, optional: false, required: false
    public get messageTemplateContentSha256() {
        return this.getStringAttribute('message_template_content_sha_256');
    }

    // message_template_id - computed: true, optional: false, required: false
    public get messageTemplateId() {
        return this.getStringAttribute('message_template_id');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMessageTemplate.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMessageTemplate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_subtype: cdktn.stringToTerraform(this._channelSubtype),
            content: ccMessageTemplateContentPropertyToTerraform(this._content.internalValue),
            default_attributes: ccMessageTemplateMessageTemplateAttributesPropertyToTerraform(this._defaultAttributes.internalValue),
            description: cdktn.stringToTerraform(this._description),
            grouping_configuration: ccMessageTemplateGroupingConfigurationPropertyToTerraform(this._groupingConfiguration.internalValue),
            knowledge_base_arn: cdktn.stringToTerraform(this._knowledgeBaseArn),
            language: cdktn.stringToTerraform(this._language),
            message_template_attachments: cdktn.listMapper(ccMessageTemplateMessageTemplateAttachmentPropertyToTerraform, false)(this._messageTemplateAttachments.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccMessageTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_subtype: {
                value: cdktn.stringToHclTerraform(this._channelSubtype),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content: {
                value: ccMessageTemplateContentPropertyToHclTerraform(this._content.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMessageTemplate.ContentProperty",
            },
            default_attributes: {
                value: ccMessageTemplateMessageTemplateAttributesPropertyToHclTerraform(this._defaultAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMessageTemplate.MessageTemplateAttributesProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            grouping_configuration: {
                value: ccMessageTemplateGroupingConfigurationPropertyToHclTerraform(this._groupingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMessageTemplate.GroupingConfigurationProperty",
            },
            knowledge_base_arn: {
                value: cdktn.stringToHclTerraform(this._knowledgeBaseArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            language: {
                value: cdktn.stringToHclTerraform(this._language),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            message_template_attachments: {
                value: cdktn.listMapperHcl(ccMessageTemplateMessageTemplateAttachmentPropertyToHclTerraform, false)(this._messageTemplateAttachments.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMessageTemplate.MessageTemplateAttachmentPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMessageTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcMessageTemplate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMessageTemplateMessageTemplateBodyContentProviderPropertyToTerraform(struct?: CcMessageTemplate.MessageTemplateBodyContentProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
    }
}


export function ccMessageTemplateMessageTemplateBodyContentProviderPropertyToHclTerraform(struct?: CcMessageTemplate.MessageTemplateBodyContentProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateContentEmailMessageTemplateContentBodyPlainTextPropertyToTerraform(struct?: CcMessageTemplate.ContentEmailMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
    }
}


export function ccMessageTemplateContentEmailMessageTemplateContentBodyPlainTextPropertyToHclTerraform(struct?: CcMessageTemplate.ContentEmailMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateEmailMessageTemplateContentBodyPropertyToTerraform(struct?: CcMessageTemplate.EmailMessageTemplateContentBodyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        html: ccMessageTemplateMessageTemplateBodyContentProviderPropertyToTerraform(struct!.html),
        plain_text: ccMessageTemplateContentEmailMessageTemplateContentBodyPlainTextPropertyToTerraform(struct!.plainText),
    }
}


export function ccMessageTemplateEmailMessageTemplateContentBodyPropertyToHclTerraform(struct?: CcMessageTemplate.EmailMessageTemplateContentBodyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        html: {
            value: ccMessageTemplateMessageTemplateBodyContentProviderPropertyToHclTerraform(struct!.html),
            isBlock: true,
            type: "struct",
            storageClassType: "MessageTemplateBodyContentProviderProperty",
        },
        plain_text: {
            value: ccMessageTemplateContentEmailMessageTemplateContentBodyPlainTextPropertyToHclTerraform(struct!.plainText),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentEmailMessageTemplateContentBodyPlainTextProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateEmailMessageTemplateHeaderPropertyToTerraform(struct?: CcMessageTemplate.EmailMessageTemplateHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMessageTemplateEmailMessageTemplateHeaderPropertyToHclTerraform(struct?: CcMessageTemplate.EmailMessageTemplateHeaderProperty | cdktn.IResolvable): any {
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


export function ccMessageTemplateEmailMessageTemplateContentPropertyToTerraform(struct?: CcMessageTemplate.EmailMessageTemplateContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        body: ccMessageTemplateEmailMessageTemplateContentBodyPropertyToTerraform(struct!.body),
        headers: cdktn.listMapper(ccMessageTemplateEmailMessageTemplateHeaderPropertyToTerraform, false)(struct!.headers),
        subject: cdktn.stringToTerraform(struct!.subject),
    }
}


export function ccMessageTemplateEmailMessageTemplateContentPropertyToHclTerraform(struct?: CcMessageTemplate.EmailMessageTemplateContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        body: {
            value: ccMessageTemplateEmailMessageTemplateContentBodyPropertyToHclTerraform(struct!.body),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailMessageTemplateContentBodyProperty",
        },
        headers: {
            value: cdktn.listMapperHcl(ccMessageTemplateEmailMessageTemplateHeaderPropertyToHclTerraform, false)(struct!.headers),
            isBlock: true,
            type: "list",
            storageClassType: "EmailMessageTemplateHeaderPropertyList",
        },
        subject: {
            value: cdktn.stringToHclTerraform(struct!.subject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateContentSmsMessageTemplateContentBodyPlainTextPropertyToTerraform(struct?: CcMessageTemplate.ContentSmsMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
    }
}


export function ccMessageTemplateContentSmsMessageTemplateContentBodyPlainTextPropertyToHclTerraform(struct?: CcMessageTemplate.ContentSmsMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateSmsMessageTemplateContentBodyPropertyToTerraform(struct?: CcMessageTemplate.SmsMessageTemplateContentBodyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        plain_text: ccMessageTemplateContentSmsMessageTemplateContentBodyPlainTextPropertyToTerraform(struct!.plainText),
    }
}


export function ccMessageTemplateSmsMessageTemplateContentBodyPropertyToHclTerraform(struct?: CcMessageTemplate.SmsMessageTemplateContentBodyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        plain_text: {
            value: ccMessageTemplateContentSmsMessageTemplateContentBodyPlainTextPropertyToHclTerraform(struct!.plainText),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentSmsMessageTemplateContentBodyPlainTextProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateSmsMessageTemplateContentPropertyToTerraform(struct?: CcMessageTemplate.SmsMessageTemplateContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        body: ccMessageTemplateSmsMessageTemplateContentBodyPropertyToTerraform(struct!.body),
    }
}


export function ccMessageTemplateSmsMessageTemplateContentPropertyToHclTerraform(struct?: CcMessageTemplate.SmsMessageTemplateContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        body: {
            value: ccMessageTemplateSmsMessageTemplateContentBodyPropertyToHclTerraform(struct!.body),
            isBlock: true,
            type: "struct",
            storageClassType: "SmsMessageTemplateContentBodyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateContentPropertyToTerraform(struct?: CcMessageTemplate.ContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email_message_template_content: ccMessageTemplateEmailMessageTemplateContentPropertyToTerraform(struct!.emailMessageTemplateContent),
        sms_message_template_content: ccMessageTemplateSmsMessageTemplateContentPropertyToTerraform(struct!.smsMessageTemplateContent),
    }
}


export function ccMessageTemplateContentPropertyToHclTerraform(struct?: CcMessageTemplate.ContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email_message_template_content: {
            value: ccMessageTemplateEmailMessageTemplateContentPropertyToHclTerraform(struct!.emailMessageTemplateContent),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailMessageTemplateContentProperty",
        },
        sms_message_template_content: {
            value: ccMessageTemplateSmsMessageTemplateContentPropertyToHclTerraform(struct!.smsMessageTemplateContent),
            isBlock: true,
            type: "struct",
            storageClassType: "SmsMessageTemplateContentProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateAgentAttributesPropertyToTerraform(struct?: CcMessageTemplate.AgentAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        first_name: cdktn.stringToTerraform(struct!.firstName),
        last_name: cdktn.stringToTerraform(struct!.lastName),
    }
}


export function ccMessageTemplateAgentAttributesPropertyToHclTerraform(struct?: CcMessageTemplate.AgentAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        first_name: {
            value: cdktn.stringToHclTerraform(struct!.firstName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        last_name: {
            value: cdktn.stringToHclTerraform(struct!.lastName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateCustomerProfileAttributesPropertyToTerraform(struct?: CcMessageTemplate.CustomerProfileAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_number: cdktn.stringToTerraform(struct!.accountNumber),
        additional_information: cdktn.stringToTerraform(struct!.additionalInformation),
        address_1: cdktn.stringToTerraform(struct!.address1),
        address_2: cdktn.stringToTerraform(struct!.address2),
        address_3: cdktn.stringToTerraform(struct!.address3),
        address_4: cdktn.stringToTerraform(struct!.address4),
        billing_address_1: cdktn.stringToTerraform(struct!.billingAddress1),
        billing_address_2: cdktn.stringToTerraform(struct!.billingAddress2),
        billing_address_3: cdktn.stringToTerraform(struct!.billingAddress3),
        billing_address_4: cdktn.stringToTerraform(struct!.billingAddress4),
        billing_city: cdktn.stringToTerraform(struct!.billingCity),
        billing_country: cdktn.stringToTerraform(struct!.billingCountry),
        billing_county: cdktn.stringToTerraform(struct!.billingCounty),
        billing_postal_code: cdktn.stringToTerraform(struct!.billingPostalCode),
        billing_province: cdktn.stringToTerraform(struct!.billingProvince),
        billing_state: cdktn.stringToTerraform(struct!.billingState),
        birth_date: cdktn.stringToTerraform(struct!.birthDate),
        business_email_address: cdktn.stringToTerraform(struct!.businessEmailAddress),
        business_name: cdktn.stringToTerraform(struct!.businessName),
        business_phone_number: cdktn.stringToTerraform(struct!.businessPhoneNumber),
        city: cdktn.stringToTerraform(struct!.city),
        country: cdktn.stringToTerraform(struct!.country),
        county: cdktn.stringToTerraform(struct!.county),
        custom: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.custom),
        email_address: cdktn.stringToTerraform(struct!.emailAddress),
        first_name: cdktn.stringToTerraform(struct!.firstName),
        gender: cdktn.stringToTerraform(struct!.gender),
        home_phone_number: cdktn.stringToTerraform(struct!.homePhoneNumber),
        last_name: cdktn.stringToTerraform(struct!.lastName),
        mailing_address_1: cdktn.stringToTerraform(struct!.mailingAddress1),
        mailing_address_2: cdktn.stringToTerraform(struct!.mailingAddress2),
        mailing_address_3: cdktn.stringToTerraform(struct!.mailingAddress3),
        mailing_address_4: cdktn.stringToTerraform(struct!.mailingAddress4),
        mailing_city: cdktn.stringToTerraform(struct!.mailingCity),
        mailing_country: cdktn.stringToTerraform(struct!.mailingCountry),
        mailing_county: cdktn.stringToTerraform(struct!.mailingCounty),
        mailing_postal_code: cdktn.stringToTerraform(struct!.mailingPostalCode),
        mailing_province: cdktn.stringToTerraform(struct!.mailingProvince),
        mailing_state: cdktn.stringToTerraform(struct!.mailingState),
        middle_name: cdktn.stringToTerraform(struct!.middleName),
        mobile_phone_number: cdktn.stringToTerraform(struct!.mobilePhoneNumber),
        party_type: cdktn.stringToTerraform(struct!.partyType),
        phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
        postal_code: cdktn.stringToTerraform(struct!.postalCode),
        profile_arn: cdktn.stringToTerraform(struct!.profileArn),
        profile_id: cdktn.stringToTerraform(struct!.profileId),
        province: cdktn.stringToTerraform(struct!.province),
        shipping_address_1: cdktn.stringToTerraform(struct!.shippingAddress1),
        shipping_address_2: cdktn.stringToTerraform(struct!.shippingAddress2),
        shipping_address_3: cdktn.stringToTerraform(struct!.shippingAddress3),
        shipping_address_4: cdktn.stringToTerraform(struct!.shippingAddress4),
        shipping_city: cdktn.stringToTerraform(struct!.shippingCity),
        shipping_country: cdktn.stringToTerraform(struct!.shippingCountry),
        shipping_county: cdktn.stringToTerraform(struct!.shippingCounty),
        shipping_postal_code: cdktn.stringToTerraform(struct!.shippingPostalCode),
        shipping_province: cdktn.stringToTerraform(struct!.shippingProvince),
        shipping_state: cdktn.stringToTerraform(struct!.shippingState),
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccMessageTemplateCustomerProfileAttributesPropertyToHclTerraform(struct?: CcMessageTemplate.CustomerProfileAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_number: {
            value: cdktn.stringToHclTerraform(struct!.accountNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        additional_information: {
            value: cdktn.stringToHclTerraform(struct!.additionalInformation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_1: {
            value: cdktn.stringToHclTerraform(struct!.address1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_2: {
            value: cdktn.stringToHclTerraform(struct!.address2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_3: {
            value: cdktn.stringToHclTerraform(struct!.address3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        address_4: {
            value: cdktn.stringToHclTerraform(struct!.address4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_address_1: {
            value: cdktn.stringToHclTerraform(struct!.billingAddress1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_address_2: {
            value: cdktn.stringToHclTerraform(struct!.billingAddress2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_address_3: {
            value: cdktn.stringToHclTerraform(struct!.billingAddress3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_address_4: {
            value: cdktn.stringToHclTerraform(struct!.billingAddress4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_city: {
            value: cdktn.stringToHclTerraform(struct!.billingCity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_country: {
            value: cdktn.stringToHclTerraform(struct!.billingCountry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_county: {
            value: cdktn.stringToHclTerraform(struct!.billingCounty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_postal_code: {
            value: cdktn.stringToHclTerraform(struct!.billingPostalCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_province: {
            value: cdktn.stringToHclTerraform(struct!.billingProvince),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        billing_state: {
            value: cdktn.stringToHclTerraform(struct!.billingState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        birth_date: {
            value: cdktn.stringToHclTerraform(struct!.birthDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_email_address: {
            value: cdktn.stringToHclTerraform(struct!.businessEmailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_name: {
            value: cdktn.stringToHclTerraform(struct!.businessName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_phone_number: {
            value: cdktn.stringToHclTerraform(struct!.businessPhoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        city: {
            value: cdktn.stringToHclTerraform(struct!.city),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        country: {
            value: cdktn.stringToHclTerraform(struct!.country),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        county: {
            value: cdktn.stringToHclTerraform(struct!.county),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.custom),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        email_address: {
            value: cdktn.stringToHclTerraform(struct!.emailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        first_name: {
            value: cdktn.stringToHclTerraform(struct!.firstName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gender: {
            value: cdktn.stringToHclTerraform(struct!.gender),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        home_phone_number: {
            value: cdktn.stringToHclTerraform(struct!.homePhoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        last_name: {
            value: cdktn.stringToHclTerraform(struct!.lastName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_address_1: {
            value: cdktn.stringToHclTerraform(struct!.mailingAddress1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_address_2: {
            value: cdktn.stringToHclTerraform(struct!.mailingAddress2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_address_3: {
            value: cdktn.stringToHclTerraform(struct!.mailingAddress3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_address_4: {
            value: cdktn.stringToHclTerraform(struct!.mailingAddress4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_city: {
            value: cdktn.stringToHclTerraform(struct!.mailingCity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_country: {
            value: cdktn.stringToHclTerraform(struct!.mailingCountry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_county: {
            value: cdktn.stringToHclTerraform(struct!.mailingCounty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_postal_code: {
            value: cdktn.stringToHclTerraform(struct!.mailingPostalCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_province: {
            value: cdktn.stringToHclTerraform(struct!.mailingProvince),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mailing_state: {
            value: cdktn.stringToHclTerraform(struct!.mailingState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        middle_name: {
            value: cdktn.stringToHclTerraform(struct!.middleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mobile_phone_number: {
            value: cdktn.stringToHclTerraform(struct!.mobilePhoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        party_type: {
            value: cdktn.stringToHclTerraform(struct!.partyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        phone_number: {
            value: cdktn.stringToHclTerraform(struct!.phoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        postal_code: {
            value: cdktn.stringToHclTerraform(struct!.postalCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.profileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        profile_id: {
            value: cdktn.stringToHclTerraform(struct!.profileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        province: {
            value: cdktn.stringToHclTerraform(struct!.province),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_address_1: {
            value: cdktn.stringToHclTerraform(struct!.shippingAddress1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_address_2: {
            value: cdktn.stringToHclTerraform(struct!.shippingAddress2),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_address_3: {
            value: cdktn.stringToHclTerraform(struct!.shippingAddress3),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_address_4: {
            value: cdktn.stringToHclTerraform(struct!.shippingAddress4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_city: {
            value: cdktn.stringToHclTerraform(struct!.shippingCity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_country: {
            value: cdktn.stringToHclTerraform(struct!.shippingCountry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_county: {
            value: cdktn.stringToHclTerraform(struct!.shippingCounty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_postal_code: {
            value: cdktn.stringToHclTerraform(struct!.shippingPostalCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_province: {
            value: cdktn.stringToHclTerraform(struct!.shippingProvince),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        shipping_state: {
            value: cdktn.stringToHclTerraform(struct!.shippingState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateSystemEndpointAttributesPropertyToTerraform(struct?: CcMessageTemplate.SystemEndpointAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address: cdktn.stringToTerraform(struct!.address),
    }
}


export function ccMessageTemplateSystemEndpointAttributesPropertyToHclTerraform(struct?: CcMessageTemplate.SystemEndpointAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address: {
            value: cdktn.stringToHclTerraform(struct!.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateSystemEndpointPropertyToTerraform(struct?: CcMessageTemplate.SystemEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address: cdktn.stringToTerraform(struct!.address),
    }
}


export function ccMessageTemplateSystemEndpointPropertyToHclTerraform(struct?: CcMessageTemplate.SystemEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address: {
            value: cdktn.stringToHclTerraform(struct!.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateSystemAttributesPropertyToTerraform(struct?: CcMessageTemplate.SystemAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_endpoint: ccMessageTemplateSystemEndpointAttributesPropertyToTerraform(struct!.customerEndpoint),
        name: cdktn.stringToTerraform(struct!.name),
        system_endpoint: ccMessageTemplateSystemEndpointPropertyToTerraform(struct!.systemEndpoint),
    }
}


export function ccMessageTemplateSystemAttributesPropertyToHclTerraform(struct?: CcMessageTemplate.SystemAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_endpoint: {
            value: ccMessageTemplateSystemEndpointAttributesPropertyToHclTerraform(struct!.customerEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "SystemEndpointAttributesProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        system_endpoint: {
            value: ccMessageTemplateSystemEndpointPropertyToHclTerraform(struct!.systemEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "SystemEndpointProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateMessageTemplateAttributesPropertyToTerraform(struct?: CcMessageTemplate.MessageTemplateAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_attributes: ccMessageTemplateAgentAttributesPropertyToTerraform(struct!.agentAttributes),
        custom_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customAttributes),
        customer_profile_attributes: ccMessageTemplateCustomerProfileAttributesPropertyToTerraform(struct!.customerProfileAttributes),
        system_attributes: ccMessageTemplateSystemAttributesPropertyToTerraform(struct!.systemAttributes),
    }
}


export function ccMessageTemplateMessageTemplateAttributesPropertyToHclTerraform(struct?: CcMessageTemplate.MessageTemplateAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_attributes: {
            value: ccMessageTemplateAgentAttributesPropertyToHclTerraform(struct!.agentAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "AgentAttributesProperty",
        },
        custom_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        customer_profile_attributes: {
            value: ccMessageTemplateCustomerProfileAttributesPropertyToHclTerraform(struct!.customerProfileAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomerProfileAttributesProperty",
        },
        system_attributes: {
            value: ccMessageTemplateSystemAttributesPropertyToHclTerraform(struct!.systemAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "SystemAttributesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateGroupingConfigurationPropertyToTerraform(struct?: CcMessageTemplate.GroupingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria: cdktn.stringToTerraform(struct!.criteria),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccMessageTemplateGroupingConfigurationPropertyToHclTerraform(struct?: CcMessageTemplate.GroupingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criteria: {
            value: cdktn.stringToHclTerraform(struct!.criteria),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccMessageTemplateMessageTemplateAttachmentPropertyToTerraform(struct?: CcMessageTemplate.MessageTemplateAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attachment_id: cdktn.stringToTerraform(struct!.attachmentId),
        attachment_name: cdktn.stringToTerraform(struct!.attachmentName),
        s3_presigned_url: cdktn.stringToTerraform(struct!.s3PresignedUrl),
    }
}


export function ccMessageTemplateMessageTemplateAttachmentPropertyToHclTerraform(struct?: CcMessageTemplate.MessageTemplateAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attachment_id: {
            value: cdktn.stringToHclTerraform(struct!.attachmentId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attachment_name: {
            value: cdktn.stringToHclTerraform(struct!.attachmentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_presigned_url: {
            value: cdktn.stringToHclTerraform(struct!.s3PresignedUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMessageTemplateTagPropertyToTerraform(struct?: CcMessageTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMessageTemplateTagPropertyToHclTerraform(struct?: CcMessageTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMessageTemplate {
export interface MessageTemplateBodyContentProviderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#content CcMessageTemplate#content}
    */
    readonly content?: string;
}
export class MessageTemplateBodyContentProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MessageTemplateBodyContentProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MessageTemplateBodyContentProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    public resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }
}
export interface ContentEmailMessageTemplateContentBodyPlainTextProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#content CcMessageTemplate#content}
    */
    readonly content?: string;
}
export class ContentEmailMessageTemplateContentBodyPlainTextPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentEmailMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentEmailMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    public resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }
}
export interface EmailMessageTemplateContentBodyProperty {
    /**
    * The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#html CcMessageTemplate#html}
    */
    readonly html?: MessageTemplateBodyContentProviderProperty;
    /**
    * The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#plain_text CcMessageTemplate#plain_text}
    */
    readonly plainText?: ContentEmailMessageTemplateContentBodyPlainTextProperty;
}
export class EmailMessageTemplateContentBodyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailMessageTemplateContentBodyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._html?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.html = this._html?.internalValue;
        }
        if (this._plainText?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.plainText = this._plainText?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailMessageTemplateContentBodyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._html.internalValue = undefined;
            this._plainText.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._html.internalValue = value.html;
            this._plainText.internalValue = value.plainText;
        }
    }

    // html - computed: true, optional: true, required: false
    private _html = new MessageTemplateBodyContentProviderPropertyOutputReference(this, "html");
    public get html() {
        return this._html;
    }
    public putHtml(value: MessageTemplateBodyContentProviderProperty) {
        this._html.internalValue = value;
    }
    public resetHtml() {
        this._html.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get htmlInput() {
        return this._html.internalValue;
    }

    // plain_text - computed: true, optional: true, required: false
    private _plainText = new ContentEmailMessageTemplateContentBodyPlainTextPropertyOutputReference(this, "plain_text");
    public get plainText() {
        return this._plainText;
    }
    public putPlainText(value: ContentEmailMessageTemplateContentBodyPlainTextProperty) {
        this._plainText.internalValue = value;
    }
    public resetPlainText() {
        this._plainText.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get plainTextInput() {
        return this._plainText.internalValue;
    }
}
export interface EmailMessageTemplateHeaderProperty {
    /**
    * The name of the email header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#name CcMessageTemplate#name}
    */
    readonly name?: string;
    /**
    * The value of the email header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#value CcMessageTemplate#value}
    */
    readonly value?: string;
}
export class EmailMessageTemplateHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EmailMessageTemplateHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailMessageTemplateHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class EmailMessageTemplateHeaderPropertyList extends cdktn.ComplexList {
    public internalValue? : EmailMessageTemplateHeaderProperty[] | cdktn.IResolvable

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
    public get(index: number): EmailMessageTemplateHeaderPropertyOutputReference {
        return new EmailMessageTemplateHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EmailMessageTemplateContentProperty {
    /**
    * The body to use in email messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#body CcMessageTemplate#body}
    */
    readonly body?: EmailMessageTemplateContentBodyProperty;
    /**
    * The email headers to include in email messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#headers CcMessageTemplate#headers}
    */
    readonly headers?: EmailMessageTemplateHeaderProperty[] | cdktn.IResolvable;
    /**
    * The subject line, or title, to use in email messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#subject CcMessageTemplate#subject}
    */
    readonly subject?: string;
}
export class EmailMessageTemplateContentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailMessageTemplateContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._body?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._subject !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailMessageTemplateContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._body.internalValue = undefined;
            this._headers.internalValue = undefined;
            this._subject = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._body.internalValue = value.body;
            this._headers.internalValue = value.headers;
            this._subject = value.subject;
        }
    }

    // body - computed: true, optional: true, required: false
    private _body = new EmailMessageTemplateContentBodyPropertyOutputReference(this, "body");
    public get body() {
        return this._body;
    }
    public putBody(value: EmailMessageTemplateContentBodyProperty) {
        this._body.internalValue = value;
    }
    public resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
        return this._body.internalValue;
    }

    // headers - computed: true, optional: true, required: false
    private _headers = new EmailMessageTemplateHeaderPropertyList(this, "headers", false);
    public get headers() {
        return this._headers;
    }
    public putHeaders(value: EmailMessageTemplateHeaderProperty[] | cdktn.IResolvable) {
        this._headers.internalValue = value;
    }
    public resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers.internalValue;
    }

    // subject - computed: true, optional: true, required: false
    private _subject?: string; 
    public get subject() {
        return this.getStringAttribute('subject');
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public resetSubject() {
        this._subject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectInput() {
        return this._subject;
    }
}
export interface ContentSmsMessageTemplateContentBodyPlainTextProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#content CcMessageTemplate#content}
    */
    readonly content?: string;
}
export class ContentSmsMessageTemplateContentBodyPlainTextPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentSmsMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentSmsMessageTemplateContentBodyPlainTextProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    public resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }
}
export interface SmsMessageTemplateContentBodyProperty {
    /**
    * The container of message template body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#plain_text CcMessageTemplate#plain_text}
    */
    readonly plainText?: ContentSmsMessageTemplateContentBodyPlainTextProperty;
}
export class SmsMessageTemplateContentBodyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SmsMessageTemplateContentBodyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._plainText?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.plainText = this._plainText?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsMessageTemplateContentBodyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._plainText.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._plainText.internalValue = value.plainText;
        }
    }

    // plain_text - computed: true, optional: true, required: false
    private _plainText = new ContentSmsMessageTemplateContentBodyPlainTextPropertyOutputReference(this, "plain_text");
    public get plainText() {
        return this._plainText;
    }
    public putPlainText(value: ContentSmsMessageTemplateContentBodyPlainTextProperty) {
        this._plainText.internalValue = value;
    }
    public resetPlainText() {
        this._plainText.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get plainTextInput() {
        return this._plainText.internalValue;
    }
}
export interface SmsMessageTemplateContentProperty {
    /**
    * The body to use in SMS messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#body CcMessageTemplate#body}
    */
    readonly body?: SmsMessageTemplateContentBodyProperty;
}
export class SmsMessageTemplateContentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SmsMessageTemplateContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._body?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsMessageTemplateContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._body.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._body.internalValue = value.body;
        }
    }

    // body - computed: true, optional: true, required: false
    private _body = new SmsMessageTemplateContentBodyPropertyOutputReference(this, "body");
    public get body() {
        return this._body;
    }
    public putBody(value: SmsMessageTemplateContentBodyProperty) {
        this._body.internalValue = value;
    }
    public resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
        return this._body.internalValue;
    }
}
export interface ContentProperty {
    /**
    * The content of message template that applies to email channel subtype.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#email_message_template_content CcMessageTemplate#email_message_template_content}
    */
    readonly emailMessageTemplateContent?: EmailMessageTemplateContentProperty;
    /**
    * The content of message template that applies to SMS channel subtype.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#sms_message_template_content CcMessageTemplate#sms_message_template_content}
    */
    readonly smsMessageTemplateContent?: SmsMessageTemplateContentProperty;
}
export class ContentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._emailMessageTemplateContent?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailMessageTemplateContent = this._emailMessageTemplateContent?.internalValue;
        }
        if (this._smsMessageTemplateContent?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.smsMessageTemplateContent = this._smsMessageTemplateContent?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._emailMessageTemplateContent.internalValue = undefined;
            this._smsMessageTemplateContent.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._emailMessageTemplateContent.internalValue = value.emailMessageTemplateContent;
            this._smsMessageTemplateContent.internalValue = value.smsMessageTemplateContent;
        }
    }

    // email_message_template_content - computed: true, optional: true, required: false
    private _emailMessageTemplateContent = new EmailMessageTemplateContentPropertyOutputReference(this, "email_message_template_content");
    public get emailMessageTemplateContent() {
        return this._emailMessageTemplateContent;
    }
    public putEmailMessageTemplateContent(value: EmailMessageTemplateContentProperty) {
        this._emailMessageTemplateContent.internalValue = value;
    }
    public resetEmailMessageTemplateContent() {
        this._emailMessageTemplateContent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailMessageTemplateContentInput() {
        return this._emailMessageTemplateContent.internalValue;
    }

    // sms_message_template_content - computed: true, optional: true, required: false
    private _smsMessageTemplateContent = new SmsMessageTemplateContentPropertyOutputReference(this, "sms_message_template_content");
    public get smsMessageTemplateContent() {
        return this._smsMessageTemplateContent;
    }
    public putSmsMessageTemplateContent(value: SmsMessageTemplateContentProperty) {
        this._smsMessageTemplateContent.internalValue = value;
    }
    public resetSmsMessageTemplateContent() {
        this._smsMessageTemplateContent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsMessageTemplateContentInput() {
        return this._smsMessageTemplateContent.internalValue;
    }
}
export interface AgentAttributesProperty {
    /**
    * The agent?s first name as entered in their Amazon Connect user account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#first_name CcMessageTemplate#first_name}
    */
    readonly firstName?: string;
    /**
    * The agent?s last name as entered in their Amazon Connect user account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#last_name CcMessageTemplate#last_name}
    */
    readonly lastName?: string;
}
export class AgentAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AgentAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firstName !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstName = this._firstName;
        }
        if (this._lastName !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastName = this._lastName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AgentAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firstName = undefined;
            this._lastName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firstName = value.firstName;
            this._lastName = value.lastName;
        }
    }

    // first_name - computed: true, optional: true, required: false
    private _firstName?: string; 
    public get firstName() {
        return this.getStringAttribute('first_name');
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public resetFirstName() {
        this._firstName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstNameInput() {
        return this._firstName;
    }

    // last_name - computed: true, optional: true, required: false
    private _lastName?: string; 
    public get lastName() {
        return this.getStringAttribute('last_name');
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public resetLastName() {
        this._lastName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastNameInput() {
        return this._lastName;
    }
}
export interface CustomerProfileAttributesProperty {
    /**
    * A unique account number that you have given to the customer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#account_number CcMessageTemplate#account_number}
    */
    readonly accountNumber?: string;
    /**
    * Any additional information relevant to the customer's profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#additional_information CcMessageTemplate#additional_information}
    */
    readonly additionalInformation?: string;
    /**
    * The first line of a customer address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#address_1 CcMessageTemplate#address_1}
    */
    readonly address1?: string;
    /**
    * The second line of a customer address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#address_2 CcMessageTemplate#address_2}
    */
    readonly address2?: string;
    /**
    * The third line of a customer address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#address_3 CcMessageTemplate#address_3}
    */
    readonly address3?: string;
    /**
    * The fourth line of a customer address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#address_4 CcMessageTemplate#address_4}
    */
    readonly address4?: string;
    /**
    * The first line of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_address_1 CcMessageTemplate#billing_address_1}
    */
    readonly billingAddress1?: string;
    /**
    * The second line of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_address_2 CcMessageTemplate#billing_address_2}
    */
    readonly billingAddress2?: string;
    /**
    * The third line of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_address_3 CcMessageTemplate#billing_address_3}
    */
    readonly billingAddress3?: string;
    /**
    * The fourth line of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_address_4 CcMessageTemplate#billing_address_4}
    */
    readonly billingAddress4?: string;
    /**
    * The city of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_city CcMessageTemplate#billing_city}
    */
    readonly billingCity?: string;
    /**
    * The country of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_country CcMessageTemplate#billing_country}
    */
    readonly billingCountry?: string;
    /**
    * The county of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_county CcMessageTemplate#billing_county}
    */
    readonly billingCounty?: string;
    /**
    * The postal code of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_postal_code CcMessageTemplate#billing_postal_code}
    */
    readonly billingPostalCode?: string;
    /**
    * The province of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_province CcMessageTemplate#billing_province}
    */
    readonly billingProvince?: string;
    /**
    * The state of a customer?s billing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#billing_state CcMessageTemplate#billing_state}
    */
    readonly billingState?: string;
    /**
    * The customer's birth date.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#birth_date CcMessageTemplate#birth_date}
    */
    readonly birthDate?: string;
    /**
    * The customer's business email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#business_email_address CcMessageTemplate#business_email_address}
    */
    readonly businessEmailAddress?: string;
    /**
    * The name of the customer's business.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#business_name CcMessageTemplate#business_name}
    */
    readonly businessName?: string;
    /**
    * The customer's business phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#business_phone_number CcMessageTemplate#business_phone_number}
    */
    readonly businessPhoneNumber?: string;
    /**
    * The city in which a customer lives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#city CcMessageTemplate#city}
    */
    readonly city?: string;
    /**
    * The country in which a customer lives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#country CcMessageTemplate#country}
    */
    readonly country?: string;
    /**
    * The county in which a customer lives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#county CcMessageTemplate#county}
    */
    readonly county?: string;
    /**
    * The custom attributes that are used with the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#custom CcMessageTemplate#custom}
    */
    readonly custom?: { [key: string]: string };
    /**
    * The customer's email address, which has not been specified as a personal or business address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#email_address CcMessageTemplate#email_address}
    */
    readonly emailAddress?: string;
    /**
    * The customer's first name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#first_name CcMessageTemplate#first_name}
    */
    readonly firstName?: string;
    /**
    * The customer's gender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#gender CcMessageTemplate#gender}
    */
    readonly gender?: string;
    /**
    * The customer's home phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#home_phone_number CcMessageTemplate#home_phone_number}
    */
    readonly homePhoneNumber?: string;
    /**
    * The customer's last name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#last_name CcMessageTemplate#last_name}
    */
    readonly lastName?: string;
    /**
    * The first line of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_address_1 CcMessageTemplate#mailing_address_1}
    */
    readonly mailingAddress1?: string;
    /**
    * The second line of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_address_2 CcMessageTemplate#mailing_address_2}
    */
    readonly mailingAddress2?: string;
    /**
    * The third line of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_address_3 CcMessageTemplate#mailing_address_3}
    */
    readonly mailingAddress3?: string;
    /**
    * The fourth line of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_address_4 CcMessageTemplate#mailing_address_4}
    */
    readonly mailingAddress4?: string;
    /**
    * The city of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_city CcMessageTemplate#mailing_city}
    */
    readonly mailingCity?: string;
    /**
    * The country of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_country CcMessageTemplate#mailing_country}
    */
    readonly mailingCountry?: string;
    /**
    * The county of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_county CcMessageTemplate#mailing_county}
    */
    readonly mailingCounty?: string;
    /**
    * The postal code of a customer?s mailing address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_postal_code CcMessageTemplate#mailing_postal_code}
    */
    readonly mailingPostalCode?: string;
    /**
    * The province of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_province CcMessageTemplate#mailing_province}
    */
    readonly mailingProvince?: string;
    /**
    * The state of a customer?s mailing address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mailing_state CcMessageTemplate#mailing_state}
    */
    readonly mailingState?: string;
    /**
    * The customer's middle name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#middle_name CcMessageTemplate#middle_name}
    */
    readonly middleName?: string;
    /**
    * The customer's mobile phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#mobile_phone_number CcMessageTemplate#mobile_phone_number}
    */
    readonly mobilePhoneNumber?: string;
    /**
    * The customer's party type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#party_type CcMessageTemplate#party_type}
    */
    readonly partyType?: string;
    /**
    * The customer's phone number, which has not been specified as a mobile, home, or business number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#phone_number CcMessageTemplate#phone_number}
    */
    readonly phoneNumber?: string;
    /**
    * The postal code of a customer address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#postal_code CcMessageTemplate#postal_code}
    */
    readonly postalCode?: string;
    /**
    * The ARN of a customer profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#profile_arn CcMessageTemplate#profile_arn}
    */
    readonly profileArn?: string;
    /**
    * The unique identifier of a customer profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#profile_id CcMessageTemplate#profile_id}
    */
    readonly profileId?: string;
    /**
    * The province in which a customer lives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#province CcMessageTemplate#province}
    */
    readonly province?: string;
    /**
    * The first line of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_address_1 CcMessageTemplate#shipping_address_1}
    */
    readonly shippingAddress1?: string;
    /**
    * The second line of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_address_2 CcMessageTemplate#shipping_address_2}
    */
    readonly shippingAddress2?: string;
    /**
    * The third line of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_address_3 CcMessageTemplate#shipping_address_3}
    */
    readonly shippingAddress3?: string;
    /**
    * The fourth line of a customer?s shipping address
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_address_4 CcMessageTemplate#shipping_address_4}
    */
    readonly shippingAddress4?: string;
    /**
    * The city of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_city CcMessageTemplate#shipping_city}
    */
    readonly shippingCity?: string;
    /**
    * The country of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_country CcMessageTemplate#shipping_country}
    */
    readonly shippingCountry?: string;
    /**
    * The county of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_county CcMessageTemplate#shipping_county}
    */
    readonly shippingCounty?: string;
    /**
    * The postal code of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_postal_code CcMessageTemplate#shipping_postal_code}
    */
    readonly shippingPostalCode?: string;
    /**
    * The province of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_province CcMessageTemplate#shipping_province}
    */
    readonly shippingProvince?: string;
    /**
    * The state of a customer?s shipping address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#shipping_state CcMessageTemplate#shipping_state}
    */
    readonly shippingState?: string;
    /**
    * The state in which a customer lives.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#state CcMessageTemplate#state}
    */
    readonly state?: string;
}
export class CustomerProfileAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerProfileAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountNumber = this._accountNumber;
        }
        if (this._additionalInformation !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalInformation = this._additionalInformation;
        }
        if (this._address1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.address1 = this._address1;
        }
        if (this._address2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.address2 = this._address2;
        }
        if (this._address3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.address3 = this._address3;
        }
        if (this._address4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.address4 = this._address4;
        }
        if (this._billingAddress1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingAddress1 = this._billingAddress1;
        }
        if (this._billingAddress2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingAddress2 = this._billingAddress2;
        }
        if (this._billingAddress3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingAddress3 = this._billingAddress3;
        }
        if (this._billingAddress4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingAddress4 = this._billingAddress4;
        }
        if (this._billingCity !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingCity = this._billingCity;
        }
        if (this._billingCountry !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingCountry = this._billingCountry;
        }
        if (this._billingCounty !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingCounty = this._billingCounty;
        }
        if (this._billingPostalCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingPostalCode = this._billingPostalCode;
        }
        if (this._billingProvince !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingProvince = this._billingProvince;
        }
        if (this._billingState !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingState = this._billingState;
        }
        if (this._birthDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.birthDate = this._birthDate;
        }
        if (this._businessEmailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessEmailAddress = this._businessEmailAddress;
        }
        if (this._businessName !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessName = this._businessName;
        }
        if (this._businessPhoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessPhoneNumber = this._businessPhoneNumber;
        }
        if (this._city !== undefined) {
            hasAnyValues = true;
            internalValueResult.city = this._city;
        }
        if (this._country !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country;
        }
        if (this._county !== undefined) {
            hasAnyValues = true;
            internalValueResult.county = this._county;
        }
        if (this._custom !== undefined) {
            hasAnyValues = true;
            internalValueResult.custom = this._custom;
        }
        if (this._emailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddress = this._emailAddress;
        }
        if (this._firstName !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstName = this._firstName;
        }
        if (this._gender !== undefined) {
            hasAnyValues = true;
            internalValueResult.gender = this._gender;
        }
        if (this._homePhoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.homePhoneNumber = this._homePhoneNumber;
        }
        if (this._lastName !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastName = this._lastName;
        }
        if (this._mailingAddress1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingAddress1 = this._mailingAddress1;
        }
        if (this._mailingAddress2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingAddress2 = this._mailingAddress2;
        }
        if (this._mailingAddress3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingAddress3 = this._mailingAddress3;
        }
        if (this._mailingAddress4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingAddress4 = this._mailingAddress4;
        }
        if (this._mailingCity !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingCity = this._mailingCity;
        }
        if (this._mailingCountry !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingCountry = this._mailingCountry;
        }
        if (this._mailingCounty !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingCounty = this._mailingCounty;
        }
        if (this._mailingPostalCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingPostalCode = this._mailingPostalCode;
        }
        if (this._mailingProvince !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingProvince = this._mailingProvince;
        }
        if (this._mailingState !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingState = this._mailingState;
        }
        if (this._middleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.middleName = this._middleName;
        }
        if (this._mobilePhoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.mobilePhoneNumber = this._mobilePhoneNumber;
        }
        if (this._partyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.partyType = this._partyType;
        }
        if (this._phoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.phoneNumber = this._phoneNumber;
        }
        if (this._postalCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode;
        }
        if (this._profileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileArn = this._profileArn;
        }
        if (this._profileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileId = this._profileId;
        }
        if (this._province !== undefined) {
            hasAnyValues = true;
            internalValueResult.province = this._province;
        }
        if (this._shippingAddress1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingAddress1 = this._shippingAddress1;
        }
        if (this._shippingAddress2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingAddress2 = this._shippingAddress2;
        }
        if (this._shippingAddress3 !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingAddress3 = this._shippingAddress3;
        }
        if (this._shippingAddress4 !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingAddress4 = this._shippingAddress4;
        }
        if (this._shippingCity !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingCity = this._shippingCity;
        }
        if (this._shippingCountry !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingCountry = this._shippingCountry;
        }
        if (this._shippingCounty !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingCounty = this._shippingCounty;
        }
        if (this._shippingPostalCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingPostalCode = this._shippingPostalCode;
        }
        if (this._shippingProvince !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingProvince = this._shippingProvince;
        }
        if (this._shippingState !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingState = this._shippingState;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerProfileAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountNumber = undefined;
            this._additionalInformation = undefined;
            this._address1 = undefined;
            this._address2 = undefined;
            this._address3 = undefined;
            this._address4 = undefined;
            this._billingAddress1 = undefined;
            this._billingAddress2 = undefined;
            this._billingAddress3 = undefined;
            this._billingAddress4 = undefined;
            this._billingCity = undefined;
            this._billingCountry = undefined;
            this._billingCounty = undefined;
            this._billingPostalCode = undefined;
            this._billingProvince = undefined;
            this._billingState = undefined;
            this._birthDate = undefined;
            this._businessEmailAddress = undefined;
            this._businessName = undefined;
            this._businessPhoneNumber = undefined;
            this._city = undefined;
            this._country = undefined;
            this._county = undefined;
            this._custom = undefined;
            this._emailAddress = undefined;
            this._firstName = undefined;
            this._gender = undefined;
            this._homePhoneNumber = undefined;
            this._lastName = undefined;
            this._mailingAddress1 = undefined;
            this._mailingAddress2 = undefined;
            this._mailingAddress3 = undefined;
            this._mailingAddress4 = undefined;
            this._mailingCity = undefined;
            this._mailingCountry = undefined;
            this._mailingCounty = undefined;
            this._mailingPostalCode = undefined;
            this._mailingProvince = undefined;
            this._mailingState = undefined;
            this._middleName = undefined;
            this._mobilePhoneNumber = undefined;
            this._partyType = undefined;
            this._phoneNumber = undefined;
            this._postalCode = undefined;
            this._profileArn = undefined;
            this._profileId = undefined;
            this._province = undefined;
            this._shippingAddress1 = undefined;
            this._shippingAddress2 = undefined;
            this._shippingAddress3 = undefined;
            this._shippingAddress4 = undefined;
            this._shippingCity = undefined;
            this._shippingCountry = undefined;
            this._shippingCounty = undefined;
            this._shippingPostalCode = undefined;
            this._shippingProvince = undefined;
            this._shippingState = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountNumber = value.accountNumber;
            this._additionalInformation = value.additionalInformation;
            this._address1 = value.address1;
            this._address2 = value.address2;
            this._address3 = value.address3;
            this._address4 = value.address4;
            this._billingAddress1 = value.billingAddress1;
            this._billingAddress2 = value.billingAddress2;
            this._billingAddress3 = value.billingAddress3;
            this._billingAddress4 = value.billingAddress4;
            this._billingCity = value.billingCity;
            this._billingCountry = value.billingCountry;
            this._billingCounty = value.billingCounty;
            this._billingPostalCode = value.billingPostalCode;
            this._billingProvince = value.billingProvince;
            this._billingState = value.billingState;
            this._birthDate = value.birthDate;
            this._businessEmailAddress = value.businessEmailAddress;
            this._businessName = value.businessName;
            this._businessPhoneNumber = value.businessPhoneNumber;
            this._city = value.city;
            this._country = value.country;
            this._county = value.county;
            this._custom = value.custom;
            this._emailAddress = value.emailAddress;
            this._firstName = value.firstName;
            this._gender = value.gender;
            this._homePhoneNumber = value.homePhoneNumber;
            this._lastName = value.lastName;
            this._mailingAddress1 = value.mailingAddress1;
            this._mailingAddress2 = value.mailingAddress2;
            this._mailingAddress3 = value.mailingAddress3;
            this._mailingAddress4 = value.mailingAddress4;
            this._mailingCity = value.mailingCity;
            this._mailingCountry = value.mailingCountry;
            this._mailingCounty = value.mailingCounty;
            this._mailingPostalCode = value.mailingPostalCode;
            this._mailingProvince = value.mailingProvince;
            this._mailingState = value.mailingState;
            this._middleName = value.middleName;
            this._mobilePhoneNumber = value.mobilePhoneNumber;
            this._partyType = value.partyType;
            this._phoneNumber = value.phoneNumber;
            this._postalCode = value.postalCode;
            this._profileArn = value.profileArn;
            this._profileId = value.profileId;
            this._province = value.province;
            this._shippingAddress1 = value.shippingAddress1;
            this._shippingAddress2 = value.shippingAddress2;
            this._shippingAddress3 = value.shippingAddress3;
            this._shippingAddress4 = value.shippingAddress4;
            this._shippingCity = value.shippingCity;
            this._shippingCountry = value.shippingCountry;
            this._shippingCounty = value.shippingCounty;
            this._shippingPostalCode = value.shippingPostalCode;
            this._shippingProvince = value.shippingProvince;
            this._shippingState = value.shippingState;
            this._state = value.state;
        }
    }

    // account_number - computed: true, optional: true, required: false
    private _accountNumber?: string; 
    public get accountNumber() {
        return this.getStringAttribute('account_number');
    }
    public set accountNumber(value: string) {
        this._accountNumber = value;
    }
    public resetAccountNumber() {
        this._accountNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountNumberInput() {
        return this._accountNumber;
    }

    // additional_information - computed: true, optional: true, required: false
    private _additionalInformation?: string; 
    public get additionalInformation() {
        return this.getStringAttribute('additional_information');
    }
    public set additionalInformation(value: string) {
        this._additionalInformation = value;
    }
    public resetAdditionalInformation() {
        this._additionalInformation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalInformationInput() {
        return this._additionalInformation;
    }

    // address_1 - computed: true, optional: true, required: false
    private _address1?: string; 
    public get address1() {
        return this.getStringAttribute('address_1');
    }
    public set address1(value: string) {
        this._address1 = value;
    }
    public resetAddress1() {
        this._address1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get address1Input() {
        return this._address1;
    }

    // address_2 - computed: true, optional: true, required: false
    private _address2?: string; 
    public get address2() {
        return this.getStringAttribute('address_2');
    }
    public set address2(value: string) {
        this._address2 = value;
    }
    public resetAddress2() {
        this._address2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get address2Input() {
        return this._address2;
    }

    // address_3 - computed: true, optional: true, required: false
    private _address3?: string; 
    public get address3() {
        return this.getStringAttribute('address_3');
    }
    public set address3(value: string) {
        this._address3 = value;
    }
    public resetAddress3() {
        this._address3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get address3Input() {
        return this._address3;
    }

    // address_4 - computed: true, optional: true, required: false
    private _address4?: string; 
    public get address4() {
        return this.getStringAttribute('address_4');
    }
    public set address4(value: string) {
        this._address4 = value;
    }
    public resetAddress4() {
        this._address4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get address4Input() {
        return this._address4;
    }

    // billing_address_1 - computed: true, optional: true, required: false
    private _billingAddress1?: string; 
    public get billingAddress1() {
        return this.getStringAttribute('billing_address_1');
    }
    public set billingAddress1(value: string) {
        this._billingAddress1 = value;
    }
    public resetBillingAddress1() {
        this._billingAddress1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingAddress1Input() {
        return this._billingAddress1;
    }

    // billing_address_2 - computed: true, optional: true, required: false
    private _billingAddress2?: string; 
    public get billingAddress2() {
        return this.getStringAttribute('billing_address_2');
    }
    public set billingAddress2(value: string) {
        this._billingAddress2 = value;
    }
    public resetBillingAddress2() {
        this._billingAddress2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingAddress2Input() {
        return this._billingAddress2;
    }

    // billing_address_3 - computed: true, optional: true, required: false
    private _billingAddress3?: string; 
    public get billingAddress3() {
        return this.getStringAttribute('billing_address_3');
    }
    public set billingAddress3(value: string) {
        this._billingAddress3 = value;
    }
    public resetBillingAddress3() {
        this._billingAddress3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingAddress3Input() {
        return this._billingAddress3;
    }

    // billing_address_4 - computed: true, optional: true, required: false
    private _billingAddress4?: string; 
    public get billingAddress4() {
        return this.getStringAttribute('billing_address_4');
    }
    public set billingAddress4(value: string) {
        this._billingAddress4 = value;
    }
    public resetBillingAddress4() {
        this._billingAddress4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingAddress4Input() {
        return this._billingAddress4;
    }

    // billing_city - computed: true, optional: true, required: false
    private _billingCity?: string; 
    public get billingCity() {
        return this.getStringAttribute('billing_city');
    }
    public set billingCity(value: string) {
        this._billingCity = value;
    }
    public resetBillingCity() {
        this._billingCity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingCityInput() {
        return this._billingCity;
    }

    // billing_country - computed: true, optional: true, required: false
    private _billingCountry?: string; 
    public get billingCountry() {
        return this.getStringAttribute('billing_country');
    }
    public set billingCountry(value: string) {
        this._billingCountry = value;
    }
    public resetBillingCountry() {
        this._billingCountry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingCountryInput() {
        return this._billingCountry;
    }

    // billing_county - computed: true, optional: true, required: false
    private _billingCounty?: string; 
    public get billingCounty() {
        return this.getStringAttribute('billing_county');
    }
    public set billingCounty(value: string) {
        this._billingCounty = value;
    }
    public resetBillingCounty() {
        this._billingCounty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingCountyInput() {
        return this._billingCounty;
    }

    // billing_postal_code - computed: true, optional: true, required: false
    private _billingPostalCode?: string; 
    public get billingPostalCode() {
        return this.getStringAttribute('billing_postal_code');
    }
    public set billingPostalCode(value: string) {
        this._billingPostalCode = value;
    }
    public resetBillingPostalCode() {
        this._billingPostalCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingPostalCodeInput() {
        return this._billingPostalCode;
    }

    // billing_province - computed: true, optional: true, required: false
    private _billingProvince?: string; 
    public get billingProvince() {
        return this.getStringAttribute('billing_province');
    }
    public set billingProvince(value: string) {
        this._billingProvince = value;
    }
    public resetBillingProvince() {
        this._billingProvince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingProvinceInput() {
        return this._billingProvince;
    }

    // billing_state - computed: true, optional: true, required: false
    private _billingState?: string; 
    public get billingState() {
        return this.getStringAttribute('billing_state');
    }
    public set billingState(value: string) {
        this._billingState = value;
    }
    public resetBillingState() {
        this._billingState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingStateInput() {
        return this._billingState;
    }

    // birth_date - computed: true, optional: true, required: false
    private _birthDate?: string; 
    public get birthDate() {
        return this.getStringAttribute('birth_date');
    }
    public set birthDate(value: string) {
        this._birthDate = value;
    }
    public resetBirthDate() {
        this._birthDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get birthDateInput() {
        return this._birthDate;
    }

    // business_email_address - computed: true, optional: true, required: false
    private _businessEmailAddress?: string; 
    public get businessEmailAddress() {
        return this.getStringAttribute('business_email_address');
    }
    public set businessEmailAddress(value: string) {
        this._businessEmailAddress = value;
    }
    public resetBusinessEmailAddress() {
        this._businessEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessEmailAddressInput() {
        return this._businessEmailAddress;
    }

    // business_name - computed: true, optional: true, required: false
    private _businessName?: string; 
    public get businessName() {
        return this.getStringAttribute('business_name');
    }
    public set businessName(value: string) {
        this._businessName = value;
    }
    public resetBusinessName() {
        this._businessName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessNameInput() {
        return this._businessName;
    }

    // business_phone_number - computed: true, optional: true, required: false
    private _businessPhoneNumber?: string; 
    public get businessPhoneNumber() {
        return this.getStringAttribute('business_phone_number');
    }
    public set businessPhoneNumber(value: string) {
        this._businessPhoneNumber = value;
    }
    public resetBusinessPhoneNumber() {
        this._businessPhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessPhoneNumberInput() {
        return this._businessPhoneNumber;
    }

    // city - computed: true, optional: true, required: false
    private _city?: string; 
    public get city() {
        return this.getStringAttribute('city');
    }
    public set city(value: string) {
        this._city = value;
    }
    public resetCity() {
        this._city = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cityInput() {
        return this._city;
    }

    // country - computed: true, optional: true, required: false
    private _country?: string; 
    public get country() {
        return this.getStringAttribute('country');
    }
    public set country(value: string) {
        this._country = value;
    }
    public resetCountry() {
        this._country = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country;
    }

    // county - computed: true, optional: true, required: false
    private _county?: string; 
    public get county() {
        return this.getStringAttribute('county');
    }
    public set county(value: string) {
        this._county = value;
    }
    public resetCounty() {
        this._county = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countyInput() {
        return this._county;
    }

    // custom - computed: true, optional: true, required: false
    private _custom?: { [key: string]: string }; 
    public get custom() {
        return this.getStringMapAttribute('custom');
    }
    public set custom(value: { [key: string]: string }) {
        this._custom = value;
    }
    public resetCustom() {
        this._custom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInput() {
        return this._custom;
    }

    // email_address - computed: true, optional: true, required: false
    private _emailAddress?: string; 
    public get emailAddress() {
        return this.getStringAttribute('email_address');
    }
    public set emailAddress(value: string) {
        this._emailAddress = value;
    }
    public resetEmailAddress() {
        this._emailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressInput() {
        return this._emailAddress;
    }

    // first_name - computed: true, optional: true, required: false
    private _firstName?: string; 
    public get firstName() {
        return this.getStringAttribute('first_name');
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public resetFirstName() {
        this._firstName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstNameInput() {
        return this._firstName;
    }

    // gender - computed: true, optional: true, required: false
    private _gender?: string; 
    public get gender() {
        return this.getStringAttribute('gender');
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public resetGender() {
        this._gender = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get genderInput() {
        return this._gender;
    }

    // home_phone_number - computed: true, optional: true, required: false
    private _homePhoneNumber?: string; 
    public get homePhoneNumber() {
        return this.getStringAttribute('home_phone_number');
    }
    public set homePhoneNumber(value: string) {
        this._homePhoneNumber = value;
    }
    public resetHomePhoneNumber() {
        this._homePhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homePhoneNumberInput() {
        return this._homePhoneNumber;
    }

    // last_name - computed: true, optional: true, required: false
    private _lastName?: string; 
    public get lastName() {
        return this.getStringAttribute('last_name');
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public resetLastName() {
        this._lastName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastNameInput() {
        return this._lastName;
    }

    // mailing_address_1 - computed: true, optional: true, required: false
    private _mailingAddress1?: string; 
    public get mailingAddress1() {
        return this.getStringAttribute('mailing_address_1');
    }
    public set mailingAddress1(value: string) {
        this._mailingAddress1 = value;
    }
    public resetMailingAddress1() {
        this._mailingAddress1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingAddress1Input() {
        return this._mailingAddress1;
    }

    // mailing_address_2 - computed: true, optional: true, required: false
    private _mailingAddress2?: string; 
    public get mailingAddress2() {
        return this.getStringAttribute('mailing_address_2');
    }
    public set mailingAddress2(value: string) {
        this._mailingAddress2 = value;
    }
    public resetMailingAddress2() {
        this._mailingAddress2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingAddress2Input() {
        return this._mailingAddress2;
    }

    // mailing_address_3 - computed: true, optional: true, required: false
    private _mailingAddress3?: string; 
    public get mailingAddress3() {
        return this.getStringAttribute('mailing_address_3');
    }
    public set mailingAddress3(value: string) {
        this._mailingAddress3 = value;
    }
    public resetMailingAddress3() {
        this._mailingAddress3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingAddress3Input() {
        return this._mailingAddress3;
    }

    // mailing_address_4 - computed: true, optional: true, required: false
    private _mailingAddress4?: string; 
    public get mailingAddress4() {
        return this.getStringAttribute('mailing_address_4');
    }
    public set mailingAddress4(value: string) {
        this._mailingAddress4 = value;
    }
    public resetMailingAddress4() {
        this._mailingAddress4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingAddress4Input() {
        return this._mailingAddress4;
    }

    // mailing_city - computed: true, optional: true, required: false
    private _mailingCity?: string; 
    public get mailingCity() {
        return this.getStringAttribute('mailing_city');
    }
    public set mailingCity(value: string) {
        this._mailingCity = value;
    }
    public resetMailingCity() {
        this._mailingCity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingCityInput() {
        return this._mailingCity;
    }

    // mailing_country - computed: true, optional: true, required: false
    private _mailingCountry?: string; 
    public get mailingCountry() {
        return this.getStringAttribute('mailing_country');
    }
    public set mailingCountry(value: string) {
        this._mailingCountry = value;
    }
    public resetMailingCountry() {
        this._mailingCountry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingCountryInput() {
        return this._mailingCountry;
    }

    // mailing_county - computed: true, optional: true, required: false
    private _mailingCounty?: string; 
    public get mailingCounty() {
        return this.getStringAttribute('mailing_county');
    }
    public set mailingCounty(value: string) {
        this._mailingCounty = value;
    }
    public resetMailingCounty() {
        this._mailingCounty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingCountyInput() {
        return this._mailingCounty;
    }

    // mailing_postal_code - computed: true, optional: true, required: false
    private _mailingPostalCode?: string; 
    public get mailingPostalCode() {
        return this.getStringAttribute('mailing_postal_code');
    }
    public set mailingPostalCode(value: string) {
        this._mailingPostalCode = value;
    }
    public resetMailingPostalCode() {
        this._mailingPostalCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingPostalCodeInput() {
        return this._mailingPostalCode;
    }

    // mailing_province - computed: true, optional: true, required: false
    private _mailingProvince?: string; 
    public get mailingProvince() {
        return this.getStringAttribute('mailing_province');
    }
    public set mailingProvince(value: string) {
        this._mailingProvince = value;
    }
    public resetMailingProvince() {
        this._mailingProvince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingProvinceInput() {
        return this._mailingProvince;
    }

    // mailing_state - computed: true, optional: true, required: false
    private _mailingState?: string; 
    public get mailingState() {
        return this.getStringAttribute('mailing_state');
    }
    public set mailingState(value: string) {
        this._mailingState = value;
    }
    public resetMailingState() {
        this._mailingState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingStateInput() {
        return this._mailingState;
    }

    // middle_name - computed: true, optional: true, required: false
    private _middleName?: string; 
    public get middleName() {
        return this.getStringAttribute('middle_name');
    }
    public set middleName(value: string) {
        this._middleName = value;
    }
    public resetMiddleName() {
        this._middleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get middleNameInput() {
        return this._middleName;
    }

    // mobile_phone_number - computed: true, optional: true, required: false
    private _mobilePhoneNumber?: string; 
    public get mobilePhoneNumber() {
        return this.getStringAttribute('mobile_phone_number');
    }
    public set mobilePhoneNumber(value: string) {
        this._mobilePhoneNumber = value;
    }
    public resetMobilePhoneNumber() {
        this._mobilePhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mobilePhoneNumberInput() {
        return this._mobilePhoneNumber;
    }

    // party_type - computed: true, optional: true, required: false
    private _partyType?: string; 
    public get partyType() {
        return this.getStringAttribute('party_type');
    }
    public set partyType(value: string) {
        this._partyType = value;
    }
    public resetPartyType() {
        this._partyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partyTypeInput() {
        return this._partyType;
    }

    // phone_number - computed: true, optional: true, required: false
    private _phoneNumber?: string; 
    public get phoneNumber() {
        return this.getStringAttribute('phone_number');
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
    public resetPhoneNumber() {
        this._phoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phoneNumberInput() {
        return this._phoneNumber;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode?: string; 
    public get postalCode() {
        return this.getStringAttribute('postal_code');
    }
    public set postalCode(value: string) {
        this._postalCode = value;
    }
    public resetPostalCode() {
        this._postalCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode;
    }

    // profile_arn - computed: true, optional: true, required: false
    private _profileArn?: string; 
    public get profileArn() {
        return this.getStringAttribute('profile_arn');
    }
    public set profileArn(value: string) {
        this._profileArn = value;
    }
    public resetProfileArn() {
        this._profileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileArnInput() {
        return this._profileArn;
    }

    // profile_id - computed: true, optional: true, required: false
    private _profileId?: string; 
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }
    public set profileId(value: string) {
        this._profileId = value;
    }
    public resetProfileId() {
        this._profileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileIdInput() {
        return this._profileId;
    }

    // province - computed: true, optional: true, required: false
    private _province?: string; 
    public get province() {
        return this.getStringAttribute('province');
    }
    public set province(value: string) {
        this._province = value;
    }
    public resetProvince() {
        this._province = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provinceInput() {
        return this._province;
    }

    // shipping_address_1 - computed: true, optional: true, required: false
    private _shippingAddress1?: string; 
    public get shippingAddress1() {
        return this.getStringAttribute('shipping_address_1');
    }
    public set shippingAddress1(value: string) {
        this._shippingAddress1 = value;
    }
    public resetShippingAddress1() {
        this._shippingAddress1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingAddress1Input() {
        return this._shippingAddress1;
    }

    // shipping_address_2 - computed: true, optional: true, required: false
    private _shippingAddress2?: string; 
    public get shippingAddress2() {
        return this.getStringAttribute('shipping_address_2');
    }
    public set shippingAddress2(value: string) {
        this._shippingAddress2 = value;
    }
    public resetShippingAddress2() {
        this._shippingAddress2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingAddress2Input() {
        return this._shippingAddress2;
    }

    // shipping_address_3 - computed: true, optional: true, required: false
    private _shippingAddress3?: string; 
    public get shippingAddress3() {
        return this.getStringAttribute('shipping_address_3');
    }
    public set shippingAddress3(value: string) {
        this._shippingAddress3 = value;
    }
    public resetShippingAddress3() {
        this._shippingAddress3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingAddress3Input() {
        return this._shippingAddress3;
    }

    // shipping_address_4 - computed: true, optional: true, required: false
    private _shippingAddress4?: string; 
    public get shippingAddress4() {
        return this.getStringAttribute('shipping_address_4');
    }
    public set shippingAddress4(value: string) {
        this._shippingAddress4 = value;
    }
    public resetShippingAddress4() {
        this._shippingAddress4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingAddress4Input() {
        return this._shippingAddress4;
    }

    // shipping_city - computed: true, optional: true, required: false
    private _shippingCity?: string; 
    public get shippingCity() {
        return this.getStringAttribute('shipping_city');
    }
    public set shippingCity(value: string) {
        this._shippingCity = value;
    }
    public resetShippingCity() {
        this._shippingCity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingCityInput() {
        return this._shippingCity;
    }

    // shipping_country - computed: true, optional: true, required: false
    private _shippingCountry?: string; 
    public get shippingCountry() {
        return this.getStringAttribute('shipping_country');
    }
    public set shippingCountry(value: string) {
        this._shippingCountry = value;
    }
    public resetShippingCountry() {
        this._shippingCountry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingCountryInput() {
        return this._shippingCountry;
    }

    // shipping_county - computed: true, optional: true, required: false
    private _shippingCounty?: string; 
    public get shippingCounty() {
        return this.getStringAttribute('shipping_county');
    }
    public set shippingCounty(value: string) {
        this._shippingCounty = value;
    }
    public resetShippingCounty() {
        this._shippingCounty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingCountyInput() {
        return this._shippingCounty;
    }

    // shipping_postal_code - computed: true, optional: true, required: false
    private _shippingPostalCode?: string; 
    public get shippingPostalCode() {
        return this.getStringAttribute('shipping_postal_code');
    }
    public set shippingPostalCode(value: string) {
        this._shippingPostalCode = value;
    }
    public resetShippingPostalCode() {
        this._shippingPostalCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingPostalCodeInput() {
        return this._shippingPostalCode;
    }

    // shipping_province - computed: true, optional: true, required: false
    private _shippingProvince?: string; 
    public get shippingProvince() {
        return this.getStringAttribute('shipping_province');
    }
    public set shippingProvince(value: string) {
        this._shippingProvince = value;
    }
    public resetShippingProvince() {
        this._shippingProvince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingProvinceInput() {
        return this._shippingProvince;
    }

    // shipping_state - computed: true, optional: true, required: false
    private _shippingState?: string; 
    public get shippingState() {
        return this.getStringAttribute('shipping_state');
    }
    public set shippingState(value: string) {
        this._shippingState = value;
    }
    public resetShippingState() {
        this._shippingState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingStateInput() {
        return this._shippingState;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface SystemEndpointAttributesProperty {
    /**
    * The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#address CcMessageTemplate#address}
    */
    readonly address?: string;
}
export class SystemEndpointAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SystemEndpointAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemEndpointAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
        }
    }

    // address - computed: true, optional: true, required: false
    private _address?: string; 
    public get address() {
        return this.getStringAttribute('address');
    }
    public set address(value: string) {
        this._address = value;
    }
    public resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address;
    }
}
export interface SystemEndpointProperty {
    /**
    * The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#address CcMessageTemplate#address}
    */
    readonly address?: string;
}
export class SystemEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SystemEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
        }
    }

    // address - computed: true, optional: true, required: false
    private _address?: string; 
    public get address() {
        return this.getStringAttribute('address');
    }
    public set address(value: string) {
        this._address = value;
    }
    public resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address;
    }
}
export interface SystemAttributesProperty {
    /**
    * The CustomerEndpoint attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#customer_endpoint CcMessageTemplate#customer_endpoint}
    */
    readonly customerEndpoint?: SystemEndpointAttributesProperty;
    /**
    * The name of the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#name CcMessageTemplate#name}
    */
    readonly name?: string;
    /**
    * The SystemEndpoint attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#system_endpoint CcMessageTemplate#system_endpoint}
    */
    readonly systemEndpoint?: SystemEndpointProperty;
}
export class SystemAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SystemAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerEndpoint = this._customerEndpoint?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._systemEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemEndpoint = this._systemEndpoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SystemAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerEndpoint.internalValue = undefined;
            this._name = undefined;
            this._systemEndpoint.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerEndpoint.internalValue = value.customerEndpoint;
            this._name = value.name;
            this._systemEndpoint.internalValue = value.systemEndpoint;
        }
    }

    // customer_endpoint - computed: true, optional: true, required: false
    private _customerEndpoint = new SystemEndpointAttributesPropertyOutputReference(this, "customer_endpoint");
    public get customerEndpoint() {
        return this._customerEndpoint;
    }
    public putCustomerEndpoint(value: SystemEndpointAttributesProperty) {
        this._customerEndpoint.internalValue = value;
    }
    public resetCustomerEndpoint() {
        this._customerEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerEndpointInput() {
        return this._customerEndpoint.internalValue;
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

    // system_endpoint - computed: true, optional: true, required: false
    private _systemEndpoint = new SystemEndpointPropertyOutputReference(this, "system_endpoint");
    public get systemEndpoint() {
        return this._systemEndpoint;
    }
    public putSystemEndpoint(value: SystemEndpointProperty) {
        this._systemEndpoint.internalValue = value;
    }
    public resetSystemEndpoint() {
        this._systemEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemEndpointInput() {
        return this._systemEndpoint.internalValue;
    }
}
export interface MessageTemplateAttributesProperty {
    /**
    * The agent attributes that are used with the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#agent_attributes CcMessageTemplate#agent_attributes}
    */
    readonly agentAttributes?: AgentAttributesProperty;
    /**
    * The custom attributes that are used with the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#custom_attributes CcMessageTemplate#custom_attributes}
    */
    readonly customAttributes?: { [key: string]: string };
    /**
    * The customer profile attributes that are used with the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#customer_profile_attributes CcMessageTemplate#customer_profile_attributes}
    */
    readonly customerProfileAttributes?: CustomerProfileAttributesProperty;
    /**
    * The system attributes that are used with the message template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#system_attributes CcMessageTemplate#system_attributes}
    */
    readonly systemAttributes?: SystemAttributesProperty;
}
export class MessageTemplateAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MessageTemplateAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentAttributes = this._agentAttributes?.internalValue;
        }
        if (this._customAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAttributes = this._customAttributes;
        }
        if (this._customerProfileAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerProfileAttributes = this._customerProfileAttributes?.internalValue;
        }
        if (this._systemAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemAttributes = this._systemAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MessageTemplateAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentAttributes.internalValue = undefined;
            this._customAttributes = undefined;
            this._customerProfileAttributes.internalValue = undefined;
            this._systemAttributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentAttributes.internalValue = value.agentAttributes;
            this._customAttributes = value.customAttributes;
            this._customerProfileAttributes.internalValue = value.customerProfileAttributes;
            this._systemAttributes.internalValue = value.systemAttributes;
        }
    }

    // agent_attributes - computed: true, optional: true, required: false
    private _agentAttributes = new AgentAttributesPropertyOutputReference(this, "agent_attributes");
    public get agentAttributes() {
        return this._agentAttributes;
    }
    public putAgentAttributes(value: AgentAttributesProperty) {
        this._agentAttributes.internalValue = value;
    }
    public resetAgentAttributes() {
        this._agentAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentAttributesInput() {
        return this._agentAttributes.internalValue;
    }

    // custom_attributes - computed: true, optional: true, required: false
    private _customAttributes?: { [key: string]: string }; 
    public get customAttributes() {
        return this.getStringMapAttribute('custom_attributes');
    }
    public set customAttributes(value: { [key: string]: string }) {
        this._customAttributes = value;
    }
    public resetCustomAttributes() {
        this._customAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAttributesInput() {
        return this._customAttributes;
    }

    // customer_profile_attributes - computed: true, optional: true, required: false
    private _customerProfileAttributes = new CustomerProfileAttributesPropertyOutputReference(this, "customer_profile_attributes");
    public get customerProfileAttributes() {
        return this._customerProfileAttributes;
    }
    public putCustomerProfileAttributes(value: CustomerProfileAttributesProperty) {
        this._customerProfileAttributes.internalValue = value;
    }
    public resetCustomerProfileAttributes() {
        this._customerProfileAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerProfileAttributesInput() {
        return this._customerProfileAttributes.internalValue;
    }

    // system_attributes - computed: true, optional: true, required: false
    private _systemAttributes = new SystemAttributesPropertyOutputReference(this, "system_attributes");
    public get systemAttributes() {
        return this._systemAttributes;
    }
    public putSystemAttributes(value: SystemAttributesProperty) {
        this._systemAttributes.internalValue = value;
    }
    public resetSystemAttributes() {
        this._systemAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemAttributesInput() {
        return this._systemAttributes.internalValue;
    }
}
export interface GroupingConfigurationProperty {
    /**
    * The criteria used for grouping Amazon Q in Connect users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#criteria CcMessageTemplate#criteria}
    */
    readonly criteria?: string;
    /**
    * The list of values that define different groups of Amazon Q in Connect users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#values CcMessageTemplate#values}
    */
    readonly values?: string[];
}
export class GroupingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GroupingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._criteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.criteria = this._criteria;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GroupingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._criteria = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._criteria = value.criteria;
            this._values = value.values;
        }
    }

    // criteria - computed: true, optional: true, required: false
    private _criteria?: string; 
    public get criteria() {
        return this.getStringAttribute('criteria');
    }
    public set criteria(value: string) {
        this._criteria = value;
    }
    public resetCriteria() {
        this._criteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaInput() {
        return this._criteria;
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
export interface MessageTemplateAttachmentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#attachment_id CcMessageTemplate#attachment_id}
    */
    readonly attachmentId?: string;
    /**
    * The name of the attachment file being uploaded. The name should include the file extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#attachment_name CcMessageTemplate#attachment_name}
    */
    readonly attachmentName?: string;
    /**
    * The S3 Presigned URL for the attachment file. When generating the PreSignedUrl, please ensure that the expires-in time is set to 30 minutes. The URL can be generated through the AWS Console or through the AWS CLI (https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html). 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#s3_presigned_url CcMessageTemplate#s3_presigned_url}
    */
    readonly s3PresignedUrl?: string;
}
export class MessageTemplateAttachmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MessageTemplateAttachmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attachmentId !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachmentId = this._attachmentId;
        }
        if (this._attachmentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachmentName = this._attachmentName;
        }
        if (this._s3PresignedUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3PresignedUrl = this._s3PresignedUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MessageTemplateAttachmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attachmentId = undefined;
            this._attachmentName = undefined;
            this._s3PresignedUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attachmentId = value.attachmentId;
            this._attachmentName = value.attachmentName;
            this._s3PresignedUrl = value.s3PresignedUrl;
        }
    }

    // attachment_id - computed: true, optional: true, required: false
    private _attachmentId?: string; 
    public get attachmentId() {
        return this.getStringAttribute('attachment_id');
    }
    public set attachmentId(value: string) {
        this._attachmentId = value;
    }
    public resetAttachmentId() {
        this._attachmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentIdInput() {
        return this._attachmentId;
    }

    // attachment_name - computed: true, optional: true, required: false
    private _attachmentName?: string; 
    public get attachmentName() {
        return this.getStringAttribute('attachment_name');
    }
    public set attachmentName(value: string) {
        this._attachmentName = value;
    }
    public resetAttachmentName() {
        this._attachmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentNameInput() {
        return this._attachmentName;
    }

    // s3_presigned_url - computed: true, optional: true, required: false
    private _s3PresignedUrl?: string; 
    public get s3PresignedUrl() {
        return this.getStringAttribute('s3_presigned_url');
    }
    public set s3PresignedUrl(value: string) {
        this._s3PresignedUrl = value;
    }
    public resetS3PresignedUrl() {
        this._s3PresignedUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3PresignedUrlInput() {
        return this._s3PresignedUrl;
    }
}

export class MessageTemplateAttachmentPropertyList extends cdktn.ComplexList {
    public internalValue? : MessageTemplateAttachmentProperty[] | cdktn.IResolvable

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
    public get(index: number): MessageTemplateAttachmentPropertyOutputReference {
        return new MessageTemplateAttachmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#key CcMessageTemplate#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_message_template#value CcMessageTemplate#value}
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
