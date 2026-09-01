// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeploymentConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The destination platform type for the deployment (Lambda, Server, or ECS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#compute_platform CcDeploymentConfig#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#deployment_config_name CcDeploymentConfig#deployment_config_name}
    */
    readonly deploymentConfigName?: string;
    /**
    * The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CcDeploymentConfig#minimum_healthy_hosts}
    */
    readonly minimumHealthyHosts?: CcDeploymentConfig.MinimumHealthyHostsProperty;
    /**
    * The configuration that specifies how the deployment traffic is routed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CcDeploymentConfig#traffic_routing_config}
    */
    readonly trafficRoutingConfig?: CcDeploymentConfig.TrafficRoutingConfigProperty;
    /**
    * The zonal deployment config that specifies how the zonal deployment behaves
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#zonal_config CcDeploymentConfig#zonal_config}
    */
    readonly zonalConfig?: CcDeploymentConfig.ZonalConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config awscc_codedeploy_deployment_config}
*/
export class CcDeploymentConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codedeploy_deployment_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeploymentConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeploymentConfig to import
    * @param importFromId The id of the existing CcDeploymentConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeploymentConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codedeploy_deployment_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config awscc_codedeploy_deployment_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeploymentConfigProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDeploymentConfigProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_codedeploy_deployment_config',
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
        this._computePlatform = config.computePlatform;
        this._deploymentConfigName = config.deploymentConfigName;
        this._minimumHealthyHosts.internalValue = config.minimumHealthyHosts;
        this._trafficRoutingConfig.internalValue = config.trafficRoutingConfig;
        this._zonalConfig.internalValue = config.zonalConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // compute_platform - computed: true, optional: true, required: false
    private _computePlatform?: string; 
    public get computePlatform() {
        return this.getStringAttribute('compute_platform');
    }
    public set computePlatform(value: string) {
        this._computePlatform = value;
    }
    public resetComputePlatform() {
        this._computePlatform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computePlatformInput() {
        return this._computePlatform;
    }

    // deployment_config_name - computed: true, optional: true, required: false
    private _deploymentConfigName?: string; 
    public get deploymentConfigName() {
        return this.getStringAttribute('deployment_config_name');
    }
    public set deploymentConfigName(value: string) {
        this._deploymentConfigName = value;
    }
    public resetDeploymentConfigName() {
        this._deploymentConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigNameInput() {
        return this._deploymentConfigName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // minimum_healthy_hosts - computed: true, optional: true, required: false
    private _minimumHealthyHosts = new CcDeploymentConfig.MinimumHealthyHostsPropertyOutputReference(this, "minimum_healthy_hosts");
    public get minimumHealthyHosts() {
        return this._minimumHealthyHosts;
    }
    public putMinimumHealthyHosts(value: CcDeploymentConfig.MinimumHealthyHostsProperty) {
        this._minimumHealthyHosts.internalValue = value;
    }
    public resetMinimumHealthyHosts() {
        this._minimumHealthyHosts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyHostsInput() {
        return this._minimumHealthyHosts.internalValue;
    }

    // traffic_routing_config - computed: true, optional: true, required: false
    private _trafficRoutingConfig = new CcDeploymentConfig.TrafficRoutingConfigPropertyOutputReference(this, "traffic_routing_config");
    public get trafficRoutingConfig() {
        return this._trafficRoutingConfig;
    }
    public putTrafficRoutingConfig(value: CcDeploymentConfig.TrafficRoutingConfigProperty) {
        this._trafficRoutingConfig.internalValue = value;
    }
    public resetTrafficRoutingConfig() {
        this._trafficRoutingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficRoutingConfigInput() {
        return this._trafficRoutingConfig.internalValue;
    }

    // zonal_config - computed: true, optional: true, required: false
    private _zonalConfig = new CcDeploymentConfig.ZonalConfigPropertyOutputReference(this, "zonal_config");
    public get zonalConfig() {
        return this._zonalConfig;
    }
    public putZonalConfig(value: CcDeploymentConfig.ZonalConfigProperty) {
        this._zonalConfig.internalValue = value;
    }
    public resetZonalConfig() {
        this._zonalConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zonalConfigInput() {
        return this._zonalConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            compute_platform: cdktn.stringToTerraform(this._computePlatform),
            deployment_config_name: cdktn.stringToTerraform(this._deploymentConfigName),
            minimum_healthy_hosts: ccDeploymentConfigMinimumHealthyHostsPropertyToTerraform(this._minimumHealthyHosts.internalValue),
            traffic_routing_config: ccDeploymentConfigTrafficRoutingConfigPropertyToTerraform(this._trafficRoutingConfig.internalValue),
            zonal_config: ccDeploymentConfigZonalConfigPropertyToTerraform(this._zonalConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compute_platform: {
                value: cdktn.stringToHclTerraform(this._computePlatform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_config_name: {
                value: cdktn.stringToHclTerraform(this._deploymentConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            minimum_healthy_hosts: {
                value: ccDeploymentConfigMinimumHealthyHostsPropertyToHclTerraform(this._minimumHealthyHosts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentConfig.MinimumHealthyHostsProperty",
            },
            traffic_routing_config: {
                value: ccDeploymentConfigTrafficRoutingConfigPropertyToHclTerraform(this._trafficRoutingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentConfig.TrafficRoutingConfigProperty",
            },
            zonal_config: {
                value: ccDeploymentConfigZonalConfigPropertyToHclTerraform(this._zonalConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeploymentConfig.ZonalConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeploymentConfigMinimumHealthyHostsPropertyToTerraform(struct?: CcDeploymentConfig.MinimumHealthyHostsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccDeploymentConfigMinimumHealthyHostsPropertyToHclTerraform(struct?: CcDeploymentConfig.MinimumHealthyHostsProperty | cdktn.IResolvable): any {
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


export function ccDeploymentConfigTimeBasedCanaryPropertyToTerraform(struct?: CcDeploymentConfig.TimeBasedCanaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        canary_interval: cdktn.numberToTerraform(struct!.canaryInterval),
        canary_percentage: cdktn.numberToTerraform(struct!.canaryPercentage),
    }
}


export function ccDeploymentConfigTimeBasedCanaryPropertyToHclTerraform(struct?: CcDeploymentConfig.TimeBasedCanaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        canary_interval: {
            value: cdktn.numberToHclTerraform(struct!.canaryInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        canary_percentage: {
            value: cdktn.numberToHclTerraform(struct!.canaryPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentConfigTimeBasedLinearPropertyToTerraform(struct?: CcDeploymentConfig.TimeBasedLinearProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        linear_interval: cdktn.numberToTerraform(struct!.linearInterval),
        linear_percentage: cdktn.numberToTerraform(struct!.linearPercentage),
    }
}


export function ccDeploymentConfigTimeBasedLinearPropertyToHclTerraform(struct?: CcDeploymentConfig.TimeBasedLinearProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        linear_interval: {
            value: cdktn.numberToHclTerraform(struct!.linearInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        linear_percentage: {
            value: cdktn.numberToHclTerraform(struct!.linearPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentConfigTrafficRoutingConfigPropertyToTerraform(struct?: CcDeploymentConfig.TrafficRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        time_based_canary: ccDeploymentConfigTimeBasedCanaryPropertyToTerraform(struct!.timeBasedCanary),
        time_based_linear: ccDeploymentConfigTimeBasedLinearPropertyToTerraform(struct!.timeBasedLinear),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDeploymentConfigTrafficRoutingConfigPropertyToHclTerraform(struct?: CcDeploymentConfig.TrafficRoutingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        time_based_canary: {
            value: ccDeploymentConfigTimeBasedCanaryPropertyToHclTerraform(struct!.timeBasedCanary),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeBasedCanaryProperty",
        },
        time_based_linear: {
            value: ccDeploymentConfigTimeBasedLinearPropertyToHclTerraform(struct!.timeBasedLinear),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeBasedLinearProperty",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeploymentConfigMinimumHealthyHostsPerZonePropertyToTerraform(struct?: CcDeploymentConfig.MinimumHealthyHostsPerZoneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccDeploymentConfigMinimumHealthyHostsPerZonePropertyToHclTerraform(struct?: CcDeploymentConfig.MinimumHealthyHostsPerZoneProperty | cdktn.IResolvable): any {
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


export function ccDeploymentConfigZonalConfigPropertyToTerraform(struct?: CcDeploymentConfig.ZonalConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        first_zone_monitor_duration_in_seconds: cdktn.numberToTerraform(struct!.firstZoneMonitorDurationInSeconds),
        minimum_healthy_hosts_per_zone: ccDeploymentConfigMinimumHealthyHostsPerZonePropertyToTerraform(struct!.minimumHealthyHostsPerZone),
        monitor_duration_in_seconds: cdktn.numberToTerraform(struct!.monitorDurationInSeconds),
    }
}


export function ccDeploymentConfigZonalConfigPropertyToHclTerraform(struct?: CcDeploymentConfig.ZonalConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        first_zone_monitor_duration_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.firstZoneMonitorDurationInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_healthy_hosts_per_zone: {
            value: ccDeploymentConfigMinimumHealthyHostsPerZonePropertyToHclTerraform(struct!.minimumHealthyHostsPerZone),
            isBlock: true,
            type: "struct",
            storageClassType: "MinimumHealthyHostsPerZoneProperty",
        },
        monitor_duration_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.monitorDurationInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDeploymentConfig {
export interface MinimumHealthyHostsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#type CcDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#value CcDeploymentConfig#value}
    */
    readonly value?: number;
}
export class MinimumHealthyHostsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MinimumHealthyHostsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MinimumHealthyHostsProperty | cdktn.IResolvable | undefined) {
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
export interface TimeBasedCanaryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#canary_interval CcDeploymentConfig#canary_interval}
    */
    readonly canaryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#canary_percentage CcDeploymentConfig#canary_percentage}
    */
    readonly canaryPercentage?: number;
}
export class TimeBasedCanaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeBasedCanaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._canaryInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.canaryInterval = this._canaryInterval;
        }
        if (this._canaryPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.canaryPercentage = this._canaryPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeBasedCanaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._canaryInterval = undefined;
            this._canaryPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._canaryInterval = value.canaryInterval;
            this._canaryPercentage = value.canaryPercentage;
        }
    }

    // canary_interval - computed: true, optional: true, required: false
    private _canaryInterval?: number; 
    public get canaryInterval() {
        return this.getNumberAttribute('canary_interval');
    }
    public set canaryInterval(value: number) {
        this._canaryInterval = value;
    }
    public resetCanaryInterval() {
        this._canaryInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canaryIntervalInput() {
        return this._canaryInterval;
    }

    // canary_percentage - computed: true, optional: true, required: false
    private _canaryPercentage?: number; 
    public get canaryPercentage() {
        return this.getNumberAttribute('canary_percentage');
    }
    public set canaryPercentage(value: number) {
        this._canaryPercentage = value;
    }
    public resetCanaryPercentage() {
        this._canaryPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canaryPercentageInput() {
        return this._canaryPercentage;
    }
}
export interface TimeBasedLinearProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#linear_interval CcDeploymentConfig#linear_interval}
    */
    readonly linearInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#linear_percentage CcDeploymentConfig#linear_percentage}
    */
    readonly linearPercentage?: number;
}
export class TimeBasedLinearPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeBasedLinearProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._linearInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.linearInterval = this._linearInterval;
        }
        if (this._linearPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.linearPercentage = this._linearPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeBasedLinearProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._linearInterval = undefined;
            this._linearPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._linearInterval = value.linearInterval;
            this._linearPercentage = value.linearPercentage;
        }
    }

    // linear_interval - computed: true, optional: true, required: false
    private _linearInterval?: number; 
    public get linearInterval() {
        return this.getNumberAttribute('linear_interval');
    }
    public set linearInterval(value: number) {
        this._linearInterval = value;
    }
    public resetLinearInterval() {
        this._linearInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linearIntervalInput() {
        return this._linearInterval;
    }

    // linear_percentage - computed: true, optional: true, required: false
    private _linearPercentage?: number; 
    public get linearPercentage() {
        return this.getNumberAttribute('linear_percentage');
    }
    public set linearPercentage(value: number) {
        this._linearPercentage = value;
    }
    public resetLinearPercentage() {
        this._linearPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linearPercentageInput() {
        return this._linearPercentage;
    }
}
export interface TrafficRoutingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#time_based_canary CcDeploymentConfig#time_based_canary}
    */
    readonly timeBasedCanary?: TimeBasedCanaryProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#time_based_linear CcDeploymentConfig#time_based_linear}
    */
    readonly timeBasedLinear?: TimeBasedLinearProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#type CcDeploymentConfig#type}
    */
    readonly type?: string;
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
        if (this._timeBasedCanary?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeBasedCanary = this._timeBasedCanary?.internalValue;
        }
        if (this._timeBasedLinear?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeBasedLinear = this._timeBasedLinear?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrafficRoutingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timeBasedCanary.internalValue = undefined;
            this._timeBasedLinear.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timeBasedCanary.internalValue = value.timeBasedCanary;
            this._timeBasedLinear.internalValue = value.timeBasedLinear;
            this._type = value.type;
        }
    }

    // time_based_canary - computed: true, optional: true, required: false
    private _timeBasedCanary = new TimeBasedCanaryPropertyOutputReference(this, "time_based_canary");
    public get timeBasedCanary() {
        return this._timeBasedCanary;
    }
    public putTimeBasedCanary(value: TimeBasedCanaryProperty) {
        this._timeBasedCanary.internalValue = value;
    }
    public resetTimeBasedCanary() {
        this._timeBasedCanary.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeBasedCanaryInput() {
        return this._timeBasedCanary.internalValue;
    }

    // time_based_linear - computed: true, optional: true, required: false
    private _timeBasedLinear = new TimeBasedLinearPropertyOutputReference(this, "time_based_linear");
    public get timeBasedLinear() {
        return this._timeBasedLinear;
    }
    public putTimeBasedLinear(value: TimeBasedLinearProperty) {
        this._timeBasedLinear.internalValue = value;
    }
    public resetTimeBasedLinear() {
        this._timeBasedLinear.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeBasedLinearInput() {
        return this._timeBasedLinear.internalValue;
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
}
export interface MinimumHealthyHostsPerZoneProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#type CcDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#value CcDeploymentConfig#value}
    */
    readonly value?: number;
}
export class MinimumHealthyHostsPerZonePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MinimumHealthyHostsPerZoneProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MinimumHealthyHostsPerZoneProperty | cdktn.IResolvable | undefined) {
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
export interface ZonalConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CcDeploymentConfig#first_zone_monitor_duration_in_seconds}
    */
    readonly firstZoneMonitorDurationInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CcDeploymentConfig#minimum_healthy_hosts_per_zone}
    */
    readonly minimumHealthyHostsPerZone?: MinimumHealthyHostsPerZoneProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CcDeploymentConfig#monitor_duration_in_seconds}
    */
    readonly monitorDurationInSeconds?: number;
}
export class ZonalConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ZonalConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firstZoneMonitorDurationInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstZoneMonitorDurationInSeconds = this._firstZoneMonitorDurationInSeconds;
        }
        if (this._minimumHealthyHostsPerZone?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumHealthyHostsPerZone = this._minimumHealthyHostsPerZone?.internalValue;
        }
        if (this._monitorDurationInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitorDurationInSeconds = this._monitorDurationInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ZonalConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firstZoneMonitorDurationInSeconds = undefined;
            this._minimumHealthyHostsPerZone.internalValue = undefined;
            this._monitorDurationInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firstZoneMonitorDurationInSeconds = value.firstZoneMonitorDurationInSeconds;
            this._minimumHealthyHostsPerZone.internalValue = value.minimumHealthyHostsPerZone;
            this._monitorDurationInSeconds = value.monitorDurationInSeconds;
        }
    }

    // first_zone_monitor_duration_in_seconds - computed: true, optional: true, required: false
    private _firstZoneMonitorDurationInSeconds?: number; 
    public get firstZoneMonitorDurationInSeconds() {
        return this.getNumberAttribute('first_zone_monitor_duration_in_seconds');
    }
    public set firstZoneMonitorDurationInSeconds(value: number) {
        this._firstZoneMonitorDurationInSeconds = value;
    }
    public resetFirstZoneMonitorDurationInSeconds() {
        this._firstZoneMonitorDurationInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstZoneMonitorDurationInSecondsInput() {
        return this._firstZoneMonitorDurationInSeconds;
    }

    // minimum_healthy_hosts_per_zone - computed: true, optional: true, required: false
    private _minimumHealthyHostsPerZone = new MinimumHealthyHostsPerZonePropertyOutputReference(this, "minimum_healthy_hosts_per_zone");
    public get minimumHealthyHostsPerZone() {
        return this._minimumHealthyHostsPerZone;
    }
    public putMinimumHealthyHostsPerZone(value: MinimumHealthyHostsPerZoneProperty) {
        this._minimumHealthyHostsPerZone.internalValue = value;
    }
    public resetMinimumHealthyHostsPerZone() {
        this._minimumHealthyHostsPerZone.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyHostsPerZoneInput() {
        return this._minimumHealthyHostsPerZone.internalValue;
    }

    // monitor_duration_in_seconds - computed: true, optional: true, required: false
    private _monitorDurationInSeconds?: number; 
    public get monitorDurationInSeconds() {
        return this.getNumberAttribute('monitor_duration_in_seconds');
    }
    public set monitorDurationInSeconds(value: number) {
        this._monitorDurationInSeconds = value;
    }
    public resetMonitorDurationInSeconds() {
        this._monitorDurationInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorDurationInSecondsInput() {
        return this._monitorDurationInSeconds;
    }
}
}
