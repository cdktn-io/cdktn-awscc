// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntegrationProps extends cdktn.TerraformMetaArguments {
    /**
    * The API identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#api_id CcIntegration#api_id}
    */
    readonly apiId: string;
    /**
    * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#connection_id CcIntegration#connection_id}
    */
    readonly connectionId?: string;
    /**
    * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#connection_type CcIntegration#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#content_handling_strategy CcIntegration#content_handling_strategy}
    */
    readonly contentHandlingStrategy?: string;
    /**
    * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#credentials_arn CcIntegration#credentials_arn}
    */
    readonly credentialsArn?: string;
    /**
    * The description of the integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#description CcIntegration#description}
    */
    readonly description?: string;
    /**
    * Specifies the integration's HTTP method type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#integration_method CcIntegration#integration_method}
    */
    readonly integrationMethod?: string;
    /**
    * Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#integration_subtype CcIntegration#integration_subtype}
    */
    readonly integrationSubtype?: string;
    /**
    * The integration type of an integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#integration_type CcIntegration#integration_type}
    */
    readonly integrationType: string;
    /**
    * For a Lambda integration, specify the URI of a Lambda function. For an HTTP integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#integration_uri CcIntegration#integration_uri}
    */
    readonly integrationUri?: string;
    /**
    * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#passthrough_behavior CcIntegration#passthrough_behavior}
    */
    readonly passthroughBehavior?: string;
    /**
    * Specifies the format of the payload sent to an integration. Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are 1.0 and 2.0 For all other integrations, 1.0 is the only supported value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#payload_format_version CcIntegration#payload_format_version}
    */
    readonly payloadFormatVersion?: string;
    /**
    * A key-value map specifying parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#request_parameters CcIntegration#request_parameters}
    */
    readonly requestParameters?: { [key: string]: string };
    /**
    * A map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#request_templates CcIntegration#request_templates}
    */
    readonly requestTemplates?: { [key: string]: string };
    /**
    * Parameters that transform the HTTP response from a backend integration before returning the response to clients. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#response_parameters CcIntegration#response_parameters}
    */
    readonly responseParameters?: { [key: string]: CcIntegration.ResponseParameterMapProperty } | cdktn.IResolvable;
    /**
    * The template selection expression for the integration. Supported only for WebSocket APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#template_selection_expression CcIntegration#template_selection_expression}
    */
    readonly templateSelectionExpression?: string;
    /**
    * Custom timeout between 50 and 29000 milliseconds for WebSocket APIs and between 50 and 30000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#timeout_in_millis CcIntegration#timeout_in_millis}
    */
    readonly timeoutInMillis?: number;
    /**
    * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#tls_config CcIntegration#tls_config}
    */
    readonly tlsConfig?: CcIntegration.TlsConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration awscc_apigatewayv2_integration}
