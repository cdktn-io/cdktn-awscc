// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the data catalog to create the catalog object in. Currently, this should be the AWS account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#catalog_id CcConnection#catalog_id}
    */
    readonly catalogId: string;
    /**
    * The connection properties used for this connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_input CcConnection#connection_input}
    */
    readonly connectionInput: CcConnection.ConnectionInputProperty;
    /**
    * The collection of tags. Each tag element is associated with a given resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#tags CcConnection#tags}
    */
    readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection awscc_glue_connection}
*/
export class CcConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnection to import
    * @param importFromId The id of the existing CcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection awscc_glue_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_connection',
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
        this._catalogId = config.catalogId;
        this._connectionInput.internalValue = config.connectionInput;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // catalog_id - computed: false, optional: false, required: true
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
    }

    // connection_input - computed: false, optional: false, required: true
    private _connectionInput = new CcConnection.ConnectionInputPropertyOutputReference(this, "connection_input");
    public get connectionInput() {
        return this._connectionInput;
    }
    public putConnectionInput(value: CcConnection.ConnectionInputProperty) {
        this._connectionInput.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionInputInput() {
        return this._connectionInput.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            catalog_id: cdktn.stringToTerraform(this._catalogId),
            connection_input: ccConnectionConnectionInputPropertyToTerraform(this._connectionInput.internalValue),
            tags: cdktn.stringToTerraform(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            catalog_id: {
                value: cdktn.stringToHclTerraform(this._catalogId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connection_input: {
                value: ccConnectionConnectionInputPropertyToHclTerraform(this._connectionInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnection.ConnectionInputProperty",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectionBasicAuthenticationCredentialsPropertyToTerraform(struct?: CcConnection.BasicAuthenticationCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: cdktn.stringToTerraform(struct!.password),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccConnectionBasicAuthenticationCredentialsPropertyToHclTerraform(struct?: CcConnection.BasicAuthenticationCredentialsProperty | cdktn.IResolvable): any {
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


export function ccConnectionAuthorizationCodePropertiesPropertyToTerraform(struct?: CcConnection.AuthorizationCodePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code: cdktn.stringToTerraform(struct!.authorizationCode),
        redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
    }
}


export function ccConnectionAuthorizationCodePropertiesPropertyToHclTerraform(struct?: CcConnection.AuthorizationCodePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code: {
            value: cdktn.stringToHclTerraform(struct!.authorizationCode),
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


export function ccConnectionOAuth2ClientApplicationPropertyToTerraform(struct?: CcConnection.OAuth2ClientApplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_managed_client_application_reference: cdktn.stringToTerraform(struct!.awsManagedClientApplicationReference),
        user_managed_client_application_client_id: cdktn.stringToTerraform(struct!.userManagedClientApplicationClientId),
    }
}


export function ccConnectionOAuth2ClientApplicationPropertyToHclTerraform(struct?: CcConnection.OAuth2ClientApplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_managed_client_application_reference: {
            value: cdktn.stringToHclTerraform(struct!.awsManagedClientApplicationReference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_managed_client_application_client_id: {
            value: cdktn.stringToHclTerraform(struct!.userManagedClientApplicationClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionOAuth2CredentialsPropertyToTerraform(struct?: CcConnection.OAuth2CredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        jwt_token: cdktn.stringToTerraform(struct!.jwtToken),
        refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
        user_managed_client_application_client_secret: cdktn.stringToTerraform(struct!.userManagedClientApplicationClientSecret),
    }
}


export function ccConnectionOAuth2CredentialsPropertyToHclTerraform(struct?: CcConnection.OAuth2CredentialsProperty | cdktn.IResolvable): any {
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
        jwt_token: {
            value: cdktn.stringToHclTerraform(struct!.jwtToken),
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
        user_managed_client_application_client_secret: {
            value: cdktn.stringToHclTerraform(struct!.userManagedClientApplicationClientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionOAuth2PropertiesInputPropertyToTerraform(struct?: CcConnection.OAuth2PropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code_properties: ccConnectionAuthorizationCodePropertiesPropertyToTerraform(struct!.authorizationCodeProperties),
        o_auth_2_client_application: ccConnectionOAuth2ClientApplicationPropertyToTerraform(struct!.oAuth2ClientApplication),
        o_auth_2_credentials: ccConnectionOAuth2CredentialsPropertyToTerraform(struct!.oAuth2Credentials),
        o_auth_2_grant_type: cdktn.stringToTerraform(struct!.oAuth2GrantType),
        token_url: cdktn.stringToTerraform(struct!.tokenUrl),
        token_url_parameters_map: cdktn.stringToTerraform(struct!.tokenUrlParametersMap),
    }
}


export function ccConnectionOAuth2PropertiesInputPropertyToHclTerraform(struct?: CcConnection.OAuth2PropertiesInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code_properties: {
            value: ccConnectionAuthorizationCodePropertiesPropertyToHclTerraform(struct!.authorizationCodeProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodePropertiesProperty",
        },
        o_auth_2_client_application: {
            value: ccConnectionOAuth2ClientApplicationPropertyToHclTerraform(struct!.oAuth2ClientApplication),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2ClientApplicationProperty",
        },
        o_auth_2_credentials: {
            value: ccConnectionOAuth2CredentialsPropertyToHclTerraform(struct!.oAuth2Credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2CredentialsProperty",
        },
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
        token_url_parameters_map: {
            value: cdktn.stringToHclTerraform(struct!.tokenUrlParametersMap),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionAuthenticationConfigurationInputPropertyToTerraform(struct?: CcConnection.AuthenticationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        basic_authentication_credentials: ccConnectionBasicAuthenticationCredentialsPropertyToTerraform(struct!.basicAuthenticationCredentials),
        custom_authentication_credentials: cdktn.stringToTerraform(struct!.customAuthenticationCredentials),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        o_auth_2_properties: ccConnectionOAuth2PropertiesInputPropertyToTerraform(struct!.oAuth2Properties),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccConnectionAuthenticationConfigurationInputPropertyToHclTerraform(struct?: CcConnection.AuthenticationConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_type: {
            value: cdktn.stringToHclTerraform(struct!.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        basic_authentication_credentials: {
            value: ccConnectionBasicAuthenticationCredentialsPropertyToHclTerraform(struct!.basicAuthenticationCredentials),
            isBlock: true,
            type: "struct",
            storageClassType: "BasicAuthenticationCredentialsProperty",
        },
        custom_authentication_credentials: {
            value: cdktn.stringToHclTerraform(struct!.customAuthenticationCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        o_auth_2_properties: {
            value: ccConnectionOAuth2PropertiesInputPropertyToHclTerraform(struct!.oAuth2Properties),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2PropertiesInputProperty",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionPhysicalConnectionRequirementsPropertyToTerraform(struct?: CcConnection.PhysicalConnectionRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        security_group_id_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIdList),
        subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    }
}


export function ccConnectionPhysicalConnectionRequirementsPropertyToHclTerraform(struct?: CcConnection.PhysicalConnectionRequirementsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_group_id_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIdList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_id: {
            value: cdktn.stringToHclTerraform(struct!.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionConnectionInputPropertyToTerraform(struct?: CcConnection.ConnectionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        athena_properties: cdktn.stringToTerraform(struct!.athenaProperties),
        authentication_configuration: ccConnectionAuthenticationConfigurationInputPropertyToTerraform(struct!.authenticationConfiguration),
        connection_properties: cdktn.stringToTerraform(struct!.connectionProperties),
        connection_type: cdktn.stringToTerraform(struct!.connectionType),
        description: cdktn.stringToTerraform(struct!.description),
        match_criteria: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchCriteria),
        name: cdktn.stringToTerraform(struct!.name),
        physical_connection_requirements: ccConnectionPhysicalConnectionRequirementsPropertyToTerraform(struct!.physicalConnectionRequirements),
        python_properties: cdktn.stringToTerraform(struct!.pythonProperties),
        spark_properties: cdktn.stringToTerraform(struct!.sparkProperties),
        validate_credentials: cdktn.booleanToTerraform(struct!.validateCredentials),
        validate_for_compute_environments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.validateForComputeEnvironments),
    }
}


export function ccConnectionConnectionInputPropertyToHclTerraform(struct?: CcConnection.ConnectionInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        athena_properties: {
            value: cdktn.stringToHclTerraform(struct!.athenaProperties),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authentication_configuration: {
            value: ccConnectionAuthenticationConfigurationInputPropertyToHclTerraform(struct!.authenticationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticationConfigurationInputProperty",
        },
        connection_properties: {
            value: cdktn.stringToHclTerraform(struct!.connectionProperties),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connection_type: {
            value: cdktn.stringToHclTerraform(struct!.connectionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match_criteria: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchCriteria),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        physical_connection_requirements: {
            value: ccConnectionPhysicalConnectionRequirementsPropertyToHclTerraform(struct!.physicalConnectionRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "PhysicalConnectionRequirementsProperty",
        },
        python_properties: {
            value: cdktn.stringToHclTerraform(struct!.pythonProperties),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spark_properties: {
            value: cdktn.stringToHclTerraform(struct!.sparkProperties),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validate_credentials: {
            value: cdktn.booleanToHclTerraform(struct!.validateCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        validate_for_compute_environments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.validateForComputeEnvironments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcConnection {
export interface BasicAuthenticationCredentialsProperty {
    /**
    * The password used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#password CcConnection#password}
    */
    readonly password?: string;
    /**
    * The username used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#username CcConnection#username}
    */
    readonly username?: string;
}
export class BasicAuthenticationCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BasicAuthenticationCredentialsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BasicAuthenticationCredentialsProperty | cdktn.IResolvable | undefined) {
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
export interface AuthorizationCodePropertiesProperty {
    /**
    * The authorization code used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code CcConnection#authorization_code}
    */
    readonly authorizationCode?: string;
    /**
    * The redirect URI where the user gets redirected to by authorization server when issuing an authorization code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#redirect_uri CcConnection#redirect_uri}
    */
    readonly redirectUri?: string;
}
export class AuthorizationCodePropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationCodePropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCode = this._authorizationCode;
        }
        if (this._redirectUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCode = undefined;
            this._redirectUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCode = value.authorizationCode;
            this._redirectUri = value.redirectUri;
        }
    }

    // authorization_code - computed: true, optional: true, required: false
    private _authorizationCode?: string; 
    public get authorizationCode() {
        return this.getStringAttribute('authorization_code');
    }
    public set authorizationCode(value: string) {
        this._authorizationCode = value;
    }
    public resetAuthorizationCode() {
        this._authorizationCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeInput() {
        return this._authorizationCode;
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
export interface OAuth2ClientApplicationProperty {
    /**
    * The reference to the SaaS-side client app that is AWS managed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#aws_managed_client_application_reference CcConnection#aws_managed_client_application_reference}
    */
    readonly awsManagedClientApplicationReference?: string;
    /**
    * The client application clientID if the ClientAppType is USER_MANAGED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_id CcConnection#user_managed_client_application_client_id}
    */
    readonly userManagedClientApplicationClientId?: string;
}
export class OAuth2ClientApplicationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuth2ClientApplicationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsManagedClientApplicationReference !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsManagedClientApplicationReference = this._awsManagedClientApplicationReference;
        }
        if (this._userManagedClientApplicationClientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userManagedClientApplicationClientId = this._userManagedClientApplicationClientId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2ClientApplicationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsManagedClientApplicationReference = undefined;
            this._userManagedClientApplicationClientId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsManagedClientApplicationReference = value.awsManagedClientApplicationReference;
            this._userManagedClientApplicationClientId = value.userManagedClientApplicationClientId;
        }
    }

    // aws_managed_client_application_reference - computed: true, optional: true, required: false
    private _awsManagedClientApplicationReference?: string; 
    public get awsManagedClientApplicationReference() {
        return this.getStringAttribute('aws_managed_client_application_reference');
    }
    public set awsManagedClientApplicationReference(value: string) {
        this._awsManagedClientApplicationReference = value;
    }
    public resetAwsManagedClientApplicationReference() {
        this._awsManagedClientApplicationReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsManagedClientApplicationReferenceInput() {
        return this._awsManagedClientApplicationReference;
    }

    // user_managed_client_application_client_id - computed: true, optional: true, required: false
    private _userManagedClientApplicationClientId?: string; 
    public get userManagedClientApplicationClientId() {
        return this.getStringAttribute('user_managed_client_application_client_id');
    }
    public set userManagedClientApplicationClientId(value: string) {
        this._userManagedClientApplicationClientId = value;
    }
    public resetUserManagedClientApplicationClientId() {
        this._userManagedClientApplicationClientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userManagedClientApplicationClientIdInput() {
        return this._userManagedClientApplicationClientId;
    }
}
export interface OAuth2CredentialsProperty {
    /**
    * The access token used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#access_token CcConnection#access_token}
    */
    readonly accessToken?: string;
    /**
    * The JSON Web Token (JWT) used when the authentication type is OAuth2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#jwt_token CcConnection#jwt_token}
    */
    readonly jwtToken?: string;
    /**
    * The refresh token used when the authentication type is OAuth2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#refresh_token CcConnection#refresh_token}
    */
    readonly refreshToken?: string;
    /**
    * The client application client secret if the client application is user managed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_secret CcConnection#user_managed_client_application_client_secret}
    */
    readonly userManagedClientApplicationClientSecret?: string;
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
        if (this._jwtToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtToken = this._jwtToken;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        if (this._userManagedClientApplicationClientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.userManagedClientApplicationClientSecret = this._userManagedClientApplicationClientSecret;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2CredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._jwtToken = undefined;
            this._refreshToken = undefined;
            this._userManagedClientApplicationClientSecret = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._jwtToken = value.jwtToken;
            this._refreshToken = value.refreshToken;
            this._userManagedClientApplicationClientSecret = value.userManagedClientApplicationClientSecret;
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

    // jwt_token - computed: true, optional: true, required: false
    private _jwtToken?: string; 
    public get jwtToken() {
        return this.getStringAttribute('jwt_token');
    }
    public set jwtToken(value: string) {
        this._jwtToken = value;
    }
    public resetJwtToken() {
        this._jwtToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtTokenInput() {
        return this._jwtToken;
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

    // user_managed_client_application_client_secret - computed: true, optional: true, required: false
    private _userManagedClientApplicationClientSecret?: string; 
    public get userManagedClientApplicationClientSecret() {
        return this.getStringAttribute('user_managed_client_application_client_secret');
    }
    public set userManagedClientApplicationClientSecret(value: string) {
        this._userManagedClientApplicationClientSecret = value;
    }
    public resetUserManagedClientApplicationClientSecret() {
        this._userManagedClientApplicationClientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userManagedClientApplicationClientSecretInput() {
        return this._userManagedClientApplicationClientSecret;
    }
}
export interface OAuth2PropertiesInputProperty {
    /**
    * The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code_properties CcConnection#authorization_code_properties}
    */
    readonly authorizationCodeProperties?: AuthorizationCodePropertiesProperty;
    /**
    * The OAuth2 client app used for the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_client_application CcConnection#o_auth_2_client_application}
    */
    readonly oAuth2ClientApplication?: OAuth2ClientApplicationProperty;
    /**
    * A structure containing the OAuth2 credentials used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_credentials CcConnection#o_auth_2_credentials}
    */
    readonly oAuth2Credentials?: OAuth2CredentialsProperty;
    /**
    * The grant type used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_grant_type CcConnection#o_auth_2_grant_type}
    */
    readonly oAuth2GrantType?: string;
    /**
    * The URL used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url CcConnection#token_url}
    */
    readonly tokenUrl?: string;
    /**
    * A map of key-value pairs used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url_parameters_map CcConnection#token_url_parameters_map}
    */
    readonly tokenUrlParametersMap?: string;
}
export class OAuth2PropertiesInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OAuth2PropertiesInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationCodeProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeProperties = this._authorizationCodeProperties?.internalValue;
        }
        if (this._oAuth2ClientApplication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2ClientApplication = this._oAuth2ClientApplication?.internalValue;
        }
        if (this._oAuth2Credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2Credentials = this._oAuth2Credentials?.internalValue;
        }
        if (this._oAuth2GrantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2GrantType = this._oAuth2GrantType;
        }
        if (this._tokenUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl;
        }
        if (this._tokenUrlParametersMap !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrlParametersMap = this._tokenUrlParametersMap;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2PropertiesInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCodeProperties.internalValue = undefined;
            this._oAuth2ClientApplication.internalValue = undefined;
            this._oAuth2Credentials.internalValue = undefined;
            this._oAuth2GrantType = undefined;
            this._tokenUrl = undefined;
            this._tokenUrlParametersMap = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCodeProperties.internalValue = value.authorizationCodeProperties;
            this._oAuth2ClientApplication.internalValue = value.oAuth2ClientApplication;
            this._oAuth2Credentials.internalValue = value.oAuth2Credentials;
            this._oAuth2GrantType = value.oAuth2GrantType;
            this._tokenUrl = value.tokenUrl;
            this._tokenUrlParametersMap = value.tokenUrlParametersMap;
        }
    }

    // authorization_code_properties - computed: true, optional: true, required: false
    private _authorizationCodeProperties = new AuthorizationCodePropertiesPropertyOutputReference(this, "authorization_code_properties");
    public get authorizationCodeProperties() {
        return this._authorizationCodeProperties;
    }
    public putAuthorizationCodeProperties(value: AuthorizationCodePropertiesProperty) {
        this._authorizationCodeProperties.internalValue = value;
    }
    public resetAuthorizationCodeProperties() {
        this._authorizationCodeProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodePropertiesInput() {
        return this._authorizationCodeProperties.internalValue;
    }

    // o_auth_2_client_application - computed: true, optional: true, required: false
    private _oAuth2ClientApplication = new OAuth2ClientApplicationPropertyOutputReference(this, "o_auth_2_client_application");
    public get oAuth2ClientApplication() {
        return this._oAuth2ClientApplication;
    }
    public putOAuth2ClientApplication(value: OAuth2ClientApplicationProperty) {
        this._oAuth2ClientApplication.internalValue = value;
    }
    public resetOAuth2ClientApplication() {
        this._oAuth2ClientApplication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2ClientApplicationInput() {
        return this._oAuth2ClientApplication.internalValue;
    }

    // o_auth_2_credentials - computed: true, optional: true, required: false
    private _oAuth2Credentials = new OAuth2CredentialsPropertyOutputReference(this, "o_auth_2_credentials");
    public get oAuth2Credentials() {
        return this._oAuth2Credentials;
    }
    public putOAuth2Credentials(value: OAuth2CredentialsProperty) {
        this._oAuth2Credentials.internalValue = value;
    }
    public resetOAuth2Credentials() {
        this._oAuth2Credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2CredentialsInput() {
        return this._oAuth2Credentials.internalValue;
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

    // token_url_parameters_map - computed: true, optional: true, required: false
    private _tokenUrlParametersMap?: string; 
    public get tokenUrlParametersMap() {
        return this.getStringAttribute('token_url_parameters_map');
    }
    public set tokenUrlParametersMap(value: string) {
        this._tokenUrlParametersMap = value;
    }
    public resetTokenUrlParametersMap() {
        this._tokenUrlParametersMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlParametersMapInput() {
        return this._tokenUrlParametersMap;
    }
}
export interface AuthenticationConfigurationInputProperty {
    /**
    * A structure containing the authentication configuration in the CreateConnection request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_type CcConnection#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * For supplying basic auth credentials when not providing a SecretArn value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#basic_authentication_credentials CcConnection#basic_authentication_credentials}
    */
    readonly basicAuthenticationCredentials?: BasicAuthenticationCredentialsProperty;
    /**
    * A structure containing the authentication credentials in the CreateConnection request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#custom_authentication_credentials CcConnection#custom_authentication_credentials}
    */
    readonly customAuthenticationCredentials?: string;
    /**
    * The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#kms_key_arn CcConnection#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * A structure containing properties for OAuth2 in the CreateConnection request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_properties CcConnection#o_auth_2_properties}
    */
    readonly oAuth2Properties?: OAuth2PropertiesInputProperty;
    /**
    * The secret manager ARN to store credentials in the CreateConnection request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#secret_arn CcConnection#secret_arn}
    */
    readonly secretArn?: string;
}
export class AuthenticationConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticationConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._basicAuthenticationCredentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuthenticationCredentials = this._basicAuthenticationCredentials?.internalValue;
        }
        if (this._customAuthenticationCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAuthenticationCredentials = this._customAuthenticationCredentials;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._oAuth2Properties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2Properties = this._oAuth2Properties?.internalValue;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticationConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._basicAuthenticationCredentials.internalValue = undefined;
            this._customAuthenticationCredentials = undefined;
            this._kmsKeyArn = undefined;
            this._oAuth2Properties.internalValue = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._basicAuthenticationCredentials.internalValue = value.basicAuthenticationCredentials;
            this._customAuthenticationCredentials = value.customAuthenticationCredentials;
            this._kmsKeyArn = value.kmsKeyArn;
            this._oAuth2Properties.internalValue = value.oAuth2Properties;
            this._secretArn = value.secretArn;
        }
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

    // basic_authentication_credentials - computed: true, optional: true, required: false
    private _basicAuthenticationCredentials = new BasicAuthenticationCredentialsPropertyOutputReference(this, "basic_authentication_credentials");
    public get basicAuthenticationCredentials() {
        return this._basicAuthenticationCredentials;
    }
    public putBasicAuthenticationCredentials(value: BasicAuthenticationCredentialsProperty) {
        this._basicAuthenticationCredentials.internalValue = value;
    }
    public resetBasicAuthenticationCredentials() {
        this._basicAuthenticationCredentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthenticationCredentialsInput() {
        return this._basicAuthenticationCredentials.internalValue;
    }

    // custom_authentication_credentials - computed: true, optional: true, required: false
    private _customAuthenticationCredentials?: string; 
    public get customAuthenticationCredentials() {
        return this.getStringAttribute('custom_authentication_credentials');
    }
    public set customAuthenticationCredentials(value: string) {
        this._customAuthenticationCredentials = value;
    }
    public resetCustomAuthenticationCredentials() {
        this._customAuthenticationCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAuthenticationCredentialsInput() {
        return this._customAuthenticationCredentials;
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

    // o_auth_2_properties - computed: true, optional: true, required: false
    private _oAuth2Properties = new OAuth2PropertiesInputPropertyOutputReference(this, "o_auth_2_properties");
    public get oAuth2Properties() {
        return this._oAuth2Properties;
    }
    public putOAuth2Properties(value: OAuth2PropertiesInputProperty) {
        this._oAuth2Properties.internalValue = value;
    }
    public resetOAuth2Properties() {
        this._oAuth2Properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oAuth2PropertiesInput() {
        return this._oAuth2Properties.internalValue;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface PhysicalConnectionRequirementsProperty {
    /**
    * The availability zone where the connection is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#availability_zone CcConnection#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The security group ID list used by the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#security_group_id_list CcConnection#security_group_id_list}
    */
    readonly securityGroupIdList?: string[];
    /**
    * The subnet ID used by the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#subnet_id CcConnection#subnet_id}
    */
    readonly subnetId?: string;
}
export class PhysicalConnectionRequirementsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PhysicalConnectionRequirementsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._securityGroupIdList !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIdList = this._securityGroupIdList;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhysicalConnectionRequirementsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._securityGroupIdList = undefined;
            this._subnetId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._securityGroupIdList = value.securityGroupIdList;
            this._subnetId = value.subnetId;
        }
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // security_group_id_list - computed: true, optional: true, required: false
    private _securityGroupIdList?: string[]; 
    public get securityGroupIdList() {
        return this.getListAttribute('security_group_id_list');
    }
    public set securityGroupIdList(value: string[]) {
        this._securityGroupIdList = value;
    }
    public resetSecurityGroupIdList() {
        this._securityGroupIdList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdListInput() {
        return this._securityGroupIdList;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }
}
export interface ConnectionInputProperty {
    /**
    * Connection properties specific to the Athena compute environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#athena_properties CcConnection#athena_properties}
    */
    readonly athenaProperties?: string;
    /**
    * The authentication configuration used to connect to the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_configuration CcConnection#authentication_configuration}
    */
    readonly authenticationConfiguration?: AuthenticationConfigurationInputProperty;
    /**
    * A map of key-value pairs used as parameters for this connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_properties CcConnection#connection_properties}
    */
    readonly connectionProperties?: string;
    /**
    * The type of the connection that needs to be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_type CcConnection#connection_type}
    */
    readonly connectionType: string;
    /**
    * A description of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#description CcConnection#description}
    */
    readonly description?: string;
    /**
    * A list of criteria that can be used in selecting this connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#match_criteria CcConnection#match_criteria}
    */
    readonly matchCriteria?: string[];
    /**
    * The name of the connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#name CcConnection#name}
    */
    readonly name?: string;
    /**
    * The physical connection requirements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#physical_connection_requirements CcConnection#physical_connection_requirements}
    */
    readonly physicalConnectionRequirements?: PhysicalConnectionRequirementsProperty;
    /**
    * Connection properties specific to the Python compute environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#python_properties CcConnection#python_properties}
    */
    readonly pythonProperties?: string;
    /**
    * Connection properties specific to the Spark compute environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#spark_properties CcConnection#spark_properties}
    */
    readonly sparkProperties?: string;
    /**
    * A flag to validate the credentials during create connection. Default is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_credentials CcConnection#validate_credentials}
    */
    readonly validateCredentials?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments CcConnection#validate_for_compute_environments}
    */
    readonly validateForComputeEnvironments?: string[];
}
export class ConnectionInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._athenaProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.athenaProperties = this._athenaProperties;
        }
        if (this._authenticationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
        }
        if (this._connectionProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionProperties = this._connectionProperties;
        }
        if (this._connectionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionType = this._connectionType;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._matchCriteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchCriteria = this._matchCriteria;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._physicalConnectionRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.physicalConnectionRequirements = this._physicalConnectionRequirements?.internalValue;
        }
        if (this._pythonProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.pythonProperties = this._pythonProperties;
        }
        if (this._sparkProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkProperties = this._sparkProperties;
        }
        if (this._validateCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.validateCredentials = this._validateCredentials;
        }
        if (this._validateForComputeEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.validateForComputeEnvironments = this._validateForComputeEnvironments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._athenaProperties = undefined;
            this._authenticationConfiguration.internalValue = undefined;
            this._connectionProperties = undefined;
            this._connectionType = undefined;
            this._description = undefined;
            this._matchCriteria = undefined;
            this._name = undefined;
            this._physicalConnectionRequirements.internalValue = undefined;
            this._pythonProperties = undefined;
            this._sparkProperties = undefined;
            this._validateCredentials = undefined;
            this._validateForComputeEnvironments = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._athenaProperties = value.athenaProperties;
            this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
            this._connectionProperties = value.connectionProperties;
            this._connectionType = value.connectionType;
            this._description = value.description;
            this._matchCriteria = value.matchCriteria;
            this._name = value.name;
            this._physicalConnectionRequirements.internalValue = value.physicalConnectionRequirements;
            this._pythonProperties = value.pythonProperties;
            this._sparkProperties = value.sparkProperties;
            this._validateCredentials = value.validateCredentials;
            this._validateForComputeEnvironments = value.validateForComputeEnvironments;
        }
    }

    // athena_properties - computed: true, optional: true, required: false
    private _athenaProperties?: string; 
    public get athenaProperties() {
        return this.getStringAttribute('athena_properties');
    }
    public set athenaProperties(value: string) {
        this._athenaProperties = value;
    }
    public resetAthenaProperties() {
        this._athenaProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaPropertiesInput() {
        return this._athenaProperties;
    }

    // authentication_configuration - computed: true, optional: true, required: false
    private _authenticationConfiguration = new AuthenticationConfigurationInputPropertyOutputReference(this, "authentication_configuration");
    public get authenticationConfiguration() {
        return this._authenticationConfiguration;
    }
    public putAuthenticationConfiguration(value: AuthenticationConfigurationInputProperty) {
        this._authenticationConfiguration.internalValue = value;
    }
    public resetAuthenticationConfiguration() {
        this._authenticationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationConfigurationInput() {
        return this._authenticationConfiguration.internalValue;
    }

    // connection_properties - computed: true, optional: true, required: false
    private _connectionProperties?: string; 
    public get connectionProperties() {
        return this.getStringAttribute('connection_properties');
    }
    public set connectionProperties(value: string) {
        this._connectionProperties = value;
    }
    public resetConnectionProperties() {
        this._connectionProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPropertiesInput() {
        return this._connectionProperties;
    }

    // connection_type - computed: false, optional: false, required: true
    private _connectionType?: string; 
    public get connectionType() {
        return this.getStringAttribute('connection_type');
    }
    public set connectionType(value: string) {
        this._connectionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTypeInput() {
        return this._connectionType;
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

    // match_criteria - computed: true, optional: true, required: false
    private _matchCriteria?: string[]; 
    public get matchCriteria() {
        return this.getListAttribute('match_criteria');
    }
    public set matchCriteria(value: string[]) {
        this._matchCriteria = value;
    }
    public resetMatchCriteria() {
        this._matchCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchCriteriaInput() {
        return this._matchCriteria;
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

    // physical_connection_requirements - computed: true, optional: true, required: false
    private _physicalConnectionRequirements = new PhysicalConnectionRequirementsPropertyOutputReference(this, "physical_connection_requirements");
    public get physicalConnectionRequirements() {
        return this._physicalConnectionRequirements;
    }
    public putPhysicalConnectionRequirements(value: PhysicalConnectionRequirementsProperty) {
        this._physicalConnectionRequirements.internalValue = value;
    }
    public resetPhysicalConnectionRequirements() {
        this._physicalConnectionRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get physicalConnectionRequirementsInput() {
        return this._physicalConnectionRequirements.internalValue;
    }

    // python_properties - computed: true, optional: true, required: false
    private _pythonProperties?: string; 
    public get pythonProperties() {
        return this.getStringAttribute('python_properties');
    }
    public set pythonProperties(value: string) {
        this._pythonProperties = value;
    }
    public resetPythonProperties() {
        this._pythonProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pythonPropertiesInput() {
        return this._pythonProperties;
    }

    // spark_properties - computed: true, optional: true, required: false
    private _sparkProperties?: string; 
    public get sparkProperties() {
        return this.getStringAttribute('spark_properties');
    }
    public set sparkProperties(value: string) {
        this._sparkProperties = value;
    }
    public resetSparkProperties() {
        this._sparkProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkPropertiesInput() {
        return this._sparkProperties;
    }

    // validate_credentials - computed: true, optional: true, required: false
    private _validateCredentials?: boolean | cdktn.IResolvable; 
    public get validateCredentials() {
        return this.getBooleanAttribute('validate_credentials');
    }
    public set validateCredentials(value: boolean | cdktn.IResolvable) {
        this._validateCredentials = value;
    }
    public resetValidateCredentials() {
        this._validateCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateCredentialsInput() {
        return this._validateCredentials;
    }

    // validate_for_compute_environments - computed: true, optional: true, required: false
    private _validateForComputeEnvironments?: string[]; 
    public get validateForComputeEnvironments() {
        return this.getListAttribute('validate_for_compute_environments');
    }
    public set validateForComputeEnvironments(value: string[]) {
        this._validateForComputeEnvironments = value;
    }
    public resetValidateForComputeEnvironments() {
        this._validateForComputeEnvironments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateForComputeEnvironmentsInput() {
        return this._validateForComputeEnvironments;
    }
}
}
