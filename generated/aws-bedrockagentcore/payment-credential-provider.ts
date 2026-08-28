// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPaymentCredentialProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * Supported vendor types for payment providers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#credential_provider_vendor CcPaymentCredentialProvider#credential_provider_vendor}
    */
    readonly credentialProviderVendor: string;
    /**
    * Unique name for the payment credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#name CcPaymentCredentialProvider#name}
    */
    readonly name: string;
    /**
    * Provider configuration input containing secrets for creation/update
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#provider_configuration_input CcPaymentCredentialProvider#provider_configuration_input}
    */
    readonly providerConfigurationInput?: CcPaymentCredentialProvider.PaymentProviderConfigurationInputProperty;
    /**
    * Tags for the payment credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#tags CcPaymentCredentialProvider#tags}
    */
    readonly tags?: CcPaymentCredentialProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider}
*/
export class CcPaymentCredentialProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_payment_credential_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPaymentCredentialProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPaymentCredentialProvider to import
    * @param importFromId The id of the existing CcPaymentCredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPaymentCredentialProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_payment_credential_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPaymentCredentialProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcPaymentCredentialProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_payment_credential_provider',
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
        this._providerConfigurationInput.internalValue = config.providerConfigurationInput;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // provider_configuration_input - computed: true, optional: true, required: false
    private _providerConfigurationInput = new CcPaymentCredentialProvider.PaymentProviderConfigurationInputPropertyOutputReference(this, "provider_configuration_input");
    public get providerConfigurationInput() {
        return this._providerConfigurationInput;
    }
    public putProviderConfigurationInput(value: CcPaymentCredentialProvider.PaymentProviderConfigurationInputProperty) {
        this._providerConfigurationInput.internalValue = value;
    }
    public resetProviderConfigurationInput() {
        this._providerConfigurationInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerConfigurationInputInput() {
        return this._providerConfigurationInput.internalValue;
    }

    // provider_configuration_output - computed: true, optional: false, required: false
    private _providerConfigurationOutput = new CcPaymentCredentialProvider.ProviderConfigurationOutputPropertyOutputReference(this, "provider_configuration_output");
    public get providerConfigurationOutput() {
        return this._providerConfigurationOutput;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPaymentCredentialProvider.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPaymentCredentialProvider.TagProperty[] | cdktn.IResolvable) {
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
            provider_configuration_input: ccPaymentCredentialProviderPaymentProviderConfigurationInputPropertyToTerraform(this._providerConfigurationInput.internalValue),
            tags: cdktn.listMapper(ccPaymentCredentialProviderTagPropertyToTerraform, false)(this._tags.internalValue),
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
            provider_configuration_input: {
                value: ccPaymentCredentialProviderPaymentProviderConfigurationInputPropertyToHclTerraform(this._providerConfigurationInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPaymentCredentialProvider.PaymentProviderConfigurationInputProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPaymentCredentialProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPaymentCredentialProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPaymentCredentialProviderSecretReferencePropertyToTerraform(struct?: CcPaymentCredentialProvider.SecretReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccPaymentCredentialProviderSecretReferencePropertyToHclTerraform(struct?: CcPaymentCredentialProvider.SecretReferenceProperty | cdktn.IResolvable): any {
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


export function ccPaymentCredentialProviderWalletSecretConfigPropertyToTerraform(struct?: CcPaymentCredentialProvider.WalletSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccPaymentCredentialProviderWalletSecretConfigPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.WalletSecretConfigProperty | cdktn.IResolvable): any {
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


export function ccPaymentCredentialProviderCoinbaseCdpConfigurationInputPropertyToTerraform(struct?: CcPaymentCredentialProvider.CoinbaseCdpConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_id: cdktn.stringToTerraform(struct!.apiKeyId),
        api_key_secret: cdktn.stringToTerraform(struct!.apiKeySecret),
        api_key_secret_config: ccPaymentCredentialProviderSecretReferencePropertyToTerraform(struct!.apiKeySecretConfig),
        api_key_secret_source: cdktn.stringToTerraform(struct!.apiKeySecretSource),
        wallet_secret: cdktn.stringToTerraform(struct!.walletSecret),
        wallet_secret_config: ccPaymentCredentialProviderWalletSecretConfigPropertyToTerraform(struct!.walletSecretConfig),
        wallet_secret_source: cdktn.stringToTerraform(struct!.walletSecretSource),
    }
}


export function ccPaymentCredentialProviderCoinbaseCdpConfigurationInputPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.CoinbaseCdpConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_id: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_key_secret: {
            value: cdktn.stringToHclTerraform(struct!.apiKeySecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_key_secret_config: {
            value: ccPaymentCredentialProviderSecretReferencePropertyToHclTerraform(struct!.apiKeySecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretReferenceProperty",
        },
        api_key_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.apiKeySecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wallet_secret: {
            value: cdktn.stringToHclTerraform(struct!.walletSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wallet_secret_config: {
            value: ccPaymentCredentialProviderWalletSecretConfigPropertyToHclTerraform(struct!.walletSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "WalletSecretConfigProperty",
        },
        wallet_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.walletSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPaymentCredentialProviderAppSecretConfigPropertyToTerraform(struct?: CcPaymentCredentialProvider.AppSecretConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccPaymentCredentialProviderAppSecretConfigPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.AppSecretConfigProperty | cdktn.IResolvable): any {
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


export function ccPaymentCredentialProviderAuthorizationPrivateKeyConfigPropertyToTerraform(struct?: CcPaymentCredentialProvider.AuthorizationPrivateKeyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccPaymentCredentialProviderAuthorizationPrivateKeyConfigPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.AuthorizationPrivateKeyConfigProperty | cdktn.IResolvable): any {
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


export function ccPaymentCredentialProviderStripePrivyConfigurationInputPropertyToTerraform(struct?: CcPaymentCredentialProvider.StripePrivyConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_id: cdktn.stringToTerraform(struct!.appId),
        app_secret: cdktn.stringToTerraform(struct!.appSecret),
        app_secret_config: ccPaymentCredentialProviderAppSecretConfigPropertyToTerraform(struct!.appSecretConfig),
        app_secret_source: cdktn.stringToTerraform(struct!.appSecretSource),
        authorization_id: cdktn.stringToTerraform(struct!.authorizationId),
        authorization_private_key: cdktn.stringToTerraform(struct!.authorizationPrivateKey),
        authorization_private_key_config: ccPaymentCredentialProviderAuthorizationPrivateKeyConfigPropertyToTerraform(struct!.authorizationPrivateKeyConfig),
        authorization_private_key_source: cdktn.stringToTerraform(struct!.authorizationPrivateKeySource),
    }
}


export function ccPaymentCredentialProviderStripePrivyConfigurationInputPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.StripePrivyConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_id: {
            value: cdktn.stringToHclTerraform(struct!.appId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        app_secret: {
            value: cdktn.stringToHclTerraform(struct!.appSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        app_secret_config: {
            value: ccPaymentCredentialProviderAppSecretConfigPropertyToHclTerraform(struct!.appSecretConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AppSecretConfigProperty",
        },
        app_secret_source: {
            value: cdktn.stringToHclTerraform(struct!.appSecretSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_id: {
            value: cdktn.stringToHclTerraform(struct!.authorizationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_private_key: {
            value: cdktn.stringToHclTerraform(struct!.authorizationPrivateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_private_key_config: {
            value: ccPaymentCredentialProviderAuthorizationPrivateKeyConfigPropertyToHclTerraform(struct!.authorizationPrivateKeyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationPrivateKeyConfigProperty",
        },
        authorization_private_key_source: {
            value: cdktn.stringToHclTerraform(struct!.authorizationPrivateKeySource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPaymentCredentialProviderPaymentProviderConfigurationInputPropertyToTerraform(struct?: CcPaymentCredentialProvider.PaymentProviderConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        coinbase_cdp_configuration: ccPaymentCredentialProviderCoinbaseCdpConfigurationInputPropertyToTerraform(struct!.coinbaseCdpConfiguration),
        stripe_privy_configuration: ccPaymentCredentialProviderStripePrivyConfigurationInputPropertyToTerraform(struct!.stripePrivyConfiguration),
    }
}


export function ccPaymentCredentialProviderPaymentProviderConfigurationInputPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.PaymentProviderConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        coinbase_cdp_configuration: {
            value: ccPaymentCredentialProviderCoinbaseCdpConfigurationInputPropertyToHclTerraform(struct!.coinbaseCdpConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CoinbaseCdpConfigurationInputProperty",
        },
        stripe_privy_configuration: {
            value: ccPaymentCredentialProviderStripePrivyConfigurationInputPropertyToHclTerraform(struct!.stripePrivyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "StripePrivyConfigurationInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPaymentCredentialProviderApiKeySecretArnPropertyToTerraform(struct?: CcPaymentCredentialProvider.ApiKeySecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentCredentialProviderApiKeySecretArnPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.ApiKeySecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPaymentCredentialProviderWalletSecretArnPropertyToTerraform(struct?: CcPaymentCredentialProvider.WalletSecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentCredentialProviderWalletSecretArnPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.WalletSecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPaymentCredentialProviderCoinbaseCdpConfigurationPropertyToTerraform(struct?: CcPaymentCredentialProvider.CoinbaseCdpConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentCredentialProviderCoinbaseCdpConfigurationPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.CoinbaseCdpConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPaymentCredentialProviderAppSecretArnPropertyToTerraform(struct?: CcPaymentCredentialProvider.AppSecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentCredentialProviderAppSecretArnPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.AppSecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPaymentCredentialProviderAuthorizationPrivateKeyArnPropertyToTerraform(struct?: CcPaymentCredentialProvider.AuthorizationPrivateKeyArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentCredentialProviderAuthorizationPrivateKeyArnPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.AuthorizationPrivateKeyArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPaymentCredentialProviderStripePrivyConfigurationPropertyToTerraform(struct?: CcPaymentCredentialProvider.StripePrivyConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentCredentialProviderStripePrivyConfigurationPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.StripePrivyConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPaymentCredentialProviderProviderConfigurationOutputPropertyToTerraform(struct?: CcPaymentCredentialProvider.ProviderConfigurationOutputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPaymentCredentialProviderProviderConfigurationOutputPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.ProviderConfigurationOutputProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPaymentCredentialProviderTagPropertyToTerraform(struct?: CcPaymentCredentialProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPaymentCredentialProviderTagPropertyToHclTerraform(struct?: CcPaymentCredentialProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPaymentCredentialProvider {
export interface SecretReferenceProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#json_key CcPaymentCredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#secret_id CcPaymentCredentialProvider#secret_id}
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
export interface WalletSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#json_key CcPaymentCredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#secret_id CcPaymentCredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class WalletSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WalletSecretConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: WalletSecretConfigProperty | cdktn.IResolvable | undefined) {
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
export interface CoinbaseCdpConfigurationInputProperty {
    /**
    * The Coinbase CDP API key ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#api_key_id CcPaymentCredentialProvider#api_key_id}
    */
    readonly apiKeyId?: string;
    /**
    * The Coinbase CDP API key secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret CcPaymentCredentialProvider#api_key_secret}
    */
    readonly apiKeySecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_config CcPaymentCredentialProvider#api_key_secret_config}
    */
    readonly apiKeySecretConfig?: SecretReferenceProperty;
    /**
    * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_source CcPaymentCredentialProvider#api_key_secret_source}
    */
    readonly apiKeySecretSource?: string;
    /**
    * The Coinbase CDP wallet secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret CcPaymentCredentialProvider#wallet_secret}
    */
    readonly walletSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_config CcPaymentCredentialProvider#wallet_secret_config}
    */
    readonly walletSecretConfig?: WalletSecretConfigProperty;
    /**
    * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_source CcPaymentCredentialProvider#wallet_secret_source}
    */
    readonly walletSecretSource?: string;
}
export class CoinbaseCdpConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CoinbaseCdpConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyId = this._apiKeyId;
        }
        if (this._apiKeySecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeySecret = this._apiKeySecret;
        }
        if (this._apiKeySecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeySecretConfig = this._apiKeySecretConfig?.internalValue;
        }
        if (this._apiKeySecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeySecretSource = this._apiKeySecretSource;
        }
        if (this._walletSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.walletSecret = this._walletSecret;
        }
        if (this._walletSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.walletSecretConfig = this._walletSecretConfig?.internalValue;
        }
        if (this._walletSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.walletSecretSource = this._walletSecretSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CoinbaseCdpConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyId = undefined;
            this._apiKeySecret = undefined;
            this._apiKeySecretConfig.internalValue = undefined;
            this._apiKeySecretSource = undefined;
            this._walletSecret = undefined;
            this._walletSecretConfig.internalValue = undefined;
            this._walletSecretSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKeyId = value.apiKeyId;
            this._apiKeySecret = value.apiKeySecret;
            this._apiKeySecretConfig.internalValue = value.apiKeySecretConfig;
            this._apiKeySecretSource = value.apiKeySecretSource;
            this._walletSecret = value.walletSecret;
            this._walletSecretConfig.internalValue = value.walletSecretConfig;
            this._walletSecretSource = value.walletSecretSource;
        }
    }

    // api_key_id - computed: true, optional: true, required: false
    private _apiKeyId?: string; 
    public get apiKeyId() {
        return this.getStringAttribute('api_key_id');
    }
    public set apiKeyId(value: string) {
        this._apiKeyId = value;
    }
    public resetApiKeyId() {
        this._apiKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyIdInput() {
        return this._apiKeyId;
    }

    // api_key_secret - computed: true, optional: true, required: false
    private _apiKeySecret?: string; 
    public get apiKeySecret() {
        return this.getStringAttribute('api_key_secret');
    }
    public set apiKeySecret(value: string) {
        this._apiKeySecret = value;
    }
    public resetApiKeySecret() {
        this._apiKeySecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeySecretInput() {
        return this._apiKeySecret;
    }

    // api_key_secret_config - computed: true, optional: true, required: false
    private _apiKeySecretConfig = new SecretReferencePropertyOutputReference(this, "api_key_secret_config");
    public get apiKeySecretConfig() {
        return this._apiKeySecretConfig;
    }
    public putApiKeySecretConfig(value: SecretReferenceProperty) {
        this._apiKeySecretConfig.internalValue = value;
    }
    public resetApiKeySecretConfig() {
        this._apiKeySecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeySecretConfigInput() {
        return this._apiKeySecretConfig.internalValue;
    }

    // api_key_secret_source - computed: true, optional: true, required: false
    private _apiKeySecretSource?: string; 
    public get apiKeySecretSource() {
        return this.getStringAttribute('api_key_secret_source');
    }
    public set apiKeySecretSource(value: string) {
        this._apiKeySecretSource = value;
    }
    public resetApiKeySecretSource() {
        this._apiKeySecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeySecretSourceInput() {
        return this._apiKeySecretSource;
    }

    // wallet_secret - computed: true, optional: true, required: false
    private _walletSecret?: string; 
    public get walletSecret() {
        return this.getStringAttribute('wallet_secret');
    }
    public set walletSecret(value: string) {
        this._walletSecret = value;
    }
    public resetWalletSecret() {
        this._walletSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get walletSecretInput() {
        return this._walletSecret;
    }

    // wallet_secret_config - computed: true, optional: true, required: false
    private _walletSecretConfig = new WalletSecretConfigPropertyOutputReference(this, "wallet_secret_config");
    public get walletSecretConfig() {
        return this._walletSecretConfig;
    }
    public putWalletSecretConfig(value: WalletSecretConfigProperty) {
        this._walletSecretConfig.internalValue = value;
    }
    public resetWalletSecretConfig() {
        this._walletSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get walletSecretConfigInput() {
        return this._walletSecretConfig.internalValue;
    }

    // wallet_secret_source - computed: true, optional: true, required: false
    private _walletSecretSource?: string; 
    public get walletSecretSource() {
        return this.getStringAttribute('wallet_secret_source');
    }
    public set walletSecretSource(value: string) {
        this._walletSecretSource = value;
    }
    public resetWalletSecretSource() {
        this._walletSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get walletSecretSourceInput() {
        return this._walletSecretSource;
    }
}
export interface AppSecretConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#json_key CcPaymentCredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#secret_id CcPaymentCredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class AppSecretConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppSecretConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AppSecretConfigProperty | cdktn.IResolvable | undefined) {
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
export interface AuthorizationPrivateKeyConfigProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#json_key CcPaymentCredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#secret_id CcPaymentCredentialProvider#secret_id}
    */
    readonly secretId?: string;
}
export class AuthorizationPrivateKeyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationPrivateKeyConfigProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AuthorizationPrivateKeyConfigProperty | cdktn.IResolvable | undefined) {
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
export interface StripePrivyConfigurationInputProperty {
    /**
    * The app ID provided by Privy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#app_id CcPaymentCredentialProvider#app_id}
    */
    readonly appId?: string;
    /**
    * The app secret provided by Privy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#app_secret CcPaymentCredentialProvider#app_secret}
    */
    readonly appSecret?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_config CcPaymentCredentialProvider#app_secret_config}
    */
    readonly appSecretConfig?: AppSecretConfigProperty;
    /**
    * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_source CcPaymentCredentialProvider#app_secret_source}
    */
    readonly appSecretSource?: string;
    /**
    * The authorization ID for the Stripe Privy integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#authorization_id CcPaymentCredentialProvider#authorization_id}
    */
    readonly authorizationId?: string;
    /**
    * The authorization private key for the Stripe Privy integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key CcPaymentCredentialProvider#authorization_private_key}
    */
    readonly authorizationPrivateKey?: string;
    /**
    * A reference to a customer-provided secret stored in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_config CcPaymentCredentialProvider#authorization_private_key_config}
    */
    readonly authorizationPrivateKeyConfig?: AuthorizationPrivateKeyConfigProperty;
    /**
    * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_source CcPaymentCredentialProvider#authorization_private_key_source}
    */
    readonly authorizationPrivateKeySource?: string;
}
export class StripePrivyConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StripePrivyConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appId !== undefined) {
            hasAnyValues = true;
            internalValueResult.appId = this._appId;
        }
        if (this._appSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.appSecret = this._appSecret;
        }
        if (this._appSecretConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.appSecretConfig = this._appSecretConfig?.internalValue;
        }
        if (this._appSecretSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.appSecretSource = this._appSecretSource;
        }
        if (this._authorizationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationId = this._authorizationId;
        }
        if (this._authorizationPrivateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationPrivateKey = this._authorizationPrivateKey;
        }
        if (this._authorizationPrivateKeyConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationPrivateKeyConfig = this._authorizationPrivateKeyConfig?.internalValue;
        }
        if (this._authorizationPrivateKeySource !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationPrivateKeySource = this._authorizationPrivateKeySource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StripePrivyConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appId = undefined;
            this._appSecret = undefined;
            this._appSecretConfig.internalValue = undefined;
            this._appSecretSource = undefined;
            this._authorizationId = undefined;
            this._authorizationPrivateKey = undefined;
            this._authorizationPrivateKeyConfig.internalValue = undefined;
            this._authorizationPrivateKeySource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appId = value.appId;
            this._appSecret = value.appSecret;
            this._appSecretConfig.internalValue = value.appSecretConfig;
            this._appSecretSource = value.appSecretSource;
            this._authorizationId = value.authorizationId;
            this._authorizationPrivateKey = value.authorizationPrivateKey;
            this._authorizationPrivateKeyConfig.internalValue = value.authorizationPrivateKeyConfig;
            this._authorizationPrivateKeySource = value.authorizationPrivateKeySource;
        }
    }

    // app_id - computed: true, optional: true, required: false
    private _appId?: string; 
    public get appId() {
        return this.getStringAttribute('app_id');
    }
    public set appId(value: string) {
        this._appId = value;
    }
    public resetAppId() {
        this._appId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdInput() {
        return this._appId;
    }

    // app_secret - computed: true, optional: true, required: false
    private _appSecret?: string; 
    public get appSecret() {
        return this.getStringAttribute('app_secret');
    }
    public set appSecret(value: string) {
        this._appSecret = value;
    }
    public resetAppSecret() {
        this._appSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appSecretInput() {
        return this._appSecret;
    }

    // app_secret_config - computed: true, optional: true, required: false
    private _appSecretConfig = new AppSecretConfigPropertyOutputReference(this, "app_secret_config");
    public get appSecretConfig() {
        return this._appSecretConfig;
    }
    public putAppSecretConfig(value: AppSecretConfigProperty) {
        this._appSecretConfig.internalValue = value;
    }
    public resetAppSecretConfig() {
        this._appSecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appSecretConfigInput() {
        return this._appSecretConfig.internalValue;
    }

    // app_secret_source - computed: true, optional: true, required: false
    private _appSecretSource?: string; 
    public get appSecretSource() {
        return this.getStringAttribute('app_secret_source');
    }
    public set appSecretSource(value: string) {
        this._appSecretSource = value;
    }
    public resetAppSecretSource() {
        this._appSecretSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appSecretSourceInput() {
        return this._appSecretSource;
    }

    // authorization_id - computed: true, optional: true, required: false
    private _authorizationId?: string; 
    public get authorizationId() {
        return this.getStringAttribute('authorization_id');
    }
    public set authorizationId(value: string) {
        this._authorizationId = value;
    }
    public resetAuthorizationId() {
        this._authorizationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationIdInput() {
        return this._authorizationId;
    }

    // authorization_private_key - computed: true, optional: true, required: false
    private _authorizationPrivateKey?: string; 
    public get authorizationPrivateKey() {
        return this.getStringAttribute('authorization_private_key');
    }
    public set authorizationPrivateKey(value: string) {
        this._authorizationPrivateKey = value;
    }
    public resetAuthorizationPrivateKey() {
        this._authorizationPrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationPrivateKeyInput() {
        return this._authorizationPrivateKey;
    }

    // authorization_private_key_config - computed: true, optional: true, required: false
    private _authorizationPrivateKeyConfig = new AuthorizationPrivateKeyConfigPropertyOutputReference(this, "authorization_private_key_config");
    public get authorizationPrivateKeyConfig() {
        return this._authorizationPrivateKeyConfig;
    }
    public putAuthorizationPrivateKeyConfig(value: AuthorizationPrivateKeyConfigProperty) {
        this._authorizationPrivateKeyConfig.internalValue = value;
    }
    public resetAuthorizationPrivateKeyConfig() {
        this._authorizationPrivateKeyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationPrivateKeyConfigInput() {
        return this._authorizationPrivateKeyConfig.internalValue;
    }

    // authorization_private_key_source - computed: true, optional: true, required: false
    private _authorizationPrivateKeySource?: string; 
    public get authorizationPrivateKeySource() {
        return this.getStringAttribute('authorization_private_key_source');
    }
    public set authorizationPrivateKeySource(value: string) {
        this._authorizationPrivateKeySource = value;
    }
    public resetAuthorizationPrivateKeySource() {
        this._authorizationPrivateKeySource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationPrivateKeySourceInput() {
        return this._authorizationPrivateKeySource;
    }
}
export interface PaymentProviderConfigurationInputProperty {
    /**
    * Coinbase CDP configuration with API credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#coinbase_cdp_configuration CcPaymentCredentialProvider#coinbase_cdp_configuration}
    */
    readonly coinbaseCdpConfiguration?: CoinbaseCdpConfigurationInputProperty;
    /**
    * Stripe Privy configuration with credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#stripe_privy_configuration CcPaymentCredentialProvider#stripe_privy_configuration}
    */
    readonly stripePrivyConfiguration?: StripePrivyConfigurationInputProperty;
}
export class PaymentProviderConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PaymentProviderConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._coinbaseCdpConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.coinbaseCdpConfiguration = this._coinbaseCdpConfiguration?.internalValue;
        }
        if (this._stripePrivyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripePrivyConfiguration = this._stripePrivyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PaymentProviderConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._coinbaseCdpConfiguration.internalValue = undefined;
            this._stripePrivyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._coinbaseCdpConfiguration.internalValue = value.coinbaseCdpConfiguration;
            this._stripePrivyConfiguration.internalValue = value.stripePrivyConfiguration;
        }
    }

    // coinbase_cdp_configuration - computed: true, optional: true, required: false
    private _coinbaseCdpConfiguration = new CoinbaseCdpConfigurationInputPropertyOutputReference(this, "coinbase_cdp_configuration");
    public get coinbaseCdpConfiguration() {
        return this._coinbaseCdpConfiguration;
    }
    public putCoinbaseCdpConfiguration(value: CoinbaseCdpConfigurationInputProperty) {
        this._coinbaseCdpConfiguration.internalValue = value;
    }
    public resetCoinbaseCdpConfiguration() {
        this._coinbaseCdpConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coinbaseCdpConfigurationInput() {
        return this._coinbaseCdpConfiguration.internalValue;
    }

    // stripe_privy_configuration - computed: true, optional: true, required: false
    private _stripePrivyConfiguration = new StripePrivyConfigurationInputPropertyOutputReference(this, "stripe_privy_configuration");
    public get stripePrivyConfiguration() {
        return this._stripePrivyConfiguration;
    }
    public putStripePrivyConfiguration(value: StripePrivyConfigurationInputProperty) {
        this._stripePrivyConfiguration.internalValue = value;
    }
    public resetStripePrivyConfiguration() {
        this._stripePrivyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stripePrivyConfigurationInput() {
        return this._stripePrivyConfiguration.internalValue;
    }
}
export interface ApiKeySecretArnProperty {
}
export class ApiKeySecretArnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiKeySecretArnProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiKeySecretArnProperty | undefined) {
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
export interface WalletSecretArnProperty {
}
export class WalletSecretArnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WalletSecretArnProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WalletSecretArnProperty | undefined) {
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
export interface CoinbaseCdpConfigurationProperty {
}
export class CoinbaseCdpConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CoinbaseCdpConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CoinbaseCdpConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // api_key_id - computed: true, optional: false, required: false
    public get apiKeyId() {
        return this.getStringAttribute('api_key_id');
    }

    // api_key_secret_arn - computed: true, optional: false, required: false
    private _apiKeySecretArn = new ApiKeySecretArnPropertyOutputReference(this, "api_key_secret_arn");
    public get apiKeySecretArn() {
        return this._apiKeySecretArn;
    }

    // api_key_secret_json_key - computed: true, optional: false, required: false
    public get apiKeySecretJsonKey() {
        return this.getStringAttribute('api_key_secret_json_key');
    }

    // api_key_secret_source - computed: true, optional: false, required: false
    public get apiKeySecretSource() {
        return this.getStringAttribute('api_key_secret_source');
    }

    // wallet_secret_arn - computed: true, optional: false, required: false
    private _walletSecretArn = new WalletSecretArnPropertyOutputReference(this, "wallet_secret_arn");
    public get walletSecretArn() {
        return this._walletSecretArn;
    }

    // wallet_secret_json_key - computed: true, optional: false, required: false
    public get walletSecretJsonKey() {
        return this.getStringAttribute('wallet_secret_json_key');
    }

    // wallet_secret_source - computed: true, optional: false, required: false
    public get walletSecretSource() {
        return this.getStringAttribute('wallet_secret_source');
    }
}
export interface AppSecretArnProperty {
}
export class AppSecretArnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppSecretArnProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppSecretArnProperty | undefined) {
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
export interface AuthorizationPrivateKeyArnProperty {
}
export class AuthorizationPrivateKeyArnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationPrivateKeyArnProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationPrivateKeyArnProperty | undefined) {
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
export interface StripePrivyConfigurationProperty {
}
export class StripePrivyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StripePrivyConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StripePrivyConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // app_id - computed: true, optional: false, required: false
    public get appId() {
        return this.getStringAttribute('app_id');
    }

    // app_secret_arn - computed: true, optional: false, required: false
    private _appSecretArn = new AppSecretArnPropertyOutputReference(this, "app_secret_arn");
    public get appSecretArn() {
        return this._appSecretArn;
    }

    // app_secret_json_key - computed: true, optional: false, required: false
    public get appSecretJsonKey() {
        return this.getStringAttribute('app_secret_json_key');
    }

    // app_secret_source - computed: true, optional: false, required: false
    public get appSecretSource() {
        return this.getStringAttribute('app_secret_source');
    }

    // authorization_id - computed: true, optional: false, required: false
    public get authorizationId() {
        return this.getStringAttribute('authorization_id');
    }

    // authorization_private_key_arn - computed: true, optional: false, required: false
    private _authorizationPrivateKeyArn = new AuthorizationPrivateKeyArnPropertyOutputReference(this, "authorization_private_key_arn");
    public get authorizationPrivateKeyArn() {
        return this._authorizationPrivateKeyArn;
    }

    // authorization_private_key_json_key - computed: true, optional: false, required: false
    public get authorizationPrivateKeyJsonKey() {
        return this.getStringAttribute('authorization_private_key_json_key');
    }

    // authorization_private_key_source - computed: true, optional: false, required: false
    public get authorizationPrivateKeySource() {
        return this.getStringAttribute('authorization_private_key_source');
    }
}
export interface ProviderConfigurationOutputProperty {
}
export class ProviderConfigurationOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProviderConfigurationOutputProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProviderConfigurationOutputProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // coinbase_cdp_configuration - computed: true, optional: false, required: false
    private _coinbaseCdpConfiguration = new CoinbaseCdpConfigurationPropertyOutputReference(this, "coinbase_cdp_configuration");
    public get coinbaseCdpConfiguration() {
        return this._coinbaseCdpConfiguration;
    }

    // stripe_privy_configuration - computed: true, optional: false, required: false
    private _stripePrivyConfiguration = new StripePrivyConfigurationPropertyOutputReference(this, "stripe_privy_configuration");
    public get stripePrivyConfiguration() {
        return this._stripePrivyConfiguration;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#key CcPaymentCredentialProvider#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_payment_credential_provider#value CcPaymentCredentialProvider#value}
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
