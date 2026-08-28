// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOAuth2CredentialProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * The vendor of the OAuth2 credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#credential_provider_vendor CcOAuth2CredentialProvider#credential_provider_vendor}
    */
    readonly credentialProviderVendor: string;
    /**
    * The name of the OAuth2 credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#name CcOAuth2CredentialProvider#name}
    */
    readonly name: string;
    /**
    * The configuration settings for the OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#oauth_2_provider_config_input CcOAuth2CredentialProvider#oauth_2_provider_config_input}
    */
    readonly oauth2ProviderConfigInput?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputProperty;
    /**
    * Tags to assign to the OAuth2 credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#tags CcOAuth2CredentialProvider#tags}
    */
    readonly tags?: CcOAuth2CredentialProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider awscc_bedrockagentcore_o_auth_2_credential_provider}
*/
export class CcOAuth2CredentialProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_o_auth_2_credential_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOAuth2CredentialProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOAuth2CredentialProvider to import
    * @param importFromId The id of the existing CcOAuth2CredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOAuth2CredentialProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_o_auth_2_credential_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider awscc_bedrockagentcore_o_auth_2_credential_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOAuth2CredentialProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcOAuth2CredentialProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_o_auth_2_credential_provider',
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
        this._credentialProviderVendor = config.credentialProviderVendor;
        this._name = config.name;
        this._oauth2ProviderConfigInput.internalValue = config.oauth2ProviderConfigInput;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // callback_url - computed: true, optional: false, required: false
    public get callbackUrl() {
        return this.getStringAttribute('callback_url');
    }

    // client_secret_arn - computed: true, optional: false, required: false
    private _clientSecretArn = new CcOAuth2CredentialProvider.ClientSecretArnPropertyOutputReference(this, "client_secret_arn");
    public get clientSecretArn() {
        return this._clientSecretArn;
    }

    // client_secret_json_key - computed: true, optional: false, required: false
    public get clientSecretJsonKey() {
        return this.getStringAttribute('client_secret_json_key');
    }

    // client_secret_source - computed: true, optional: false, required: false
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // credential_provider_arn - computed: true, optional: false, required: false
    public get credentialProviderArn() {
        return this.getStringAttribute('credential_provider_arn');
    }

    // credential_provider_vendor - computed: false, optional: false, required: true
    private _credentialProviderVendor?: string; 
    public get credentialProviderVendor() {
        return this.getStringAttribute('credential_provider_vendor');
    }
    public set credentialProviderVendor(value: string) {
        this._credentialProviderVendor = value;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialProviderVendorInput() {
        return this._credentialProviderVendor;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
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

    // oauth_2_provider_config_input - computed: true, optional: true, required: false
    private _oauth2ProviderConfigInput = new CcOAuth2CredentialProvider.Oauth2ProviderConfigInputPropertyOutputReference(this, "oauth_2_provider_config_input");
    public get oauth2ProviderConfigInput() {
        return this._oauth2ProviderConfigInput;
    }
    public putOauth2ProviderConfigInput(value: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputProperty) {
        this._oauth2ProviderConfigInput.internalValue = value;
    }
    public resetOauth2ProviderConfigInput() {
        this._oauth2ProviderConfigInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauth2ProviderConfigInputInput() {
        return this._oauth2ProviderConfigInput.internalValue;
    }

    // oauth_2_provider_config_output - computed: true, optional: false, required: false
    private _oauth2ProviderConfigOutput = new CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPropertyOutputReference(this, "oauth_2_provider_config_output");
    public get oauth2ProviderConfigOutput() {
        return this._oauth2ProviderConfigOutput;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOAuth2CredentialProvider.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOAuth2CredentialProvider.TagProperty[] | cdktn.IResolvable) {
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
            credential_provider_vendor: cdktn.stringToTerraform(this._credentialProviderVendor),
            name: cdktn.stringToTerraform(this._name),
            oauth_2_provider_config_input: ccOAuth2CredentialProviderOauth2ProviderConfigInputPropertyToTerraform(this._oauth2ProviderConfigInput.internalValue),
            tags: cdktn.listMapper(ccOAuth2CredentialProviderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            credential_provider_vendor: {
                value: cdktn.stringToHclTerraform(this._credentialProviderVendor),
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
            oauth_2_provider_config_input: {
                value: ccOAuth2CredentialProviderOauth2ProviderConfigInputPropertyToHclTerraform(this._oauth2ProviderConfigInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOAuth2CredentialProvider.Oauth2ProviderConfigInputProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOAuth2CredentialProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOAuth2CredentialProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOAuth2CredentialProviderClientSecretArnPropertyToTerraform(struct?: CcOAuth2CredentialProvider.ClientSecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderClientSecretArnPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.ClientSecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderSecretReferencePropertyToTerraform(struct?: CcOAuth2CredentialProvider.SecretReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderSecretReferencePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.SecretReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderAtlassianOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.AtlassianOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderSecretReferencePropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    }
}


export function ccOAuth2CredentialProviderAtlassianOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.AtlassianOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderSecretReferencePropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretReferenceProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2AuthorizationServerMetadataPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2AuthorizationServerMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        response_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseTypes),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    }
}


export function ccOAuth2CredentialProviderOauth2AuthorizationServerMetadataPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2AuthorizationServerMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        token_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2DiscoveryPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2DiscoveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_server_metadata: ccOAuth2CredentialProviderOauth2AuthorizationServerMetadataPropertyToTerraform(struct!.authorizationServerMetadata),
        discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    }
}


export function ccOAuth2CredentialProviderOauth2DiscoveryPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2DiscoveryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_server_metadata: {
            value: ccOAuth2CredentialProviderOauth2AuthorizationServerMetadataPropertyToHclTerraform(struct!.authorizationServerMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2AuthorizationServerMetadataProperty",
        },
        discovery_url: {
            value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderTokenExchangeGrantTypeConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.TokenExchangeGrantTypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actor_token_content: cdktn.stringToTerraform(struct!.actorTokenContent),
        actor_token_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actorTokenScopes),
    }
}


export function ccOAuth2CredentialProviderTokenExchangeGrantTypeConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.TokenExchangeGrantTypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actor_token_content: {
            value: cdktn.stringToHclTerraform(struct!.actorTokenContent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        actor_token_scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actorTokenScopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOnBehalfOfTokenExchangeConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.OnBehalfOfTokenExchangeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        grant_type: cdktn.stringToTerraform(struct!.grantType),
        token_exchange_grant_type_config: ccOAuth2CredentialProviderTokenExchangeGrantTypeConfigPropertyToTerraform(struct!.tokenExchangeGrantTypeConfig),
    }
}


export function ccOAuth2CredentialProviderOnBehalfOfTokenExchangeConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.OnBehalfOfTokenExchangeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        grant_type: {
            value: cdktn.stringToHclTerraform(struct!.grantType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_exchange_grant_type_config: {
            value: ccOAuth2CredentialProviderTokenExchangeGrantTypeConfigPropertyToHclTerraform(struct!.tokenExchangeGrantTypeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TokenExchangeGrantTypeConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderManagedVpcResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.ManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
        routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
        vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
    }
}


export function ccOAuth2CredentialProviderManagedVpcResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.ManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_domain: {
            value: cdktn.stringToHclTerraform(struct!.routingDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        vpc_identifier: {
            value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderSelfManagedLatticeResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
    }
}


export function ccOAuth2CredentialProviderSelfManagedLatticeResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_identifier: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderPrivateEndpointPropertyToTerraform(struct?: CcOAuth2CredentialProvider.PrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_vpc_resource: ccOAuth2CredentialProviderManagedVpcResourcePropertyToTerraform(struct!.managedVpcResource),
        self_managed_lattice_resource: ccOAuth2CredentialProviderSelfManagedLatticeResourcePropertyToTerraform(struct!.selfManagedLatticeResource),
    }
}


export function ccOAuth2CredentialProviderPrivateEndpointPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.PrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_vpc_resource: {
            value: ccOAuth2CredentialProviderManagedVpcResourcePropertyToHclTerraform(struct!.managedVpcResource),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedVpcResourceProperty",
        },
        self_managed_lattice_resource: {
            value: ccOAuth2CredentialProviderSelfManagedLatticeResourcePropertyToHclTerraform(struct!.selfManagedLatticeResource),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedLatticeResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
        routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
        vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        routing_domain: {
            value: cdktn.stringToHclTerraform(struct!.routingDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        vpc_identifier: {
            value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_identifier: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        managed_vpc_resource: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToTerraform(struct!.managedVpcResource),
        self_managed_lattice_resource: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct!.selfManagedLatticeResource),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        managed_vpc_resource: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct!.managedVpcResource),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty",
        },
        self_managed_lattice_resource: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct!.selfManagedLatticeResource),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderPrivateEndpointOverridePropertyToTerraform(struct?: CcOAuth2CredentialProvider.PrivateEndpointOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain: cdktn.stringToTerraform(struct!.domain),
        private_endpoint: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointPropertyToTerraform(struct!.privateEndpoint),
    }
}


export function ccOAuth2CredentialProviderPrivateEndpointOverridePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.PrivateEndpointOverrideProperty | cdktn.IResolvable): any {
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
        private_endpoint: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointPropertyToHclTerraform(struct!.privateEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderKmsKeySourceTypePropertyToTerraform(struct?: CcOAuth2CredentialProvider.KmsKeySourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccOAuth2CredentialProviderKmsKeySourceTypePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.KmsKeySourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderPrivateKeySourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.PrivateKeySourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_source: ccOAuth2CredentialProviderKmsKeySourceTypePropertyToTerraform(struct!.kmsKeySource),
    }
}


export function ccOAuth2CredentialProviderPrivateKeySourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.PrivateKeySourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_source: {
            value: ccOAuth2CredentialProviderKmsKeySourceTypePropertyToHclTerraform(struct!.kmsKeySource),
            isBlock: true,
            type: "struct",
            storageClassType: "KmsKeySourceTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderPrivateKeyJwtConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.PrivateKeyJwtConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_header_claims: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalHeaderClaims),
        additional_payload_claims: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalPayloadClaims),
        private_key_source: ccOAuth2CredentialProviderPrivateKeySourcePropertyToTerraform(struct!.privateKeySource),
        signing_algorithm: cdktn.stringToTerraform(struct!.signingAlgorithm),
    }
}


export function ccOAuth2CredentialProviderPrivateKeyJwtConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.PrivateKeyJwtConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_header_claims: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalHeaderClaims),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        additional_payload_claims: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalPayloadClaims),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        private_key_source: {
            value: ccOAuth2CredentialProviderPrivateKeySourcePropertyToHclTerraform(struct!.privateKeySource),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeySourceProperty",
        },
        signing_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.signingAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderCustomOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.CustomOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_authentication_method: cdktn.stringToTerraform(struct!.clientAuthenticationMethod),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
        oauth_discovery: ccOAuth2CredentialProviderOauth2DiscoveryPropertyToTerraform(struct!.oauthDiscovery),
        on_behalf_of_token_exchange_config: ccOAuth2CredentialProviderOnBehalfOfTokenExchangeConfigPropertyToTerraform(struct!.onBehalfOfTokenExchangeConfig),
        private_endpoint: ccOAuth2CredentialProviderPrivateEndpointPropertyToTerraform(struct!.privateEndpoint),
        private_endpoint_overrides: cdktn.listMapper(ccOAuth2CredentialProviderPrivateEndpointOverridePropertyToTerraform, false)(struct!.privateEndpointOverrides),
        private_key_jwt_config: ccOAuth2CredentialProviderPrivateKeyJwtConfigPropertyToTerraform(struct!.privateKeyJwtConfig),
    }
}


