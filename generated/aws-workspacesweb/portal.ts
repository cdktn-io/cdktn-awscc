// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPortalProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#additional_encryption_context CcPortal#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#authentication_type CcPortal#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#browser_settings_arn CcPortal#browser_settings_arn}
    */
    readonly browserSettingsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#customer_managed_key CcPortal#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#data_protection_settings_arn CcPortal#data_protection_settings_arn}
    */
    readonly dataProtectionSettingsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#display_name CcPortal#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#instance_type CcPortal#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#ip_access_settings_arn CcPortal#ip_access_settings_arn}
    */
    readonly ipAccessSettingsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#max_concurrent_sessions CcPortal#max_concurrent_sessions}
    */
    readonly maxConcurrentSessions?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#network_settings_arn CcPortal#network_settings_arn}
    */
    readonly networkSettingsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#portal_custom_domain CcPortal#portal_custom_domain}
    */
    readonly portalCustomDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#session_logger_arn CcPortal#session_logger_arn}
    */
    readonly sessionLoggerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#tags CcPortal#tags}
    */
    readonly tags?: CcPortal.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#trust_store_arn CcPortal#trust_store_arn}
    */
    readonly trustStoreArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_access_logging_settings_arn CcPortal#user_access_logging_settings_arn}
    */
    readonly userAccessLoggingSettingsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#user_settings_arn CcPortal#user_settings_arn}
    */
    readonly userSettingsArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal awscc_workspacesweb_portal}
