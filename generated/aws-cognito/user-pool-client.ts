// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolClientProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token_validity CcUserPoolClient#access_token_validity}
    */
    readonly accessTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows CcUserPoolClient#allowed_o_auth_flows}
    */
    readonly allowedOAuthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_flows_user_pool_client CcUserPoolClient#allowed_o_auth_flows_user_pool_client}
    */
    readonly allowedOAuthFlowsUserPoolClient?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#allowed_o_auth_scopes CcUserPoolClient#allowed_o_auth_scopes}
    */
    readonly allowedOAuthScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#analytics_configuration CcUserPoolClient#analytics_configuration}
    */
    readonly analyticsConfiguration?: CcUserPoolClient.AnalyticsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#auth_session_validity CcUserPoolClient#auth_session_validity}
    */
    readonly authSessionValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#callback_ur_ls CcUserPoolClient#callback_ur_ls}
    */
    readonly callbackUrLs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#client_name CcUserPoolClient#client_name}
    */
    readonly clientName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#default_redirect_uri CcUserPoolClient#default_redirect_uri}
    */
    readonly defaultRedirectUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CcUserPoolClient#enable_propagate_additional_user_context_data}
    */
    readonly enablePropagateAdditionalUserContextData?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#enable_token_revocation CcUserPoolClient#enable_token_revocation}
    */
    readonly enableTokenRevocation?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CcUserPoolClient#explicit_auth_flows}
    */
    readonly explicitAuthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#generate_secret CcUserPoolClient#generate_secret}
    */
    readonly generateSecret?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token_validity CcUserPoolClient#id_token_validity}
    */
    readonly idTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#logout_ur_ls CcUserPoolClient#logout_ur_ls}
    */
    readonly logoutUrLs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CcUserPoolClient#prevent_user_existence_errors}
    */
    readonly preventUserExistenceErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#read_attributes CcUserPoolClient#read_attributes}
    */
    readonly readAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_rotation CcUserPoolClient#refresh_token_rotation}
    */
    readonly refreshTokenRotation?: CcUserPoolClient.RefreshTokenRotationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token_validity CcUserPoolClient#refresh_token_validity}
    */
    readonly refreshTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#supported_identity_providers CcUserPoolClient#supported_identity_providers}
    */
    readonly supportedIdentityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#token_validity_units CcUserPoolClient#token_validity_units}
    */
    readonly tokenValidityUnits?: CcUserPoolClient.TokenValidityUnitsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_pool_id CcUserPoolClient#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#write_attributes CcUserPoolClient#write_attributes}
    */
    readonly writeAttributes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client awscc_cognito_user_pool_client}
