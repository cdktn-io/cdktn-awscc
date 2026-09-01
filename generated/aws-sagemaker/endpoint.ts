// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies deployment configuration for updating the SageMaker endpoint. Includes rollback and update policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#deployment_config CcEndpoint#deployment_config}
    */
    readonly deploymentConfig?: CcEndpoint.DeploymentConfigProperty;
    /**
    * The name of the endpoint configuration for the SageMaker endpoint. This is a required property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#endpoint_config_name CcEndpoint#endpoint_config_name}
    */
    readonly endpointConfigName: string;
    /**
    * Specifies a list of variant properties that you want to exclude when updating an endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#exclude_retained_variant_properties CcEndpoint#exclude_retained_variant_properties}
    */
    readonly excludeRetainedVariantProperties?: CcEndpoint.VariantPropertyProperty[] | cdktn.IResolvable;
    /**
    * When set to true, retains all variant properties for an endpoint when it is updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#retain_all_variant_properties CcEndpoint#retain_all_variant_properties}
    */
    readonly retainAllVariantProperties?: boolean | cdktn.IResolvable;
    /**
    * When set to true, retains the deployment configuration during endpoint updates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#retain_deployment_config CcEndpoint#retain_deployment_config}
    */
    readonly retainDeploymentConfig?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#tags CcEndpoint#tags}
    */
    readonly tags?: CcEndpoint.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint awscc_sagemaker_endpoint}