*/
export class CcPortal extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesweb_portal";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPortal resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPortal to import
    * @param importFromId The id of the existing CcPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPortal to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_portal", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal awscc_workspacesweb_portal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPortalProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcPortalProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesweb_portal',
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
        this._additionalEncryptionContext = config.additionalEncryptionContext;
        this._authenticationType = config.authenticationType;
        this._browserSettingsArn = config.browserSettingsArn;
        this._customerManagedKey = config.customerManagedKey;
        this._dataProtectionSettingsArn = config.dataProtectionSettingsArn;
        this._displayName = config.displayName;
        this._instanceType = config.instanceType;
        this._ipAccessSettingsArn = config.ipAccessSettingsArn;
        this._maxConcurrentSessions = config.maxConcurrentSessions;
        this._networkSettingsArn = config.networkSettingsArn;
        this._portalCustomDomain = config.portalCustomDomain;
        this._sessionLoggerArn = config.sessionLoggerArn;
        this._tags.internalValue = config.tags;
        this._trustStoreArn = config.trustStoreArn;
        this._userAccessLoggingSettingsArn = config.userAccessLoggingSettingsArn;
        this._userSettingsArn = config.userSettingsArn;
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

    // authentication_type - computed: true, optional: true, required: false
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    public resetAuthenticationType() {
        this._authenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // browser_settings_arn - computed: true, optional: true, required: false
    private _browserSettingsArn?: string; 
    public get browserSettingsArn() {
        return this.getStringAttribute('browser_settings_arn');
    }
    public set browserSettingsArn(value: string) {
        this._browserSettingsArn = value;
    }
    public resetBrowserSettingsArn() {
        this._browserSettingsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get browserSettingsArnInput() {
        return this._browserSettingsArn;
    }

    // browser_type - computed: true, optional: false, required: false
    public get browserType() {
        return this.getStringAttribute('browser_type');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
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

    // data_protection_settings_arn - computed: true, optional: true, required: false
    private _dataProtectionSettingsArn?: string; 
    public get dataProtectionSettingsArn() {
        return this.getStringAttribute('data_protection_settings_arn');
    }
    public set dataProtectionSettingsArn(value: string) {
        this._dataProtectionSettingsArn = value;
    }
    public resetDataProtectionSettingsArn() {
        this._dataProtectionSettingsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataProtectionSettingsArnInput() {
        return this._dataProtectionSettingsArn;
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // ip_access_settings_arn - computed: true, optional: true, required: false
    private _ipAccessSettingsArn?: string; 
    public get ipAccessSettingsArn() {
        return this.getStringAttribute('ip_access_settings_arn');
    }
    public set ipAccessSettingsArn(value: string) {
        this._ipAccessSettingsArn = value;
    }
    public resetIpAccessSettingsArn() {
        this._ipAccessSettingsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAccessSettingsArnInput() {
        return this._ipAccessSettingsArn;
    }

    // max_concurrent_sessions - computed: true, optional: true, required: false
    private _maxConcurrentSessions?: number; 
    public get maxConcurrentSessions() {
        return this.getNumberAttribute('max_concurrent_sessions');
    }
    public set maxConcurrentSessions(value: number) {
        this._maxConcurrentSessions = value;
    }
    public resetMaxConcurrentSessions() {
        this._maxConcurrentSessions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentSessionsInput() {
        return this._maxConcurrentSessions;
    }

    // network_settings_arn - computed: true, optional: true, required: false
    private _networkSettingsArn?: string; 
    public get networkSettingsArn() {
        return this.getStringAttribute('network_settings_arn');
    }
    public set networkSettingsArn(value: string) {
        this._networkSettingsArn = value;
    }
    public resetNetworkSettingsArn() {
        this._networkSettingsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSettingsArnInput() {
        return this._networkSettingsArn;
    }

    // portal_arn - computed: true, optional: false, required: false
    public get portalArn() {
        return this.getStringAttribute('portal_arn');
    }

    // portal_custom_domain - computed: true, optional: true, required: false
    private _portalCustomDomain?: string; 
    public get portalCustomDomain() {
        return this.getStringAttribute('portal_custom_domain');
    }
    public set portalCustomDomain(value: string) {
        this._portalCustomDomain = value;
    }
    public resetPortalCustomDomain() {
        this._portalCustomDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portalCustomDomainInput() {
        return this._portalCustomDomain;
    }

    // portal_endpoint - computed: true, optional: false, required: false
    public get portalEndpoint() {
        return this.getStringAttribute('portal_endpoint');
    }

    // portal_status - computed: true, optional: false, required: false
    public get portalStatus() {
        return this.getStringAttribute('portal_status');
    }

    // renderer_type - computed: true, optional: false, required: false
    public get rendererType() {
        return this.getStringAttribute('renderer_type');
    }

    // service_provider_saml_metadata - computed: true, optional: false, required: false
    public get serviceProviderSamlMetadata() {
        return this.getStringAttribute('service_provider_saml_metadata');
    }

    // session_logger_arn - computed: true, optional: true, required: false
    private _sessionLoggerArn?: string; 
    public get sessionLoggerArn() {
        return this.getStringAttribute('session_logger_arn');
    }
    public set sessionLoggerArn(value: string) {
        this._sessionLoggerArn = value;
    }
    public resetSessionLoggerArn() {
        this._sessionLoggerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionLoggerArnInput() {
        return this._sessionLoggerArn;
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
        return this.getStringAttribute('status_reason');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPortal.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPortal.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // trust_store_arn - computed: true, optional: true, required: false
    private _trustStoreArn?: string; 
    public get trustStoreArn() {
        return this.getStringAttribute('trust_store_arn');
    }
    public set trustStoreArn(value: string) {
        this._trustStoreArn = value;
    }
    public resetTrustStoreArn() {
        this._trustStoreArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustStoreArnInput() {
        return this._trustStoreArn;
    }

    // user_access_logging_settings_arn - computed: true, optional: true, required: false
    private _userAccessLoggingSettingsArn?: string; 
    public get userAccessLoggingSettingsArn() {
        return this.getStringAttribute('user_access_logging_settings_arn');
    }
    public set userAccessLoggingSettingsArn(value: string) {
        this._userAccessLoggingSettingsArn = value;
    }
    public resetUserAccessLoggingSettingsArn() {
        this._userAccessLoggingSettingsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userAccessLoggingSettingsArnInput() {
        return this._userAccessLoggingSettingsArn;
    }

    // user_settings_arn - computed: true, optional: true, required: false
    private _userSettingsArn?: string; 
    public get userSettingsArn() {
        return this.getStringAttribute('user_settings_arn');
    }
    public set userSettingsArn(value: string) {
        this._userSettingsArn = value;
    }
    public resetUserSettingsArn() {
        this._userSettingsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userSettingsArnInput() {
        return this._userSettingsArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalEncryptionContext),
            authentication_type: cdktn.stringToTerraform(this._authenticationType),
            browser_settings_arn: cdktn.stringToTerraform(this._browserSettingsArn),
            customer_managed_key: cdktn.stringToTerraform(this._customerManagedKey),
            data_protection_settings_arn: cdktn.stringToTerraform(this._dataProtectionSettingsArn),
            display_name: cdktn.stringToTerraform(this._displayName),
            instance_type: cdktn.stringToTerraform(this._instanceType),
            ip_access_settings_arn: cdktn.stringToTerraform(this._ipAccessSettingsArn),
            max_concurrent_sessions: cdktn.numberToTerraform(this._maxConcurrentSessions),
            network_settings_arn: cdktn.stringToTerraform(this._networkSettingsArn),
            portal_custom_domain: cdktn.stringToTerraform(this._portalCustomDomain),
            session_logger_arn: cdktn.stringToTerraform(this._sessionLoggerArn),
            tags: cdktn.listMapper(ccPortalTagPropertyToTerraform, false)(this._tags.internalValue),
            trust_store_arn: cdktn.stringToTerraform(this._trustStoreArn),
            user_access_logging_settings_arn: cdktn.stringToTerraform(this._userAccessLoggingSettingsArn),
            user_settings_arn: cdktn.stringToTerraform(this._userSettingsArn),
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
            authentication_type: {
                value: cdktn.stringToHclTerraform(this._authenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            browser_settings_arn: {
                value: cdktn.stringToHclTerraform(this._browserSettingsArn),
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
            data_protection_settings_arn: {
                value: cdktn.stringToHclTerraform(this._dataProtectionSettingsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktn.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_access_settings_arn: {
                value: cdktn.stringToHclTerraform(this._ipAccessSettingsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_concurrent_sessions: {
                value: cdktn.numberToHclTerraform(this._maxConcurrentSessions),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            network_settings_arn: {
                value: cdktn.stringToHclTerraform(this._networkSettingsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_custom_domain: {
                value: cdktn.stringToHclTerraform(this._portalCustomDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_logger_arn: {
                value: cdktn.stringToHclTerraform(this._sessionLoggerArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPortalTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPortal.TagPropertyList",
            },
            trust_store_arn: {
                value: cdktn.stringToHclTerraform(this._trustStoreArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_access_logging_settings_arn: {
                value: cdktn.stringToHclTerraform(this._userAccessLoggingSettingsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_settings_arn: {
                value: cdktn.stringToHclTerraform(this._userSettingsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPortalTagPropertyToTerraform(struct?: CcPortal.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPortalTagPropertyToHclTerraform(struct?: CcPortal.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPortal {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#key CcPortal#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesweb_portal#value CcPortal#value}
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
