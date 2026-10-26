// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAppAuthorizationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#app CcAppAuthorization#app}
    */
    readonly app: string;
    /**
    * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#app_bundle_identifier CcAppAuthorization#app_bundle_identifier}
    */
    readonly appBundleIdentifier: string;
    /**
    * The authorization type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#auth_type CcAppAuthorization#auth_type}
    */
    readonly authType: string;
    /**
    * Contains credentials for the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#credential CcAppAuthorization#credential}
    */
    readonly credential?: CcAppAuthorization.CredentialProperty;
    /**
    * Tags to apply to the app authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tags CcAppAuthorization#tags}
    */
    readonly tags?: CcAppAuthorization.TagsProperty[] | cdktn.IResolvable;
    /**
    * Contains information about an application tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant CcAppAuthorization#tenant}
    */
    readonly tenant: CcAppAuthorization.TenantProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization awscc_appfabric_app_authorization}
*/
export class CcAppAuthorization extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appfabric_app_authorization";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAppAuthorization resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAppAuthorization to import
    * @param importFromId The id of the existing CcAppAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAppAuthorization to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appfabric_app_authorization", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization awscc_appfabric_app_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAppAuthorizationProps
    */
    public constructor(scope: Construct, id: string, config: CcAppAuthorizationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appfabric_app_authorization',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._app = config.app;
        this._appBundleIdentifier = config.appBundleIdentifier;
        this._authType = config.authType;
        this._credential.internalValue = config.credential;
        this._tags.internalValue = config.tags;
        this._tenant.internalValue = config.tenant;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app - computed: false, optional: false, required: true
    private _app?: string; 
    public get app() {
        return this.getStringAttribute('app');
    }
    public set app(value: string) {
        this._app = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appInput() {
        return this._app;
    }

    // app_authorization_arn - computed: true, optional: false, required: false
    public get appAuthorizationArn() {
        return this.getStringAttribute('app_authorization_arn');
    }

    // app_authorization_identifier - computed: true, optional: false, required: false
    public get appAuthorizationIdentifier() {
        return this.getStringAttribute('app_authorization_identifier');
    }

    // app_bundle_arn - computed: true, optional: false, required: false
    public get appBundleArn() {
        return this.getStringAttribute('app_bundle_arn');
    }

    // app_bundle_identifier - computed: false, optional: false, required: true
    private _appBundleIdentifier?: string; 
    public get appBundleIdentifier() {
        return this.getStringAttribute('app_bundle_identifier');
    }
    public set appBundleIdentifier(value: string) {
        this._appBundleIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appBundleIdentifierInput() {
        return this._appBundleIdentifier;
    }

    // auth_type - computed: false, optional: false, required: true
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // credential - computed: true, optional: true, required: false
    private _credential = new CcAppAuthorization.CredentialPropertyOutputReference(this, "credential");
    public get credential() {
        return this._credential;
    }
    public putCredential(value: CcAppAuthorization.CredentialProperty) {
        this._credential.internalValue = value;
    }
    public resetCredential() {
        this._credential.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialInput() {
        return this._credential.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // persona - computed: true, optional: false, required: false
    public get persona() {
        return this.getStringAttribute('persona');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAppAuthorization.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAppAuthorization.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tenant - computed: false, optional: false, required: true
    private _tenant = new CcAppAuthorization.TenantPropertyOutputReference(this, "tenant");
    public get tenant() {
        return this._tenant;
    }
    public putTenant(value: CcAppAuthorization.TenantProperty) {
        this._tenant.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantInput() {
        return this._tenant.internalValue;
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
            app: cdktn.stringToTerraform(this._app),
            app_bundle_identifier: cdktn.stringToTerraform(this._appBundleIdentifier),
            auth_type: cdktn.stringToTerraform(this._authType),
            credential: ccAppAuthorizationCredentialPropertyToTerraform(this._credential.internalValue),
            tags: cdktn.listMapper(ccAppAuthorizationTagsPropertyToTerraform, false)(this._tags.internalValue),
            tenant: ccAppAuthorizationTenantPropertyToTerraform(this._tenant.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app: {
                value: cdktn.stringToHclTerraform(this._app),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            app_bundle_identifier: {
                value: cdktn.stringToHclTerraform(this._appBundleIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auth_type: {
                value: cdktn.stringToHclTerraform(this._authType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            credential: {
                value: ccAppAuthorizationCredentialPropertyToHclTerraform(this._credential.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppAuthorization.CredentialProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAppAuthorizationTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAppAuthorization.TagsPropertyList",
            },
            tenant: {
                value: ccAppAuthorizationTenantPropertyToHclTerraform(this._tenant.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAppAuthorization.TenantProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAppAuthorizationApiKeyCredentialPropertyToTerraform(struct?: CcAppAuthorization.ApiKeyCredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: cdktn.stringToTerraform(struct!.apiKey),
    }
}


export function ccAppAuthorizationApiKeyCredentialPropertyToHclTerraform(struct?: CcAppAuthorization.ApiKeyCredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key: {
            value: cdktn.stringToHclTerraform(struct!.apiKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppAuthorizationOauth2CredentialPropertyToTerraform(struct?: CcAppAuthorization.Oauth2CredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    }
}


export function ccAppAuthorizationOauth2CredentialPropertyToHclTerraform(struct?: CcAppAuthorization.Oauth2CredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktn.stringToHclTerraform(struct!.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppAuthorizationCredentialPropertyToTerraform(struct?: CcAppAuthorization.CredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_credential: ccAppAuthorizationApiKeyCredentialPropertyToTerraform(struct!.apiKeyCredential),
        oauth_2_credential: ccAppAuthorizationOauth2CredentialPropertyToTerraform(struct!.oauth2Credential),
    }
}


export function ccAppAuthorizationCredentialPropertyToHclTerraform(struct?: CcAppAuthorization.CredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_credential: {
            value: ccAppAuthorizationApiKeyCredentialPropertyToHclTerraform(struct!.apiKeyCredential),
            isBlock: true,
            type: "struct",
            storageClassType: "ApiKeyCredentialProperty",
        },
        oauth_2_credential: {
            value: ccAppAuthorizationOauth2CredentialPropertyToHclTerraform(struct!.oauth2Credential),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2CredentialProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppAuthorizationTagsPropertyToTerraform(struct?: CcAppAuthorization.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppAuthorizationTagsPropertyToHclTerraform(struct?: CcAppAuthorization.TagsProperty | cdktn.IResolvable): any {
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


export function ccAppAuthorizationTenantPropertyToTerraform(struct?: CcAppAuthorization.TenantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tenant_display_name: cdktn.stringToTerraform(struct!.tenantDisplayName),
        tenant_identifier: cdktn.stringToTerraform(struct!.tenantIdentifier),
    }
}


export function ccAppAuthorizationTenantPropertyToHclTerraform(struct?: CcAppAuthorization.TenantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tenant_display_name: {
            value: cdktn.stringToHclTerraform(struct!.tenantDisplayName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenant_identifier: {
            value: cdktn.stringToHclTerraform(struct!.tenantIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAppAuthorization {
export interface ApiKeyCredentialProperty {
    /**
    * An API key for an application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#api_key CcAppAuthorization#api_key}
    */
    readonly apiKey?: string;
}
export class ApiKeyCredentialPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiKeyCredentialProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiKeyCredentialProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey = value.apiKey;
        }
    }

    // api_key - computed: true, optional: true, required: false
    private _apiKey?: string; 
    public get apiKey() {
        return this.getStringAttribute('api_key');
    }
    public set apiKey(value: string) {
        this._apiKey = value;
    }
    public resetApiKey() {
        this._apiKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
        return this._apiKey;
    }
}
export interface Oauth2CredentialProperty {
    /**
    * The client ID of the client application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#client_id CcAppAuthorization#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret of the client application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#client_secret CcAppAuthorization#client_secret}
    */
    readonly clientSecret?: string;
}
export class Oauth2CredentialPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2CredentialProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2CredentialProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
        }
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret?: string; 
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
        this._clientSecret = value;
    }
    public resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret;
    }
}
export interface CredentialProperty {
    /**
    * Contains API key credential information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#api_key_credential CcAppAuthorization#api_key_credential}
    */
    readonly apiKeyCredential?: ApiKeyCredentialProperty;
    /**
    * Contains OAuth2 client credential information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#oauth_2_credential CcAppAuthorization#oauth_2_credential}
    */
    readonly oauth2Credential?: Oauth2CredentialProperty;
}
export class CredentialPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyCredential?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyCredential = this._apiKeyCredential?.internalValue;
        }
        if (this._oauth2Credential?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oauth2Credential = this._oauth2Credential?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyCredential.internalValue = undefined;
            this._oauth2Credential.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKeyCredential.internalValue = value.apiKeyCredential;
            this._oauth2Credential.internalValue = value.oauth2Credential;
        }
    }

    // api_key_credential - computed: true, optional: true, required: false
    private _apiKeyCredential = new ApiKeyCredentialPropertyOutputReference(this, "api_key_credential");
    public get apiKeyCredential() {
        return this._apiKeyCredential;
    }
    public putApiKeyCredential(value: ApiKeyCredentialProperty) {
        this._apiKeyCredential.internalValue = value;
    }
    public resetApiKeyCredential() {
        this._apiKeyCredential.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyCredentialInput() {
        return this._apiKeyCredential.internalValue;
    }

    // oauth_2_credential - computed: true, optional: true, required: false
    private _oauth2Credential = new Oauth2CredentialPropertyOutputReference(this, "oauth_2_credential");
    public get oauth2Credential() {
        return this._oauth2Credential;
    }
    public putOauth2Credential(value: Oauth2CredentialProperty) {
        this._oauth2Credential.internalValue = value;
    }
    public resetOauth2Credential() {
        this._oauth2Credential.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauth2CredentialInput() {
        return this._oauth2Credential.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#key CcAppAuthorization#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#value CcAppAuthorization#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TenantProperty {
    /**
    * The display name of the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant_display_name CcAppAuthorization#tenant_display_name}
    */
    readonly tenantDisplayName: string;
    /**
    * The ID of the application tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant_identifier CcAppAuthorization#tenant_identifier}
    */
    readonly tenantIdentifier: string;
}
export class TenantPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TenantProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tenantDisplayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantDisplayName = this._tenantDisplayName;
        }
        if (this._tenantIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantIdentifier = this._tenantIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TenantProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tenantDisplayName = undefined;
            this._tenantIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tenantDisplayName = value.tenantDisplayName;
            this._tenantIdentifier = value.tenantIdentifier;
        }
    }

    // tenant_display_name - computed: false, optional: false, required: true
    private _tenantDisplayName?: string; 
    public get tenantDisplayName() {
        return this.getStringAttribute('tenant_display_name');
    }
    public set tenantDisplayName(value: string) {
        this._tenantDisplayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantDisplayNameInput() {
        return this._tenantDisplayName;
    }

    // tenant_identifier - computed: false, optional: false, required: true
    private _tenantIdentifier?: string; 
    public get tenantIdentifier() {
        return this.getStringAttribute('tenant_identifier');
    }
    public set tenantIdentifier(value: string) {
        this._tenantIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdentifierInput() {
        return this._tenantIdentifier;
    }
}
}
