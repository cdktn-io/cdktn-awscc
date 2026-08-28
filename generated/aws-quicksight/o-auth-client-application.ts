// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOAuthClientApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#client_id CcOAuthClientApplication#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#client_secret CcOAuthClientApplication#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#data_source_type CcOAuthClientApplication#data_source_type}
    */
    readonly dataSourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties CcOAuthClientApplication#identity_provider_vpc_connection_properties}
    */
    readonly identityProviderVpcConnectionProperties?: CcOAuthClientApplication.IdentityProviderVpcConnectionPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#name CcOAuthClientApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url CcOAuthClientApplication#o_auth_authorization_endpoint_url}
    */
    readonly oAuthAuthorizationEndpointUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id CcOAuthClientApplication#o_auth_client_application_id}
    */
    readonly oAuthClientApplicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type CcOAuthClientApplication#o_auth_client_authentication_type}
    */
    readonly oAuthClientAuthenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#o_auth_scopes CcOAuthClientApplication#o_auth_scopes}
    */
    readonly oAuthScopes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url CcOAuthClientApplication#o_auth_token_endpoint_url}
    */
    readonly oAuthTokenEndpointUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#tags CcOAuthClientApplication#tags}
    */
    readonly tags?: CcOAuthClientApplication.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application}
