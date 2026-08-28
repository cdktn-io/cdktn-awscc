// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApiGatewayManagedOverridesProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the API for which to override the configuration of API Gateway-managed resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#api_id CcApiGatewayManagedOverrides#api_id}
    */
    readonly apiId: string;
    /**
    * Overrides the integration configuration for an API Gateway-managed integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#integration CcApiGatewayManagedOverrides#integration}
    */
    readonly integration?: CcApiGatewayManagedOverrides.IntegrationOverridesProperty;
    /**
    * Overrides the route configuration for an API Gateway-managed route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#route CcApiGatewayManagedOverrides#route}
    */
    readonly route?: CcApiGatewayManagedOverrides.RouteOverridesProperty;
    /**
    * Overrides the stage configuration for an API Gateway-managed stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#stage CcApiGatewayManagedOverrides#stage}
    */
    readonly stage?: CcApiGatewayManagedOverrides.StageOverridesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides awscc_apigatewayv2_api_gateway_managed_overrides}
*/
export class CcApiGatewayManagedOverrides extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_api_gateway_managed_overrides";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApiGatewayManagedOverrides to import
    * @param importFromId The id of the existing CcApiGatewayManagedOverrides that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApiGatewayManagedOverrides to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_api_gateway_managed_overrides", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides awscc_apigatewayv2_api_gateway_managed_overrides} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApiGatewayManagedOverridesProps
    */
    public constructor(scope: Construct, id: string, config: CcApiGatewayManagedOverridesProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_api_gateway_managed_overrides',
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
        this._integration.internalValue = config.integration;
        this._route.internalValue = config.route;
        this._stage.internalValue = config.stage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_gateway_managed_overrides_id - computed: true, optional: false, required: false
    public get apiGatewayManagedOverridesId() {
        return this.getStringAttribute('api_gateway_managed_overrides_id');
    }

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // integration - computed: true, optional: true, required: false
    private _integration = new CcApiGatewayManagedOverrides.IntegrationOverridesPropertyOutputReference(this, "integration");
    public get integration() {
        return this._integration;
    }
    public putIntegration(value: CcApiGatewayManagedOverrides.IntegrationOverridesProperty) {
        this._integration.internalValue = value;
    }
    public resetIntegration() {
        this._integration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationInput() {
        return this._integration.internalValue;
    }

    // route - computed: true, optional: true, required: false
    private _route = new CcApiGatewayManagedOverrides.RouteOverridesPropertyOutputReference(this, "route");
    public get route() {
        return this._route;
    }
    public putRoute(value: CcApiGatewayManagedOverrides.RouteOverridesProperty) {
        this._route.internalValue = value;
    }
    public resetRoute() {
        this._route.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeInput() {
        return this._route.internalValue;
    }

    // stage - computed: true, optional: true, required: false
    private _stage = new CcApiGatewayManagedOverrides.StageOverridesPropertyOutputReference(this, "stage");
    public get stage() {
        return this._stage;
    }
    public putStage(value: CcApiGatewayManagedOverrides.StageOverridesProperty) {
        this._stage.internalValue = value;
    }
    public resetStage() {
        this._stage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
        return this._stage.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            integration: ccApiGatewayManagedOverridesIntegrationOverridesPropertyToTerraform(this._integration.internalValue),
            route: ccApiGatewayManagedOverridesRouteOverridesPropertyToTerraform(this._route.internalValue),
            stage: ccApiGatewayManagedOverridesStageOverridesPropertyToTerraform(this._stage.internalValue),
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
            integration: {
                value: ccApiGatewayManagedOverridesIntegrationOverridesPropertyToHclTerraform(this._integration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApiGatewayManagedOverrides.IntegrationOverridesProperty",
            },
            route: {
                value: ccApiGatewayManagedOverridesRouteOverridesPropertyToHclTerraform(this._route.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApiGatewayManagedOverrides.RouteOverridesProperty",
            },
            stage: {
                value: ccApiGatewayManagedOverridesStageOverridesPropertyToHclTerraform(this._stage.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApiGatewayManagedOverrides.StageOverridesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApiGatewayManagedOverridesIntegrationOverridesPropertyToTerraform(struct?: CcApiGatewayManagedOverrides.IntegrationOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        integration_method: cdktn.stringToTerraform(struct!.integrationMethod),
        payload_format_version: cdktn.stringToTerraform(struct!.payloadFormatVersion),
        timeout_in_millis: cdktn.numberToTerraform(struct!.timeoutInMillis),
    }
}


export function ccApiGatewayManagedOverridesIntegrationOverridesPropertyToHclTerraform(struct?: CcApiGatewayManagedOverrides.IntegrationOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integration_method: {
            value: cdktn.stringToHclTerraform(struct!.integrationMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload_format_version: {
            value: cdktn.stringToHclTerraform(struct!.payloadFormatVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApiGatewayManagedOverridesRouteOverridesPropertyToTerraform(struct?: CcApiGatewayManagedOverrides.RouteOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.authorizationScopes),
        authorization_type: cdktn.stringToTerraform(struct!.authorizationType),
        authorizer_id: cdktn.stringToTerraform(struct!.authorizerId),
        operation_name: cdktn.stringToTerraform(struct!.operationName),
        target: cdktn.stringToTerraform(struct!.target),
    }
}


export function ccApiGatewayManagedOverridesRouteOverridesPropertyToHclTerraform(struct?: CcApiGatewayManagedOverrides.RouteOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_scopes: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.authorizationScopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        authorization_type: {
            value: cdktn.stringToHclTerraform(struct!.authorizationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorizer_id: {
            value: cdktn.stringToHclTerraform(struct!.authorizerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation_name: {
            value: cdktn.stringToHclTerraform(struct!.operationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktn.stringToHclTerraform(struct!.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApiGatewayManagedOverridesAccessLogSettingsPropertyToTerraform(struct?: CcApiGatewayManagedOverrides.AccessLogSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
        format: cdktn.stringToTerraform(struct!.format),
    }
}


export function ccApiGatewayManagedOverridesAccessLogSettingsPropertyToHclTerraform(struct?: CcApiGatewayManagedOverrides.AccessLogSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_arn: {
            value: cdktn.stringToHclTerraform(struct!.destinationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApiGatewayManagedOverridesRouteSettingsPropertyToTerraform(struct?: CcApiGatewayManagedOverrides.RouteSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detailed_metrics_enabled: cdktn.booleanToTerraform(struct!.detailedMetricsEnabled),
        throttling_burst_limit: cdktn.numberToTerraform(struct!.throttlingBurstLimit),
        throttling_rate_limit: cdktn.numberToTerraform(struct!.throttlingRateLimit),
    }
}


export function ccApiGatewayManagedOverridesRouteSettingsPropertyToHclTerraform(struct?: CcApiGatewayManagedOverrides.RouteSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detailed_metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.detailedMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        throttling_burst_limit: {
            value: cdktn.numberToHclTerraform(struct!.throttlingBurstLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        throttling_rate_limit: {
            value: cdktn.numberToHclTerraform(struct!.throttlingRateLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApiGatewayManagedOverridesStageRouteSettingsPropertyToTerraform(struct?: CcApiGatewayManagedOverrides.StageRouteSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detailed_metrics_enabled: cdktn.booleanToTerraform(struct!.detailedMetricsEnabled),
        throttling_burst_limit: cdktn.numberToTerraform(struct!.throttlingBurstLimit),
        throttling_rate_limit: cdktn.numberToTerraform(struct!.throttlingRateLimit),
    }
}


export function ccApiGatewayManagedOverridesStageRouteSettingsPropertyToHclTerraform(struct?: CcApiGatewayManagedOverrides.StageRouteSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detailed_metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.detailedMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        throttling_burst_limit: {
            value: cdktn.numberToHclTerraform(struct!.throttlingBurstLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        throttling_rate_limit: {
            value: cdktn.numberToHclTerraform(struct!.throttlingRateLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApiGatewayManagedOverridesStageOverridesPropertyToTerraform(struct?: CcApiGatewayManagedOverrides.StageOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_log_settings: ccApiGatewayManagedOverridesAccessLogSettingsPropertyToTerraform(struct!.accessLogSettings),
        auto_deploy: cdktn.booleanToTerraform(struct!.autoDeploy),
        default_route_settings: ccApiGatewayManagedOverridesRouteSettingsPropertyToTerraform(struct!.defaultRouteSettings),
        description: cdktn.stringToTerraform(struct!.description),
        route_settings: cdktn.hashMapper(ccApiGatewayManagedOverridesStageRouteSettingsPropertyToTerraform)(struct!.routeSettings),
        stage_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.stageVariables),
    }
}


export function ccApiGatewayManagedOverridesStageOverridesPropertyToHclTerraform(struct?: CcApiGatewayManagedOverrides.StageOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_log_settings: {
            value: ccApiGatewayManagedOverridesAccessLogSettingsPropertyToHclTerraform(struct!.accessLogSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessLogSettingsProperty",
        },
        auto_deploy: {
            value: cdktn.booleanToHclTerraform(struct!.autoDeploy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        default_route_settings: {
            value: ccApiGatewayManagedOverridesRouteSettingsPropertyToHclTerraform(struct!.defaultRouteSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "RouteSettingsProperty",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        route_settings: {
            value: cdktn.hashMapperHcl(ccApiGatewayManagedOverridesStageRouteSettingsPropertyToHclTerraform)(struct!.routeSettings),
            isBlock: true,
            type: "map",
            storageClassType: "StageRouteSettingsPropertyMap",
        },
        stage_variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.stageVariables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcApiGatewayManagedOverrides {
export interface IntegrationOverridesProperty {
    /**
    * The description of the integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#description CcApiGatewayManagedOverrides#description}
    */
    readonly description?: string;
    /**
    * Specifies the integration's HTTP method type. For WebSocket APIs, if you use a Lambda integration, you must set the integration method to POST.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#integration_method CcApiGatewayManagedOverrides#integration_method}
    */
    readonly integrationMethod?: string;
    /**
    * Specifies the format of the payload sent to an integration. Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#payload_format_version CcApiGatewayManagedOverrides#payload_format_version}
    */
    readonly payloadFormatVersion?: string;
    /**
    * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#timeout_in_millis CcApiGatewayManagedOverrides#timeout_in_millis}
    */
    readonly timeoutInMillis?: number;
}
export class IntegrationOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntegrationOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._integrationMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.integrationMethod = this._integrationMethod;
        }
        if (this._payloadFormatVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadFormatVersion = this._payloadFormatVersion;
        }
        if (this._timeoutInMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutInMillis = this._timeoutInMillis;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegrationOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._integrationMethod = undefined;
            this._payloadFormatVersion = undefined;
            this._timeoutInMillis = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._integrationMethod = value.integrationMethod;
            this._payloadFormatVersion = value.payloadFormatVersion;
            this._timeoutInMillis = value.timeoutInMillis;
        }
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
}
export interface RouteOverridesProperty {
    /**
    * The authorization scopes supported by this route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#authorization_scopes CcApiGatewayManagedOverrides#authorization_scopes}
    */
    readonly authorizationScopes?: string[];
    /**
    * The authorization type for the route. To learn more, see AuthorizationType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#authorization_type CcApiGatewayManagedOverrides#authorization_type}
    */
    readonly authorizationType?: string;
    /**
    * The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#authorizer_id CcApiGatewayManagedOverrides#authorizer_id}
    */
    readonly authorizerId?: string;
    /**
    * The operation name for the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#operation_name CcApiGatewayManagedOverrides#operation_name}
    */
    readonly operationName?: string;
    /**
    * For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#target CcApiGatewayManagedOverrides#target}
    */
    readonly target?: string;
}
export class RouteOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouteOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationScopes !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationScopes = this._authorizationScopes;
        }
        if (this._authorizationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationType = this._authorizationType;
        }
        if (this._authorizerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerId = this._authorizerId;
        }
        if (this._operationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.operationName = this._operationName;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouteOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationScopes = undefined;
            this._authorizationType = undefined;
            this._authorizerId = undefined;
            this._operationName = undefined;
            this._target = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationScopes = value.authorizationScopes;
            this._authorizationType = value.authorizationType;
            this._authorizerId = value.authorizerId;
            this._operationName = value.operationName;
            this._target = value.target;
        }
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
}
export interface AccessLogSettingsProperty {
    /**
    * The ARN of the CloudWatch Logs log group to receive access logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#destination_arn CcApiGatewayManagedOverrides#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#format CcApiGatewayManagedOverrides#format}
    */
    readonly format?: string;
}
export class AccessLogSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessLogSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessLogSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationArn = undefined;
            this._format = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationArn = value.destinationArn;
            this._format = value.format;
        }
    }

    // destination_arn - computed: true, optional: true, required: false
    private _destinationArn?: string; 
    public get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
        this._destinationArn = value;
    }
    public resetDestinationArn() {
        this._destinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
        return this._destinationArn;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }
}
export interface RouteSettingsProperty {
    /**
    * Specifies whether detailed metrics are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#detailed_metrics_enabled CcApiGatewayManagedOverrides#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies the throttling burst limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_burst_limit CcApiGatewayManagedOverrides#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Specifies the throttling rate limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_rate_limit CcApiGatewayManagedOverrides#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
}
export class RouteSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouteSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detailedMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
        }
        if (this._throttlingBurstLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
        }
        if (this._throttlingRateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouteSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detailedMetricsEnabled = undefined;
            this._throttlingBurstLimit = undefined;
            this._throttlingRateLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detailedMetricsEnabled = value.detailedMetricsEnabled;
            this._throttlingBurstLimit = value.throttlingBurstLimit;
            this._throttlingRateLimit = value.throttlingRateLimit;
        }
    }

    // detailed_metrics_enabled - computed: true, optional: true, required: false
    private _detailedMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get detailedMetricsEnabled() {
        return this.getBooleanAttribute('detailed_metrics_enabled');
    }
    public set detailedMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._detailedMetricsEnabled = value;
    }
    public resetDetailedMetricsEnabled() {
        this._detailedMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailedMetricsEnabledInput() {
        return this._detailedMetricsEnabled;
    }

    // throttling_burst_limit - computed: true, optional: true, required: false
    private _throttlingBurstLimit?: number; 
    public get throttlingBurstLimit() {
        return this.getNumberAttribute('throttling_burst_limit');
    }
    public set throttlingBurstLimit(value: number) {
        this._throttlingBurstLimit = value;
    }
    public resetThrottlingBurstLimit() {
        this._throttlingBurstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingBurstLimitInput() {
        return this._throttlingBurstLimit;
    }

    // throttling_rate_limit - computed: true, optional: true, required: false
    private _throttlingRateLimit?: number; 
    public get throttlingRateLimit() {
        return this.getNumberAttribute('throttling_rate_limit');
    }
    public set throttlingRateLimit(value: number) {
        this._throttlingRateLimit = value;
    }
    public resetThrottlingRateLimit() {
        this._throttlingRateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingRateLimitInput() {
        return this._throttlingRateLimit;
    }
}
export interface StageRouteSettingsProperty {
    /**
    * Specifies whether detailed metrics are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#detailed_metrics_enabled CcApiGatewayManagedOverrides#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies the throttling burst limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_burst_limit CcApiGatewayManagedOverrides#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Specifies the throttling rate limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_rate_limit CcApiGatewayManagedOverrides#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
}
export class StageRouteSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StageRouteSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detailedMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
        }
        if (this._throttlingBurstLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
        }
        if (this._throttlingRateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StageRouteSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detailedMetricsEnabled = undefined;
            this._throttlingBurstLimit = undefined;
            this._throttlingRateLimit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detailedMetricsEnabled = value.detailedMetricsEnabled;
            this._throttlingBurstLimit = value.throttlingBurstLimit;
            this._throttlingRateLimit = value.throttlingRateLimit;
        }
    }

    // detailed_metrics_enabled - computed: true, optional: true, required: false
    private _detailedMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get detailedMetricsEnabled() {
        return this.getBooleanAttribute('detailed_metrics_enabled');
    }
    public set detailedMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._detailedMetricsEnabled = value;
    }
    public resetDetailedMetricsEnabled() {
        this._detailedMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailedMetricsEnabledInput() {
        return this._detailedMetricsEnabled;
    }

    // throttling_burst_limit - computed: true, optional: true, required: false
    private _throttlingBurstLimit?: number; 
    public get throttlingBurstLimit() {
        return this.getNumberAttribute('throttling_burst_limit');
    }
    public set throttlingBurstLimit(value: number) {
        this._throttlingBurstLimit = value;
    }
    public resetThrottlingBurstLimit() {
        this._throttlingBurstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingBurstLimitInput() {
        return this._throttlingBurstLimit;
    }

    // throttling_rate_limit - computed: true, optional: true, required: false
    private _throttlingRateLimit?: number; 
    public get throttlingRateLimit() {
        return this.getNumberAttribute('throttling_rate_limit');
    }
    public set throttlingRateLimit(value: number) {
        this._throttlingRateLimit = value;
    }
    public resetThrottlingRateLimit() {
        this._throttlingRateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingRateLimitInput() {
        return this._throttlingRateLimit;
    }
}

export class StageRouteSettingsPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: StageRouteSettingsProperty } | cdktn.IResolvable

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
    public get(key: string): StageRouteSettingsPropertyOutputReference {
        return new StageRouteSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface StageOverridesProperty {
    /**
    * Settings for logging access in a stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#access_log_settings CcApiGatewayManagedOverrides#access_log_settings}
    */
    readonly accessLogSettings?: AccessLogSettingsProperty;
    /**
    * Specifies whether updates to an API automatically trigger a new deployment. The default value is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#auto_deploy CcApiGatewayManagedOverrides#auto_deploy}
    */
    readonly autoDeploy?: boolean | cdktn.IResolvable;
    /**
    * The default route settings for the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#default_route_settings CcApiGatewayManagedOverrides#default_route_settings}
    */
    readonly defaultRouteSettings?: RouteSettingsProperty;
    /**
    * The description for the API stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#description CcApiGatewayManagedOverrides#description}
    */
    readonly description?: string;
    /**
    * Route settings for the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#route_settings CcApiGatewayManagedOverrides#route_settings}
    */
    readonly routeSettings?: { [key: string]: StageRouteSettingsProperty } | cdktn.IResolvable;
    /**
    * A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_api_gateway_managed_overrides#stage_variables CcApiGatewayManagedOverrides#stage_variables}
    */
    readonly stageVariables?: { [key: string]: string };
}
export class StageOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StageOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessLogSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessLogSettings = this._accessLogSettings?.internalValue;
        }
        if (this._autoDeploy !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoDeploy = this._autoDeploy;
        }
        if (this._defaultRouteSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultRouteSettings = this._defaultRouteSettings?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._routeSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routeSettings = this._routeSettings?.internalValue;
        }
        if (this._stageVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.stageVariables = this._stageVariables;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StageOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessLogSettings.internalValue = undefined;
            this._autoDeploy = undefined;
            this._defaultRouteSettings.internalValue = undefined;
            this._description = undefined;
            this._routeSettings.internalValue = undefined;
            this._stageVariables = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessLogSettings.internalValue = value.accessLogSettings;
            this._autoDeploy = value.autoDeploy;
            this._defaultRouteSettings.internalValue = value.defaultRouteSettings;
            this._description = value.description;
            this._routeSettings.internalValue = value.routeSettings;
            this._stageVariables = value.stageVariables;
        }
    }

    // access_log_settings - computed: true, optional: true, required: false
    private _accessLogSettings = new AccessLogSettingsPropertyOutputReference(this, "access_log_settings");
    public get accessLogSettings() {
        return this._accessLogSettings;
    }
    public putAccessLogSettings(value: AccessLogSettingsProperty) {
        this._accessLogSettings.internalValue = value;
    }
    public resetAccessLogSettings() {
        this._accessLogSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogSettingsInput() {
        return this._accessLogSettings.internalValue;
    }

    // auto_deploy - computed: true, optional: true, required: false
    private _autoDeploy?: boolean | cdktn.IResolvable; 
    public get autoDeploy() {
        return this.getBooleanAttribute('auto_deploy');
    }
    public set autoDeploy(value: boolean | cdktn.IResolvable) {
        this._autoDeploy = value;
    }
    public resetAutoDeploy() {
        this._autoDeploy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDeployInput() {
        return this._autoDeploy;
    }

    // default_route_settings - computed: true, optional: true, required: false
    private _defaultRouteSettings = new RouteSettingsPropertyOutputReference(this, "default_route_settings");
    public get defaultRouteSettings() {
        return this._defaultRouteSettings;
    }
    public putDefaultRouteSettings(value: RouteSettingsProperty) {
        this._defaultRouteSettings.internalValue = value;
    }
    public resetDefaultRouteSettings() {
        this._defaultRouteSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteSettingsInput() {
        return this._defaultRouteSettings.internalValue;
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

    // route_settings - computed: true, optional: true, required: false
    private _routeSettings = new StageRouteSettingsPropertyMap(this, "route_settings");
    public get routeSettings() {
        return this._routeSettings;
    }
    public putRouteSettings(value: { [key: string]: StageRouteSettingsProperty } | cdktn.IResolvable) {
        this._routeSettings.internalValue = value;
    }
    public resetRouteSettings() {
        this._routeSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeSettingsInput() {
        return this._routeSettings.internalValue;
    }

    // stage_variables - computed: true, optional: true, required: false
    private _stageVariables?: { [key: string]: string }; 
    public get stageVariables() {
        return this.getStringMapAttribute('stage_variables');
    }
    public set stageVariables(value: { [key: string]: string }) {
        this._stageVariables = value;
    }
    public resetStageVariables() {
        this._stageVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageVariablesInput() {
        return this._stageVariables;
    }
}
}