*/
export class CcEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpoint to import
    * @param importFromId The id of the existing CcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint awscc_sagemaker_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_endpoint',
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
        this._deploymentConfig.internalValue = config.deploymentConfig;
        this._endpointConfigName = config.endpointConfigName;
        this._excludeRetainedVariantProperties.internalValue = config.excludeRetainedVariantProperties;
        this._retainAllVariantProperties = config.retainAllVariantProperties;
        this._retainDeploymentConfig = config.retainDeploymentConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // deployment_config - computed: true, optional: true, required: false
    private _deploymentConfig = new CcEndpoint.DeploymentConfigPropertyOutputReference(this, "deployment_config");
    public get deploymentConfig() {
        return this._deploymentConfig;
    }
    public putDeploymentConfig(value: CcEndpoint.DeploymentConfigProperty) {
        this._deploymentConfig.internalValue = value;
    }
    public resetDeploymentConfig() {
        this._deploymentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigInput() {
        return this._deploymentConfig.internalValue;
    }

    // endpoint_arn - computed: true, optional: false, required: false
    public get endpointArn() {
        return this.getStringAttribute('endpoint_arn');
    }

    // endpoint_config_name - computed: false, optional: false, required: true
    private _endpointConfigName?: string; 
    public get endpointConfigName() {
        return this.getStringAttribute('endpoint_config_name');
    }
    public set endpointConfigName(value: string) {
        this._endpointConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigNameInput() {
        return this._endpointConfigName;
    }

    // endpoint_name - computed: true, optional: false, required: false
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }

    // exclude_retained_variant_properties - computed: true, optional: true, required: false
    private _excludeRetainedVariantProperties = new CcEndpoint.VariantPropertyPropertyList(this, "exclude_retained_variant_properties", false);
    public get excludeRetainedVariantProperties() {
        return this._excludeRetainedVariantProperties;
    }
    public putExcludeRetainedVariantProperties(value: CcEndpoint.VariantPropertyProperty[] | cdktn.IResolvable) {
        this._excludeRetainedVariantProperties.internalValue = value;
    }
    public resetExcludeRetainedVariantProperties() {
        this._excludeRetainedVariantProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeRetainedVariantPropertiesInput() {
        return this._excludeRetainedVariantProperties.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // retain_all_variant_properties - computed: true, optional: true, required: false
    private _retainAllVariantProperties?: boolean | cdktn.IResolvable; 
    public get retainAllVariantProperties() {
        return this.getBooleanAttribute('retain_all_variant_properties');
    }
    public set retainAllVariantProperties(value: boolean | cdktn.IResolvable) {
        this._retainAllVariantProperties = value;
    }
    public resetRetainAllVariantProperties() {
        this._retainAllVariantProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainAllVariantPropertiesInput() {
        return this._retainAllVariantProperties;
    }

    // retain_deployment_config - computed: true, optional: true, required: false
    private _retainDeploymentConfig?: boolean | cdktn.IResolvable; 
    public get retainDeploymentConfig() {
        return this.getBooleanAttribute('retain_deployment_config');
    }
    public set retainDeploymentConfig(value: boolean | cdktn.IResolvable) {
        this._retainDeploymentConfig = value;
    }
    public resetRetainDeploymentConfig() {
        this._retainDeploymentConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainDeploymentConfigInput() {
        return this._retainDeploymentConfig;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEndpoint.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEndpoint.TagProperty[] | cdktn.IResolvable) {
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
            deployment_config: ccEndpointDeploymentConfigPropertyToTerraform(this._deploymentConfig.internalValue),
            endpoint_config_name: cdktn.stringToTerraform(this._endpointConfigName),
            exclude_retained_variant_properties: cdktn.listMapper(ccEndpointVariantPropertyPropertyToTerraform, false)(this._excludeRetainedVariantProperties.internalValue),
            retain_all_variant_properties: cdktn.booleanToTerraform(this._retainAllVariantProperties),
            retain_deployment_config: cdktn.booleanToTerraform(this._retainDeploymentConfig),
            tags: cdktn.listMapper(ccEndpointTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deployment_config: {
                value: ccEndpointDeploymentConfigPropertyToHclTerraform(this._deploymentConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.DeploymentConfigProperty",
            },
            endpoint_config_name: {
                value: cdktn.stringToHclTerraform(this._endpointConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude_retained_variant_properties: {
                value: cdktn.listMapperHcl(ccEndpointVariantPropertyPropertyToHclTerraform, false)(this._excludeRetainedVariantProperties.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpoint.VariantPropertyPropertyList",
            },
            retain_all_variant_properties: {
                value: cdktn.booleanToHclTerraform(this._retainAllVariantProperties),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            retain_deployment_config: {
                value: cdktn.booleanToHclTerraform(this._retainDeploymentConfig),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEndpointTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpoint.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEndpointAlarmPropertyToTerraform(struct?: CcEndpoint.AlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    }
}


export function ccEndpointAlarmPropertyToHclTerraform(struct?: CcEndpoint.AlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointAutoRollbackConfigPropertyToTerraform(struct?: CcEndpoint.AutoRollbackConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarms: cdktn.listMapper(ccEndpointAlarmPropertyToTerraform, false)(struct!.alarms),
    }
}


export function ccEndpointAutoRollbackConfigPropertyToHclTerraform(struct?: CcEndpoint.AutoRollbackConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarms: {
            value: cdktn.listMapperHcl(ccEndpointAlarmPropertyToHclTerraform, false)(struct!.alarms),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointCapacitySizePropertyToTerraform(struct?: CcEndpoint.CapacitySizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccEndpointCapacitySizePropertyToHclTerraform(struct?: CcEndpoint.CapacitySizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointLinearStepSizePropertyToTerraform(struct?: CcEndpoint.LinearStepSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccEndpointLinearStepSizePropertyToHclTerraform(struct?: CcEndpoint.LinearStepSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointTrafficRoutingConfigPropertyToTerraform(struct?: CcEndpoint.TrafficRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        canary_size: ccEndpointCapacitySizePropertyToTerraform(struct!.canarySize),
        linear_step_size: ccEndpointLinearStepSizePropertyToTerraform(struct!.linearStepSize),
        type: cdktn.stringToTerraform(struct!.type),
        wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    }
}


export function ccEndpointTrafficRoutingConfigPropertyToHclTerraform(struct?: CcEndpoint.TrafficRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        canary_size: {
            value: ccEndpointCapacitySizePropertyToHclTerraform(struct!.canarySize),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacitySizeProperty",
        },
        linear_step_size: {
            value: ccEndpointLinearStepSizePropertyToHclTerraform(struct!.linearStepSize),
            isBlock: true,
            type: "struct",
            storageClassType: "LinearStepSizeProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wait_interval_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointBlueGreenUpdatePolicyPropertyToTerraform(struct?: CcEndpoint.BlueGreenUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
        termination_wait_in_seconds: cdktn.numberToTerraform(struct!.terminationWaitInSeconds),
        traffic_routing_configuration: ccEndpointTrafficRoutingConfigPropertyToTerraform(struct!.trafficRoutingConfiguration),
    }
}


export function ccEndpointBlueGreenUpdatePolicyPropertyToHclTerraform(struct?: CcEndpoint.BlueGreenUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_execution_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        termination_wait_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.terminationWaitInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        traffic_routing_configuration: {
            value: ccEndpointTrafficRoutingConfigPropertyToHclTerraform(struct!.trafficRoutingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "TrafficRoutingConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointMaximumBatchSizePropertyToTerraform(struct?: CcEndpoint.MaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccEndpointMaximumBatchSizePropertyToHclTerraform(struct?: CcEndpoint.MaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointRollbackMaximumBatchSizePropertyToTerraform(struct?: CcEndpoint.RollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccEndpointRollbackMaximumBatchSizePropertyToHclTerraform(struct?: CcEndpoint.RollbackMaximumBatchSizeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointRollingUpdatePolicyPropertyToTerraform(struct?: CcEndpoint.RollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_batch_size: ccEndpointMaximumBatchSizePropertyToTerraform(struct!.maximumBatchSize),
        maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
        rollback_maximum_batch_size: ccEndpointRollbackMaximumBatchSizePropertyToTerraform(struct!.rollbackMaximumBatchSize),
        wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    }
}


export function ccEndpointRollingUpdatePolicyPropertyToHclTerraform(struct?: CcEndpoint.RollingUpdatePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_batch_size: {
            value: ccEndpointMaximumBatchSizePropertyToHclTerraform(struct!.maximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "MaximumBatchSizeProperty",
        },
        maximum_execution_timeout_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rollback_maximum_batch_size: {
            value: ccEndpointRollbackMaximumBatchSizePropertyToHclTerraform(struct!.rollbackMaximumBatchSize),
            isBlock: true,
            type: "struct",
            storageClassType: "RollbackMaximumBatchSizeProperty",
        },
        wait_interval_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointDeploymentConfigPropertyToTerraform(struct?: CcEndpoint.DeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_rollback_configuration: ccEndpointAutoRollbackConfigPropertyToTerraform(struct!.autoRollbackConfiguration),
        blue_green_update_policy: ccEndpointBlueGreenUpdatePolicyPropertyToTerraform(struct!.blueGreenUpdatePolicy),
        rolling_update_policy: ccEndpointRollingUpdatePolicyPropertyToTerraform(struct!.rollingUpdatePolicy),
    }
}


export function ccEndpointDeploymentConfigPropertyToHclTerraform(struct?: CcEndpoint.DeploymentConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_rollback_configuration: {
            value: ccEndpointAutoRollbackConfigPropertyToHclTerraform(struct!.autoRollbackConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoRollbackConfigProperty",
        },
        blue_green_update_policy: {
            value: ccEndpointBlueGreenUpdatePolicyPropertyToHclTerraform(struct!.blueGreenUpdatePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "BlueGreenUpdatePolicyProperty",
        },
        rolling_update_policy: {
            value: ccEndpointRollingUpdatePolicyPropertyToHclTerraform(struct!.rollingUpdatePolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "RollingUpdatePolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointVariantPropertyPropertyToTerraform(struct?: CcEndpoint.VariantPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        variant_property_type: cdktn.stringToTerraform(struct!.variantPropertyType),
    }
}


export function ccEndpointVariantPropertyPropertyToHclTerraform(struct?: CcEndpoint.VariantPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        variant_property_type: {
            value: cdktn.stringToHclTerraform(struct!.variantPropertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointTagPropertyToTerraform(struct?: CcEndpoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEndpointTagPropertyToHclTerraform(struct?: CcEndpoint.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEndpoint {
export interface AlarmProperty {
    /**
    * The name of the CloudWatch alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#alarm_name CcEndpoint#alarm_name}
    */
    readonly alarmName?: string;
}
export class AlarmPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
    }
}

export class AlarmPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmPropertyOutputReference {
        return new AlarmPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AutoRollbackConfigProperty {
    /**
    * List of CloudWatch alarms to monitor during the deployment. If any alarm goes off, the deployment is rolled back.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#alarms CcEndpoint#alarms}
    */
    readonly alarms?: AlarmProperty[] | cdktn.IResolvable;
}
export class AutoRollbackConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoRollbackConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoRollbackConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarms.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarms.internalValue = value.alarms;
        }
    }

    // alarms - computed: true, optional: true, required: false
    private _alarms = new AlarmPropertyList(this, "alarms", false);
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: AlarmProperty[] | cdktn.IResolvable) {
        this._alarms.internalValue = value;
    }
    public resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
        return this._alarms.internalValue;
    }
}
export interface CapacitySizeProperty {
    /**
    * Specifies whether the `Value` is an instance count or a capacity unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#type CcEndpoint#type}
    */
    readonly type?: string;
    /**
    * The value representing either the number of instances or the number of capacity units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#value CcEndpoint#value}
    */
    readonly value?: number;
}
export class CapacitySizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacitySizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacitySizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface LinearStepSizeProperty {
    /**
    * Specifies whether the `Value` is an instance count or a capacity unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#type CcEndpoint#type}
    */
    readonly type?: string;
    /**
    * The value representing either the number of instances or the number of capacity units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#value CcEndpoint#value}
    */
    readonly value?: number;
}
export class LinearStepSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LinearStepSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LinearStepSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface TrafficRoutingConfigProperty {
    /**
    * Specifies the size of the canary traffic in a canary deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#canary_size CcEndpoint#canary_size}
    */
    readonly canarySize?: CapacitySizeProperty;
    /**
    * Specifies the step size for linear traffic routing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#linear_step_size CcEndpoint#linear_step_size}
    */
    readonly linearStepSize?: LinearStepSizeProperty;
    /**
    * Specifies the type of traffic routing (e.g., 'AllAtOnce', 'Canary', 'Linear').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#type CcEndpoint#type}
    */
    readonly type?: string;
    /**
    * Specifies the wait interval between traffic shifts, in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds CcEndpoint#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds?: number;
}
export class TrafficRoutingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrafficRoutingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._canarySize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.canarySize = this._canarySize?.internalValue;
        }
        if (this._linearStepSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linearStepSize = this._linearStepSize?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._waitIntervalInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrafficRoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._canarySize.internalValue = undefined;
            this._linearStepSize.internalValue = undefined;
            this._type = undefined;
            this._waitIntervalInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._canarySize.internalValue = value.canarySize;
            this._linearStepSize.internalValue = value.linearStepSize;
            this._type = value.type;
            this._waitIntervalInSeconds = value.waitIntervalInSeconds;
        }
    }

    // canary_size - computed: true, optional: true, required: false
    private _canarySize = new CapacitySizePropertyOutputReference(this, "canary_size");
    public get canarySize() {
        return this._canarySize;
    }
    public putCanarySize(value: CapacitySizeProperty) {
        this._canarySize.internalValue = value;
    }
    public resetCanarySize() {
        this._canarySize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canarySizeInput() {
        return this._canarySize.internalValue;
    }

    // linear_step_size - computed: true, optional: true, required: false
    private _linearStepSize = new LinearStepSizePropertyOutputReference(this, "linear_step_size");
    public get linearStepSize() {
        return this._linearStepSize;
    }
    public putLinearStepSize(value: LinearStepSizeProperty) {
        this._linearStepSize.internalValue = value;
    }
    public resetLinearStepSize() {
        this._linearStepSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linearStepSizeInput() {
        return this._linearStepSize.internalValue;
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

    // wait_interval_in_seconds - computed: true, optional: true, required: false
    private _waitIntervalInSeconds?: number; 
    public get waitIntervalInSeconds() {
        return this.getNumberAttribute('wait_interval_in_seconds');
    }
    public set waitIntervalInSeconds(value: number) {
        this._waitIntervalInSeconds = value;
    }
    public resetWaitIntervalInSeconds() {
        this._waitIntervalInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitIntervalInSecondsInput() {
        return this._waitIntervalInSeconds;
    }
}
export interface BlueGreenUpdatePolicyProperty {
    /**
    * The maximum time allowed for the blue/green update, in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds CcEndpoint#maximum_execution_timeout_in_seconds}
    */
    readonly maximumExecutionTimeoutInSeconds?: number;
    /**
    * The wait time before terminating the old endpoint during a blue/green deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#termination_wait_in_seconds CcEndpoint#termination_wait_in_seconds}
    */
    readonly terminationWaitInSeconds?: number;
    /**
    * The traffic routing configuration for the blue/green deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#traffic_routing_configuration CcEndpoint#traffic_routing_configuration}
    */
    readonly trafficRoutingConfiguration?: TrafficRoutingConfigProperty;
}
export class BlueGreenUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BlueGreenUpdatePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumExecutionTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
        }
        if (this._terminationWaitInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminationWaitInSeconds = this._terminationWaitInSeconds;
        }
        if (this._trafficRoutingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trafficRoutingConfiguration = this._trafficRoutingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlueGreenUpdatePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumExecutionTimeoutInSeconds = undefined;
            this._terminationWaitInSeconds = undefined;
            this._trafficRoutingConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
            this._terminationWaitInSeconds = value.terminationWaitInSeconds;
            this._trafficRoutingConfiguration.internalValue = value.trafficRoutingConfiguration;
        }
    }

    // maximum_execution_timeout_in_seconds - computed: true, optional: true, required: false
    private _maximumExecutionTimeoutInSeconds?: number; 
    public get maximumExecutionTimeoutInSeconds() {
        return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
    }
    public set maximumExecutionTimeoutInSeconds(value: number) {
        this._maximumExecutionTimeoutInSeconds = value;
    }
    public resetMaximumExecutionTimeoutInSeconds() {
        this._maximumExecutionTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionTimeoutInSecondsInput() {
        return this._maximumExecutionTimeoutInSeconds;
    }

    // termination_wait_in_seconds - computed: true, optional: true, required: false
    private _terminationWaitInSeconds?: number; 
    public get terminationWaitInSeconds() {
        return this.getNumberAttribute('termination_wait_in_seconds');
    }
    public set terminationWaitInSeconds(value: number) {
        this._terminationWaitInSeconds = value;
    }
    public resetTerminationWaitInSeconds() {
        this._terminationWaitInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationWaitInSecondsInput() {
        return this._terminationWaitInSeconds;
    }

    // traffic_routing_configuration - computed: true, optional: true, required: false
    private _trafficRoutingConfiguration = new TrafficRoutingConfigPropertyOutputReference(this, "traffic_routing_configuration");
    public get trafficRoutingConfiguration() {
        return this._trafficRoutingConfiguration;
    }
    public putTrafficRoutingConfiguration(value: TrafficRoutingConfigProperty) {
        this._trafficRoutingConfiguration.internalValue = value;
    }
    public resetTrafficRoutingConfiguration() {
        this._trafficRoutingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficRoutingConfigurationInput() {
        return this._trafficRoutingConfiguration.internalValue;
    }
}
export interface MaximumBatchSizeProperty {
    /**
    * Specifies whether the `Value` is an instance count or a capacity unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#type CcEndpoint#type}
    */
    readonly type?: string;
    /**
    * The value representing either the number of instances or the number of capacity units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#value CcEndpoint#value}
    */
    readonly value?: number;
}
export class MaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaximumBatchSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaximumBatchSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface RollbackMaximumBatchSizeProperty {
    /**
    * Specifies whether the `Value` is an instance count or a capacity unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#type CcEndpoint#type}
    */
    readonly type?: string;
    /**
    * The value representing either the number of instances or the number of capacity units.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#value CcEndpoint#value}
    */
    readonly value?: number;
}
export class RollbackMaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RollbackMaximumBatchSizeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface RollingUpdatePolicyProperty {
    /**
    * Specifies the maximum batch size for each rolling update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#maximum_batch_size CcEndpoint#maximum_batch_size}
    */
    readonly maximumBatchSize?: MaximumBatchSizeProperty;
    /**
    * The maximum time allowed for the rolling update, in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds CcEndpoint#maximum_execution_timeout_in_seconds}
    */
    readonly maximumExecutionTimeoutInSeconds?: number;
    /**
    * The maximum batch size for rollback during an update failure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#rollback_maximum_batch_size CcEndpoint#rollback_maximum_batch_size}
    */
    readonly rollbackMaximumBatchSize?: RollbackMaximumBatchSizeProperty;
    /**
    * The time to wait between steps during the rolling update, in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds CcEndpoint#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds?: number;
}
export class RollingUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RollingUpdatePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
        }
        if (this._maximumExecutionTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
        }
        if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
        }
        if (this._waitIntervalInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RollingUpdatePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = undefined;
            this._maximumExecutionTimeoutInSeconds = undefined;
            this._rollbackMaximumBatchSize.internalValue = undefined;
            this._waitIntervalInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumBatchSize.internalValue = value.maximumBatchSize;
            this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
            this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
            this._waitIntervalInSeconds = value.waitIntervalInSeconds;
        }
    }

    // maximum_batch_size - computed: true, optional: true, required: false
    private _maximumBatchSize = new MaximumBatchSizePropertyOutputReference(this, "maximum_batch_size");
    public get maximumBatchSize() {
        return this._maximumBatchSize;
    }
    public putMaximumBatchSize(value: MaximumBatchSizeProperty) {
        this._maximumBatchSize.internalValue = value;
    }
    public resetMaximumBatchSize() {
        this._maximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchSizeInput() {
        return this._maximumBatchSize.internalValue;
    }

    // maximum_execution_timeout_in_seconds - computed: true, optional: true, required: false
    private _maximumExecutionTimeoutInSeconds?: number; 
    public get maximumExecutionTimeoutInSeconds() {
        return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
    }
    public set maximumExecutionTimeoutInSeconds(value: number) {
        this._maximumExecutionTimeoutInSeconds = value;
    }
    public resetMaximumExecutionTimeoutInSeconds() {
        this._maximumExecutionTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionTimeoutInSecondsInput() {
        return this._maximumExecutionTimeoutInSeconds;
    }

    // rollback_maximum_batch_size - computed: true, optional: true, required: false
    private _rollbackMaximumBatchSize = new RollbackMaximumBatchSizePropertyOutputReference(this, "rollback_maximum_batch_size");
    public get rollbackMaximumBatchSize() {
        return this._rollbackMaximumBatchSize;
    }
    public putRollbackMaximumBatchSize(value: RollbackMaximumBatchSizeProperty) {
        this._rollbackMaximumBatchSize.internalValue = value;
    }
    public resetRollbackMaximumBatchSize() {
        this._rollbackMaximumBatchSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollbackMaximumBatchSizeInput() {
        return this._rollbackMaximumBatchSize.internalValue;
    }

    // wait_interval_in_seconds - computed: true, optional: true, required: false
    private _waitIntervalInSeconds?: number; 
    public get waitIntervalInSeconds() {
        return this.getNumberAttribute('wait_interval_in_seconds');
    }
    public set waitIntervalInSeconds(value: number) {
        this._waitIntervalInSeconds = value;
    }
    public resetWaitIntervalInSeconds() {
        this._waitIntervalInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitIntervalInSecondsInput() {
        return this._waitIntervalInSeconds;
    }
}
export interface DeploymentConfigProperty {
    /**
    * Configuration for automatic rollback if an error occurs during deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#auto_rollback_configuration CcEndpoint#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: AutoRollbackConfigProperty;
    /**
    * Configuration for blue-green update deployment policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#blue_green_update_policy CcEndpoint#blue_green_update_policy}
    */
    readonly blueGreenUpdatePolicy?: BlueGreenUpdatePolicyProperty;
    /**
    * Configuration for rolling update deployment policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#rolling_update_policy CcEndpoint#rolling_update_policy}
    */
    readonly rollingUpdatePolicy?: RollingUpdatePolicyProperty;
}
export class DeploymentConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeploymentConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoRollbackConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
        }
        if (this._blueGreenUpdatePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blueGreenUpdatePolicy = this._blueGreenUpdatePolicy?.internalValue;
        }
        if (this._rollingUpdatePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeploymentConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = undefined;
            this._blueGreenUpdatePolicy.internalValue = undefined;
            this._rollingUpdatePolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
            this._blueGreenUpdatePolicy.internalValue = value.blueGreenUpdatePolicy;
            this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
        }
    }

    // auto_rollback_configuration - computed: true, optional: true, required: false
    private _autoRollbackConfiguration = new AutoRollbackConfigPropertyOutputReference(this, "auto_rollback_configuration");
    public get autoRollbackConfiguration() {
        return this._autoRollbackConfiguration;
    }
    public putAutoRollbackConfiguration(value: AutoRollbackConfigProperty) {
        this._autoRollbackConfiguration.internalValue = value;
    }
    public resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration.internalValue;
    }

    // blue_green_update_policy - computed: true, optional: true, required: false
    private _blueGreenUpdatePolicy = new BlueGreenUpdatePolicyPropertyOutputReference(this, "blue_green_update_policy");
    public get blueGreenUpdatePolicy() {
        return this._blueGreenUpdatePolicy;
    }
    public putBlueGreenUpdatePolicy(value: BlueGreenUpdatePolicyProperty) {
        this._blueGreenUpdatePolicy.internalValue = value;
    }
    public resetBlueGreenUpdatePolicy() {
        this._blueGreenUpdatePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blueGreenUpdatePolicyInput() {
        return this._blueGreenUpdatePolicy.internalValue;
    }

    // rolling_update_policy - computed: true, optional: true, required: false
    private _rollingUpdatePolicy = new RollingUpdatePolicyPropertyOutputReference(this, "rolling_update_policy");
    public get rollingUpdatePolicy() {
        return this._rollingUpdatePolicy;
    }
    public putRollingUpdatePolicy(value: RollingUpdatePolicyProperty) {
        this._rollingUpdatePolicy.internalValue = value;
    }
    public resetRollingUpdatePolicy() {
        this._rollingUpdatePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollingUpdatePolicyInput() {
        return this._rollingUpdatePolicy.internalValue;
    }
}
export interface VariantPropertyProperty {
    /**
    * The type of variant property (e.g., 'DesiredInstanceCount', 'DesiredWeight', 'DataCaptureConfig').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#variant_property_type CcEndpoint#variant_property_type}
    */
    readonly variantPropertyType?: string;
}
export class VariantPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VariantPropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._variantPropertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.variantPropertyType = this._variantPropertyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VariantPropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._variantPropertyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._variantPropertyType = value.variantPropertyType;
        }
    }

    // variant_property_type - computed: true, optional: true, required: false
    private _variantPropertyType?: string; 
    public get variantPropertyType() {
        return this.getStringAttribute('variant_property_type');
    }
    public set variantPropertyType(value: string) {
        this._variantPropertyType = value;
    }
    public resetVariantPropertyType() {
        this._variantPropertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variantPropertyTypeInput() {
        return this._variantPropertyType;
    }
}

export class VariantPropertyPropertyList extends cdktn.ComplexList {
    public internalValue? : VariantPropertyProperty[] | cdktn.IResolvable

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
    public get(index: number): VariantPropertyPropertyOutputReference {
        return new VariantPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#key CcEndpoint#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_endpoint#value CcEndpoint#value}
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
}
