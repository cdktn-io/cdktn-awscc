// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWebExperienceProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#application_id CcWebExperience#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#browser_extension_configuration CcWebExperience#browser_extension_configuration}
    */
    readonly browserExtensionConfiguration?: CcWebExperience.BrowserExtensionConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#customization_configuration CcWebExperience#customization_configuration}
    */
    readonly customizationConfiguration?: CcWebExperience.CustomizationConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#identity_provider_configuration CcWebExperience#identity_provider_configuration}
    */
    readonly identityProviderConfiguration?: CcWebExperience.IdentityProviderConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#origins CcWebExperience#origins}
    */
    readonly origins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#role_arn CcWebExperience#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#sample_prompts_control_mode CcWebExperience#sample_prompts_control_mode}
    */
    readonly samplePromptsControlMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#subtitle CcWebExperience#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#tags CcWebExperience#tags}
    */
    readonly tags?: CcWebExperience.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#title CcWebExperience#title}
    */
    readonly title?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#welcome_message CcWebExperience#welcome_message}
    */
    readonly welcomeMessage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience awscc_qbusiness_web_experience}
*/
export class CcWebExperience extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_qbusiness_web_experience";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWebExperience resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWebExperience to import
    * @param importFromId The id of the existing CcWebExperience that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWebExperience to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_web_experience", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience awscc_qbusiness_web_experience} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWebExperienceProps
    */
    public constructor(scope: Construct, id: string, config: CcWebExperienceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_qbusiness_web_experience',
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
        this._applicationId = config.applicationId;
        this._browserExtensionConfiguration.internalValue = config.browserExtensionConfiguration;
        this._customizationConfiguration.internalValue = config.customizationConfiguration;
        this._identityProviderConfiguration.internalValue = config.identityProviderConfiguration;
        this._origins = config.origins;
        this._roleArn = config.roleArn;
        this._samplePromptsControlMode = config.samplePromptsControlMode;
        this._subtitle = config.subtitle;
        this._tags.internalValue = config.tags;
        this._title = config.title;
        this._welcomeMessage = config.welcomeMessage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // browser_extension_configuration - computed: true, optional: true, required: false
    private _browserExtensionConfiguration = new CcWebExperience.BrowserExtensionConfigurationPropertyOutputReference(this, "browser_extension_configuration");
    public get browserExtensionConfiguration() {
        return this._browserExtensionConfiguration;
    }
    public putBrowserExtensionConfiguration(value: CcWebExperience.BrowserExtensionConfigurationProperty) {
        this._browserExtensionConfiguration.internalValue = value;
    }
    public resetBrowserExtensionConfiguration() {
        this._browserExtensionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get browserExtensionConfigurationInput() {
        return this._browserExtensionConfiguration.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // customization_configuration - computed: true, optional: true, required: false
    private _customizationConfiguration = new CcWebExperience.CustomizationConfigurationPropertyOutputReference(this, "customization_configuration");
    public get customizationConfiguration() {
        return this._customizationConfiguration;
    }
    public putCustomizationConfiguration(value: CcWebExperience.CustomizationConfigurationProperty) {
        this._customizationConfiguration.internalValue = value;
    }
    public resetCustomizationConfiguration() {
        this._customizationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizationConfigurationInput() {
        return this._customizationConfiguration.internalValue;
    }

    // default_endpoint - computed: true, optional: false, required: false
    public get defaultEndpoint() {
        return this.getStringAttribute('default_endpoint');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider_configuration - computed: true, optional: true, required: false
    private _identityProviderConfiguration = new CcWebExperience.IdentityProviderConfigurationPropertyOutputReference(this, "identity_provider_configuration");
    public get identityProviderConfiguration() {
        return this._identityProviderConfiguration;
    }
    public putIdentityProviderConfiguration(value: CcWebExperience.IdentityProviderConfigurationProperty) {
        this._identityProviderConfiguration.internalValue = value;
    }
    public resetIdentityProviderConfiguration() {
        this._identityProviderConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderConfigurationInput() {
        return this._identityProviderConfiguration.internalValue;
    }

    // origins - computed: true, optional: true, required: false
    private _origins?: string[]; 
    public get origins() {
        return this.getListAttribute('origins');
    }
    public set origins(value: string[]) {
        this._origins = value;
    }
    public resetOrigins() {
        this._origins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originsInput() {
        return this._origins;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // sample_prompts_control_mode - computed: true, optional: true, required: false
    private _samplePromptsControlMode?: string; 
    public get samplePromptsControlMode() {
        return this.getStringAttribute('sample_prompts_control_mode');
    }
    public set samplePromptsControlMode(value: string) {
        this._samplePromptsControlMode = value;
    }
    public resetSamplePromptsControlMode() {
        this._samplePromptsControlMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplePromptsControlModeInput() {
        return this._samplePromptsControlMode;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // subtitle - computed: true, optional: true, required: false
    private _subtitle?: string; 
    public get subtitle() {
        return this.getStringAttribute('subtitle');
    }
    public set subtitle(value: string) {
        this._subtitle = value;
    }
    public resetSubtitle() {
        this._subtitle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subtitleInput() {
        return this._subtitle;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWebExperience.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWebExperience.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // web_experience_arn - computed: true, optional: false, required: false
    public get webExperienceArn() {
        return this.getStringAttribute('web_experience_arn');
    }

    // web_experience_id - computed: true, optional: false, required: false
    public get webExperienceId() {
        return this.getStringAttribute('web_experience_id');
    }

    // welcome_message - computed: true, optional: true, required: false
    private _welcomeMessage?: string; 
    public get welcomeMessage() {
        return this.getStringAttribute('welcome_message');
    }
    public set welcomeMessage(value: string) {
        this._welcomeMessage = value;
    }
    public resetWelcomeMessage() {
        this._welcomeMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get welcomeMessageInput() {
        return this._welcomeMessage;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_id: cdktn.stringToTerraform(this._applicationId),
            browser_extension_configuration: ccWebExperienceBrowserExtensionConfigurationPropertyToTerraform(this._browserExtensionConfiguration.internalValue),
            customization_configuration: ccWebExperienceCustomizationConfigurationPropertyToTerraform(this._customizationConfiguration.internalValue),
            identity_provider_configuration: ccWebExperienceIdentityProviderConfigurationPropertyToTerraform(this._identityProviderConfiguration.internalValue),
            origins: cdktn.listMapper(cdktn.stringToTerraform, false)(this._origins),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            sample_prompts_control_mode: cdktn.stringToTerraform(this._samplePromptsControlMode),
            subtitle: cdktn.stringToTerraform(this._subtitle),
            tags: cdktn.listMapper(ccWebExperienceTagPropertyToTerraform, false)(this._tags.internalValue),
            title: cdktn.stringToTerraform(this._title),
            welcome_message: cdktn.stringToTerraform(this._welcomeMessage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            browser_extension_configuration: {
                value: ccWebExperienceBrowserExtensionConfigurationPropertyToHclTerraform(this._browserExtensionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebExperience.BrowserExtensionConfigurationProperty",
            },
            customization_configuration: {
                value: ccWebExperienceCustomizationConfigurationPropertyToHclTerraform(this._customizationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebExperience.CustomizationConfigurationProperty",
            },
            identity_provider_configuration: {
                value: ccWebExperienceIdentityProviderConfigurationPropertyToHclTerraform(this._identityProviderConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebExperience.IdentityProviderConfigurationProperty",
            },
            origins: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._origins),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sample_prompts_control_mode: {
                value: cdktn.stringToHclTerraform(this._samplePromptsControlMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subtitle: {
                value: cdktn.stringToHclTerraform(this._subtitle),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWebExperienceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWebExperience.TagPropertyList",
            },
            title: {
                value: cdktn.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            welcome_message: {
                value: cdktn.stringToHclTerraform(this._welcomeMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWebExperienceBrowserExtensionConfigurationPropertyToTerraform(struct?: CcWebExperience.BrowserExtensionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled_browser_extensions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledBrowserExtensions),
    }
}


export function ccWebExperienceBrowserExtensionConfigurationPropertyToHclTerraform(struct?: CcWebExperience.BrowserExtensionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled_browser_extensions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledBrowserExtensions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebExperienceCustomizationConfigurationPropertyToTerraform(struct?: CcWebExperience.CustomizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_css_url: cdktn.stringToTerraform(struct!.customCssUrl),
        favicon_url: cdktn.stringToTerraform(struct!.faviconUrl),
        font_url: cdktn.stringToTerraform(struct!.fontUrl),
        logo_url: cdktn.stringToTerraform(struct!.logoUrl),
    }
}


export function ccWebExperienceCustomizationConfigurationPropertyToHclTerraform(struct?: CcWebExperience.CustomizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_css_url: {
            value: cdktn.stringToHclTerraform(struct!.customCssUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        favicon_url: {
            value: cdktn.stringToHclTerraform(struct!.faviconUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        font_url: {
            value: cdktn.stringToHclTerraform(struct!.fontUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logo_url: {
            value: cdktn.stringToHclTerraform(struct!.logoUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebExperienceOpenIDConnectProviderConfigurationPropertyToTerraform(struct?: CcWebExperience.OpenIDConnectProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secrets_arn: cdktn.stringToTerraform(struct!.secretsArn),
        secrets_role: cdktn.stringToTerraform(struct!.secretsRole),
    }
}


export function ccWebExperienceOpenIDConnectProviderConfigurationPropertyToHclTerraform(struct?: CcWebExperience.OpenIDConnectProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secrets_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_role: {
            value: cdktn.stringToHclTerraform(struct!.secretsRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebExperienceSamlProviderConfigurationPropertyToTerraform(struct?: CcWebExperience.SamlProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_url: cdktn.stringToTerraform(struct!.authenticationUrl),
    }
}


export function ccWebExperienceSamlProviderConfigurationPropertyToHclTerraform(struct?: CcWebExperience.SamlProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_url: {
            value: cdktn.stringToHclTerraform(struct!.authenticationUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebExperienceIdentityProviderConfigurationPropertyToTerraform(struct?: CcWebExperience.IdentityProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        open_id_connect_configuration: ccWebExperienceOpenIDConnectProviderConfigurationPropertyToTerraform(struct!.openIdConnectConfiguration),
        saml_configuration: ccWebExperienceSamlProviderConfigurationPropertyToTerraform(struct!.samlConfiguration),
    }
}


export function ccWebExperienceIdentityProviderConfigurationPropertyToHclTerraform(struct?: CcWebExperience.IdentityProviderConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        open_id_connect_configuration: {
            value: ccWebExperienceOpenIDConnectProviderConfigurationPropertyToHclTerraform(struct!.openIdConnectConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenIDConnectProviderConfigurationProperty",
        },
        saml_configuration: {
            value: ccWebExperienceSamlProviderConfigurationPropertyToHclTerraform(struct!.samlConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SamlProviderConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebExperienceTagPropertyToTerraform(struct?: CcWebExperience.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWebExperienceTagPropertyToHclTerraform(struct?: CcWebExperience.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWebExperience {
export interface BrowserExtensionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#enabled_browser_extensions CcWebExperience#enabled_browser_extensions}
    */
    readonly enabledBrowserExtensions?: string[];
}
export class BrowserExtensionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BrowserExtensionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabledBrowserExtensions !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabledBrowserExtensions = this._enabledBrowserExtensions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BrowserExtensionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabledBrowserExtensions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabledBrowserExtensions = value.enabledBrowserExtensions;
        }
    }

    // enabled_browser_extensions - computed: true, optional: true, required: false
    private _enabledBrowserExtensions?: string[]; 
    public get enabledBrowserExtensions() {
        return cdktn.Fn.tolist(this.getListAttribute('enabled_browser_extensions'));
    }
    public set enabledBrowserExtensions(value: string[]) {
        this._enabledBrowserExtensions = value;
    }
    public resetEnabledBrowserExtensions() {
        this._enabledBrowserExtensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledBrowserExtensionsInput() {
        return this._enabledBrowserExtensions;
    }
}
export interface CustomizationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#custom_css_url CcWebExperience#custom_css_url}
    */
    readonly customCssUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#favicon_url CcWebExperience#favicon_url}
    */
    readonly faviconUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#font_url CcWebExperience#font_url}
    */
    readonly fontUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#logo_url CcWebExperience#logo_url}
    */
    readonly logoUrl?: string;
}
export class CustomizationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomizationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customCssUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.customCssUrl = this._customCssUrl;
        }
        if (this._faviconUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.faviconUrl = this._faviconUrl;
        }
        if (this._fontUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.fontUrl = this._fontUrl;
        }
        if (this._logoUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.logoUrl = this._logoUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomizationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customCssUrl = undefined;
            this._faviconUrl = undefined;
            this._fontUrl = undefined;
            this._logoUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customCssUrl = value.customCssUrl;
            this._faviconUrl = value.faviconUrl;
            this._fontUrl = value.fontUrl;
            this._logoUrl = value.logoUrl;
        }
    }

    // custom_css_url - computed: true, optional: true, required: false
    private _customCssUrl?: string; 
    public get customCssUrl() {
        return this.getStringAttribute('custom_css_url');
    }
    public set customCssUrl(value: string) {
        this._customCssUrl = value;
    }
    public resetCustomCssUrl() {
        this._customCssUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customCssUrlInput() {
        return this._customCssUrl;
    }

    // favicon_url - computed: true, optional: true, required: false
    private _faviconUrl?: string; 
    public get faviconUrl() {
        return this.getStringAttribute('favicon_url');
    }
    public set faviconUrl(value: string) {
        this._faviconUrl = value;
    }
    public resetFaviconUrl() {
        this._faviconUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get faviconUrlInput() {
        return this._faviconUrl;
    }

    // font_url - computed: true, optional: true, required: false
    private _fontUrl?: string; 
    public get fontUrl() {
        return this.getStringAttribute('font_url');
    }
    public set fontUrl(value: string) {
        this._fontUrl = value;
    }
    public resetFontUrl() {
        this._fontUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fontUrlInput() {
        return this._fontUrl;
    }

    // logo_url - computed: true, optional: true, required: false
    private _logoUrl?: string; 
    public get logoUrl() {
        return this.getStringAttribute('logo_url');
    }
    public set logoUrl(value: string) {
        this._logoUrl = value;
    }
    public resetLogoUrl() {
        this._logoUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logoUrlInput() {
        return this._logoUrl;
    }
}
export interface OpenIDConnectProviderConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#secrets_arn CcWebExperience#secrets_arn}
    */
    readonly secretsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#secrets_role CcWebExperience#secrets_role}
    */
    readonly secretsRole?: string;
}
export class OpenIDConnectProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenIDConnectProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretsArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsArn = this._secretsArn;
        }
        if (this._secretsRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsRole = this._secretsRole;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenIDConnectProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretsArn = undefined;
            this._secretsRole = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretsArn = value.secretsArn;
            this._secretsRole = value.secretsRole;
        }
    }

    // secrets_arn - computed: true, optional: true, required: false
    private _secretsArn?: string; 
    public get secretsArn() {
        return this.getStringAttribute('secrets_arn');
    }
    public set secretsArn(value: string) {
        this._secretsArn = value;
    }
    public resetSecretsArn() {
        this._secretsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsArnInput() {
        return this._secretsArn;
    }

    // secrets_role - computed: true, optional: true, required: false
    private _secretsRole?: string; 
    public get secretsRole() {
        return this.getStringAttribute('secrets_role');
    }
    public set secretsRole(value: string) {
        this._secretsRole = value;
    }
    public resetSecretsRole() {
        this._secretsRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsRoleInput() {
        return this._secretsRole;
    }
}
export interface SamlProviderConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#authentication_url CcWebExperience#authentication_url}
    */
    readonly authenticationUrl?: string;
}
export class SamlProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamlProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationUrl = this._authenticationUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamlProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationUrl = value.authenticationUrl;
        }
    }

    // authentication_url - computed: true, optional: true, required: false
    private _authenticationUrl?: string; 
    public get authenticationUrl() {
        return this.getStringAttribute('authentication_url');
    }
    public set authenticationUrl(value: string) {
        this._authenticationUrl = value;
    }
    public resetAuthenticationUrl() {
        this._authenticationUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationUrlInput() {
        return this._authenticationUrl;
    }
}
export interface IdentityProviderConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#open_id_connect_configuration CcWebExperience#open_id_connect_configuration}
    */
    readonly openIdConnectConfiguration?: OpenIDConnectProviderConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#saml_configuration CcWebExperience#saml_configuration}
    */
    readonly samlConfiguration?: SamlProviderConfigurationProperty;
}
export class IdentityProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityProviderConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._openIdConnectConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openIdConnectConfiguration = this._openIdConnectConfiguration?.internalValue;
        }
        if (this._samlConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.samlConfiguration = this._samlConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityProviderConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._openIdConnectConfiguration.internalValue = undefined;
            this._samlConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._openIdConnectConfiguration.internalValue = value.openIdConnectConfiguration;
            this._samlConfiguration.internalValue = value.samlConfiguration;
        }
    }

    // open_id_connect_configuration - computed: true, optional: true, required: false
    private _openIdConnectConfiguration = new OpenIDConnectProviderConfigurationPropertyOutputReference(this, "open_id_connect_configuration");
    public get openIdConnectConfiguration() {
        return this._openIdConnectConfiguration;
    }
    public putOpenIdConnectConfiguration(value: OpenIDConnectProviderConfigurationProperty) {
        this._openIdConnectConfiguration.internalValue = value;
    }
    public resetOpenIdConnectConfiguration() {
        this._openIdConnectConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openIdConnectConfigurationInput() {
        return this._openIdConnectConfiguration.internalValue;
    }

    // saml_configuration - computed: true, optional: true, required: false
    private _samlConfiguration = new SamlProviderConfigurationPropertyOutputReference(this, "saml_configuration");
    public get samlConfiguration() {
        return this._samlConfiguration;
    }
    public putSamlConfiguration(value: SamlProviderConfigurationProperty) {
        this._samlConfiguration.internalValue = value;
    }
    public resetSamlConfiguration() {
        this._samlConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlConfigurationInput() {
        return this._samlConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#key CcWebExperience#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/qbusiness_web_experience#value CcWebExperience#value}
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