*/
export class CcOAuthClientApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_o_auth_client_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOAuthClientApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOAuthClientApplication to import
    * @param importFromId The id of the existing CcOAuthClientApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOAuthClientApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_o_auth_client_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOAuthClientApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcOAuthClientApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_o_auth_client_application',
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
        this._clientId = config.clientId;
        this._clientSecret = config.clientSecret;
        this._dataSourceType = config.dataSourceType;
        this._identityProviderVpcConnectionProperties.internalValue = config.identityProviderVpcConnectionProperties;
        this._name = config.name;
        this._oAuthAuthorizationEndpointUrl = config.oAuthAuthorizationEndpointUrl;
        this._oAuthClientApplicationId = config.oAuthClientApplicationId;
        this._oAuthClientAuthenticationType = config.oAuthClientAuthenticationType;
        this._oAuthScopes = config.oAuthScopes;
        this._oAuthTokenEndpointUrl = config.oAuthTokenEndpointUrl;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // data_source_type - computed: true, optional: true, required: false
    private _dataSourceType?: string; 
    public get dataSourceType() {
        return this.getStringAttribute('data_source_type');
    }
    public set dataSourceType(value: string) {
        this._dataSourceType = value;
    }
    public resetDataSourceType() {
        this._dataSourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceTypeInput() {
        return this._dataSourceType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
    private _identityProviderVpcConnectionProperties = new CcOAuthClientApplication.IdentityProviderVpcConnectionPropertiesPropertyOutputReference(this, "identity_provider_vpc_connection_properties");
    public get identityProviderVpcConnectionProperties() {
        return this._identityProviderVpcConnectionProperties;
    }
    public putIdentityProviderVpcConnectionProperties(value: CcOAuthClientApplication.IdentityProviderVpcConnectionPropertiesProperty) {
        this._identityProviderVpcConnectionProperties.internalValue = value;
    }
    public resetIdentityProviderVpcConnectionProperties() {
        this._identityProviderVpcConnectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderVpcConnectionPropertiesInput() {
        return this._identityProviderVpcConnectionProperties.internalValue;
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

    // o_auth_authorization_endpoint_url - computed: true, optional: true, required: false
    private _oAuthAuthorizationEndpointUrl?: string; 
    public get oAuthAuthorizationEndpointUrl() {
        return this.getStringAttribute('o_auth_authorization_endpoint_url');
    }
    public set oAuthAuthorizationEndpointUrl(value: string) {
        this._oAuthAuthorizationEndpointUrl = value;
    }
    public resetOAuthAuthorizationEndpointUrl() {
        this._oAuthAuthorizationEndpointUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthAuthorizationEndpointUrlInput() {
        return this._oAuthAuthorizationEndpointUrl;
    }

    // o_auth_client_application_id - computed: false, optional: false, required: true
    private _oAuthClientApplicationId?: string; 
    public get oAuthClientApplicationId() {
        return this.getStringAttribute('o_auth_client_application_id');
    }
    public set oAuthClientApplicationId(value: string) {
        this._oAuthClientApplicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthClientApplicationIdInput() {
        return this._oAuthClientApplicationId;
    }

    // o_auth_client_authentication_type - computed: false, optional: false, required: true
    private _oAuthClientAuthenticationType?: string; 
    public get oAuthClientAuthenticationType() {
        return this.getStringAttribute('o_auth_client_authentication_type');
    }
    public set oAuthClientAuthenticationType(value: string) {
        this._oAuthClientAuthenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthClientAuthenticationTypeInput() {
        return this._oAuthClientAuthenticationType;
    }

    // o_auth_scopes - computed: true, optional: true, required: false
    private _oAuthScopes?: string; 
    public get oAuthScopes() {
        return this.getStringAttribute('o_auth_scopes');
    }
    public set oAuthScopes(value: string) {
        this._oAuthScopes = value;
    }
    public resetOAuthScopes() {
        this._oAuthScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthScopesInput() {
        return this._oAuthScopes;
    }

    // o_auth_token_endpoint_url - computed: false, optional: false, required: true
    private _oAuthTokenEndpointUrl?: string; 
    public get oAuthTokenEndpointUrl() {
        return this.getStringAttribute('o_auth_token_endpoint_url');
    }
    public set oAuthTokenEndpointUrl(value: string) {
        this._oAuthTokenEndpointUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthTokenEndpointUrlInput() {
        return this._oAuthTokenEndpointUrl;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOAuthClientApplication.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOAuthClientApplication.TagProperty[] | cdktn.IResolvable) {
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
            client_id: cdktn.stringToTerraform(this._clientId),
            client_secret: cdktn.stringToTerraform(this._clientSecret),
            data_source_type: cdktn.stringToTerraform(this._dataSourceType),
            identity_provider_vpc_connection_properties: ccOAuthClientApplicationIdentityProviderVpcConnectionPropertiesPropertyToTerraform(this._identityProviderVpcConnectionProperties.internalValue),
            name: cdktn.stringToTerraform(this._name),
            o_auth_authorization_endpoint_url: cdktn.stringToTerraform(this._oAuthAuthorizationEndpointUrl),
            o_auth_client_application_id: cdktn.stringToTerraform(this._oAuthClientApplicationId),
            o_auth_client_authentication_type: cdktn.stringToTerraform(this._oAuthClientAuthenticationType),
            o_auth_scopes: cdktn.stringToTerraform(this._oAuthScopes),
            o_auth_token_endpoint_url: cdktn.stringToTerraform(this._oAuthTokenEndpointUrl),
            tags: cdktn.listMapper(ccOAuthClientApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_id: {
                value: cdktn.stringToHclTerraform(this._clientId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_secret: {
                value: cdktn.stringToHclTerraform(this._clientSecret),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_source_type: {
                value: cdktn.stringToHclTerraform(this._dataSourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_provider_vpc_connection_properties: {
                value: ccOAuthClientApplicationIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(this._identityProviderVpcConnectionProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOAuthClientApplication.IdentityProviderVpcConnectionPropertiesProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            o_auth_authorization_endpoint_url: {
                value: cdktn.stringToHclTerraform(this._oAuthAuthorizationEndpointUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            o_auth_client_application_id: {
                value: cdktn.stringToHclTerraform(this._oAuthClientApplicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            o_auth_client_authentication_type: {
                value: cdktn.stringToHclTerraform(this._oAuthClientAuthenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            o_auth_scopes: {
                value: cdktn.stringToHclTerraform(this._oAuthScopes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            o_auth_token_endpoint_url: {
                value: cdktn.stringToHclTerraform(this._oAuthTokenEndpointUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOAuthClientApplicationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOAuthClientApplication.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOAuthClientApplicationIdentityProviderVpcConnectionPropertiesPropertyToTerraform(struct?: CcOAuthClientApplication.IdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
    }
}


export function ccOAuthClientApplicationIdentityProviderVpcConnectionPropertiesPropertyToHclTerraform(struct?: CcOAuthClientApplication.IdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOAuthClientApplicationTagPropertyToTerraform(struct?: CcOAuthClientApplication.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOAuthClientApplicationTagPropertyToHclTerraform(struct?: CcOAuthClientApplication.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOAuthClientApplication {
export interface IdentityProviderVpcConnectionPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn CcOAuthClientApplication#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}
export class IdentityProviderVpcConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcConnectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdentityProviderVpcConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcConnectionArn = value.vpcConnectionArn;
        }
    }

    // vpc_connection_arn - computed: true, optional: true, required: false
    private _vpcConnectionArn?: string; 
    public get vpcConnectionArn() {
        return this.getStringAttribute('vpc_connection_arn');
    }
    public set vpcConnectionArn(value: string) {
        this._vpcConnectionArn = value;
    }
    public resetVpcConnectionArn() {
        this._vpcConnectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectionArnInput() {
        return this._vpcConnectionArn;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#key CcOAuthClientApplication#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_o_auth_client_application#value CcOAuthClientApplication#value}
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