export function ccOAuth2CredentialProviderCustomOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.CustomOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_authentication_method: {
            value: cdktn.stringToHclTerraform(struct!.clientAuthenticationMethod),
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        oauth_discovery: {
            value: ccOAuth2CredentialProviderOauth2DiscoveryPropertyToHclTerraform(struct!.oauthDiscovery),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2DiscoveryProperty",
        },
        on_behalf_of_token_exchange_config: {
            value: ccOAuth2CredentialProviderOnBehalfOfTokenExchangeConfigPropertyToHclTerraform(struct!.onBehalfOfTokenExchangeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "OnBehalfOfTokenExchangeConfigProperty",
        },
        private_endpoint: {
            value: ccOAuth2CredentialProviderPrivateEndpointPropertyToHclTerraform(struct!.privateEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateEndpointProperty",
        },
        private_endpoint_overrides: {
            value: cdktn.listMapperHcl(ccOAuth2CredentialProviderPrivateEndpointOverridePropertyToHclTerraform, false)(struct!.privateEndpointOverrides),
            isBlock: true,
            type: "list",
            storageClassType: "PrivateEndpointOverridePropertyList",
        },
        private_key_jwt_config: {
            value: ccOAuth2CredentialProviderPrivateKeyJwtConfigPropertyToHclTerraform(struct!.privateKeyJwtConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeyJwtConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderGithubOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.GithubOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    }
}


export function ccOAuth2CredentialProviderGithubOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.GithubOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderGoogleOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.GoogleOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    }
}


export function ccOAuth2CredentialProviderGoogleOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.GoogleOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderIncludedOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.IncludedOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
        issuer: cdktn.stringToTerraform(struct!.issuer),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    }
}


export function ccOAuth2CredentialProviderIncludedOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.IncludedOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderLinkedinOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.LinkedinOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    }
}


export function ccOAuth2CredentialProviderLinkedinOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.LinkedinOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderMicrosoftOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.MicrosoftOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
        tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    }
}


export function ccOAuth2CredentialProviderMicrosoftOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.MicrosoftOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenant_id: {
            value: cdktn.stringToHclTerraform(struct!.tenantId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderSalesforceOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.SalesforceOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    }
}


export function ccOAuth2CredentialProviderSalesforceOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.SalesforceOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        json_key: {
            value: cdktn.stringToHclTerraform(struct!.jsonKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderSlackOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.SlackOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        client_secret_config: ccOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigPropertyToTerraform(struct!.clientSecretConfig),
        client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    }
}


