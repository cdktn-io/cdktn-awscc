// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApiProps extends cdktn.TerraformMetaArguments {
    /**
    * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#api_key_selection_expression CcApi#api_key_selection_expression}
    */
    readonly apiKeySelectionExpression?: string;
    /**
    * Specifies how to interpret the base path of the API during import. Valid values are ``ignore``, ``prepend``, and ``split``. The default value is ``ignore``. To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#base_path CcApi#base_path}
    */
    readonly basePath?: string;
    /**
    * The OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#body CcApi#body}
    */
    readonly body?: string;
    /**
    * The S3 location of an OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#body_s3_location CcApi#body_s3_location}
    */
    readonly bodyS3Location?: CcApi.BodyS3LocationProperty;
    /**
    * A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#cors_configuration CcApi#cors_configuration}
    */
    readonly corsConfiguration?: CcApi.CorsProperty;
    /**
    * This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify ``arn:aws:iam::*:user/*``. To use resource-based permissions on supported AWS services, specify ``null``. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#credentials_arn CcApi#credentials_arn}
    */
    readonly credentialsArn?: string;
    /**
    * The description of the API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#description CcApi#description}
    */
    readonly description?: string;
    /**
    * Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#disable_execute_api_endpoint CcApi#disable_execute_api_endpoint}
    */
    readonly disableExecuteApiEndpoint?: boolean | cdktn.IResolvable;
    /**
    * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#disable_schema_validation CcApi#disable_schema_validation}
    */
    readonly disableSchemaValidation?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#fail_on_warnings CcApi#fail_on_warnings}
    */
    readonly failOnWarnings?: boolean | cdktn.IResolvable;
    /**
    * The IP address types that can invoke the API. Use ``ipv4`` to allow only IPv4 addresses to invoke your API, or use ``dualstack`` to allow both IPv4 and IPv6 addresses to invoke your API.
    *  Don?t use IP address type for an HTTP API based on an OpenAPI specification. Instead, specify the IP address type in the OpenAPI specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#ip_address_type CcApi#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The name of the API. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#name CcApi#name}
    */
    readonly name?: string;
    /**
    * The API protocol. Valid values are ``WEBSOCKET`` or ``HTTP``. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#protocol_type CcApi#protocol_type}
    */
    readonly protocolType?: string;
    /**
    * This property is part of quick create. If you don't specify a ``routeKey``, a default route of ``$default`` is created. The ``$default`` route acts as a catch-all for any request made to your API, for a particular stage. The ``$default`` route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#route_key CcApi#route_key}
    */
    readonly routeKey?: string;
    /**
    * The route selection expression for the API. For HTTP APIs, the ``routeSelectionExpression`` must be ``${request.method} ${request.path}``. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#route_selection_expression CcApi#route_selection_expression}
    */
    readonly routeSelectionExpression?: string;
    /**
    * The collection of tags. Each tag element is associated with a given resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#tags CcApi#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#target CcApi#target}
    */
    readonly target?: string;
    /**
    * A version identifier for the API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#version CcApi#version}
    */
    readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api awscc_apigatewayv2_api}
