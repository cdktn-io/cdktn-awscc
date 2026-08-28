// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIntegrationResponseProps extends cdktn.TerraformMetaArguments {
    /**
    * The API identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#api_id CcIntegrationResponse#api_id}
    */
    readonly apiId: string;
    /**
    * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are ``CONVERT_TO_BINARY`` and ``CONVERT_TO_TEXT``, with the following behaviors:
    *  ``CONVERT_TO_BINARY``: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
    *  ``CONVERT_TO_TEXT``: Converts a response payload from a binary blob to a Base64-encoded string.
    *  If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#content_handling_strategy CcIntegrationResponse#content_handling_strategy}
    */
    readonly contentHandlingStrategy?: string;
    /**
    * The integration ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#integration_id CcIntegrationResponse#integration_id}
    */
    readonly integrationId: string;
    /**
    * The integration response key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#integration_response_key CcIntegrationResponse#integration_response_key}
    */
    readonly integrationResponseKey: string;
    /**
    * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of ``method.response.header.{name}``, where name is a valid and unique header name. The mapped non-static value must match the pattern of ``integration.response.header.{name}`` or ``integration.response.body.{JSON-expression}``, where ``{name}`` is a valid and unique response header name and ``{JSON-expression}`` is a valid JSON expression without the ``$`` prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#response_parameters CcIntegrationResponse#response_parameters}
    */
    readonly responseParameters?: string;
    /**
    * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#response_templates CcIntegrationResponse#response_templates}
    */
    readonly responseTemplates?: string;
    /**
    * The template selection expression for the integration response. Supported only for WebSocket APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#template_selection_expression CcIntegrationResponse#template_selection_expression}
    */
    readonly templateSelectionExpression?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response awscc_apigatewayv2_integration_response}
*/
export class CcIntegrationResponse extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_integration_response";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIntegrationResponse resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIntegrationResponse to import
    * @param importFromId The id of the existing CcIntegrationResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIntegrationResponse to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_integration_response", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_integration_response awscc_apigatewayv2_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIntegrationResponseProps
    */
    public constructor(scope: Construct, id: string, config: CcIntegrationResponseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_integration_response',
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
        this._apiId = config.apiId;
        this._contentHandlingStrategy = config.contentHandlingStrategy;
        this._integrationId = config.integrationId;
        this._integrationResponseKey = config.integrationResponseKey;
        this._responseParameters = config.responseParameters;
        this._responseTemplates = config.responseTemplates;
        this._templateSelectionExpression = config.templateSelectionExpression;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // integration_id - computed: false, optional: false, required: true
    private _integrationId?: string; 
    public get integrationId() {
        return this.getStringAttribute('integration_id');
    }
    public set integrationId(value: string) {
        this._integrationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationIdInput() {
        return this._integrationId;
    }

    // integration_response_id - computed: true, optional: false, required: false
    public get integrationResponseId() {
        return this.getStringAttribute('integration_response_id');
    }

    // integration_response_key - computed: false, optional: false, required: true
    private _integrationResponseKey?: string; 
    public get integrationResponseKey() {
        return this.getStringAttribute('integration_response_key');
    }
    public set integrationResponseKey(value: string) {
        this._integrationResponseKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationResponseKeyInput() {
        return this._integrationResponseKey;
    }

    // response_parameters - computed: true, optional: true, required: false
    private _responseParameters?: string; 
    public get responseParameters() {
        return this.getStringAttribute('response_parameters');
    }
    public set responseParameters(value: string) {
        this._responseParameters = value;
    }
    public resetResponseParameters() {
        this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
        return this._responseParameters;
    }

    // response_templates - computed: true, optional: true, required: false
    private _responseTemplates?: string; 
    public get responseTemplates() {
        return this.getStringAttribute('response_templates');
    }
    public set responseTemplates(value: string) {
        this._responseTemplates = value;
    }
    public resetResponseTemplates() {
        this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTemplatesInput() {
        return this._responseTemplates;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            content_handling_strategy: cdktn.stringToTerraform(this._contentHandlingStrategy),
            integration_id: cdktn.stringToTerraform(this._integrationId),
            integration_response_key: cdktn.stringToTerraform(this._integrationResponseKey),
            response_parameters: cdktn.stringToTerraform(this._responseParameters),
            response_templates: cdktn.stringToTerraform(this._responseTemplates),
            template_selection_expression: cdktn.stringToTerraform(this._templateSelectionExpression),
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
            content_handling_strategy: {
                value: cdktn.stringToHclTerraform(this._contentHandlingStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_id: {
                value: cdktn.stringToHclTerraform(this._integrationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_response_key: {
                value: cdktn.stringToHclTerraform(this._integrationResponseKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            response_parameters: {
                value: cdktn.stringToHclTerraform(this._responseParameters),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            response_templates: {
                value: cdktn.stringToHclTerraform(this._responseTemplates),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_selection_expression: {
                value: cdktn.stringToHclTerraform(this._templateSelectionExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcIntegrationResponse {
}
