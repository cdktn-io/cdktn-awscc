// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectionTypeProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration that defines the base URL and additional request parameters needed during connection creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#connection_properties CcConnectionType#connection_properties}
    */
    readonly connectionProperties?: CcConnectionType.ConnectionPropertiesProperty;
    /**
    * The name of the connection type. Must be prefixed with REST-.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#connection_type CcConnectionType#connection_type}
    */
    readonly connectionType: string;
    /**
    * Configuration that defines supported authentication types and required properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#connector_authentication_configuration CcConnectionType#connector_authentication_configuration}
    */
    readonly connectorAuthenticationConfiguration?: CcConnectionType.ConnectorAuthenticationConfigurationProperty;
    /**
    * A description of the connection type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#description CcConnectionType#description}
    */
    readonly description?: string;
    /**
    * The integration type for the connection. Currently only REST is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#integration_type CcConnectionType#integration_type}
    */
    readonly integrationType?: string;
    /**
    * Configuration for HTTP request and response handling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#rest_configuration CcConnectionType#rest_configuration}
    */
    readonly restConfiguration: CcConnectionType.RestConfigurationProperty;
    /**
    * Tags to assign to the connection type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#tags CcConnectionType#tags}
    */
    readonly tags?: CcConnectionType.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type awscc_glue_connection_type}
