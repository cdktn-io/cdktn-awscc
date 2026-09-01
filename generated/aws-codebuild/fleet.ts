// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFleetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#base_capacity CcFleet#base_capacity}
    */
    readonly baseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_configuration CcFleet#compute_configuration}
    */
    readonly computeConfiguration?: CcFleet.ComputeConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#compute_type CcFleet#compute_type}
    */
    readonly computeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#environment_type CcFleet#environment_type}
    */
    readonly environmentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CcFleet#fleet_proxy_configuration}
    */
    readonly fleetProxyConfiguration?: CcFleet.ProxyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_service_role CcFleet#fleet_service_role}
    */
    readonly fleetServiceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#fleet_vpc_config CcFleet#fleet_vpc_config}
    */
    readonly fleetVpcConfig?: CcFleet.VpcConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#image_id CcFleet#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#name CcFleet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#overflow_behavior CcFleet#overflow_behavior}
    */
    readonly overflowBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_configuration CcFleet#scaling_configuration}
    */
    readonly scalingConfiguration?: CcFleet.ScalingConfigurationInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#tags CcFleet#tags}
    */
    readonly tags?: CcFleet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet awscc_codebuild_fleet}
*/
export class CcFleet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codebuild_fleet";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFleet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFleet to import
    * @param importFromId The id of the existing CcFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFleet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codebuild_fleet", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet awscc_codebuild_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFleetProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcFleetProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_codebuild_fleet',
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
        this._baseCapacity = config.baseCapacity;
        this._computeConfiguration.internalValue = config.computeConfiguration;
        this._computeType = config.computeType;
        this._environmentType = config.environmentType;
        this._fleetProxyConfiguration.internalValue = config.fleetProxyConfiguration;
        this._fleetServiceRole = config.fleetServiceRole;
        this._fleetVpcConfig.internalValue = config.fleetVpcConfig;
        this._imageId = config.imageId;
        this._name = config.name;
        this._overflowBehavior = config.overflowBehavior;
        this._scalingConfiguration.internalValue = config.scalingConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // base_capacity - computed: true, optional: true, required: false
    private _baseCapacity?: number; 
    public get baseCapacity() {
        return this.getNumberAttribute('base_capacity');
    }
    public set baseCapacity(value: number) {
        this._baseCapacity = value;
    }
    public resetBaseCapacity() {
        this._baseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseCapacityInput() {
        return this._baseCapacity;
    }

    // compute_configuration - computed: true, optional: true, required: false
    private _computeConfiguration = new CcFleet.ComputeConfigurationPropertyOutputReference(this, "compute_configuration");
    public get computeConfiguration() {
        return this._computeConfiguration;
    }
    public putComputeConfiguration(value: CcFleet.ComputeConfigurationProperty) {
        this._computeConfiguration.internalValue = value;
    }
    public resetComputeConfiguration() {
        this._computeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeConfigurationInput() {
        return this._computeConfiguration.internalValue;
    }

    // compute_type - computed: true, optional: true, required: false
    private _computeType?: string; 
    public get computeType() {
        return this.getStringAttribute('compute_type');
    }
    public set computeType(value: string) {
        this._computeType = value;
    }
    public resetComputeType() {
        this._computeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeTypeInput() {
        return this._computeType;
    }

    // environment_type - computed: true, optional: true, required: false
    private _environmentType?: string; 
    public get environmentType() {
        return this.getStringAttribute('environment_type');
    }
    public set environmentType(value: string) {
        this._environmentType = value;
    }
    public resetEnvironmentType() {
        this._environmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentTypeInput() {
        return this._environmentType;
    }

    // fleet_proxy_configuration - computed: true, optional: true, required: false
    private _fleetProxyConfiguration = new CcFleet.ProxyConfigurationPropertyOutputReference(this, "fleet_proxy_configuration");
    public get fleetProxyConfiguration() {
        return this._fleetProxyConfiguration;
    }
    public putFleetProxyConfiguration(value: CcFleet.ProxyConfigurationProperty) {
        this._fleetProxyConfiguration.internalValue = value;
    }
    public resetFleetProxyConfiguration() {
        this._fleetProxyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetProxyConfigurationInput() {
        return this._fleetProxyConfiguration.internalValue;
    }

    // fleet_service_role - computed: true, optional: true, required: false
    private _fleetServiceRole?: string; 
    public get fleetServiceRole() {
        return this.getStringAttribute('fleet_service_role');
    }
    public set fleetServiceRole(value: string) {
        this._fleetServiceRole = value;
    }
    public resetFleetServiceRole() {
        this._fleetServiceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetServiceRoleInput() {
        return this._fleetServiceRole;
    }

    // fleet_vpc_config - computed: true, optional: true, required: false
    private _fleetVpcConfig = new CcFleet.VpcConfigPropertyOutputReference(this, "fleet_vpc_config");
    public get fleetVpcConfig() {
        return this._fleetVpcConfig;
    }
    public putFleetVpcConfig(value: CcFleet.VpcConfigProperty) {
        this._fleetVpcConfig.internalValue = value;
    }
    public resetFleetVpcConfig() {
        this._fleetVpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetVpcConfigInput() {
        return this._fleetVpcConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_id - computed: true, optional: true, required: false
    private _imageId?: string; 
    public get imageId() {
        return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
        this._imageId = value;
    }
    public resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
        return this._imageId;
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

    // overflow_behavior - computed: true, optional: true, required: false
    private _overflowBehavior?: string; 
    public get overflowBehavior() {
        return this.getStringAttribute('overflow_behavior');
    }
    public set overflowBehavior(value: string) {
        this._overflowBehavior = value;
    }
    public resetOverflowBehavior() {
        this._overflowBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overflowBehaviorInput() {
        return this._overflowBehavior;
    }

    // scaling_configuration - computed: true, optional: true, required: false
    private _scalingConfiguration = new CcFleet.ScalingConfigurationInputPropertyOutputReference(this, "scaling_configuration");
    public get scalingConfiguration() {
        return this._scalingConfiguration;
    }
    public putScalingConfiguration(value: CcFleet.ScalingConfigurationInputProperty) {
        this._scalingConfiguration.internalValue = value;
    }
    public resetScalingConfiguration() {
        this._scalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigurationInput() {
        return this._scalingConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFleet.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFleet.TagProperty[] | cdktn.IResolvable) {
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
            base_capacity: cdktn.numberToTerraform(this._baseCapacity),
            compute_configuration: ccFleetComputeConfigurationPropertyToTerraform(this._computeConfiguration.internalValue),
            compute_type: cdktn.stringToTerraform(this._computeType),
            environment_type: cdktn.stringToTerraform(this._environmentType),
            fleet_proxy_configuration: ccFleetProxyConfigurationPropertyToTerraform(this._fleetProxyConfiguration.internalValue),
            fleet_service_role: cdktn.stringToTerraform(this._fleetServiceRole),
            fleet_vpc_config: ccFleetVpcConfigPropertyToTerraform(this._fleetVpcConfig.internalValue),
            image_id: cdktn.stringToTerraform(this._imageId),
            name: cdktn.stringToTerraform(this._name),
            overflow_behavior: cdktn.stringToTerraform(this._overflowBehavior),
            scaling_configuration: ccFleetScalingConfigurationInputPropertyToTerraform(this._scalingConfiguration.internalValue),
            tags: cdktn.listMapper(ccFleetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            base_capacity: {
                value: cdktn.numberToHclTerraform(this._baseCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            compute_configuration: {
                value: ccFleetComputeConfigurationPropertyToHclTerraform(this._computeConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.ComputeConfigurationProperty",
            },
            compute_type: {
                value: cdktn.stringToHclTerraform(this._computeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_type: {
                value: cdktn.stringToHclTerraform(this._environmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_proxy_configuration: {
                value: ccFleetProxyConfigurationPropertyToHclTerraform(this._fleetProxyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.ProxyConfigurationProperty",
            },
            fleet_service_role: {
                value: cdktn.stringToHclTerraform(this._fleetServiceRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_vpc_config: {
                value: ccFleetVpcConfigPropertyToHclTerraform(this._fleetVpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.VpcConfigProperty",
            },
            image_id: {
                value: cdktn.stringToHclTerraform(this._imageId),
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
            overflow_behavior: {
                value: cdktn.stringToHclTerraform(this._overflowBehavior),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scaling_configuration: {
                value: ccFleetScalingConfigurationInputPropertyToHclTerraform(this._scalingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleet.ScalingConfigurationInputProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFleetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFleet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFleetComputeConfigurationPropertyToTerraform(struct?: CcFleet.ComputeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disk: cdktn.numberToTerraform(struct!.disk),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        machine_type: cdktn.stringToTerraform(struct!.machineType),
        memory: cdktn.numberToTerraform(struct!.memory),
        v_cpu: cdktn.numberToTerraform(struct!.vCpu),
    }
}


export function ccFleetComputeConfigurationPropertyToHclTerraform(struct?: CcFleet.ComputeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disk: {
            value: cdktn.numberToHclTerraform(struct!.disk),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        machine_type: {
            value: cdktn.stringToHclTerraform(struct!.machineType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktn.numberToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        v_cpu: {
            value: cdktn.numberToHclTerraform(struct!.vCpu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetFleetProxyRulePropertyToTerraform(struct?: CcFleet.FleetProxyRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        effect: cdktn.stringToTerraform(struct!.effect),
        entities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entities),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccFleetFleetProxyRulePropertyToHclTerraform(struct?: CcFleet.FleetProxyRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        effect: {
            value: cdktn.stringToHclTerraform(struct!.effect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entities: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entities),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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


export function ccFleetProxyConfigurationPropertyToTerraform(struct?: CcFleet.ProxyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_behavior: cdktn.stringToTerraform(struct!.defaultBehavior),
        ordered_proxy_rules: cdktn.listMapper(ccFleetFleetProxyRulePropertyToTerraform, false)(struct!.orderedProxyRules),
    }
}


export function ccFleetProxyConfigurationPropertyToHclTerraform(struct?: CcFleet.ProxyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_behavior: {
            value: cdktn.stringToHclTerraform(struct!.defaultBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ordered_proxy_rules: {
            value: cdktn.listMapperHcl(ccFleetFleetProxyRulePropertyToHclTerraform, false)(struct!.orderedProxyRules),
            isBlock: true,
            type: "list",
            storageClassType: "FleetProxyRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetVpcConfigPropertyToTerraform(struct?: CcFleet.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccFleetVpcConfigPropertyToHclTerraform(struct?: CcFleet.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetTargetTrackingScalingConfigurationPropertyToTerraform(struct?: CcFleet.TargetTrackingScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_type: cdktn.stringToTerraform(struct!.metricType),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccFleetTargetTrackingScalingConfigurationPropertyToHclTerraform(struct?: CcFleet.TargetTrackingScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_type: {
            value: cdktn.stringToHclTerraform(struct!.metricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetScalingConfigurationInputPropertyToTerraform(struct?: CcFleet.ScalingConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        scaling_type: cdktn.stringToTerraform(struct!.scalingType),
        target_tracking_scaling_configs: cdktn.listMapper(ccFleetTargetTrackingScalingConfigurationPropertyToTerraform, false)(struct!.targetTrackingScalingConfigs),
    }
}


export function ccFleetScalingConfigurationInputPropertyToHclTerraform(struct?: CcFleet.ScalingConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_type: {
            value: cdktn.stringToHclTerraform(struct!.scalingType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_tracking_scaling_configs: {
            value: cdktn.listMapperHcl(ccFleetTargetTrackingScalingConfigurationPropertyToHclTerraform, false)(struct!.targetTrackingScalingConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "TargetTrackingScalingConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFleetTagPropertyToTerraform(struct?: CcFleet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFleetTagPropertyToHclTerraform(struct?: CcFleet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFleet {
export interface ComputeConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#disk CcFleet#disk}
    */
    readonly disk?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#instance_type CcFleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#machine_type CcFleet#machine_type}
    */
    readonly machineType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#memory CcFleet#memory}
    */
    readonly memory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#v_cpu CcFleet#v_cpu}
    */
    readonly vCpu?: number;
}
export class ComputeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComputeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disk !== undefined) {
            hasAnyValues = true;
            internalValueResult.disk = this._disk;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._machineType !== undefined) {
            hasAnyValues = true;
            internalValueResult.machineType = this._machineType;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        if (this._vCpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCpu = this._vCpu;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disk = undefined;
            this._instanceType = undefined;
            this._machineType = undefined;
            this._memory = undefined;
            this._vCpu = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disk = value.disk;
            this._instanceType = value.instanceType;
            this._machineType = value.machineType;
            this._memory = value.memory;
            this._vCpu = value.vCpu;
        }
    }

    // disk - computed: true, optional: true, required: false
    private _disk?: number; 
    public get disk() {
        return this.getNumberAttribute('disk');
    }
    public set disk(value: number) {
        this._disk = value;
    }
    public resetDisk() {
        this._disk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskInput() {
        return this._disk;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // machine_type - computed: true, optional: true, required: false
    private _machineType?: string; 
    public get machineType() {
        return this.getStringAttribute('machine_type');
    }
    public set machineType(value: string) {
        this._machineType = value;
    }
    public resetMachineType() {
        this._machineType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get machineTypeInput() {
        return this._machineType;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: number; 
    public get memory() {
        return this.getNumberAttribute('memory');
    }
    public set memory(value: number) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }

    // v_cpu - computed: true, optional: true, required: false
    private _vCpu?: number; 
    public get vCpu() {
        return this.getNumberAttribute('v_cpu');
    }
    public set vCpu(value: number) {
        this._vCpu = value;
    }
    public resetVCpu() {
        this._vCpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCpuInput() {
        return this._vCpu;
    }
}
export interface FleetProxyRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#effect CcFleet#effect}
    */
    readonly effect?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#entities CcFleet#entities}
    */
    readonly entities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#type CcFleet#type}
    */
    readonly type?: string;
}
export class FleetProxyRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FleetProxyRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._effect !== undefined) {
            hasAnyValues = true;
            internalValueResult.effect = this._effect;
        }
        if (this._entities !== undefined) {
            hasAnyValues = true;
            internalValueResult.entities = this._entities;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FleetProxyRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._effect = undefined;
            this._entities = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._effect = value.effect;
            this._entities = value.entities;
            this._type = value.type;
        }
    }

    // effect - computed: true, optional: true, required: false
    private _effect?: string; 
    public get effect() {
        return this.getStringAttribute('effect');
    }
    public set effect(value: string) {
        this._effect = value;
    }
    public resetEffect() {
        this._effect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get effectInput() {
        return this._effect;
    }

    // entities - computed: true, optional: true, required: false
    private _entities?: string[]; 
    public get entities() {
        return this.getListAttribute('entities');
    }
    public set entities(value: string[]) {
        this._entities = value;
    }
    public resetEntities() {
        this._entities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entitiesInput() {
        return this._entities;
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

export class FleetProxyRulePropertyList extends cdktn.ComplexList {
    public internalValue? : FleetProxyRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): FleetProxyRulePropertyOutputReference {
        return new FleetProxyRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProxyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#default_behavior CcFleet#default_behavior}
    */
    readonly defaultBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#ordered_proxy_rules CcFleet#ordered_proxy_rules}
    */
    readonly orderedProxyRules?: FleetProxyRuleProperty[] | cdktn.IResolvable;
}
export class ProxyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProxyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultBehavior = this._defaultBehavior;
        }
        if (this._orderedProxyRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.orderedProxyRules = this._orderedProxyRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProxyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultBehavior = undefined;
            this._orderedProxyRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultBehavior = value.defaultBehavior;
            this._orderedProxyRules.internalValue = value.orderedProxyRules;
        }
    }

    // default_behavior - computed: true, optional: true, required: false
    private _defaultBehavior?: string; 
    public get defaultBehavior() {
        return this.getStringAttribute('default_behavior');
    }
    public set defaultBehavior(value: string) {
        this._defaultBehavior = value;
    }
    public resetDefaultBehavior() {
        this._defaultBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultBehaviorInput() {
        return this._defaultBehavior;
    }

    // ordered_proxy_rules - computed: true, optional: true, required: false
    private _orderedProxyRules = new FleetProxyRulePropertyList(this, "ordered_proxy_rules", false);
    public get orderedProxyRules() {
        return this._orderedProxyRules;
    }
    public putOrderedProxyRules(value: FleetProxyRuleProperty[] | cdktn.IResolvable) {
        this._orderedProxyRules.internalValue = value;
    }
    public resetOrderedProxyRules() {
        this._orderedProxyRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderedProxyRulesInput() {
        return this._orderedProxyRules.internalValue;
    }
}
export interface VpcConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#security_group_ids CcFleet#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#subnets CcFleet#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#vpc_id CcFleet#vpc_id}
    */
    readonly vpcId?: string;
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
            this._vpcId = value.vpcId;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}
export interface TargetTrackingScalingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#metric_type CcFleet#metric_type}
    */
    readonly metricType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#target_value CcFleet#target_value}
    */
    readonly targetValue?: number;
}
export class TargetTrackingScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingScalingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricType = this._metricType;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricType = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricType = value.metricType;
            this._targetValue = value.targetValue;
        }
    }

    // metric_type - computed: true, optional: true, required: false
    private _metricType?: string; 
    public get metricType() {
        return this.getStringAttribute('metric_type');
    }
    public set metricType(value: string) {
        this._metricType = value;
    }
    public resetMetricType() {
        this._metricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricTypeInput() {
        return this._metricType;
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}

export class TargetTrackingScalingConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingScalingConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingScalingConfigurationPropertyOutputReference {
        return new TargetTrackingScalingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScalingConfigurationInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#max_capacity CcFleet#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#scaling_type CcFleet#scaling_type}
    */
    readonly scalingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CcFleet#target_tracking_scaling_configs}
    */
    readonly targetTrackingScalingConfigs?: TargetTrackingScalingConfigurationProperty[] | cdktn.IResolvable;
}
export class ScalingConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScalingConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._scalingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingType = this._scalingType;
        }
        if (this._targetTrackingScalingConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingConfigs = this._targetTrackingScalingConfigs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._scalingType = undefined;
            this._targetTrackingScalingConfigs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacity = value.maxCapacity;
            this._scalingType = value.scalingType;
            this._targetTrackingScalingConfigs.internalValue = value.targetTrackingScalingConfigs;
        }
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // scaling_type - computed: true, optional: true, required: false
    private _scalingType?: string; 
    public get scalingType() {
        return this.getStringAttribute('scaling_type');
    }
    public set scalingType(value: string) {
        this._scalingType = value;
    }
    public resetScalingType() {
        this._scalingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingTypeInput() {
        return this._scalingType;
    }

    // target_tracking_scaling_configs - computed: true, optional: true, required: false
    private _targetTrackingScalingConfigs = new TargetTrackingScalingConfigurationPropertyList(this, "target_tracking_scaling_configs", false);
    public get targetTrackingScalingConfigs() {
        return this._targetTrackingScalingConfigs;
    }
    public putTargetTrackingScalingConfigs(value: TargetTrackingScalingConfigurationProperty[] | cdktn.IResolvable) {
        this._targetTrackingScalingConfigs.internalValue = value;
    }
    public resetTargetTrackingScalingConfigs() {
        this._targetTrackingScalingConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingConfigsInput() {
        return this._targetTrackingScalingConfigs.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#key CcFleet#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codebuild_fleet#value CcFleet#value}
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
