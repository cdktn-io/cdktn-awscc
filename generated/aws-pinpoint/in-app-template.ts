// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInAppTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#content CcInAppTemplate#content}
    */
    readonly content?: CcInAppTemplate.InAppMessageContentProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#custom_config CcInAppTemplate#custom_config}
    */
    readonly customConfig?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#layout CcInAppTemplate#layout}
    */
    readonly layout?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#tags CcInAppTemplate#tags}
    */
    readonly tags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#template_description CcInAppTemplate#template_description}
    */
    readonly templateDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#template_name CcInAppTemplate#template_name}
    */
    readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template}
*/
export class CcInAppTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pinpoint_in_app_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInAppTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInAppTemplate to import
    * @param importFromId The id of the existing CcInAppTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInAppTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pinpoint_in_app_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInAppTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcInAppTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pinpoint_in_app_template',
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
        this._content.internalValue = config.content;
        this._customConfig = config.customConfig;
        this._layout = config.layout;
        this._tags = config.tags;
        this._templateDescription = config.templateDescription;
        this._templateName = config.templateName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // content - computed: true, optional: true, required: false
    private _content = new CcInAppTemplate.InAppMessageContentPropertyList(this, "content", false);
    public get content() {
        return this._content;
    }
    public putContent(value: CcInAppTemplate.InAppMessageContentProperty[] | cdktn.IResolvable) {
        this._content.internalValue = value;
    }
    public resetContent() {
        this._content.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content.internalValue;
    }

    // custom_config - computed: true, optional: true, required: false
    private _customConfig?: string; 
    public get customConfig() {
        return this.getStringAttribute('custom_config');
    }
    public set customConfig(value: string) {
        this._customConfig = value;
    }
    public resetCustomConfig() {
        this._customConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConfigInput() {
        return this._customConfig;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // layout - computed: true, optional: true, required: false
    private _layout?: string; 
    public get layout() {
        return this.getStringAttribute('layout');
    }
    public set layout(value: string) {
        this._layout = value;
    }
    public resetLayout() {
        this._layout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get layoutInput() {
        return this._layout;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // template_description - computed: true, optional: true, required: false
    private _templateDescription?: string; 
    public get templateDescription() {
        return this.getStringAttribute('template_description');
    }
    public set templateDescription(value: string) {
        this._templateDescription = value;
    }
    public resetTemplateDescription() {
        this._templateDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateDescriptionInput() {
        return this._templateDescription;
    }

    // template_name - computed: false, optional: false, required: true
    private _templateName?: string; 
    public get templateName() {
        return this.getStringAttribute('template_name');
    }
    public set templateName(value: string) {
        this._templateName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
        return this._templateName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            content: cdktn.listMapper(ccInAppTemplateInAppMessageContentPropertyToTerraform, false)(this._content.internalValue),
            custom_config: cdktn.stringToTerraform(this._customConfig),
            layout: cdktn.stringToTerraform(this._layout),
            tags: cdktn.stringToTerraform(this._tags),
            template_description: cdktn.stringToTerraform(this._templateDescription),
            template_name: cdktn.stringToTerraform(this._templateName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            content: {
                value: cdktn.listMapperHcl(ccInAppTemplateInAppMessageContentPropertyToHclTerraform, false)(this._content.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInAppTemplate.InAppMessageContentPropertyList",
            },
            custom_config: {
                value: cdktn.stringToHclTerraform(this._customConfig),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            layout: {
                value: cdktn.stringToHclTerraform(this._layout),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_description: {
                value: cdktn.stringToHclTerraform(this._templateDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_name: {
                value: cdktn.stringToHclTerraform(this._templateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInAppTemplateBodyConfigPropertyToTerraform(struct?: CcInAppTemplate.BodyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alignment: cdktn.stringToTerraform(struct!.alignment),
        body: cdktn.stringToTerraform(struct!.body),
        text_color: cdktn.stringToTerraform(struct!.textColor),
    }
}


export function ccInAppTemplateBodyConfigPropertyToHclTerraform(struct?: CcInAppTemplate.BodyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alignment: {
            value: cdktn.stringToHclTerraform(struct!.alignment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        body: {
            value: cdktn.stringToHclTerraform(struct!.body),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_color: {
            value: cdktn.stringToHclTerraform(struct!.textColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateHeaderConfigPropertyToTerraform(struct?: CcInAppTemplate.HeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alignment: cdktn.stringToTerraform(struct!.alignment),
        header: cdktn.stringToTerraform(struct!.header),
        text_color: cdktn.stringToTerraform(struct!.textColor),
    }
}


export function ccInAppTemplateHeaderConfigPropertyToHclTerraform(struct?: CcInAppTemplate.HeaderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alignment: {
            value: cdktn.stringToHclTerraform(struct!.alignment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header: {
            value: cdktn.stringToHclTerraform(struct!.header),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_color: {
            value: cdktn.stringToHclTerraform(struct!.textColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateOverrideButtonConfigurationPropertyToTerraform(struct?: CcInAppTemplate.OverrideButtonConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
    }
}


export function ccInAppTemplateOverrideButtonConfigurationPropertyToHclTerraform(struct?: CcInAppTemplate.OverrideButtonConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateDefaultButtonConfigurationPropertyToTerraform(struct?: CcInAppTemplate.DefaultButtonConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background_color: cdktn.stringToTerraform(struct!.backgroundColor),
        border_radius: cdktn.numberToTerraform(struct!.borderRadius),
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
        text: cdktn.stringToTerraform(struct!.text),
        text_color: cdktn.stringToTerraform(struct!.textColor),
    }
}


export function ccInAppTemplateDefaultButtonConfigurationPropertyToHclTerraform(struct?: CcInAppTemplate.DefaultButtonConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background_color: {
            value: cdktn.stringToHclTerraform(struct!.backgroundColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        border_radius: {
            value: cdktn.numberToHclTerraform(struct!.borderRadius),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_color: {
            value: cdktn.stringToHclTerraform(struct!.textColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateContentPrimaryBtnIosPropertyToTerraform(struct?: CcInAppTemplate.ContentPrimaryBtnIosProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
    }
}


export function ccInAppTemplateContentPrimaryBtnIosPropertyToHclTerraform(struct?: CcInAppTemplate.ContentPrimaryBtnIosProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateContentPrimaryBtnWebPropertyToTerraform(struct?: CcInAppTemplate.ContentPrimaryBtnWebProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
    }
}


export function ccInAppTemplateContentPrimaryBtnWebPropertyToHclTerraform(struct?: CcInAppTemplate.ContentPrimaryBtnWebProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateButtonConfigPropertyToTerraform(struct?: CcInAppTemplate.ButtonConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        android: ccInAppTemplateOverrideButtonConfigurationPropertyToTerraform(struct!.android),
        default_config: ccInAppTemplateDefaultButtonConfigurationPropertyToTerraform(struct!.defaultConfig),
        ios: ccInAppTemplateContentPrimaryBtnIosPropertyToTerraform(struct!.ios),
        web: ccInAppTemplateContentPrimaryBtnWebPropertyToTerraform(struct!.web),
    }
}


export function ccInAppTemplateButtonConfigPropertyToHclTerraform(struct?: CcInAppTemplate.ButtonConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        android: {
            value: ccInAppTemplateOverrideButtonConfigurationPropertyToHclTerraform(struct!.android),
            isBlock: true,
            type: "struct",
            storageClassType: "OverrideButtonConfigurationProperty",
        },
        default_config: {
            value: ccInAppTemplateDefaultButtonConfigurationPropertyToHclTerraform(struct!.defaultConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultButtonConfigurationProperty",
        },
        ios: {
            value: ccInAppTemplateContentPrimaryBtnIosPropertyToHclTerraform(struct!.ios),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentPrimaryBtnIosProperty",
        },
        web: {
            value: ccInAppTemplateContentPrimaryBtnWebPropertyToHclTerraform(struct!.web),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentPrimaryBtnWebProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateAndroidPropertyToTerraform(struct?: CcInAppTemplate.AndroidProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
    }
}


export function ccInAppTemplateAndroidPropertyToHclTerraform(struct?: CcInAppTemplate.AndroidProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateDefaultConfigPropertyToTerraform(struct?: CcInAppTemplate.DefaultConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background_color: cdktn.stringToTerraform(struct!.backgroundColor),
        border_radius: cdktn.numberToTerraform(struct!.borderRadius),
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
        text: cdktn.stringToTerraform(struct!.text),
        text_color: cdktn.stringToTerraform(struct!.textColor),
    }
}


export function ccInAppTemplateDefaultConfigPropertyToHclTerraform(struct?: CcInAppTemplate.DefaultConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background_color: {
            value: cdktn.stringToHclTerraform(struct!.backgroundColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        border_radius: {
            value: cdktn.numberToHclTerraform(struct!.borderRadius),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text_color: {
            value: cdktn.stringToHclTerraform(struct!.textColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateContentSecondaryBtnIosPropertyToTerraform(struct?: CcInAppTemplate.ContentSecondaryBtnIosProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
    }
}


export function ccInAppTemplateContentSecondaryBtnIosPropertyToHclTerraform(struct?: CcInAppTemplate.ContentSecondaryBtnIosProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateContentSecondaryBtnWebPropertyToTerraform(struct?: CcInAppTemplate.ContentSecondaryBtnWebProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        button_action: cdktn.stringToTerraform(struct!.buttonAction),
        link: cdktn.stringToTerraform(struct!.link),
    }
}


export function ccInAppTemplateContentSecondaryBtnWebPropertyToHclTerraform(struct?: CcInAppTemplate.ContentSecondaryBtnWebProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        button_action: {
            value: cdktn.stringToHclTerraform(struct!.buttonAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link: {
            value: cdktn.stringToHclTerraform(struct!.link),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateSecondaryBtnPropertyToTerraform(struct?: CcInAppTemplate.SecondaryBtnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        android: ccInAppTemplateAndroidPropertyToTerraform(struct!.android),
        default_config: ccInAppTemplateDefaultConfigPropertyToTerraform(struct!.defaultConfig),
        ios: ccInAppTemplateContentSecondaryBtnIosPropertyToTerraform(struct!.ios),
        web: ccInAppTemplateContentSecondaryBtnWebPropertyToTerraform(struct!.web),
    }
}


export function ccInAppTemplateSecondaryBtnPropertyToHclTerraform(struct?: CcInAppTemplate.SecondaryBtnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        android: {
            value: ccInAppTemplateAndroidPropertyToHclTerraform(struct!.android),
            isBlock: true,
            type: "struct",
            storageClassType: "AndroidProperty",
        },
        default_config: {
            value: ccInAppTemplateDefaultConfigPropertyToHclTerraform(struct!.defaultConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultConfigProperty",
        },
        ios: {
            value: ccInAppTemplateContentSecondaryBtnIosPropertyToHclTerraform(struct!.ios),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentSecondaryBtnIosProperty",
        },
        web: {
            value: ccInAppTemplateContentSecondaryBtnWebPropertyToHclTerraform(struct!.web),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentSecondaryBtnWebProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInAppTemplateInAppMessageContentPropertyToTerraform(struct?: CcInAppTemplate.InAppMessageContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        background_color: cdktn.stringToTerraform(struct!.backgroundColor),
        body_config: ccInAppTemplateBodyConfigPropertyToTerraform(struct!.bodyConfig),
        header_config: ccInAppTemplateHeaderConfigPropertyToTerraform(struct!.headerConfig),
        image_url: cdktn.stringToTerraform(struct!.imageUrl),
        primary_btn: ccInAppTemplateButtonConfigPropertyToTerraform(struct!.primaryBtn),
        secondary_btn: ccInAppTemplateSecondaryBtnPropertyToTerraform(struct!.secondaryBtn),
    }
}


export function ccInAppTemplateInAppMessageContentPropertyToHclTerraform(struct?: CcInAppTemplate.InAppMessageContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        background_color: {
            value: cdktn.stringToHclTerraform(struct!.backgroundColor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        body_config: {
            value: ccInAppTemplateBodyConfigPropertyToHclTerraform(struct!.bodyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "BodyConfigProperty",
        },
        header_config: {
            value: ccInAppTemplateHeaderConfigPropertyToHclTerraform(struct!.headerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HeaderConfigProperty",
        },
        image_url: {
            value: cdktn.stringToHclTerraform(struct!.imageUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_btn: {
            value: ccInAppTemplateButtonConfigPropertyToHclTerraform(struct!.primaryBtn),
            isBlock: true,
            type: "struct",
            storageClassType: "ButtonConfigProperty",
        },
        secondary_btn: {
            value: ccInAppTemplateSecondaryBtnPropertyToHclTerraform(struct!.secondaryBtn),
            isBlock: true,
            type: "struct",
            storageClassType: "SecondaryBtnProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInAppTemplate {
export interface BodyConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#alignment CcInAppTemplate#alignment}
    */
    readonly alignment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#body CcInAppTemplate#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color CcInAppTemplate#text_color}
    */
    readonly textColor?: string;
}
export class BodyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BodyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alignment !== undefined) {
            hasAnyValues = true;
            internalValueResult.alignment = this._alignment;
        }
        if (this._body !== undefined) {
            hasAnyValues = true;
            internalValueResult.body = this._body;
        }
        if (this._textColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.textColor = this._textColor;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BodyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alignment = undefined;
            this._body = undefined;
            this._textColor = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alignment = value.alignment;
            this._body = value.body;
            this._textColor = value.textColor;
        }
    }

    // alignment - computed: true, optional: true, required: false
    private _alignment?: string; 
    public get alignment() {
        return this.getStringAttribute('alignment');
    }
    public set alignment(value: string) {
        this._alignment = value;
    }
    public resetAlignment() {
        this._alignment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alignmentInput() {
        return this._alignment;
    }

    // body - computed: true, optional: true, required: false
    private _body?: string; 
    public get body() {
        return this.getStringAttribute('body');
    }
    public set body(value: string) {
        this._body = value;
    }
    public resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
        return this._body;
    }

    // text_color - computed: true, optional: true, required: false
    private _textColor?: string; 
    public get textColor() {
        return this.getStringAttribute('text_color');
    }
    public set textColor(value: string) {
        this._textColor = value;
    }
    public resetTextColor() {
        this._textColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textColorInput() {
        return this._textColor;
    }
}
export interface HeaderConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#alignment CcInAppTemplate#alignment}
    */
    readonly alignment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#header CcInAppTemplate#header}
    */
    readonly header?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color CcInAppTemplate#text_color}
    */
    readonly textColor?: string;
}
export class HeaderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeaderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alignment !== undefined) {
            hasAnyValues = true;
            internalValueResult.alignment = this._alignment;
        }
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._textColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.textColor = this._textColor;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alignment = undefined;
            this._header = undefined;
            this._textColor = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alignment = value.alignment;
            this._header = value.header;
            this._textColor = value.textColor;
        }
    }

    // alignment - computed: true, optional: true, required: false
    private _alignment?: string; 
    public get alignment() {
        return this.getStringAttribute('alignment');
    }
    public set alignment(value: string) {
        this._alignment = value;
    }
    public resetAlignment() {
        this._alignment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alignmentInput() {
        return this._alignment;
    }

    // header - computed: true, optional: true, required: false
    private _header?: string; 
    public get header() {
        return this.getStringAttribute('header');
    }
    public set header(value: string) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
    }

    // text_color - computed: true, optional: true, required: false
    private _textColor?: string; 
    public get textColor() {
        return this.getStringAttribute('text_color');
    }
    public set textColor(value: string) {
        this._textColor = value;
    }
    public resetTextColor() {
        this._textColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textColorInput() {
        return this._textColor;
    }
}
export interface OverrideButtonConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
}
export class OverrideButtonConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverrideButtonConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverrideButtonConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
        }
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
    }
}
export interface DefaultButtonConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color CcInAppTemplate#background_color}
    */
    readonly backgroundColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#border_radius CcInAppTemplate#border_radius}
    */
    readonly borderRadius?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text CcInAppTemplate#text}
    */
    readonly text?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color CcInAppTemplate#text_color}
    */
    readonly textColor?: string;
}
export class DefaultButtonConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultButtonConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._backgroundColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.backgroundColor = this._backgroundColor;
        }
        if (this._borderRadius !== undefined) {
            hasAnyValues = true;
            internalValueResult.borderRadius = this._borderRadius;
        }
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._textColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.textColor = this._textColor;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultButtonConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backgroundColor = undefined;
            this._borderRadius = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
            this._text = undefined;
            this._textColor = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backgroundColor = value.backgroundColor;
            this._borderRadius = value.borderRadius;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
            this._text = value.text;
            this._textColor = value.textColor;
        }
    }

    // background_color - computed: true, optional: true, required: false
    private _backgroundColor?: string; 
    public get backgroundColor() {
        return this.getStringAttribute('background_color');
    }
    public set backgroundColor(value: string) {
        this._backgroundColor = value;
    }
    public resetBackgroundColor() {
        this._backgroundColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundColorInput() {
        return this._backgroundColor;
    }

    // border_radius - computed: true, optional: true, required: false
    private _borderRadius?: number; 
    public get borderRadius() {
        return this.getNumberAttribute('border_radius');
    }
    public set borderRadius(value: number) {
        this._borderRadius = value;
    }
    public resetBorderRadius() {
        this._borderRadius = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get borderRadiusInput() {
        return this._borderRadius;
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
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

    // text_color - computed: true, optional: true, required: false
    private _textColor?: string; 
    public get textColor() {
        return this.getStringAttribute('text_color');
    }
    public set textColor(value: string) {
        this._textColor = value;
    }
    public resetTextColor() {
        this._textColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textColorInput() {
        return this._textColor;
    }
}
export interface ContentPrimaryBtnIosProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
}
export class ContentPrimaryBtnIosPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentPrimaryBtnIosProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentPrimaryBtnIosProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
        }
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
    }
}
export interface ContentPrimaryBtnWebProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
}
export class ContentPrimaryBtnWebPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentPrimaryBtnWebProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentPrimaryBtnWebProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
        }
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
    }
}
export interface ButtonConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#android CcInAppTemplate#android}
    */
    readonly android?: OverrideButtonConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#default_config CcInAppTemplate#default_config}
    */
    readonly defaultConfig?: DefaultButtonConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#ios CcInAppTemplate#ios}
    */
    readonly ios?: ContentPrimaryBtnIosProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#web CcInAppTemplate#web}
    */
    readonly web?: ContentPrimaryBtnWebProperty;
}
export class ButtonConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ButtonConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._android?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.android = this._android?.internalValue;
        }
        if (this._defaultConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultConfig = this._defaultConfig?.internalValue;
        }
        if (this._ios?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ios = this._ios?.internalValue;
        }
        if (this._web?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.web = this._web?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ButtonConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._android.internalValue = undefined;
            this._defaultConfig.internalValue = undefined;
            this._ios.internalValue = undefined;
            this._web.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._android.internalValue = value.android;
            this._defaultConfig.internalValue = value.defaultConfig;
            this._ios.internalValue = value.ios;
            this._web.internalValue = value.web;
        }
    }

    // android - computed: true, optional: true, required: false
    private _android = new OverrideButtonConfigurationPropertyOutputReference(this, "android");
    public get android() {
        return this._android;
    }
    public putAndroid(value: OverrideButtonConfigurationProperty) {
        this._android.internalValue = value;
    }
    public resetAndroid() {
        this._android.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get androidInput() {
        return this._android.internalValue;
    }

    // default_config - computed: true, optional: true, required: false
    private _defaultConfig = new DefaultButtonConfigurationPropertyOutputReference(this, "default_config");
    public get defaultConfig() {
        return this._defaultConfig;
    }
    public putDefaultConfig(value: DefaultButtonConfigurationProperty) {
        this._defaultConfig.internalValue = value;
    }
    public resetDefaultConfig() {
        this._defaultConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultConfigInput() {
        return this._defaultConfig.internalValue;
    }

    // ios - computed: true, optional: true, required: false
    private _ios = new ContentPrimaryBtnIosPropertyOutputReference(this, "ios");
    public get ios() {
        return this._ios;
    }
    public putIos(value: ContentPrimaryBtnIosProperty) {
        this._ios.internalValue = value;
    }
    public resetIos() {
        this._ios.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iosInput() {
        return this._ios.internalValue;
    }

    // web - computed: true, optional: true, required: false
    private _web = new ContentPrimaryBtnWebPropertyOutputReference(this, "web");
    public get web() {
        return this._web;
    }
    public putWeb(value: ContentPrimaryBtnWebProperty) {
        this._web.internalValue = value;
    }
    public resetWeb() {
        this._web.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webInput() {
        return this._web.internalValue;
    }
}
export interface AndroidProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
}
export class AndroidPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AndroidProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AndroidProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
        }
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
    }
}
export interface DefaultConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color CcInAppTemplate#background_color}
    */
    readonly backgroundColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#border_radius CcInAppTemplate#border_radius}
    */
    readonly borderRadius?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text CcInAppTemplate#text}
    */
    readonly text?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#text_color CcInAppTemplate#text_color}
    */
    readonly textColor?: string;
}
export class DefaultConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._backgroundColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.backgroundColor = this._backgroundColor;
        }
        if (this._borderRadius !== undefined) {
            hasAnyValues = true;
            internalValueResult.borderRadius = this._borderRadius;
        }
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._textColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.textColor = this._textColor;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backgroundColor = undefined;
            this._borderRadius = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
            this._text = undefined;
            this._textColor = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backgroundColor = value.backgroundColor;
            this._borderRadius = value.borderRadius;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
            this._text = value.text;
            this._textColor = value.textColor;
        }
    }

    // background_color - computed: true, optional: true, required: false
    private _backgroundColor?: string; 
    public get backgroundColor() {
        return this.getStringAttribute('background_color');
    }
    public set backgroundColor(value: string) {
        this._backgroundColor = value;
    }
    public resetBackgroundColor() {
        this._backgroundColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundColorInput() {
        return this._backgroundColor;
    }

    // border_radius - computed: true, optional: true, required: false
    private _borderRadius?: number; 
    public get borderRadius() {
        return this.getNumberAttribute('border_radius');
    }
    public set borderRadius(value: number) {
        this._borderRadius = value;
    }
    public resetBorderRadius() {
        this._borderRadius = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get borderRadiusInput() {
        return this._borderRadius;
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
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

    // text_color - computed: true, optional: true, required: false
    private _textColor?: string; 
    public get textColor() {
        return this.getStringAttribute('text_color');
    }
    public set textColor(value: string) {
        this._textColor = value;
    }
    public resetTextColor() {
        this._textColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textColorInput() {
        return this._textColor;
    }
}
export interface ContentSecondaryBtnIosProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
}
export class ContentSecondaryBtnIosPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentSecondaryBtnIosProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentSecondaryBtnIosProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
        }
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
    }
}
export interface ContentSecondaryBtnWebProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#button_action CcInAppTemplate#button_action}
    */
    readonly buttonAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#link CcInAppTemplate#link}
    */
    readonly link?: string;
}
export class ContentSecondaryBtnWebPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentSecondaryBtnWebProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buttonAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.buttonAction = this._buttonAction;
        }
        if (this._link !== undefined) {
            hasAnyValues = true;
            internalValueResult.link = this._link;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentSecondaryBtnWebProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buttonAction = undefined;
            this._link = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buttonAction = value.buttonAction;
            this._link = value.link;
        }
    }

    // button_action - computed: true, optional: true, required: false
    private _buttonAction?: string; 
    public get buttonAction() {
        return this.getStringAttribute('button_action');
    }
    public set buttonAction(value: string) {
        this._buttonAction = value;
    }
    public resetButtonAction() {
        this._buttonAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buttonActionInput() {
        return this._buttonAction;
    }

    // link - computed: true, optional: true, required: false
    private _link?: string; 
    public get link() {
        return this.getStringAttribute('link');
    }
    public set link(value: string) {
        this._link = value;
    }
    public resetLink() {
        this._link = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkInput() {
        return this._link;
    }
}
export interface SecondaryBtnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#android CcInAppTemplate#android}
    */
    readonly android?: AndroidProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#default_config CcInAppTemplate#default_config}
    */
    readonly defaultConfig?: DefaultConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#ios CcInAppTemplate#ios}
    */
    readonly ios?: ContentSecondaryBtnIosProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#web CcInAppTemplate#web}
    */
    readonly web?: ContentSecondaryBtnWebProperty;
}
export class SecondaryBtnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecondaryBtnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._android?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.android = this._android?.internalValue;
        }
        if (this._defaultConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultConfig = this._defaultConfig?.internalValue;
        }
        if (this._ios?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ios = this._ios?.internalValue;
        }
        if (this._web?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.web = this._web?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecondaryBtnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._android.internalValue = undefined;
            this._defaultConfig.internalValue = undefined;
            this._ios.internalValue = undefined;
            this._web.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._android.internalValue = value.android;
            this._defaultConfig.internalValue = value.defaultConfig;
            this._ios.internalValue = value.ios;
            this._web.internalValue = value.web;
        }
    }

    // android - computed: true, optional: true, required: false
    private _android = new AndroidPropertyOutputReference(this, "android");
    public get android() {
        return this._android;
    }
    public putAndroid(value: AndroidProperty) {
        this._android.internalValue = value;
    }
    public resetAndroid() {
        this._android.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get androidInput() {
        return this._android.internalValue;
    }

    // default_config - computed: true, optional: true, required: false
    private _defaultConfig = new DefaultConfigPropertyOutputReference(this, "default_config");
    public get defaultConfig() {
        return this._defaultConfig;
    }
    public putDefaultConfig(value: DefaultConfigProperty) {
        this._defaultConfig.internalValue = value;
    }
    public resetDefaultConfig() {
        this._defaultConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultConfigInput() {
        return this._defaultConfig.internalValue;
    }

    // ios - computed: true, optional: true, required: false
    private _ios = new ContentSecondaryBtnIosPropertyOutputReference(this, "ios");
    public get ios() {
        return this._ios;
    }
    public putIos(value: ContentSecondaryBtnIosProperty) {
        this._ios.internalValue = value;
    }
    public resetIos() {
        this._ios.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iosInput() {
        return this._ios.internalValue;
    }

    // web - computed: true, optional: true, required: false
    private _web = new ContentSecondaryBtnWebPropertyOutputReference(this, "web");
    public get web() {
        return this._web;
    }
    public putWeb(value: ContentSecondaryBtnWebProperty) {
        this._web.internalValue = value;
    }
    public resetWeb() {
        this._web.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webInput() {
        return this._web.internalValue;
    }
}
export interface InAppMessageContentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#background_color CcInAppTemplate#background_color}
    */
    readonly backgroundColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#body_config CcInAppTemplate#body_config}
    */
    readonly bodyConfig?: BodyConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#header_config CcInAppTemplate#header_config}
    */
    readonly headerConfig?: HeaderConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#image_url CcInAppTemplate#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#primary_btn CcInAppTemplate#primary_btn}
    */
    readonly primaryBtn?: ButtonConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pinpoint_in_app_template#secondary_btn CcInAppTemplate#secondary_btn}
    */
    readonly secondaryBtn?: SecondaryBtnProperty;
}
export class InAppMessageContentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InAppMessageContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._backgroundColor !== undefined) {
            hasAnyValues = true;
            internalValueResult.backgroundColor = this._backgroundColor;
        }
        if (this._bodyConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bodyConfig = this._bodyConfig?.internalValue;
        }
        if (this._headerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerConfig = this._headerConfig?.internalValue;
        }
        if (this._imageUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUrl = this._imageUrl;
        }
        if (this._primaryBtn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryBtn = this._primaryBtn?.internalValue;
        }
        if (this._secondaryBtn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryBtn = this._secondaryBtn?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InAppMessageContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backgroundColor = undefined;
            this._bodyConfig.internalValue = undefined;
            this._headerConfig.internalValue = undefined;
            this._imageUrl = undefined;
            this._primaryBtn.internalValue = undefined;
            this._secondaryBtn.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backgroundColor = value.backgroundColor;
            this._bodyConfig.internalValue = value.bodyConfig;
            this._headerConfig.internalValue = value.headerConfig;
            this._imageUrl = value.imageUrl;
            this._primaryBtn.internalValue = value.primaryBtn;
            this._secondaryBtn.internalValue = value.secondaryBtn;
        }
    }

    // background_color - computed: true, optional: true, required: false
    private _backgroundColor?: string; 
    public get backgroundColor() {
        return this.getStringAttribute('background_color');
    }
    public set backgroundColor(value: string) {
        this._backgroundColor = value;
    }
    public resetBackgroundColor() {
        this._backgroundColor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backgroundColorInput() {
        return this._backgroundColor;
    }

    // body_config - computed: true, optional: true, required: false
    private _bodyConfig = new BodyConfigPropertyOutputReference(this, "body_config");
    public get bodyConfig() {
        return this._bodyConfig;
    }
    public putBodyConfig(value: BodyConfigProperty) {
        this._bodyConfig.internalValue = value;
    }
    public resetBodyConfig() {
        this._bodyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyConfigInput() {
        return this._bodyConfig.internalValue;
    }

    // header_config - computed: true, optional: true, required: false
    private _headerConfig = new HeaderConfigPropertyOutputReference(this, "header_config");
    public get headerConfig() {
        return this._headerConfig;
    }
    public putHeaderConfig(value: HeaderConfigProperty) {
        this._headerConfig.internalValue = value;
    }
    public resetHeaderConfig() {
        this._headerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerConfigInput() {
        return this._headerConfig.internalValue;
    }

    // image_url - computed: true, optional: true, required: false
    private _imageUrl?: string; 
    public get imageUrl() {
        return this.getStringAttribute('image_url');
    }
    public set imageUrl(value: string) {
        this._imageUrl = value;
    }
    public resetImageUrl() {
        this._imageUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUrlInput() {
        return this._imageUrl;
    }

    // primary_btn - computed: true, optional: true, required: false
    private _primaryBtn = new ButtonConfigPropertyOutputReference(this, "primary_btn");
    public get primaryBtn() {
        return this._primaryBtn;
    }
    public putPrimaryBtn(value: ButtonConfigProperty) {
        this._primaryBtn.internalValue = value;
    }
    public resetPrimaryBtn() {
        this._primaryBtn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryBtnInput() {
        return this._primaryBtn.internalValue;
    }

    // secondary_btn - computed: true, optional: true, required: false
    private _secondaryBtn = new SecondaryBtnPropertyOutputReference(this, "secondary_btn");
    public get secondaryBtn() {
        return this._secondaryBtn;
    }
    public putSecondaryBtn(value: SecondaryBtnProperty) {
        this._secondaryBtn.internalValue = value;
    }
    public resetSecondaryBtn() {
        this._secondaryBtn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryBtnInput() {
        return this._secondaryBtn.internalValue;
    }
}

export class InAppMessageContentPropertyList extends cdktn.ComplexList {
    public internalValue? : InAppMessageContentProperty[] | cdktn.IResolvable

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
    public get(index: number): InAppMessageContentPropertyOutputReference {
        return new InAppMessageContentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
