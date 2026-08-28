// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQuickResponseProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Connect contact channels this quick response applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#channels CcQuickResponse#channels}
    */
    readonly channels?: string[];
    /**
    * The container of quick response content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#content CcQuickResponse#content}
    */
    readonly content: CcQuickResponse.QuickResponseContentProviderProperty;
    /**
    * The media type of the quick response content.
    * - Use application/x.quickresponse;format=plain for quick response written in plain text.
    * - Use application/x.quickresponse;format=markdown for quick response written in richtext.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#content_type CcQuickResponse#content_type}
    */
    readonly contentType?: string;
    /**
    * The description of the quick response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#description CcQuickResponse#description}
    */
    readonly description?: string;
    /**
    * The configuration information of the user groups that the quick response is accessible to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#grouping_configuration CcQuickResponse#grouping_configuration}
    */
    readonly groupingConfiguration?: CcQuickResponse.GroupingConfigurationProperty;
    /**
    * Whether the quick response is active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#is_active CcQuickResponse#is_active}
    */
    readonly isActive?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#knowledge_base_arn CcQuickResponse#knowledge_base_arn}
    */
    readonly knowledgeBaseArn: string;
    /**
    * The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#language CcQuickResponse#language}
    */
    readonly language?: string;
    /**
    * The name of the quick response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#name CcQuickResponse#name}
    */
    readonly name: string;
    /**
    * The shortcut key of the quick response. The value should be unique across the knowledge base.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#shortcut_key CcQuickResponse#shortcut_key}
    */
    readonly shortcutKey?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#tags CcQuickResponse#tags}
    */
    readonly tags?: CcQuickResponse.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response awscc_wisdom_quick_response}
