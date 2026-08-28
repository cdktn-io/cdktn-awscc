// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcActionConnectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#action_connector_id CcActionConnector#action_connector_id}
    */
    readonly actionConnectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_config CcActionConnector#authentication_config}
    */
    readonly authenticationConfig: CcActionConnector.AuthConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#aws_account_id CcActionConnector#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#description CcActionConnector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#name CcActionConnector#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#permissions CcActionConnector#permissions}
    */
    readonly permissions?: CcActionConnector.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#tags CcActionConnector#tags}
    */
    readonly tags?: CcActionConnector.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#type CcActionConnector#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#vpc_connection_arn CcActionConnector#vpc_connection_arn}
    */
    readonly vpcConnectionArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector awscc_quicksight_action_connector}
*/
export class CcActionConnector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_action_connector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcActionConnector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcActionConnector to import
    * @param importFromId The id of the existing CcActionConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcActionConnector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_action_connector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector awscc_quicksight_action_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcActionConnectorProps
    */
    public constructor(scope: Construct, id: string, config: CcActionConnectorProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_action_connector',
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
        this._actionConnectorId = config.actionConnectorId;
        this._authenticationConfig.internalValue = config.authenticationConfig;
        this._awsAccountId = config.awsAccountId;
        this._description = config.description;
        this._name = config.name;
        this._permissions.internalValue = config.permissions;
        this._tags.internalValue = config.tags;
        this._type = config.type;
        this._vpcConnectionArn = config.vpcConnectionArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_connector_id - computed: false, optional: false, required: true
    private _actionConnectorId?: string; 
    public get actionConnectorId() {
        return this.getStringAttribute('action_connector_id');
    }
    public set actionConnectorId(value: string) {
        this._actionConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionConnectorIdInput() {
        return this._actionConnectorId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authentication_config - computed: false, optional: false, required: true
    private _authenticationConfig = new CcActionConnector.AuthConfigPropertyOutputReference(this, "authentication_config");
    public get authenticationConfig() {
        return this._authenticationConfig;
    }
    public putAuthenticationConfig(value: CcActionConnector.AuthConfigProperty) {
        this._authenticationConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationConfigInput() {
        return this._authenticationConfig.internalValue;
    }

    // aws_account_id - computed: false, optional: false, required: true
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // enabled_actions - computed: true, optional: false, required: false
    public get enabledActions() {
        return this.getListAttribute('enabled_actions');
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

    // permissions - computed: true, optional: true, required: false
    private _permissions = new CcActionConnector.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcActionConnector.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcActionConnector.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcActionConnector.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action_connector_id: cdktn.stringToTerraform(this._actionConnectorId),
            authentication_config: ccActionConnectorAuthConfigPropertyToTerraform(this._authenticationConfig.internalValue),
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            permissions: cdktn.listMapper(ccActionConnectorResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            tags: cdktn.listMapper(ccActionConnectorTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
            vpc_connection_arn: cdktn.stringToTerraform(this._vpcConnectionArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_connector_id: {
                value: cdktn.stringToHclTerraform(this._actionConnectorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authentication_config: {
                value: ccActionConnectorAuthConfigPropertyToHclTerraform(this._authenticationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcActionConnector.AuthConfigProperty",
            },
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            permissions: {
                value: cdktn.listMapperHcl(ccActionConnectorResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcActionConnector.ResourcePermissionPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccActionConnectorTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcActionConnector.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_connection_arn: {
                value: cdktn.stringToHclTerraform(this._vpcConnectionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccActionConnectorAPIKeyConnectionMetadataPropertyToTerraform(struct?: CcActionConnector.APIKeyConnectionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key: cdktn.stringToTerraform(struct!.apiKey),
        base_endpoint: cdktn.stringToTerraform(struct!.baseEndpoint),
        email: cdktn.stringToTerraform(struct!.email),
    }
}


export function ccActionConnectorAPIKeyConnectionMetadataPropertyToHclTerraform(struct?: CcActionConnector.APIKeyConnectionMetadataProperty | cdktn.IResolvable): any {
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
        base_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.baseEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email: {
            value: cdktn.stringToHclTerraform(struct!.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorAuthorizationCodeGrantDetailsPropertyToTerraform(struct?: CcActionConnector.AuthorizationCodeGrantDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    }
}


export function ccActionConnectorAuthorizationCodeGrantDetailsPropertyToHclTerraform(struct?: CcActionConnector.AuthorizationCodeGrantDetailsProperty | cdktn.IResolvable): any {
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


export function ccActionConnectorAuthorizationCodeGrantCredentialsDetailsPropertyToTerraform(struct?: CcActionConnector.AuthorizationCodeGrantCredentialsDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code_grant_details: ccActionConnectorAuthorizationCodeGrantDetailsPropertyToTerraform(struct!.authorizationCodeGrantDetails),
    }
}


export function ccActionConnectorAuthorizationCodeGrantCredentialsDetailsPropertyToHclTerraform(struct?: CcActionConnector.AuthorizationCodeGrantCredentialsDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code_grant_details: {
            value: ccActionConnectorAuthorizationCodeGrantDetailsPropertyToHclTerraform(struct!.authorizationCodeGrantDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodeGrantDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorAuthorizationCodeGrantMetadataPropertyToTerraform(struct?: CcActionConnector.AuthorizationCodeGrantMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code_grant_credentials_details: ccActionConnectorAuthorizationCodeGrantCredentialsDetailsPropertyToTerraform(struct!.authorizationCodeGrantCredentialsDetails),
        authorization_code_grant_credentials_source: cdktn.stringToTerraform(struct!.authorizationCodeGrantCredentialsSource),
        base_endpoint: cdktn.stringToTerraform(struct!.baseEndpoint),
        redirect_url: cdktn.stringToTerraform(struct!.redirectUrl),
    }
}


export function ccActionConnectorAuthorizationCodeGrantMetadataPropertyToHclTerraform(struct?: CcActionConnector.AuthorizationCodeGrantMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code_grant_credentials_details: {
            value: ccActionConnectorAuthorizationCodeGrantCredentialsDetailsPropertyToHclTerraform(struct!.authorizationCodeGrantCredentialsDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodeGrantCredentialsDetailsProperty",
        },
        authorization_code_grant_credentials_source: {
            value: cdktn.stringToHclTerraform(struct!.authorizationCodeGrantCredentialsSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        base_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.baseEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_url: {
            value: cdktn.stringToHclTerraform(struct!.redirectUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorBasicAuthConnectionMetadataPropertyToTerraform(struct?: CcActionConnector.BasicAuthConnectionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_endpoint: cdktn.stringToTerraform(struct!.baseEndpoint),
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccActionConnectorBasicAuthConnectionMetadataPropertyToHclTerraform(struct?: CcActionConnector.BasicAuthConnectionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.baseEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccActionConnectorClientCredentialsGrantDetailsPropertyToTerraform(struct?: CcActionConnector.ClientCredentialsGrantDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
        token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    }
}


export function ccActionConnectorClientCredentialsGrantDetailsPropertyToHclTerraform(struct?: CcActionConnector.ClientCredentialsGrantDetailsProperty | cdktn.IResolvable): any {
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


export function ccActionConnectorClientCredentialsDetailsPropertyToTerraform(struct?: CcActionConnector.ClientCredentialsDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_credentials_grant_details: ccActionConnectorClientCredentialsGrantDetailsPropertyToTerraform(struct!.clientCredentialsGrantDetails),
    }
}


export function ccActionConnectorClientCredentialsDetailsPropertyToHclTerraform(struct?: CcActionConnector.ClientCredentialsDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_credentials_grant_details: {
            value: ccActionConnectorClientCredentialsGrantDetailsPropertyToHclTerraform(struct!.clientCredentialsGrantDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "ClientCredentialsGrantDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorClientCredentialsGrantMetadataPropertyToTerraform(struct?: CcActionConnector.ClientCredentialsGrantMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_endpoint: cdktn.stringToTerraform(struct!.baseEndpoint),
        client_credentials_details: ccActionConnectorClientCredentialsDetailsPropertyToTerraform(struct!.clientCredentialsDetails),
        client_credentials_source: cdktn.stringToTerraform(struct!.clientCredentialsSource),
    }
}


export function ccActionConnectorClientCredentialsGrantMetadataPropertyToHclTerraform(struct?: CcActionConnector.ClientCredentialsGrantMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.baseEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_credentials_details: {
            value: ccActionConnectorClientCredentialsDetailsPropertyToHclTerraform(struct!.clientCredentialsDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "ClientCredentialsDetailsProperty",
        },
        client_credentials_source: {
            value: cdktn.stringToHclTerraform(struct!.clientCredentialsSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorIAMConnectionMetadataPropertyToTerraform(struct?: CcActionConnector.IAMConnectionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccActionConnectorIAMConnectionMetadataPropertyToHclTerraform(struct?: CcActionConnector.IAMConnectionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorNoneConnectionMetadataPropertyToTerraform(struct?: CcActionConnector.NoneConnectionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_endpoint: cdktn.stringToTerraform(struct!.baseEndpoint),
    }
}


export function ccActionConnectorNoneConnectionMetadataPropertyToHclTerraform(struct?: CcActionConnector.NoneConnectionMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_endpoint: {
            value: cdktn.stringToHclTerraform(struct!.baseEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorAuthenticationMetadataPropertyToTerraform(struct?: CcActionConnector.AuthenticationMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_connection_metadata: ccActionConnectorAPIKeyConnectionMetadataPropertyToTerraform(struct!.apiKeyConnectionMetadata),
        authorization_code_grant_metadata: ccActionConnectorAuthorizationCodeGrantMetadataPropertyToTerraform(struct!.authorizationCodeGrantMetadata),
        basic_auth_connection_metadata: ccActionConnectorBasicAuthConnectionMetadataPropertyToTerraform(struct!.basicAuthConnectionMetadata),
        client_credentials_grant_metadata: ccActionConnectorClientCredentialsGrantMetadataPropertyToTerraform(struct!.clientCredentialsGrantMetadata),
        iam_connection_metadata: ccActionConnectorIAMConnectionMetadataPropertyToTerraform(struct!.iamConnectionMetadata),
        none_connection_metadata: ccActionConnectorNoneConnectionMetadataPropertyToTerraform(struct!.noneConnectionMetadata),
    }
}


export function ccActionConnectorAuthenticationMetadataPropertyToHclTerraform(struct?: CcActionConnector.AuthenticationMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_connection_metadata: {
            value: ccActionConnectorAPIKeyConnectionMetadataPropertyToHclTerraform(struct!.apiKeyConnectionMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "APIKeyConnectionMetadataProperty",
        },
        authorization_code_grant_metadata: {
            value: ccActionConnectorAuthorizationCodeGrantMetadataPropertyToHclTerraform(struct!.authorizationCodeGrantMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodeGrantMetadataProperty",
        },
        basic_auth_connection_metadata: {
            value: ccActionConnectorBasicAuthConnectionMetadataPropertyToHclTerraform(struct!.basicAuthConnectionMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "BasicAuthConnectionMetadataProperty",
        },
        client_credentials_grant_metadata: {
            value: ccActionConnectorClientCredentialsGrantMetadataPropertyToHclTerraform(struct!.clientCredentialsGrantMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "ClientCredentialsGrantMetadataProperty",
        },
        iam_connection_metadata: {
            value: ccActionConnectorIAMConnectionMetadataPropertyToHclTerraform(struct!.iamConnectionMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "IAMConnectionMetadataProperty",
        },
        none_connection_metadata: {
            value: ccActionConnectorNoneConnectionMetadataPropertyToHclTerraform(struct!.noneConnectionMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "NoneConnectionMetadataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorAuthConfigPropertyToTerraform(struct?: CcActionConnector.AuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_metadata: ccActionConnectorAuthenticationMetadataPropertyToTerraform(struct!.authenticationMetadata),
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    }
}


export function ccActionConnectorAuthConfigPropertyToHclTerraform(struct?: CcActionConnector.AuthConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_metadata: {
            value: ccActionConnectorAuthenticationMetadataPropertyToHclTerraform(struct!.authenticationMetadata),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticationMetadataProperty",
        },
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorResourcePermissionPropertyToTerraform(struct?: CcActionConnector.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
    }
}


export function ccActionConnectorResourcePermissionPropertyToHclTerraform(struct?: CcActionConnector.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        principal: {
            value: cdktn.stringToHclTerraform(struct!.principal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccActionConnectorTagPropertyToTerraform(struct?: CcActionConnector.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccActionConnectorTagPropertyToHclTerraform(struct?: CcActionConnector.TagProperty | cdktn.IResolvable): any {
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


export namespace CcActionConnector {
export interface APIKeyConnectionMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#api_key CcActionConnector#api_key}
    */
    readonly apiKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint CcActionConnector#base_endpoint}
    */
    readonly baseEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#email CcActionConnector#email}
    */
    readonly email?: string;
}
export class APIKeyConnectionMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): APIKeyConnectionMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKey = this._apiKey;
        }
        if (this._baseEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseEndpoint = this._baseEndpoint;
        }
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: APIKeyConnectionMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKey = undefined;
            this._baseEndpoint = undefined;
            this._email = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKey = value.apiKey;
            this._baseEndpoint = value.baseEndpoint;
            this._email = value.email;
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

    // base_endpoint - computed: true, optional: true, required: false
    private _baseEndpoint?: string; 
    public get baseEndpoint() {
        return this.getStringAttribute('base_endpoint');
    }
    public set baseEndpoint(value: string) {
        this._baseEndpoint = value;
    }
    public resetBaseEndpoint() {
        this._baseEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseEndpointInput() {
        return this._baseEndpoint;
    }

    // email - computed: true, optional: true, required: false
    private _email?: string; 
    public get email() {
        return this.getStringAttribute('email');
    }
    public set email(value: string) {
        this._email = value;
    }
    public resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
        return this._email;
    }
}
export interface AuthorizationCodeGrantDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_endpoint CcActionConnector#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_id CcActionConnector#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_secret CcActionConnector#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#token_endpoint CcActionConnector#token_endpoint}
    */
    readonly tokenEndpoint?: string;
}
export class AuthorizationCodeGrantDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationCodeGrantDetailsProperty | cdktn.IResolvable | undefined {
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
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodeGrantDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
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
export interface AuthorizationCodeGrantCredentialsDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_details CcActionConnector#authorization_code_grant_details}
    */
    readonly authorizationCodeGrantDetails?: AuthorizationCodeGrantDetailsProperty;
}
export class AuthorizationCodeGrantCredentialsDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationCodeGrantCredentialsDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationCodeGrantDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeGrantDetails = this._authorizationCodeGrantDetails?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodeGrantCredentialsDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCodeGrantDetails.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCodeGrantDetails.internalValue = value.authorizationCodeGrantDetails;
        }
    }

    // authorization_code_grant_details - computed: true, optional: true, required: false
    private _authorizationCodeGrantDetails = new AuthorizationCodeGrantDetailsPropertyOutputReference(this, "authorization_code_grant_details");
    public get authorizationCodeGrantDetails() {
        return this._authorizationCodeGrantDetails;
    }
    public putAuthorizationCodeGrantDetails(value: AuthorizationCodeGrantDetailsProperty) {
        this._authorizationCodeGrantDetails.internalValue = value;
    }
    public resetAuthorizationCodeGrantDetails() {
        this._authorizationCodeGrantDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeGrantDetailsInput() {
        return this._authorizationCodeGrantDetails.internalValue;
    }
}
export interface AuthorizationCodeGrantMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details CcActionConnector#authorization_code_grant_credentials_details}
    */
    readonly authorizationCodeGrantCredentialsDetails?: AuthorizationCodeGrantCredentialsDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source CcActionConnector#authorization_code_grant_credentials_source}
    */
    readonly authorizationCodeGrantCredentialsSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint CcActionConnector#base_endpoint}
    */
    readonly baseEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#redirect_url CcActionConnector#redirect_url}
    */
    readonly redirectUrl?: string;
}
export class AuthorizationCodeGrantMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationCodeGrantMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationCodeGrantCredentialsDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeGrantCredentialsDetails = this._authorizationCodeGrantCredentialsDetails?.internalValue;
        }
        if (this._authorizationCodeGrantCredentialsSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeGrantCredentialsSource = this._authorizationCodeGrantCredentialsSource;
        }
        if (this._baseEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseEndpoint = this._baseEndpoint;
        }
        if (this._redirectUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUrl = this._redirectUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodeGrantMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCodeGrantCredentialsDetails.internalValue = undefined;
            this._authorizationCodeGrantCredentialsSource = undefined;
            this._baseEndpoint = undefined;
            this._redirectUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCodeGrantCredentialsDetails.internalValue = value.authorizationCodeGrantCredentialsDetails;
            this._authorizationCodeGrantCredentialsSource = value.authorizationCodeGrantCredentialsSource;
            this._baseEndpoint = value.baseEndpoint;
            this._redirectUrl = value.redirectUrl;
        }
    }

    // authorization_code_grant_credentials_details - computed: true, optional: true, required: false
    private _authorizationCodeGrantCredentialsDetails = new AuthorizationCodeGrantCredentialsDetailsPropertyOutputReference(this, "authorization_code_grant_credentials_details");
    public get authorizationCodeGrantCredentialsDetails() {
        return this._authorizationCodeGrantCredentialsDetails;
    }
    public putAuthorizationCodeGrantCredentialsDetails(value: AuthorizationCodeGrantCredentialsDetailsProperty) {
        this._authorizationCodeGrantCredentialsDetails.internalValue = value;
    }
    public resetAuthorizationCodeGrantCredentialsDetails() {
        this._authorizationCodeGrantCredentialsDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeGrantCredentialsDetailsInput() {
        return this._authorizationCodeGrantCredentialsDetails.internalValue;
    }

    // authorization_code_grant_credentials_source - computed: true, optional: true, required: false
    private _authorizationCodeGrantCredentialsSource?: string; 
    public get authorizationCodeGrantCredentialsSource() {
        return this.getStringAttribute('authorization_code_grant_credentials_source');
    }
    public set authorizationCodeGrantCredentialsSource(value: string) {
        this._authorizationCodeGrantCredentialsSource = value;
    }
    public resetAuthorizationCodeGrantCredentialsSource() {
        this._authorizationCodeGrantCredentialsSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeGrantCredentialsSourceInput() {
        return this._authorizationCodeGrantCredentialsSource;
    }

    // base_endpoint - computed: true, optional: true, required: false
    private _baseEndpoint?: string; 
    public get baseEndpoint() {
        return this.getStringAttribute('base_endpoint');
    }
    public set baseEndpoint(value: string) {
        this._baseEndpoint = value;
    }
    public resetBaseEndpoint() {
        this._baseEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseEndpointInput() {
        return this._baseEndpoint;
    }

    // redirect_url - computed: true, optional: true, required: false
    private _redirectUrl?: string; 
    public get redirectUrl() {
        return this.getStringAttribute('redirect_url');
    }
    public set redirectUrl(value: string) {
        this._redirectUrl = value;
    }
    public resetRedirectUrl() {
        this._redirectUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUrlInput() {
        return this._redirectUrl;
    }
}
export interface BasicAuthConnectionMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint CcActionConnector#base_endpoint}
    */
    readonly baseEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#password CcActionConnector#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#username CcActionConnector#username}
    */
    readonly username?: string;
}
export class BasicAuthConnectionMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BasicAuthConnectionMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseEndpoint = this._baseEndpoint;
        }
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

    public set internalValue(value: BasicAuthConnectionMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseEndpoint = undefined;
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
            this._baseEndpoint = value.baseEndpoint;
            this._password = value.password;
            this._username = value.username;
        }
    }

    // base_endpoint - computed: true, optional: true, required: false
    private _baseEndpoint?: string; 
    public get baseEndpoint() {
        return this.getStringAttribute('base_endpoint');
    }
    public set baseEndpoint(value: string) {
        this._baseEndpoint = value;
    }
    public resetBaseEndpoint() {
        this._baseEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseEndpointInput() {
        return this._baseEndpoint;
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
export interface ClientCredentialsGrantDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_id CcActionConnector#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_secret CcActionConnector#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#token_endpoint CcActionConnector#token_endpoint}
    */
    readonly tokenEndpoint?: string;
}
export class ClientCredentialsGrantDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientCredentialsGrantDetailsProperty | cdktn.IResolvable | undefined {
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
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientCredentialsGrantDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._tokenEndpoint = undefined;
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
            this._tokenEndpoint = value.tokenEndpoint;
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
export interface ClientCredentialsDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_grant_details CcActionConnector#client_credentials_grant_details}
    */
    readonly clientCredentialsGrantDetails?: ClientCredentialsGrantDetailsProperty;
}
export class ClientCredentialsDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientCredentialsDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientCredentialsGrantDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCredentialsGrantDetails = this._clientCredentialsGrantDetails?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientCredentialsDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientCredentialsGrantDetails.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientCredentialsGrantDetails.internalValue = value.clientCredentialsGrantDetails;
        }
    }

    // client_credentials_grant_details - computed: true, optional: true, required: false
    private _clientCredentialsGrantDetails = new ClientCredentialsGrantDetailsPropertyOutputReference(this, "client_credentials_grant_details");
    public get clientCredentialsGrantDetails() {
        return this._clientCredentialsGrantDetails;
    }
    public putClientCredentialsGrantDetails(value: ClientCredentialsGrantDetailsProperty) {
        this._clientCredentialsGrantDetails.internalValue = value;
    }
    public resetClientCredentialsGrantDetails() {
        this._clientCredentialsGrantDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCredentialsGrantDetailsInput() {
        return this._clientCredentialsGrantDetails.internalValue;
    }
}
export interface ClientCredentialsGrantMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint CcActionConnector#base_endpoint}
    */
    readonly baseEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_details CcActionConnector#client_credentials_details}
    */
    readonly clientCredentialsDetails?: ClientCredentialsDetailsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_source CcActionConnector#client_credentials_source}
    */
    readonly clientCredentialsSource?: string;
}
export class ClientCredentialsGrantMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientCredentialsGrantMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseEndpoint = this._baseEndpoint;
        }
        if (this._clientCredentialsDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCredentialsDetails = this._clientCredentialsDetails?.internalValue;
        }
        if (this._clientCredentialsSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCredentialsSource = this._clientCredentialsSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientCredentialsGrantMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseEndpoint = undefined;
            this._clientCredentialsDetails.internalValue = undefined;
            this._clientCredentialsSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseEndpoint = value.baseEndpoint;
            this._clientCredentialsDetails.internalValue = value.clientCredentialsDetails;
            this._clientCredentialsSource = value.clientCredentialsSource;
        }
    }

    // base_endpoint - computed: true, optional: true, required: false
    private _baseEndpoint?: string; 
    public get baseEndpoint() {
        return this.getStringAttribute('base_endpoint');
    }
    public set baseEndpoint(value: string) {
        this._baseEndpoint = value;
    }
    public resetBaseEndpoint() {
        this._baseEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseEndpointInput() {
        return this._baseEndpoint;
    }

    // client_credentials_details - computed: true, optional: true, required: false
    private _clientCredentialsDetails = new ClientCredentialsDetailsPropertyOutputReference(this, "client_credentials_details");
    public get clientCredentialsDetails() {
        return this._clientCredentialsDetails;
    }
    public putClientCredentialsDetails(value: ClientCredentialsDetailsProperty) {
        this._clientCredentialsDetails.internalValue = value;
    }
    public resetClientCredentialsDetails() {
        this._clientCredentialsDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCredentialsDetailsInput() {
        return this._clientCredentialsDetails.internalValue;
    }

    // client_credentials_source - computed: true, optional: true, required: false
    private _clientCredentialsSource?: string; 
    public get clientCredentialsSource() {
        return this.getStringAttribute('client_credentials_source');
    }
    public set clientCredentialsSource(value: string) {
        this._clientCredentialsSource = value;
    }
    public resetClientCredentialsSource() {
        this._clientCredentialsSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCredentialsSourceInput() {
        return this._clientCredentialsSource;
    }
}
export interface IAMConnectionMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#role_arn CcActionConnector#role_arn}
    */
    readonly roleArn?: string;
}
export class IAMConnectionMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IAMConnectionMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IAMConnectionMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
        }
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
}
export interface NoneConnectionMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#base_endpoint CcActionConnector#base_endpoint}
    */
    readonly baseEndpoint?: string;
}
export class NoneConnectionMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NoneConnectionMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseEndpoint = this._baseEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoneConnectionMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseEndpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseEndpoint = value.baseEndpoint;
        }
    }

    // base_endpoint - computed: true, optional: true, required: false
    private _baseEndpoint?: string; 
    public get baseEndpoint() {
        return this.getStringAttribute('base_endpoint');
    }
    public set baseEndpoint(value: string) {
        this._baseEndpoint = value;
    }
    public resetBaseEndpoint() {
        this._baseEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseEndpointInput() {
        return this._baseEndpoint;
    }
}
export interface AuthenticationMetadataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#api_key_connection_metadata CcActionConnector#api_key_connection_metadata}
    */
    readonly apiKeyConnectionMetadata?: APIKeyConnectionMetadataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata CcActionConnector#authorization_code_grant_metadata}
    */
    readonly authorizationCodeGrantMetadata?: AuthorizationCodeGrantMetadataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata CcActionConnector#basic_auth_connection_metadata}
    */
    readonly basicAuthConnectionMetadata?: BasicAuthConnectionMetadataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata CcActionConnector#client_credentials_grant_metadata}
    */
    readonly clientCredentialsGrantMetadata?: ClientCredentialsGrantMetadataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#iam_connection_metadata CcActionConnector#iam_connection_metadata}
    */
    readonly iamConnectionMetadata?: IAMConnectionMetadataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#none_connection_metadata CcActionConnector#none_connection_metadata}
    */
    readonly noneConnectionMetadata?: NoneConnectionMetadataProperty;
}
export class AuthenticationMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticationMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyConnectionMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyConnectionMetadata = this._apiKeyConnectionMetadata?.internalValue;
        }
        if (this._authorizationCodeGrantMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeGrantMetadata = this._authorizationCodeGrantMetadata?.internalValue;
        }
        if (this._basicAuthConnectionMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuthConnectionMetadata = this._basicAuthConnectionMetadata?.internalValue;
        }
        if (this._clientCredentialsGrantMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCredentialsGrantMetadata = this._clientCredentialsGrantMetadata?.internalValue;
        }
        if (this._iamConnectionMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamConnectionMetadata = this._iamConnectionMetadata?.internalValue;
        }
        if (this._noneConnectionMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noneConnectionMetadata = this._noneConnectionMetadata?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticationMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyConnectionMetadata.internalValue = undefined;
            this._authorizationCodeGrantMetadata.internalValue = undefined;
            this._basicAuthConnectionMetadata.internalValue = undefined;
            this._clientCredentialsGrantMetadata.internalValue = undefined;
            this._iamConnectionMetadata.internalValue = undefined;
            this._noneConnectionMetadata.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKeyConnectionMetadata.internalValue = value.apiKeyConnectionMetadata;
            this._authorizationCodeGrantMetadata.internalValue = value.authorizationCodeGrantMetadata;
            this._basicAuthConnectionMetadata.internalValue = value.basicAuthConnectionMetadata;
            this._clientCredentialsGrantMetadata.internalValue = value.clientCredentialsGrantMetadata;
            this._iamConnectionMetadata.internalValue = value.iamConnectionMetadata;
            this._noneConnectionMetadata.internalValue = value.noneConnectionMetadata;
        }
    }

    // api_key_connection_metadata - computed: true, optional: true, required: false
    private _apiKeyConnectionMetadata = new APIKeyConnectionMetadataPropertyOutputReference(this, "api_key_connection_metadata");
    public get apiKeyConnectionMetadata() {
        return this._apiKeyConnectionMetadata;
    }
    public putApiKeyConnectionMetadata(value: APIKeyConnectionMetadataProperty) {
        this._apiKeyConnectionMetadata.internalValue = value;
    }
    public resetApiKeyConnectionMetadata() {
        this._apiKeyConnectionMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyConnectionMetadataInput() {
        return this._apiKeyConnectionMetadata.internalValue;
    }

    // authorization_code_grant_metadata - computed: true, optional: true, required: false
    private _authorizationCodeGrantMetadata = new AuthorizationCodeGrantMetadataPropertyOutputReference(this, "authorization_code_grant_metadata");
    public get authorizationCodeGrantMetadata() {
        return this._authorizationCodeGrantMetadata;
    }
    public putAuthorizationCodeGrantMetadata(value: AuthorizationCodeGrantMetadataProperty) {
        this._authorizationCodeGrantMetadata.internalValue = value;
    }
    public resetAuthorizationCodeGrantMetadata() {
        this._authorizationCodeGrantMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeGrantMetadataInput() {
        return this._authorizationCodeGrantMetadata.internalValue;
    }

    // basic_auth_connection_metadata - computed: true, optional: true, required: false
    private _basicAuthConnectionMetadata = new BasicAuthConnectionMetadataPropertyOutputReference(this, "basic_auth_connection_metadata");
    public get basicAuthConnectionMetadata() {
        return this._basicAuthConnectionMetadata;
    }
    public putBasicAuthConnectionMetadata(value: BasicAuthConnectionMetadataProperty) {
        this._basicAuthConnectionMetadata.internalValue = value;
    }
    public resetBasicAuthConnectionMetadata() {
        this._basicAuthConnectionMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthConnectionMetadataInput() {
        return this._basicAuthConnectionMetadata.internalValue;
    }

    // client_credentials_grant_metadata - computed: true, optional: true, required: false
    private _clientCredentialsGrantMetadata = new ClientCredentialsGrantMetadataPropertyOutputReference(this, "client_credentials_grant_metadata");
    public get clientCredentialsGrantMetadata() {
        return this._clientCredentialsGrantMetadata;
    }
    public putClientCredentialsGrantMetadata(value: ClientCredentialsGrantMetadataProperty) {
        this._clientCredentialsGrantMetadata.internalValue = value;
    }
    public resetClientCredentialsGrantMetadata() {
        this._clientCredentialsGrantMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCredentialsGrantMetadataInput() {
        return this._clientCredentialsGrantMetadata.internalValue;
    }

    // iam_connection_metadata - computed: true, optional: true, required: false
    private _iamConnectionMetadata = new IAMConnectionMetadataPropertyOutputReference(this, "iam_connection_metadata");
    public get iamConnectionMetadata() {
        return this._iamConnectionMetadata;
    }
    public putIamConnectionMetadata(value: IAMConnectionMetadataProperty) {
        this._iamConnectionMetadata.internalValue = value;
    }
    public resetIamConnectionMetadata() {
        this._iamConnectionMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamConnectionMetadataInput() {
        return this._iamConnectionMetadata.internalValue;
    }

    // none_connection_metadata - computed: true, optional: true, required: false
    private _noneConnectionMetadata = new NoneConnectionMetadataPropertyOutputReference(this, "none_connection_metadata");
    public get noneConnectionMetadata() {
        return this._noneConnectionMetadata;
    }
    public putNoneConnectionMetadata(value: NoneConnectionMetadataProperty) {
        this._noneConnectionMetadata.internalValue = value;
    }
    public resetNoneConnectionMetadata() {
        this._noneConnectionMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noneConnectionMetadataInput() {
        return this._noneConnectionMetadata.internalValue;
    }
}
export interface AuthConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_metadata CcActionConnector#authentication_metadata}
    */
    readonly authenticationMetadata: AuthenticationMetadataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#authentication_type CcActionConnector#authentication_type}
    */
    readonly authenticationType: string;
}
export class AuthConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationMetadata = this._authenticationMetadata?.internalValue;
        }
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationMetadata.internalValue = undefined;
            this._authenticationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationMetadata.internalValue = value.authenticationMetadata;
            this._authenticationType = value.authenticationType;
        }
    }

    // authentication_metadata - computed: false, optional: false, required: true
    private _authenticationMetadata = new AuthenticationMetadataPropertyOutputReference(this, "authentication_metadata");
    public get authenticationMetadata() {
        return this._authenticationMetadata;
    }
    public putAuthenticationMetadata(value: AuthenticationMetadataProperty) {
        this._authenticationMetadata.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationMetadataInput() {
        return this._authenticationMetadata.internalValue;
    }

    // authentication_type - computed: false, optional: false, required: true
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }
}
export interface ResourcePermissionProperty {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#actions CcActionConnector#actions}
    */
    readonly actions?: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
    *             following:</p>
    *          <ul>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
    *             </li>
    *             <li>
    *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
    *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
    *                     (This is less common.) </p>
    *             </li>
    *          </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#principal CcActionConnector#principal}
    */
    readonly principal?: string;
}
export class ResourcePermissionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourcePermissionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._principal !== undefined) {
            hasAnyValues = true;
            internalValueResult.principal = this._principal;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._principal = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._principal = value.principal;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // principal - computed: true, optional: true, required: false
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    public resetPrincipal() {
        this._principal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }
}

export class ResourcePermissionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourcePermissionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcePermissionPropertyOutputReference {
        return new ResourcePermissionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#key CcActionConnector#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_action_connector#value CcActionConnector#value}
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
