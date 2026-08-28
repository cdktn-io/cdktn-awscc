// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeploymentProps extends cdktn.TerraformMetaArguments {
    /**
    * The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#deployment_canary_settings CcDeployment#deployment_canary_settings}
    */
    readonly deploymentCanarySettings?: CcDeployment.DeploymentCanarySettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#description CcDeployment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#rest_api_id CcDeployment#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * The description of the Stage resource for the Deployment resource to create. To specify a stage description, you must also provide a stage name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#stage_description CcDeployment#stage_description}
    */
    readonly stageDescription?: CcDeployment.StageDescriptionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#stage_name CcDeployment#stage_name}
    */
    readonly stageName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment awscc_apigateway_deployment}
*/
export class CcDeployment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_deployment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeployment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeployment to import
    * @param importFromId The id of the existing CcDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeployment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_deployment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment awscc_apigateway_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeploymentProps
    */
    public constructor(scope: Construct, id: string, config: CcDeploymentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_deployment',
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
        this._deploymentCanarySettings.internalValue = config.deploymentCanarySettings;
        this._description = config.description;
        this._restApiId = config.restApiId;
        this._stageDescription.internalValue = config.stageDescription;
        this._stageName = config.stageName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // deployment_canary_settings - computed: true, optional: true, required: false
    private _deploymentCanarySettings = new CcDeployment.DeploymentCanarySettingsPropertyOutputReference(this, "deployment_canary_settings");
    public get deploymentCanarySettings() {
        return this._deploymentCanarySettings;
    }
    public putDeploymentCanarySettings(value: CcDeployment.DeploymentCanarySettingsProperty) {
        this._deploymentCanarySettings.internalValue = value;
    }
    public resetDeploymentCanarySettings() {
        this._deploymentCanarySettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentCanarySettingsInput() {
        return this._deploymentCanarySettings.internalValue;
    }

    // deployment_id - computed: true, optional: false, required: false
    public get deploymentId() {
        return this.getStringAttribute('deployment_id');
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

    // stage_description - computed: true, optional: true, required: false
    private _stageDescription = new CcDeployment.StageDescriptionPropertyOutputReference(this, "stage_description");
    public get stageDescription() {
        return this._stageDescription;
    }
    public putStageDescription(value: CcDeployment.StageDescriptionProperty) {
        this._stageDescription.internalValue = value;
    }
    public resetStageDescription() {
        this._stageDescription.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageDescriptionInput() {
        return this._stageDescription.internalValue;
    }

    // stage_name - computed: true, optional: true, required: false
    private _stageName?: string; 
    public get stageName() {
        return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string) {
        this._stageName = value;
    }
    public resetStageName() {
        this._stageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
        return this._stageName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            deployment_canary_settings: ccDeploymentDeploymentCanarySettingsPropertyToTerraform(this._deploymentCanarySettings.internalValue),
            description: cdktn.stringToTerraform(this._description),
            rest_api_id: cdktn.stringToTerraform(this._restApiId),
            stage_description: ccDeploymentStageDescriptionPropertyToTerraform(this._stageDescription.internalValue),
            stage_name: cdktn.stringToTerraform(this._stageName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deployment_canary_settings: {
                value: ccDeploymentDeploymentCanarySettingsPropertyToHclTerraform(this._deploymentCanarySettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeployment.DeploymentCanarySettingsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            stage_description: {
                value: ccDeploymentStageDescriptionPropertyToHclTerraform(this._stageDescription.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeployment.StageDescriptionProperty",
            },
            stage_name: {
                value: cdktn.stringToHclTerraform(this._stageName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeploymentDeploymentCanarySettingsPropertyToTerraform(struct?: CcDeployment.DeploymentCanarySettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        percent_traffic: cdktn.numberToTerraform(struct!.percentTraffic),
        stage_variable_overrides: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.stageVariableOverrides),
        use_stage_cache: cdktn.booleanToTerraform(struct!.useStageCache),
    }
}


export function ccDeploymentDeploymentCanarySettingsPropertyToHclTerraform(struct?: CcDeployment.DeploymentCanarySettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        percent_traffic: {
            value: cdktn.numberToHclTerraform(struct!.percentTraffic),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stage_variable_overrides: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.stageVariableOverrides),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        use_stage_cache: {
            value: cdktn.booleanToHclTerraform(struct!.useStageCache),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentAccessLogSettingPropertyToTerraform(struct?: CcDeployment.AccessLogSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
        format: cdktn.stringToTerraform(struct!.format),
    }
}


export function ccDeploymentAccessLogSettingPropertyToHclTerraform(struct?: CcDeployment.AccessLogSettingProperty | cdktn.IResolvable): any {
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


export function ccDeploymentCanarySettingPropertyToTerraform(struct?: CcDeployment.CanarySettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        percent_traffic: cdktn.numberToTerraform(struct!.percentTraffic),
        stage_variable_overrides: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.stageVariableOverrides),
        use_stage_cache: cdktn.booleanToTerraform(struct!.useStageCache),
    }
}


export function ccDeploymentCanarySettingPropertyToHclTerraform(struct?: CcDeployment.CanarySettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        percent_traffic: {
            value: cdktn.numberToHclTerraform(struct!.percentTraffic),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stage_variable_overrides: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.stageVariableOverrides),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        use_stage_cache: {
            value: cdktn.booleanToHclTerraform(struct!.useStageCache),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentMethodSettingPropertyToTerraform(struct?: CcDeployment.MethodSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cache_data_encrypted: cdktn.booleanToTerraform(struct!.cacheDataEncrypted),
        cache_ttl_in_seconds: cdktn.numberToTerraform(struct!.cacheTtlInSeconds),
        caching_enabled: cdktn.booleanToTerraform(struct!.cachingEnabled),
        data_trace_enabled: cdktn.booleanToTerraform(struct!.dataTraceEnabled),
        http_method: cdktn.stringToTerraform(struct!.httpMethod),
        logging_level: cdktn.stringToTerraform(struct!.loggingLevel),
        metrics_enabled: cdktn.booleanToTerraform(struct!.metricsEnabled),
        resource_path: cdktn.stringToTerraform(struct!.resourcePath),
        throttling_burst_limit: cdktn.numberToTerraform(struct!.throttlingBurstLimit),
        throttling_rate_limit: cdktn.numberToTerraform(struct!.throttlingRateLimit),
    }
}


export function ccDeploymentMethodSettingPropertyToHclTerraform(struct?: CcDeployment.MethodSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cache_data_encrypted: {
            value: cdktn.booleanToHclTerraform(struct!.cacheDataEncrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_ttl_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.cacheTtlInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        caching_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.cachingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        data_trace_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.dataTraceEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        http_method: {
            value: cdktn.stringToHclTerraform(struct!.httpMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logging_level: {
            value: cdktn.stringToHclTerraform(struct!.loggingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.metricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        resource_path: {
            value: cdktn.stringToHclTerraform(struct!.resourcePath),
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


export function ccDeploymentTagPropertyToTerraform(struct?: CcDeployment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeploymentTagPropertyToHclTerraform(struct?: CcDeployment.TagProperty | cdktn.IResolvable): any {
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


export function ccDeploymentStageDescriptionPropertyToTerraform(struct?: CcDeployment.StageDescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_log_setting: ccDeploymentAccessLogSettingPropertyToTerraform(struct!.accessLogSetting),
        cache_cluster_enabled: cdktn.booleanToTerraform(struct!.cacheClusterEnabled),
        cache_cluster_size: cdktn.stringToTerraform(struct!.cacheClusterSize),
        cache_data_encrypted: cdktn.booleanToTerraform(struct!.cacheDataEncrypted),
        cache_ttl_in_seconds: cdktn.numberToTerraform(struct!.cacheTtlInSeconds),
        caching_enabled: cdktn.booleanToTerraform(struct!.cachingEnabled),
        canary_setting: ccDeploymentCanarySettingPropertyToTerraform(struct!.canarySetting),
        client_certificate_id: cdktn.stringToTerraform(struct!.clientCertificateId),
        data_trace_enabled: cdktn.booleanToTerraform(struct!.dataTraceEnabled),
        description: cdktn.stringToTerraform(struct!.description),
        documentation_version: cdktn.stringToTerraform(struct!.documentationVersion),
        logging_level: cdktn.stringToTerraform(struct!.loggingLevel),
        method_settings: cdktn.listMapper(ccDeploymentMethodSettingPropertyToTerraform, false)(struct!.methodSettings),
        metrics_enabled: cdktn.booleanToTerraform(struct!.metricsEnabled),
        tags: cdktn.listMapper(ccDeploymentTagPropertyToTerraform, false)(struct!.tags),
        throttling_burst_limit: cdktn.numberToTerraform(struct!.throttlingBurstLimit),
        throttling_rate_limit: cdktn.numberToTerraform(struct!.throttlingRateLimit),
        tracing_enabled: cdktn.booleanToTerraform(struct!.tracingEnabled),
        variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.variables),
    }
}


export function ccDeploymentStageDescriptionPropertyToHclTerraform(struct?: CcDeployment.StageDescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_log_setting: {
            value: ccDeploymentAccessLogSettingPropertyToHclTerraform(struct!.accessLogSetting),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessLogSettingProperty",
        },
        cache_cluster_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.cacheClusterEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_cluster_size: {
            value: cdktn.stringToHclTerraform(struct!.cacheClusterSize),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_data_encrypted: {
            value: cdktn.booleanToHclTerraform(struct!.cacheDataEncrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_ttl_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.cacheTtlInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        caching_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.cachingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        canary_setting: {
            value: ccDeploymentCanarySettingPropertyToHclTerraform(struct!.canarySetting),
            isBlock: true,
            type: "struct",
            storageClassType: "CanarySettingProperty",
        },
        client_certificate_id: {
            value: cdktn.stringToHclTerraform(struct!.clientCertificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_trace_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.dataTraceEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        documentation_version: {
            value: cdktn.stringToHclTerraform(struct!.documentationVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logging_level: {
            value: cdktn.stringToHclTerraform(struct!.loggingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        method_settings: {
            value: cdktn.listMapperHcl(ccDeploymentMethodSettingPropertyToHclTerraform, false)(struct!.methodSettings),
            isBlock: true,
            type: "set",
            storageClassType: "MethodSettingPropertyList",
        },
        metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.metricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        tags: {
            value: cdktn.listMapperHcl(ccDeploymentTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
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
        tracing_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.tracingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.variables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDeployment {
export interface DeploymentCanarySettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#percent_traffic CcDeployment#percent_traffic}
    */
    readonly percentTraffic?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#stage_variable_overrides CcDeployment#stage_variable_overrides}
    */
    readonly stageVariableOverrides?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#use_stage_cache CcDeployment#use_stage_cache}
    */
    readonly useStageCache?: boolean | cdktn.IResolvable;
}
export class DeploymentCanarySettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentCanarySettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._percentTraffic !== undefined) {
            hasAnyValues = true;
            internalValueResult.percentTraffic = this._percentTraffic;
        }
        if (this._stageVariableOverrides !== undefined) {
            hasAnyValues = true;
            internalValueResult.stageVariableOverrides = this._stageVariableOverrides;
        }
        if (this._useStageCache !== undefined) {
            hasAnyValues = true;
            internalValueResult.useStageCache = this._useStageCache;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentCanarySettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._percentTraffic = undefined;
            this._stageVariableOverrides = undefined;
            this._useStageCache = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._percentTraffic = value.percentTraffic;
            this._stageVariableOverrides = value.stageVariableOverrides;
            this._useStageCache = value.useStageCache;
        }
    }

    // percent_traffic - computed: true, optional: true, required: false
    private _percentTraffic?: number; 
    public get percentTraffic() {
        return this.getNumberAttribute('percent_traffic');
    }
    public set percentTraffic(value: number) {
        this._percentTraffic = value;
    }
    public resetPercentTraffic() {
        this._percentTraffic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get percentTrafficInput() {
        return this._percentTraffic;
    }

    // stage_variable_overrides - computed: true, optional: true, required: false
    private _stageVariableOverrides?: { [key: string]: string }; 
    public get stageVariableOverrides() {
        return this.getStringMapAttribute('stage_variable_overrides');
    }
    public set stageVariableOverrides(value: { [key: string]: string }) {
        this._stageVariableOverrides = value;
    }
    public resetStageVariableOverrides() {
        this._stageVariableOverrides = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageVariableOverridesInput() {
        return this._stageVariableOverrides;
    }

    // use_stage_cache - computed: true, optional: true, required: false
    private _useStageCache?: boolean | cdktn.IResolvable; 
    public get useStageCache() {
        return this.getBooleanAttribute('use_stage_cache');
    }
    public set useStageCache(value: boolean | cdktn.IResolvable) {
        this._useStageCache = value;
    }
    public resetUseStageCache() {
        this._useStageCache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useStageCacheInput() {
        return this._useStageCache;
    }
}
export interface AccessLogSettingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#destination_arn CcDeployment#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#format CcDeployment#format}
    */
    readonly format?: string;
}
export class AccessLogSettingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessLogSettingProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AccessLogSettingProperty | cdktn.IResolvable | undefined) {
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
export interface CanarySettingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#percent_traffic CcDeployment#percent_traffic}
    */
    readonly percentTraffic?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#stage_variable_overrides CcDeployment#stage_variable_overrides}
    */
    readonly stageVariableOverrides?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#use_stage_cache CcDeployment#use_stage_cache}
    */
    readonly useStageCache?: boolean | cdktn.IResolvable;
}
export class CanarySettingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CanarySettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._percentTraffic !== undefined) {
            hasAnyValues = true;
            internalValueResult.percentTraffic = this._percentTraffic;
        }
        if (this._stageVariableOverrides !== undefined) {
            hasAnyValues = true;
            internalValueResult.stageVariableOverrides = this._stageVariableOverrides;
        }
        if (this._useStageCache !== undefined) {
            hasAnyValues = true;
            internalValueResult.useStageCache = this._useStageCache;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CanarySettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._percentTraffic = undefined;
            this._stageVariableOverrides = undefined;
            this._useStageCache = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._percentTraffic = value.percentTraffic;
            this._stageVariableOverrides = value.stageVariableOverrides;
            this._useStageCache = value.useStageCache;
        }
    }

    // percent_traffic - computed: true, optional: true, required: false
    private _percentTraffic?: number; 
    public get percentTraffic() {
        return this.getNumberAttribute('percent_traffic');
    }
    public set percentTraffic(value: number) {
        this._percentTraffic = value;
    }
    public resetPercentTraffic() {
        this._percentTraffic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get percentTrafficInput() {
        return this._percentTraffic;
    }

    // stage_variable_overrides - computed: true, optional: true, required: false
    private _stageVariableOverrides?: { [key: string]: string }; 
    public get stageVariableOverrides() {
        return this.getStringMapAttribute('stage_variable_overrides');
    }
    public set stageVariableOverrides(value: { [key: string]: string }) {
        this._stageVariableOverrides = value;
    }
    public resetStageVariableOverrides() {
        this._stageVariableOverrides = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageVariableOverridesInput() {
        return this._stageVariableOverrides;
    }

    // use_stage_cache - computed: true, optional: true, required: false
    private _useStageCache?: boolean | cdktn.IResolvable; 
    public get useStageCache() {
        return this.getBooleanAttribute('use_stage_cache');
    }
    public set useStageCache(value: boolean | cdktn.IResolvable) {
        this._useStageCache = value;
    }
    public resetUseStageCache() {
        this._useStageCache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useStageCacheInput() {
        return this._useStageCache;
    }
}
export interface MethodSettingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#cache_data_encrypted CcDeployment#cache_data_encrypted}
    */
    readonly cacheDataEncrypted?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#cache_ttl_in_seconds CcDeployment#cache_ttl_in_seconds}
    */
    readonly cacheTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#caching_enabled CcDeployment#caching_enabled}
    */
    readonly cachingEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#data_trace_enabled CcDeployment#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktn.IResolvable;
    /**
    * The HTTP method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#http_method CcDeployment#http_method}
    */
    readonly httpMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#logging_level CcDeployment#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#metrics_enabled CcDeployment#metrics_enabled}
    */
    readonly metricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#resource_path CcDeployment#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#throttling_burst_limit CcDeployment#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#throttling_rate_limit CcDeployment#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
}
export class MethodSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MethodSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cacheDataEncrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheDataEncrypted = this._cacheDataEncrypted;
        }
        if (this._cacheTtlInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheTtlInSeconds = this._cacheTtlInSeconds;
        }
        if (this._cachingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachingEnabled = this._cachingEnabled;
        }
        if (this._dataTraceEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
        }
        if (this._httpMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpMethod = this._httpMethod;
        }
        if (this._loggingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingLevel = this._loggingLevel;
        }
        if (this._metricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsEnabled = this._metricsEnabled;
        }
        if (this._resourcePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcePath = this._resourcePath;
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

    public set internalValue(value: MethodSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cacheDataEncrypted = undefined;
            this._cacheTtlInSeconds = undefined;
            this._cachingEnabled = undefined;
            this._dataTraceEnabled = undefined;
            this._httpMethod = undefined;
            this._loggingLevel = undefined;
            this._metricsEnabled = undefined;
            this._resourcePath = undefined;
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
            this._cacheDataEncrypted = value.cacheDataEncrypted;
            this._cacheTtlInSeconds = value.cacheTtlInSeconds;
            this._cachingEnabled = value.cachingEnabled;
            this._dataTraceEnabled = value.dataTraceEnabled;
            this._httpMethod = value.httpMethod;
            this._loggingLevel = value.loggingLevel;
            this._metricsEnabled = value.metricsEnabled;
            this._resourcePath = value.resourcePath;
            this._throttlingBurstLimit = value.throttlingBurstLimit;
            this._throttlingRateLimit = value.throttlingRateLimit;
        }
    }

    // cache_data_encrypted - computed: true, optional: true, required: false
    private _cacheDataEncrypted?: boolean | cdktn.IResolvable; 
    public get cacheDataEncrypted() {
        return this.getBooleanAttribute('cache_data_encrypted');
    }
    public set cacheDataEncrypted(value: boolean | cdktn.IResolvable) {
        this._cacheDataEncrypted = value;
    }
    public resetCacheDataEncrypted() {
        this._cacheDataEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheDataEncryptedInput() {
        return this._cacheDataEncrypted;
    }

    // cache_ttl_in_seconds - computed: true, optional: true, required: false
    private _cacheTtlInSeconds?: number; 
    public get cacheTtlInSeconds() {
        return this.getNumberAttribute('cache_ttl_in_seconds');
    }
    public set cacheTtlInSeconds(value: number) {
        this._cacheTtlInSeconds = value;
    }
    public resetCacheTtlInSeconds() {
        this._cacheTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheTtlInSecondsInput() {
        return this._cacheTtlInSeconds;
    }

    // caching_enabled - computed: true, optional: true, required: false
    private _cachingEnabled?: boolean | cdktn.IResolvable; 
    public get cachingEnabled() {
        return this.getBooleanAttribute('caching_enabled');
    }
    public set cachingEnabled(value: boolean | cdktn.IResolvable) {
        this._cachingEnabled = value;
    }
    public resetCachingEnabled() {
        this._cachingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachingEnabledInput() {
        return this._cachingEnabled;
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

    // http_method - computed: true, optional: true, required: false
    private _httpMethod?: string; 
    public get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
        this._httpMethod = value;
    }
    public resetHttpMethod() {
        this._httpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
        return this._httpMethod;
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

    // metrics_enabled - computed: true, optional: true, required: false
    private _metricsEnabled?: boolean | cdktn.IResolvable; 
    public get metricsEnabled() {
        return this.getBooleanAttribute('metrics_enabled');
    }
    public set metricsEnabled(value: boolean | cdktn.IResolvable) {
        this._metricsEnabled = value;
    }
    public resetMetricsEnabled() {
        this._metricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsEnabledInput() {
        return this._metricsEnabled;
    }

    // resource_path - computed: true, optional: true, required: false
    private _resourcePath?: string; 
    public get resourcePath() {
        return this.getStringAttribute('resource_path');
    }
    public set resourcePath(value: string) {
        this._resourcePath = value;
    }
    public resetResourcePath() {
        this._resourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePathInput() {
        return this._resourcePath;
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

export class MethodSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : MethodSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): MethodSettingPropertyOutputReference {
        return new MethodSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#key CcDeployment#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#value CcDeployment#value}
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
export interface StageDescriptionProperty {
    /**
    * Specifies settings for logging access in this stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#access_log_setting CcDeployment#access_log_setting}
    */
    readonly accessLogSetting?: AccessLogSettingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#cache_cluster_enabled CcDeployment#cache_cluster_enabled}
    */
    readonly cacheClusterEnabled?: boolean | cdktn.IResolvable;
    /**
    * The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#cache_cluster_size CcDeployment#cache_cluster_size}
    */
    readonly cacheClusterSize?: string;
    /**
    * Indicates whether the cached responses are encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#cache_data_encrypted CcDeployment#cache_data_encrypted}
    */
    readonly cacheDataEncrypted?: boolean | cdktn.IResolvable;
    /**
    * The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#cache_ttl_in_seconds CcDeployment#cache_ttl_in_seconds}
    */
    readonly cacheTtlInSeconds?: number;
    /**
    * Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#caching_enabled CcDeployment#caching_enabled}
    */
    readonly cachingEnabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies settings for the canary deployment in this stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#canary_setting CcDeployment#canary_setting}
    */
    readonly canarySetting?: CanarySettingProperty;
    /**
    * The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#client_certificate_id CcDeployment#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#data_trace_enabled CcDeployment#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktn.IResolvable;
    /**
    * A description of the purpose of the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#description CcDeployment#description}
    */
    readonly description?: string;
    /**
    * The version identifier of the API documentation snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#documentation_version CcDeployment#documentation_version}
    */
    readonly documentationVersion?: string;
    /**
    * The logging level for this method. For valid values, see the ``loggingLevel`` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#logging_level CcDeployment#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Configures settings for all of the stage's methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#method_settings CcDeployment#method_settings}
    */
    readonly methodSettings?: MethodSettingProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#metrics_enabled CcDeployment#metrics_enabled}
    */
    readonly metricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * An array of arbitrary tags (key-value pairs) to associate with the stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#tags CcDeployment#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
    /**
    * The target request burst rate limit. This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#throttling_burst_limit CcDeployment#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * The target request steady-state rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#throttling_rate_limit CcDeployment#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
    /**
    * Specifies whether active tracing with X-ray is enabled for this stage.
    *  For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#tracing_enabled CcDeployment#tracing_enabled}
    */
    readonly tracingEnabled?: boolean | cdktn.IResolvable;
    /**
    * A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/apigateway_deployment#variables CcDeployment#variables}
    */
    readonly variables?: { [key: string]: string };
}
export class StageDescriptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StageDescriptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessLogSetting?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessLogSetting = this._accessLogSetting?.internalValue;
        }
        if (this._cacheClusterEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheClusterEnabled = this._cacheClusterEnabled;
        }
        if (this._cacheClusterSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheClusterSize = this._cacheClusterSize;
        }
        if (this._cacheDataEncrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheDataEncrypted = this._cacheDataEncrypted;
        }
        if (this._cacheTtlInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.cacheTtlInSeconds = this._cacheTtlInSeconds;
        }
        if (this._cachingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachingEnabled = this._cachingEnabled;
        }
        if (this._canarySetting?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.canarySetting = this._canarySetting?.internalValue;
        }
        if (this._clientCertificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCertificateId = this._clientCertificateId;
        }
        if (this._dataTraceEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._documentationVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentationVersion = this._documentationVersion;
        }
        if (this._loggingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingLevel = this._loggingLevel;
        }
        if (this._methodSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.methodSettings = this._methodSettings?.internalValue;
        }
        if (this._metricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsEnabled = this._metricsEnabled;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        if (this._throttlingBurstLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
        }
        if (this._throttlingRateLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
        }
        if (this._tracingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.tracingEnabled = this._tracingEnabled;
        }
        if (this._variables !== undefined) {
            hasAnyValues = true;
            internalValueResult.variables = this._variables;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StageDescriptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessLogSetting.internalValue = undefined;
            this._cacheClusterEnabled = undefined;
            this._cacheClusterSize = undefined;
            this._cacheDataEncrypted = undefined;
            this._cacheTtlInSeconds = undefined;
            this._cachingEnabled = undefined;
            this._canarySetting.internalValue = undefined;
            this._clientCertificateId = undefined;
            this._dataTraceEnabled = undefined;
            this._description = undefined;
            this._documentationVersion = undefined;
            this._loggingLevel = undefined;
            this._methodSettings.internalValue = undefined;
            this._metricsEnabled = undefined;
            this._tags.internalValue = undefined;
            this._throttlingBurstLimit = undefined;
            this._throttlingRateLimit = undefined;
            this._tracingEnabled = undefined;
            this._variables = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessLogSetting.internalValue = value.accessLogSetting;
            this._cacheClusterEnabled = value.cacheClusterEnabled;
            this._cacheClusterSize = value.cacheClusterSize;
            this._cacheDataEncrypted = value.cacheDataEncrypted;
            this._cacheTtlInSeconds = value.cacheTtlInSeconds;
            this._cachingEnabled = value.cachingEnabled;
            this._canarySetting.internalValue = value.canarySetting;
            this._clientCertificateId = value.clientCertificateId;
            this._dataTraceEnabled = value.dataTraceEnabled;
            this._description = value.description;
            this._documentationVersion = value.documentationVersion;
            this._loggingLevel = value.loggingLevel;
            this._methodSettings.internalValue = value.methodSettings;
            this._metricsEnabled = value.metricsEnabled;
            this._tags.internalValue = value.tags;
            this._throttlingBurstLimit = value.throttlingBurstLimit;
            this._throttlingRateLimit = value.throttlingRateLimit;
            this._tracingEnabled = value.tracingEnabled;
            this._variables = value.variables;
        }
    }

    // access_log_setting - computed: true, optional: true, required: false
    private _accessLogSetting = new AccessLogSettingPropertyOutputReference(this, "access_log_setting");
    public get accessLogSetting() {
        return this._accessLogSetting;
    }
    public putAccessLogSetting(value: AccessLogSettingProperty) {
        this._accessLogSetting.internalValue = value;
    }
    public resetAccessLogSetting() {
        this._accessLogSetting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogSettingInput() {
        return this._accessLogSetting.internalValue;
    }

    // cache_cluster_enabled - computed: true, optional: true, required: false
    private _cacheClusterEnabled?: boolean | cdktn.IResolvable; 
    public get cacheClusterEnabled() {
        return this.getBooleanAttribute('cache_cluster_enabled');
    }
    public set cacheClusterEnabled(value: boolean | cdktn.IResolvable) {
        this._cacheClusterEnabled = value;
    }
    public resetCacheClusterEnabled() {
        this._cacheClusterEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheClusterEnabledInput() {
        return this._cacheClusterEnabled;
    }

    // cache_cluster_size - computed: true, optional: true, required: false
    private _cacheClusterSize?: string; 
    public get cacheClusterSize() {
        return this.getStringAttribute('cache_cluster_size');
    }
    public set cacheClusterSize(value: string) {
        this._cacheClusterSize = value;
    }
    public resetCacheClusterSize() {
        this._cacheClusterSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheClusterSizeInput() {
        return this._cacheClusterSize;
    }

    // cache_data_encrypted - computed: true, optional: true, required: false
    private _cacheDataEncrypted?: boolean | cdktn.IResolvable; 
    public get cacheDataEncrypted() {
        return this.getBooleanAttribute('cache_data_encrypted');
    }
    public set cacheDataEncrypted(value: boolean | cdktn.IResolvable) {
        this._cacheDataEncrypted = value;
    }
    public resetCacheDataEncrypted() {
        this._cacheDataEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheDataEncryptedInput() {
        return this._cacheDataEncrypted;
    }

    // cache_ttl_in_seconds - computed: true, optional: true, required: false
    private _cacheTtlInSeconds?: number; 
    public get cacheTtlInSeconds() {
        return this.getNumberAttribute('cache_ttl_in_seconds');
    }
    public set cacheTtlInSeconds(value: number) {
        this._cacheTtlInSeconds = value;
    }
    public resetCacheTtlInSeconds() {
        this._cacheTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheTtlInSecondsInput() {
        return this._cacheTtlInSeconds;
    }

    // caching_enabled - computed: true, optional: true, required: false
    private _cachingEnabled?: boolean | cdktn.IResolvable; 
    public get cachingEnabled() {
        return this.getBooleanAttribute('caching_enabled');
    }
    public set cachingEnabled(value: boolean | cdktn.IResolvable) {
        this._cachingEnabled = value;
    }
    public resetCachingEnabled() {
        this._cachingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachingEnabledInput() {
        return this._cachingEnabled;
    }

    // canary_setting - computed: true, optional: true, required: false
    private _canarySetting = new CanarySettingPropertyOutputReference(this, "canary_setting");
    public get canarySetting() {
        return this._canarySetting;
    }
    public putCanarySetting(value: CanarySettingProperty) {
        this._canarySetting.internalValue = value;
    }
    public resetCanarySetting() {
        this._canarySetting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canarySettingInput() {
        return this._canarySetting.internalValue;
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

    // documentation_version - computed: true, optional: true, required: false
    private _documentationVersion?: string; 
    public get documentationVersion() {
        return this.getStringAttribute('documentation_version');
    }
    public set documentationVersion(value: string) {
        this._documentationVersion = value;
    }
    public resetDocumentationVersion() {
        this._documentationVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentationVersionInput() {
        return this._documentationVersion;
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

    // method_settings - computed: true, optional: true, required: false
    private _methodSettings = new MethodSettingPropertyList(this, "method_settings", true);
    public get methodSettings() {
        return this._methodSettings;
    }
    public putMethodSettings(value: MethodSettingProperty[] | cdktn.IResolvable) {
        this._methodSettings.internalValue = value;
    }
    public resetMethodSettings() {
        this._methodSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodSettingsInput() {
        return this._methodSettings.internalValue;
    }

    // metrics_enabled - computed: true, optional: true, required: false
    private _metricsEnabled?: boolean | cdktn.IResolvable; 
    public get metricsEnabled() {
        return this.getBooleanAttribute('metrics_enabled');
    }
    public set metricsEnabled(value: boolean | cdktn.IResolvable) {
        this._metricsEnabled = value;
    }
    public resetMetricsEnabled() {
        this._metricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsEnabledInput() {
        return this._metricsEnabled;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // tracing_enabled - computed: true, optional: true, required: false
    private _tracingEnabled?: boolean | cdktn.IResolvable; 
    public get tracingEnabled() {
        return this.getBooleanAttribute('tracing_enabled');
    }
    public set tracingEnabled(value: boolean | cdktn.IResolvable) {
        this._tracingEnabled = value;
    }
    public resetTracingEnabled() {
        this._tracingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tracingEnabledInput() {
        return this._tracingEnabled;
    }

    // variables - computed: true, optional: true, required: false
    private _variables?: { [key: string]: string }; 
    public get variables() {
        return this.getStringMapAttribute('variables');
    }
    public set variables(value: { [key: string]: string }) {
        this._variables = value;
    }
    public resetVariables() {
        this._variables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables;
    }
}
}
