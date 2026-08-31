// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserSettingsProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#additional_encryption_context CcUserSettings#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#branding_configuration CcUserSettings#branding_configuration}
    */
    readonly brandingConfiguration?: CcUserSettings.BrandingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration CcUserSettings#cookie_synchronization_configuration}
    */
    readonly cookieSynchronizationConfiguration?: CcUserSettings.CookieSynchronizationConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#copy_allowed CcUserSettings#copy_allowed}
    */
    readonly copyAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#customer_managed_key CcUserSettings#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#deep_link_allowed CcUserSettings#deep_link_allowed}
    */
    readonly deepLinkAllowed?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes CcUserSettings#disconnect_timeout_in_minutes}
    */
    readonly disconnectTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#download_allowed CcUserSettings#download_allowed}
    */
    readonly downloadAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes CcUserSettings#idle_disconnect_timeout_in_minutes}
    */
    readonly idleDisconnectTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#paste_allowed CcUserSettings#paste_allowed}
    */
    readonly pasteAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#print_allowed CcUserSettings#print_allowed}
    */
    readonly printAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#tags CcUserSettings#tags}
    */
    readonly tags?: CcUserSettings.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#toolbar_configuration CcUserSettings#toolbar_configuration}
    */
    readonly toolbarConfiguration?: CcUserSettings.ToolbarConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#upload_allowed CcUserSettings#upload_allowed}
    */
    readonly uploadAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#web_authn_allowed CcUserSettings#web_authn_allowed}
    */
    readonly webAuthnAllowed?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings awscc_workspacesweb_user_settings}