*/
export class CcConnectionType extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_connection_type";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnectionType resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnectionType to import
    * @param importFromId The id of the existing CcConnectionType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnectionType to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_connection_type", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type awscc_glue_connection_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectionTypeProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectionTypeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_connection_type',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._connectionProperties.internalValue = config.connectionProperties;
        this._connectionType = config.connectionType;
        this._connectorAuthenticationConfiguration.internalValue = config.connectorAuthenticationConfiguration;
        this._description = config.description;
        this._integrationType = config.integrationType;
        this._restConfiguration.internalValue = config.restConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_properties - computed: true, optional: true, required: false
    private _connectionProperties = new CcConnectionType.ConnectionPropertiesPropertyOutputReference(this, "connection_properties");
    public get connectionProperties() {
        return this._connectionProperties;
    }
    public putConnectionProperties(value: CcConnectionType.ConnectionPropertiesProperty) {
        this._connectionProperties.internalValue = value;
    }
    public resetConnectionProperties() {
        this._connectionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPropertiesInput() {
        return this._connectionProperties.internalValue;
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

    // connection_type_arn - computed: true, optional: false, required: false
    public get connectionTypeArn() {
        return this.getStringAttribute('connection_type_arn');
    }

    // connector_authentication_configuration - computed: true, optional: true, required: false
    private _connectorAuthenticationConfiguration = new CcConnectionType.ConnectorAuthenticationConfigurationPropertyOutputReference(this, "connector_authentication_configuration");
    public get connectorAuthenticationConfiguration() {
        return this._connectorAuthenticationConfiguration;
    }
    public putConnectorAuthenticationConfiguration(value: CcConnectionType.ConnectorAuthenticationConfigurationProperty) {
        this._connectorAuthenticationConfiguration.internalValue = value;
    }
    public resetConnectorAuthenticationConfiguration() {
        this._connectorAuthenticationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorAuthenticationConfigurationInput() {
        return this._connectorAuthenticationConfiguration.internalValue;
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

    // integration_type - computed: true, optional: true, required: false
    private _integrationType?: string; 
    public get integrationType() {
        return this.getStringAttribute('integration_type');
    }
    public set integrationType(value: string) {
        this._integrationType = value;
    }
    public resetIntegrationType() {
        this._integrationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationTypeInput() {
        return this._integrationType;
    }

    // rest_configuration - computed: false, optional: false, required: true
    private _restConfiguration = new CcConnectionType.RestConfigurationPropertyOutputReference(this, "rest_configuration");
    public get restConfiguration() {
        return this._restConfiguration;
    }
    public putRestConfiguration(value: CcConnectionType.RestConfigurationProperty) {
        this._restConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restConfigurationInput() {
        return this._restConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnectionType.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnectionType.TagsProperty[] | cdktn.IResolvable) {
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
            connection_properties: ccConnectionTypeConnectionPropertiesPropertyToTerraform(this._connectionProperties.internalValue),
            connection_type: cdktn.stringToTerraform(this._connectionType),
            connector_authentication_configuration: ccConnectionTypeConnectorAuthenticationConfigurationPropertyToTerraform(this._connectorAuthenticationConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            integration_type: cdktn.stringToTerraform(this._integrationType),
            rest_configuration: ccConnectionTypeRestConfigurationPropertyToTerraform(this._restConfiguration.internalValue),
            tags: cdktn.listMapper(ccConnectionTypeTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_properties: {
                value: ccConnectionTypeConnectionPropertiesPropertyToHclTerraform(this._connectionProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectionType.ConnectionPropertiesProperty",
            },
            connection_type: {
                value: cdktn.stringToHclTerraform(this._connectionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_authentication_configuration: {
                value: ccConnectionTypeConnectorAuthenticationConfigurationPropertyToHclTerraform(this._connectorAuthenticationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectionType.ConnectorAuthenticationConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_type: {
                value: cdktn.stringToHclTerraform(this._integrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rest_configuration: {
                value: ccConnectionTypeRestConfigurationPropertyToHclTerraform(this._restConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectionType.RestConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectionTypeTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConnectionType.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectionTypeAdditionalRequestParametersPropertyToTerraform(struct?: CcConnectionType.AdditionalRequestParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeAdditionalRequestParametersPropertyToHclTerraform(struct?: CcConnectionType.AdditionalRequestParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeUrlPropertyToTerraform(struct?: CcConnectionType.UrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeUrlPropertyToHclTerraform(struct?: CcConnectionType.UrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectionPropertiesPropertyToTerraform(struct?: CcConnectionType.ConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_request_parameters: cdktn.listMapper(ccConnectionTypeAdditionalRequestParametersPropertyToTerraform, false)(struct!.additionalRequestParameters),
        url: ccConnectionTypeUrlPropertyToTerraform(struct!.url),
    }
}


export function ccConnectionTypeConnectionPropertiesPropertyToHclTerraform(struct?: CcConnectionType.ConnectionPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_request_parameters: {
            value: cdktn.listMapperHcl(ccConnectionTypeAdditionalRequestParametersPropertyToHclTerraform, false)(struct!.additionalRequestParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AdditionalRequestParametersPropertyList",
        },
        url: {
            value: ccConnectionTypeUrlPropertyToHclTerraform(struct!.url),
            isBlock: true,
            type: "struct",
            storageClassType: "UrlProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypePasswordPropertyToTerraform(struct?: CcConnectionType.PasswordProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypePasswordPropertyToHclTerraform(struct?: CcConnectionType.PasswordProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeUsernamePropertyToTerraform(struct?: CcConnectionType.UsernameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeUsernamePropertyToHclTerraform(struct?: CcConnectionType.UsernameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeBasicAuthenticationPropertiesPropertyToTerraform(struct?: CcConnectionType.BasicAuthenticationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password: ccConnectionTypePasswordPropertyToTerraform(struct!.password),
        username: ccConnectionTypeUsernamePropertyToTerraform(struct!.username),
    }
}


export function ccConnectionTypeBasicAuthenticationPropertiesPropertyToHclTerraform(struct?: CcConnectionType.BasicAuthenticationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password: {
            value: ccConnectionTypePasswordPropertyToHclTerraform(struct!.password),
            isBlock: true,
            type: "struct",
            storageClassType: "PasswordProperty",
        },
        username: {
            value: ccConnectionTypeUsernamePropertyToHclTerraform(struct!.username),
            isBlock: true,
            type: "struct",
            storageClassType: "UsernameProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeAuthenticationParametersPropertyToTerraform(struct?: CcConnectionType.AuthenticationParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeAuthenticationParametersPropertyToHclTerraform(struct?: CcConnectionType.AuthenticationParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeCustomAuthenticationPropertiesPropertyToTerraform(struct?: CcConnectionType.CustomAuthenticationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_parameters: cdktn.listMapper(ccConnectionTypeAuthenticationParametersPropertyToTerraform, false)(struct!.authenticationParameters),
    }
}


export function ccConnectionTypeCustomAuthenticationPropertiesPropertyToHclTerraform(struct?: CcConnectionType.CustomAuthenticationPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_parameters: {
            value: cdktn.listMapperHcl(ccConnectionTypeAuthenticationParametersPropertyToHclTerraform, false)(struct!.authenticationParameters),
            isBlock: true,
            type: "list",
            storageClassType: "AuthenticationParametersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeAuthorizationCodePropertyToTerraform(struct?: CcConnectionType.AuthorizationCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeAuthorizationCodePropertyToHclTerraform(struct?: CcConnectionType.AuthorizationCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeAuthorizationCodeUrlPropertyToTerraform(struct?: CcConnectionType.AuthorizationCodeUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeAuthorizationCodeUrlPropertyToHclTerraform(struct?: CcConnectionType.AuthorizationCodeUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypePromptPropertyToTerraform(struct?: CcConnectionType.PromptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypePromptPropertyToHclTerraform(struct?: CcConnectionType.PromptProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRedirectUriPropertyToTerraform(struct?: CcConnectionType.RedirectUriProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeRedirectUriPropertyToHclTerraform(struct?: CcConnectionType.RedirectUriProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopePropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopePropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeAuthorizationCodePropertiesPropertyToTerraform(struct?: CcConnectionType.AuthorizationCodePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code: ccConnectionTypeAuthorizationCodePropertyToTerraform(struct!.authorizationCode),
        authorization_code_url: ccConnectionTypeAuthorizationCodeUrlPropertyToTerraform(struct!.authorizationCodeUrl),
        client_id: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdPropertyToTerraform(struct!.clientId),
        client_secret: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretPropertyToTerraform(struct!.clientSecret),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        prompt: ccConnectionTypePromptPropertyToTerraform(struct!.prompt),
        redirect_uri: ccConnectionTypeRedirectUriPropertyToTerraform(struct!.redirectUri),
        request_method: cdktn.stringToTerraform(struct!.requestMethod),
        scope: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopePropertyToTerraform(struct!.scope),
        token_url: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlPropertyToTerraform(struct!.tokenUrl),
        token_url_parameters: cdktn.listMapper(ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyToTerraform, false)(struct!.tokenUrlParameters),
    }
}


export function ccConnectionTypeAuthorizationCodePropertiesPropertyToHclTerraform(struct?: CcConnectionType.AuthorizationCodePropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code: {
            value: ccConnectionTypeAuthorizationCodePropertyToHclTerraform(struct!.authorizationCode),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodeProperty",
        },
        authorization_code_url: {
            value: ccConnectionTypeAuthorizationCodeUrlPropertyToHclTerraform(struct!.authorizationCodeUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodeUrlProperty",
        },
        client_id: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdPropertyToHclTerraform(struct!.clientId),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty",
        },
        client_secret: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretPropertyToHclTerraform(struct!.clientSecret),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prompt: {
            value: ccConnectionTypePromptPropertyToHclTerraform(struct!.prompt),
            isBlock: true,
            type: "struct",
            storageClassType: "PromptProperty",
        },
        redirect_uri: {
            value: ccConnectionTypeRedirectUriPropertyToHclTerraform(struct!.redirectUri),
            isBlock: true,
            type: "struct",
            storageClassType: "RedirectUriProperty",
        },
        request_method: {
            value: cdktn.stringToHclTerraform(struct!.requestMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopePropertyToHclTerraform(struct!.scope),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty",
        },
        token_url: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlPropertyToHclTerraform(struct!.tokenUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty",
        },
        token_url_parameters: {
            value: cdktn.listMapperHcl(ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyToHclTerraform, false)(struct!.tokenUrlParameters),
            isBlock: true,
            type: "list",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopePropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopePropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeClientCredentialsPropertiesPropertyToTerraform(struct?: CcConnectionType.ClientCredentialsPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_id: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdPropertyToTerraform(struct!.clientId),
        client_secret: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretPropertyToTerraform(struct!.clientSecret),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        request_method: cdktn.stringToTerraform(struct!.requestMethod),
        scope: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopePropertyToTerraform(struct!.scope),
        token_url: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlPropertyToTerraform(struct!.tokenUrl),
        token_url_parameters: cdktn.listMapper(ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyToTerraform, false)(struct!.tokenUrlParameters),
    }
}


export function ccConnectionTypeClientCredentialsPropertiesPropertyToHclTerraform(struct?: CcConnectionType.ClientCredentialsPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_id: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdPropertyToHclTerraform(struct!.clientId),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty",
        },
        client_secret: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretPropertyToHclTerraform(struct!.clientSecret),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        request_method: {
            value: cdktn.stringToHclTerraform(struct!.requestMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopePropertyToHclTerraform(struct!.scope),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty",
        },
        token_url: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlPropertyToHclTerraform(struct!.tokenUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty",
        },
        token_url_parameters: {
            value: cdktn.listMapperHcl(ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyToHclTerraform, false)(struct!.tokenUrlParameters),
            isBlock: true,
            type: "list",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeJwtTokenPropertyToTerraform(struct?: CcConnectionType.JwtTokenProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeJwtTokenPropertyToHclTerraform(struct?: CcConnectionType.JwtTokenProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeJwtBearerPropertiesPropertyToTerraform(struct?: CcConnectionType.JwtBearerPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        jwt_token: ccConnectionTypeJwtTokenPropertyToTerraform(struct!.jwtToken),
        request_method: cdktn.stringToTerraform(struct!.requestMethod),
        token_url: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlPropertyToTerraform(struct!.tokenUrl),
        token_url_parameters: cdktn.listMapper(ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyToTerraform, false)(struct!.tokenUrlParameters),
    }
}


export function ccConnectionTypeJwtBearerPropertiesPropertyToHclTerraform(struct?: CcConnectionType.JwtBearerPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jwt_token: {
            value: ccConnectionTypeJwtTokenPropertyToHclTerraform(struct!.jwtToken),
            isBlock: true,
            type: "struct",
            storageClassType: "JwtTokenProperty",
        },
        request_method: {
            value: cdktn.stringToHclTerraform(struct!.requestMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_url: {
            value: ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlPropertyToHclTerraform(struct!.tokenUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty",
        },
        token_url_parameters: {
            value: cdktn.listMapperHcl(ccConnectionTypeConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyToHclTerraform, false)(struct!.tokenUrlParameters),
            isBlock: true,
            type: "list",
            storageClassType: "ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeOAuth2PropertiesPropertyToTerraform(struct?: CcConnectionType.OAuth2PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_code_properties: ccConnectionTypeAuthorizationCodePropertiesPropertyToTerraform(struct!.authorizationCodeProperties),
        client_credentials_properties: ccConnectionTypeClientCredentialsPropertiesPropertyToTerraform(struct!.clientCredentialsProperties),
        jwt_bearer_properties: ccConnectionTypeJwtBearerPropertiesPropertyToTerraform(struct!.jwtBearerProperties),
        o_auth_2_grant_type: cdktn.stringToTerraform(struct!.oAuth2GrantType),
    }
}


export function ccConnectionTypeOAuth2PropertiesPropertyToHclTerraform(struct?: CcConnectionType.OAuth2PropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_code_properties: {
            value: ccConnectionTypeAuthorizationCodePropertiesPropertyToHclTerraform(struct!.authorizationCodeProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationCodePropertiesProperty",
        },
        client_credentials_properties: {
            value: ccConnectionTypeClientCredentialsPropertiesPropertyToHclTerraform(struct!.clientCredentialsProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "ClientCredentialsPropertiesProperty",
        },
        jwt_bearer_properties: {
            value: ccConnectionTypeJwtBearerPropertiesPropertyToHclTerraform(struct!.jwtBearerProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "JwtBearerPropertiesProperty",
        },
        o_auth_2_grant_type: {
            value: cdktn.stringToHclTerraform(struct!.oAuth2GrantType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeConnectorAuthenticationConfigurationPropertyToTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.authenticationTypes),
        basic_authentication_properties: ccConnectionTypeBasicAuthenticationPropertiesPropertyToTerraform(struct!.basicAuthenticationProperties),
        custom_authentication_properties: ccConnectionTypeCustomAuthenticationPropertiesPropertyToTerraform(struct!.customAuthenticationProperties),
        o_auth_2_properties: ccConnectionTypeOAuth2PropertiesPropertyToTerraform(struct!.oAuth2Properties),
    }
}


export function ccConnectionTypeConnectorAuthenticationConfigurationPropertyToHclTerraform(struct?: CcConnectionType.ConnectorAuthenticationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.authenticationTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        basic_authentication_properties: {
            value: ccConnectionTypeBasicAuthenticationPropertiesPropertyToHclTerraform(struct!.basicAuthenticationProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "BasicAuthenticationPropertiesProperty",
        },
        custom_authentication_properties: {
            value: ccConnectionTypeCustomAuthenticationPropertiesPropertyToHclTerraform(struct!.customAuthenticationProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomAuthenticationPropertiesProperty",
        },
        o_auth_2_properties: {
            value: ccConnectionTypeOAuth2PropertiesPropertyToHclTerraform(struct!.oAuth2Properties),
            isBlock: true,
            type: "struct",
            storageClassType: "OAuth2PropertiesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        high_bound_key: cdktn.stringToTerraform(struct!.highBoundKey),
        low_bound_key: cdktn.stringToTerraform(struct!.lowBoundKey),
        template: cdktn.stringToTerraform(struct!.template),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        high_bound_key: {
            value: cdktn.stringToHclTerraform(struct!.highBoundKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        low_bound_key: {
            value: cdktn.stringToHclTerraform(struct!.lowBoundKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template: {
            value: cdktn.stringToHclTerraform(struct!.template),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeFilterOverridesPropertyToTerraform(struct?: CcConnectionType.FilterOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        between_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationPropertyToTerraform(struct!.betweenConfiguration),
        date_time_format: cdktn.stringToTerraform(struct!.dateTimeFormat),
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        operator_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.operatorMappings),
    }
}


export function ccConnectionTypeFilterOverridesPropertyToHclTerraform(struct?: CcConnectionType.FilterOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        between_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationPropertyToHclTerraform(struct!.betweenConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty",
        },
        date_time_format: {
            value: cdktn.stringToHclTerraform(struct!.dateTimeFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operator_mappings: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.operatorMappings),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeSchemaPropertyToTerraform(struct?: CcConnectionType.SchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_data_type: cdktn.stringToTerraform(struct!.fieldDataType),
        filter_overrides: ccConnectionTypeFilterOverridesPropertyToTerraform(struct!.filterOverrides),
        is_nullable: cdktn.booleanToTerraform(struct!.isNullable),
        is_orderable: cdktn.booleanToTerraform(struct!.isOrderable),
        is_partitionable: cdktn.booleanToTerraform(struct!.isPartitionable),
        is_queryable: cdktn.booleanToTerraform(struct!.isQueryable),
        name: cdktn.stringToTerraform(struct!.name),
        response_date_format: cdktn.stringToTerraform(struct!.responseDateFormat),
    }
}


export function ccConnectionTypeSchemaPropertyToHclTerraform(struct?: CcConnectionType.SchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_data_type: {
            value: cdktn.stringToHclTerraform(struct!.fieldDataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_overrides: {
            value: ccConnectionTypeFilterOverridesPropertyToHclTerraform(struct!.filterOverrides),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterOverridesProperty",
        },
        is_nullable: {
            value: cdktn.booleanToHclTerraform(struct!.isNullable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_orderable: {
            value: cdktn.booleanToHclTerraform(struct!.isOrderable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_partitionable: {
            value: cdktn.booleanToHclTerraform(struct!.isPartitionable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_queryable: {
            value: cdktn.booleanToHclTerraform(struct!.isQueryable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_date_format: {
            value: cdktn.stringToHclTerraform(struct!.responseDateFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        high_bound_key: cdktn.stringToTerraform(struct!.highBoundKey),
        low_bound_key: cdktn.stringToTerraform(struct!.lowBoundKey),
        template: cdktn.stringToTerraform(struct!.template),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        high_bound_key: {
            value: cdktn.stringToHclTerraform(struct!.highBoundKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        low_bound_key: {
            value: cdktn.stringToHclTerraform(struct!.lowBoundKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template: {
            value: cdktn.stringToHclTerraform(struct!.template),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query_parameter_name: cdktn.stringToTerraform(struct!.queryParameterName),
        quote_character: cdktn.stringToTerraform(struct!.quoteCharacter),
        quote_string_values: cdktn.booleanToTerraform(struct!.quoteStringValues),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query_parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.queryParameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        quote_character: {
            value: cdktn.stringToHclTerraform(struct!.quoteCharacter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        quote_string_values: {
            value: cdktn.booleanToHclTerraform(struct!.quoteStringValues),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        between_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToTerraform(struct!.betweenConfiguration),
        date_time_format: cdktn.stringToTerraform(struct!.dateTimeFormat),
        filter_mode: cdktn.stringToTerraform(struct!.filterMode),
        filter_string_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToTerraform(struct!.filterStringConfiguration),
        operator_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.operatorMappings),
        strip_quotes: cdktn.booleanToTerraform(struct!.stripQuotes),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        between_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToHclTerraform(struct!.betweenConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty",
        },
        date_time_format: {
            value: cdktn.stringToHclTerraform(struct!.dateTimeFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_mode: {
            value: cdktn.stringToHclTerraform(struct!.filterMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_string_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToHclTerraform(struct!.filterStringConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty",
        },
        operator_mappings: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.operatorMappings),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        strip_quotes: {
            value: cdktn.booleanToHclTerraform(struct!.stripQuotes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        limit_parameter: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToTerraform(struct!.limitParameter),
        next_page: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToTerraform(struct!.nextPage),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        limit_parameter: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToHclTerraform(struct!.limitParameter),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty",
        },
        next_page: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToHclTerraform(struct!.nextPage),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        limit_parameter: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToTerraform(struct!.limitParameter),
        offset_parameter: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToTerraform(struct!.offsetParameter),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        limit_parameter: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToHclTerraform(struct!.limitParameter),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty",
        },
        offset_parameter: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToHclTerraform(struct!.offsetParameter),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cursor_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToTerraform(struct!.cursorConfiguration),
        offset_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToTerraform(struct!.offsetConfiguration),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cursor_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToHclTerraform(struct!.cursorConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty",
        },
        offset_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToHclTerraform(struct!.offsetConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_path: cdktn.stringToTerraform(struct!.errorPath),
        result_path: cdktn.stringToTerraform(struct!.resultPath),
    }
}


export function ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_path: {
            value: cdktn.stringToHclTerraform(struct!.errorPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        result_path: {
            value: cdktn.stringToHclTerraform(struct!.resultPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeSourceConfigurationPropertyToTerraform(struct?: CcConnectionType.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
        pagination_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationPropertyToTerraform(struct!.paginationConfiguration),
        request_method: cdktn.stringToTerraform(struct!.requestMethod),
        request_parameters: cdktn.listMapper(ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyToTerraform, false)(struct!.requestParameters),
        request_path: cdktn.stringToTerraform(struct!.requestPath),
        response_configuration: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationPropertyToTerraform(struct!.responseConfiguration),
    }
}


export function ccConnectionTypeSourceConfigurationPropertyToHclTerraform(struct?: CcConnectionType.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty",
        },
        pagination_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationPropertyToHclTerraform(struct!.paginationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty",
        },
        request_method: {
            value: cdktn.stringToHclTerraform(struct!.requestMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        request_parameters: {
            value: cdktn.listMapperHcl(ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyToHclTerraform, false)(struct!.requestParameters),
            isBlock: true,
            type: "list",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyList",
        },
        request_path: {
            value: cdktn.stringToHclTerraform(struct!.requestPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_configuration: {
            value: ccConnectionTypeRestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationPropertyToHclTerraform(struct!.responseConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeEntityConfigurationsPropertyToTerraform(struct?: CcConnectionType.EntityConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schema: cdktn.hashMapper(ccConnectionTypeSchemaPropertyToTerraform)(struct!.schema),
        source_configuration: ccConnectionTypeSourceConfigurationPropertyToTerraform(struct!.sourceConfiguration),
    }
}


export function ccConnectionTypeEntityConfigurationsPropertyToHclTerraform(struct?: CcConnectionType.EntityConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schema: {
            value: cdktn.hashMapperHcl(ccConnectionTypeSchemaPropertyToHclTerraform)(struct!.schema),
            isBlock: true,
            type: "map",
            storageClassType: "SchemaPropertyMap",
        },
        source_configuration: {
            value: ccConnectionTypeSourceConfigurationPropertyToHclTerraform(struct!.sourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        high_bound_key: cdktn.stringToTerraform(struct!.highBoundKey),
        low_bound_key: cdktn.stringToTerraform(struct!.lowBoundKey),
        template: cdktn.stringToTerraform(struct!.template),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        high_bound_key: {
            value: cdktn.stringToHclTerraform(struct!.highBoundKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        low_bound_key: {
            value: cdktn.stringToHclTerraform(struct!.lowBoundKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template: {
            value: cdktn.stringToHclTerraform(struct!.template),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query_parameter_name: cdktn.stringToTerraform(struct!.queryParameterName),
        quote_character: cdktn.stringToTerraform(struct!.quoteCharacter),
        quote_string_values: cdktn.booleanToTerraform(struct!.quoteStringValues),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query_parameter_name: {
            value: cdktn.stringToHclTerraform(struct!.queryParameterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        quote_character: {
            value: cdktn.stringToHclTerraform(struct!.quoteCharacter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        quote_string_values: {
            value: cdktn.booleanToHclTerraform(struct!.quoteStringValues),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        between_configuration: ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToTerraform(struct!.betweenConfiguration),
        date_time_format: cdktn.stringToTerraform(struct!.dateTimeFormat),
        filter_mode: cdktn.stringToTerraform(struct!.filterMode),
        filter_string_configuration: ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToTerraform(struct!.filterStringConfiguration),
        operator_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.operatorMappings),
        strip_quotes: cdktn.booleanToTerraform(struct!.stripQuotes),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        between_configuration: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationPropertyToHclTerraform(struct!.betweenConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty",
        },
        date_time_format: {
            value: cdktn.stringToHclTerraform(struct!.dateTimeFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_mode: {
            value: cdktn.stringToHclTerraform(struct!.filterMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_string_configuration: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyToHclTerraform(struct!.filterStringConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty",
        },
        operator_mappings: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.operatorMappings),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        strip_quotes: {
            value: cdktn.booleanToHclTerraform(struct!.stripQuotes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        limit_parameter: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToTerraform(struct!.limitParameter),
        next_page: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToTerraform(struct!.nextPage),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        limit_parameter: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyToHclTerraform(struct!.limitParameter),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty",
        },
        next_page: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyToHclTerraform(struct!.nextPage),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_path: cdktn.stringToTerraform(struct!.contentPath),
        header_key: cdktn.stringToTerraform(struct!.headerKey),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_path: {
            value: cdktn.stringToHclTerraform(struct!.contentPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_key: {
            value: cdktn.stringToHclTerraform(struct!.headerKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key: cdktn.stringToTerraform(struct!.key),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToTerraform(struct!.value),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        limit_parameter: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToTerraform(struct!.limitParameter),
        offset_parameter: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToTerraform(struct!.offsetParameter),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        limit_parameter: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyToHclTerraform(struct!.limitParameter),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty",
        },
        offset_parameter: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyToHclTerraform(struct!.offsetParameter),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cursor_configuration: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToTerraform(struct!.cursorConfiguration),
        offset_configuration: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToTerraform(struct!.offsetConfiguration),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cursor_configuration: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationPropertyToHclTerraform(struct!.cursorConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty",
        },
        offset_configuration: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyToHclTerraform(struct!.offsetConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationRequestParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        key_override: cdktn.stringToTerraform(struct!.keyOverride),
        name: cdktn.stringToTerraform(struct!.name),
        property_location: cdktn.stringToTerraform(struct!.propertyLocation),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationRequestParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_override: {
            value: cdktn.stringToHclTerraform(struct!.keyOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_location: {
            value: cdktn.stringToHclTerraform(struct!.propertyLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_path: cdktn.stringToTerraform(struct!.errorPath),
        result_path: cdktn.stringToTerraform(struct!.resultPath),
    }
}


export function ccConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_path: {
            value: cdktn.stringToHclTerraform(struct!.errorPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        result_path: {
            value: cdktn.stringToHclTerraform(struct!.resultPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeGlobalSourceConfigurationPropertyToTerraform(struct?: CcConnectionType.GlobalSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_configuration: ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
        pagination_configuration: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationPropertyToTerraform(struct!.paginationConfiguration),
        request_method: cdktn.stringToTerraform(struct!.requestMethod),
        request_parameters: cdktn.listMapper(ccConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersPropertyToTerraform, false)(struct!.requestParameters),
        request_path: cdktn.stringToTerraform(struct!.requestPath),
        response_configuration: ccConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationPropertyToTerraform(struct!.responseConfiguration),
    }
}


export function ccConnectionTypeGlobalSourceConfigurationPropertyToHclTerraform(struct?: CcConnectionType.GlobalSourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_configuration: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty",
        },
        pagination_configuration: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationPaginationConfigurationPropertyToHclTerraform(struct!.paginationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty",
        },
        request_method: {
            value: cdktn.stringToHclTerraform(struct!.requestMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        request_parameters: {
            value: cdktn.listMapperHcl(ccConnectionTypeRestConfigurationGlobalSourceConfigurationRequestParametersPropertyToHclTerraform, false)(struct!.requestParameters),
            isBlock: true,
            type: "list",
            storageClassType: "RestConfigurationGlobalSourceConfigurationRequestParametersPropertyList",
        },
        request_path: {
            value: cdktn.stringToHclTerraform(struct!.requestPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_configuration: {
            value: ccConnectionTypeRestConfigurationGlobalSourceConfigurationResponseConfigurationPropertyToHclTerraform(struct!.responseConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeValidationEndpointConfigurationPropertyToTerraform(struct?: CcConnectionType.ValidationEndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        request_method: cdktn.stringToTerraform(struct!.requestMethod),
        request_path: cdktn.stringToTerraform(struct!.requestPath),
    }
}


export function ccConnectionTypeValidationEndpointConfigurationPropertyToHclTerraform(struct?: CcConnectionType.ValidationEndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        request_method: {
            value: cdktn.stringToHclTerraform(struct!.requestMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        request_path: {
            value: cdktn.stringToHclTerraform(struct!.requestPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeRestConfigurationPropertyToTerraform(struct?: CcConnectionType.RestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        entity_configurations: cdktn.hashMapper(ccConnectionTypeEntityConfigurationsPropertyToTerraform)(struct!.entityConfigurations),
        global_source_configuration: ccConnectionTypeGlobalSourceConfigurationPropertyToTerraform(struct!.globalSourceConfiguration),
        validation_endpoint_configuration: ccConnectionTypeValidationEndpointConfigurationPropertyToTerraform(struct!.validationEndpointConfiguration),
    }
}


export function ccConnectionTypeRestConfigurationPropertyToHclTerraform(struct?: CcConnectionType.RestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        entity_configurations: {
            value: cdktn.hashMapperHcl(ccConnectionTypeEntityConfigurationsPropertyToHclTerraform)(struct!.entityConfigurations),
            isBlock: true,
            type: "map",
            storageClassType: "EntityConfigurationsPropertyMap",
        },
        global_source_configuration: {
            value: ccConnectionTypeGlobalSourceConfigurationPropertyToHclTerraform(struct!.globalSourceConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "GlobalSourceConfigurationProperty",
        },
        validation_endpoint_configuration: {
            value: ccConnectionTypeValidationEndpointConfigurationPropertyToHclTerraform(struct!.validationEndpointConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ValidationEndpointConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectionTypeTagsPropertyToTerraform(struct?: CcConnectionType.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectionTypeTagsPropertyToHclTerraform(struct?: CcConnectionType.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcConnectionType {
export interface AdditionalRequestParametersProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class AdditionalRequestParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdditionalRequestParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalRequestParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class AdditionalRequestParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : AdditionalRequestParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): AdditionalRequestParametersPropertyOutputReference {
        return new AdditionalRequestParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UrlProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class UrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectionPropertiesProperty {
    /**
    * Key-value pairs of additional request parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#additional_request_parameters CcConnectionType#additional_request_parameters}
    */
    readonly additionalRequestParameters?: AdditionalRequestParametersProperty[] | cdktn.IResolvable;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#url CcConnectionType#url}
    */
    readonly url?: UrlProperty;
}
export class ConnectionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalRequestParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalRequestParameters = this._additionalRequestParameters?.internalValue;
        }
        if (this._url?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalRequestParameters.internalValue = undefined;
            this._url.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalRequestParameters.internalValue = value.additionalRequestParameters;
            this._url.internalValue = value.url;
        }
    }

    // additional_request_parameters - computed: true, optional: true, required: false
    private _additionalRequestParameters = new AdditionalRequestParametersPropertyList(this, "additional_request_parameters", false);
    public get additionalRequestParameters() {
        return this._additionalRequestParameters;
    }
    public putAdditionalRequestParameters(value: AdditionalRequestParametersProperty[] | cdktn.IResolvable) {
        this._additionalRequestParameters.internalValue = value;
    }
    public resetAdditionalRequestParameters() {
        this._additionalRequestParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalRequestParametersInput() {
        return this._additionalRequestParameters.internalValue;
    }

    // url - computed: true, optional: true, required: false
    private _url = new UrlPropertyOutputReference(this, "url");
    public get url() {
        return this._url;
    }
    public putUrl(value: UrlProperty) {
        this._url.internalValue = value;
    }
    public resetUrl() {
        this._url.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url.internalValue;
    }
}
export interface PasswordProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class PasswordPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PasswordProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PasswordProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface UsernameProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class UsernamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UsernameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UsernameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface BasicAuthenticationPropertiesProperty {
    /**
    * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#password CcConnectionType#password}
    */
    readonly password?: PasswordProperty;
    /**
    * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#username CcConnectionType#username}
    */
    readonly username?: UsernameProperty;
}
export class BasicAuthenticationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BasicAuthenticationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._password?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password?.internalValue;
        }
        if (this._username?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BasicAuthenticationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._password.internalValue = undefined;
            this._username.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._password.internalValue = value.password;
            this._username.internalValue = value.username;
        }
    }

    // password - computed: true, optional: true, required: false
    private _password = new PasswordPropertyOutputReference(this, "password");
    public get password() {
        return this._password;
    }
    public putPassword(value: PasswordProperty) {
        this._password.internalValue = value;
    }
    public resetPassword() {
        this._password.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password.internalValue;
    }

    // username - computed: true, optional: true, required: false
    private _username = new UsernamePropertyOutputReference(this, "username");
    public get username() {
        return this._username;
    }
    public putUsername(value: UsernameProperty) {
        this._username.internalValue = value;
    }
    public resetUsername() {
        this._username.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username.internalValue;
    }
}
export interface AuthenticationParametersProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class AuthenticationParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AuthenticationParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticationParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class AuthenticationParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : AuthenticationParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): AuthenticationParametersPropertyOutputReference {
        return new AuthenticationParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomAuthenticationPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authentication_parameters CcConnectionType#authentication_parameters}
    */
    readonly authenticationParameters?: AuthenticationParametersProperty[] | cdktn.IResolvable;
}
export class CustomAuthenticationPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomAuthenticationPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationParameters = this._authenticationParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomAuthenticationPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationParameters.internalValue = value.authenticationParameters;
        }
    }

    // authentication_parameters - computed: true, optional: true, required: false
    private _authenticationParameters = new AuthenticationParametersPropertyList(this, "authentication_parameters", false);
    public get authenticationParameters() {
        return this._authenticationParameters;
    }
    public putAuthenticationParameters(value: AuthenticationParametersProperty[] | cdktn.IResolvable) {
        this._authenticationParameters.internalValue = value;
    }
    public resetAuthenticationParameters() {
        this._authenticationParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationParametersInput() {
        return this._authenticationParameters.internalValue;
    }
}
export interface AuthorizationCodeProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class AuthorizationCodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationCodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface AuthorizationCodeUrlProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class AuthorizationCodeUrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationCodeUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodeUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface PromptProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class PromptPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PromptProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PromptProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface RedirectUriProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class RedirectUriPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedirectUriProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedirectUriProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyOutputReference {
        return new ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AuthorizationCodePropertiesProperty {
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authorization_code CcConnectionType#authorization_code}
    */
    readonly authorizationCode?: AuthorizationCodeProperty;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authorization_code_url CcConnectionType#authorization_code_url}
    */
    readonly authorizationCodeUrl?: AuthorizationCodeUrlProperty;
    /**
    * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_id CcConnectionType#client_id}
    */
    readonly clientId?: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty;
    /**
    * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_secret CcConnectionType#client_secret}
    */
    readonly clientSecret?: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_type CcConnectionType#content_type}
    */
    readonly contentType?: string;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#prompt CcConnectionType#prompt}
    */
    readonly prompt?: PromptProperty;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#redirect_uri CcConnectionType#redirect_uri}
    */
    readonly redirectUri?: RedirectUriProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method CcConnectionType#request_method}
    */
    readonly requestMethod?: string;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#scope CcConnectionType#scope}
    */
    readonly scope?: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url CcConnectionType#token_url}
    */
    readonly tokenUrl?: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url_parameters CcConnectionType#token_url_parameters}
    */
    readonly tokenUrlParameters?: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty[] | cdktn.IResolvable;
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
        if (this._authorizationCode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCode = this._authorizationCode?.internalValue;
        }
        if (this._authorizationCodeUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeUrl = this._authorizationCodeUrl?.internalValue;
        }
        if (this._clientId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId?.internalValue;
        }
        if (this._clientSecret?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret?.internalValue;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._prompt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.prompt = this._prompt?.internalValue;
        }
        if (this._redirectUri?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectUri = this._redirectUri?.internalValue;
        }
        if (this._requestMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestMethod = this._requestMethod;
        }
        if (this._scope?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope?.internalValue;
        }
        if (this._tokenUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl?.internalValue;
        }
        if (this._tokenUrlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrlParameters = this._tokenUrlParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationCodePropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCode.internalValue = undefined;
            this._authorizationCodeUrl.internalValue = undefined;
            this._clientId.internalValue = undefined;
            this._clientSecret.internalValue = undefined;
            this._contentType = undefined;
            this._prompt.internalValue = undefined;
            this._redirectUri.internalValue = undefined;
            this._requestMethod = undefined;
            this._scope.internalValue = undefined;
            this._tokenUrl.internalValue = undefined;
            this._tokenUrlParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCode.internalValue = value.authorizationCode;
            this._authorizationCodeUrl.internalValue = value.authorizationCodeUrl;
            this._clientId.internalValue = value.clientId;
            this._clientSecret.internalValue = value.clientSecret;
            this._contentType = value.contentType;
            this._prompt.internalValue = value.prompt;
            this._redirectUri.internalValue = value.redirectUri;
            this._requestMethod = value.requestMethod;
            this._scope.internalValue = value.scope;
            this._tokenUrl.internalValue = value.tokenUrl;
            this._tokenUrlParameters.internalValue = value.tokenUrlParameters;
        }
    }

    // authorization_code - computed: true, optional: true, required: false
    private _authorizationCode = new AuthorizationCodePropertyOutputReference(this, "authorization_code");
    public get authorizationCode() {
        return this._authorizationCode;
    }
    public putAuthorizationCode(value: AuthorizationCodeProperty) {
        this._authorizationCode.internalValue = value;
    }
    public resetAuthorizationCode() {
        this._authorizationCode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeInput() {
        return this._authorizationCode.internalValue;
    }

    // authorization_code_url - computed: true, optional: true, required: false
    private _authorizationCodeUrl = new AuthorizationCodeUrlPropertyOutputReference(this, "authorization_code_url");
    public get authorizationCodeUrl() {
        return this._authorizationCodeUrl;
    }
    public putAuthorizationCodeUrl(value: AuthorizationCodeUrlProperty) {
        this._authorizationCodeUrl.internalValue = value;
    }
    public resetAuthorizationCodeUrl() {
        this._authorizationCodeUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationCodeUrlInput() {
        return this._authorizationCodeUrl.internalValue;
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId = new ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdPropertyOutputReference(this, "client_id");
    public get clientId() {
        return this._clientId;
    }
    public putClientId(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientIdProperty) {
        this._clientId.internalValue = value;
    }
    public resetClientId() {
        this._clientId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId.internalValue;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret = new ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretPropertyOutputReference(this, "client_secret");
    public get clientSecret() {
        return this._clientSecret;
    }
    public putClientSecret(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesClientSecretProperty) {
        this._clientSecret.internalValue = value;
    }
    public resetClientSecret() {
        this._clientSecret.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret.internalValue;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // prompt - computed: true, optional: true, required: false
    private _prompt = new PromptPropertyOutputReference(this, "prompt");
    public get prompt() {
        return this._prompt;
    }
    public putPrompt(value: PromptProperty) {
        this._prompt.internalValue = value;
    }
    public resetPrompt() {
        this._prompt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promptInput() {
        return this._prompt.internalValue;
    }

    // redirect_uri - computed: true, optional: true, required: false
    private _redirectUri = new RedirectUriPropertyOutputReference(this, "redirect_uri");
    public get redirectUri() {
        return this._redirectUri;
    }
    public putRedirectUri(value: RedirectUriProperty) {
        this._redirectUri.internalValue = value;
    }
    public resetRedirectUri() {
        this._redirectUri.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUriInput() {
        return this._redirectUri.internalValue;
    }

    // request_method - computed: true, optional: true, required: false
    private _requestMethod?: string; 
    public get requestMethod() {
        return this.getStringAttribute('request_method');
    }
    public set requestMethod(value: string) {
        this._requestMethod = value;
    }
    public resetRequestMethod() {
        this._requestMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMethodInput() {
        return this._requestMethod;
    }

    // scope - computed: true, optional: true, required: false
    private _scope = new ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopePropertyOutputReference(this, "scope");
    public get scope() {
        return this._scope;
    }
    public putScope(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesScopeProperty) {
        this._scope.internalValue = value;
    }
    public resetScope() {
        this._scope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope.internalValue;
    }

    // token_url - computed: true, optional: true, required: false
    private _tokenUrl = new ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlPropertyOutputReference(this, "token_url");
    public get tokenUrl() {
        return this._tokenUrl;
    }
    public putTokenUrl(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlProperty) {
        this._tokenUrl.internalValue = value;
    }
    public resetTokenUrl() {
        this._tokenUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlInput() {
        return this._tokenUrl.internalValue;
    }

    // token_url_parameters - computed: true, optional: true, required: false
    private _tokenUrlParameters = new ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersPropertyList(this, "token_url_parameters", false);
    public get tokenUrlParameters() {
        return this._tokenUrlParameters;
    }
    public putTokenUrlParameters(value: ConnectorAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesTokenUrlParametersProperty[] | cdktn.IResolvable) {
        this._tokenUrlParameters.internalValue = value;
    }
    public resetTokenUrlParameters() {
        this._tokenUrlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlParametersInput() {
        return this._tokenUrlParameters.internalValue;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyOutputReference {
        return new ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClientCredentialsPropertiesProperty {
    /**
    * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_id CcConnectionType#client_id}
    */
    readonly clientId?: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty;
    /**
    * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_secret CcConnectionType#client_secret}
    */
    readonly clientSecret?: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_type CcConnectionType#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method CcConnectionType#request_method}
    */
    readonly requestMethod?: string;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#scope CcConnectionType#scope}
    */
    readonly scope?: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url CcConnectionType#token_url}
    */
    readonly tokenUrl?: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url_parameters CcConnectionType#token_url_parameters}
    */
    readonly tokenUrlParameters?: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty[] | cdktn.IResolvable;
}
export class ClientCredentialsPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClientCredentialsPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId?.internalValue;
        }
        if (this._clientSecret?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret?.internalValue;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._requestMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestMethod = this._requestMethod;
        }
        if (this._scope?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope?.internalValue;
        }
        if (this._tokenUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl?.internalValue;
        }
        if (this._tokenUrlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrlParameters = this._tokenUrlParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClientCredentialsPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId.internalValue = undefined;
            this._clientSecret.internalValue = undefined;
            this._contentType = undefined;
            this._requestMethod = undefined;
            this._scope.internalValue = undefined;
            this._tokenUrl.internalValue = undefined;
            this._tokenUrlParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId.internalValue = value.clientId;
            this._clientSecret.internalValue = value.clientSecret;
            this._contentType = value.contentType;
            this._requestMethod = value.requestMethod;
            this._scope.internalValue = value.scope;
            this._tokenUrl.internalValue = value.tokenUrl;
            this._tokenUrlParameters.internalValue = value.tokenUrlParameters;
        }
    }

    // client_id - computed: true, optional: true, required: false
    private _clientId = new ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdPropertyOutputReference(this, "client_id");
    public get clientId() {
        return this._clientId;
    }
    public putClientId(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientIdProperty) {
        this._clientId.internalValue = value;
    }
    public resetClientId() {
        this._clientId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId.internalValue;
    }

    // client_secret - computed: true, optional: true, required: false
    private _clientSecret = new ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretPropertyOutputReference(this, "client_secret");
    public get clientSecret() {
        return this._clientSecret;
    }
    public putClientSecret(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesClientSecretProperty) {
        this._clientSecret.internalValue = value;
    }
    public resetClientSecret() {
        this._clientSecret.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
        return this._clientSecret.internalValue;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // request_method - computed: true, optional: true, required: false
    private _requestMethod?: string; 
    public get requestMethod() {
        return this.getStringAttribute('request_method');
    }
    public set requestMethod(value: string) {
        this._requestMethod = value;
    }
    public resetRequestMethod() {
        this._requestMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMethodInput() {
        return this._requestMethod;
    }

    // scope - computed: true, optional: true, required: false
    private _scope = new ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopePropertyOutputReference(this, "scope");
    public get scope() {
        return this._scope;
    }
    public putScope(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesScopeProperty) {
        this._scope.internalValue = value;
    }
    public resetScope() {
        this._scope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope.internalValue;
    }

    // token_url - computed: true, optional: true, required: false
    private _tokenUrl = new ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlPropertyOutputReference(this, "token_url");
    public get tokenUrl() {
        return this._tokenUrl;
    }
    public putTokenUrl(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlProperty) {
        this._tokenUrl.internalValue = value;
    }
    public resetTokenUrl() {
        this._tokenUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlInput() {
        return this._tokenUrl.internalValue;
    }

    // token_url_parameters - computed: true, optional: true, required: false
    private _tokenUrlParameters = new ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersPropertyList(this, "token_url_parameters", false);
    public get tokenUrlParameters() {
        return this._tokenUrlParameters;
    }
    public putTokenUrlParameters(value: ConnectorAuthenticationConfigurationOAuth2PropertiesClientCredentialsPropertiesTokenUrlParametersProperty[] | cdktn.IResolvable) {
        this._tokenUrlParameters.internalValue = value;
    }
    public resetTokenUrlParameters() {
        this._tokenUrlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlParametersInput() {
        return this._tokenUrlParameters.internalValue;
    }
}
export interface JwtTokenProperty {
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property. Must be SECRET for secret properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class JwtTokenPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JwtTokenProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtTokenProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}
export interface ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyOutputReference {
        return new ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JwtBearerPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_type CcConnectionType#content_type}
    */
    readonly contentType?: string;
    /**
    * Defines a secret property configuration. SECRET-type properties cannot have DefaultValue or AllowedValues.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#jwt_token CcConnectionType#jwt_token}
    */
    readonly jwtToken?: JwtTokenProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method CcConnectionType#request_method}
    */
    readonly requestMethod?: string;
    /**
    * Defines a property configuration for connection types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url CcConnectionType#token_url}
    */
    readonly tokenUrl?: ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#token_url_parameters CcConnectionType#token_url_parameters}
    */
    readonly tokenUrlParameters?: ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty[] | cdktn.IResolvable;
}
export class JwtBearerPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JwtBearerPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._jwtToken?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtToken = this._jwtToken?.internalValue;
        }
        if (this._requestMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestMethod = this._requestMethod;
        }
        if (this._tokenUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrl = this._tokenUrl?.internalValue;
        }
        if (this._tokenUrlParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenUrlParameters = this._tokenUrlParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JwtBearerPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._jwtToken.internalValue = undefined;
            this._requestMethod = undefined;
            this._tokenUrl.internalValue = undefined;
            this._tokenUrlParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._jwtToken.internalValue = value.jwtToken;
            this._requestMethod = value.requestMethod;
            this._tokenUrl.internalValue = value.tokenUrl;
            this._tokenUrlParameters.internalValue = value.tokenUrlParameters;
        }
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // jwt_token - computed: true, optional: true, required: false
    private _jwtToken = new JwtTokenPropertyOutputReference(this, "jwt_token");
    public get jwtToken() {
        return this._jwtToken;
    }
    public putJwtToken(value: JwtTokenProperty) {
        this._jwtToken.internalValue = value;
    }
    public resetJwtToken() {
        this._jwtToken.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtTokenInput() {
        return this._jwtToken.internalValue;
    }

    // request_method - computed: true, optional: true, required: false
    private _requestMethod?: string; 
    public get requestMethod() {
        return this.getStringAttribute('request_method');
    }
    public set requestMethod(value: string) {
        this._requestMethod = value;
    }
    public resetRequestMethod() {
        this._requestMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMethodInput() {
        return this._requestMethod;
    }

    // token_url - computed: true, optional: true, required: false
    private _tokenUrl = new ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlPropertyOutputReference(this, "token_url");
    public get tokenUrl() {
        return this._tokenUrl;
    }
    public putTokenUrl(value: ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlProperty) {
        this._tokenUrl.internalValue = value;
    }
    public resetTokenUrl() {
        this._tokenUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlInput() {
        return this._tokenUrl.internalValue;
    }

    // token_url_parameters - computed: true, optional: true, required: false
    private _tokenUrlParameters = new ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersPropertyList(this, "token_url_parameters", false);
    public get tokenUrlParameters() {
        return this._tokenUrlParameters;
    }
    public putTokenUrlParameters(value: ConnectorAuthenticationConfigurationOAuth2PropertiesJwtBearerPropertiesTokenUrlParametersProperty[] | cdktn.IResolvable) {
        this._tokenUrlParameters.internalValue = value;
    }
    public resetTokenUrlParameters() {
        this._tokenUrlParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenUrlParametersInput() {
        return this._tokenUrlParameters.internalValue;
    }
}
export interface OAuth2PropertiesProperty {
    /**
    * OAuth2 authorization code configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authorization_code_properties CcConnectionType#authorization_code_properties}
    */
    readonly authorizationCodeProperties?: AuthorizationCodePropertiesProperty;
    /**
    * OAuth2 client credentials configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#client_credentials_properties CcConnectionType#client_credentials_properties}
    */
    readonly clientCredentialsProperties?: ClientCredentialsPropertiesProperty;
    /**
    * JWT bearer token configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#jwt_bearer_properties CcConnectionType#jwt_bearer_properties}
    */
    readonly jwtBearerProperties?: JwtBearerPropertiesProperty;
    /**
    * The OAuth2 grant type to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#o_auth_2_grant_type CcConnectionType#o_auth_2_grant_type}
    */
    readonly oAuth2GrantType?: string;
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
        if (this._authorizationCodeProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationCodeProperties = this._authorizationCodeProperties?.internalValue;
        }
        if (this._clientCredentialsProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCredentialsProperties = this._clientCredentialsProperties?.internalValue;
        }
        if (this._jwtBearerProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwtBearerProperties = this._jwtBearerProperties?.internalValue;
        }
        if (this._oAuth2GrantType !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2GrantType = this._oAuth2GrantType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OAuth2PropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationCodeProperties.internalValue = undefined;
            this._clientCredentialsProperties.internalValue = undefined;
            this._jwtBearerProperties.internalValue = undefined;
            this._oAuth2GrantType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationCodeProperties.internalValue = value.authorizationCodeProperties;
            this._clientCredentialsProperties.internalValue = value.clientCredentialsProperties;
            this._jwtBearerProperties.internalValue = value.jwtBearerProperties;
            this._oAuth2GrantType = value.oAuth2GrantType;
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

    // client_credentials_properties - computed: true, optional: true, required: false
    private _clientCredentialsProperties = new ClientCredentialsPropertiesPropertyOutputReference(this, "client_credentials_properties");
    public get clientCredentialsProperties() {
        return this._clientCredentialsProperties;
    }
    public putClientCredentialsProperties(value: ClientCredentialsPropertiesProperty) {
        this._clientCredentialsProperties.internalValue = value;
    }
    public resetClientCredentialsProperties() {
        this._clientCredentialsProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCredentialsPropertiesInput() {
        return this._clientCredentialsProperties.internalValue;
    }

    // jwt_bearer_properties - computed: true, optional: true, required: false
    private _jwtBearerProperties = new JwtBearerPropertiesPropertyOutputReference(this, "jwt_bearer_properties");
    public get jwtBearerProperties() {
        return this._jwtBearerProperties;
    }
    public putJwtBearerProperties(value: JwtBearerPropertiesProperty) {
        this._jwtBearerProperties.internalValue = value;
    }
    public resetJwtBearerProperties() {
        this._jwtBearerProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtBearerPropertiesInput() {
        return this._jwtBearerProperties.internalValue;
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
}
export interface ConnectorAuthenticationConfigurationProperty {
    /**
    * A list of authentication types supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#authentication_types CcConnectionType#authentication_types}
    */
    readonly authenticationTypes?: string[];
    /**
    * Basic authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#basic_authentication_properties CcConnectionType#basic_authentication_properties}
    */
    readonly basicAuthenticationProperties?: BasicAuthenticationPropertiesProperty;
    /**
    * Custom authentication configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#custom_authentication_properties CcConnectionType#custom_authentication_properties}
    */
    readonly customAuthenticationProperties?: CustomAuthenticationPropertiesProperty;
    /**
    * OAuth2 configuration container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#o_auth_2_properties CcConnectionType#o_auth_2_properties}
    */
    readonly oAuth2Properties?: OAuth2PropertiesProperty;
}
export class ConnectorAuthenticationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectorAuthenticationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationTypes = this._authenticationTypes;
        }
        if (this._basicAuthenticationProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuthenticationProperties = this._basicAuthenticationProperties?.internalValue;
        }
        if (this._customAuthenticationProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAuthenticationProperties = this._customAuthenticationProperties?.internalValue;
        }
        if (this._oAuth2Properties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.oAuth2Properties = this._oAuth2Properties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectorAuthenticationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationTypes = undefined;
            this._basicAuthenticationProperties.internalValue = undefined;
            this._customAuthenticationProperties.internalValue = undefined;
            this._oAuth2Properties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationTypes = value.authenticationTypes;
            this._basicAuthenticationProperties.internalValue = value.basicAuthenticationProperties;
            this._customAuthenticationProperties.internalValue = value.customAuthenticationProperties;
            this._oAuth2Properties.internalValue = value.oAuth2Properties;
        }
    }

    // authentication_types - computed: true, optional: true, required: false
    private _authenticationTypes?: string[]; 
    public get authenticationTypes() {
        return this.getListAttribute('authentication_types');
    }
    public set authenticationTypes(value: string[]) {
        this._authenticationTypes = value;
    }
    public resetAuthenticationTypes() {
        this._authenticationTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypesInput() {
        return this._authenticationTypes;
    }

    // basic_authentication_properties - computed: true, optional: true, required: false
    private _basicAuthenticationProperties = new BasicAuthenticationPropertiesPropertyOutputReference(this, "basic_authentication_properties");
    public get basicAuthenticationProperties() {
        return this._basicAuthenticationProperties;
    }
    public putBasicAuthenticationProperties(value: BasicAuthenticationPropertiesProperty) {
        this._basicAuthenticationProperties.internalValue = value;
    }
    public resetBasicAuthenticationProperties() {
        this._basicAuthenticationProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthenticationPropertiesInput() {
        return this._basicAuthenticationProperties.internalValue;
    }

    // custom_authentication_properties - computed: true, optional: true, required: false
    private _customAuthenticationProperties = new CustomAuthenticationPropertiesPropertyOutputReference(this, "custom_authentication_properties");
    public get customAuthenticationProperties() {
        return this._customAuthenticationProperties;
    }
    public putCustomAuthenticationProperties(value: CustomAuthenticationPropertiesProperty) {
        this._customAuthenticationProperties.internalValue = value;
    }
    public resetCustomAuthenticationProperties() {
        this._customAuthenticationProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAuthenticationPropertiesInput() {
        return this._customAuthenticationProperties.internalValue;
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
}
export interface RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty {
    /**
    * The parameter name used for the upper bound value in a BETWEEN filter operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#high_bound_key CcConnectionType#high_bound_key}
    */
    readonly highBoundKey?: string;
    /**
    * The parameter name used for the lower bound value in a BETWEEN filter operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#low_bound_key CcConnectionType#low_bound_key}
    */
    readonly lowBoundKey?: string;
    /**
    * A template string for constructing the BETWEEN filter expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#template CcConnectionType#template}
    */
    readonly template?: string;
}
export class RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._highBoundKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.highBoundKey = this._highBoundKey;
        }
        if (this._lowBoundKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.lowBoundKey = this._lowBoundKey;
        }
        if (this._template !== undefined) {
            hasAnyValues = true;
            internalValueResult.template = this._template;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._highBoundKey = undefined;
            this._lowBoundKey = undefined;
            this._template = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._highBoundKey = value.highBoundKey;
            this._lowBoundKey = value.lowBoundKey;
            this._template = value.template;
        }
    }

    // high_bound_key - computed: true, optional: true, required: false
    private _highBoundKey?: string; 
    public get highBoundKey() {
        return this.getStringAttribute('high_bound_key');
    }
    public set highBoundKey(value: string) {
        this._highBoundKey = value;
    }
    public resetHighBoundKey() {
        this._highBoundKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get highBoundKeyInput() {
        return this._highBoundKey;
    }

    // low_bound_key - computed: true, optional: true, required: false
    private _lowBoundKey?: string; 
    public get lowBoundKey() {
        return this.getStringAttribute('low_bound_key');
    }
    public set lowBoundKey(value: string) {
        this._lowBoundKey = value;
    }
    public resetLowBoundKey() {
        this._lowBoundKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowBoundKeyInput() {
        return this._lowBoundKey;
    }

    // template - computed: true, optional: true, required: false
    private _template?: string; 
    public get template() {
        return this.getStringAttribute('template');
    }
    public set template(value: string) {
        this._template = value;
    }
    public resetTemplate() {
        this._template = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateInput() {
        return this._template;
    }
}
export interface FilterOverridesProperty {
    /**
    * Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#between_configuration CcConnectionType#between_configuration}
    */
    readonly betweenConfiguration?: RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty;
    /**
    * The date and time format for filter expressions on this field, overriding the global DateTimeFormat.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#date_time_format CcConnectionType#date_time_format}
    */
    readonly dateTimeFormat?: string;
    /**
    * An override for the field name to use in filter expressions, if different from the schema field name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#field_name CcConnectionType#field_name}
    */
    readonly fieldName?: string;
    /**
    * A map of logical filter operators to their field-specific API representations, overriding the global operator mappings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#operator_mappings CcConnectionType#operator_mappings}
    */
    readonly operatorMappings?: { [key: string]: string };
}
export class FilterOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._betweenConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.betweenConfiguration = this._betweenConfiguration?.internalValue;
        }
        if (this._dateTimeFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateTimeFormat = this._dateTimeFormat;
        }
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._operatorMappings !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatorMappings = this._operatorMappings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._betweenConfiguration.internalValue = undefined;
            this._dateTimeFormat = undefined;
            this._fieldName = undefined;
            this._operatorMappings = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._betweenConfiguration.internalValue = value.betweenConfiguration;
            this._dateTimeFormat = value.dateTimeFormat;
            this._fieldName = value.fieldName;
            this._operatorMappings = value.operatorMappings;
        }
    }

    // between_configuration - computed: true, optional: true, required: false
    private _betweenConfiguration = new RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationPropertyOutputReference(this, "between_configuration");
    public get betweenConfiguration() {
        return this._betweenConfiguration;
    }
    public putBetweenConfiguration(value: RestConfigurationEntityConfigurationsSchemaFilterOverridesBetweenConfigurationProperty) {
        this._betweenConfiguration.internalValue = value;
    }
    public resetBetweenConfiguration() {
        this._betweenConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get betweenConfigurationInput() {
        return this._betweenConfiguration.internalValue;
    }

    // date_time_format - computed: true, optional: true, required: false
    private _dateTimeFormat?: string; 
    public get dateTimeFormat() {
        return this.getStringAttribute('date_time_format');
    }
    public set dateTimeFormat(value: string) {
        this._dateTimeFormat = value;
    }
    public resetDateTimeFormat() {
        this._dateTimeFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateTimeFormatInput() {
        return this._dateTimeFormat;
    }

    // field_name - computed: true, optional: true, required: false
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    public resetFieldName() {
        this._fieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // operator_mappings - computed: true, optional: true, required: false
    private _operatorMappings?: { [key: string]: string }; 
    public get operatorMappings() {
        return this.getStringMapAttribute('operator_mappings');
    }
    public set operatorMappings(value: { [key: string]: string }) {
        this._operatorMappings = value;
    }
    public resetOperatorMappings() {
        this._operatorMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorMappingsInput() {
        return this._operatorMappings;
    }
}
export interface SchemaProperty {
    /**
    * The data type of the field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#field_data_type CcConnectionType#field_data_type}
    */
    readonly fieldDataType?: string;
    /**
    * Configuration that defines per-field overrides for filter behavior, allowing individual fields to customize how filter operations are applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_overrides CcConnectionType#filter_overrides}
    */
    readonly filterOverrides?: FilterOverridesProperty;
    /**
    * Indicates whether this field can contain null values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_nullable CcConnectionType#is_nullable}
    */
    readonly isNullable?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether this field can be used for ordering results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_orderable CcConnectionType#is_orderable}
    */
    readonly isOrderable?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether this field can be used for partitioning queries to the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_partitionable CcConnectionType#is_partitionable}
    */
    readonly isPartitionable?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether this field can be used in filter predicates when querying data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#is_queryable CcConnectionType#is_queryable}
    */
    readonly isQueryable?: boolean | cdktn.IResolvable;
    /**
    * The name of the field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * The format pattern for parsing date values from API responses. Accepts Java DateTimeFormatter patterns, EPOCH_SECONDS, or EPOCH_MILLIS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#response_date_format CcConnectionType#response_date_format}
    */
    readonly responseDateFormat?: string;
}
export class SchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): SchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldDataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldDataType = this._fieldDataType;
        }
        if (this._filterOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterOverrides = this._filterOverrides?.internalValue;
        }
        if (this._isNullable !== undefined) {
            hasAnyValues = true;
            internalValueResult.isNullable = this._isNullable;
        }
        if (this._isOrderable !== undefined) {
            hasAnyValues = true;
            internalValueResult.isOrderable = this._isOrderable;
        }
        if (this._isPartitionable !== undefined) {
            hasAnyValues = true;
            internalValueResult.isPartitionable = this._isPartitionable;
        }
        if (this._isQueryable !== undefined) {
            hasAnyValues = true;
            internalValueResult.isQueryable = this._isQueryable;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._responseDateFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseDateFormat = this._responseDateFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldDataType = undefined;
            this._filterOverrides.internalValue = undefined;
            this._isNullable = undefined;
            this._isOrderable = undefined;
            this._isPartitionable = undefined;
            this._isQueryable = undefined;
            this._name = undefined;
            this._responseDateFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldDataType = value.fieldDataType;
            this._filterOverrides.internalValue = value.filterOverrides;
            this._isNullable = value.isNullable;
            this._isOrderable = value.isOrderable;
            this._isPartitionable = value.isPartitionable;
            this._isQueryable = value.isQueryable;
            this._name = value.name;
            this._responseDateFormat = value.responseDateFormat;
        }
    }

    // field_data_type - computed: true, optional: true, required: false
    private _fieldDataType?: string; 
    public get fieldDataType() {
        return this.getStringAttribute('field_data_type');
    }
    public set fieldDataType(value: string) {
        this._fieldDataType = value;
    }
    public resetFieldDataType() {
        this._fieldDataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldDataTypeInput() {
        return this._fieldDataType;
    }

    // filter_overrides - computed: true, optional: true, required: false
    private _filterOverrides = new FilterOverridesPropertyOutputReference(this, "filter_overrides");
    public get filterOverrides() {
        return this._filterOverrides;
    }
    public putFilterOverrides(value: FilterOverridesProperty) {
        this._filterOverrides.internalValue = value;
    }
    public resetFilterOverrides() {
        this._filterOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterOverridesInput() {
        return this._filterOverrides.internalValue;
    }

    // is_nullable - computed: true, optional: true, required: false
    private _isNullable?: boolean | cdktn.IResolvable; 
    public get isNullable() {
        return this.getBooleanAttribute('is_nullable');
    }
    public set isNullable(value: boolean | cdktn.IResolvable) {
        this._isNullable = value;
    }
    public resetIsNullable() {
        this._isNullable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isNullableInput() {
        return this._isNullable;
    }

    // is_orderable - computed: true, optional: true, required: false
    private _isOrderable?: boolean | cdktn.IResolvable; 
    public get isOrderable() {
        return this.getBooleanAttribute('is_orderable');
    }
    public set isOrderable(value: boolean | cdktn.IResolvable) {
        this._isOrderable = value;
    }
    public resetIsOrderable() {
        this._isOrderable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isOrderableInput() {
        return this._isOrderable;
    }

    // is_partitionable - computed: true, optional: true, required: false
    private _isPartitionable?: boolean | cdktn.IResolvable; 
    public get isPartitionable() {
        return this.getBooleanAttribute('is_partitionable');
    }
    public set isPartitionable(value: boolean | cdktn.IResolvable) {
        this._isPartitionable = value;
    }
    public resetIsPartitionable() {
        this._isPartitionable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isPartitionableInput() {
        return this._isPartitionable;
    }

    // is_queryable - computed: true, optional: true, required: false
    private _isQueryable?: boolean | cdktn.IResolvable; 
    public get isQueryable() {
        return this.getBooleanAttribute('is_queryable');
    }
    public set isQueryable(value: boolean | cdktn.IResolvable) {
        this._isQueryable = value;
    }
    public resetIsQueryable() {
        this._isQueryable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isQueryableInput() {
        return this._isQueryable;
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

    // response_date_format - computed: true, optional: true, required: false
    private _responseDateFormat?: string; 
    public get responseDateFormat() {
        return this.getStringAttribute('response_date_format');
    }
    public set responseDateFormat(value: string) {
        this._responseDateFormat = value;
    }
    public resetResponseDateFormat() {
        this._responseDateFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseDateFormatInput() {
        return this._responseDateFormat;
    }
}

export class SchemaPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: SchemaProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): SchemaPropertyOutputReference {
        return new SchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty {
    /**
    * The parameter name used for the upper bound value in a BETWEEN filter operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#high_bound_key CcConnectionType#high_bound_key}
    */
    readonly highBoundKey?: string;
    /**
    * The parameter name used for the lower bound value in a BETWEEN filter operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#low_bound_key CcConnectionType#low_bound_key}
    */
    readonly lowBoundKey?: string;
    /**
    * A template string for constructing the BETWEEN filter expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#template CcConnectionType#template}
    */
    readonly template?: string;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._highBoundKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.highBoundKey = this._highBoundKey;
        }
        if (this._lowBoundKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.lowBoundKey = this._lowBoundKey;
        }
        if (this._template !== undefined) {
            hasAnyValues = true;
            internalValueResult.template = this._template;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._highBoundKey = undefined;
            this._lowBoundKey = undefined;
            this._template = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._highBoundKey = value.highBoundKey;
            this._lowBoundKey = value.lowBoundKey;
            this._template = value.template;
        }
    }

    // high_bound_key - computed: true, optional: true, required: false
    private _highBoundKey?: string; 
    public get highBoundKey() {
        return this.getStringAttribute('high_bound_key');
    }
    public set highBoundKey(value: string) {
        this._highBoundKey = value;
    }
    public resetHighBoundKey() {
        this._highBoundKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get highBoundKeyInput() {
        return this._highBoundKey;
    }

    // low_bound_key - computed: true, optional: true, required: false
    private _lowBoundKey?: string; 
    public get lowBoundKey() {
        return this.getStringAttribute('low_bound_key');
    }
    public set lowBoundKey(value: string) {
        this._lowBoundKey = value;
    }
    public resetLowBoundKey() {
        this._lowBoundKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowBoundKeyInput() {
        return this._lowBoundKey;
    }

    // template - computed: true, optional: true, required: false
    private _template?: string; 
    public get template() {
        return this.getStringAttribute('template');
    }
    public set template(value: string) {
        this._template = value;
    }
    public resetTemplate() {
        this._template = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateInput() {
        return this._template;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty {
    /**
    * The query parameter name used to send the constructed filter expression string in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#query_parameter_name CcConnectionType#query_parameter_name}
    */
    readonly queryParameterName?: string;
    /**
    * The character used to quote values when QuoteStringValues is true. Defaults to double quotes if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_character CcConnectionType#quote_character}
    */
    readonly quoteCharacter?: string;
    /**
    * Indicates whether string and date values should be wrapped with a quote character in the filter expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_string_values CcConnectionType#quote_string_values}
    */
    readonly quoteStringValues?: boolean | cdktn.IResolvable;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queryParameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryParameterName = this._queryParameterName;
        }
        if (this._quoteCharacter !== undefined) {
            hasAnyValues = true;
            internalValueResult.quoteCharacter = this._quoteCharacter;
        }
        if (this._quoteStringValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.quoteStringValues = this._quoteStringValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queryParameterName = undefined;
            this._quoteCharacter = undefined;
            this._quoteStringValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queryParameterName = value.queryParameterName;
            this._quoteCharacter = value.quoteCharacter;
            this._quoteStringValues = value.quoteStringValues;
        }
    }

    // query_parameter_name - computed: true, optional: true, required: false
    private _queryParameterName?: string; 
    public get queryParameterName() {
        return this.getStringAttribute('query_parameter_name');
    }
    public set queryParameterName(value: string) {
        this._queryParameterName = value;
    }
    public resetQueryParameterName() {
        this._queryParameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryParameterNameInput() {
        return this._queryParameterName;
    }

    // quote_character - computed: true, optional: true, required: false
    private _quoteCharacter?: string; 
    public get quoteCharacter() {
        return this.getStringAttribute('quote_character');
    }
    public set quoteCharacter(value: string) {
        this._quoteCharacter = value;
    }
    public resetQuoteCharacter() {
        this._quoteCharacter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quoteCharacterInput() {
        return this._quoteCharacter;
    }

    // quote_string_values - computed: true, optional: true, required: false
    private _quoteStringValues?: boolean | cdktn.IResolvable; 
    public get quoteStringValues() {
        return this.getBooleanAttribute('quote_string_values');
    }
    public set quoteStringValues(value: boolean | cdktn.IResolvable) {
        this._quoteStringValues = value;
    }
    public resetQuoteStringValues() {
        this._quoteStringValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quoteStringValuesInput() {
        return this._quoteStringValues;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty {
    /**
    * Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#between_configuration CcConnectionType#between_configuration}
    */
    readonly betweenConfiguration?: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty;
    /**
    * The global date and time format for filter expressions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#date_time_format CcConnectionType#date_time_format}
    */
    readonly dateTimeFormat?: string;
    /**
    * The strategy for applying filters to requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_mode CcConnectionType#filter_mode}
    */
    readonly filterMode?: string;
    /**
    * Configuration for constructing filter expression strings when using the FILTER_STRING filter mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_string_configuration CcConnectionType#filter_string_configuration}
    */
    readonly filterStringConfiguration?: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty;
    /**
    * A map of logical filter operators to their API-specific string representations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#operator_mappings CcConnectionType#operator_mappings}
    */
    readonly operatorMappings?: { [key: string]: string };
    /**
    * Indicates whether surrounding double quotes should be stripped from filter values before processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#strip_quotes CcConnectionType#strip_quotes}
    */
    readonly stripQuotes?: boolean | cdktn.IResolvable;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._betweenConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.betweenConfiguration = this._betweenConfiguration?.internalValue;
        }
        if (this._dateTimeFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateTimeFormat = this._dateTimeFormat;
        }
        if (this._filterMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterMode = this._filterMode;
        }
        if (this._filterStringConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterStringConfiguration = this._filterStringConfiguration?.internalValue;
        }
        if (this._operatorMappings !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatorMappings = this._operatorMappings;
        }
        if (this._stripQuotes !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripQuotes = this._stripQuotes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._betweenConfiguration.internalValue = undefined;
            this._dateTimeFormat = undefined;
            this._filterMode = undefined;
            this._filterStringConfiguration.internalValue = undefined;
            this._operatorMappings = undefined;
            this._stripQuotes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._betweenConfiguration.internalValue = value.betweenConfiguration;
            this._dateTimeFormat = value.dateTimeFormat;
            this._filterMode = value.filterMode;
            this._filterStringConfiguration.internalValue = value.filterStringConfiguration;
            this._operatorMappings = value.operatorMappings;
            this._stripQuotes = value.stripQuotes;
        }
    }

    // between_configuration - computed: true, optional: true, required: false
    private _betweenConfiguration = new RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationPropertyOutputReference(this, "between_configuration");
    public get betweenConfiguration() {
        return this._betweenConfiguration;
    }
    public putBetweenConfiguration(value: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationBetweenConfigurationProperty) {
        this._betweenConfiguration.internalValue = value;
    }
    public resetBetweenConfiguration() {
        this._betweenConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get betweenConfigurationInput() {
        return this._betweenConfiguration.internalValue;
    }

    // date_time_format - computed: true, optional: true, required: false
    private _dateTimeFormat?: string; 
    public get dateTimeFormat() {
        return this.getStringAttribute('date_time_format');
    }
    public set dateTimeFormat(value: string) {
        this._dateTimeFormat = value;
    }
    public resetDateTimeFormat() {
        this._dateTimeFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateTimeFormatInput() {
        return this._dateTimeFormat;
    }

    // filter_mode - computed: true, optional: true, required: false
    private _filterMode?: string; 
    public get filterMode() {
        return this.getStringAttribute('filter_mode');
    }
    public set filterMode(value: string) {
        this._filterMode = value;
    }
    public resetFilterMode() {
        this._filterMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterModeInput() {
        return this._filterMode;
    }

    // filter_string_configuration - computed: true, optional: true, required: false
    private _filterStringConfiguration = new RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyOutputReference(this, "filter_string_configuration");
    public get filterStringConfiguration() {
        return this._filterStringConfiguration;
    }
    public putFilterStringConfiguration(value: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationFilterStringConfigurationProperty) {
        this._filterStringConfiguration.internalValue = value;
    }
    public resetFilterStringConfiguration() {
        this._filterStringConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterStringConfigurationInput() {
        return this._filterStringConfiguration.internalValue;
    }

    // operator_mappings - computed: true, optional: true, required: false
    private _operatorMappings?: { [key: string]: string }; 
    public get operatorMappings() {
        return this.getStringMapAttribute('operator_mappings');
    }
    public set operatorMappings(value: { [key: string]: string }) {
        this._operatorMappings = value;
    }
    public resetOperatorMappings() {
        this._operatorMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorMappingsInput() {
        return this._operatorMappings;
    }

    // strip_quotes - computed: true, optional: true, required: false
    private _stripQuotes?: boolean | cdktn.IResolvable; 
    public get stripQuotes() {
        return this.getBooleanAttribute('strip_quotes');
    }
    public set stripQuotes(value: boolean | cdktn.IResolvable) {
        this._stripQuotes = value;
    }
    public resetStripQuotes() {
        this._stripQuotes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stripQuotesInput() {
        return this._stripQuotes;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty {
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter CcConnectionType#limit_parameter}
    */
    readonly limitParameter?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty;
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#next_page CcConnectionType#next_page}
    */
    readonly nextPage?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._limitParameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limitParameter = this._limitParameter?.internalValue;
        }
        if (this._nextPage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nextPage = this._nextPage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = undefined;
            this._nextPage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = value.limitParameter;
            this._nextPage.internalValue = value.nextPage;
        }
    }

    // limit_parameter - computed: true, optional: true, required: false
    private _limitParameter = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyOutputReference(this, "limit_parameter");
    public get limitParameter() {
        return this._limitParameter;
    }
    public putLimitParameter(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty) {
        this._limitParameter.internalValue = value;
    }
    public resetLimitParameter() {
        this._limitParameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitParameterInput() {
        return this._limitParameter.internalValue;
    }

    // next_page - computed: true, optional: true, required: false
    private _nextPage = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyOutputReference(this, "next_page");
    public get nextPage() {
        return this._nextPage;
    }
    public putNextPage(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty) {
        this._nextPage.internalValue = value;
    }
    public resetNextPage() {
        this._nextPage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nextPageInput() {
        return this._nextPage.internalValue;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty {
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter CcConnectionType#limit_parameter}
    */
    readonly limitParameter?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty;
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_parameter CcConnectionType#offset_parameter}
    */
    readonly offsetParameter?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._limitParameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limitParameter = this._limitParameter?.internalValue;
        }
        if (this._offsetParameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetParameter = this._offsetParameter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = undefined;
            this._offsetParameter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = value.limitParameter;
            this._offsetParameter.internalValue = value.offsetParameter;
        }
    }

    // limit_parameter - computed: true, optional: true, required: false
    private _limitParameter = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyOutputReference(this, "limit_parameter");
    public get limitParameter() {
        return this._limitParameter;
    }
    public putLimitParameter(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty) {
        this._limitParameter.internalValue = value;
    }
    public resetLimitParameter() {
        this._limitParameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitParameterInput() {
        return this._limitParameter.internalValue;
    }

    // offset_parameter - computed: true, optional: true, required: false
    private _offsetParameter = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyOutputReference(this, "offset_parameter");
    public get offsetParameter() {
        return this._offsetParameter;
    }
    public putOffsetParameter(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty) {
        this._offsetParameter.internalValue = value;
    }
    public resetOffsetParameter() {
        this._offsetParameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetParameterInput() {
        return this._offsetParameter.internalValue;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty {
    /**
    * Cursor-based pagination configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#cursor_configuration CcConnectionType#cursor_configuration}
    */
    readonly cursorConfiguration?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty;
    /**
    * Offset-based pagination configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_configuration CcConnectionType#offset_configuration}
    */
    readonly offsetConfiguration?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cursorConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cursorConfiguration = this._cursorConfiguration?.internalValue;
        }
        if (this._offsetConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetConfiguration = this._offsetConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cursorConfiguration.internalValue = undefined;
            this._offsetConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cursorConfiguration.internalValue = value.cursorConfiguration;
            this._offsetConfiguration.internalValue = value.offsetConfiguration;
        }
    }

    // cursor_configuration - computed: true, optional: true, required: false
    private _cursorConfiguration = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationPropertyOutputReference(this, "cursor_configuration");
    public get cursorConfiguration() {
        return this._cursorConfiguration;
    }
    public putCursorConfiguration(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationCursorConfigurationProperty) {
        this._cursorConfiguration.internalValue = value;
    }
    public resetCursorConfiguration() {
        this._cursorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cursorConfigurationInput() {
        return this._cursorConfiguration.internalValue;
    }

    // offset_configuration - computed: true, optional: true, required: false
    private _offsetConfiguration = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyOutputReference(this, "offset_configuration");
    public get offsetConfiguration() {
        return this._offsetConfiguration;
    }
    public putOffsetConfiguration(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationOffsetConfigurationProperty) {
        this._offsetConfiguration.internalValue = value;
    }
    public resetOffsetConfiguration() {
        this._offsetConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetConfigurationInput() {
        return this._offsetConfiguration.internalValue;
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyOutputReference {
        return new RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty {
    /**
    * JSON path expression for error information location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#error_path CcConnectionType#error_path}
    */
    readonly errorPath?: string;
    /**
    * JSON path expression for result data location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#result_path CcConnectionType#result_path}
    */
    readonly resultPath?: string;
}
export class RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorPath = this._errorPath;
        }
        if (this._resultPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.resultPath = this._resultPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorPath = undefined;
            this._resultPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorPath = value.errorPath;
            this._resultPath = value.resultPath;
        }
    }

    // error_path - computed: true, optional: true, required: false
    private _errorPath?: string; 
    public get errorPath() {
        return this.getStringAttribute('error_path');
    }
    public set errorPath(value: string) {
        this._errorPath = value;
    }
    public resetErrorPath() {
        this._errorPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorPathInput() {
        return this._errorPath;
    }

    // result_path - computed: true, optional: true, required: false
    private _resultPath?: string; 
    public get resultPath() {
        return this.getStringAttribute('result_path');
    }
    public set resultPath(value: string) {
        this._resultPath = value;
    }
    public resetResultPath() {
        this._resultPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultPathInput() {
        return this._resultPath;
    }
}
export interface SourceConfigurationProperty {
    /**
    * Configuration that defines how filter predicates are applied to REST API requests, supporting both query parameter and filter string strategies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_configuration CcConnectionType#filter_configuration}
    */
    readonly filterConfiguration?: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty;
    /**
    * Configuration for handling paginated responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#pagination_configuration CcConnectionType#pagination_configuration}
    */
    readonly paginationConfiguration?: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty;
    /**
    * The HTTP method to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method CcConnectionType#request_method}
    */
    readonly requestMethod?: string;
    /**
    * Request parameters configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_parameters CcConnectionType#request_parameters}
    */
    readonly requestParameters?: RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty[] | cdktn.IResolvable;
    /**
    * The URL path for the REST endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_path CcConnectionType#request_path}
    */
    readonly requestPath?: string;
    /**
    * Configuration for parsing JSON responses from REST API calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#response_configuration CcConnectionType#response_configuration}
    */
    readonly responseConfiguration?: RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty;
}
export class SourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        if (this._paginationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.paginationConfiguration = this._paginationConfiguration?.internalValue;
        }
        if (this._requestMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestMethod = this._requestMethod;
        }
        if (this._requestParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestParameters = this._requestParameters?.internalValue;
        }
        if (this._requestPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestPath = this._requestPath;
        }
        if (this._responseConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseConfiguration = this._responseConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = undefined;
            this._paginationConfiguration.internalValue = undefined;
            this._requestMethod = undefined;
            this._requestParameters.internalValue = undefined;
            this._requestPath = undefined;
            this._responseConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = value.filterConfiguration;
            this._paginationConfiguration.internalValue = value.paginationConfiguration;
            this._requestMethod = value.requestMethod;
            this._requestParameters.internalValue = value.requestParameters;
            this._requestPath = value.requestPath;
            this._responseConfiguration.internalValue = value.responseConfiguration;
        }
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: RestConfigurationEntityConfigurationsSourceConfigurationFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // pagination_configuration - computed: true, optional: true, required: false
    private _paginationConfiguration = new RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationPropertyOutputReference(this, "pagination_configuration");
    public get paginationConfiguration() {
        return this._paginationConfiguration;
    }
    public putPaginationConfiguration(value: RestConfigurationEntityConfigurationsSourceConfigurationPaginationConfigurationProperty) {
        this._paginationConfiguration.internalValue = value;
    }
    public resetPaginationConfiguration() {
        this._paginationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paginationConfigurationInput() {
        return this._paginationConfiguration.internalValue;
    }

    // request_method - computed: true, optional: true, required: false
    private _requestMethod?: string; 
    public get requestMethod() {
        return this.getStringAttribute('request_method');
    }
    public set requestMethod(value: string) {
        this._requestMethod = value;
    }
    public resetRequestMethod() {
        this._requestMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMethodInput() {
        return this._requestMethod;
    }

    // request_parameters - computed: true, optional: true, required: false
    private _requestParameters = new RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersPropertyList(this, "request_parameters", false);
    public get requestParameters() {
        return this._requestParameters;
    }
    public putRequestParameters(value: RestConfigurationEntityConfigurationsSourceConfigurationRequestParametersProperty[] | cdktn.IResolvable) {
        this._requestParameters.internalValue = value;
    }
    public resetRequestParameters() {
        this._requestParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParametersInput() {
        return this._requestParameters.internalValue;
    }

    // request_path - computed: true, optional: true, required: false
    private _requestPath?: string; 
    public get requestPath() {
        return this.getStringAttribute('request_path');
    }
    public set requestPath(value: string) {
        this._requestPath = value;
    }
    public resetRequestPath() {
        this._requestPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestPathInput() {
        return this._requestPath;
    }

    // response_configuration - computed: true, optional: true, required: false
    private _responseConfiguration = new RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationPropertyOutputReference(this, "response_configuration");
    public get responseConfiguration() {
        return this._responseConfiguration;
    }
    public putResponseConfiguration(value: RestConfigurationEntityConfigurationsSourceConfigurationResponseConfigurationProperty) {
        this._responseConfiguration.internalValue = value;
    }
    public resetResponseConfiguration() {
        this._responseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseConfigurationInput() {
        return this._responseConfiguration.internalValue;
    }
}
export interface EntityConfigurationsProperty {
    /**
    * The schema definition for this entity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#schema CcConnectionType#schema}
    */
    readonly schema?: { [key: string]: SchemaProperty } | cdktn.IResolvable;
    /**
    * Configuration that defines how to make requests to endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#source_configuration CcConnectionType#source_configuration}
    */
    readonly sourceConfiguration?: SourceConfigurationProperty;
}
export class EntityConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): EntityConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._schema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema?.internalValue;
        }
        if (this._sourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntityConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._schema.internalValue = undefined;
            this._sourceConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._schema.internalValue = value.schema;
            this._sourceConfiguration.internalValue = value.sourceConfiguration;
        }
    }

    // schema - computed: true, optional: true, required: false
    private _schema = new SchemaPropertyMap(this, "schema");
    public get schema() {
        return this._schema;
    }
    public putSchema(value: { [key: string]: SchemaProperty } | cdktn.IResolvable) {
        this._schema.internalValue = value;
    }
    public resetSchema() {
        this._schema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema.internalValue;
    }

    // source_configuration - computed: true, optional: true, required: false
    private _sourceConfiguration = new SourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: SourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    public resetSourceConfiguration() {
        this._sourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }
}

export class EntityConfigurationsPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: EntityConfigurationsProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): EntityConfigurationsPropertyOutputReference {
        return new EntityConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty {
    /**
    * The parameter name used for the upper bound value in a BETWEEN filter operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#high_bound_key CcConnectionType#high_bound_key}
    */
    readonly highBoundKey?: string;
    /**
    * The parameter name used for the lower bound value in a BETWEEN filter operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#low_bound_key CcConnectionType#low_bound_key}
    */
    readonly lowBoundKey?: string;
    /**
    * A template string for constructing the BETWEEN filter expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#template CcConnectionType#template}
    */
    readonly template?: string;
}
export class RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._highBoundKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.highBoundKey = this._highBoundKey;
        }
        if (this._lowBoundKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.lowBoundKey = this._lowBoundKey;
        }
        if (this._template !== undefined) {
            hasAnyValues = true;
            internalValueResult.template = this._template;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._highBoundKey = undefined;
            this._lowBoundKey = undefined;
            this._template = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._highBoundKey = value.highBoundKey;
            this._lowBoundKey = value.lowBoundKey;
            this._template = value.template;
        }
    }

    // high_bound_key - computed: true, optional: true, required: false
    private _highBoundKey?: string; 
    public get highBoundKey() {
        return this.getStringAttribute('high_bound_key');
    }
    public set highBoundKey(value: string) {
        this._highBoundKey = value;
    }
    public resetHighBoundKey() {
        this._highBoundKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get highBoundKeyInput() {
        return this._highBoundKey;
    }

    // low_bound_key - computed: true, optional: true, required: false
    private _lowBoundKey?: string; 
    public get lowBoundKey() {
        return this.getStringAttribute('low_bound_key');
    }
    public set lowBoundKey(value: string) {
        this._lowBoundKey = value;
    }
    public resetLowBoundKey() {
        this._lowBoundKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowBoundKeyInput() {
        return this._lowBoundKey;
    }

    // template - computed: true, optional: true, required: false
    private _template?: string; 
    public get template() {
        return this.getStringAttribute('template');
    }
    public set template(value: string) {
        this._template = value;
    }
    public resetTemplate() {
        this._template = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateInput() {
        return this._template;
    }
}
export interface RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty {
    /**
    * The query parameter name used to send the constructed filter expression string in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#query_parameter_name CcConnectionType#query_parameter_name}
    */
    readonly queryParameterName?: string;
    /**
    * The character used to quote values when QuoteStringValues is true. Defaults to double quotes if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_character CcConnectionType#quote_character}
    */
    readonly quoteCharacter?: string;
    /**
    * Indicates whether string and date values should be wrapped with a quote character in the filter expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#quote_string_values CcConnectionType#quote_string_values}
    */
    readonly quoteStringValues?: boolean | cdktn.IResolvable;
}
export class RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queryParameterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryParameterName = this._queryParameterName;
        }
        if (this._quoteCharacter !== undefined) {
            hasAnyValues = true;
            internalValueResult.quoteCharacter = this._quoteCharacter;
        }
        if (this._quoteStringValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.quoteStringValues = this._quoteStringValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queryParameterName = undefined;
            this._quoteCharacter = undefined;
            this._quoteStringValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queryParameterName = value.queryParameterName;
            this._quoteCharacter = value.quoteCharacter;
            this._quoteStringValues = value.quoteStringValues;
        }
    }

    // query_parameter_name - computed: true, optional: true, required: false
    private _queryParameterName?: string; 
    public get queryParameterName() {
        return this.getStringAttribute('query_parameter_name');
    }
    public set queryParameterName(value: string) {
        this._queryParameterName = value;
    }
    public resetQueryParameterName() {
        this._queryParameterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryParameterNameInput() {
        return this._queryParameterName;
    }

    // quote_character - computed: true, optional: true, required: false
    private _quoteCharacter?: string; 
    public get quoteCharacter() {
        return this.getStringAttribute('quote_character');
    }
    public set quoteCharacter(value: string) {
        this._quoteCharacter = value;
    }
    public resetQuoteCharacter() {
        this._quoteCharacter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quoteCharacterInput() {
        return this._quoteCharacter;
    }

    // quote_string_values - computed: true, optional: true, required: false
    private _quoteStringValues?: boolean | cdktn.IResolvable; 
    public get quoteStringValues() {
        return this.getBooleanAttribute('quote_string_values');
    }
    public set quoteStringValues(value: boolean | cdktn.IResolvable) {
        this._quoteStringValues = value;
    }
    public resetQuoteStringValues() {
        this._quoteStringValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quoteStringValuesInput() {
        return this._quoteStringValues;
    }
}
export interface RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty {
    /**
    * Configuration that defines how BETWEEN range filter operations are translated into REST API request parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#between_configuration CcConnectionType#between_configuration}
    */
    readonly betweenConfiguration?: RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty;
    /**
    * The global date and time format for filter expressions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#date_time_format CcConnectionType#date_time_format}
    */
    readonly dateTimeFormat?: string;
    /**
    * The strategy for applying filters to requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_mode CcConnectionType#filter_mode}
    */
    readonly filterMode?: string;
    /**
    * Configuration for constructing filter expression strings when using the FILTER_STRING filter mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_string_configuration CcConnectionType#filter_string_configuration}
    */
    readonly filterStringConfiguration?: RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty;
    /**
    * A map of logical filter operators to their API-specific string representations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#operator_mappings CcConnectionType#operator_mappings}
    */
    readonly operatorMappings?: { [key: string]: string };
    /**
    * Indicates whether surrounding double quotes should be stripped from filter values before processing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#strip_quotes CcConnectionType#strip_quotes}
    */
    readonly stripQuotes?: boolean | cdktn.IResolvable;
}
export class RestConfigurationGlobalSourceConfigurationFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._betweenConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.betweenConfiguration = this._betweenConfiguration?.internalValue;
        }
        if (this._dateTimeFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateTimeFormat = this._dateTimeFormat;
        }
        if (this._filterMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterMode = this._filterMode;
        }
        if (this._filterStringConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterStringConfiguration = this._filterStringConfiguration?.internalValue;
        }
        if (this._operatorMappings !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatorMappings = this._operatorMappings;
        }
        if (this._stripQuotes !== undefined) {
            hasAnyValues = true;
            internalValueResult.stripQuotes = this._stripQuotes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._betweenConfiguration.internalValue = undefined;
            this._dateTimeFormat = undefined;
            this._filterMode = undefined;
            this._filterStringConfiguration.internalValue = undefined;
            this._operatorMappings = undefined;
            this._stripQuotes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._betweenConfiguration.internalValue = value.betweenConfiguration;
            this._dateTimeFormat = value.dateTimeFormat;
            this._filterMode = value.filterMode;
            this._filterStringConfiguration.internalValue = value.filterStringConfiguration;
            this._operatorMappings = value.operatorMappings;
            this._stripQuotes = value.stripQuotes;
        }
    }

    // between_configuration - computed: true, optional: true, required: false
    private _betweenConfiguration = new RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationPropertyOutputReference(this, "between_configuration");
    public get betweenConfiguration() {
        return this._betweenConfiguration;
    }
    public putBetweenConfiguration(value: RestConfigurationGlobalSourceConfigurationFilterConfigurationBetweenConfigurationProperty) {
        this._betweenConfiguration.internalValue = value;
    }
    public resetBetweenConfiguration() {
        this._betweenConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get betweenConfigurationInput() {
        return this._betweenConfiguration.internalValue;
    }

    // date_time_format - computed: true, optional: true, required: false
    private _dateTimeFormat?: string; 
    public get dateTimeFormat() {
        return this.getStringAttribute('date_time_format');
    }
    public set dateTimeFormat(value: string) {
        this._dateTimeFormat = value;
    }
    public resetDateTimeFormat() {
        this._dateTimeFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateTimeFormatInput() {
        return this._dateTimeFormat;
    }

    // filter_mode - computed: true, optional: true, required: false
    private _filterMode?: string; 
    public get filterMode() {
        return this.getStringAttribute('filter_mode');
    }
    public set filterMode(value: string) {
        this._filterMode = value;
    }
    public resetFilterMode() {
        this._filterMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterModeInput() {
        return this._filterMode;
    }

    // filter_string_configuration - computed: true, optional: true, required: false
    private _filterStringConfiguration = new RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationPropertyOutputReference(this, "filter_string_configuration");
    public get filterStringConfiguration() {
        return this._filterStringConfiguration;
    }
    public putFilterStringConfiguration(value: RestConfigurationGlobalSourceConfigurationFilterConfigurationFilterStringConfigurationProperty) {
        this._filterStringConfiguration.internalValue = value;
    }
    public resetFilterStringConfiguration() {
        this._filterStringConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterStringConfigurationInput() {
        return this._filterStringConfiguration.internalValue;
    }

    // operator_mappings - computed: true, optional: true, required: false
    private _operatorMappings?: { [key: string]: string }; 
    public get operatorMappings() {
        return this.getStringMapAttribute('operator_mappings');
    }
    public set operatorMappings(value: { [key: string]: string }) {
        this._operatorMappings = value;
    }
    public resetOperatorMappings() {
        this._operatorMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorMappingsInput() {
        return this._operatorMappings;
    }

    // strip_quotes - computed: true, optional: true, required: false
    private _stripQuotes?: boolean | cdktn.IResolvable; 
    public get stripQuotes() {
        return this.getBooleanAttribute('strip_quotes');
    }
    public set stripQuotes(value: boolean | cdktn.IResolvable) {
        this._stripQuotes = value;
    }
    public resetStripQuotes() {
        this._stripQuotes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stripQuotesInput() {
        return this._stripQuotes;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty {
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter CcConnectionType#limit_parameter}
    */
    readonly limitParameter?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty;
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#next_page CcConnectionType#next_page}
    */
    readonly nextPage?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._limitParameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limitParameter = this._limitParameter?.internalValue;
        }
        if (this._nextPage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.nextPage = this._nextPage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = undefined;
            this._nextPage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = value.limitParameter;
            this._nextPage.internalValue = value.nextPage;
        }
    }

    // limit_parameter - computed: true, optional: true, required: false
    private _limitParameter = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterPropertyOutputReference(this, "limit_parameter");
    public get limitParameter() {
        return this._limitParameter;
    }
    public putLimitParameter(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationLimitParameterProperty) {
        this._limitParameter.internalValue = value;
    }
    public resetLimitParameter() {
        this._limitParameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitParameterInput() {
        return this._limitParameter.internalValue;
    }

    // next_page - computed: true, optional: true, required: false
    private _nextPage = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPagePropertyOutputReference(this, "next_page");
    public get nextPage() {
        return this._nextPage;
    }
    public putNextPage(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationNextPageProperty) {
        this._nextPage.internalValue = value;
    }
    public resetNextPage() {
        this._nextPage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nextPageInput() {
        return this._nextPage.internalValue;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty {
    /**
    * A JSON path expression to extract a value from response body.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#content_path CcConnectionType#content_path}
    */
    readonly contentPath?: string;
    /**
    * The name of an HTTP response header from which to extract the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#header_key CcConnectionType#header_key}
    */
    readonly headerKey?: string;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentPath = this._contentPath;
        }
        if (this._headerKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerKey = this._headerKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentPath = undefined;
            this._headerKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentPath = value.contentPath;
            this._headerKey = value.headerKey;
        }
    }

    // content_path - computed: true, optional: true, required: false
    private _contentPath?: string; 
    public get contentPath() {
        return this.getStringAttribute('content_path');
    }
    public set contentPath(value: string) {
        this._contentPath = value;
    }
    public resetContentPath() {
        this._contentPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentPathInput() {
        return this._contentPath;
    }

    // header_key - computed: true, optional: true, required: false
    private _headerKey?: string; 
    public get headerKey() {
        return this.getStringAttribute('header_key');
    }
    public set headerKey(value: string) {
        this._headerKey = value;
    }
    public resetHeaderKey() {
        this._headerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerKeyInput() {
        return this._headerKey;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty {
    /**
    * The default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The parameter key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Specifies where to place the parameter in requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * Defines how to extract values from HTTP responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
    */
    readonly value?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._key = undefined;
            this._propertyLocation = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._key = value.key;
            this._propertyLocation = value.propertyLocation;
            this._value.internalValue = value.value;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // value - computed: true, optional: true, required: false
    private _value = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty {
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#limit_parameter CcConnectionType#limit_parameter}
    */
    readonly limitParameter?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty;
    /**
    * Parameter extraction configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_parameter CcConnectionType#offset_parameter}
    */
    readonly offsetParameter?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._limitParameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limitParameter = this._limitParameter?.internalValue;
        }
        if (this._offsetParameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetParameter = this._offsetParameter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = undefined;
            this._offsetParameter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limitParameter.internalValue = value.limitParameter;
            this._offsetParameter.internalValue = value.offsetParameter;
        }
    }

    // limit_parameter - computed: true, optional: true, required: false
    private _limitParameter = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterPropertyOutputReference(this, "limit_parameter");
    public get limitParameter() {
        return this._limitParameter;
    }
    public putLimitParameter(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationLimitParameterProperty) {
        this._limitParameter.internalValue = value;
    }
    public resetLimitParameter() {
        this._limitParameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitParameterInput() {
        return this._limitParameter.internalValue;
    }

    // offset_parameter - computed: true, optional: true, required: false
    private _offsetParameter = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterPropertyOutputReference(this, "offset_parameter");
    public get offsetParameter() {
        return this._offsetParameter;
    }
    public putOffsetParameter(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationOffsetParameterProperty) {
        this._offsetParameter.internalValue = value;
    }
    public resetOffsetParameter() {
        this._offsetParameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetParameterInput() {
        return this._offsetParameter.internalValue;
    }
}
export interface RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty {
    /**
    * Cursor-based pagination configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#cursor_configuration CcConnectionType#cursor_configuration}
    */
    readonly cursorConfiguration?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty;
    /**
    * Offset-based pagination configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#offset_configuration CcConnectionType#offset_configuration}
    */
    readonly offsetConfiguration?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty;
}
export class RestConfigurationGlobalSourceConfigurationPaginationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cursorConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cursorConfiguration = this._cursorConfiguration?.internalValue;
        }
        if (this._offsetConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetConfiguration = this._offsetConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cursorConfiguration.internalValue = undefined;
            this._offsetConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cursorConfiguration.internalValue = value.cursorConfiguration;
            this._offsetConfiguration.internalValue = value.offsetConfiguration;
        }
    }

    // cursor_configuration - computed: true, optional: true, required: false
    private _cursorConfiguration = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationPropertyOutputReference(this, "cursor_configuration");
    public get cursorConfiguration() {
        return this._cursorConfiguration;
    }
    public putCursorConfiguration(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationCursorConfigurationProperty) {
        this._cursorConfiguration.internalValue = value;
    }
    public resetCursorConfiguration() {
        this._cursorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cursorConfigurationInput() {
        return this._cursorConfiguration.internalValue;
    }

    // offset_configuration - computed: true, optional: true, required: false
    private _offsetConfiguration = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationPropertyOutputReference(this, "offset_configuration");
    public get offsetConfiguration() {
        return this._offsetConfiguration;
    }
    public putOffsetConfiguration(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationOffsetConfigurationProperty) {
        this._offsetConfiguration.internalValue = value;
    }
    public resetOffsetConfiguration() {
        this._offsetConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetConfigurationInput() {
        return this._offsetConfiguration.internalValue;
    }
}
export interface RestConfigurationGlobalSourceConfigurationRequestParametersProperty {
    /**
    * A list of allowed values for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#allowed_values CcConnectionType#allowed_values}
    */
    readonly allowedValues?: string[];
    /**
    * The default value for the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#default_value CcConnectionType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A key name to use when sending this property in API requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key_override CcConnectionType#key_override}
    */
    readonly keyOverride?: string;
    /**
    * The name of the property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#name CcConnectionType#name}
    */
    readonly name?: string;
    /**
    * Specifies where this property should be included in REST requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_location CcConnectionType#property_location}
    */
    readonly propertyLocation?: string;
    /**
    * The data type of this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#property_type CcConnectionType#property_type}
    */
    readonly propertyType?: string;
    /**
    * Indicates whether the property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#required CcConnectionType#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class RestConfigurationGlobalSourceConfigurationRequestParametersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RestConfigurationGlobalSourceConfigurationRequestParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedValues = this._allowedValues;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._keyOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyOverride = this._keyOverride;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._propertyLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyLocation = this._propertyLocation;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationRequestParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedValues = undefined;
            this._defaultValue = undefined;
            this._keyOverride = undefined;
            this._name = undefined;
            this._propertyLocation = undefined;
            this._propertyType = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedValues = value.allowedValues;
            this._defaultValue = value.defaultValue;
            this._keyOverride = value.keyOverride;
            this._name = value.name;
            this._propertyLocation = value.propertyLocation;
            this._propertyType = value.propertyType;
            this._required = value.required;
        }
    }

    // allowed_values - computed: true, optional: true, required: false
    private _allowedValues?: string[]; 
    public get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    public set allowedValues(value: string[]) {
        this._allowedValues = value;
    }
    public resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedValuesInput() {
        return this._allowedValues;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // key_override - computed: true, optional: true, required: false
    private _keyOverride?: string; 
    public get keyOverride() {
        return this.getStringAttribute('key_override');
    }
    public set keyOverride(value: string) {
        this._keyOverride = value;
    }
    public resetKeyOverride() {
        this._keyOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyOverrideInput() {
        return this._keyOverride;
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

    // property_location - computed: true, optional: true, required: false
    private _propertyLocation?: string; 
    public get propertyLocation() {
        return this.getStringAttribute('property_location');
    }
    public set propertyLocation(value: string) {
        this._propertyLocation = value;
    }
    public resetPropertyLocation() {
        this._propertyLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyLocationInput() {
        return this._propertyLocation;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class RestConfigurationGlobalSourceConfigurationRequestParametersPropertyList extends cdktn.ComplexList {
    public internalValue? : RestConfigurationGlobalSourceConfigurationRequestParametersProperty[] | cdktn.IResolvable

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
    public get(index: number): RestConfigurationGlobalSourceConfigurationRequestParametersPropertyOutputReference {
        return new RestConfigurationGlobalSourceConfigurationRequestParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty {
    /**
    * JSON path expression for error information location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#error_path CcConnectionType#error_path}
    */
    readonly errorPath?: string;
    /**
    * JSON path expression for result data location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#result_path CcConnectionType#result_path}
    */
    readonly resultPath?: string;
}
export class RestConfigurationGlobalSourceConfigurationResponseConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorPath = this._errorPath;
        }
        if (this._resultPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.resultPath = this._resultPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorPath = undefined;
            this._resultPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorPath = value.errorPath;
            this._resultPath = value.resultPath;
        }
    }

    // error_path - computed: true, optional: true, required: false
    private _errorPath?: string; 
    public get errorPath() {
        return this.getStringAttribute('error_path');
    }
    public set errorPath(value: string) {
        this._errorPath = value;
    }
    public resetErrorPath() {
        this._errorPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorPathInput() {
        return this._errorPath;
    }

    // result_path - computed: true, optional: true, required: false
    private _resultPath?: string; 
    public get resultPath() {
        return this.getStringAttribute('result_path');
    }
    public set resultPath(value: string) {
        this._resultPath = value;
    }
    public resetResultPath() {
        this._resultPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultPathInput() {
        return this._resultPath;
    }
}
export interface GlobalSourceConfigurationProperty {
    /**
    * Configuration that defines how filter predicates are applied to REST API requests, supporting both query parameter and filter string strategies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#filter_configuration CcConnectionType#filter_configuration}
    */
    readonly filterConfiguration?: RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty;
    /**
    * Configuration for handling paginated responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#pagination_configuration CcConnectionType#pagination_configuration}
    */
    readonly paginationConfiguration?: RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty;
    /**
    * The HTTP method to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method CcConnectionType#request_method}
    */
    readonly requestMethod?: string;
    /**
    * Request parameters configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_parameters CcConnectionType#request_parameters}
    */
    readonly requestParameters?: RestConfigurationGlobalSourceConfigurationRequestParametersProperty[] | cdktn.IResolvable;
    /**
    * The URL path for the REST endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_path CcConnectionType#request_path}
    */
    readonly requestPath?: string;
    /**
    * Configuration for parsing JSON responses from REST API calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#response_configuration CcConnectionType#response_configuration}
    */
    readonly responseConfiguration?: RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty;
}
export class GlobalSourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlobalSourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        if (this._paginationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.paginationConfiguration = this._paginationConfiguration?.internalValue;
        }
        if (this._requestMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestMethod = this._requestMethod;
        }
        if (this._requestParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestParameters = this._requestParameters?.internalValue;
        }
        if (this._requestPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestPath = this._requestPath;
        }
        if (this._responseConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseConfiguration = this._responseConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlobalSourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = undefined;
            this._paginationConfiguration.internalValue = undefined;
            this._requestMethod = undefined;
            this._requestParameters.internalValue = undefined;
            this._requestPath = undefined;
            this._responseConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = value.filterConfiguration;
            this._paginationConfiguration.internalValue = value.paginationConfiguration;
            this._requestMethod = value.requestMethod;
            this._requestParameters.internalValue = value.requestParameters;
            this._requestPath = value.requestPath;
            this._responseConfiguration.internalValue = value.responseConfiguration;
        }
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new RestConfigurationGlobalSourceConfigurationFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: RestConfigurationGlobalSourceConfigurationFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // pagination_configuration - computed: true, optional: true, required: false
    private _paginationConfiguration = new RestConfigurationGlobalSourceConfigurationPaginationConfigurationPropertyOutputReference(this, "pagination_configuration");
    public get paginationConfiguration() {
        return this._paginationConfiguration;
    }
    public putPaginationConfiguration(value: RestConfigurationGlobalSourceConfigurationPaginationConfigurationProperty) {
        this._paginationConfiguration.internalValue = value;
    }
    public resetPaginationConfiguration() {
        this._paginationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paginationConfigurationInput() {
        return this._paginationConfiguration.internalValue;
    }

    // request_method - computed: true, optional: true, required: false
    private _requestMethod?: string; 
    public get requestMethod() {
        return this.getStringAttribute('request_method');
    }
    public set requestMethod(value: string) {
        this._requestMethod = value;
    }
    public resetRequestMethod() {
        this._requestMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMethodInput() {
        return this._requestMethod;
    }

    // request_parameters - computed: true, optional: true, required: false
    private _requestParameters = new RestConfigurationGlobalSourceConfigurationRequestParametersPropertyList(this, "request_parameters", false);
    public get requestParameters() {
        return this._requestParameters;
    }
    public putRequestParameters(value: RestConfigurationGlobalSourceConfigurationRequestParametersProperty[] | cdktn.IResolvable) {
        this._requestParameters.internalValue = value;
    }
    public resetRequestParameters() {
        this._requestParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParametersInput() {
        return this._requestParameters.internalValue;
    }

    // request_path - computed: true, optional: true, required: false
    private _requestPath?: string; 
    public get requestPath() {
        return this.getStringAttribute('request_path');
    }
    public set requestPath(value: string) {
        this._requestPath = value;
    }
    public resetRequestPath() {
        this._requestPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestPathInput() {
        return this._requestPath;
    }

    // response_configuration - computed: true, optional: true, required: false
    private _responseConfiguration = new RestConfigurationGlobalSourceConfigurationResponseConfigurationPropertyOutputReference(this, "response_configuration");
    public get responseConfiguration() {
        return this._responseConfiguration;
    }
    public putResponseConfiguration(value: RestConfigurationGlobalSourceConfigurationResponseConfigurationProperty) {
        this._responseConfiguration.internalValue = value;
    }
    public resetResponseConfiguration() {
        this._responseConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseConfigurationInput() {
        return this._responseConfiguration.internalValue;
    }
}
export interface ValidationEndpointConfigurationProperty {
    /**
    * The HTTP method to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_method CcConnectionType#request_method}
    */
    readonly requestMethod?: string;
    /**
    * The URL path for the REST endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#request_path CcConnectionType#request_path}
    */
    readonly requestPath?: string;
}
export class ValidationEndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidationEndpointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._requestMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestMethod = this._requestMethod;
        }
        if (this._requestPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestPath = this._requestPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationEndpointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._requestMethod = undefined;
            this._requestPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._requestMethod = value.requestMethod;
            this._requestPath = value.requestPath;
        }
    }

    // request_method - computed: true, optional: true, required: false
    private _requestMethod?: string; 
    public get requestMethod() {
        return this.getStringAttribute('request_method');
    }
    public set requestMethod(value: string) {
        this._requestMethod = value;
    }
    public resetRequestMethod() {
        this._requestMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMethodInput() {
        return this._requestMethod;
    }

    // request_path - computed: true, optional: true, required: false
    private _requestPath?: string; 
    public get requestPath() {
        return this.getStringAttribute('request_path');
    }
    public set requestPath(value: string) {
        this._requestPath = value;
    }
    public resetRequestPath() {
        this._requestPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestPathInput() {
        return this._requestPath;
    }
}
export interface RestConfigurationProperty {
    /**
    * A map of entity configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#entity_configurations CcConnectionType#entity_configurations}
    */
    readonly entityConfigurations?: { [key: string]: EntityConfigurationsProperty } | cdktn.IResolvable;
    /**
    * Configuration that defines how to make requests to endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#global_source_configuration CcConnectionType#global_source_configuration}
    */
    readonly globalSourceConfiguration?: GlobalSourceConfigurationProperty;
    /**
    * Configuration for the validation endpoint. Only supports RequestMethod and RequestPath.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#validation_endpoint_configuration CcConnectionType#validation_endpoint_configuration}
    */
    readonly validationEndpointConfiguration?: ValidationEndpointConfigurationProperty;
}
export class RestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._entityConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityConfigurations = this._entityConfigurations?.internalValue;
        }
        if (this._globalSourceConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.globalSourceConfiguration = this._globalSourceConfiguration?.internalValue;
        }
        if (this._validationEndpointConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationEndpointConfiguration = this._validationEndpointConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entityConfigurations.internalValue = undefined;
            this._globalSourceConfiguration.internalValue = undefined;
            this._validationEndpointConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entityConfigurations.internalValue = value.entityConfigurations;
            this._globalSourceConfiguration.internalValue = value.globalSourceConfiguration;
            this._validationEndpointConfiguration.internalValue = value.validationEndpointConfiguration;
        }
    }

    // entity_configurations - computed: true, optional: true, required: false
    private _entityConfigurations = new EntityConfigurationsPropertyMap(this, "entity_configurations");
    public get entityConfigurations() {
        return this._entityConfigurations;
    }
    public putEntityConfigurations(value: { [key: string]: EntityConfigurationsProperty } | cdktn.IResolvable) {
        this._entityConfigurations.internalValue = value;
    }
    public resetEntityConfigurations() {
        this._entityConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityConfigurationsInput() {
        return this._entityConfigurations.internalValue;
    }

    // global_source_configuration - computed: true, optional: true, required: false
    private _globalSourceConfiguration = new GlobalSourceConfigurationPropertyOutputReference(this, "global_source_configuration");
    public get globalSourceConfiguration() {
        return this._globalSourceConfiguration;
    }
    public putGlobalSourceConfiguration(value: GlobalSourceConfigurationProperty) {
        this._globalSourceConfiguration.internalValue = value;
    }
    public resetGlobalSourceConfiguration() {
        this._globalSourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalSourceConfigurationInput() {
        return this._globalSourceConfiguration.internalValue;
    }

    // validation_endpoint_configuration - computed: true, optional: true, required: false
    private _validationEndpointConfiguration = new ValidationEndpointConfigurationPropertyOutputReference(this, "validation_endpoint_configuration");
    public get validationEndpointConfiguration() {
        return this._validationEndpointConfiguration;
    }
    public putValidationEndpointConfiguration(value: ValidationEndpointConfigurationProperty) {
        this._validationEndpointConfiguration.internalValue = value;
    }
    public resetValidationEndpointConfiguration() {
        this._validationEndpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationEndpointConfigurationInput() {
        return this._validationEndpointConfiguration.internalValue;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#key CcConnectionType#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/glue_connection_type#value CcConnectionType#value}
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
}
