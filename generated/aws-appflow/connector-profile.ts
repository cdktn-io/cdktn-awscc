// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectorProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connection_mode CcConnectorProfile#connection_mode}
    */
    readonly connectionMode: string;
    /**
    * The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_label CcConnectorProfile#connector_label}
    */
    readonly connectorLabel?: string;
    /**
    * Connector specific configurations needed to create connector profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_profile_config CcConnectorProfile#connector_profile_config}
    */
    readonly connectorProfileConfig?: CcConnectorProfile.ConnectorProfileConfigProperty;
    /**
    * The maximum number of items to retrieve in a single batch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_profile_name CcConnectorProfile#connector_profile_name}
    */
    readonly connectorProfileName: string;
    /**
    * List of Saas providers that need connector profile to be created
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_type CcConnectorProfile#connector_type}
    */
    readonly connectorType: string;
    /**
    * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#kms_arn CcConnectorProfile#kms_arn}
    */
    readonly kmsArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile awscc_appflow_connector_profile}
*/
export class CcConnectorProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appflow_connector_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnectorProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnectorProfile to import
    * @param importFromId The id of the existing CcConnectorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnectorProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appflow_connector_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile awscc_appflow_connector_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectorProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectorProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appflow_connector_profile',
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
        this._connectionMode = config.connectionMode;
        this._connectorLabel = config.connectorLabel;
        this._connectorProfileConfig.internalValue = config.connectorProfileConfig;
        this._connectorProfileName = config.connectorProfileName;
        this._connectorType = config.connectorType;
        this._kmsArn = config.kmsArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_mode - computed: false, optional: false, required: true
    private _connectionMode?: string; 
    public get connectionMode() {
        return this.getStringAttribute('connection_mode');
    }
    public set connectionMode(value: string) {
        this._connectionMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionModeInput() {
        return this._connectionMode;
    }

    // connector_label - computed: true, optional: true, required: false
    private _connectorLabel?: string; 
    public get connectorLabel() {
        return this.getStringAttribute('connector_label');
    }
    public set connectorLabel(value: string) {
        this._connectorLabel = value;
    }
    public resetConnectorLabel() {
        this._connectorLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorLabelInput() {
        return this._connectorLabel;
    }

    // connector_profile_arn - computed: true, optional: false, required: false
    public get connectorProfileArn() {
        return this.getStringAttribute('connector_profile_arn');
    }

    // connector_profile_config - computed: true, optional: true, required: false
    private _connectorProfileConfig = new CcConnectorProfile.ConnectorProfileConfigPropertyOutputReference(this, "connector_profile_config");
    public get connectorProfileConfig() {
        return this._connectorProfileConfig;
    }
    public putConnectorProfileConfig(value: CcConnectorProfile.ConnectorProfileConfigProperty) {
        this._connectorProfileConfig.internalValue = value;
    }
    public resetConnectorProfileConfig() {
        this._connectorProfileConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProfileConfigInput() {
        return this._connectorProfileConfig.internalValue;
    }

    // connector_profile_name - computed: false, optional: false, required: true
    private _connectorProfileName?: string; 
    public get connectorProfileName() {
        return this.getStringAttribute('connector_profile_name');
    }
    public set connectorProfileName(value: string) {
        this._connectorProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProfileNameInput() {
        return this._connectorProfileName;
    }

    // connector_type - computed: false, optional: false, required: true
    private _connectorType?: string; 
    public get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    public set connectorType(value: string) {
        this._connectorType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorTypeInput() {
        return this._connectorType;
    }

    // credentials_arn - computed: true, optional: false, required: false
    public get credentialsArn() {
        return this.getStringAttribute('credentials_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_arn - computed: true, optional: true, required: false
    private _kmsArn?: string; 
    public get kmsArn() {
        return this.getStringAttribute('kms_arn');
    }
    public set kmsArn(value: string) {
        this._kmsArn = value;
    }
    public resetKmsArn() {
        this._kmsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsArnInput() {
        return this._kmsArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connection_mode: cdktn.stringToTerraform(this._connectionMode),
            connector_label: cdktn.stringToTerraform(this._connectorLabel),
            connector_profile_config: ccConnectorProfileConnectorProfileConfigPropertyToTerraform(this._connectorProfileConfig.internalValue),
            connector_profile_name: cdktn.stringToTerraform(this._connectorProfileName),
            connector_type: cdktn.stringToTerraform(this._connectorType),
            kms_arn: cdktn.stringToTerraform(this._kmsArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_mode: {
                value: cdktn.stringToHclTerraform(this._connectionMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_label: {
                value: cdktn.stringToHclTerraform(this._connectorLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_profile_config: {
                value: ccConnectorProfileConnectorProfileConfigPropertyToHclTerraform(this._connectorProfileConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectorProfile.ConnectorProfileConfigProperty",
            },
            connector_profile_name: {
                value: cdktn.stringToHclTerraform(this._connectorProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_type: {
                value: cdktn.stringToHclTerraform(this._connectorType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_arn: {
                value: cdktn.stringToHclTerraform(this._kmsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectorProfileAmplitudeConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.AmplitudeConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: cdktn.stringToTerraform(struct!.apiKey),
        secret_key: cdktn.stringToTerraform(struct!.secretKey),
    }
}


export function ccConnectorProfileAmplitudeConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.AmplitudeConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        secret_key: {
            value: cdktn.stringToHclTerraform(struct!.secretKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileApiKeyCredentialsPropertyToTerraform(struct?: CcConnectorProfile.ApiKeyCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: cdktn.stringToTerraform(struct!.apiKey),
        api_secret_key: cdktn.stringToTerraform(struct!.apiSecretKey),
    }
}


export function ccConnectorProfileApiKeyCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.ApiKeyCredentialsProperty | cdktn.IResolvable): any {
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
        api_secret_key: {
            value: cdktn.stringToHclTerraform(struct!.apiSecretKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileBasicAuthCredentialsPropertyToTerraform(struct?: CcConnectorProfile.BasicAuthCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectorProfileBasicAuthCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.BasicAuthCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileCustomAuthCredentialsPropertyToTerraform(struct?: CcConnectorProfile.CustomAuthCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credentials_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.credentialsMap),
        custom_authentication_type: cdktn.stringToTerraform(struct!.customAuthenticationType),
    }
}


export function ccConnectorProfileCustomAuthCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.CustomAuthCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credentials_map: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.credentialsMap),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        custom_authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.customAuthenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileOAuth2CredentialsPropertyToTerraform(struct?: CcConnectorProfile.OAuth2CredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        o_auth_request: ccConnectorProfileConnectorOAuthRequestPropertyToTerraform(struct!.oAuthRequest),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    }
}


export function ccConnectorProfileOAuth2CredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.OAuth2CredentialsProperty | cdktn.IResolvable): any {
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
        o_auth_request: {
            value: ccConnectorProfileConnectorOAuthRequestPropertyToHclTerraform(struct!.oAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorOAuthRequestProperty",
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


export function ccConnectorProfileCustomConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.CustomConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: ccConnectorProfileApiKeyCredentialsPropertyToTerraform(struct!.apiKey),
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        basic: ccConnectorProfileBasicAuthCredentialsPropertyToTerraform(struct!.basic),
        custom: ccConnectorProfileCustomAuthCredentialsPropertyToTerraform(struct!.custom),
        oauth_2: ccConnectorProfileOAuth2CredentialsPropertyToTerraform(struct!.oauth2),
    }
}


export function ccConnectorProfileCustomConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.CustomConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key: {
            value: ccConnectorProfileApiKeyCredentialsPropertyToHclTerraform(struct!.apiKey),
            isBlock: true,
            type: "struct",
            storageClassType: "ApiKeyCredentialsProperty",
        },
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        basic: {
            value: ccConnectorProfileBasicAuthCredentialsPropertyToHclTerraform(struct!.basic),
            isBlock: true,
            type: "struct",
            storageClassType: "BasicAuthCredentialsProperty",
        },
        custom: {
            value: ccConnectorProfileCustomAuthCredentialsPropertyToHclTerraform(struct!.custom),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomAuthCredentialsProperty",
        },
        oauth_2: {
            value: ccConnectorProfileOAuth2CredentialsPropertyToHclTerraform(struct!.oauth2),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2CredentialsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileDatadogConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.DatadogConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: cdktn.stringToTerraform(struct!.apiKey),
        application_key: cdktn.stringToTerraform(struct!.applicationKey),
    }
}


export function ccConnectorProfileDatadogConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.DatadogConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        application_key: {
            value: cdktn.stringToHclTerraform(struct!.applicationKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileDynatraceConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.DynatraceConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_token: cdktn.stringToTerraform(struct!.apiToken),
    }
}


export function ccConnectorProfileDynatraceConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.DynatraceConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_token: {
            value: cdktn.stringToHclTerraform(struct!.apiToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileGoogleAnalyticsConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.GoogleAnalyticsConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        connector_o_auth_request: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestPropertyToTerraform(struct!.connectorOAuthRequest),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    }
}


export function ccConnectorProfileGoogleAnalyticsConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.GoogleAnalyticsConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        connector_o_auth_request: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestPropertyToHclTerraform(struct!.connectorOAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty",
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


export function ccConnectorProfileInforNexusConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.InforNexusConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
        datakey: cdktn.stringToTerraform(struct!.datakey),
        secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
        user_id: cdktn.stringToTerraform(struct!.userId),
    }
}


export function ccConnectorProfileInforNexusConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.InforNexusConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_key_id: {
            value: cdktn.stringToHclTerraform(struct!.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        datakey: {
            value: cdktn.stringToHclTerraform(struct!.datakey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_id: {
            value: cdktn.stringToHclTerraform(struct!.userId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileMarketoConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.MarketoConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        connector_o_auth_request: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestPropertyToTerraform(struct!.connectorOAuthRequest),
    }
}


export function ccConnectorProfileMarketoConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.MarketoConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        connector_o_auth_request: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestPropertyToHclTerraform(struct!.connectorOAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfilePardotConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.PardotConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_credentials_arn: cdktn.stringToTerraform(struct!.clientCredentialsArn),
        connector_o_auth_request: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestPropertyToTerraform(struct!.connectorOAuthRequest),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    }
}


export function ccConnectorProfilePardotConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.PardotConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        client_credentials_arn: {
            value: cdktn.stringToHclTerraform(struct!.clientCredentialsArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connector_o_auth_request: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestPropertyToHclTerraform(struct!.connectorOAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty",
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


export function ccConnectorProfileRedshiftConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.RedshiftConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectorProfileRedshiftConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.RedshiftConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSalesforceConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.SalesforceConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_credentials_arn: cdktn.stringToTerraform(struct!.clientCredentialsArn),
        connector_o_auth_request: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestPropertyToTerraform(struct!.connectorOAuthRequest),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    }
}


export function ccConnectorProfileSalesforceConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.SalesforceConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        client_credentials_arn: {
            value: cdktn.stringToHclTerraform(struct!.clientCredentialsArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connector_o_auth_request: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestPropertyToHclTerraform(struct!.connectorOAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty",
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


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileOAuthCredentialsPropertyToTerraform(struct?: CcConnectorProfile.OAuthCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        connector_o_auth_request: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestPropertyToTerraform(struct!.connectorOAuthRequest),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    }
}


export function ccConnectorProfileOAuthCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.OAuthCredentialsProperty | cdktn.IResolvable): any {
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
        connector_o_auth_request: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestPropertyToHclTerraform(struct!.connectorOAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty",
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


export function ccConnectorProfileSAPODataConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.SAPODataConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        basic_auth_credentials: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsPropertyToTerraform(struct!.basicAuthCredentials),
        o_auth_credentials: ccConnectorProfileOAuthCredentialsPropertyToTerraform(struct!.oAuthCredentials),
    }
}


export function ccConnectorProfileSAPODataConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.SAPODataConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        basic_auth_credentials: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsPropertyToHclTerraform(struct!.basicAuthCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty",
        },
        o_auth_credentials: {
            value: ccConnectorProfileOAuthCredentialsPropertyToHclTerraform(struct!.oAuthCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuthCredentialsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileServiceNowConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.ServiceNowConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectorProfileServiceNowConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.ServiceNowConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSingularConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.SingularConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: cdktn.stringToTerraform(struct!.apiKey),
    }
}


export function ccConnectorProfileSingularConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.SingularConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSlackConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.SlackConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        connector_o_auth_request: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestPropertyToTerraform(struct!.connectorOAuthRequest),
    }
}


export function ccConnectorProfileSlackConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.SlackConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        connector_o_auth_request: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestPropertyToHclTerraform(struct!.connectorOAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSnowflakeConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.SnowflakeConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectorProfileSnowflakeConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.SnowflakeConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileTrendmicroConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.TrendmicroConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_secret_key: cdktn.stringToTerraform(struct!.apiSecretKey),
    }
}


export function ccConnectorProfileTrendmicroConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.TrendmicroConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_secret_key: {
            value: cdktn.stringToHclTerraform(struct!.apiSecretKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileVeevaConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.VeevaConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectorProfileVeevaConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.VeevaConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_uri: {
            value: cdktn.stringToHclTerraform(struct!.redirectUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileZendeskConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.ZendeskConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        connector_o_auth_request: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestPropertyToTerraform(struct!.connectorOAuthRequest),
    }
}


export function ccConnectorProfileZendeskConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.ZendeskConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
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
        connector_o_auth_request: {
            value: ccConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestPropertyToHclTerraform(struct!.connectorOAuthRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileCredentialsPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        amplitude: ccConnectorProfileAmplitudeConnectorProfileCredentialsPropertyToTerraform(struct!.amplitude),
        custom_connector: ccConnectorProfileCustomConnectorProfileCredentialsPropertyToTerraform(struct!.customConnector),
        datadog: ccConnectorProfileDatadogConnectorProfileCredentialsPropertyToTerraform(struct!.datadog),
        dynatrace: ccConnectorProfileDynatraceConnectorProfileCredentialsPropertyToTerraform(struct!.dynatrace),
        google_analytics: ccConnectorProfileGoogleAnalyticsConnectorProfileCredentialsPropertyToTerraform(struct!.googleAnalytics),
        infor_nexus: ccConnectorProfileInforNexusConnectorProfileCredentialsPropertyToTerraform(struct!.inforNexus),
        marketo: ccConnectorProfileMarketoConnectorProfileCredentialsPropertyToTerraform(struct!.marketo),
        pardot: ccConnectorProfilePardotConnectorProfileCredentialsPropertyToTerraform(struct!.pardot),
        redshift: ccConnectorProfileRedshiftConnectorProfileCredentialsPropertyToTerraform(struct!.redshift),
        salesforce: ccConnectorProfileSalesforceConnectorProfileCredentialsPropertyToTerraform(struct!.salesforce),
        sapo_data: ccConnectorProfileSAPODataConnectorProfileCredentialsPropertyToTerraform(struct!.sapoData),
        service_now: ccConnectorProfileServiceNowConnectorProfileCredentialsPropertyToTerraform(struct!.serviceNow),
        singular: ccConnectorProfileSingularConnectorProfileCredentialsPropertyToTerraform(struct!.singular),
        slack: ccConnectorProfileSlackConnectorProfileCredentialsPropertyToTerraform(struct!.slack),
        snowflake: ccConnectorProfileSnowflakeConnectorProfileCredentialsPropertyToTerraform(struct!.snowflake),
        trendmicro: ccConnectorProfileTrendmicroConnectorProfileCredentialsPropertyToTerraform(struct!.trendmicro),
        veeva: ccConnectorProfileVeevaConnectorProfileCredentialsPropertyToTerraform(struct!.veeva),
        zendesk: ccConnectorProfileZendeskConnectorProfileCredentialsPropertyToTerraform(struct!.zendesk),
    }
}


export function ccConnectorProfileConnectorProfileCredentialsPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        amplitude: {
            value: ccConnectorProfileAmplitudeConnectorProfileCredentialsPropertyToHclTerraform(struct!.amplitude),
            isBlock: true,
            type: "struct",
            storageClassType: "AmplitudeConnectorProfileCredentialsProperty",
        },
        custom_connector: {
            value: ccConnectorProfileCustomConnectorProfileCredentialsPropertyToHclTerraform(struct!.customConnector),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomConnectorProfileCredentialsProperty",
        },
        datadog: {
            value: ccConnectorProfileDatadogConnectorProfileCredentialsPropertyToHclTerraform(struct!.datadog),
            isBlock: true,
            type: "struct",
            storageClassType: "DatadogConnectorProfileCredentialsProperty",
        },
        dynatrace: {
            value: ccConnectorProfileDynatraceConnectorProfileCredentialsPropertyToHclTerraform(struct!.dynatrace),
            isBlock: true,
            type: "struct",
            storageClassType: "DynatraceConnectorProfileCredentialsProperty",
        },
        google_analytics: {
            value: ccConnectorProfileGoogleAnalyticsConnectorProfileCredentialsPropertyToHclTerraform(struct!.googleAnalytics),
            isBlock: true,
            type: "struct",
            storageClassType: "GoogleAnalyticsConnectorProfileCredentialsProperty",
        },
        infor_nexus: {
            value: ccConnectorProfileInforNexusConnectorProfileCredentialsPropertyToHclTerraform(struct!.inforNexus),
            isBlock: true,
            type: "struct",
            storageClassType: "InforNexusConnectorProfileCredentialsProperty",
        },
        marketo: {
            value: ccConnectorProfileMarketoConnectorProfileCredentialsPropertyToHclTerraform(struct!.marketo),
            isBlock: true,
            type: "struct",
            storageClassType: "MarketoConnectorProfileCredentialsProperty",
        },
        pardot: {
            value: ccConnectorProfilePardotConnectorProfileCredentialsPropertyToHclTerraform(struct!.pardot),
            isBlock: true,
            type: "struct",
            storageClassType: "PardotConnectorProfileCredentialsProperty",
        },
        redshift: {
            value: ccConnectorProfileRedshiftConnectorProfileCredentialsPropertyToHclTerraform(struct!.redshift),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftConnectorProfileCredentialsProperty",
        },
        salesforce: {
            value: ccConnectorProfileSalesforceConnectorProfileCredentialsPropertyToHclTerraform(struct!.salesforce),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceConnectorProfileCredentialsProperty",
        },
        sapo_data: {
            value: ccConnectorProfileSAPODataConnectorProfileCredentialsPropertyToHclTerraform(struct!.sapoData),
            isBlock: true,
            type: "struct",
            storageClassType: "SAPODataConnectorProfileCredentialsProperty",
        },
        service_now: {
            value: ccConnectorProfileServiceNowConnectorProfileCredentialsPropertyToHclTerraform(struct!.serviceNow),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNowConnectorProfileCredentialsProperty",
        },
        singular: {
            value: ccConnectorProfileSingularConnectorProfileCredentialsPropertyToHclTerraform(struct!.singular),
            isBlock: true,
            type: "struct",
            storageClassType: "SingularConnectorProfileCredentialsProperty",
        },
        slack: {
            value: ccConnectorProfileSlackConnectorProfileCredentialsPropertyToHclTerraform(struct!.slack),
            isBlock: true,
            type: "struct",
            storageClassType: "SlackConnectorProfileCredentialsProperty",
        },
        snowflake: {
            value: ccConnectorProfileSnowflakeConnectorProfileCredentialsPropertyToHclTerraform(struct!.snowflake),
            isBlock: true,
            type: "struct",
            storageClassType: "SnowflakeConnectorProfileCredentialsProperty",
        },
        trendmicro: {
            value: ccConnectorProfileTrendmicroConnectorProfileCredentialsPropertyToHclTerraform(struct!.trendmicro),
            isBlock: true,
            type: "struct",
            storageClassType: "TrendmicroConnectorProfileCredentialsProperty",
        },
        veeva: {
            value: ccConnectorProfileVeevaConnectorProfileCredentialsPropertyToHclTerraform(struct!.veeva),
            isBlock: true,
            type: "struct",
            storageClassType: "VeevaConnectorProfileCredentialsProperty",
        },
        zendesk: {
            value: ccConnectorProfileZendeskConnectorProfileCredentialsPropertyToHclTerraform(struct!.zendesk),
            isBlock: true,
            type: "struct",
            storageClassType: "ZendeskConnectorProfileCredentialsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileOAuth2PropertiesPropertyToTerraform(struct?: CcConnectorProfile.OAuth2PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        o_auth_2_grant_type: cdktn.stringToTerraform(struct!.oAuth2GrantType),
        token_url: cdktn.stringToTerraform(struct!.tokenUrl),
        token_url_custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tokenUrlCustomProperties),
    }
}


export function ccConnectorProfileOAuth2PropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.OAuth2PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        o_auth_2_grant_type: {
            value: cdktn.stringToHclTerraform(struct!.oAuth2GrantType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_url_custom_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tokenUrlCustomProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileCustomConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.CustomConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        o_auth_2_properties: ccConnectorProfileOAuth2PropertiesPropertyToTerraform(struct!.oAuth2Properties),
        profile_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.profileProperties),
    }
}


export function ccConnectorProfileCustomConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.CustomConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        o_auth_2_properties: {
            value: ccConnectorProfileOAuth2PropertiesPropertyToHclTerraform(struct!.oAuth2Properties),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2PropertiesProperty",
        },
        profile_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.profileProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileDatadogConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.DatadogConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileDatadogConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.DatadogConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileDynatraceConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.DynatraceConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileDynatraceConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.DynatraceConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileInforNexusConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.InforNexusConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileInforNexusConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.InforNexusConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileMarketoConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.MarketoConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileMarketoConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.MarketoConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfilePardotConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.PardotConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        business_unit_id: cdktn.stringToTerraform(struct!.businessUnitId),
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
        is_sandbox_environment: cdktn.booleanToTerraform(struct!.isSandboxEnvironment),
    }
}


export function ccConnectorProfilePardotConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.PardotConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        business_unit_id: {
            value: cdktn.stringToHclTerraform(struct!.businessUnitId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_sandbox_environment: {
            value: cdktn.booleanToHclTerraform(struct!.isSandboxEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileRedshiftConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.RedshiftConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
        data_api_role_arn: cdktn.stringToTerraform(struct!.dataApiRoleArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        database_url: cdktn.stringToTerraform(struct!.databaseUrl),
        is_redshift_serverless: cdktn.booleanToTerraform(struct!.isRedshiftServerless),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        workgroup_name: cdktn.stringToTerraform(struct!.workgroupName),
    }
}


export function ccConnectorProfileRedshiftConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.RedshiftConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_identifier: {
            value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_api_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataApiRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_url: {
            value: cdktn.stringToHclTerraform(struct!.databaseUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_redshift_serverless: {
            value: cdktn.booleanToHclTerraform(struct!.isRedshiftServerless),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workgroup_name: {
            value: cdktn.stringToHclTerraform(struct!.workgroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSalesforceConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.SalesforceConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
        is_sandbox_environment: cdktn.booleanToTerraform(struct!.isSandboxEnvironment),
    }
}


export function ccConnectorProfileSalesforceConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.SalesforceConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_sandbox_environment: {
            value: cdktn.booleanToHclTerraform(struct!.isSandboxEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileOAuthPropertiesPropertyToTerraform(struct?: CcConnectorProfile.OAuthPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code_url: cdktn.stringToTerraform(struct!.authCodeUrl),
        o_auth_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oAuthScopes),
        token_url: cdktn.stringToTerraform(struct!.tokenUrl),
    }
}


export function ccConnectorProfileOAuthPropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.OAuthPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code_url: {
            value: cdktn.stringToHclTerraform(struct!.authCodeUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oAuthScopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        token_url: {
            value: cdktn.stringToHclTerraform(struct!.tokenUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSAPODataConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.SAPODataConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_host_url: cdktn.stringToTerraform(struct!.applicationHostUrl),
        application_service_path: cdktn.stringToTerraform(struct!.applicationServicePath),
        client_number: cdktn.stringToTerraform(struct!.clientNumber),
        logon_language: cdktn.stringToTerraform(struct!.logonLanguage),
        o_auth_properties: ccConnectorProfileOAuthPropertiesPropertyToTerraform(struct!.oAuthProperties),
        port_number: cdktn.numberToTerraform(struct!.portNumber),
        private_link_service_name: cdktn.stringToTerraform(struct!.privateLinkServiceName),
    }
}


export function ccConnectorProfileSAPODataConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.SAPODataConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_host_url: {
            value: cdktn.stringToHclTerraform(struct!.applicationHostUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        application_service_path: {
            value: cdktn.stringToHclTerraform(struct!.applicationServicePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_number: {
            value: cdktn.stringToHclTerraform(struct!.clientNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logon_language: {
            value: cdktn.stringToHclTerraform(struct!.logonLanguage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_properties: {
            value: ccConnectorProfileOAuthPropertiesPropertyToHclTerraform(struct!.oAuthProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuthPropertiesProperty",
        },
        port_number: {
            value: cdktn.numberToHclTerraform(struct!.portNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        private_link_service_name: {
            value: cdktn.stringToHclTerraform(struct!.privateLinkServiceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileServiceNowConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.ServiceNowConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileServiceNowConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.ServiceNowConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSlackConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.SlackConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileSlackConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.SlackConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileSnowflakeConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.SnowflakeConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_name: cdktn.stringToTerraform(struct!.accountName),
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        private_link_service_name: cdktn.stringToTerraform(struct!.privateLinkServiceName),
        region: cdktn.stringToTerraform(struct!.region),
        stage: cdktn.stringToTerraform(struct!.stage),
        warehouse: cdktn.stringToTerraform(struct!.warehouse),
    }
}


export function ccConnectorProfileSnowflakeConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.SnowflakeConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_name: {
            value: cdktn.stringToHclTerraform(struct!.accountName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_link_service_name: {
            value: cdktn.stringToHclTerraform(struct!.privateLinkServiceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stage: {
            value: cdktn.stringToHclTerraform(struct!.stage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        warehouse: {
            value: cdktn.stringToHclTerraform(struct!.warehouse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileVeevaConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.VeevaConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileVeevaConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.VeevaConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileZendeskConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.ZendeskConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccConnectorProfileZendeskConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.ZendeskConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfilePropertiesPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_connector: ccConnectorProfileCustomConnectorProfilePropertiesPropertyToTerraform(struct!.customConnector),
        datadog: ccConnectorProfileDatadogConnectorProfilePropertiesPropertyToTerraform(struct!.datadog),
        dynatrace: ccConnectorProfileDynatraceConnectorProfilePropertiesPropertyToTerraform(struct!.dynatrace),
        infor_nexus: ccConnectorProfileInforNexusConnectorProfilePropertiesPropertyToTerraform(struct!.inforNexus),
        marketo: ccConnectorProfileMarketoConnectorProfilePropertiesPropertyToTerraform(struct!.marketo),
        pardot: ccConnectorProfilePardotConnectorProfilePropertiesPropertyToTerraform(struct!.pardot),
        redshift: ccConnectorProfileRedshiftConnectorProfilePropertiesPropertyToTerraform(struct!.redshift),
        salesforce: ccConnectorProfileSalesforceConnectorProfilePropertiesPropertyToTerraform(struct!.salesforce),
        sapo_data: ccConnectorProfileSAPODataConnectorProfilePropertiesPropertyToTerraform(struct!.sapoData),
        service_now: ccConnectorProfileServiceNowConnectorProfilePropertiesPropertyToTerraform(struct!.serviceNow),
        slack: ccConnectorProfileSlackConnectorProfilePropertiesPropertyToTerraform(struct!.slack),
        snowflake: ccConnectorProfileSnowflakeConnectorProfilePropertiesPropertyToTerraform(struct!.snowflake),
        veeva: ccConnectorProfileVeevaConnectorProfilePropertiesPropertyToTerraform(struct!.veeva),
        zendesk: ccConnectorProfileZendeskConnectorProfilePropertiesPropertyToTerraform(struct!.zendesk),
    }
}


export function ccConnectorProfileConnectorProfilePropertiesPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfilePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_connector: {
            value: ccConnectorProfileCustomConnectorProfilePropertiesPropertyToHclTerraform(struct!.customConnector),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomConnectorProfilePropertiesProperty",
        },
        datadog: {
            value: ccConnectorProfileDatadogConnectorProfilePropertiesPropertyToHclTerraform(struct!.datadog),
            isBlock: true,
            type: "struct",
            storageClassType: "DatadogConnectorProfilePropertiesProperty",
        },
        dynatrace: {
            value: ccConnectorProfileDynatraceConnectorProfilePropertiesPropertyToHclTerraform(struct!.dynatrace),
            isBlock: true,
            type: "struct",
            storageClassType: "DynatraceConnectorProfilePropertiesProperty",
        },
        infor_nexus: {
            value: ccConnectorProfileInforNexusConnectorProfilePropertiesPropertyToHclTerraform(struct!.inforNexus),
            isBlock: true,
            type: "struct",
            storageClassType: "InforNexusConnectorProfilePropertiesProperty",
        },
        marketo: {
            value: ccConnectorProfileMarketoConnectorProfilePropertiesPropertyToHclTerraform(struct!.marketo),
            isBlock: true,
            type: "struct",
            storageClassType: "MarketoConnectorProfilePropertiesProperty",
        },
        pardot: {
            value: ccConnectorProfilePardotConnectorProfilePropertiesPropertyToHclTerraform(struct!.pardot),
            isBlock: true,
            type: "struct",
            storageClassType: "PardotConnectorProfilePropertiesProperty",
        },
        redshift: {
            value: ccConnectorProfileRedshiftConnectorProfilePropertiesPropertyToHclTerraform(struct!.redshift),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftConnectorProfilePropertiesProperty",
        },
        salesforce: {
            value: ccConnectorProfileSalesforceConnectorProfilePropertiesPropertyToHclTerraform(struct!.salesforce),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceConnectorProfilePropertiesProperty",
        },
        sapo_data: {
            value: ccConnectorProfileSAPODataConnectorProfilePropertiesPropertyToHclTerraform(struct!.sapoData),
            isBlock: true,
            type: "struct",
            storageClassType: "SAPODataConnectorProfilePropertiesProperty",
        },
        service_now: {
            value: ccConnectorProfileServiceNowConnectorProfilePropertiesPropertyToHclTerraform(struct!.serviceNow),
            isBlock: true,
            type: "struct",
            storageClassType: "ServiceNowConnectorProfilePropertiesProperty",
        },
        slack: {
            value: ccConnectorProfileSlackConnectorProfilePropertiesPropertyToHclTerraform(struct!.slack),
            isBlock: true,
            type: "struct",
            storageClassType: "SlackConnectorProfilePropertiesProperty",
        },
        snowflake: {
            value: ccConnectorProfileSnowflakeConnectorProfilePropertiesPropertyToHclTerraform(struct!.snowflake),
            isBlock: true,
            type: "struct",
            storageClassType: "SnowflakeConnectorProfilePropertiesProperty",
        },
        veeva: {
            value: ccConnectorProfileVeevaConnectorProfilePropertiesPropertyToHclTerraform(struct!.veeva),
            isBlock: true,
            type: "struct",
            storageClassType: "VeevaConnectorProfilePropertiesProperty",
        },
        zendesk: {
            value: ccConnectorProfileZendeskConnectorProfilePropertiesPropertyToHclTerraform(struct!.zendesk),
            isBlock: true,
            type: "struct",
            storageClassType: "ZendeskConnectorProfilePropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectorProfileConnectorProfileConfigPropertyToTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connector_profile_credentials: ccConnectorProfileConnectorProfileCredentialsPropertyToTerraform(struct!.connectorProfileCredentials),
        connector_profile_properties: ccConnectorProfileConnectorProfilePropertiesPropertyToTerraform(struct!.connectorProfileProperties),
    }
}


export function ccConnectorProfileConnectorProfileConfigPropertyToHclTerraform(struct?: CcConnectorProfile.ConnectorProfileConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connector_profile_credentials: {
            value: ccConnectorProfileConnectorProfileCredentialsPropertyToHclTerraform(struct!.connectorProfileCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfileCredentialsProperty",
        },
        connector_profile_properties: {
            value: ccConnectorProfileConnectorProfilePropertiesPropertyToHclTerraform(struct!.connectorProfileProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorProfilePropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnectorProfile {
export interface AmplitudeConnectorProfileCredentialsProperty {
    /**
    * A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_key CcConnectorProfile#api_key}
    */
    readonly apiKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#secret_key CcConnectorProfile#secret_key}
    */
    readonly secretKey?: string;
}
export class AmplitudeConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmplitudeConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey;
        }
        if (this._secretKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretKey = this._secretKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmplitudeConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey = undefined;
            this._secretKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey = value.apiKey;
            this._secretKey = value.secretKey;
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

    // secret_key - computed: true, optional: true, required: false
    private _secretKey?: string; 
    public get secretKey() {
        return this.getStringAttribute('secret_key');
    }
    public set secretKey(value: string) {
        this._secretKey = value;
    }
    public resetSecretKey() {
        this._secretKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretKeyInput() {
        return this._secretKey;
    }
}
export interface ApiKeyCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_key CcConnectorProfile#api_key}
    */
    readonly apiKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_secret_key CcConnectorProfile#api_secret_key}
    */
    readonly apiSecretKey?: string;
}
export class ApiKeyCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiKeyCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey;
        }
        if (this._apiSecretKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiSecretKey = this._apiSecretKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiKeyCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey = undefined;
            this._apiSecretKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey = value.apiKey;
            this._apiSecretKey = value.apiSecretKey;
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

    // api_secret_key - computed: true, optional: true, required: false
    private _apiSecretKey?: string; 
    public get apiSecretKey() {
        return this.getStringAttribute('api_secret_key');
    }
    public set apiSecretKey(value: string) {
        this._apiSecretKey = value;
    }
    public resetApiSecretKey() {
        this._apiSecretKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiSecretKeyInput() {
        return this._apiSecretKey;
    }
}
export interface BasicAuthCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#password CcConnectorProfile#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#username CcConnectorProfile#username}
    */
    readonly username?: string;
}
export class BasicAuthCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BasicAuthCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BasicAuthCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface CustomAuthCredentialsProperty {
    /**
    * A map for properties for custom authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#credentials_map CcConnectorProfile#credentials_map}
    */
    readonly credentialsMap?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#custom_authentication_type CcConnectorProfile#custom_authentication_type}
    */
    readonly customAuthenticationType?: string;
}
export class CustomAuthCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomAuthCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialsMap !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsMap = this._credentialsMap;
        }
        if (this._customAuthenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAuthenticationType = this._customAuthenticationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomAuthCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialsMap = undefined;
            this._customAuthenticationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialsMap = value.credentialsMap;
            this._customAuthenticationType = value.customAuthenticationType;
        }
    }

    // credentials_map - computed: true, optional: true, required: false
    private _credentialsMap?: { [key: string]: string }; 
    public get credentialsMap() {
        return this.getStringMapAttribute('credentials_map');
    }
    public set credentialsMap(value: { [key: string]: string }) {
        this._credentialsMap = value;
    }
    public resetCredentialsMap() {
        this._credentialsMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsMapInput() {
        return this._credentialsMap;
    }

    // custom_authentication_type - computed: true, optional: true, required: false
    private _customAuthenticationType?: string; 
    public get customAuthenticationType() {
        return this.getStringAttribute('custom_authentication_type');
    }
    public set customAuthenticationType(value: string) {
        this._customAuthenticationType = value;
    }
    public resetCustomAuthenticationType() {
        this._customAuthenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAuthenticationTypeInput() {
        return this._customAuthenticationType;
    }
}
export interface ConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface OAuth2CredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_id CcConnectorProfile#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_secret CcConnectorProfile#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#o_auth_request CcConnectorProfile#o_auth_request}
    */
    readonly oAuthRequest?: ConnectorOAuthRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#refresh_token CcConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
}
export class OAuth2CredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuth2CredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._oAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthRequest = this._oAuthRequest?.internalValue;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2CredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._oAuthRequest.internalValue = undefined;
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
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._oAuthRequest.internalValue = value.oAuthRequest;
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

    // o_auth_request - computed: true, optional: true, required: false
    private _oAuthRequest = new ConnectorOAuthRequestPropertyOutputReference(this, "o_auth_request");
    public get oAuthRequest() {
        return this._oAuthRequest;
    }
    public putOAuthRequest(value: ConnectorOAuthRequestProperty) {
        this._oAuthRequest.internalValue = value;
    }
    public resetOAuthRequest() {
        this._oAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthRequestInput() {
        return this._oAuthRequest.internalValue;
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
export interface CustomConnectorProfileCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_key CcConnectorProfile#api_key}
    */
    readonly apiKey?: ApiKeyCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#authentication_type CcConnectorProfile#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#basic CcConnectorProfile#basic}
    */
    readonly basic?: BasicAuthCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#custom CcConnectorProfile#custom}
    */
    readonly custom?: CustomAuthCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#oauth_2 CcConnectorProfile#oauth_2}
    */
    readonly oauth2?: OAuth2CredentialsProperty;
}
export class CustomConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey?.internalValue;
        }
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._basic?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.basic = this._basic?.internalValue;
        }
        if (this._custom?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.custom = this._custom?.internalValue;
        }
        if (this._oauth2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oauth2 = this._oauth2?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey.internalValue = undefined;
            this._authenticationType = undefined;
            this._basic.internalValue = undefined;
            this._custom.internalValue = undefined;
            this._oauth2.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey.internalValue = value.apiKey;
            this._authenticationType = value.authenticationType;
            this._basic.internalValue = value.basic;
            this._custom.internalValue = value.custom;
            this._oauth2.internalValue = value.oauth2;
        }
    }

    // api_key - computed: true, optional: true, required: false
    private _apiKey = new ApiKeyCredentialsPropertyOutputReference(this, "api_key");
    public get apiKey() {
        return this._apiKey;
    }
    public putApiKey(value: ApiKeyCredentialsProperty) {
        this._apiKey.internalValue = value;
    }
    public resetApiKey() {
        this._apiKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
        return this._apiKey.internalValue;
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

    // basic - computed: true, optional: true, required: false
    private _basic = new BasicAuthCredentialsPropertyOutputReference(this, "basic");
    public get basic() {
        return this._basic;
    }
    public putBasic(value: BasicAuthCredentialsProperty) {
        this._basic.internalValue = value;
    }
    public resetBasic() {
        this._basic.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicInput() {
        return this._basic.internalValue;
    }

    // custom - computed: true, optional: true, required: false
    private _custom = new CustomAuthCredentialsPropertyOutputReference(this, "custom");
    public get custom() {
        return this._custom;
    }
    public putCustom(value: CustomAuthCredentialsProperty) {
        this._custom.internalValue = value;
    }
    public resetCustom() {
        this._custom.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInput() {
        return this._custom.internalValue;
    }

    // oauth_2 - computed: true, optional: true, required: false
    private _oauth2 = new OAuth2CredentialsPropertyOutputReference(this, "oauth_2");
    public get oauth2() {
        return this._oauth2;
    }
    public putOauth2(value: OAuth2CredentialsProperty) {
        this._oauth2.internalValue = value;
    }
    public resetOauth2() {
        this._oauth2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauth2Input() {
        return this._oauth2.internalValue;
    }
}
export interface DatadogConnectorProfileCredentialsProperty {
    /**
    * A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_key CcConnectorProfile#api_key}
    */
    readonly apiKey?: string;
    /**
    * Application keys, in conjunction with your API key, give you full access to Datadog?s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#application_key CcConnectorProfile#application_key}
    */
    readonly applicationKey?: string;
}
export class DatadogConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatadogConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey;
        }
        if (this._applicationKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationKey = this._applicationKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatadogConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey = undefined;
            this._applicationKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey = value.apiKey;
            this._applicationKey = value.applicationKey;
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

    // application_key - computed: true, optional: true, required: false
    private _applicationKey?: string; 
    public get applicationKey() {
        return this.getStringAttribute('application_key');
    }
    public set applicationKey(value: string) {
        this._applicationKey = value;
    }
    public resetApplicationKey() {
        this._applicationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationKeyInput() {
        return this._applicationKey;
    }
}
export interface DynatraceConnectorProfileCredentialsProperty {
    /**
    * The API tokens used by Dynatrace API to authenticate various API calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_token CcConnectorProfile#api_token}
    */
    readonly apiToken?: string;
}
export class DynatraceConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynatraceConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiToken = this._apiToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynatraceConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiToken = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiToken = value.apiToken;
        }
    }

    // api_token - computed: true, optional: true, required: false
    private _apiToken?: string; 
    public get apiToken() {
        return this.getStringAttribute('api_token');
    }
    public set apiToken(value: string) {
        this._apiToken = value;
    }
    public resetApiToken() {
        this._apiToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiTokenInput() {
        return this._apiToken;
    }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface GoogleAnalyticsConnectorProfileCredentialsProperty {
    /**
    * The credentials used to access protected resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * The identi?er for the desired client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_id CcConnectorProfile#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret used by the oauth client to authenticate to the authorization server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_secret CcConnectorProfile#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The oauth needed to request security tokens from the connector endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_o_auth_request CcConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty;
    /**
    * The credentials used to acquire new access tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#refresh_token CcConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
}
export class GoogleAnalyticsConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GoogleAnalyticsConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._connectorOAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GoogleAnalyticsConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._connectorOAuthRequest.internalValue = undefined;
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
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
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

    // connector_o_auth_request - computed: true, optional: true, required: false
    private _connectorOAuthRequest = new ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestPropertyOutputReference(this, "connector_o_auth_request");
    public get connectorOAuthRequest() {
        return this._connectorOAuthRequest;
    }
    public putConnectorOAuthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestProperty) {
        this._connectorOAuthRequest.internalValue = value;
    }
    public resetConnectorOAuthRequest() {
        this._connectorOAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOAuthRequestInput() {
        return this._connectorOAuthRequest.internalValue;
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
export interface InforNexusConnectorProfileCredentialsProperty {
    /**
    * The Access Key portion of the credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_key_id CcConnectorProfile#access_key_id}
    */
    readonly accessKeyId?: string;
    /**
    * The encryption keys used to encrypt data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#datakey CcConnectorProfile#datakey}
    */
    readonly datakey?: string;
    /**
    * The secret key used to sign requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#secret_access_key CcConnectorProfile#secret_access_key}
    */
    readonly secretAccessKey?: string;
    /**
    * The identi?er for the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#user_id CcConnectorProfile#user_id}
    */
    readonly userId?: string;
}
export class InforNexusConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InforNexusConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessKeyId = this._accessKeyId;
        }
        if (this._datakey !== undefined) {
            hasAnyValues = true;
            internalValueResult.datakey = this._datakey;
        }
        if (this._secretAccessKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessKey = this._secretAccessKey;
        }
        if (this._userId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userId = this._userId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InforNexusConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessKeyId = undefined;
            this._datakey = undefined;
            this._secretAccessKey = undefined;
            this._userId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessKeyId = value.accessKeyId;
            this._datakey = value.datakey;
            this._secretAccessKey = value.secretAccessKey;
            this._userId = value.userId;
        }
    }

    // access_key_id - computed: true, optional: true, required: false
    private _accessKeyId?: string; 
    public get accessKeyId() {
        return this.getStringAttribute('access_key_id');
    }
    public set accessKeyId(value: string) {
        this._accessKeyId = value;
    }
    public resetAccessKeyId() {
        this._accessKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessKeyIdInput() {
        return this._accessKeyId;
    }

    // datakey - computed: true, optional: true, required: false
    private _datakey?: string; 
    public get datakey() {
        return this.getStringAttribute('datakey');
    }
    public set datakey(value: string) {
        this._datakey = value;
    }
    public resetDatakey() {
        this._datakey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datakeyInput() {
        return this._datakey;
    }

    // secret_access_key - computed: true, optional: true, required: false
    private _secretAccessKey?: string; 
    public get secretAccessKey() {
        return this.getStringAttribute('secret_access_key');
    }
    public set secretAccessKey(value: string) {
        this._secretAccessKey = value;
    }
    public resetSecretAccessKey() {
        this._secretAccessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretAccessKeyInput() {
        return this._secretAccessKey;
    }

    // user_id - computed: true, optional: true, required: false
    private _userId?: string; 
    public get userId() {
        return this.getStringAttribute('user_id');
    }
    public set userId(value: string) {
        this._userId = value;
    }
    public resetUserId() {
        this._userId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdInput() {
        return this._userId;
    }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface MarketoConnectorProfileCredentialsProperty {
    /**
    * The credentials used to access protected resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * The identi?er for the desired client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_id CcConnectorProfile#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret used by the oauth client to authenticate to the authorization server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_secret CcConnectorProfile#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The oauth needed to request security tokens from the connector endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_o_auth_request CcConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty;
}
export class MarketoConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MarketoConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._connectorOAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MarketoConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._connectorOAuthRequest.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
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

    // connector_o_auth_request - computed: true, optional: true, required: false
    private _connectorOAuthRequest = new ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestPropertyOutputReference(this, "connector_o_auth_request");
    public get connectorOAuthRequest() {
        return this._connectorOAuthRequest;
    }
    public putConnectorOAuthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestProperty) {
        this._connectorOAuthRequest.internalValue = value;
    }
    public resetConnectorOAuthRequest() {
        this._connectorOAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOAuthRequestInput() {
        return this._connectorOAuthRequest.internalValue;
    }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface PardotConnectorProfileCredentialsProperty {
    /**
    * The credentials used to access protected resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * The client credentials to fetch access token and refresh token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_credentials_arn CcConnectorProfile#client_credentials_arn}
    */
    readonly clientCredentialsArn?: string;
    /**
    * The oauth needed to request security tokens from the connector endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_o_auth_request CcConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty;
    /**
    * The credentials used to acquire new access tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#refresh_token CcConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
}
export class PardotConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PardotConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientCredentialsArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCredentialsArn = this._clientCredentialsArn;
        }
        if (this._connectorOAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PardotConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientCredentialsArn = undefined;
            this._connectorOAuthRequest.internalValue = undefined;
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
            this._clientCredentialsArn = value.clientCredentialsArn;
            this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
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

    // client_credentials_arn - computed: true, optional: true, required: false
    private _clientCredentialsArn?: string; 
    public get clientCredentialsArn() {
        return this.getStringAttribute('client_credentials_arn');
    }
    public set clientCredentialsArn(value: string) {
        this._clientCredentialsArn = value;
    }
    public resetClientCredentialsArn() {
        this._clientCredentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCredentialsArnInput() {
        return this._clientCredentialsArn;
    }

    // connector_o_auth_request - computed: true, optional: true, required: false
    private _connectorOAuthRequest = new ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestPropertyOutputReference(this, "connector_o_auth_request");
    public get connectorOAuthRequest() {
        return this._connectorOAuthRequest;
    }
    public putConnectorOAuthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestProperty) {
        this._connectorOAuthRequest.internalValue = value;
    }
    public resetConnectorOAuthRequest() {
        this._connectorOAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOAuthRequestInput() {
        return this._connectorOAuthRequest.internalValue;
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
export interface RedshiftConnectorProfileCredentialsProperty {
    /**
    * The password that corresponds to the username.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#password CcConnectorProfile#password}
    */
    readonly password?: string;
    /**
    * The name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#username CcConnectorProfile#username}
    */
    readonly username?: string;
}
export class RedshiftConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface SalesforceConnectorProfileCredentialsProperty {
    /**
    * The credentials used to access protected resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * The client credentials to fetch access token and refresh token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_credentials_arn CcConnectorProfile#client_credentials_arn}
    */
    readonly clientCredentialsArn?: string;
    /**
    * The oauth needed to request security tokens from the connector endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_o_auth_request CcConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty;
    /**
    * The credentials used to acquire new access tokens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#refresh_token CcConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
}
export class SalesforceConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientCredentialsArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCredentialsArn = this._clientCredentialsArn;
        }
        if (this._connectorOAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientCredentialsArn = undefined;
            this._connectorOAuthRequest.internalValue = undefined;
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
            this._clientCredentialsArn = value.clientCredentialsArn;
            this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
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

    // client_credentials_arn - computed: true, optional: true, required: false
    private _clientCredentialsArn?: string; 
    public get clientCredentialsArn() {
        return this.getStringAttribute('client_credentials_arn');
    }
    public set clientCredentialsArn(value: string) {
        this._clientCredentialsArn = value;
    }
    public resetClientCredentialsArn() {
        this._clientCredentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCredentialsArnInput() {
        return this._clientCredentialsArn;
    }

    // connector_o_auth_request - computed: true, optional: true, required: false
    private _connectorOAuthRequest = new ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestPropertyOutputReference(this, "connector_o_auth_request");
    public get connectorOAuthRequest() {
        return this._connectorOAuthRequest;
    }
    public putConnectorOAuthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestProperty) {
        this._connectorOAuthRequest.internalValue = value;
    }
    public resetConnectorOAuthRequest() {
        this._connectorOAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOAuthRequestInput() {
        return this._connectorOAuthRequest.internalValue;
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
export interface ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#password CcConnectorProfile#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#username CcConnectorProfile#username}
    */
    readonly username?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface OAuthCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_id CcConnectorProfile#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_secret CcConnectorProfile#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_o_auth_request CcConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#refresh_token CcConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
}
export class OAuthCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuthCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._connectorOAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuthCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._connectorOAuthRequest.internalValue = undefined;
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
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
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

    // connector_o_auth_request - computed: true, optional: true, required: false
    private _connectorOAuthRequest = new ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestPropertyOutputReference(this, "connector_o_auth_request");
    public get connectorOAuthRequest() {
        return this._connectorOAuthRequest;
    }
    public putConnectorOAuthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestProperty) {
        this._connectorOAuthRequest.internalValue = value;
    }
    public resetConnectorOAuthRequest() {
        this._connectorOAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOAuthRequestInput() {
        return this._connectorOAuthRequest.internalValue;
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
export interface SAPODataConnectorProfileCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#basic_auth_credentials CcConnectorProfile#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#o_auth_credentials CcConnectorProfile#o_auth_credentials}
    */
    readonly oAuthCredentials?: OAuthCredentialsProperty;
}
export class SAPODataConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SAPODataConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._basicAuthCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuthCredentials = this._basicAuthCredentials?.internalValue;
        }
        if (this._oAuthCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthCredentials = this._oAuthCredentials?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAPODataConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._basicAuthCredentials.internalValue = undefined;
            this._oAuthCredentials.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._basicAuthCredentials.internalValue = value.basicAuthCredentials;
            this._oAuthCredentials.internalValue = value.oAuthCredentials;
        }
    }

    // basic_auth_credentials - computed: true, optional: true, required: false
    private _basicAuthCredentials = new ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsPropertyOutputReference(this, "basic_auth_credentials");
    public get basicAuthCredentials() {
        return this._basicAuthCredentials;
    }
    public putBasicAuthCredentials(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsProperty) {
        this._basicAuthCredentials.internalValue = value;
    }
    public resetBasicAuthCredentials() {
        this._basicAuthCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthCredentialsInput() {
        return this._basicAuthCredentials.internalValue;
    }

    // o_auth_credentials - computed: true, optional: true, required: false
    private _oAuthCredentials = new OAuthCredentialsPropertyOutputReference(this, "o_auth_credentials");
    public get oAuthCredentials() {
        return this._oAuthCredentials;
    }
    public putOAuthCredentials(value: OAuthCredentialsProperty) {
        this._oAuthCredentials.internalValue = value;
    }
    public resetOAuthCredentials() {
        this._oAuthCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthCredentialsInput() {
        return this._oAuthCredentials.internalValue;
    }
}
export interface ServiceNowConnectorProfileCredentialsProperty {
    /**
    * The password that corresponds to the username.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#password CcConnectorProfile#password}
    */
    readonly password?: string;
    /**
    * The name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#username CcConnectorProfile#username}
    */
    readonly username?: string;
}
export class ServiceNowConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface SingularConnectorProfileCredentialsProperty {
    /**
    * A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_key CcConnectorProfile#api_key}
    */
    readonly apiKey?: string;
}
export class SingularConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingularConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SingularConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
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
export interface ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface SlackConnectorProfileCredentialsProperty {
    /**
    * The credentials used to access protected resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * The identi?er for the desired client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_id CcConnectorProfile#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret used by the oauth client to authenticate to the authorization server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_secret CcConnectorProfile#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The oauth needed to request security tokens from the connector endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_o_auth_request CcConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty;
}
export class SlackConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlackConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._connectorOAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlackConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._connectorOAuthRequest.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
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

    // connector_o_auth_request - computed: true, optional: true, required: false
    private _connectorOAuthRequest = new ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestPropertyOutputReference(this, "connector_o_auth_request");
    public get connectorOAuthRequest() {
        return this._connectorOAuthRequest;
    }
    public putConnectorOAuthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestProperty) {
        this._connectorOAuthRequest.internalValue = value;
    }
    public resetConnectorOAuthRequest() {
        this._connectorOAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOAuthRequestInput() {
        return this._connectorOAuthRequest.internalValue;
    }
}
export interface SnowflakeConnectorProfileCredentialsProperty {
    /**
    * The password that corresponds to the username.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#password CcConnectorProfile#password}
    */
    readonly password?: string;
    /**
    * The name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#username CcConnectorProfile#username}
    */
    readonly username?: string;
}
export class SnowflakeConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnowflakeConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnowflakeConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface TrendmicroConnectorProfileCredentialsProperty {
    /**
    * The Secret Access Key portion of the credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#api_secret_key CcConnectorProfile#api_secret_key}
    */
    readonly apiSecretKey?: string;
}
export class TrendmicroConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrendmicroConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiSecretKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiSecretKey = this._apiSecretKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrendmicroConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiSecretKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiSecretKey = value.apiSecretKey;
        }
    }

    // api_secret_key - computed: true, optional: true, required: false
    private _apiSecretKey?: string; 
    public get apiSecretKey() {
        return this.getStringAttribute('api_secret_key');
    }
    public set apiSecretKey(value: string) {
        this._apiSecretKey = value;
    }
    public resetApiSecretKey() {
        this._apiSecretKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiSecretKeyInput() {
        return this._apiSecretKey;
    }
}
export interface VeevaConnectorProfileCredentialsProperty {
    /**
    * The password that corresponds to the username.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#password CcConnectorProfile#password}
    */
    readonly password?: string;
    /**
    * The name of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#username CcConnectorProfile#username}
    */
    readonly username?: string;
}
export class VeevaConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VeevaConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VeevaConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty {
    /**
    * The code provided by the connector when it has been authenticated via the connected app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code CcConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * The URL to which the authentication server redirects the browser after authorization has been
    * granted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redirect_uri CcConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri?: string; 
    public get redirectUri() {
        return this.getStringAttribute('redirect_uri');
    }
    public set redirectUri(value: string) {
        this._redirectUri = value;
    }
    public resetRedirectUri() {
        this._redirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri;
    }
}
export interface ZendeskConnectorProfileCredentialsProperty {
    /**
    * The credentials used to access protected resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#access_token CcConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * The identi?er for the desired client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_id CcConnectorProfile#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret used by the oauth client to authenticate to the authorization server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_secret CcConnectorProfile#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The oauth needed to request security tokens from the connector endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_o_auth_request CcConnectorProfile#connector_o_auth_request}
    */
    readonly connectorOAuthRequest?: ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty;
}
export class ZendeskConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZendeskConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._connectorOAuthRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZendeskConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._connectorOAuthRequest.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
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

    // connector_o_auth_request - computed: true, optional: true, required: false
    private _connectorOAuthRequest = new ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestPropertyOutputReference(this, "connector_o_auth_request");
    public get connectorOAuthRequest() {
        return this._connectorOAuthRequest;
    }
    public putConnectorOAuthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestProperty) {
        this._connectorOAuthRequest.internalValue = value;
    }
    public resetConnectorOAuthRequest() {
        this._connectorOAuthRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorOAuthRequestInput() {
        return this._connectorOAuthRequest.internalValue;
    }
}
export interface ConnectorProfileCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#amplitude CcConnectorProfile#amplitude}
    */
    readonly amplitude?: AmplitudeConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#custom_connector CcConnectorProfile#custom_connector}
    */
    readonly customConnector?: CustomConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#datadog CcConnectorProfile#datadog}
    */
    readonly datadog?: DatadogConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#dynatrace CcConnectorProfile#dynatrace}
    */
    readonly dynatrace?: DynatraceConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#google_analytics CcConnectorProfile#google_analytics}
    */
    readonly googleAnalytics?: GoogleAnalyticsConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#infor_nexus CcConnectorProfile#infor_nexus}
    */
    readonly inforNexus?: InforNexusConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#marketo CcConnectorProfile#marketo}
    */
    readonly marketo?: MarketoConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#pardot CcConnectorProfile#pardot}
    */
    readonly pardot?: PardotConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redshift CcConnectorProfile#redshift}
    */
    readonly redshift?: RedshiftConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#salesforce CcConnectorProfile#salesforce}
    */
    readonly salesforce?: SalesforceConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#sapo_data CcConnectorProfile#sapo_data}
    */
    readonly sapoData?: SAPODataConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#service_now CcConnectorProfile#service_now}
    */
    readonly serviceNow?: ServiceNowConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#singular CcConnectorProfile#singular}
    */
    readonly singular?: SingularConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#slack CcConnectorProfile#slack}
    */
    readonly slack?: SlackConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#snowflake CcConnectorProfile#snowflake}
    */
    readonly snowflake?: SnowflakeConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#trendmicro CcConnectorProfile#trendmicro}
    */
    readonly trendmicro?: TrendmicroConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#veeva CcConnectorProfile#veeva}
    */
    readonly veeva?: VeevaConnectorProfileCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#zendesk CcConnectorProfile#zendesk}
    */
    readonly zendesk?: ZendeskConnectorProfileCredentialsProperty;
}
export class ConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._amplitude?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amplitude = this._amplitude?.internalValue;
        }
        if (this._customConnector?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customConnector = this._customConnector?.internalValue;
        }
        if (this._datadog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datadog = this._datadog?.internalValue;
        }
        if (this._dynatrace?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynatrace = this._dynatrace?.internalValue;
        }
        if (this._googleAnalytics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
        }
        if (this._inforNexus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inforNexus = this._inforNexus?.internalValue;
        }
        if (this._marketo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.marketo = this._marketo?.internalValue;
        }
        if (this._pardot?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pardot = this._pardot?.internalValue;
        }
        if (this._redshift?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshift = this._redshift?.internalValue;
        }
        if (this._salesforce?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforce = this._salesforce?.internalValue;
        }
        if (this._sapoData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapoData = this._sapoData?.internalValue;
        }
        if (this._serviceNow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNow = this._serviceNow?.internalValue;
        }
        if (this._singular?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singular = this._singular?.internalValue;
        }
        if (this._slack?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slack = this._slack?.internalValue;
        }
        if (this._snowflake?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflake = this._snowflake?.internalValue;
        }
        if (this._trendmicro?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trendmicro = this._trendmicro?.internalValue;
        }
        if (this._veeva?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.veeva = this._veeva?.internalValue;
        }
        if (this._zendesk?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.zendesk = this._zendesk?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._amplitude.internalValue = undefined;
            this._customConnector.internalValue = undefined;
            this._datadog.internalValue = undefined;
            this._dynatrace.internalValue = undefined;
            this._googleAnalytics.internalValue = undefined;
            this._inforNexus.internalValue = undefined;
            this._marketo.internalValue = undefined;
            this._pardot.internalValue = undefined;
            this._redshift.internalValue = undefined;
            this._salesforce.internalValue = undefined;
            this._sapoData.internalValue = undefined;
            this._serviceNow.internalValue = undefined;
            this._singular.internalValue = undefined;
            this._slack.internalValue = undefined;
            this._snowflake.internalValue = undefined;
            this._trendmicro.internalValue = undefined;
            this._veeva.internalValue = undefined;
            this._zendesk.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._amplitude.internalValue = value.amplitude;
            this._customConnector.internalValue = value.customConnector;
            this._datadog.internalValue = value.datadog;
            this._dynatrace.internalValue = value.dynatrace;
            this._googleAnalytics.internalValue = value.googleAnalytics;
            this._inforNexus.internalValue = value.inforNexus;
            this._marketo.internalValue = value.marketo;
            this._pardot.internalValue = value.pardot;
            this._redshift.internalValue = value.redshift;
            this._salesforce.internalValue = value.salesforce;
            this._sapoData.internalValue = value.sapoData;
            this._serviceNow.internalValue = value.serviceNow;
            this._singular.internalValue = value.singular;
            this._slack.internalValue = value.slack;
            this._snowflake.internalValue = value.snowflake;
            this._trendmicro.internalValue = value.trendmicro;
            this._veeva.internalValue = value.veeva;
            this._zendesk.internalValue = value.zendesk;
        }
    }

    // amplitude - computed: true, optional: true, required: false
    private _amplitude = new AmplitudeConnectorProfileCredentialsPropertyOutputReference(this, "amplitude");
    public get amplitude() {
        return this._amplitude;
    }
    public putAmplitude(value: AmplitudeConnectorProfileCredentialsProperty) {
        this._amplitude.internalValue = value;
    }
    public resetAmplitude() {
        this._amplitude.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amplitudeInput() {
        return this._amplitude.internalValue;
    }

    // custom_connector - computed: true, optional: true, required: false
    private _customConnector = new CustomConnectorProfileCredentialsPropertyOutputReference(this, "custom_connector");
    public get customConnector() {
        return this._customConnector;
    }
    public putCustomConnector(value: CustomConnectorProfileCredentialsProperty) {
        this._customConnector.internalValue = value;
    }
    public resetCustomConnector() {
        this._customConnector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConnectorInput() {
        return this._customConnector.internalValue;
    }

    // datadog - computed: true, optional: true, required: false
    private _datadog = new DatadogConnectorProfileCredentialsPropertyOutputReference(this, "datadog");
    public get datadog() {
        return this._datadog;
    }
    public putDatadog(value: DatadogConnectorProfileCredentialsProperty) {
        this._datadog.internalValue = value;
    }
    public resetDatadog() {
        this._datadog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datadogInput() {
        return this._datadog.internalValue;
    }

    // dynatrace - computed: true, optional: true, required: false
    private _dynatrace = new DynatraceConnectorProfileCredentialsPropertyOutputReference(this, "dynatrace");
    public get dynatrace() {
        return this._dynatrace;
    }
    public putDynatrace(value: DynatraceConnectorProfileCredentialsProperty) {
        this._dynatrace.internalValue = value;
    }
    public resetDynatrace() {
        this._dynatrace.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynatraceInput() {
        return this._dynatrace.internalValue;
    }

    // google_analytics - computed: true, optional: true, required: false
    private _googleAnalytics = new GoogleAnalyticsConnectorProfileCredentialsPropertyOutputReference(this, "google_analytics");
    public get googleAnalytics() {
        return this._googleAnalytics;
    }
    public putGoogleAnalytics(value: GoogleAnalyticsConnectorProfileCredentialsProperty) {
        this._googleAnalytics.internalValue = value;
    }
    public resetGoogleAnalytics() {
        this._googleAnalytics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleAnalyticsInput() {
        return this._googleAnalytics.internalValue;
    }

    // infor_nexus - computed: true, optional: true, required: false
    private _inforNexus = new InforNexusConnectorProfileCredentialsPropertyOutputReference(this, "infor_nexus");
    public get inforNexus() {
        return this._inforNexus;
    }
    public putInforNexus(value: InforNexusConnectorProfileCredentialsProperty) {
        this._inforNexus.internalValue = value;
    }
    public resetInforNexus() {
        this._inforNexus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inforNexusInput() {
        return this._inforNexus.internalValue;
    }

    // marketo - computed: true, optional: true, required: false
    private _marketo = new MarketoConnectorProfileCredentialsPropertyOutputReference(this, "marketo");
    public get marketo() {
        return this._marketo;
    }
    public putMarketo(value: MarketoConnectorProfileCredentialsProperty) {
        this._marketo.internalValue = value;
    }
    public resetMarketo() {
        this._marketo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marketoInput() {
        return this._marketo.internalValue;
    }

    // pardot - computed: true, optional: true, required: false
    private _pardot = new PardotConnectorProfileCredentialsPropertyOutputReference(this, "pardot");
    public get pardot() {
        return this._pardot;
    }
    public putPardot(value: PardotConnectorProfileCredentialsProperty) {
        this._pardot.internalValue = value;
    }
    public resetPardot() {
        this._pardot.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pardotInput() {
        return this._pardot.internalValue;
    }

    // redshift - computed: true, optional: true, required: false
    private _redshift = new RedshiftConnectorProfileCredentialsPropertyOutputReference(this, "redshift");
    public get redshift() {
        return this._redshift;
    }
    public putRedshift(value: RedshiftConnectorProfileCredentialsProperty) {
        this._redshift.internalValue = value;
    }
    public resetRedshift() {
        this._redshift.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftInput() {
        return this._redshift.internalValue;
    }

    // salesforce - computed: true, optional: true, required: false
    private _salesforce = new SalesforceConnectorProfileCredentialsPropertyOutputReference(this, "salesforce");
    public get salesforce() {
        return this._salesforce;
    }
    public putSalesforce(value: SalesforceConnectorProfileCredentialsProperty) {
        this._salesforce.internalValue = value;
    }
    public resetSalesforce() {
        this._salesforce.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceInput() {
        return this._salesforce.internalValue;
    }

    // sapo_data - computed: true, optional: true, required: false
    private _sapoData = new SAPODataConnectorProfileCredentialsPropertyOutputReference(this, "sapo_data");
    public get sapoData() {
        return this._sapoData;
    }
    public putSapoData(value: SAPODataConnectorProfileCredentialsProperty) {
        this._sapoData.internalValue = value;
    }
    public resetSapoData() {
        this._sapoData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapoDataInput() {
        return this._sapoData.internalValue;
    }

    // service_now - computed: true, optional: true, required: false
    private _serviceNow = new ServiceNowConnectorProfileCredentialsPropertyOutputReference(this, "service_now");
    public get serviceNow() {
        return this._serviceNow;
    }
    public putServiceNow(value: ServiceNowConnectorProfileCredentialsProperty) {
        this._serviceNow.internalValue = value;
    }
    public resetServiceNow() {
        this._serviceNow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowInput() {
        return this._serviceNow.internalValue;
    }

    // singular - computed: true, optional: true, required: false
    private _singular = new SingularConnectorProfileCredentialsPropertyOutputReference(this, "singular");
    public get singular() {
        return this._singular;
    }
    public putSingular(value: SingularConnectorProfileCredentialsProperty) {
        this._singular.internalValue = value;
    }
    public resetSingular() {
        this._singular.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singularInput() {
        return this._singular.internalValue;
    }

    // slack - computed: true, optional: true, required: false
    private _slack = new SlackConnectorProfileCredentialsPropertyOutputReference(this, "slack");
    public get slack() {
        return this._slack;
    }
    public putSlack(value: SlackConnectorProfileCredentialsProperty) {
        this._slack.internalValue = value;
    }
    public resetSlack() {
        this._slack.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slackInput() {
        return this._slack.internalValue;
    }

    // snowflake - computed: true, optional: true, required: false
    private _snowflake = new SnowflakeConnectorProfileCredentialsPropertyOutputReference(this, "snowflake");
    public get snowflake() {
        return this._snowflake;
    }
    public putSnowflake(value: SnowflakeConnectorProfileCredentialsProperty) {
        this._snowflake.internalValue = value;
    }
    public resetSnowflake() {
        this._snowflake.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeInput() {
        return this._snowflake.internalValue;
    }

    // trendmicro - computed: true, optional: true, required: false
    private _trendmicro = new TrendmicroConnectorProfileCredentialsPropertyOutputReference(this, "trendmicro");
    public get trendmicro() {
        return this._trendmicro;
    }
    public putTrendmicro(value: TrendmicroConnectorProfileCredentialsProperty) {
        this._trendmicro.internalValue = value;
    }
    public resetTrendmicro() {
        this._trendmicro.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trendmicroInput() {
        return this._trendmicro.internalValue;
    }

    // veeva - computed: true, optional: true, required: false
    private _veeva = new VeevaConnectorProfileCredentialsPropertyOutputReference(this, "veeva");
    public get veeva() {
        return this._veeva;
    }
    public putVeeva(value: VeevaConnectorProfileCredentialsProperty) {
        this._veeva.internalValue = value;
    }
    public resetVeeva() {
        this._veeva.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get veevaInput() {
        return this._veeva.internalValue;
    }

    // zendesk - computed: true, optional: true, required: false
    private _zendesk = new ZendeskConnectorProfileCredentialsPropertyOutputReference(this, "zendesk");
    public get zendesk() {
        return this._zendesk;
    }
    public putZendesk(value: ZendeskConnectorProfileCredentialsProperty) {
        this._zendesk.internalValue = value;
    }
    public resetZendesk() {
        this._zendesk.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zendeskInput() {
        return this._zendesk.internalValue;
    }
}
export interface OAuth2PropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#o_auth_2_grant_type CcConnectorProfile#o_auth_2_grant_type}
    */
    readonly oAuth2GrantType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#token_url CcConnectorProfile#token_url}
    */
    readonly tokenUrl?: string;
    /**
    * A map for properties for custom connector Token Url.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#token_url_custom_properties CcConnectorProfile#token_url_custom_properties}
    */
    readonly tokenUrlCustomProperties?: { [key: string]: string };
}
export class OAuth2PropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuth2PropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._oAuth2GrantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2GrantType = this._oAuth2GrantType;
        }
        if (this._tokenUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl;
        }
        if (this._tokenUrlCustomProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrlCustomProperties = this._tokenUrlCustomProperties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2PropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._oAuth2GrantType = undefined;
            this._tokenUrl = undefined;
            this._tokenUrlCustomProperties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._oAuth2GrantType = value.oAuth2GrantType;
            this._tokenUrl = value.tokenUrl;
            this._tokenUrlCustomProperties = value.tokenUrlCustomProperties;
        }
    }

    // o_auth_2_grant_type - computed: true, optional: true, required: false
    private _oAuth2GrantType?: string; 
    public get oAuth2GrantType() {
        return this.getStringAttribute('o_auth_2_grant_type');
    }
    public set oAuth2GrantType(value: string) {
        this._oAuth2GrantType = value;
    }
    public resetOAuth2GrantType() {
        this._oAuth2GrantType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2GrantTypeInput() {
        return this._oAuth2GrantType;
    }

    // token_url - computed: true, optional: true, required: false
    private _tokenUrl?: string; 
    public get tokenUrl() {
        return this.getStringAttribute('token_url');
    }
    public set tokenUrl(value: string) {
        this._tokenUrl = value;
    }
    public resetTokenUrl() {
        this._tokenUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlInput() {
        return this._tokenUrl;
    }

    // token_url_custom_properties - computed: true, optional: true, required: false
    private _tokenUrlCustomProperties?: { [key: string]: string }; 
    public get tokenUrlCustomProperties() {
        return this.getStringMapAttribute('token_url_custom_properties');
    }
    public set tokenUrlCustomProperties(value: { [key: string]: string }) {
        this._tokenUrlCustomProperties = value;
    }
    public resetTokenUrlCustomProperties() {
        this._tokenUrlCustomProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlCustomPropertiesInput() {
        return this._tokenUrlCustomProperties;
    }
}
export interface CustomConnectorProfilePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#o_auth_2_properties CcConnectorProfile#o_auth_2_properties}
    */
    readonly oAuth2Properties?: OAuth2PropertiesProperty;
    /**
    * A map for properties for custom connector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#profile_properties CcConnectorProfile#profile_properties}
    */
    readonly profileProperties?: { [key: string]: string };
}
export class CustomConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._oAuth2Properties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2Properties = this._oAuth2Properties?.internalValue;
        }
        if (this._profileProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileProperties = this._profileProperties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._oAuth2Properties.internalValue = undefined;
            this._profileProperties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._oAuth2Properties.internalValue = value.oAuth2Properties;
            this._profileProperties = value.profileProperties;
        }
    }

    // o_auth_2_properties - computed: true, optional: true, required: false
    private _oAuth2Properties = new OAuth2PropertiesPropertyOutputReference(this, "o_auth_2_properties");
    public get oAuth2Properties() {
        return this._oAuth2Properties;
    }
    public putOAuth2Properties(value: OAuth2PropertiesProperty) {
        this._oAuth2Properties.internalValue = value;
    }
    public resetOAuth2Properties() {
        this._oAuth2Properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2PropertiesInput() {
        return this._oAuth2Properties.internalValue;
    }

    // profile_properties - computed: true, optional: true, required: false
    private _profileProperties?: { [key: string]: string }; 
    public get profileProperties() {
        return this.getStringMapAttribute('profile_properties');
    }
    public set profileProperties(value: { [key: string]: string }) {
        this._profileProperties = value;
    }
    public resetProfileProperties() {
        this._profileProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profilePropertiesInput() {
        return this._profileProperties;
    }
}
export interface DatadogConnectorProfilePropertiesProperty {
    /**
    * The location of the Datadog resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class DatadogConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatadogConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatadogConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface DynatraceConnectorProfilePropertiesProperty {
    /**
    * The location of the Dynatrace resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class DynatraceConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynatraceConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynatraceConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface InforNexusConnectorProfilePropertiesProperty {
    /**
    * The location of the InforNexus resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class InforNexusConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InforNexusConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InforNexusConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface MarketoConnectorProfilePropertiesProperty {
    /**
    * The location of the Marketo resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class MarketoConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MarketoConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MarketoConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface PardotConnectorProfilePropertiesProperty {
    /**
    * The Business unit id of Salesforce Pardot instance to be connected
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#business_unit_id CcConnectorProfile#business_unit_id}
    */
    readonly businessUnitId?: string;
    /**
    * The location of the Salesforce Pardot resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
    /**
    * Indicates whether the connector profile applies to a demo or production environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#is_sandbox_environment CcConnectorProfile#is_sandbox_environment}
    */
    readonly isSandboxEnvironment?: boolean | cdktn.IResolvable;
}
export class PardotConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PardotConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._businessUnitId !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessUnitId = this._businessUnitId;
        }
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        if (this._isSandboxEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.isSandboxEnvironment = this._isSandboxEnvironment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PardotConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._businessUnitId = undefined;
            this._instanceUrl = undefined;
            this._isSandboxEnvironment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._businessUnitId = value.businessUnitId;
            this._instanceUrl = value.instanceUrl;
            this._isSandboxEnvironment = value.isSandboxEnvironment;
        }
    }

    // business_unit_id - computed: true, optional: true, required: false
    private _businessUnitId?: string; 
    public get businessUnitId() {
        return this.getStringAttribute('business_unit_id');
    }
    public set businessUnitId(value: string) {
        this._businessUnitId = value;
    }
    public resetBusinessUnitId() {
        this._businessUnitId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessUnitIdInput() {
        return this._businessUnitId;
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }

    // is_sandbox_environment - computed: true, optional: true, required: false
    private _isSandboxEnvironment?: boolean | cdktn.IResolvable; 
    public get isSandboxEnvironment() {
        return this.getBooleanAttribute('is_sandbox_environment');
    }
    public set isSandboxEnvironment(value: boolean | cdktn.IResolvable) {
        this._isSandboxEnvironment = value;
    }
    public resetIsSandboxEnvironment() {
        this._isSandboxEnvironment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isSandboxEnvironmentInput() {
        return this._isSandboxEnvironment;
    }
}
export interface RedshiftConnectorProfilePropertiesProperty {
    /**
    * The name of the Amazon S3 bucket associated with Redshift.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#bucket_name CcConnectorProfile#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * The object key for the destination bucket in which Amazon AppFlow will place the ?les.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#bucket_prefix CcConnectorProfile#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * The unique identifier of the Amazon Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#cluster_identifier CcConnectorProfile#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that grants Amazon AppFlow access to the data through the Amazon Redshift Data API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#data_api_role_arn CcConnectorProfile#data_api_role_arn}
    */
    readonly dataApiRoleArn?: string;
    /**
    * The name of the Amazon Redshift database that will store the transferred data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#database_name CcConnectorProfile#database_name}
    */
    readonly databaseName?: string;
    /**
    * The JDBC URL of the Amazon Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#database_url CcConnectorProfile#database_url}
    */
    readonly databaseUrl?: string;
    /**
    * If Amazon AppFlow will connect to Amazon Redshift Serverless or Amazon Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#is_redshift_serverless CcConnectorProfile#is_redshift_serverless}
    */
    readonly isRedshiftServerless?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#role_arn CcConnectorProfile#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The name of the Amazon Redshift serverless workgroup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#workgroup_name CcConnectorProfile#workgroup_name}
    */
    readonly workgroupName?: string;
}
export class RedshiftConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._clusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        if (this._dataApiRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataApiRoleArn = this._dataApiRoleArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._databaseUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseUrl = this._databaseUrl;
        }
        if (this._isRedshiftServerless !== undefined) {
            hasAnyValues = true;
            internalValueResult.isRedshiftServerless = this._isRedshiftServerless;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._workgroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.workgroupName = this._workgroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._clusterIdentifier = undefined;
            this._dataApiRoleArn = undefined;
            this._databaseName = undefined;
            this._databaseUrl = undefined;
            this._isRedshiftServerless = undefined;
            this._roleArn = undefined;
            this._workgroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._clusterIdentifier = value.clusterIdentifier;
            this._dataApiRoleArn = value.dataApiRoleArn;
            this._databaseName = value.databaseName;
            this._databaseUrl = value.databaseUrl;
            this._isRedshiftServerless = value.isRedshiftServerless;
            this._roleArn = value.roleArn;
            this._workgroupName = value.workgroupName;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // data_api_role_arn - computed: true, optional: true, required: false
    private _dataApiRoleArn?: string; 
    public get dataApiRoleArn() {
        return this.getStringAttribute('data_api_role_arn');
    }
    public set dataApiRoleArn(value: string) {
        this._dataApiRoleArn = value;
    }
    public resetDataApiRoleArn() {
        this._dataApiRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataApiRoleArnInput() {
        return this._dataApiRoleArn;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // database_url - computed: true, optional: true, required: false
    private _databaseUrl?: string; 
    public get databaseUrl() {
        return this.getStringAttribute('database_url');
    }
    public set databaseUrl(value: string) {
        this._databaseUrl = value;
    }
    public resetDatabaseUrl() {
        this._databaseUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseUrlInput() {
        return this._databaseUrl;
    }

    // is_redshift_serverless - computed: true, optional: true, required: false
    private _isRedshiftServerless?: boolean | cdktn.IResolvable; 
    public get isRedshiftServerless() {
        return this.getBooleanAttribute('is_redshift_serverless');
    }
    public set isRedshiftServerless(value: boolean | cdktn.IResolvable) {
        this._isRedshiftServerless = value;
    }
    public resetIsRedshiftServerless() {
        this._isRedshiftServerless = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isRedshiftServerlessInput() {
        return this._isRedshiftServerless;
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

    // workgroup_name - computed: true, optional: true, required: false
    private _workgroupName?: string; 
    public get workgroupName() {
        return this.getStringAttribute('workgroup_name');
    }
    public set workgroupName(value: string) {
        this._workgroupName = value;
    }
    public resetWorkgroupName() {
        this._workgroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupNameInput() {
        return this._workgroupName;
    }
}
export interface SalesforceConnectorProfilePropertiesProperty {
    /**
    * The location of the Salesforce resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
    /**
    * Indicates whether the connector profile applies to a sandbox or production environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#is_sandbox_environment CcConnectorProfile#is_sandbox_environment}
    */
    readonly isSandboxEnvironment?: boolean | cdktn.IResolvable;
}
export class SalesforceConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        if (this._isSandboxEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.isSandboxEnvironment = this._isSandboxEnvironment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
            this._isSandboxEnvironment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
            this._isSandboxEnvironment = value.isSandboxEnvironment;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }

    // is_sandbox_environment - computed: true, optional: true, required: false
    private _isSandboxEnvironment?: boolean | cdktn.IResolvable; 
    public get isSandboxEnvironment() {
        return this.getBooleanAttribute('is_sandbox_environment');
    }
    public set isSandboxEnvironment(value: boolean | cdktn.IResolvable) {
        this._isSandboxEnvironment = value;
    }
    public resetIsSandboxEnvironment() {
        this._isSandboxEnvironment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isSandboxEnvironmentInput() {
        return this._isSandboxEnvironment;
    }
}
export interface OAuthPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#auth_code_url CcConnectorProfile#auth_code_url}
    */
    readonly authCodeUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#o_auth_scopes CcConnectorProfile#o_auth_scopes}
    */
    readonly oAuthScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#token_url CcConnectorProfile#token_url}
    */
    readonly tokenUrl?: string;
}
export class OAuthPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuthPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCodeUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCodeUrl = this._authCodeUrl;
        }
        if (this._oAuthScopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthScopes = this._oAuthScopes;
        }
        if (this._tokenUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuthPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCodeUrl = undefined;
            this._oAuthScopes = undefined;
            this._tokenUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCodeUrl = value.authCodeUrl;
            this._oAuthScopes = value.oAuthScopes;
            this._tokenUrl = value.tokenUrl;
        }
    }

    // auth_code_url - computed: true, optional: true, required: false
    private _authCodeUrl?: string; 
    public get authCodeUrl() {
        return this.getStringAttribute('auth_code_url');
    }
    public set authCodeUrl(value: string) {
        this._authCodeUrl = value;
    }
    public resetAuthCodeUrl() {
        this._authCodeUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeUrlInput() {
        return this._authCodeUrl;
    }

    // o_auth_scopes - computed: true, optional: true, required: false
    private _oAuthScopes?: string[]; 
    public get oAuthScopes() {
        return this.getListAttribute('o_auth_scopes');
    }
    public set oAuthScopes(value: string[]) {
        this._oAuthScopes = value;
    }
    public resetOAuthScopes() {
        this._oAuthScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopesInput() {
        return this._oAuthScopes;
    }

    // token_url - computed: true, optional: true, required: false
    private _tokenUrl?: string; 
    public get tokenUrl() {
        return this.getStringAttribute('token_url');
    }
    public set tokenUrl(value: string) {
        this._tokenUrl = value;
    }
    public resetTokenUrl() {
        this._tokenUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlInput() {
        return this._tokenUrl;
    }
}
export interface SAPODataConnectorProfilePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#application_host_url CcConnectorProfile#application_host_url}
    */
    readonly applicationHostUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#application_service_path CcConnectorProfile#application_service_path}
    */
    readonly applicationServicePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#client_number CcConnectorProfile#client_number}
    */
    readonly clientNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#logon_language CcConnectorProfile#logon_language}
    */
    readonly logonLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#o_auth_properties CcConnectorProfile#o_auth_properties}
    */
    readonly oAuthProperties?: OAuthPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#port_number CcConnectorProfile#port_number}
    */
    readonly portNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#private_link_service_name CcConnectorProfile#private_link_service_name}
    */
    readonly privateLinkServiceName?: string;
}
export class SAPODataConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SAPODataConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationHostUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationHostUrl = this._applicationHostUrl;
        }
        if (this._applicationServicePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationServicePath = this._applicationServicePath;
        }
        if (this._clientNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientNumber = this._clientNumber;
        }
        if (this._logonLanguage !== undefined) {
            hasAnyValues = true;
            internalValueResult.logonLanguage = this._logonLanguage;
        }
        if (this._oAuthProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthProperties = this._oAuthProperties?.internalValue;
        }
        if (this._portNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.portNumber = this._portNumber;
        }
        if (this._privateLinkServiceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SAPODataConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationHostUrl = undefined;
            this._applicationServicePath = undefined;
            this._clientNumber = undefined;
            this._logonLanguage = undefined;
            this._oAuthProperties.internalValue = undefined;
            this._portNumber = undefined;
            this._privateLinkServiceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationHostUrl = value.applicationHostUrl;
            this._applicationServicePath = value.applicationServicePath;
            this._clientNumber = value.clientNumber;
            this._logonLanguage = value.logonLanguage;
            this._oAuthProperties.internalValue = value.oAuthProperties;
            this._portNumber = value.portNumber;
            this._privateLinkServiceName = value.privateLinkServiceName;
        }
    }

    // application_host_url - computed: true, optional: true, required: false
    private _applicationHostUrl?: string; 
    public get applicationHostUrl() {
        return this.getStringAttribute('application_host_url');
    }
    public set applicationHostUrl(value: string) {
        this._applicationHostUrl = value;
    }
    public resetApplicationHostUrl() {
        this._applicationHostUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationHostUrlInput() {
        return this._applicationHostUrl;
    }

    // application_service_path - computed: true, optional: true, required: false
    private _applicationServicePath?: string; 
    public get applicationServicePath() {
        return this.getStringAttribute('application_service_path');
    }
    public set applicationServicePath(value: string) {
        this._applicationServicePath = value;
    }
    public resetApplicationServicePath() {
        this._applicationServicePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationServicePathInput() {
        return this._applicationServicePath;
    }

    // client_number - computed: true, optional: true, required: false
    private _clientNumber?: string; 
    public get clientNumber() {
        return this.getStringAttribute('client_number');
    }
    public set clientNumber(value: string) {
        this._clientNumber = value;
    }
    public resetClientNumber() {
        this._clientNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientNumberInput() {
        return this._clientNumber;
    }

    // logon_language - computed: true, optional: true, required: false
    private _logonLanguage?: string; 
    public get logonLanguage() {
        return this.getStringAttribute('logon_language');
    }
    public set logonLanguage(value: string) {
        this._logonLanguage = value;
    }
    public resetLogonLanguage() {
        this._logonLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logonLanguageInput() {
        return this._logonLanguage;
    }

    // o_auth_properties - computed: true, optional: true, required: false
    private _oAuthProperties = new OAuthPropertiesPropertyOutputReference(this, "o_auth_properties");
    public get oAuthProperties() {
        return this._oAuthProperties;
    }
    public putOAuthProperties(value: OAuthPropertiesProperty) {
        this._oAuthProperties.internalValue = value;
    }
    public resetOAuthProperties() {
        this._oAuthProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthPropertiesInput() {
        return this._oAuthProperties.internalValue;
    }

    // port_number - computed: true, optional: true, required: false
    private _portNumber?: number; 
    public get portNumber() {
        return this.getNumberAttribute('port_number');
    }
    public set portNumber(value: number) {
        this._portNumber = value;
    }
    public resetPortNumber() {
        this._portNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portNumberInput() {
        return this._portNumber;
    }

    // private_link_service_name - computed: true, optional: true, required: false
    private _privateLinkServiceName?: string; 
    public get privateLinkServiceName() {
        return this.getStringAttribute('private_link_service_name');
    }
    public set privateLinkServiceName(value: string) {
        this._privateLinkServiceName = value;
    }
    public resetPrivateLinkServiceName() {
        this._privateLinkServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateLinkServiceNameInput() {
        return this._privateLinkServiceName;
    }
}
export interface ServiceNowConnectorProfilePropertiesProperty {
    /**
    * The location of the ServiceNow resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class ServiceNowConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceNowConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceNowConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface SlackConnectorProfilePropertiesProperty {
    /**
    * The location of the Slack resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class SlackConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlackConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlackConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface SnowflakeConnectorProfilePropertiesProperty {
    /**
    * The name of the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#account_name CcConnectorProfile#account_name}
    */
    readonly accountName?: string;
    /**
    * The name of the Amazon S3 bucket associated with Snow?ake.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#bucket_name CcConnectorProfile#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * The bucket prefix that refers to the Amazon S3 bucket associated with Snow?ake.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#bucket_prefix CcConnectorProfile#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * The Snow?ake Private Link service name to be used for private data transfers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#private_link_service_name CcConnectorProfile#private_link_service_name}
    */
    readonly privateLinkServiceName?: string;
    /**
    * The region of the Snow?ake account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#region CcConnectorProfile#region}
    */
    readonly region?: string;
    /**
    * The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the
    * Snow?ake account. This is written in the following format: < Database>< Schema><Stage Name>.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#stage CcConnectorProfile#stage}
    */
    readonly stage?: string;
    /**
    * The name of the Snow?ake warehouse.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#warehouse CcConnectorProfile#warehouse}
    */
    readonly warehouse?: string;
}
export class SnowflakeConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnowflakeConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountName !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountName = this._accountName;
        }
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._privateLinkServiceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._stage !== undefined) {
            hasAnyValues = true;
            internalValueResult.stage = this._stage;
        }
        if (this._warehouse !== undefined) {
            hasAnyValues = true;
            internalValueResult.warehouse = this._warehouse;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnowflakeConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountName = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._privateLinkServiceName = undefined;
            this._region = undefined;
            this._stage = undefined;
            this._warehouse = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountName = value.accountName;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._privateLinkServiceName = value.privateLinkServiceName;
            this._region = value.region;
            this._stage = value.stage;
            this._warehouse = value.warehouse;
        }
    }

    // account_name - computed: true, optional: true, required: false
    private _accountName?: string; 
    public get accountName() {
        return this.getStringAttribute('account_name');
    }
    public set accountName(value: string) {
        this._accountName = value;
    }
    public resetAccountName() {
        this._accountName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountNameInput() {
        return this._accountName;
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // private_link_service_name - computed: true, optional: true, required: false
    private _privateLinkServiceName?: string; 
    public get privateLinkServiceName() {
        return this.getStringAttribute('private_link_service_name');
    }
    public set privateLinkServiceName(value: string) {
        this._privateLinkServiceName = value;
    }
    public resetPrivateLinkServiceName() {
        this._privateLinkServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateLinkServiceNameInput() {
        return this._privateLinkServiceName;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // stage - computed: true, optional: true, required: false
    private _stage?: string; 
    public get stage() {
        return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
        this._stage = value;
    }
    public resetStage() {
        this._stage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
        return this._stage;
    }

    // warehouse - computed: true, optional: true, required: false
    private _warehouse?: string; 
    public get warehouse() {
        return this.getStringAttribute('warehouse');
    }
    public set warehouse(value: string) {
        this._warehouse = value;
    }
    public resetWarehouse() {
        this._warehouse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warehouseInput() {
        return this._warehouse;
    }
}
export interface VeevaConnectorProfilePropertiesProperty {
    /**
    * The location of the Veeva resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class VeevaConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VeevaConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VeevaConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface ZendeskConnectorProfilePropertiesProperty {
    /**
    * The location of the Zendesk resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#instance_url CcConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
}
export class ZendeskConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZendeskConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZendeskConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface ConnectorProfilePropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#custom_connector CcConnectorProfile#custom_connector}
    */
    readonly customConnector?: CustomConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#datadog CcConnectorProfile#datadog}
    */
    readonly datadog?: DatadogConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#dynatrace CcConnectorProfile#dynatrace}
    */
    readonly dynatrace?: DynatraceConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#infor_nexus CcConnectorProfile#infor_nexus}
    */
    readonly inforNexus?: InforNexusConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#marketo CcConnectorProfile#marketo}
    */
    readonly marketo?: MarketoConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#pardot CcConnectorProfile#pardot}
    */
    readonly pardot?: PardotConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#redshift CcConnectorProfile#redshift}
    */
    readonly redshift?: RedshiftConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#salesforce CcConnectorProfile#salesforce}
    */
    readonly salesforce?: SalesforceConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#sapo_data CcConnectorProfile#sapo_data}
    */
    readonly sapoData?: SAPODataConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#service_now CcConnectorProfile#service_now}
    */
    readonly serviceNow?: ServiceNowConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#slack CcConnectorProfile#slack}
    */
    readonly slack?: SlackConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#snowflake CcConnectorProfile#snowflake}
    */
    readonly snowflake?: SnowflakeConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#veeva CcConnectorProfile#veeva}
    */
    readonly veeva?: VeevaConnectorProfilePropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#zendesk CcConnectorProfile#zendesk}
    */
    readonly zendesk?: ZendeskConnectorProfilePropertiesProperty;
}
export class ConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customConnector?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customConnector = this._customConnector?.internalValue;
        }
        if (this._datadog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datadog = this._datadog?.internalValue;
        }
        if (this._dynatrace?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynatrace = this._dynatrace?.internalValue;
        }
        if (this._inforNexus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inforNexus = this._inforNexus?.internalValue;
        }
        if (this._marketo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.marketo = this._marketo?.internalValue;
        }
        if (this._pardot?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pardot = this._pardot?.internalValue;
        }
        if (this._redshift?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshift = this._redshift?.internalValue;
        }
        if (this._salesforce?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforce = this._salesforce?.internalValue;
        }
        if (this._sapoData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapoData = this._sapoData?.internalValue;
        }
        if (this._serviceNow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNow = this._serviceNow?.internalValue;
        }
        if (this._slack?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slack = this._slack?.internalValue;
        }
        if (this._snowflake?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflake = this._snowflake?.internalValue;
        }
        if (this._veeva?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.veeva = this._veeva?.internalValue;
        }
        if (this._zendesk?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.zendesk = this._zendesk?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfilePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customConnector.internalValue = undefined;
            this._datadog.internalValue = undefined;
            this._dynatrace.internalValue = undefined;
            this._inforNexus.internalValue = undefined;
            this._marketo.internalValue = undefined;
            this._pardot.internalValue = undefined;
            this._redshift.internalValue = undefined;
            this._salesforce.internalValue = undefined;
            this._sapoData.internalValue = undefined;
            this._serviceNow.internalValue = undefined;
            this._slack.internalValue = undefined;
            this._snowflake.internalValue = undefined;
            this._veeva.internalValue = undefined;
            this._zendesk.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customConnector.internalValue = value.customConnector;
            this._datadog.internalValue = value.datadog;
            this._dynatrace.internalValue = value.dynatrace;
            this._inforNexus.internalValue = value.inforNexus;
            this._marketo.internalValue = value.marketo;
            this._pardot.internalValue = value.pardot;
            this._redshift.internalValue = value.redshift;
            this._salesforce.internalValue = value.salesforce;
            this._sapoData.internalValue = value.sapoData;
            this._serviceNow.internalValue = value.serviceNow;
            this._slack.internalValue = value.slack;
            this._snowflake.internalValue = value.snowflake;
            this._veeva.internalValue = value.veeva;
            this._zendesk.internalValue = value.zendesk;
        }
    }

    // custom_connector - computed: true, optional: true, required: false
    private _customConnector = new CustomConnectorProfilePropertiesPropertyOutputReference(this, "custom_connector");
    public get customConnector() {
        return this._customConnector;
    }
    public putCustomConnector(value: CustomConnectorProfilePropertiesProperty) {
        this._customConnector.internalValue = value;
    }
    public resetCustomConnector() {
        this._customConnector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customConnectorInput() {
        return this._customConnector.internalValue;
    }

    // datadog - computed: true, optional: true, required: false
    private _datadog = new DatadogConnectorProfilePropertiesPropertyOutputReference(this, "datadog");
    public get datadog() {
        return this._datadog;
    }
    public putDatadog(value: DatadogConnectorProfilePropertiesProperty) {
        this._datadog.internalValue = value;
    }
    public resetDatadog() {
        this._datadog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datadogInput() {
        return this._datadog.internalValue;
    }

    // dynatrace - computed: true, optional: true, required: false
    private _dynatrace = new DynatraceConnectorProfilePropertiesPropertyOutputReference(this, "dynatrace");
    public get dynatrace() {
        return this._dynatrace;
    }
    public putDynatrace(value: DynatraceConnectorProfilePropertiesProperty) {
        this._dynatrace.internalValue = value;
    }
    public resetDynatrace() {
        this._dynatrace.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynatraceInput() {
        return this._dynatrace.internalValue;
    }

    // infor_nexus - computed: true, optional: true, required: false
    private _inforNexus = new InforNexusConnectorProfilePropertiesPropertyOutputReference(this, "infor_nexus");
    public get inforNexus() {
        return this._inforNexus;
    }
    public putInforNexus(value: InforNexusConnectorProfilePropertiesProperty) {
        this._inforNexus.internalValue = value;
    }
    public resetInforNexus() {
        this._inforNexus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inforNexusInput() {
        return this._inforNexus.internalValue;
    }

    // marketo - computed: true, optional: true, required: false
    private _marketo = new MarketoConnectorProfilePropertiesPropertyOutputReference(this, "marketo");
    public get marketo() {
        return this._marketo;
    }
    public putMarketo(value: MarketoConnectorProfilePropertiesProperty) {
        this._marketo.internalValue = value;
    }
    public resetMarketo() {
        this._marketo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get marketoInput() {
        return this._marketo.internalValue;
    }

    // pardot - computed: true, optional: true, required: false
    private _pardot = new PardotConnectorProfilePropertiesPropertyOutputReference(this, "pardot");
    public get pardot() {
        return this._pardot;
    }
    public putPardot(value: PardotConnectorProfilePropertiesProperty) {
        this._pardot.internalValue = value;
    }
    public resetPardot() {
        this._pardot.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pardotInput() {
        return this._pardot.internalValue;
    }

    // redshift - computed: true, optional: true, required: false
    private _redshift = new RedshiftConnectorProfilePropertiesPropertyOutputReference(this, "redshift");
    public get redshift() {
        return this._redshift;
    }
    public putRedshift(value: RedshiftConnectorProfilePropertiesProperty) {
        this._redshift.internalValue = value;
    }
    public resetRedshift() {
        this._redshift.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftInput() {
        return this._redshift.internalValue;
    }

    // salesforce - computed: true, optional: true, required: false
    private _salesforce = new SalesforceConnectorProfilePropertiesPropertyOutputReference(this, "salesforce");
    public get salesforce() {
        return this._salesforce;
    }
    public putSalesforce(value: SalesforceConnectorProfilePropertiesProperty) {
        this._salesforce.internalValue = value;
    }
    public resetSalesforce() {
        this._salesforce.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceInput() {
        return this._salesforce.internalValue;
    }

    // sapo_data - computed: true, optional: true, required: false
    private _sapoData = new SAPODataConnectorProfilePropertiesPropertyOutputReference(this, "sapo_data");
    public get sapoData() {
        return this._sapoData;
    }
    public putSapoData(value: SAPODataConnectorProfilePropertiesProperty) {
        this._sapoData.internalValue = value;
    }
    public resetSapoData() {
        this._sapoData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapoDataInput() {
        return this._sapoData.internalValue;
    }

    // service_now - computed: true, optional: true, required: false
    private _serviceNow = new ServiceNowConnectorProfilePropertiesPropertyOutputReference(this, "service_now");
    public get serviceNow() {
        return this._serviceNow;
    }
    public putServiceNow(value: ServiceNowConnectorProfilePropertiesProperty) {
        this._serviceNow.internalValue = value;
    }
    public resetServiceNow() {
        this._serviceNow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowInput() {
        return this._serviceNow.internalValue;
    }

    // slack - computed: true, optional: true, required: false
    private _slack = new SlackConnectorProfilePropertiesPropertyOutputReference(this, "slack");
    public get slack() {
        return this._slack;
    }
    public putSlack(value: SlackConnectorProfilePropertiesProperty) {
        this._slack.internalValue = value;
    }
    public resetSlack() {
        this._slack.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slackInput() {
        return this._slack.internalValue;
    }

    // snowflake - computed: true, optional: true, required: false
    private _snowflake = new SnowflakeConnectorProfilePropertiesPropertyOutputReference(this, "snowflake");
    public get snowflake() {
        return this._snowflake;
    }
    public putSnowflake(value: SnowflakeConnectorProfilePropertiesProperty) {
        this._snowflake.internalValue = value;
    }
    public resetSnowflake() {
        this._snowflake.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeInput() {
        return this._snowflake.internalValue;
    }

    // veeva - computed: true, optional: true, required: false
    private _veeva = new VeevaConnectorProfilePropertiesPropertyOutputReference(this, "veeva");
    public get veeva() {
        return this._veeva;
    }
    public putVeeva(value: VeevaConnectorProfilePropertiesProperty) {
        this._veeva.internalValue = value;
    }
    public resetVeeva() {
        this._veeva.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get veevaInput() {
        return this._veeva.internalValue;
    }

    // zendesk - computed: true, optional: true, required: false
    private _zendesk = new ZendeskConnectorProfilePropertiesPropertyOutputReference(this, "zendesk");
    public get zendesk() {
        return this._zendesk;
    }
    public putZendesk(value: ZendeskConnectorProfilePropertiesProperty) {
        this._zendesk.internalValue = value;
    }
    public resetZendesk() {
        this._zendesk.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zendeskInput() {
        return this._zendesk.internalValue;
    }
}
export interface ConnectorProfileConfigProperty {
    /**
    * Connector specific configuration needed to create connector profile based on Authentication mechanism
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_profile_credentials CcConnectorProfile#connector_profile_credentials}
    */
    readonly connectorProfileCredentials?: ConnectorProfileCredentialsProperty;
    /**
    * Connector specific properties needed to create connector profile - currently not needed for Amplitude, Trendmicro, Googleanalytics and Singular
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appflow_connector_profile#connector_profile_properties CcConnectorProfile#connector_profile_properties}
    */
    readonly connectorProfileProperties?: ConnectorProfilePropertiesProperty;
}
export class ConnectorProfileConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorProfileConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectorProfileCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorProfileCredentials = this._connectorProfileCredentials?.internalValue;
        }
        if (this._connectorProfileProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorProfileProperties = this._connectorProfileProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorProfileConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectorProfileCredentials.internalValue = undefined;
            this._connectorProfileProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectorProfileCredentials.internalValue = value.connectorProfileCredentials;
            this._connectorProfileProperties.internalValue = value.connectorProfileProperties;
        }
    }

    // connector_profile_credentials - computed: true, optional: true, required: false
    private _connectorProfileCredentials = new ConnectorProfileCredentialsPropertyOutputReference(this, "connector_profile_credentials");
    public get connectorProfileCredentials() {
        return this._connectorProfileCredentials;
    }
    public putConnectorProfileCredentials(value: ConnectorProfileCredentialsProperty) {
        this._connectorProfileCredentials.internalValue = value;
    }
    public resetConnectorProfileCredentials() {
        this._connectorProfileCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProfileCredentialsInput() {
        return this._connectorProfileCredentials.internalValue;
    }

    // connector_profile_properties - computed: true, optional: true, required: false
    private _connectorProfileProperties = new ConnectorProfilePropertiesPropertyOutputReference(this, "connector_profile_properties");
    public get connectorProfileProperties() {
        return this._connectorProfileProperties;
    }
    public putConnectorProfileProperties(value: ConnectorProfilePropertiesProperty) {
        this._connectorProfileProperties.internalValue = value;
    }
    public resetConnectorProfileProperties() {
        this._connectorProfileProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorProfilePropertiesInput() {
        return this._connectorProfileProperties.internalValue;
    }
}
}
