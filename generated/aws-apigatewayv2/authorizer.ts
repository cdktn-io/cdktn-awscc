// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAuthorizerProps extends cdktn.TerraformMetaArguments {
    /**
    * The API identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#api_id CcAuthorizer#api_id}
    */
    readonly apiId: string;
    /**
    * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for ``REQUEST`` authorizers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#authorizer_credentials_arn CcAuthorizer#authorizer_credentials_arn}
    */
    readonly authorizerCredentialsArn?: string;
    /**
    * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are ``1.0`` and ``2.0``. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#authorizer_payload_format_version CcAuthorizer#authorizer_payload_format_version}
    */
    readonly authorizerPayloadFormatVersion?: string;
    /**
    * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds CcAuthorizer#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * The authorizer type. Specify ``REQUEST`` for a Lambda function using incoming request parameters. Specify ``JWT`` to use JSON Web Tokens (supported only for HTTP APIs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#authorizer_type CcAuthorizer#authorizer_type}
    */
    readonly authorizerType: string;
    /**
    * The authorizer's Uniform Resource Identifier (URI). For ``REQUEST`` authorizers, this must be a well-formed Lambda function URI, for example, ``arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations``. In general, the URI has this form: ``arn:aws:apigateway:{region}:lambda:path/{service_api}``, where *{region}* is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial ``/``. For Lambda functions, this is usually of the form ``/2015-03-31/functions/[FunctionARN]/invocations``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#authorizer_uri CcAuthorizer#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#enable_simple_responses CcAuthorizer#enable_simple_responses}
    */
    readonly enableSimpleResponses?: boolean | cdktn.IResolvable;
    /**
    * The identity source for which authorization is requested.
    *  For a ``REQUEST`` authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with ``$``, for example, ``$request.header.Auth``, ``$request.querystring.Name``. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
    *  For ``JWT``, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example ``$request.header.Authorization``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#identity_source CcAuthorizer#identity_source}
    */
    readonly identitySource?: string[];
    /**
    * This parameter is not used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#identity_validation_expression CcAuthorizer#identity_validation_expression}
    */
    readonly identityValidationExpression?: string;
    /**
    * The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer. Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#jwt_configuration CcAuthorizer#jwt_configuration}
    */
    readonly jwtConfiguration?: CcAuthorizer.JWTConfigurationProperty;
    /**
    * The name of the authorizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#name CcAuthorizer#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer awscc_apigatewayv2_authorizer}
*/
export class CcAuthorizer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_authorizer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAuthorizer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAuthorizer to import
    * @param importFromId The id of the existing CcAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAuthorizer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_authorizer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer awscc_apigatewayv2_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAuthorizerProps
    */
    public constructor(scope: Construct, id: string, config: CcAuthorizerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_authorizer',
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
        this._apiId = config.apiId;
        this._authorizerCredentialsArn = config.authorizerCredentialsArn;
        this._authorizerPayloadFormatVersion = config.authorizerPayloadFormatVersion;
        this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
        this._authorizerType = config.authorizerType;
        this._authorizerUri = config.authorizerUri;
        this._enableSimpleResponses = config.enableSimpleResponses;
        this._identitySource = config.identitySource;
        this._identityValidationExpression = config.identityValidationExpression;
        this._jwtConfiguration.internalValue = config.jwtConfiguration;
        this._name = config.name;
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

    // authorizer_credentials_arn - computed: true, optional: true, required: false
    private _authorizerCredentialsArn?: string; 
    public get authorizerCredentialsArn() {
        return this.getStringAttribute('authorizer_credentials_arn');
    }
    public set authorizerCredentialsArn(value: string) {
        this._authorizerCredentialsArn = value;
    }
    public resetAuthorizerCredentialsArn() {
        this._authorizerCredentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerCredentialsArnInput() {
        return this._authorizerCredentialsArn;
    }

    // authorizer_id - computed: true, optional: false, required: false
    public get authorizerId() {
        return this.getStringAttribute('authorizer_id');
    }

    // authorizer_payload_format_version - computed: true, optional: true, required: false
    private _authorizerPayloadFormatVersion?: string; 
    public get authorizerPayloadFormatVersion() {
        return this.getStringAttribute('authorizer_payload_format_version');
    }
    public set authorizerPayloadFormatVersion(value: string) {
        this._authorizerPayloadFormatVersion = value;
    }
    public resetAuthorizerPayloadFormatVersion() {
        this._authorizerPayloadFormatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerPayloadFormatVersionInput() {
        return this._authorizerPayloadFormatVersion;
    }

    // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
    private _authorizerResultTtlInSeconds?: number; 
    public get authorizerResultTtlInSeconds() {
        return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
    }
    public set authorizerResultTtlInSeconds(value: number) {
        this._authorizerResultTtlInSeconds = value;
    }
    public resetAuthorizerResultTtlInSeconds() {
        this._authorizerResultTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerResultTtlInSecondsInput() {
        return this._authorizerResultTtlInSeconds;
    }

    // authorizer_type - computed: false, optional: false, required: true
    private _authorizerType?: string; 
    public get authorizerType() {
        return this.getStringAttribute('authorizer_type');
    }
    public set authorizerType(value: string) {
        this._authorizerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerTypeInput() {
        return this._authorizerType;
    }

    // authorizer_uri - computed: true, optional: true, required: false
    private _authorizerUri?: string; 
    public get authorizerUri() {
        return this.getStringAttribute('authorizer_uri');
    }
    public set authorizerUri(value: string) {
        this._authorizerUri = value;
    }
    public resetAuthorizerUri() {
        this._authorizerUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerUriInput() {
        return this._authorizerUri;
    }

    // enable_simple_responses - computed: true, optional: true, required: false
    private _enableSimpleResponses?: boolean | cdktn.IResolvable; 
    public get enableSimpleResponses() {
        return this.getBooleanAttribute('enable_simple_responses');
    }
    public set enableSimpleResponses(value: boolean | cdktn.IResolvable) {
        this._enableSimpleResponses = value;
    }
    public resetEnableSimpleResponses() {
        this._enableSimpleResponses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSimpleResponsesInput() {
        return this._enableSimpleResponses;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_source - computed: true, optional: true, required: false
    private _identitySource?: string[]; 
    public get identitySource() {
        return this.getListAttribute('identity_source');
    }
    public set identitySource(value: string[]) {
        this._identitySource = value;
    }
    public resetIdentitySource() {
        this._identitySource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identitySourceInput() {
        return this._identitySource;
    }

    // identity_validation_expression - computed: true, optional: true, required: false
    private _identityValidationExpression?: string; 
    public get identityValidationExpression() {
        return this.getStringAttribute('identity_validation_expression');
    }
    public set identityValidationExpression(value: string) {
        this._identityValidationExpression = value;
    }
    public resetIdentityValidationExpression() {
        this._identityValidationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityValidationExpressionInput() {
        return this._identityValidationExpression;
    }

    // jwt_configuration - computed: true, optional: true, required: false
    private _jwtConfiguration = new CcAuthorizer.JWTConfigurationPropertyOutputReference(this, "jwt_configuration");
    public get jwtConfiguration() {
        return this._jwtConfiguration;
    }
    public putJwtConfiguration(value: CcAuthorizer.JWTConfigurationProperty) {
        this._jwtConfiguration.internalValue = value;
    }
    public resetJwtConfiguration() {
        this._jwtConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtConfigurationInput() {
        return this._jwtConfiguration.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            authorizer_credentials_arn: cdktn.stringToTerraform(this._authorizerCredentialsArn),
            authorizer_payload_format_version: cdktn.stringToTerraform(this._authorizerPayloadFormatVersion),
            authorizer_result_ttl_in_seconds: cdktn.numberToTerraform(this._authorizerResultTtlInSeconds),
            authorizer_type: cdktn.stringToTerraform(this._authorizerType),
            authorizer_uri: cdktn.stringToTerraform(this._authorizerUri),
            enable_simple_responses: cdktn.booleanToTerraform(this._enableSimpleResponses),
            identity_source: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identitySource),
            identity_validation_expression: cdktn.stringToTerraform(this._identityValidationExpression),
            jwt_configuration: ccAuthorizerJWTConfigurationPropertyToTerraform(this._jwtConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
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
            authorizer_credentials_arn: {
                value: cdktn.stringToHclTerraform(this._authorizerCredentialsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_payload_format_version: {
                value: cdktn.stringToHclTerraform(this._authorizerPayloadFormatVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_result_ttl_in_seconds: {
                value: cdktn.numberToHclTerraform(this._authorizerResultTtlInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            authorizer_type: {
                value: cdktn.stringToHclTerraform(this._authorizerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorizer_uri: {
                value: cdktn.stringToHclTerraform(this._authorizerUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_simple_responses: {
                value: cdktn.booleanToHclTerraform(this._enableSimpleResponses),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            identity_source: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identitySource),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            identity_validation_expression: {
                value: cdktn.stringToHclTerraform(this._identityValidationExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jwt_configuration: {
                value: ccAuthorizerJWTConfigurationPropertyToHclTerraform(this._jwtConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAuthorizer.JWTConfigurationProperty",
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

export function ccAuthorizerJWTConfigurationPropertyToTerraform(struct?: CcAuthorizer.JWTConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.audience),
        issuer: cdktn.stringToTerraform(struct!.issuer),
    }
}


export function ccAuthorizerJWTConfigurationPropertyToHclTerraform(struct?: CcAuthorizer.JWTConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audience: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.audience),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        issuer: {
            value: cdktn.stringToHclTerraform(struct!.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAuthorizer {
export interface JWTConfigurationProperty {
    /**
    * A list of the intended recipients of the JWT. A valid JWT must provide an ``aud`` that matches at least one entry in this list. See [RFC 7519](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3). Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#audience CcAuthorizer#audience}
    */
    readonly audience?: string[];
    /**
    * The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: ``https://cognito-idp.{region}.amazonaws.com/{userPoolId}``. Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_authorizer#issuer CcAuthorizer#issuer}
    */
    readonly issuer?: string;
}
export class JWTConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JWTConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audience !== undefined) {
            hasAnyValues = true;
            internalValueResult.audience = this._audience;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JWTConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audience = undefined;
            this._issuer = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audience = value.audience;
            this._issuer = value.issuer;
        }
    }

    // audience - computed: true, optional: true, required: false
    private _audience?: string[]; 
    public get audience() {
        return this.getListAttribute('audience');
    }
    public set audience(value: string[]) {
        this._audience = value;
    }
    public resetAudience() {
        this._audience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audienceInput() {
        return this._audience;
    }

    // issuer - computed: true, optional: true, required: false
    private _issuer?: string; 
    public get issuer() {
        return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
        this._issuer = value;
    }
    public resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
        return this._issuer;
    }
}
}