export function ccOAuth2CredentialProviderSlackOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.SlackOauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
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
        client_secret_config: {
            value: ccOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigPropertyToHclTerraform(struct!.clientSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty",
        },
        client_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        atlassian_oauth_2_provider_config: ccOAuth2CredentialProviderAtlassianOauth2ProviderConfigInputPropertyToTerraform(struct!.atlassianOauth2ProviderConfig),
        custom_oauth_2_provider_config: ccOAuth2CredentialProviderCustomOauth2ProviderConfigInputPropertyToTerraform(struct!.customOauth2ProviderConfig),
        github_oauth_2_provider_config: ccOAuth2CredentialProviderGithubOauth2ProviderConfigInputPropertyToTerraform(struct!.githubOauth2ProviderConfig),
        google_oauth_2_provider_config: ccOAuth2CredentialProviderGoogleOauth2ProviderConfigInputPropertyToTerraform(struct!.googleOauth2ProviderConfig),
        included_oauth_2_provider_config: ccOAuth2CredentialProviderIncludedOauth2ProviderConfigInputPropertyToTerraform(struct!.includedOauth2ProviderConfig),
        linkedin_oauth_2_provider_config: ccOAuth2CredentialProviderLinkedinOauth2ProviderConfigInputPropertyToTerraform(struct!.linkedinOauth2ProviderConfig),
        microsoft_oauth_2_provider_config: ccOAuth2CredentialProviderMicrosoftOauth2ProviderConfigInputPropertyToTerraform(struct!.microsoftOauth2ProviderConfig),
        salesforce_oauth_2_provider_config: ccOAuth2CredentialProviderSalesforceOauth2ProviderConfigInputPropertyToTerraform(struct!.salesforceOauth2ProviderConfig),
        slack_oauth_2_provider_config: ccOAuth2CredentialProviderSlackOauth2ProviderConfigInputPropertyToTerraform(struct!.slackOauth2ProviderConfig),
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigInputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        atlassian_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderAtlassianOauth2ProviderConfigInputPropertyToHclTerraform(struct!.atlassianOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AtlassianOauth2ProviderConfigInputProperty",
        },
        custom_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderCustomOauth2ProviderConfigInputPropertyToHclTerraform(struct!.customOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomOauth2ProviderConfigInputProperty",
        },
        github_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderGithubOauth2ProviderConfigInputPropertyToHclTerraform(struct!.githubOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "GithubOauth2ProviderConfigInputProperty",
        },
        google_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderGoogleOauth2ProviderConfigInputPropertyToHclTerraform(struct!.googleOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "GoogleOauth2ProviderConfigInputProperty",
        },
        included_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderIncludedOauth2ProviderConfigInputPropertyToHclTerraform(struct!.includedOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "IncludedOauth2ProviderConfigInputProperty",
        },
        linkedin_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderLinkedinOauth2ProviderConfigInputPropertyToHclTerraform(struct!.linkedinOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LinkedinOauth2ProviderConfigInputProperty",
        },
        microsoft_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderMicrosoftOauth2ProviderConfigInputPropertyToHclTerraform(struct!.microsoftOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MicrosoftOauth2ProviderConfigInputProperty",
        },
        salesforce_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderSalesforceOauth2ProviderConfigInputPropertyToHclTerraform(struct!.salesforceOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SalesforceOauth2ProviderConfigInputProperty",
        },
        slack_oauth_2_provider_config: {
            value: ccOAuth2CredentialProviderSlackOauth2ProviderConfigInputPropertyToHclTerraform(struct!.slackOauth2ProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SlackOauth2ProviderConfigInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuth2CredentialProviderAuthorizationServerMetadataPropertyToTerraform(struct?: CcOAuth2CredentialProvider.AuthorizationServerMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderAuthorizationServerMetadataPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.AuthorizationServerMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauthDiscoveryPropertyToTerraform(struct?: CcOAuth2CredentialProvider.OauthDiscoveryProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauthDiscoveryPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.OauthDiscoveryProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderPrivateEndpointOverridesPropertyToTerraform(struct?: CcOAuth2CredentialProvider.PrivateEndpointOverridesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderPrivateEndpointOverridesPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.PrivateEndpointOverridesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderKmsKeySourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.KmsKeySourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderKmsKeySourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.KmsKeySourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourcePropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourcePropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateKeyJwtConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPrivateKeyJwtConfigPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputPrivateKeyJwtConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPropertyToTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOAuth2CredentialProviderOauth2ProviderConfigOutputPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.Oauth2ProviderConfigOutputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOAuth2CredentialProviderTagPropertyToTerraform(struct?: CcOAuth2CredentialProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOAuth2CredentialProviderTagPropertyToHclTerraform(struct?: CcOAuth2CredentialProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOAuth2CredentialProvider {
export interface ClientSecretArnProperty {
}
export class ClientSecretArnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientSecretArnProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientSecretArnProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface SecretReferenceProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class SecretReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecretReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecretReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface AtlassianOauth2ProviderConfigInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: SecretReferenceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
}
export class AtlassianOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AtlassianOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
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
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AtlassianOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
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
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new SecretReferencePropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: SecretReferenceProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }
}
export interface Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface Oauth2AuthorizationServerMetadataProperty {
    /**
    * The authorization endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#authorization_endpoint CcOAuth2CredentialProvider#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * The issuer URL for the OAuth2 authorization server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#issuer CcOAuth2CredentialProvider#issuer}
    */
    readonly issuer?: string;
    /**
    * The supported response types
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#response_types CcOAuth2CredentialProvider#response_types}
    */
    readonly responseTypes?: string[];
    /**
    * The token endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#token_endpoint CcOAuth2CredentialProvider#token_endpoint}
    */
    readonly tokenEndpoint?: string;
}
export class Oauth2AuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2AuthorizationServerMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._responseTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseTypes = this._responseTypes;
        }
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2AuthorizationServerMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = undefined;
            this._issuer = undefined;
            this._responseTypes = undefined;
            this._tokenEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._issuer = value.issuer;
            this._responseTypes = value.responseTypes;
            this._tokenEndpoint = value.tokenEndpoint;
        }
    }

    // authorization_endpoint - computed: true, optional: true, required: false
    private _authorizationEndpoint?: string; 
    public get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    public set authorizationEndpoint(value: string) {
        this._authorizationEndpoint = value;
    }
    public resetAuthorizationEndpoint() {
        this._authorizationEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationEndpointInput() {
        return this._authorizationEndpoint;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }

    // response_types - computed: true, optional: true, required: false
    private _responseTypes?: string[]; 
    public get responseTypes() {
        return this.getListAttribute('response_types');
    }
    public set responseTypes(value: string[]) {
        this._responseTypes = value;
    }
    public resetResponseTypes() {
        this._responseTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTypesInput() {
        return this._responseTypes;
    }

    // token_endpoint - computed: true, optional: true, required: false
    private _tokenEndpoint?: string; 
    public get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    public set tokenEndpoint(value: string) {
        this._tokenEndpoint = value;
    }
    public resetTokenEndpoint() {
        this._tokenEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenEndpointInput() {
        return this._tokenEndpoint;
    }
}
export interface Oauth2DiscoveryProperty {
    /**
    * Authorization server metadata for the OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#authorization_server_metadata CcOAuth2CredentialProvider#authorization_server_metadata}
    */
    readonly authorizationServerMetadata?: Oauth2AuthorizationServerMetadataProperty;
    /**
    * The discovery URL for the OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#discovery_url CcOAuth2CredentialProvider#discovery_url}
    */
    readonly discoveryUrl?: string;
}
export class Oauth2DiscoveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2DiscoveryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationServerMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationServerMetadata = this._authorizationServerMetadata?.internalValue;
        }
        if (this._discoveryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.discoveryUrl = this._discoveryUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2DiscoveryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationServerMetadata.internalValue = undefined;
            this._discoveryUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationServerMetadata.internalValue = value.authorizationServerMetadata;
            this._discoveryUrl = value.discoveryUrl;
        }
    }

    // authorization_server_metadata - computed: true, optional: true, required: false
    private _authorizationServerMetadata = new Oauth2AuthorizationServerMetadataPropertyOutputReference(this, "authorization_server_metadata");
    public get authorizationServerMetadata() {
        return this._authorizationServerMetadata;
    }
    public putAuthorizationServerMetadata(value: Oauth2AuthorizationServerMetadataProperty) {
        this._authorizationServerMetadata.internalValue = value;
    }
    public resetAuthorizationServerMetadata() {
        this._authorizationServerMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationServerMetadataInput() {
        return this._authorizationServerMetadata.internalValue;
    }

    // discovery_url - computed: true, optional: true, required: false
    private _discoveryUrl?: string; 
    public get discoveryUrl() {
        return this.getStringAttribute('discovery_url');
    }
    public set discoveryUrl(value: string) {
        this._discoveryUrl = value;
    }
    public resetDiscoveryUrl() {
        this._discoveryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get discoveryUrlInput() {
        return this._discoveryUrl;
    }
}
export interface TokenExchangeGrantTypeConfigProperty {
    /**
    * The actor token content type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#actor_token_content CcOAuth2CredentialProvider#actor_token_content}
    */
    readonly actorTokenContent?: string;
    /**
    * The actor token scopes. Only valid when ActorTokenContent is M2M.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#actor_token_scopes CcOAuth2CredentialProvider#actor_token_scopes}
    */
    readonly actorTokenScopes?: string[];
}
export class TokenExchangeGrantTypeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TokenExchangeGrantTypeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actorTokenContent !== undefined) {
            hasAnyValues = true;
            internalValueResult.actorTokenContent = this._actorTokenContent;
        }
        if (this._actorTokenScopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.actorTokenScopes = this._actorTokenScopes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TokenExchangeGrantTypeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actorTokenContent = undefined;
            this._actorTokenScopes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actorTokenContent = value.actorTokenContent;
            this._actorTokenScopes = value.actorTokenScopes;
        }
    }

    // actor_token_content - computed: true, optional: true, required: false
    private _actorTokenContent?: string; 
    public get actorTokenContent() {
        return this.getStringAttribute('actor_token_content');
    }
    public set actorTokenContent(value: string) {
        this._actorTokenContent = value;
    }
    public resetActorTokenContent() {
        this._actorTokenContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actorTokenContentInput() {
        return this._actorTokenContent;
    }

    // actor_token_scopes - computed: true, optional: true, required: false
    private _actorTokenScopes?: string[]; 
    public get actorTokenScopes() {
        return this.getListAttribute('actor_token_scopes');
    }
    public set actorTokenScopes(value: string[]) {
        this._actorTokenScopes = value;
    }
    public resetActorTokenScopes() {
        this._actorTokenScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actorTokenScopesInput() {
        return this._actorTokenScopes;
    }
}
export interface OnBehalfOfTokenExchangeConfigProperty {
    /**
    * The grant type for on-behalf-of token exchange
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#grant_type CcOAuth2CredentialProvider#grant_type}
    */
    readonly grantType?: string;
    /**
    * Configuration for RFC 8693 Token Exchange
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#token_exchange_grant_type_config CcOAuth2CredentialProvider#token_exchange_grant_type_config}
    */
    readonly tokenExchangeGrantTypeConfig?: TokenExchangeGrantTypeConfigProperty;
}
export class OnBehalfOfTokenExchangeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnBehalfOfTokenExchangeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._grantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.grantType = this._grantType;
        }
        if (this._tokenExchangeGrantTypeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenExchangeGrantTypeConfig = this._tokenExchangeGrantTypeConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnBehalfOfTokenExchangeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._grantType = undefined;
            this._tokenExchangeGrantTypeConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._grantType = value.grantType;
            this._tokenExchangeGrantTypeConfig.internalValue = value.tokenExchangeGrantTypeConfig;
        }
    }

    // grant_type - computed: true, optional: true, required: false
    private _grantType?: string; 
    public get grantType() {
        return this.getStringAttribute('grant_type');
    }
    public set grantType(value: string) {
        this._grantType = value;
    }
    public resetGrantType() {
        this._grantType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantTypeInput() {
        return this._grantType;
    }

    // token_exchange_grant_type_config - computed: true, optional: true, required: false
    private _tokenExchangeGrantTypeConfig = new TokenExchangeGrantTypeConfigPropertyOutputReference(this, "token_exchange_grant_type_config");
    public get tokenExchangeGrantTypeConfig() {
        return this._tokenExchangeGrantTypeConfig;
    }
    public putTokenExchangeGrantTypeConfig(value: TokenExchangeGrantTypeConfigProperty) {
        this._tokenExchangeGrantTypeConfig.internalValue = value;
    }
    public resetTokenExchangeGrantTypeConfig() {
        this._tokenExchangeGrantTypeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenExchangeGrantTypeConfigInput() {
        return this._tokenExchangeGrantTypeConfig.internalValue;
    }
}
export interface ManagedVpcResourceProperty {
    /**
    * The IP address type for the resource configuration endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#endpoint_ip_address_type CcOAuth2CredentialProvider#endpoint_ip_address_type}
    */
    readonly endpointIpAddressType?: string;
    /**
    * An intermediate publicly resolvable domain used as the VPC Lattice resource configuration endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#routing_domain CcOAuth2CredentialProvider#routing_domain}
    */
    readonly routingDomain?: string;
    /**
    * The security group IDs to associate with the VPC Lattice resource gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#security_group_ids CcOAuth2CredentialProvider#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The subnet IDs within the VPC where the VPC Lattice resource gateway is placed
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#subnet_ids CcOAuth2CredentialProvider#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Tags to apply to the managed VPC Lattice resource gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#tags CcOAuth2CredentialProvider#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The ID of the VPC that contains your private resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#vpc_identifier CcOAuth2CredentialProvider#vpc_identifier}
    */
    readonly vpcIdentifier?: string;
}
export class ManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedVpcResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointIpAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
        }
        if (this._routingDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingDomain = this._routingDomain;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._vpcIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcIdentifier = this._vpcIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedVpcResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = undefined;
            this._routingDomain = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
            this._tags = undefined;
            this._vpcIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = value.endpointIpAddressType;
            this._routingDomain = value.routingDomain;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._tags = value.tags;
            this._vpcIdentifier = value.vpcIdentifier;
        }
    }

    // endpoint_ip_address_type - computed: true, optional: true, required: false
    private _endpointIpAddressType?: string; 
    public get endpointIpAddressType() {
        return this.getStringAttribute('endpoint_ip_address_type');
    }
    public set endpointIpAddressType(value: string) {
        this._endpointIpAddressType = value;
    }
    public resetEndpointIpAddressType() {
        this._endpointIpAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIpAddressTypeInput() {
        return this._endpointIpAddressType;
    }

    // routing_domain - computed: true, optional: true, required: false
    private _routingDomain?: string; 
    public get routingDomain() {
        return this.getStringAttribute('routing_domain');
    }
    public set routingDomain(value: string) {
        this._routingDomain = value;
    }
    public resetRoutingDomain() {
        this._routingDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingDomainInput() {
        return this._routingDomain;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
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

    // vpc_identifier - computed: true, optional: true, required: false
    private _vpcIdentifier?: string; 
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
    public set vpcIdentifier(value: string) {
        this._vpcIdentifier = value;
    }
    public resetVpcIdentifier() {
        this._vpcIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdentifierInput() {
        return this._vpcIdentifier;
    }
}
export interface SelfManagedLatticeResourceProperty {
    /**
    * The ARN or ID of the VPC Lattice resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#resource_configuration_identifier CcOAuth2CredentialProvider#resource_configuration_identifier}
    */
    readonly resourceConfigurationIdentifier?: string;
}
export class SelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
        }
    }

    // resource_configuration_identifier - computed: true, optional: true, required: false
    private _resourceConfigurationIdentifier?: string; 
    public get resourceConfigurationIdentifier() {
        return this.getStringAttribute('resource_configuration_identifier');
    }
    public set resourceConfigurationIdentifier(value: string) {
        this._resourceConfigurationIdentifier = value;
    }
    public resetResourceConfigurationIdentifier() {
        this._resourceConfigurationIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationIdentifierInput() {
        return this._resourceConfigurationIdentifier;
    }
}
export interface PrivateEndpointProperty {
    /**
    * Configuration for a managed VPC Lattice resource. AgentCore creates and manages the VPC Lattice resource gateway and resource configuration on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#managed_vpc_resource CcOAuth2CredentialProvider#managed_vpc_resource}
    */
    readonly managedVpcResource?: ManagedVpcResourceProperty;
    /**
    * Configuration for a self-managed VPC Lattice resource. You create and manage the VPC Lattice resource gateway and resource configuration, then provide the resource configuration identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#self_managed_lattice_resource CcOAuth2CredentialProvider#self_managed_lattice_resource}
    */
    readonly selfManagedLatticeResource?: SelfManagedLatticeResourceProperty;
}
export class PrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._managedVpcResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
        }
        if (this._selfManagedLatticeResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = undefined;
            this._selfManagedLatticeResource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = value.managedVpcResource;
            this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
        }
    }

    // managed_vpc_resource - computed: true, optional: true, required: false
    private _managedVpcResource = new ManagedVpcResourcePropertyOutputReference(this, "managed_vpc_resource");
    public get managedVpcResource() {
        return this._managedVpcResource;
    }
    public putManagedVpcResource(value: ManagedVpcResourceProperty) {
        this._managedVpcResource.internalValue = value;
    }
    public resetManagedVpcResource() {
        this._managedVpcResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedVpcResourceInput() {
        return this._managedVpcResource.internalValue;
    }

    // self_managed_lattice_resource - computed: true, optional: true, required: false
    private _selfManagedLatticeResource = new SelfManagedLatticeResourcePropertyOutputReference(this, "self_managed_lattice_resource");
    public get selfManagedLatticeResource() {
        return this._selfManagedLatticeResource;
    }
    public putSelfManagedLatticeResource(value: SelfManagedLatticeResourceProperty) {
        this._selfManagedLatticeResource.internalValue = value;
    }
    public resetSelfManagedLatticeResource() {
        this._selfManagedLatticeResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedLatticeResourceInput() {
        return this._selfManagedLatticeResource.internalValue;
    }
}
export interface Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty {
    /**
    * The IP address type for the resource configuration endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#endpoint_ip_address_type CcOAuth2CredentialProvider#endpoint_ip_address_type}
    */
    readonly endpointIpAddressType?: string;
    /**
    * An intermediate publicly resolvable domain used as the VPC Lattice resource configuration endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#routing_domain CcOAuth2CredentialProvider#routing_domain}
    */
    readonly routingDomain?: string;
    /**
    * The security group IDs to associate with the VPC Lattice resource gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#security_group_ids CcOAuth2CredentialProvider#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The subnet IDs within the VPC where the VPC Lattice resource gateway is placed
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#subnet_ids CcOAuth2CredentialProvider#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Tags to apply to the managed VPC Lattice resource gateway
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#tags CcOAuth2CredentialProvider#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The ID of the VPC that contains your private resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#vpc_identifier CcOAuth2CredentialProvider#vpc_identifier}
    */
    readonly vpcIdentifier?: string;
}
export class Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointIpAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
        }
        if (this._routingDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingDomain = this._routingDomain;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._vpcIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcIdentifier = this._vpcIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = undefined;
            this._routingDomain = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
            this._tags = undefined;
            this._vpcIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointIpAddressType = value.endpointIpAddressType;
            this._routingDomain = value.routingDomain;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._tags = value.tags;
            this._vpcIdentifier = value.vpcIdentifier;
        }
    }

    // endpoint_ip_address_type - computed: true, optional: true, required: false
    private _endpointIpAddressType?: string; 
    public get endpointIpAddressType() {
        return this.getStringAttribute('endpoint_ip_address_type');
    }
    public set endpointIpAddressType(value: string) {
        this._endpointIpAddressType = value;
    }
    public resetEndpointIpAddressType() {
        this._endpointIpAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIpAddressTypeInput() {
        return this._endpointIpAddressType;
    }

    // routing_domain - computed: true, optional: true, required: false
    private _routingDomain?: string; 
    public get routingDomain() {
        return this.getStringAttribute('routing_domain');
    }
    public set routingDomain(value: string) {
        this._routingDomain = value;
    }
    public resetRoutingDomain() {
        this._routingDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingDomainInput() {
        return this._routingDomain;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
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

    // vpc_identifier - computed: true, optional: true, required: false
    private _vpcIdentifier?: string; 
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
    public set vpcIdentifier(value: string) {
        this._vpcIdentifier = value;
    }
    public resetVpcIdentifier() {
        this._vpcIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdentifierInput() {
        return this._vpcIdentifier;
    }
}
export interface Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty {
    /**
    * The ARN or ID of the VPC Lattice resource configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#resource_configuration_identifier CcOAuth2CredentialProvider#resource_configuration_identifier}
    */
    readonly resourceConfigurationIdentifier?: string;
}
export class Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
        }
    }

    // resource_configuration_identifier - computed: true, optional: true, required: false
    private _resourceConfigurationIdentifier?: string; 
    public get resourceConfigurationIdentifier() {
        return this.getStringAttribute('resource_configuration_identifier');
    }
    public set resourceConfigurationIdentifier(value: string) {
        this._resourceConfigurationIdentifier = value;
    }
    public resetResourceConfigurationIdentifier() {
        this._resourceConfigurationIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationIdentifierInput() {
        return this._resourceConfigurationIdentifier;
    }
}
export interface Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty {
    /**
    * Configuration for a managed VPC Lattice resource. AgentCore creates and manages the VPC Lattice resource gateway and resource configuration on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#managed_vpc_resource CcOAuth2CredentialProvider#managed_vpc_resource}
    */
    readonly managedVpcResource?: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty;
    /**
    * Configuration for a self-managed VPC Lattice resource. You create and manage the VPC Lattice resource gateway and resource configuration, then provide the resource configuration identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#self_managed_lattice_resource CcOAuth2CredentialProvider#self_managed_lattice_resource}
    */
    readonly selfManagedLatticeResource?: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty;
}
export class Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._managedVpcResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
        }
        if (this._selfManagedLatticeResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = undefined;
            this._selfManagedLatticeResource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._managedVpcResource.internalValue = value.managedVpcResource;
            this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
        }
    }

    // managed_vpc_resource - computed: true, optional: true, required: false
    private _managedVpcResource = new Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference(this, "managed_vpc_resource");
    public get managedVpcResource() {
        return this._managedVpcResource;
    }
    public putManagedVpcResource(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty) {
        this._managedVpcResource.internalValue = value;
    }
    public resetManagedVpcResource() {
        this._managedVpcResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedVpcResourceInput() {
        return this._managedVpcResource.internalValue;
    }

    // self_managed_lattice_resource - computed: true, optional: true, required: false
    private _selfManagedLatticeResource = new Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference(this, "self_managed_lattice_resource");
    public get selfManagedLatticeResource() {
        return this._selfManagedLatticeResource;
    }
    public putSelfManagedLatticeResource(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty) {
        this._selfManagedLatticeResource.internalValue = value;
    }
    public resetSelfManagedLatticeResource() {
        this._selfManagedLatticeResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedLatticeResourceInput() {
        return this._selfManagedLatticeResource.internalValue;
    }
}
export interface PrivateEndpointOverrideProperty {
    /**
    * The domain to override with a private endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#domain CcOAuth2CredentialProvider#domain}
    */
    readonly domain?: string;
    /**
    * The private endpoint configuration for connecting to private resources in your VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#private_endpoint CcOAuth2CredentialProvider#private_endpoint}
    */
    readonly privateEndpoint?: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty;
}
export class PrivateEndpointOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrivateEndpointOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        if (this._privateEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateEndpointOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domain = undefined;
            this._privateEndpoint.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domain = value.domain;
            this._privateEndpoint.internalValue = value.privateEndpoint;
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

    // private_endpoint - computed: true, optional: true, required: false
    private _privateEndpoint = new Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointPropertyOutputReference(this, "private_endpoint");
    public get privateEndpoint() {
        return this._privateEndpoint;
    }
    public putPrivateEndpoint(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigPrivateEndpointOverridesPrivateEndpointProperty) {
        this._privateEndpoint.internalValue = value;
    }
    public resetPrivateEndpoint() {
        this._privateEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateEndpointInput() {
        return this._privateEndpoint.internalValue;
    }
}

export class PrivateEndpointOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : PrivateEndpointOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): PrivateEndpointOverridePropertyOutputReference {
        return new PrivateEndpointOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KmsKeySourceTypeProperty {
    /**
    * The Amazon Resource Name (ARN) of the KMS key used to sign the JWT client assertion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#kms_key_arn CcOAuth2CredentialProvider#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class KmsKeySourceTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KmsKeySourceTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KmsKeySourceTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
export interface PrivateKeySourceProperty {
    /**
    * Contains the KMS key configuration for a JWT client assertion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#kms_key_source CcOAuth2CredentialProvider#kms_key_source}
    */
    readonly kmsKeySource?: KmsKeySourceTypeProperty;
}
export class PrivateKeySourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeySourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeySource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeySource = this._kmsKeySource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeySourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeySource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeySource.internalValue = value.kmsKeySource;
        }
    }

    // kms_key_source - computed: true, optional: true, required: false
    private _kmsKeySource = new KmsKeySourceTypePropertyOutputReference(this, "kms_key_source");
    public get kmsKeySource() {
        return this._kmsKeySource;
    }
    public putKmsKeySource(value: KmsKeySourceTypeProperty) {
        this._kmsKeySource.internalValue = value;
    }
    public resetKmsKeySource() {
        this._kmsKeySource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeySourceInput() {
        return this._kmsKeySource.internalValue;
    }
}
export interface PrivateKeyJwtConfigProperty {
    /**
    * A map of additional claims to include in the JWT client assertion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#additional_header_claims CcOAuth2CredentialProvider#additional_header_claims}
    */
    readonly additionalHeaderClaims?: { [key: string]: string };
    /**
    * A map of additional claims to include in the JWT client assertion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#additional_payload_claims CcOAuth2CredentialProvider#additional_payload_claims}
    */
    readonly additionalPayloadClaims?: { [key: string]: string };
    /**
    * Contains the private key source configuration for a JWT client assertion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#private_key_source CcOAuth2CredentialProvider#private_key_source}
    */
    readonly privateKeySource?: PrivateKeySourceProperty;
    /**
    * The algorithm used to sign the JWT client assertion
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#signing_algorithm CcOAuth2CredentialProvider#signing_algorithm}
    */
    readonly signingAlgorithm?: string;
}
export class PrivateKeyJwtConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeyJwtConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalHeaderClaims !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalHeaderClaims = this._additionalHeaderClaims;
        }
        if (this._additionalPayloadClaims !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalPayloadClaims = this._additionalPayloadClaims;
        }
        if (this._privateKeySource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeySource = this._privateKeySource?.internalValue;
        }
        if (this._signingAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingAlgorithm = this._signingAlgorithm;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeyJwtConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalHeaderClaims = undefined;
            this._additionalPayloadClaims = undefined;
            this._privateKeySource.internalValue = undefined;
            this._signingAlgorithm = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalHeaderClaims = value.additionalHeaderClaims;
            this._additionalPayloadClaims = value.additionalPayloadClaims;
            this._privateKeySource.internalValue = value.privateKeySource;
            this._signingAlgorithm = value.signingAlgorithm;
        }
    }

    // additional_header_claims - computed: true, optional: true, required: false
    private _additionalHeaderClaims?: { [key: string]: string }; 
    public get additionalHeaderClaims() {
        return this.getStringMapAttribute('additional_header_claims');
    }
    public set additionalHeaderClaims(value: { [key: string]: string }) {
        this._additionalHeaderClaims = value;
    }
    public resetAdditionalHeaderClaims() {
        this._additionalHeaderClaims = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalHeaderClaimsInput() {
        return this._additionalHeaderClaims;
    }

    // additional_payload_claims - computed: true, optional: true, required: false
    private _additionalPayloadClaims?: { [key: string]: string }; 
    public get additionalPayloadClaims() {
        return this.getStringMapAttribute('additional_payload_claims');
    }
    public set additionalPayloadClaims(value: { [key: string]: string }) {
        this._additionalPayloadClaims = value;
    }
    public resetAdditionalPayloadClaims() {
        this._additionalPayloadClaims = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalPayloadClaimsInput() {
        return this._additionalPayloadClaims;
    }

    // private_key_source - computed: true, optional: true, required: false
    private _privateKeySource = new PrivateKeySourcePropertyOutputReference(this, "private_key_source");
    public get privateKeySource() {
        return this._privateKeySource;
    }
    public putPrivateKeySource(value: PrivateKeySourceProperty) {
        this._privateKeySource.internalValue = value;
    }
    public resetPrivateKeySource() {
        this._privateKeySource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeySourceInput() {
        return this._privateKeySource.internalValue;
    }

    // signing_algorithm - computed: true, optional: true, required: false
    private _signingAlgorithm?: string; 
    public get signingAlgorithm() {
        return this.getStringAttribute('signing_algorithm');
    }
    public set signingAlgorithm(value: string) {
        this._signingAlgorithm = value;
    }
    public resetSigningAlgorithm() {
        this._signingAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingAlgorithmInput() {
        return this._signingAlgorithm;
    }
}
export interface CustomOauth2ProviderConfigInputProperty {
    /**
    * The client authentication method to use when authenticating with the token endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_authentication_method CcOAuth2CredentialProvider#client_authentication_method}
    */
    readonly clientAuthenticationMethod?: string;
    /**
    * The client ID for the custom OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * The client secret for the custom OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * The source of the client secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
    /**
    * Discovery information for an OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#oauth_discovery CcOAuth2CredentialProvider#oauth_discovery}
    */
    readonly oauthDiscovery?: Oauth2DiscoveryProperty;
    /**
    * Configuration for on-behalf-of token exchange
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#on_behalf_of_token_exchange_config CcOAuth2CredentialProvider#on_behalf_of_token_exchange_config}
    */
    readonly onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigProperty;
    /**
    * The private endpoint configuration for connecting to private resources in your VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#private_endpoint CcOAuth2CredentialProvider#private_endpoint}
    */
    readonly privateEndpoint?: PrivateEndpointProperty;
    /**
    * A list of private endpoint overrides. Each override maps a specific domain to a private endpoint, enabling secure connectivity through VPC Lattice resource configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#private_endpoint_overrides CcOAuth2CredentialProvider#private_endpoint_overrides}
    */
    readonly privateEndpointOverrides?: PrivateEndpointOverrideProperty[] | cdktn.IResolvable;
    /**
    * Configuration for private_key_jwt client authentication (RFC 7523)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#private_key_jwt_config CcOAuth2CredentialProvider#private_key_jwt_config}
    */
    readonly privateKeyJwtConfig?: PrivateKeyJwtConfigProperty;
}
export class CustomOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientAuthenticationMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientAuthenticationMethod = this._clientAuthenticationMethod;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        if (this._oauthDiscovery?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oauthDiscovery = this._oauthDiscovery?.internalValue;
        }
        if (this._onBehalfOfTokenExchangeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onBehalfOfTokenExchangeConfig = this._onBehalfOfTokenExchangeConfig?.internalValue;
        }
        if (this._privateEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
        }
        if (this._privateEndpointOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateEndpointOverrides = this._privateEndpointOverrides?.internalValue;
        }
        if (this._privateKeyJwtConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyJwtConfig = this._privateKeyJwtConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientAuthenticationMethod = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
            this._oauthDiscovery.internalValue = undefined;
            this._onBehalfOfTokenExchangeConfig.internalValue = undefined;
            this._privateEndpoint.internalValue = undefined;
            this._privateEndpointOverrides.internalValue = undefined;
            this._privateKeyJwtConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientAuthenticationMethod = value.clientAuthenticationMethod;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
            this._oauthDiscovery.internalValue = value.oauthDiscovery;
            this._onBehalfOfTokenExchangeConfig.internalValue = value.onBehalfOfTokenExchangeConfig;
            this._privateEndpoint.internalValue = value.privateEndpoint;
            this._privateEndpointOverrides.internalValue = value.privateEndpointOverrides;
            this._privateKeyJwtConfig.internalValue = value.privateKeyJwtConfig;
        }
    }

    // client_authentication_method - computed: true, optional: true, required: false
    private _clientAuthenticationMethod?: string; 
    public get clientAuthenticationMethod() {
        return this.getStringAttribute('client_authentication_method');
    }
    public set clientAuthenticationMethod(value: string) {
        this._clientAuthenticationMethod = value;
    }
    public resetClientAuthenticationMethod() {
        this._clientAuthenticationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAuthenticationMethodInput() {
        return this._clientAuthenticationMethod;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }

    // oauth_discovery - computed: true, optional: true, required: false
    private _oauthDiscovery = new Oauth2DiscoveryPropertyOutputReference(this, "oauth_discovery");
    public get oauthDiscovery() {
        return this._oauthDiscovery;
    }
    public putOauthDiscovery(value: Oauth2DiscoveryProperty) {
        this._oauthDiscovery.internalValue = value;
    }
    public resetOauthDiscovery() {
        this._oauthDiscovery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauthDiscoveryInput() {
        return this._oauthDiscovery.internalValue;
    }

    // on_behalf_of_token_exchange_config - computed: true, optional: true, required: false
    private _onBehalfOfTokenExchangeConfig = new OnBehalfOfTokenExchangeConfigPropertyOutputReference(this, "on_behalf_of_token_exchange_config");
    public get onBehalfOfTokenExchangeConfig() {
        return this._onBehalfOfTokenExchangeConfig;
    }
    public putOnBehalfOfTokenExchangeConfig(value: OnBehalfOfTokenExchangeConfigProperty) {
        this._onBehalfOfTokenExchangeConfig.internalValue = value;
    }
    public resetOnBehalfOfTokenExchangeConfig() {
        this._onBehalfOfTokenExchangeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onBehalfOfTokenExchangeConfigInput() {
        return this._onBehalfOfTokenExchangeConfig.internalValue;
    }

    // private_endpoint - computed: true, optional: true, required: false
    private _privateEndpoint = new PrivateEndpointPropertyOutputReference(this, "private_endpoint");
    public get privateEndpoint() {
        return this._privateEndpoint;
    }
    public putPrivateEndpoint(value: PrivateEndpointProperty) {
        this._privateEndpoint.internalValue = value;
    }
    public resetPrivateEndpoint() {
        this._privateEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateEndpointInput() {
        return this._privateEndpoint.internalValue;
    }

    // private_endpoint_overrides - computed: true, optional: true, required: false
    private _privateEndpointOverrides = new PrivateEndpointOverridePropertyList(this, "private_endpoint_overrides", false);
    public get privateEndpointOverrides() {
        return this._privateEndpointOverrides;
    }
    public putPrivateEndpointOverrides(value: PrivateEndpointOverrideProperty[] | cdktn.IResolvable) {
        this._privateEndpointOverrides.internalValue = value;
    }
    public resetPrivateEndpointOverrides() {
        this._privateEndpointOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateEndpointOverridesInput() {
        return this._privateEndpointOverrides.internalValue;
    }

    // private_key_jwt_config - computed: true, optional: true, required: false
    private _privateKeyJwtConfig = new PrivateKeyJwtConfigPropertyOutputReference(this, "private_key_jwt_config");
    public get privateKeyJwtConfig() {
        return this._privateKeyJwtConfig;
    }
    public putPrivateKeyJwtConfig(value: PrivateKeyJwtConfigProperty) {
        this._privateKeyJwtConfig.internalValue = value;
    }
    public resetPrivateKeyJwtConfig() {
        this._privateKeyJwtConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyJwtConfigInput() {
        return this._privateKeyJwtConfig.internalValue;
    }
}
export interface Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface GithubOauth2ProviderConfigInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
}
export class GithubOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GithubOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
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
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GithubOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
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
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }
}
export interface Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface GoogleOauth2ProviderConfigInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
}
export class GoogleOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GoogleOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
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
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GoogleOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
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
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }
}
export interface Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface IncludedOauth2ProviderConfigInputProperty {
    /**
    * OAuth2 authorization endpoint for your isolated OAuth2 application tenant
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#authorization_endpoint CcOAuth2CredentialProvider#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
    /**
    * Token issuer of your isolated OAuth2 application tenant
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#issuer CcOAuth2CredentialProvider#issuer}
    */
    readonly issuer?: string;
    /**
    * OAuth2 token endpoint for your isolated OAuth2 application tenant
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#token_endpoint CcOAuth2CredentialProvider#token_endpoint}
    */
    readonly tokenEndpoint?: string;
}
export class IncludedOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IncludedOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncludedOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
            this._issuer = undefined;
            this._tokenEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
            this._issuer = value.issuer;
            this._tokenEndpoint = value.tokenEndpoint;
        }
    }

    // authorization_endpoint - computed: true, optional: true, required: false
    private _authorizationEndpoint?: string; 
    public get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    public set authorizationEndpoint(value: string) {
        this._authorizationEndpoint = value;
    }
    public resetAuthorizationEndpoint() {
        this._authorizationEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationEndpointInput() {
        return this._authorizationEndpoint;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }

    // token_endpoint - computed: true, optional: true, required: false
    private _tokenEndpoint?: string; 
    public get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    public set tokenEndpoint(value: string) {
        this._tokenEndpoint = value;
    }
    public resetTokenEndpoint() {
        this._tokenEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenEndpointInput() {
        return this._tokenEndpoint;
    }
}
export interface Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface LinkedinOauth2ProviderConfigInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
}
export class LinkedinOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinkedinOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
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
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinkedinOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
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
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }
}
export interface Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface MicrosoftOauth2ProviderConfigInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
    /**
    * The Microsoft Entra ID tenant ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#tenant_id CcOAuth2CredentialProvider#tenant_id}
    */
    readonly tenantId?: string;
}
export class MicrosoftOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MicrosoftOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
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
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        if (this._tenantId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantId = this._tenantId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MicrosoftOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
            this._tenantId = undefined;
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
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
            this._tenantId = value.tenantId;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }

    // tenant_id - computed: true, optional: true, required: false
    private _tenantId?: string; 
    public get tenantId() {
        return this.getStringAttribute('tenant_id');
    }
    public set tenantId(value: string) {
        this._tenantId = value;
    }
    public resetTenantId() {
        this._tenantId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIdInput() {
        return this._tenantId;
    }
}
export interface Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface SalesforceOauth2ProviderConfigInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
}
export class SalesforceOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SalesforceOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
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
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SalesforceOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
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
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }
}
export interface Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key CcOAuth2CredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id CcOAuth2CredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jsonKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonKey = this._jsonKey;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jsonKey = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jsonKey = value.jsonKey;
            this._secretId = value.secretId;
        }
    }

    // json_key - computed: true, optional: true, required: false
    private _jsonKey?: string; 
    public get jsonKey() {
        return this.getStringAttribute('json_key');
    }
    public set jsonKey(value: string) {
        this._jsonKey = value;
    }
    public resetJsonKey() {
        this._jsonKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonKeyInput() {
        return this._jsonKey;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}
export interface SlackOauth2ProviderConfigInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id CcOAuth2CredentialProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret CcOAuth2CredentialProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config CcOAuth2CredentialProvider#client_secret_config}
    */
    readonly clientSecretConfig?: Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source CcOAuth2CredentialProvider#client_secret_source}
    */
    readonly clientSecretSource?: string;
}
export class SlackOauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlackOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
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
        if (this._clientSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
        }
        if (this._clientSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecretSource = this._clientSecretSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlackOauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._clientSecretConfig.internalValue = undefined;
            this._clientSecretSource = undefined;
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
            this._clientSecretConfig.internalValue = value.clientSecretConfig;
            this._clientSecretSource = value.clientSecretSource;
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

    // client_secret_config - computed: true, optional: true, required: false
    private _clientSecretConfig = new Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigPropertyOutputReference(this, "client_secret_config");
    public get clientSecretConfig() {
        return this._clientSecretConfig;
    }
    public putClientSecretConfig(value: Oauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigProperty) {
        this._clientSecretConfig.internalValue = value;
    }
    public resetClientSecretConfig() {
        this._clientSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretConfigInput() {
        return this._clientSecretConfig.internalValue;
    }

    // client_secret_source - computed: true, optional: true, required: false
    private _clientSecretSource?: string; 
    public get clientSecretSource() {
        return this.getStringAttribute('client_secret_source');
    }
    public set clientSecretSource(value: string) {
        this._clientSecretSource = value;
    }
    public resetClientSecretSource() {
        this._clientSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretSourceInput() {
        return this._clientSecretSource;
    }
}
export interface Oauth2ProviderConfigInputProperty {
    /**
    * Input configuration for an Atlassian OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#atlassian_oauth_2_provider_config CcOAuth2CredentialProvider#atlassian_oauth_2_provider_config}
    */
    readonly atlassianOauth2ProviderConfig?: AtlassianOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a custom OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#custom_oauth_2_provider_config CcOAuth2CredentialProvider#custom_oauth_2_provider_config}
    */
    readonly customOauth2ProviderConfig?: CustomOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a GitHub OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#github_oauth_2_provider_config CcOAuth2CredentialProvider#github_oauth_2_provider_config}
    */
    readonly githubOauth2ProviderConfig?: GithubOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a Google OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#google_oauth_2_provider_config CcOAuth2CredentialProvider#google_oauth_2_provider_config}
    */
    readonly googleOauth2ProviderConfig?: GoogleOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a supported non-custom OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#included_oauth_2_provider_config CcOAuth2CredentialProvider#included_oauth_2_provider_config}
    */
    readonly includedOauth2ProviderConfig?: IncludedOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a LinkedIn OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#linkedin_oauth_2_provider_config CcOAuth2CredentialProvider#linkedin_oauth_2_provider_config}
    */
    readonly linkedinOauth2ProviderConfig?: LinkedinOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a Microsoft OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#microsoft_oauth_2_provider_config CcOAuth2CredentialProvider#microsoft_oauth_2_provider_config}
    */
    readonly microsoftOauth2ProviderConfig?: MicrosoftOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a Salesforce OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#salesforce_oauth_2_provider_config CcOAuth2CredentialProvider#salesforce_oauth_2_provider_config}
    */
    readonly salesforceOauth2ProviderConfig?: SalesforceOauth2ProviderConfigInputProperty;
    /**
    * Input configuration for a Slack OAuth2 provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#slack_oauth_2_provider_config CcOAuth2CredentialProvider#slack_oauth_2_provider_config}
    */
    readonly slackOauth2ProviderConfig?: SlackOauth2ProviderConfigInputProperty;
}
export class Oauth2ProviderConfigInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._atlassianOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.atlassianOauth2ProviderConfig = this._atlassianOauth2ProviderConfig?.internalValue;
        }
        if (this._customOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customOauth2ProviderConfig = this._customOauth2ProviderConfig?.internalValue;
        }
        if (this._githubOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOauth2ProviderConfig = this._githubOauth2ProviderConfig?.internalValue;
        }
        if (this._googleOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleOauth2ProviderConfig = this._googleOauth2ProviderConfig?.internalValue;
        }
        if (this._includedOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.includedOauth2ProviderConfig = this._includedOauth2ProviderConfig?.internalValue;
        }
        if (this._linkedinOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linkedinOauth2ProviderConfig = this._linkedinOauth2ProviderConfig?.internalValue;
        }
        if (this._microsoftOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.microsoftOauth2ProviderConfig = this._microsoftOauth2ProviderConfig?.internalValue;
        }
        if (this._salesforceOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforceOauth2ProviderConfig = this._salesforceOauth2ProviderConfig?.internalValue;
        }
        if (this._slackOauth2ProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slackOauth2ProviderConfig = this._slackOauth2ProviderConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._atlassianOauth2ProviderConfig.internalValue = undefined;
            this._customOauth2ProviderConfig.internalValue = undefined;
            this._githubOauth2ProviderConfig.internalValue = undefined;
            this._googleOauth2ProviderConfig.internalValue = undefined;
            this._includedOauth2ProviderConfig.internalValue = undefined;
            this._linkedinOauth2ProviderConfig.internalValue = undefined;
            this._microsoftOauth2ProviderConfig.internalValue = undefined;
            this._salesforceOauth2ProviderConfig.internalValue = undefined;
            this._slackOauth2ProviderConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._atlassianOauth2ProviderConfig.internalValue = value.atlassianOauth2ProviderConfig;
            this._customOauth2ProviderConfig.internalValue = value.customOauth2ProviderConfig;
            this._githubOauth2ProviderConfig.internalValue = value.githubOauth2ProviderConfig;
            this._googleOauth2ProviderConfig.internalValue = value.googleOauth2ProviderConfig;
            this._includedOauth2ProviderConfig.internalValue = value.includedOauth2ProviderConfig;
            this._linkedinOauth2ProviderConfig.internalValue = value.linkedinOauth2ProviderConfig;
            this._microsoftOauth2ProviderConfig.internalValue = value.microsoftOauth2ProviderConfig;
            this._salesforceOauth2ProviderConfig.internalValue = value.salesforceOauth2ProviderConfig;
            this._slackOauth2ProviderConfig.internalValue = value.slackOauth2ProviderConfig;
        }
    }

    // atlassian_oauth_2_provider_config - computed: true, optional: true, required: false
    private _atlassianOauth2ProviderConfig = new AtlassianOauth2ProviderConfigInputPropertyOutputReference(this, "atlassian_oauth_2_provider_config");
    public get atlassianOauth2ProviderConfig() {
        return this._atlassianOauth2ProviderConfig;
    }
    public putAtlassianOauth2ProviderConfig(value: AtlassianOauth2ProviderConfigInputProperty) {
        this._atlassianOauth2ProviderConfig.internalValue = value;
    }
    public resetAtlassianOauth2ProviderConfig() {
        this._atlassianOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get atlassianOauth2ProviderConfigInput() {
        return this._atlassianOauth2ProviderConfig.internalValue;
    }

    // custom_oauth_2_provider_config - computed: true, optional: true, required: false
    private _customOauth2ProviderConfig = new CustomOauth2ProviderConfigInputPropertyOutputReference(this, "custom_oauth_2_provider_config");
    public get customOauth2ProviderConfig() {
        return this._customOauth2ProviderConfig;
    }
    public putCustomOauth2ProviderConfig(value: CustomOauth2ProviderConfigInputProperty) {
        this._customOauth2ProviderConfig.internalValue = value;
    }
    public resetCustomOauth2ProviderConfig() {
        this._customOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customOauth2ProviderConfigInput() {
        return this._customOauth2ProviderConfig.internalValue;
    }

    // github_oauth_2_provider_config - computed: true, optional: true, required: false
    private _githubOauth2ProviderConfig = new GithubOauth2ProviderConfigInputPropertyOutputReference(this, "github_oauth_2_provider_config");
    public get githubOauth2ProviderConfig() {
        return this._githubOauth2ProviderConfig;
    }
    public putGithubOauth2ProviderConfig(value: GithubOauth2ProviderConfigInputProperty) {
        this._githubOauth2ProviderConfig.internalValue = value;
    }
    public resetGithubOauth2ProviderConfig() {
        this._githubOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get githubOauth2ProviderConfigInput() {
        return this._githubOauth2ProviderConfig.internalValue;
    }

    // google_oauth_2_provider_config - computed: true, optional: true, required: false
    private _googleOauth2ProviderConfig = new GoogleOauth2ProviderConfigInputPropertyOutputReference(this, "google_oauth_2_provider_config");
    public get googleOauth2ProviderConfig() {
        return this._googleOauth2ProviderConfig;
    }
    public putGoogleOauth2ProviderConfig(value: GoogleOauth2ProviderConfigInputProperty) {
        this._googleOauth2ProviderConfig.internalValue = value;
    }
    public resetGoogleOauth2ProviderConfig() {
        this._googleOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleOauth2ProviderConfigInput() {
        return this._googleOauth2ProviderConfig.internalValue;
    }

    // included_oauth_2_provider_config - computed: true, optional: true, required: false
    private _includedOauth2ProviderConfig = new IncludedOauth2ProviderConfigInputPropertyOutputReference(this, "included_oauth_2_provider_config");
    public get includedOauth2ProviderConfig() {
        return this._includedOauth2ProviderConfig;
    }
    public putIncludedOauth2ProviderConfig(value: IncludedOauth2ProviderConfigInputProperty) {
        this._includedOauth2ProviderConfig.internalValue = value;
    }
    public resetIncludedOauth2ProviderConfig() {
        this._includedOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includedOauth2ProviderConfigInput() {
        return this._includedOauth2ProviderConfig.internalValue;
    }

    // linkedin_oauth_2_provider_config - computed: true, optional: true, required: false
    private _linkedinOauth2ProviderConfig = new LinkedinOauth2ProviderConfigInputPropertyOutputReference(this, "linkedin_oauth_2_provider_config");
    public get linkedinOauth2ProviderConfig() {
        return this._linkedinOauth2ProviderConfig;
    }
    public putLinkedinOauth2ProviderConfig(value: LinkedinOauth2ProviderConfigInputProperty) {
        this._linkedinOauth2ProviderConfig.internalValue = value;
    }
    public resetLinkedinOauth2ProviderConfig() {
        this._linkedinOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkedinOauth2ProviderConfigInput() {
        return this._linkedinOauth2ProviderConfig.internalValue;
    }

    // microsoft_oauth_2_provider_config - computed: true, optional: true, required: false
    private _microsoftOauth2ProviderConfig = new MicrosoftOauth2ProviderConfigInputPropertyOutputReference(this, "microsoft_oauth_2_provider_config");
    public get microsoftOauth2ProviderConfig() {
        return this._microsoftOauth2ProviderConfig;
    }
    public putMicrosoftOauth2ProviderConfig(value: MicrosoftOauth2ProviderConfigInputProperty) {
        this._microsoftOauth2ProviderConfig.internalValue = value;
    }
    public resetMicrosoftOauth2ProviderConfig() {
        this._microsoftOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get microsoftOauth2ProviderConfigInput() {
        return this._microsoftOauth2ProviderConfig.internalValue;
    }

    // salesforce_oauth_2_provider_config - computed: true, optional: true, required: false
    private _salesforceOauth2ProviderConfig = new SalesforceOauth2ProviderConfigInputPropertyOutputReference(this, "salesforce_oauth_2_provider_config");
    public get salesforceOauth2ProviderConfig() {
        return this._salesforceOauth2ProviderConfig;
    }
    public putSalesforceOauth2ProviderConfig(value: SalesforceOauth2ProviderConfigInputProperty) {
        this._salesforceOauth2ProviderConfig.internalValue = value;
    }
    public resetSalesforceOauth2ProviderConfig() {
        this._salesforceOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceOauth2ProviderConfigInput() {
        return this._salesforceOauth2ProviderConfig.internalValue;
    }

    // slack_oauth_2_provider_config - computed: true, optional: true, required: false
    private _slackOauth2ProviderConfig = new SlackOauth2ProviderConfigInputPropertyOutputReference(this, "slack_oauth_2_provider_config");
    public get slackOauth2ProviderConfig() {
        return this._slackOauth2ProviderConfig;
    }
    public putSlackOauth2ProviderConfig(value: SlackOauth2ProviderConfigInputProperty) {
        this._slackOauth2ProviderConfig.internalValue = value;
    }
    public resetSlackOauth2ProviderConfig() {
        this._slackOauth2ProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slackOauth2ProviderConfigInput() {
        return this._slackOauth2ProviderConfig.internalValue;
    }
}
export interface AuthorizationServerMetadataProperty {
}
export class AuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationServerMetadataProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationServerMetadataProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // authorization_endpoint - computed: true, optional: false, required: false
    public get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }

    // issuer - computed: true, optional: false, required: false
    public get issuer() {
        return this.getStringAttribute('issuer');
    }

    // response_types - computed: true, optional: false, required: false
    public get responseTypes() {
        return this.getListAttribute('response_types');
    }

    // token_endpoint - computed: true, optional: false, required: false
    public get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
}
export interface OauthDiscoveryProperty {
}
export class OauthDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OauthDiscoveryProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OauthDiscoveryProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // authorization_server_metadata - computed: true, optional: false, required: false
    private _authorizationServerMetadata = new AuthorizationServerMetadataPropertyOutputReference(this, "authorization_server_metadata");
    public get authorizationServerMetadata() {
        return this._authorizationServerMetadata;
    }

    // discovery_url - computed: true, optional: false, required: false
    public get discoveryUrl() {
        return this.getStringAttribute('discovery_url');
    }
}
export interface Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigProperty {
}
export class Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // actor_token_content - computed: true, optional: false, required: false
    public get actorTokenContent() {
        return this.getStringAttribute('actor_token_content');
    }

    // actor_token_scopes - computed: true, optional: false, required: false
    public get actorTokenScopes() {
        return this.getListAttribute('actor_token_scopes');
    }
}
export interface Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigProperty {
}
export class Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // grant_type - computed: true, optional: false, required: false
    public get grantType() {
        return this.getStringAttribute('grant_type');
    }

    // token_exchange_grant_type_config - computed: true, optional: false, required: false
    private _tokenExchangeGrantTypeConfig = new Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigPropertyOutputReference(this, "token_exchange_grant_type_config");
    public get tokenExchangeGrantTypeConfig() {
        return this._tokenExchangeGrantTypeConfig;
    }
}
export interface Oauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceProperty {
}
export class Oauth2ProviderConfigOutputPrivateEndpointManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateEndpointManagedVpcResourceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // endpoint_ip_address_type - computed: true, optional: false, required: false
    public get endpointIpAddressType() {
        return this.getStringAttribute('endpoint_ip_address_type');
    }

    // routing_domain - computed: true, optional: false, required: false
    public get routingDomain() {
        return this.getStringAttribute('routing_domain');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }

    // tags - computed: true, optional: false, required: false
    private _tags = new cdktn.StringMap(this, "tags");
    public get tags() {
        return this._tags;
    }

    // vpc_identifier - computed: true, optional: false, required: false
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
}
export interface Oauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceProperty {
}
export class Oauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // resource_configuration_identifier - computed: true, optional: false, required: false
    public get resourceConfigurationIdentifier() {
        return this.getStringAttribute('resource_configuration_identifier');
    }
}
export interface Oauth2ProviderConfigOutputPrivateEndpointProperty {
}
export class Oauth2ProviderConfigOutputPrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateEndpointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // managed_vpc_resource - computed: true, optional: false, required: false
    private _managedVpcResource = new Oauth2ProviderConfigOutputPrivateEndpointManagedVpcResourcePropertyOutputReference(this, "managed_vpc_resource");
    public get managedVpcResource() {
        return this._managedVpcResource;
    }

    // self_managed_lattice_resource - computed: true, optional: false, required: false
    private _selfManagedLatticeResource = new Oauth2ProviderConfigOutputPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference(this, "self_managed_lattice_resource");
    public get selfManagedLatticeResource() {
        return this._selfManagedLatticeResource;
    }
}
export interface Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty {
}
export class Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // endpoint_ip_address_type - computed: true, optional: false, required: false
    public get endpointIpAddressType() {
        return this.getStringAttribute('endpoint_ip_address_type');
    }

    // routing_domain - computed: true, optional: false, required: false
    public get routingDomain() {
        return this.getStringAttribute('routing_domain');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }

    // tags - computed: true, optional: false, required: false
    private _tags = new cdktn.StringMap(this, "tags");
    public get tags() {
        return this._tags;
    }

    // vpc_identifier - computed: true, optional: false, required: false
    public get vpcIdentifier() {
        return this.getStringAttribute('vpc_identifier');
    }
}
export interface Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty {
}
export class Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // resource_configuration_identifier - computed: true, optional: false, required: false
    public get resourceConfigurationIdentifier() {
        return this.getStringAttribute('resource_configuration_identifier');
    }
}
export interface Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointProperty {
}
export class Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // managed_vpc_resource - computed: true, optional: false, required: false
    private _managedVpcResource = new Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointManagedVpcResourcePropertyOutputReference(this, "managed_vpc_resource");
    public get managedVpcResource() {
        return this._managedVpcResource;
    }

    // self_managed_lattice_resource - computed: true, optional: false, required: false
    private _selfManagedLatticeResource = new Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourcePropertyOutputReference(this, "self_managed_lattice_resource");
    public get selfManagedLatticeResource() {
        return this._selfManagedLatticeResource;
    }
}
export interface PrivateEndpointOverridesProperty {
}
export class PrivateEndpointOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): PrivateEndpointOverridesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateEndpointOverridesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // domain - computed: true, optional: false, required: false
    public get domain() {
        return this.getStringAttribute('domain');
    }

    // private_endpoint - computed: true, optional: false, required: false
    private _privateEndpoint = new Oauth2ProviderConfigOutputPrivateEndpointOverridesPrivateEndpointPropertyOutputReference(this, "private_endpoint");
    public get privateEndpoint() {
        return this._privateEndpoint;
    }
}

