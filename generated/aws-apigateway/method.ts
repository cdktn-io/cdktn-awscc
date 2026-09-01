// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMethodProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#api_key_required CcMethod#api_key_required}
    */
    readonly apiKeyRequired?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorization_scopes CcMethod#authorization_scopes}
    */
    readonly authorizationScopes?: string[];
    /**
    * The method's authorization type. This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
    *   If you specify the ``AuthorizerId`` property, specify ``CUSTOM`` or ``COGNITO_USER_POOLS`` for this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorization_type CcMethod#authorization_type}
    */
    readonly authorizationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#authorizer_id CcMethod#authorizer_id}
    */
    readonly authorizerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#http_method CcMethod#http_method}
    */
    readonly httpMethod: string;
    /**
    * ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration CcMethod#integration}
    */
    readonly integration?: CcMethod.IntegrationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#method_responses CcMethod#method_responses}
    */
    readonly methodResponses?: CcMethod.MethodResponseProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#operation_name CcMethod#operation_name}
    */
    readonly operationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_models CcMethod#request_models}
    */
    readonly requestModels?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_parameters CcMethod#request_parameters}
    */
    readonly requestParameters?: { [key: string]: (boolean | cdktn.IResolvable) };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_validator_id CcMethod#request_validator_id}
    */
    readonly requestValidatorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#resource_id CcMethod#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#rest_api_id CcMethod#rest_api_id}
    */
    readonly restApiId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method awscc_apigateway_method}