*/
export class CcQuickResponse extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_quick_response";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQuickResponse resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQuickResponse to import
    * @param importFromId The id of the existing CcQuickResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQuickResponse to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_quick_response", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response awscc_wisdom_quick_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQuickResponseProps
    */
    public constructor(scope: Construct, id: string, config: CcQuickResponseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_quick_response',
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
        this._channels = config.channels;
        this._content.internalValue = config.content;
        this._contentType = config.contentType;
        this._description = config.description;
        this._groupingConfiguration.internalValue = config.groupingConfiguration;
        this._isActive = config.isActive;
        this._knowledgeBaseArn = config.knowledgeBaseArn;
        this._language = config.language;
        this._name = config.name;
        this._shortcutKey = config.shortcutKey;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channels - computed: true, optional: true, required: false
    private _channels?: string[]; 
    public get channels() {
        return this.getListAttribute('channels');
    }
    public set channels(value: string[]) {
        this._channels = value;
    }
    public resetChannels() {
        this._channels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelsInput() {
        return this._channels;
    }

    // content - computed: false, optional: false, required: true
    private _content = new CcQuickResponse.QuickResponseContentProviderPropertyOutputReference(this, "content");
    public get content() {
        return this._content;
    }
    public putContent(value: CcQuickResponse.QuickResponseContentProviderProperty) {
        this._content.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content.internalValue;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // contents - computed: true, optional: false, required: false
    private _contents = new CcQuickResponse.ContentsPropertyOutputReference(this, "contents");
    public get contents() {
        return this._contents;
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
    private _groupingConfiguration = new CcQuickResponse.GroupingConfigurationPropertyOutputReference(this, "grouping_configuration");
    public get groupingConfiguration() {
        return this._groupingConfiguration;
    }
    public putGroupingConfiguration(value: CcQuickResponse.GroupingConfigurationProperty) {
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

    // is_active - computed: true, optional: true, required: false
    private _isActive?: boolean | cdktn.IResolvable; 
    public get isActive() {
        return this.getBooleanAttribute('is_active');
    }
    public set isActive(value: boolean | cdktn.IResolvable) {
        this._isActive = value;
    }
    public resetIsActive() {
        this._isActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isActiveInput() {
        return this._isActive;
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

    // quick_response_arn - computed: true, optional: false, required: false
    public get quickResponseArn() {
        return this.getStringAttribute('quick_response_arn');
    }

    // quick_response_id - computed: true, optional: false, required: false
    public get quickResponseId() {
        return this.getStringAttribute('quick_response_id');
    }

    // shortcut_key - computed: true, optional: true, required: false
    private _shortcutKey?: string; 
    public get shortcutKey() {
        return this.getStringAttribute('shortcut_key');
    }
    public set shortcutKey(value: string) {
        this._shortcutKey = value;
    }
    public resetShortcutKey() {
        this._shortcutKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shortcutKeyInput() {
        return this._shortcutKey;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcQuickResponse.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcQuickResponse.TagProperty[] | cdktn.IResolvable) {
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
            channels: cdktn.listMapper(cdktn.stringToTerraform, false)(this._channels),
            content: ccQuickResponseQuickResponseContentProviderPropertyToTerraform(this._content.internalValue),
            content_type: cdktn.stringToTerraform(this._contentType),
            description: cdktn.stringToTerraform(this._description),
            grouping_configuration: ccQuickResponseGroupingConfigurationPropertyToTerraform(this._groupingConfiguration.internalValue),
            is_active: cdktn.booleanToTerraform(this._isActive),
            knowledge_base_arn: cdktn.stringToTerraform(this._knowledgeBaseArn),
            language: cdktn.stringToTerraform(this._language),
            name: cdktn.stringToTerraform(this._name),
            shortcut_key: cdktn.stringToTerraform(this._shortcutKey),
            tags: cdktn.listMapper(ccQuickResponseTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channels: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._channels),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            content: {
                value: ccQuickResponseQuickResponseContentProviderPropertyToHclTerraform(this._content.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQuickResponse.QuickResponseContentProviderProperty",
            },
            content_type: {
                value: cdktn.stringToHclTerraform(this._contentType),
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
            grouping_configuration: {
                value: ccQuickResponseGroupingConfigurationPropertyToHclTerraform(this._groupingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQuickResponse.GroupingConfigurationProperty",
            },
            is_active: {
                value: cdktn.booleanToHclTerraform(this._isActive),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            shortcut_key: {
                value: cdktn.stringToHclTerraform(this._shortcutKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccQuickResponseTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcQuickResponse.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccQuickResponseQuickResponseContentProviderPropertyToTerraform(struct?: CcQuickResponse.QuickResponseContentProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
    }
}


export function ccQuickResponseQuickResponseContentProviderPropertyToHclTerraform(struct?: CcQuickResponse.QuickResponseContentProviderProperty | cdktn.IResolvable): any {
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


export function ccQuickResponseMarkdownPropertyToTerraform(struct?: CcQuickResponse.MarkdownProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccQuickResponseMarkdownPropertyToHclTerraform(struct?: CcQuickResponse.MarkdownProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccQuickResponsePlainTextPropertyToTerraform(struct?: CcQuickResponse.PlainTextProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccQuickResponsePlainTextPropertyToHclTerraform(struct?: CcQuickResponse.PlainTextProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccQuickResponseContentsPropertyToTerraform(struct?: CcQuickResponse.ContentsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccQuickResponseContentsPropertyToHclTerraform(struct?: CcQuickResponse.ContentsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccQuickResponseGroupingConfigurationPropertyToTerraform(struct?: CcQuickResponse.GroupingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria: cdktn.stringToTerraform(struct!.criteria),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccQuickResponseGroupingConfigurationPropertyToHclTerraform(struct?: CcQuickResponse.GroupingConfigurationProperty | cdktn.IResolvable): any {
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


export function ccQuickResponseTagPropertyToTerraform(struct?: CcQuickResponse.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccQuickResponseTagPropertyToHclTerraform(struct?: CcQuickResponse.TagProperty | cdktn.IResolvable): any {
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


export namespace CcQuickResponse {
export interface QuickResponseContentProviderProperty {
    /**
    * The content of the quick response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#content CcQuickResponse#content}
    */
    readonly content?: string;
}
export class QuickResponseContentProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QuickResponseContentProviderProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: QuickResponseContentProviderProperty | cdktn.IResolvable | undefined) {
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
export interface MarkdownProperty {
}
export class MarkdownPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MarkdownProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MarkdownProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // content - computed: true, optional: false, required: false
    public get content() {
        return this.getStringAttribute('content');
    }
}
export interface PlainTextProperty {
}
export class PlainTextPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PlainTextProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlainTextProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // content - computed: true, optional: false, required: false
    public get content() {
        return this.getStringAttribute('content');
    }
}
export interface ContentsProperty {
}
export class ContentsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // markdown - computed: true, optional: false, required: false
    private _markdown = new MarkdownPropertyOutputReference(this, "markdown");
    public get markdown() {
        return this._markdown;
    }

    // plain_text - computed: true, optional: false, required: false
    private _plainText = new PlainTextPropertyOutputReference(this, "plain_text");
    public get plainText() {
        return this._plainText;
    }
}
export interface GroupingConfigurationProperty {
    /**
    * The criteria used for grouping Amazon Q in Connect users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#criteria CcQuickResponse#criteria}
    */
    readonly criteria?: string;
    /**
    * The list of values that define different groups of Amazon Q in Connect users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#values CcQuickResponse#values}
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
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#key CcQuickResponse#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_quick_response#value CcQuickResponse#value}
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