*/
export class CcUserSettings extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesweb_user_settings";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserSettings resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserSettings to import
    * @param importFromId The id of the existing CcUserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserSettings to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_user_settings", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings awscc_workspacesweb_user_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserSettingsProps
    */
    public constructor(scope: Construct, id: string, config: CcUserSettingsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesweb_user_settings',
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
        this._additionalEncryptionContext = config.additionalEncryptionContext;
        this._brandingConfiguration.internalValue = config.brandingConfiguration;
        this._cookieSynchronizationConfiguration.internalValue = config.cookieSynchronizationConfiguration;
        this._copyAllowed = config.copyAllowed;
        this._customerManagedKey = config.customerManagedKey;
        this._deepLinkAllowed = config.deepLinkAllowed;
        this._disconnectTimeoutInMinutes = config.disconnectTimeoutInMinutes;
        this._downloadAllowed = config.downloadAllowed;
        this._idleDisconnectTimeoutInMinutes = config.idleDisconnectTimeoutInMinutes;
        this._pasteAllowed = config.pasteAllowed;
        this._printAllowed = config.printAllowed;
        this._tags.internalValue = config.tags;
        this._toolbarConfiguration.internalValue = config.toolbarConfiguration;
        this._uploadAllowed = config.uploadAllowed;
        this._webAuthnAllowed = config.webAuthnAllowed;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_encryption_context - computed: true, optional: true, required: false
    private _additionalEncryptionContext?: { [key: string]: string }; 
    public get additionalEncryptionContext() {
        return this.getStringMapAttribute('additional_encryption_context');
    }
    public set additionalEncryptionContext(value: { [key: string]: string }) {
        this._additionalEncryptionContext = value;
    }
    public resetAdditionalEncryptionContext() {
        this._additionalEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalEncryptionContextInput() {
        return this._additionalEncryptionContext;
    }

    // associated_portal_arns - computed: true, optional: false, required: false
    public get associatedPortalArns() {
        return this.getListAttribute('associated_portal_arns');
    }

    // branding_configuration - computed: true, optional: true, required: false
    private _brandingConfiguration = new CcUserSettings.BrandingConfigurationPropertyOutputReference(this, "branding_configuration");
    public get brandingConfiguration() {
        return this._brandingConfiguration;
    }
    public putBrandingConfiguration(value: CcUserSettings.BrandingConfigurationProperty) {
        this._brandingConfiguration.internalValue = value;
    }
    public resetBrandingConfiguration() {
        this._brandingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brandingConfigurationInput() {
        return this._brandingConfiguration.internalValue;
    }

    // cookie_synchronization_configuration - computed: true, optional: true, required: false
    private _cookieSynchronizationConfiguration = new CcUserSettings.CookieSynchronizationConfigurationPropertyOutputReference(this, "cookie_synchronization_configuration");
    public get cookieSynchronizationConfiguration() {
        return this._cookieSynchronizationConfiguration;
    }
    public putCookieSynchronizationConfiguration(value: CcUserSettings.CookieSynchronizationConfigurationProperty) {
        this._cookieSynchronizationConfiguration.internalValue = value;
    }
    public resetCookieSynchronizationConfiguration() {
        this._cookieSynchronizationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieSynchronizationConfigurationInput() {
        return this._cookieSynchronizationConfiguration.internalValue;
    }

    // copy_allowed - computed: false, optional: false, required: true
    private _copyAllowed?: string; 
    public get copyAllowed() {
        return this.getStringAttribute('copy_allowed');
    }
    public set copyAllowed(value: string) {
        this._copyAllowed = value;
    }
    // Temporarily expose input value. Use with caution.
    public get copyAllowedInput() {
        return this._copyAllowed;
    }

    // customer_managed_key - computed: true, optional: true, required: false
    private _customerManagedKey?: string; 
    public get customerManagedKey() {
        return this.getStringAttribute('customer_managed_key');
    }
    public set customerManagedKey(value: string) {
        this._customerManagedKey = value;
    }
    public resetCustomerManagedKey() {
        this._customerManagedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedKeyInput() {
        return this._customerManagedKey;
    }

    // deep_link_allowed - computed: true, optional: true, required: false
    private _deepLinkAllowed?: string; 
    public get deepLinkAllowed() {
        return this.getStringAttribute('deep_link_allowed');
    }
    public set deepLinkAllowed(value: string) {
        this._deepLinkAllowed = value;
    }
    public resetDeepLinkAllowed() {
        this._deepLinkAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deepLinkAllowedInput() {
        return this._deepLinkAllowed;
    }

    // disconnect_timeout_in_minutes - computed: true, optional: true, required: false
    private _disconnectTimeoutInMinutes?: number; 
    public get disconnectTimeoutInMinutes() {
        return this.getNumberAttribute('disconnect_timeout_in_minutes');
    }
    public set disconnectTimeoutInMinutes(value: number) {
        this._disconnectTimeoutInMinutes = value;
    }
    public resetDisconnectTimeoutInMinutes() {
        this._disconnectTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disconnectTimeoutInMinutesInput() {
        return this._disconnectTimeoutInMinutes;
    }

    // download_allowed - computed: false, optional: false, required: true
    private _downloadAllowed?: string; 
    public get downloadAllowed() {
        return this.getStringAttribute('download_allowed');
    }
    public set downloadAllowed(value: string) {
        this._downloadAllowed = value;
    }
    // Temporarily expose input value. Use with caution.
    public get downloadAllowedInput() {
        return this._downloadAllowed;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // idle_disconnect_timeout_in_minutes - computed: true, optional: true, required: false
    private _idleDisconnectTimeoutInMinutes?: number; 
    public get idleDisconnectTimeoutInMinutes() {
        return this.getNumberAttribute('idle_disconnect_timeout_in_minutes');
    }
    public set idleDisconnectTimeoutInMinutes(value: number) {
        this._idleDisconnectTimeoutInMinutes = value;
    }
    public resetIdleDisconnectTimeoutInMinutes() {
        this._idleDisconnectTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleDisconnectTimeoutInMinutesInput() {
        return this._idleDisconnectTimeoutInMinutes;
    }

    // paste_allowed - computed: false, optional: false, required: true
    private _pasteAllowed?: string; 
    public get pasteAllowed() {
        return this.getStringAttribute('paste_allowed');
    }
    public set pasteAllowed(value: string) {
        this._pasteAllowed = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pasteAllowedInput() {
        return this._pasteAllowed;
    }

    // print_allowed - computed: false, optional: false, required: true
    private _printAllowed?: string; 
    public get printAllowed() {
        return this.getStringAttribute('print_allowed');
    }
    public set printAllowed(value: string) {
        this._printAllowed = value;
    }
    // Temporarily expose input value. Use with caution.
    public get printAllowedInput() {
        return this._printAllowed;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcUserSettings.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcUserSettings.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // toolbar_configuration - computed: true, optional: true, required: false
    private _toolbarConfiguration = new CcUserSettings.ToolbarConfigurationPropertyOutputReference(this, "toolbar_configuration");
    public get toolbarConfiguration() {
        return this._toolbarConfiguration;
    }
    public putToolbarConfiguration(value: CcUserSettings.ToolbarConfigurationProperty) {
        this._toolbarConfiguration.internalValue = value;
    }
    public resetToolbarConfiguration() {
        this._toolbarConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolbarConfigurationInput() {
        return this._toolbarConfiguration.internalValue;
    }

    // upload_allowed - computed: false, optional: false, required: true
    private _uploadAllowed?: string; 
    public get uploadAllowed() {
        return this.getStringAttribute('upload_allowed');
    }
    public set uploadAllowed(value: string) {
        this._uploadAllowed = value;
    }
    // Temporarily expose input value. Use with caution.
    public get uploadAllowedInput() {
        return this._uploadAllowed;
    }

    // user_settings_arn - computed: true, optional: false, required: false
    public get userSettingsArn() {
        return this.getStringAttribute('user_settings_arn');
    }

    // web_authn_allowed - computed: true, optional: true, required: false
    private _webAuthnAllowed?: string; 
    public get webAuthnAllowed() {
        return this.getStringAttribute('web_authn_allowed');
    }
    public set webAuthnAllowed(value: string) {
        this._webAuthnAllowed = value;
    }
    public resetWebAuthnAllowed() {
        this._webAuthnAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAuthnAllowedInput() {
        return this._webAuthnAllowed;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalEncryptionContext),
            branding_configuration: ccUserSettingsBrandingConfigurationPropertyToTerraform(this._brandingConfiguration.internalValue),
            cookie_synchronization_configuration: ccUserSettingsCookieSynchronizationConfigurationPropertyToTerraform(this._cookieSynchronizationConfiguration.internalValue),
            copy_allowed: cdktn.stringToTerraform(this._copyAllowed),
            customer_managed_key: cdktn.stringToTerraform(this._customerManagedKey),
            deep_link_allowed: cdktn.stringToTerraform(this._deepLinkAllowed),
            disconnect_timeout_in_minutes: cdktn.numberToTerraform(this._disconnectTimeoutInMinutes),
            download_allowed: cdktn.stringToTerraform(this._downloadAllowed),
            idle_disconnect_timeout_in_minutes: cdktn.numberToTerraform(this._idleDisconnectTimeoutInMinutes),
            paste_allowed: cdktn.stringToTerraform(this._pasteAllowed),
            print_allowed: cdktn.stringToTerraform(this._printAllowed),
            tags: cdktn.listMapper(ccUserSettingsTagPropertyToTerraform, false)(this._tags.internalValue),
            toolbar_configuration: ccUserSettingsToolbarConfigurationPropertyToTerraform(this._toolbarConfiguration.internalValue),
            upload_allowed: cdktn.stringToTerraform(this._uploadAllowed),
            web_authn_allowed: cdktn.stringToTerraform(this._webAuthnAllowed),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_encryption_context: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalEncryptionContext),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            branding_configuration: {
                value: ccUserSettingsBrandingConfigurationPropertyToHclTerraform(this._brandingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserSettings.BrandingConfigurationProperty",
            },
            cookie_synchronization_configuration: {
                value: ccUserSettingsCookieSynchronizationConfigurationPropertyToHclTerraform(this._cookieSynchronizationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserSettings.CookieSynchronizationConfigurationProperty",
            },
            copy_allowed: {
                value: cdktn.stringToHclTerraform(this._copyAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_managed_key: {
                value: cdktn.stringToHclTerraform(this._customerManagedKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deep_link_allowed: {
                value: cdktn.stringToHclTerraform(this._deepLinkAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disconnect_timeout_in_minutes: {
                value: cdktn.numberToHclTerraform(this._disconnectTimeoutInMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            download_allowed: {
                value: cdktn.stringToHclTerraform(this._downloadAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            idle_disconnect_timeout_in_minutes: {
                value: cdktn.numberToHclTerraform(this._idleDisconnectTimeoutInMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            paste_allowed: {
                value: cdktn.stringToHclTerraform(this._pasteAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            print_allowed: {
                value: cdktn.stringToHclTerraform(this._printAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccUserSettingsTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUserSettings.TagPropertyList",
            },
            toolbar_configuration: {
                value: ccUserSettingsToolbarConfigurationPropertyToHclTerraform(this._toolbarConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserSettings.ToolbarConfigurationProperty",
            },
            upload_allowed: {
                value: cdktn.stringToHclTerraform(this._uploadAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            web_authn_allowed: {
                value: cdktn.stringToHclTerraform(this._webAuthnAllowed),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserSettingsImageMetadataPropertyToTerraform(struct?: CcUserSettings.ImageMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccUserSettingsImageMetadataPropertyToHclTerraform(struct?: CcUserSettings.ImageMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccUserSettingsLocalizedBrandingStringsPropertyToTerraform(struct?: CcUserSettings.LocalizedBrandingStringsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        browser_tab_title: cdktn.stringToTerraform(struct!.browserTabTitle),
        contact_button_text: cdktn.stringToTerraform(struct!.contactButtonText),
        contact_link: cdktn.stringToTerraform(struct!.contactLink),
        loading_text: cdktn.stringToTerraform(struct!.loadingText),
        login_button_text: cdktn.stringToTerraform(struct!.loginButtonText),
        login_description: cdktn.stringToTerraform(struct!.loginDescription),
        login_title: cdktn.stringToTerraform(struct!.loginTitle),
        welcome_text: cdktn.stringToTerraform(struct!.welcomeText),
    }
}


export function ccUserSettingsLocalizedBrandingStringsPropertyToHclTerraform(struct?: CcUserSettings.LocalizedBrandingStringsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        browser_tab_title: {
            value: cdktn.stringToHclTerraform(struct!.browserTabTitle),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contact_button_text: {
            value: cdktn.stringToHclTerraform(struct!.contactButtonText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contact_link: {
            value: cdktn.stringToHclTerraform(struct!.contactLink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        loading_text: {
            value: cdktn.stringToHclTerraform(struct!.loadingText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        login_button_text: {
            value: cdktn.stringToHclTerraform(struct!.loginButtonText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        login_description: {
            value: cdktn.stringToHclTerraform(struct!.loginDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        login_title: {
            value: cdktn.stringToHclTerraform(struct!.loginTitle),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        welcome_text: {
            value: cdktn.stringToHclTerraform(struct!.welcomeText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserSettingsLogoMetadataPropertyToTerraform(struct?: CcUserSettings.LogoMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccUserSettingsLogoMetadataPropertyToHclTerraform(struct?: CcUserSettings.LogoMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccUserSettingsWallpaperMetadataPropertyToTerraform(struct?: CcUserSettings.WallpaperMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccUserSettingsWallpaperMetadataPropertyToHclTerraform(struct?: CcUserSettings.WallpaperMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccUserSettingsBrandingConfigurationPropertyToTerraform(struct?: CcUserSettings.BrandingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        color_theme: cdktn.stringToTerraform(struct!.colorTheme),
        favicon: cdktn.stringToTerraform(struct!.favicon),
        localized_strings: cdktn.hashMapper(ccUserSettingsLocalizedBrandingStringsPropertyToTerraform)(struct!.localizedStrings),
        logo: cdktn.stringToTerraform(struct!.logo),
        terms_of_service: cdktn.stringToTerraform(struct!.termsOfService),
        wallpaper: cdktn.stringToTerraform(struct!.wallpaper),
    }
}


export function ccUserSettingsBrandingConfigurationPropertyToHclTerraform(struct?: CcUserSettings.BrandingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        color_theme: {
            value: cdktn.stringToHclTerraform(struct!.colorTheme),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        favicon: {
            value: cdktn.stringToHclTerraform(struct!.favicon),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        localized_strings: {
            value: cdktn.hashMapperHcl(ccUserSettingsLocalizedBrandingStringsPropertyToHclTerraform)(struct!.localizedStrings),
            isBlock: true,
            type: "map",
            storageClassType: "LocalizedBrandingStringsPropertyMap",
        },
        logo: {
            value: cdktn.stringToHclTerraform(struct!.logo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        terms_of_service: {
            value: cdktn.stringToHclTerraform(struct!.termsOfService),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wallpaper: {
            value: cdktn.stringToHclTerraform(struct!.wallpaper),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserSettingsCookieSpecificationPropertyToTerraform(struct?: CcUserSettings.CookieSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
        name: cdktn.stringToTerraform(struct!.name),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccUserSettingsCookieSpecificationPropertyToHclTerraform(struct?: CcUserSettings.CookieSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
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
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserSettingsBlocklistPropertyToTerraform(struct?: CcUserSettings.BlocklistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
        name: cdktn.stringToTerraform(struct!.name),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccUserSettingsBlocklistPropertyToHclTerraform(struct?: CcUserSettings.BlocklistProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain: {
            value: cdktn.stringToHclTerraform(struct!.domain),
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
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserSettingsCookieSynchronizationConfigurationPropertyToTerraform(struct?: CcUserSettings.CookieSynchronizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowlist: cdktn.listMapper(ccUserSettingsCookieSpecificationPropertyToTerraform, false)(struct!.allowlist),
        blocklist: cdktn.listMapper(ccUserSettingsBlocklistPropertyToTerraform, false)(struct!.blocklist),
    }
}


export function ccUserSettingsCookieSynchronizationConfigurationPropertyToHclTerraform(struct?: CcUserSettings.CookieSynchronizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowlist: {
            value: cdktn.listMapperHcl(ccUserSettingsCookieSpecificationPropertyToHclTerraform, false)(struct!.allowlist),
            isBlock: true,
            type: "list",
            storageClassType: "CookieSpecificationPropertyList",
        },
        blocklist: {
            value: cdktn.listMapperHcl(ccUserSettingsBlocklistPropertyToHclTerraform, false)(struct!.blocklist),
            isBlock: true,
            type: "list",
            storageClassType: "BlocklistPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserSettingsTagPropertyToTerraform(struct?: CcUserSettings.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccUserSettingsTagPropertyToHclTerraform(struct?: CcUserSettings.TagProperty | cdktn.IResolvable): any {
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


export function ccUserSettingsToolbarConfigurationPropertyToTerraform(struct?: CcUserSettings.ToolbarConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hidden_toolbar_items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenToolbarItems),
        max_display_resolution: cdktn.stringToTerraform(struct!.maxDisplayResolution),
        toolbar_type: cdktn.stringToTerraform(struct!.toolbarType),
        visual_mode: cdktn.stringToTerraform(struct!.visualMode),
    }
}


export function ccUserSettingsToolbarConfigurationPropertyToHclTerraform(struct?: CcUserSettings.ToolbarConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hidden_toolbar_items: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenToolbarItems),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_display_resolution: {
            value: cdktn.stringToHclTerraform(struct!.maxDisplayResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        toolbar_type: {
            value: cdktn.stringToHclTerraform(struct!.toolbarType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        visual_mode: {
            value: cdktn.stringToHclTerraform(struct!.visualMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserSettings {
export interface ImageMetadataProperty {
}
export class ImageMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageMetadataProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageMetadataProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // file_extension - computed: true, optional: false, required: false
    public get fileExtension() {
        return this.getStringAttribute('file_extension');
    }

    // last_upload_timestamp - computed: true, optional: false, required: false
    public get lastUploadTimestamp() {
        return this.getStringAttribute('last_upload_timestamp');
    }

    // mime_type - computed: true, optional: false, required: false
    public get mimeType() {
        return this.getStringAttribute('mime_type');
    }
}
export interface LocalizedBrandingStringsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#browser_tab_title CcUserSettings#browser_tab_title}
    */
    readonly browserTabTitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#contact_button_text CcUserSettings#contact_button_text}
    */
    readonly contactButtonText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#contact_link CcUserSettings#contact_link}
    */
    readonly contactLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#loading_text CcUserSettings#loading_text}
    */
    readonly loadingText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#login_button_text CcUserSettings#login_button_text}
    */
    readonly loginButtonText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#login_description CcUserSettings#login_description}
    */
    readonly loginDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#login_title CcUserSettings#login_title}
    */
    readonly loginTitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#welcome_text CcUserSettings#welcome_text}
    */
    readonly welcomeText?: string;
}
export class LocalizedBrandingStringsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): LocalizedBrandingStringsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._browserTabTitle !== undefined) {
            hasAnyValues = true;
            internalValueResult.browserTabTitle = this._browserTabTitle;
        }
        if (this._contactButtonText !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactButtonText = this._contactButtonText;
        }
        if (this._contactLink !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactLink = this._contactLink;
        }
        if (this._loadingText !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadingText = this._loadingText;
        }
        if (this._loginButtonText !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginButtonText = this._loginButtonText;
        }
        if (this._loginDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginDescription = this._loginDescription;
        }
        if (this._loginTitle !== undefined) {
            hasAnyValues = true;
            internalValueResult.loginTitle = this._loginTitle;
        }
        if (this._welcomeText !== undefined) {
            hasAnyValues = true;
            internalValueResult.welcomeText = this._welcomeText;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocalizedBrandingStringsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._browserTabTitle = undefined;
            this._contactButtonText = undefined;
            this._contactLink = undefined;
            this._loadingText = undefined;
            this._loginButtonText = undefined;
            this._loginDescription = undefined;
            this._loginTitle = undefined;
            this._welcomeText = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._browserTabTitle = value.browserTabTitle;
            this._contactButtonText = value.contactButtonText;
            this._contactLink = value.contactLink;
            this._loadingText = value.loadingText;
            this._loginButtonText = value.loginButtonText;
            this._loginDescription = value.loginDescription;
            this._loginTitle = value.loginTitle;
            this._welcomeText = value.welcomeText;
        }
    }

    // browser_tab_title - computed: true, optional: true, required: false
    private _browserTabTitle?: string; 
    public get browserTabTitle() {
        return this.getStringAttribute('browser_tab_title');
    }
    public set browserTabTitle(value: string) {
        this._browserTabTitle = value;
    }
    public resetBrowserTabTitle() {
        this._browserTabTitle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get browserTabTitleInput() {
        return this._browserTabTitle;
    }

    // contact_button_text - computed: true, optional: true, required: false
    private _contactButtonText?: string; 
    public get contactButtonText() {
        return this.getStringAttribute('contact_button_text');
    }
    public set contactButtonText(value: string) {
        this._contactButtonText = value;
    }
    public resetContactButtonText() {
        this._contactButtonText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactButtonTextInput() {
        return this._contactButtonText;
    }

    // contact_link - computed: true, optional: true, required: false
    private _contactLink?: string; 
    public get contactLink() {
        return this.getStringAttribute('contact_link');
    }
    public set contactLink(value: string) {
        this._contactLink = value;
    }
    public resetContactLink() {
        this._contactLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactLinkInput() {
        return this._contactLink;
    }

    // loading_text - computed: true, optional: true, required: false
    private _loadingText?: string; 
    public get loadingText() {
        return this.getStringAttribute('loading_text');
    }
    public set loadingText(value: string) {
        this._loadingText = value;
    }
    public resetLoadingText() {
        this._loadingText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadingTextInput() {
        return this._loadingText;
    }

    // login_button_text - computed: true, optional: true, required: false
    private _loginButtonText?: string; 
    public get loginButtonText() {
        return this.getStringAttribute('login_button_text');
    }
    public set loginButtonText(value: string) {
        this._loginButtonText = value;
    }
    public resetLoginButtonText() {
        this._loginButtonText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loginButtonTextInput() {
        return this._loginButtonText;
    }

    // login_description - computed: true, optional: true, required: false
    private _loginDescription?: string; 
    public get loginDescription() {
        return this.getStringAttribute('login_description');
    }
    public set loginDescription(value: string) {
        this._loginDescription = value;
    }
    public resetLoginDescription() {
        this._loginDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loginDescriptionInput() {
        return this._loginDescription;
    }

    // login_title - computed: true, optional: true, required: false
    private _loginTitle?: string; 
    public get loginTitle() {
        return this.getStringAttribute('login_title');
    }
    public set loginTitle(value: string) {
        this._loginTitle = value;
    }
    public resetLoginTitle() {
        this._loginTitle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loginTitleInput() {
        return this._loginTitle;
    }

    // welcome_text - computed: true, optional: true, required: false
    private _welcomeText?: string; 
    public get welcomeText() {
        return this.getStringAttribute('welcome_text');
    }
    public set welcomeText(value: string) {
        this._welcomeText = value;
    }
    public resetWelcomeText() {
        this._welcomeText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get welcomeTextInput() {
        return this._welcomeText;
    }
}

export class LocalizedBrandingStringsPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: LocalizedBrandingStringsProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): LocalizedBrandingStringsPropertyOutputReference {
        return new LocalizedBrandingStringsPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface LogoMetadataProperty {
}
export class LogoMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogoMetadataProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogoMetadataProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // file_extension - computed: true, optional: false, required: false
    public get fileExtension() {
        return this.getStringAttribute('file_extension');
    }

    // last_upload_timestamp - computed: true, optional: false, required: false
    public get lastUploadTimestamp() {
        return this.getStringAttribute('last_upload_timestamp');
    }

    // mime_type - computed: true, optional: false, required: false
    public get mimeType() {
        return this.getStringAttribute('mime_type');
    }
}
export interface WallpaperMetadataProperty {
}
export class WallpaperMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WallpaperMetadataProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WallpaperMetadataProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // file_extension - computed: true, optional: false, required: false
    public get fileExtension() {
        return this.getStringAttribute('file_extension');
    }

    // last_upload_timestamp - computed: true, optional: false, required: false
    public get lastUploadTimestamp() {
        return this.getStringAttribute('last_upload_timestamp');
    }

    // mime_type - computed: true, optional: false, required: false
    public get mimeType() {
        return this.getStringAttribute('mime_type');
    }
}
export interface BrandingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#color_theme CcUserSettings#color_theme}
    */
    readonly colorTheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#favicon CcUserSettings#favicon}
    */
    readonly favicon?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#localized_strings CcUserSettings#localized_strings}
    */
    readonly localizedStrings?: { [key: string]: LocalizedBrandingStringsProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#logo CcUserSettings#logo}
    */
    readonly logo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#terms_of_service CcUserSettings#terms_of_service}
    */
    readonly termsOfService?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#wallpaper CcUserSettings#wallpaper}
    */
    readonly wallpaper?: string;
}
export class BrandingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BrandingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._colorTheme !== undefined) {
            hasAnyValues = true;
            internalValueResult.colorTheme = this._colorTheme;
        }
        if (this._favicon !== undefined) {
            hasAnyValues = true;
            internalValueResult.favicon = this._favicon;
        }
        if (this._localizedStrings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.localizedStrings = this._localizedStrings?.internalValue;
        }
        if (this._logo !== undefined) {
            hasAnyValues = true;
            internalValueResult.logo = this._logo;
        }
        if (this._termsOfService !== undefined) {
            hasAnyValues = true;
            internalValueResult.termsOfService = this._termsOfService;
        }
        if (this._wallpaper !== undefined) {
            hasAnyValues = true;
            internalValueResult.wallpaper = this._wallpaper;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BrandingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._colorTheme = undefined;
            this._favicon = undefined;
            this._localizedStrings.internalValue = undefined;
            this._logo = undefined;
            this._termsOfService = undefined;
            this._wallpaper = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._colorTheme = value.colorTheme;
            this._favicon = value.favicon;
            this._localizedStrings.internalValue = value.localizedStrings;
            this._logo = value.logo;
            this._termsOfService = value.termsOfService;
            this._wallpaper = value.wallpaper;
        }
    }

    // color_theme - computed: true, optional: true, required: false
    private _colorTheme?: string; 
    public get colorTheme() {
        return this.getStringAttribute('color_theme');
    }
    public set colorTheme(value: string) {
        this._colorTheme = value;
    }
    public resetColorTheme() {
        this._colorTheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get colorThemeInput() {
        return this._colorTheme;
    }

    // favicon - computed: true, optional: true, required: false
    private _favicon?: string; 
    public get favicon() {
        return this.getStringAttribute('favicon');
    }
    public set favicon(value: string) {
        this._favicon = value;
    }
    public resetFavicon() {
        this._favicon = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get faviconInput() {
        return this._favicon;
    }

    // favicon_metadata - computed: true, optional: false, required: false
    private _faviconMetadata = new ImageMetadataPropertyOutputReference(this, "favicon_metadata");
    public get faviconMetadata() {
        return this._faviconMetadata;
    }

    // localized_strings - computed: true, optional: true, required: false
    private _localizedStrings = new LocalizedBrandingStringsPropertyMap(this, "localized_strings");
    public get localizedStrings() {
        return this._localizedStrings;
    }
    public putLocalizedStrings(value: { [key: string]: LocalizedBrandingStringsProperty } | cdktn.IResolvable) {
        this._localizedStrings.internalValue = value;
    }
    public resetLocalizedStrings() {
        this._localizedStrings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localizedStringsInput() {
        return this._localizedStrings.internalValue;
    }

    // logo - computed: true, optional: true, required: false
    private _logo?: string; 
    public get logo() {
        return this.getStringAttribute('logo');
    }
    public set logo(value: string) {
        this._logo = value;
    }
    public resetLogo() {
        this._logo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logoInput() {
        return this._logo;
    }

    // logo_metadata - computed: true, optional: false, required: false
    private _logoMetadata = new LogoMetadataPropertyOutputReference(this, "logo_metadata");
    public get logoMetadata() {
        return this._logoMetadata;
    }

    // terms_of_service - computed: true, optional: true, required: false
    private _termsOfService?: string; 
    public get termsOfService() {
        return this.getStringAttribute('terms_of_service');
    }
    public set termsOfService(value: string) {
        this._termsOfService = value;
    }
    public resetTermsOfService() {
        this._termsOfService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get termsOfServiceInput() {
        return this._termsOfService;
    }

    // wallpaper - computed: true, optional: true, required: false
    private _wallpaper?: string; 
    public get wallpaper() {
        return this.getStringAttribute('wallpaper');
    }
    public set wallpaper(value: string) {
        this._wallpaper = value;
    }
    public resetWallpaper() {
        this._wallpaper = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wallpaperInput() {
        return this._wallpaper;
    }

    // wallpaper_metadata - computed: true, optional: false, required: false
    private _wallpaperMetadata = new WallpaperMetadataPropertyOutputReference(this, "wallpaper_metadata");
    public get wallpaperMetadata() {
        return this._wallpaperMetadata;
    }
}
export interface CookieSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#domain CcUserSettings#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#name CcUserSettings#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#path CcUserSettings#path}
    */
    readonly path?: string;
}
export class CookieSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CookieSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CookieSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
            this._name = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
            this._name = value.name;
            this._path = value.path;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
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

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}

export class CookieSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : CookieSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): CookieSpecificationPropertyOutputReference {
        return new CookieSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BlocklistProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#domain CcUserSettings#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#name CcUserSettings#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#path CcUserSettings#path}
    */
    readonly path?: string;
}
export class BlocklistPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BlocklistProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlocklistProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
            this._name = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
            this._name = value.name;
            this._path = value.path;
        }
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
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

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}

export class BlocklistPropertyList extends cdktn.ComplexList {
    public internalValue? : BlocklistProperty[] | cdktn.IResolvable

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
    public get(index: number): BlocklistPropertyOutputReference {
        return new BlocklistPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CookieSynchronizationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#allowlist CcUserSettings#allowlist}
    */
    readonly allowlist?: CookieSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#blocklist CcUserSettings#blocklist}
    */
    readonly blocklist?: BlocklistProperty[] | cdktn.IResolvable;
}
export class CookieSynchronizationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CookieSynchronizationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowlist?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowlist = this._allowlist?.internalValue;
        }
        if (this._blocklist?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blocklist = this._blocklist?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CookieSynchronizationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowlist.internalValue = undefined;
            this._blocklist.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowlist.internalValue = value.allowlist;
            this._blocklist.internalValue = value.blocklist;
        }
    }

    // allowlist - computed: true, optional: true, required: false
    private _allowlist = new CookieSpecificationPropertyList(this, "allowlist", false);
    public get allowlist() {
        return this._allowlist;
    }
    public putAllowlist(value: CookieSpecificationProperty[] | cdktn.IResolvable) {
        this._allowlist.internalValue = value;
    }
    public resetAllowlist() {
        this._allowlist.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowlistInput() {
        return this._allowlist.internalValue;
    }

    // blocklist - computed: true, optional: true, required: false
    private _blocklist = new BlocklistPropertyList(this, "blocklist", false);
    public get blocklist() {
        return this._blocklist;
    }
    public putBlocklist(value: BlocklistProperty[] | cdktn.IResolvable) {
        this._blocklist.internalValue = value;
    }
    public resetBlocklist() {
        this._blocklist.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blocklistInput() {
        return this._blocklist.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#key CcUserSettings#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#value CcUserSettings#value}
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
export interface ToolbarConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items CcUserSettings#hidden_toolbar_items}
    */
    readonly hiddenToolbarItems?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#max_display_resolution CcUserSettings#max_display_resolution}
    */
    readonly maxDisplayResolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#toolbar_type CcUserSettings#toolbar_type}
    */
    readonly toolbarType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_user_settings#visual_mode CcUserSettings#visual_mode}
    */
    readonly visualMode?: string;
}
export class ToolbarConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ToolbarConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hiddenToolbarItems !== undefined) {
            hasAnyValues = true;
            internalValueResult.hiddenToolbarItems = this._hiddenToolbarItems;
        }
        if (this._maxDisplayResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxDisplayResolution = this._maxDisplayResolution;
        }
        if (this._toolbarType !== undefined) {
            hasAnyValues = true;
            internalValueResult.toolbarType = this._toolbarType;
        }
        if (this._visualMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.visualMode = this._visualMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ToolbarConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hiddenToolbarItems = undefined;
            this._maxDisplayResolution = undefined;
            this._toolbarType = undefined;
            this._visualMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hiddenToolbarItems = value.hiddenToolbarItems;
            this._maxDisplayResolution = value.maxDisplayResolution;
            this._toolbarType = value.toolbarType;
            this._visualMode = value.visualMode;
        }
    }

    // hidden_toolbar_items - computed: true, optional: true, required: false
    private _hiddenToolbarItems?: string[]; 
    public get hiddenToolbarItems() {
        return this.getListAttribute('hidden_toolbar_items');
    }
    public set hiddenToolbarItems(value: string[]) {
        this._hiddenToolbarItems = value;
    }
    public resetHiddenToolbarItems() {
        this._hiddenToolbarItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenToolbarItemsInput() {
        return this._hiddenToolbarItems;
    }

    // max_display_resolution - computed: true, optional: true, required: false
    private _maxDisplayResolution?: string; 
    public get maxDisplayResolution() {
        return this.getStringAttribute('max_display_resolution');
    }
    public set maxDisplayResolution(value: string) {
        this._maxDisplayResolution = value;
    }
    public resetMaxDisplayResolution() {
        this._maxDisplayResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxDisplayResolutionInput() {
        return this._maxDisplayResolution;
    }

    // toolbar_type - computed: true, optional: true, required: false
    private _toolbarType?: string; 
    public get toolbarType() {
        return this.getStringAttribute('toolbar_type');
    }
    public set toolbarType(value: string) {
        this._toolbarType = value;
    }
    public resetToolbarType() {
        this._toolbarType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toolbarTypeInput() {
        return this._toolbarType;
    }

    // visual_mode - computed: true, optional: true, required: false
    private _visualMode?: string; 
    public get visualMode() {
        return this.getStringAttribute('visual_mode');
    }
    public set visualMode(value: string) {
        this._visualMode = value;
    }
    public resetVisualMode() {
        this._visualMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get visualModeInput() {
        return this._visualMode;
    }
}
}
