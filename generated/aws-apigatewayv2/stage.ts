// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStageProps extends cdktn.TerraformMetaArguments {
    /**
    * Settings for logging access in this stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#access_log_settings CcStage#access_log_settings}
    */
    readonly accessLogSettings?: CcStage.AccessLogSettingsProperty;
    /**
    * The API identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#api_id CcStage#api_id}
    */
    readonly apiId: string;
    /**
    * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#auto_deploy CcStage#auto_deploy}
    */
    readonly autoDeploy?: boolean | cdktn.IResolvable;
    /**
    * The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#client_certificate_id CcStage#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * The default route settings for the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#default_route_settings CcStage#default_route_settings}
    */
    readonly defaultRouteSettings?: CcStage.RouteSettingsProperty;
    /**
    * The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#deployment_id CcStage#deployment_id}
    */
    readonly deploymentId?: string;
    /**
    * The description for the API stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#description CcStage#description}
    */
    readonly description?: string;
    /**
    * Route settings for the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#route_settings CcStage#route_settings}
    */
    readonly routeSettings?: string;
    /**
    * The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#stage_name CcStage#stage_name}
    */
    readonly stageName: string;
    /**
    * A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#stage_variables CcStage#stage_variables}
    */
    readonly stageVariables?: string;
    /**
    * The collection of tags. Each tag element is associated with a given resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#tags CcStage#tags}
    */
    readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage awscc_apigatewayv2_stage}