*/
export class CcMethod extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_method";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMethod resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMethod to import
    * @param importFromId The id of the existing CcMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMethod to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_method", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method awscc_apigateway_method} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMethodProps
    */
    public constructor(scope: Construct, id: string, config: CcMethodProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_method',
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
        this._apiKeyRequired = config.apiKeyRequired;
        this._authorizationScopes = config.authorizationScopes;
        this._authorizationType = config.authorizationType;
        this._authorizerId = config.authorizerId;
        this._httpMethod = config.httpMethod;
        this._integration.internalValue = config.integration;
        this._methodResponses.internalValue = config.methodResponses;
        this._operationName = config.operationName;
        this._requestModels = config.requestModels;
        this._requestParameters = config.requestParameters;
        this._requestValidatorId = config.requestValidatorId;
        this._resourceId = config.resourceId;
        this._restApiId = config.restApiId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_key_required - computed: true, optional: true, required: false
    private _apiKeyRequired?: boolean | cdktn.IResolvable; 
    public get apiKeyRequired() {
        return this.getBooleanAttribute('api_key_required');
    }
    public set apiKeyRequired(value: boolean | cdktn.IResolvable) {
        this._apiKeyRequired = value;
    }
    public resetApiKeyRequired() {
        this._apiKeyRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyRequiredInput() {
        return this._apiKeyRequired;
    }

    // authorization_scopes - computed: true, optional: true, required: false
    private _authorizationScopes?: string[]; 
    public get authorizationScopes() {
        return this.getListAttribute('authorization_scopes');
    }
    public set authorizationScopes(value: string[]) {
        this._authorizationScopes = value;
    }
    public resetAuthorizationScopes() {
        this._authorizationScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationScopesInput() {
        return this._authorizationScopes;
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

    // authorizer_id - computed: true, optional: true, required: false
    private _authorizerId?: string; 
    public get authorizerId() {
        return this.getStringAttribute('authorizer_id');
    }
    public set authorizerId(value: string) {
        this._authorizerId = value;
    }
    public resetAuthorizerId() {
        this._authorizerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerIdInput() {
        return this._authorizerId;
    }

    // http_method - computed: false, optional: false, required: true
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // integration - computed: true, optional: true, required: false
    private _integration = new CcMethod.IntegrationPropertyOutputReference(this, "integration");
    public get integration() {
        return this._integration;
    }
    public putIntegration(value: CcMethod.IntegrationProperty) {
        this._integration.internalValue = value;
    }
    public resetIntegration() {
        this._integration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationInput() {
        return this._integration.internalValue;
    }

    // method_responses - computed: true, optional: true, required: false
    private _methodResponses = new CcMethod.MethodResponsePropertyList(this, "method_responses", false);
    public get methodResponses() {
        return this._methodResponses;
    }
    public putMethodResponses(value: CcMethod.MethodResponseProperty[] | cdktn.IResolvable) {
        this._methodResponses.internalValue = value;
    }
    public resetMethodResponses() {
        this._methodResponses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodResponsesInput() {
        return this._methodResponses.internalValue;
    }

    // operation_name - computed: true, optional: true, required: false
    private _operationName?: string; 
    public get operationName() {
        return this.getStringAttribute('operation_name');
    }
    public set operationName(value: string) {
        this._operationName = value;
    }
    public resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationNameInput() {
        return this._operationName;
    }

    // request_models - computed: true, optional: true, required: false
    private _requestModels?: { [key: string]: string }; 
    public get requestModels() {
        return this.getStringMapAttribute('request_models');
    }
    public set requestModels(value: { [key: string]: string }) {
        this._requestModels = value;
    }
    public resetRequestModels() {
        this._requestModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestModelsInput() {
        return this._requestModels;
    }

    // request_parameters - computed: true, optional: true, required: false
    private _requestParameters?: { [key: string]: (boolean | cdktn.IResolvable) }; 
    public get requestParameters() {
        return this.getBooleanMapAttribute('request_parameters');
    }
    public set requestParameters(value: { [key: string]: (boolean | cdktn.IResolvable) }) {
        this._requestParameters = value;
    }
    public resetRequestParameters() {
        this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParametersInput() {
        return this._requestParameters;
    }

    // request_validator_id - computed: true, optional: true, required: false
    private _requestValidatorId?: string; 
    public get requestValidatorId() {
        return this.getStringAttribute('request_validator_id');
    }
    public set requestValidatorId(value: string) {
        this._requestValidatorId = value;
    }
    public resetRequestValidatorId() {
        this._requestValidatorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestValidatorIdInput() {
        return this._requestValidatorId;
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
        return this._restApiId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_key_required: cdktn.booleanToTerraform(this._apiKeyRequired),
            authorization_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authorizationScopes),
            authorization_type: cdktn.stringToTerraform(this._authorizationType),
            authorizer_id: cdktn.stringToTerraform(this._authorizerId),
            http_method: cdktn.stringToTerraform(this._httpMethod),
            integration: ccMethodIntegrationPropertyToTerraform(this._integration.internalValue),
            method_responses: cdktn.listMapper(ccMethodMethodResponsePropertyToTerraform, false)(this._methodResponses.internalValue),
            operation_name: cdktn.stringToTerraform(this._operationName),
            request_models: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestModels),
            request_parameters: cdktn.hashMapper(cdktn.booleanToTerraform)(this._requestParameters),
            request_validator_id: cdktn.stringToTerraform(this._requestValidatorId),
            resource_id: cdktn.stringToTerraform(this._resourceId),
            rest_api_id: cdktn.stringToTerraform(this._restApiId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_key_required: {
                value: cdktn.booleanToHclTerraform(this._apiKeyRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            authorization_scopes: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authorizationScopes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            authorization_type: {
                value: cdktn.stringToHclTerraform(this._authorizationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_id: {
                value: cdktn.stringToHclTerraform(this._authorizerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            http_method: {
                value: cdktn.stringToHclTerraform(this._httpMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration: {
                value: ccMethodIntegrationPropertyToHclTerraform(this._integration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMethod.IntegrationProperty",
            },
            method_responses: {
                value: cdktn.listMapperHcl(ccMethodMethodResponsePropertyToHclTerraform, false)(this._methodResponses.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMethod.MethodResponsePropertyList",
            },
            operation_name: {
                value: cdktn.stringToHclTerraform(this._operationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_models: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestModels),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            request_parameters: {
                value: cdktn.hashMapperHcl(cdktn.booleanToHclTerraform)(this._requestParameters),
                isBlock: false,
                type: "map",
                storageClassType: "booleanMap",
            },
            request_validator_id: {
                value: cdktn.stringToHclTerraform(this._requestValidatorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rest_api_id: {
                value: cdktn.stringToHclTerraform(this._restApiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMethodIntegrationResponsePropertyToTerraform(struct?: CcMethod.IntegrationResponseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_handling: cdktn.stringToTerraform(struct!.contentHandling),
        response_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.responseParameters),
        response_templates: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.responseTemplates),
        selection_pattern: cdktn.stringToTerraform(struct!.selectionPattern),
        status_code: cdktn.stringToTerraform(struct!.statusCode),
    }
}


export function ccMethodIntegrationResponsePropertyToHclTerraform(struct?: CcMethod.IntegrationResponseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_handling: {
            value: cdktn.stringToHclTerraform(struct!.contentHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.responseParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        response_templates: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.responseTemplates),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        selection_pattern: {
            value: cdktn.stringToHclTerraform(struct!.selectionPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktn.stringToHclTerraform(struct!.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMethodIntegrationPropertyToTerraform(struct?: CcMethod.IntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cache_key_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cacheKeyParameters),
        cache_namespace: cdktn.stringToTerraform(struct!.cacheNamespace),
        connection_id: cdktn.stringToTerraform(struct!.connectionId),
        connection_type: cdktn.stringToTerraform(struct!.connectionType),
        content_handling: cdktn.stringToTerraform(struct!.contentHandling),
        credentials: cdktn.stringToTerraform(struct!.credentials),
        integration_http_method: cdktn.stringToTerraform(struct!.integrationHttpMethod),
        integration_responses: cdktn.listMapper(ccMethodIntegrationResponsePropertyToTerraform, false)(struct!.integrationResponses),
        integration_target: cdktn.stringToTerraform(struct!.integrationTarget),
        passthrough_behavior: cdktn.stringToTerraform(struct!.passthroughBehavior),
        request_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requestParameters),
        request_templates: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requestTemplates),
        response_transfer_mode: cdktn.stringToTerraform(struct!.responseTransferMode),
        timeout_in_millis: cdktn.numberToTerraform(struct!.timeoutInMillis),
        type: cdktn.stringToTerraform(struct!.type),
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccMethodIntegrationPropertyToHclTerraform(struct?: CcMethod.IntegrationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cache_key_parameters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cacheKeyParameters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cache_namespace: {
            value: cdktn.stringToHclTerraform(struct!.cacheNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connection_id: {
            value: cdktn.stringToHclTerraform(struct!.connectionId),
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
        content_handling: {
            value: cdktn.stringToHclTerraform(struct!.contentHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials: {
            value: cdktn.stringToHclTerraform(struct!.credentials),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integration_http_method: {
            value: cdktn.stringToHclTerraform(struct!.integrationHttpMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integration_responses: {
            value: cdktn.listMapperHcl(ccMethodIntegrationResponsePropertyToHclTerraform, false)(struct!.integrationResponses),
            isBlock: true,
            type: "list",
            storageClassType: "IntegrationResponsePropertyList",
        },
        integration_target: {
            value: cdktn.stringToHclTerraform(struct!.integrationTarget),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        passthrough_behavior: {
            value: cdktn.stringToHclTerraform(struct!.passthroughBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        request_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requestParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        request_templates: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requestTemplates),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        response_transfer_mode: {
            value: cdktn.stringToHclTerraform(struct!.responseTransferMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_in_millis: {
            value: cdktn.numberToHclTerraform(struct!.timeoutInMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMethodMethodResponsePropertyToTerraform(struct?: CcMethod.MethodResponseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        response_models: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.responseModels),
        response_parameters: cdktn.hashMapper(cdktn.booleanToTerraform)(struct!.responseParameters),
        status_code: cdktn.stringToTerraform(struct!.statusCode),
    }
}


export function ccMethodMethodResponsePropertyToHclTerraform(struct?: CcMethod.MethodResponseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        response_models: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.responseModels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        response_parameters: {
            value: cdktn.hashMapperHcl(cdktn.booleanToHclTerraform)(struct!.responseParameters),
            isBlock: false,
            type: "map",
            storageClassType: "booleanMap",
        },
        status_code: {
            value: cdktn.stringToHclTerraform(struct!.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMethod {
export interface IntegrationResponseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#content_handling CcMethod#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_parameters CcMethod#response_parameters}
    */
    readonly responseParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_templates CcMethod#response_templates}
    */
    readonly responseTemplates?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#selection_pattern CcMethod#selection_pattern}
    */
    readonly selectionPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#status_code CcMethod#status_code}
    */
    readonly statusCode?: string;
}
export class IntegrationResponsePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntegrationResponseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentHandling = this._contentHandling;
        }
        if (this._responseParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseParameters = this._responseParameters;
        }
        if (this._responseTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseTemplates = this._responseTemplates;
        }
        if (this._selectionPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionPattern = this._selectionPattern;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegrationResponseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentHandling = undefined;
            this._responseParameters = undefined;
            this._responseTemplates = undefined;
            this._selectionPattern = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentHandling = value.contentHandling;
            this._responseParameters = value.responseParameters;
            this._responseTemplates = value.responseTemplates;
            this._selectionPattern = value.selectionPattern;
            this._statusCode = value.statusCode;
        }
    }

    // content_handling - computed: true, optional: true, required: false
    private _contentHandling?: string; 
    public get contentHandling() {
        return this.getStringAttribute('content_handling');
    }
    public set contentHandling(value: string) {
        this._contentHandling = value;
    }
    public resetContentHandling() {
        this._contentHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHandlingInput() {
        return this._contentHandling;
    }

    // response_parameters - computed: true, optional: true, required: false
    private _responseParameters?: { [key: string]: string }; 
    public get responseParameters() {
        return this.getStringMapAttribute('response_parameters');
    }
    public set responseParameters(value: { [key: string]: string }) {
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
    private _responseTemplates?: { [key: string]: string }; 
    public get responseTemplates() {
        return this.getStringMapAttribute('response_templates');
    }
    public set responseTemplates(value: { [key: string]: string }) {
        this._responseTemplates = value;
    }
    public resetResponseTemplates() {
        this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTemplatesInput() {
        return this._responseTemplates;
    }

    // selection_pattern - computed: true, optional: true, required: false
    private _selectionPattern?: string; 
    public get selectionPattern() {
        return this.getStringAttribute('selection_pattern');
    }
    public set selectionPattern(value: string) {
        this._selectionPattern = value;
    }
    public resetSelectionPattern() {
        this._selectionPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionPatternInput() {
        return this._selectionPattern;
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: string; 
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    public resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
        return this._statusCode;
    }
}

export class IntegrationResponsePropertyList extends cdktn.ComplexList {
    public internalValue? : IntegrationResponseProperty[] | cdktn.IResolvable

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
    public get(index: number): IntegrationResponsePropertyOutputReference {
        return new IntegrationResponsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IntegrationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#cache_key_parameters CcMethod#cache_key_parameters}
    */
    readonly cacheKeyParameters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#cache_namespace CcMethod#cache_namespace}
    */
    readonly cacheNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#connection_id CcMethod#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#connection_type CcMethod#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#content_handling CcMethod#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#credentials CcMethod#credentials}
    */
    readonly credentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_http_method CcMethod#integration_http_method}
    */
    readonly integrationHttpMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_responses CcMethod#integration_responses}
    */
    readonly integrationResponses?: IntegrationResponseProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#integration_target CcMethod#integration_target}
    */
    readonly integrationTarget?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#passthrough_behavior CcMethod#passthrough_behavior}
    */
    readonly passthroughBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_parameters CcMethod#request_parameters}
    */
    readonly requestParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#request_templates CcMethod#request_templates}
    */
    readonly requestTemplates?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_transfer_mode CcMethod#response_transfer_mode}
    */
    readonly responseTransferMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#timeout_in_millis CcMethod#timeout_in_millis}
    */
    readonly timeoutInMillis?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#type CcMethod#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#uri CcMethod#uri}
    */
    readonly uri?: string;
}
export class IntegrationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntegrationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cacheKeyParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheKeyParameters = this._cacheKeyParameters;
        }
        if (this._cacheNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheNamespace = this._cacheNamespace;
        }
        if (this._connectionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionId = this._connectionId;
        }
        if (this._connectionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionType = this._connectionType;
        }
        if (this._contentHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentHandling = this._contentHandling;
        }
        if (this._credentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentials = this._credentials;
        }
        if (this._integrationHttpMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationHttpMethod = this._integrationHttpMethod;
        }
        if (this._integrationResponses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationResponses = this._integrationResponses?.internalValue;
        }
        if (this._integrationTarget !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationTarget = this._integrationTarget;
        }
        if (this._passthroughBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.passthroughBehavior = this._passthroughBehavior;
        }
        if (this._requestParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestParameters = this._requestParameters;
        }
        if (this._requestTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestTemplates = this._requestTemplates;
        }
        if (this._responseTransferMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseTransferMode = this._responseTransferMode;
        }
        if (this._timeoutInMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInMillis = this._timeoutInMillis;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegrationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cacheKeyParameters = undefined;
            this._cacheNamespace = undefined;
            this._connectionId = undefined;
            this._connectionType = undefined;
            this._contentHandling = undefined;
            this._credentials = undefined;
            this._integrationHttpMethod = undefined;
            this._integrationResponses.internalValue = undefined;
            this._integrationTarget = undefined;
            this._passthroughBehavior = undefined;
            this._requestParameters = undefined;
            this._requestTemplates = undefined;
            this._responseTransferMode = undefined;
            this._timeoutInMillis = undefined;
            this._type = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cacheKeyParameters = value.cacheKeyParameters;
            this._cacheNamespace = value.cacheNamespace;
            this._connectionId = value.connectionId;
            this._connectionType = value.connectionType;
            this._contentHandling = value.contentHandling;
            this._credentials = value.credentials;
            this._integrationHttpMethod = value.integrationHttpMethod;
            this._integrationResponses.internalValue = value.integrationResponses;
            this._integrationTarget = value.integrationTarget;
            this._passthroughBehavior = value.passthroughBehavior;
            this._requestParameters = value.requestParameters;
            this._requestTemplates = value.requestTemplates;
            this._responseTransferMode = value.responseTransferMode;
            this._timeoutInMillis = value.timeoutInMillis;
            this._type = value.type;
            this._uri = value.uri;
        }
    }

    // cache_key_parameters - computed: true, optional: true, required: false
    private _cacheKeyParameters?: string[]; 
    public get cacheKeyParameters() {
        return this.getListAttribute('cache_key_parameters');
    }
    public set cacheKeyParameters(value: string[]) {
        this._cacheKeyParameters = value;
    }
    public resetCacheKeyParameters() {
        this._cacheKeyParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheKeyParametersInput() {
        return this._cacheKeyParameters;
    }

    // cache_namespace - computed: true, optional: true, required: false
    private _cacheNamespace?: string; 
    public get cacheNamespace() {
        return this.getStringAttribute('cache_namespace');
    }
    public set cacheNamespace(value: string) {
        this._cacheNamespace = value;
    }
    public resetCacheNamespace() {
        this._cacheNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheNamespaceInput() {
        return this._cacheNamespace;
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

    // content_handling - computed: true, optional: true, required: false
    private _contentHandling?: string; 
    public get contentHandling() {
        return this.getStringAttribute('content_handling');
    }
    public set contentHandling(value: string) {
        this._contentHandling = value;
    }
    public resetContentHandling() {
        this._contentHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHandlingInput() {
        return this._contentHandling;
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials?: string; 
    public get credentials() {
        return this.getStringAttribute('credentials');
    }
    public set credentials(value: string) {
        this._credentials = value;
    }
    public resetCredentials() {
        this._credentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials;
    }

    // integration_http_method - computed: true, optional: true, required: false
    private _integrationHttpMethod?: string; 
    public get integrationHttpMethod() {
        return this.getStringAttribute('integration_http_method');
    }
    public set integrationHttpMethod(value: string) {
        this._integrationHttpMethod = value;
    }
    public resetIntegrationHttpMethod() {
        this._integrationHttpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationHttpMethodInput() {
        return this._integrationHttpMethod;
    }

    // integration_responses - computed: true, optional: true, required: false
    private _integrationResponses = new IntegrationResponsePropertyList(this, "integration_responses", false);
    public get integrationResponses() {
        return this._integrationResponses;
    }
    public putIntegrationResponses(value: IntegrationResponseProperty[] | cdktn.IResolvable) {
        this._integrationResponses.internalValue = value;
    }
    public resetIntegrationResponses() {
        this._integrationResponses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationResponsesInput() {
        return this._integrationResponses.internalValue;
    }

    // integration_target - computed: true, optional: true, required: false
    private _integrationTarget?: string; 
    public get integrationTarget() {
        return this.getStringAttribute('integration_target');
    }
    public set integrationTarget(value: string) {
        this._integrationTarget = value;
    }
    public resetIntegrationTarget() {
        this._integrationTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationTargetInput() {
        return this._integrationTarget;
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

    // response_transfer_mode - computed: true, optional: true, required: false
    private _responseTransferMode?: string; 
    public get responseTransferMode() {
        return this.getStringAttribute('response_transfer_mode');
    }
    public set responseTransferMode(value: string) {
        this._responseTransferMode = value;
    }
    public resetResponseTransferMode() {
        this._responseTransferMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTransferModeInput() {
        return this._responseTransferMode;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}
export interface MethodResponseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_models CcMethod#response_models}
    */
    readonly responseModels?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#response_parameters CcMethod#response_parameters}
    */
    readonly responseParameters?: { [key: string]: (boolean | cdktn.IResolvable) };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_method#status_code CcMethod#status_code}
    */
    readonly statusCode?: string;
}
export class MethodResponsePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MethodResponseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._responseModels !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseModels = this._responseModels;
        }
        if (this._responseParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseParameters = this._responseParameters;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MethodResponseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._responseModels = undefined;
            this._responseParameters = undefined;
            this._statusCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._responseModels = value.responseModels;
            this._responseParameters = value.responseParameters;
            this._statusCode = value.statusCode;
        }
    }

    // response_models - computed: true, optional: true, required: false
    private _responseModels?: { [key: string]: string }; 
    public get responseModels() {
        return this.getStringMapAttribute('response_models');
    }
    public set responseModels(value: { [key: string]: string }) {
        this._responseModels = value;
    }
    public resetResponseModels() {
        this._responseModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseModelsInput() {
        return this._responseModels;
    }

    // response_parameters - computed: true, optional: true, required: false
    private _responseParameters?: { [key: string]: (boolean | cdktn.IResolvable) }; 
    public get responseParameters() {
        return this.getBooleanMapAttribute('response_parameters');
    }
    public set responseParameters(value: { [key: string]: (boolean | cdktn.IResolvable) }) {
        this._responseParameters = value;
    }
    public resetResponseParameters() {
        this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
        return this._responseParameters;
    }

    // status_code - computed: true, optional: true, required: false
    private _statusCode?: string; 
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
        this._statusCode = value;
    }
    public resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
        return this._statusCode;
    }
}

export class MethodResponsePropertyList extends cdktn.ComplexList {
    public internalValue? : MethodResponseProperty[] | cdktn.IResolvable

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
    public get(index: number): MethodResponsePropertyOutputReference {
        return new MethodResponsePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