*/
export class CcIntegration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_integration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntegration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntegration to import
    * @param importFromId The id of the existing CcIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntegration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_integration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration awscc_apigatewayv2_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntegrationProps
    */
    public constructor(scope: Construct, id: string, config: CcIntegrationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_integration',
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
        this._apiId = config.apiId;
        this._connectionId = config.connectionId;
        this._connectionType = config.connectionType;
        this._contentHandlingStrategy = config.contentHandlingStrategy;
        this._credentialsArn = config.credentialsArn;
        this._description = config.description;
        this._integrationMethod = config.integrationMethod;
        this._integrationSubtype = config.integrationSubtype;
        this._integrationType = config.integrationType;
        this._integrationUri = config.integrationUri;
        this._passthroughBehavior = config.passthroughBehavior;
        this._payloadFormatVersion = config.payloadFormatVersion;
        this._requestParameters = config.requestParameters;
        this._requestTemplates = config.requestTemplates;
        this._responseParameters.internalValue = config.responseParameters;
        this._templateSelectionExpression = config.templateSelectionExpression;
        this._timeoutInMillis = config.timeoutInMillis;
        this._tlsConfig.internalValue = config.tlsConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_id - computed: false, optional: false, required: true
    private _apiId?: string; 
    public get apiId() {
        return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
        return this._apiId;
    }

    // connection_id - computed: true, optional: true, required: false
    private _connectionId?: string; 
    public get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
        this._connectionId = value;
    }
    public resetConnectionId() {
        this._connectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
        return this._connectionId;
    }

    // connection_type - computed: true, optional: true, required: false
    private _connectionType?: string; 
    public get connectionType() {
        return this.getStringAttribute('connection_type');
    }
    public set connectionType(value: string) {
        this._connectionType = value;
    }
    public resetConnectionType() {
        this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTypeInput() {
        return this._connectionType;
    }

    // content_handling_strategy - computed: true, optional: true, required: false
    private _contentHandlingStrategy?: string; 
    public get contentHandlingStrategy() {
        return this.getStringAttribute('content_handling_strategy');
    }
    public set contentHandlingStrategy(value: string) {
        this._contentHandlingStrategy = value;
    }
    public resetContentHandlingStrategy() {
        this._contentHandlingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHandlingStrategyInput() {
        return this._contentHandlingStrategy;
    }

    // credentials_arn - computed: true, optional: true, required: false
    private _credentialsArn?: string; 
    public get credentialsArn() {
        return this.getStringAttribute('credentials_arn');
    }
    public set credentialsArn(value: string) {
        this._credentialsArn = value;
    }
    public resetCredentialsArn() {
        this._credentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsArnInput() {
        return this._credentialsArn;
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

    // integration_id - computed: true, optional: false, required: false
    public get integrationId() {
        return this.getStringAttribute('integration_id');
    }

    // integration_method - computed: true, optional: true, required: false
    private _integrationMethod?: string; 
    public get integrationMethod() {
        return this.getStringAttribute('integration_method');
    }
    public set integrationMethod(value: string) {
        this._integrationMethod = value;
    }
    public resetIntegrationMethod() {
        this._integrationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationMethodInput() {
        return this._integrationMethod;
    }

    // integration_subtype - computed: true, optional: true, required: false
    private _integrationSubtype?: string; 
    public get integrationSubtype() {
        return this.getStringAttribute('integration_subtype');
    }
    public set integrationSubtype(value: string) {
        this._integrationSubtype = value;
    }
    public resetIntegrationSubtype() {
        this._integrationSubtype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationSubtypeInput() {
        return this._integrationSubtype;
    }

    // integration_type - computed: false, optional: false, required: true
    private _integrationType?: string; 
    public get integrationType() {
        return this.getStringAttribute('integration_type');
    }
    public set integrationType(value: string) {
        this._integrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationTypeInput() {
        return this._integrationType;
    }

    // integration_uri - computed: true, optional: true, required: false
    private _integrationUri?: string; 
    public get integrationUri() {
        return this.getStringAttribute('integration_uri');
    }
    public set integrationUri(value: string) {
        this._integrationUri = value;
    }
    public resetIntegrationUri() {
        this._integrationUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationUriInput() {
        return this._integrationUri;
    }

    // passthrough_behavior - computed: true, optional: true, required: false
    private _passthroughBehavior?: string; 
    public get passthroughBehavior() {
        return this.getStringAttribute('passthrough_behavior');
    }
    public set passthroughBehavior(value: string) {
        this._passthroughBehavior = value;
    }
    public resetPassthroughBehavior() {
        this._passthroughBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passthroughBehaviorInput() {
        return this._passthroughBehavior;
    }

    // payload_format_version - computed: true, optional: true, required: false
    private _payloadFormatVersion?: string; 
    public get payloadFormatVersion() {
        return this.getStringAttribute('payload_format_version');
    }
    public set payloadFormatVersion(value: string) {
        this._payloadFormatVersion = value;
    }
    public resetPayloadFormatVersion() {
        this._payloadFormatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFormatVersionInput() {
        return this._payloadFormatVersion;
    }

    // request_parameters - computed: true, optional: true, required: false
    private _requestParameters?: { [key: string]: string }; 
    public get requestParameters() {
        return this.getStringMapAttribute('request_parameters');
    }
    public set requestParameters(value: { [key: string]: string }) {
        this._requestParameters = value;
    }
    public resetRequestParameters() {
        this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParametersInput() {
        return this._requestParameters;
    }

    // request_templates - computed: true, optional: true, required: false
    private _requestTemplates?: { [key: string]: string }; 
    public get requestTemplates() {
        return this.getStringMapAttribute('request_templates');
    }
    public set requestTemplates(value: { [key: string]: string }) {
        this._requestTemplates = value;
    }
    public resetRequestTemplates() {
        this._requestTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestTemplatesInput() {
        return this._requestTemplates;
    }

    // response_parameters - computed: true, optional: true, required: false
    private _responseParameters = new CcIntegration.ResponseParameterMapPropertyMap(this, "response_parameters");
    public get responseParameters() {
        return this._responseParameters;
    }
    public putResponseParameters(value: { [key: string]: CcIntegration.ResponseParameterMapProperty } | cdktn.IResolvable) {
        this._responseParameters.internalValue = value;
    }
    public resetResponseParameters() {
        this._responseParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
        return this._responseParameters.internalValue;
    }

    // template_selection_expression - computed: true, optional: true, required: false
    private _templateSelectionExpression?: string; 
    public get templateSelectionExpression() {
        return this.getStringAttribute('template_selection_expression');
    }
    public set templateSelectionExpression(value: string) {
        this._templateSelectionExpression = value;
    }
    public resetTemplateSelectionExpression() {
        this._templateSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateSelectionExpressionInput() {
        return this._templateSelectionExpression;
    }

    // timeout_in_millis - computed: true, optional: true, required: false
    private _timeoutInMillis?: number; 
    public get timeoutInMillis() {
        return this.getNumberAttribute('timeout_in_millis');
    }
    public set timeoutInMillis(value: number) {
        this._timeoutInMillis = value;
    }
    public resetTimeoutInMillis() {
        this._timeoutInMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMillisInput() {
        return this._timeoutInMillis;
    }

    // tls_config - computed: true, optional: true, required: false
    private _tlsConfig = new CcIntegration.TlsConfigPropertyOutputReference(this, "tls_config");
    public get tlsConfig() {
        return this._tlsConfig;
    }
    public putTlsConfig(value: CcIntegration.TlsConfigProperty) {
        this._tlsConfig.internalValue = value;
    }
    public resetTlsConfig() {
        this._tlsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsConfigInput() {
        return this._tlsConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            connection_id: cdktn.stringToTerraform(this._connectionId),
            connection_type: cdktn.stringToTerraform(this._connectionType),
            content_handling_strategy: cdktn.stringToTerraform(this._contentHandlingStrategy),
            credentials_arn: cdktn.stringToTerraform(this._credentialsArn),
            description: cdktn.stringToTerraform(this._description),
            integration_method: cdktn.stringToTerraform(this._integrationMethod),
            integration_subtype: cdktn.stringToTerraform(this._integrationSubtype),
            integration_type: cdktn.stringToTerraform(this._integrationType),
            integration_uri: cdktn.stringToTerraform(this._integrationUri),
            passthrough_behavior: cdktn.stringToTerraform(this._passthroughBehavior),
            payload_format_version: cdktn.stringToTerraform(this._payloadFormatVersion),
            request_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestParameters),
            request_templates: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestTemplates),
            response_parameters: cdktn.hashMapper(ccIntegrationResponseParameterMapPropertyToTerraform)(this._responseParameters.internalValue),
            template_selection_expression: cdktn.stringToTerraform(this._templateSelectionExpression),
            timeout_in_millis: cdktn.numberToTerraform(this._timeoutInMillis),
            tls_config: ccIntegrationTlsConfigPropertyToTerraform(this._tlsConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_id: {
                value: cdktn.stringToHclTerraform(this._apiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connection_id: {
                value: cdktn.stringToHclTerraform(this._connectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connection_type: {
                value: cdktn.stringToHclTerraform(this._connectionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_handling_strategy: {
                value: cdktn.stringToHclTerraform(this._contentHandlingStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            credentials_arn: {
                value: cdktn.stringToHclTerraform(this._credentialsArn),
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
            integration_method: {
                value: cdktn.stringToHclTerraform(this._integrationMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_subtype: {
                value: cdktn.stringToHclTerraform(this._integrationSubtype),
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
            integration_uri: {
                value: cdktn.stringToHclTerraform(this._integrationUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            passthrough_behavior: {
                value: cdktn.stringToHclTerraform(this._passthroughBehavior),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            payload_format_version: {
                value: cdktn.stringToHclTerraform(this._payloadFormatVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_parameters: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestParameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            request_templates: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestTemplates),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            response_parameters: {
                value: cdktn.hashMapperHcl(ccIntegrationResponseParameterMapPropertyToHclTerraform)(this._responseParameters.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcIntegration.ResponseParameterMapPropertyMap",
            },
            template_selection_expression: {
                value: cdktn.stringToHclTerraform(this._templateSelectionExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timeout_in_millis: {
                value: cdktn.numberToHclTerraform(this._timeoutInMillis),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tls_config: {
                value: ccIntegrationTlsConfigPropertyToHclTerraform(this._tlsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcIntegration.TlsConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIntegrationResponseParameterPropertyToTerraform(struct?: CcIntegration.ResponseParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
        source: cdktn.stringToTerraform(struct!.source),
    }
}


export function ccIntegrationResponseParameterPropertyToHclTerraform(struct?: CcIntegration.ResponseParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationResponseParameterMapPropertyToTerraform(struct?: CcIntegration.ResponseParameterMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        response_parameters: cdktn.listMapper(ccIntegrationResponseParameterPropertyToTerraform, false)(struct!.responseParameters),
    }
}


export function ccIntegrationResponseParameterMapPropertyToHclTerraform(struct?: CcIntegration.ResponseParameterMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        response_parameters: {
            value: cdktn.listMapperHcl(ccIntegrationResponseParameterPropertyToHclTerraform, false)(struct!.responseParameters),
            isBlock: true,
            type: "list",
            storageClassType: "ResponseParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIntegrationTlsConfigPropertyToTerraform(struct?: CcIntegration.TlsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        server_name_to_verify: cdktn.stringToTerraform(struct!.serverNameToVerify),
    }
}


export function ccIntegrationTlsConfigPropertyToHclTerraform(struct?: CcIntegration.TlsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        server_name_to_verify: {
            value: cdktn.stringToHclTerraform(struct!.serverNameToVerify),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcIntegration {
export interface ResponseParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#destination CcIntegration#destination}
    */
    readonly destination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#source CcIntegration#source}
    */
    readonly source?: string;
}
export class ResponseParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResponseParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResponseParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
            this._source = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
            this._source = value.source;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }
}

export class ResponseParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ResponseParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ResponseParameterPropertyOutputReference {
        return new ResponseParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResponseParameterMapProperty {
    /**
    * list of response parameters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#response_parameters CcIntegration#response_parameters}
    */
    readonly responseParameters?: ResponseParameterProperty[] | cdktn.IResolvable;
}
export class ResponseParameterMapPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResponseParameterMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._responseParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseParameters = this._responseParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResponseParameterMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._responseParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._responseParameters.internalValue = value.responseParameters;
        }
    }

    // response_parameters - computed: true, optional: true, required: false
    private _responseParameters = new ResponseParameterPropertyList(this, "response_parameters", false);
    public get responseParameters() {
        return this._responseParameters;
    }
    public putResponseParameters(value: ResponseParameterProperty[] | cdktn.IResolvable) {
        this._responseParameters.internalValue = value;
    }
    public resetResponseParameters() {
        this._responseParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
        return this._responseParameters.internalValue;
    }
}

export class ResponseParameterMapPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ResponseParameterMapProperty } | cdktn.IResolvable

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
    public get(key: string): ResponseParameterMapPropertyOutputReference {
        return new ResponseParameterMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface TlsConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_integration#server_name_to_verify CcIntegration#server_name_to_verify}
    */
    readonly serverNameToVerify?: string;
}
export class TlsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TlsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serverNameToVerify !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverNameToVerify = this._serverNameToVerify;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TlsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverNameToVerify = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverNameToVerify = value.serverNameToVerify;
        }
    }

    // server_name_to_verify - computed: true, optional: true, required: false
    private _serverNameToVerify?: string; 
    public get serverNameToVerify() {
        return this.getStringAttribute('server_name_to_verify');
    }
    public set serverNameToVerify(value: string) {
        this._serverNameToVerify = value;
    }
    public resetServerNameToVerify() {
        this._serverNameToVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameToVerifyInput() {
        return this._serverNameToVerify;
    }
}
}