*/
export class CcStage extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_stage";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStage resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStage to import
    * @param importFromId The id of the existing CcStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStage to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_stage", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage awscc_apigatewayv2_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStageProps
    */
    public constructor(scope: Construct, id: string, config: CcStageProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_stage',
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
        this._accessLogSettings.internalValue = config.accessLogSettings;
        this._apiId = config.apiId;
        this._autoDeploy = config.autoDeploy;
        this._clientCertificateId = config.clientCertificateId;
        this._defaultRouteSettings.internalValue = config.defaultRouteSettings;
        this._deploymentId = config.deploymentId;
        this._description = config.description;
        this._routeSettings = config.routeSettings;
        this._stageName = config.stageName;
        this._stageVariables = config.stageVariables;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_log_settings - computed: true, optional: true, required: false
    private _accessLogSettings = new CcStage.AccessLogSettingsPropertyOutputReference(this, "access_log_settings");
    public get accessLogSettings() {
        return this._accessLogSettings;
    }
    public putAccessLogSettings(value: CcStage.AccessLogSettingsProperty) {
        this._accessLogSettings.internalValue = value;
    }
    public resetAccessLogSettings() {
        this._accessLogSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogSettingsInput() {
        return this._accessLogSettings.internalValue;
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

    // client_certificate_id - computed: true, optional: true, required: false
    private _clientCertificateId?: string; 
    public get clientCertificateId() {
        return this.getStringAttribute('client_certificate_id');
    }
    public set clientCertificateId(value: string) {
        this._clientCertificateId = value;
    }
    public resetClientCertificateId() {
        this._clientCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateIdInput() {
        return this._clientCertificateId;
    }

    // default_route_settings - computed: true, optional: true, required: false
    private _defaultRouteSettings = new CcStage.RouteSettingsPropertyOutputReference(this, "default_route_settings");
    public get defaultRouteSettings() {
        return this._defaultRouteSettings;
    }
    public putDefaultRouteSettings(value: CcStage.RouteSettingsProperty) {
        this._defaultRouteSettings.internalValue = value;
    }
    public resetDefaultRouteSettings() {
        this._defaultRouteSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteSettingsInput() {
        return this._defaultRouteSettings.internalValue;
    }

    // deployment_id - computed: true, optional: true, required: false
    private _deploymentId?: string; 
    public get deploymentId() {
        return this.getStringAttribute('deployment_id');
    }
    public set deploymentId(value: string) {
        this._deploymentId = value;
    }
    public resetDeploymentId() {
        this._deploymentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentIdInput() {
        return this._deploymentId;
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

    // route_settings - computed: true, optional: true, required: false
    private _routeSettings?: string; 
    public get routeSettings() {
        return this.getStringAttribute('route_settings');
    }
    public set routeSettings(value: string) {
        this._routeSettings = value;
    }
    public resetRouteSettings() {
        this._routeSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeSettingsInput() {
        return this._routeSettings;
    }

    // stage_name - computed: false, optional: false, required: true
    private _stageName?: string; 
    public get stageName() {
        return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string) {
        this._stageName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
        return this._stageName;
    }

    // stage_variables - computed: true, optional: true, required: false
    private _stageVariables?: string; 
    public get stageVariables() {
        return this.getStringAttribute('stage_variables');
    }
    public set stageVariables(value: string) {
        this._stageVariables = value;
    }
    public resetStageVariables() {
        this._stageVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageVariablesInput() {
        return this._stageVariables;
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
            access_log_settings: ccStageAccessLogSettingsPropertyToTerraform(this._accessLogSettings.internalValue),
            api_id: cdktn.stringToTerraform(this._apiId),
            auto_deploy: cdktn.booleanToTerraform(this._autoDeploy),
            client_certificate_id: cdktn.stringToTerraform(this._clientCertificateId),
            default_route_settings: ccStageRouteSettingsPropertyToTerraform(this._defaultRouteSettings.internalValue),
            deployment_id: cdktn.stringToTerraform(this._deploymentId),
            description: cdktn.stringToTerraform(this._description),
            route_settings: cdktn.stringToTerraform(this._routeSettings),
            stage_name: cdktn.stringToTerraform(this._stageName),
            stage_variables: cdktn.stringToTerraform(this._stageVariables),
            tags: cdktn.stringToTerraform(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_log_settings: {
                value: ccStageAccessLogSettingsPropertyToHclTerraform(this._accessLogSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStage.AccessLogSettingsProperty",
            },
            api_id: {
                value: cdktn.stringToHclTerraform(this._apiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_deploy: {
                value: cdktn.booleanToHclTerraform(this._autoDeploy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            client_certificate_id: {
                value: cdktn.stringToHclTerraform(this._clientCertificateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_route_settings: {
                value: ccStageRouteSettingsPropertyToHclTerraform(this._defaultRouteSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStage.RouteSettingsProperty",
            },
            deployment_id: {
                value: cdktn.stringToHclTerraform(this._deploymentId),
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
            route_settings: {
                value: cdktn.stringToHclTerraform(this._routeSettings),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stage_name: {
                value: cdktn.stringToHclTerraform(this._stageName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stage_variables: {
                value: cdktn.stringToHclTerraform(this._stageVariables),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccStageAccessLogSettingsPropertyToTerraform(struct?: CcStage.AccessLogSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
        format: cdktn.stringToTerraform(struct!.format),
    }
}


export function ccStageAccessLogSettingsPropertyToHclTerraform(struct?: CcStage.AccessLogSettingsProperty | cdktn.IResolvable): any {
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


export function ccStageRouteSettingsPropertyToTerraform(struct?: CcStage.RouteSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_trace_enabled: cdktn.booleanToTerraform(struct!.dataTraceEnabled),
        detailed_metrics_enabled: cdktn.booleanToTerraform(struct!.detailedMetricsEnabled),
        logging_level: cdktn.stringToTerraform(struct!.loggingLevel),
        throttling_burst_limit: cdktn.numberToTerraform(struct!.throttlingBurstLimit),
        throttling_rate_limit: cdktn.numberToTerraform(struct!.throttlingRateLimit),
    }
}


export function ccStageRouteSettingsPropertyToHclTerraform(struct?: CcStage.RouteSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_trace_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.dataTraceEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        detailed_metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.detailedMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        logging_level: {
            value: cdktn.stringToHclTerraform(struct!.loggingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export namespace CcStage {
export interface AccessLogSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#destination_arn CcStage#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#format CcStage#format}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#data_trace_enabled CcStage#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#detailed_metrics_enabled CcStage#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#logging_level CcStage#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#throttling_burst_limit CcStage#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigatewayv2_stage#throttling_rate_limit CcStage#throttling_rate_limit}
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
        if (this._dataTraceEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
        }
        if (this._detailedMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
        }
        if (this._loggingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingLevel = this._loggingLevel;
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
            this._dataTraceEnabled = undefined;
            this._detailedMetricsEnabled = undefined;
            this._loggingLevel = undefined;
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
            this._dataTraceEnabled = value.dataTraceEnabled;
            this._detailedMetricsEnabled = value.detailedMetricsEnabled;
            this._loggingLevel = value.loggingLevel;
            this._throttlingBurstLimit = value.throttlingBurstLimit;
            this._throttlingRateLimit = value.throttlingRateLimit;
        }
    }

    // data_trace_enabled - computed: true, optional: true, required: false
    private _dataTraceEnabled?: boolean | cdktn.IResolvable; 
    public get dataTraceEnabled() {
        return this.getBooleanAttribute('data_trace_enabled');
    }
    public set dataTraceEnabled(value: boolean | cdktn.IResolvable) {
        this._dataTraceEnabled = value;
    }
    public resetDataTraceEnabled() {
        this._dataTraceEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTraceEnabledInput() {
        return this._dataTraceEnabled;
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

    // logging_level - computed: true, optional: true, required: false
    private _loggingLevel?: string; 
    public get loggingLevel() {
        return this.getStringAttribute('logging_level');
    }
    public set loggingLevel(value: string) {
        this._loggingLevel = value;
    }
    public resetLoggingLevel() {
        this._loggingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingLevelInput() {
        return this._loggingLevel;
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
}
