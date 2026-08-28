// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGraphQLApiProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of additional authentication providers for the GraphqlApi API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#additional_authentication_providers CcGraphQLApi#additional_authentication_providers}
    */
    readonly additionalAuthenticationProviders?: CcGraphQLApi.AdditionalAuthenticationProviderProperty[] | cdktn.IResolvable;
    /**
    * The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#api_type CcGraphQLApi#api_type}
    */
    readonly apiType?: string;
    /**
    * Security configuration for your GraphQL API
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#authentication_type CcGraphQLApi#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Enables and controls the enhanced metrics feature. Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#enhanced_metrics_config CcGraphQLApi#enhanced_metrics_config}
    */
    readonly enhancedMetricsConfig?: CcGraphQLApi.EnhancedMetricsConfigProperty;
    /**
    * A map containing the list of resources with their properties and environment variables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#environment_variables CcGraphQLApi#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#introspection_config CcGraphQLApi#introspection_config}
    */
    readonly introspectionConfig?: string;
    /**
    * A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#lambda_authorizer_config CcGraphQLApi#lambda_authorizer_config}
    */
    readonly lambdaAuthorizerConfig?: CcGraphQLApi.LambdaAuthorizerConfigProperty2;
    /**
    * The Amazon CloudWatch Logs configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#log_config CcGraphQLApi#log_config}
    */
    readonly logConfig?: CcGraphQLApi.LogConfigProperty;
    /**
    * The AWS Identity and Access Management service role ARN for a merged API. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#merged_api_execution_role_arn CcGraphQLApi#merged_api_execution_role_arn}
    */
    readonly mergedApiExecutionRoleArn?: string;
    /**
    * The API name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#name CcGraphQLApi#name}
    */
    readonly name: string;
    /**
    * The OpenID Connect configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#open_id_connect_config CcGraphQLApi#open_id_connect_config}
    */
    readonly openIdConnectConfig?: CcGraphQLApi.OpenIdConnectConfigProperty;
    /**
    * The owner contact information for an API resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#owner_contact CcGraphQLApi#owner_contact}
    */
    readonly ownerContact?: string;
    /**
    * The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#query_depth_limit CcGraphQLApi#query_depth_limit}
    */
    readonly queryDepthLimit?: number;
    /**
    * The maximum number of resolvers that can be invoked in a single request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#resolver_count_limit CcGraphQLApi#resolver_count_limit}
    */
    readonly resolverCountLimit?: number;
    /**
    * An arbitrary set of tags (key-value pairs) for this GraphQL API.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#tags CcGraphQLApi#tags}
    */
    readonly tags?: CcGraphQLApi.TagProperty[] | cdktn.IResolvable;
    /**
    * Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#user_pool_config CcGraphQLApi#user_pool_config}
    */
    readonly userPoolConfig?: CcGraphQLApi.UserPoolConfigProperty;
    /**
    * Sets the scope of the GraphQL API to public (GLOBAL) or private (PRIVATE). By default, the scope is set to Global if no value is provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#visibility CcGraphQLApi#visibility}
    */
    readonly visibility?: string;
    /**
    * A flag indicating whether to use AWS X-Ray tracing for this GraphqlApi.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#xray_enabled CcGraphQLApi#xray_enabled}
    */
    readonly xrayEnabled?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api awscc_appsync_graph_ql_api}