export class PrivateEndpointOverridesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): PrivateEndpointOverridesPropertyOutputReference {
        return new PrivateEndpointOverridesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KmsKeySourceProperty {
}
export class KmsKeySourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KmsKeySourceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KmsKeySourceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
}
export interface Oauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceProperty {
}
export class Oauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourceProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // kms_key_source - computed: true, optional: false, required: false
    private _kmsKeySource = new KmsKeySourcePropertyOutputReference(this, "kms_key_source");
    public get kmsKeySource() {
        return this._kmsKeySource;
    }
}
export interface Oauth2ProviderConfigOutputPrivateKeyJwtConfigProperty {
}
export class Oauth2ProviderConfigOutputPrivateKeyJwtConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputPrivateKeyJwtConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputPrivateKeyJwtConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // additional_header_claims - computed: true, optional: false, required: false
    private _additionalHeaderClaims = new cdktn.StringMap(this, "additional_header_claims");
    public get additionalHeaderClaims() {
        return this._additionalHeaderClaims;
    }

    // additional_payload_claims - computed: true, optional: false, required: false
    private _additionalPayloadClaims = new cdktn.StringMap(this, "additional_payload_claims");
    public get additionalPayloadClaims() {
        return this._additionalPayloadClaims;
    }

    // private_key_source - computed: true, optional: false, required: false
    private _privateKeySource = new Oauth2ProviderConfigOutputPrivateKeyJwtConfigPrivateKeySourcePropertyOutputReference(this, "private_key_source");
    public get privateKeySource() {
        return this._privateKeySource;
    }

    // signing_algorithm - computed: true, optional: false, required: false
    public get signingAlgorithm() {
        return this.getStringAttribute('signing_algorithm');
    }
}
export interface Oauth2ProviderConfigOutputProperty {
}
export class Oauth2ProviderConfigOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Oauth2ProviderConfigOutputProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Oauth2ProviderConfigOutputProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // client_authentication_method - computed: true, optional: false, required: false
    public get clientAuthenticationMethod() {
        return this.getStringAttribute('client_authentication_method');
    }

    // client_id - computed: true, optional: false, required: false
    public get clientId() {
        return this.getStringAttribute('client_id');
    }

    // oauth_discovery - computed: true, optional: false, required: false
    private _oauthDiscovery = new OauthDiscoveryPropertyOutputReference(this, "oauth_discovery");
    public get oauthDiscovery() {
        return this._oauthDiscovery;
    }

    // on_behalf_of_token_exchange_config - computed: true, optional: false, required: false
    private _onBehalfOfTokenExchangeConfig = new Oauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigPropertyOutputReference(this, "on_behalf_of_token_exchange_config");
    public get onBehalfOfTokenExchangeConfig() {
        return this._onBehalfOfTokenExchangeConfig;
    }

    // private_endpoint - computed: true, optional: false, required: false
    private _privateEndpoint = new Oauth2ProviderConfigOutputPrivateEndpointPropertyOutputReference(this, "private_endpoint");
    public get privateEndpoint() {
        return this._privateEndpoint;
    }

    // private_endpoint_overrides - computed: true, optional: false, required: false
    private _privateEndpointOverrides = new PrivateEndpointOverridesPropertyList(this, "private_endpoint_overrides", false);
    public get privateEndpointOverrides() {
        return this._privateEndpointOverrides;
    }

    // private_key_jwt_config - computed: true, optional: false, required: false
    private _privateKeyJwtConfig = new Oauth2ProviderConfigOutputPrivateKeyJwtConfigPropertyOutputReference(this, "private_key_jwt_config");
    public get privateKeyJwtConfig() {
        return this._privateKeyJwtConfig;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#key CcOAuth2CredentialProvider#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_o_auth_2_credential_provider#value CcOAuth2CredentialProvider#value}
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
