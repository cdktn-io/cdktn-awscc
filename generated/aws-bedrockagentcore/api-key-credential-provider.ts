// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApiKeyCredentialProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * The API key to use for authentication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key CcApiKeyCredentialProvider#api_key}
    */
    readonly apiKey?: string;
    /**
    * Configuration for a customer-provided secret containing the API key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_config CcApiKeyCredentialProvider#api_key_secret_config}
    */
    readonly apiKeySecretConfig?: CcApiKeyCredentialProvider.SecretReferenceProperty;
    /**
    * The source of the API key secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_source CcApiKeyCredentialProvider#api_key_secret_source}
    */
    readonly apiKeySecretSource?: string;
    /**
    * The name of the API key credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#name CcApiKeyCredentialProvider#name}
    */
    readonly name: string;
    /**
    * Tags to assign to the API key credential provider
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#tags CcApiKeyCredentialProvider#tags}
    */
    readonly tags?: CcApiKeyCredentialProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider awscc_bedrockagentcore_api_key_credential_provider}
*/
export class CcApiKeyCredentialProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_api_key_credential_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApiKeyCredentialProvider to import
    * @param importFromId The id of the existing CcApiKeyCredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApiKeyCredentialProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_api_key_credential_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider awscc_bedrockagentcore_api_key_credential_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApiKeyCredentialProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcApiKeyCredentialProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_api_key_credential_provider',
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
        this._apiKey = config.apiKey;
        this._apiKeySecretConfig.internalValue = config.apiKeySecretConfig;
        this._apiKeySecretSource = config.apiKeySecretSource;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // api_key_secret_arn - computed: true, optional: false, required: false
    private _apiKeySecretArn = new CcApiKeyCredentialProvider.ApiKeySecretArnPropertyOutputReference(this, "api_key_secret_arn");
    public get apiKeySecretArn() {
        return this._apiKeySecretArn;
    }

    // api_key_secret_config - computed: true, optional: true, required: false
    private _apiKeySecretConfig = new CcApiKeyCredentialProvider.SecretReferencePropertyOutputReference(this, "api_key_secret_config");
    public get apiKeySecretConfig() {
        return this._apiKeySecretConfig;
    }
    public putApiKeySecretConfig(value: CcApiKeyCredentialProvider.SecretReferenceProperty) {
        this._apiKeySecretConfig.internalValue = value;
    }
    public resetApiKeySecretConfig() {
        this._apiKeySecretConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeySecretConfigInput() {
        return this._apiKeySecretConfig.internalValue;
    }

    // api_key_secret_json_key - computed: true, optional: false, required: false
    public get apiKeySecretJsonKey() {
        return this.getStringAttribute('api_key_secret_json_key');
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

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // credential_provider_arn - computed: true, optional: false, required: false
    public get credentialProviderArn() {
        return this.getStringAttribute('credential_provider_arn');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApiKeyCredentialProvider.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApiKeyCredentialProvider.TagProperty[] | cdktn.IResolvable) {
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
            api_key: cdktn.stringToTerraform(this._apiKey),
            api_key_secret_config: ccApiKeyCredentialProviderSecretReferencePropertyToTerraform(this._apiKeySecretConfig.internalValue),
            api_key_secret_source: cdktn.stringToTerraform(this._apiKeySecretSource),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccApiKeyCredentialProviderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_key: {
                value: cdktn.stringToHclTerraform(this._apiKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            api_key_secret_config: {
                value: ccApiKeyCredentialProviderSecretReferencePropertyToHclTerraform(this._apiKeySecretConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApiKeyCredentialProvider.SecretReferenceProperty",
            },
            api_key_secret_source: {
                value: cdktn.stringToHclTerraform(this._apiKeySecretSource),
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
            tags: {
                value: cdktn.listMapperHcl(ccApiKeyCredentialProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApiKeyCredentialProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApiKeyCredentialProviderApiKeySecretArnPropertyToTerraform(struct?: CcApiKeyCredentialProvider.ApiKeySecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccApiKeyCredentialProviderApiKeySecretArnPropertyToHclTerraform(struct?: CcApiKeyCredentialProvider.ApiKeySecretArnProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccApiKeyCredentialProviderSecretReferencePropertyToTerraform(struct?: CcApiKeyCredentialProvider.SecretReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        json_key: cdktn.stringToTerraform(struct!.jsonKey),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccApiKeyCredentialProviderSecretReferencePropertyToHclTerraform(struct?: CcApiKeyCredentialProvider.SecretReferenceProperty | cdktn.IResolvable): any {
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


export function ccApiKeyCredentialProviderTagPropertyToTerraform(struct?: CcApiKeyCredentialProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApiKeyCredentialProviderTagPropertyToHclTerraform(struct?: CcApiKeyCredentialProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcApiKeyCredentialProvider {
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
export interface SecretReferenceProperty {
    /**
    * The JSON key within the secret that contains the credential value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#json_key CcApiKeyCredentialProvider#json_key}
    */
    readonly jsonKey?: string;
    /**
    * The ID or ARN of the secret in AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#secret_id CcApiKeyCredentialProvider#secret_id}
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#key CcApiKeyCredentialProvider#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrockagentcore_api_key_credential_provider#value CcApiKeyCredentialProvider#value}
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
