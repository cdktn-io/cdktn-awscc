// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#auth_parameters CcConnection#auth_parameters}
    */
    readonly authParameters?: CcConnection.AuthParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#authorization_type CcConnection#authorization_type}
    */
    readonly authorizationType?: string;
    /**
    * Description of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#description CcConnection#description}
    */
    readonly description?: string;
    /**
    * The private resource the HTTP request will be sent to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#invocation_connectivity_parameters CcConnection#invocation_connectivity_parameters}
    */
    readonly invocationConnectivityParameters?: CcConnection.InvocationConnectivityParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#kms_key_identifier CcConnection#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Name of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#name CcConnection#name}
    */
    readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection awscc_events_connection}
*/
export class CcConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_events_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnection to import
    * @param importFromId The id of the existing CcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection awscc_events_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcConnectionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_events_connection',
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
        this._authParameters.internalValue = config.authParameters;
        this._authorizationType = config.authorizationType;
        this._description = config.description;
        this._invocationConnectivityParameters.internalValue = config.invocationConnectivityParameters;
        this._kmsKeyIdentifier = config.kmsKeyIdentifier;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // arn_for_policy - computed: true, optional: false, required: false
    public get arnForPolicy() {
        return this.getStringAttribute('arn_for_policy');
    }

    // auth_parameters - computed: true, optional: true, required: false
    private _authParameters = new CcConnection.AuthParametersPropertyOutputReference(this, "auth_parameters");
    public get authParameters() {
        return this._authParameters;
    }
    public putAuthParameters(value: CcConnection.AuthParametersProperty) {
        this._authParameters.internalValue = value;
    }
    public resetAuthParameters() {
        this._authParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authParametersInput() {
        return this._authParameters.internalValue;
    }

    // authorization_type - computed: true, optional: true, required: false
    private _authorizationType?: string; 
    public get authorizationType() {
        return this.getStringAttribute('authorization_type');
    }
    public set authorizationType(value: string) {
        this._authorizationType = value;
    }
    public resetAuthorizationType() {
        this._authorizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationTypeInput() {
        return this._authorizationType;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invocation_connectivity_parameters - computed: true, optional: true, required: false
    private _invocationConnectivityParameters = new CcConnection.InvocationConnectivityParametersPropertyOutputReference(this, "invocation_connectivity_parameters");
    public get invocationConnectivityParameters() {
        return this._invocationConnectivityParameters;
    }
    public putInvocationConnectivityParameters(value: CcConnection.InvocationConnectivityParametersProperty) {
        this._invocationConnectivityParameters.internalValue = value;
    }
    public resetInvocationConnectivityParameters() {
        this._invocationConnectivityParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationConnectivityParametersInput() {
        return this._invocationConnectivityParameters.internalValue;
    }

    // kms_key_identifier - computed: true, optional: true, required: false
    private _kmsKeyIdentifier?: string; 
    public get kmsKeyIdentifier() {
        return this.getStringAttribute('kms_key_identifier');
    }
    public set kmsKeyIdentifier(value: string) {
        this._kmsKeyIdentifier = value;
    }
    public resetKmsKeyIdentifier() {
        this._kmsKeyIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdentifierInput() {
        return this._kmsKeyIdentifier;
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auth_parameters: ccConnectionAuthParametersPropertyToTerraform(this._authParameters.internalValue),
            authorization_type: cdktn.stringToTerraform(this._authorizationType),
            description: cdktn.stringToTerraform(this._description),
            invocation_connectivity_parameters: ccConnectionInvocationConnectivityParametersPropertyToTerraform(this._invocationConnectivityParameters.internalValue),
            kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auth_parameters: {
                value: ccConnectionAuthParametersPropertyToHclTerraform(this._authParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnection.AuthParametersProperty",
            },
            authorization_type: {
                value: cdktn.stringToHclTerraform(this._authorizationType),
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
            invocation_connectivity_parameters: {
                value: ccConnectionInvocationConnectivityParametersPropertyToHclTerraform(this._invocationConnectivityParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnection.InvocationConnectivityParametersProperty",
            },
            kms_key_identifier: {
                value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectionApiKeyAuthParametersPropertyToTerraform(struct?: CcConnection.ApiKeyAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_name: cdktn.stringToTerraform(struct!.apiKeyName),
        api_key_value: cdktn.stringToTerraform(struct!.apiKeyValue),
    }
}


export function ccConnectionApiKeyAuthParametersPropertyToHclTerraform(struct?: CcConnection.ApiKeyAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_name: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        api_key_value: {
            value: cdktn.stringToHclTerraform(struct!.apiKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionBasicAuthParametersPropertyToTerraform(struct?: CcConnection.BasicAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectionBasicAuthParametersPropertyToHclTerraform(struct?: CcConnection.BasicAuthParametersProperty | cdktn.IResolvable): any {
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


export function ccConnectionResourceParametersPropertyToTerraform(struct?: CcConnection.ResourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_arn: cdktn.stringToTerraform(struct!.resourceConfigurationArn),
    }
}


export function ccConnectionResourceParametersPropertyToHclTerraform(struct?: CcConnection.ResourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionConnectivityParametersPropertyToTerraform(struct?: CcConnection.ConnectivityParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_parameters: ccConnectionResourceParametersPropertyToTerraform(struct!.resourceParameters),
    }
}


export function ccConnectionConnectivityParametersPropertyToHclTerraform(struct?: CcConnection.ConnectivityParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_parameters: {
            value: ccConnectionResourceParametersPropertyToHclTerraform(struct!.resourceParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionParameterPropertyToTerraform(struct?: CcConnection.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionParameterPropertyToHclTerraform(struct?: CcConnection.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_value_secret: {
            value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccConnectionAuthParametersInvocationHttpParametersHeaderParametersPropertyToTerraform(struct?: CcConnection.AuthParametersInvocationHttpParametersHeaderParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionAuthParametersInvocationHttpParametersHeaderParametersPropertyToHclTerraform(struct?: CcConnection.AuthParametersInvocationHttpParametersHeaderParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_value_secret: {
            value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccConnectionAuthParametersInvocationHttpParametersQueryStringParametersPropertyToTerraform(struct?: CcConnection.AuthParametersInvocationHttpParametersQueryStringParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionAuthParametersInvocationHttpParametersQueryStringParametersPropertyToHclTerraform(struct?: CcConnection.AuthParametersInvocationHttpParametersQueryStringParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_value_secret: {
            value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccConnectionConnectionHttpParametersPropertyToTerraform(struct?: CcConnection.ConnectionHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        body_parameters: cdktn.listMapper(ccConnectionParameterPropertyToTerraform, false)(struct!.bodyParameters),
        header_parameters: cdktn.listMapper(ccConnectionAuthParametersInvocationHttpParametersHeaderParametersPropertyToTerraform, false)(struct!.headerParameters),
        query_string_parameters: cdktn.listMapper(ccConnectionAuthParametersInvocationHttpParametersQueryStringParametersPropertyToTerraform, false)(struct!.queryStringParameters),
    }
}


export function ccConnectionConnectionHttpParametersPropertyToHclTerraform(struct?: CcConnection.ConnectionHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        body_parameters: {
            value: cdktn.listMapperHcl(ccConnectionParameterPropertyToHclTerraform, false)(struct!.bodyParameters),
            isBlock: true,
            type: "list",
            storageClassType: "ParameterPropertyList",
        },
        header_parameters: {
            value: cdktn.listMapperHcl(ccConnectionAuthParametersInvocationHttpParametersHeaderParametersPropertyToHclTerraform, false)(struct!.headerParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AuthParametersInvocationHttpParametersHeaderParametersPropertyList",
        },
        query_string_parameters: {
            value: cdktn.listMapperHcl(ccConnectionAuthParametersInvocationHttpParametersQueryStringParametersPropertyToHclTerraform, false)(struct!.queryStringParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AuthParametersInvocationHttpParametersQueryStringParametersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionClientParametersPropertyToTerraform(struct?: CcConnection.ClientParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: cdktn.stringToTerraform(struct!.clientId),
        client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    }
}


export function ccConnectionClientParametersPropertyToHclTerraform(struct?: CcConnection.ClientParametersProperty | cdktn.IResolvable): any {
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


export function ccConnectionBodyParametersPropertyToTerraform(struct?: CcConnection.BodyParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionBodyParametersPropertyToHclTerraform(struct?: CcConnection.BodyParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_value_secret: {
            value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyToTerraform(struct?: CcConnection.AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyToHclTerraform(struct?: CcConnection.AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_value_secret: {
            value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyToTerraform(struct?: CcConnection.AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyToHclTerraform(struct?: CcConnection.AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_value_secret: {
            value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccConnectionOAuthHttpParametersPropertyToTerraform(struct?: CcConnection.OAuthHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        body_parameters: cdktn.listMapper(ccConnectionBodyParametersPropertyToTerraform, false)(struct!.bodyParameters),
        header_parameters: cdktn.listMapper(ccConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyToTerraform, false)(struct!.headerParameters),
        query_string_parameters: cdktn.listMapper(ccConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyToTerraform, false)(struct!.queryStringParameters),
    }
}


export function ccConnectionOAuthHttpParametersPropertyToHclTerraform(struct?: CcConnection.OAuthHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        body_parameters: {
            value: cdktn.listMapperHcl(ccConnectionBodyParametersPropertyToHclTerraform, false)(struct!.bodyParameters),
            isBlock: true,
            type: "list",
            storageClassType: "BodyParametersPropertyList",
        },
        header_parameters: {
            value: cdktn.listMapperHcl(ccConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyToHclTerraform, false)(struct!.headerParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyList",
        },
        query_string_parameters: {
            value: cdktn.listMapperHcl(ccConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyToHclTerraform, false)(struct!.queryStringParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionOAuthParametersPropertyToTerraform(struct?: CcConnection.OAuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
        client_parameters: ccConnectionClientParametersPropertyToTerraform(struct!.clientParameters),
        http_method: cdktn.stringToTerraform(struct!.httpMethod),
        o_auth_http_parameters: ccConnectionOAuthHttpParametersPropertyToTerraform(struct!.oAuthHttpParameters),
    }
}


export function ccConnectionOAuthParametersPropertyToHclTerraform(struct?: CcConnection.OAuthParametersProperty | cdktn.IResolvable): any {
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
        client_parameters: {
            value: ccConnectionClientParametersPropertyToHclTerraform(struct!.clientParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ClientParametersProperty",
        },
        http_method: {
            value: cdktn.stringToHclTerraform(struct!.httpMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_http_parameters: {
            value: ccConnectionOAuthHttpParametersPropertyToHclTerraform(struct!.oAuthHttpParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuthHttpParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionAuthParametersPropertyToTerraform(struct?: CcConnection.AuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        api_key_auth_parameters: ccConnectionApiKeyAuthParametersPropertyToTerraform(struct!.apiKeyAuthParameters),
        basic_auth_parameters: ccConnectionBasicAuthParametersPropertyToTerraform(struct!.basicAuthParameters),
        connectivity_parameters: ccConnectionConnectivityParametersPropertyToTerraform(struct!.connectivityParameters),
        invocation_http_parameters: ccConnectionConnectionHttpParametersPropertyToTerraform(struct!.invocationHttpParameters),
        o_auth_parameters: ccConnectionOAuthParametersPropertyToTerraform(struct!.oAuthParameters),
    }
}


export function ccConnectionAuthParametersPropertyToHclTerraform(struct?: CcConnection.AuthParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        api_key_auth_parameters: {
            value: ccConnectionApiKeyAuthParametersPropertyToHclTerraform(struct!.apiKeyAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ApiKeyAuthParametersProperty",
        },
        basic_auth_parameters: {
            value: ccConnectionBasicAuthParametersPropertyToHclTerraform(struct!.basicAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "BasicAuthParametersProperty",
        },
        connectivity_parameters: {
            value: ccConnectionConnectivityParametersPropertyToHclTerraform(struct!.connectivityParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectivityParametersProperty",
        },
        invocation_http_parameters: {
            value: ccConnectionConnectionHttpParametersPropertyToHclTerraform(struct!.invocationHttpParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectionHttpParametersProperty",
        },
        o_auth_parameters: {
            value: ccConnectionOAuthParametersPropertyToHclTerraform(struct!.oAuthParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuthParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionInvocationConnectivityParametersResourceParametersPropertyToTerraform(struct?: CcConnection.InvocationConnectivityParametersResourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_configuration_arn: cdktn.stringToTerraform(struct!.resourceConfigurationArn),
    }
}


export function ccConnectionInvocationConnectivityParametersResourceParametersPropertyToHclTerraform(struct?: CcConnection.InvocationConnectivityParametersResourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionInvocationConnectivityParametersPropertyToTerraform(struct?: CcConnection.InvocationConnectivityParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_parameters: ccConnectionInvocationConnectivityParametersResourceParametersPropertyToTerraform(struct!.resourceParameters),
    }
}


export function ccConnectionInvocationConnectivityParametersPropertyToHclTerraform(struct?: CcConnection.InvocationConnectivityParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_parameters: {
            value: ccConnectionInvocationConnectivityParametersResourceParametersPropertyToHclTerraform(struct!.resourceParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "InvocationConnectivityParametersResourceParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnection {
export interface ApiKeyAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#api_key_name CcConnection#api_key_name}
    */
    readonly apiKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#api_key_value CcConnection#api_key_value}
    */
    readonly apiKeyValue?: string;
}
export class ApiKeyAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiKeyAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyName = this._apiKeyName;
        }
        if (this._apiKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyValue = this._apiKeyValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiKeyAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyName = undefined;
            this._apiKeyValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKeyName = value.apiKeyName;
            this._apiKeyValue = value.apiKeyValue;
        }
    }

    // api_key_name - computed: true, optional: true, required: false
    private _apiKeyName?: string; 
    public get apiKeyName() {
        return this.getStringAttribute('api_key_name');
    }
    public set apiKeyName(value: string) {
        this._apiKeyName = value;
    }
    public resetApiKeyName() {
        this._apiKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyNameInput() {
        return this._apiKeyName;
    }

    // api_key_value - computed: true, optional: true, required: false
    private _apiKeyValue?: string; 
    public get apiKeyValue() {
        return this.getStringAttribute('api_key_value');
    }
    public set apiKeyValue(value: string) {
        this._apiKeyValue = value;
    }
    public resetApiKeyValue() {
        this._apiKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyValueInput() {
        return this._apiKeyValue;
    }
}
export interface BasicAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#password CcConnection#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#username CcConnection#username}
    */
    readonly username?: string;
}
export class BasicAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BasicAuthParametersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BasicAuthParametersProperty | cdktn.IResolvable | undefined) {
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
export interface ResourceParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#resource_configuration_arn CcConnection#resource_configuration_arn}
    */
    readonly resourceConfigurationArn?: string;
}
export class ResourceParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationArn = value.resourceConfigurationArn;
        }
    }

    // resource_association_arn - computed: true, optional: false, required: false
    public get resourceAssociationArn() {
        return this.getStringAttribute('resource_association_arn');
    }

    // resource_configuration_arn - computed: true, optional: true, required: false
    private _resourceConfigurationArn?: string; 
    public get resourceConfigurationArn() {
        return this.getStringAttribute('resource_configuration_arn');
    }
    public set resourceConfigurationArn(value: string) {
        this._resourceConfigurationArn = value;
    }
    public resetResourceConfigurationArn() {
        this._resourceConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationArnInput() {
        return this._resourceConfigurationArn;
    }
}
export interface ConnectivityParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#resource_parameters CcConnection#resource_parameters}
    */
    readonly resourceParameters?: ResourceParametersProperty;
}
export class ConnectivityParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectivityParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceParameters = this._resourceParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectivityParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceParameters.internalValue = value.resourceParameters;
        }
    }

    // resource_parameters - computed: true, optional: true, required: false
    private _resourceParameters = new ResourceParametersPropertyOutputReference(this, "resource_parameters");
    public get resourceParameters() {
        return this._resourceParameters;
    }
    public putResourceParameters(value: ResourceParametersProperty) {
        this._resourceParameters.internalValue = value;
    }
    public resetResourceParameters() {
        this._resourceParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceParametersInput() {
        return this._resourceParameters.internalValue;
    }
}
export interface ParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#is_value_secret CcConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#value CcConnection#value}
    */
    readonly value?: string;
}
export class ParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isValueSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.isValueSecret = this._isValueSecret;
        }
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

    public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isValueSecret = undefined;
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
            this._isValueSecret = value.isValueSecret;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // is_value_secret - computed: true, optional: true, required: false
    private _isValueSecret?: boolean | cdktn.IResolvable; 
    public get isValueSecret() {
        return this.getBooleanAttribute('is_value_secret');
    }
    public set isValueSecret(value: boolean | cdktn.IResolvable) {
        this._isValueSecret = value;
    }
    public resetIsValueSecret() {
        this._isValueSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isValueSecretInput() {
        return this._isValueSecret;
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

export class ParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ParameterPropertyOutputReference {
        return new ParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AuthParametersInvocationHttpParametersHeaderParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#is_value_secret CcConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#value CcConnection#value}
    */
    readonly value?: string;
}
export class AuthParametersInvocationHttpParametersHeaderParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthParametersInvocationHttpParametersHeaderParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isValueSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.isValueSecret = this._isValueSecret;
        }
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

    public set internalValue(value: AuthParametersInvocationHttpParametersHeaderParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isValueSecret = undefined;
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
            this._isValueSecret = value.isValueSecret;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // is_value_secret - computed: true, optional: true, required: false
    private _isValueSecret?: boolean | cdktn.IResolvable; 
    public get isValueSecret() {
        return this.getBooleanAttribute('is_value_secret');
    }
    public set isValueSecret(value: boolean | cdktn.IResolvable) {
        this._isValueSecret = value;
    }
    public resetIsValueSecret() {
        this._isValueSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isValueSecretInput() {
        return this._isValueSecret;
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

export class AuthParametersInvocationHttpParametersHeaderParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : AuthParametersInvocationHttpParametersHeaderParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthParametersInvocationHttpParametersHeaderParametersPropertyOutputReference {
        return new AuthParametersInvocationHttpParametersHeaderParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AuthParametersInvocationHttpParametersQueryStringParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#is_value_secret CcConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#value CcConnection#value}
    */
    readonly value?: string;
}
export class AuthParametersInvocationHttpParametersQueryStringParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthParametersInvocationHttpParametersQueryStringParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isValueSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.isValueSecret = this._isValueSecret;
        }
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

    public set internalValue(value: AuthParametersInvocationHttpParametersQueryStringParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isValueSecret = undefined;
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
            this._isValueSecret = value.isValueSecret;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // is_value_secret - computed: true, optional: true, required: false
    private _isValueSecret?: boolean | cdktn.IResolvable; 
    public get isValueSecret() {
        return this.getBooleanAttribute('is_value_secret');
    }
    public set isValueSecret(value: boolean | cdktn.IResolvable) {
        this._isValueSecret = value;
    }
    public resetIsValueSecret() {
        this._isValueSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isValueSecretInput() {
        return this._isValueSecret;
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

export class AuthParametersInvocationHttpParametersQueryStringParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : AuthParametersInvocationHttpParametersQueryStringParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthParametersInvocationHttpParametersQueryStringParametersPropertyOutputReference {
        return new AuthParametersInvocationHttpParametersQueryStringParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConnectionHttpParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#body_parameters CcConnection#body_parameters}
    */
    readonly bodyParameters?: ParameterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#header_parameters CcConnection#header_parameters}
    */
    readonly headerParameters?: AuthParametersInvocationHttpParametersHeaderParametersProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#query_string_parameters CcConnection#query_string_parameters}
    */
    readonly queryStringParameters?: AuthParametersInvocationHttpParametersQueryStringParametersProperty[] | cdktn.IResolvable;
}
export class ConnectionHttpParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionHttpParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bodyParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bodyParameters = this._bodyParameters?.internalValue;
        }
        if (this._headerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerParameters = this._headerParameters?.internalValue;
        }
        if (this._queryStringParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringParameters = this._queryStringParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionHttpParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bodyParameters.internalValue = undefined;
            this._headerParameters.internalValue = undefined;
            this._queryStringParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bodyParameters.internalValue = value.bodyParameters;
            this._headerParameters.internalValue = value.headerParameters;
            this._queryStringParameters.internalValue = value.queryStringParameters;
        }
    }

    // body_parameters - computed: true, optional: true, required: false
    private _bodyParameters = new ParameterPropertyList(this, "body_parameters", false);
    public get bodyParameters() {
        return this._bodyParameters;
    }
    public putBodyParameters(value: ParameterProperty[] | cdktn.IResolvable) {
        this._bodyParameters.internalValue = value;
    }
    public resetBodyParameters() {
        this._bodyParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyParametersInput() {
        return this._bodyParameters.internalValue;
    }

    // header_parameters - computed: true, optional: true, required: false
    private _headerParameters = new AuthParametersInvocationHttpParametersHeaderParametersPropertyList(this, "header_parameters", false);
    public get headerParameters() {
        return this._headerParameters;
    }
    public putHeaderParameters(value: AuthParametersInvocationHttpParametersHeaderParametersProperty[] | cdktn.IResolvable) {
        this._headerParameters.internalValue = value;
    }
    public resetHeaderParameters() {
        this._headerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerParametersInput() {
        return this._headerParameters.internalValue;
    }

    // query_string_parameters - computed: true, optional: true, required: false
    private _queryStringParameters = new AuthParametersInvocationHttpParametersQueryStringParametersPropertyList(this, "query_string_parameters", false);
    public get queryStringParameters() {
        return this._queryStringParameters;
    }
    public putQueryStringParameters(value: AuthParametersInvocationHttpParametersQueryStringParametersProperty[] | cdktn.IResolvable) {
        this._queryStringParameters.internalValue = value;
    }
    public resetQueryStringParameters() {
        this._queryStringParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringParametersInput() {
        return this._queryStringParameters.internalValue;
    }
}
export interface ClientParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#client_id CcConnection#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#client_secret CcConnection#client_secret}
    */
    readonly clientSecret?: string;
}
export class ClientParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientParametersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ClientParametersProperty | cdktn.IResolvable | undefined) {
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
export interface BodyParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#is_value_secret CcConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#value CcConnection#value}
    */
    readonly value?: string;
}
export class BodyParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BodyParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isValueSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.isValueSecret = this._isValueSecret;
        }
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

    public set internalValue(value: BodyParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isValueSecret = undefined;
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
            this._isValueSecret = value.isValueSecret;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // is_value_secret - computed: true, optional: true, required: false
    private _isValueSecret?: boolean | cdktn.IResolvable; 
    public get isValueSecret() {
        return this.getBooleanAttribute('is_value_secret');
    }
    public set isValueSecret(value: boolean | cdktn.IResolvable) {
        this._isValueSecret = value;
    }
    public resetIsValueSecret() {
        this._isValueSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isValueSecretInput() {
        return this._isValueSecret;
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

export class BodyParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : BodyParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): BodyParametersPropertyOutputReference {
        return new BodyParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#is_value_secret CcConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#value CcConnection#value}
    */
    readonly value?: string;
}
export class AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isValueSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.isValueSecret = this._isValueSecret;
        }
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

    public set internalValue(value: AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isValueSecret = undefined;
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
            this._isValueSecret = value.isValueSecret;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // is_value_secret - computed: true, optional: true, required: false
    private _isValueSecret?: boolean | cdktn.IResolvable; 
    public get isValueSecret() {
        return this.getBooleanAttribute('is_value_secret');
    }
    public set isValueSecret(value: boolean | cdktn.IResolvable) {
        this._isValueSecret = value;
    }
    public resetIsValueSecret() {
        this._isValueSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isValueSecretInput() {
        return this._isValueSecret;
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

export class AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyOutputReference {
        return new AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#is_value_secret CcConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#key CcConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#value CcConnection#value}
    */
    readonly value?: string;
}
export class AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isValueSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.isValueSecret = this._isValueSecret;
        }
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

    public set internalValue(value: AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isValueSecret = undefined;
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
            this._isValueSecret = value.isValueSecret;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // is_value_secret - computed: true, optional: true, required: false
    private _isValueSecret?: boolean | cdktn.IResolvable; 
    public get isValueSecret() {
        return this.getBooleanAttribute('is_value_secret');
    }
    public set isValueSecret(value: boolean | cdktn.IResolvable) {
        this._isValueSecret = value;
    }
    public resetIsValueSecret() {
        this._isValueSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isValueSecretInput() {
        return this._isValueSecret;
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

export class AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyOutputReference {
        return new AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OAuthHttpParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#body_parameters CcConnection#body_parameters}
    */
    readonly bodyParameters?: BodyParametersProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#header_parameters CcConnection#header_parameters}
    */
    readonly headerParameters?: AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#query_string_parameters CcConnection#query_string_parameters}
    */
    readonly queryStringParameters?: AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty[] | cdktn.IResolvable;
}
export class OAuthHttpParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuthHttpParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bodyParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bodyParameters = this._bodyParameters?.internalValue;
        }
        if (this._headerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerParameters = this._headerParameters?.internalValue;
        }
        if (this._queryStringParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringParameters = this._queryStringParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuthHttpParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bodyParameters.internalValue = undefined;
            this._headerParameters.internalValue = undefined;
            this._queryStringParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bodyParameters.internalValue = value.bodyParameters;
            this._headerParameters.internalValue = value.headerParameters;
            this._queryStringParameters.internalValue = value.queryStringParameters;
        }
    }

    // body_parameters - computed: true, optional: true, required: false
    private _bodyParameters = new BodyParametersPropertyList(this, "body_parameters", false);
    public get bodyParameters() {
        return this._bodyParameters;
    }
    public putBodyParameters(value: BodyParametersProperty[] | cdktn.IResolvable) {
        this._bodyParameters.internalValue = value;
    }
    public resetBodyParameters() {
        this._bodyParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyParametersInput() {
        return this._bodyParameters.internalValue;
    }

    // header_parameters - computed: true, optional: true, required: false
    private _headerParameters = new AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersPropertyList(this, "header_parameters", false);
    public get headerParameters() {
        return this._headerParameters;
    }
    public putHeaderParameters(value: AuthParametersOAuthParametersOAuthHttpParametersHeaderParametersProperty[] | cdktn.IResolvable) {
        this._headerParameters.internalValue = value;
    }
    public resetHeaderParameters() {
        this._headerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerParametersInput() {
        return this._headerParameters.internalValue;
    }

    // query_string_parameters - computed: true, optional: true, required: false
    private _queryStringParameters = new AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersPropertyList(this, "query_string_parameters", false);
    public get queryStringParameters() {
        return this._queryStringParameters;
    }
    public putQueryStringParameters(value: AuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersProperty[] | cdktn.IResolvable) {
        this._queryStringParameters.internalValue = value;
    }
    public resetQueryStringParameters() {
        this._queryStringParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringParametersInput() {
        return this._queryStringParameters.internalValue;
    }
}
export interface OAuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#authorization_endpoint CcConnection#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#client_parameters CcConnection#client_parameters}
    */
    readonly clientParameters?: ClientParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#http_method CcConnection#http_method}
    */
    readonly httpMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#o_auth_http_parameters CcConnection#o_auth_http_parameters}
    */
    readonly oAuthHttpParameters?: OAuthHttpParametersProperty;
}
export class OAuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientParameters = this._clientParameters?.internalValue;
        }
        if (this._httpMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpMethod = this._httpMethod;
        }
        if (this._oAuthHttpParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthHttpParameters = this._oAuthHttpParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = undefined;
            this._clientParameters.internalValue = undefined;
            this._httpMethod = undefined;
            this._oAuthHttpParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientParameters.internalValue = value.clientParameters;
            this._httpMethod = value.httpMethod;
            this._oAuthHttpParameters.internalValue = value.oAuthHttpParameters;
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

    // client_parameters - computed: true, optional: true, required: false
    private _clientParameters = new ClientParametersPropertyOutputReference(this, "client_parameters");
    public get clientParameters() {
        return this._clientParameters;
    }
    public putClientParameters(value: ClientParametersProperty) {
        this._clientParameters.internalValue = value;
    }
    public resetClientParameters() {
        this._clientParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientParametersInput() {
        return this._clientParameters.internalValue;
    }

    // http_method - computed: true, optional: true, required: false
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    public resetHttpMethod() {
        this._httpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
    }

    // o_auth_http_parameters - computed: true, optional: true, required: false
    private _oAuthHttpParameters = new OAuthHttpParametersPropertyOutputReference(this, "o_auth_http_parameters");
    public get oAuthHttpParameters() {
        return this._oAuthHttpParameters;
    }
    public putOAuthHttpParameters(value: OAuthHttpParametersProperty) {
        this._oAuthHttpParameters.internalValue = value;
    }
    public resetOAuthHttpParameters() {
        this._oAuthHttpParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthHttpParametersInput() {
        return this._oAuthHttpParameters.internalValue;
    }
}
export interface AuthParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#api_key_auth_parameters CcConnection#api_key_auth_parameters}
    */
    readonly apiKeyAuthParameters?: ApiKeyAuthParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#basic_auth_parameters CcConnection#basic_auth_parameters}
    */
    readonly basicAuthParameters?: BasicAuthParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#connectivity_parameters CcConnection#connectivity_parameters}
    */
    readonly connectivityParameters?: ConnectivityParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#invocation_http_parameters CcConnection#invocation_http_parameters}
    */
    readonly invocationHttpParameters?: ConnectionHttpParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#o_auth_parameters CcConnection#o_auth_parameters}
    */
    readonly oAuthParameters?: OAuthParametersProperty;
}
export class AuthParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._apiKeyAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.apiKeyAuthParameters = this._apiKeyAuthParameters?.internalValue;
        }
        if (this._basicAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuthParameters = this._basicAuthParameters?.internalValue;
        }
        if (this._connectivityParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectivityParameters = this._connectivityParameters?.internalValue;
        }
        if (this._invocationHttpParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationHttpParameters = this._invocationHttpParameters?.internalValue;
        }
        if (this._oAuthParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._apiKeyAuthParameters.internalValue = undefined;
            this._basicAuthParameters.internalValue = undefined;
            this._connectivityParameters.internalValue = undefined;
            this._invocationHttpParameters.internalValue = undefined;
            this._oAuthParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._apiKeyAuthParameters.internalValue = value.apiKeyAuthParameters;
            this._basicAuthParameters.internalValue = value.basicAuthParameters;
            this._connectivityParameters.internalValue = value.connectivityParameters;
            this._invocationHttpParameters.internalValue = value.invocationHttpParameters;
            this._oAuthParameters.internalValue = value.oAuthParameters;
        }
    }

    // api_key_auth_parameters - computed: true, optional: true, required: false
    private _apiKeyAuthParameters = new ApiKeyAuthParametersPropertyOutputReference(this, "api_key_auth_parameters");
    public get apiKeyAuthParameters() {
        return this._apiKeyAuthParameters;
    }
    public putApiKeyAuthParameters(value: ApiKeyAuthParametersProperty) {
        this._apiKeyAuthParameters.internalValue = value;
    }
    public resetApiKeyAuthParameters() {
        this._apiKeyAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyAuthParametersInput() {
        return this._apiKeyAuthParameters.internalValue;
    }

    // basic_auth_parameters - computed: true, optional: true, required: false
    private _basicAuthParameters = new BasicAuthParametersPropertyOutputReference(this, "basic_auth_parameters");
    public get basicAuthParameters() {
        return this._basicAuthParameters;
    }
    public putBasicAuthParameters(value: BasicAuthParametersProperty) {
        this._basicAuthParameters.internalValue = value;
    }
    public resetBasicAuthParameters() {
        this._basicAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthParametersInput() {
        return this._basicAuthParameters.internalValue;
    }

    // connectivity_parameters - computed: true, optional: true, required: false
    private _connectivityParameters = new ConnectivityParametersPropertyOutputReference(this, "connectivity_parameters");
    public get connectivityParameters() {
        return this._connectivityParameters;
    }
    public putConnectivityParameters(value: ConnectivityParametersProperty) {
        this._connectivityParameters.internalValue = value;
    }
    public resetConnectivityParameters() {
        this._connectivityParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectivityParametersInput() {
        return this._connectivityParameters.internalValue;
    }

    // invocation_http_parameters - computed: true, optional: true, required: false
    private _invocationHttpParameters = new ConnectionHttpParametersPropertyOutputReference(this, "invocation_http_parameters");
    public get invocationHttpParameters() {
        return this._invocationHttpParameters;
    }
    public putInvocationHttpParameters(value: ConnectionHttpParametersProperty) {
        this._invocationHttpParameters.internalValue = value;
    }
    public resetInvocationHttpParameters() {
        this._invocationHttpParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationHttpParametersInput() {
        return this._invocationHttpParameters.internalValue;
    }

    // o_auth_parameters - computed: true, optional: true, required: false
    private _oAuthParameters = new OAuthParametersPropertyOutputReference(this, "o_auth_parameters");
    public get oAuthParameters() {
        return this._oAuthParameters;
    }
    public putOAuthParameters(value: OAuthParametersProperty) {
        this._oAuthParameters.internalValue = value;
    }
    public resetOAuthParameters() {
        this._oAuthParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuthParametersInput() {
        return this._oAuthParameters.internalValue;
    }
}
export interface InvocationConnectivityParametersResourceParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#resource_configuration_arn CcConnection#resource_configuration_arn}
    */
    readonly resourceConfigurationArn?: string;
}
export class InvocationConnectivityParametersResourceParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InvocationConnectivityParametersResourceParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvocationConnectivityParametersResourceParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceConfigurationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceConfigurationArn = value.resourceConfigurationArn;
        }
    }

    // resource_association_arn - computed: true, optional: false, required: false
    public get resourceAssociationArn() {
        return this.getStringAttribute('resource_association_arn');
    }

    // resource_configuration_arn - computed: true, optional: true, required: false
    private _resourceConfigurationArn?: string; 
    public get resourceConfigurationArn() {
        return this.getStringAttribute('resource_configuration_arn');
    }
    public set resourceConfigurationArn(value: string) {
        this._resourceConfigurationArn = value;
    }
    public resetResourceConfigurationArn() {
        this._resourceConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceConfigurationArnInput() {
        return this._resourceConfigurationArn;
    }
}
export interface InvocationConnectivityParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/events_connection#resource_parameters CcConnection#resource_parameters}
    */
    readonly resourceParameters?: InvocationConnectivityParametersResourceParametersProperty;
}
export class InvocationConnectivityParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InvocationConnectivityParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceParameters = this._resourceParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InvocationConnectivityParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceParameters.internalValue = value.resourceParameters;
        }
    }

    // resource_parameters - computed: true, optional: true, required: false
    private _resourceParameters = new InvocationConnectivityParametersResourceParametersPropertyOutputReference(this, "resource_parameters");
    public get resourceParameters() {
        return this._resourceParameters;
    }
    public putResourceParameters(value: InvocationConnectivityParametersResourceParametersProperty) {
        this._resourceParameters.internalValue = value;
    }
    public resetResourceParameters() {
        this._resourceParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceParametersInput() {
        return this._resourceParameters.internalValue;
    }
}
}