*/
export class CcUserPoolClient extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_client";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolClient resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolClient to import
    * @param importFromId The id of the existing CcUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolClient to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_client", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client awscc_cognito_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolClientProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolClientProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_client',
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
        this._accessTokenValidity = config.accessTokenValidity;
        this._allowedOAuthFlows = config.allowedOAuthFlows;
        this._allowedOAuthFlowsUserPoolClient = config.allowedOAuthFlowsUserPoolClient;
        this._allowedOAuthScopes = config.allowedOAuthScopes;
        this._analyticsConfiguration.internalValue = config.analyticsConfiguration;
        this._authSessionValidity = config.authSessionValidity;
        this._callbackUrLs = config.callbackUrLs;
        this._clientName = config.clientName;
        this._defaultRedirectUri = config.defaultRedirectUri;
        this._enablePropagateAdditionalUserContextData = config.enablePropagateAdditionalUserContextData;
        this._enableTokenRevocation = config.enableTokenRevocation;
        this._explicitAuthFlows = config.explicitAuthFlows;
        this._generateSecret = config.generateSecret;
        this._idTokenValidity = config.idTokenValidity;
        this._logoutUrLs = config.logoutUrLs;
        this._preventUserExistenceErrors = config.preventUserExistenceErrors;
        this._readAttributes = config.readAttributes;
        this._refreshTokenRotation.internalValue = config.refreshTokenRotation;
        this._refreshTokenValidity = config.refreshTokenValidity;
        this._supportedIdentityProviders = config.supportedIdentityProviders;
        this._tokenValidityUnits.internalValue = config.tokenValidityUnits;
        this._userPoolId = config.userPoolId;
        this._writeAttributes = config.writeAttributes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_token_validity - computed: true, optional: true, required: false
    private _accessTokenValidity?: number; 
    public get accessTokenValidity() {
        return this.getNumberAttribute('access_token_validity');
    }
    public set accessTokenValidity(value: number) {
        this._accessTokenValidity = value;
    }
    public resetAccessTokenValidity() {
        this._accessTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenValidityInput() {
        return this._accessTokenValidity;
    }

    // allowed_o_auth_flows - computed: true, optional: true, required: false
    private _allowedOAuthFlows?: string[]; 
    public get allowedOAuthFlows() {
        return this.getListAttribute('allowed_o_auth_flows');
    }
    public set allowedOAuthFlows(value: string[]) {
        this._allowedOAuthFlows = value;
    }
    public resetAllowedOAuthFlows() {
        this._allowedOAuthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOAuthFlowsInput() {
        return this._allowedOAuthFlows;
    }

    // allowed_o_auth_flows_user_pool_client - computed: true, optional: true, required: false
    private _allowedOAuthFlowsUserPoolClient?: boolean | cdktn.IResolvable; 
    public get allowedOAuthFlowsUserPoolClient() {
        return this.getBooleanAttribute('allowed_o_auth_flows_user_pool_client');
    }
    public set allowedOAuthFlowsUserPoolClient(value: boolean | cdktn.IResolvable) {
        this._allowedOAuthFlowsUserPoolClient = value;
    }
    public resetAllowedOAuthFlowsUserPoolClient() {
        this._allowedOAuthFlowsUserPoolClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOAuthFlowsUserPoolClientInput() {
        return this._allowedOAuthFlowsUserPoolClient;
    }

    // allowed_o_auth_scopes - computed: true, optional: true, required: false
    private _allowedOAuthScopes?: string[]; 
    public get allowedOAuthScopes() {
        return this.getListAttribute('allowed_o_auth_scopes');
    }
    public set allowedOAuthScopes(value: string[]) {
        this._allowedOAuthScopes = value;
    }
    public resetAllowedOAuthScopes() {
        this._allowedOAuthScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOAuthScopesInput() {
        return this._allowedOAuthScopes;
    }

    // analytics_configuration - computed: true, optional: true, required: false
    private _analyticsConfiguration = new CcUserPoolClient.AnalyticsConfigurationPropertyOutputReference(this, "analytics_configuration");
    public get analyticsConfiguration() {
        return this._analyticsConfiguration;
    }
    public putAnalyticsConfiguration(value: CcUserPoolClient.AnalyticsConfigurationProperty) {
        this._analyticsConfiguration.internalValue = value;
    }
    public resetAnalyticsConfiguration() {
        this._analyticsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyticsConfigurationInput() {
        return this._analyticsConfiguration.internalValue;
    }

    // auth_session_validity - computed: true, optional: true, required: false
    private _authSessionValidity?: number; 
    public get authSessionValidity() {
        return this.getNumberAttribute('auth_session_validity');
    }
    public set authSessionValidity(value: number) {
        this._authSessionValidity = value;
    }
    public resetAuthSessionValidity() {
        this._authSessionValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authSessionValidityInput() {
        return this._authSessionValidity;
    }

    // callback_ur_ls - computed: true, optional: true, required: false
    private _callbackUrLs?: string[]; 
    public get callbackUrLs() {
        return this.getListAttribute('callback_ur_ls');
    }
    public set callbackUrLs(value: string[]) {
        this._callbackUrLs = value;
    }
    public resetCallbackUrLs() {
        this._callbackUrLs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get callbackUrLsInput() {
        return this._callbackUrLs;
    }

    // client_id - computed: true, optional: false, required: false
    public get clientId() {
        return this.getStringAttribute('client_id');
    }

    // client_name - computed: true, optional: true, required: false
    private _clientName?: string; 
    public get clientName() {
        return this.getStringAttribute('client_name');
    }
    public set clientName(value: string) {
        this._clientName = value;
    }
    public resetClientName() {
        this._clientName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientNameInput() {
        return this._clientName;
    }

    // client_secret - computed: true, optional: false, required: false
    public get clientSecret() {
        return this.getStringAttribute('client_secret');
    }

    // default_redirect_uri - computed: true, optional: true, required: false
    private _defaultRedirectUri?: string; 
    public get defaultRedirectUri() {
        return this.getStringAttribute('default_redirect_uri');
    }
    public set defaultRedirectUri(value: string) {
        this._defaultRedirectUri = value;
    }
    public resetDefaultRedirectUri() {
        this._defaultRedirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRedirectUriInput() {
        return this._defaultRedirectUri;
    }

    // enable_propagate_additional_user_context_data - computed: true, optional: true, required: false
    private _enablePropagateAdditionalUserContextData?: boolean | cdktn.IResolvable; 
    public get enablePropagateAdditionalUserContextData() {
        return this.getBooleanAttribute('enable_propagate_additional_user_context_data');
    }
    public set enablePropagateAdditionalUserContextData(value: boolean | cdktn.IResolvable) {
        this._enablePropagateAdditionalUserContextData = value;
    }
    public resetEnablePropagateAdditionalUserContextData() {
        this._enablePropagateAdditionalUserContextData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePropagateAdditionalUserContextDataInput() {
        return this._enablePropagateAdditionalUserContextData;
    }

    // enable_token_revocation - computed: true, optional: true, required: false
    private _enableTokenRevocation?: boolean | cdktn.IResolvable; 
    public get enableTokenRevocation() {
        return this.getBooleanAttribute('enable_token_revocation');
    }
    public set enableTokenRevocation(value: boolean | cdktn.IResolvable) {
        this._enableTokenRevocation = value;
    }
    public resetEnableTokenRevocation() {
        this._enableTokenRevocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTokenRevocationInput() {
        return this._enableTokenRevocation;
    }

    // explicit_auth_flows - computed: true, optional: true, required: false
    private _explicitAuthFlows?: string[]; 
    public get explicitAuthFlows() {
        return this.getListAttribute('explicit_auth_flows');
    }
    public set explicitAuthFlows(value: string[]) {
        this._explicitAuthFlows = value;
    }
    public resetExplicitAuthFlows() {
        this._explicitAuthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explicitAuthFlowsInput() {
        return this._explicitAuthFlows;
    }

    // generate_secret - computed: true, optional: true, required: false
    private _generateSecret?: boolean | cdktn.IResolvable; 
    public get generateSecret() {
        return this.getBooleanAttribute('generate_secret');
    }
    public set generateSecret(value: boolean | cdktn.IResolvable) {
        this._generateSecret = value;
    }
    public resetGenerateSecret() {
        this._generateSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generateSecretInput() {
        return this._generateSecret;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // id_token_validity - computed: true, optional: true, required: false
    private _idTokenValidity?: number; 
    public get idTokenValidity() {
        return this.getNumberAttribute('id_token_validity');
    }
    public set idTokenValidity(value: number) {
        this._idTokenValidity = value;
    }
    public resetIdTokenValidity() {
        this._idTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idTokenValidityInput() {
        return this._idTokenValidity;
    }

    // logout_ur_ls - computed: true, optional: true, required: false
    private _logoutUrLs?: string[]; 
    public get logoutUrLs() {
        return this.getListAttribute('logout_ur_ls');
    }
    public set logoutUrLs(value: string[]) {
        this._logoutUrLs = value;
    }
    public resetLogoutUrLs() {
        this._logoutUrLs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logoutUrLsInput() {
        return this._logoutUrLs;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // prevent_user_existence_errors - computed: true, optional: true, required: false
    private _preventUserExistenceErrors?: string; 
    public get preventUserExistenceErrors() {
        return this.getStringAttribute('prevent_user_existence_errors');
    }
    public set preventUserExistenceErrors(value: string) {
        this._preventUserExistenceErrors = value;
    }
    public resetPreventUserExistenceErrors() {
        this._preventUserExistenceErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preventUserExistenceErrorsInput() {
        return this._preventUserExistenceErrors;
    }

    // read_attributes - computed: true, optional: true, required: false
    private _readAttributes?: string[]; 
    public get readAttributes() {
        return this.getListAttribute('read_attributes');
    }
    public set readAttributes(value: string[]) {
        this._readAttributes = value;
    }
    public resetReadAttributes() {
        this._readAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readAttributesInput() {
        return this._readAttributes;
    }

    // refresh_token_rotation - computed: true, optional: true, required: false
    private _refreshTokenRotation = new CcUserPoolClient.RefreshTokenRotationPropertyOutputReference(this, "refresh_token_rotation");
    public get refreshTokenRotation() {
        return this._refreshTokenRotation;
    }
    public putRefreshTokenRotation(value: CcUserPoolClient.RefreshTokenRotationProperty) {
        this._refreshTokenRotation.internalValue = value;
    }
    public resetRefreshTokenRotation() {
        this._refreshTokenRotation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshTokenRotationInput() {
        return this._refreshTokenRotation.internalValue;
    }

    // refresh_token_validity - computed: true, optional: true, required: false
    private _refreshTokenValidity?: number; 
    public get refreshTokenValidity() {
        return this.getNumberAttribute('refresh_token_validity');
    }
    public set refreshTokenValidity(value: number) {
        this._refreshTokenValidity = value;
    }
    public resetRefreshTokenValidity() {
        this._refreshTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshTokenValidityInput() {
        return this._refreshTokenValidity;
    }

    // supported_identity_providers - computed: true, optional: true, required: false
    private _supportedIdentityProviders?: string[]; 
    public get supportedIdentityProviders() {
        return this.getListAttribute('supported_identity_providers');
    }
    public set supportedIdentityProviders(value: string[]) {
        this._supportedIdentityProviders = value;
    }
    public resetSupportedIdentityProviders() {
        this._supportedIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedIdentityProvidersInput() {
        return this._supportedIdentityProviders;
    }

    // token_validity_units - computed: true, optional: true, required: false
    private _tokenValidityUnits = new CcUserPoolClient.TokenValidityUnitsPropertyOutputReference(this, "token_validity_units");
    public get tokenValidityUnits() {
        return this._tokenValidityUnits;
    }
    public putTokenValidityUnits(value: CcUserPoolClient.TokenValidityUnitsProperty) {
        this._tokenValidityUnits.internalValue = value;
    }
    public resetTokenValidityUnits() {
        this._tokenValidityUnits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenValidityUnitsInput() {
        return this._tokenValidityUnits.internalValue;
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // write_attributes - computed: true, optional: true, required: false
    private _writeAttributes?: string[]; 
    public get writeAttributes() {
        return this.getListAttribute('write_attributes');
    }
    public set writeAttributes(value: string[]) {
        this._writeAttributes = value;
    }
    public resetWriteAttributes() {
        this._writeAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeAttributesInput() {
        return this._writeAttributes;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_token_validity: cdktn.numberToTerraform(this._accessTokenValidity),
            allowed_o_auth_flows: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedOAuthFlows),
            allowed_o_auth_flows_user_pool_client: cdktn.booleanToTerraform(this._allowedOAuthFlowsUserPoolClient),
            allowed_o_auth_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedOAuthScopes),
            analytics_configuration: ccUserPoolClientAnalyticsConfigurationPropertyToTerraform(this._analyticsConfiguration.internalValue),
            auth_session_validity: cdktn.numberToTerraform(this._authSessionValidity),
            callback_ur_ls: cdktn.listMapper(cdktn.stringToTerraform, false)(this._callbackUrLs),
            client_name: cdktn.stringToTerraform(this._clientName),
            default_redirect_uri: cdktn.stringToTerraform(this._defaultRedirectUri),
            enable_propagate_additional_user_context_data: cdktn.booleanToTerraform(this._enablePropagateAdditionalUserContextData),
            enable_token_revocation: cdktn.booleanToTerraform(this._enableTokenRevocation),
            explicit_auth_flows: cdktn.listMapper(cdktn.stringToTerraform, false)(this._explicitAuthFlows),
            generate_secret: cdktn.booleanToTerraform(this._generateSecret),
            id_token_validity: cdktn.numberToTerraform(this._idTokenValidity),
            logout_ur_ls: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logoutUrLs),
            prevent_user_existence_errors: cdktn.stringToTerraform(this._preventUserExistenceErrors),
            read_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._readAttributes),
            refresh_token_rotation: ccUserPoolClientRefreshTokenRotationPropertyToTerraform(this._refreshTokenRotation.internalValue),
            refresh_token_validity: cdktn.numberToTerraform(this._refreshTokenValidity),
            supported_identity_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._supportedIdentityProviders),
            token_validity_units: ccUserPoolClientTokenValidityUnitsPropertyToTerraform(this._tokenValidityUnits.internalValue),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
            write_attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._writeAttributes),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_token_validity: {
                value: cdktn.numberToHclTerraform(this._accessTokenValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_o_auth_flows: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedOAuthFlows),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_o_auth_flows_user_pool_client: {
                value: cdktn.booleanToHclTerraform(this._allowedOAuthFlowsUserPoolClient),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_o_auth_scopes: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedOAuthScopes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            analytics_configuration: {
                value: ccUserPoolClientAnalyticsConfigurationPropertyToHclTerraform(this._analyticsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolClient.AnalyticsConfigurationProperty",
            },
            auth_session_validity: {
                value: cdktn.numberToHclTerraform(this._authSessionValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            callback_ur_ls: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._callbackUrLs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            client_name: {
                value: cdktn.stringToHclTerraform(this._clientName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_redirect_uri: {
                value: cdktn.stringToHclTerraform(this._defaultRedirectUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_propagate_additional_user_context_data: {
                value: cdktn.booleanToHclTerraform(this._enablePropagateAdditionalUserContextData),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_token_revocation: {
                value: cdktn.booleanToHclTerraform(this._enableTokenRevocation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            explicit_auth_flows: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._explicitAuthFlows),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            generate_secret: {
                value: cdktn.booleanToHclTerraform(this._generateSecret),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id_token_validity: {
                value: cdktn.numberToHclTerraform(this._idTokenValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            logout_ur_ls: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logoutUrLs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            prevent_user_existence_errors: {
                value: cdktn.stringToHclTerraform(this._preventUserExistenceErrors),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            read_attributes: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._readAttributes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            refresh_token_rotation: {
                value: ccUserPoolClientRefreshTokenRotationPropertyToHclTerraform(this._refreshTokenRotation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolClient.RefreshTokenRotationProperty",
            },
            refresh_token_validity: {
                value: cdktn.numberToHclTerraform(this._refreshTokenValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            supported_identity_providers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._supportedIdentityProviders),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            token_validity_units: {
                value: ccUserPoolClientTokenValidityUnitsPropertyToHclTerraform(this._tokenValidityUnits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolClient.TokenValidityUnitsProperty",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            write_attributes: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._writeAttributes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserPoolClientAnalyticsConfigurationPropertyToTerraform(struct?: CcUserPoolClient.AnalyticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_arn: cdktn.stringToTerraform(struct!.applicationArn),
        application_id: cdktn.stringToTerraform(struct!.applicationId),
        external_id: cdktn.stringToTerraform(struct!.externalId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        user_data_shared: cdktn.booleanToTerraform(struct!.userDataShared),
    }
}


export function ccUserPoolClientAnalyticsConfigurationPropertyToHclTerraform(struct?: CcUserPoolClient.AnalyticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_arn: {
            value: cdktn.stringToHclTerraform(struct!.applicationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        application_id: {
            value: cdktn.stringToHclTerraform(struct!.applicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_id: {
            value: cdktn.stringToHclTerraform(struct!.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_data_shared: {
            value: cdktn.booleanToHclTerraform(struct!.userDataShared),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolClientRefreshTokenRotationPropertyToTerraform(struct?: CcUserPoolClient.RefreshTokenRotationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        feature: cdktn.stringToTerraform(struct!.feature),
        retry_grace_period_seconds: cdktn.numberToTerraform(struct!.retryGracePeriodSeconds),
    }
}


export function ccUserPoolClientRefreshTokenRotationPropertyToHclTerraform(struct?: CcUserPoolClient.RefreshTokenRotationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        feature: {
            value: cdktn.stringToHclTerraform(struct!.feature),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retry_grace_period_seconds: {
            value: cdktn.numberToHclTerraform(struct!.retryGracePeriodSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolClientTokenValidityUnitsPropertyToTerraform(struct?: CcUserPoolClient.TokenValidityUnitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        id_token: cdktn.stringToTerraform(struct!.idToken),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    }
}


export function ccUserPoolClientTokenValidityUnitsPropertyToHclTerraform(struct?: CcUserPoolClient.TokenValidityUnitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_token: {
            value: cdktn.stringToHclTerraform(struct!.accessToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id_token: {
            value: cdktn.stringToHclTerraform(struct!.idToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh_token: {
            value: cdktn.stringToHclTerraform(struct!.refreshToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserPoolClient {
export interface AnalyticsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_arn CcUserPoolClient#application_arn}
    */
    readonly applicationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#application_id CcUserPoolClient#application_id}
    */
    readonly applicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#external_id CcUserPoolClient#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#role_arn CcUserPoolClient#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#user_data_shared CcUserPoolClient#user_data_shared}
    */
    readonly userDataShared?: boolean | cdktn.IResolvable;
}
export class AnalyticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalyticsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationArn = this._applicationArn;
        }
        if (this._applicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationId = this._applicationId;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._userDataShared !== undefined) {
            hasAnyValues = true;
            internalValueResult.userDataShared = this._userDataShared;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalyticsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationArn = undefined;
            this._applicationId = undefined;
            this._externalId = undefined;
            this._roleArn = undefined;
            this._userDataShared = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationArn = value.applicationArn;
            this._applicationId = value.applicationId;
            this._externalId = value.externalId;
            this._roleArn = value.roleArn;
            this._userDataShared = value.userDataShared;
        }
    }

    // application_arn - computed: true, optional: true, required: false
    private _applicationArn?: string; 
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    public set applicationArn(value: string) {
        this._applicationArn = value;
    }
    public resetApplicationArn() {
        this._applicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationArnInput() {
        return this._applicationArn;
    }

    // application_id - computed: true, optional: true, required: false
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    public resetApplicationId() {
        this._applicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // external_id - computed: true, optional: true, required: false
    private _externalId?: string; 
    public get externalId() {
        return this.getStringAttribute('external_id');
    }
    public set externalId(value: string) {
        this._externalId = value;
    }
    public resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIdInput() {
        return this._externalId;
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

    // user_data_shared - computed: true, optional: true, required: false
    private _userDataShared?: boolean | cdktn.IResolvable; 
    public get userDataShared() {
        return this.getBooleanAttribute('user_data_shared');
    }
    public set userDataShared(value: boolean | cdktn.IResolvable) {
        this._userDataShared = value;
    }
    public resetUserDataShared() {
        this._userDataShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataSharedInput() {
        return this._userDataShared;
    }
}
export interface RefreshTokenRotationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#feature CcUserPoolClient#feature}
    */
    readonly feature?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CcUserPoolClient#retry_grace_period_seconds}
    */
    readonly retryGracePeriodSeconds?: number;
}
export class RefreshTokenRotationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RefreshTokenRotationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._feature !== undefined) {
            hasAnyValues = true;
            internalValueResult.feature = this._feature;
        }
        if (this._retryGracePeriodSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryGracePeriodSeconds = this._retryGracePeriodSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RefreshTokenRotationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._feature = undefined;
            this._retryGracePeriodSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._feature = value.feature;
            this._retryGracePeriodSeconds = value.retryGracePeriodSeconds;
        }
    }

    // feature - computed: true, optional: true, required: false
    private _feature?: string; 
    public get feature() {
        return this.getStringAttribute('feature');
    }
    public set feature(value: string) {
        this._feature = value;
    }
    public resetFeature() {
        this._feature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featureInput() {
        return this._feature;
    }

    // retry_grace_period_seconds - computed: true, optional: true, required: false
    private _retryGracePeriodSeconds?: number; 
    public get retryGracePeriodSeconds() {
        return this.getNumberAttribute('retry_grace_period_seconds');
    }
    public set retryGracePeriodSeconds(value: number) {
        this._retryGracePeriodSeconds = value;
    }
    public resetRetryGracePeriodSeconds() {
        this._retryGracePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryGracePeriodSecondsInput() {
        return this._retryGracePeriodSeconds;
    }
}
export interface TokenValidityUnitsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#access_token CcUserPoolClient#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#id_token CcUserPoolClient#id_token}
    */
    readonly idToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_client#refresh_token CcUserPoolClient#refresh_token}
    */
    readonly refreshToken?: string;
}
export class TokenValidityUnitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TokenValidityUnitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._idToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.idToken = this._idToken;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TokenValidityUnitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._idToken = undefined;
            this._refreshToken = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._idToken = value.idToken;
            this._refreshToken = value.refreshToken;
        }
    }

    // access_token - computed: true, optional: true, required: false
    private _accessToken?: string; 
    public get accessToken() {
        return this.getStringAttribute('access_token');
    }
    public set accessToken(value: string) {
        this._accessToken = value;
    }
    public resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenInput() {
        return this._accessToken;
    }

    // id_token - computed: true, optional: true, required: false
    private _idToken?: string; 
    public get idToken() {
        return this.getStringAttribute('id_token');
    }
    public set idToken(value: string) {
        this._idToken = value;
    }
    public resetIdToken() {
        this._idToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idTokenInput() {
        return this._idToken;
    }

    // refresh_token - computed: true, optional: true, required: false
    private _refreshToken?: string; 
    public get refreshToken() {
        return this.getStringAttribute('refresh_token');
    }
    public set refreshToken(value: string) {
        this._refreshToken = value;
    }
    public resetRefreshToken() {
        this._refreshToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshTokenInput() {
        return this._refreshToken;
    }
}
}