*/
export class CcGraphQLApi extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appsync_graph_ql_api";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGraphQLApi resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGraphQLApi to import
    * @param importFromId The id of the existing CcGraphQLApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGraphQLApi to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_graph_ql_api", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api awscc_appsync_graph_ql_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGraphQLApiProps
    */
    public constructor(scope: Construct, id: string, config: CcGraphQLApiProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appsync_graph_ql_api',
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
        this._additionalAuthenticationProviders.internalValue = config.additionalAuthenticationProviders;
        this._apiType = config.apiType;
        this._authenticationType = config.authenticationType;
        this._enhancedMetricsConfig.internalValue = config.enhancedMetricsConfig;
        this._environmentVariables = config.environmentVariables;
        this._introspectionConfig = config.introspectionConfig;
        this._lambdaAuthorizerConfig.internalValue = config.lambdaAuthorizerConfig;
        this._logConfig.internalValue = config.logConfig;
        this._mergedApiExecutionRoleArn = config.mergedApiExecutionRoleArn;
        this._name = config.name;
        this._openIdConnectConfig.internalValue = config.openIdConnectConfig;
        this._ownerContact = config.ownerContact;
        this._queryDepthLimit = config.queryDepthLimit;
        this._resolverCountLimit = config.resolverCountLimit;
        this._tags.internalValue = config.tags;
        this._userPoolConfig.internalValue = config.userPoolConfig;
        this._visibility = config.visibility;
        this._xrayEnabled = config.xrayEnabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_authentication_providers - computed: true, optional: true, required: false
    private _additionalAuthenticationProviders = new CcGraphQLApi.AdditionalAuthenticationProviderPropertyList(this, "additional_authentication_providers", false);
    public get additionalAuthenticationProviders() {
        return this._additionalAuthenticationProviders;
    }
    public putAdditionalAuthenticationProviders(value: CcGraphQLApi.AdditionalAuthenticationProviderProperty[] | cdktn.IResolvable) {
        this._additionalAuthenticationProviders.internalValue = value;
    }
    public resetAdditionalAuthenticationProviders() {
        this._additionalAuthenticationProviders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalAuthenticationProvidersInput() {
        return this._additionalAuthenticationProviders.internalValue;
    }

    // api_id - computed: true, optional: false, required: false
    public get apiId() {
        return this.getStringAttribute('api_id');
    }

    // api_type - computed: true, optional: true, required: false
    private _apiType?: string; 
    public get apiType() {
        return this.getStringAttribute('api_type');
    }
    public set apiType(value: string) {
        this._apiType = value;
    }
    public resetApiType() {
        this._apiType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiTypeInput() {
        return this._apiType;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // enhanced_metrics_config - computed: true, optional: true, required: false
    private _enhancedMetricsConfig = new CcGraphQLApi.EnhancedMetricsConfigPropertyOutputReference(this, "enhanced_metrics_config");
    public get enhancedMetricsConfig() {
        return this._enhancedMetricsConfig;
    }
    public putEnhancedMetricsConfig(value: CcGraphQLApi.EnhancedMetricsConfigProperty) {
        this._enhancedMetricsConfig.internalValue = value;
    }
    public resetEnhancedMetricsConfig() {
        this._enhancedMetricsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedMetricsConfigInput() {
        return this._enhancedMetricsConfig.internalValue;
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // graph_ql_dns - computed: true, optional: false, required: false
    public get graphQlDns() {
        return this.getStringAttribute('graph_ql_dns');
    }

    // graph_ql_endpoint_arn - computed: true, optional: false, required: false
    public get graphQlEndpointArn() {
        return this.getStringAttribute('graph_ql_endpoint_arn');
    }

    // graph_ql_url - computed: true, optional: false, required: false
    public get graphQlUrl() {
        return this.getStringAttribute('graph_ql_url');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // introspection_config - computed: true, optional: true, required: false
    private _introspectionConfig?: string; 
    public get introspectionConfig() {
        return this.getStringAttribute('introspection_config');
    }
    public set introspectionConfig(value: string) {
        this._introspectionConfig = value;
    }
    public resetIntrospectionConfig() {
        this._introspectionConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get introspectionConfigInput() {
        return this._introspectionConfig;
    }

    // lambda_authorizer_config - computed: true, optional: true, required: false
    private _lambdaAuthorizerConfig = new CcGraphQLApi.LambdaAuthorizerConfigProperty2OutputReference(this, "lambda_authorizer_config");
    public get lambdaAuthorizerConfig() {
        return this._lambdaAuthorizerConfig;
    }
    public putLambdaAuthorizerConfig(value: CcGraphQLApi.LambdaAuthorizerConfigProperty2) {
        this._lambdaAuthorizerConfig.internalValue = value;
    }
    public resetLambdaAuthorizerConfig() {
        this._lambdaAuthorizerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaAuthorizerConfigInput() {
        return this._lambdaAuthorizerConfig.internalValue;
    }

    // log_config - computed: true, optional: true, required: false
    private _logConfig = new CcGraphQLApi.LogConfigPropertyOutputReference(this, "log_config");
    public get logConfig() {
        return this._logConfig;
    }
    public putLogConfig(value: CcGraphQLApi.LogConfigProperty) {
        this._logConfig.internalValue = value;
    }
    public resetLogConfig() {
        this._logConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigInput() {
        return this._logConfig.internalValue;
    }

    // merged_api_execution_role_arn - computed: true, optional: true, required: false
    private _mergedApiExecutionRoleArn?: string; 
    public get mergedApiExecutionRoleArn() {
        return this.getStringAttribute('merged_api_execution_role_arn');
    }
    public set mergedApiExecutionRoleArn(value: string) {
        this._mergedApiExecutionRoleArn = value;
    }
    public resetMergedApiExecutionRoleArn() {
        this._mergedApiExecutionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mergedApiExecutionRoleArnInput() {
        return this._mergedApiExecutionRoleArn;
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

    // open_id_connect_config - computed: true, optional: true, required: false
    private _openIdConnectConfig = new CcGraphQLApi.OpenIdConnectConfigPropertyOutputReference(this, "open_id_connect_config");
    public get openIdConnectConfig() {
        return this._openIdConnectConfig;
    }
    public putOpenIdConnectConfig(value: CcGraphQLApi.OpenIdConnectConfigProperty) {
        this._openIdConnectConfig.internalValue = value;
    }
    public resetOpenIdConnectConfig() {
        this._openIdConnectConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openIdConnectConfigInput() {
        return this._openIdConnectConfig.internalValue;
    }

    // owner_contact - computed: true, optional: true, required: false
    private _ownerContact?: string; 
    public get ownerContact() {
        return this.getStringAttribute('owner_contact');
    }
    public set ownerContact(value: string) {
        this._ownerContact = value;
    }
    public resetOwnerContact() {
        this._ownerContact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerContactInput() {
        return this._ownerContact;
    }

    // query_depth_limit - computed: true, optional: true, required: false
    private _queryDepthLimit?: number; 
    public get queryDepthLimit() {
        return this.getNumberAttribute('query_depth_limit');
    }
    public set queryDepthLimit(value: number) {
        this._queryDepthLimit = value;
    }
    public resetQueryDepthLimit() {
        this._queryDepthLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryDepthLimitInput() {
        return this._queryDepthLimit;
    }

    // realtime_dns - computed: true, optional: false, required: false
    public get realtimeDns() {
        return this.getStringAttribute('realtime_dns');
    }

    // realtime_url - computed: true, optional: false, required: false
    public get realtimeUrl() {
        return this.getStringAttribute('realtime_url');
    }

    // resolver_count_limit - computed: true, optional: true, required: false
    private _resolverCountLimit?: number; 
    public get resolverCountLimit() {
        return this.getNumberAttribute('resolver_count_limit');
    }
    public set resolverCountLimit(value: number) {
        this._resolverCountLimit = value;
    }
    public resetResolverCountLimit() {
        this._resolverCountLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverCountLimitInput() {
        return this._resolverCountLimit;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGraphQLApi.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGraphQLApi.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_pool_config - computed: true, optional: true, required: false
    private _userPoolConfig = new CcGraphQLApi.UserPoolConfigPropertyOutputReference(this, "user_pool_config");
    public get userPoolConfig() {
        return this._userPoolConfig;
    }
    public putUserPoolConfig(value: CcGraphQLApi.UserPoolConfigProperty) {
        this._userPoolConfig.internalValue = value;
    }
    public resetUserPoolConfig() {
        this._userPoolConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolConfigInput() {
        return this._userPoolConfig.internalValue;
    }

    // visibility - computed: true, optional: true, required: false
    private _visibility?: string; 
    public get visibility() {
        return this.getStringAttribute('visibility');
    }
    public set visibility(value: string) {
        this._visibility = value;
    }
    public resetVisibility() {
        this._visibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get visibilityInput() {
        return this._visibility;
    }

    // xray_enabled - computed: true, optional: true, required: false
    private _xrayEnabled?: boolean | cdktn.IResolvable; 
    public get xrayEnabled() {
        return this.getBooleanAttribute('xray_enabled');
    }
    public set xrayEnabled(value: boolean | cdktn.IResolvable) {
        this._xrayEnabled = value;
    }
    public resetXrayEnabled() {
        this._xrayEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xrayEnabledInput() {
        return this._xrayEnabled;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_authentication_providers: cdktn.listMapper(ccGraphQLApiAdditionalAuthenticationProviderPropertyToTerraform, false)(this._additionalAuthenticationProviders.internalValue),
            api_type: cdktn.stringToTerraform(this._apiType),
            authentication_type: cdktn.stringToTerraform(this._authenticationType),
            enhanced_metrics_config: ccGraphQLApiEnhancedMetricsConfigPropertyToTerraform(this._enhancedMetricsConfig.internalValue),
            environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
            introspection_config: cdktn.stringToTerraform(this._introspectionConfig),
            lambda_authorizer_config: ccGraphQLApiLambdaAuthorizerConfigProperty2ToTerraform(this._lambdaAuthorizerConfig.internalValue),
            log_config: ccGraphQLApiLogConfigPropertyToTerraform(this._logConfig.internalValue),
            merged_api_execution_role_arn: cdktn.stringToTerraform(this._mergedApiExecutionRoleArn),
            name: cdktn.stringToTerraform(this._name),
            open_id_connect_config: ccGraphQLApiOpenIdConnectConfigPropertyToTerraform(this._openIdConnectConfig.internalValue),
            owner_contact: cdktn.stringToTerraform(this._ownerContact),
            query_depth_limit: cdktn.numberToTerraform(this._queryDepthLimit),
            resolver_count_limit: cdktn.numberToTerraform(this._resolverCountLimit),
            tags: cdktn.listMapper(ccGraphQLApiTagPropertyToTerraform, false)(this._tags.internalValue),
            user_pool_config: ccGraphQLApiUserPoolConfigPropertyToTerraform(this._userPoolConfig.internalValue),
            visibility: cdktn.stringToTerraform(this._visibility),
            xray_enabled: cdktn.booleanToTerraform(this._xrayEnabled),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_authentication_providers: {
                value: cdktn.listMapperHcl(ccGraphQLApiAdditionalAuthenticationProviderPropertyToHclTerraform, false)(this._additionalAuthenticationProviders.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGraphQLApi.AdditionalAuthenticationProviderPropertyList",
            },
            api_type: {
                value: cdktn.stringToHclTerraform(this._apiType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authentication_type: {
                value: cdktn.stringToHclTerraform(this._authenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enhanced_metrics_config: {
                value: ccGraphQLApiEnhancedMetricsConfigPropertyToHclTerraform(this._enhancedMetricsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGraphQLApi.EnhancedMetricsConfigProperty",
            },
            environment_variables: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            introspection_config: {
                value: cdktn.stringToHclTerraform(this._introspectionConfig),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lambda_authorizer_config: {
                value: ccGraphQLApiLambdaAuthorizerConfigProperty2ToHclTerraform(this._lambdaAuthorizerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGraphQLApi.LambdaAuthorizerConfigProperty2",
            },
            log_config: {
                value: ccGraphQLApiLogConfigPropertyToHclTerraform(this._logConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGraphQLApi.LogConfigProperty",
            },
            merged_api_execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._mergedApiExecutionRoleArn),
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
            open_id_connect_config: {
                value: ccGraphQLApiOpenIdConnectConfigPropertyToHclTerraform(this._openIdConnectConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGraphQLApi.OpenIdConnectConfigProperty",
            },
            owner_contact: {
                value: cdktn.stringToHclTerraform(this._ownerContact),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_depth_limit: {
                value: cdktn.numberToHclTerraform(this._queryDepthLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            resolver_count_limit: {
                value: cdktn.numberToHclTerraform(this._resolverCountLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGraphQLApiTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGraphQLApi.TagPropertyList",
            },
            user_pool_config: {
                value: ccGraphQLApiUserPoolConfigPropertyToHclTerraform(this._userPoolConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGraphQLApi.UserPoolConfigProperty",
            },
            visibility: {
                value: cdktn.stringToHclTerraform(this._visibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            xray_enabled: {
                value: cdktn.booleanToHclTerraform(this._xrayEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGraphQLApiLambdaAuthorizerConfigPropertyToTerraform(struct?: CcGraphQLApi.LambdaAuthorizerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizer_result_ttl_in_seconds: cdktn.numberToTerraform(struct!.authorizerResultTtlInSeconds),
        authorizer_uri: cdktn.stringToTerraform(struct!.authorizerUri),
        identity_validation_expression: cdktn.stringToTerraform(struct!.identityValidationExpression),
    }
}


export function ccGraphQLApiLambdaAuthorizerConfigPropertyToHclTerraform(struct?: CcGraphQLApi.LambdaAuthorizerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizer_result_ttl_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.authorizerResultTtlInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        authorizer_uri: {
            value: cdktn.stringToHclTerraform(struct!.authorizerUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_validation_expression: {
            value: cdktn.stringToHclTerraform(struct!.identityValidationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphQLApiOpenIDConnectConfigPropertyToTerraform(struct?: CcGraphQLApi.OpenIDConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_ttl: cdktn.numberToTerraform(struct!.authTtl),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        iat_ttl: cdktn.numberToTerraform(struct!.iatTtl),
        issuer: cdktn.stringToTerraform(struct!.issuer),
    }
}


export function ccGraphQLApiOpenIDConnectConfigPropertyToHclTerraform(struct?: CcGraphQLApi.OpenIDConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_ttl: {
            value: cdktn.numberToHclTerraform(struct!.authTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iat_ttl: {
            value: cdktn.numberToHclTerraform(struct!.iatTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccGraphQLApiCognitoUserPoolConfigPropertyToTerraform(struct?: CcGraphQLApi.CognitoUserPoolConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_id_client_regex: cdktn.stringToTerraform(struct!.appIdClientRegex),
        aws_region: cdktn.stringToTerraform(struct!.awsRegion),
        user_pool_id: cdktn.stringToTerraform(struct!.userPoolId),
    }
}


export function ccGraphQLApiCognitoUserPoolConfigPropertyToHclTerraform(struct?: CcGraphQLApi.CognitoUserPoolConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_id_client_regex: {
            value: cdktn.stringToHclTerraform(struct!.appIdClientRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_region: {
            value: cdktn.stringToHclTerraform(struct!.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_id: {
            value: cdktn.stringToHclTerraform(struct!.userPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphQLApiAdditionalAuthenticationProviderPropertyToTerraform(struct?: CcGraphQLApi.AdditionalAuthenticationProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
        lambda_authorizer_config: ccGraphQLApiLambdaAuthorizerConfigPropertyToTerraform(struct!.lambdaAuthorizerConfig),
        open_id_connect_config: ccGraphQLApiOpenIDConnectConfigPropertyToTerraform(struct!.openIdConnectConfig),
        user_pool_config: ccGraphQLApiCognitoUserPoolConfigPropertyToTerraform(struct!.userPoolConfig),
    }
}


export function ccGraphQLApiAdditionalAuthenticationProviderPropertyToHclTerraform(struct?: CcGraphQLApi.AdditionalAuthenticationProviderProperty | cdktn.IResolvable): any {
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
        lambda_authorizer_config: {
            value: ccGraphQLApiLambdaAuthorizerConfigPropertyToHclTerraform(struct!.lambdaAuthorizerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaAuthorizerConfigProperty",
        },
        open_id_connect_config: {
            value: ccGraphQLApiOpenIDConnectConfigPropertyToHclTerraform(struct!.openIdConnectConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenIDConnectConfigProperty",
        },
        user_pool_config: {
            value: ccGraphQLApiCognitoUserPoolConfigPropertyToHclTerraform(struct!.userPoolConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CognitoUserPoolConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphQLApiEnhancedMetricsConfigPropertyToTerraform(struct?: CcGraphQLApi.EnhancedMetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_source_level_metrics_behavior: cdktn.stringToTerraform(struct!.dataSourceLevelMetricsBehavior),
        operation_level_metrics_config: cdktn.stringToTerraform(struct!.operationLevelMetricsConfig),
        resolver_level_metrics_behavior: cdktn.stringToTerraform(struct!.resolverLevelMetricsBehavior),
    }
}


export function ccGraphQLApiEnhancedMetricsConfigPropertyToHclTerraform(struct?: CcGraphQLApi.EnhancedMetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_source_level_metrics_behavior: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceLevelMetricsBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation_level_metrics_config: {
            value: cdktn.stringToHclTerraform(struct!.operationLevelMetricsConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resolver_level_metrics_behavior: {
            value: cdktn.stringToHclTerraform(struct!.resolverLevelMetricsBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphQLApiLambdaAuthorizerConfigProperty2ToTerraform(struct?: CcGraphQLApi.LambdaAuthorizerConfigProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorizer_result_ttl_in_seconds: cdktn.numberToTerraform(struct!.authorizerResultTtlInSeconds),
        authorizer_uri: cdktn.stringToTerraform(struct!.authorizerUri),
        identity_validation_expression: cdktn.stringToTerraform(struct!.identityValidationExpression),
    }
}


export function ccGraphQLApiLambdaAuthorizerConfigProperty2ToHclTerraform(struct?: CcGraphQLApi.LambdaAuthorizerConfigProperty2 | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorizer_result_ttl_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.authorizerResultTtlInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        authorizer_uri: {
            value: cdktn.stringToHclTerraform(struct!.authorizerUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_validation_expression: {
            value: cdktn.stringToHclTerraform(struct!.identityValidationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphQLApiLogConfigPropertyToTerraform(struct?: CcGraphQLApi.LogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_role_arn: cdktn.stringToTerraform(struct!.cloudwatchLogsRoleArn),
        exclude_verbose_content: cdktn.booleanToTerraform(struct!.excludeVerboseContent),
        field_log_level: cdktn.stringToTerraform(struct!.fieldLogLevel),
    }
}


export function ccGraphQLApiLogConfigPropertyToHclTerraform(struct?: CcGraphQLApi.LogConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.cloudwatchLogsRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclude_verbose_content: {
            value: cdktn.booleanToHclTerraform(struct!.excludeVerboseContent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        field_log_level: {
            value: cdktn.stringToHclTerraform(struct!.fieldLogLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccGraphQLApiOpenIdConnectConfigPropertyToTerraform(struct?: CcGraphQLApi.OpenIdConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_ttl: cdktn.numberToTerraform(struct!.authTtl),
        client_id: cdktn.stringToTerraform(struct!.clientId),
        iat_ttl: cdktn.numberToTerraform(struct!.iatTtl),
        issuer: cdktn.stringToTerraform(struct!.issuer),
    }
}


export function ccGraphQLApiOpenIdConnectConfigPropertyToHclTerraform(struct?: CcGraphQLApi.OpenIdConnectConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_ttl: {
            value: cdktn.numberToHclTerraform(struct!.authTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        client_id: {
            value: cdktn.stringToHclTerraform(struct!.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iat_ttl: {
            value: cdktn.numberToHclTerraform(struct!.iatTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccGraphQLApiTagPropertyToTerraform(struct?: CcGraphQLApi.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGraphQLApiTagPropertyToHclTerraform(struct?: CcGraphQLApi.TagProperty | cdktn.IResolvable): any {
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


export function ccGraphQLApiUserPoolConfigPropertyToTerraform(struct?: CcGraphQLApi.UserPoolConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_id_client_regex: cdktn.stringToTerraform(struct!.appIdClientRegex),
        aws_region: cdktn.stringToTerraform(struct!.awsRegion),
        default_action: cdktn.stringToTerraform(struct!.defaultAction),
        user_pool_id: cdktn.stringToTerraform(struct!.userPoolId),
    }
}


export function ccGraphQLApiUserPoolConfigPropertyToHclTerraform(struct?: CcGraphQLApi.UserPoolConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_id_client_regex: {
            value: cdktn.stringToHclTerraform(struct!.appIdClientRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_region: {
            value: cdktn.stringToHclTerraform(struct!.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_action: {
            value: cdktn.stringToHclTerraform(struct!.defaultAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_id: {
            value: cdktn.stringToHclTerraform(struct!.userPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGraphQLApi {
export interface LambdaAuthorizerConfigProperty {
    /**
    * The number of seconds a response should be cached for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds CcGraphQLApi#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * The ARN of the Lambda function to be called for authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#authorizer_uri CcGraphQLApi#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * A regular expression for validation of tokens before the Lambda function is called.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#identity_validation_expression CcGraphQLApi#identity_validation_expression}
    */
    readonly identityValidationExpression?: string;
}
export class LambdaAuthorizerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaAuthorizerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizerResultTtlInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
        }
        if (this._authorizerUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerUri = this._authorizerUri;
        }
        if (this._identityValidationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityValidationExpression = this._identityValidationExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaAuthorizerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizerResultTtlInSeconds = undefined;
            this._authorizerUri = undefined;
            this._identityValidationExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
            this._authorizerUri = value.authorizerUri;
            this._identityValidationExpression = value.identityValidationExpression;
        }
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
}
export interface OpenIDConnectConfigProperty {
    /**
    * The number of milliseconds that a token is valid after being authenticated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#auth_ttl CcGraphQLApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * The client identifier of the Relying party at the OpenID identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#client_id CcGraphQLApi#client_id}
    */
    readonly clientId?: string;
    /**
    * The number of milliseconds that a token is valid after it's issued to a user.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#iat_ttl CcGraphQLApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * The issuer for the OIDC configuration. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#issuer CcGraphQLApi#issuer}
    */
    readonly issuer?: string;
}
export class OpenIDConnectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenIDConnectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authTtl = this._authTtl;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._iatTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.iatTtl = this._iatTtl;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenIDConnectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authTtl = undefined;
            this._clientId = undefined;
            this._iatTtl = undefined;
            this._issuer = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authTtl = value.authTtl;
            this._clientId = value.clientId;
            this._iatTtl = value.iatTtl;
            this._issuer = value.issuer;
        }
    }

    // auth_ttl - computed: true, optional: true, required: false
    private _authTtl?: number; 
    public get authTtl() {
        return this.getNumberAttribute('auth_ttl');
    }
    public set authTtl(value: number) {
        this._authTtl = value;
    }
    public resetAuthTtl() {
        this._authTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTtlInput() {
        return this._authTtl;
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

    // iat_ttl - computed: true, optional: true, required: false
    private _iatTtl?: number; 
    public get iatTtl() {
        return this.getNumberAttribute('iat_ttl');
    }
    public set iatTtl(value: number) {
        this._iatTtl = value;
    }
    public resetIatTtl() {
        this._iatTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iatTtlInput() {
        return this._iatTtl;
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
export interface CognitoUserPoolConfigProperty {
    /**
    * A regular expression for validating the incoming Amazon Cognito user pool app client ID. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#app_id_client_regex CcGraphQLApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * The AWS Region in which the user pool was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#aws_region CcGraphQLApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * The user pool ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#user_pool_id CcGraphQLApi#user_pool_id}
    */
    readonly userPoolId?: string;
}
export class CognitoUserPoolConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CognitoUserPoolConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appIdClientRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.appIdClientRegex = this._appIdClientRegex;
        }
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._userPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolId = this._userPoolId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CognitoUserPoolConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appIdClientRegex = undefined;
            this._awsRegion = undefined;
            this._userPoolId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appIdClientRegex = value.appIdClientRegex;
            this._awsRegion = value.awsRegion;
            this._userPoolId = value.userPoolId;
        }
    }

    // app_id_client_regex - computed: true, optional: true, required: false
    private _appIdClientRegex?: string; 
    public get appIdClientRegex() {
        return this.getStringAttribute('app_id_client_regex');
    }
    public set appIdClientRegex(value: string) {
        this._appIdClientRegex = value;
    }
    public resetAppIdClientRegex() {
        this._appIdClientRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdClientRegexInput() {
        return this._appIdClientRegex;
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string; 
    public get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string) {
        this._awsRegion = value;
    }
    public resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
        return this._awsRegion;
    }

    // user_pool_id - computed: true, optional: true, required: false
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    public resetUserPoolId() {
        this._userPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }
}
export interface AdditionalAuthenticationProviderProperty {
    /**
    * The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#authentication_type CcGraphQLApi#authentication_type}
    */
    readonly authenticationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#lambda_authorizer_config CcGraphQLApi#lambda_authorizer_config}
    */
    readonly lambdaAuthorizerConfig?: LambdaAuthorizerConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#open_id_connect_config CcGraphQLApi#open_id_connect_config}
    */
    readonly openIdConnectConfig?: OpenIDConnectConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#user_pool_config CcGraphQLApi#user_pool_config}
    */
    readonly userPoolConfig?: CognitoUserPoolConfigProperty;
}
export class AdditionalAuthenticationProviderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdditionalAuthenticationProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._lambdaAuthorizerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaAuthorizerConfig = this._lambdaAuthorizerConfig?.internalValue;
        }
        if (this._openIdConnectConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openIdConnectConfig = this._openIdConnectConfig?.internalValue;
        }
        if (this._userPoolConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolConfig = this._userPoolConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalAuthenticationProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._lambdaAuthorizerConfig.internalValue = undefined;
            this._openIdConnectConfig.internalValue = undefined;
            this._userPoolConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._lambdaAuthorizerConfig.internalValue = value.lambdaAuthorizerConfig;
            this._openIdConnectConfig.internalValue = value.openIdConnectConfig;
            this._userPoolConfig.internalValue = value.userPoolConfig;
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

    // lambda_authorizer_config - computed: true, optional: true, required: false
    private _lambdaAuthorizerConfig = new LambdaAuthorizerConfigPropertyOutputReference(this, "lambda_authorizer_config");
    public get lambdaAuthorizerConfig() {
        return this._lambdaAuthorizerConfig;
    }
    public putLambdaAuthorizerConfig(value: LambdaAuthorizerConfigProperty) {
        this._lambdaAuthorizerConfig.internalValue = value;
    }
    public resetLambdaAuthorizerConfig() {
        this._lambdaAuthorizerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaAuthorizerConfigInput() {
        return this._lambdaAuthorizerConfig.internalValue;
    }

    // open_id_connect_config - computed: true, optional: true, required: false
    private _openIdConnectConfig = new OpenIDConnectConfigPropertyOutputReference(this, "open_id_connect_config");
    public get openIdConnectConfig() {
        return this._openIdConnectConfig;
    }
    public putOpenIdConnectConfig(value: OpenIDConnectConfigProperty) {
        this._openIdConnectConfig.internalValue = value;
    }
    public resetOpenIdConnectConfig() {
        this._openIdConnectConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openIdConnectConfigInput() {
        return this._openIdConnectConfig.internalValue;
    }

    // user_pool_config - computed: true, optional: true, required: false
    private _userPoolConfig = new CognitoUserPoolConfigPropertyOutputReference(this, "user_pool_config");
    public get userPoolConfig() {
        return this._userPoolConfig;
    }
    public putUserPoolConfig(value: CognitoUserPoolConfigProperty) {
        this._userPoolConfig.internalValue = value;
    }
    public resetUserPoolConfig() {
        this._userPoolConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolConfigInput() {
        return this._userPoolConfig.internalValue;
    }
}

export class AdditionalAuthenticationProviderPropertyList extends cdktn.ComplexList {
    public internalValue? : AdditionalAuthenticationProviderProperty[] | cdktn.IResolvable

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
    public get(index: number): AdditionalAuthenticationProviderPropertyOutputReference {
        return new AdditionalAuthenticationProviderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EnhancedMetricsConfigProperty {
    /**
    * Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#data_source_level_metrics_behavior CcGraphQLApi#data_source_level_metrics_behavior}
    */
    readonly dataSourceLevelMetricsBehavior?: string;
    /**
    * Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#operation_level_metrics_config CcGraphQLApi#operation_level_metrics_config}
    */
    readonly operationLevelMetricsConfig?: string;
    /**
    * Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#resolver_level_metrics_behavior CcGraphQLApi#resolver_level_metrics_behavior}
    */
    readonly resolverLevelMetricsBehavior?: string;
}
export class EnhancedMetricsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnhancedMetricsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSourceLevelMetricsBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceLevelMetricsBehavior = this._dataSourceLevelMetricsBehavior;
        }
        if (this._operationLevelMetricsConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.operationLevelMetricsConfig = this._operationLevelMetricsConfig;
        }
        if (this._resolverLevelMetricsBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolverLevelMetricsBehavior = this._resolverLevelMetricsBehavior;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnhancedMetricsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSourceLevelMetricsBehavior = undefined;
            this._operationLevelMetricsConfig = undefined;
            this._resolverLevelMetricsBehavior = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSourceLevelMetricsBehavior = value.dataSourceLevelMetricsBehavior;
            this._operationLevelMetricsConfig = value.operationLevelMetricsConfig;
            this._resolverLevelMetricsBehavior = value.resolverLevelMetricsBehavior;
        }
    }

    // data_source_level_metrics_behavior - computed: true, optional: true, required: false
    private _dataSourceLevelMetricsBehavior?: string; 
    public get dataSourceLevelMetricsBehavior() {
        return this.getStringAttribute('data_source_level_metrics_behavior');
    }
    public set dataSourceLevelMetricsBehavior(value: string) {
        this._dataSourceLevelMetricsBehavior = value;
    }
    public resetDataSourceLevelMetricsBehavior() {
        this._dataSourceLevelMetricsBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceLevelMetricsBehaviorInput() {
        return this._dataSourceLevelMetricsBehavior;
    }

    // operation_level_metrics_config - computed: true, optional: true, required: false
    private _operationLevelMetricsConfig?: string; 
    public get operationLevelMetricsConfig() {
        return this.getStringAttribute('operation_level_metrics_config');
    }
    public set operationLevelMetricsConfig(value: string) {
        this._operationLevelMetricsConfig = value;
    }
    public resetOperationLevelMetricsConfig() {
        this._operationLevelMetricsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationLevelMetricsConfigInput() {
        return this._operationLevelMetricsConfig;
    }

    // resolver_level_metrics_behavior - computed: true, optional: true, required: false
    private _resolverLevelMetricsBehavior?: string; 
    public get resolverLevelMetricsBehavior() {
        return this.getStringAttribute('resolver_level_metrics_behavior');
    }
    public set resolverLevelMetricsBehavior(value: string) {
        this._resolverLevelMetricsBehavior = value;
    }
    public resetResolverLevelMetricsBehavior() {
        this._resolverLevelMetricsBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverLevelMetricsBehaviorInput() {
        return this._resolverLevelMetricsBehavior;
    }
}
export interface LambdaAuthorizerConfigProperty2 {
    /**
    * The number of seconds a response should be cached for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#authorizer_result_ttl_in_seconds CcGraphQLApi#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * The ARN of the Lambda function to be called for authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#authorizer_uri CcGraphQLApi#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * A regular expression for validation of tokens before the Lambda function is called.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#identity_validation_expression CcGraphQLApi#identity_validation_expression}
    */
    readonly identityValidationExpression?: string;
}
export class LambdaAuthorizerConfigProperty2OutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaAuthorizerConfigProperty2 | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizerResultTtlInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
        }
        if (this._authorizerUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerUri = this._authorizerUri;
        }
        if (this._identityValidationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityValidationExpression = this._identityValidationExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaAuthorizerConfigProperty2 | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizerResultTtlInSeconds = undefined;
            this._authorizerUri = undefined;
            this._identityValidationExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
            this._authorizerUri = value.authorizerUri;
            this._identityValidationExpression = value.identityValidationExpression;
        }
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
}
export interface LogConfigProperty {
    /**
    * The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#cloudwatch_logs_role_arn CcGraphQLApi#cloudwatch_logs_role_arn}
    */
    readonly cloudwatchLogsRoleArn?: string;
    /**
    * Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#exclude_verbose_content CcGraphQLApi#exclude_verbose_content}
    */
    readonly excludeVerboseContent?: boolean | cdktn.IResolvable;
    /**
    * The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#field_log_level CcGraphQLApi#field_log_level}
    */
    readonly fieldLogLevel?: string;
}
export class LogConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsRoleArn = this._cloudwatchLogsRoleArn;
        }
        if (this._excludeVerboseContent !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeVerboseContent = this._excludeVerboseContent;
        }
        if (this._fieldLogLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldLogLevel = this._fieldLogLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsRoleArn = undefined;
            this._excludeVerboseContent = undefined;
            this._fieldLogLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsRoleArn = value.cloudwatchLogsRoleArn;
            this._excludeVerboseContent = value.excludeVerboseContent;
            this._fieldLogLevel = value.fieldLogLevel;
        }
    }

    // cloudwatch_logs_role_arn - computed: true, optional: true, required: false
    private _cloudwatchLogsRoleArn?: string; 
    public get cloudwatchLogsRoleArn() {
        return this.getStringAttribute('cloudwatch_logs_role_arn');
    }
    public set cloudwatchLogsRoleArn(value: string) {
        this._cloudwatchLogsRoleArn = value;
    }
    public resetCloudwatchLogsRoleArn() {
        this._cloudwatchLogsRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsRoleArnInput() {
        return this._cloudwatchLogsRoleArn;
    }

    // exclude_verbose_content - computed: true, optional: true, required: false
    private _excludeVerboseContent?: boolean | cdktn.IResolvable; 
    public get excludeVerboseContent() {
        return this.getBooleanAttribute('exclude_verbose_content');
    }
    public set excludeVerboseContent(value: boolean | cdktn.IResolvable) {
        this._excludeVerboseContent = value;
    }
    public resetExcludeVerboseContent() {
        this._excludeVerboseContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeVerboseContentInput() {
        return this._excludeVerboseContent;
    }

    // field_log_level - computed: true, optional: true, required: false
    private _fieldLogLevel?: string; 
    public get fieldLogLevel() {
        return this.getStringAttribute('field_log_level');
    }
    public set fieldLogLevel(value: string) {
        this._fieldLogLevel = value;
    }
    public resetFieldLogLevel() {
        this._fieldLogLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldLogLevelInput() {
        return this._fieldLogLevel;
    }
}
export interface OpenIdConnectConfigProperty {
    /**
    * The number of milliseconds that a token is valid after being authenticated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#auth_ttl CcGraphQLApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * The client identifier of the Relying party at the OpenID identity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#client_id CcGraphQLApi#client_id}
    */
    readonly clientId?: string;
    /**
    * The number of milliseconds that a token is valid after it's issued to a user.
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#iat_ttl CcGraphQLApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * The issuer for the OIDC configuration. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#issuer CcGraphQLApi#issuer}
    */
    readonly issuer?: string;
}
export class OpenIdConnectConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenIdConnectConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authTtl = this._authTtl;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._iatTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.iatTtl = this._iatTtl;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenIdConnectConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authTtl = undefined;
            this._clientId = undefined;
            this._iatTtl = undefined;
            this._issuer = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authTtl = value.authTtl;
            this._clientId = value.clientId;
            this._iatTtl = value.iatTtl;
            this._issuer = value.issuer;
        }
    }

    // auth_ttl - computed: true, optional: true, required: false
    private _authTtl?: number; 
    public get authTtl() {
        return this.getNumberAttribute('auth_ttl');
    }
    public set authTtl(value: number) {
        this._authTtl = value;
    }
    public resetAuthTtl() {
        this._authTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTtlInput() {
        return this._authTtl;
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

    // iat_ttl - computed: true, optional: true, required: false
    private _iatTtl?: number; 
    public get iatTtl() {
        return this.getNumberAttribute('iat_ttl');
    }
    public set iatTtl(value: number) {
        this._iatTtl = value;
    }
    public resetIatTtl() {
        this._iatTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iatTtlInput() {
        return this._iatTtl;
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#key CcGraphQLApi#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#value CcGraphQLApi#value}
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
export interface UserPoolConfigProperty {
    /**
    * A regular expression for validating the incoming Amazon Cognito user pool app client ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#app_id_client_regex CcGraphQLApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * The AWS Region in which the user pool was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#aws_region CcGraphQLApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#default_action CcGraphQLApi#default_action}
    */
    readonly defaultAction?: string;
    /**
    * The user pool ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_graph_ql_api#user_pool_id CcGraphQLApi#user_pool_id}
    */
    readonly userPoolId?: string;
}
export class UserPoolConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UserPoolConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appIdClientRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.appIdClientRegex = this._appIdClientRegex;
        }
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._defaultAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultAction = this._defaultAction;
        }
        if (this._userPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolId = this._userPoolId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UserPoolConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appIdClientRegex = undefined;
            this._awsRegion = undefined;
            this._defaultAction = undefined;
            this._userPoolId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appIdClientRegex = value.appIdClientRegex;
            this._awsRegion = value.awsRegion;
            this._defaultAction = value.defaultAction;
            this._userPoolId = value.userPoolId;
        }
    }

    // app_id_client_regex - computed: true, optional: true, required: false
    private _appIdClientRegex?: string; 
    public get appIdClientRegex() {
        return this.getStringAttribute('app_id_client_regex');
    }
    public set appIdClientRegex(value: string) {
        this._appIdClientRegex = value;
    }
    public resetAppIdClientRegex() {
        this._appIdClientRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdClientRegexInput() {
        return this._appIdClientRegex;
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string; 
    public get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string) {
        this._awsRegion = value;
    }
    public resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
        return this._awsRegion;
    }

    // default_action - computed: true, optional: true, required: false
    private _defaultAction?: string; 
    public get defaultAction() {
        return this.getStringAttribute('default_action');
    }
    public set defaultAction(value: string) {
        this._defaultAction = value;
    }
    public resetDefaultAction() {
        this._defaultAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionInput() {
        return this._defaultAction;
    }

    // user_pool_id - computed: true, optional: true, required: false
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    public resetUserPoolId() {
        this._userPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }
}
}