*/
export class CcApi extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_api";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApi resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApi to import
    * @param importFromId The id of the existing CcApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApi to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_api", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api awscc_apigatewayv2_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApiProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcApiProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_api',
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
        this._apiKeySelectionExpression = config.apiKeySelectionExpression;
        this._basePath = config.basePath;
        this._body = config.body;
        this._bodyS3Location.internalValue = config.bodyS3Location;
        this._corsConfiguration.internalValue = config.corsConfiguration;
        this._credentialsArn = config.credentialsArn;
        this._description = config.description;
        this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
        this._disableSchemaValidation = config.disableSchemaValidation;
        this._failOnWarnings = config.failOnWarnings;
        this._ipAddressType = config.ipAddressType;
        this._name = config.name;
        this._protocolType = config.protocolType;
        this._routeKey = config.routeKey;
        this._routeSelectionExpression = config.routeSelectionExpression;
        this._tags = config.tags;
        this._target = config.target;
        this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_endpoint - computed: true, optional: false, required: false
    public get apiEndpoint() {
        return this.getStringAttribute('api_endpoint');
    }

    // api_id - computed: true, optional: false, required: false
    public get apiId() {
        return this.getStringAttribute('api_id');
    }

    // api_key_selection_expression - computed: true, optional: true, required: false
    private _apiKeySelectionExpression?: string; 
    public get apiKeySelectionExpression() {
        return this.getStringAttribute('api_key_selection_expression');
    }
    public set apiKeySelectionExpression(value: string) {
        this._apiKeySelectionExpression = value;
    }
    public resetApiKeySelectionExpression() {
        this._apiKeySelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeySelectionExpressionInput() {
        return this._apiKeySelectionExpression;
    }

    // base_path - computed: true, optional: true, required: false
    private _basePath?: string; 
    public get basePath() {
        return this.getStringAttribute('base_path');
    }
    public set basePath(value: string) {
        this._basePath = value;
    }
    public resetBasePath() {
        this._basePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basePathInput() {
        return this._basePath;
    }

    // body - computed: true, optional: true, required: false
    private _body?: string; 
    public get body() {
        return this.getStringAttribute('body');
    }
    public set body(value: string) {
        this._body = value;
    }
    public resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
        return this._body;
    }

    // body_s3_location - computed: true, optional: true, required: false
    private _bodyS3Location = new CcApi.BodyS3LocationPropertyOutputReference(this, "body_s3_location");
    public get bodyS3Location() {
        return this._bodyS3Location;
    }
    public putBodyS3Location(value: CcApi.BodyS3LocationProperty) {
        this._bodyS3Location.internalValue = value;
    }
    public resetBodyS3Location() {
        this._bodyS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyS3LocationInput() {
        return this._bodyS3Location.internalValue;
    }

    // cors_configuration - computed: true, optional: true, required: false
    private _corsConfiguration = new CcApi.CorsPropertyOutputReference(this, "cors_configuration");
    public get corsConfiguration() {
        return this._corsConfiguration;
    }
    public putCorsConfiguration(value: CcApi.CorsProperty) {
        this._corsConfiguration.internalValue = value;
    }
    public resetCorsConfiguration() {
        this._corsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get corsConfigurationInput() {
        return this._corsConfiguration.internalValue;
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

    // disable_execute_api_endpoint - computed: true, optional: true, required: false
    private _disableExecuteApiEndpoint?: boolean | cdktn.IResolvable; 
    public get disableExecuteApiEndpoint() {
        return this.getBooleanAttribute('disable_execute_api_endpoint');
    }
    public set disableExecuteApiEndpoint(value: boolean | cdktn.IResolvable) {
        this._disableExecuteApiEndpoint = value;
    }
    public resetDisableExecuteApiEndpoint() {
        this._disableExecuteApiEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableExecuteApiEndpointInput() {
        return this._disableExecuteApiEndpoint;
    }

    // disable_schema_validation - computed: true, optional: true, required: false
    private _disableSchemaValidation?: boolean | cdktn.IResolvable; 
    public get disableSchemaValidation() {
        return this.getBooleanAttribute('disable_schema_validation');
    }
    public set disableSchemaValidation(value: boolean | cdktn.IResolvable) {
        this._disableSchemaValidation = value;
    }
    public resetDisableSchemaValidation() {
        this._disableSchemaValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableSchemaValidationInput() {
        return this._disableSchemaValidation;
    }

    // execute_api_arn - computed: true, optional: false, required: false
    public get executeApiArn() {
        return this.getStringAttribute('execute_api_arn');
    }

    // fail_on_warnings - computed: true, optional: true, required: false
    private _failOnWarnings?: boolean | cdktn.IResolvable; 
    public get failOnWarnings() {
        return this.getBooleanAttribute('fail_on_warnings');
    }
    public set failOnWarnings(value: boolean | cdktn.IResolvable) {
        this._failOnWarnings = value;
    }
    public resetFailOnWarnings() {
        this._failOnWarnings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnWarningsInput() {
        return this._failOnWarnings;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
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

    // protocol_type - computed: true, optional: true, required: false
    private _protocolType?: string; 
    public get protocolType() {
        return this.getStringAttribute('protocol_type');
    }
    public set protocolType(value: string) {
        this._protocolType = value;
    }
    public resetProtocolType() {
        this._protocolType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolTypeInput() {
        return this._protocolType;
    }

    // route_key - computed: true, optional: true, required: false
    private _routeKey?: string; 
    public get routeKey() {
        return this.getStringAttribute('route_key');
    }
    public set routeKey(value: string) {
        this._routeKey = value;
    }
    public resetRouteKey() {
        this._routeKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeKeyInput() {
        return this._routeKey;
    }

    // route_selection_expression - computed: true, optional: true, required: false
    private _routeSelectionExpression?: string; 
    public get routeSelectionExpression() {
        return this.getStringAttribute('route_selection_expression');
    }
    public set routeSelectionExpression(value: string) {
        this._routeSelectionExpression = value;
    }
    public resetRouteSelectionExpression() {
        this._routeSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeSelectionExpressionInput() {
        return this._routeSelectionExpression;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // target - computed: true, optional: true, required: false
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    public resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_key_selection_expression: cdktn.stringToTerraform(this._apiKeySelectionExpression),
            base_path: cdktn.stringToTerraform(this._basePath),
            body: cdktn.stringToTerraform(this._body),
            body_s3_location: ccApiBodyS3LocationPropertyToTerraform(this._bodyS3Location.internalValue),
            cors_configuration: ccApiCorsPropertyToTerraform(this._corsConfiguration.internalValue),
            credentials_arn: cdktn.stringToTerraform(this._credentialsArn),
            description: cdktn.stringToTerraform(this._description),
            disable_execute_api_endpoint: cdktn.booleanToTerraform(this._disableExecuteApiEndpoint),
            disable_schema_validation: cdktn.booleanToTerraform(this._disableSchemaValidation),
            fail_on_warnings: cdktn.booleanToTerraform(this._failOnWarnings),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            name: cdktn.stringToTerraform(this._name),
            protocol_type: cdktn.stringToTerraform(this._protocolType),
            route_key: cdktn.stringToTerraform(this._routeKey),
            route_selection_expression: cdktn.stringToTerraform(this._routeSelectionExpression),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target: cdktn.stringToTerraform(this._target),
            version: cdktn.stringToTerraform(this._version),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_key_selection_expression: {
                value: cdktn.stringToHclTerraform(this._apiKeySelectionExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            base_path: {
                value: cdktn.stringToHclTerraform(this._basePath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            body: {
                value: cdktn.stringToHclTerraform(this._body),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            body_s3_location: {
                value: ccApiBodyS3LocationPropertyToHclTerraform(this._bodyS3Location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApi.BodyS3LocationProperty",
            },
            cors_configuration: {
                value: ccApiCorsPropertyToHclTerraform(this._corsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApi.CorsProperty",
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
            disable_execute_api_endpoint: {
                value: cdktn.booleanToHclTerraform(this._disableExecuteApiEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            disable_schema_validation: {
                value: cdktn.booleanToHclTerraform(this._disableSchemaValidation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            fail_on_warnings: {
                value: cdktn.booleanToHclTerraform(this._failOnWarnings),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
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
            protocol_type: {
                value: cdktn.stringToHclTerraform(this._protocolType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_key: {
                value: cdktn.stringToHclTerraform(this._routeKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_selection_expression: {
                value: cdktn.stringToHclTerraform(this._routeSelectionExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            target: {
                value: cdktn.stringToHclTerraform(this._target),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version: {
                value: cdktn.stringToHclTerraform(this._version),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApiBodyS3LocationPropertyToTerraform(struct?: CcApi.BodyS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        etag: cdktn.stringToTerraform(struct!.etag),
        key: cdktn.stringToTerraform(struct!.key),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccApiBodyS3LocationPropertyToHclTerraform(struct?: CcApi.BodyS3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        etag: {
            value: cdktn.stringToHclTerraform(struct!.etag),
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
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApiCorsPropertyToTerraform(struct?: CcApi.CorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_credentials: cdktn.booleanToTerraform(struct!.allowCredentials),
        allow_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowHeaders),
        allow_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowMethods),
        allow_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOrigins),
        expose_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposeHeaders),
        max_age: cdktn.numberToTerraform(struct!.maxAge),
    }
}


export function ccApiCorsPropertyToHclTerraform(struct?: CcApi.CorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_credentials: {
            value: cdktn.booleanToHclTerraform(struct!.allowCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allow_methods: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowMethods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allow_origins: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOrigins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        expose_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposeHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_age: {
            value: cdktn.numberToHclTerraform(struct!.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcApi {
export interface BodyS3LocationProperty {
    /**
    * The S3 bucket that contains the OpenAPI definition to import. Required if you specify a ``BodyS3Location`` for an API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#bucket CcApi#bucket}
    */
    readonly bucket?: string;
    /**
    * The Etag of the S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#etag CcApi#etag}
    */
    readonly etag?: string;
    /**
    * The key of the S3 object. Required if you specify a ``BodyS3Location`` for an API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#key CcApi#key}
    */
    readonly key?: string;
    /**
    * The version of the S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#version CcApi#version}
    */
    readonly version?: string;
}
export class BodyS3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BodyS3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._etag !== undefined) {
            hasAnyValues = true;
            internalValueResult.etag = this._etag;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BodyS3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._etag = undefined;
            this._key = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._etag = value.etag;
            this._key = value.key;
            this._version = value.version;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // etag - computed: true, optional: true, required: false
    private _etag?: string; 
    public get etag() {
        return this.getStringAttribute('etag');
    }
    public set etag(value: string) {
        this._etag = value;
    }
    public resetEtag() {
        this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get etagInput() {
        return this._etag;
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

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface CorsProperty {
    /**
    * Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#allow_credentials CcApi#allow_credentials}
    */
    readonly allowCredentials?: boolean | cdktn.IResolvable;
    /**
    * Represents a collection of allowed headers. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#allow_headers CcApi#allow_headers}
    */
    readonly allowHeaders?: string[];
    /**
    * Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#allow_methods CcApi#allow_methods}
    */
    readonly allowMethods?: string[];
    /**
    * Represents a collection of allowed origins. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#allow_origins CcApi#allow_origins}
    */
    readonly allowOrigins?: string[];
    /**
    * Represents a collection of exposed headers. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#expose_headers CcApi#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api#max_age CcApi#max_age}
    */
    readonly maxAge?: number;
}
export class CorsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowCredentials = this._allowCredentials;
        }
        if (this._allowHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowHeaders = this._allowHeaders;
        }
        if (this._allowMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowMethods = this._allowMethods;
        }
        if (this._allowOrigins !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowOrigins = this._allowOrigins;
        }
        if (this._exposeHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.exposeHeaders = this._exposeHeaders;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowCredentials = undefined;
            this._allowHeaders = undefined;
            this._allowMethods = undefined;
            this._allowOrigins = undefined;
            this._exposeHeaders = undefined;
            this._maxAge = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowCredentials = value.allowCredentials;
            this._allowHeaders = value.allowHeaders;
            this._allowMethods = value.allowMethods;
            this._allowOrigins = value.allowOrigins;
            this._exposeHeaders = value.exposeHeaders;
            this._maxAge = value.maxAge;
        }
    }

    // allow_credentials - computed: true, optional: true, required: false
    private _allowCredentials?: boolean | cdktn.IResolvable; 
    public get allowCredentials() {
        return this.getBooleanAttribute('allow_credentials');
    }
    public set allowCredentials(value: boolean | cdktn.IResolvable) {
        this._allowCredentials = value;
    }
    public resetAllowCredentials() {
        this._allowCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowCredentialsInput() {
        return this._allowCredentials;
    }

    // allow_headers - computed: true, optional: true, required: false
    private _allowHeaders?: string[]; 
    public get allowHeaders() {
        return this.getListAttribute('allow_headers');
    }
    public set allowHeaders(value: string[]) {
        this._allowHeaders = value;
    }
    public resetAllowHeaders() {
        this._allowHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowHeadersInput() {
        return this._allowHeaders;
    }

    // allow_methods - computed: true, optional: true, required: false
    private _allowMethods?: string[]; 
    public get allowMethods() {
        return this.getListAttribute('allow_methods');
    }
    public set allowMethods(value: string[]) {
        this._allowMethods = value;
    }
    public resetAllowMethods() {
        this._allowMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMethodsInput() {
        return this._allowMethods;
    }

    // allow_origins - computed: true, optional: true, required: false
    private _allowOrigins?: string[]; 
    public get allowOrigins() {
        return this.getListAttribute('allow_origins');
    }
    public set allowOrigins(value: string[]) {
        this._allowOrigins = value;
    }
    public resetAllowOrigins() {
        this._allowOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowOriginsInput() {
        return this._allowOrigins;
    }

    // expose_headers - computed: true, optional: true, required: false
    private _exposeHeaders?: string[]; 
    public get exposeHeaders() {
        return this.getListAttribute('expose_headers');
    }
    public set exposeHeaders(value: string[]) {
        this._exposeHeaders = value;
    }
    public resetExposeHeaders() {
        this._exposeHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exposeHeadersInput() {
        return this._exposeHeaders;
    }

    // max_age - computed: true, optional: true, required: false
    private _maxAge?: number; 
    public get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    public set maxAge(value: number) {
        this._maxAge = value;
    }
    public resetMaxAge() {
        this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAgeInput() {
        return this._maxAge;
    }
}
}
